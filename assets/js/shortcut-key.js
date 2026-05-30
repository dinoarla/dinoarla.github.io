// Keep search button as icon-only; shortcut hint lives in the title attribute
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    let searchToggle = document.querySelector("#search-toggle");
    if (searchToggle) {
      searchToggle.setAttribute("title", isMac ? "Search (⌘ k)" : "Search (ctrl k)");
    }
  }
});
