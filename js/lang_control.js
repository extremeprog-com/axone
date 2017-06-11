/**
 * Created by trean on 09.06.17.
 */

(function () {
  // language changing
  if (!window.localStorage["AXONE_LANG"]) {
    window.LANG = navigator.language !== "RU" ? "EN" : "RU";
    window.localStorage.setItem("AXONE_LANG", window.LANG);
  } else {
    window.LANG = window.localStorage.getItem("AXONE_LANG");
  }
  setSelectedLang(window.LANG);
  if (typeof words !== "undefined") chooseWordsArr();

  $("#lang").change(function () {
    console.log("changed!");
    var oldLang = window.LANG;
    window.LANG = $(this).val();
    window.localStorage.setItem("AXONE_LANG", window.LANG);
    if (typeof words !== "undefined") chooseWordsArr(window.LANG);

    if (oldLang !== window.LANG) {
      location.reload();
    }
  });

  function chooseWordsArr (lang) {
    if (window.LANG === "EN") {
      words = words_en;
//      words_emotions = words_emotions_en;
    } else if (window.LANG === "RU") {
      words = words_ru;
//      words_emotions = words_emotions_ru;
    }


    console.log(lang);
    console.log(window.LANG);
  }

  function setSelectedLang (lang) {
    $("#lang").val(lang);
  }

})();
