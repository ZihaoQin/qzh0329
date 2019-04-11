// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./tsSupport/generatorHelper","./arrayUtils","./HeapSort"],function(k,l,g,f,h){return function(){function b(a){var c=this;this.data=[];this._length=0;this._allocator=null;this._deallocator=function(){};this._shrink=function(){};this._hint=new f.RemoveHint;a&&(a.initialSize&&(this.data=Array(a.initialSize)),a.allocator?(this._allocator=a.allocator,this._deallocator=a.deallocator):"deallocator"in a&&(this._deallocator=a.deallocator),a.shrink&&(this._shrink=function(){c.data.length>
1.5*c.length&&(c.data.length=Math.floor(1.1*c.length))}))}b.prototype.toArray=function(){return this.data.slice(0,this.length)};Object.defineProperty(b.prototype,"length",{get:function(){return this._length},set:function(a){if(a>this._length)if(this._allocator)for(;this._length<a;)this.data[this._length++]=this._allocator(this.data[this._length]);else this._length=a;else{if(this._deallocator)for(var c=a;c<this._length;++c)this.data[c]=this._deallocator(this.data[c]);this._length=a;this._shrink()}},
enumerable:!0,configurable:!0});b.prototype.clear=function(){this.length=0};b.prototype.prune=function(){this.clear();this.data=[]};b.prototype.equal=function(a){return f.equals(this.data,a.data)};b.prototype.push=function(a){return this.data[this._length++]=a};b.prototype.pushArray=function(a){for(var c=0;c<a.length;c++)this.data[this._length++]=a[c];return this.back()};b.prototype.pushNew=function(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));++this._length;
return this.back()};b.prototype.pop=function(){if(0!==this.length){var a=this.data[this.length-1];--this.length;this._shrink();return a}};b.prototype.removeMany=function(a){var c=this,e=[];this.data=this.data.filter(function(d,b){if(b>=c.length)return!1;if(0>a.indexOf(d))return!0;e.push(d);return!1});this._length=this.data.length;return e};b.prototype.iterableRemoveMany=function(a,c){var e,b;return g(this,function(d){switch(d.label){case 0:e=[],b=0,d.label=1;case 1:if(!(b<this.length)||b>=this.length)return[3,
4];0>a.indexOf(this.data[b])&&e.push(this.data[b]);return c()?[4]:[3,3];case 2:d.sent(),d.label=3;case 3:return++b,[3,1];case 4:return this.data=e,this._length=this.data.length,[2]}})};b.prototype.removeUnordered=function(a){a=f.removeUnordered(this.data,a,this.length,this._hint);void 0!==a&&--this.length;return a};b.prototype.removeUnorderedIndex=function(a){if(!(a>=this.length||0>a))return this.swapElements(a,this.length-1),this.pop()};b.prototype.removeUnorderedMany=function(a,c,b){void 0===c&&
(c=a.length);this.length=f.removeUnorderedMany(this.data,a,this.length,c,this._hint,b)};b.prototype.front=function(){if(0!==this.length)return this.data[0]};b.prototype.back=function(){if(0!==this.length)return this.data[this.length-1]};b.prototype.swapElements=function(a,c){var b;a>=this.length||c>=this.length||a===c||(b=[this.data[c],this.data[a]],this.data[a]=b[0],this.data[c]=b[1])};b.prototype.sort=function(a){h.sort(this.data,0,this.length,a)};b.prototype.iterableSort=function(a,c){return h.iterableSort(this.data,
0,this.length,a,c)};b.prototype.some=function(a,c){for(var b=0;b<this.length;++b)if(a.call(c,this.data[b],b,this.data))return!0;return!1};b.prototype.find=function(a,b){for(var c=0;c<this.length;++c){var d=this.data[c];if(a.call(b,d,c,this.data))return d}};b.prototype.filter=function(a,c,e){e=e||new b;for(var d=0;d<this.length;++d)a.call(c,this.data[d],d,this.data)&&e.push(this.data[d]);return e};b.prototype.forEach=function(a,b){for(var c=this.length,d=0;d<Math.min(this.length,c);++d)a.call(b,this.data[d],
d,this.data)};b.prototype.iterableForEach=function(){var a;return g(this,function(b){switch(b.label){case 0:a=0,b.label=1;case 1:return a<this.length?[4,this.data[a]]:[3,4];case 2:b.sent(),b.label=3;case 3:return++a,[3,1];case 4:return[2]}})};b.prototype.map=function(a,b){for(var c=Array(this.length),d=0;d<this.length;++d)c[d]=a.call(b,this.data[d],d,this.data);return c};return b}()});