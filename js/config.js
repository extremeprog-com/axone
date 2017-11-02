/**
 * Created by trean on 08.06.17.
 */

(function () {
  "use strict";

  var exercises_ru = {
    values: {
      "start_description_1": "Усильте свой ум ежедневными упражнениями.",
      "start_description_2": "Начните думать нестандартно.",
      "start_description_3": "Создайте свой собственный мир творчества.",
      "boosting": "Начать упражнения для мозга",
      "40sum": "Посчитать 40 сумм: ",
      "remember7-1": "Запомнить 7 чисел и удерживать их в памяти 2 минуты: ",
      "remember7-2": "Запомните 7 слов, удерживайте их 2 минуты: ",
      "poem": "Сочинить стих со словами: ",
      "append": "Соединить 2 слова максимально возможным количеством способов: ",
      "figureOut": "Придумать историю использующую слова: ",
      "draw": "Нарисовать: ",
      "use": "Используя слова: ",
      "tell": "рассказать о слове ",
      "plus": "плюс",
      "axone_title": "Нарисуй за 2 минуты",
      "pause": "Пауза",
      "link_1": "На главную",
      "link_2": "Контакты",
      "pause_title": "Суть упражнения - нарисовать быстро необычную фразу. Это включает воображение и вовлекает в процесс создания оригинальных идей.",
      "warning": "После нажатия на кнопку плей фраза поменяется.",
      "tips": "Понравилось упражнение? Расскажи о нем своим друзьям.",
      "end_description": "Фотографируй рисунки, которые тебе понравились больше всего, и выкладывай в Instagram с тэгом \<a href=\"https:\/\/instagram.com\/explore\/tags\/crazydrawin/\" target=\"_blank\" style=\"color: \#D0021B;\"\>\#crazydrawin\<\/a\>",
      "repeat": "Повторить упражнение",
      "end_logo": "Упражнение закончено",
      "end_subtitle": "Но не ваше самосовершенствование",
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
      "start_description_1": "Boost your mind with daily exercises.",
      "start_description_2": "Start thinking out of the box.",
      "start_description_3": "Create your own world of creativity.",
      "boosting": "Start boosting your mind",
      "40sum": "Count 40 amounts: ",
      "remember7-1": "Remember 7 numbers and hold them in memory for 2 minutes: ",
      "remember7-2": "Remember 7 words and hold them in memory for 2 minutes: ",
      "poem": "Compose a verse with words: ",
      "append": "Connect 2 words in as many ways as possible: ",
      "figureOut": "Think of a story using words: ",
      "draw": "Draw: ",
      "use": "Using the words: ",
      "tell": "tell about word ",
      "plus": "plus",
      "axone_title": "Draw it 2 minutes",
      "pause": "Pause",
      "link_1": "Go to main page",
      "link_2": "Contacts",
      "pause_title": "These exercises involve you in the process of creating original ideas.",
      "warning": "After clicking on the button, the phrase will change.",
      "tips": "Did you like the exercise? Tell about it to your friends.",
      "end_description": "Take pictures of the pictures that you liked most, and lay out in Instagram with a tag \<a href=\"https:\/\/instagram.com\/explore\/tags\/crazydrawin/\" target=\"_blank\" style=\"color: \#D0021B;\"\>\#crazydrawin\<\/a\>",
      "repeat": "Repeat exercise",
      "end_logo": "Exercise is over",
      "end_subtitle": "But your evolution will never be over.<br>Be smart!",
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
    $(".end_description").html(i18n_translate("end_description"));
    $("#pause-wrap>.title>a").text(i18n_translate("pause"));
    $("#pause-wrap .link_1>a").text(i18n_translate("link_1"));
    $("#pause-wrap .link_2>a").text(i18n_translate("link_2"));
    $("#warning").text(i18n_translate("warning"));
    $("#pause-title").text(i18n_translate("pause_title"));
    $("#tips").text(i18n_translate("tips"));
    $("#logo.ended").text(i18n_translate("end_logo"));
    $(".ended__subtitle").html(i18n_translate("end_subtitle"));
    $("#logo.contacts").text(i18n_translate("about_hed"));
    $(".contacts_description").text(i18n_translate("contacts_description"));
    $("#return-mainpage").text(i18n_translate("link_1"));
    $("#name_1").text(i18n_translate("name_1"));
    $("#name_2").text(i18n_translate("name_2"));
    $("#share-facebook").text(i18n_translate("share_fb"));
    $("#share-vk").text(i18n_translate("share_vk"));
    $("#share-twitter").text(i18n_translate("share_tw"));
  });


  window.getRandomColor = function() {
    var colors = [
      "rgba(28, 119, 195, 1)",
      "rgba(208, 2, 27, 1)",
      "rgba(177, 193, 192, 1)",
      "rgba(240, 207, 101, 1)",
      "rgba(197, 216, 109, 1)"

      // alternative pallete
      //"rgba(75, 63, 114, 1)",
      //  "rgba(134, 187, 216, 1)",
      //  "rgba(255, 200, 87, 1)",
      //  "rgba(255, 16, 83, 1)",
      //  "rgba(169, 229, 187, 1)"
    ];

    var color = colors[Math.floor(Math.random()*colors.length)];
    return color;
  };

  window.setRandomColor = function () {
    var color = window.getRandomColor();
    $("body").css({"background-color": color});
    $("#phrase-line").css({"background-color": changeAlpha(color, 0.6)});
    $("#controls .stop").css({
      "border-color": color,
      "background-color": changeAlpha(color, 0.6)
    });
    $("#play>svg>g").css({
      "stroke": color
    });
    $("#play>svg path").css({
      "fill": changeAlpha(color, 0.6)
    });
    $("#next>svg path").css({
      "stroke": color,
      "fill": changeAlpha(color, 0.6)
    });
  };

  function changeAlpha (color, alpha) {
    return color.replace(/[\d\.]+\)$/g, alpha + ')');
  }

})();

