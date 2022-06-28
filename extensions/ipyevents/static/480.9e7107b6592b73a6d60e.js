(self.webpackChunkipyevents=self.webpackChunkipyevents||[]).push([[480],{235:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const i=n(591),o=n(657),u=r(n(311));let a=["altKey","ctrlKey","metaKey","shiftKey","type","timeStamp"],c=["clientX","clientY","pageX","pageY","screenX","screenY"],l=["dataX","dataY","relativeX","relativeY","boundingRectWidth","boundingRectHeight","boundingRectTop","boundingRectLeft","boundingRectBottom","boundingRectRight","arrayX","arrayY"],s=["button","buttons","layerX","layerY","movementX","movementY","offsetX","offsetY","x","y"],f=["deltaX","deltaY","deltaZ","deltaMode"],h=["changedTouches","targetTouches","touches"],p=["identifier"],d=["dataTransfer"],v=["code","key","location","repeat"],_=["tagName","id","className"],y={};class g extends i.WidgetModel{defaults(){return u.extend(super.defaults(),{_model_name:"EventModel",_model_module:"ipyevents",_model_module_version:o.EXTENSION_SPEC_VERSION,source:null,watched_events:[],ignore_modifier_key_events:!1,prevent_default_action:!1,xy_coordinate_system:null,xy:[],wait:0,throttle_or_debounce:null,_supported_mouse_events:[],_supported_key_events:[],_supported_touch_events:[],_modifier_keys:["Shift","Control","Alt","Meta"]})}initialize(t,e){super.initialize(t,e),this.on("change:source",this.prepare_source,this),this.on("change:watched_events",this.update_listeners,this),this.on("change:xy_coordinate_system",this.update_listeners,this),this.on("change:wait",this.update_listeners,this),this.on("change:throttle_or_debounce",this.update_listeners,this),this.prepare_source()}key_mouse_or_touch(t){return u.contains(this.get("_supported_mouse_events"),t)?"mouse":u.contains(this.get("_supported_key_events"),t)?"keyboard":u.contains(this.get("_supported_touch_events"),t)?"touch":void 0}_cache_listeners(t,e,n){y[this.model_id]||(y[this.model_id]=[]),y[this.model_id].push({event:t,view:e,func:n})}prepare_source(){let t=this.previous("source");this.stopListening(t);let e=this.get("source");"DOMWidgetModel"!=e.name&&("number"!=typeof e.get("_view_count")&&e.set("_view_count",0),this.listenTo(e,"change:_view_count",this.update_listeners),this.update_listeners())}update_listeners(){this.remove_listeners(),this.attach_listeners()}remove_listeners(){if(y[this.model_id])for(let t of y[this.model_id])t.view.el.removeEventListener(t.event,t.func);y[this.model_id]=null,this.get("xy").length>0&&(this.set("xy",[]),this.save_changes())}_add_listeners_to_view(t){for(let e of this.get("watched_events"))switch(this.key_mouse_or_touch(e)){case"keyboard":this._add_key_listener(e,t);break;case"touch":case"mouse":let n=this._throttle_or_debounce(this._dom_click.bind(this,t)),r=this._prevent_event_propagation.bind(this,t);t.el.addEventListener(e,n),t.el.addEventListener(e,r),this._cache_listeners(e,t,n),this._cache_listeners(e,t,r);break;default:console.error("Not familiar with that message source")}if(this.get("xy_coordinate_system")){let e=this._throttle_or_debounce(this._set_xy.bind(this,t)),n=this._prevent_event_propagation.bind(this,t),r="mousemove";t.el.addEventListener(r,e),t.el.addEventListener(r,n),this._cache_listeners(r,t,e),this._cache_listeners(r,t,n)}}attach_listeners(){let t=this.get("source");u.each(t.views,(t=>{Promise.resolve(t).then((t=>{this._add_listeners_to_view(t)}))}))}_add_key_listener(t,e){let n=t=>{this.get("ignore_modifier_key_events")&&u.contains(this.get("_modifier_keys"),t.key)||(this._send_dom_event(t),t.stopPropagation(),t.preventDefault())},r="ipyevents-watched",i="-4242";n=this._throttle_or_debounce(n);let o=()=>{document.addEventListener(t,n,!0),e.el.focus({preventScroll:!0}),e.el!=document.activeElement&&(e.el.setAttribute("tabindex",i),e.el.focus({preventScroll:!0})),e.el.classList.add(r)},a=()=>{document.removeEventListener(t,n,!0),e.el.getAttribute("tabindex")==i&&e.el.removeAttribute("tabindex"),e.el.classList.remove(r),e.el.blur()};e.el.addEventListener("mouseenter",o),e.el.addEventListener("mouseleave",a),this._cache_listeners("mouseenter",e,o),this._cache_listeners("mouseleave",e,a)}_supplement_mouse_or_touch_positions(t,e){if("touch"==this.key_mouse_or_touch(e.type))for(let n of h)for(let r of e[n])this._supplement_mouse_positions(t,r);else this._supplement_mouse_positions(t,e)}_supplement_mouse_positions(t,e){let n=function(t,e){var n=t.el.getBoundingClientRect(),r=n.top,i=n.left;return{x:Math.round(e.clientX-i),y:Math.round(e.clientY-r)}}(t,e);if(e.relativeX=n.x,e.relativeY=n.y,"_data_xy"in t){let n=t._data_xy(e);e.dataX=n.x,e.dataY=n.y}else if("ImageView"==t.model.get("_view_name")){let n=function(t,e){var n=parseInt(t.el.style.paddingLeft)||0,r=parseInt(t.el.style.borderLeft)||0,i=parseInt(t.el.style.paddingTop)||0,o=parseInt(t.el.style.borderTop)||0,u=parseInt(e.relativeX)-r-n,a=parseInt(e.relativeY)-o-i;return{x:Math.round(u/t.el.width*t.el.naturalWidth),y:Math.round(a/t.el.height*t.el.naturalHeight)}}(t,e);e.dataX=n.x,e.dataY=n.y}var r=t.el.getBoundingClientRect();e.boundingRectWidth=r.width,e.boundingRectHeight=r.height,e.boundingRectTop=r.top,e.boundingRectLeft=r.left,e.boundingRectBottom=r.bottom,e.boundingRectRight=r.right,"dataX"in e&&(e.arrayX=e.dataX,e.arrayY=e.dataY)}_dom_click(t,e){this._supplement_mouse_or_touch_positions(t,e),this._send_dom_event(e)}_set_xy(t,e){this._supplement_mouse_or_touch_positions(t,e);let n=this.get("xy_coordinate_system"),r=[e[n+"X"],e[n+"Y"]];void 0!==r[0]?(this.set("xy",r),this.save_changes()):console.error("No coordinates of this type found: "+n)}_send_dom_event(t){let e={target:{}},n=[];switch(this.key_mouse_or_touch(t.type)){case"touch":n=a.concat(h);break;case"mouse":n=a.concat(s),n=n.concat(c),n=n.concat(l),"wheel"==t.type?n=n.concat(f):("drop"==t.type||t.type.startsWith("drag"))&&(n=n.concat(d));break;case"keyboard":n=a.concat(v);break;default:console.error("Not familiar with that message source")}for(let r of n)h.includes(r)?e[r]=this._populate_touch_event_list(t[r]):e[r]=t[r];for(let n of _)e.target[n]=t.target[n];e.event=t.type,this.send(e,{})}_populate_touch_event_list(t){let e={},n=[],r=p.concat(c);r=r.concat(l);for(let i of t){for(let t of r)e[t]=i[t];n=n.concat(e)}return n}_prevent_event_propagation(t,e){("wheel"==e.type||this.get("prevent_default_action"))&&(e.preventDefault(),e.stopPropagation())}_throttle_or_debounce(t){let e=this.get("wait"),n=this.get("throttle_or_debounce");return e>0?"debounce"==n?u.debounce(t,e):u.throttle(t,e):t}}e.EventModel=g,g.serializers=Object.assign(Object.assign({},i.WidgetModel.serializers),{source:{deserialize:i.unpack_models}})},568:(t,e,n)=>{"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(657)),r(n(235))},480:(t,e,n)=>{var r=n(568),i=n(591);t.exports={id:"ipyevents",requires:[i.IJupyterWidgetRegistry],activate:function(t,e){e.registerWidget({name:"ipyevents",version:r.EXTENSION_SPEC_VERSION,exports:r})},autoStart:!0}},657:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EXTENSION_SPEC_VERSION="2.0.1"},311:function(t,e,n){t.exports=function(){var t="1.13.1",e="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g||Function("return this")()||{},r=Array.prototype,i=Object.prototype,o="undefined"!=typeof Symbol?Symbol.prototype:null,u=r.push,a=r.slice,c=i.toString,l=i.hasOwnProperty,s="undefined"!=typeof ArrayBuffer,f="undefined"!=typeof DataView,h=Array.isArray,p=Object.keys,d=Object.create,v=s&&ArrayBuffer.isView,_=isNaN,y=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),m=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],b=Math.pow(2,53)-1;function w(t,e){return e=null==e?t.length-1:+e,function(){for(var n=Math.max(arguments.length-e,0),r=Array(n),i=0;i<n;i++)r[i]=arguments[i+e];switch(e){case 0:return t.call(this,r);case 1:return t.call(this,arguments[0],r);case 2:return t.call(this,arguments[0],arguments[1],r)}var o=Array(e+1);for(i=0;i<e;i++)o[i]=arguments[i];return o[e]=r,t.apply(this,o)}}function x(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function j(t){return void 0===t}function E(t){return!0===t||!1===t||"[object Boolean]"===c.call(t)}function S(t){var e="[object "+t+"]";return function(t){return c.call(t)===e}}var O=S("String"),k=S("Number"),M=S("Date"),A=S("RegExp"),R=S("Error"),N=S("Symbol"),I=S("ArrayBuffer"),T=S("Function"),X=e.document&&e.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof X&&(T=function(t){return"function"==typeof t||!1});var B=T,L=S("Object"),Y=f&&L(new DataView(new ArrayBuffer(8))),P="undefined"!=typeof Map&&L(new Map),W=S("DataView"),D=Y?function(t){return null!=t&&B(t.getInt8)&&I(t.buffer)}:W,V=h||S("Array");function z(t,e){return null!=t&&l.call(t,e)}var C=S("Arguments");!function(){C(arguments)||(C=function(t){return z(t,"callee")})}();var F=C;function q(t){return k(t)&&_(t)}function K(t){return function(){return t}}function U(t){return function(e){var n=t(e);return"number"==typeof n&&n>=0&&n<=b}}function H(t){return function(e){return null==e?void 0:e[t]}}var $=H("byteLength"),J=U($),Z=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,G=s?function(t){return v?v(t)&&!D(t):J(t)&&Z.test(c.call(t))}:K(!1),Q=H("length");function tt(t,e){e=function(t){for(var e={},n=t.length,r=0;r<n;++r)e[t[r]]=!0;return{contains:function(t){return e[t]},push:function(n){return e[n]=!0,t.push(n)}}}(e);var n=m.length,r=t.constructor,o=B(r)&&r.prototype||i,u="constructor";for(z(t,u)&&!e.contains(u)&&e.push(u);n--;)(u=m[n])in t&&t[u]!==o[u]&&!e.contains(u)&&e.push(u)}function et(t){if(!x(t))return[];if(p)return p(t);var e=[];for(var n in t)z(t,n)&&e.push(n);return g&&tt(t,e),e}function nt(t,e){var n=et(e),r=n.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var u=n[o];if(e[u]!==i[u]||!(u in i))return!1}return!0}function rt(t){return t instanceof rt?t:this instanceof rt?void(this._wrapped=t):new rt(t)}function it(t){return new Uint8Array(t.buffer||t,t.byteOffset||0,$(t))}rt.VERSION=t,rt.prototype.value=function(){return this._wrapped},rt.prototype.valueOf=rt.prototype.toJSON=rt.prototype.value,rt.prototype.toString=function(){return String(this._wrapped)};var ot="[object DataView]";function ut(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return!1;if(t!=t)return e!=e;var i=typeof t;return("function"===i||"object"===i||"object"==typeof e)&&function t(e,n,r,i){e instanceof rt&&(e=e._wrapped),n instanceof rt&&(n=n._wrapped);var u=c.call(e);if(u!==c.call(n))return!1;if(Y&&"[object Object]"==u&&D(e)){if(!D(n))return!1;u=ot}switch(u){case"[object RegExp]":case"[object String]":return""+e==""+n;case"[object Number]":return+e!=+e?+n!=+n:0==+e?1/+e==1/n:+e==+n;case"[object Date]":case"[object Boolean]":return+e==+n;case"[object Symbol]":return o.valueOf.call(e)===o.valueOf.call(n);case"[object ArrayBuffer]":case ot:return t(it(e),it(n),r,i)}var a="[object Array]"===u;if(!a&&G(e)){if($(e)!==$(n))return!1;if(e.buffer===n.buffer&&e.byteOffset===n.byteOffset)return!0;a=!0}if(!a){if("object"!=typeof e||"object"!=typeof n)return!1;var l=e.constructor,s=n.constructor;if(l!==s&&!(B(l)&&l instanceof l&&B(s)&&s instanceof s)&&"constructor"in e&&"constructor"in n)return!1}i=i||[];for(var f=(r=r||[]).length;f--;)if(r[f]===e)return i[f]===n;if(r.push(e),i.push(n),a){if((f=e.length)!==n.length)return!1;for(;f--;)if(!ut(e[f],n[f],r,i))return!1}else{var h,p=et(e);if(f=p.length,et(n).length!==f)return!1;for(;f--;)if(!z(n,h=p[f])||!ut(e[h],n[h],r,i))return!1}return r.pop(),i.pop(),!0}(t,e,n,r)}function at(t){if(!x(t))return[];var e=[];for(var n in t)e.push(n);return g&&tt(t,e),e}function ct(t){var e=Q(t);return function(n){if(null==n)return!1;var r=at(n);if(Q(r))return!1;for(var i=0;i<e;i++)if(!B(n[t[i]]))return!1;return t!==pt||!B(n[lt])}}var lt="forEach",st=["clear","delete"],ft=["get","has","set"],ht=st.concat(lt,ft),pt=st.concat(ft),dt=["add"].concat(st,lt,"has"),vt=P?ct(ht):S("Map"),_t=P?ct(pt):S("WeakMap"),yt=P?ct(dt):S("Set"),gt=S("WeakSet");function mt(t){for(var e=et(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r}function bt(t){for(var e={},n=et(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e}function wt(t){var e=[];for(var n in t)B(t[n])&&e.push(n);return e.sort()}function xt(t,e){return function(n){var r=arguments.length;if(e&&(n=Object(n)),r<2||null==n)return n;for(var i=1;i<r;i++)for(var o=arguments[i],u=t(o),a=u.length,c=0;c<a;c++){var l=u[c];e&&void 0!==n[l]||(n[l]=o[l])}return n}}var jt=xt(at),Et=xt(et),St=xt(at,!0);function Ot(t){if(!x(t))return{};if(d)return d(t);var e=function(){};e.prototype=t;var n=new e;return e.prototype=null,n}function kt(t){return x(t)?V(t)?t.slice():jt({},t):t}function Mt(t){return V(t)?t:[t]}function At(t){return rt.toPath(t)}function Rt(t,e){for(var n=e.length,r=0;r<n;r++){if(null==t)return;t=t[e[r]]}return n?t:void 0}function Nt(t,e,n){var r=Rt(t,At(e));return j(r)?n:r}function It(t){return t}function Tt(t){return t=Et({},t),function(e){return nt(e,t)}}function Xt(t){return t=At(t),function(e){return Rt(e,t)}}function Bt(t,e,n){if(void 0===e)return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return null==t?It:B(t)?Bt(t,e,n):x(t)&&!V(t)?Tt(t):Xt(t)}function Yt(t,e){return Lt(t,e,1/0)}function Pt(t,e,n){return rt.iteratee!==Yt?rt.iteratee(t,e):Lt(t,e,n)}function Wt(){}function Dt(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))}rt.toPath=Mt,rt.iteratee=Yt;var Vt=Date.now||function(){return(new Date).getTime()};function zt(t){var e=function(e){return t[e]},n="(?:"+et(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}}var Ct={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Ft=zt(Ct),qt=zt(bt(Ct)),Kt=rt.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Ut=/(.)^/,Ht={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},$t=/\\|'|\r|\n|\u2028|\u2029/g;function Jt(t){return"\\"+Ht[t]}var Zt=/^\s*(\w|\$)+\s*$/,Gt=0;function Qt(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var o=Ot(t.prototype),u=t.apply(o,i);return x(u)?u:o}var te=w((function(t,e){var n=te.placeholder,r=function(){for(var i=0,o=e.length,u=Array(o),a=0;a<o;a++)u[a]=e[a]===n?arguments[i++]:e[a];for(;i<arguments.length;)u.push(arguments[i++]);return Qt(t,r,this,this,u)};return r}));te.placeholder=rt;var ee=w((function(t,e,n){if(!B(t))throw new TypeError("Bind must be called on a function");var r=w((function(i){return Qt(t,r,e,this,n.concat(i))}));return r})),ne=U(Q);function re(t,e,n,r){if(r=r||[],e||0===e){if(e<=0)return r.concat(t)}else e=1/0;for(var i=r.length,o=0,u=Q(t);o<u;o++){var a=t[o];if(ne(a)&&(V(a)||F(a)))if(e>1)re(a,e-1,n,r),i=r.length;else for(var c=0,l=a.length;c<l;)r[i++]=a[c++];else n||(r[i++]=a)}return r}var ie=w((function(t,e){var n=(e=re(e,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=e[n];t[r]=ee(t[r],t)}return t})),oe=w((function(t,e,n){return setTimeout((function(){return t.apply(null,n)}),e)})),ue=te(oe,rt,1);function ae(t){return function(){return!t.apply(this,arguments)}}function ce(t,e){var n;return function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}}var le=te(ce,2);function se(t,e,n){e=Pt(e,n);for(var r,i=et(t),o=0,u=i.length;o<u;o++)if(e(t[r=i[o]],r,t))return r}function fe(t){return function(e,n,r){n=Pt(n,r);for(var i=Q(e),o=t>0?0:i-1;o>=0&&o<i;o+=t)if(n(e[o],o,e))return o;return-1}}var he=fe(1),pe=fe(-1);function de(t,e,n,r){for(var i=(n=Pt(n,r,1))(e),o=0,u=Q(t);o<u;){var a=Math.floor((o+u)/2);n(t[a])<i?o=a+1:u=a}return o}function ve(t,e,n){return function(r,i,o){var u=0,c=Q(r);if("number"==typeof o)t>0?u=o>=0?o:Math.max(o+c,u):c=o>=0?Math.min(o+1,c):o+c+1;else if(n&&o&&c)return r[o=n(r,i)]===i?o:-1;if(i!=i)return(o=e(a.call(r,u,c),q))>=0?o+u:-1;for(o=t>0?u:c-1;o>=0&&o<c;o+=t)if(r[o]===i)return o;return-1}}var _e=ve(1,he,de),ye=ve(-1,pe);function ge(t,e,n){var r=(ne(t)?he:se)(t,e,n);if(void 0!==r&&-1!==r)return t[r]}function me(t,e,n){var r,i;if(e=Bt(e,n),ne(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var o=et(t);for(r=0,i=o.length;r<i;r++)e(t[o[r]],o[r],t)}return t}function be(t,e,n){e=Pt(e,n);for(var r=!ne(t)&&et(t),i=(r||t).length,o=Array(i),u=0;u<i;u++){var a=r?r[u]:u;o[u]=e(t[a],a,t)}return o}function we(t){var e=function(e,n,r,i){var o=!ne(e)&&et(e),u=(o||e).length,a=t>0?0:u-1;for(i||(r=e[o?o[a]:a],a+=t);a>=0&&a<u;a+=t){var c=o?o[a]:a;r=n(r,e[c],c,e)}return r};return function(t,n,r,i){var o=arguments.length>=3;return e(t,Bt(n,i,4),r,o)}}var xe=we(1),je=we(-1);function Ee(t,e,n){var r=[];return e=Pt(e,n),me(t,(function(t,n,i){e(t,n,i)&&r.push(t)})),r}function Se(t,e,n){e=Pt(e,n);for(var r=!ne(t)&&et(t),i=(r||t).length,o=0;o<i;o++){var u=r?r[o]:o;if(!e(t[u],u,t))return!1}return!0}function Oe(t,e,n){e=Pt(e,n);for(var r=!ne(t)&&et(t),i=(r||t).length,o=0;o<i;o++){var u=r?r[o]:o;if(e(t[u],u,t))return!0}return!1}function ke(t,e,n,r){return ne(t)||(t=mt(t)),("number"!=typeof n||r)&&(n=0),_e(t,e,n)>=0}var Me=w((function(t,e,n){var r,i;return B(e)?i=e:(e=At(e),r=e.slice(0,-1),e=e[e.length-1]),be(t,(function(t){var o=i;if(!o){if(r&&r.length&&(t=Rt(t,r)),null==t)return;o=t[e]}return null==o?o:o.apply(t,n)}))}));function Ae(t,e){return be(t,Xt(e))}function Re(t,e,n){var r,i,o=-1/0,u=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof t[0]&&null!=t)for(var a=0,c=(t=ne(t)?t:mt(t)).length;a<c;a++)null!=(r=t[a])&&r>o&&(o=r);else e=Pt(e,n),me(t,(function(t,n,r){((i=e(t,n,r))>u||i===-1/0&&o===-1/0)&&(o=t,u=i)}));return o}function Ne(t,e,n){if(null==e||n)return ne(t)||(t=mt(t)),t[Dt(t.length-1)];var r=ne(t)?kt(t):mt(t),i=Q(r);e=Math.max(Math.min(e,i),0);for(var o=i-1,u=0;u<e;u++){var a=Dt(u,o),c=r[u];r[u]=r[a],r[a]=c}return r.slice(0,e)}function Ie(t,e){return function(n,r,i){var o=e?[[],[]]:{};return r=Pt(r,i),me(n,(function(e,i){var u=r(e,i,n);t(o,e,u)})),o}}var Te=Ie((function(t,e,n){z(t,n)?t[n].push(e):t[n]=[e]})),Xe=Ie((function(t,e,n){t[n]=e})),Be=Ie((function(t,e,n){z(t,n)?t[n]++:t[n]=1})),Le=Ie((function(t,e,n){t[n?0:1].push(e)}),!0),Ye=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Pe(t,e,n){return e in n}var We=w((function(t,e){var n={},r=e[0];if(null==t)return n;B(r)?(e.length>1&&(r=Bt(r,e[1])),e=at(t)):(r=Pe,e=re(e,!1,!1),t=Object(t));for(var i=0,o=e.length;i<o;i++){var u=e[i],a=t[u];r(a,u,t)&&(n[u]=a)}return n})),De=w((function(t,e){var n,r=e[0];return B(r)?(r=ae(r),e.length>1&&(n=e[1])):(e=be(re(e,!1,!1),String),r=function(t,n){return!ke(e,n)}),We(t,r,n)}));function Ve(t,e,n){return a.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))}function ze(t,e,n){return null==t||t.length<1?null==e||n?void 0:[]:null==e||n?t[0]:Ve(t,t.length-e)}function Ce(t,e,n){return a.call(t,null==e||n?1:e)}var Fe=w((function(t,e){return e=re(e,!0,!0),Ee(t,(function(t){return!ke(e,t)}))})),qe=w((function(t,e){return Fe(t,e)}));function Ke(t,e,n,r){E(e)||(r=n,n=e,e=!1),null!=n&&(n=Pt(n,r));for(var i=[],o=[],u=0,a=Q(t);u<a;u++){var c=t[u],l=n?n(c,u,t):c;e&&!n?(u&&o===l||i.push(c),o=l):n?ke(o,l)||(o.push(l),i.push(c)):ke(i,c)||i.push(c)}return i}var Ue=w((function(t){return Ke(re(t,!0,!0))}));function He(t){for(var e=t&&Re(t,Q).length||0,n=Array(e),r=0;r<e;r++)n[r]=Ae(t,r);return n}var $e=w(He);function Je(t,e){return t._chain?rt(e).chain():e}function Ze(t){return me(wt(t),(function(e){var n=rt[e]=t[e];rt.prototype[e]=function(){var t=[this._wrapped];return u.apply(t,arguments),Je(this,n.apply(rt,t))}})),rt}me(["pop","push","reverse","shift","sort","splice","unshift"],(function(t){var e=r[t];rt.prototype[t]=function(){var n=this._wrapped;return null!=n&&(e.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0]),Je(this,n)}})),me(["concat","join","slice"],(function(t){var e=r[t];rt.prototype[t]=function(){var t=this._wrapped;return null!=t&&(t=e.apply(t,arguments)),Je(this,t)}}));var Ge=Ze({__proto__:null,VERSION:t,restArguments:w,isObject:x,isNull:function(t){return null===t},isUndefined:j,isBoolean:E,isElement:function(t){return!(!t||1!==t.nodeType)},isString:O,isNumber:k,isDate:M,isRegExp:A,isError:R,isSymbol:N,isArrayBuffer:I,isDataView:D,isArray:V,isFunction:B,isArguments:F,isFinite:function(t){return!N(t)&&y(t)&&!isNaN(parseFloat(t))},isNaN:q,isTypedArray:G,isEmpty:function(t){if(null==t)return!0;var e=Q(t);return"number"==typeof e&&(V(t)||O(t)||F(t))?0===e:0===Q(et(t))},isMatch:nt,isEqual:function(t,e){return ut(t,e)},isMap:vt,isWeakMap:_t,isSet:yt,isWeakSet:gt,keys:et,allKeys:at,values:mt,pairs:function(t){for(var e=et(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},invert:bt,functions:wt,methods:wt,extend:jt,extendOwn:Et,assign:Et,defaults:St,create:function(t,e){var n=Ot(t);return e&&Et(n,e),n},clone:kt,tap:function(t,e){return e(t),t},get:Nt,has:function(t,e){for(var n=(e=At(e)).length,r=0;r<n;r++){var i=e[r];if(!z(t,i))return!1;t=t[i]}return!!n},mapObject:function(t,e,n){e=Pt(e,n);for(var r=et(t),i=r.length,o={},u=0;u<i;u++){var a=r[u];o[a]=e(t[a],a,t)}return o},identity:It,constant:K,noop:Wt,toPath:Mt,property:Xt,propertyOf:function(t){return null==t?Wt:function(e){return Nt(t,e)}},matcher:Tt,matches:Tt,times:function(t,e,n){var r=Array(Math.max(0,t));e=Bt(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},random:Dt,now:Vt,escape:Ft,unescape:qt,templateSettings:Kt,template:function(t,e,n){!e&&n&&(e=n),e=St({},e,rt.templateSettings);var r=RegExp([(e.escape||Ut).source,(e.interpolate||Ut).source,(e.evaluate||Ut).source].join("|")+"|$","g"),i=0,o="__p+='";t.replace(r,(function(e,n,r,u,a){return o+=t.slice(i,a).replace($t,Jt),i=a+e.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),e})),o+="';\n";var u,a=e.variable;if(a){if(!Zt.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{u=new Function(a,"_",o)}catch(t){throw t.source=o,t}var c=function(t){return u.call(this,t,rt)};return c.source="function("+a+"){\n"+o+"}",c},result:function(t,e,n){var r=(e=At(e)).length;if(!r)return B(n)?n.call(t):n;for(var i=0;i<r;i++){var o=null==t?void 0:t[e[i]];void 0===o&&(o=n,i=r),t=B(o)?o.call(t):o}return t},uniqueId:function(t){var e=++Gt+"";return t?t+e:e},chain:function(t){var e=rt(t);return e._chain=!0,e},iteratee:Yt,partial:te,bind:ee,bindAll:ie,memoize:function(t,e){var n=function(r){var i=n.cache,o=""+(e?e.apply(this,arguments):r);return z(i,o)||(i[o]=t.apply(this,arguments)),i[o]};return n.cache={},n},delay:oe,defer:ue,throttle:function(t,e,n){var r,i,o,u,a=0;n||(n={});var c=function(){a=!1===n.leading?0:Vt(),r=null,u=t.apply(i,o),r||(i=o=null)},l=function(){var l=Vt();a||!1!==n.leading||(a=l);var s=e-(l-a);return i=this,o=arguments,s<=0||s>e?(r&&(clearTimeout(r),r=null),a=l,u=t.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(c,s)),u};return l.cancel=function(){clearTimeout(r),a=0,r=i=o=null},l},debounce:function(t,e,n){var r,i,o,u,a,c=function(){var l=Vt()-i;e>l?r=setTimeout(c,e-l):(r=null,n||(u=t.apply(a,o)),r||(o=a=null))},l=w((function(l){return a=this,o=l,i=Vt(),r||(r=setTimeout(c,e),n&&(u=t.apply(a,o))),u}));return l.cancel=function(){clearTimeout(r),r=o=a=null},l},wrap:function(t,e){return te(e,t)},negate:ae,compose:function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},after:function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},before:ce,once:le,findKey:se,findIndex:he,findLastIndex:pe,sortedIndex:de,indexOf:_e,lastIndexOf:ye,find:ge,detect:ge,findWhere:function(t,e){return ge(t,Tt(e))},each:me,forEach:me,map:be,collect:be,reduce:xe,foldl:xe,inject:xe,reduceRight:je,foldr:je,filter:Ee,select:Ee,reject:function(t,e,n){return Ee(t,ae(Pt(e)),n)},every:Se,all:Se,some:Oe,any:Oe,contains:ke,includes:ke,include:ke,invoke:Me,pluck:Ae,where:function(t,e){return Ee(t,Tt(e))},max:Re,min:function(t,e,n){var r,i,o=1/0,u=1/0;if(null==e||"number"==typeof e&&"object"!=typeof t[0]&&null!=t)for(var a=0,c=(t=ne(t)?t:mt(t)).length;a<c;a++)null!=(r=t[a])&&r<o&&(o=r);else e=Pt(e,n),me(t,(function(t,n,r){((i=e(t,n,r))<u||i===1/0&&o===1/0)&&(o=t,u=i)}));return o},shuffle:function(t){return Ne(t,1/0)},sample:Ne,sortBy:function(t,e,n){var r=0;return e=Pt(e,n),Ae(be(t,(function(t,n,i){return{value:t,index:r++,criteria:e(t,n,i)}})).sort((function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index})),"value")},groupBy:Te,indexBy:Xe,countBy:Be,partition:Le,toArray:function(t){return t?V(t)?a.call(t):O(t)?t.match(Ye):ne(t)?be(t,It):mt(t):[]},size:function(t){return null==t?0:ne(t)?t.length:et(t).length},pick:We,omit:De,first:ze,head:ze,take:ze,initial:Ve,last:function(t,e,n){return null==t||t.length<1?null==e||n?void 0:[]:null==e||n?t[t.length-1]:Ce(t,Math.max(0,t.length-e))},rest:Ce,tail:Ce,drop:Ce,compact:function(t){return Ee(t,Boolean)},flatten:function(t,e){return re(t,e,!1)},without:qe,uniq:Ke,unique:Ke,union:Ue,intersection:function(t){for(var e=[],n=arguments.length,r=0,i=Q(t);r<i;r++){var o=t[r];if(!ke(e,o)){var u;for(u=1;u<n&&ke(arguments[u],o);u++);u===n&&e.push(o)}}return e},difference:Fe,unzip:He,transpose:He,zip:$e,object:function(t,e){for(var n={},r=0,i=Q(t);r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},range:function(t,e,n){null==e&&(e=t||0,t=0),n||(n=e<t?-1:1);for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),o=0;o<r;o++,t+=n)i[o]=t;return i},chunk:function(t,e){if(null==e||e<1)return[];for(var n=[],r=0,i=t.length;r<i;)n.push(a.call(t,r,r+=e));return n},mixin:Ze,default:rt});return Ge._=Ge,Ge}()}}]);