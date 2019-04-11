// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./shared","../../../core/promiseUtils"],function(v,f,m,n){function l(c){for(var a=0,b=0;b<c.length;b++)a+=c[b];return a/c.length}function p(c){for(var a=l(c),b=0,d=0;d<c.length;d++)b+=Math.pow(a-c[d],2);return b/c.length}function q(c){for(var a=l(c),b=0,d=0;d<c.length;d++)b+=Math.pow(a-c[d],2);return b/(c.length-1)}function r(c){for(var a=0,b=0;b<c.length;b++)a+=c[b];return a}function h(c,a,b,d){void 0===d&&(d=!1);try{var e=c.iterator(b);return t(e,[],a,d)}catch(k){return n.reject(k)}}
function t(c,a,b,d){return c.next().then(function(e){return null!==e?b.calculateValueDeferred(e).then(function(e){null===e?!1===d&&(a[a.length]=e):a[a.length]=e;return t(c,a,b,d)}):a})}function u(c,a,b,d,e){return c.next().then(function(k){return null!==k?d.calculateValueDeferred(k).then(function(g){void 0!==g&&null!==g&&void 0===a[g]&&(b.push(g),a[g]=1);return b.length>=e&&-1!==e?b:u(c,a,b,d,e)}):b})}Object.defineProperty(f,"__esModule",{value:!0});f.decodeStatType=function(c){switch(c.toLowerCase()){case "distinct":return"distinct";
case "avg":case "mean":return"avg";case "min":return"min";case "sum":return"sum";case "max":return"max";case "stdev":case "stddev":return"stddev";case "var":case "variance":return"var";case "count":return"count"}return""};f.calculateStat=function(c,a,b){void 0===b&&(b=1E3);switch(c.toLowerCase()){case "distinct":a:{c=b;b=[];for(var d={},e=[],k=0;k<a.length;k++){if(void 0!==a[k]&&null!==a[k]){var g=a[k];if(m.isNumber(g)||m.isString(g))void 0===d[g]&&(b.push(g),d[g]=1);else{for(var f=!1,h=0;h<e.length;h++)!0===
m.equalityTest(e[h],g)&&(f=!0);!1===f&&(e.push(g),b.push(g))}}if(b.length>=c&&-1!==c){a=b;break a}}a=b}return a;case "avg":case "mean":return l(a);case "min":return Math.min.apply(Math,a);case "sum":return r(a);case "max":return Math.max.apply(Math,a);case "stdev":case "stddev":return Math.sqrt(p(a));case "var":case "variance":return p(a);case "count":return a.length}return 0};f.min=function(c,a,b){return h(c,a,b,!0).then(function(a){return 0===a.length?null:Math.min.apply(Math,a)})};f.max=function(c,
a,b){return h(c,a,b,!0).then(function(a){return 0===a.length?null:Math.max.apply(Math,a)})};f.mean=function(c,a,b){var d="";!1===a.isSingleField()&&(d=a.predictType(c.fields,null));return h(c,a,b,!0).then(function(a){if(0===a.length)return null;a=l(a);if(null===a)return a;"integer"===d&&(a=+a,a=isFinite(a)?a-a%1||(0>a?-0:0===a?a:0):a);return a})};f.variance=function(c,a,b){return h(c,a,b,!0).then(function(a){return 0===a.length?null:q(a)})};f.stdev=function(c,a,b){return h(c,a,b,!0).then(function(a){return 0===
a.length?null:Math.sqrt(q(a))})};f.sum=function(c,a,b){return h(c,a,b,!0).then(function(a){return 0===a.length?null:r(a)})};f.count=function(c,a){try{return c.iterator(a).count()}catch(b){return n.reject(b)}};f.distinct=function(c,a,b,d){void 0===b&&(b=1E3);void 0===d&&(d=null);var e;try{var f=c.iterator(d);e=u(f,{},[],a,b)}catch(g){e=n.reject(g)}return e}});