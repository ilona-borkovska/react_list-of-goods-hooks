(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var s,o=n(5),c=n.n(o),r=n(4),i=(n(10),n(11),n(1)),a=n(2),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.sortByAlphabet="alphabet",t.sortByLength="length"}(s||(s={}));var h=function(){var t=Object(i.useState)(!1),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(i.useState)(""),a=Object(r.a)(c,2),h=a[0],j=a[1],d=function(t){var e=[].concat(b);switch(t){case s.sortByAlphabet:return e.sort((function(t,e){return t.localeCompare(e)}));case s.sortByLength:return e.sort((function(t,e){return t.length-e.length}));default:return e}}(h);return n&&d.reverse(),Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button",["is-info"],{"is-light":h!==s.sortByAlphabet}),onClick:function(){return j(s.sortByAlphabet)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button",["is-success"],{"is-light":h!==s.sortByLength}),onClick:function(){return j(s.sortByLength)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button",["is-warning"],{"is-light":!n}),onClick:function(){return o(!n)},children:"Reverse"}),(h||n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(!1),j("")},children:"Reset"})]}),Object(u.jsx)("ul",{children:d.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7becc36f.chunk.js.map