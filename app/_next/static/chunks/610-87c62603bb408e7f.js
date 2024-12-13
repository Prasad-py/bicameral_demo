"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{14233:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(67498),o=n.n(r)},14854:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(43497);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26460:function(e,t,n){function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(43497),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67498:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let r=n(74849),o=n(37821),i=r._(n(58078)),a=n(19448),l=n(31963),u=n(6644),s=n(89594),c=n(14854),d=n(64842),f=n(94829),p=n(39021),h=n(26460),m=n(64157),g=n(89882),y=new Set;function b(e,t,n,r,o,i){if("undefined"!=typeof window&&(i||(0,l.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let w=i.default.forwardRef(function(e,t){let n,r;let{href:u,as:y,children:w,prefetch:x=null,passHref:R,replace:j,shallow:P,scroll:_,locale:S,onClick:E,onMouseEnter:O,onTouchStart:M,legacyBehavior:C=!1,...k}=e;n=w,C&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=i.default.useContext(d.RouterContext),I=i.default.useContext(f.AppRouterContext),A=null!=N?N:I,D=!N,T=!1!==x,L=null===x?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:U,as:W}=i.default.useMemo(()=>{if(!N){let e=v(u);return{href:e,as:y?v(y):e}}let[e,t]=(0,a.resolveHref)(N,u,!0);return{href:e,as:y?(0,a.resolveHref)(N,y):t||e}},[N,u,y]),z=i.default.useRef(U),K=i.default.useRef(W);C&&(r=i.default.Children.only(n));let V=C?r&&"object"==typeof r&&r.ref:t,[H,B,F]=(0,p.useIntersection)({rootMargin:"200px"}),q=i.default.useCallback(e=>{(K.current!==W||z.current!==U)&&(F(),K.current=W,z.current=U),H(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[W,V,U,F,H]);i.default.useEffect(()=>{A&&B&&T&&b(A,U,W,{locale:S},{kind:L},D)},[W,U,B,S,T,null==N?void 0:N.locale,A,D,L]);let Y={ref:q,onClick(e){C||"function"!=typeof E||E(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,o,a,u,s,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?i.default.startTransition(f):f()}(e,A,U,W,j,P,_,S,D)},onMouseEnter(e){C||"function"!=typeof O||O(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(T||!D)&&b(A,U,W,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:L},D)},onTouchStart:function(e){C||"function"!=typeof M||M(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(T||!D)&&b(A,U,W,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:L},D)}};if((0,s.isAbsoluteUrl)(W))Y.href=W;else if(!C||R||"a"===r.type&&!("href"in r.props)){let e=void 0!==S?S:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,h.getDomainLocale)(W,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);Y.href=t||(0,m.addBasePath)((0,c.addLocale)(W,e,null==N?void 0:N.defaultLocale))}return C?i.default.cloneElement(r,Y):(0,o.jsx)("a",{...k,...Y,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3459:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19448:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return d}});let r=n(57651),o=n(6644),i=n(8141),a=n(89594),l=n(43497),u=n(31963),s=n(51834),c=n(51929);function d(e,t,n){let d;let f="string"==typeof t?t:(0,o.formatWithValidation)(t),p=f.match(/^[a-zA-Z]{1,}:\/\//),h=p?f.slice(p[0].length):f;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+f+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(h);f=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(f))return n?[f]:f;try{d=new URL(f.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){d=new URL("/","http://n")}try{let e=new URL(f,d);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:a,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(n,l)}))}let a=e.origin===d.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(e){return n?[f]:f}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39021:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(58078),o=n(3459),i="function"==typeof IntersectionObserver,a=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!i,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(s||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,f.current]),[p,c,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},94724:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},6644:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return l},urlObjectKeys:function(){return a}});let r=n(4434)._(n(57651)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:n}=e,i=e.protocol||"",a=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(r.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+i+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return i(e)}},51834:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let r=n(51356),o=n(10770)},51929:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let r=n(19580),o=n(9370);function i(e,t,n){let i="",a=(0,o.getRouteRegex)(e),l=a.groups,u=(t!==e?(0,r.getRouteMatcher)(a)(t):"")||n;i=e;let s=Object.keys(l);return s.every(e=>{let t=u[e]||"",{repeat:n,optional:r}=l[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in u)&&(i=i.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:s,result:i}}},10770:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return i}});let r=n(25019),o=/\/\[[^/]+?\](?=\/|$)/;function i(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},31963:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=n(89594),o=n(83255);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},8141:function(e,t){function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},57651:function(e,t){function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},19580:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(89594);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},a={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(a[e]=~r.indexOf("/")?r.split("/").map(e=>i(e)):t.repeat?[i(r)]:i(r))}),a}}},9370:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getNamedMiddlewareRegex:function(){return f},getNamedRouteRegex:function(){return d},getRouteRegex:function(){return u}});let r=n(25019),o=n(94724),i=n(32451);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function l(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),n={},l=1;return{parameterizedRoute:t.map(e=>{let t=r.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:r,repeat:u}=a(i[1]);return n[e]={pos:l++,repeat:u,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:r}=a(i[1]);return n[e]={pos:l++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function u(e){let{parameterizedRoute:t,groups:n}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function s(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:i,keyPrefix:l}=e,{key:u,optional:s,repeat:c}=a(r),d=u.replace(/\W/g,"");l&&(d=""+l+d);let f=!1;(0===d.length||d.length>30)&&(f=!0),isNaN(parseInt(d.slice(0,1)))||(f=!0),f&&(d=n()),l?i[d]=""+l+u:i[d]=u;let p=t?(0,o.escapeStringRegexp)(t):"";return c?s?"(?:/"+p+"(?<"+d+">.+?))?":"/"+p+"(?<"+d+">.+?)":"/"+p+"(?<"+d+">[^/]+?)"}function c(e,t){let n;let a=(0,i.removeTrailingSlash)(e).slice(1).split("/"),l=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:a.map(e=>{let n=r.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&i){let[n]=e.split(i[0]);return s({getSafeRouteKey:l,interceptionMarker:n,segment:i[1],routeKeys:u,keyPrefix:t?"nxtI":void 0})}return i?s({getSafeRouteKey:l,segment:i[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function d(e,t){let n=c(e,t);return{...u(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function f(e,t){let{parameterizedRoute:n}=l(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},51356:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let n=o.slice(1,-1),a=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),a=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function i(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(a){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');i(this.optionalRestSlugName,n),this.optionalRestSlugName=n,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');i(this.restSlugName,n),this.restSlugName=n,o="[...]"}}else{if(a)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');i(this.slugName,n),this.slugName=n,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},89594:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return f},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return l},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return d},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let f="undefined"!=typeof performance,p=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},15001:function(e,t,n){n.d(t,{VY:function(){return ea},h4:function(){return eo},ck:function(){return er},fC:function(){return en},xz:function(){return ei}});var r=n(58078),o=n(2996),i=n(58354),a=n(64650),l=n(82855),u=n(82112),s=n(64271),c=n(81654),d=n(81022),f=n(41874),p=n(37821),h="Collapsible",[m,g]=(0,o.b)(h),[y,b]=m(h),v=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:o,defaultOpen:i,disabled:a,onOpenChange:l,...c}=e,[d=!1,h]=(0,u.T)({prop:o,defaultProp:i,onChange:l});return(0,p.jsx)(y,{scope:n,disabled:a,contentId:(0,f.M)(),open:d,onOpenToggle:r.useCallback(()=>h(e=>!e),[h]),children:(0,p.jsx)(s.WV.div,{"data-state":_(d),"data-disabled":a?"":void 0,...c,ref:t})})});v.displayName=h;var w="CollapsibleTrigger",x=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,o=b(w,n);return(0,p.jsx)(s.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":_(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:t,onClick:(0,l.M)(e.onClick,o.onOpenToggle)})});x.displayName=w;var R="CollapsibleContent",j=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=b(R,e.__scopeCollapsible);return(0,p.jsx)(d.z,{present:n||o.open,children:e=>{let{present:n}=e;return(0,p.jsx)(P,{...r,ref:t,present:n})}})});j.displayName=R;var P=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:o,children:i,...l}=e,u=b(R,n),[d,f]=r.useState(o),h=r.useRef(null),m=(0,a.e)(t,h),g=r.useRef(0),y=g.current,v=r.useRef(0),w=v.current,x=u.open||d,j=r.useRef(x),P=r.useRef();return r.useEffect(()=>{let e=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.b)(()=>{let e=h.current;if(e){P.current=P.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();g.current=t.height,v.current=t.width,j.current||(e.style.transitionDuration=P.current.transitionDuration,e.style.animationName=P.current.animationName),f(o)}},[u.open,o]),(0,p.jsx)(s.WV.div,{"data-state":_(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!x,...l,ref:m,style:{"--radix-collapsible-content-height":y?"".concat(y,"px"):void 0,"--radix-collapsible-content-width":w?"".concat(w,"px"):void 0,...e.style},children:x&&i})});function _(e){return e?"open":"closed"}var S=n(62182),E="Accordion",O=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[M,C,k]=(0,i.B)(E),[N,I]=(0,o.b)(E,[k,g]),A=g(),D=r.forwardRef((e,t)=>{let{type:n,...r}=e;return(0,p.jsx)(M.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,p.jsx)(K,{...r,ref:t}):(0,p.jsx)(z,{...r,ref:t})})});D.displayName=E;var[T,L]=N(E),[U,W]=N(E,{collapsible:!1}),z=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:i=()=>{},collapsible:a=!1,...l}=e,[s,c]=(0,u.T)({prop:n,defaultProp:o,onChange:i});return(0,p.jsx)(T,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:c,onItemClose:r.useCallback(()=>a&&c(""),[a,c]),children:(0,p.jsx)(U,{scope:e.__scopeAccordion,collapsible:a,children:(0,p.jsx)(B,{...l,ref:t})})})}),K=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:i=()=>{},...a}=e,[l=[],s]=(0,u.T)({prop:n,defaultProp:o,onChange:i}),c=r.useCallback(e=>s(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[s]),d=r.useCallback(e=>s(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[s]);return(0,p.jsx)(T,{scope:e.__scopeAccordion,value:l,onItemOpen:c,onItemClose:d,children:(0,p.jsx)(U,{scope:e.__scopeAccordion,collapsible:!0,children:(0,p.jsx)(B,{...a,ref:t})})})}),[V,H]=N(E),B=r.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:o,dir:i,orientation:u="vertical",...c}=e,d=r.useRef(null),f=(0,a.e)(d,t),h=C(n),m="ltr"===(0,S.gm)(i),g=(0,l.M)(e.onKeyDown,e=>{var t;if(!O.includes(e.key))return;let n=e.target,r=h().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=r.findIndex(e=>e.ref.current===n),i=r.length;if(-1===o)return;e.preventDefault();let a=o,l=i-1,s=()=>{(a=o+1)>l&&(a=0)},c=()=>{(a=o-1)<0&&(a=l)};switch(e.key){case"Home":a=0;break;case"End":a=l;break;case"ArrowRight":"horizontal"===u&&(m?s():c());break;case"ArrowDown":"vertical"===u&&s();break;case"ArrowLeft":"horizontal"===u&&(m?c():s());break;case"ArrowUp":"vertical"===u&&c()}null===(t=r[a%i].ref.current)||void 0===t||t.focus()});return(0,p.jsx)(V,{scope:n,disabled:o,direction:i,orientation:u,children:(0,p.jsx)(M.Slot,{scope:n,children:(0,p.jsx)(s.WV.div,{...c,"data-orientation":u,ref:f,onKeyDown:o?void 0:g})})})}),F="AccordionItem",[q,Y]=N(F),$=r.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...o}=e,i=H(F,n),a=L(F,n),l=A(n),u=(0,f.M)(),s=r&&a.value.includes(r)||!1,c=i.disabled||e.disabled;return(0,p.jsx)(q,{scope:n,open:s,disabled:c,triggerId:u,children:(0,p.jsx)(v,{"data-orientation":i.orientation,"data-state":et(s),...l,...o,ref:t,disabled:c,open:s,onOpenChange:e=>{e?a.onItemOpen(r):a.onItemClose(r)}})})});$.displayName=F;var Q="AccordionHeader",X=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),i=Y(Q,n);return(0,p.jsx)(s.WV.h3,{"data-orientation":o.orientation,"data-state":et(i.open),"data-disabled":i.disabled?"":void 0,...r,ref:t})});X.displayName=Q;var Z="AccordionTrigger",G=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),i=Y(Z,n),a=W(Z,n),l=A(n);return(0,p.jsx)(M.ItemSlot,{scope:n,children:(0,p.jsx)(x,{"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...l,...r,ref:t})})});G.displayName=Z;var J="AccordionContent",ee=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),i=Y(J,n),a=A(n);return(0,p.jsx)(j,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...a,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function et(e){return e?"open":"closed"}ee.displayName=J;var en=D,er=$,eo=X,ei=G,ea=ee},98477:function(e,t,n){n.d(t,{fC:function(){return P},z$:function(){return _}});var r=n(58078),o=n(64650),i=n(2996),a=n(82855),l=n(82112),u=n(20405),s=n(53910),c=n(81022),d=n(64271),f=n(37821),p="Checkbox",[h,m]=(0,i.b)(p),[g,y]=h(p),b=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,name:i,checked:u,defaultChecked:s,required:c,disabled:p,value:h="on",onCheckedChange:m,form:y,...b}=e,[v,w]=r.useState(null),P=(0,o.e)(t,e=>w(e)),_=r.useRef(!1),S=!v||y||!!v.closest("form"),[E=!1,O]=(0,l.T)({prop:u,defaultProp:s,onChange:m}),M=r.useRef(E);return r.useEffect(()=>{let e=null==v?void 0:v.form;if(e){let t=()=>O(M.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[v,O]),(0,f.jsxs)(g,{scope:n,state:E,disabled:p,children:[(0,f.jsx)(d.WV.button,{type:"button",role:"checkbox","aria-checked":R(E)?"mixed":E,"aria-required":c,"data-state":j(E),"data-disabled":p?"":void 0,disabled:p,value:h,...b,ref:P,onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,a.M)(e.onClick,e=>{O(e=>!!R(e)||!e),S&&(_.current=e.isPropagationStopped(),_.current||e.stopPropagation())})}),S&&(0,f.jsx)(x,{control:v,bubbles:!_.current,name:i,value:h,checked:E,required:c,disabled:p,form:y,style:{transform:"translateX(-100%)"},defaultChecked:!R(s)&&s})]})});b.displayName=p;var v="CheckboxIndicator",w=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,forceMount:r,...o}=e,i=y(v,n);return(0,f.jsx)(c.z,{present:r||R(i.state)||!0===i.state,children:(0,f.jsx)(d.WV.span,{"data-state":j(i.state),"data-disabled":i.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});w.displayName=v;var x=e=>{let{control:t,checked:n,bubbles:o=!0,defaultChecked:i,...a}=e,l=r.useRef(null),c=(0,u.D)(n),d=(0,s.t)(t);r.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(c!==n&&t){let r=new Event("click",{bubbles:o});e.indeterminate=R(n),t.call(e,!R(n)&&n),e.dispatchEvent(r)}},[c,n,o]);let p=r.useRef(!R(n)&&n);return(0,f.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=i?i:p.current,...a,tabIndex:-1,ref:l,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function R(e){return"indeterminate"===e}function j(e){return R(e)?"indeterminate":e?"checked":"unchecked"}var P=b,_=w},65627:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(58078),o=n(64271),i=n(37821),a=r.forwardRef((e,t)=>(0,i.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));a.displayName="Label";var l=a},17020:function(e,t,n){n.d(t,{bU:function(){return F},e6:function(){return B},fC:function(){return V},fQ:function(){return H}});var r=n(58078),o=n(40201),i=n(82855),a=n(64650),l=n(2996),u=n(82112),s=n(62182),c=n(20405),d=n(53910),f=n(64271),p=n(58354),h=n(37821),m=["PageUp","PageDown"],g=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],y={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},b="Slider",[v,w,x]=(0,p.B)(b),[R,j]=(0,l.b)(b,[x]),[P,_]=R(b),S=r.forwardRef((e,t)=>{let{name:n,min:a=0,max:l=100,step:s=1,orientation:c="horizontal",disabled:d=!1,minStepsBetweenThumbs:f=0,defaultValue:p=[a],value:y,onValueChange:b=()=>{},onValueCommit:w=()=>{},inverted:x=!1,form:R,...j}=e,_=r.useRef(new Set),S=r.useRef(0),E="horizontal"===c?M:C,[O=[],k]=(0,u.T)({prop:y,defaultProp:p,onChange:e=>{var t;null===(t=[..._.current][S.current])||void 0===t||t.focus(),b(e)}}),N=r.useRef(O);function I(e,t){let{commit:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit:!1},r=(String(s).split(".")[1]||"").length,i=function(e,t){let n=Math.pow(10,t);return Math.round(e*n)/n}(Math.round((e-a)/s)*s+a,r),u=(0,o.u)(i,[a,l]);k(function(){var e,r;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}(o,u,t);if(e=i,!(!((r=f*s)>0)||Math.min(...e.slice(0,-1).map((t,n)=>e[n+1]-t))>=r))return o;{S.current=i.indexOf(u);let e=String(i)!==String(o);return e&&n&&w(i),e?i:o}})}return(0,h.jsx)(P,{scope:e.__scopeSlider,name:n,disabled:d,min:a,max:l,valueIndexToChangeRef:S,thumbs:_.current,values:O,orientation:c,form:R,children:(0,h.jsx)(v.Provider,{scope:e.__scopeSlider,children:(0,h.jsx)(v.Slot,{scope:e.__scopeSlider,children:(0,h.jsx)(E,{"aria-disabled":d,"data-disabled":d?"":void 0,...j,ref:t,onPointerDown:(0,i.M)(j.onPointerDown,()=>{d||(N.current=O)}),min:a,max:l,inverted:x,onSlideStart:d?void 0:function(e){let t=function(e,t){if(1===e.length)return 0;let n=e.map(e=>Math.abs(e-t));return n.indexOf(Math.min(...n))}(O,e);I(e,t)},onSlideMove:d?void 0:function(e){I(e,S.current)},onSlideEnd:d?void 0:function(){let e=N.current[S.current];O[S.current]!==e&&w(O)},onHomeKeyDown:()=>!d&&I(a,0,{commit:!0}),onEndKeyDown:()=>!d&&I(l,O.length-1,{commit:!0}),onStepKeyDown:e=>{let{event:t,direction:n}=e;if(!d){let e=m.includes(t.key)||t.shiftKey&&g.includes(t.key),r=S.current;I(O[r]+s*(e?10:1)*n,r,{commit:!0})}}})})})})});S.displayName=b;var[E,O]=R(b,{startEdge:"left",endEdge:"right",size:"width",direction:1}),M=r.forwardRef((e,t)=>{let{min:n,max:o,dir:i,inverted:l,onSlideStart:u,onSlideMove:c,onSlideEnd:d,onStepKeyDown:f,...p}=e,[m,g]=r.useState(null),b=(0,a.e)(t,e=>g(e)),v=r.useRef(),w=(0,s.gm)(i),x="ltr"===w,R=x&&!l||!x&&l;function j(e){let t=v.current||m.getBoundingClientRect(),r=K([0,t.width],R?[n,o]:[o,n]);return v.current=t,r(e-t.left)}return(0,h.jsx)(E,{scope:e.__scopeSlider,startEdge:R?"left":"right",endEdge:R?"right":"left",direction:R?1:-1,size:"width",children:(0,h.jsx)(k,{dir:w,"data-orientation":"horizontal",...p,ref:b,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let t=j(e.clientX);null==u||u(t)},onSlideMove:e=>{let t=j(e.clientX);null==c||c(t)},onSlideEnd:()=>{v.current=void 0,null==d||d()},onStepKeyDown:e=>{let t=y[R?"from-left":"from-right"].includes(e.key);null==f||f({event:e,direction:t?-1:1})}})})}),C=r.forwardRef((e,t)=>{let{min:n,max:o,inverted:i,onSlideStart:l,onSlideMove:u,onSlideEnd:s,onStepKeyDown:c,...d}=e,f=r.useRef(null),p=(0,a.e)(t,f),m=r.useRef(),g=!i;function b(e){let t=m.current||f.current.getBoundingClientRect(),r=K([0,t.height],g?[o,n]:[n,o]);return m.current=t,r(e-t.top)}return(0,h.jsx)(E,{scope:e.__scopeSlider,startEdge:g?"bottom":"top",endEdge:g?"top":"bottom",size:"height",direction:g?1:-1,children:(0,h.jsx)(k,{"data-orientation":"vertical",...d,ref:p,style:{...d.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let t=b(e.clientY);null==l||l(t)},onSlideMove:e=>{let t=b(e.clientY);null==u||u(t)},onSlideEnd:()=>{m.current=void 0,null==s||s()},onStepKeyDown:e=>{let t=y[g?"from-bottom":"from-top"].includes(e.key);null==c||c({event:e,direction:t?-1:1})}})})}),k=r.forwardRef((e,t)=>{let{__scopeSlider:n,onSlideStart:r,onSlideMove:o,onSlideEnd:a,onHomeKeyDown:l,onEndKeyDown:u,onStepKeyDown:s,...c}=e,d=_(b,n);return(0,h.jsx)(f.WV.span,{...c,ref:t,onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Home"===e.key?(l(e),e.preventDefault()):"End"===e.key?(u(e),e.preventDefault()):m.concat(g).includes(e.key)&&(s(e),e.preventDefault())}),onPointerDown:(0,i.M)(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),d.thumbs.has(t)?t.focus():r(e)}),onPointerMove:(0,i.M)(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&o(e)}),onPointerUp:(0,i.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))})})}),N="SliderTrack",I=r.forwardRef((e,t)=>{let{__scopeSlider:n,...r}=e,o=_(N,n);return(0,h.jsx)(f.WV.span,{"data-disabled":o.disabled?"":void 0,"data-orientation":o.orientation,...r,ref:t})});I.displayName=N;var A="SliderRange",D=r.forwardRef((e,t)=>{let{__scopeSlider:n,...o}=e,i=_(A,n),l=O(A,n),u=r.useRef(null),s=(0,a.e)(t,u),c=i.values.length,d=i.values.map(e=>z(e,i.min,i.max));return(0,h.jsx)(f.WV.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0,...o,ref:s,style:{...e.style,[l.startEdge]:(c>1?Math.min(...d):0)+"%",[l.endEdge]:100-Math.max(...d)+"%"}})});D.displayName=A;var T="SliderThumb",L=r.forwardRef((e,t)=>{let n=w(e.__scopeSlider),[o,i]=r.useState(null),l=(0,a.e)(t,e=>i(e)),u=r.useMemo(()=>o?n().findIndex(e=>e.ref.current===o):-1,[n,o]);return(0,h.jsx)(U,{...e,ref:l,index:u})}),U=r.forwardRef((e,t)=>{var n;let{__scopeSlider:o,index:l,name:u,...s}=e,c=_(T,o),p=O(T,o),[m,g]=r.useState(null),y=(0,a.e)(t,e=>g(e)),b=!m||c.form||!!m.closest("form"),w=(0,d.t)(m),x=c.values[l],R=void 0===x?0:z(x,c.min,c.max),j=(n=c.values.length)>2?"Value ".concat(l+1," of ").concat(n):2===n?["Minimum","Maximum"][l]:void 0,P=null==w?void 0:w[p.size],S=P?function(e,t,n){let r=e/2,o=K([0,50],[0,r]);return(r-o(t)*n)*n}(P,R,p.direction):0;return r.useEffect(()=>{if(m)return c.thumbs.add(m),()=>{c.thumbs.delete(m)}},[m,c.thumbs]),(0,h.jsxs)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[p.startEdge]:"calc(".concat(R,"% + ").concat(S,"px)")},children:[(0,h.jsx)(v.ItemSlot,{scope:e.__scopeSlider,children:(0,h.jsx)(f.WV.span,{role:"slider","aria-label":e["aria-label"]||j,"aria-valuemin":c.min,"aria-valuenow":x,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...s,ref:y,style:void 0===x?{display:"none"}:e.style,onFocus:(0,i.M)(e.onFocus,()=>{c.valueIndexToChangeRef.current=l})})}),b&&(0,h.jsx)(W,{name:null!=u?u:c.name?c.name+(c.values.length>1?"[]":""):void 0,form:c.form,value:x},l)]})});L.displayName=T;var W=e=>{let{value:t,...n}=e,o=r.useRef(null),i=(0,c.D)(t);return r.useEffect(()=>{let e=o.current,n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;if(i!==t&&n){let r=new Event("input",{bubbles:!0});n.call(e,t),e.dispatchEvent(r)}},[i,t]),(0,h.jsx)("input",{style:{display:"none"},...n,ref:o,defaultValue:t})};function z(e,t,n){return(0,o.u)(100/(n-t)*(e-t),[0,100])}function K(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}var V=S,H=I,B=D,F=L}}]);