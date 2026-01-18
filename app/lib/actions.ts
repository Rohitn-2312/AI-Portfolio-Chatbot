export interface Action {
  type: "scroll" | "navigate" | "highlight" | "click" | "input" | "focus";
  target?: string;
  value?: string;
}

// Execute actions on the page
export async function executeAction(action: Action): Promise<void> {
  console.log("Executing action:", action);

  switch (action.type) {
    case "scroll":
      handleScroll(action.target);
      break;
    case "navigate":
      handleNavigate(action.target);
      break;
    case "highlight":
      handleHighlight(action.target);
      break;
    case "click":
      handleClick(action.target);
      break;
    case "input":
      handleInput(action.target, action.value);
      break;
    case "focus":
      handleFocus(action.target);
      break;
  }
}

// Scroll to a section
function handleScroll(target?: string) {
  if (!target) return;

  const element =
    document.querySelector(target) ||
    document.getElementById(target.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Navigate to a section
function handleNavigate(target?: string) {
  if (!target) return;

  const element =
    document.querySelector(target) ||
    document.getElementById(target.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// Highlight an element
function handleHighlight(target?: string) {
  if (!target) return;

  // Remove previous highlights
  document.querySelectorAll(".ai-highlight").forEach((el) => {
    el.classList.remove("ai-highlight");
  });

  const element = document.querySelector(target);
  if (element) {
    element.classList.add("ai-highlight");
    element.scrollIntoView({ behavior: "smooth", block: "center" });

    // Remove highlight after 5 seconds
    setTimeout(() => {
      element.classList.remove("ai-highlight");
    }, 5000);
  }
}

// Click an element
function handleClick(target?: string) {
  if (!target) return;

  const element = document.querySelector(target);
  if (element instanceof HTMLElement) {
    element.click();
  }
}

// Fill input field
function handleInput(target?: string, value?: string) {
  if (!target || !value) return;

  const element = document.querySelector(target);
  if (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement
  ) {
    element.value = value;
    element.focus();
    // Trigger input event for React
    element.dispatchEvent(new Event("input", { bubbles: true }));
  }
}

// Focus on a section
function handleFocus(target?: string) {
  if (!target) return;

  const element = document.querySelector(target);
  if (element) {
    // Scroll to element
    element.scrollIntoView({ behavior: "smooth", block: "center" });

    // Add focus styling temporarily
    element.classList.add("ai-focus");
    setTimeout(() => {
      element.classList.remove("ai-focus");
    }, 3000);
  }
}

// Extract content from the current page
export function extractPageContent(): string {
  const sections = document.querySelectorAll("section[data-section]");
  const content: string[] = [];

  sections.forEach((section) => {
    const sectionName = section.getAttribute("data-section") || "unknown";
    const sectionText = section.textContent?.trim() || "";

    // Limit text length to avoid token limits
    const truncatedText = sectionText.substring(0, 500);
    content.push(`[${sectionName.toUpperCase()} SECTION]\n${truncatedText}\n`);
  });

  return content.join("\n---\n\n");
}

// Get available sections
export function getAvailableSections(): string[] {
  const sections = document.querySelectorAll("section[data-section]");
  return Array.from(sections).map(
    (section) => section.getAttribute("data-section") || ""
  );
}

// Get form fields
export function getFormFields(): string[] {
  const form = document.querySelector("#contact-form");
  if (!form) return [];

  const fields: string[] = [];
  form.querySelectorAll("input, textarea").forEach((field) => {
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement
    ) {
      const id = field.id;
      const name = field.name;
      const placeholder = field.placeholder;
      fields.push(`${id || name} (${placeholder})`);
    }
  });

  return fields;
}
