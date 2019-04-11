// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/Accessor ../../../../../core/HandleOwner ../../../../../core/accessorSupport/decorators".split(" "),function(e,f,g,d,h,k,b){Object.defineProperty(f,"__esModule",{value:!0});e=function(e){function a(c){c=e.call(this)||this;c.tiles=new Map;c.layer=null;return c}g(a,e);a.prototype.destroy=function(){this.tiles.clear();this.layer=this.layerView=this.tileInfoView=
this.configuration=this.tiles=null};Object.defineProperty(a.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0});a.prototype.acquireTile=function(c){var a=this,b=this.createTile(c);b.once("isReady",function(){return a.notifyChange("updating")});this.tiles.set(c.id,b);return b};a.prototype.forEachTile=function(a){this.tiles.forEach(a)};a.prototype.releaseTile=function(a){this.tiles.delete(a.key.id);this.disposeTile(a)};a.prototype.isUpdating=function(){var a=
!0;this.tiles.forEach(function(b){a=a&&b.isReady});return!a};a.prototype.requestUpdate=function(){this.layerView.requestUpdate()};d([b.property()],a.prototype,"configuration",void 0);d([b.property()],a.prototype,"layer",void 0);d([b.property()],a.prototype,"layerView",void 0);d([b.property()],a.prototype,"tileInfoView",void 0);d([b.property()],a.prototype,"updating",null);return a=d([b.subclass()],a)}(b.declared(h,k));f.default=e});