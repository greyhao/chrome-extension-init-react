## chrome-extension-init-react

This repository is a boilerplate for quickly setting up a Chrome extension project using React, TypeScript, and Vite. It comes pre-configured with TailwindCSS, DaisyUI, and Lucide-React. After cloning the repository, simply change the project name and description to start developing your extension.

### Features

- **React + TypeScript**: Leverage the power of React and TypeScript for building your extension.
- **Vite**: Enjoy fast and efficient builds with Vite.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **DaisyUI**: A set of beautifully crafted components based on TailwindCSS.
- **Lucide-React**: Simple and consistent icon toolkit for React.

### Project Structure

```
chrome-extension-init-react/
├── src/
│   ├── assets/
│   │   └── styles
│   │   │   └── tailwind.css
│   │   └── icon.png
│   ├── contentScript/
│   │   └── index.tsx
│   ├── pages/
│   │   ├── options
│   │   │   ├── index.html
│   │   │   └── main.tsx
│   │   └───popup
│   │       ├── index.html
│   │       └── main.tsx
│   └── background.ts
├── manifest.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/greyhao/chrome-extension-init-react.git
   cd chrome-extension-init-react
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Update Project Name and Description**:
   Modify the `package.json` and `manifest.config.ts` files with your project's name and description.

4. **Develop Your Extension**:
   - Add your background script logic in `src/background.ts`.
   - Add your content script logic in `src/contentScript/index.tsx`.
   - Customize the popup UI by editing `src/pages/popup/main.tsx` and `src/pages/popup/index.html`.
   - Cutomize the Options UI by editing `src/pages/options/main.tsx` and `src/pages/options/index.html`.

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```

6. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the `dist` folder.

Happy coding!