(this["webpackJsonptik-tok-clone"]=this["webpackJsonptik-tok-clone"]||[]).push([[0],{34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),o=n(9),s=n.n(o),a=(n(34),n(12)),r=n.n(a),l=n(21),j=n(5),u=(n(36),n(37),n(23)),d=n.n(u),b=n(25),O=n.n(b),m=n(26),h=n.n(m),v=n(27),f=n.n(v),p=n(22),x=n(11),k=n.n(x),g=n(2);var C=function(e){var t=e.videoUrl,n=e.userName,c=e.videoDescription,o=e.songName,s=e.initialLikeCount,a=e.initialCommentCount,r=e.initialShareCount,l=Object(i.useState)(!1),u=Object(j.a)(l,2),b=u[0],m=u[1],v=Object(i.useState)(s),x=Object(j.a)(v,2),C=x[0],N=x[1],S=Object(i.useState)(r),F=Object(j.a)(S,2),L=F[0],w=F[1],z=Object(i.useState)(a),D=Object(j.a)(z,2),U=D[0],y=D[1];function B(){console.log("inside on click like"),b?(m(!1),N(C-1)):(m(!0),N(C+1))}return Object(g.jsxs)("div",{className:"video-container",children:[Object(g.jsx)("iframe",{className:"video",src:t}),Object(g.jsxs)("div",{className:"video-footer",children:[Object(g.jsx)("h2",{className:"video-footer-user-name",children:n}),Object(g.jsx)("p",{className:"video-footer-description",children:c}),Object(g.jsxs)("div",{className:"video-ticker-container",children:[Object(g.jsx)(d.a,{className:"video-music-icon"}),Object(g.jsx)(p.a,{mode:"smooth",className:"video-ticker",children:function(e){e.index;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("p",{children:o})})}})]})]}),Object(g.jsxs)("div",{className:"video-sidebar",children:[b?Object(g.jsx)(O.a,{fontSize:"large",onClick:B}):Object(g.jsx)(k.a,{fontSize:"large",onClick:B}),Object(g.jsx)("p",{children:C}),Object(g.jsx)(h.a,{fontSize:"large",onClick:function(){console.log("inside on click share"),y(U+1)}}),Object(g.jsx)("p",{children:U}),Object(g.jsx)(f.a,{fontSize:"large",onClick:function(){console.log("inside on click share"),w(L+1)}}),Object(g.jsx)("p",{children:L})]})]})},N=n(28),S=n.n(N).a.create({baseURL:"https://tik-tok-clone-ankur9699.herokuapp.com/"});var F=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/v1/get");case 2:return t=e.sent,c(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(g.jsx)("div",{className:"app",children:Object(g.jsx)("div",{className:"videos",children:n.map((function(e){return Object(g.jsx)(C,{initialLikeCount:e.likeCount,initialCommentCount:e.commentCount,initialShareCount:e.shareCount,userName:e.userName,videoDescription:e.videoDescription,songName:e.songName,videoUrl:e.videoUrl})}))})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),o(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),L()}},[[63,1,2]]]);
//# sourceMappingURL=main.463c7f54.chunk.js.map