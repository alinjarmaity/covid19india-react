(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14],{123:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},148:function(e,a,t){},249:function(e,a,t){"use strict";t.r(a);var n=t(78),i=(t(148),function(){window.location.replace("https://blog.covid19india.org")}),r=t(96),o=t(123),l=t(0),c=t.n(l),s=t(213),u=t(214),d=t(215),m=t(216),p=t(217),b=t(255),h=t(37),v=t(81),g=t(212),f=t(247);function E(e){var a=this,t=e.pages,n=e.setExpand,i=e.darkMode,r=e.windowSize,o=Object(l.useRef)(null),s=Object(b.a)().t,u=Object(l.useCallback)((function(){r.width>768&&n(!1)}),[n,r.width]);return c.a.createElement("div",{className:"expand",ref:o,onMouseLeave:u},t.map((function(e,t){return!0===e.showInNavbar?c.a.createElement(h.b,{to:e.pageLink,key:t,onClick:n.bind(a,!1)},c.a.createElement("span",k(e.pageLink,e.animationDelayForNavbar),s(e.displayName))):null})),r.width<768&&c.a.createElement(j,{darkMode:i}),c.a.createElement("div",{className:"expand-bottom"},c.a.createElement("h5",null,s("A crowdsourced initiative."))))}var w=function(e){var a,t=e.pages,i=e.darkMode,m=e.showLanguageSwitcher,p=e.setShowLanguageSwitcher,w=Object(b.a)(),k=w.i18n,O=w.t,N=Object.keys(o).includes(null===k||void 0===k?void 0:k.language)?null===k||void 0===k?void 0:k.language:null===k||void 0===k||null===(a=k.options)||void 0===a?void 0:a.fallbackLng[0],S=Object(l.useState)(!1),x=Object(n.a)(S,2),L=x[0],z=x[1];Object(g.a)(L);var I=Object(f.a)(),M=Object(v.c)((function(){return{opacity:0}})),C=Object(n.a)(M,3),A=C[0],B=C[1],J=C[2];B({opacity:1}),J();var P=Object(v.f)(L,null,{from:I.width<769?r.d:r.c,enter:I.width<769?r.f:r.e,leave:I.width<769?r.d:r.c,config:{mass:1,tension:210,friction:26}}),F=Object(l.useCallback)((function(){I.width>769&&z(!0)}),[I.width]);return c.a.createElement(v.a.div,{className:"Navbar",style:A},c.a.createElement("div",{className:"navbar-left",onClick:p.bind(this,!m)},o[N]),c.a.createElement("div",{className:"navbar-middle"},c.a.createElement(h.b,{to:"/",onClick:z.bind(this,!1)},"Covid19",c.a.createElement("span",null,"India"))),c.a.createElement("div",{className:"navbar-right",onClick:z.bind(this,!L),onMouseEnter:F},I.width<769&&c.a.createElement("span",null,O(L?"Close":"Menu")),I.width>769&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,c.a.createElement(h.b,{to:"/"},c.a.createElement(s.a,y("/")))),c.a.createElement("span",null,c.a.createElement(h.b,{to:"/blog"},c.a.createElement(u.a,y("/blog")))),c.a.createElement("span",null,c.a.createElement(h.b,{to:"/about"},c.a.createElement(d.a,y("/about")))),c.a.createElement("span",null,I.width>768&&c.a.createElement(j,{darkMode:i})))),P.map((function(e){var a=e.item,n=e.key,r=e.props;return a?c.a.createElement(v.a.div,{key:n,style:r},c.a.createElement(E,{pages:t,setExpand:z,darkMode:i,windowSize:I})):c.a.createElement(v.a.div,{key:n,style:r})})))},k=function(e,a){return{className:"".concat(window.location.pathname===e?"focused":"")}},y=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},j=function(e){var a=e.darkMode;return c.a.createElement("div",{className:"SunMoon",onClick:a.toggle},c.a.createElement("div",null,a.value?c.a.createElement(m.a,{color:"#ffc107"}):c.a.createElement(p.a,null)))},O=t(5),N=t(156),S=Object(l.lazy)((function(){return Promise.all([t.e(3),t.e(4),t.e(16)]).then(t.bind(null,246))})),x=Object(l.lazy)((function(){return Promise.all([t.e(3),t.e(25)]).then(t.bind(null,219))})),L=Object(l.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4),t.e(10)]).then(t.bind(null,241))})),z=Object(l.lazy)((function(){return t.e(20).then(t.bind(null,254))}));a.default=function(){var e=Object(N.a)(!1),a=Object(l.useState)(!1),t=Object(n.a)(a,2),r=t[0],o=t[1],s=Object(O.h)(),u=[{pageLink:"/",view:S,displayName:"Home",showInNavbar:!0},{pageLink:"/blog",view:i,displayName:"Blog",showInNavbar:!0},{pageLink:"/about",view:x,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:L,displayName:"State",showInNavbar:!1}];return c.a.createElement("div",{className:"App"},c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(z,{showLanguageSwitcher:r,setShowLanguageSwitcher:o})),c.a.createElement(w,Object.assign({pages:u},{darkMode:e},{showLanguageSwitcher:r,setShowLanguageSwitcher:o})),c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(O.d,{location:s},u.map((function(e,a){return c.a.createElement(O.b,{exact:!0,path:e.pageLink,render:function(a){a.match;return c.a.createElement(e.view,null)},key:a})})),c.a.createElement(O.a,{to:"/"}))))}},96:function(e,a,t){"use strict";t.d(a,"c",(function(){return n})),t.d(a,"e",(function(){return i})),t.d(a,"d",(function(){return r})),t.d(a,"f",(function(){return o})),t.d(a,"i",(function(){return l})),t.d(a,"j",(function(){return c})),t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return u})),t.d(a,"g",(function(){return d})),t.d(a,"h",(function(){return m}));var n={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},i={position:"absolute",transform:"translate3d(10rem, 0, 0)"},r={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},o={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},l={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},c={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},s={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},u={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},d={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},m={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}}}]);
//# sourceMappingURL=14.048cbd46.chunk.js.map