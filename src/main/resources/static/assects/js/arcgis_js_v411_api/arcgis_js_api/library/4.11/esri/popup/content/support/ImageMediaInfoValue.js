// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/JSONSupport ../../../core/accessorSupport/decorators".split(" "),function(h,k,f,c,g,b){return function(e){function a(a){a=e.call(this)||this;a.linkURL=null;a.sourceURL=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({linkURL:this.linkURL,sourceURL:this.sourceURL})};var d;c([b.property({type:String,json:{write:!0}})],a.prototype,"linkURL",void 0);c([b.property({type:String,
json:{write:!0}})],a.prototype,"sourceURL",void 0);return a=d=c([b.subclass("esri.popup.content.support.ImageMediaInfoValue")],a)}(b.declared(g))});