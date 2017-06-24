/** * Created by trean on 19.06.17.
 */

(function () {
  "use strict";
  var HA_URL = "http://localhost:8090";

  function listener(event) {
    if (event.origin != HA_URL) {
      // ignore unknown domain
      return;

    } else if (event.data === "getCard") {
      // data to sending to Home Automation
      var data = JSON.stringify(["axone", getDataForCard()]);
      console.log(data, ": from Axone");
      event.source.postMessage(data, HA_URL);
    }
  }

  if (window.addEventListener) {
    window.addEventListener("message", listener);
  } else {
    // IE8
    window.attachEvent("onmessage", listener);
  }

  function getDataForCard() {
    //console.log("1", $("#phrased").text(), ": from Axone");
    return $("#phrased").text();
  }
})();
