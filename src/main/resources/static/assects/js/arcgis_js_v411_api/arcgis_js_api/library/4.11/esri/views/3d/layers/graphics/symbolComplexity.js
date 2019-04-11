// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/compilerUtils ../../../../core/has ../../../../symbols/support/ObjectSymbol3DLayerResource ./primitiveObjectSymbolUtils ../../webgl-engine/lib/Util ../../webgl-engine/lib/lodRendering/LodResources".split(" "),function(w,c,r,g,h,t,k,l,u){function m(c){for(var a=0,b=0,d={bytesPerFeature:0,bytesPerCoordinate:0,draped:{bytesPerFeature:0,bytesPerCoordinate:0}},f=0;f<c.length;f++){var e=c[f];e&&(a+=e.primitivesPerFeature,b+=
e.primitivesPerCoordinate,d.bytesPerFeature+=e.memory.bytesPerFeature,d.bytesPerCoordinate+=e.memory.bytesPerCoordinate,d.draped.bytesPerFeature+=e.memory.bytesPerFeature,d.draped.bytesPerCoordinate+=e.memory.bytesPerCoordinate)}return{primitivesPerFeature:a,primitivesPerCoordinate:b,memory:d}}function n(c,a){var b=p(c,a);switch(a.type){case "extrude":return{primitivesPerFeature:-4,primitivesPerCoordinate:4,memory:b};case "fill":return"mesh-3d"===c.type?{primitivesPerFeature:0,primitivesPerCoordinate:0,
memory:b}:a.outline&&0<a.outline.size?{primitivesPerFeature:-4,primitivesPerCoordinate:3,memory:b}:{primitivesPerFeature:-2,primitivesPerCoordinate:1,memory:b};case "line":return{primitivesPerFeature:-2,primitivesPerCoordinate:2,memory:b};case "object":return a.resource&&a.resource.href?{primitivesPerFeature:16,primitivesPerCoordinate:0,memory:b}:r({},v(a.resource&&a.resource.primitive||t.defaultPrimitive),{memory:b});case "path":return{primitivesPerFeature:-4,primitivesPerCoordinate:20,memory:b};
case "text":case "icon":return{primitivesPerFeature:2,primitivesPerCoordinate:0,memory:b};default:g.neverReached(a)}}function p(b,a){b="point-3d"===b.type;switch(a.type){case "extrude":return a.edges&&0<a.edges.size?c.memoryEstimators.EXTRUDE_EDGES:c.memoryEstimators.EXTRUDE;case "fill":return a.outline&&0<a.outline.size?c.memoryEstimators.FILL_OUTLINE:c.memoryEstimators.FILL;case "line":return c.memoryEstimators.LINE;case "path":return c.memoryEstimators.PATH;case "object":return h("enable-feature:skallweit/lod-rendering")?
b?c.memoryEstimators.OBJECT_POINT_LOD:c.memoryEstimators.OBJECT_POLYGON_LOD:b?c.memoryEstimators.OBJECT_POINT:c.memoryEstimators.OBJECT_POLYGON;case "icon":case "text":return b?c.memoryEstimators.ICON_POINT:c.memoryEstimators.ICON_POLYGON;default:g.neverReached(a)}}function v(b){var a=q[b];if(a)return a;h("enable-feature:skallweit/lod-rendering")?(a=k.primitiveLodResources(b,null,null),a=u.geometriesFromLodLevelResources(a.levels[0]).reduce(function(a,b){return a+b.data.getIndices(l.VertexAttrConstants.POSITION).length/
3},0)):a=k.primitiveGeometryData(b).getIndices(l.VertexAttrConstants.POSITION).length/3;a={primitivesPerFeature:a,primitivesPerCoordinate:0};return q[b]=a}Object.defineProperty(c,"__esModule",{value:!0});c.emptySymbolComplexity={primitivesPerFeature:0,primitivesPerCoordinate:0,memory:{bytesPerFeature:0,bytesPerCoordinate:0,draped:{bytesPerFeature:0,bytesPerCoordinate:0}}};c.defaultSymbolComplexity=function(b){if("web-style"===b.type)return c.emptySymbolComplexity;var a=b.symbolLayers.toArray().map(function(a){return n(b,
a)});return m(a)};c.totalSymbolComplexities=m;var q={};c.defaultSymbolLayerComplexity=n;c.defaultSymbolLayerMemoryComplexity=p;c.memoryEstimators={ICON_POINT:{bytesPerFeature:7478.781325779039,bytesPerCoordinate:0,draped:{bytesPerFeature:5712.082651558076,bytesPerCoordinate:0}},ICON_POLYGON:{bytesPerFeature:9679.372971750396,bytesPerCoordinate:56.86422538239579,draped:{bytesPerFeature:7883.966873022898,bytesPerCoordinate:56.89697037586389}},OBJECT_POINT:{bytesPerFeature:5177.80657223796,bytesPerCoordinate:0,
draped:{bytesPerFeature:5177.80657223796,bytesPerCoordinate:0}},OBJECT_POLYGON:{bytesPerFeature:7372.024890546556,bytesPerCoordinate:56.80425878144206,draped:{bytesPerFeature:7372.024890546556,bytesPerCoordinate:56.80425878144206}},OBJECT_POINT_LOD:{bytesPerFeature:1770.211558073654,bytesPerCoordinate:0,draped:{bytesPerFeature:1770.211558073654,bytesPerCoordinate:0}},OBJECT_POLYGON_LOD:{bytesPerFeature:3958.8422890890743,bytesPerCoordinate:56.88697205558441,draped:{bytesPerFeature:3958.8422890890743,
bytesPerCoordinate:56.88697205558441}},LINE:{bytesPerFeature:7586.045782417972,bytesPerCoordinate:112.02132538683836,draped:{bytesPerFeature:4775.97368572266,bytesPerCoordinate:111.85995483757563}},PATH:{bytesPerFeature:7563.020535856769,bytesPerCoordinate:119.1242257528872,draped:{bytesPerFeature:7563.020535856769,bytesPerCoordinate:119.1242257528872}},FILL:{bytesPerFeature:8702.040510627665,bytesPerCoordinate:56.610361738134486,draped:{bytesPerFeature:5921.70744530372,bytesPerCoordinate:56.58839624148057}},
FILL_OUTLINE:{bytesPerFeature:12168.362923563885,bytesPerCoordinate:56.265773613009564,draped:{bytesPerFeature:7929.090679733446,bytesPerCoordinate:56.17528027868163}},EXTRUDE:{bytesPerFeature:11409.738625531325,bytesPerCoordinate:56.99136098105536,draped:{bytesPerFeature:11409.738625531325,bytesPerCoordinate:56.99136098105536}},EXTRUDE_EDGES:{bytesPerFeature:19399.52461450617,bytesPerCoordinate:52.052414603432105,draped:{bytesPerFeature:19399.52461450617,bytesPerCoordinate:52.052414603432105}}}});