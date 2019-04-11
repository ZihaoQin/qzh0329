// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/has ../../../../core/PooledArray ../../../../core/accessorSupport/decorators ../../../../core/libs/rbush/PooledRBush".split(" "),function(c,p,h,g,k,l,m,f,n){c=function(c){function b(a){a=c.call(this)||this;a.index=new n.default(9,l("csp-restrictions")?function(a){return{minX:a.extent[0],minY:a.extent[1],maxX:a.extent[2],maxY:a.extent[3]}}:[".extent[0]",
".extent[1]",".extent[2]",".extent[3]"]);a.spatialReference=null;return a}h(b,c);b.prototype.destroy=function(){this.index.destroy();this.index=null;e.prune()};b.prototype.queryGraphicUIDsInExtent=function(a,b,c){b.equals(this.spatialReference)&&(d.minX=a[0],d.minY=a[1],d.maxX=a[2],d.maxY=a[3],this.index.search(d,function(a){return c(a.graphic.uid)}))};b.prototype.add=function(a){!a.addedToSpatialIndex&&a.computeExtent(this.spatialReference)&&(this.index.insert(a),a.addedToSpatialIndex=!0)};b.prototype.addMany=
function(a,b){void 0===b&&(b=a.length);e.clear();for(var c=0;c<b;c++){var d=a[c];!d.addedToSpatialIndex&&d.computeExtent(this.spatialReference)&&(e.push(d),d.addedToSpatialIndex=!0)}this.index.load(e.data,e.length)};b.prototype.remove=function(a){a.addedToSpatialIndex&&(a.addedToSpatialIndex=!1,this.index.remove(a))};b.prototype.clear=function(){this.index.clear()};g([f.property({constructOnly:!0})],b.prototype,"spatialReference",void 0);return b=g([f.subclass("esri.views.3d.layers.graphics.Graphics3DSpatialIndex")],
b)}(f.declared(k));var e=new m,d={minX:0,minY:0,maxX:0,maxY:0};return c});