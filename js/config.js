/**
 * Created by trean on 08.06.17.
 */

(function () {
  "use strict";

  var exercises_ru = {
    values: {
      "description": "Усильте свой ум ежедневными упражнениями",
      "boosting": "Начать упражнения для мозга",
      "40sum": "посчитать 40 сумм: ",
      "remember7-1": "запомнить 7 чисел и удерживать их в памяти 20 секунд: ",
      "remember7-2": "запомните 7 слов, удерживайте их 20 секунд: ",
      "poem": "сочинить стих со словами ",
      "append": "соединить 2 слова максимально возможным количеством способов: ",
      "figureOut": "придумать историю использующую слова: ",
      "draw": "нарисовать ",
      "use": "используя слова: ",
      "tell": "рассказать о слове",
      "plus": "плюс",
      "axone_title": "нарисуй за 2 минуты",
      "pause": "Пауза",
      "link_1": "На главную",
      "link_2": "Контакты",
      "pause_title": "Суть упражнения - нарисовать быстро необычную фразу. Это включает воображение и вовлекает в процесс создания оригинальных идей.",
      "warning": "После нажатия на кнопку плей фраза поменяется.",
      "tips": "Понравилось упражнение? Расскажи о нем своим друзьям.",
      "end_description": "Фотографируй рисунки, которые тебе понравились больше всего, и выкладывай в Instagram с тэгом \<a href=\"https:\/\/instagram.com\/explore\/tags\/crazydrawin/\" target=\"_blank\" style=\"color: \#D0021B;\"\>\#crazydrawin\<\/a\>",
      "repeat": "Повторить упражнение",
      "end_logo": "Упражнение закончено"
    }
  };


  var exercises_en = {
    values: {
      "description": "Boost your mind with daily exercises",
      "boosting": "Start boosting the mind",
      "40sum": "count 40 amounts: ",
      "remember7-1": "remember 7 numbers and hold them in memory for 20 seconds:",
      "remember7-2": "remember 7 numbers and hold them in memory for 20 seconds:",
      "poem": "compose a verse with words",
      "append": "connect 2 words in as many ways as possible:",
      "figureOut": "think of a story using words:",
      "draw": "draw",
      "use": "using the words:",
      "tell": "tell about word",
      "plus": "plus",
      "axone_title": "draw it 2 minutes",
      "pause": "Pause",
      "link_1": "Go to main page",
      "link_2": "Contacts",
      "pause_title": "The essence of the exercise is to draw a quickly an unusual phrase. This turn on imagination and involves you in the process of creating original ideas.",
      "warning": "After clicking on the button, the phrase will change.",
      "tips": "Did you like the exercise? Tell about it to your friends.",
      "end_description": "Take pictures of the pictures that you liked most, and lay out in Instagram with a tag \<a href=\"https:\/\/instagram.com\/explore\/tags\/crazydrawin/\" target=\"_blank\" style=\"color: \#D0021B;\"\>\#crazydrawin\<\/a\>",
      "repeat": "Repeat exercise",
      "end_logo": "Exercise is over"
    }
  };


  var ru = i18n.create(exercises_ru);
  var en = i18n.create(exercises_en);

  window.i18n_translate = function (str) {
    if (LANG == "EN") return en(str);
    if (LANG == "RU") return ru(str);
  };

  $(document).ready(function () {
    $("#phrase-tip").text(i18n_translate("axone_title"));
    $("#action-button>.boosting").text(i18n_translate("boosting"));
    $("#action-button>.repeat").text(i18n_translate("repeat"));
    $(".start_description").text(i18n_translate("description"));
    $(".end_description").html(i18n_translate("end_description"));
    $("#pause-wrap>.title>a").text(i18n_translate("pause"));
    $("#pause-wrap .link_1>a").text(i18n_translate("link_1"));
    $("#pause-wrap .link_2>a").text(i18n_translate("link_2"));
    $("#warning").text(i18n_translate("warning"));
    $("#pause-title").text(i18n_translate("pause_title"));
    $("#tips").text(i18n_translate("tips"));
    $("#logo.ended").text(i18n_translate("end_logo"));
  });


  window.setRandomColor = function() {
    var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    var lightColor = ColorLuminance(color, 0.8);
    $("body").css({"background-color": color});
    $("#phrase-line").css({"background-color": lightColor});
  };


  function ColorLuminance(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }

    return rgb;
  }
})();

