# AI-Powered Co-Browsing Chatbot for Portfolio Website

An intelligent AI chatbot that acts as a co-browsing assistant for a portfolio website, built with Next.js and Google's Gemini API. The chatbot can understand website content, answer questions, and perform actions like scrolling, highlighting elements, clicking buttons, and filling forms.

![Demo](https://img.shields.io/badge/Status-Live-success)
![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## 🎯 Features

### Conversational AI

- Natural language understanding using Google Gemini API
- Contextual conversation with memory of previous interactions
- Intelligent question answering about portfolio content

### Co-Browsing Capabilities

- **Scroll & Navigate**: Automatically scroll to different sections
- **Highlight Elements**: Visually highlight specific content on the page
- **Click Actions**: Click buttons and links programmatically
- **Form Filling**: Fill input fields in the contact form
- **Focus Mode**: Bring attention to specific elements

### Dynamic Content Extraction

- Automatically extracts and understands page content
- No hard-coded content - fully dynamic
- Sections identified and parsed in real-time

### Tool-Based Architecture

- AI decides which actions to take based on user intent
- Clean separation between AI reasoning and action execution
- Extensible tool system for adding new capabilities

## 🏗️ Architecture

```
app/
├── components/
│   ├── Portfolio.tsx      # Main portfolio component with sections
│   └── ChatBot.tsx        # Chat interface component
├── lib/
│   ├── actions.ts         # Action handlers for co-browsing
│   └── gemini.ts          # Gemini API integration & tool definitions
├── api/
│   └── chat/
│       └── route.ts       # API route for chat processing
├── page.tsx               # Main page
├── layout.tsx             # Root layout
└── globals.css            # Global styles with animations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Google Gemini API key (free tier available)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai_powered_portfolio_chatbot.git
   cd ai_powered_portfolio_chatbot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```bash
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

   To get a Gemini API key:

   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key (free tier available)
   - Copy and paste it into your `.env.local` file

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Usage Examples

Try these commands with the chatbot:

### Navigation

- "Go to the projects section"
- "Show me the contact form"
- "Take me to the about section"

### Information

- "What projects are showcased here?"
- "Tell me about Alex's skills"
- "What technologies does Alex work with?"

### Interactions

- "Highlight the most recent project"
- "Fill the contact form with name John Doe and email john@example.com"
- "Click on the first project's demo button"
- "Focus on the skills section"

## 🛠️ Available Tools

The AI can use these tools to interact with the page:

1. **scroll_to_section** - Navigate to sections (hero, about, skills, projects, contact)
2. **highlight_element** - Highlight elements using CSS selectors
3. **click_element** - Click buttons or links
4. **fill_form_field** - Fill form inputs
5. **focus_on_element** - Focus on specific content

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable: `GEMINI_API_KEY`
   - Deploy!

### Environment Variables for Production

Make sure to add these in Vercel's project settings:

- `GEMINI_API_KEY` - Your Google Gemini API key

## 📁 Project Structure

### Components

**Portfolio.tsx**

- Contains all portfolio sections (Hero, About, Skills, Projects, Contact)
- Fully responsive design
- Data attributes for content extraction

**ChatBot.tsx**

- Chat interface with floating button
- Message history management
- Action execution and visualization

### Libraries

**actions.ts**

- Action execution handlers
- DOM manipulation functions
- Content extraction utilities

**gemini.ts**

- Gemini API initialization
- Tool definitions for AI
- Response parsing and tool conversion

### API Routes

**api/chat/route.ts**

- Handles chat requests
- Integrates with Gemini API
- Processes tool calls and returns actions

## 🎨 Customization

### Adding New Tools

1. Define tool in `app/lib/gemini.ts`:

   ```typescript
   {
     name: 'your_tool_name',
     description: 'What your tool does',
     parameters: {
       type: 'object',
       properties: {
         // your parameters
       },
       required: ['param1']
     }
   }
   ```

2. Add action handler in `app/lib/actions.ts`:

   ```typescript
   function handleYourAction(param: string) {
     // Your action logic
   }
   ```

3. Add case in `convertToolsToActions()` in `app/lib/gemini.ts`

### Modifying Portfolio Content

Edit `app/components/Portfolio.tsx` to customize:

- Personal information
- Project details
- Skills and expertise
- Contact information

## 🧪 Testing

Test the chatbot with various scenarios:

- ✅ Navigation between sections
- ✅ Content questions
- ✅ Element highlighting
- ✅ Form interactions
- ✅ Multi-step requests

## 📝 Technical Details

### Technologies Used

- **Next.js 16.1** - React framework
- **React 19.2** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Google Gemini API** - AI capabilities
- **Vercel** - Deployment platform

### Key Features Implementation

**Content Extraction**

- Uses `data-section` attributes
- Extracts visible text from DOM
- Limits content to avoid token limits

**Action Execution**

- Smooth scrolling with `scrollIntoView`
- CSS class manipulation for highlights
- Event dispatching for form inputs

**AI Integration**

- Structured prompts with context
- JSON response parsing
- Tool-based function calling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as part of an AI-powered web development assignment.

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Next.js team for the amazing framework
- Vercel for hosting platform

## 📧 Contact

For questions or feedback, reach out at me@swoyam.in

---

**Note**: Make sure to add your Gemini API key to the `.env.local` file before running the project. Get your free API key at [Google AI Studio](https://makersuite.google.com/app/apikey).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   A I - P o r t f o l i o - C h a t b o t  
 