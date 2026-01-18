import { GoogleGenerativeAI } from "@google/generative-ai";

export interface ToolCall {
  name: string;
  args: {
    target?: string;
    value?: string;
    section?: string;
  };
}

// Define available tools for the AI
const tools = [
  {
    name: "scroll_to_section",
    description:
      "Scroll to a specific section of the page. Use this when user wants to navigate or see a specific part of the portfolio.",
    parameters: {
      type: "object",
      properties: {
        section: {
          type: "string",
          description:
            "The section ID to scroll to. Options: hero, about, skills, projects, contact",
          enum: ["hero", "about", "skills", "projects", "contact"],
        },
      },
      required: ["section"],
    },
  },
  {
    name: "highlight_element",
    description:
      "Highlight a specific element on the page. Use this to draw attention to specific content.",
    parameters: {
      type: "object",
      properties: {
        target: {
          type: "string",
          description:
            'CSS selector for the element to highlight. Examples: "#projects", "h2", ".project-card"',
        },
      },
      required: ["target"],
    },
  },
  {
    name: "click_element",
    description: "Click a button or link on the page.",
    parameters: {
      type: "object",
      properties: {
        target: {
          type: "string",
          description:
            'CSS selector for the element to click. Examples: "button", "a[href=\'#contact\']"',
        },
      },
      required: ["target"],
    },
  },
  {
    name: "fill_form_field",
    description: "Fill a form input field with a value.",
    parameters: {
      type: "object",
      properties: {
        target: {
          type: "string",
          description:
            'CSS selector for the input field. Examples: "#name", "#email", "#message"',
        },
        value: {
          type: "string",
          description: "The value to fill in the field",
        },
      },
      required: ["target", "value"],
    },
  },
  {
    name: "focus_on_element",
    description:
      "Focus on a specific element or section, bringing it into view with emphasis.",
    parameters: {
      type: "object",
      properties: {
        target: {
          type: "string",
          description: "CSS selector for the element to focus on",
        },
      },
      required: ["target"],
    },
  },
];

// Initialize Gemini AI
export function initGemini(apiKey: string) {
  return new GoogleGenerativeAI(apiKey);
}

// Create chat prompt with context
export function createChatPrompt(
  userMessage: string,
  pageContent: string,
  conversationHistory: Array<{ role: string; content: string }>,
): string {
  const history = conversationHistory
    .map(
      (msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`,
    )
    .join("\n");

  return `You are an AI co-browsing assistant for a portfolio website. You can help users navigate, answer questions, and perform actions on the page.

CURRENT PAGE CONTENT:
${pageContent}

AVAILABLE TOOLS:
You have access to these tools to interact with the page:
1. scroll_to_section - Navigate to different sections (hero, about, skills, projects, contact)
2. highlight_element - Highlight specific elements using CSS selectors
3. click_element - Click buttons or links
4. fill_form_field - Fill form inputs (name, email, message fields available in contact section)
5. focus_on_element - Focus on specific content

CONVERSATION HISTORY:
${history}

USER REQUEST: ${userMessage}

INSTRUCTIONS:
1. Analyze the user's request and the page content
2. Provide a conversational, helpful response
3. If the user asks to navigate or interact with the page, determine which tool(s) to use
4. Be specific about what actions you're taking
5. If information is not available on the page, politely say so

Respond with a JSON object in this exact format:
{
  "message": "Your conversational response to the user",
  "tools": [
    {
      "name": "tool_name",
      "args": {
        "target": "selector or section",
        "value": "value if needed"
      }
    }
  ]
}

If no tools are needed, return an empty tools array.`;
}

// Parse AI response and extract tools
export function parseAIResponse(response: string): {
  message: string;
  tools: ToolCall[];
} {
  try {
    // Try to extract JSON from markdown code blocks if present
    const jsonMatch =
      response.match(/```json\n([\s\S]*?)\n```/) ||
      response.match(/```\n([\s\S]*?)\n```/);
    const jsonString = jsonMatch ? jsonMatch[1] : response;

    const parsed = JSON.parse(jsonString);
    return {
      message: parsed.message || response,
      tools: parsed.tools || [],
    };
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    // If parsing fails, return the raw response
    return {
      message: response,
      tools: [],
    };
  }
}

// Convert tool calls to actions
function inferSectionFromText(text?: string): string | undefined {
  if (!text) return undefined;
  const lower = text.toLowerCase();

  if (lower.includes("project")) return "projects";
  if (lower.includes("experience") || lower.includes("about")) return "about";
  if (lower.includes("skill")) return "skills";
  if (
    lower.includes("contact") ||
    lower.includes("email") ||
    lower.includes("form")
  )
    return "contact";
  if (lower.includes("hero") || lower.includes("home") || lower.includes("top"))
    return "hero";

  return undefined;
}

function resolveSection(
  tool: ToolCall,
  userMessage?: string,
): string | undefined {
  const sectionFromArgs = tool.args.section;
  if (sectionFromArgs) return sectionFromArgs;

  const target = tool.args.target;
  if (target?.startsWith("#")) return target.replace(/^#/, "");
  if (target) return inferSectionFromText(target);

  return inferSectionFromText(userMessage);
}

export function convertToolsToActions(
  tools: ToolCall[],
  userMessage?: string,
): Array<{
  type: "scroll" | "navigate" | "highlight" | "click" | "input" | "focus";
  target?: string;
  value?: string;
}> {
  return tools.map((tool) => {
    switch (tool.name) {
      case "scroll_to_section":
        const section = resolveSection(tool, userMessage);
        return {
          type: "scroll",
          target: section ? `#${section}` : "#hero",
        };
      case "highlight_element":
        return {
          type: "highlight",
          target: tool.args.target,
        };
      case "click_element":
        return {
          type: "click",
          target: tool.args.target,
        };
      case "fill_form_field":
        return {
          type: "input",
          target: tool.args.target,
          value: tool.args.value,
        };
      case "focus_on_element":
        return {
          type: "focus",
          target: tool.args.target,
        };
      default:
        return {
          type: "scroll",
          target: "#hero",
        };
    }
  });
}
