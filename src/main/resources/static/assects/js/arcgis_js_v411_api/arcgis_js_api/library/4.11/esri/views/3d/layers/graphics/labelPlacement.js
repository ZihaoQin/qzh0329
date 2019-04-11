// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/Logger ../../../../core/scheduling ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingBox ./graphicSymbolUtils ../../webgl-engine/materials/HUDMaterial".split(" "),function(r,t,u,z,A,B,C,v,D,m,w,E){function n(a){return w.getGraphics3DSymbol(a.graphics3DGraphic.graphics3DSymbol).symbol.symbolLayers.getItemAt(0)}
function p(a){var b=a.graphics3DGraphic.graphic.geometry.type;switch(b){case "polyline":case "extent":case "multipoint":return{placement:"center-center",normalizedOffset:null,anchor:"center"};case "polygon":return"extrude"===n(a).type?f["above-center"]:{placement:"center-center",normalizedOffset:null,anchor:"center"};case "point":return f["above-center"];case "mesh":return f["above-center"];default:u.neverReached(b)}}function h(a,b){null==k&&(F.log(a,b),k=A.schedule(function(){k.remove();k=null}))}
function q(a,b,c){c=c.graphics3DGraphic._graphics[0].getBoundingBoxObjectSpace(l);c=v.vec3f64.fromValues(c[3]-c[0],c[4]-c[1],c[5]-c[2]);a.centerOffset[0]=1.1*Math.sqrt(c[0]*c[0]+c[1]*c[1])/2*b.normalizedOffset[0];var e=a.translation[2],d=c[2]/2*b.normalizedOffset[1];a.translation[2]=d*(1.1-1);a.elevationOffset=e+d;c=C.vec3.length(c);a.centerOffset[2]=1.1*c/2*b.normalizedOffset[2]}function G(a){var b=a.labelClass.labelPlacement,c=a.labelSymbol,e=a.graphics3DGraphic,d=w.getGraphics3DSymbol(e.graphics3DSymbol).symbol;
a=f[b]||p(a);if("point-3d"===d.type&&d.supportsCallout()&&d.hasVisibleVerticalOffset()&&!e.isDraped())return{placement:null,hasLabelVerticalOffset:!1,verticalOffset:x(d.verticalOffset),anchor:null,normalizedOffset:null};if(c&&c.hasVisibleVerticalOffset()&&("point-3d"!==d.type||!d.supportsCallout()||!d.verticalOffset||e.isDraped())){a:switch(a.placement){case "above-center":e=!0;break a;default:e=!1}return e?{placement:"above-center",verticalOffset:x(c.verticalOffset),anchor:"bottom",normalizedOffset:[0,
a.normalizedOffset[1],0],hasLabelVerticalOffset:!0}:(h("error","Callouts and vertical offset on labels are currently only supported with 'above-center' label placement (not with "+b+" placement)"),null)}return{placement:null,verticalOffset:null,anchor:null,normalizedOffset:null,hasLabelVerticalOffset:!1}}function x(a){return{screenLength:a.screenLength,minWorldLength:a.minWorldLength,maxWorldLength:a.maxWorldLength}}Object.defineProperty(t,"__esModule",{value:!0});var F=z.getLogger("esri.views.3d.layers.graphics.labelPlacement"),
k=null;t.get=function(a){var b=G(a);if(!b)return null;var c;if(b.anchor)c=b;else{var e=a.labelClass.labelPlacement,d=f[e];c=d||p(a);e&&!d&&h("warn","the requested label placement '"+e+"' is not currently supported in SceneView");e=a.graphics3DGraphic.graphic.geometry.type;switch(e){case "polyline":case "polygon":case "extent":case "multipoint":a.labelClass.labelPlacement&&(h("warn","the requested label placement '"+c.placement+"' is currently unsupported for '"+e+"' geometries in SceneView"),c=p(a));
break;case "point":case "mesh":break;default:u.neverReached(e)}}e=!!b.hasLabelVerticalOffset;b={anchor:c.anchor,verticalOffset:b.verticalOffset,screenOffset:B.vec2f64.create(),centerOffset:D.vec4f64.fromValues(0,0,0,-1),centerOffsetUnits:"world",translation:v.vec3f64.create(),elevationOffset:0,hasLabelVerticalOffset:e};switch(a.graphics3DGraphic.graphic.geometry.type){case "point":e=a.graphics3DGraphic;d=n(a);e.getCenterObjectSpace(b.translation);switch(d.type){case "icon":case "text":d=a.graphics3DGraphic;
e=d._graphics[0].getScreenSize();d.isDraped()?b.hasLabelVerticalOffset||"center"===b.anchor||(f[a.labelClass.labelPlacement]&&h("warn","the requested placement '"+c.placement+"' is currently unsupported for draped graphics"),b.anchor="center"):(d=void 0,void 0===d&&(d=H),a=a.graphics3DGraphic._graphics[0].stageObject.getGeometryRecords()[0].material,a instanceof E?(a=a.getParameters().anchorPos,d[0]=2*(a[0]-.5),d[1]=2*(a[1]-.5)):(d[0]=0,d[1]=0),a=d,g[0]=e[0]/2*(c.normalizedOffset[0]-a[0]),g[1]=e[1]/
2*(c.normalizedOffset[1]-a[1]),b.screenOffset[0]=g[0],b.hasLabelVerticalOffset?(b.centerOffset[1]=g[1],b.centerOffsetUnits="screen"):b.screenOffset[1]=g[1]);break;case "object":q(b,c,a)}break;case "polygon":switch(n(a).type){case "extrude":a.graphics3DGraphic._graphics[0].getBoundingBoxObjectSpace(l),m.center(l,b.translation),b.translation[2]=m.height(l)/2,q(b,c,a)}break;case "mesh":q(b,c,a)}return b};var f={"above-center":{placement:"above-center",normalizedOffset:[0,1,0],anchor:"bottom"},"above-left":{placement:"above-left",
normalizedOffset:[-1,1,0],anchor:"bottom-right"},"above-right":{placement:"above-right",normalizedOffset:[1,1,0],anchor:"bottom-left"},"below-center":{placement:"below-center",normalizedOffset:[0,-1,2],anchor:"top"},"below-left":{placement:"below-left",normalizedOffset:[-1,-1,0],anchor:"top-right"},"below-right":{placement:"below-right",normalizedOffset:[1,-1,0],anchor:"top-left"},"center-center":{placement:"center-center",normalizedOffset:[0,0,1],anchor:"center"},"center-left":{placement:"center-left",
normalizedOffset:[-1,0,0],anchor:"right"},"center-right":{placement:"center-right",normalizedOffset:[1,0,0],anchor:"left"}},y={"above-center":["default","esriServerPointLabelPlacementAboveCenter"],"above-left":["esriServerPointLabelPlacementAboveLeft"],"above-right":["esriServerPointLabelPlacementAboveRight"],"below-center":["esriServerPointLabelPlacementBelowCenter"],"below-left":["esriServerPointLabelPlacementBelowLeft"],"below-right":["esriServerPointLabelPlacementBelowRight"],"center-center":["esriServerPointLabelPlacementCenterCenter"],
"center-left":["esriServerPointLabelPlacementCenterLeft"],"center-right":["esriServerPointLabelPlacementCenterRight"]};r=function(a){var b=f[a];y[a].forEach(function(a){f[a]=b})};for(var I in y)r(I);Object.freeze&&(Object.freeze(f),Object.keys(f).forEach(function(a){Object.freeze(f[a]);Object.freeze(f[a].normalizedOffset)}));var g=[0,0],H=[0,0],l=m.create()});