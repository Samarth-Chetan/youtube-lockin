YouTube Lock-In



A Chrome extension that replaces YouTube video thumbnails with “lock in” focus images to reduce mindless scrolling and encourage productive behavior.



Why this exists



YouTube thumbnails are engineered to pull attention. This extension removes that visual trigger by swapping thumbnails with neutral, motivational images when YouTube loads. The goal is not to block YouTube, but to make usage more intentional.



What it does



Replaces all video thumbnails on YouTube with focus-oriented images



Continues to work as YouTube dynamically loads new content



Runs automatically on page load



No user interaction required



How it works



The extension injects a content script that:



Detects image elements on YouTube pages



Replaces thumbnail sources with predefined “lock in” images



Observes DOM mutations so thumbnails added later are also replaced



Installation (local)



Clone this repository



Open Chrome and go to chrome://extensions



Enable Developer mode



Click Load unpacked



Select the project folder



The extension will now run automatically on YouTube.



Customization



To change the images:



Open Content.js



Replace or add image URLs in the lockInImages array



You can use direct image URLs or host your own images locally inside the extension.



Limitations



Designed specifically for YouTube’s current layout



YouTube updates may require selector or logic changes



Some image hosts may block hotlinking



Future ideas



Toggle on/off button



Per-page or per-session activation



Custom image uploads



Support for other platforms (Instagram, Twitter, TikTok)



License



MIT

