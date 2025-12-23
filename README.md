# YouTube Lock-In

A Chrome extension that replaces YouTube video thumbnails with “lock in” focus images to reduce mindless scrolling and encourage intentional use.

YouTube thumbnails are engineered to grab attention and maximize watch time. This extension removes that visual hook by swapping thumbnails with neutral, motivational images when YouTube loads, helping you stay focused and avoid aimless browsing.

## What it does
- Replaces all video thumbnails on YouTube with focus-oriented images
- Continues working as YouTube dynamically loads new content
- Runs automatically with no user interaction required
- Lightweight and fast

## How it works
The extension injects a content script that:
- Detects image elements used for YouTube thumbnails
- Replaces their sources with predefined “lock in” images
- Observes DOM mutations so thumbnails added later are also replaced

## Installation (Local)
1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

The extension will now run automatically on YouTube.

## Customization
To change the images:
1. Open `Content.js`
2. Replace or add image URLs inside the `lockInImages` array

You may also store images locally inside the extension for better reliability.

## Limitations
- Built specifically for YouTube’s current layout
- YouTube updates may require maintenance
- Some image hosts may block hotlinking

## Future Improvements
- Toggle on/off control
- Per-session activation
- Custom image uploads
- Support for additional platforms

## License
MIT
