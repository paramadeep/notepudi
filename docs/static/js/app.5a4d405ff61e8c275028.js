webpackJsonp([1],{"+8qP":function(e,t){},"2PLl":function(e,t){},"6cDB":function(e,t){},AjSF:function(e,t){},Eoli:function(e,t){},Ksa5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i=n("TXmL"),a={de:{C:"C",CSharp:"Cis",D:"D",DFlat:"Des",DSharp:"Dis",E:"E",EFlat:"Es",F:"F",FSharp:"Fis",G:"G",GFlat:"Ges",GSharp:"Gis",A:"A",AFlat:"As",ASharp:"Ais",B:"H",BFlat:"B",correctExcl:"Richtig!",wrongExcl:"Falsch!",ABORT:"RUNDE ABBRECHEN",lastRound:"Letzte Runde",score:"Punkte",accuracy:"Genauigkeit",correct:"richtig",wrong:"falsch",START:"START",settings:"Optionen",ROUND_LENGTH:"RUNDENLÄNGE",NOTE_INPUT:"NOTENEINGABE",CLEF:"NOTENSCHLÜSSEL",DIFFICULTY:"SCHWIERIGKEITSGRAD",ACCIDENTALS:"VORZEICHEN",LANGUAGE:"SPRACHE",twentySeconds:"20 s",oneMinute:"1 min",fiveMinutes:"5 min",infinite:"Unendlich",buttons:"Buttons",realDevice:"Real Device",piano:"Klavier",trebleClef:"Violin",bassClef:"Bass",altoClef:"Alt",tenorClef:"Tenor",easy:"Leicht",normal:"Mittel",hard:"Schwer",none:"Keine",sharp:"♯",flat:"♭",sharpAndFlat:"♯ und ♭",SOUND:"SOUND",on:"An",off:"Aus",TIME:"ZEIT",CORRECT:"RICHTIG",ACCURACY:"GENAUIGKEIT",SCORE:"PUNKTE",record:"Rekord"},en:{C:"C",CSharp:"C♯",D:"D",DFlat:"D♭",DSharp:"D♯",E:"E",EFlat:"E♭",F:"F",FSharp:"F♯",G:"G",GFlat:"G♭",GSharp:"G♯",A:"A",AFlat:"A♭",ASharp:"A♯",B:"B",BFlat:"B♭",correctExcl:"Correct!",wrongExcl:"Wrong!",ABORT:"ABORT",lastRound:"Last Round",score:"Score",accuracy:"Accuracy",correct:"correct",wrong:"wrong",START:"START",settings:"Settings",ROUND_LENGTH:"ROUND LENGTH",NOTE_INPUT:"NOTE INPUT",CLEF:"CLEF",DIFFICULTY:"DIFFICULTY",ACCIDENTALS:"ACCIDENTALS",LANGUAGE:"LANGUAGE",twentySeconds:"20 s",oneMinute:"1 min",fiveMinutes:"5 min",infinite:"Infinite",buttons:"Buttons",piano:"Piano",realDevice:"Real Device",trebleClef:"Treble",bassClef:"Bass",altoClef:"Alto",tenorClef:"Tenor",easy:"Easy",normal:"Normal",hard:"Hard",none:"None",sharp:"♯",flat:"♭",sharpAndFlat:"♯ and ♭",SOUND:"SOUND",on:"On",off:"Off",TIME:"TIME",CORRECT:"CORRECT",ACCURACY:"ACCURACY",SCORE:"SCORE",record:"High Score"},fr:{C:"do",CSharp:"do dièse",D:"ré",DFlat:"ré bémol",DSharp:"ré dièse",E:"mi",EFlat:"mi bémol",F:"fa",FSharp:"fa dièse",G:"sol",GFlat:"sol bémol",GSharp:"sol dièse",A:"la",AFlat:"la bémol",ASharp:"la dièse",B:"si",BFlat:"si bémol",correctExcl:"C'est juste!",wrongExcl:"C'est faux!",ABORT:"ABANDONNER LA TOURNÉE",lastRound:"Dernière tournée",score:"Points",accuracy:"Précision",correct:"juste",wrong:"faux",START:"START",settings:"Options",ROUND_LENGTH:"DURÉE DE TOURNÉE",NOTE_INPUT:"SAISI DE NOTES",CLEF:"CLÉ",DIFFICULTY:"DEGRÉ DE DIFFICULTÉ",ACCIDENTALS:"ARMATURE",LANGUAGE:"LANGUE",twentySeconds:"20''",oneMinute:"1'",fiveMinutes:"5'",infinite:"Infini",buttons:"Boutons",realDevice:"Real Device",piano:"Piano",trebleClef:"sol",bassClef:"basse",altoClef:"ut (3e)",tenorClef:"ut (4e)",both:"les deux",easy:"facile",normal:"moyen",hard:"difficile",none:"aucune",sharp:"♯",flat:"♭",sharpAndFlat:"♯ et ♭",SOUND:"SON",on:"activé",off:"désactivé",TIME:"TEMPS",CORRECT:"JUSTES",ACCURACY:"PRÉCISION",SCORE:"POINTS",record:"Record"},pl:{C:"C",CSharp:"Cis",D:"D",DFlat:"Des",DSharp:"Dis",E:"E",EFlat:"Es",F:"F",FSharp:"Fis",G:"G",GFlat:"Ges",GSharp:"Gis",A:"A",AFlat:"As",ASharp:"Ais",B:"H",BFlat:"B",correctExcl:"Poprawna!",wrongExcl:"Zła!",ABORT:"PRZERWIJ PARTIĘ",lastRound:"Poprzednia partia",score:"Punkty",accuracy:"Poprawność",correct:"poprawne",wrong:"złe",START:"START",settings:"Ustawienia",ROUND_LENGTH:"DŁUGOŚĆ PARTII",NOTE_INPUT:"METODA WEJŚCIA",CLEF:"KLUCZ",DIFFICULTY:"TRUDNOŚĆ",ACCIDENTALS:"ZNAKI CHROMATYCZNE",LANGUAGE:"JĘZYK",twentySeconds:"20 s",oneMinute:"1 min",fiveMinutes:"5 min",infinite:"Niekończący",buttons:"Przyciski",realDevice:"Real Device",piano:"Klawiatura",trebleClef:"wiolinowy",bassClef:"basowy",altoClef:"altowy",tenorClef:"tenorowy",both:"Oba",easy:"Łatwy",normal:"Normalny",hard:"Trudny",none:"Żadny",sharp:"♯",flat:"♭",sharpAndFlat:"♯ i ♭",SOUND:"DŹWIĘK",on:"Włącz",off:"Wyłącz",TIME:"CZAS",CORRECT:"POPRAWNE",ACCURACY:"POPRAWNOŚĆ",SCORE:"PUNKTY",record:"Rekord"}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-option"},[n("div",{staticClass:"label"},[e._v(e._s(e.label))]),e._v(" "),n("div",{staticClass:"options-container"},e._l(e.items,function(t){return n("div",{key:t.value,staticClass:"value-box",class:{selected:e.value===t.value},on:{click:function(n){return e.select(t.value)}}},[e._v("\n        "+e._s(t.label)+"\n    ")])}),0)])},staticRenderFns:[]};var o=n("VU/8")({name:"SelectOption",props:["label","value","items"],methods:{select:function(e){this.$emit("input",e)}}},r,!1,function(e){n("6cDB")},null,null).exports,c=n("Gu7T"),l=n.n(c),u={name:"SelectOptionMulti",props:["label","value","items"],methods:{select:function(e){this.value.includes(e)?this.value.length>1&&this.$emit("input",this.value.filter(function(t){return t!==e})):this.$emit("input",[].concat(l()(this.value),[e]))}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-option"},[n("div",{staticClass:"label"},[e._v(e._s(e.label))]),e._v(" "),n("div",{staticClass:"options-container"},e._l(e.items,function(t){return n("div",{key:t.value,staticClass:"value-box",class:{selected:e.value.includes(t.value)},on:{click:function(n){return e.select(t.value)}}},[e._v("\n        "+e._s(t.label)+"\n    ")])}),0)])},staticRenderFns:[]};var f=n("VU/8")(u,d,!1,function(e){n("Ksa5")},null,null).exports,h={name:"LastResultDisplay",props:{lastResult:Object}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"last-result-display"},[n("h3",[e._v(e._s(e.$t("lastRound")))]),e._v(" "),n("div",{staticClass:"line"},[e._v("\n    "+e._s(e.$t("score"))+": "),n("strong",[e._v(e._s(e.lastResult.score))])]),e._v(" "),n("div",{staticClass:"line"},[e._v("\n    "+e._s(e.$t("accuracy"))+": "+e._s(e.lastResult.accuracy)+" %\n    ("+e._s(e.lastResult.numCorrect)+" "+e._s(e.$t("correct"))+", "+e._s(e.lastResult.numWrong)+" "+e._s(e.$t("wrong"))+")\n  ")])])},staticRenderFns:[]};var p=n("VU/8")(h,v,!1,function(e){n("+8qP")},"data-v-1080a46d",null).exports,m=n("RRJN"),C={lastScores:[],record:0,loadStatistics:function(){this.lastScores=m.get("lastScores",[]),this.record=m.get("record",0)},saveStatistics:function(){m.set("lastScores",this.lastScores),m.set("record",this.record)},addScore:function(e){this.lastScores.push(e),this.lastScores.length>25&&this.lastScores.shift(),e>this.record&&(this.record=e),this.saveStatistics()},resetRecord:function(){this.record=0,this.saveStatistics()}},b=(n("715g"),n("m3vp"),{name:"StatisticsGraph",data:function(){return{statistics:C}},computed:{history:function(){return this.statistics.lastScores},chartData:function(){return{labels:new Array(this.history.length).map(function(e){return""}),series:[this.history]}},chartOptions:function(){return{fullWidth:!0,chartPadding:{right:40},lineSmooth:!1}}},methods:{resetRecord:function(){C.resetRecord()}}}),E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"statistics-graph"},[n("chartist",{attrs:{ratio:"history",type:"Line",data:e.chartData,options:e.chartOptions}}),e._v(" "),n("div",[n("span",{staticClass:"record"},[e._v(e._s(e.$t("record"))+": "+e._s(e.statistics.record))]),e._v(" "),e.statistics.record>0?n("button",{staticClass:"reset",on:{click:e.resetRecord}},[e._v("\n      ❌\n    ")]):e._e()])],1)},staticRenderFns:[]};var g=n("VU/8")(b,E,!1,function(e){n("qU77")},"data-v-4591a3a5",null).exports,A=n("woOf"),_=n.n(A),R={gameLength:60,clef:["treble"],accidentals:"no",language:null,loadOptions:function(){var e=m.get("options");e&&(_()(this,e),this.convertOldClefValues())},convertOldClefValues:function(){"all"===this.clef?this.clef=["treble","bass"]:"treble"!==this.clef&&"bass"!==this.clef||(this.clef=[this.clef])},saveOptions:function(){m.set("options",this)}},S={name:"Menu",components:{SelectOption:o,SelectOptionMulti:f,LastResultDisplay:p,StatisticsGraph:g},props:{lastResult:Object},data:function(){return{options:R,statistics:C}},computed:{gameLengthOptions:function(){return[{value:20,label:this.$t("twentySeconds")},{value:60,label:this.$t("oneMinute")},{value:300,label:this.$t("fiveMinutes")},{value:0,label:this.$t("infinite")}]},clefOptions:function(){return[{value:"treble",label:this.$t("trebleClef")},{value:"bass",label:this.$t("bassClef")}]},accidentalOptions:function(){return[{value:"no",label:this.$t("none")},{value:"onlySharp",label:this.$t("sharp")},{value:"onlyFlat",label:this.$t("flat")},{value:"sharpAndFlat",label:this.$t("sharpAndFlat")}]},soundOptions:function(){return[{value:!1,label:this.$t("off")},{value:!0,label:this.$t("on")}]},languageOptions:function(){return[{value:"en",label:"EN"},{value:"de",label:"DE"},{value:"fr",label:"FR"},{value:"pl",label:"PL"}]}},watch:{"options.language":function(e){this.$i18n.locale=e}},methods:{startGame:function(){R.saveOptions(),this.$emit("startGame")}},created:function(){R.loadOptions(),C.loadStatistics()}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu"},[n("div",{staticClass:"start-container"},[n("button",{staticClass:"start",on:{click:e.startGame}},[e._v(e._s(e.$t("START")))])]),e._v(" "),e.lastResult?n("LastResultDisplay",{attrs:{lastResult:e.lastResult}}):e._e(),e._v(" "),e.statistics.lastScores.length>=2?n("StatisticsGraph"):e._e(),e._v(" "),n("div",{staticClass:"settings"},[n("h3",[e._v(e._s(e.$t("settings")))]),e._v(" "),n("div",{staticClass:"setting"},[n("SelectOption",{attrs:{label:e.$t("ROUND_LENGTH"),items:e.gameLengthOptions},model:{value:e.options.gameLength,callback:function(t){e.$set(e.options,"gameLength",t)},expression:"options.gameLength"}})],1),e._v(" "),n("div",{staticClass:"setting"},[n("SelectOptionMulti",{attrs:{label:e.$t("CLEF"),items:e.clefOptions},model:{value:e.options.clef,callback:function(t){e.$set(e.options,"clef",t)},expression:"options.clef"}})],1)])],1)},staticRenderFns:[]};var F=n("VU/8")(S,T,!1,function(e){n("SQyR")},"data-v-61dbdf20",null).exports,L={name:"ScoreLine",props:{result:Object,timeLeft:Number,isInfiniteRound:Boolean},computed:{timeLeftFormatted:function(){var e=new Date(null);return e.setSeconds(this.timeLeft),e.toISOString().substr(15,4)}}},O={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"score-line"},[e.isInfiniteRound?e._e():n("div",[n("div",{staticClass:"score-value"},[e._v(e._s(e.timeLeftFormatted))]),e._v(" "),n("div",{staticClass:"score-label"},[e._v(e._s(e.$t("TIME")))])]),e._v(" "),n("div",[n("div",{staticClass:"score-value"},[e._v(e._s(e.result.numCorrect))]),e._v(" "),n("div",{staticClass:"score-label"},[e._v(e._s(e.$t("CORRECT")))])]),e._v(" "),n("div",[n("div",{staticClass:"score-value"},[e._v(e._s(e.result.accuracy)+" %")]),e._v(" "),n("div",{staticClass:"score-label"},[e._v(e._s(e.$t("ACCURACY")))])]),e._v(" "),e.isInfiniteRound?e._e():n("div",[n("div",{staticClass:"score-value"},[e._v(e._s(e.result.score))]),e._v(" "),n("div",{staticClass:"score-label"},[e._v(e._s(e.$t("SCORE")))])])])},staticRenderFns:[]};var N=n("VU/8")(L,O,!1,function(e){n("qhme")},"data-v-308040ac",null).exports,D=n("c/Tr"),y=n.n(D),I=n("/CPA"),G=n.n(I),w=["C","C","D","D","E","F","F","G","G","A","A","B"],U={1:function(e){return e+",,,,"},2:function(e){return e+",,,"},3:function(e){return e+",,"},4:function(e){return e+","},5:function(e){return e},6:function(e){return e.toLowerCase()},7:function(e){return e.toLowerCase()+"'"},8:function(e){return e.toLowerCase()+"''"},9:function(e){return e.toLowerCase()+"'''"},10:function(e){return e.toLowerCase()+"''''"}},k=function(e){var t=w[e%12],n=Math.floor(e/12);return U[n](t)},$={name:"NoteDisplay",props:{currentExercise:Object},computed:{abc:function(){return"L:1/4\nK:C "+this.currentExercise.clef+"\n"+k(this.currentExercise.value)}},watch:{abc:function(e){var t=this;G.a.renderAbc("note-display",this.abc,{staffwidth:200,scale:2.5,clickListener:function(){return t.unselect()}})}},methods:{unselect:function(){y()(document.getElementsByTagName("path")).filter(function(e){return"#ff0000"===e.getAttribute("fill")}).forEach(function(e){return e.setAttribute("fill",null)})}}},x={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"note-display"}})},staticRenderFns:[]};var P=n("VU/8")($,x,!1,function(e){n("mkvZ")},"data-v-9f5c3d9a",null).exports,M={name:"FeedbackLine",data:function(){return{visible:!0}},computed:{visibleFeedback:function(){return this.visible?this.feedback:"none_temp"}},props:{feedback:String,uniqueId:Number},watch:{uniqueId:function(e){var t=this;this.visible=!1,setTimeout(function(){t.visible=!0},0)}}},B={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feedback-line"},["correct"===e.visibleFeedback?n("span",{staticClass:"feedback correct"},[e._v(e._s(e.$t("correctExcl")))]):e._e(),e._v(" "),"wrong"===e.visibleFeedback?n("span",{staticClass:"feedback wrong"},[e._v(e._s(e.$t("wrongExcl")))]):e._e(),e._v(" "),"none"===e.visibleFeedback?n("span",{staticClass:"feedback dummy"},[e._v("dummy")]):e._e(),e._v(" "),"none_temp"===e.visibleFeedback?n("span",{staticClass:"feedback dummy"},[e._v("dummy_temp")]):e._e()])},staticRenderFns:[]};var W,K=n("VU/8")(M,B,!1,function(e){n("Eoli")},"data-v-32916b8c",null).exports,H=n("wVp8"),V=n.n(H),Y=function(e){console.log("in Midi Func"),V.a.enable(function(t){console.log("midi enableing"),t?console.log("WebMidi could not be enabled.",t):(console.log("WebMidi is enabled."),e())})},q=function(e,t){console.log("Initiating Listening"),Y(function(){console.log("Adding Listner"),(W=V.a.inputs[0])?(e(),W.on("noteon","all",function(e){t(e)})):console.log("no inputs found, reconnect usb jack")})},Z=function(){console.log("Stopping Listening"),Y(function(){return W.removeListener("noteon","all",function(e){console.log("Stopped Listening",e)})}),V.a.disable()},j={name:"RealDeviceInput",data:function(){return{currentInput:"",isKeyBoardAvaialble:!1}},computed:{displayPressed:function(){return this.isKeyBoardAvaialble?this.currentInput?"keep trying":"Press key in Keyboard":"Keyboard not found, Refresh or Reconnect Keyboad"},noteName:function(){return this.currentInput.note.name},noteValue:function(){return this.currentInput.note.number}},methods:{pressed:function(e){this.currentInput=e,this.$emit("solved",this.noteValue)},keyboardAvaialbe:function(){this.isKeyBoardAvaialble=!0}},mounted:function(){q(this.keyboardAvaialbe,this.pressed)},beforeDestroy:function(){Z()}},z={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("   "+this._s(this.displayPressed)+"   ")])},staticRenderFns:[]},J=n("VU/8")(j,z,!1,null,null,null).exports,Q=n("M4fF"),X=n.n(Q),ee={bass:36,treble:60},te=function(e){var t=ee[e],n=t+23;return X.a.range(t,n)},ne=[1,3,6,8,10],se=function(e){var t=e%12;return!X.a.includes(ne,t)},ie=function(e,t){var n=t?te(e):function(e){return te(e).filter(se)}(e);return X.a.sample(n)},ae={name:"Game",components:{ScoreLine:N,NoteDisplay:P,FeedbackLine:K,RealDeviceInput:J},data:function(){return{options:R,currentExercise:{clef:"treble",value:36,isSharp:!1},numCorrect:0,numWrong:0,timeLeft:0,timer:null,feedback:"none",sample:null}},computed:{numAnswers:function(){return this.numCorrect+this.numWrong},accuracy:function(){return 0===this.numAnswers?0:Math.round(100*this.numCorrect/this.numAnswers)},score:function(){return 0===this.numAnswers?0:Math.round(this.baseFactor*this.numCorrect*this.numCorrect/this.numAnswers)},baseFactor:function(){return this.options.gameLength?6e3/this.options.gameLength:0},result:function(){return{numAnswers:this.numAnswers,numCorrect:this.numCorrect,numWrong:this.numWrong,accuracy:this.accuracy,score:this.score}}},methods:{startGame:function(){var e=this;this.numCorrect=0,this.numWrong=0,this.timeLeft=this.options.gameLength,this.options.gameLength&&(this.timer=setInterval(function(){e.timeLeft-=1,e.timeLeft<0&&e.onGameFinished()},1e3)),this.generateNewExercise()},onExit:function(){clearInterval(this.timer),this.sample&&this.sample.pause()},onGameFinished:function(){this.onExit(),C.addScore(this.score),this.$emit("gameEnded",this.result)},quit:function(){this.onExit(),this.$emit("gameEnded",null)},generateNewExercise:function(){for(var e=this.currentExercise;e.value===this.currentExercise.value;)e=this.generateExercise();this.currentExercise=e},generateExercise:function(){var e=Q.sample(this.options.clef);return{clef:e,value:ie(e,!1)}},checkAnswer:function(e){e===this.currentExercise.value?(this.onCorrectAnswer(),this.generateNewExercise()):this.onWrongAnswer(e)},onCorrectAnswer:function(){this.numCorrect+=1,this.feedback="correct"},onWrongAnswer:function(e){this.numWrong+=1,this.feedback="wrong","vibrate"in navigator&&navigator.vibrate(200)}},mounted:function(){this.startGame()}},re={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-screen"},[n("button",{staticClass:"quit",on:{click:e.quit}},[e._v("\n    "+e._s(e.$t("ABORT"))+"\n  ")]),e._v(" "),n("ScoreLine",{attrs:{result:e.result,timeLeft:e.timeLeft,isInfiniteRound:!e.options.gameLength}}),e._v(" "),n("FeedbackLine",{attrs:{feedback:e.feedback,uniqueId:e.numAnswers}}),e._v(" "),n("NoteDisplay",{attrs:{currentExercise:e.currentExercise}}),e._v(" "),n("RealDeviceInput",{on:{solved:e.checkAnswer}})],1)},staticRenderFns:[]};var oe={name:"App",components:{Menu:F,Game:n("VU/8")(ae,re,!1,function(e){n("AjSF")},null,null).exports},data:function(){return{page:"menu",lastResult:null}},methods:{returnToMenu:function(e){this.lastResult=e,this.page="menu"},startGame:function(){this.page="game"}}},ce={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["menu"===e.page?n("Menu",{attrs:{lastResult:e.lastResult},on:{startGame:e.startGame}}):e._e(),e._v(" "),"game"===e.page?n("Game",{on:{gameEnded:e.returnToMenu}}):e._e()],1)},staticRenderFns:[]};var le=n("VU/8")(oe,ce,!1,function(e){n("2PLl")},null,null).exports;s.a.config.productionTip=!1,"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js"),s.a.use(n("Z5Pw")),s.a.use(i.a),R.loadOptions(),R.language=R.language||navigator.language.substr(0,2);var ue=new i.a({locale:R.language,fallbackLocale:"en",messages:a});new s.a({i18n:ue,el:"#app",components:{App:le},template:"<App/>"})},SQyR:function(e,t){},m3vp:function(e,t){},mkvZ:function(e,t){},qU77:function(e,t){},qhme:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5a4d405ff61e8c275028.js.map