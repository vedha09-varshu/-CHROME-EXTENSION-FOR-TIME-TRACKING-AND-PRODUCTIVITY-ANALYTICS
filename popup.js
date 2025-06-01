const productiveSites = ["chatgpt.com", "github.com", "stackoverflow.com"];
const unproductiveSites = ["youtube.com", "facebook.com", "instagram.com", "reddit.com"];

chrome.storage.local.get(null, (data) => {
  let productiveTime = 0;
  let unproductiveTime = 0;

  for (const key in data) {
    if (key.startsWith("track_")) {
      const domain = key.replace("track_", "");

      if (productiveSites.includes(domain)) {
        productiveTime += data[key];
      } else if (unproductiveSites.includes(domain)) {
        unproductiveTime += data[key];
      }
    }
  }

  document.getElementById("productive").textContent =
    `Productive Time: ${Math.round(productiveTime / 60)} mins`;
  document.getElementById("unproductive").textContent =
    `Unproductive Time: ${Math.round(unproductiveTime / 60)} mins`;
});
