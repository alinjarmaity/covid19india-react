(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[21,26],{203:function(e,t,r){"use strict";r.r(t);var n=r(24),i=r(78),a=r(23),o=r(0),c=r.n(o),l=r(90),u=function(e){var t=e.width,r=e.statistic,n=window.innerWidth;t||(t=n>769?480:n);var i=(n>769?.9:1)*t/.885,o=42+a.g+i;return c.a.createElement(l.a,{viewBox:"0 0 ".concat(t," ").concat(o),height:o,width:t,speed:2,backgroundColor:a.b[r]},c.a.createElement("circle",{cx:.4*t,cy:o/2,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:o/2,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:o/2,r:"5"}))},s=r(31),f=r(88),d=r(79),p=r.n(d),h=r(82),m=r.n(h),y=r(89),b=r(255),v=r(5),O=r(81),g=r(247),E=Object(o.lazy)((function(){return Promise.all([r.e(1),r.e(8),r.e(27)]).then(r.bind(null,257))}));t.default=c.a.memo((function(e){var t,r=this,l=e.stateCode,d=void 0===l?"TT":l,h=e.data,m=e.regionHighlighted,j=e.setRegionHighlighted,C=e.anchor,P=(e.setAnchor,e.mapStatistic),w=e.setMapStatistic,k=Object(b.a)().t,x=Object(o.useRef)(),S=Object(g.a)().width,T=Object(o.useState)(a.j.DISTRICTS),N=Object(i.a)(T,2),R=N[0],A=N[1],I=Object(o.useState)(a.h[d].mapType===a.i.COUNTRY?a.k.BUBBLES:a.k.CHOROPLETH),U=Object(i.a)(I,2),B=U[0],D=U[1],M=a.h[d],H=M.mapType===a.i.COUNTRY?h:Object(n.a)({},d,h[d]),L=Object(o.useMemo)((function(){var e,t,r=(m.districtName?null===(e=h[m.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[m.districtName]:h[m.stateCode])||{};return Object(y.a)(r,(function(e){e.name=m.districtName||a.p[m.stateCode]}))}),[h,m.stateCode,m.districtName]),_=function(e){switch(e){case a.k.CHOROPLETH:return D(a.k.CHOROPLETH),void(M.mapType===a.i.COUNTRY&&j({stateCode:m.stateCode,districtName:null}));case a.k.BUBBLES:return void D(a.k.BUBBLES);default:return}},z=Object(o.useMemo)((function(){return c.a.createElement("svg",{width:"314",height:"314",viewBox:"0 0 314 314",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M78.2861 145.778C80.6671 155.387 84.6108 164.28 92.421 170.488C94.5409 174.766 93.7381 180.115 96.2412 184.535C99.7619 190.751 102.898 195.156 110.758 195.156C119.259 195.156 127.582 192.241 132.576 184.963C136.539 179.187 143.562 174.194 150.658 178.968C156.039 182.587 157.864 191.253 161.949 196.312C168.044 203.859 175.962 212.131 184.107 217.339C190.795 221.615 199.602 221.297 207.368 220.551C214.111 219.903 220.088 212.137 223.71 207.189C227.102 202.555 230.602 198.075 233.006 192.843C238.463 180.961 236.721 162.008 225.62 153.958C213.23 144.974 196.881 145.725 183.343 139.654C175.796 136.27 175.843 122.587 174.174 115.758C172.492 108.876 170.655 99.867 164.581 95.3733C155.36 88.5509 146.436 93.7458 137.075 96.444C133.325 97.525 131.816 100.817 129.095 103.424L129.093 103.426C126.105 106.29 121.531 110.674 117.974 112.632C113.709 114.979 111.262 119.456 105.834 119.612C104.487 119.651 98.6801 120.375 97.7693 119.227C94.2704 114.814 92.1979 113.445 86.6906 113.445C83.0636 113.445 77.14 118.241 77.14 122.31C77.14 130.086 76.4094 138.205 78.2861 145.778Z",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"}))}),[]),F=Object(o.useMemo)((function(){return c.a.createElement("svg",{width:"22",height:"27",viewBox:"-1 -5 22 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5.5",fillOpacity:"0.4"}),c.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5",strokeOpacity:"0.5"}),c.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3.5",fillOpacity:"0.4"}),c.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3",strokeOpacity:"0.5"}),c.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6.5",fillOpacity:"0.4"}),c.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6",strokeOpacity:"0.5"}))}),[]),W=Object(v.g)(),K=Object(o.useRef)();Object(o.useEffect)((function(){"#MapExplorer"===W.location.hash&&K.current.scrollIntoView()}),[W]);var Y=Object(o.useMemo)((function(){var e=[];return[0,0,0,0,0,0,0].map((function(t,r){return e.push({animationDelay:"".concat(250*r,"ms")}),null})),e}),[]),J=Object(O.c)({total:Object(s.j)(L,"total",P),config:{tension:250,clamp:!0}});return c.a.createElement("div",{className:p()("MapExplorer",{stickied:"mapexplorer"===C},{hidden:C&&"mapexplorer"!==C})},c.a.createElement("div",{className:"panel",ref:K},c.a.createElement("div",{className:"panel-left fadeInUp",style:Y[0]},c.a.createElement("h2",{className:p()(P)},k(L.name),L.name===a.v&&" [".concat(k(a.p[m.stateCode]),"]")),m.stateCode&&c.a.createElement("h1",{className:p()("district",P)},c.a.createElement(O.a.div,null,J.total.interpolate((function(e){return Object(s.f)(Math.floor(e))}))),c.a.createElement("span",null,k(Object(s.a)(P))))),c.a.createElement("div",{className:p()("panel-right","is-".concat(P))},c.a.createElement("div",{className:"switch-type"},c.a.createElement("div",{className:p()("choropleth fadeInUp",{"is-highlighted":B===a.k.CHOROPLETH}),onClick:_.bind(this,a.k.CHOROPLETH),style:Y[1]},z),c.a.createElement("div",{className:p()("bubble fadeInUp",{"is-highlighted":B===a.k.BUBBLES}),onClick:_.bind(this,a.k.BUBBLES),style:Y[2]},F),M.mapType===a.i.COUNTRY&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:p()("boundary fadeInUp",{"is-highlighted":R===a.j.DISTRICTS}),onClick:A.bind(this,R===a.j.DISTRICTS?a.j.STATES:a.j.DISTRICTS),style:Y[3]},c.a.createElement(f.j,null))),M.mapType===a.i.STATE&&c.a.createElement("div",{className:"back fadeInUp",onClick:function(){W.push("/#MapExplorer")},style:Y[4]},c.a.createElement(f.b,null))),S<769&&c.a.createElement("div",{className:"switch-statistic fadeInUp",style:Y[5]},a.m.map((function(e){return c.a.createElement("div",{key:e,className:p()("statistic-option","is-".concat(e),{"is-highlighted":P===e}),onClick:w.bind(r,e)},c.a.createElement(f.d,null))}))))),c.a.createElement("div",{ref:x,className:"fadeInUp",style:Y[3]},P&&c.a.createElement(o.Suspense,{fallback:c.a.createElement(u,Object.assign({className:"map-loader"},{width:null===(t=x.current)||void 0===t?void 0:t.clientWidth,statistic:P}))},c.a.createElement(E,Object.assign({mapCode:d,mapView:R,mapViz:B},{data:H},{regionHighlighted:m,setRegionHighlighted:j},{statistic:P})))))}),(function(e,t){var r,n,i,a,o,c,l,u,s,f;return!!m()(e.stateCode,t.stateCode)&&(!!m()(e.regionHighlighted,t.regionHighlighted)&&(!!m()(e.mapStatistic,t.mapStatistic)&&(!!m()(e.anchor,t.anchor)&&(!!m()(null===(r=e.data)||void 0===r||null===(n=r.TT)||void 0===n||null===(i=n.meta)||void 0===i?void 0:i.last_updated,null===(a=t.data)||void 0===a||null===(o=a.TT)||void 0===o||null===(c=o.meta)||void 0===c?void 0:c.last_updated)&&!!m()(null===(l=e.data)||void 0===l||null===(u=l.TT)||void 0===u?void 0:u.total,null===(s=t.data)||void 0===s||null===(f=s.TT)||void 0===f?void 0:f.total)))))}))},89:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[K]}function a(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[W]||!!e.constructor[W]||d(e)||p(e))}function o(e,t,r){void 0===r&&(r=!1),0===c(e)?(r?Object.keys:Y)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function c(e){var t=e[K];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:p(e)?3:0}function l(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t){return 2===c(e)?e.get(t):e[t]}function s(e,t,r){var n=c(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return L&&e instanceof Map}function p(e){return _&&e instanceof Set}function h(e){return e.o||e.t}function m(e){if(Array.isArray(e))return e.slice();var t=J(e);delete t[K];for(var r=Y(t),n=0;n<r.length;n++){var i=r[n],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function y(e,t){v(e)||i(e)||!a(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&o(e,(function(e,t){return y(t,!0)}),!0))}function b(){n(2)}function v(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function O(e){var t=V[e];return t||n(19,e),t}function g(){return M}function E(e,t){t&&(O("Patches"),e.u=[],e.s=[],e.v=t)}function j(e){C(e),e.p.forEach(w),e.p=null}function C(e){e===M&&(M=e.l)}function P(e){return M={p:[],l:M,h:e,m:!0,_:0}}function w(e){var t=e[K];0===t.i||1===t.i?t.j():t.g=!0}function k(e,t){t._=t.p.length;var r=t.p[0],i=void 0!==e&&e!==r;return t.h.O||O("ES5").S(t,e,i),i?(r[K].P&&(j(t),n(4)),a(e)&&(e=x(t,e),t.l||T(t,e)),t.u&&O("Patches").M(r[K],e,t.u,t.s)):e=x(t,r,[]),j(t),t.u&&t.v(t.u,t.s),e!==F?e:void 0}function x(e,t,r){if(v(t))return t;var n=t[K];if(!n)return o(t,(function(i,a){return S(e,n,t,i,a,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return T(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=4===n.i||5===n.i?n.o=m(n.k):n.o;o(i,(function(t,a){return S(e,n,i,t,a,r)})),T(e,i,!1),r&&e.u&&O("Patches").R(n,r,e.u,e.s)}return n.o}function S(e,t,r,n,o,c){if(i(o)){var u=x(e,o,c&&t&&3!==t.i&&!l(t.D,n)?c.concat(n):void 0);if(s(r,n,u),!i(u))return;e.m=!1}if(a(o)&&!v(o)){if(!e.h.N&&e._<1)return;x(e,o),t&&t.A.l||T(e,o)}}function T(e,t,r){void 0===r&&(r=!1),e.h.N&&e.m&&y(t,r)}function N(e,t){var r=e[K];return(r?h(r):e)[t]}function R(e){e.P||(e.P=!0,e.l&&R(e.l))}function A(e){e.o||(e.o=m(e.t))}function I(e,t,r){var n=d(t)?O("MapSet").T(t,r):p(t)?O("MapSet").F(t,r):e.O?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:g(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=n,a=$;r&&(i=[n],a=q);var o=Proxy.revocable(i,a),c=o.revoke,l=o.proxy;return n.k=l,n.j=c,l}(t,r):O("ES5").J(t,r);return(r?r.A:g()).p.push(n),n}function U(e){return i(e)||n(22,e),function e(t){if(!a(t))return t;var r,n=t[K],i=c(t);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,r=B(t,i),n.I=!1}else r=B(t,i);return o(r,(function(t,i){n&&u(n.t,t)===i||s(r,t,e(i))})),3===i?new Set(r):r}(e)}function B(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return m(e)}var D,M,H="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),L="undefined"!=typeof Map,_="undefined"!=typeof Set,z="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,F=H?Symbol("immer-nothing"):((D={})["immer-nothing"]=!0,D),W=H?Symbol("immer-draftable"):"__$immer_draftable",K=H?Symbol("immer-state"):"__$immer_state",Y=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),J=Object.getOwnPropertyDescriptors||function(e){var t={};return Y(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},V={},$={get:function(e,t){if(t===K)return e;var r=h(e);if(!l(r,t))return function(e,t,r){if(r in t)for(var n=Object.getPrototypeOf(t);n;){var i,a=Object.getOwnPropertyDescriptor(n,r);if(a)return"value"in a?a.value:null===(i=a.get)||void 0===i?void 0:i.call(e.k);n=Object.getPrototypeOf(n)}}(e,r,t);var n=r[t];return e.I||!a(n)?n:n===N(e.t,t)?(A(e),e.o[t]=I(e.A.h,n,e)):n},has:function(e,t){return t in h(e)},ownKeys:function(e){return Reflect.ownKeys(h(e))},set:function(e,t,r){if(e.D[t]=!0,!e.P){if(f(r,N(h(e),t))&&void 0!==r)return!0;A(e),R(e)}return e.o[t]=r,!0},deleteProperty:function(e,t){return void 0!==N(e.t,t)||t in e.t?(e.D[t]=!1,A(e),R(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=h(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},q={};o($,(function(e,t){q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),q.deleteProperty=function(e,t){return $.deleteProperty.call(this,e[0],t)},q.set=function(e,t,r){return $.set.call(this,e[0],t,r,e[0])};var X=new(function(){function e(e){this.O=z,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,r){if("function"==typeof e&&"function"!=typeof t){var i=t;t=e;var o=this;return function(e){var r=this;void 0===e&&(e=i);for(var n=arguments.length,a=Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];return o.produce(e,(function(e){var n;return(n=t).call.apply(n,[r,e].concat(a))}))}}var c;if("function"!=typeof t&&n(6),void 0!==r&&"function"!=typeof r&&n(7),a(e)){var l=P(this),u=I(this,e,void 0),s=!0;try{c=t(u),s=!1}finally{s?j(l):C(l)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return E(l,r),k(e,l)}),(function(e){throw j(l),e})):(E(l,r),k(c,l))}if(!e||"object"!=typeof e){if((c=t(e))===F)return;return void 0===c&&(c=e),this.N&&y(c,!0),c}n(21,e)},t.produceWithPatches=function(e,t){var r,n,i=this;return"function"==typeof e?function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return i.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(n))}))}:[this.produce(e,t,(function(e,t){r=e,n=t})),r,n]},t.createDraft=function(e){a(e)||n(8),i(e)&&(e=U(e));var t=P(this),r=I(this,e,void 0);return r[K].C=!0,C(t),r},t.finishDraft=function(e,t){var r=(e&&e[K]).A;return E(r,t),k(void 0,r)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!z&&n(20),this.O=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var a=O("Patches").$;return i(e)?a(e,t):this.produce(e,(function(e){return a(e,t.slice(r+1))}))},e}()),G=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseProxies.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);t.a=G},90:function(e,t,r){"use strict";var n=r(0),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var a=function(e){var t=e.animate,r=e.backgroundColor,a=e.backgroundOpacity,o=e.baseUrl,c=e.children,l=e.foregroundColor,u=e.foregroundOpacity,s=e.gradientRatio,f=e.uniqueKey,d=e.interval,p=e.rtl,h=e.speed,m=e.style,y=e.title,b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),v=f||Math.random().toString(36).substring(6),O=v+"-diff",g=v+"-animated-diff",E=v+"-aria",j=p?{transform:"scaleX(-1)"}:null,C="0; "+d+"; 1",P=h+"s";return Object(n.createElement)("svg",i({"aria-labelledby":E,role:"img",style:i(i({},m),j)},b),y?Object(n.createElement)("title",{id:E},y):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+O+")",style:{fill:"url("+o+"#"+g+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:O},c),Object(n.createElement)("linearGradient",{id:g},Object(n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:a},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-s+"; "+-s+"; 1",keyTimes:C,dur:P,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:u},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-s/2+"; "+-s/2+"; "+(1+s/2),keyTimes:C,dur:P,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:a},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+s),keyTimes:C,dur:P,repeatCount:"indefinite"})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var o=function(e){return e.children?Object(n.createElement)(a,i({},e)):Object(n.createElement)(c,i({},e))},c=function(e){return Object(n.createElement)(o,i({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=o}}]);
//# sourceMappingURL=21.015fe001.chunk.js.map