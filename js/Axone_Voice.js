var Axone_Voice = {
      currentAudioTrack: null // текущий аудео-трек

    , playVoice: function() {
        var event = CatchEvent(Axone_PhraseInited, Axone_PhraseChanged, Axone_PhraseUpdated);
            if( this.currentAudioTrack ) {
                var ctrack = this.currentAudioTrack;
                setTimeout(function() {
                   ctrack.pause();
                }, 250);
                // speechSynthesis.cancel();
            }

            var regex = /(<span class="small">)?([A-Za-z0-9\s\n\t:,.-]*)(<\/span>)?/;
            var phrase = event.phrase.match(regex)[2];
            this.currentAudioTrack = new Audio('http://voice.mindboost.me/voice2.mindboost.me/voice/translate_tts?ie=UTF-8&total=1&idx=0&client=t&pitch=-105&prev=input&ttsspeed=0&q=' + phrase + '&tl=' + (window.LANG == 'RU'?'ru':'en'));
            console.log(this.currentAudioTrack);
            this.currentAudioTrack.play();
        // this.currentAudioTrack = new SpeechSynthesisUtterance(event.phrase);
        // this.currentAudioTrack.lang = LANG.toLowerCase();
        // speechSynthesis.speak(this.currentAudioTrack);
    }
};
