(this.webpackJsonptictactoeapp=this.webpackJsonptictactoeapp||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),j=n(6),r=n.n(j),s=(n(12),n.p,n(13),n(7)),i=n(4),a=(n(14),n(0)),u=function(){var t=Object(c.useState)("x"),e=Object(i.a)(t,2),n=e[0],j=e[1],r=Object(c.useState)(Array(9).fill("")),u=Object(i.a)(r,2),b=u[0],o=u[1],l=Object(c.useState)(),O=Object(i.a)(l,2),x=O[0],d=O[1],h=function(t){if(""===b[t]){var e=Object(s.a)(b);"x"===n?(e[t]="x",j("o")):(e[t]="o",j("x")),function(t){var e={across:[[0,1,2],[3,4,5],[6,7,8]],down:[[0,3,6],[1,4,7],[2,5,8]],diagnol:[[0,4,8],[2,4,6]]};for(var n in e)e[n].forEach((function(e){""===t[e[0]]||""===t[e[1]]||""===t[e[2]]||t[e[0]]===t[e[1]]&&t[e[1]]===t[e[2]]&&d(t[e[0]])}))}(e),o(e)}else alert("already clicked")},f=function(t){var e=t.num;return Object(a.jsx)("td",{onClick:function(){return h(e)},children:b[e]})};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("table",{children:["Turn: ",n,Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)(f,{num:0}),Object(a.jsx)(f,{num:1}),Object(a.jsx)(f,{num:2})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)(f,{num:3}),Object(a.jsx)(f,{num:4}),Object(a.jsx)(f,{num:5})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)(f,{num:6}),Object(a.jsx)(f,{num:7}),Object(a.jsx)(f,{num:8})]})]})]}),x&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:[x," is the winner!"]}),Object(a.jsx)("button",{onClick:function(){return d(null),void o(Array(9).fill(""))},children:"Play Again"})]})]})};var b=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(u,{})})},o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,j=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),j(t),r(t),s(t)}))};r.a.render(Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Tic Tac Toe App"}),Object(a.jsx)(b,{})]}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.8c1256b9.chunk.js.map