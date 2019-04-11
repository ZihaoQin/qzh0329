// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../geometry/Extent"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.convertSquareUnitsToCode=function(a){if(void 0===a)return null;if("number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":case "m":case "squaremeters":case "squaremeter":case "square-meter":case "square_meters":return 109404;case "miles":case "mile":case "squaremile":case "squaremiles":case "square-miles":case "square-mile":return 109413;case "kilometers":case "kilometer":case "squarekilometers":case "squarekilometer":case "square-kilometers":case "square-kilometer":case "km":return 109414;
case "acres":case "acre":case "ac":return 109402;case "hectares":case "hectare":case "ha":return 109401;case "yard":case "yd":case "yards":case "square-yards":case "square-yard":case "squareyards":case "squareyard":return 109442;case "feet":case "ft":case "foot":case "square-feet":case "square-foot":case "squarefeet":case "squarefoot":return 109405}return null};c.shapeExtent=function(a){if(null===a)return null;switch(a.type){case "polygon":case "multipoint":case "polyline":return a.extent;case "point":return new d({xmin:a.x,
ymin:a.y,xmax:a.x,ymax:a.y,spatialReference:a.spatialReference});case "extent":return a}return null};c.convertLinearUnitsToCode=function(a){if(void 0===a)return null;if("number"===typeof a||"number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":case "m":case "squaremeters":case "squaremeter":case "square-meter":case "square-meters":return 9001;case "miles":case "mile":case "squaremile":case "squaremiles":case "square-miles":case "square-mile":return 9035;case "kilometers":case "kilometer":case "squarekilometers":case "squarekilometer":case "square-kilometers":case "square-kilometer":case "km":return 9036;
case "yard":case "yd":case "yards":case "square-yards":case "square-yard":case "squareyards":case "squareyard":return 9096;case "feet":case "ft":case "foot":case "square-feet":case "square-foot":case "squarefeet":case "squarefoot":return 9002}return null};c.sameGeomType=function(a,b){return a===b||"point"===a&&"esriGeometryPoint"===b||"polyline"===a&&"esriGeometryPolyline"===b||"polygon"===a&&"esriGeometryPolygon"===b||"extent"===a&&"esriGeometryEnvelope"===b||"multipoint"===a&&"esriGeometryMultipoint"===
b||"point"===b&&"esriGeometryPoint"===a||"polyline"===b&&"esriGeometryPolyline"===a||"polygon"===b&&"esriGeometryPolygon"===a||"extent"===b&&"esriGeometryEnvelope"===a||"multipoint"===b&&"esriGeometryMultipoint"===a?!0:!1}});