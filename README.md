# 🧾 WSD  – Full Development Setup Guide

This project has two key parts:

- `sass_and_tailwind` – Manages **SASS + TailwindCSS** with **Vite** for building styles.
- `app` – A **React.js** application that imports those styles for rendering UI.

To bridge these two parts, we use a **Chokidar-based watcher (`css_next_js_helper.mjs`)** that listens to Vite's output and **transports the compiled CSS** into the Next.js app. This watcher is managed using **PM2** for persistent background running.

---

## 📦 Step 1: One-Time Installation (First-Time Setup)

```bash
# Install PM2 globally so we can manage background processes like our CSS transporter
npm i -g pm2

# Clear any old generated files in Vite's dist folder
rm -rf sass_and_tailwind/dist

# Go into the SASS + Tailwind build system directory
cd sass_and_tailwind

# Install dependencies for Vite, Tailwind, SASS etc.
npm install

# Move to the Next.js app directory
cd ../app

# Install frontend and server-side dependencies for the Next.js application
npm install
```

---

## 🎨 Step 2: Compile Styles Using Vite (in Watch Mode)

```bash
# Start Vite with watch mode to rebuild styles whenever you change SASS or Tailwind files
cd sass_and_tailwind
npm run build
```

> ✅ This keeps watching for changes and builds updated CSS into `sass_and_tailwind/dist/assets`.

---

## 🔁 Step 3: Start the CSS Transporter (via PM2)

```bash
# Start the Chokidar-based watcher that:
# - Listens to changes in Vite's output folder (`dist/assets`)
# - Copies new CSS into the appropriate folder inside the Next.js app
cd sass_and_tailwind

# Check if the PM2 process "css_next_js_helper" exists
if pm2 list | grep -q "css_next_js_helper"; then
  echo "Process 'css_next_js_helper' exists. Restarting it..."
  pm2 delete css_next_js_helper
else
  echo "Process 'css_next_js_helper' not found. Starting it fresh..."
fi

clear

# Start the transporter
pm2 start css_next_js_helper.mjs --name css_next_js_helper --interpreter node

# Helpful UX log message
echo "📄 Showing logs for 'css_next_js_helper'..."
echo "🔻 Press Ctrl + C to stop viewing logs."
pm2 logs css_next_js_helper
```

> 📦 This allows your Next.js app to always have the **latest compiled styles** automatically injected.

---

## 🚀 Step 4: Start the Next.js Development Server

```bash
# Now start your frontend development server
cd app && npm start
```

> 🌐 Application should now be accessible at: `http://localhost:5173`

---

## 🌐 Step 5: Open App in Chrome

```bash
# Open the local development server in Google Chrome
google-chrome-stable 'http://localhost:5173'
```

---

## 🪵 Optional Step: Check Logs for the Transporter

```bash
# This command shows real-time logs from the css_next_js_helper script

# Helpful UX log message
echo "📄 Showing logs for 'css_next_js_helper'..."
echo "🔻 Press Ctrl + C to stop viewing logs."
pm2 logs css_next_js_helper
```

> 🧩 Useful for debugging issues if your styles are not appearing in the frontend.

---

## 🧠 Final Notes

- Keep **two terminals** open while working:
    - One for `npm run build` (Vite watcher)
    - One for the `npm run dev` (React.js server)
- **The PM2 watcher** ensures that the compiled CSS is always sent to the correct place inside the React.js app.
- You only need to restart the PM2 watcher if you stop it manually or reboot your system.

---

Happy coding! 🧠💻🔥

# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx tiged reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
# WSD
