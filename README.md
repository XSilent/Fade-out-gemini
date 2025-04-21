# Hide Google Gemini (AI Overview) on SERPs

A lightweight Chrome extension to hide Google's new Gemini / AI Overview blocks from your search results. Clean, fast, and distraction-free SERPs — just like the good old days.


## What It Does

This extension automatically removes the Gemini-powered AI block that appears at the top of Google's search results page. It targets both static and dynamically loaded content using a combination of precise DOM selectors and a MutationObserver.


## Installation (Manually)

1. Clone or download this repository.
2. Open Chrome and go to: `chrome://extensions/`
3. Enable **Developer Mode** (toggle in the top right).
4. Click on **“Load unpacked”**.
5. Select the folder where this project lives.

That's it — reload any Google search page and the Gemini block will be gone!


## How It Works

- It detects and hides the Gemini/AI Overview block by using:
  - Specific selectors like `div[data-content-feature="1"]`
  - Fallback logic based on inner text (e.g., "AI Overview")
  - Safety checks to avoid removing real search results or sidebars
- Runs with a combination of `MutationObserver` and timed fallback logic
- Fully client-side — no data is collected or transmitted anywhere


## Customization

If Google changes their markup or you want to fine-tune behavior, you can modify the logic in `content.js`.

You can:
- Tweak selectors
- Add toggles or options UI
- Scope it to different Google domains


## Status

Works as of April 2025. Google often A/B tests UI layouts, so if it breaks, feel free to submit a PR or open an issue. Let’s keep search simple together.


## Privacy

This extension does **not** collect any personal data or interact with any APIs. It runs only in your browser and affects only the visual presentation of the Google Search page.


## License

MIT – do what you want!
