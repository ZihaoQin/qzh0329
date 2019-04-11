// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../Color ../../../../symbols ../../../../core/compilerUtils ../../../../core/Error ../../../../core/numberUtils ../../../../core/promiseUtils ../../statistics/classBreaks ../../statistics/summaryStatistics ../../../support/pointCloud/PointSizeSplatAlgorithm".split(" "),function(D,f,u,v,k,m,w,n,x,p,y,z){function l(a,b){return new w(a,b)}function q(a,b,c){var d,e,f;(b=(d={statistics:a,isDate:b},d.statistics))||(b={});var g,h;null==
b.min?d.isDate?(h=r(),g=h[0],h=h[1]):(g=0,h=100):b.min===b.max&&(d.isDate?(h=r(b.min),g=h[0],h=h[1]):0>b.min?(g=2*b.min,h=0):0<b.min?(g=0,h=2*b.min):(g=0,h=100));d=null!=g?g:b.min;b=null!=h?h:b.max;null!=g||null!=h?(e=d,f=b):!c||null!=a.avg&&a.stddev||(e=a.min,f=a.max);return null!=e?[e,f]:null}function r(a){var b=("number"===typeof a?new Date(a):new Date).getUTCFullYear(),c=Date.UTC(b,0,1,12,0,0,0),b=Date.UTC(b,11,31,12,0,0,0);"number"===typeof a&&(a<c&&(c=a),a>b&&(b=a));return[c,b]}function A(a){var b=
a.layer;return a.fields.filter(function(a){return!b.getField(a)})}function B(a){var b=a.layer;return a.fields.filter(function(a){a=b.getFieldUsageInfo(a);return!a||!a.supportsRenderer})}Object.defineProperty(f,"__esModule",{value:!0});var t=/^(\d+(\.\d+)?)\s*(%)$/i,C=[0,0,0,.4];f.createError=l;f.getDefaultDataRange=q;f.createColors=function(a,b){for(var c=[],d=a.length,e=0;e<b;e++)c.push(new v(a[e%d]));return c};f.createStopValues=function(a,b){void 0===b&&(b=!0);var c=a.avg,d=c-a.stddev,e=c+a.stddev;
d<a.min&&(d=a.min);e>a.max&&(e=a.max);b&&(c=d+(e-d)/2);a=n.round([d,e],{strictBounds:!0});d=a[0];e=a[1];a=[d,d+(c-d)/2,c,c+(e-c)/2,e];return n.round(a,{strictBounds:!0})};f.getSymbolSizeFromScheme=function(a,b,c){switch(b){case "point":case "multipoint":return c?"noDataSize"in a?a.noDataSize:null:"size"in a?a.size:null;case "polyline":return c?"noDataWidth"in a?a.noDataWidth:null:"width"in a?a.width:null;case "polygon":case "mesh":break;default:m.neverReached(b)}};f.getSymbolOutlineFromScheme=function(a,
b){switch(b){case "point":case "multipoint":case "polygon":return"outline"in a?{color:a.outline.color,width:a.outline.width}:null;case "polyline":case "mesh":break;default:m.neverReached(b)}};f.createSymbol=function(a,b){var c=b.type,d=b.size,e=b.color,f=b.outline,g;switch(a){case "point":case "multipoint":"2d"===c?g=new k.SimpleMarkerSymbol({color:e,size:d,outline:{color:f.color,width:f.width}}):"3d-flat"===c?g=new k.PointSymbol3D({symbolLayers:[new k.IconSymbol3DLayer({size:d,resource:{primitive:"circle"},
material:{color:e},outline:{color:f.color,size:f.width}})]}):-1<c.indexOf("3d-volumetric")&&(a="3d-volumetric-uniform"===c,e=new k.ObjectSymbol3DLayer({height:d,resource:{primitive:a?"sphere":"cylinder"},material:{color:e}}),a||(e.width=b.widthAndDepth,e.depth=b.widthAndDepth),g=new k.PointSymbol3D({symbolLayers:[e]}));break;case "polyline":"2d"===c&&(g=new k.SimpleLineSymbol({color:e,width:d}));break;case "polygon":"2d"===c&&(g=new k.SimpleFillSymbol({color:e,outline:{color:f.color,width:f.width}}));
break;case "mesh":d=b.meshInfo&&b.meshInfo.edgesType,g=new k.MeshSymbol3D({symbolLayers:[new k.FillSymbol3DLayer({material:{color:e,colorMixMode:b.meshInfo&&b.meshInfo.colorMixMode},edges:null==d||"none"===d?null:{type:d,color:C}})]})}return g};f.verifyBasicFieldValidity=function(a,b,c){var d=A({layer:a,fields:b});if(d.length)return l(c,"Unknown fields: "+d.join(", ")+". You can only use fields defined in the layer schema");a=B({layer:a,fields:b});if(a.length)return l(c,"Unsupported fields: "+a.join(", ")+
". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true")};f.getClassBreaks=function(a){return p(a).then(function(b){var c=q({min:b.minValue,max:b.maxValue,avg:null,stddev:null},!1,!1);return(c?p(u({},a,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:c[0],maxValue:c[1],normalizationTotal:c[0]+c[1]})):x.resolve(b)).then(function(a){return{result:a,defaultValuesUsed:!!c}})})};f.getSummaryStatistics=function(a){return y(a)};
f.getSizeRangeForAxis=function(a,b){var c=a.minSize;a=a.maxSize;"height"===b&&(c=((a-c)/2+c)/4.6,a*=2);return{minSize:c,maxSize:a}};f.isValidPointSize=function(a){return t.test(a)};f.getPointSizeAlgorithm=function(a){a=a.match(t);var b=Number(a[1]);if("%"===a[3])return new z.default({scaleFactor:b/100})}});