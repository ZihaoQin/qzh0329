// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./Geometry","./Rect","../../../3d/webgl-engine/lib/Util"],function(K,y,H,I,J){function F(a,h,f){J.packFloatRGBA(a,h,f)}function E(a){if(!a)return null;switch(a.type){case "CIMPointSymbol":a=a.symbolLayers;if(!a||1!==a.length)break;return E(a[0]);case "CIMVectorMarker":var h=a.markerGraphics;if(h&&1===h.length){var f=h[0];if(f&&(h=f.geometry)&&(h.rings||h.paths)&&(h.paths&&(h={rings:h.paths.map(function(a){for(var f=a.slice(),b=a.length-2;0<=b;b--)f.push(a[b]);return f})}),
(f=f.symbol)&&("CIMPolygonSymbol"===f.type||"CIMLineSymbol"===f.type)))return{marker:a,polygon:h,symbol:f}}}return null}Object.defineProperty(y,"__esModule",{value:!0});y.packFloat=F;y.checkSDF=function(a){return null!==E(a)};y.getSDFSymbol=function(a){a=a.markerGraphics;if(!a||1!==a.length)return null;a=a[0];if(!a)return null;a=a.symbol;return!a||"CIMPolygonSymbol"!==a.type&&"CIMLineSymbol"!==a.type?null:a};y.buildSDF=function(a){var h=E(a);if(!h)return null;var f;if(a=h.polygon)if(a=a.rings){for(var r=
[],w=0;w<a.length;w++){var b=[],t=0;for(f=a[w];t<f.length;t++){var e=f[t];b.push(new H.Point(e[0],e[1]))}r.push(b)}f=r}else f=null;else f=null;if(!f)return null;a=Infinity;r=-Infinity;w=Infinity;b=-Infinity;t=0;for(e=f;t<e.length;t++)for(var l=0,d=e[t];l<d.length;l++){var c=d[l];c.x<a&&(a=c.x);c.x>r&&(r=c.x);c.y<w&&(w=c.y);c.y>b&&(b=c.y)}e=new I(a,w,r-a,b-w);b=Math.floor(31.5);l=(128-2*(b+0+1))/Math.max(e.width,e.height);t=Math.round(e.height*l);a=Math.round(e.width*l)+2*b;r=t+2*b;w=1;(d=h.marker.frame)&&
(w=e.height/(d.ymax-d.ymin));e.width>e.height&&(w*=r/t/2);c=h.marker.anchorPoint;t=h=0;c&&(h=.5*(d.xmax+d.xmin)+c.x*(d.xmax-d.xmin),t=.5*(d.ymax+d.ymin)+c.y*(d.ymax-d.ymin),h-=e.x,t-=e.y,h=(h*l+(b-.5))/a-.5,t=(t*l+(b-.5))/r-.5);d=0;for(c=f;d<c.length;d++)for(var v=0,p=c[d];v<p.length;v++){var g=p[v];g.x-=e.x;g.y-=e.y;g.x*=l;g.y*=l;g.x+=b-.5;g.y+=b-.5}l=f;d=a*r;e=new Float32Array(d);v=b*b+1;for(c=0;c<d;++c)e[c]=v;for(v=0;v<l.length;v++)for(p=l[v],g=p.length,c=1;c<g;++c){var k=p[c-1],q=p[c],n=void 0,
u=void 0;k.x<q.x?(n=k.x,u=q.x):(n=q.x,u=k.x);var m=void 0,x=void 0;k.y<q.y?(m=k.y,x=q.y):(m=q.y,x=k.y);var z=Math.floor(n)-b,u=Math.floor(u)+b,m=Math.floor(m)-b,x=Math.floor(x)+b;0>z&&(z=0);u>a&&(u=a);0>m&&(m=0);x>r&&(x=r);for(var n=q.x-k.x,y=q.y-k.y,G=n*n+y*y;z<u;z++)for(var C=m;C<x;C++){var A=(z-k.x)*n+(C-k.y)*y,B=void 0,D=void 0;0>A?(B=k.x,D=k.y):A>G?(B=q.x,D=q.y):(A/=G,B=k.x+A*n,D=k.y+A*y);A=(z-B)*(z-B)+(C-D)*(C-D);B=(r-C-1)*a+z;A<e[B]&&(e[B]=A)}}for(c=0;c<d;++c)e[c]=Math.sqrt(e[c]);for(l=0;l<
f.length;l++)for(d=f[l],c=d.length,v=1;v<c;++v)for(p=d[v-1],g=d[v],q=k=void 0,p.x<g.x?(k=p.x,q=g.x):(k=g.x,q=p.x),u=m=void 0,p.y<g.y?(m=p.y,u=g.y):(m=g.y,u=p.y),k=Math.floor(k),q=Math.floor(q)+1,m=Math.floor(m),u=Math.floor(u)+1,k<b&&(k=b),q>a-b&&(q=a-b),m<b&&(m=b),u>r-b&&(u=r-b);m<u;++m)if(p.y>m!==g.y>m){x=(r-m-1)*a;for(n=k;n<q;++n)n<(g.x-p.x)*(m-p.y)/(g.y-p.y)+p.x&&(e[x+n]=-e[x+n]);for(n=b;n<k;++n)e[x+n]=-e[x+n]}b*=2;f=e.length;l=new Uint8Array(4*f);for(d=0;d<f;++d)F(.5-e[d]/b,l,4*d);return[l,a,
r,w,h,t]}});