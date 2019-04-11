// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../request ../../core/Error ../../core/Logger ../../core/MultiOriginJSONSupport ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../geometry/Extent ../../geometry/HeightModelInfo ../../geometry/SpatialReference ../Layer ./ArcGISService ./OperationalLayer ./PortalLayer ../support/arcgisLayerUrl ../support/commonProperties".split(" "),function(B,C,p,e,g,q,r,t,
l,m,d,n,u,h,v,w,x,y,f,z){var A=r.getLogger("esri.layers.mixins.SceneService");return function(k){function c(){var a=null!==k&&k.apply(this,arguments)||this;a.blendMode=null;a.spatialReference=null;a.fullExtent=null;a.heightModelInfo=null;a.version={major:Number.NaN,minor:Number.NaN,versionString:""};a.copyright=null;a.sublayerTitleMode="item-title";a.title=null;a.layerId=null;return a}p(c,k);c.prototype.readSpatialReference=function(a,b){return this._readSpatialReference(b)};c.prototype._readSpatialReference=
function(a){if(null!=a.spatialReference)return h.fromJSON(a.spatialReference);a=a.store;a=(a=a.indexCRS||a.geographicCRS)&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10);return null!=a?new h(a):null};c.prototype.readFullExtent=function(a,b){a=b.store;b=this._readSpatialReference(b);return null==b||null==a||null==a.extent||!Array.isArray(a.extent)||a.extent.some(function(a){return-1E38>a})?null:new n({xmin:a.extent[0],ymin:a.extent[1],xmax:a.extent[2],ymax:a.extent[3],spatialReference:b})};
c.prototype.readVersion=function(a,b){a=b.store;b=null!=a.version?a.version.toString():"";a={major:Number.NaN,minor:Number.NaN,versionString:b};b=b.split(".");2<=b.length&&(a.major=parseInt(b[0],10),a.minor=parseInt(b[1],10));return a};c.prototype.readTitlePortalItem=function(a,b){return"item-title"!==this.sublayerTitleMode?void 0:a};c.prototype.readTitleService=function(a,b){a=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return f.titleFromUrlAndName(this.url,b.name);
b=b.name||f.parse(this.url).title;"item-title-and-service-name"===this.sublayerTitleMode&&a&&(b=a+" - "+b);return f.cleanTitle(b)};c.prototype.readLayerId=function(a,b){return b.id};Object.defineProperty(c.prototype,"url",{set:function(a){a=f.sanitizeUrlWithLayerId(this,a,A);this._set("url",a.url);null!=a.layerId&&this._set("layerId",a.layerId)},enumerable:!0,configurable:!0});c.prototype.writeUrl=function(a,b,c,d){f.writeUrlWithLayerId(this,a,"layers",b,d)};Object.defineProperty(c.prototype,"parsedUrl",
{get:function(){var a=this._get("url");if(!a)return null;a=m.urlToObject(a);null!=this.layerId&&f.match.test(a.path)&&(a.path=a.path+"/layers/"+this.layerId);return a},enumerable:!0,configurable:!0});c.prototype.readRootNode=function(a,b){return b.store.rootNode};c.prototype._verifyRootNodeAndUpdateExtent=function(){var a=this;return this._fetchRootNode().then(function(b){return a._updateExtentFromRootNode(b)})};c.prototype._updateExtentFromRootNode=function(a){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&
null!=a&&Array.isArray(a.mbs)&&4===a.mbs.length){var b=a.mbs[2];a=a.mbs[3];this.fullExtent.zmin=b-a;this.fullExtent.zmax=b+a}};c.prototype._fetchRootNode=function(){if(!this.rootNode)return l.resolve();var a=m.join(this.parsedUrl.path,this.rootNode);return g(a,{query:{f:"json"},responseType:"json"}).then(function(a){return a.data}).catch(function(b){throw new q("sceneservice:root-node-missing","Root node missing.",{error:b,url:a});})};c.prototype._fetchService=function(){var a=this;return(null==this.layerId&&
/SceneServer\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(b){null!=b&&(a.layerId=b)}):l.resolve()).then(function(){return a._fetchServiceLayer()})};c.prototype._fetchFirstLayerId=function(){return g(this.url,{query:{f:"json"},responseType:"json"}).then(function(a){if(a.data&&Array.isArray(a.data.layers)&&0<a.data.layers.length)return a.data.layers[0].id})};c.prototype._fetchServiceLayer=function(){var a=this;return g(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(b){b.ssl&&
(a.url=a.url.replace(/^http:/i,"https:"));b=b.data;a.read(b,{origin:"service",url:a.parsedUrl});a._validateLayer(b)})};c.prototype._validateLayer=function(a){};e([d.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],c.prototype,"properties",void 0);e([d.property({type:h})],c.prototype,"spatialReference",void 0);e([d.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],c.prototype,"readSpatialReference",null);e([d.property({type:n})],c.prototype,
"fullExtent",void 0);e([d.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],c.prototype,"readFullExtent",null);e([d.property({readOnly:!0,type:u})],c.prototype,"heightModelInfo",void 0);e([d.property({readOnly:!0})],c.prototype,"version",void 0);e([d.reader("version",["store.version"])],c.prototype,"readVersion",null);e([d.property({type:String,json:{read:{source:"copyrightText"}}})],c.prototype,"copyright",void 0);e([d.property({type:String,json:{read:!1}})],
c.prototype,"sublayerTitleMode",void 0);e([d.property({type:String})],c.prototype,"title",void 0);e([d.reader("portal-item","title")],c.prototype,"readTitlePortalItem",null);e([d.reader("service","title",["name"])],c.prototype,"readTitleService",null);e([d.property({type:Number})],c.prototype,"layerId",void 0);e([d.reader("service","layerId",["id"])],c.prototype,"readLayerId",null);e([d.property(z.url)],c.prototype,"url",null);e([d.writer("url")],c.prototype,"writeUrl",null);e([d.property({dependsOn:["layerId"]})],
c.prototype,"parsedUrl",null);e([d.property()],c.prototype,"store",void 0);e([d.property({type:String})],c.prototype,"rootNode",void 0);e([d.reader("rootNode",["store.rootNode"])],c.prototype,"readRootNode",null);return c=e([d.subclass("esri.layers.mixins.SceneService")],c)}(d.declared(v,w,t,x,y))});