# Roomify

Roomify turns floor plan images into AI-generated interior renders.

Upload a layout, sign in, and instantly visualize how a space could look, using AI that interprets spatial structure instead of just text prompts.

🔗 Live: https://roomify-seven.vercel.app

---

## What it does

- Upload floor plan images (sketches, blueprints, layouts)
- Generates realistic interior renders
- Compare outputs visually

---

## Tech Stack

- React Router
- TypeScript
- TailwindCSS
- Puter (auth + AI generation)
- Vite

---

## Getting Started

### Install dependencies

npm install

### Run development server

npm run dev

App runs at:

http://localhost:5173

---

## Build for production

npm run build

---

## Project Structure

app/
routes/
components/
lib/
public/

---

## How it works

1. Sign in with Puter
2. Upload floor plan image
3. Image generation produces room render

---

## Features

- Authentication via Puter
- Floor plan upload system
- AI-based layout interpretation

---

## Limitations

- Layout interpretation is AI-inferred, not deterministic
- No persistent room memory
- Outputs may vary between generations
- UI is functional, not production-polished

---

## Deployment

Hosted on Vercel:
https://roomify-seven.vercel.app
