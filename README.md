# DizzyGlitch

DizzyGlitch is a retro CRT channel-surfing video visualizer. It plays royalty-free source clips, layers VHS/glitch/scanline/pixel effects over them, and lets you control how often the app changes channels.

## Current prototype

This browser-based prototype includes:

- A retro wooden console TV interface
- A side settings panel with effect checkboxes and intensity sliders
- A green on-screen channel display
- Adjustable auto channel timing: 3, 5, 10, 15, 20, or 30 seconds
- Countdown display showing when the next channel change will happen
- A static/black-flash channel transition effect
- Manual channel changing
- Visual presets: Soft VHS, Heavy Glitch, Pixel Dream, CRT Burn, and Haunted Cable
- Keyboard shortcuts for quick testing
- Optional Pexels API support for royalty-free video search
- Built-in demo channels as a fallback

## Run it locally

Estimated time: about 2 minutes.

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Keyboard shortcuts

- Right Arrow: change channel
- Space: pause or play
- R: random preset
- F: fullscreen

## Using royalty-free clips

DizzyGlitch can search Pexels video clips from the browser.

1. Get a Pexels API key.
2. Open the app.
3. Paste the key into the API key field.
4. Click **Fetch clips**.

The key is stored in your browser local storage for convenience. Do not commit private API keys to the repo.

## Notes

This is still a prototype scaffold. The visual system is intentionally simple right now so the core idea can be tested quickly before adding heavier shader, canvas, WebGL, local file import, or export features.
