/** @name Axone_Controls_NextClick */
Core.registerEventPoint('Axone_Controls_NextClick');
/** @name Axone_Controls_PlayClick */
Core.registerEventPoint('Axone_Controls_PlayClick');
/** @name Axone_Controls_PauseClick */
Core.registerEventPoint('Axone_Controls_PauseClick');

var Axone_Controls = {
      _pauseState: false

    , _exerciseState: Core.state('Playing', 'Paused').addCssTrigger('#main-container')

    , init: function() {
        CatchEvent(Event_DOM_Init);

        var _this = this;

        $('#play').click(function() {
            if( _this._pauseState ) {
                $(".ball").css("display", "inline-block");
                _this._exerciseState.go('Playing');
                FireEvent(new Axone_Controls_PlayClick());
            } else {
                $(".ball").css("display", "none");
                _this._exerciseState.go('Paused');
                FireEvent(new Axone_Controls_PauseClick());
            }
            _this._pauseState = !_this._pauseState;
        });

        $('#next').click(function() {
            FireEvent(new Axone_Controls_NextClick());
        });
    }
};

