//>>built
(function(p,d){"function"===typeof define&&define.amd?define(["cldr","../globalize","cldr/event","cldr/supplemental"],d):"object"===typeof exports?module.exports=d(require("cldrjs"),require("../globalize")):d(p.Cldr,p.Globalize)})(this,function(p,d){var v=d._runtimeBind,q=d._validateCldr,w=d._validateDefaultLocale,r=d._validateParameterPresence,t=d._validateParameterType,x=d._validateParameterTypePlainObject,m;m=function(){var a=function(a){return Array.isArray(a)?a:Array.from(a)},d=function(a){if(Array.isArray(a)){for(var c=
0,b=Array(a.length);c<a.length;c++)b[c]=a[c];return b}return Array.from(a)},e=function(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function");},k=function(){function a(c,a){for(var h=0;h<a.length;h++){var f=a[h];f.enumerable=f.enumerable||!1;f.configurable=!0;"value"in f&&(f.writable=!0);Object.defineProperty(c,f.key,f)}}return function(c,b,h){b&&a(c.prototype,b);h&&a(c,h);return c}}(),m=function(){function a(){e(this,a)}k(a,[{key:"parse",value:function(a){var c=this;return"i \x3d 0 or n \x3d 1"===
a?"n \x3e\x3d 0 \x26\x26 n \x3c\x3d 1":"i \x3d 0,1"===a?"n \x3e\x3d 0 \x26\x26 n \x3c 2":"i \x3d 1 and v \x3d 0"===a?(this.v0=1,"n \x3d\x3d 1 \x26\x26 v0"):a.replace(/([tv]) (!?)= 0/g,function(a,f,b){a=f+"0";c[a]=1;return b?"!"+a:a}).replace(/\b[fintv]\b/g,function(a){c[a]=1;return a}).replace(/([fin]) % (10+)/g,function(a,f,b){a=f+b;c[a]=1;return a}).replace(/n10+ = 0/g,"t0 \x26\x26 $\x26").replace(/(\w+ (!?)= )([0-9.]+,[0-9.,]+)/g,function(a,c,b,g){return"n \x3d 0,1"===a?"(n \x3d\x3d 0 || n \x3d\x3d 1)":
b?c+g.split(",").join(" \x26\x26 "+c):"("+c+g.split(",").join(" || "+c)+")"}).replace(/(\w+) (!?)= ([0-9]+)\.\.([0-9]+)/g,function(a,b,d,g,e){return Number(g)+1===Number(e)?d?""+b+" !\x3d "+g+" \x26\x26 "+b+" !\x3d "+e:"("+b+" \x3d\x3d "+g+" || "+b+" \x3d\x3d "+e+")":d?"("+b+" \x3c "+g+" || "+b+" \x3e "+e+")":"n"===b?(c.t0=1,"(t0 \x26\x26 n \x3e\x3d "+g+" \x26\x26 n \x3c\x3d "+e+")"):"("+b+" \x3e\x3d "+g+" \x26\x26 "+b+" \x3c\x3d "+e+")"}).replace(/ and /g," \x26\x26 ").replace(/ or /g," || ").replace(/ = /g,
" \x3d\x3d ")}},{key:"vars",value:function(a){function c(){return a.apply(this,arguments)}c.toString=function(){return a.toString()};return c}(function(){var a=[];this.i&&a.push("i \x3d s[0]");(this.f||this.v)&&a.push("f \x3d s[1] || ''");this.t&&a.push("t \x3d (s[1] || '').replace(/0+$/, '')");this.v&&a.push("v \x3d f.length");this.v0&&a.push("v0 \x3d !s[1]");(this.t0||this.n10||this.n100)&&a.push("t0 \x3d Number(s[0]) \x3d\x3d n");for(var b in this)/^.10+$/.test(b)&&a.push(""+b+" \x3d "+("n"===
b[0]?"t0 \x26\x26 s[0]":b[0])+".slice(-"+b.substr(2).length+")");return a.length?"var "+["s \x3d String(n).split('.')"].concat(a).join(", "):""})}]);return a}(),n=function(){function l(a,b){var c=void 0===b?l:b;b=c.cardinals;c=c.ordinals;e(this,l);if(!b&&!c)throw Error("At least one type of plural is required");this.lc=a;this.categories={cardinal:[],ordinal:[]};this.parser=new m;this.fn=this.buildFunction(b,c);this.fn._obj=this;this.fn.categories=this.categories;this.fn.toString=this.fnToString.bind(this);
return this.fn}k(l,[{key:"compile",value:function(c,b){var h=[],f=l.rules[c][this.lc];if(!f){if(b)throw Error('Locale "'+this.lc+'" '+c+" rules not found");this.categories[c]=["other"];return"'other'"}for(var e in f){b=f[e].trim().split(/\s*@\w*/);var g=a(b);b=g[0];g.slice(1);g=e.replace("pluralRule-count-","");b&&h.push([this.parser.parse(b),g])}this.categories[c]=h.map(function(a){return a[1]}).concat("other");return 1===h.length?"("+h[0][0]+") ? '"+h[0][1]+"' : 'other'":[].concat(d(h.map(function(a){return"("+
a[0]+") ? '"+a[1]+"'"})),["'other'"]).join("\n      : ")}},{key:"buildFunction",value:function(a,b){var c=this,f={vars:function(a){return("  "+a+";").replace(/(.{1,78})(,|$) ?/g,"$1$2\n      ")},cond:function(a){return("  "+a+";").replace(/(.{1,78}) (\|\| |$) ?/gm,"$1\n          $2")}},e=[b&&["ordinal",!a],a&&["cardinal",!0]].map(function(a){return a?(a[1]?"return ":"if (ord) return ")+c.compile.apply(c,d(a)):""}).map(f.cond),f=[f.vars(this.parser.vars())].concat(d(e)).join("\n").replace(/\s+$/gm,
"").replace(/^[\s;]*[\r\n]+/gm,"");return new Function(b&&a?"n, ord":"n",f)}},{key:"fnToString",value:function(a){return Function.prototype.toString.call(this.fn).replace(/^function( \w+)?/,a?"function "+a:"function").replace("\n/**/","")}}],[{key:"load",value:function(){for(var a=arguments.length,b=Array(a),e=0;e<a;e++)b[e]=arguments[e];b.forEach(function(a){a=a&&a.supplemental||null;if(!a)throw Error("Data does not appear to be CLDR data");l.rules={cardinal:a["plurals-type-cardinal"]||l.rules.cardinal,
ordinal:a["plurals-type-ordinal"]||l.rules.ordinal}});return l}}]);return l}();n.cardinals=!0;n.ordinals=!1;n.rules={cardinal:{},ordinal:{}};return n}();var u=function(a,d){t(a,d,void 0===a||"number"===typeof a,"Number")},y=function(a){return function(d){r(d,"value");u(d,"value");return a(d)}};d.plural=d.prototype.plural=function(a,d){r(a,"value");u(a,"value");return this.pluralGenerator(d)(a)};d.pluralGenerator=d.prototype.pluralGenerator=function(a){var d,e,k;x(a,"options");a=a||{};e=this.cldr;
d=[a];k=a.type||"cardinal";a=a.type;t(a,"options.type",void 0===a||"cardinal"===a||"ordinal"===a,'String "cardinal" or "ordinal"');w(e);a="ordinal"===k;e.on("get",q);e.supplemental(["plurals-type-"+k,"{language}"]);e.off("get",q);m.rules={};m.rules[k]=e.supplemental("plurals-type-"+k);k=new m(e.attributes.language,{ordinals:a,cardinals:!a});a=y(k);v(d,e,a,[k]);return a};return d});