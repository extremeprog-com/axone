/** @name Axone_PhraseInited */
Core.registerEventPoint('Axone_PhraseInited');
/** @name Axone_TimeoutFinished */
Core.registerEventPoint('Axone_TimeoutFinished');
/** @name Axone_PhraseChanged */
Core.registerEventPoint('Axone_PhraseChanged');
/** @name Axone_PhraseUpdated */
Core.registerEventPoint('Axone_PhraseUpdated');
/** @name Axone_Finished */
Core.registerEventPoint('Axone_Finished');

var Axone = {
      _phraseInterval     : 120000
    , _timeoutVar         : null
    , _currentPhraseNumber: 0
    , phrases: []
    , NUM_PHRASES: 20

    , init: function() {
        CatchEvent(Event_DOM_Init);

        var phrase = this.generateExercise();
        $('#phrased').html(phrase);
        $('#grid li').removeClass('complete');

        FireEvent(new Axone_PhraseInited({phrase: phrase}));
    }

    , generateExercise: function() {

        function randomArrayItem(array, num, local_num) {

            if(local_num) {
                num += 101 * local_num;
            }

            var random;
            var date = new Date();
            var multiplier = 532 * ( date.getDate() + 31 * date.getMonth() + 366 * date.getYear()) + 79 * num;
            var base = 6 * 324984 - 1;

            if(document.location.search.match(/random/)) {
                random = Math.floor(Math.random() * array.length);
            } else {
                random = ( multiplier * base ) % array.length;
            }

            return array[random];
        }

        var exercises = [
            //'посчитать 20 сумм: random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num()',
            'посчитать 40 сумм: random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num()',
            //'посчитать 5 сумм: random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num(), random_num()+random_num()',
            'запомнить 7 чисел и удерживать их в памяти 20 секунд: random_num(), random_num(), random_num(), random_num(), random_num(), random_num(), random_num()',
            'запомните 7 слов, удерживайте их 20 секунд: random_word(), random_word(), random_word(), random_word(), random_word(), random_word(), random_word()',
            'сочинить стих со словами random_word(), random_word()',
            'соединить 2 слова максимально возможным количеством способов: random_word(), random_word()',
            'придумать историю использующую слова: random_word(), random_word(), random_word(), random_word()',
            'нарисовать random_word()',
            'используя слова: random_word(), random_word(), рассказать о слове random_word()'
        ];


        var exercise = randomArrayItem(exercises, Axone._currentPhraseNumber);

        exercise = exercise
            .replace(/random_word\(\)/g, function(e, i) {
                return randomArrayItem(words, Axone._currentPhraseNumber, i)
            })
            .replace(/random_num\(\)/g, function() {
                return parseInt(Math.random() * 99)
            })
            .replace(/\+/g, function() {
                return ' плюс '
            })
        ;

        //var phrase = randomArrayItem(words_emotions, Axone._currentPhraseNumber, i) + ' ' + randomArrayItem(words, Axone._currentPhraseNumber, i);

        //this.phrases[this._currentPhraseNumber] = phrase;
        //
        //localStorage.phrases = JSON.stringify(this.phrases);

        return exercise;
    }

    , markComplete: function() {
        CatchEvent(Axone_PhraseInited, Axone_TimeoutFinished, Axone_Controls_NextClick);
        setTimeout(function( ) {
            $($('#grid li')[Axone._currentPhraseNumber]).addClass('complete');
        }, 0 );
    }
    , setInterval: function() {
        CatchEvent(Axone_PhraseInited, Axone_PhraseChanged);
        if(this._currentPhraseNumber < this.NUM_PHRASES) {

            clearTimeout(this._timeoutVar);
            this._timeoutVar = setTimeout(function(){
                FireEvent(new Axone_TimeoutFinished());
            }, this._phraseInterval);
        } else {
            FireEvent(new Axone_Finished);
        }
    }
    , changePhrase: function() {
        CatchEvent(Axone_TimeoutFinished, Axone_Controls_NextClick);

        var time = 2;


        if( this._currentPhraseNumber < this.NUM_PHRASES ) {
            this._currentPhraseNumber++;
            var phrase = this.generateExercise();
            $('#phrased').html(phrase);
            FireEvent(new Axone_PhraseChanged({phrase: phrase, time: time}));
        }
    }
    , goEnd: function() {
        CatchEvent(Axone_TimeoutFinished, Axone_Controls_NextClick);

        if( this._currentPhraseNumber >= this.NUM_PHRASES ) {
            window.location = '/end';
        }
    }
    , resumeWithNewPhrase: function() {
        CatchEvent(Axone_Controls_PlayClick);

        var phrase = this.generateExercise();
        $('#phrased').html(phrase);

        FireEvent(new Axone_PhraseUpdated({phrase: phrase}));

        this._timeoutVar = setTimeout(function(){
            FireEvent(new Axone_TimeoutFinished());
        }, this._phraseInterval);
    }
    , setPauseState: function() {
        CatchEvent(Axone_Controls_PauseClick);

        clearTimeout(this._timeoutVar);
    }
    ,_drawTimer: false
    , startDrawTimer: function() {
        CatchEvent(Axone_PhraseInited, Axone_PhraseChanged, Axone_PhraseUpdated);

        var _this = this;

        var _drawTimeStart = new Date;

        clearInterval(this._drawTimer);

        this._drawTimer = setInterval(function() {
            $('#phrase-line').css('width', 100 * (new Date - _drawTimeStart) / _this._phraseInterval + '%') ;
        }, 250);
    }
    , endDrawTimer: function() {
        CatchEvent(Axone_Controls_PauseClick);

    }
};

