(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,a){"use strict";var n=a(3),c=a(0),s=a.n(c),r=a(135),l=a(164),i=a(158),o=a.n(i),u=a(159),h=a.n(u),d=a(163),m=a(54),g=a.n(m),p=a(134),j=/{([\d,-]+)}/,f=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},k=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,i=e.metastring,u=Object(p.useThemeConfig)().prism,m=Object(c.useState)(!1),b=m[0],v=m[1],y=Object(c.useState)(!1),x=y[0],B=y[1];Object(c.useEffect)((function(){B(!0)}),[]);var E=Object(c.useRef)(null),O=[],w="",N=Object(d.a)();if(Array.isArray(t)&&(t=t.join("")),i&&j.test(i)){var C=i.match(j)[1];O=h()(C).filter((function(e){return e>0}))}i&&k.test(i)&&(w=i.match(k)[1]);var T=a&&a.replace(/language-/,"");!T&&u.defaultLanguage&&(T=u.defaultLanguage);var L=t.replace(/\n$/,"");if(0===O.length&&void 0!==T){for(var S,$="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"]);case"jsx":case"tsx":return f(["js","jsBlock","jsx"]);case"html":return f(["js","jsBlock","html"]);case"python":case"py":return f(["python"]);default:return f()}}(T),J=t.replace(/\n$/,"").split("\n"),P=0;P<J.length;){var R=P+1,F=J[P].match(A);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":$+=R+",";break;case"highlight-start":S=R;break;case"highlight-end":$+=S+"-"+(R-1)+","}J.splice(P,1)}else P+=1}O=h()($),L=J.join("\n")}var I=function(){o()(L),v(!0),setTimeout((function(){return v(!1)}),2e3)};return s.a.createElement(l.a,Object(n.a)({},l.b,{key:String(x),theme:N,code:L,language:T}),(function(e){var t,a=e.className,c=e.style,l=e.tokens,i=e.getLineProps,o=e.getTokenProps;return s.a.createElement(s.a.Fragment,null,w&&s.a.createElement("div",{style:c,className:g.a.codeBlockTitle},w),s.a.createElement("div",{className:g.a.codeBlockContent},s.a.createElement("div",{tabIndex:0,className:Object(r.a)(a,g.a.codeBlock,"thin-scrollbar",(t={},t[g.a.codeBlockWithTitle]=w,t))},s.a.createElement("div",{className:g.a.codeBlockLines,style:c},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return O.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),s.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return s.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t})))})))})))),s.a.createElement("button",{ref:E,type:"button","aria-label":"Copy code to clipboard",className:Object(r.a)(g.a.copyButton),onClick:I},b?"Copied":"Copy")))}))}}}]);