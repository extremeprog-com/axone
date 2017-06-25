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
      event.source.postMessage(data, HA_URL);
    } else if (event.data === "setLang:EN") {
      window.LANG = "EN";
      console.log("now LANG = " + window.LANG);
    } else if (event.data === "setLang:RU") {
      window.LANG = "RU";
      console.log("now LANG = " + window.LANG);
    }
  }

  if (window.addEventListener) {
    window.addEventListener("message", listener);
  } else {
    // IE8
    window.attachEvent("onmessage", listener);
  }

  function getDataForCard() {
    var text = $("#phrased").text();
    var regex = /(.*:)(.*)/;
    var html = "<span class='bold'>" + text.match(regex)[1] + "</span><br> " + text.match(regex)[2];
    return html;
  }
})();
