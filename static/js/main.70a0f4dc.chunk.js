(this.webpackJsonphandsign_challenge=this.webpackJsonphandsign_challenge||[]).push([[0],{331:function(n,e,t){},332:function(n,e,t){},339:function(n,e){},340:function(n,e){},348:function(n,e){},351:function(n,e){},352:function(n,e){},353:function(n,e,t){"use strict";t.r(e);var r=t(40),a=t(19),c=t.n(a),i=t(259),u=t.n(i),o=(t(331),t.p,t(332),t(4)),s=t.n(o),d=t(11),f=t(18),l=t(6),b=t(98),j=["\u270c\ud83c\udffc","\ud83d\udc4d\ud83c\udffc","\ud83d\udc4e\ud83c\udffc","\ud83d\udc4a\ud83c\udffc"],p=[382.89468982797587,189.6060873180171,364.97472935264335,157.99380422455857,349.81658344602204,127.86895155374417,345.08910780909014,101.41370398045737,346.86908721262125,73.44703027656219,355.6993516939492,127.57557930451689,305.5844156539135,139.2274858828515,316.1408329255687,149.93768443882,332.53896440859734,145.40127184449605,363.13211081465556,148.26131397956223,304.7655372527518,160.1268434929989,318.1045271349238,167.94007831067404,335.3781143300872,163.33186790248777,367.8101524461511,170.9703133833445,312.2492051305888,179.57326554977845,326.00259626784987,185.96424837611312,342.80571918183824,182.8977109242005,368.2996796728901,193.52342495924404,323.98034022154275,195.2811793932746,335.0334852303632,197.47524075528406,350.7494693537507,195.39913670877823],h=t(214),v=t(100),O={audio:!1,video:{width:400,height:300}};function x(){var n=Object(b.a)(["\n  position: absolute;\n  top: 16px;\n  left: 16px;\n"]);return x=function(){return n},n}var m=v.a.video(x()),g=function(n){var e=n.debug,t=void 0!==e&&e,c=n.fps,i=void 0===c?60:c,u=n.onCapture,o=n.onWarmUp,f=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(f.current){var n,e,t=f.current;return navigator.mediaDevices.getUserMedia(O).then((function(r){e=r,f.current.srcObject=r,f.current.play();var a=function(){var e=Object(d.a)(s.a.mark((function e(){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:r=function e(t){if(u(t,f.current),i<60)var r=setTimeout((function(){n=requestAnimationFrame(e),clearTimeout(r)}),1e3/i);else n=requestAnimationFrame(e)},n=requestAnimationFrame(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.addEventListener("loadeddata",a)})).catch((function(n){console.log(n)})),function(){var t=e&&e.getTracks();t&&t.length?t.forEach((function(n){return n.stop()})):console.error("Can't stop new stream"),n&&cancelAnimationFrame(n)}}}),[t,i,u,o]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m,{ref:f,hidden:!t})})};function y(){var n=Object(b.a)(["\n  display: ",";\n"]);return y=function(){return n},n}var k=v.a.canvas(y(),(function(n){return n.displayCanvas?"none":"block"})),w=function(n){var e=n.drawFunction,t=n.onWarmUp,c=n.display,i=Object(a.useRef)(null),u=Object(a.useCallback)((function(n,t){if(null!=t){var r=i.current.getContext("2d");r.drawImage(t,0,0,O.video.width,O.video.height),4===t.readyState&&e(r,t)}}),[e]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{debug:!1,onCapture:u,onWarmUp:t}),Object(r.jsx)(k,Object(h.a)(Object(h.a)({ref:i},O.video),{},{displayCanvas:c}))]})},F=t(216);function C(){var n=Object(b.a)(["\n  background: ",";\n"]);return C=function(){return n},n}function S(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return S=function(){return n},n}var T=v.a.div(S()),A=v.a.div(C(),(function(n){return n.validated?"green":"#aeecdb"})),E=function(n){var e=n.handDict,t=Object.keys(e).map((function(n){return Object(r.jsx)(A,{validated:e[n][1],children:e[n][0]},n)})),a=Object.keys(e).map((function(n){return e[n][0]}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(F.a,{children:Object(r.jsx)(F.b.div,{initial:{x:700,opacity:0},animate:{x:0,opacity:1},exit:{x:-700,opacity:0},children:Object(r.jsx)(T,{children:t})},a.join(""))})})},M=t(162),U=t(303);function z(){var n=Object(b.a)(["\n  position: absolute;\n  font-size: 20px;\n  bottom: 0px;\n  right: 20px;\n"]);return z=function(){return n},n}function D(){var n=Object(b.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n"]);return D=function(){return n},n}t(197);var I=v.a.div(D()),W=v.a.div(z()),q=function(){var n=Object(a.useState)(null),e=Object(l.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(null),u=Object(l.a)(i,2),o=u[0],b=u[1],h=Object(a.useState)(!0),v=Object(l.a)(h,2),O=v[0],x=v[1],m=Object(a.useState)(0),g=Object(l.a)(m,2),y=g[0],k=g[1],F=Object(a.useState)(0),C=Object(l.a)(F,2),S=C[0],T=C[1],A=Object(a.useState)(null),z=Object(l.a)(A,2),D=z[0],q=z[1],B=function(){for(var n,e,t={},r=0;r<6;r++){var a=Object(f.a)(j);if(r>0){var c=a.indexOf(e);c===a.length-1?a.pop():a.splice(c,1)}e=a[n=Math.floor(Math.random()*a.length)],t[r]=[a[n],!1]}return t};y===Object.keys(S).length?(k(0),T(B())):j[D]===S[y][0]&&(S[y][1]=!0,k(y+1)),Object(a.useEffect)((function(){var n=function(){var n=Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a();case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e=function(){var n=Object(d.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.b("https://handpose.baptiste-monpezat.vercel.app/model.json");case 2:e=n.sent,b(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n(),e(),T(B())}),[]);var L=Object(a.useCallback)(function(){var n=Object(d.a)(s.a.mark((function n(e,r){var a,c,i,u,d,f,l,b;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.estimateHands(r);case 2:if(!((a=n.sent).length>0)){n.next=13;break}for(c=[],i=0;i<a[0].landmarks.length;i++)u=a[0].landmarks[i][0],d=a[0].landmarks[i][1],e.fillStyle="#FFFFFF",e.fillRect(u,d,10,10),c.push(u),c.push(d);if(!(a[0].handInViewConfidence>.9)){n.next=13;break}return f=[1,42],l=M.c(c,f),n.next=11,o.predict(l);case 11:(b=n.sent)&&M.a(b,1).data().then((function(n){return q(n[0])}));case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),[t,o]),R=Object(a.useCallback)(function(){var n=Object(d.a)(s.a.mark((function n(e){var r,a,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=[1,42],a=M.c(p,r),n.next=4,o.predict(a);case 4:return(c=n.sent).dataSync(),c.dispose(),n.next=9,t.estimateHands(e);case 9:setTimeout((function(){x(!1)}),7e3);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[t,o]);return t&&o?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(I,{children:[O?Object(r.jsx)("img",{alt:"",src:"https://cdn.dribbble.com/users/989157/screenshots/4632455/loading-animation-bored-hand.gif"}):Object(r.jsx)(E,{handDict:S}),Object(r.jsx)(w,{drawFunction:L,onWarmUp:R,display:O}),Object(r.jsx)(W,{children:Object(r.jsx)("p",{children:"Coded with \ud83e\udd19\ud83c\udffb by Baptiste Monpezat"})})]})}):Object(r.jsx)("img",{alt:"",src:"https://cdn.dribbble.com/users/989157/screenshots/4632455/loading-animation-bored-hand.gif"})};var B=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(q,{})})})},L=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,354)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),L()}},[[353,1,2]]]);
//# sourceMappingURL=main.70a0f4dc.chunk.js.map