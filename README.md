# DizzyGlitch

DizzyGlitch is a retro CRT channel-surfing video visualizer. It plays royalty-free source clips, layers VHS/glitch/scanline/pixel effects over them, and lets you control how often the app changes channels.

## Current prototype

This first scaffold is a browser-based app with:

- A retro wooden console TV interface
- A side settings panel with effect checkboxes and intensity sliders
- A green on-screen channel display
- Adjustable auto channel timing: 3, 5, 10, 15, 20, or 30 seconds
- Manual channel changing
- Optional Pexels API support for royalty-free video search
- Local file playback as a fallback

## Run it locally

Estimated time: about 2 minutes.

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Using royalty-free clips

DizzyGlitch can search Pexels video clips from the browser.

1. Get a Pexels API key.
2. Open the app.
3. Paste the key into the API key field.
4. Click **Fetch clips**.

The key is stored in your browser local storage for convenience. Do not commit private API keys to the repo.

## Notes

This is a prototype scaffold, not the final app. The visual system is intentionally simple right now so the core idea can be tested quickly before adding heavier shader, canvas, WebGL, or export features.
