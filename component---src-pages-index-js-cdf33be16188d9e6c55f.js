(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),m.canUseDOM?t(l):r&&(l=r(l))}var m=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(m,"canUseDOM",c),m}}},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var n=r("q1tI"),a=r.n(n),o=r("qhky");r("Xagz");function i(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,"Hamed Sedighi :: Full stack developer (MERN)")),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"hero row d-flex align-items-center"},a.a.createElement("main",{className:"col-lg-auto"},a.a.createElement("h1",{className:"font-weight-bold"},"Cześć!",a.a.createElement("span",{role:"img","aria-label":"hello"},"👋")),a.a.createElement("h2",{className:"my-5"},"I'm",a.a.createElement("span",{className:"font-weight-bold"}," ",a.a.createElement("kbd",null,"Hamed Sedighi")),", a front end developer focused on building minimal and beautiful web apps"," ",a.a.createElement("span",{role:"img","aria-label":"hello"},"👨‍💻")),a.a.createElement("section",{className:"mt-5"},a.a.createElement("h6",{className:"mt-5"},"Currently based in ",a.a.createElement("span",{className:"font-weight-bold"},"Warsaw"),a.a.createElement("span",{className:"h4",role:"img","aria-label":"hello"},"🧜‍♀️")))),a.a.createElement("div",{className:"col-lg-3 d-none d-lg-block d-xl-block"},a.a.createElement("img",{className:"img-fluid",src:"./alexey-topolyanskiy-6uSyRALz1Yw-unsplash.jpg",alt:"warsaw"}))),a.a.createElement("div",{className:"row justify-content-lg-start justify-content-center mb-5 mb-lg-0"},a.a.createElement("h1",{className:"font-weight-bold mb-lg-5"},"Projects",a.a.createElement("span",{role:"img","aria-label":"projects"},"🛠️"))),a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("section",{className:"col-lg-4 col-6"},a.a.createElement("img",{src:"/femalerockers.png",className:"img-fluid",alt:"Female Rockers"})),a.a.createElement("article",{className:"col-lg-8 text-lg-left text-center"},a.a.createElement("h3",{className:"font-weight-bold mt-lg-0 mt-3"},"FemaleRockers",a.a.createElement("span",{role:"img","aria-label":"female rocker"},"👩‍🎤")),a.a.createElement("p",null,"FemaleRockers interviews future sensations in rock music. Our mission is to spread the word for talented musicians and give them a stance where they can professionally present their portfolio."),a.a.createElement("h5",{className:"mt-5"},"Technologies:"),a.a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",alt:"react",height:"40"}),a.a.createElement("img",{src:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",alt:"firebase",width:"40",height:"40"}),a.a.createElement("img",{alt:"Sass",height:"48",src:"https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"}),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",viewBox:"0 0 118 94",role:"img"},a.a.createElement("title",null,"Bootstrap"),a.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z",fill:"currentColor"})),a.a.createElement("h5",{className:"mt-5"},"Website:"),a.a.createElement("a",{href:"https://femalerockers.com",target:"_blank",rel:"noreferrer"},"https://femalerockers.com"),a.a.createElement("h5",{className:"mt-5"},"Github:"),a.a.createElement("a",{href:"https://github.com/herol3oy/female-rockers",target:"_blank",rel:"noreferrer"},"https://github.com/herol3oy/female-rockers"))),a.a.createElement("div",{className:"row justify-content-center my-5"},a.a.createElement("section",{className:"col-lg-4 col-6"},a.a.createElement("img",{src:"/elit.png",className:"img-fluid",alt:"elit"})),a.a.createElement("article",{className:"col-lg-8 text-lg-left text-center"},a.a.createElement("h3",{className:"font-weight-bold mt-lg-0 mt-3"},"ELIT"),a.a.createElement("p",null,"Elit connect developers across the globe. Our mission is to provide a platform for developers to connect to each others. Here you can find people to collaborate on your project or join others to help them."),a.a.createElement("h5",{className:"mt-5"},"Technologies:"),a.a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",alt:"react",height:"40"}),a.a.createElement("img",{alt:"Sass",height:"48",src:"https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"}),a.a.createElement("img",{src:"https://material-ui.com/static/logo_raw.svg",alt:"material ui",width:"40",height:"40"}),a.a.createElement("h5",{className:"mt-5"},"Github:"),a.a.createElement("a",{href:"https://github.com/herol3oy/elit",target:"_blank",rel:"noreferrer"},"https://github.com/herol3oy/elit")))),a.a.createElement("div",{className:"container-fluid text-dark about"},a.a.createElement("div",{className:"row p-5"},a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("h6",{className:"font-weight-bold border-bottom pb-1"},"ABOUT"),a.a.createElement("small",{className:""},"Graduated as a Software Engineer from CodeWorks (Oct 2020), a three-month intensive course to learn and build complex apps, with an advanced understanding of JavaScript."),a.a.createElement("p",null,a.a.createElement("small",null,"©",(new Date).getFullYear()))),a.a.createElement("div",{className:"col-lg-3 my-lg-0 my-5"},a.a.createElement("h6",{className:"font-weight-bold border-bottom pb-1"},"CONTACT"),a.a.createElement("h6",null," ",a.a.createElement("span",{role:"img","aria-label":"hello"},"👉")," ",a.a.createElement("a",{href:"mailto:hamedsedighi@gmail.com",className:"text-muted"},a.a.createElement("u",null,"hamedsedighi@gmail.com")))),a.a.createElement("div",{className:"social-icons col-lg-3"},a.a.createElement("h6",{className:"font-weight-bold border-bottom pb-1"},"CONNECT"),a.a.createElement("a",{className:"text-dark",href:"https://github.com/herol3oy/",target:"_blank",rel:"noreferrer"},a.a.createElement("i",{className:"fab fa-github h3"})),a.a.createElement("a",{className:"text-dark mx-2",href:"https://www.linkedin.com/in/hamed-sedighi/",target:"_blank",rel:"noreferrer"},a.a.createElement("i",{className:"fab fa-linkedin-in h3"})),a.a.createElement("a",{className:"text-dark",href:"https://www.instagram.com/perskiiiwpolsce/",target:"_blank",rel:"noreferrer"},a.a.createElement("i",{className:"fab fa-instagram h3"}))))))}},Xagz:function(e,t,r){},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,a,o,i,c=r("17x9"),l=r.n(c),s=r("8+s/"),u=r.n(s),m=r("ZhWT"),f=r.n(m),p=r("q1tI"),d=r.n(p),h=r("YVoz"),g=r.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),T="cssText",C="href",I="http-equiv",A="innerHTML",N="itemprop",S="name",j="property",O="rel",k="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",R="encodeSpecialCharacters",H="onChangeClientState",B="titleTemplate",z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),G=[E.NOSCRIPT,E.SCRIPT,E.STYLE],Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=function(e){var t=$(e,E.TITLE),r=$(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,M);return t||n||void 0},J=function(e){return $(e,H)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===O&&"canonical"===e[r].toLowerCase()||l===O&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==A&&c!==T&&c!==N||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=g()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;le(E.BODY,n),le(E.HTML,a),ce(m,f);var p={baseTag:se(E.BASE,r),linkTags:se(E.LINK,o),metaTags:se(E.META,i),noscriptTags:se(E.NOSCRIPT,c),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(E.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)r.removeAttribute(o[m]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(E.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=me(r,n),[d.a.createElement(E.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===A||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:fe(E.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,a,n),link:fe(E.LINK,o,n),meta:fe(E.META,i,n),noscript:fe(E.NOSCRIPT,c,n),script:fe(E.SCRIPT,l,n),style:fe(E.STYLE,s,n),title:fe(E.TITLE,{title:m,titleAttributes:f},n)}},de=u()((function(e){return{baseTag:X([C,x],e),bodyAttributes:K(y,e),defer:$(e,L),encode:$(e,R),htmlAttributes:K(b,e),linkTags:V(E.LINK,[O,C],e),metaTags:V(E.META,[S,w,I,j,N],e),noscriptTags:V(E.NOSCRIPT,[A],e),onChangeClientState:J(e),scriptTags:V(E.SCRIPT,[k,A],e),styleTags:V(E.STYLE,[T],e),title:q(e),titleAttributes:K(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return Z(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return D({},n,((t={})[r.type]=[].concat(n[r.type]||[],[D({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case E.TITLE:return D({},a,((t={})[n.type]=i,t.titleAttributes=D({},o),t));case E.BODY:return D({},a,{bodyAttributes:D({},o)});case E.HTML:return D({},a,{htmlAttributes:D({},o)})}return D({},a,((r={})[n.type]=D({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=D({},t);return Object.keys(e).forEach((function(t){var n;r=D({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(_(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=_(e,["children"]),n=D({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-cdf33be16188d9e6c55f.js.map