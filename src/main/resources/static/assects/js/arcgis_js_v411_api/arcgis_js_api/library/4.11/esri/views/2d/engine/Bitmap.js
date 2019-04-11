// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper @dojo/framework/shim/Set ./DisplayObject ../../webgl/Texture".split(" "),function(e,f,m,n,p,q){function r(b){var a=document.createElement("canvas");a.width=b.width;a.height=b.height;b.render(a.getContext("2d"));return a}function g(b,a,c){var d={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0};a&&c&&(d.width=a,d.height=c);return new q(b,d)}function h(b){k.has(b)&&(l.splice(l.indexOf(b),1),k.delete(b))}
Object.defineProperty(f,"__esModule",{value:!0});var l=[],k=new n.default;e=function(b){function a(c){void 0===c&&(c=null);var a=b.call(this)||this;a._height=void 0;a.pixelRatio=1;a.resolution=0;a.rotation=0;a._source=null;a._width=void 0;a.x=0;a.y=0;a.source=c;a.requestRender=a.requestRender.bind(a);return a}m(a,b);Object.defineProperty(a.prototype,"height",{get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(a){this._height=a},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"source",{get:function(){return this._source},set:function(a){this._source=a;this.invalidateTexture()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"sourceHeight",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"sourceWidth",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"width",{get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(a){this._width=a},enumerable:!0,configurable:!0});a.prototype.attach=function(){this.updateTexture();b.prototype.attach.call(this);return!0};a.prototype.detach=function(){this._texture.dispose();this._texture=null;h(this)};a.prototype.invalidateTexture=function(){this.attached?this.updateTexture():h(this)};a.prototype.updateTexture=function(){this._texture||
(this._texture=this.source?g(this.stage.context,this.sourceWidth,this.sourceHeight):g(this.stage.context));var a=this.source;a?(this._texture.resize(this.sourceWidth,this.sourceHeight),a&&"render"in a?this._texture.setData(r(a)):!a||"render"in a||this._texture.setData(a),this.sourceWidth===this.width&&this.sourceHeight===this.height||this._texture.generateMipmap(),this.ready(),this.requestRender()):this._texture.setData(null)};a.prototype.setSamplingMode=function(a){this._texture&&(this._texture.descriptor.hasMipmap?
this._texture.setSamplingMode(9728===a?9985:9729===a?9987:a):this._texture.setSamplingMode(a))};a.prototype.bind=function(a){this._texture&&this.stage.context.bindTexture(this._texture,a)};a.prototype.doRender=function(a){if(this.source&&0<this.width&&this.isReady){var b=this.resolution/this.pixelRatio/a.state.resolution;.05>b||this.stage.painter.drawBitmap(a,this,b)}};return a}(p.DisplayObject);f.Bitmap=e});