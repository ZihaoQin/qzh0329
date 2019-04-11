// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f32 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f32 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f32 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/geometryUtils ../../support/mathUtils ./GeometryData ./GeometryUtil ./Util".split(" "),function(M,
N,O,D,B,E,G,l,e,k,H,z,K,C,I,m){var x;(function(r){var x=function(){function d(c){this.pos=c;this.mapPos=k.vec3f32.create();this.vRight=k.vec3f32.create();this.vLeft=k.vec3f32.create();this.frame={forward:k.vec3f32.create(),up:k.vec3f32.create(),right:k.vec3f32.create()};this.rotationAxis=k.vec3f32.create();this.angle=0}d.prototype.profileSpaceToVertexSpace=function(c,a){c[0]=a[0]*this.frame.right[0]+a[1]*this.frame.up[0];c[1]=a[0]*this.frame.right[1]+a[1]*this.frame.up[1];c[2]=a[0]*this.frame.right[2]+
a[1]*this.frame.up[2]};return d}();r.PathVertex=x;var f=function(){function d(){this.vertices=[];this.vertexIndices=[];this.uvIndices=this.uvs=this.normalIndices=this.normals=null}d.prototype.addVertex=function(c){this.vertices.push(l.vec2f32.clone(c));return this.vertices.length-1};d.prototype.addNormal=function(c){this.normals||(this.normals=[],this.normalIndices=[]);this.normals.push(l.vec2f32.clone(c));return this.normals.length-1};d.prototype.addUV=function(c){this.uvs||(this.uvs=[],this.uvIndices=
[]);this.uvs.push(c);return this.uvs.length-1};d.prototype.addSegment=function(c,a,b,g,d,e){void 0===b&&(b=null);void 0===g&&(g=null);void 0===d&&(d=null);void 0===e&&(e=null);this.vertexIndices.push(c);this.vertexIndices.push(a);null!==b&&null!==g&&(this.normalIndices.push(b),this.normalIndices.push(g));null!==d&&null!==e&&(this.uvIndices.push(d),this.uvIndices.push(e))};Object.defineProperty(d.prototype,"numSegments",{get:function(){return this.vertexIndices.length/2},enumerable:!0,configurable:!0});
d.prototype.hasNormals=function(){return null!=this.normals};d.prototype.hasUV=function(){return null!=this.uvs};d.prototype.normalize=function(){for(var c=0,a=0,b=this.vertices;a<b.length;a++)var g=b[a],c=Math.max(c,G.vec2.length(g));c=1/c;a=0;for(b=this.vertices;a<b.length;a++)g=b[a],G.vec2.scale(g,g,c)};d.tube=function(c){void 0===c&&(c=20);for(var a=new d,b=0;b<c;++b){var g=2*b*Math.PI/c;a.addVertex(l.vec2f32.fromValues(1*Math.cos(g),1*Math.sin(g)));a.addUV(b/c)}a.addUV(1);for(b=0;b<c-1;++b)a.addSegment(b,
b+1,null,null,b,b+1);a.addSegment(c-1,0,null,null,c-1,c);return a};d.line=function(c,a){var b=new d,g=a[0]-c[0],e=a[1]-c[1];b.addVertex(c);b.addVertex(a);b.addNormal(l.vec2f32.fromValues(-e,g));b.addUV(0);b.addUV(1);b.addSegment(0,1,0,0,0,1);return b};d.point=function(c){var a=new d;a.addVertex(c);return a};d.wall=function(c,a){void 0===c&&(c=.2);void 0===a&&(a=1);var b=new d;b.addVertex(l.vec2f32.fromValues(.5*-c,0));b.addVertex(l.vec2f32.fromValues(.5*c,0));b.addVertex(l.vec2f32.fromValues(.5*c,
a));b.addVertex(l.vec2f32.fromValues(.5*-c,a));b.addNormal(l.vec2f32.fromValues(0,-1));b.addNormal(l.vec2f32.fromValues(1,0));b.addNormal(l.vec2f32.fromValues(0,1));b.addNormal(l.vec2f32.fromValues(-1,0));b.addUV(0);b.addUV(1);b.addSegment(0,1,0,0,0,1);b.addSegment(1,2,1,1,0,1);b.addSegment(2,3,2,2,0,1);b.addSegment(3,0,3,3,0,1);return b};d.strip=function(){return this.line(l.vec2f32.fromValues(-1,0),l.vec2f32.fromValues(1,0))};d.fence=function(){return this.line(l.vec2f32.fromValues(0,0),l.vec2f32.fromValues(0,
1))};return d}();r.Profile=f;f=function(){return function(d,c,a,b,g,v){this.vertices=[];this.offset=k.vec3f32.create();e.vec3.copy(this.offset,v);for(v=a;v<a+b;++v){var t=new x(k.vec3f32.fromValues(d[3*v+0],d[3*v+1],d[3*v+2]));e.vec3.set(t.mapPos,c[3*v+0],c[3*v+1],c[3*v+2]);this.vertices.push(t)}d=k.vec3f32.create();c=k.vec3f32.create();a=k.vec3f32.create();v=k.vec3f32.create();var t=k.vec3f32.create(),f=H.vec3f64.create(),m=k.vec3f32.create(),l=k.vec3f32.create(),r=k.vec3f32.create(),q=k.vec3f32.create(),
p,n,u=z.plane.create(),h=this.vertices[0];e.vec3.set(m,0,1,0);e.vec3.subtract(c,this.vertices[1].pos,h.pos);p=0;n=e.vec3.length(c);e.vec3.normalize(c,c);g?(e.vec3.add(f,h.pos,this.offset),e.vec3.normalize(a,f)):e.vec3.set(a,0,0,1);I.makeOrthoBasisDirUpFallback(c,a,m,m,t,a,.99619469809);e.vec3.copy(v,a);e.vec3.copy(q,t);e.vec3.copy(h.vRight,c);e.vec3.copy(h.vLeft,d);e.vec3.copy(h.frame.forward,c);e.vec3.copy(h.frame.up,a);e.vec3.copy(h.frame.right,t);h.vLeftLength=p;h.vRightLength=n;h.index=0;e.vec3.cross(h.rotationAxis,
h.vLeft,h.vRight);e.vec3.normalize(h.rotationAxis,h.rotationAxis);h.angle=0;for(g=1;g<b;++g)h=this.vertices[g],e.vec3.copy(d,c),p=n,g<b-1&&(e.vec3.subtract(c,this.vertices[g+1].pos,h.pos),n=e.vec3.length(c),e.vec3.normalize(c,c)),e.vec3.add(l,d,c),e.vec3.normalize(l,l),e.vec3.add(r,this.vertices[g-1].pos,v),z.plane.fromPositionAndNormal(this.vertices[g].pos,l,u),z.plane.intersectRay(u,z.ray.wrap(r,d),f)?(e.vec3.subtract(f,f,this.vertices[g].pos),e.vec3.normalize(a,f),e.vec3.cross(t,l,a),e.vec3.normalize(t,
t)):I.makeOrthoBasisDirUpFallback(l,v,q,m,t,a,.99619469809),e.vec3.copy(v,a),e.vec3.copy(q,t),e.vec3.copy(h.vRight,c),e.vec3.copy(h.vLeft,d),e.vec3.copy(h.frame.forward,l),e.vec3.copy(h.frame.up,a),e.vec3.copy(h.frame.right,t),h.vLeftLength=p,h.vRightLength=n,h.index=g,e.vec3.cross(h.rotationAxis,h.vLeft,h.vRight),e.vec3.normalize(h.rotationAxis,h.rotationAxis),e.vec3.negate(J,h.vLeft),h.angle=Math.PI-K.acos(e.vec3.dot(J,h.vRight))}}();r.Path=f;f=function(){return function(){}}();r.Extruder=f;f=function(){function d(){}
d.prototype.numVertices=function(c){return c.vertices.length};d.prototype.extrude=function(c,a,b){for(var g=0;g<a.vertices.length;++g){var d=a.vertices[g];d.profileSpaceToVertexSpace(p,c);b(d.pos,p,g)}};return d}();r.SimpleExtruder=f;f=function(){function d(c){void 0===c&&(c=1);this._segmentsPerRadian=c/Math.PI}d.prototype.getNumSegments=function(c){return Math.ceil(c*this._segmentsPerRadian)};d.prototype.numVertices=function(c){for(var a=2,b=1;b<c.vertices.length-1;++b)a+=this.getNumSegments(c.vertices[b].angle)+
1;return a};d.prototype.extrude=function(c,a,b){a.vertices[0].profileSpaceToVertexSpace(p,c);b(a.vertices[0].pos,p,0);e.vec3.copy(F,p);for(var g=1;g<a.vertices.length-1;++g){var d=a.vertices[g];d.profileSpaceToVertexSpace(p,c);var t=this.getNumSegments(d.angle);B.mat4.identity(u);B.mat4.rotate(u,u,.5*-d.angle,d.rotationAxis);e.vec3.transformMat4(A,p,u);if(0<=e.vec3.dot(A,d.vRight)){for(var f=0;f<t+1;++f)b(d.pos,p,g);e.vec3.copy(F,p)}else{B.mat4.identity(u);B.mat4.rotate(u,u,d.angle/t,d.rotationAxis);
b(d.pos,A,g);e.vec3.copy(y,A);for(f=0;f<t;++f)e.vec3.transformMat4(y,y,u),b(d.pos,y,g);e.vec3.copy(F,y)}}g=a.vertices.length-1;a.vertices[g].profileSpaceToVertexSpace(p,c);b(a.vertices[g].pos,p,g)};return d}();r.RoundExtruder=f;f=function(d){function c(){return d.call(this,1)||this}D(c,d);return c}(f);r.BevelExtruder=f;var E={generateUV:!1},f=function(){function d(c,a,b,d){void 0===d&&(d=E);this.options=d;this._capNormalsOffset=this.numUVTotal=this.numNormalsTotal=this.numVerticesTotal=this._numExtrusionVertices=
this._extrusionNormalCount=this._extrusionVertexCount=0;this.profile=a;this.profile.normalize();this.path=c;this.extruder=b;this._numExtrusionVertices=b.numVertices(c);this.numVerticesTotal=a.vertices.length*this._numExtrusionVertices;this.profile.hasNormals()?this.numNormalsTotal=this.profile.normals.length*this._numExtrusionVertices:this.numNormalsTotal=this.numVerticesTotal;this.numNormalsTotal+=2;this.originData=new Float32Array(3*this.numVerticesTotal);this.directionData=new Float32Array(4*this.numVerticesTotal);
this.normalData=new Float32Array(3*this.numNormalsTotal);this.pathVertexData=new Float32Array(1*this.numVerticesTotal);this.profile.hasUV()&&this.options.generateUV&&(this.numUVTotal=this.profile.uvs.length,this.uvData=new Float32Array(2*this.numUVTotal));this.buildGeometry();this.buildTopology()}d.prototype.emitVertex=function(c,a,b){this.originData[3*this._extrusionVertexCount+0]=c[0];this.originData[3*this._extrusionVertexCount+1]=c[1];this.originData[3*this._extrusionVertexCount+2]=c[2];this.directionData[4*
this._extrusionVertexCount+0]=a[0];this.directionData[4*this._extrusionVertexCount+1]=a[1];this.directionData[4*this._extrusionVertexCount+2]=a[2];this.directionData[4*this._extrusionVertexCount+3]=b/(this.path.vertices.length-1);this.pathVertexData[this._extrusionVertexCount]=b;++this._extrusionVertexCount};d.prototype.emitNormal=function(c,a,b){e.vec3.normalize(n,a);this.normalData[3*this._extrusionNormalCount+0]=n[0];this.normalData[3*this._extrusionNormalCount+1]=n[1];this.normalData[3*this._extrusionNormalCount+
2]=n[2];++this._extrusionNormalCount};d.prototype.buildGeometry=function(){for(var c=this.emitVertex.bind(this),a=this.emitNormal.bind(this),b=this._extrusionNormalCount=this._extrusionVertexCount=0;b<this.profile.vertices.length;++b)this.extruder.extrude(this.profile.vertices[b],this.path,c);if(this.profile.hasNormals())for(c=0;c<this.profile.normals.length;++c)this.extruder.extrude(this.profile.normals[c],this.path,a);else for(c=0;c<this._extrusionVertexCount;++c)e.vec3.set(n,this.directionData[4*
c+0],this.directionData[4*c+1],this.directionData[4*c+2]),e.vec3.normalize(n,n),this.normalData[3*this._extrusionNormalCount+0]=n[0],this.normalData[3*this._extrusionNormalCount+1]=n[1],this.normalData[3*this._extrusionNormalCount+2]=n[2],++this._extrusionNormalCount;this._capNormalsOffset=this._extrusionNormalCount;a=this.path.vertices[0];c=this.path.vertices[this.path.vertices.length-1];this.normalData[3*this._extrusionNormalCount+0]=-a.vRight[0];this.normalData[3*this._extrusionNormalCount+1]=
-a.vRight[1];this.normalData[3*this._extrusionNormalCount+2]=-a.vRight[2];++this._extrusionNormalCount;this.normalData[3*this._extrusionNormalCount+0]=c.vRight[0];this.normalData[3*this._extrusionNormalCount+1]=c.vRight[1];this.normalData[3*this._extrusionNormalCount+2]=c.vRight[2];++this._extrusionNormalCount;if(this.profile.hasUV()&&this.options.generateUV)for(c=0;c<this.profile.uvs.length;++c)this.uvData[2*c+0]=this.profile.uvs[c],this.uvData[2*c+1]=0};d.prototype.buildTopology=function(){var c=
this.profile.numSegments,a=this._numExtrusionVertices-1,b=c*a*6;2<this.profile.vertices.length&&(b+=6*(this.profile.vertices.length-2));this.vertexIndices=new Uint32Array(b);this.normalIndices=new Uint32Array(b);this.pathVertexIndices=new Uint32Array(b);this.profile.hasUV()&&this.options.generateUV&&(this.uvIndices=new Uint32Array(b));for(var d=b=0;d<c;++d){var e=this.profile.vertexIndices[2*d],f=this.profile.vertexIndices[2*d+1],l=e,k=f,m=0,p=0;this.profile.hasNormals()&&(l=this.profile.normalIndices[2*
d],k=this.profile.normalIndices[2*d+1]);this.profile.hasUV()&&this.options.generateUV&&(m=this.profile.uvIndices[2*d],p=this.profile.uvIndices[2*d+1]);for(var q=0;q<a;++q){var n=e*this._numExtrusionVertices+q,r=e*this._numExtrusionVertices+q+1,u=f*this._numExtrusionVertices+q+1,h=f*this._numExtrusionVertices+q,w=l*this._numExtrusionVertices+q,x=l*this._numExtrusionVertices+q+1,y=k*this._numExtrusionVertices+q+1,B=k*this._numExtrusionVertices+q,z=m,C=m,A=p,D=p;this.vertexIndices[3*b+0]=n;this.vertexIndices[3*
b+1]=r;this.vertexIndices[3*b+2]=u;this.pathVertexIndices[3*b+0]=this.pathVertexData[n];this.pathVertexIndices[3*b+1]=this.pathVertexData[r];this.pathVertexIndices[3*b+2]=this.pathVertexData[u];this.normalIndices[3*b+0]=w;this.normalIndices[3*b+1]=x;this.normalIndices[3*b+2]=y;this.vertexIndices[3*b+3]=n;this.vertexIndices[3*b+4]=u;this.vertexIndices[3*b+5]=h;this.pathVertexIndices[3*b+3]=this.pathVertexData[n];this.pathVertexIndices[3*b+4]=this.pathVertexData[u];this.pathVertexIndices[3*b+5]=this.pathVertexData[h];
this.normalIndices[3*b+3]=w;this.normalIndices[3*b+4]=y;this.normalIndices[3*b+5]=B;this.profile.hasUV()&&this.options.generateUV&&(this.uvIndices[3*b+0]=z,this.uvIndices[3*b+1]=C,this.uvIndices[3*b+2]=A,this.uvIndices[3*b+3]=z,this.uvIndices[3*b+4]=A,this.uvIndices[3*b+5]=D);b+=2}}if(2<this.profile.vertices.length)for(c=this.profile.vertices.length-2,e=0,a=e*this._numExtrusionVertices+0,e=(e+1)*this._numExtrusionVertices-1,q=0;q<c;++q)f=q+1,d=f*this._numExtrusionVertices+0,f=(f+1)*this._numExtrusionVertices-
1,k=q+2,l=k*this._numExtrusionVertices+0,k=(k+1)*this._numExtrusionVertices-1,this.vertexIndices[3*b+0]=a,this.vertexIndices[3*b+1]=d,this.vertexIndices[3*b+2]=l,this.normalIndices[3*b+0]=this._capNormalsOffset+0,this.normalIndices[3*b+1]=this._capNormalsOffset+0,this.normalIndices[3*b+2]=this._capNormalsOffset+0,this.pathVertexIndices[3*b+0]=this.pathVertexData[a],this.pathVertexIndices[3*b+1]=this.pathVertexData[d],this.pathVertexIndices[3*b+2]=this.pathVertexData[l],++b,this.vertexIndices[3*b+
0]=k,this.vertexIndices[3*b+1]=f,this.vertexIndices[3*b+2]=e,this.normalIndices[3*b+0]=this._capNormalsOffset+1,this.normalIndices[3*b+1]=this._capNormalsOffset+1,this.normalIndices[3*b+2]=this._capNormalsOffset+1,this.pathVertexIndices[3*b+0]=this.pathVertexData[k],this.pathVertexIndices[3*b+1]=this.pathVertexData[f],this.pathVertexIndices[3*b+2]=this.pathVertexData[e],++b};return d}();r.Builder=f;f=function(){function d(c){this.builder=c}d.prototype.updateElevation=function(c){for(var a=this.builder.path.offset,
b=this.builder.originData,d=0;d<this.builder.numVerticesTotal;++d){var e=this.builder.path.vertices[this.builder.pathVertexData[d]];w[0]=b[3*d+0]+a[0];w[1]=b[3*d+1]+a[1];w[2]=b[3*d+2]+a[2];c.setAltitude(e.elevation,w);b[3*d+0]=w[0]-a[0];b[3*d+1]=w[1]-a[1];b[3*d+2]=w[2]-a[2]}};return d}();r.PathGeometry=f;var L=function(d){function c(a,b,c){a=d.call(this,a)||this;a.size=b;a.vertexAttributePosition=null;a.vertexAttributeNormal=null;a.vertexAttributeColor=null;a.vertexAttributePosition=new Float32Array(3*
a.builder.numVerticesTotal);a.vertexAttributeNormal=a.builder.normalData;a._bakeVertexPositions();c&&(a.vertexAttributeColor=new Uint8Array(4),a.vertexAttributeColor[0]=255*c[0],a.vertexAttributeColor[1]=255*c[1],a.vertexAttributeColor[2]=255*c[2],a.vertexAttributeColor[3]=255*(3<c.length?c[3]:1));return a}D(c,d);c.prototype._bakeVertexPositions=function(){for(var a=0;a<this.builder.numVerticesTotal;++a)this.vertexAttributePosition[3*a+0]=this.builder.originData[3*a+0]+this.builder.directionData[4*
a+0]*this.size,this.vertexAttributePosition[3*a+1]=this.builder.originData[3*a+1]+this.builder.directionData[4*a+1]*this.size,this.vertexAttributePosition[3*a+2]=this.builder.originData[3*a+2]+this.builder.directionData[4*a+2]*this.size};c.prototype.createGeometryData=function(){var a={};a[m.VertexAttrConstants.POSITION]=this.builder.vertexIndices;a[m.VertexAttrConstants.NORMAL]=this.builder.normalIndices;this.vertexAttributeColor&&(a[m.VertexAttrConstants.COLOR]=new Uint32Array(a[m.VertexAttrConstants.POSITION].length));
var b={};b[m.VertexAttrConstants.POSITION]={size:3,data:this.vertexAttributePosition};b[m.VertexAttrConstants.NORMAL]={size:3,data:this.vertexAttributeNormal};this.vertexAttributeColor&&(b[m.VertexAttrConstants.COLOR]={size:4,data:this.vertexAttributeColor});return new C(b,a,C.DefaultOffsets,"triangle")};c.prototype.updateElevation=function(a){d.prototype.updateElevation.call(this,a);this._bakeVertexPositions()};return c}(f);r.StaticPathGeometry=L;f=function(d){function c(a,b,c,e){a=d.call(this,a)||
this;a.vvData=null;a.vvData=new Float32Array(4*a.builder.path.vertices.length);for(var f=0;f<a.builder.path.vertices.length;++f)a.vvData[4*f+0]=b,a.vvData[4*f+1]=c,a.vvData[4*f+2]=e,a.vvData[4*f+3]=0;return a}D(c,d);c.prototype.createGeometryData=function(){var a={};a[m.VertexAttrConstants.POSITION]=this.builder.vertexIndices;a[m.VertexAttrConstants.AUXPOS1]=this.builder.vertexIndices;a[m.VertexAttrConstants.NORMAL]=this.builder.normalIndices;a[m.VertexAttrConstants.AUXPOS2]=this.builder.pathVertexIndices;
var b={};b[m.VertexAttrConstants.POSITION]={size:3,data:this.builder.originData};b[m.VertexAttrConstants.AUXPOS1]={size:4,data:this.builder.directionData};b[m.VertexAttrConstants.NORMAL]={size:3,data:this.builder.normalData};b[m.VertexAttrConstants.AUXPOS2]={size:4,data:this.vvData};this.builder.profile.hasUV()&&this.builder.options.generateUV&&(a[m.VertexAttrConstants.UV0]=this.builder.uvIndices,b[m.VertexAttrConstants.UV0]={size:2,data:this.builder.uvData});return new C(b,a,C.DefaultOffsets,"triangle")};
return c}(f);r.FastUpdatePathGeometry=f})(x||(x={}));var p=k.vec3f32.create(),n=k.vec3f32.create(),w=H.vec3f64.create(),J=k.vec3f32.create(),F=k.vec3f32.create(),A=k.vec3f32.create(),y=k.vec3f32.create(),u=E.mat4f32.create();return x});