// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../Color ./support/colors ./support/utils".split(" "),function(u,p,z,l,A,m){function v(b,a){return b.map(function(b){b=new l(b);null!=a&&(b.a=a);return b})}function q(b,a,c,d){var e,f=1;do{e=b;var g=a,h=void 0,r=k.getColors(e,c,d);r&&1===m.hasIdenticalColors(g,r)&&(h=e);e=h;e||(b=k.flipColors(b),f++)}while(!e&&4>=f);return e}function x(b,a,c){return q(b,a,c,"HH")||q(b,a,c,"HL")||q(b,a,c,"LH")||q(b,a,c,"LL")}function y(b,a,c,d,e){var f=
A[b],g;if(f){b=d+"/"+e+"/"+b;d=[];for(var h in f){e=+h;var r=f[h].map(function(a){return v(a)});d.push({numClasses:e,colors:r})}f=new l(a.noDataColor);switch(c){case "point":g={id:b,colorsForClassBreaks:d,noDataColor:f,opacity:1,outline:{color:new l(a.outline.color),width:a.outline.width},size:a.size};break;case "polyline":g={id:b,colorsForClassBreaks:d,noDataColor:f,opacity:1,width:a.width};break;case "polygon":g={id:b,colorsForClassBreaks:d,noDataColor:f,opacity:a.fillOpacity,outline:{color:new l(a.outline.color),
width:a.outline.width}};break;case "mesh":g={id:b,colorsForClassBreaks:d,noDataColor:f,opacity:a.fillOpacity}}}return g}function B(b,a,c){a=n[a];c=m.getStorageType(c);return(c=a&&a[c])&&c[b]}u={color:[153,153,153,.25],width:"1px"};p="relationship-brewer-yellow-blue-black relationship-brewer-pink-blue-purple relationship-purple-green-blue relationship-blue-green-purple relationship-blue-orange-green relationship-mustard-blue-wine relationship-pink-blue-purple relationship-olive-blue-green relationship-yellow-cyan-blue relationship-blue-pink-purple relationship-purple-green-wine".split(" ");
var w="relationship-brewer-yellow-blue-black relationship-brewer-pink-blue-purple relationship-purple-green-blue relationship-blue-green-purple relationship-blue-orange-green relationship-mustard-blue-wine relationship-pink-blue-purple relationship-olive-blue-green relationship-yellow-cyan-blue relationship-blue-pink-purple relationship-purple-green-wine".split(" "),t={default:{name:"default",label:"Default",description:"Default theme for visualizing features based on relationship between two attributes.",
basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector".split(" "),dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:u,size:"8px"},primary:"relationship-blue-orange-brown",secondary:p},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:"1px"},size:"8px"},primary:"relationship-blue-orange-brown",
secondary:w}},polylineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"relationship-blue-orange-brown",secondary:p},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"relationship-blue-orange-brown",secondary:w}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:u,fillOpacity:.8},primary:"relationship-blue-orange-brown",secondary:p},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8},primary:"relationship-blue-orange-brown",
secondary:w}}}},n={};(function(){for(var b in t){var a=t[b],c=a.basemapGroups,d=n[b]={basemaps:[].concat(c.light).concat(c.dark),point:{},polyline:{},polygon:{}},e;for(e in c)for(var f=c[e],g=0;g<f.length;g++){var h=f[g];a.pointSchemes&&(d.point[h]=a.pointSchemes[e]);a.polylineSchemes&&(d.polyline[h]=a.polylineSchemes[e]);a.polygonSchemes&&(d.polygon[h]=a.polygonSchemes[e])}}})();var k={getThemes:function(b){var a=[],c;for(c in t){var d=t[c],e=n[c],f=m.getBasemapId(b,e.basemaps);f&&-1===e.basemaps.indexOf(f)||
a.push({name:d.name,label:d.label,description:d.description,basemaps:e.basemaps.slice(0)})}return a},getSchemes:function(b){var a=b.geometryType,c="mesh"!==a&&b.worldScale,d=b.view,e=b.theme||"default",f=m.getBasemapId(b.basemap,n[e].basemaps),g=B(f,e,a),h;g&&(b=y(g.primary,g.common,a,e,f),h={primaryScheme:c?k.toWorldScale({scheme:b,view:d}):b,secondarySchemes:g.secondary.map(function(b){b=y(b,g.common,a,e,f);return c?k.toWorldScale({scheme:b,view:d}):b}),basemapId:f});return h},cloneScheme:function(b){var a;
b&&(a=z({},b),a.colorsForClassBreaks=a.colorsForClassBreaks.map(function(a){var b=a.colors.map(function(a){return v(a)});return{numClasses:a.numClasses,colors:b}}),a.noDataColor&&(a.noDataColor=new l(a.noDataColor)),a.outline&&(a.outline={color:a.outline.color&&new l(a.outline.color),width:a.outline.width}));return a},flatten2DArray:function(b,a){var c=[];a=(a||"HH").split("");var d=a[1];"L"===a[0]&&b.reverse();var e="H"===d;b.forEach(function(a){e&&a.reverse();c=c.concat(a)});return c},getColors:function(b,
a,c){var d;b.colorsForClassBreaks.some(function(b){b.numClasses===a&&(d=b.colors);return!!d});return(d=d.map(function(a){return v(a)}))?k.flatten2DArray(d,c):null},flipColors:function(b,a){b=a?b:k.cloneScheme(b);b.colorsForClassBreaks.forEach(function(a){for(var b=a.colors.reverse(),c=[],f=function(a){var d=[];b.forEach(function(b){d.push(b[a])});c.push(d)},g=0;g<a.numClasses;g++)f(g);a.colors=c});return b},getMatchingSchemes:function(b){var a=b.theme,c=b.geometryType,d=b.colors,e=b.numClasses,f=
[];n[a].basemaps.forEach(function(b){if(b=k.getSchemes({theme:a,basemap:b,geometryType:c})){var g=x(b.primaryScheme,d,e);g&&f.push(g);b.secondarySchemes.forEach(function(a){(g=x(a,d,e))&&f.push(g)})}});return f},toWorldScale:function(b){if(b.scheme&&b.view){var a=b.scheme,c=b.scheme;if(a.hasOwnProperty("size"))return a.size&&(a.size=m.toWorldScale(a.size,b.view)),a;if(c.hasOwnProperty("width"))return c.width&&(c.width=m.toWorldScale(c.width,b.view)),c}return b.scheme}};return k});