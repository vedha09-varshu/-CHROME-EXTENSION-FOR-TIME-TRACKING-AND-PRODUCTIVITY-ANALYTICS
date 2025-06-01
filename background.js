let currentTabId = null;
let currentDomain = null;
let startTime = null;

async function saveTimeSpent() {
  if (!currentDomain || !startTime) {
    console.log("Skipping save: missing domain or time.");
    return;
  }


}

  const timeSpent = (Date.now() - startTime) / 1000;
  chrome.storage.local.get([`track_${currentDomain}`], (result) => {
    const previous = result[`track_${currentDomain}`] || 0;
    const updated = previous + timeSpent;
    chrome.storage.local.set({ [`track_${currentDomain}`]: updated }, () => {
      console.log(`Saved ${updated.toFixed(2)}s for ${currentDomain}`);
    });
  });


async function handleTabSwitch(tabId) {
  await saveTimeSpent();

  try {
    const tab = await chrome.tabs.get(tabId);
    if (!tab.url || !tab.url.startsWith("http")) {
      currentDomain = null;
      startTime = null;
      return;
    }
    
    const url = new URL(tab.url);
    currentDomain = url.hostname.replace(/^www\./, "");
    startTime = Date.now();

    console.log(`Now tracking domain: ${currentDomain}`);
  } catch (e) {
    console.error("Error getting tab info:", e);
    currentDomain = null;
    startTime = null;
  }
}


chrome.tabs.onActivated.addListener(({ tabId }) => handleTabSwitch(tabId));

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    handleTabSwitch(tabId);
  }
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    saveTimeSpent();
    currentDomain = null;
    startTime = null;
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) handleTabSwitch(tabs[0].id);
    });
  }
});

chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) handleTabSwitch(tabs[0].id);
  });
});
