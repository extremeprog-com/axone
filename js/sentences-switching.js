/**
 * Created by trean on 27.06.17.
 */

(function () {
  function switchSpans(toHide, toShow) {
    if (toHide) $("#" + toHide).hide();
    var toShowSpan = $("#" + toShow);
    toShowSpan.empty();
    toShowSpan.show();
    resetDotsAnimation();
    slowShow(toShowSpan, i18n_translate("start_" + toShowSpan.attr("id")), function () {
      var toShowNext = toShowSpan.attr("data-show-next");
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
      el.fadeIn(700, nextStep);
    }, callback);
  }

  function hideWords(spans, callback) {
    doWithList(spans, 0, function (span, nextStep) {
      $(span).fadeTo(700, 0, nextStep);
    }, callback);
  }

  function slowShow(element, str, callback) {
    var words = str.split(/\s+/);
    showWords(element, words, function () {
      setTimeout(callback, 2000);

    })
    /*function () {
     var spans = element.children();
     hideWords(spans, callback)
     });*/

  }


  function SetDotRandomPosition() {
    var el     = $(".blueDotsContainer");
    var height = el.height();
    var width  = el.width();

    [".dot1", ".dot2"].forEach(function (dot) {
      $(dot).css({
        "top" : getRandomArbitrary(0, height) + "px",
        "left": getRandomArbitrary(0, width) + "px"
      });
    });
  }

  function resetDotsAnimation() {
    var dotContainer = $(".blueDotsContainer");
    dotContainer.empty();
    var dot1 = $("<div class='dot dot1'></div>");
    var dot2 = $("<div class='dot dot2'></div>");
    dotContainer.append(dot1, dot2);
    dotContainer.children().each(function (idx, dot) {
      $(dot).css("background", getRandomColor());
    });
    SetDotRandomPosition();
  }

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  switchSpans(undefined, "description_1");

})();
