# -CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: JANAPAREDDI VEDHA VARSHINI

*INTERN ID*: CT04DN896

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH KUMAR

*Description* :

This Chrome extension is designed to help users monitor their web activity and analyze their productivity patterns. It tracks the time spent on different websites, classifies them as productive or unproductive, and provides a summary through a simple popup dashboard. The primary goal of the extension is to promote mindful browsing and help users manage their time more effectively.

Key Features:
Real-time Time Tracking:
The extension monitors the active tab in the browser and records how long a user stays on each website. It accurately logs time spent on individual domains while excluding invalid or inactive tabs (like chrome://newtab or extensions).

Productivity Classification:
Websites are categorized into two groups: productive (e.g., stackoverflow.com, github.com, chatgpt.com) and unproductive (e.g., youtube.com, facebook.com). Users’ time on each category is totaled separately.

Popup Dashboard:
The popup interface displays total time spent on productive and unproductive websites, giving users a clear snapshot of their weekly browsing behavior.

Persistent Storage:
Browsing data is stored locally using Chrome's chrome.storage.local API, ensuring data is retained across sessions and browser restarts without requiring a backend server.

Lightweight Background Tracking:
The extension uses a background service worker to listen to tab switches, updates, and window focus changes. It calculates session durations and updates data in real-time.

Technical Stack:
Manifest V3 (for Chrome Extension structure)

JavaScript (for core logic in background and popup scripts)

HTML/CSS (for the popup interface)

Chrome Extension APIs (tabs, storage, and background)

Outcome:
This extension is useful for students, developers, or remote workers who want to understand their web habits and improve focus. It acts as a lightweight personal analytics tool and can be further extended with features like notifications, site-blocking, or visual graphs.

*OUTPUT*:

![Image](https://github.com/user-attachments/assets/0eb5ca99-7bae-4568-9f12-7fe3295a5dff)
![Image](https://github.com/user-attachments/assets/61189867-3daf-49d2-be1b-8ce76a3aae54)

