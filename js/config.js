/**
 * Created by trean on 08.06.17.
 */

(function () {

  var exercises_ru = {
    values: {
      "40sum": "посчитать 40 сумм: ",
      "remember7-1": "запомнить 7 чисел и удерживать их в памяти 20 секунд: ",
      "remember7-2": "запомните 7 слов, удерживайте их 20 секунд: ",
      "poem": "сочинить стих со словами ",
      "append": "соединить 2 слова максимально возможным количеством способов: ",
      "figureOut": "придумать историю использующую слова: ",
      "draw": "нарисовать ",
      "use": "используя слова: ",
      "tell": "рассказать о слове",
      "plus": "плюс"
    }
  };


  var exercises_en = {
    values: {
      "40sum": "count 40 amounts: ",
      "remember7-1": "remember 7 numbers and hold them in memory for 20 seconds:",
      "remember7-2": "remember 7 numbers and hold them in memory for 20 seconds:",
      "poem": "compose a verse with words",
      "append": "connect 2 words in as many ways as possible:",
      "figureOut": "think of a story using words:",
      "draw": "draw",
      "use": "using the words:",
      "tell": "tell about word",
      "plus": "plus"
    }
  };


  var ru = i18n.create(exercises_ru);
  var en = i18n.create(exercises_en);

  window.i18n_translate = function (str) {
    if (LANG == "EN") return en(str);
    if (LANG == "RU") return ru(str);
  }
})();

