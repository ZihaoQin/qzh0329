// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/Logger","../../../../../core/screenUtils","../../../../3d/support/mathUtils"],function(p,m,r,t,q){function u(b){return function(a){return t.pt2px(b.getSize(a))}}function n(b){if(!b)return null;for(var a=0;a<b.length;a++){var c=b[a];if("size"===c.type)return u(c)}return null}Object.defineProperty(m,"__esModule",{value:!0});var v=function(b,a){return b.order-a.order},w=function(b,a){return b.index-a.index},x=r.getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");
m.createLabelVVEvaluator=n;p=function(){function b(a,b,h,d,k){var c=this;this._vvHandle=null;var f=a.geometryType,g=a.labelingInfo,e=a.renderer;this.vvEval=n("visualVariables"in e&&e.visualVariables);this._vvHandle=a.watch("visualVariables",function(a){c.vvEval=n(a)});a=g.map(function(a){var b=!!a.maxScale,c=!!a.minScale&&k.scaleToZoom(a.minScale)||0;a=b&&k.scaleToZoom(a.maxScale)||255;return{minZoom:q.clamp(Math.floor(10*c),0,255),maxZoom:q.clamp(Math.floor(10*a),0,255)}});this.geometryType=f;this.index=
h;this.order=d;this.zoomRanges=a;this.layerView=b}b.prototype.hasVV=function(){return!!this.vvEval};b.prototype.allOrNothing=function(){return"polyline"!==this.geometryType};b.prototype.destroy=function(){this._vvHandle.remove()};b.create=function(a,c,h,d,k){d=d.sort(v);for(var l=!1,f=-1,g=0;g<d.length;g++){var e=d[g];!l&&e.order>h&&(f=e.index,l=!0);l&&e.index++}l||(f=d.length);return new b(a,c,f,h,k)};b.delete=function(a,b){for(var c=b.sort(w),d=a+1;d<c.length;d++)b[d].index--;b[a].destroy();b.splice(a,
1)};b.find=function(a,b){for(var c=0;c<b.length;c++){var d=b[c];if(d.index===a)return d}x.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!");return null};return b}();m.default=p});