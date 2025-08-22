#  AI Playground UI  

An interactive **AI Playground User Interface** built with **React.js + TypeScript + Tailwind CSS + Storybook + Vite**.    

---

##  Research

The project explores existing AI playground platforms and merges their best features:  

- **OpenAI Playground** → Clean split layout with prompt editor + parameters panel  
- **Hugging Face Spaces** → Modular & widget-based interface  
- **Anthropic Claude UI** → Sidebar model selector, chat-like layout  
- **Microsoft Copilot Lab** → Prompt templates for beginners  
- **Perplexity AI** → Light/Dark theme + persistent sidebar  

###  Final Features Chosen
1. Sidebar model selector  
2. Prompt editor with Save/Load templates  
3. Parameter panel (temperature, tokens)  
4. Copy & Download output actions  
5. Light/Dark theme toggle (persisted with `localStorage`)  
6. Responsive layout for mobile → desktop  

---

##  Design Section

- UI created based on the given **Figma file**  
- All components styled with **Tailwind CSS tokens** (spacing, colors, typography)  
- Responsive layout tested across breakpoints  

 **Figma Link:** https://www.figma.com/design/fQlj9CruAj2Ix25OiMstL7/Untitled?node-id=1-6  

---

##  Development Section  

###  Tech Stack
- **React.js** – frontend framework  
- **TypeScript** – type safety  
- **Tailwind CSS** – styling & responsiveness  
- **Storybook** – UI documentation/testing  
- **Vite** – bundler & dev server  


---

###  Features Implemented
-  Sidebar **Model Selector**  
-  Prompt Editor with Save/Load Templates (mock JSON)  
-  Parameter Sliders (temperature, max tokens)  
-  Chat/Output Area with Copy & Download actions  
-  Light/Dark Theme Toggle (persisted in `localStorage`)  
-  Responsive Layout (mobile → desktop breakpoints)   

---

##  Accessibility & UX
- All components are **keyboard-navigable**  
- Added **ARIA labels** for inputs, sliders, and buttons  
- Smooth **hover/focus animations** using Tailwind

---

##  Component Library & Storybook
Storybook setup includes reusable UI components with stories:  

- **Button** (primary/secondary, hover states)  
- **Slider** (temperature, tokens)  
- **Modal** (for template save/load)  
- **ChatBubble** (response display UI)  

Run locally with:  
```bash
npm run storybook

 Installation & Setup

Clone the repository:
git clone [Your GitHub Repo Link]
cd ai-playground-ui

Install dependencies:
npm install

Run the app locally:
npm run dev

Run Storybook:
npm run storybook

 Submission

Live URL: https://ai-playground-ui-theta.vercel.app/

GitHub Repository: 

Figma Design: https://www.figma.com/design/fQlj9CruAj2Ix25OiMstL7/Untitled?node-id=1-6&p=f&t=bItTvak9FG2d2ntl-0
