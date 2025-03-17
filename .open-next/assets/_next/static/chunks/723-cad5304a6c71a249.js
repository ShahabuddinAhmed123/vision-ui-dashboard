(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{762:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},1218:(e,t,r)=>{"use strict";let n;r.d(t,{r9:()=>z,Bd:()=>R});var a=r(2115),s=r(762),i=r.n(s),o=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;Object.create(null);let l=(e,t,r,n)=>{let a=[r,{code:t,...n||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(a,"warn","react-i18next::",!0);m(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...a):console?.warn&&console.warn(...a)},c={},u=(e,t,r,n)=>{m(r)&&c[r]||(m(r)&&(c[r]=new Date),l(e,t,r,n))},p=(e,t)=>()=>{if(e.isInitialized)t();else{let r=()=>{setTimeout(()=>{e.off("initialized",r)},0),t()};e.on("initialized",r)}},f=(e,t,r)=>{e.loadNamespaces(t,p(e,r))},g=(e,t,r,n)=>{if(m(r)&&(r=[r]),e.options.preload&&e.options.preload.indexOf(t)>-1)return f(e,r,n);r.forEach(t=>{0>e.options.ns.indexOf(t)&&e.options.ns.push(t)}),e.loadLanguages(t,p(e,n))},d=(e,t,r={})=>t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:r.lng,precheck:(t,n)=>{if(r.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):(u(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0),m=e=>"string"==typeof e,y=e=>"object"==typeof e&&null!==e,b=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,h={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},O=e=>h[e],v={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(b,O)},w=(e={})=>{v={...v,...e}},N=()=>v,E=(e,t)=>{if(!e)return!1;let r=e.props?.children??e.children;return t?r.length>0:!!r},j=e=>{if(!e)return[];let t=e.props?.children??e.children;return e.props?.i18nIsDynamicList?x(t):t},k=e=>Array.isArray(e)&&e.every(isValidElement),x=e=>Array.isArray(e)?e:[e],P=(e,t)=>{let r={...t};return r.props=Object.assign(e.props,t.props),r},C=(e,t,r)=>{let n=e.key||t,a=cloneElement(e,{key:n});return!a.props||!a.props.children||0>r.indexOf(`${t}/>`)&&0>r.indexOf(`${t} />`)?a:createElement(function(){return createElement(Fragment,null,a)},{key:n})},S=(e,t)=>e.map((e,r)=>C(e,r,t)),I=(e,t)=>{let r={};return Object.keys(e).forEach(n=>{Object.assign(r,{[n]:C(e[n],n,t)})}),r},T=e=>{n=e},A=()=>n,z={type:"3rdParty",init(e){w(e.options.react),T(e)}},D=(0,a.createContext)();class _{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let L=(e,t)=>{let r=(0,a.useRef)();return(0,a.useEffect)(()=>{r.current=t?r.current:e},[e,t]),r.current},F=(e,t,r,n)=>e.getFixedT(t,r,n),$=(e,t,r,n)=>(0,a.useCallback)(F(e,t,r,n),[e,t,r,n]),R=(e,t={})=>{let{i18n:r}=t,{i18n:n,defaultNS:s}=(0,a.useContext)(D)||{},i=r||n||A();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new _),!i){u(i,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");let e=(e,t)=>m(t)?t:y(t)&&m(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}i.options.react?.wait&&u(i,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let o={...N(),...i.options.react,...t},{useSuspense:l,keyPrefix:c}=o,p=e||s||i.options?.defaultNS;p=m(p)?[p]:p||["translation"],i.reportNamespaces.addUsedNamespaces?.(p);let b=(i.isInitialized||i.initializedStoreOnce)&&p.every(e=>d(e,i,o)),h=$(i,t.lng||null,"fallback"===o.nsMode?p:p[0],c),O=()=>h,v=()=>F(i,t.lng||null,"fallback"===o.nsMode?p:p[0],c),[w,E]=(0,a.useState)(O),j=p.join();t.lng&&(j=`${t.lng}${j}`);let k=L(j),x=(0,a.useRef)(!0);(0,a.useEffect)(()=>{let{bindI18n:e,bindI18nStore:r}=o;x.current=!0,b||l||(t.lng?g(i,t.lng,p,()=>{x.current&&E(v)}):f(i,p,()=>{x.current&&E(v)})),b&&k&&k!==j&&x.current&&E(v);let n=()=>{x.current&&E(v)};return e&&i?.on(e,n),r&&i?.store.on(r,n),()=>{x.current=!1,i&&e?.split(" ").forEach(e=>i.off(e,n)),r&&i&&r.split(" ").forEach(e=>i.store.off(e,n))}},[i,j]),(0,a.useEffect)(()=>{x.current&&b&&E(O)},[i,c,b]);let P=[w,i,b];if(P.t=w,P.i18n=i,P.ready=b,b||!b&&!l)return P;throw new Promise(e=>{t.lng?g(i,t.lng,p,()=>e()):f(i,p,()=>e())})}},2055:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),i=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,a,s;n=e,a=t,s=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(p,o({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function p(e){var t=t=>{var r,{attr:a,size:s,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,i),p=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==s?n.createElement(s.Consumer,null,e=>t(e)):t(a)}}}]);