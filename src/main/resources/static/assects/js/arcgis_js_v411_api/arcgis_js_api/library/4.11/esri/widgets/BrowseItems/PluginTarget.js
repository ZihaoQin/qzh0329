// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","dojo/aspect","dojo/when","../../core/promiseUtils"],function(h,k,l,m){function c(){k.after(this.constructor._meta,"ctor",this._pluginsHandler,!0);this._plugins={}}c.prototype={addPlugin:function(a,b){var f=this,d=this._plugins;return m.create(function(c,g){try{h([a],function(e){a in d?c({id:d[a].declaredId||a.replace(/\//g,".")}):(d[a]=e,l(e.add(f,b),function(){var b={id:e.declaredId||a.replace(/\//g,".")};f.emit("plugin-add",b);c(b)},function(a){g(a)}))})}catch(e){g(e)}})},removePlugin:function(a){if(a in
this._plugins){var b=this._plugins[a];b.remove(this);delete this._plugins[a];this.emit("plugin-remove",{id:b.declaredId||a.replace(/\//g,".")})}},_pluginsHandler:function(){Array.prototype.slice.call(arguments).some(function(a){if(a&&a.plugins&&a.plugins instanceof Array){a=a.plugins;var b,c,d;for(d=0;d<a.length;d++)b=a[d],c=b instanceof Object?b.id:b,this.addPlugin(c,b.options);return!0}},this)}};return c});