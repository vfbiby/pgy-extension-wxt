export default defineUnlistedScript(() => {
  const originOpen = XMLHttpRequest.prototype.open;
  function interceptAjax() {
    console.log("interceptAjax");
    XMLHttpRequest.prototype.open = function (_, url) {
      const xhr = this;
      this.addEventListener("readystatechange", function (event) {
        if (xhr.readyState === 4) {
          if (isTargetUrl(url)) {
            sendResponseBack(url, event);
          }
        }
      });
      return originOpen.apply(this, arguments);
    };
  }

  function isTargetUrl(url) {
    return (
      url.includes("/api/solar/cooperator/user/blogger") ||
      url.includes("/api/solar/kol/dataV3/dataSummary") ||
      url.includes("/api/solar/kol/dataV3/fansSummary")
    );
  }

  function sendResponseBack(url, event) {
    window.dispatchEvent(
      new CustomEvent("FROM_INJECTED", {
        detail: { url, responseText: event.target.responseText },
      })
    );
  }

  interceptAjax();
});
