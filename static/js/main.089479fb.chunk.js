(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(82),c=t.n(i),o=t(9),u=(t(99),t(10)),l=t(2),s=t(3),p=t(4),f=t(93),d=function(n){var e=n.height,t=n.width,r=n.color;return a.a.createElement("svg",{height:e,width:t,x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{enableBackground:"new 0 0 56.966 56.966",margin:"0px 6px 0px 0px"}},a.a.createElement("path",{fill:r,d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\r s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\r c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\r s-17-7.626-17-17S14.61,6,23.984,6z"}))};d.defaultProps={height:"14px",width:"14px",color:"#000000"};var m=d;function b(){var n=Object(l.a)(["\n  min-width: 400px;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n  font-size: 14px;\n  height: 23px;\n  @media (max-width: 400px) {\n    min-width: unset;\n    width: 100%;\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(l.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  padding: 0px 5px 0px 10px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n"]);return x=function(){return n},n}var v=s.a.div(x()),h=s.a.input(b()),g=function(n){var e=n.value,t=Object(f.a)(n,["value"]);return a.a.createElement(v,null,a.a.createElement(m,{color:""===e?"#757575":"#000000"}),a.a.createElement(h,Object.assign({value:e},t)))};g.defaultProps={value:""};var j=g,O=t(90);function E(){var n=Object(l.a)(["\n  background-color: black;\n  width: 2px;\n  height: 100px;\n  margin: 2px;\n  border-radius: 10px;\n  display: inline-block;\n  animation: "," 2s ","s infinite\n    cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation-fill-mode: both;\n"]);return E=function(){return n},n}function y(){var n=Object(l.a)(["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.05)}\n  100% {transform: scaley(1.0)}\n"]);return y=function(){return n},n}function w(){var n=Object(l.a)(["\n  height: 104px;\n"]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 100px;\n"]);return k=function(){return n},n}var S=s.a.div(k()),R=s.a.div(w()),M=Object(s.b)(y()),z=s.a.div(E(),M,function(n){return n.start}),C=function(){var n=Object(r.useState)([.1]),e=Object(p.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)(.2),o=Object(p.a)(c,2),u=o[0],l=o[1];return Object(r.useEffect)(function(){var n=setTimeout(function(){u<=10&&(i([].concat(Object(O.a)(t),[u])),l(u+.1))},1e3);return function(){return clearTimeout(n)}},[u]),a.a.createElement(S,null,a.a.createElement(R,null,t.map(function(n){return a.a.createElement(z,{key:n,start:.1*n})})),a.a.createElement("p",null,"Loading ..."))};function P(){var n=Object(l.a)(["\n  margin: 0px;\n  font-size: 32px;\n  color: black;\n  text-decoration: ",";\n  @media (max-width: 400px) {\n    font-size: 32px;\n  }\n"]);return P=function(){return n},n}function T(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return T=function(){return n},n}function _(){var n=Object(l.a)(["\n  margin: 10px;\n"]);return _=function(){return n},n}function D(){var n=Object(l.a)(["\n  height: 100px;\n  width: 100px;\n  min-width: 100px;\n  border-radius: 100px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return D=function(){return n},n}function L(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0px;\n  ","\n"]);return L=function(){return n},n}var A=s.a.div(L(),function(n){return n.hover?"cursor: pointer":""}),G=s.a.img(D(),function(n){return n.hover?"border-radius: 4px":""},.4,.4,.4,.4),Y=s.a.div(_()),q=s.a.p(T()),B=Object(s.a)(o.b)(P(),function(n){return n.textDecoration}),U=function(n){var e=n.onClick,t=n.id,i=n.image,c=n.title,o=n.publisher,u=Object(r.useState)(!1),l=Object(p.a)(u,2),s=l[0],f=l[1];return a.a.createElement(A,{hover:s,onClick:e,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)}},a.a.createElement(G,{hover:s,src:i,alt:"artwork"}),a.a.createElement(Y,null,a.a.createElement(B,{textDecoration:s?"underline":"none",to:"/podcast/".concat(t,"/")},c),a.a.createElement(q,{id:"publisher"},"".concat(o))))};U.defaultProps={onClick:function(){},id:null,image:null,title:null,publisher:null};var I=U,H=Object(r.createContext)(),J=function(n){var e=n.reducer,t=n.initialState,i=n.children;return a.a.createElement(H.Provider,{value:Object(r.useReducer)(e,t)},i)},K=function(){return Object(r.useContext)(H)},Q=function(n){var e=n.key,t=n.url,r=n.dispatch,a=n.options;return r({type:"GET_REQUEST",meta:{key:e}}),function(n,e){return fetch(n,e).then(function(n){return n.json()})}(t,a).then(function(n){return r({type:"GET_PAYLOAD",payload:n,meta:{key:e}}),n}).catch(function(n){return r({type:"GET_ERROR",error:n,meta:{key:e}}),n})},W="https://listen-api.listennotes.com/api/v2",X={headers:{"X-ListenAPI-Key":"e9c25682454544cba44d336d2a9ce32e"}},$=function(n,e){return Q({key:"podcasts",url:"".concat(W,"/search?type=podcast&q=").concat(n),dispatch:e,options:X})};function F(){var n=Object(l.a)(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return F=function(){return n},n}var N=s.a.div(F()),V=function(n){var e=n.history,t=n.location,i=Object(r.useState)(!1),c=Object(p.a)(i,2),o=c[0],u=c[1],l=Object(r.useState)(""),s=Object(p.a)(l,2),f=s[0],d=s[1],m=K(),b=Object(p.a)(m,2),x=b[0].podcasts,v=b[1],h=x.loading,g=x.results;return Object(r.useEffect)(function(){if(!o)if(t.search.length>0){var n=decodeURI(t.search.substring(1));$(n,v),d(n)}else x.results.length>0&&function(n){!function(n){var e=n.key;(0,n.dispatch)({type:"RESET",meta:{key:e}})}({key:"podcasts",dispatch:n})}(v);u(!0)}),a.a.createElement(N,null,a.a.createElement(j,{placeholder:"Search for podcasts",value:f,onChange:function(n){d(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&(e.push({search:"".concat(f)}),$(f,v))}}),h?a.a.createElement(C,null):a.a.createElement("div",null,g.map(function(n){var t=n.id,r=n.image,i=n.publisher_original,c=n.title_original;return a.a.createElement(I,{key:t,onClick:function(){return e.push("/podcast/".concat(t,"/"))},id:t,image:r,title:c,publisher:i})})))},Z=t(87);function nn(){var n=Object(l.a)(["\n  color: orange;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  margin: 20px;\n  color: ",";\n  font-family: 'Permanent Marker', cursive;\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n  margin: 20px;\n  color: ",";\n  font-family: 'Permanent Marker', cursive;\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  background: ",";\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n  max-height: 400px;\n  max-width: 900px;\n  position: relative;\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n"]);return an=function(){return n},n}function cn(){var n=Object(l.a)(["\n  margin: 30px 0px 0px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  max-width: 900px;\n  display: ",";\n"]);return cn=function(){return n},n}var on=s.a.div(cn(),function(n){return n.display}),un=s.a.img(an(),function(n){return n.opacity},.3,.3,.3,.3,.3),ln=s.a.div(rn(),function(n){return n.height},function(n){return n.width},function(n){return n.background},.3,.3,.3,.3),sn=s.a.h1(tn(),"yellow"),pn=s.a.p(en(),"yellow"),fn=Object(s.a)(o.b)(nn()),dn=function(){var n=function(n,e){var t=Object(r.useRef)(),a=Object(r.useState)(n),i=Object(p.a)(a,2),c=i[0],o=i[1],u=Object(r.useState)(e),l=Object(p.a)(u,2),s=l[0],f=l[1];return Object(r.useEffect)(function(){var n=t.current,e=new Z.a(function(n){if(Array.isArray(n)&&n.length){var e=n[0];o(e.contentRect.width),f(e.contentRect.height)}});return e.observe(n),function(){return e.unobserve(n)}},[]),[t,c,s]}(500,400),e=Object(p.a)(n,3),t=e[0],i=e[1],c=e[2],o=Object(r.useState)(!1),u=Object(p.a)(o,2),l=u[0],s=u[1],f=Object(r.useState)(!0),d=Object(p.a)(f,2),m=d[0],b=d[1],x=m&&t&&t.current;return a.a.createElement(on,{display:m?"flex":"none"},a.a.createElement(un,{ref:t,src:"https://www.dropbox.com/s/7esgfxcm5qbksxh/dan_carlin_yearbook.jpeg?dl=1",onError:function(){return b(!1)},opacity:x?1:0}),x&&a.a.createElement(ln,{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},background:l?"rgba(0.5, 0.5, 0.5, 0.2)":"transparent",height:c,width:i},a.a.createElement(sn,null,"Dan Carlin"),a.a.createElement(pn,null,"Dan is a master storyteller and uses his craft to navigate difficult and often contriversial subject in history and present time. Check out his podcasts",a.a.createElement("span",null," "),a.a.createElement(fn,{to:"/podcast/658b13f1769449f89b937754c17feee4/"},"Hardcore History")," and ",a.a.createElement(fn,{to:"/podcast/ffb64d537bb14563a648de7772d47334/"},"Common Sense"),a.a.createElement("span",null," "),"and be ready to be transfered to his epic scenes.")))};function mn(){var n=Object(l.a)(["\n  font-family: 'Permanent Marker', cursive;\n  font-size: 72px;\n  margin: 0px 0px 20px 0px;\n  @media (max-width: 400px) {\n    font-size: 48px;\n    margin: 0px 0px 10px 0px;\n  }\n"]);return mn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return bn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return xn=function(){return n},n}var vn=s.a.div(xn()),hn=s.a.div(bn()),gn=s.a.h1(mn()),jn=function(n){return a.a.createElement(vn,null,a.a.createElement(hn,null,a.a.createElement(dn,null),a.a.createElement(gn,null,"raconteur")),a.a.createElement(V,n))},On=t(88),En=t.n(On),yn=t(89);function wn(){var n=Object(l.a)(["\n  font-family: 'Permanent Marker', cursive;\n  text-decoration: none;\n  color: black;\n  font-size: 36px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return wn=function(){return n},n}function kn(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  list-style-type: none;\n  display: flex;\n  padding: 0px;\n  margin-top: 10px 0px;\n  @media (max-width: 400px) {\n    justify-content: center;\n  }\n"]);return Sn=function(){return n},n}function Rn(){var n=Object(l.a)([""]);return Rn=function(){return n},n}var Mn=s.a.div(Rn()),zn=s.a.ul(Sn()),Cn=s.a.li(kn()),Pn=Object(s.a)(o.b)(wn()),Tn=function(){return a.a.createElement(Mn,null,a.a.createElement(zn,null,a.a.createElement(Cn,null,a.a.createElement(Pn,{to:"/"},"raconteur"))))};function _n(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return _n=function(){return n},n}function Dn(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return Dn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  margin: 20px;\n"]);return Ln=function(){return n},n}function An(){var n=Object(l.a)(["\n  height: 150px;\n  width: 150px;\n  min-width: 150px;\n  border-radius: 150px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return An=function(){return n},n}function Gn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]);return Gn=function(){return n},n}var Yn=s.a.div(Gn()),qn=s.a.img(An(),function(n){return n.hover?"border-radius: 1px":""},.4,.4,.4,.4),Bn=s.a.div(Ln()),Un=s.a.h1(Dn()),In=s.a.p(_n()),Hn=function(n){var e=n.image,t=n.title,i=n.publisher,c=Object(r.useState)(!1),o=Object(p.a)(c,2),u=o[0],l=o[1];return a.a.createElement(Yn,{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},a.a.createElement(qn,{hover:u,src:e,alt:"artwork"}),a.a.createElement(Bn,null,a.a.createElement(Un,null,t),a.a.createElement(In,{id:"publisher"},"".concat(i))))};Hn.defaultProps={image:null,title:null,publisher:null};var Jn=Hn;function Kn(){var n=Object(l.a)(["\n  &:focus {\n    outline: none;\n  }\n  @media (max-width: 400px) {\n    width: 100%;\n  }\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(l.a)(["\n  font-size: 12px;\n  margin: 5px 0px 10px 0px;\n"]);return Qn=function(){return n},n}function Wn(){var n=Object(l.a)(["\n  margin-bottom: 0px;\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  border-bottom: 3px solid black;\n  padding: 5px 0px;\n"]);return Xn=function(){return n},n}function $n(){var n=Object(l.a)(["\n  margin: 0px 40px;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return $n=function(){return n},n}function Fn(){var n=Object(l.a)(["\n  display: flex;\n"]);return Fn=function(){return n},n}var Nn=s.a.div(Fn()),Vn=s.a.div($n()),Zn=s.a.h2(Xn()),ne=s.a.h3(Wn()),ee=s.a.p(Qn()),te=s.a.audio(Kn()),re=function(n){var e=n.match,t=Object(r.useState)(!1),i=Object(p.a)(t,2),c=i[0],o=i[1],u=e.params.id,l=K(),s=Object(p.a)(l,2),f=s[0],d=s[1],m=f.podcast,b=m.description,x=m.episodes,v=m.image,h=m.loading,g=m.publisher,j=m.title;return Object(r.useEffect)(function(){c||function(n,e){Q({key:"podcast",url:"".concat(W,"/podcasts/").concat(n),dispatch:e,options:X})}(u,d),o(!0)}),h?a.a.createElement(C,null):a.a.createElement(Nn,null,a.a.createElement(Vn,null,a.a.createElement(Tn,null),a.a.createElement(Jn,{image:v,title:j,publisher:g}),a.a.createElement("p",null,b),a.a.createElement(Zn,null,"Episodes"),a.a.createElement("div",null,x&&x.map(function(n){return a.a.createElement("div",{key:n.id},a.a.createElement(ne,null,n.title),a.a.createElement(ee,null,"".concat((e=n.pub_date_ms,Object(yn.format)(new Date(e),"D MMM YYYY").toUpperCase()))),a.a.createElement(te,{controls:!0,src:n.audio,preload:"none"}),n.title!==n.description?a.a.createElement("p",null,En()(n.description)):null);var e}))))},ae=t(15),ie=t(11),ce={feed:{loading:!1,error:null,stage:""},podcasts:{loading:!1,results:[],error:null,stage:""},podcast:{loading:!1,error:null,stage:""}},oe=function(n,e){switch(e.type){case"GET_REQUEST":var t=e.meta.key;if(t){var r=n[t];if(r)return Object(ie.a)({},n,Object(ae.a)({},t,Object(ie.a)({},r,{loading:!0,stage:"Requesting data"})))}return n;case"GET_PAYLOAD":var a=e.meta.key;if(a){var i=n[a];if(i)return Object(ie.a)({},n,Object(ae.a)({},a,Object(ie.a)({},i,e.payload,{loading:!1,stage:"Data fetched"})))}return n;case"GET_ERROR":var c=e.meta.key,o=n[c];return Object(ie.a)({},n,Object(ae.a)({},c,Object(ie.a)({},o,e.error,{loading:!1,stage:"Request failed"})));case"RESET":var u=e.meta.key;return Object(ie.a)({},n,Object(ae.a)({},u,ce[u]));default:return n}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(o.a,{basename:""},a.a.createElement(function(){return a.a.createElement(J,{initialState:ce,reducer:oe},a.a.createElement("div",null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:jn}),a.a.createElement(u.a,{path:"/podcast/:id/",component:re}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},94:function(n,e,t){n.exports=t(218)},99:function(n,e,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.089479fb.chunk.js.map