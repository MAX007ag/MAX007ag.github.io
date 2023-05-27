(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_1", frames: [[1292,0,396,873],[0,720,594,273],[596,875,594,273],[0,995,360,360],[1192,875,360,360],[0,1357,168,161],[0,0,1290,718],[362,1150,360,360]]},
		{name:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_2", frames: [[0,1082,1290,718],[0,0,1920,1080]]},
		{name:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_4", frames: [[0,0,1920,1080]]},
		{name:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_5", frames: [[0,0,1920,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2062,894);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2062,894);


(lib.bombombum = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.esp = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.frespngmateback = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FRESAINTENSAFRUTIEXPERIENCIAS = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FRESAINTENSAFRUTIEXPERIENCIAS_1 = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fruti = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FRUTI_EXPERIENCIAS = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.homeberrytitulo = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HOMEBERRY = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.matebackoriginal = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.retorno = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.videofresatitulo = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.VIDEO_FRESA = function() {
	this.initialize(ss["GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.RETORNO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.retorno();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,161);


(lib.linecruvebacking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.FRESAINTENSAFRUTIEXPERIENCIAS_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.linecruvebacking, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Interpolación24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF33CC").ss(1,1,1).p("AgDhPIAHAAIAACf");
	this.shape.setTransform(1069.525,-362.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.357)").s().p("EinGBBUMAAAiCnMFONAAAIAAHWMAAAB7Rg");
	this.shape_1.setTransform(-0.425,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1069.9,-418,2140.9,836.1);


(lib.Interpolación23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF33CC").ss(1,1,1).p("AgDhPIAHAAIAACf");
	this.shape.setTransform(1069.525,-362.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.357)").s().p("EinGBBUMAAAiCnMFONAAAIAAHWMAAAB7Rg");
	this.shape_1.setTransform(-0.425,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1069.9,-418,2140.9,836.1);


(lib.Interpolación10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.VIDEO_FRESA();
	this.instance.setTransform(-140,-140,0.7778,0.7778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.Interpolación9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.VIDEO_FRESA();
	this.instance.setTransform(-140,-140,0.7778,0.7778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.Interpolación8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.HOMEBERRY();
	this.instance.setTransform(-140,-140,0.7778,0.7778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.Interpolación7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.HOMEBERRY();
	this.instance.setTransform(-140,-140,0.7778,0.7778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.Interpolación6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.FRUTI_EXPERIENCIAS();
	this.instance.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-180,360,360);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.FRUTI_EXPERIENCIAS();
	this.instance.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-180,360,360);


(lib.fruti_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fruti();
	this.instance.setTransform(70,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fruti_1, new cjs.Rectangle(70,-95,594,273), null);


(lib.fresas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.frespngmateback();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fresas, new cjs.Rectangle(0,0,1920,1080), null);


(lib.fondo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.FRESAINTENSAFRUTIEXPERIENCIAS();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(0,0,1920,1080), null);


(lib.experiencias = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.esp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.experiencias, new cjs.Rectangle(0,0,594,273), null);


(lib.color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.matebackoriginal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color, new cjs.Rectangle(0,0,1920,1080), null);


(lib.bonbonbum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.bombombum();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonbonbum, new cjs.Rectangle(0,0,396,873), null);


(lib.VIDEO_FRESA_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación9("synched",0);
	this.instance.setTransform(140,140);

	this.instance_1 = new lib.Interpolación10("synched",0);
	this.instance_1.setTransform(140,140);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-142,-142,284,284);

	this.instance_2 = new lib.VIDEO_FRESA();
	this.instance_2.setTransform(0,0,0.7778,0.7778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,0,127.5,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-142, y:-142, w:284, h:284});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-142, y:-142, w:284, h:284});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,280);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fresas();
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.HOME_BERRY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación7("synched",0);
	this.instance.setTransform(140,140);

	this.instance_1 = new lib.Interpolación8("synched",0);
	this.instance_1.setTransform(140,140);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-142,-142,284,284);

	this.instance_2 = new lib.HOMEBERRY();
	this.instance_2.setTransform(0,0,0.7778,0.7778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,0,127.5,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-142, y:-142, w:284, h:284});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-142, y:-142, w:284, h:284});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,280);


(lib.FRUTI_EXP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación5("synched",0);
	this.instance.setTransform(180,180);

	this.instance_1 = new lib.Interpolación6("synched",0);
	this.instance_1.setTransform(180,180);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-182,-182,364,364);

	this.instance_2 = new lib.FRUTI_EXPERIENCIAS();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,0,127.5,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-182, y:-182, w:364, h:364});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-182, y:-182, w:364, h:364});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);


// stage content:
(lib.GAGA_ANIMACIONhtml_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,49,184,258,402];
	// timeline functions:
	this.frame_0 = function() {
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(54);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(262);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.RETORNO_BOTON.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(3);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(470);
		}
	}
	this.frame_49 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}
	this.frame_184 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}
	this.frame_258 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}
	this.frame_402 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(135).call(this.frame_184).wait(74).call(this.frame_258).wait(144).call(this.frame_402).wait(745));

	// RETORNO
	this.RETORNO_BOTON = new lib.RETORNO();
	this.RETORNO_BOTON.name = "RETORNO_BOTON";
	this.RETORNO_BOTON.setTransform(1793.85,827.35,1,1,0,0,0,84,80.5);
	this.RETORNO_BOTON.visible = false;
	new cjs.ButtonHelper(this.RETORNO_BOTON, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.RETORNO_BOTON).wait(52).to({visible:true},0).wait(1095));

	// FRUTI_EXP
	this.button_6 = new lib.FRUTI_EXP();
	this.button_6.name = "button_6";
	this.button_6.setTransform(579.05,661.8,0.7222,0.7222,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_6, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_6).to({_off:true},52).wait(1095));
	this.button_6.addEventListener("tick", AdobeAn.handleFilterCache);

	// HOME_BERRY
	this.button_5 = new lib.HOME_BERRY();
	this.button_5.name = "button_5";
	this.button_5.setTransform(839,477.65);
	new cjs.ButtonHelper(this.button_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_5).to({_off:true},52).wait(1095));
	this.button_5.addEventListener("tick", AdobeAn.handleFilterCache);

	// VIDEO_FRESA
	this.button_4 = new lib.VIDEO_FRESA_1();
	this.button_4.name = "button_4";
	this.button_4.setTransform(1119,661.75);
	new cjs.ButtonHelper(this.button_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_4).to({_off:true},52).wait(1095));
	this.button_4.addEventListener("tick", AdobeAn.handleFilterCache);

	// Capa_5
	this.instance = new lib.an_Video({'id': '', 'src':'videos/FRESA%20INTESA%202.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance.setTransform(1292.2,747,1.4375,1.0769,0,0,0,200.7,150.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(193).to({_off:true},2).wait(889));

	// Capa_4
	this.instance_1 = new lib.an_Video({'id': 'instance_1', 'src':'videos/FRESA%20INTENSA.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_1.setTransform(689.9,747.25,1.431,1.0733,0,0,0,199.8,150.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(193).to({_off:true},2).wait(889));

	// Capa_3
	this.instance_2 = new lib.an_Video({'id': 'instance_2', 'src':'videos/FRESA%20INTENSA%20FINAL%20.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_2.setTransform(960,540,4.8,3.6,0,0,0,200,150);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(468).to({_off:false},0).wait(679));

	// Capa_2
	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(475.5,496.75,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(475.5,496.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},276).to({state:[{t:this.instance_4}]},3).to({state:[]},155).wait(713));

	// HOME_BERRY
	this.instance_5 = new lib.homeberrytitulo();
	this.instance_5.setTransform(364,-25,0.9989,0.9989);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(272).to({_off:false},0).wait(1).to({_off:true},161).wait(713));

	// bonbonbum_BOTTOM
	this.instance_6 = new lib.bonbonbum();
	this.instance_6.setTransform(240.75,893.7,0.9989,0.9989,0,0,0,198.1,436.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(261).to({_off:false},0).to({regX:198.2,regY:436.6,scaleX:0.9988,scaleY:0.9988,rotation:13.9963,x:229.15,y:849.9},41).to({regX:197.8,regY:436.7,rotation:-5.9963,x:228.95},23).to({regX:198.2,regY:436.8,rotation:-0.7186,x:229.05,y:850.05},6).to({regX:198.1,regY:436.6,rotation:15.9965,x:229,y:849.85},19).to({regX:197.8,scaleX:0.9989,scaleY:0.9989,rotation:-4.9971,x:228.95},38).to({regX:198.2,regY:436.7,rotation:4.9971,x:235,y:881.1},15).to({_off:true},16).wait(728));

	// Back_Menu
	this.instance_7 = new lib.Interpolación23("synched",0);
	this.instance_7.setTransform(-1112.95,562.25,0.9989,0.9989,0,0,0,-0.1,0.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.Interpolación24("synched",0);
	this.instance_8.setTransform(955.7,550.7,0.9989,0.9989,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},261).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},61).to({state:[]},88).wait(728));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(261).to({_off:false},0).to({_off:true,regX:0.1,x:955.7,y:550.7},9).wait(877));

	// bonbonbum_TOP
	this.instance_9 = new lib.bonbonbum();
	this.instance_9.setTransform(1552.4,175.05,0.9989,0.9989,-164.0001,0,0,197.8,436.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(261).to({_off:false},0).to({regY:436.5,scaleX:0.9988,scaleY:0.9988,rotation:-189.9959,x:1607.7,y:174.95},50).to({regY:436.4,scaleX:0.9989,scaleY:0.9989,rotation:-180.2538,x:1607.6,y:175.05},20).to({regY:436.5,rotation:-171.0048,x:1607.5,y:174.95},19).to({regX:198,scaleX:0.9988,scaleY:0.9988,rotation:-192.9976,y:175},53).to({_off:true},16).wait(728));

	// EFECTO_HUMO_ROSA
	this.instance_10 = new lib.linecruvebacking();
	this.instance_10.setTransform(652.75,673.65,1.318,1.3179,0,0,0,960.1,540);
	this.instance_10._off = true;
	var instance_10Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_10.filters = [instance_10Filter_1];
	this.instance_10.cache(-2,-2,1924,1084);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(261).to({_off:false},0).to({x:704.6,y:676.95},12).to({x:864.3,y:686.85},37).to({scaleX:1.3179,scaleY:1.3178,x:1032.65,y:697.45},39).to({regY:540.1,scaleX:1.318,scaleY:1.3179,x:1265.4,y:711.8},54).to({_off:true},11).wait(733));
	this.timeline.addTween(cjs.Tween.get(instance_10Filter_1).wait(261).to(new cjs.ColorFilter(0.87890625,0.87890625,0.87890625,1,31,31,31,0), 12).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 37).to(new cjs.ColorFilter(0.7109375,0.7109375,0.7109375,1,74,74,74,0), 39).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 54).wait(733));

	// EFECTO_HUMO_ROSA
	this.instance_11 = new lib.linecruvebacking();
	this.instance_11.setTransform(621.5,673.65,1.318,1.3179,0,0,0,960.1,540);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(261).to({_off:false},0).to({regX:960.4,scaleX:1.2692,scaleY:1.931,x:1312.55,y:696.2},142).to({_off:true},11).wait(733));

	// EFECTO_HUMO_ROSA
	this.instance_12 = new lib.linecruvebacking();
	this.instance_12.setTransform(652.75,673.65,1.318,1.3179,0,0,0,960.1,540);
	this.instance_12._off = true;
	var instance_12Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_12.filters = [instance_12Filter_2];
	this.instance_12.cache(-2,-2,1924,1084);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(261).to({_off:false},0).to({x:704.6,y:676.95},12).to({x:864.3,y:686.85},37).to({scaleX:1.3179,scaleY:1.3178,x:1032.65,y:697.45},39).to({regY:540.1,scaleX:1.318,scaleY:1.3179,x:1265.4,y:711.8},54).to({_off:true},11).wait(733));
	this.timeline.addTween(cjs.Tween.get(instance_12Filter_2).wait(261).to(new cjs.ColorFilter(0.87890625,0.87890625,0.87890625,1,31,31,31,0), 12).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 37).to(new cjs.ColorFilter(0.7109375,0.7109375,0.7109375,1,74,74,74,0), 39).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 54).wait(733));

	// EFECTO_HUMO_ROSA
	this.instance_13 = new lib.linecruvebacking();
	this.instance_13.setTransform(621.5,673.65,1.318,1.3179,0,0,0,960.1,540);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(261).to({_off:false},0).to({regX:960.4,scaleX:1.2692,scaleY:1.931,x:1312.55,y:696.2},142).to({_off:true},11).wait(733));

	// Fresas_Backing
	this.instance_14 = new lib.Símbolo1();
	this.instance_14.setTransform(78.75,761.2,0.5884,0.5883,0,0,0,960.7,540.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(261).to({_off:false},0).to({regX:960.8,regY:540.3,scaleX:1.0084,scaleY:1.0084,rotation:0.8055,x:359.5,y:724.85},115).to({regX:959.9,regY:540.2,scaleX:1.107,scaleY:1.107,rotation:0.9975,x:425.4,y:716.3},27).to({_off:true},11).wait(733));

	// Fresas_Backing
	this.instance_15 = new lib.Símbolo1();
	this.instance_15.setTransform(1554.65,462.6,0.5884,0.5883,0,0,0,961.2,540.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(261).to({_off:false},0).to({regX:961.1,scaleX:0.6322,scaleY:0.6321,rotation:0.0788,x:1570.6,y:425.1},12).to({regX:960.2,regY:540,scaleX:1.107,scaleY:1.107,rotation:0.9975,x:1743.6,y:20.15},130).wait(1).to({_off:true},10).wait(733));

	// Fresas_Backing
	this.instance_16 = new lib.Símbolo1();
	this.instance_16.setTransform(959.05,539.4,0.9989,0.9989,0,0,0,960.1,540);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(261).to({_off:false},0).to({regX:960,regY:540.1,scaleX:1.0118,scaleY:1.0118,rotation:-1.3135,x:966.2,y:539.3},17).to({scaleX:1.1071,scaleY:1.1071,rotation:-10.9986,x:1019,y:538.55},125).wait(1).to({_off:true},10).wait(733));

	// Color_Back_Difusion
	this.instance_17 = new lib.color();
	this.instance_17.setTransform(959.05,539.4,0.9989,0.9989,0,0,0,960.1,540);
	this.instance_17.compositeOperation = "darken";
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(261).to({_off:false},0).to({regX:959.9,regY:539.8,scaleX:1.0125,scaleY:1.0125,x:961.55,y:538.5},5).to({regY:540,scaleX:1.0152,scaleY:1.0152,x:962.1,y:538.45},1).to({regX:960,regY:539.9,scaleX:1.0179,scaleY:1.0179,x:962.75,y:538.3},1).to({regX:959.8,scaleX:1.0206,scaleY:1.0206,x:963.1,y:538.05},1).to({scaleX:1.0616,scaleY:1.0616,x:971.15,y:535.45},15).to({regX:960,regY:539.8,scaleX:1.0698,scaleY:1.0698,x:972.9,y:534.8},3).to({regX:959.8,regY:539.9,scaleX:1.0724,scaleY:1.0724,x:973.3,y:534.6},1).to({regX:959.9,scaleX:1.1243,scaleY:1.1243,x:983.6,y:531.3},19).to({regX:960,regY:539.8,scaleX:1.1379,scaleY:1.1379,x:986.25,y:530.45},5).to({regX:959.8,scaleX:1.1543,scaleY:1.1543,x:989.4,y:529.45},6).to({regX:959.9,regY:539.9,scaleX:1.217,scaleY:1.217,x:1001.55,y:525.5},23).to({regY:539.8,scaleX:1.2252,scaleY:1.2252,x:1003.25,y:524.85},3).to({scaleX:1.2416,scaleY:1.2415,x:1006.4,y:523.85},6).to({regX:959.8,regY:539.6,scaleX:1.3016,scaleY:1.3016,x:1018,y:519.75},22).to({scaleX:1.3125,scaleY:1.3125,x:1020.2,y:519.15},4).to({regX:959.6,scaleX:1.3235,scaleY:1.3234,x:1022.05,y:518.4},4).to({regX:960.1,regY:539.9,scaleX:1.3864,scaleY:1.3863,x:1034.45,y:514.4},23).to({_off:true},8).wait(736));

	// BackGraund
	this.instance_18 = new lib.fondo();
	this.instance_18.setTransform(958.95,539.4,0.9989,0.9989,0,0,0,960,540);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(261).to({_off:false},0).to({regX:959.8,regY:539.9,scaleX:1.1204,scaleY:1.1204,x:958.75},142).to({_off:true},8).wait(736));

	// VIDEO_FRESA
	this.instance_19 = new lib.videofresatitulo();
	this.instance_19.setTransform(344,-25,0.9989,0.9989);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(66).to({_off:false},0).to({_off:true},140).wait(941));

	// bonbonbum_BOTTOM
	this.instance_20 = new lib.bonbonbum();
	this.instance_20.setTransform(240.75,893.7,0.9989,0.9989,0,0,0,198.1,436.7);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(52).to({_off:false},0).to({regX:198.2,regY:436.6,scaleX:0.9988,scaleY:0.9988,rotation:13.9963,x:229.15,y:849.9},41).to({regX:197.8,regY:436.7,rotation:-5.9963,x:228.95},23).to({regX:198.2,regY:436.8,rotation:-0.7186,x:229.05,y:850.05},6).to({regX:198.1,regY:436.6,rotation:15.9965,x:229,y:849.85},19).to({regX:197.8,scaleX:0.9989,scaleY:0.9989,rotation:-4.9971,x:228.95},39).to({regX:198.2,regY:436.7,rotation:4.9971,x:235,y:881.1},15).to({_off:true},10).wait(942));

	// Back_Menu
	this.instance_21 = new lib.Interpolación23("synched",0);
	this.instance_21.setTransform(-1112.95,562.25,0.9989,0.9989,0,0,0,-0.1,0.1);
	this.instance_21._off = true;

	this.instance_22 = new lib.Interpolación24("synched",0);
	this.instance_22.setTransform(928.95,550.7,0.9989,0.9989,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},52).to({state:[{t:this.instance_22,p:{x:928.95}}]},9).to({state:[{t:this.instance_22,p:{x:955.7}}]},61).to({state:[]},83).wait(942));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(52).to({_off:false},0).to({_off:true,regX:0.1,x:928.95,y:550.7},9).wait(1086));

	// bonbonbum_TOP
	this.instance_23 = new lib.bonbonbum();
	this.instance_23.setTransform(1552.4,175.05,0.9989,0.9989,-164.0001,0,0,197.8,436.4);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(52).to({_off:false},0).to({regY:436.5,scaleX:0.9988,scaleY:0.9988,rotation:-189.9959,x:1607.7,y:174.95},50).to({regY:436.4,scaleX:0.9989,scaleY:0.9989,rotation:-180.2538,x:1607.6,y:175.05},20).to({regY:436.5,rotation:-171.0048,x:1607.5,y:174.95},19).to({regX:198,scaleX:0.9988,scaleY:0.9988,rotation:-192.9976,y:175},54).to({_off:true},10).wait(942));

	// EFECTO_HUMO_ROSA
	this.instance_24 = new lib.linecruvebacking();
	this.instance_24.setTransform(652.75,673.65,1.318,1.3179,0,0,0,960.1,540);
	this.instance_24._off = true;
	var instance_24Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_24.filters = [instance_24Filter_3];
	this.instance_24.cache(-2,-2,1924,1084);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(52).to({_off:false},0).to({x:704.6,y:676.95},12).to({x:864.3,y:686.85},37).to({scaleX:1.3179,scaleY:1.3178,x:1032.65,y:697.45},39).to({regY:540.1,scaleX:1.318,scaleY:1.3179,x:1265.4,y:711.8},55).to({_off:true},14).wait(938));
	this.timeline.addTween(cjs.Tween.get(instance_24Filter_3).wait(52).to(new cjs.ColorFilter(0.87890625,0.87890625,0.87890625,1,31,31,31,0), 12).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 37).to(new cjs.ColorFilter(0.7109375,0.7109375,0.7109375,1,74,74,74,0), 39).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 55).wait(938));

	// EFECTO_HUMO_ROSA
	this.instance_25 = new lib.linecruvebacking();
	this.instance_25.setTransform(621.5,673.65,1.318,1.3179,0,0,0,960.1,540);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(52).to({_off:false},0).to({regX:960.4,scaleX:1.2692,scaleY:1.931,x:1312.55,y:696.2},143).to({_off:true},14).wait(938));

	// EFECTO_HUMO_ROSA
	this.instance_26 = new lib.linecruvebacking();
	this.instance_26.setTransform(652.75,673.65,1.318,1.3179,0,0,0,960.1,540);
	this.instance_26._off = true;
	var instance_26Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_26.filters = [instance_26Filter_4];
	this.instance_26.cache(-2,-2,1924,1084);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(52).to({_off:false},0).to({x:704.6,y:676.95},12).to({x:864.3,y:686.85},37).to({scaleX:1.3179,scaleY:1.3178,x:1032.65,y:697.45},39).to({regY:540.1,scaleX:1.318,scaleY:1.3179,x:1265.4,y:711.8},55).to({_off:true},14).wait(938));
	this.timeline.addTween(cjs.Tween.get(instance_26Filter_4).wait(52).to(new cjs.ColorFilter(0.87890625,0.87890625,0.87890625,1,31,31,31,0), 12).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 37).to(new cjs.ColorFilter(0.7109375,0.7109375,0.7109375,1,74,74,74,0), 39).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 55).wait(938));

	// EFECTO_HUMO_ROSA
	this.instance_27 = new lib.linecruvebacking();
	this.instance_27.setTransform(621.5,673.65,1.318,1.3179,0,0,0,960.1,540);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(52).to({_off:false},0).to({regX:960.4,scaleX:1.2692,scaleY:1.931,x:1312.55,y:696.2},143).to({_off:true},14).wait(938));

	// Fresas_Backing
	this.instance_28 = new lib.Símbolo1();
	this.instance_28.setTransform(78.75,761.2,0.5884,0.5883,0,0,0,960.7,540.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(52).to({_off:false},0).to({regX:960.8,regY:540.3,scaleX:1.0084,scaleY:1.0084,rotation:0.8055,x:359.5,y:724.85},115).to({regX:959.9,regY:540.2,scaleX:1.107,scaleY:1.107,rotation:0.9975,x:425.4,y:716.3},28).to({_off:true},14).wait(938));

	// Fresas_Backing
	this.instance_29 = new lib.Símbolo1();
	this.instance_29.setTransform(1554.65,462.6,0.5884,0.5883,0,0,0,961.2,540.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(52).to({_off:false},0).to({regX:961.1,scaleX:0.6322,scaleY:0.6321,rotation:0.0788,x:1570.6,y:425.1},12).to({regX:960.2,regY:540,scaleX:1.107,scaleY:1.107,rotation:0.9975,x:1743.6,y:20.15},131).wait(1).to({_off:true},13).wait(938));

	// Fresas_Backing
	this.instance_30 = new lib.Símbolo1();
	this.instance_30.setTransform(959.05,539.4,0.9989,0.9989,0,0,0,960.1,540);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(52).to({_off:false},0).to({regX:960,regY:540.1,scaleX:1.0118,scaleY:1.0118,rotation:-1.3135,x:966.2,y:539.3},17).to({scaleX:1.1071,scaleY:1.1071,rotation:-10.9986,x:1019,y:538.55},126).wait(1).to({_off:true},13).wait(938));

	// Color_Back_Difusion
	this.instance_31 = new lib.color();
	this.instance_31.setTransform(959.05,539.4,0.9989,0.9989,0,0,0,960.1,540);
	this.instance_31.compositeOperation = "darken";
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(52).to({_off:false},0).to({regX:959.9,regY:539.8,scaleX:1.0125,scaleY:1.0125,x:961.55,y:538.5},5).to({regY:540,scaleX:1.0152,scaleY:1.0152,x:962.1,y:538.45},1).to({regX:960,regY:539.9,scaleX:1.0179,scaleY:1.0179,x:962.75,y:538.3},1).to({regX:959.8,scaleX:1.0206,scaleY:1.0206,x:963.1,y:538.05},1).to({scaleX:1.0616,scaleY:1.0616,x:971.15,y:535.45},15).to({regX:960,regY:539.8,scaleX:1.0698,scaleY:1.0698,x:972.9,y:534.8},3).to({regX:959.8,regY:539.9,scaleX:1.0724,scaleY:1.0724,x:973.3,y:534.6},1).to({regX:959.9,scaleX:1.1243,scaleY:1.1243,x:983.6,y:531.3},19).to({regX:960,regY:539.8,scaleX:1.1379,scaleY:1.1379,x:986.25,y:530.45},5).to({regX:959.8,scaleX:1.1543,scaleY:1.1543,x:989.4,y:529.45},6).to({regX:959.9,regY:539.9,scaleX:1.217,scaleY:1.217,x:1001.55,y:525.5},23).to({regY:539.8,scaleX:1.2252,scaleY:1.2252,x:1003.25,y:524.85},3).to({scaleX:1.2416,scaleY:1.2415,x:1006.4,y:523.85},6).to({regX:959.8,regY:539.6,scaleX:1.3016,scaleY:1.3016,x:1018,y:519.75},22).to({scaleX:1.3125,scaleY:1.3125,x:1020.2,y:519.15},4).to({regX:959.6,scaleX:1.3235,scaleY:1.3234,x:1022.05,y:518.4},4).to({regX:960.1,regY:539.9,scaleX:1.3864,scaleY:1.3863,x:1034.45,y:514.4},24).to({_off:true},24).wait(928));

	// BackGraund
	this.instance_32 = new lib.fondo();
	this.instance_32.setTransform(958.95,539.4,0.9989,0.9989,0,0,0,960,540);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(52).to({_off:false},0).to({regX:959.8,regY:539.9,scaleX:1.1204,scaleY:1.1204,x:958.75},143).to({_off:true},24).wait(928));

	// FRESA
	this.instance_33 = new lib.fruti_1();
	this.instance_33.setTransform(996.4,436.55,0.3384,0.3384,0,0,0,264.8,151.3);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(9).to({_off:false},0).to({regX:264.1,regY:150.7,scaleX:0.9989,scaleY:0.9989,x:940,y:348.2,alpha:1},6).wait(3).to({alpha:0.8984},3).to({alpha:0.6094},12).wait(58).to({_off:true},44).wait(1012));

	// INTENSA
	this.instance_34 = new lib.experiencias();
	this.instance_34.setTransform(1228.05,1305.95,0.9989,0.9989,0,0,0,515.6,150.7);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(11).to({_off:false},0).to({x:1204.15,y:396.15,alpha:0.6992},10).to({alpha:1},11).wait(62).to({_off:true},41).wait(1012));

	// bonbonbum_BOTTOM
	this.instance_35 = new lib.bonbonbum();
	this.instance_35.setTransform(240.75,893.7,0.9989,0.9989,0,0,0,198.1,436.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({regX:198.2,regY:436.6,scaleX:0.9988,scaleY:0.9988,rotation:13.9963,x:229.15,y:849.9},41).to({regX:197.8,regY:436.7,rotation:-5.9963,x:228.95},23).to({regX:198.2,regY:436.8,rotation:-0.7186,x:229.05,y:850.05},6).to({regX:198.1,regY:436.6,rotation:15.9965,x:229,y:849.85},19).to({regX:197.8,scaleX:0.9989,scaleY:0.9989,rotation:-4.9971,x:228.95},38).to({regX:198.2,regY:436.7,rotation:4.9971,x:235,y:881.1},15).to({_off:true},2).wait(1003));

	// Back_Menu
	this.instance_36 = new lib.Interpolación23("synched",0);
	this.instance_36.setTransform(-1112.95,562.25,0.9989,0.9989,0,0,0,-0.1,0.1);

	this.instance_37 = new lib.Interpolación24("synched",0);
	this.instance_37.setTransform(955.7,550.7,0.9989,0.9989,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36}]}).to({state:[{t:this.instance_37}]},9).to({state:[{t:this.instance_37}]},61).to({state:[]},74).wait(1003));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({_off:true,regX:0.1,x:955.7,y:550.7},9).wait(1138));

	// bonbonbum_TOP
	this.instance_38 = new lib.bonbonbum();
	this.instance_38.setTransform(1552.4,175.05,0.9989,0.9989,-164.0001,0,0,197.8,436.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({regY:436.5,scaleX:0.9988,scaleY:0.9988,rotation:-189.9959,x:1607.7,y:174.95},50).to({regY:436.4,scaleX:0.9989,scaleY:0.9989,rotation:-180.2538,x:1607.6,y:175.05},20).to({regY:436.5,rotation:-171.0048,x:1607.5,y:174.95},19).to({regX:198,scaleX:0.9988,scaleY:0.9988,rotation:-192.9976,y:175},53).to({_off:true},2).wait(1003));

	// EFECTO_HUMO_ROSA
	this.instance_39 = new lib.linecruvebacking();
	this.instance_39.setTransform(652.75,673.65,1.318,1.3179,0,0,0,960.1,540);
	var instance_39Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_39.filters = [instance_39Filter_5];
	this.instance_39.cache(-2,-2,1924,1084);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({x:704.6,y:676.95},12).to({x:864.3,y:686.85},37).to({scaleX:1.3179,scaleY:1.3178,x:1032.65,y:697.45},39).to({regY:540.1,scaleX:1.318,scaleY:1.3179,x:1265.4,y:711.8},54).to({_off:true},2).wait(1003));
	this.timeline.addTween(cjs.Tween.get(instance_39Filter_5).to(new cjs.ColorFilter(0.87890625,0.87890625,0.87890625,1,31,31,31,0), 12).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 37).to(new cjs.ColorFilter(0.7109375,0.7109375,0.7109375,1,74,74,74,0), 39).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 54).wait(1003));

	// EFECTO_HUMO_ROSA
	this.instance_40 = new lib.linecruvebacking();
	this.instance_40.setTransform(621.5,673.65,1.318,1.3179,0,0,0,960.1,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({regX:960.4,scaleX:1.2692,scaleY:1.931,x:1312.55,y:696.2},142).to({_off:true},2).wait(1003));

	// EFECTO_HUMO_ROSA
	this.instance_41 = new lib.linecruvebacking();
	this.instance_41.setTransform(652.75,673.65,1.318,1.3179,0,0,0,960.1,540);
	var instance_41Filter_6 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_41.filters = [instance_41Filter_6];
	this.instance_41.cache(-2,-2,1924,1084);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({x:704.6,y:676.95},12).to({x:864.3,y:686.85},37).to({scaleX:1.3179,scaleY:1.3178,x:1032.65,y:697.45},39).to({regY:540.1,scaleX:1.318,scaleY:1.3179,x:1265.4,y:711.8},54).to({_off:true},2).wait(1003));
	this.timeline.addTween(cjs.Tween.get(instance_41Filter_6).to(new cjs.ColorFilter(0.87890625,0.87890625,0.87890625,1,31,31,31,0), 12).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 37).to(new cjs.ColorFilter(0.7109375,0.7109375,0.7109375,1,74,74,74,0), 39).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 54).wait(1003));

	// EFECTO_HUMO_ROSA
	this.instance_42 = new lib.linecruvebacking();
	this.instance_42.setTransform(621.5,673.65,1.318,1.3179,0,0,0,960.1,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).to({regX:960.4,scaleX:1.2692,scaleY:1.931,x:1312.55,y:696.2},142).to({_off:true},2).wait(1003));

	// Fresas_Backing
	this.instance_43 = new lib.Símbolo1();
	this.instance_43.setTransform(78.75,761.2,0.5884,0.5883,0,0,0,960.7,540.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({regX:960.8,regY:540.3,scaleX:1.0084,scaleY:1.0084,rotation:0.8055,x:359.5,y:724.85},115).to({regX:959.9,regY:540.2,scaleX:1.107,scaleY:1.107,rotation:0.9975,x:425.4,y:716.3},27).to({_off:true},2).wait(1003));

	// Fresas_Backing
	this.instance_44 = new lib.Símbolo1();
	this.instance_44.setTransform(1554.65,462.6,0.5884,0.5883,0,0,0,961.2,540.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({regX:961.1,scaleX:0.6322,scaleY:0.6321,rotation:0.0788,x:1570.6,y:425.1},12).to({regX:960.2,regY:540,scaleX:1.107,scaleY:1.107,rotation:0.9975,x:1743.6,y:20.15},130).wait(1).to({_off:true},1).wait(1003));

	// Fresas_Backing
	this.instance_45 = new lib.Símbolo1();
	this.instance_45.setTransform(959.05,539.4,0.9989,0.9989,0,0,0,960.1,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({regX:960,regY:540.1,scaleX:1.0118,scaleY:1.0118,rotation:-1.3135,x:966.2,y:539.3},17).to({scaleX:1.1071,scaleY:1.1071,rotation:-10.9986,x:1019,y:538.55},125).wait(1).to({_off:true},1).wait(1003));

	// Color_Back_Difusion
	this.instance_46 = new lib.color();
	this.instance_46.setTransform(959.05,539.4,0.9989,0.9989,0,0,0,960.1,540);
	this.instance_46.compositeOperation = "darken";

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({regX:959.9,regY:539.8,scaleX:1.0125,scaleY:1.0125,x:961.55,y:538.5},5).to({regY:540,scaleX:1.0152,scaleY:1.0152,x:962.1,y:538.45},1).to({regX:960,regY:539.9,scaleX:1.0179,scaleY:1.0179,x:962.75,y:538.3},1).to({regX:959.8,scaleX:1.0206,scaleY:1.0206,x:963.1,y:538.05},1).to({scaleX:1.0616,scaleY:1.0616,x:971.15,y:535.45},15).to({regX:960,regY:539.8,scaleX:1.0698,scaleY:1.0698,x:972.9,y:534.8},3).to({regX:959.8,regY:539.9,scaleX:1.0724,scaleY:1.0724,x:973.3,y:534.6},1).to({regX:959.9,scaleX:1.1243,scaleY:1.1243,x:983.6,y:531.3},19).to({regX:960,regY:539.8,scaleX:1.1379,scaleY:1.1379,x:986.25,y:530.45},5).to({regX:959.8,scaleX:1.1543,scaleY:1.1543,x:989.4,y:529.45},6).to({regX:959.9,regY:539.9,scaleX:1.217,scaleY:1.217,x:1001.55,y:525.5},23).to({regY:539.8,scaleX:1.2252,scaleY:1.2252,x:1003.25,y:524.85},3).to({scaleX:1.2416,scaleY:1.2415,x:1006.4,y:523.85},6).to({regX:959.8,regY:539.6,scaleX:1.3016,scaleY:1.3016,x:1018,y:519.75},22).to({scaleX:1.3125,scaleY:1.3125,x:1020.2,y:519.15},4).to({regX:959.6,scaleX:1.3235,scaleY:1.3234,x:1022.05,y:518.4},4).to({regX:960.1,regY:539.9,scaleX:1.3864,scaleY:1.3863,x:1034.45,y:514.4},23).to({_off:true},2).wait(1003));

	// BackGraund
	this.instance_47 = new lib.fondo();
	this.instance_47.setTransform(958.95,539.4,0.9989,0.9989,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({regX:959.8,regY:539.9,scaleX:1.1204,scaleY:1.1204,x:958.75},142).to({_off:true},2).wait(1003));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiXjhV7MEvHAAAMAAACr3MkvHAAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EiXjBV8MAAAir3MEvHAAAMAAACr3g");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1147));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_10, startFrame:261, endFrame:261, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_10, startFrame:262, endFrame:273, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_10, startFrame:274, endFrame:310, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_10, startFrame:311, endFrame:349, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_10, startFrame:350, endFrame:403, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_12, startFrame:261, endFrame:261, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_12, startFrame:262, endFrame:273, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_12, startFrame:274, endFrame:310, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_12, startFrame:311, endFrame:349, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_12, startFrame:350, endFrame:403, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_24, startFrame:52, endFrame:52, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_24, startFrame:53, endFrame:64, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_24, startFrame:65, endFrame:101, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_24, startFrame:102, endFrame:140, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_24, startFrame:141, endFrame:195, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_26, startFrame:52, endFrame:52, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_26, startFrame:53, endFrame:64, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_26, startFrame:65, endFrame:101, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_26, startFrame:102, endFrame:140, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_26, startFrame:141, endFrame:195, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_39, startFrame:1, endFrame:12, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_39, startFrame:0, endFrame:0, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_39, startFrame:13, endFrame:49, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_39, startFrame:50, endFrame:88, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_39, startFrame:89, endFrame:142, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_41, startFrame:1, endFrame:12, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_41, startFrame:0, endFrame:0, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_41, startFrame:13, endFrame:49, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_41, startFrame:50, endFrame:88, x:-2, y:-2, w:1924, h:1084});
	this.filterCacheList.push({instance: this.instance_41, startFrame:89, endFrame:142, x:-2, y:-2, w:1924, h:1084});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1221.6,-56,4038,1795);
// library properties:
lib.properties = {
	id: '6D2D86C763B83D4DB766CB2DBA5CB530',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png?1685150188277", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png?1685150188277", id:"CachedBmp_1"},
		{src:"images/GAGA_ANIMACION_html_HTML5 Canvas_atlas_1.png?1685150188154", id:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_1"},
		{src:"images/GAGA_ANIMACION_html_HTML5 Canvas_atlas_2.png?1685150188154", id:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_2"},
		{src:"images/GAGA_ANIMACION_html_HTML5 Canvas_atlas_3.png?1685150188154", id:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_3"},
		{src:"images/GAGA_ANIMACION_html_HTML5 Canvas_atlas_4.png?1685150188154", id:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_4"},
		{src:"images/GAGA_ANIMACION_html_HTML5 Canvas_atlas_5.png?1685150188154", id:"GAGA_ANIMACION_html_HTML5 Canvas_atlas_5"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1685150188277", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1685150188277", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1685150188277", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6D2D86C763B83D4DB766CB2DBA5CB530'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;