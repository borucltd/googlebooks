(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,n,t){e.exports=t(76)},52:function(e,n,t){},53:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(22),c=t.n(r),i=(t(52),t(53),t(25)),l=t(40),s=t(3),u=t(94),f=t(101),h=t(95),m=t(100),d=t(96),g=t(97),p=t(41),v=t(98),w=t(39),E=t.n(w),k=function(){return console.log("Making request to backend"),E.a.get("http://localhost:3001/api/books")},x=function(e){k().then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},b=function(){var e=Object(a.useState)(x),n=Object(p.a)(e,2),t=n[0];n[1];return o.a.createElement(v.a,{border:1},o.a.createElement("h1",null,"Saved ",t))},j=function(){return o.a.createElement("h1",null,"Search")},S=Object(u.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},links:{color:e.palette.primary.contrastText,marginLeft:e.spacing(2)}}}),y=function(){var e,n=S();return o.a.createElement(h.a,(e={container:!0,justify:"center"},Object(i.a)(e,"justify","space-evenly"),Object(i.a)(e,"alignItems","center"),Object(i.a)(e,"spacing",6),e),o.a.createElement(h.a,{item:!0,xs:10},o.a.createElement(f.a,{position:"static"},o.a.createElement(d.a,{variant:"regular"},o.a.createElement(g.a,{variant:"h6",color:"inherit"},o.a.createElement(m.a,{className:n.links,href:"/"},"Google Books"),o.a.createElement(m.a,{className:n.links,href:"/Search",color:"inherit"},"Search"),o.a.createElement(m.a,{className:n.links,href:"/Saved",color:"inherit"},"Saved"))))),o.a.createElement(h.a,{item:!0,xs:8},o.a.createElement(g.a,{variant:"h2",color:"inherit"},"(React) Google Books Search"),o.a.createElement(g.a,{variant:"h4",color:"inherit"},"Search for and Save Books of Interest")),o.a.createElement(h.a,{item:!0,xs:8},o.a.createElement(l.a,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:b}),o.a.createElement(s.a,{exact:!0,path:"/saved",component:b}),o.a.createElement(s.a,{exact:!0,path:"/search",component:j})))))};var O=function(){return o.a.createElement(y,null)},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");B?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):N(e)})}}()}},[[47,1,2]]]);
//# sourceMappingURL=main.67a3e501.chunk.js.map