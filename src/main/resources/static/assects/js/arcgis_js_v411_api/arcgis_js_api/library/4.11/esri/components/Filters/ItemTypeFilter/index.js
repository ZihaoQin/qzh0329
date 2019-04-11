// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["../../Component","dojo/i18n!../../Filters/ItemTypeFilter/nls/resources","../../Dropdowns/AccordionDropdown/index","../../Buttons/Toggle"],function(l,w,x,y){return function(a){function c(f){if(b[f])return b[f].exports;var d=b[f]={i:f,l:!1,exports:{}};return a[f].call(d.exports,d,d.exports,c),d.l=!0,d.exports}var b={};return c.m=a,c.c=b,c.d=function(a,b,g){c.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:g})},c.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,
Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,b){if((1&b&&(a=c(a)),8&b)||4&b&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(c.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&b&&"string"!=typeof a)for(var f in a)c.d(d,f,function(b){return a[b]}.bind(null,f));return d},c.n=function(a){var b=a&&a.__esModule?function(){return a.default}:function(){return a};return c.d(b,"a",b),b},c.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,
b)},c.p="",c(c.s=379)}({0:function(a,c,b){function f(a,b){function c(){this.constructor=a}d(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}b.d(c,"b",function(){return f});b.d(c,"a",function(){return g});var d=function(a,b){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var f in b=
arguments[c])Object.prototype.hasOwnProperty.call(b,f)&&(a[f]=b[f]);return a}).apply(this,arguments)}},19:function(a,c){a.exports=w},206:function(a,c,b){a=b(19);c.a=[{value:"maps",displayName:a.filters.maps,children:[{value:"webMaps",displayName:a.filters.webMaps},{value:"mapFiles",displayName:a.filters.mapFiles}]},{value:"layers",displayName:a.filters.layers,children:[{value:"featureLayers",displayName:a.filters.featureLayers},{value:"tileLayers",displayName:a.filters.tileLayers},{value:"mapImageLayers",
displayName:a.filters.mapImageLayers},{value:"imageryLayers",displayName:a.filters.imageryLayers},{value:"sceneLayers",displayName:a.filters.sceneLayers},{value:"tables",displayName:a.filters.tables},{value:"bigDataFileShares",displayName:a.filters.bigDataFileShares}]},{value:"scenes",displayName:a.filters.scenes},{value:"apps",displayName:a.filters.apps,children:[{value:"webApps",displayName:a.filters.webApps},{value:"mobileApps",displayName:a.filters.mobileApps},{value:"desktopApps",displayName:a.filters.desktopApps}]},
{value:"tools",displayName:a.filters.tools,children:[{value:"locators",displayName:a.filters.locators},{value:"geodatabaseAccess",displayName:a.filters.geodatabaseAccess},{value:"geometricOperations",displayName:a.filters.geometricOperations},{value:"geoprocessingTasks",displayName:a.filters.geoprocessingTasks},{value:"networkAnalysis",displayName:a.filters.networkAnalysis},{value:"webTools",displayName:a.filters.webTools},{value:"rasterFunctionTemplates",displayName:a.filters.rasterFunctionTemplates}]},
{value:"files",displayName:a.filters.files,children:[{value:"documents",displayName:a.filters.documents},{value:"images",displayName:a.filters.images},{value:"pdfs",displayName:a.filters.pdfs}]},{value:"notebooks",displayName:a.filters.notebooks}]},22:function(a,c){a.exports=x},26:function(a,c){a.exports=y},379:function(a,c,b){b.r(c);var f=b(0),d=b(19);a=b(4);var g=b(22),m=b.n(g),g=b(26),n=b.n(g),p=b(206),k=b(42);b=function(a){function b(b){var c=a.call(this,b)||this;return c.state={availableFilters:Object(k.e)(Object(k.i)({value:"##itemTypeOptionsRoot",
children:p.a},b.availableItemTypes)).children},c.mapItemTypesToToggles=c.mapItemTypesToToggles.bind(c),c.handleToggleClick=c.handleToggleClick.bind(c),c.handleClearFilter=c.handleClearFilter.bind(c),c}return f.b(b,a),b.prototype.render=function(a){return a(m.a,{key:"item-type-accordion",title:d.itemType,clearable:!!this.props.itemTypeFilter,onClear:this.handleClearFilter},a("ul",{"aria-label":d.itemType,id:"item-type-accordion-tree",class:"ftr-item-type__tree",role:"tree"},this.mapItemTypesToToggles(a)))},
b.prototype.mapItemTypesToToggles=function(a){var b=this;return this.state.availableFilters.map(function(c){return a(n.a,{key:c.value,name:c.displayName,value:c.value,selectedToggle:b.props.itemTypeFilter?b.props.itemTypeFilter.value:void 0,childOptions:c.children,onToggleClick:b.handleToggleClick})})},b.prototype.handleToggleClick=function(a,b){var c=this.props.itemTypeFilter;c&&c.value===a?this.props.onItemTypeSelect():this.props.onItemTypeSelect({value:a,text:b})},b.prototype.handleClearFilter=
function(){this.props.onItemTypeSelect()},b}(a.Component);c.default=b},4:function(a,c){a.exports=l},42:function(a,c,b){function f(a,b){return k("children","value",a,b)}function d(a,b){return q("children","value",a,b)}function g(a,b){return function t(a,b,c,u){var e,d=c[a];return d&&0!==d.length?h.a({},c,(e={},e[a]=d.reduce(function(c,e){return-1!==u.indexOf(e[b])&&c.push(t(a,b,e,u)),c},[]),e)):h.a({},c)}("children","value",a,b)}function m(a){return function(a,b){var c,e=b[a];return e?h.a({},b,((c=
{})[a]=function v(b){return 0===b.length?[]:1!==b.length||b[0][a]?1<b.length?b.reduce(function(b,c){var e;return c[a]?(b.push(h.a({},c,((e={})[a]=v(c[a]),e))),b):(b.push(c),b)},[]):v(b[0][a]):b}(e),c)):b}("children",a)}function n(a,b){return r("children",a,b)}function p(a,b){return function t(a,b,c){var e=b[a];e&&e.forEach(function(b){return t(a,b,c)});c(b)}("children",a,b)}function k(a,b,c,d){var e=c[a];return c[b]===d?c:e?e.reduce(function(c,e){return c||k(a,b,e,d)},void 0):void 0}function q(a,
b,c,d){if(c=c[a])return c.reduce(function(c,e){return e[b]===d[0]?1===d.length?e:q(a,b,e,d.slice(1)):c},void 0)}function r(a,b,c){var d;return c(h.a({},b,((d={})[a]=b[a]?b[a].map(function(b){return r(a,b,c)}):void 0,d)))}function l(a,b,c){return r(a,c,function(c){var d=c[b];if(delete c[b],c[a]){var e=c[a];return delete c[a],h.a({},c,{value:d,children:e})}return h.a({},c,{value:d})})}b.d(c,"f",function(){return f});b.d(c,"d",function(){return d});b.d(c,"i",function(){return g});b.d(c,"e",function(){return m});
b.d(c,"h",function(){return n});b.d(c,"g",function(){return p});b.d(c,"a",function(){return k});b.d(c,"b",function(){return q});b.d(c,"c",function(){return l});var h=b(0)}})});