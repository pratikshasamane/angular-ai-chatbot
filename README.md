# 🤖 Angular AI Chatbot

A modern AI-powered chatbot built with Angular 17+ and Groq LLM API.

## 🚀 Live Demo

[View Live App](YOUR_VERCEL_URL_HERE)

## ✨ Features

- 💬 Real-time AI chat using Groq (Llama 3.3)
- 📜 Chat history with beautiful UI
- 🔄 Clear chat functionality
- ⚡ Built with modern Angular (Standalone components)
- 🎯 Reactive programming with RxJS
- 🔢 Angular Signals demo

## 🛠️ Tech Stack

| Technology      | Usage                |
| --------------- | -------------------- |
| Angular 17+     | Frontend Framework   |
| Groq API        | AI Language Model    |
| RxJS            | Reactive Programming |
| Angular Signals | State Management     |
| TypeScript      | Programming Language |

## 📦 Installation

### Prerequisites

- Node.js 18+
- Angular CLI
- Groq API Key (free at console.groq.com)

### Steps

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/angular-ai-chatbot.git
   cd angular-ai-chatbot
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   \`\`\`

3. Add your API key
   \`\`\`bash

   # Create environment file

   # src/environments/environment.ts

   export const environment = {
   production: false,
   geminiApiKey: 'YOUR_GROQ_API_KEY'
   };
   \`\`\`

4. Run the app
   \`\`\`bash
   ng serve
   \`\`\`

5. Open browser at `http://localhost:4200`

## 📁 Project Structure

\`\`\`
src/
├── app/
│ ├── components/
│ │ ├── ai-chat/ # AI Chatbot component
│ │ └── quote/ # Quote card component
| | └──Welcome/ # Welcome component
│ ├── services/
│ │ ├── ai.service.ts # Groq API integration
│ └── environment/
│ └── environment.ts # API configuration
\`\`\`

## 🔑 Environment Setup

Create `src/environments/environment.ts`:
\`\`\`typescript
export const environment = {
production: false,
geminiApiKey: 'YOUR_GROQ_API_KEY_HERE'
};
\`\`\`

## 👩‍💻 Developer

Built with ❤️ by Pratiksha

## 📄 License

MIT License
