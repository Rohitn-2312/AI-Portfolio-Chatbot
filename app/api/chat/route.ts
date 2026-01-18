import { NextResponse } from "next/server";
import {
  initGemini,
  createChatPrompt,
  parseAIResponse,
  convertToolsToActions,
} from "@/app/lib/gemini";

async function listAvailableModels(apiKey: string) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  const res = await fetch(url, { method: "GET" });
  if (!res.ok) {
    throw new Error(`Failed to list models: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return (data.models || []) as Array<{
    name: string;
    supportedGenerationMethods?: string[];
  }>;
}

async function selectCompatibleModel(apiKey: string) {
  const preferredModels = [
    "models/gemini-1.5-flash",
    "models/gemini-1.5-pro",
    "models/gemini-pro",
    "models/gemini-1.0-pro",
  ];

  const models = await listAvailableModels(apiKey);
  const available = models
    .filter((model) =>
      model.supportedGenerationMethods?.includes("generateContent"),
    )
    .map((model) => model.name);

  const selected =
    preferredModels.find((name) => available.includes(name)) || available[0];

  if (!selected) {
    throw new Error(
      "No compatible Gemini models available for generateContent.",
    );
  }

  return selected;
}

export async function POST(request: Request) {
  try {
    const { message, pageContent, conversationHistory } = await request.json();

    // Check for API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 },
      );
    }

    // Initialize Gemini
    const genAI = initGemini(apiKey);
    const modelName = await selectCompatibleModel(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });

    // Create prompt
    const prompt = createChatPrompt(message, pageContent, conversationHistory);

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse response
    const { message: aiMessage, tools } = parseAIResponse(text);

    // Convert tools to actions
    const actions = convertToolsToActions(tools, message);

    return NextResponse.json({
      message: aiMessage,
      actions,
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return NextResponse.json(
      {
        error: error.message || "An error occurred processing your request",
        details: error.toString(),
      },
      { status: 500 },
    );
  }
}
