(window.webpackJsonpraconteur=window.webpackJsonpraconteur||[]).push([[0],{216:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(81),i=t.n(o),c=t(10),u=(t(97),t(12)),l=t(2),s=t(3),p=t(4),d=t(91),f=function(n){var e=n.height,t=n.width,r=n.color;return a.a.createElement("svg",{height:e,width:t,x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{enableBackground:"new 0 0 56.966 56.966",margin:"0px 6px 0px 0px"}},a.a.createElement("path",{fill:r,d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\r s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\r c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\r s-17-7.626-17-17S14.61,6,23.984,6z"}))};f.defaultProps={height:"14px",width:"14px",color:"#000000"};var m=f;function b(){var n=Object(l.a)(["\n  min-width: 400px;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n  font-size: 14px;\n  height: 23px;\n  @media (max-width: 400px) {\n    min-width: unset;\n    width: 100%;\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(l.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  padding: 0px 5px 0px 10px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n"]);return x=function(){return n},n}var v=s.a.div(x()),h=s.a.input(b()),O=function(n){var e=n.value,t=Object(d.a)(n,["value"]);return a.a.createElement(v,null,a.a.createElement(m,{color:""===e?"#757575":"#000000"}),a.a.createElement(h,Object.assign({value:e},t)))};O.defaultProps={value:""};var g=O,j=t(11);function E(){var n=Object(l.a)(["\n  background-color: black;\n  width: 2px;\n  height: 100px;\n  margin: 2px;\n  border-radius: 10px;\n  display: inline-block;\n  animation: "," 2s ","s infinite\n    cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation-fill-mode: both;\n"]);return E=function(){return n},n}function y(){var n=Object(l.a)(["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.05)}\n  100% {transform: scaley(1.0)}\n"]);return y=function(){return n},n}function w(){var n=Object(l.a)(["\n  height: 104px;\n"]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 100px;\n"]);return k=function(){return n},n}var _=s.a.div(k()),R=s.a.div(w()),S=Object(s.b)(y()),M=s.a.div(E(),S,function(n){return n.start}),P=function(){var n=Object(r.useState)([.1]),e=Object(p.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(.2),c=Object(p.a)(i,2),u=c[0],l=c[1];return Object(r.useEffect)(function(){var n=setTimeout(function(){u<=10&&(o([].concat(Object(j.a)(t),[u])),l(u+.1))},1e3);return function(){return clearTimeout(n)}},[u]),a.a.createElement(_,null,a.a.createElement(R,null,t.map(function(n){return a.a.createElement(M,{key:n,start:.1*n})})),a.a.createElement("p",null,"Loading ..."))};function T(){var n=Object(l.a)(["\n  margin: 0px;\n  font-size: 32px;\n  color: black;\n  text-decoration: ",";\n  @media (max-width: 400px) {\n    font-size: 32px;\n  }\n"]);return T=function(){return n},n}function D(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return D=function(){return n},n}function z(){var n=Object(l.a)(["\n  margin: 10px;\n"]);return z=function(){return n},n}function C(){var n=Object(l.a)(["\n  height: 100px;\n  width: 100px;\n  min-width: 100px;\n  border-radius: 100px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return C=function(){return n},n}function A(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0px;\n  ","\n"]);return A=function(){return n},n}var G=s.a.div(A(),function(n){return n.hover?"cursor: pointer":""}),L=s.a.img(C(),function(n){return n.hover?"border-radius: 4px":""},.4,.4,.4,.4),Y=s.a.div(z()),U=s.a.p(D()),q=Object(s.a)(c.b)(T(),function(n){return n.textDecoration}),B=function(n){var e=n.onClick,t=n.id,o=n.image,i=n.title,c=n.publisher,u=Object(r.useState)(!1),l=Object(p.a)(u,2),s=l[0],d=l[1];return a.a.createElement(G,{hover:s,onClick:e,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},a.a.createElement(L,{hover:s,src:o,alt:"artwork"}),a.a.createElement(Y,null,a.a.createElement(q,{textDecoration:s?"underline":"none",to:"/podcast/".concat(t,"/")},i),a.a.createElement(U,{id:"publisher"},"".concat(c))))};B.defaultProps={onClick:function(){},id:null,image:null,title:null,publisher:null};var Q=B,I=Object(r.createContext)(),H=function(n){var e=n.reducer,t=n.initialState,o=n.children;return a.a.createElement(I.Provider,{value:Object(r.useReducer)(e,t)},o)},J=function(){return Object(r.useContext)(I)},K=function(n,e){return fetch(n,e).then(function(n){return n.json()})},W=function(n){var e=n.key,t=n.url,r=n.dispatch,a=n.options;return r({type:"GET_REQUEST",meta:{key:e}}),K(t,a).then(function(n){return r({type:"GET_PAYLOAD",payload:n,meta:{key:e}}),n}).catch(function(n){return r({type:"GET_ERROR",error:n,meta:{key:e}}),n})},X="https://listen-api.listennotes.com/api/v2",$={headers:{"X-ListenAPI-Key":"e9c25682454544cba44d336d2a9ce32e"}},F=function(n,e){return W({key:"podcasts",url:"".concat(X,"/search?type=podcast&q=").concat(n),dispatch:e,options:$})},N=function(n,e,t){return function(n){var e=n.attribute,t=n.key,r=n.url,a=n.dispatch,o=n.options;return a({type:"GET_MORE_REQUEST",meta:{key:t}}),K(r,o).then(function(n){return a({type:"GET_MORE_PAYLOAD",payload:n,meta:{key:t,attribute:e}}),n}).catch(function(n){return a({type:"GET_ERROR",error:n,meta:{key:t}}),n})}({attribute:"episodes",key:"podcast",url:"".concat(X,"/podcasts/").concat(n,"?next_episode_pub_date=").concat(e),dispatch:t,options:$})};function V(){var n=Object(l.a)(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return V=function(){return n},n}var Z=s.a.div(V()),nn=function(n){var e=n.history,t=n.location,o=Object(r.useState)(!1),i=Object(p.a)(o,2),c=i[0],u=i[1],l=Object(r.useState)(""),s=Object(p.a)(l,2),d=s[0],f=s[1],m=J(),b=Object(p.a)(m,2),x=b[0].podcasts,v=b[1],h=x.loading,O=x.results;return Object(r.useEffect)(function(){if(!c)if(t.search.length>0){var n=decodeURI(t.search.substring(1));F(n,v),f(n)}else x.results.length>0&&function(n){(function(n){var e=n.key;(0,n.dispatch)({type:"RESET",meta:{key:e}})})({key:"podcasts",dispatch:n})}(v);u(!0)}),a.a.createElement(Z,null,a.a.createElement(g,{placeholder:"Search for podcasts",value:d,onChange:function(n){f(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&(e.push({search:"".concat(d)}),F(d,v))}}),h?a.a.createElement(P,null):a.a.createElement("div",null,O.map(function(n){var t=n.id,r=n.image,o=n.publisher_original,i=n.title_original;return a.a.createElement(Q,{key:t,onClick:function(){return e.push("/podcast/".concat(t,"/"))},id:t,image:r,title:i,publisher:o})})))},en=t(86);function tn(){var n=Object(l.a)(["\n  color: orange;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  margin: 20px;\n  color: ",";\n  font-family: 'Permanent Marker', cursive;\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n  margin: 20px;\n  color: ",";\n  font-family: 'Permanent Marker', cursive;\n"]);return an=function(){return n},n}function on(){var n=Object(l.a)(["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  background: ",";\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return on=function(){return n},n}function cn(){var n=Object(l.a)(["\n  max-height: 400px;\n  max-width: 900px;\n  position: relative;\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n"]);return cn=function(){return n},n}function un(){var n=Object(l.a)(["\n  margin: 30px 0px 0px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  max-width: 900px;\n  display: ",";\n"]);return un=function(){return n},n}var ln=s.a.div(un(),function(n){return n.display}),sn=s.a.img(cn(),function(n){return n.opacity},.3,.3,.3,.3,.3),pn=s.a.div(on(),function(n){return n.height},function(n){return n.width},function(n){return n.background},.3,.3,.3,.3),dn=s.a.h1(an(),"yellow"),fn=s.a.p(rn(),"yellow"),mn=Object(s.a)(c.b)(tn()),bn=function(){var n=function(n,e){var t=Object(r.useRef)(),a=Object(r.useState)(n),o=Object(p.a)(a,2),i=o[0],c=o[1],u=Object(r.useState)(e),l=Object(p.a)(u,2),s=l[0],d=l[1];return Object(r.useEffect)(function(){var n=t.current,e=new en.a(function(n){if(Array.isArray(n)&&n.length){var e=n[0];c(e.contentRect.width),d(e.contentRect.height)}});return e.observe(n),function(){return e.unobserve(n)}},[]),[t,i,s]}(500,400),e=Object(p.a)(n,3),t=e[0],o=e[1],i=e[2],c=Object(r.useState)(!1),u=Object(p.a)(c,2),l=u[0],s=u[1],d=Object(r.useState)(!0),f=Object(p.a)(d,2),m=f[0],b=f[1],x=m&&t&&t.current;return a.a.createElement(ln,{display:m?"flex":"none"},a.a.createElement(sn,{ref:t,src:"https://www.dropbox.com/s/7esgfxcm5qbksxh/dan_carlin_yearbook.jpeg?dl=1",onError:function(){return b(!1)},opacity:x?1:0}),x&&a.a.createElement(pn,{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},background:l?"rgba(0.5, 0.5, 0.5, 0.2)":"transparent",height:i,width:o},a.a.createElement(dn,null,"Dan Carlin"),a.a.createElement(fn,null,"Dan is a master storyteller and uses his craft to navigate difficult and often contriversial subject in history and present time. Check out his podcasts",a.a.createElement("span",null," "),a.a.createElement(mn,{to:"/podcast/658b13f1769449f89b937754c17feee4/"},"Hardcore History")," and ",a.a.createElement(mn,{to:"/podcast/ffb64d537bb14563a648de7772d47334/"},"Common Sense"),a.a.createElement("span",null," "),"and be ready to be transfered to his epic scenes.")))};function xn(){var n=Object(l.a)(["\n  font-family: 'Permanent Marker', cursive;\n  font-size: 72px;\n  margin: 0px 0px 20px 0px;\n  @media (max-width: 400px) {\n    font-size: 48px;\n    margin: 0px 0px 10px 0px;\n  }\n"]);return xn=function(){return n},n}function vn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return vn=function(){return n},n}function hn(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return hn=function(){return n},n}var On=s.a.div(hn()),gn=s.a.div(vn()),jn=s.a.h1(xn()),En=function(n){return a.a.createElement(On,null,a.a.createElement(gn,null,a.a.createElement(bn,null),a.a.createElement(jn,null,"raconteur")),a.a.createElement(nn,n))},yn=t(87),wn=t.n(yn),kn=t(88);function _n(){var n=Object(l.a)(["\n  font-family: 'Permanent Marker', cursive;\n  text-decoration: none;\n  color: black;\n  font-size: 36px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return _n=function(){return n},n}function Rn(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return Rn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  list-style-type: none;\n  display: flex;\n  padding: 0px;\n  margin-top: 10px 0px;\n  @media (max-width: 400px) {\n    justify-content: center;\n  }\n"]);return Sn=function(){return n},n}function Mn(){var n=Object(l.a)([""]);return Mn=function(){return n},n}var Pn=s.a.div(Mn()),Tn=s.a.ul(Sn()),Dn=s.a.li(Rn()),zn=Object(s.a)(c.b)(_n()),Cn=function(){return a.a.createElement(Pn,null,a.a.createElement(Tn,null,a.a.createElement(Dn,null,a.a.createElement(zn,{to:"/"},"raconteur"))))};function An(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return An=function(){return n},n}function Gn(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return Gn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  margin: 20px;\n"]);return Ln=function(){return n},n}function Yn(){var n=Object(l.a)(["\n  height: 150px;\n  width: 150px;\n  min-width: 150px;\n  border-radius: 150px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return Yn=function(){return n},n}function Un(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]);return Un=function(){return n},n}var qn=s.a.div(Un()),Bn=s.a.img(Yn(),function(n){return n.hover?"border-radius: 1px":""},.4,.4,.4,.4),Qn=s.a.div(Ln()),In=s.a.h1(Gn()),Hn=s.a.p(An()),Jn=function(n){var e=n.image,t=n.title,o=n.publisher,i=Object(r.useState)(!1),c=Object(p.a)(i,2),u=c[0],l=c[1];return a.a.createElement(qn,{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},a.a.createElement(Bn,{hover:u,src:e,alt:"artwork"}),a.a.createElement(Qn,null,a.a.createElement(In,null,t),a.a.createElement(Hn,{id:"publisher"},"".concat(o))))};Jn.defaultProps={image:null,title:null,publisher:null};var Kn=Jn;function Wn(){var n=Object(l.a)(["\n  font-family: 'Permanent Marker';\n  border-radius: 1px;\n  border-color: #000000;\n  color: #000000;\n  margin: 0px;\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  :hover {\n    background-color: #fefefe;\n    border-color: #d9d9d9;\n  }\n  :disabled {\n    background-color: transparent;\n    border-color: transparent;\n    color: #999999;\n  }\n"]);return Xn=function(){return n},n}function $n(){var n=Object(l.a)(["\n  "," background-color: #76a3d2;\n  border-color: transparent;\n  color: white;\n  :disabled {\n    background-color: #f1f3f7;\n    color: #555555;\n  }\n  :focus {\n    box-shadow: inset 0 0 0 0.07142857em white, 0 0 0 0.07142857em #4c9aff !important;\n  }\n"]);return $n=function(){return n},n}function Fn(){var n=Object(l.a)(["\n  padding: 10px 15px;\n  font-size: 14px;\n  border-radius: 5px;\n  margin: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  color: #555555;\n  :disabled {\n    cursor: not-allowed;\n  }\n  :focus {\n    outline: none;\n    border-color: #0058e1 !important;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n"]);return Fn=function(){return n},n}var Nn=s.a.button(Fn()),Vn=(Object(s.a)(Nn)($n(),""),Object(s.a)(Nn)(Xn()),Object(s.a)(Nn)(Wn()));function Zn(){var n=Object(l.a)(["\n  &:focus {\n    outline: none;\n  }\n  @media (max-width: 400px) {\n    width: 100%;\n  }\n"]);return Zn=function(){return n},n}function ne(){var n=Object(l.a)(["\n  font-size: 12px;\n  margin: 5px 0px 10px 0px;\n"]);return ne=function(){return n},n}function ee(){var n=Object(l.a)(["\n  margin-bottom: 0px;\n"]);return ee=function(){return n},n}function te(){var n=Object(l.a)(["\n  border-bottom: 3px solid black;\n  padding: 5px 0px;\n"]);return te=function(){return n},n}function re(){var n=Object(l.a)(["\n  margin: 0px 40px 20px 40px;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return re=function(){return n},n}function ae(){var n=Object(l.a)(["\n  display: flex;\n"]);return ae=function(){return n},n}var oe=s.a.div(ae()),ie=s.a.div(re()),ce=s.a.h2(te()),ue=s.a.h3(ee()),le=s.a.p(ne()),se=s.a.audio(Zn()),pe=function(n){var e=n.match,t=Object(r.useState)(!1),o=Object(p.a)(t,2),i=o[0],c=o[1],u=Object(r.useState)(null),l=Object(p.a)(u,2),s=l[0],d=l[1],f=e.params.id,m=J(),b=Object(p.a)(m,2),x=b[0],v=b[1],h=x.podcast,O=h.description,g=h.episodes,E=h.image,y=h.loading,w=h.loadingMore,k=h.publisher,_=h.title;return Object(r.useEffect)(function(){i||function(n,e){return W({key:"podcast",url:"".concat(X,"/podcasts/").concat(n),dispatch:e,options:$})}(f,v).then(function(n){var e=Object(j.a)(n.episodes).pop();d(e.pub_date_ms)}),c(!0)}),y?a.a.createElement(P,null):a.a.createElement(oe,null,a.a.createElement(ie,null,a.a.createElement(Cn,null),a.a.createElement(Kn,{image:E,title:_,publisher:k}),a.a.createElement("p",null,O),a.a.createElement(ce,null,"Episodes"),a.a.createElement("div",null,g&&g.map(function(n){return a.a.createElement("div",{key:n.id},a.a.createElement(ue,null,n.title),a.a.createElement(le,null,"".concat((e=n.pub_date_ms,Object(kn.format)(new Date(e),"D MMM YYYY").toUpperCase()))),a.a.createElement(se,{controls:!0,src:n.audio,preload:"none"}),n.title!==n.description?a.a.createElement("p",null,wn()(n.description)):null);var e})),w?a.a.createElement(P,null):a.a.createElement(Vn,{onClick:function(){N(f,s,v).then(function(n){var e=Object(j.a)(n.episodes).pop();d(e.pub_date_ms)})}},"Load more")))},de=t(9);function fe(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function me(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?fe(t,!0).forEach(function(e){Object(de.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):fe(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var be={feed:{loading:!1,error:null,stage:""},podcasts:{loading:!1,results:[],error:null,stage:""},podcast:{loading:!1,error:null,stage:"",loadingMore:!1}},xe=function(n,e){switch(e.type){case"GET_REQUEST":var t=e.meta.key;if(t){var r=n[t];if(r)return me({},n,Object(de.a)({},t,me({},r,{loading:!0,stage:"Requesting data"})))}return n;case"GET_PAYLOAD":var a=e.meta.key;if(a){var o=n[a];if(o)return me({},n,Object(de.a)({},a,me({},o,{},e.payload,{loading:!1,stage:"Data fetched"})))}return n;case"GET_MORE_REQUEST":var i=e.meta.key;if(i){var c=n[i];if(c)return me({},n,Object(de.a)({},i,me({},c,{loadingMore:!0,stage:"Requesting data"})))}return n;case"GET_MORE_PAYLOAD":var u=e.meta,l=u.key,s=u.attribute;if(l){var p,d=n[l],f=d[s];if(d)return me({},n,Object(de.a)({},l,me({},d,{},e.payload,(p={},Object(de.a)(p,s,[].concat(Object(j.a)(f),Object(j.a)(e.payload[s]))),Object(de.a)(p,"loadingMore",!1),Object(de.a)(p,"stage","Data fetched"),p))))}return n;case"GET_ERROR":var m=e.meta.key,b=n[m];return me({},n,Object(de.a)({},m,me({},b,{},e.error,{loading:!1,stage:"Request failed"})));case"RESET":var x=e.meta.key;return me({},n,Object(de.a)({},x,be[x]));default:return n}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(c.a,{basename:""},a.a.createElement(function(){return a.a.createElement(H,{initialState:be,reducer:xe},a.a.createElement("div",null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:En}),a.a.createElement(u.a,{path:"/podcast/:id/",component:pe}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},92:function(n,e,t){n.exports=t(216)},97:function(n,e,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.2e399c6d.chunk.js.map