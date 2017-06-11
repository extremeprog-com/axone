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
      "end_logo": "Упражнение закончено",
      "share_fb": "Поделиться в Facebook",
      "share_vk": "Поделиться в Vkontakte",
      "share_tw": "Поделиться в Twitter",
      "about_hed": "О нас",
      "contacts_description": "Мы любим делать интересные и полезные инструменты для людей, которым нравится экспериментировать и пробовать новые возможности для креативного подхода к созданию продуктов.",
      "name_1": "Сергиенко Олег",
      "name_2": "Мурзина Александра"
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
      "end_logo": "Exercise is over",
      "share_fb": "Share with Facebook",
      "share_vk": "Share with Vkontakte",
      "share_tw": "Share with Twitter",
      "about_hed": "About us",
      "contacts_description": "We love to make interesting and useful tools for people who like to experiment and try new opportunities for a creative approach to creating products.",
      "name_1": "Sergienko Oleg",
      "name_2": "Mourzina Alexandra"
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
    $("#logo.contacts").text(i18n_translate("about_hed"));
    $(".contacts_description").text(i18n_translate("contacts_description"));
    $("#return-mainpage").text(i18n_translate("link_1"));
    $("#name_1").text(i18n_translate("name_1"));
    $("#name_2").text(i18n_translate("name_2"));
    $("#share-facebook").text(i18n_translate("share_fb"));
    $("#share-vk").text(i18n_translate("share_vk"));
    $("#share-twitter").text(i18n_translate("share_tw"));
  });


  window.setRandomColor = function () {
    var colors = [
      "rgba(75, 63, 114, 1)",
      "rgba(134, 187, 216, 1)",
      "rgba(255, 200, 87, 1)",
      "rgba(255, 16, 83, 1)",
      "rgba(169, 229, 187, 1)"
    ];

    var color = colors[Math.floor(Math.random()*colors.length)];

    $("body").css({"background-color": color});
    $("#phrase-line").css({"background-color": changeAlpha(color, 0.6)});
    console.log(changeAlpha(color, 0.3))
  };

  function changeAlpha (color, alpha) {
    return color.replace(/[\d\.]+\)$/g, alpha + ')');
  }

})();

