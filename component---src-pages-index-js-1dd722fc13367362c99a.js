(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var n=r("q1tI"),a=r.n(n),o=r("qhky");r("Xagz");function i(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,"Hamed Sedighi :: Front stack developer (MERN)")),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"hero row d-flex align-items-center"},a.a.createElement("main",{className:"col-lg-auto"},a.a.createElement("h1",{className:"font-weight-bold"},"Cześć!",a.a.createElement("span",{role:"img","aria-label":"hello"},"👋")),a.a.createElement("h2",{className:"my-5"},"I'm",a.a.createElement("span",{className:"font-weight-bold"}," ",a.a.createElement("kbd",null,"Hamed Sedighi")),", a front stack developer focused on building minimal and beautiful web apps"," ",a.a.createElement("span",{role:"img","aria-label":"hello"},"👨‍💻")),a.a.createElement("section",{className:"mt-5"},a.a.createElement("h6",{className:"mt-5"},"Currently based in ",a.a.createElement("span",{className:"font-weight-bold"},"Warsaw"),a.a.createElement("span",{className:"h4",role:"img","aria-label":"hello"},"🧜‍♀️")))),a.a.createElement("div",{className:"col-lg-3 d-none d-lg-block d-xl-block"},a.a.createElement("img",{className:"img-fluid",src:"./alexey-topolyanskiy-6uSyRALz1Yw-unsplash.jpg",alt:"warsaw"}))),a.a.createElement("div",{className:"row justify-content-lg-start justify-content-center mb-5 mb-lg-0"},a.a.createElement("h1",{className:"font-weight-bold mb-lg-5"},"Projects",a.a.createElement("span",{role:"img","aria-label":"projects"},"🛠️"))),a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("section",{className:"col-lg-4 col-6"},a.a.createElement("img",{src:"/femalerockers.png",className:"img-fluid",alt:"Female Rockers"})),a.a.createElement("article",{className:"col-lg-8 text-lg-left text-center"},a.a.createElement("h3",{className:"font-weight-bold mt-lg-0 mt-3"},"FemaleRockers",a.a.createElement("span",{role:"img","aria-label":"female rocker"},"👩‍🎤")),a.a.createElement("p",null,"FemaleRockers interviews future sensations in rock music. Our mission is to spread the word for talented musicians and give them a stance where they can professionally present their portfolio."),a.a.createElement("h5",{className:"mt-5"},"Technologies:"),a.a.createElement("img",{src:"https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg",alt:"react",width:"40",height:"40"}),a.a.createElement("img",{src:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",alt:"firebase",width:"40",height:"40"}),a.a.createElement("img",{src:"https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg",alt:"sass",width:"40",height:"40"}),a.a.createElement("img",{src:"https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg",alt:"bootstrap",width:"40",height:"40"}),a.a.createElement("h5",{className:"mt-5"},"Website:"),a.a.createElement("a",{href:"https://femalerockers.com",target:"_blank",rel:"noreferrer"},"https://femalerockers.com"),a.a.createElement("h5",{className:"mt-5"},"Github:"),a.a.createElement("a",{href:"https://github.com/herol3oy/female-rockers",target:"_blank",rel:"noreferrer"},"https://github.com/herol3oy/female-rockers"))),a.a.createElement("div",{className:"row justify-content-center my-5"},a.a.createElement("section",{className:"col-lg-4 col-6"},a.a.createElement("img",{src:"/elit.png",className:"img-fluid",alt:"elit"})),a.a.createElement("article",{className:"col-lg-8 text-lg-left text-center"},a.a.createElement("h3",{className:"font-weight-bold mt-lg-0 mt-3"},"ELIT"),a.a.createElement("p",null,"Elit connect developers across the globe. Our mission is to provide a platform for developers to connect to each others. Here you can find people to collaborate on your project or join others to help them."),a.a.createElement("h5",{className:"mt-5"},"Technologies:"),a.a.createElement("img",{src:"https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg",alt:"react",width:"40",height:"40"}),a.a.createElement("img",{src:"https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg",alt:"redux",width:"40",height:"40"}),a.a.createElement("img",{src:"https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",alt:"graphql",width:"40",height:"40"}),a.a.createElement("img",{src:"https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg",alt:"sass",width:"40",height:"40"}),a.a.createElement("img",{src:"https://material-ui.com/static/logo_raw.svg",alt:"material ui",width:"40",height:"40"}),a.a.createElement("h5",{className:"mt-5"},"Github:"),a.a.createElement("a",{href:"https://github.com/herol3oy/elit",target:"_blank",rel:"noreferrer"},"https://github.com/herol3oy/elit")))),a.a.createElement("div",{className:"container-fluid text-dark about"},a.a.createElement("div",{className:"row p-5"},a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("h6",{className:"font-weight-bold border-bottom pb-1"},"ABOUT"),a.a.createElement("small",{className:""},"Graduated as a Software Engineer from CodeWorks (Oct 2020), a three-month intensive course to learn and build complex apps, with an advanced understanding of JavaScript."),a.a.createElement("p",null,a.a.createElement("small",null,"©",(new Date).getFullYear()))),a.a.createElement("div",{className:"col-lg-3 my-lg-0 my-5"},a.a.createElement("h6",{className:"font-weight-bold border-bottom pb-1"},"CONTACT"),a.a.createElement("h6",null," ",a.a.createElement("span",{role:"img","aria-label":"hello"},"👉")," ",a.a.createElement("a",{href:"mailto:hamedsedighi@gmail.com",className:"text-muted"},a.a.createElement("u",null,"hamedsedighi@gmail.com")))),a.a.createElement("div",{className:"social-icons col-lg-3"},a.a.createElement("h6",{className:"font-weight-bold border-bottom pb-1"},"CONNECT"),a.a.createElement("a",{className:"text-dark",href:"https://github.com/herol3oy/",target:"_blank",rel:"noreferrer"},a.a.createElement("i",{className:"fab fa-github h3"})),a.a.createElement("a",{className:"text-dark mx-2",href:"https://www.linkedin.com/in/hamed-sedighi/",target:"_blank",rel:"noreferrer"},a.a.createElement("i",{className:"fab fa-linkedin-in h3"})),a.a.createElement("a",{className:"text-dark",href:"https://www.instagram.com/perskiiiwpolsce/",target:"_blank",rel:"noreferrer"},a.a.createElement("i",{className:"fab fa-instagram h3"}))))))}},Xagz:function(e,t,r){},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,a,o,i,c=r("17x9"),l=r.n(c),s=r("8+s/"),u=r.n(s),f=r("ZhWT"),m=r.n(f),p=r("q1tI"),d=r.n(p),h=r("YVoz"),g=r.n(h),b="bodyAttributes",y="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",A="href",O="http-equiv",C="innerHTML",k="itemprop",N="name",S="property",j="rel",x="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",_="onChangeClientState",q="titleTemplate",F=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=$(e,w.TITLE),r=$(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,L);return t||n||void 0},X=function(e){return $(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===j&&"canonical"===e[r].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==k||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=g()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(w.BODY,n),le(w.HTML,a),ce(f,m);var p={baseTag:se(w.BASE,r),linkTags:se(w.LINK,o),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[d.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case y:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===C||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(w.BASE,t,n),bodyAttributes:me(b,r,n),htmlAttributes:me(y,a,n),link:me(w.LINK,o,n),meta:me(w.META,i,n),noscript:me(w.NOSCRIPT,c,n),script:me(w.SCRIPT,l,n),style:me(w.STYLE,s,n),title:me(w.TITLE,{title:f,titleAttributes:m},n)}},de=u()((function(e){return{baseTag:J([A,P],e),bodyAttributes:G(b,e),defer:$(e,M),encode:$(e,R),htmlAttributes:G(y,e),linkTags:Z(w.LINK,[j,A],e),metaTags:Z(w.META,[N,E,O,S,k],e),noscriptTags:Z(w.NOSCRIPT,[C],e),onChangeClientState:X(e),scriptTags:Z(w.SCRIPT,[x,C],e),styleTags:Z(w.STYLE,[T],e),title:V(e),titleAttributes:G(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return D(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return z({},a,((t={})[n.type]=i,t.titleAttributes=z({},o),t));case w.BODY:return z({},a,{bodyAttributes:z({},o)});case w.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((r={})[n.type]=z({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(a,n)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-1dd722fc13367362c99a.js.map