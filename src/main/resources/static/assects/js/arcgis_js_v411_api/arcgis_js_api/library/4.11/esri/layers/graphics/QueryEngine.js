// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/Accessor ../../core/Error ../../core/promiseUtils ../../core/accessorSupport/decorators ../../geometry/support/aaBoundingRect ./dehydratedFeatures ../../tasks/support/FeatureSet".split(" "),function(g,u,n,h,p,q,r,k,e,f,m,t){g=function(g){function c(a){a=g.call(this)||this;a.features=null;a.layer=null;a.objectIdField=null;a.dataSpatialReference=null;return a}n(c,g);c.prototype.queryFeatures=
function(a){var b=this;return this._queryFeatures(a).then(function(a){a=a.map(function(a){return m.hydrateGraphic(a,b.layer)});return new t({features:a,fields:b.layer?b.layer.fields.slice():null,geometryType:b.layer?b.layer.geometryType:null,spatialReference:b.dataSpatialReference?b.dataSpatialReference.clone():null})})};c.prototype.queryObjectIds=function(a){var b=this;return this.objectIdField?this.queryFeatures(a).then(function(a){return b._getObjectIds(a.features)}):this._rejectQuery("Unsupported query")};
c.prototype.queryFeatureCount=function(a){return this.features&&!a?k.resolve(this.features.length):this._queryFeatures(a).then(function(a){return a.length})};c.prototype.queryExtent=function(a){var b=this;return this.queryFeatures(a).then(function(a){return{count:a.features.length,extent:b._getExtent(a.features)}})};c.prototype._queryFeatures=function(a){if(this.features){if(a){if(this._isSupportedQuery(a)){var b=this._createFilters(a);return b.length?this._executeQuery(a,b):this._rejectQuery("Invalid query")}return this._rejectQuery("Unsupported query")}return this._returnAllFeatures()}return this._rejectQuery("Engine not initialized")};
c.prototype._returnAllFeatures=function(){return k.resolve(this.features.toArray())};c.prototype._executeQuery=function(a,b){var c=this,d=[];this.features.forEach(function(e){b.every(function(b){return b.call(c,e,a)})&&d.push(e)});return k.resolve(d)};c.prototype._isSupportedQuery=function(a){var b=!0;if(null!=a.distance||null!=a.geometryPrecision||a.groupByFieldsForStatistics&&a.groupByFieldsForStatistics.length||null!=a.maxAllowableOffset||a.multipatchOption||null!=a.num||a.orderByFields&&a.orderByFields.length||
a.outFields&&a.outFields.length||a.outSpatialReference||a.outStatistics&&a.outStatistics.length||a.pixelSize||a.quantizationParameters||a.relationParameter||a.returnDistinctValues||null!=a.start||a.text||a.timeExtent||a.where||a.objectIds&&a.objectIds.length&&!this.objectIdField)b=!1;return b};c.prototype._createFilters=function(a){var b=[];a.objectIds&&a.objectIds.length&&b.push(this._createObjectIdFilter());a.geometry&&"extent"===a.geometry.type&&"intersects"===a.spatialRelationship&&b.push(this._createExtentFilter());
return b};c.prototype._createExtentFilter=function(){return function(a,b){a=a.geometry;if(!a)return!1;f.fromExtent(b.geometry,d);m.computeAABR(a,l);return f.intersects(d,l)}};c.prototype._createObjectIdFilter=function(){var a=this;return function(b,c){b=b.attributes;return-1<c.objectIds.indexOf(b&&b[a.objectIdField])}};c.prototype._rejectQuery=function(a){return k.reject(new r(this.declaredClass,a))};c.prototype._getObjectIds=function(a){var b=this.objectIdField,c=[];a.forEach(function(a){a=(a=a.attributes)&&
a[b];null!=a&&c.push(a)});return c};c.prototype._getExtent=function(a){if(0===a.length)return null;f.empty(d);for(var b=0;b<a.length;b++)m.computeAABR(a[b].geometry,l),f.expand(d,l,d);return new p.Extent({xmin:d[0],ymin:d[1],xmax:d[2],ymax:d[3],spatialReference:a[0].geometry.spatialReference})};h([e.property()],c.prototype,"features",void 0);h([e.property({constructOnly:!0})],c.prototype,"layer",void 0);h([e.property()],c.prototype,"objectIdField",void 0);h([e.property()],c.prototype,"dataSpatialReference",
void 0);return c=h([e.subclass("esri.layers.graphics.QueryEngine")],c)}(e.declared(q));var d=f.create(),l=f.create();return g});