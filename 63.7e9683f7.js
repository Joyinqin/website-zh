(window.webpackJsonp=window.webpackJsonp||[]).push([[63,66],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(133),l=n(22),c=n(26),i=n(141),s=n(3),u=n(7),p=n(135),m=n(134),d=n(166),b=n(172),y=n(173),f=n(171),h=n(139),v=n(140),g=n(182),O=n(68),k=n.n(O);var j=function e(t,n){return"link"===t.type?Object(m.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function E(e){var t,n,o,l=e.item,c=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=l.items,y=l.label,f=j(l,m),h=(n=f,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),v=Object(a.useState)((function(){return!!i&&(!f&&l.collapsed)})),g=v[0],O=v[1],E=Object(a.useRef)(null),C=Object(a.useState)(void 0),w=C[0],P=C[1],x=function(e){var t;void 0===e&&(e=!0),P(e?(null===(t=E.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){f&&!h&&g&&O(!1)}),[f,h,g]);var S=Object(a.useCallback)((function(e){e.preventDefault(),w||x(),setTimeout((function(){return O((function(e){return!e}))}),100)}),[w]);return 0===b.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":g}),key:y},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[k.a.menuLinkText]=!i,t)),onClick:i?S:void 0,href:i?"#!":void 0},d),y),r.a.createElement("ul",{className:"menu__list",ref:E,style:{height:w},onTransitionEnd:function(){g||x(!1)}},b.map((function(e){return r.a.createElement(N,{tabIndex:g?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:m})}))))}function C(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,c=t.label,i=j(t,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(h.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:l},Object(v.a)(l)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function N(e){switch(e.item.type){case"category":return r.a.createElement(E,e);case"link":default:return r.a.createElement(C,e)}}var w=function(e){var t,n,o=e.path,l=e.sidebar,c=e.sidebarCollapsible,i=void 0===c||c,s=e.onCollapse,u=e.isHidden,h=Object(a.useState)(!1),v=h[0],O=h[1],j=Object(m.useThemeConfig)(),E=j.navbar.hideOnScroll,C=j.hideableSidebar,w=Object(d.a)().isAnnouncementBarClosed,P=Object(f.a)().scrollY;Object(b.a)(v);var x=Object(y.a)();return Object(a.useEffect)((function(){x===y.b.desktop&&O(!1)}),[x]),r.a.createElement("div",{className:Object(p.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=E,t[k.a.sidebarHidden]=u,t))},E&&r.a.createElement(g.a,{tabIndex:-1,className:k.a.sidebarLogo}),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,(n={"menu--show":v},n[k.a.menuWithAnnouncementBar]=!w&&0===P,n))},r.a.createElement("button",{"aria-label":v?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){O(!v)}},v?r.a.createElement("span",{className:Object(p.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(N,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:i,activePath:o})})))),C&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(p.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:s}))},P=n(157),x=(n(69),n(70)),S=n.n(x),T=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),l=Object(m.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[S.a.enhancedAnchor]=!l,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},_=n(71),D=n.n(_),I={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(P.a,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(h.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:D.a.mdxCodeBlock},e))},h1:T("h1"),h2:T("h2"),h3:T("h3"),h4:T("h4"),h5:T("h5"),h6:T("h6")},M=n(165),L=n(137),R=n(72),A=n.n(R);function W(e){var t,n,c,s,u=e.currentDocRoute,d=e.versionMetadata,b=e.children,y=Object(l.default)(),f=y.siteConfig,h=y.isClient,v=d.pluginId,g=d.permalinkToSidebar,O=d.docsSidebars,k=d.version,j=g[u.path],E=O[j],C=Object(a.useState)(!1),N=C[0],P=C[1],x=Object(a.useState)(!1),S=x[0],T=x[1],_=Object(a.useCallback)((function(){S&&T(!1),P(!N)}),[S]);return r.a.createElement(i.a,{key:h,searchMetadatas:{version:k,tag:Object(m.docVersionSearchTag)(v,k)}},r.a.createElement("div",{className:A.a.docPage},E&&r.a.createElement("div",{className:Object(p.a)(A.a.docSidebarContainer,(t={},t[A.a.docSidebarContainerHidden]=N,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(A.a.docSidebarContainer)&&N&&T(!0)},role:"complementary"},r.a.createElement(w,{key:j,sidebar:E,path:u.path,sidebarCollapsible:null===(n=null===(c=f.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===n||n,onCollapse:_,isHidden:S}),S&&r.a.createElement("div",{className:A.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:_,onClick:_})),r.a.createElement("main",{className:A.a.docMainContainer},r.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",A.a.docItemWrapper,(s={},s[A.a.docItemWrapperEnhanced]=N,s))},r.a.createElement(o.a,{components:I},b)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(L.matchPath)(a.pathname,e)}));return o?r.a.createElement(W,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):r.a.createElement(M.default,e)}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},159:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},163:function(e,t,n){"use strict";var a={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=n(146),o=n(134);t.a=function(){var e=Object(o.useThemeConfig)().prism,t=Object(r.a)().isDarkTheme,n=e.theme||a,l=e.darkTheme||n;return t?l:n}},164:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var a=n(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),l={Prism:a.a,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?i({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var m=void 0,d=t[l],b=n[l][o];if("string"==typeof b?(d=l>0?d:["plain"],m=b):(d=p(d,b.type),b.alias&&(d=p(d,b.alias)),m=b.content),"string"==typeof m){var y=m.split(s),f=y.length;c.push({types:d,content:y[0]});for(var h=1;h<f;h++)u(c),i.push(c=[]),c.push({types:d,content:y[h]})}else l++,t.push(d),n.push(m),a.push(0),r.push(m.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return u(c),i}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=b},165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(141);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);