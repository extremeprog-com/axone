/**
 * Created by trean on 27.06.17.
 */

(function () {
  function switchSpans(toHide, toShow) {
    if (toHide) $("#" + toHide).hide();
    var toShowSpan = $("#" + toShow);
    toShowSpan.empty();
    toShowSpan.show();
    slowShow(toShowSpan, i18n_translate("start_" + toShowSpan.attr("id")), function () {
      var toShowNext = toShowSpan.attr("data-show-next");
      $(".dot").css("background", getRandomColor());
      if (toShowNext) switchSpans(toShow /*Hide what was shown*/, toShowNext)
    });
  }

  function doWithList(list, idx, foo, callback) {
    if (list.length > idx) {
      var nextStep = function () {
        doWithList(list, idx + 1, foo, callback);
      };
      foo(list[idx], nextStep);
    } else {
      if (callback) callback();
    }
  }

  function showWords(element, words, callback) {
    doWithList(words, 0, function (word, nextStep) {
      var el = $("<span class='word'>" + word + " </span>");
      element.append(el);
      el.fadeIn(400, nextStep);
    }, callback);
  }

  function hideWords(spans, callback) {
    doWithList(spans, 0, function (span, nextStep) {
      $(span).fadeTo(400, 0, nextStep);
    }, callback);
  }

  function slowShow(element, str, callback) {
    var words = str.split(/\s+/);
    showWords(element, words, function () {
      var spans = element.children();
      hideWords(spans, callback)
    });

  }

  switchSpans(undefined, "description_1");

})();
