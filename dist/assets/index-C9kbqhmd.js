function uy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function xp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wp={exports:{}},Zi={},bp={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=Symbol.for("react.element"),cy=Symbol.for("react.portal"),dy=Symbol.for("react.fragment"),fy=Symbol.for("react.strict_mode"),py=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),gy=Symbol.for("react.context"),my=Symbol.for("react.forward_ref"),yy=Symbol.for("react.suspense"),vy=Symbol.for("react.memo"),xy=Symbol.for("react.lazy"),Jc=Symbol.iterator;function wy(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var Sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ep=Object.assign,kp={};function ro(e,t,n){this.props=e,this.context=t,this.refs=kp,this.updater=n||Sp}ro.prototype.isReactComponent={};ro.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ro.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jp(){}jp.prototype=ro.prototype;function Mu(e,t,n){this.props=e,this.context=t,this.refs=kp,this.updater=n||Sp}var Tu=Mu.prototype=new jp;Tu.constructor=Mu;Ep(Tu,ro.prototype);Tu.isPureReactComponent=!0;var ed=Array.isArray,Np=Object.prototype.hasOwnProperty,Au={current:null},_p={key:!0,ref:!0,__self:!0,__source:!0};function Ip(e,t,n){var r,o={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)Np.call(t,r)&&!_p.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:ys,type:e,key:s,ref:i,props:o,_owner:Au.current}}function by(e,t){return{$$typeof:ys,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===ys}function Sy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var td=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sy(""+e.key):t.toString(36)}function ti(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ys:case cy:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Cl(i,0):r,ed(o)?(n="",e!=null&&(n=e.replace(td,"$&/")+"/"),ti(o,t,n,"",function(u){return u})):o!=null&&(Ru(o)&&(o=by(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(td,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ed(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+Cl(s,l);i+=ti(s,t,n,a,o)}else if(a=wy(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+Cl(s,l++),i+=ti(s,t,n,a,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ks(e,t,n){if(e==null)return e;var r=[],o=0;return ti(e,r,"","",function(s){return t.call(n,s,o++)}),r}function Ey(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ni={transition:null},ky={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ni,ReactCurrentOwner:Au};function zp(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:ks,forEach:function(e,t,n){ks(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ks(e,function(){t++}),t},toArray:function(e){return ks(e,function(t){return t})||[]},only:function(e){if(!Ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=ro;le.Fragment=dy;le.Profiler=py;le.PureComponent=Mu;le.StrictMode=fy;le.Suspense=yy;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;le.act=zp;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ep({},e.props),o=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Au.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Np.call(t,a)&&!_p.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ys,type:e.type,key:o,ref:s,props:r,_owner:i}};le.createContext=function(e){return e={$$typeof:gy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hy,_context:e},e.Consumer=e};le.createElement=Ip;le.createFactory=function(e){var t=Ip.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:my,render:e}};le.isValidElement=Ru;le.lazy=function(e){return{$$typeof:xy,_payload:{_status:-1,_result:e},_init:Ey}};le.memo=function(e,t){return{$$typeof:vy,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=ni.transition;ni.transition={};try{e()}finally{ni.transition=t}};le.unstable_act=zp;le.useCallback=function(e,t){return $e.current.useCallback(e,t)};le.useContext=function(e){return $e.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};le.useEffect=function(e,t){return $e.current.useEffect(e,t)};le.useId=function(){return $e.current.useId()};le.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return $e.current.useMemo(e,t)};le.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};le.useRef=function(e){return $e.current.useRef(e)};le.useState=function(e){return $e.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return $e.current.useTransition()};le.version="18.3.1";bp.exports=le;var S=bp.exports;const D=xp(S),jy=uy({__proto__:null,default:D},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=S,_y=Symbol.for("react.element"),Iy=Symbol.for("react.fragment"),zy=Object.prototype.hasOwnProperty,Cy=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fy={key:!0,ref:!0,__self:!0,__source:!0};function Cp(e,t,n){var r,o={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)zy.call(t,r)&&!Fy.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_y,type:e,key:s,ref:i,props:o,_owner:Cy.current}}Zi.Fragment=Iy;Zi.jsx=Cp;Zi.jsxs=Cp;wp.exports=Zi;var k=wp.exports,wa={},Fp={exports:{}},lt={},Pp={exports:{}},Mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,E){var T=F.length;F.push(E);e:for(;0<T;){var O=T-1>>>1,B=F[O];if(0<o(B,E))F[O]=E,F[T]=B,T=O;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var E=F[0],T=F.pop();if(T!==E){F[0]=T;e:for(var O=0,B=F.length,L=B>>>1;O<L;){var V=2*(O+1)-1,$=F[V],K=V+1,G=F[K];if(0>o($,T))K<B&&0>o(G,$)?(F[O]=G,F[K]=T,O=K):(F[O]=$,F[V]=T,O=V);else if(K<B&&0>o(G,T))F[O]=G,F[K]=T,O=K;else break e}}return E}function o(F,E){var T=F.sortIndex-E.sortIndex;return T!==0?T:F.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var a=[],u=[],c=1,d=null,f=3,h=!1,m=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var E=n(u);E!==null;){if(E.callback===null)r(u);else if(E.startTime<=F)r(u),E.sortIndex=E.expirationTime,t(a,E);else break;E=n(u)}}function x(F){if(v=!1,y(F),!m)if(n(a)!==null)m=!0,N(I);else{var E=n(u);E!==null&&H(x,E.startTime-F)}}function I(F,E){m=!1,v&&(v=!1,p(M),M=-1),h=!0;var T=f;try{for(y(E),d=n(a);d!==null&&(!(d.expirationTime>E)||F&&!R());){var O=d.callback;if(typeof O=="function"){d.callback=null,f=d.priorityLevel;var B=O(d.expirationTime<=E);E=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(a)&&r(a),y(E)}else r(a);d=n(a)}if(d!==null)var L=!0;else{var V=n(u);V!==null&&H(x,V.startTime-E),L=!1}return L}finally{d=null,f=T,h=!1}}var z=!1,_=null,M=-1,j=5,A=-1;function R(){return!(e.unstable_now()-A<j)}function U(){if(_!==null){var F=e.unstable_now();A=F;var E=!0;try{E=_(!0,F)}finally{E?W():(z=!1,_=null)}}else z=!1}var W;if(typeof g=="function")W=function(){g(U)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,P=w.port2;w.port1.onmessage=U,W=function(){P.postMessage(null)}}else W=function(){b(U,0)};function N(F){_=F,z||(z=!0,W())}function H(F,E){M=b(function(){F(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,N(I))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(F){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var T=f;f=E;try{return F()}finally{f=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,E){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var T=f;f=F;try{return E()}finally{f=T}},e.unstable_scheduleCallback=function(F,E,T){var O=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?O+T:O):T=O,F){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=T+B,F={id:c++,callback:E,priorityLevel:F,startTime:T,expirationTime:B,sortIndex:-1},T>O?(F.sortIndex=T,t(u,F),n(a)===null&&F===n(u)&&(v?(p(M),M=-1):v=!0,H(x,T-O))):(F.sortIndex=B,t(a,F),m||h||(m=!0,N(I))),F},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(F){var E=f;return function(){var T=f;f=E;try{return F.apply(this,arguments)}finally{f=T}}}})(Mp);Pp.exports=Mp;var Py=Pp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=S,st=Py;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tp=new Set,Uo={};function ur(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(Uo[e]=t,e=0;e<t.length;e++)Tp.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ba=Object.prototype.hasOwnProperty,Ty=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function Ay(e){return ba.call(rd,e)?!0:ba.call(nd,e)?!1:Ty.test(e)?rd[e]=!0:(nd[e]=!0,!1)}function Ry(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dy(e,t,n,r){if(t===null||typeof t>"u"||Ry(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,o,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Du,Lu);Re[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Du,Lu);Re[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Du,Lu);Re[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ou(e,t,n,r){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dy(t,n,o,r)&&(n=null),r||o===null?Ay(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),Sa=Symbol.for("react.profiler"),Ap=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),ka=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),Dp=Symbol.for("react.offscreen"),od=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=od&&e[od]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Fl;function ko(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Pl=!1;function Ml(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,l=s.length-1;1<=i&&0<=l&&o[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==s[l]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=l);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ko(e):""}function Ly(e){switch(e.tag){case 5:return ko(e.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case Sr:return"Portal";case Sa:return"Profiler";case Hu:return"StrictMode";case Ea:return"Suspense";case ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rp:return(e.displayName||"Context")+".Consumer";case Ap:return(e._context.displayName||"Context")+".Provider";case Bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vu:return t=e.displayName||null,t!==null?t:ja(e.type)||"Memo";case cn:t=e._payload,e=e._init;try{return ja(e(t))}catch{}}return null}function Oy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ja(t);case 8:return t===Hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hy(e){var t=Lp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ns(e){e._valueTracker||(e._valueTracker=Hy(e))}function Op(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Na(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hp(e,t){t=t.checked,t!=null&&Ou(e,"checked",t,!1)}function _a(e,t){Hp(e,t);var n=zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ia(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function id(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ia(e,t,n){(t!=="number"||vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jo=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function za(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ld(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(jo(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zn(n)}}function Bp(e,t){var n=zn(t.value),r=zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ad(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,Up=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},By=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(e){By.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),To[t]=To[e]})});function Wp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||To.hasOwnProperty(e)&&To[e]?(""+t).trim():t+"px"}function $p(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Wp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vy=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(Vy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ma=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ta=null,Dr=null,Lr=null;function ud(e){if(e=ws(e)){if(typeof Ta!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=rl(t),Ta(e.stateNode,e.type,t))}}function Gp(e){Dr?Lr?Lr.push(e):Lr=[e]:Dr=e}function Kp(){if(Dr){var e=Dr,t=Lr;if(Lr=Dr=null,ud(e),t)for(e=0;e<t.length;e++)ud(t[e])}}function Yp(e,t){return e(t)}function Qp(){}var Tl=!1;function Xp(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return Yp(e,t,n)}finally{Tl=!1,(Dr!==null||Lr!==null)&&(Qp(),Kp())}}function $o(e,t){var n=e.stateNode;if(n===null)return null;var r=rl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var Aa=!1;if(Jt)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Aa=!1}function Uy(e,t,n,r,o,s,i,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ao=!1,xi=null,wi=!1,Ra=null,Wy={onError:function(e){Ao=!0,xi=e}};function $y(e,t,n,r,o,s,i,l,a){Ao=!1,xi=null,Uy.apply(Wy,arguments)}function Gy(e,t,n,r,o,s,i,l,a){if($y.apply(this,arguments),Ao){if(Ao){var u=xi;Ao=!1,xi=null}else throw Error(Y(198));wi||(wi=!0,Ra=u)}}function cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cd(e){if(cr(e)!==e)throw Error(Y(188))}function Ky(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return cd(o),e;if(s===r)return cd(o),t;s=s.sibling}throw Error(Y(188))}if(n.return!==r.return)n=o,r=s;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=s;break}if(l===r){i=!0,r=o,n=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===n){i=!0,n=s,r=o;break}if(l===r){i=!0,r=s,n=o;break}l=l.sibling}if(!i)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function Zp(e){return e=Ky(e),e!==null?Jp(e):null}function Jp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jp(e);if(t!==null)return t;e=e.sibling}return null}var eh=st.unstable_scheduleCallback,dd=st.unstable_cancelCallback,Yy=st.unstable_shouldYield,Qy=st.unstable_requestPaint,Ee=st.unstable_now,Xy=st.unstable_getCurrentPriorityLevel,Wu=st.unstable_ImmediatePriority,th=st.unstable_UserBlockingPriority,bi=st.unstable_NormalPriority,qy=st.unstable_LowPriority,nh=st.unstable_IdlePriority,Ji=null,Rt=null;function Zy(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:tv,Jy=Math.log,ev=Math.LN2;function tv(e){return e>>>=0,e===0?32:31-(Jy(e)/ev|0)|0}var Is=64,zs=4194304;function No(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Si(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=No(l):(s&=i,s!==0&&(r=No(s)))}else i=n&~o,i!==0?r=No(i):s!==0&&(r=No(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),o=1<<n,r|=e[n],t&=~o;return r}function nv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-_t(s),l=1<<i,a=o[i];a===-1?(!(l&n)||l&r)&&(o[i]=nv(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function Da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rh(){var e=Is;return Is<<=1,!(Is&4194240)&&(Is=64),e}function Al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function ov(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-_t(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function $u(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var de=0;function oh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sh,Gu,ih,lh,ah,La=!1,Cs=[],wn=null,bn=null,Sn=null,Go=new Map,Ko=new Map,hn=[],sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function po(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=ws(t),t!==null&&Gu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function iv(e,t,n,r,o){switch(t){case"focusin":return wn=po(wn,e,t,n,r,o),!0;case"dragenter":return bn=po(bn,e,t,n,r,o),!0;case"mouseover":return Sn=po(Sn,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return Go.set(s,po(Go.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Ko.set(s,po(Ko.get(s)||null,e,t,n,r,o)),!0}return!1}function uh(e){var t=$n(e.target);if(t!==null){var n=cr(t);if(n!==null){if(t=n.tag,t===13){if(t=qp(n),t!==null){e.blockedOn=t,ah(e.priority,function(){ih(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ma=r,n.target.dispatchEvent(r),Ma=null}else return t=ws(n),t!==null&&Gu(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){ri(e)&&n.delete(t)}function lv(){La=!1,wn!==null&&ri(wn)&&(wn=null),bn!==null&&ri(bn)&&(bn=null),Sn!==null&&ri(Sn)&&(Sn=null),Go.forEach(pd),Ko.forEach(pd)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,La||(La=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,lv)))}function Yo(e){function t(o){return ho(o,e)}if(0<Cs.length){ho(Cs[0],e);for(var n=1;n<Cs.length;n++){var r=Cs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&ho(wn,e),bn!==null&&ho(bn,e),Sn!==null&&ho(Sn,e),Go.forEach(t),Ko.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)uh(n),n.blockedOn===null&&hn.shift()}var Or=sn.ReactCurrentBatchConfig,Ei=!0;function av(e,t,n,r){var o=de,s=Or.transition;Or.transition=null;try{de=1,Ku(e,t,n,r)}finally{de=o,Or.transition=s}}function uv(e,t,n,r){var o=de,s=Or.transition;Or.transition=null;try{de=4,Ku(e,t,n,r)}finally{de=o,Or.transition=s}}function Ku(e,t,n,r){if(Ei){var o=Oa(e,t,n,r);if(o===null)$l(e,t,r,ki,n),fd(e,r);else if(iv(o,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<sv.indexOf(e)){for(;o!==null;){var s=ws(o);if(s!==null&&sh(s),s=Oa(e,t,n,r),s===null&&$l(e,t,r,ki,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var ki=null;function Oa(e,t,n,r){if(ki=null,e=Uu(r),e=$n(e),e!==null)if(t=cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ki=e,null}function ch(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xy()){case Wu:return 1;case th:return 4;case bi:case qy:return 16;case nh:return 536870912;default:return 16}default:return 16}}var vn=null,Yu=null,oi=null;function dh(){if(oi)return oi;var e,t=Yu,n=t.length,r,o="value"in vn?vn.value:vn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[s-r];r++);return oi=o.slice(e,1<r?1-r:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fs(){return!0}function hd(){return!1}function at(e){function t(n,r,o,s,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fs:hd,this.isPropagationStopped=hd,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),t}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=at(oo),xs=xe({},oo,{view:0,detail:0}),cv=at(xs),Rl,Dl,go,el=xe({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(Rl=e.screenX-go.screenX,Dl=e.screenY-go.screenY):Dl=Rl=0,go=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),gd=at(el),dv=xe({},el,{dataTransfer:0}),fv=at(dv),pv=xe({},xs,{relatedTarget:0}),Ll=at(pv),hv=xe({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=at(hv),mv=xe({},oo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=at(mv),vv=xe({},oo,{data:0}),md=at(vv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bv[e])?!!t[e]:!1}function Xu(){return Sv}var Ev=xe({},xs,{key:function(e){if(e.key){var t=xv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kv=at(Ev),jv=xe({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=at(jv),Nv=xe({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),_v=at(Nv),Iv=xe({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=at(Iv),Cv=xe({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=at(Cv),Pv=[9,13,27,32],qu=Jt&&"CompositionEvent"in window,Ro=null;Jt&&"documentMode"in document&&(Ro=document.documentMode);var Mv=Jt&&"TextEvent"in window&&!Ro,fh=Jt&&(!qu||Ro&&8<Ro&&11>=Ro),vd=" ",xd=!1;function ph(e,t){switch(e){case"keyup":return Pv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function Tv(e,t){switch(e){case"compositionend":return hh(t);case"keypress":return t.which!==32?null:(xd=!0,vd);case"textInput":return e=t.data,e===vd&&xd?null:e;default:return null}}function Av(e,t){if(kr)return e==="compositionend"||!qu&&ph(e,t)?(e=dh(),oi=Yu=vn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fh&&t.locale!=="ko"?null:t.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rv[e.type]:t==="textarea"}function gh(e,t,n,r){Gp(r),t=ji(t,"onChange"),0<t.length&&(n=new Qu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Do=null,Qo=null;function Dv(e){Nh(e,0)}function tl(e){var t=_r(e);if(Op(t))return e}function Lv(e,t){if(e==="change")return t}var mh=!1;if(Jt){var Ol;if(Jt){var Hl="oninput"in document;if(!Hl){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Hl=typeof bd.oninput=="function"}Ol=Hl}else Ol=!1;mh=Ol&&(!document.documentMode||9<document.documentMode)}function Sd(){Do&&(Do.detachEvent("onpropertychange",yh),Qo=Do=null)}function yh(e){if(e.propertyName==="value"&&tl(Qo)){var t=[];gh(t,Qo,e,Uu(e)),Xp(Dv,t)}}function Ov(e,t,n){e==="focusin"?(Sd(),Do=t,Qo=n,Do.attachEvent("onpropertychange",yh)):e==="focusout"&&Sd()}function Hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Qo)}function Bv(e,t){if(e==="click")return tl(t)}function Vv(e,t){if(e==="input"||e==="change")return tl(t)}function Uv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Uv;function Xo(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ba.call(t,o)||!Ct(e[o],t[o]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,t){var n=Ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xh(){for(var e=window,t=vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vi(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wv(e){var t=xh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vh(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=kd(n,s);var i=kd(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $v=Jt&&"documentMode"in document&&11>=document.documentMode,jr=null,Ha=null,Lo=null,Ba=!1;function jd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ba||jr==null||jr!==vi(r)||(r=jr,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lo&&Xo(Lo,r)||(Lo=r,r=ji(Ha,"onSelect"),0<r.length&&(t=new Qu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ps(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},Bl={},wh={};Jt&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function nl(e){if(Bl[e])return Bl[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wh)return Bl[e]=t[n];return e}var bh=nl("animationend"),Sh=nl("animationiteration"),Eh=nl("animationstart"),kh=nl("transitionend"),jh=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){jh.set(e,t),ur(t,[e])}for(var Vl=0;Vl<Nd.length;Vl++){var Ul=Nd[Vl],Gv=Ul.toLowerCase(),Kv=Ul[0].toUpperCase()+Ul.slice(1);Fn(Gv,"on"+Kv)}Fn(bh,"onAnimationEnd");Fn(Sh,"onAnimationIteration");Fn(Eh,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(kh,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function _d(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gy(r,t,void 0,e),e.currentTarget=null}function Nh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&o.isPropagationStopped())break e;_d(o,l,u),s=a}else for(i=0;i<r.length;i++){if(l=r[i],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&o.isPropagationStopped())break e;_d(o,l,u),s=a}}}if(wi)throw e=Ra,wi=!1,Ra=null,e}function he(e,t){var n=t[Ga];n===void 0&&(n=t[Ga]=new Set);var r=e+"__bubble";n.has(r)||(_h(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),_h(n,e,r,t)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Ms]){e[Ms]=!0,Tp.forEach(function(n){n!=="selectionchange"&&(Yv.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ms]||(t[Ms]=!0,Wl("selectionchange",!1,t))}}function _h(e,t,n,r){switch(ch(t)){case 1:var o=av;break;case 4:o=uv;break;default:o=Ku}n=o.bind(null,t,n,e),o=void 0,!Aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;l!==null;){if(i=$n(l),i===null)return;if(a=i.tag,a===5||a===6){r=s=i;continue e}l=l.parentNode}}r=r.return}Xp(function(){var u=s,c=Uu(n),d=[];e:{var f=jh.get(e);if(f!==void 0){var h=Qu,m=e;switch(e){case"keypress":if(si(n)===0)break e;case"keydown":case"keyup":h=kv;break;case"focusin":m="focus",h=Ll;break;case"focusout":m="blur",h=Ll;break;case"beforeblur":case"afterblur":h=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=_v;break;case bh:case Sh:case Eh:h=gv;break;case kh:h=zv;break;case"scroll":h=cv;break;case"wheel":h=Fv;break;case"copy":case"cut":case"paste":h=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=yd}var v=(t&4)!==0,b=!v&&e==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var g=u,y;g!==null;){y=g;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,p!==null&&(x=$o(g,p),x!=null&&v.push(Zo(g,x,y)))),b)break;g=g.return}0<v.length&&(f=new h(f,m,null,n,c),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Ma&&(m=n.relatedTarget||n.fromElement)&&($n(m)||m[en]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?$n(m):null,m!==null&&(b=cr(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(v=gd,x="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=yd,x="onPointerLeave",p="onPointerEnter",g="pointer"),b=h==null?f:_r(h),y=m==null?f:_r(m),f=new v(x,g+"leave",h,n,c),f.target=b,f.relatedTarget=y,x=null,$n(c)===u&&(v=new v(p,g+"enter",m,n,c),v.target=y,v.relatedTarget=b,x=v),b=x,h&&m)t:{for(v=h,p=m,g=0,y=v;y;y=hr(y))g++;for(y=0,x=p;x;x=hr(x))y++;for(;0<g-y;)v=hr(v),g--;for(;0<y-g;)p=hr(p),y--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=hr(v),p=hr(p)}v=null}else v=null;h!==null&&Id(d,f,h,v,!1),m!==null&&b!==null&&Id(d,b,m,v,!0)}}e:{if(f=u?_r(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var I=Lv;else if(wd(f))if(mh)I=Vv;else{I=Hv;var z=Ov}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=Bv);if(I&&(I=I(e,u))){gh(d,I,n,c);break e}z&&z(e,f,u),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&Ia(f,"number",f.value)}switch(z=u?_r(u):window,e){case"focusin":(wd(z)||z.contentEditable==="true")&&(jr=z,Ha=u,Lo=null);break;case"focusout":Lo=Ha=jr=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,jd(d,n,c);break;case"selectionchange":if($v)break;case"keydown":case"keyup":jd(d,n,c)}var _;if(qu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else kr?ph(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(fh&&n.locale!=="ko"&&(kr||M!=="onCompositionStart"?M==="onCompositionEnd"&&kr&&(_=dh()):(vn=c,Yu="value"in vn?vn.value:vn.textContent,kr=!0)),z=ji(u,M),0<z.length&&(M=new md(M,e,null,n,c),d.push({event:M,listeners:z}),_?M.data=_:(_=hh(n),_!==null&&(M.data=_)))),(_=Mv?Tv(e,n):Av(e,n))&&(u=ji(u,"onBeforeInput"),0<u.length&&(c=new md("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Nh(d,t)})}function Zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=$o(e,n),s!=null&&r.unshift(Zo(e,s,o)),s=$o(e,t),s!=null&&r.push(Zo(e,s,o))),e=e.return}return r}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Id(e,t,n,r,o){for(var s=t._reactName,i=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,o?(a=$o(n,s),a!=null&&i.unshift(Zo(n,a,l))):o||(a=$o(n,s),a!=null&&i.push(Zo(n,a,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Qv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(Qv,`
`).replace(Xv,"")}function Ts(e,t,n){if(t=zd(t),zd(e)!==t&&n)throw Error(Y(425))}function Ni(){}var Va=null,Ua=null;function Wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(e){return Cd.resolve(null).then(e).catch(Jv)}:$a;function Jv(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yo(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var so=Math.random().toString(36).slice(2),At="__reactFiber$"+so,Jo="__reactProps$"+so,en="__reactContainer$"+so,Ga="__reactEvents$"+so,e1="__reactListeners$"+so,t1="__reactHandles$"+so;function $n(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fd(e);e!==null;){if(n=e[At])return n;e=Fd(e)}return t}e=n,n=e.parentNode}return null}function ws(e){return e=e[At]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function rl(e){return e[Jo]||null}var Ka=[],Ir=-1;function Pn(e){return{current:e}}function ge(e){0>Ir||(e.current=Ka[Ir],Ka[Ir]=null,Ir--)}function fe(e,t){Ir++,Ka[Ir]=e.current,e.current=t}var Cn={},Ve=Pn(Cn),qe=Pn(!1),tr=Cn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ze(e){return e=e.childContextTypes,e!=null}function _i(){ge(qe),ge(Ve)}function Pd(e,t,n){if(Ve.current!==Cn)throw Error(Y(168));fe(Ve,t),fe(qe,n)}function Ih(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(Y(108,Oy(e)||"Unknown",o));return xe({},n,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,tr=Ve.current,fe(Ve,e),fe(qe,qe.current),!0}function Md(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=Ih(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,ge(qe),ge(Ve),fe(Ve,e)):ge(qe),fe(qe,n)}var Gt=null,ol=!1,Kl=!1;function zh(e){Gt===null?Gt=[e]:Gt.push(e)}function n1(e){ol=!0,zh(e)}function Mn(){if(!Kl&&Gt!==null){Kl=!0;var e=0,t=de;try{var n=Gt;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,ol=!1}catch(o){throw Gt!==null&&(Gt=Gt.slice(e+1)),eh(Wu,Mn),o}finally{de=t,Kl=!1}}return null}var zr=[],Cr=0,zi=null,Ci=0,ut=[],ct=0,nr=null,Yt=1,Qt="";function Bn(e,t){zr[Cr++]=Ci,zr[Cr++]=zi,zi=e,Ci=t}function Ch(e,t,n){ut[ct++]=Yt,ut[ct++]=Qt,ut[ct++]=nr,nr=e;var r=Yt;e=Qt;var o=32-_t(r)-1;r&=~(1<<o),n+=1;var s=32-_t(t)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Yt=1<<32-_t(t)+o|n<<o|r,Qt=s+e}else Yt=1<<s|n<<o|r,Qt=e}function Ju(e){e.return!==null&&(Bn(e,1),Ch(e,1,0))}function ec(e){for(;e===zi;)zi=zr[--Cr],zr[Cr]=null,Ci=zr[--Cr],zr[Cr]=null;for(;e===nr;)nr=ut[--ct],ut[ct]=null,Qt=ut[--ct],ut[ct]=null,Yt=ut[--ct],ut[ct]=null}var ot=null,rt=null,me=!1,jt=null;function Fh(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Td(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,rt=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:Yt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,rt=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qa(e){if(me){var t=rt;if(t){var n=t;if(!Td(e,t)){if(Ya(e))throw Error(Y(418));t=En(n.nextSibling);var r=ot;t&&Td(e,t)?Fh(r,n):(e.flags=e.flags&-4097|2,me=!1,ot=e)}}else{if(Ya(e))throw Error(Y(418));e.flags=e.flags&-4097|2,me=!1,ot=e}}}function Ad(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function As(e){if(e!==ot)return!1;if(!me)return Ad(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wa(e.type,e.memoizedProps)),t&&(t=rt)){if(Ya(e))throw Ph(),Error(Y(418));for(;t;)Fh(e,t),t=En(t.nextSibling)}if(Ad(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=ot?En(e.stateNode.nextSibling):null;return!0}function Ph(){for(var e=rt;e;)e=En(e.nextSibling)}function Yr(){rt=ot=null,me=!1}function tc(e){jt===null?jt=[e]:jt.push(e)}var r1=sn.ReactCurrentBatchConfig;function mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=o.refs;i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function Rs(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rd(e){var t=e._init;return t(e._payload)}function Mh(e){function t(p,g){if(e){var y=p.deletions;y===null?(p.deletions=[g],p.flags|=16):y.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function o(p,g){return p=_n(p,g),p.index=0,p.sibling=null,p}function s(p,g,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<g?(p.flags|=2,g):y):(p.flags|=2,g)):(p.flags|=1048576,g)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,g,y,x){return g===null||g.tag!==6?(g=ea(y,p.mode,x),g.return=p,g):(g=o(g,y),g.return=p,g)}function a(p,g,y,x){var I=y.type;return I===Er?c(p,g,y.props.children,x,y.key):g!==null&&(g.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===cn&&Rd(I)===g.type)?(x=o(g,y.props),x.ref=mo(p,g,y),x.return=p,x):(x=fi(y.type,y.key,y.props,null,p.mode,x),x.ref=mo(p,g,y),x.return=p,x)}function u(p,g,y,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=ta(y,p.mode,x),g.return=p,g):(g=o(g,y.children||[]),g.return=p,g)}function c(p,g,y,x,I){return g===null||g.tag!==7?(g=qn(y,p.mode,x,I),g.return=p,g):(g=o(g,y),g.return=p,g)}function d(p,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ea(""+g,p.mode,y),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case js:return y=fi(g.type,g.key,g.props,null,p.mode,y),y.ref=mo(p,null,g),y.return=p,y;case Sr:return g=ta(g,p.mode,y),g.return=p,g;case cn:var x=g._init;return d(p,x(g._payload),y)}if(jo(g)||co(g))return g=qn(g,p.mode,y,null),g.return=p,g;Rs(p,g)}return null}function f(p,g,y,x){var I=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:l(p,g,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case js:return y.key===I?a(p,g,y,x):null;case Sr:return y.key===I?u(p,g,y,x):null;case cn:return I=y._init,f(p,g,I(y._payload),x)}if(jo(y)||co(y))return I!==null?null:c(p,g,y,x,null);Rs(p,y)}return null}function h(p,g,y,x,I){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(y)||null,l(g,p,""+x,I);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case js:return p=p.get(x.key===null?y:x.key)||null,a(g,p,x,I);case Sr:return p=p.get(x.key===null?y:x.key)||null,u(g,p,x,I);case cn:var z=x._init;return h(p,g,y,z(x._payload),I)}if(jo(x)||co(x))return p=p.get(y)||null,c(g,p,x,I,null);Rs(g,x)}return null}function m(p,g,y,x){for(var I=null,z=null,_=g,M=g=0,j=null;_!==null&&M<y.length;M++){_.index>M?(j=_,_=null):j=_.sibling;var A=f(p,_,y[M],x);if(A===null){_===null&&(_=j);break}e&&_&&A.alternate===null&&t(p,_),g=s(A,g,M),z===null?I=A:z.sibling=A,z=A,_=j}if(M===y.length)return n(p,_),me&&Bn(p,M),I;if(_===null){for(;M<y.length;M++)_=d(p,y[M],x),_!==null&&(g=s(_,g,M),z===null?I=_:z.sibling=_,z=_);return me&&Bn(p,M),I}for(_=r(p,_);M<y.length;M++)j=h(_,p,M,y[M],x),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?M:j.key),g=s(j,g,M),z===null?I=j:z.sibling=j,z=j);return e&&_.forEach(function(R){return t(p,R)}),me&&Bn(p,M),I}function v(p,g,y,x){var I=co(y);if(typeof I!="function")throw Error(Y(150));if(y=I.call(y),y==null)throw Error(Y(151));for(var z=I=null,_=g,M=g=0,j=null,A=y.next();_!==null&&!A.done;M++,A=y.next()){_.index>M?(j=_,_=null):j=_.sibling;var R=f(p,_,A.value,x);if(R===null){_===null&&(_=j);break}e&&_&&R.alternate===null&&t(p,_),g=s(R,g,M),z===null?I=R:z.sibling=R,z=R,_=j}if(A.done)return n(p,_),me&&Bn(p,M),I;if(_===null){for(;!A.done;M++,A=y.next())A=d(p,A.value,x),A!==null&&(g=s(A,g,M),z===null?I=A:z.sibling=A,z=A);return me&&Bn(p,M),I}for(_=r(p,_);!A.done;M++,A=y.next())A=h(_,p,M,A.value,x),A!==null&&(e&&A.alternate!==null&&_.delete(A.key===null?M:A.key),g=s(A,g,M),z===null?I=A:z.sibling=A,z=A);return e&&_.forEach(function(U){return t(p,U)}),me&&Bn(p,M),I}function b(p,g,y,x){if(typeof y=="object"&&y!==null&&y.type===Er&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case js:e:{for(var I=y.key,z=g;z!==null;){if(z.key===I){if(I=y.type,I===Er){if(z.tag===7){n(p,z.sibling),g=o(z,y.props.children),g.return=p,p=g;break e}}else if(z.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===cn&&Rd(I)===z.type){n(p,z.sibling),g=o(z,y.props),g.ref=mo(p,z,y),g.return=p,p=g;break e}n(p,z);break}else t(p,z);z=z.sibling}y.type===Er?(g=qn(y.props.children,p.mode,x,y.key),g.return=p,p=g):(x=fi(y.type,y.key,y.props,null,p.mode,x),x.ref=mo(p,g,y),x.return=p,p=x)}return i(p);case Sr:e:{for(z=y.key;g!==null;){if(g.key===z)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(p,g.sibling),g=o(g,y.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=ta(y,p.mode,x),g.return=p,p=g}return i(p);case cn:return z=y._init,b(p,g,z(y._payload),x)}if(jo(y))return m(p,g,y,x);if(co(y))return v(p,g,y,x);Rs(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(p,g.sibling),g=o(g,y),g.return=p,p=g):(n(p,g),g=ea(y,p.mode,x),g.return=p,p=g),i(p)):n(p,g)}return b}var Qr=Mh(!0),Th=Mh(!1),Fi=Pn(null),Pi=null,Fr=null,nc=null;function rc(){nc=Fr=Pi=null}function oc(e){var t=Fi.current;ge(Fi),e._currentValue=t}function Xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hr(e,t){Pi=e,nc=Fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(nc!==e)if(e={context:e,memoizedValue:t,next:null},Fr===null){if(Pi===null)throw Error(Y(308));Fr=e,Pi.dependencies={lanes:0,firstContext:e}}else Fr=Fr.next=e;return t}var Gn=null;function sc(e){Gn===null?Gn=[e]:Gn.push(e)}function Ah(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,sc(t)):(n.next=o.next,o.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,tn(e,n)}return o=r.interleaved,o===null?(t.next=t,sc(r)):(t.next=o.next,o.next=t),r.interleaved=t,tn(e,n)}function ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$u(e,n)}}function Dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mi(e,t,n,r){var o=e.updateQueue;dn=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,i===null?s=u:i.next=u,i=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==i&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=o.baseState;i=0,c=u=a=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(f=t,h=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=xe({},d,f);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,a=d):c=c.next=h,i|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);or|=i,e.lanes=i,e.memoizedState=d}}function Ld(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(Y(191,o));o.call(r)}}}var bs={},Dt=Pn(bs),es=Pn(bs),ts=Pn(bs);function Kn(e){if(e===bs)throw Error(Y(174));return e}function lc(e,t){switch(fe(ts,t),fe(es,e),fe(Dt,bs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ca(t,e)}ge(Dt),fe(Dt,t)}function Xr(){ge(Dt),ge(es),ge(ts)}function Dh(e){Kn(ts.current);var t=Kn(Dt.current),n=Ca(t,e.type);t!==n&&(fe(es,e),fe(Dt,n))}function ac(e){es.current===e&&(ge(Dt),ge(es))}var ye=Pn(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function uc(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var li=sn.ReactCurrentDispatcher,Ql=sn.ReactCurrentBatchConfig,rr=0,ve=null,je=null,Ce=null,Ai=!1,Oo=!1,ns=0,o1=0;function Oe(){throw Error(Y(321))}function cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function dc(e,t,n,r,o,s){if(rr=s,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?a1:u1,e=n(r,o),Oo){s=0;do{if(Oo=!1,ns=0,25<=s)throw Error(Y(301));s+=1,Ce=je=null,t.updateQueue=null,li.current=c1,e=n(r,o)}while(Oo)}if(li.current=Ri,t=je!==null&&je.next!==null,rr=0,Ce=je=ve=null,Ai=!1,t)throw Error(Y(300));return e}function fc(){var e=ns!==0;return ns=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ve.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function yt(){if(je===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ce===null?ve.memoizedState:Ce.next;if(t!==null)Ce=t,je=e;else{if(e===null)throw Error(Y(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ce===null?ve.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function rs(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=yt(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=je,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var l=i=null,a=null,u=s;do{var c=u.lane;if((rr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,i=r):a=a.next=d,ve.lanes|=c,or|=c}u=u.next}while(u!==null&&u!==s);a===null?i=r:a.next=l,Ct(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,ve.lanes|=s,or|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=yt(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);Ct(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Lh(){}function Oh(e,t){var n=ve,r=yt(),o=t(),s=!Ct(r.memoizedState,o);if(s&&(r.memoizedState=o,Qe=!0),r=r.queue,pc(Vh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,os(9,Bh.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(Y(349));rr&30||Hh(n,t,o)}return o}function Hh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bh(e,t,n,r){t.value=n,t.getSnapshot=r,Uh(t)&&Wh(e)}function Vh(e,t,n){return n(function(){Uh(t)&&Wh(e)})}function Uh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Wh(e){var t=tn(e,1);t!==null&&It(t,e,1,-1)}function Od(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t.queue=e,e=e.dispatch=l1.bind(null,ve,e),[t.memoizedState,e]}function os(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $h(){return yt().memoizedState}function ai(e,t,n,r){var o=Tt();ve.flags|=e,o.memoizedState=os(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var o=yt();r=r===void 0?null:r;var s=void 0;if(je!==null){var i=je.memoizedState;if(s=i.destroy,r!==null&&cc(r,i.deps)){o.memoizedState=os(t,n,s,r);return}}ve.flags|=e,o.memoizedState=os(1|t,n,s,r)}function Hd(e,t){return ai(8390656,8,e,t)}function pc(e,t){return sl(2048,8,e,t)}function Gh(e,t){return sl(4,2,e,t)}function Kh(e,t){return sl(4,4,e,t)}function Yh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qh(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,Yh.bind(null,t,e),n)}function hc(){}function Xh(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qh(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zh(e,t,n){return rr&21?(Ct(n,t)||(n=rh(),ve.lanes|=n,or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function s1(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=Ql.transition;Ql.transition={};try{e(!1),t()}finally{de=n,Ql.transition=r}}function Jh(){return yt().memoizedState}function i1(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eg(e))tg(t,n);else if(n=Ah(e,t,n,r),n!==null){var o=We();It(n,e,r,o),ng(n,t,r)}}function l1(e,t,n){var r=Nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eg(e))tg(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,n);if(o.hasEagerState=!0,o.eagerState=l,Ct(l,i)){var a=t.interleaved;a===null?(o.next=o,sc(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Ah(e,t,o,r),n!==null&&(o=We(),It(n,e,r,o),ng(n,t,r))}}function eg(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function tg(e,t){Oo=Ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ng(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$u(e,n)}}var Ri={readContext:mt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},a1={readContext:mt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ai(4194308,4,Yh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return ai(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i1.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Od,useDebugValue:hc,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Od(!1),t=e[0];return e=s1.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,o=Tt();if(me){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),Fe===null)throw Error(Y(349));rr&30||Hh(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Hd(Vh.bind(null,r,s,e),[e]),r.flags|=2048,os(9,Bh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Fe.identifierPrefix;if(me){var n=Qt,r=Yt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ns++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=o1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u1={readContext:mt,useCallback:Xh,useContext:mt,useEffect:pc,useImperativeHandle:Qh,useInsertionEffect:Gh,useLayoutEffect:Kh,useMemo:qh,useReducer:Xl,useRef:$h,useState:function(){return Xl(rs)},useDebugValue:hc,useDeferredValue:function(e){var t=yt();return Zh(t,je.memoizedState,e)},useTransition:function(){var e=Xl(rs)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Lh,useSyncExternalStore:Oh,useId:Jh,unstable_isNewReconciler:!1},c1={readContext:mt,useCallback:Xh,useContext:mt,useEffect:pc,useImperativeHandle:Qh,useInsertionEffect:Gh,useLayoutEffect:Kh,useMemo:qh,useReducer:ql,useRef:$h,useState:function(){return ql(rs)},useDebugValue:hc,useDeferredValue:function(e){var t=yt();return je===null?t.memoizedState=e:Zh(t,je.memoizedState,e)},useTransition:function(){var e=ql(rs)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Lh,useSyncExternalStore:Oh,useId:Jh,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),o=Nn(e),s=qt(r,o);s.payload=t,n!=null&&(s.callback=n),t=kn(e,s,o),t!==null&&(It(t,e,o,r),ii(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),o=Nn(e),s=qt(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=kn(e,s,o),t!==null&&(It(t,e,o,r),ii(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=Nn(e),o=qt(n,r);o.tag=2,t!=null&&(o.callback=t),t=kn(e,o,r),t!==null&&(It(t,e,r,n),ii(t,e,r))}};function Bd(e,t,n,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!Xo(n,r)||!Xo(o,s):!0}function rg(e,t,n){var r=!1,o=Cn,s=t.contextType;return typeof s=="object"&&s!==null?s=mt(s):(o=Ze(t)?tr:Ve.current,r=t.contextTypes,s=(r=r!=null)?Kr(e,o):Cn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Vd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function Za(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ic(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=mt(s):(s=Ze(t)?tr:Ve.current,o.context=Kr(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(qa(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&il.enqueueReplaceState(o,o.state,null),Mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t){try{var n="",r=t;do n+=Ly(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function og(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Li||(Li=!0,uu=r),Ja(e,t)},n}function sg(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ja(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ja(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ud(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=j1.bind(null,e,t,n),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $d(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var f1=sn.ReactCurrentOwner,Qe=!1;function Ue(e,t,n,r){t.child=e===null?Th(t,null,n,r):Qr(t,e.child,n,r)}function Gd(e,t,n,r,o){n=n.render;var s=t.ref;return Hr(t,o),r=dc(e,t,n,r,s,o),n=fc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nn(e,t,o)):(me&&n&&Ju(t),t.flags|=1,Ue(e,t,r,o),t.child)}function Kd(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!Sc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ig(e,t,s,r,o)):(e=fi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(i,r)&&e.ref===t.ref)return nn(e,t,o)}return t.flags|=1,e=_n(s,r),e.ref=t.ref,e.return=t,t.child=e}function ig(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(Xo(s,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,nn(e,t,o)}return eu(e,t,n,r,o)}function lg(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Mr,et),et|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(Mr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Mr,et),et|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,fe(Mr,et),et|=r;return Ue(e,t,o,n),t.child}function ag(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eu(e,t,n,r,o){var s=Ze(n)?tr:Ve.current;return s=Kr(t,s),Hr(t,o),n=dc(e,t,n,r,s,o),r=fc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nn(e,t,o)):(me&&r&&Ju(t),t.flags|=1,Ue(e,t,n,o),t.child)}function Yd(e,t,n,r,o){if(Ze(n)){var s=!0;Ii(t)}else s=!1;if(Hr(t,o),t.stateNode===null)ui(e,t),rg(t,n,r),Za(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var a=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=Ze(n)?tr:Ve.current,u=Kr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Vd(t,i,r,u),dn=!1;var f=t.memoizedState;i.state=f,Mi(t,r,i,o),a=t.memoizedState,l!==r||f!==a||qe.current||dn?(typeof c=="function"&&(qa(t,n,c,r),a=t.memoizedState),(l=dn||Bd(t,n,l,r,f,a,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Rh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:St(t.type,l),i.props=u,d=t.pendingProps,f=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=mt(a):(a=Ze(n)?tr:Ve.current,a=Kr(t,a));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Vd(t,i,r,a),dn=!1,f=t.memoizedState,i.state=f,Mi(t,r,i,o);var m=t.memoizedState;l!==d||f!==m||qe.current||dn?(typeof h=="function"&&(qa(t,n,h,r),m=t.memoizedState),(u=dn||Bd(t,n,u,r,f,m,a)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,m,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,m,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=a,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return tu(e,t,n,r,s,o)}function tu(e,t,n,r,o,s){ag(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Md(t,n,!1),nn(e,t,s);r=t.stateNode,f1.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Qr(t,e.child,null,s),t.child=Qr(t,null,l,s)):Ue(e,t,l,s),t.memoizedState=r.state,o&&Md(t,n,!0),t.child}function ug(e){var t=e.stateNode;t.pendingContext?Pd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pd(e,t.context,!1),lc(e,t.containerInfo)}function Qd(e,t,n,r,o){return Yr(),tc(o),t.flags|=256,Ue(e,t,n,r),t.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ru(e){return{baseLanes:e,cachePool:null,transitions:null}}function cg(e,t,n){var r=t.pendingProps,o=ye.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),fe(ye,o&1),e===null)return Qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ul(i,r,0,null),e=qn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ru(n),t.memoizedState=nu,e):gc(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return p1(e,t,i,r,l,o,n);if(s){s=r.fallback,i=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=_n(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=_n(l,s):(s=qn(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?ru(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=nu,r}return s=e.child,e=s.sibling,r=_n(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gc(e,t){return t=ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ds(e,t,n,r){return r!==null&&tc(r),Qr(t,e.child,null,n),e=gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p1(e,t,n,r,o,s,i){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(Y(422))),Ds(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=ul({mode:"visible",children:r.children},o,0,null),s=qn(s,o,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Qr(t,e.child,null,i),t.child.memoizedState=ru(i),t.memoizedState=nu,s);if(!(t.mode&1))return Ds(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(Y(419)),r=Zl(s,r,void 0),Ds(e,t,i,r)}if(l=(i&e.childLanes)!==0,Qe||l){if(r=Fe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,tn(e,o),It(r,e,o,-1))}return bc(),r=Zl(Error(Y(421))),Ds(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=N1.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,rt=En(o.nextSibling),ot=t,me=!0,jt=null,e!==null&&(ut[ct++]=Yt,ut[ct++]=Qt,ut[ct++]=nr,Yt=e.id,Qt=e.overflow,nr=t),t=gc(t,r.children),t.flags|=4096,t)}function Xd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xa(e.return,t,n)}function Jl(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function dg(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Ue(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,n,t);else if(e.tag===19)Xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(ye,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ti(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Jl(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ti(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Jl(t,!0,n,null,s);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h1(e,t,n){switch(t.tag){case 3:ug(t),Yr();break;case 5:Dh(t);break;case 1:Ze(t.type)&&Ii(t);break;case 4:lc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;fe(Fi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?cg(e,t,n):(fe(ye,ye.current&1),e=nn(e,t,n),e!==null?e.sibling:null);fe(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),fe(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,lg(e,t,n)}return nn(e,t,n)}var fg,ou,pg,hg;fg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ou=function(){};pg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kn(Dt.current);var s=null;switch(n){case"input":o=Na(e,o),r=Na(e,r),s=[];break;case"select":o=xe({},o,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":o=za(e,o),r=za(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ni)}Fa(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&l[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&he("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};hg=function(e,t,n,r){n!==r&&(t.flags|=4)};function yo(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function g1(e,t,n){var r=t.pendingProps;switch(ec(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ze(t.type)&&_i(),He(t),null;case 3:return r=t.stateNode,Xr(),ge(qe),ge(Ve),uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(As(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(fu(jt),jt=null))),ou(e,t),He(t),null;case 5:ac(t);var o=Kn(ts.current);if(n=t.type,e!==null&&t.stateNode!=null)pg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return He(t),null}if(e=Kn(Dt.current),As(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[At]=t,r[Jo]=s,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(o=0;o<_o.length;o++)he(_o[o],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":sd(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":ld(r,s),he("invalid",r)}Fa(n,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,l,e),o=["children",""+l]):Uo.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&he("scroll",r)}switch(n){case"input":Ns(r),id(r,s,!0);break;case"textarea":Ns(r),ad(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ni)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[At]=t,e[Jo]=r,fg(e,t,!1,!1),t.stateNode=e;e:{switch(i=Pa(n,r),n){case"dialog":he("cancel",e),he("close",e),o=r;break;case"iframe":case"object":case"embed":he("load",e),o=r;break;case"video":case"audio":for(o=0;o<_o.length;o++)he(_o[o],e);o=r;break;case"source":he("error",e),o=r;break;case"img":case"image":case"link":he("error",e),he("load",e),o=r;break;case"details":he("toggle",e),o=r;break;case"input":sd(e,r),o=Na(e,r),he("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=xe({},r,{value:void 0}),he("invalid",e);break;case"textarea":ld(e,r),o=za(e,r),he("invalid",e);break;default:o=r}Fa(n,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?$p(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Up(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wo(e,a):typeof a=="number"&&Wo(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?a!=null&&s==="onScroll"&&he("scroll",e):a!=null&&Ou(e,s,a,i))}switch(n){case"input":Ns(e),id(e,r,!1);break;case"textarea":Ns(e),ad(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Rr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ni)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)hg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=Kn(ts.current),Kn(Dt.current),As(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(s=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:Ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ts(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return He(t),null;case 13:if(ge(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&rt!==null&&t.mode&1&&!(t.flags&128))Ph(),Yr(),t.flags|=98560,s=!1;else if(s=As(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(Y(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[At]=t}else Yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),s=!1}else jt!==null&&(fu(jt),jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Ne===0&&(Ne=3):bc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Xr(),ou(e,t),e===null&&qo(t.stateNode.containerInfo),He(t),null;case 10:return oc(t.type._context),He(t),null;case 17:return Ze(t.type)&&_i(),He(t),null;case 19:if(ge(ye),s=t.memoizedState,s===null)return He(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)yo(s,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ti(e),i!==null){for(t.flags|=128,yo(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(ye,ye.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ee()>Zr&&(t.flags|=128,r=!0,yo(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ti(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!me)return He(t),null}else 2*Ee()-s.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,yo(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ee(),t.sibling=null,n=ye.current,fe(ye,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return wc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function m1(e,t){switch(ec(t),t.tag){case 1:return Ze(t.type)&&_i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),ge(qe),ge(Ve),uc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ac(t),null;case 13:if(ge(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ye),null;case 4:return Xr(),null;case 10:return oc(t.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var Ls=!1,Be=!1,y1=typeof WeakSet=="function"?WeakSet:Set,te=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function su(e,t,n){try{n()}catch(r){we(e,t,r)}}var qd=!1;function v1(e,t){if(Va=Ei,e=xh(),Zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,l=-1,a=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||o!==0&&d.nodeType!==3||(l=i+o),d!==s||r!==0&&d.nodeType!==3||(a=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===o&&(l=i),f===s&&++c===r&&(a=i),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ua={focusedElem:e,selectionRange:n},Ei=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,b=m.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:St(t.type,v),b);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(x){we(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return m=qd,qd=!1,m}function Ho(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&su(t,n,s)}o=o.next}while(o!==r)}}function ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function iu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gg(e){var t=e.alternate;t!==null&&(e.alternate=null,gg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Jo],delete t[Ga],delete t[e1],delete t[t1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mg(e){return e.tag===5||e.tag===3||e.tag===4}function Zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ni));else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}function au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(au(e,t,n),e=e.sibling;e!==null;)au(e,t,n),e=e.sibling}var Me=null,Et=!1;function an(e,t,n){for(n=n.child;n!==null;)yg(e,t,n),n=n.sibling}function yg(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ji,n)}catch{}switch(n.tag){case 5:Be||Pr(n,t);case 6:var r=Me,o=Et;Me=null,an(e,t,n),Me=r,Et=o,Me!==null&&(Et?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Et?(e=Me,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),Yo(e)):Gl(Me,n.stateNode));break;case 4:r=Me,o=Et,Me=n.stateNode.containerInfo,Et=!0,an(e,t,n),Me=r,Et=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&su(n,t,i),o=o.next}while(o!==r)}an(e,t,n);break;case 1:if(!Be&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,t,l)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,an(e,t,n),Be=r):an(e,t,n);break;default:an(e,t,n)}}function Jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new y1),t.forEach(function(r){var o=_1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Et=!1;break e;case 3:Me=l.stateNode.containerInfo,Et=!0;break e;case 4:Me=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if(Me===null)throw Error(Y(160));yg(s,i,o),Me=null,Et=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vg(t,e),t=t.sibling}function vg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Mt(e),r&4){try{Ho(3,e,e.return),ll(3,e)}catch(v){we(e,e.return,v)}try{Ho(5,e,e.return)}catch(v){we(e,e.return,v)}}break;case 1:bt(t,e),Mt(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(bt(t,e),Mt(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var o=e.stateNode;try{Wo(o,"")}catch(v){we(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hp(o,s),Pa(l,i);var u=Pa(l,s);for(i=0;i<a.length;i+=2){var c=a[i],d=a[i+1];c==="style"?$p(o,d):c==="dangerouslySetInnerHTML"?Up(o,d):c==="children"?Wo(o,d):Ou(o,c,d,u)}switch(l){case"input":_a(o,s);break;case"textarea":Bp(o,s);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Rr(o,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Rr(o,!!s.multiple,s.defaultValue,!0):Rr(o,!!s.multiple,s.multiple?[]:"",!1))}o[Jo]=s}catch(v){we(e,e.return,v)}}break;case 6:if(bt(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(Y(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(v){we(e,e.return,v)}}break;case 3:if(bt(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(t.containerInfo)}catch(v){we(e,e.return,v)}break;case 4:bt(t,e),Mt(e);break;case 13:bt(t,e),Mt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(vc=Ee())),r&4&&Jd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,bt(t,e),Be=u):bt(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(te=e,c=e.child;c!==null;){for(d=te=c;te!==null;){switch(f=te,h=f.child,f.tag){case 0:case 11:case 14:case 15:Ho(4,f,f.return);break;case 1:Pr(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){we(r,n,v)}}break;case 5:Pr(f,f.return);break;case 22:if(f.memoizedState!==null){tf(d);continue}}h!==null?(h.return=f,te=h):tf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Wp("display",i))}catch(v){we(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){we(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bt(t,e),Mt(e),r&4&&Jd(e);break;case 21:break;default:bt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mg(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wo(o,""),r.flags&=-33);var s=Zd(e);au(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Zd(e);lu(e,l,i);break;default:throw Error(Y(161))}}catch(a){we(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x1(e,t,n){te=e,xg(e)}function xg(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var o=te,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ls;if(!i){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Be;l=Ls;var u=Be;if(Ls=i,(Be=a)&&!u)for(te=o;te!==null;)i=te,a=i.child,i.tag===22&&i.memoizedState!==null?nf(o):a!==null?(a.return=i,te=a):nf(o);for(;s!==null;)te=s,xg(s),s=s.sibling;te=o,Ls=l,Be=u}ef(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,te=s):ef(e)}}function ef(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ld(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ld(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Yo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Be||t.flags&512&&iu(t)}catch(f){we(t,t.return,f)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function tf(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function nf(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ll(4,t)}catch(a){we(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){we(t,o,a)}}var s=t.return;try{iu(t)}catch(a){we(t,s,a)}break;case 5:var i=t.return;try{iu(t)}catch(a){we(t,i,a)}}}catch(a){we(t,t.return,a)}if(t===e){te=null;break}var l=t.sibling;if(l!==null){l.return=t.return,te=l;break}te=t.return}}var w1=Math.ceil,Di=sn.ReactCurrentDispatcher,mc=sn.ReactCurrentOwner,ht=sn.ReactCurrentBatchConfig,ae=0,Fe=null,ke=null,Ae=0,et=0,Mr=Pn(0),Ne=0,ss=null,or=0,al=0,yc=0,Bo=null,Ye=null,vc=0,Zr=1/0,$t=null,Li=!1,uu=null,jn=null,Os=!1,xn=null,Oi=0,Vo=0,cu=null,ci=-1,di=0;function We(){return ae&6?Ee():ci!==-1?ci:ci=Ee()}function Nn(e){return e.mode&1?ae&2&&Ae!==0?Ae&-Ae:r1.transition!==null?(di===0&&(di=rh()),di):(e=de,e!==0||(e=window.event,e=e===void 0?16:ch(e.type)),e):1}function It(e,t,n,r){if(50<Vo)throw Vo=0,cu=null,Error(Y(185));vs(e,n,r),(!(ae&2)||e!==Fe)&&(e===Fe&&(!(ae&2)&&(al|=n),Ne===4&&gn(e,Ae)),Je(e,r),n===1&&ae===0&&!(t.mode&1)&&(Zr=Ee()+500,ol&&Mn()))}function Je(e,t){var n=e.callbackNode;rv(e,t);var r=Si(e,e===Fe?Ae:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?n1(rf.bind(null,e)):zh(rf.bind(null,e)),Zv(function(){!(ae&6)&&Mn()}),n=null;else{switch(oh(r)){case 1:n=Wu;break;case 4:n=th;break;case 16:n=bi;break;case 536870912:n=nh;break;default:n=bi}n=_g(n,wg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wg(e,t){if(ci=-1,di=0,ae&6)throw Error(Y(327));var n=e.callbackNode;if(Br()&&e.callbackNode!==n)return null;var r=Si(e,e===Fe?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hi(e,r);else{t=r;var o=ae;ae|=2;var s=Sg();(Fe!==e||Ae!==t)&&($t=null,Zr=Ee()+500,Xn(e,t));do try{E1();break}catch(l){bg(e,l)}while(!0);rc(),Di.current=s,ae=o,ke!==null?t=0:(Fe=null,Ae=0,t=Ne)}if(t!==0){if(t===2&&(o=Da(e),o!==0&&(r=o,t=du(e,o))),t===1)throw n=ss,Xn(e,0),gn(e,r),Je(e,Ee()),n;if(t===6)gn(e,r);else{if(o=e.current.alternate,!(r&30)&&!b1(o)&&(t=Hi(e,r),t===2&&(s=Da(e),s!==0&&(r=s,t=du(e,s))),t===1))throw n=ss,Xn(e,0),gn(e,r),Je(e,Ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:Vn(e,Ye,$t);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=vc+500-Ee(),10<t)){if(Si(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$a(Vn.bind(null,e,Ye,$t),t);break}Vn(e,Ye,$t);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-_t(r);s=1<<i,i=t[i],i>o&&(o=i),r&=~s}if(r=o,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*w1(r/1960))-r,10<r){e.timeoutHandle=$a(Vn.bind(null,e,Ye,$t),r);break}Vn(e,Ye,$t);break;case 5:Vn(e,Ye,$t);break;default:throw Error(Y(329))}}}return Je(e,Ee()),e.callbackNode===n?wg.bind(null,e):null}function du(e,t){var n=Bo;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=Hi(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&fu(t)),e}function fu(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function b1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!Ct(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~yc,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function rf(e){if(ae&6)throw Error(Y(327));Br();var t=Si(e,0);if(!(t&1))return Je(e,Ee()),null;var n=Hi(e,t);if(e.tag!==0&&n===2){var r=Da(e);r!==0&&(t=r,n=du(e,r))}if(n===1)throw n=ss,Xn(e,0),gn(e,t),Je(e,Ee()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,Ye,$t),Je(e,Ee()),null}function xc(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Zr=Ee()+500,ol&&Mn())}}function sr(e){xn!==null&&xn.tag===0&&!(ae&6)&&Br();var t=ae;ae|=1;var n=ht.transition,r=de;try{if(ht.transition=null,de=1,e)return e()}finally{de=r,ht.transition=n,ae=t,!(ae&6)&&Mn()}}function wc(){et=Mr.current,ge(Mr)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qv(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_i();break;case 3:Xr(),ge(qe),ge(Ve),uc();break;case 5:ac(r);break;case 4:Xr();break;case 13:ge(ye);break;case 19:ge(ye);break;case 10:oc(r.type._context);break;case 22:case 23:wc()}n=n.return}if(Fe=e,ke=e=_n(e.current,null),Ae=et=t,Ne=0,ss=null,yc=al=or=0,Ye=Bo=null,Gn!==null){for(t=0;t<Gn.length;t++)if(n=Gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}n.pending=r}Gn=null}return e}function bg(e,t){do{var n=ke;try{if(rc(),li.current=Ri,Ai){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ai=!1}if(rr=0,Ce=je=ve=null,Oo=!1,ns=0,mc.current=null,n===null||n.return===null){Ne=1,ss=t,ke=null;break}e:{var s=e,i=n.return,l=n,a=t;if(t=Ae,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Wd(i);if(h!==null){h.flags&=-257,$d(h,i,l,s,t),h.mode&1&&Ud(s,u,t),t=h,a=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(a),t.updateQueue=v}else m.add(a);break e}else{if(!(t&1)){Ud(s,u,t),bc();break e}a=Error(Y(426))}}else if(me&&l.mode&1){var b=Wd(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),$d(b,i,l,s,t),tc(qr(a,l));break e}}s=a=qr(a,l),Ne!==4&&(Ne=2),Bo===null?Bo=[s]:Bo.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=og(s,a,t);Dd(s,p);break e;case 1:l=a;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(jn===null||!jn.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=sg(s,l,t);Dd(s,x);break e}}s=s.return}while(s!==null)}kg(n)}catch(I){t=I,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Sg(){var e=Di.current;return Di.current=Ri,e===null?Ri:e}function bc(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Fe===null||!(or&268435455)&&!(al&268435455)||gn(Fe,Ae)}function Hi(e,t){var n=ae;ae|=2;var r=Sg();(Fe!==e||Ae!==t)&&($t=null,Xn(e,t));do try{S1();break}catch(o){bg(e,o)}while(!0);if(rc(),ae=n,Di.current=r,ke!==null)throw Error(Y(261));return Fe=null,Ae=0,Ne}function S1(){for(;ke!==null;)Eg(ke)}function E1(){for(;ke!==null&&!Yy();)Eg(ke)}function Eg(e){var t=Ng(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?kg(e):ke=t,mc.current=null}function kg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=m1(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,ke=null;return}}else if(n=g1(n,t,et),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ne===0&&(Ne=5)}function Vn(e,t,n){var r=de,o=ht.transition;try{ht.transition=null,de=1,k1(e,t,n,r)}finally{ht.transition=o,de=r}return null}function k1(e,t,n,r){do Br();while(xn!==null);if(ae&6)throw Error(Y(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ov(e,s),e===Fe&&(ke=Fe=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,_g(bi,function(){return Br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ht.transition,ht.transition=null;var i=de;de=1;var l=ae;ae|=4,mc.current=null,v1(e,n),vg(n,e),Wv(Ua),Ei=!!Va,Ua=Va=null,e.current=n,x1(n),Qy(),ae=l,de=i,ht.transition=s}else e.current=n;if(Os&&(Os=!1,xn=e,Oi=o),s=e.pendingLanes,s===0&&(jn=null),Zy(n.stateNode),Je(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Li)throw Li=!1,e=uu,uu=null,e;return Oi&1&&e.tag!==0&&Br(),s=e.pendingLanes,s&1?e===cu?Vo++:(Vo=0,cu=e):Vo=0,Mn(),null}function Br(){if(xn!==null){var e=oh(Oi),t=ht.transition,n=de;try{if(ht.transition=null,de=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,Oi=0,ae&6)throw Error(Y(331));var o=ae;for(ae|=4,te=e.current;te!==null;){var s=te,i=s.child;if(te.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(te=u;te!==null;){var c=te;switch(c.tag){case 0:case 11:case 15:Ho(8,c,s)}var d=c.child;if(d!==null)d.return=c,te=d;else for(;te!==null;){c=te;var f=c.sibling,h=c.return;if(gg(c),c===u){te=null;break}if(f!==null){f.return=h,te=f;break}te=h}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}te=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,te=i;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,te=p;break e}te=s.return}}var g=e.current;for(te=g;te!==null;){i=te;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,te=y;else e:for(i=g;te!==null;){if(l=te,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ll(9,l)}}catch(I){we(l,l.return,I)}if(l===i){te=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,te=x;break e}te=l.return}}if(ae=o,Mn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{de=n,ht.transition=t}}return!1}function of(e,t,n){t=qr(n,t),t=og(e,t,1),e=kn(e,t,1),t=We(),e!==null&&(vs(e,1,t),Je(e,t))}function we(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=qr(n,e),e=sg(t,e,1),t=kn(t,e,1),e=We(),t!==null&&(vs(t,1,e),Je(t,e));break}}t=t.return}}function j1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Ae&n)===n&&(Ne===4||Ne===3&&(Ae&130023424)===Ae&&500>Ee()-vc?Xn(e,0):yc|=n),Je(e,t)}function jg(e,t){t===0&&(e.mode&1?(t=zs,zs<<=1,!(zs&130023424)&&(zs=4194304)):t=1);var n=We();e=tn(e,t),e!==null&&(vs(e,t,n),Je(e,n))}function N1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jg(e,n)}function _1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),jg(e,n)}var Ng;Ng=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,h1(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,me&&t.flags&1048576&&Ch(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ui(e,t),e=t.pendingProps;var o=Kr(t,Ve.current);Hr(t,n),o=dc(null,t,r,e,o,n);var s=fc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(s=!0,Ii(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ic(t),o.updater=il,t.stateNode=o,o._reactInternals=t,Za(t,r,e,n),t=tu(null,t,r,!0,s,n)):(t.tag=0,me&&s&&Ju(t),Ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ui(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=z1(r),e=St(r,e),o){case 0:t=eu(null,t,r,e,n);break e;case 1:t=Yd(null,t,r,e,n);break e;case 11:t=Gd(null,t,r,e,n);break e;case 14:t=Kd(null,t,r,St(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),eu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Yd(e,t,r,o,n);case 3:e:{if(ug(t),e===null)throw Error(Y(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Rh(e,t),Mi(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=qr(Error(Y(423)),t),t=Qd(e,t,r,n,o);break e}else if(r!==o){o=qr(Error(Y(424)),t),t=Qd(e,t,r,n,o);break e}else for(rt=En(t.stateNode.containerInfo.firstChild),ot=t,me=!0,jt=null,n=Th(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===o){t=nn(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Dh(t),e===null&&Qa(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,Wa(r,o)?i=null:s!==null&&Wa(r,s)&&(t.flags|=32),ag(e,t),Ue(e,t,i,n),t.child;case 6:return e===null&&Qa(t),null;case 13:return cg(e,t,n);case 4:return lc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Gd(e,t,r,o,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,i=o.value,fe(Fi,r._currentValue),r._currentValue=i,s!==null)if(Ct(s.value,i)){if(s.children===o.children&&!qe.current){t=nn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=qt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xa(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(Y(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Xa(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hr(t,n),o=mt(o),r=r(o),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,o=St(r,t.pendingProps),o=St(r.type,o),Kd(e,t,r,o,n);case 15:return ig(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),ui(e,t),t.tag=1,Ze(r)?(e=!0,Ii(t)):e=!1,Hr(t,n),rg(t,r,o),Za(t,r,o,n),tu(null,t,r,!0,e,n);case 19:return dg(e,t,n);case 22:return lg(e,t,n)}throw Error(Y(156,t.tag))};function _g(e,t){return eh(e,t)}function I1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new I1(e,t,n,r)}function Sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function z1(e){if(typeof e=="function")return Sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bu)return 11;if(e===Vu)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fi(e,t,n,r,o,s){var i=2;if(r=e,typeof e=="function")Sc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Er:return qn(n.children,o,s,t);case Hu:i=8,o|=8;break;case Sa:return e=ft(12,n,t,o|2),e.elementType=Sa,e.lanes=s,e;case Ea:return e=ft(13,n,t,o),e.elementType=Ea,e.lanes=s,e;case ka:return e=ft(19,n,t,o),e.elementType=ka,e.lanes=s,e;case Dp:return ul(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ap:i=10;break e;case Rp:i=9;break e;case Bu:i=11;break e;case Vu:i=14;break e;case cn:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=ft(i,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function qn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function ul(e,t,n,r){return e=ft(22,e,r,t),e.elementType=Dp,e.lanes=n,e.stateNode={isHidden:!1},e}function ea(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function ta(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ec(e,t,n,r,o,s,i,l,a){return e=new C1(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ft(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ic(s),e}function F1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ig(e){if(!e)return Cn;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Ih(e,n,t)}return t}function zg(e,t,n,r,o,s,i,l,a){return e=Ec(n,r,!0,e,o,s,i,l,a),e.context=Ig(null),n=e.current,r=We(),o=Nn(n),s=qt(r,o),s.callback=t??null,kn(n,s,o),e.current.lanes=o,vs(e,o,r),Je(e,r),e}function cl(e,t,n,r){var o=t.current,s=We(),i=Nn(o);return n=Ig(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(o,t,i),e!==null&&(It(e,o,i,s),ii(e,o,i)),i}function Bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function P1(){return null}var Cg=typeof reportError=="function"?reportError:function(e){console.error(e)};function jc(e){this._internalRoot=e}dl.prototype.render=jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));cl(e,t,null,null)};dl.prototype.unmount=jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){cl(null,e,null,null)}),t[en]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&uh(e)}};function Nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lf(){}function M1(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=Bi(i);s.call(u)}}var i=zg(t,r,e,0,null,!1,!1,"",lf);return e._reactRootContainer=i,e[en]=i.current,qo(e.nodeType===8?e.parentNode:e),sr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Bi(a);l.call(u)}}var a=Ec(e,0,!1,null,null,!1,!1,"",lf);return e._reactRootContainer=a,e[en]=a.current,qo(e.nodeType===8?e.parentNode:e),sr(function(){cl(t,a,n,r)}),a}function pl(e,t,n,r,o){var s=n._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var l=o;o=function(){var a=Bi(i);l.call(a)}}cl(t,i,e,o)}else i=M1(n,t,e,o,r);return Bi(i)}sh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=No(t.pendingLanes);n!==0&&($u(t,n|1),Je(t,Ee()),!(ae&6)&&(Zr=Ee()+500,Mn()))}break;case 13:sr(function(){var r=tn(e,1);if(r!==null){var o=We();It(r,e,1,o)}}),kc(e,1)}};Gu=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=We();It(t,e,134217728,n)}kc(e,134217728)}};ih=function(e){if(e.tag===13){var t=Nn(e),n=tn(e,t);if(n!==null){var r=We();It(n,e,t,r)}kc(e,t)}};lh=function(){return de};ah=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Ta=function(e,t,n){switch(t){case"input":if(_a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rl(r);if(!o)throw Error(Y(90));Op(r),_a(r,o)}}}break;case"textarea":Bp(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};Yp=xc;Qp=sr;var T1={usingClientEntryPoint:!1,Events:[ws,_r,rl,Gp,Kp,xc]},vo={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A1={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zp(e),e===null?null:e.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||P1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{Ji=Hs.inject(A1),Rt=Hs}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(t))throw Error(Y(200));return F1(e,t,null,n)};lt.createRoot=function(e,t){if(!Nc(e))throw Error(Y(299));var n=!1,r="",o=Cg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ec(e,1,!1,null,null,n,!1,r,o),e[en]=t.current,qo(e.nodeType===8?e.parentNode:e),new jc(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Zp(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return sr(e)};lt.hydrate=function(e,t,n){if(!fl(t))throw Error(Y(200));return pl(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!Nc(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",i=Cg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=zg(t,null,e,1,n??null,o,!1,s,i),e[en]=t.current,qo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new dl(t)};lt.render=function(e,t,n){if(!fl(t))throw Error(Y(200));return pl(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!fl(e))throw Error(Y(40));return e._reactRootContainer?(sr(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};lt.unstable_batchedUpdates=xc;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fl(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return pl(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function Fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fg)}catch(e){console.error(e)}}Fg(),Fp.exports=lt;var R1=Fp.exports,af=R1;wa.createRoot=af.createRoot,wa.hydrateRoot=af.hydrateRoot;const hl=S.createContext(null);hl.displayName="PanelGroupContext";const be={group:"data-panel-group",groupDirection:"data-panel-group-direction",groupId:"data-panel-group-id",panel:"data-panel",panelCollapsible:"data-panel-collapsible",panelId:"data-panel-id",panelSize:"data-panel-size",resizeHandle:"data-resize-handle",resizeHandleActive:"data-resize-handle-active",resizeHandleEnabled:"data-panel-resize-handle-enabled",resizeHandleId:"data-panel-resize-handle-id",resizeHandleState:"data-resize-handle-state"},_c=10,Zn=S.useLayoutEffect,uf=jy.useId,D1=typeof uf=="function"?uf:()=>null;let L1=0;function Ic(e=null){const t=D1(),n=S.useRef(e||t||null);return n.current===null&&(n.current=""+L1++),e??n.current}function Pg({children:e,className:t="",collapsedSize:n,collapsible:r,defaultSize:o,forwardedRef:s,id:i,maxSize:l,minSize:a,onCollapse:u,onExpand:c,onResize:d,order:f,style:h,tagName:m="div",...v}){const b=S.useContext(hl);if(b===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:p,expandPanel:g,getPanelSize:y,getPanelStyle:x,groupId:I,isPanelCollapsed:z,reevaluatePanelConstraints:_,registerPanel:M,resizePanel:j,unregisterPanel:A}=b,R=Ic(i),U=S.useRef({callbacks:{onCollapse:u,onExpand:c,onResize:d},constraints:{collapsedSize:n,collapsible:r,defaultSize:o,maxSize:l,minSize:a},id:R,idIsFromProps:i!==void 0,order:f});S.useRef({didLogMissingDefaultSizeWarning:!1}),Zn(()=>{const{callbacks:w,constraints:P}=U.current,N={...P};U.current.id=R,U.current.idIsFromProps=i!==void 0,U.current.order=f,w.onCollapse=u,w.onExpand=c,w.onResize=d,P.collapsedSize=n,P.collapsible=r,P.defaultSize=o,P.maxSize=l,P.minSize=a,(N.collapsedSize!==P.collapsedSize||N.collapsible!==P.collapsible||N.maxSize!==P.maxSize||N.minSize!==P.minSize)&&_(U.current,N)}),Zn(()=>{const w=U.current;return M(w),()=>{A(w)}},[f,R,M,A]),S.useImperativeHandle(s,()=>({collapse:()=>{p(U.current)},expand:w=>{g(U.current,w)},getId(){return R},getSize(){return y(U.current)},isCollapsed(){return z(U.current)},isExpanded(){return!z(U.current)},resize:w=>{j(U.current,w)}}),[p,g,y,z,R,j]);const W=x(U.current,o);return S.createElement(m,{...v,children:e,className:t,id:R,style:{...W,...h},[be.groupId]:I,[be.panel]:"",[be.panelCollapsible]:r||void 0,[be.panelId]:R,[be.panelSize]:parseFloat(""+W.flexGrow).toFixed(1)})}const Io=S.forwardRef((e,t)=>S.createElement(Pg,{...e,forwardedRef:t}));Pg.displayName="Panel";Io.displayName="forwardRef(Panel)";let pu=null,pi=-1,mn=null;function O1(e,t){if(t){const n=(t&Dg)!==0,r=(t&Lg)!==0,o=(t&Og)!==0,s=(t&Hg)!==0;if(n)return o?"se-resize":s?"ne-resize":"e-resize";if(r)return o?"sw-resize":s?"nw-resize":"w-resize";if(o)return"s-resize";if(s)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function H1(){mn!==null&&(document.head.removeChild(mn),pu=null,mn=null,pi=-1)}function na(e,t){var n,r;const o=O1(e,t);if(pu!==o){if(pu=o,mn===null&&(mn=document.createElement("style"),document.head.appendChild(mn)),pi>=0){var s;(s=mn.sheet)===null||s===void 0||s.removeRule(pi)}pi=(n=(r=mn.sheet)===null||r===void 0?void 0:r.insertRule(`*{cursor: ${o} !important;}`))!==null&&n!==void 0?n:-1}}function Mg(e){return e.type==="keydown"}function Tg(e){return e.type.startsWith("pointer")}function Ag(e){return e.type.startsWith("mouse")}function gl(e){if(Tg(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Ag(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function B1(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function V1(e,t,n){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function U1(e,t){if(e===t)throw new Error("Cannot compare node with itself");const n={a:ff(e),b:ff(t)};let r;for(;n.a.at(-1)===n.b.at(-1);)e=n.a.pop(),t=n.b.pop(),r=e;se(r,"Stacking order can only be calculated for elements with a common ancestor");const o={a:df(cf(n.a)),b:df(cf(n.b))};if(o.a===o.b){const s=r.childNodes,i={a:n.a.at(-1),b:n.b.at(-1)};let l=s.length;for(;l--;){const a=s[l];if(a===i.a)return 1;if(a===i.b)return-1}}return Math.sign(o.a-o.b)}const W1=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function $1(e){var t;const n=getComputedStyle((t=Rg(e))!==null&&t!==void 0?t:e).display;return n==="flex"||n==="inline-flex"}function G1(e){const t=getComputedStyle(e);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||$1(e))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||W1.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function cf(e){let t=e.length;for(;t--;){const n=e[t];if(se(n,"Missing node"),G1(n))return n}return null}function df(e){return e&&Number(getComputedStyle(e).zIndex)||0}function ff(e){const t=[];for(;e;)t.push(e),e=Rg(e);return t}function Rg(e){const{parentNode:t}=e;return t&&t instanceof ShadowRoot?t.host:t}const Dg=1,Lg=2,Og=4,Hg=8,K1=B1()==="coarse";let zt=[],Vr=!1,Wn=new Map,ml=new Map;const is=new Set;function Y1(e,t,n,r,o){var s;const{ownerDocument:i}=t,l={direction:n,element:t,hitAreaMargins:r,setResizeHandlerState:o},a=(s=Wn.get(i))!==null&&s!==void 0?s:0;return Wn.set(i,a+1),is.add(l),Vi(),function(){var c;ml.delete(e),is.delete(l);const d=(c=Wn.get(i))!==null&&c!==void 0?c:1;if(Wn.set(i,d-1),Vi(),d===1&&Wn.delete(i),zt.includes(l)){const f=zt.indexOf(l);f>=0&&zt.splice(f,1),Cc(),o("up",!0,null)}}}function Q1(e){const{target:t}=e,{x:n,y:r}=gl(e);Vr=!0,zc({target:t,x:n,y:r}),Vi(),zt.length>0&&(Ui("down",e),e.preventDefault(),Bg(t)||e.stopImmediatePropagation())}function ra(e){const{x:t,y:n}=gl(e);if(Vr&&e.buttons===0&&(Vr=!1,Ui("up",e)),!Vr){const{target:r}=e;zc({target:r,x:t,y:n})}Ui("move",e),Cc(),zt.length>0&&e.preventDefault()}function oa(e){const{target:t}=e,{x:n,y:r}=gl(e);ml.clear(),Vr=!1,zt.length>0&&(e.preventDefault(),Bg(t)||e.stopImmediatePropagation()),Ui("up",e),zc({target:t,x:n,y:r}),Cc(),Vi()}function Bg(e){let t=e;for(;t;){if(t.hasAttribute(be.resizeHandle))return!0;t=t.parentElement}return!1}function zc({target:e,x:t,y:n}){zt.splice(0);let r=null;(e instanceof HTMLElement||e instanceof SVGElement)&&(r=e),is.forEach(o=>{const{element:s,hitAreaMargins:i}=o,l=s.getBoundingClientRect(),{bottom:a,left:u,right:c,top:d}=l,f=K1?i.coarse:i.fine;if(t>=u-f&&t<=c+f&&n>=d-f&&n<=a+f){if(r!==null&&document.contains(r)&&s!==r&&!s.contains(r)&&!r.contains(s)&&U1(r,s)>0){let m=r,v=!1;for(;m&&!m.contains(s);){if(V1(m.getBoundingClientRect(),l)){v=!0;break}m=m.parentElement}if(v)return}zt.push(o)}})}function sa(e,t){ml.set(e,t)}function Cc(){let e=!1,t=!1;zt.forEach(r=>{const{direction:o}=r;o==="horizontal"?e=!0:t=!0});let n=0;ml.forEach(r=>{n|=r}),e&&t?na("intersection",n):e?na("horizontal",n):t?na("vertical",n):H1()}let ia=new AbortController;function Vi(){ia.abort(),ia=new AbortController;const e={capture:!0,signal:ia.signal};is.size&&(Vr?(zt.length>0&&Wn.forEach((t,n)=>{const{body:r}=n;t>0&&(r.addEventListener("contextmenu",oa,e),r.addEventListener("pointerleave",ra,e),r.addEventListener("pointermove",ra,e))}),window.addEventListener("pointerup",oa,e),window.addEventListener("pointercancel",oa,e)):Wn.forEach((t,n)=>{const{body:r}=n;t>0&&(r.addEventListener("pointerdown",Q1,e),r.addEventListener("pointermove",ra,e))}))}function Ui(e,t){is.forEach(n=>{const{setResizeHandlerState:r}=n,o=zt.includes(n);r(e,o,t)})}function X1(){const[e,t]=S.useState(0);return S.useCallback(()=>t(n=>n+1),[])}function se(e,t){if(!e)throw console.error(t),Error(t)}function ir(e,t,n=_c){return e.toFixed(n)===t.toFixed(n)?0:e>t?1:-1}function Kt(e,t,n=_c){return ir(e,t,n)===0}function tt(e,t,n){return ir(e,t,n)===0}function q1(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){const o=e[r],s=t[r];if(!tt(o,s,n))return!1}return!0}function Tr({panelConstraints:e,panelIndex:t,size:n}){const r=e[t];se(r!=null,`Panel constraints not found for index ${t}`);let{collapsedSize:o=0,collapsible:s,maxSize:i=100,minSize:l=0}=r;if(ir(n,l)<0)if(s){const a=(o+l)/2;ir(n,a)<0?n=o:n=l}else n=l;return n=Math.min(i,n),n=parseFloat(n.toFixed(_c)),n}function zo({delta:e,initialLayout:t,panelConstraints:n,pivotIndices:r,prevLayout:o,trigger:s}){if(tt(e,0))return t;const i=[...t],[l,a]=r;se(l!=null,"Invalid first pivot index"),se(a!=null,"Invalid second pivot index");let u=0;if(s==="keyboard"){{const d=e<0?a:l,f=n[d];se(f,`Panel constraints not found for index ${d}`);const{collapsedSize:h=0,collapsible:m,minSize:v=0}=f;if(m){const b=t[d];if(se(b!=null,`Previous layout not found for panel index ${d}`),tt(b,h)){const p=v-b;ir(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}{const d=e<0?l:a,f=n[d];se(f,`No panel constraints found for index ${d}`);const{collapsedSize:h=0,collapsible:m,minSize:v=0}=f;if(m){const b=t[d];if(se(b!=null,`Previous layout not found for panel index ${d}`),tt(b,v)){const p=b-h;ir(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}}{const d=e<0?1:-1;let f=e<0?a:l,h=0;for(;;){const v=t[f];se(v!=null,`Previous layout not found for panel index ${f}`);const p=Tr({panelConstraints:n,panelIndex:f,size:100})-v;if(h+=p,f+=d,f<0||f>=n.length)break}const m=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-m:m}{let f=e<0?l:a;for(;f>=0&&f<n.length;){const h=Math.abs(e)-Math.abs(u),m=t[f];se(m!=null,`Previous layout not found for panel index ${f}`);const v=m-h,b=Tr({panelConstraints:n,panelIndex:f,size:v});if(!tt(m,b)&&(u+=m-b,i[f]=b,u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?f--:f++}}if(q1(o,i))return o;{const d=e<0?a:l,f=t[d];se(f!=null,`Previous layout not found for panel index ${d}`);const h=f+u,m=Tr({panelConstraints:n,panelIndex:d,size:h});if(i[d]=m,!tt(m,h)){let v=h-m,p=e<0?a:l;for(;p>=0&&p<n.length;){const g=i[p];se(g!=null,`Previous layout not found for panel index ${p}`);const y=g+v,x=Tr({panelConstraints:n,panelIndex:p,size:y});if(tt(g,x)||(v-=x-g,i[p]=x),tt(v,0))break;e>0?p--:p++}}}const c=i.reduce((d,f)=>f+d,0);return tt(c,100)?i:o}function Z1({layout:e,panelsArray:t,pivotIndices:n}){let r=0,o=100,s=0,i=0;const l=n[0];se(l!=null,"No pivot index found"),t.forEach((d,f)=>{const{constraints:h}=d,{maxSize:m=100,minSize:v=0}=h;f===l?(r=v,o=m):(s+=v,i+=m)});const a=Math.min(o,100-s),u=Math.max(r,100-i),c=e[l];return{valueMax:a,valueMin:u,valueNow:c}}function ls(e,t=document){return Array.from(t.querySelectorAll(`[${be.resizeHandleId}][data-panel-group-id="${e}"]`))}function Vg(e,t,n=document){const o=ls(e,n).findIndex(s=>s.getAttribute(be.resizeHandleId)===t);return o??null}function Ug(e,t,n){const r=Vg(e,t,n);return r!=null?[r,r+1]:[-1,-1]}function Wg(e,t=document){var n;if(t instanceof HTMLElement&&(t==null||(n=t.dataset)===null||n===void 0?void 0:n.panelGroupId)==e)return t;const r=t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return r||null}function yl(e,t=document){const n=t.querySelector(`[${be.resizeHandleId}="${e}"]`);return n||null}function J1(e,t,n,r=document){var o,s,i,l;const a=yl(t,r),u=ls(e,r),c=a?u.indexOf(a):-1,d=(o=(s=n[c])===null||s===void 0?void 0:s.id)!==null&&o!==void 0?o:null,f=(i=(l=n[c+1])===null||l===void 0?void 0:l.id)!==null&&i!==void 0?i:null;return[d,f]}function ex({committedValuesRef:e,eagerValuesRef:t,groupId:n,layout:r,panelDataArray:o,panelGroupElement:s,setLayout:i}){S.useRef({didWarnAboutMissingResizeHandle:!1}),Zn(()=>{if(!s)return;const l=ls(n,s);for(let a=0;a<o.length-1;a++){const{valueMax:u,valueMin:c,valueNow:d}=Z1({layout:r,panelsArray:o,pivotIndices:[a,a+1]}),f=l[a];if(f!=null){const h=o[a];se(h,`No panel data found for index "${a}"`),f.setAttribute("aria-controls",h.id),f.setAttribute("aria-valuemax",""+Math.round(u)),f.setAttribute("aria-valuemin",""+Math.round(c)),f.setAttribute("aria-valuenow",d!=null?""+Math.round(d):"")}}return()=>{l.forEach((a,u)=>{a.removeAttribute("aria-controls"),a.removeAttribute("aria-valuemax"),a.removeAttribute("aria-valuemin"),a.removeAttribute("aria-valuenow")})}},[n,r,o,s]),S.useEffect(()=>{if(!s)return;const l=t.current;se(l,"Eager values not found");const{panelDataArray:a}=l,u=Wg(n,s);se(u!=null,`No group found for id "${n}"`);const c=ls(n,s);se(c,`No resize handles found for group id "${n}"`);const d=c.map(f=>{const h=f.getAttribute(be.resizeHandleId);se(h,"Resize handle element has no handle id attribute");const[m,v]=J1(n,h,a,s);if(m==null||v==null)return()=>{};const b=p=>{if(!p.defaultPrevented)switch(p.key){case"Enter":{p.preventDefault();const g=a.findIndex(y=>y.id===m);if(g>=0){const y=a[g];se(y,`No panel data found for index ${g}`);const x=r[g],{collapsedSize:I=0,collapsible:z,minSize:_=0}=y.constraints;if(x!=null&&z){const M=zo({delta:tt(x,I)?_-I:I-x,initialLayout:r,panelConstraints:a.map(j=>j.constraints),pivotIndices:Ug(n,h,s),prevLayout:r,trigger:"keyboard"});r!==M&&i(M)}}break}}};return f.addEventListener("keydown",b),()=>{f.removeEventListener("keydown",b)}});return()=>{d.forEach(f=>f())}},[s,e,t,n,r,o,i])}function pf(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function $g(e,t){const n=e==="horizontal",{x:r,y:o}=gl(t);return n?r:o}function tx(e,t,n,r,o){const s=n==="horizontal",i=yl(t,o);se(i,`No resize handle element found for id "${t}"`);const l=i.getAttribute(be.groupId);se(l,"Resize handle element has no group id attribute");let{initialCursorPosition:a}=r;const u=$g(n,e),c=Wg(l,o);se(c,`No group element found for id "${l}"`);const d=c.getBoundingClientRect(),f=s?d.width:d.height;return(u-a)/f*100}function nx(e,t,n,r,o,s){if(Mg(e)){const i=n==="horizontal";let l=0;e.shiftKey?l=100:o!=null?l=o:l=10;let a=0;switch(e.key){case"ArrowDown":a=i?0:l;break;case"ArrowLeft":a=i?-l:0;break;case"ArrowRight":a=i?l:0;break;case"ArrowUp":a=i?0:-l;break;case"End":a=100;break;case"Home":a=-100;break}return a}else return r==null?0:tx(e,t,n,r,s)}function rx({panelDataArray:e}){const t=Array(e.length),n=e.map(s=>s.constraints);let r=0,o=100;for(let s=0;s<e.length;s++){const i=n[s];se(i,`Panel constraints not found for index ${s}`);const{defaultSize:l}=i;l!=null&&(r++,t[s]=l,o-=l)}for(let s=0;s<e.length;s++){const i=n[s];se(i,`Panel constraints not found for index ${s}`);const{defaultSize:l}=i;if(l!=null)continue;const a=e.length-r,u=o/a;r++,t[s]=u,o-=u}return t}function gr(e,t,n){t.forEach((r,o)=>{const s=e[o];se(s,`Panel data not found for index ${o}`);const{callbacks:i,constraints:l,id:a}=s,{collapsedSize:u=0,collapsible:c}=l,d=n[a];if(d==null||r!==d){n[a]=r;const{onCollapse:f,onExpand:h,onResize:m}=i;m&&m(r,d),c&&(f||h)&&(h&&(d==null||Kt(d,u))&&!Kt(r,u)&&h(),f&&(d==null||!Kt(d,u))&&Kt(r,u)&&f())}})}function Bs(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function ox({defaultSize:e,dragState:t,layout:n,panelData:r,panelIndex:o,precision:s=3}){const i=n[o];let l;return i==null?l=e!=null?e.toPrecision(s):"1":r.length===1?l="1":l=i.toPrecision(s),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:t!==null?"none":void 0}}function sx(e,t=10){let n=null;return(...o)=>{n!==null&&clearTimeout(n),n=setTimeout(()=>{e(...o)},t)}}function hf(e){try{if(typeof localStorage<"u")e.getItem=t=>localStorage.getItem(t),e.setItem=(t,n)=>{localStorage.setItem(t,n)};else throw new Error("localStorage not supported in this environment")}catch(t){console.error(t),e.getItem=()=>null,e.setItem=()=>{}}}function Gg(e){return`react-resizable-panels:${e}`}function Kg(e){return e.map(t=>{const{constraints:n,id:r,idIsFromProps:o,order:s}=t;return o?r:s?`${s}:${JSON.stringify(n)}`:JSON.stringify(n)}).sort((t,n)=>t.localeCompare(n)).join(",")}function Yg(e,t){try{const n=Gg(e),r=t.getItem(n);if(r){const o=JSON.parse(r);if(typeof o=="object"&&o!=null)return o}}catch{}return null}function ix(e,t,n){var r,o;const s=(r=Yg(e,n))!==null&&r!==void 0?r:{},i=Kg(t);return(o=s[i])!==null&&o!==void 0?o:null}function lx(e,t,n,r,o){var s;const i=Gg(e),l=Kg(t),a=(s=Yg(e,o))!==null&&s!==void 0?s:{};a[l]={expandToSizes:Object.fromEntries(n.entries()),layout:r};try{o.setItem(i,JSON.stringify(a))}catch(u){console.error(u)}}function gf({layout:e,panelConstraints:t}){const n=[...e],r=n.reduce((s,i)=>s+i,0);if(n.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${n.map(s=>`${s}%`).join(", ")}`);if(!tt(r,100)&&n.length>0)for(let s=0;s<t.length;s++){const i=n[s];se(i!=null,`No layout data found for index ${s}`);const l=100/r*i;n[s]=l}let o=0;for(let s=0;s<t.length;s++){const i=n[s];se(i!=null,`No layout data found for index ${s}`);const l=Tr({panelConstraints:t,panelIndex:s,size:i});i!=l&&(o+=i-l,n[s]=l)}if(!tt(o,0))for(let s=0;s<t.length;s++){const i=n[s];se(i!=null,`No layout data found for index ${s}`);const l=i+o,a=Tr({panelConstraints:t,panelIndex:s,size:l});if(i!==a&&(o-=a-i,n[s]=a,tt(o,0)))break}return n}const ax=100,Co={getItem:e=>(hf(Co),Co.getItem(e)),setItem:(e,t)=>{hf(Co),Co.setItem(e,t)}},mf={};function Qg({autoSaveId:e=null,children:t,className:n="",direction:r,forwardedRef:o,id:s=null,onLayout:i=null,keyboardResizeBy:l=null,storage:a=Co,style:u,tagName:c="div",...d}){const f=Ic(s),h=S.useRef(null),[m,v]=S.useState(null),[b,p]=S.useState([]),g=X1(),y=S.useRef({}),x=S.useRef(new Map),I=S.useRef(0),z=S.useRef({autoSaveId:e,direction:r,dragState:m,id:f,keyboardResizeBy:l,onLayout:i,storage:a}),_=S.useRef({layout:b,panelDataArray:[],panelDataArrayChanged:!1});S.useRef({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),S.useImperativeHandle(o,()=>({getId:()=>z.current.id,getLayout:()=>{const{layout:L}=_.current;return L},setLayout:L=>{const{onLayout:V}=z.current,{layout:$,panelDataArray:K}=_.current,G=gf({layout:L,panelConstraints:K.map(Z=>Z.constraints)});pf($,G)||(p(G),_.current.layout=G,V&&V(G),gr(K,G,y.current))}}),[]),Zn(()=>{z.current.autoSaveId=e,z.current.direction=r,z.current.dragState=m,z.current.id=f,z.current.onLayout=i,z.current.storage=a}),ex({committedValuesRef:z,eagerValuesRef:_,groupId:f,layout:b,panelDataArray:_.current.panelDataArray,setLayout:p,panelGroupElement:h.current}),S.useEffect(()=>{const{panelDataArray:L}=_.current;if(e){if(b.length===0||b.length!==L.length)return;let V=mf[e];V==null&&(V=sx(lx,ax),mf[e]=V);const $=[...L],K=new Map(x.current);V(e,$,K,b,a)}},[e,b,a]),S.useEffect(()=>{});const M=S.useCallback(L=>{const{onLayout:V}=z.current,{layout:$,panelDataArray:K}=_.current;if(L.constraints.collapsible){const G=K.map(Q=>Q.constraints),{collapsedSize:Z=0,panelSize:ne,pivotIndices:C}=Hn(K,L,$);if(se(ne!=null,`Panel size not found for panel "${L.id}"`),!Kt(ne,Z)){x.current.set(L.id,ne);const X=br(K,L)===K.length-1?ne-Z:Z-ne,q=zo({delta:X,initialLayout:$,panelConstraints:G,pivotIndices:C,prevLayout:$,trigger:"imperative-api"});Bs($,q)||(p(q),_.current.layout=q,V&&V(q),gr(K,q,y.current))}}},[]),j=S.useCallback((L,V)=>{const{onLayout:$}=z.current,{layout:K,panelDataArray:G}=_.current;if(L.constraints.collapsible){const Z=G.map(oe=>oe.constraints),{collapsedSize:ne=0,panelSize:C=0,minSize:Q=0,pivotIndices:X}=Hn(G,L,K),q=V??Q;if(Kt(C,ne)){const oe=x.current.get(L.id),ce=oe!=null&&oe>=q?oe:q,ue=br(G,L)===G.length-1?C-ce:ce-C,ee=zo({delta:ue,initialLayout:K,panelConstraints:Z,pivotIndices:X,prevLayout:K,trigger:"imperative-api"});Bs(K,ee)||(p(ee),_.current.layout=ee,$&&$(ee),gr(G,ee,y.current))}}},[]),A=S.useCallback(L=>{const{layout:V,panelDataArray:$}=_.current,{panelSize:K}=Hn($,L,V);return se(K!=null,`Panel size not found for panel "${L.id}"`),K},[]),R=S.useCallback((L,V)=>{const{panelDataArray:$}=_.current,K=br($,L);return ox({defaultSize:V,dragState:m,layout:b,panelData:$,panelIndex:K})},[m,b]),U=S.useCallback(L=>{const{layout:V,panelDataArray:$}=_.current,{collapsedSize:K=0,collapsible:G,panelSize:Z}=Hn($,L,V);return se(Z!=null,`Panel size not found for panel "${L.id}"`),G===!0&&Kt(Z,K)},[]),W=S.useCallback(L=>{const{layout:V,panelDataArray:$}=_.current,{collapsedSize:K=0,collapsible:G,panelSize:Z}=Hn($,L,V);return se(Z!=null,`Panel size not found for panel "${L.id}"`),!G||ir(Z,K)>0},[]),w=S.useCallback(L=>{const{panelDataArray:V}=_.current;V.push(L),V.sort(($,K)=>{const G=$.order,Z=K.order;return G==null&&Z==null?0:G==null?-1:Z==null?1:G-Z}),_.current.panelDataArrayChanged=!0,g()},[g]);Zn(()=>{if(_.current.panelDataArrayChanged){_.current.panelDataArrayChanged=!1;const{autoSaveId:L,onLayout:V,storage:$}=z.current,{layout:K,panelDataArray:G}=_.current;let Z=null;if(L){const C=ix(L,G,$);C&&(x.current=new Map(Object.entries(C.expandToSizes)),Z=C.layout)}Z==null&&(Z=rx({panelDataArray:G}));const ne=gf({layout:Z,panelConstraints:G.map(C=>C.constraints)});pf(K,ne)||(p(ne),_.current.layout=ne,V&&V(ne),gr(G,ne,y.current))}}),Zn(()=>{const L=_.current;return()=>{L.layout=[]}},[]);const P=S.useCallback(L=>{let V=!1;const $=h.current;return $&&window.getComputedStyle($,null).getPropertyValue("direction")==="rtl"&&(V=!0),function(G){G.preventDefault();const Z=h.current;if(!Z)return()=>null;const{direction:ne,dragState:C,id:Q,keyboardResizeBy:X,onLayout:q}=z.current,{layout:oe,panelDataArray:ce}=_.current,{initialLayout:Ie}=C??{},ue=Ug(Q,L,Z);let ee=nx(G,L,ne,C,X,Z);const ze=ne==="horizontal";ze&&V&&(ee=-ee);const vt=ce.map(ln=>ln.constraints),xt=zo({delta:ee,initialLayout:Ie??oe,panelConstraints:vt,pivotIndices:ue,prevLayout:oe,trigger:Mg(G)?"keyboard":"mouse-or-touch"}),Bt=!Bs(oe,xt);(Tg(G)||Ag(G))&&I.current!=ee&&(I.current=ee,!Bt&&ee!==0?ze?sa(L,ee<0?Dg:Lg):sa(L,ee<0?Og:Hg):sa(L,0)),Bt&&(p(xt),_.current.layout=xt,q&&q(xt),gr(ce,xt,y.current))}},[]),N=S.useCallback((L,V)=>{const{onLayout:$}=z.current,{layout:K,panelDataArray:G}=_.current,Z=G.map(oe=>oe.constraints),{panelSize:ne,pivotIndices:C}=Hn(G,L,K);se(ne!=null,`Panel size not found for panel "${L.id}"`);const X=br(G,L)===G.length-1?ne-V:V-ne,q=zo({delta:X,initialLayout:K,panelConstraints:Z,pivotIndices:C,prevLayout:K,trigger:"imperative-api"});Bs(K,q)||(p(q),_.current.layout=q,$&&$(q),gr(G,q,y.current))},[]),H=S.useCallback((L,V)=>{const{layout:$,panelDataArray:K}=_.current,{collapsedSize:G=0,collapsible:Z}=V,{collapsedSize:ne=0,collapsible:C,maxSize:Q=100,minSize:X=0}=L.constraints,{panelSize:q}=Hn(K,L,$);q!=null&&(Z&&C&&Kt(q,G)?Kt(G,ne)||N(L,ne):q<X?N(L,X):q>Q&&N(L,Q))},[N]),F=S.useCallback((L,V)=>{const{direction:$}=z.current,{layout:K}=_.current;if(!h.current)return;const G=yl(L,h.current);se(G,`Drag handle element not found for id "${L}"`);const Z=$g($,V);v({dragHandleId:L,dragHandleRect:G.getBoundingClientRect(),initialCursorPosition:Z,initialLayout:K})},[]),E=S.useCallback(()=>{v(null)},[]),T=S.useCallback(L=>{const{panelDataArray:V}=_.current,$=br(V,L);$>=0&&(V.splice($,1),delete y.current[L.id],_.current.panelDataArrayChanged=!0,g())},[g]),O=S.useMemo(()=>({collapsePanel:M,direction:r,dragState:m,expandPanel:j,getPanelSize:A,getPanelStyle:R,groupId:f,isPanelCollapsed:U,isPanelExpanded:W,reevaluatePanelConstraints:H,registerPanel:w,registerResizeHandle:P,resizePanel:N,startDragging:F,stopDragging:E,unregisterPanel:T,panelGroupElement:h.current}),[M,m,r,j,A,R,f,U,W,H,w,P,N,F,E,T]),B={display:"flex",flexDirection:r==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return S.createElement(hl.Provider,{value:O},S.createElement(c,{...d,children:t,className:n,id:s,ref:h,style:{...B,...u},[be.group]:"",[be.groupDirection]:r,[be.groupId]:f}))}const hu=S.forwardRef((e,t)=>S.createElement(Qg,{...e,forwardedRef:t}));Qg.displayName="PanelGroup";hu.displayName="forwardRef(PanelGroup)";function br(e,t){return e.findIndex(n=>n===t||n.id===t.id)}function Hn(e,t,n){const r=br(e,t),s=r===e.length-1?[r-1,r]:[r,r+1],i=n[r];return{...t.constraints,panelSize:i,pivotIndices:s}}function ux({disabled:e,handleId:t,resizeHandler:n,panelGroupElement:r}){S.useEffect(()=>{if(e||n==null||r==null)return;const o=yl(t,r);if(o==null)return;const s=i=>{if(!i.defaultPrevented)switch(i.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{i.preventDefault(),n(i);break}case"F6":{i.preventDefault();const l=o.getAttribute(be.groupId);se(l,`No group element found for id "${l}"`);const a=ls(l,r),u=Vg(l,t,r);se(u!==null,`No resize element found for id "${t}"`);const c=i.shiftKey?u>0?u-1:a.length-1:u+1<a.length?u+1:0;a[c].focus();break}}};return o.addEventListener("keydown",s),()=>{o.removeEventListener("keydown",s)}},[r,e,t,n])}function gu({children:e=null,className:t="",disabled:n=!1,hitAreaMargins:r,id:o,onBlur:s,onClick:i,onDragging:l,onFocus:a,onPointerDown:u,onPointerUp:c,style:d={},tabIndex:f=0,tagName:h="div",...m}){var v,b;const p=S.useRef(null),g=S.useRef({onClick:i,onDragging:l,onPointerDown:u,onPointerUp:c});S.useEffect(()=>{g.current.onClick=i,g.current.onDragging=l,g.current.onPointerDown=u,g.current.onPointerUp=c});const y=S.useContext(hl);if(y===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:x,groupId:I,registerResizeHandle:z,startDragging:_,stopDragging:M,panelGroupElement:j}=y,A=Ic(o),[R,U]=S.useState("inactive"),[W,w]=S.useState(!1),[P,N]=S.useState(null),H=S.useRef({state:R});Zn(()=>{H.current.state=R}),S.useEffect(()=>{if(n)N(null);else{const O=z(A);N(()=>O)}},[n,A,z]);const F=(v=r==null?void 0:r.coarse)!==null&&v!==void 0?v:15,E=(b=r==null?void 0:r.fine)!==null&&b!==void 0?b:5;S.useEffect(()=>{if(n||P==null)return;const O=p.current;se(O,"Element ref not attached");let B=!1;return Y1(A,O,x,{coarse:F,fine:E},(V,$,K)=>{if(!$){U("inactive");return}switch(V){case"down":{U("drag"),B=!1,se(K,'Expected event to be defined for "down" action'),_(A,K);const{onDragging:G,onPointerDown:Z}=g.current;G==null||G(!0),Z==null||Z();break}case"move":{const{state:G}=H.current;B=!0,G!=="drag"&&U("hover"),se(K,'Expected event to be defined for "move" action'),P(K);break}case"up":{U("hover"),M();const{onClick:G,onDragging:Z,onPointerUp:ne}=g.current;Z==null||Z(!1),ne==null||ne(),B||G==null||G();break}}})},[F,x,n,E,z,A,P,_,M]),ux({disabled:n,handleId:A,resizeHandler:P,panelGroupElement:j});const T={touchAction:"none",userSelect:"none"};return S.createElement(h,{...m,children:e,className:t,id:o,onBlur:()=>{w(!1),s==null||s()},onFocus:()=>{w(!0),a==null||a()},ref:p,role:"separator",style:{...T,...d},tabIndex:f,[be.groupDirection]:x,[be.groupId]:I,[be.resizeHandle]:"",[be.resizeHandleActive]:R==="drag"?"pointer":W?"keyboard":void 0,[be.resizeHandleEnabled]:!n,[be.resizeHandleId]:A,[be.resizeHandleState]:R})}gu.displayName="PanelResizeHandle";const cx={},yf=e=>{let t;const n=new Set,r=(c,d)=>{const f=typeof c=="function"?c(t):c;if(!Object.is(f,t)){const h=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,h))}},o=()=>t,a={setState:r,getState:o,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(cx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,o,a);return a},Xg=e=>e?yf(e):yf;var qg={exports:{}},Zg={},Jg={exports:{}},em={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=S;function dx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fx=typeof Object.is=="function"?Object.is:dx,px=Jr.useState,hx=Jr.useEffect,gx=Jr.useLayoutEffect,mx=Jr.useDebugValue;function yx(e,t){var n=t(),r=px({inst:{value:n,getSnapshot:t}}),o=r[0].inst,s=r[1];return gx(function(){o.value=n,o.getSnapshot=t,la(o)&&s({inst:o})},[e,n,t]),hx(function(){return la(o)&&s({inst:o}),e(function(){la(o)&&s({inst:o})})},[e]),mx(n),n}function la(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fx(e,n)}catch{return!0}}function vx(e,t){return t()}var xx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vx:yx;em.useSyncExternalStore=Jr.useSyncExternalStore!==void 0?Jr.useSyncExternalStore:xx;Jg.exports=em;var wx=Jg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=S,bx=wx;function Sx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ex=typeof Object.is=="function"?Object.is:Sx,kx=bx.useSyncExternalStore,jx=vl.useRef,Nx=vl.useEffect,_x=vl.useMemo,Ix=vl.useDebugValue;Zg.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var s=jx(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=_x(function(){function a(h){if(!u){if(u=!0,c=h,h=r(h),o!==void 0&&i.hasValue){var m=i.value;if(o(m,h))return d=m}return d=h}if(m=d,Ex(c,h))return m;var v=r(h);return o!==void 0&&o(m,v)?(c=h,m):(c=h,d=v)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return a(t())},f===null?void 0:function(){return a(f())}]},[t,n,r,o]);var l=kx(e,s[0],s[1]);return Nx(function(){i.hasValue=!0,i.value=l},[l]),Ix(l),l};qg.exports=Zg;var zx=qg.exports;const tm=xp(zx),nm={},{useDebugValue:Cx}=D,{useSyncExternalStoreWithSelector:Fx}=tm;let vf=!1;const Px=e=>e;function Mx(e,t=Px,n){(nm?"production":void 0)!=="production"&&n&&!vf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),vf=!0);const r=Fx(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Cx(r),r}const xf=e=>{(nm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Xg(e):e,n=(r,o)=>Mx(t,r,o);return Object.assign(n,t),n},Tx=e=>e?xf(e):xf,Ax=`# Infinite Spatial IDE

A prototype of a spatial, infinitely-zoomable code editor where files and functions live on a 2D map instead of a file tree.

It has **two views** (toggle top-left of the canvas):

1. **📁 Project Map** _(default)_ — the **real directory** of this repo, rendered as nodes clustered by folder. Click a file to reveal its **actual import dependencies** as directional arrows. This graph is generated from the live source tree, not mock data (see below).
2. **◯ Functions** — a mock spatial demo: single-clicking a function reveals its call graph as live edges and dynamic "port" connectors on the file's edges.

> Prototype only — there is **no backend**. The Functions view is driven by a hardcoded mock graph in [\`src/store.js\`](src/store.js); the Project Map is derived at build time from the real files via Vite's \`import.meta.glob\` ([\`src/projectGraph.js\`](src/projectGraph.js)).

## Stack

| Concern        | Library                  |
| -------------- | ------------------------ |
| Build/dev      | Vite + React 18          |
| Styling        | Tailwind CSS             |
| Global state   | zustand                  |
| Map canvas     | reactflow (v11)          |
| Resizable UI   | react-resizable-panels   |

## Getting started

\`\`\`bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
\`\`\`

## Layout

\`\`\`
┌───────────────┬──────────────────────────────────────┐
│ File Explorer │   ⌕ Search        ★ Save view         │
├───────────────┤                                       │
│   Bookmarks   │            Map View (70%)             │
│   Manager     │        infinite zoomable canvas    + │
└───────────────┴──────────────────────────────────────┘
   Left col 30%                Right col 70%
\`\`\`

Both the horizontal split (30/70) and the left column's vertical split (50/50) are drag-resizable.

## Project Map: real directory → dependency graph

The headline view reflects the **actual repository**, with no backend and no manual data entry:

- [\`src/projectGraph.js\`](src/projectGraph.js) calls \`import.meta.glob('/src/**', { query: '?raw', eager: true })\` so Vite enumerates every file in the tree and hands over its source text at build time.
- It parses real \`import\` / \`require\` statements, resolves the relative specifiers to actual files, and emits \`edges[] = { source, target }\` (source **imports / affects** target). Bare imports (\`react\`, \`zustand\`, …) are ignored since they aren't directory files.
- Files are laid out in **folder clusters** — every file in the same folder sits inside the same translucent rectangle, so siblings are physically close.

**Interaction** ([\`ProjectFileNode\`](src/components/nodes/ProjectFileNode.jsx) + [\`getProjectFocus\`](src/store.js)): click a file and the store splits its edges into two directions:

| Direction      | Meaning                                  | Arrow                                   | Colour |
| -------------- | ---------------------------------------- | --------------------------------------- | ------ |
| **downstream** | files this file affects / imports        | exits the selected file's **right** →   | green  |
| **upstream**   | files that affect / import this file     | enters the selected file's **left** ←   | amber  |

Every uninvolved file fades to low opacity so attention stays on the selected file and its neighbours. The **File Explorer** is mode-aware: in Project Map it lists the real directory, and clicking an entry selects + frames that file on the map.

Edges use a custom [\`AroundEdge\`](src/components/edges/AroundEdge.jsx) that bows **around** node bodies rather than slicing through them, and gives each sibling edge an increasing "lane" offset so a fan of dependencies stays readable even when nodes are close.

## Opening files: editor & asset viewers

**Double-click** a file node (or single-click won't trigger it — single-click is reserved for dependency tracing) to open a small **floating, draggable panel** ([\`FloatingEditor\`](src/components/FloatingEditor.jsx)) whose contents depend on the file type:

| File kind | Panel |
| --------- | ----- |
| **text / code** (\`.js\`, \`.jsx\`, \`.css\`, \`.json\`, \`.md\`, …) | an **editable** code editor showing the real source (pulled via \`?raw\`). Edits are kept **in-memory** in the store (\`fileEdits\`) — no backend, so they reset on reload; **Revert** restores the original. |
| **image** (\`.svg\`, \`.png\`, …) | an image viewer (\`<img>\` from the file's \`?url\`). Demo node: \`src/assets/logo.svg\`. |
| **audio** (\`.wav\`, \`.mp3\`, …) | an audio player with a Play button. Demo node: \`src/assets/chime.wav\`. |

Asset files are enumerated with a second \`import.meta.glob(..., { query: '?url' })\` so images/audio resolve to servable URLs; [\`kindOf\`](src/projectGraph.js) classifies each file by extension.

## The core idea (Functions view): focus → ports

The store holds a flat call list (\`source → target\`). When you single-click a function,
[\`getFocusGraph\`](src/store.js) classifies every related call by comparing the parent \`fileId\`:

| Relationship              | Result                                    |
| ------------------------- | ----------------------------------------- |
| same-file caller          | internal **upstream** edge                |
| same-file callee          | internal **downstream** edge              |
| **other-file** caller     | **left port** (something calls in)        |
| **other-file** callee     | **right port** (this function calls out)  |

[\`MapView.jsx\`](src/components/MapView.jsx) derives port nodes as children of the focused file,
positions them on the left/right edges, colours them by the crossing file (\`FILE_COLORS\`), draws
animated edges, and dims all sibling functions.

**Try it:** click \`validateToken()\` in \`auth.service.ts\` — it has a left port (called from
\`api.client.ts\`), a right port (it calls \`db.repository.ts\`), and an internal caller, so it
exercises every path at once.

## Custom node types

- **Subspace** (translucent rectangle) — visual grouping. Top-right toolbar: Description · Colour · Expand (zooms it to fill the map).
- **File** (square) — movable container that auto-resizes (\`getFileSize\`) to enclose the function pills inside it. Double-click opens the terminal editor modal.
- **Function** (pill) — lives inside a file; single-click focuses it.
- **Tunable** (square variant) — a tweakable configuration value.

## Interactions

| Action                                | Result                                                              |
| ------------------------------------- | ------------------------------------------------------------------ |
| Toggle **📁 Project Map / ◯ Functions** | Switches between the real directory graph and the mock demo       |
| Click a file in **Project Map**       | Reveals dependency arrows (green = affects, amber = affected-by), dims the rest |
| **Double-click** a file in Project Map | Opens the floating panel — code editor (text), image viewer, or audio player |
| Click a file in the Explorer          | Highlights and pans/zooms the map to it                            |
| Single-click a function               | Focus: dimming, internal edges, dynamic ports                      |
| Double-click a file (node or list)    | Opens the terminal editor modal (Esc to close)                     |
| **★ Save view**                       | Saves the current viewport as a bookmark                           |
| Double-click a bookmark               | Snapshots current view as a \`↩ Return point\`, flies to the bookmark, focuses its object |
| Right-click canvas / **+** FAB        | Create Subspace, File (prompts folder), or Function (pick file)    |
| Search bar                            | Jump to any file / function / subspace by name                     |

## Project structure

\`\`\`
src/
├─ store.js                 # state + both graphs' logic (start here)
├─ projectGraph.js          # builds the REAL directory graph via import.meta.glob
├─ App.jsx
├─ assets/                  # demo non-text nodes
│  ├─ logo.svg              #   image viewer demo
│  └─ chime.wav             #   audio player demo
└─ components/
   ├─ Layout.jsx            # 30/70 split, left column split 50/50
   ├─ FileExplorer.jsx      # mode-aware (real dir | mock files)
   ├─ BookmarkManager.jsx
   ├─ MapView.jsx           # both views: node/edge/port derivation, click logic, search, menu
   ├─ TerminalModal.jsx
   ├─ FloatingEditor.jsx    # draggable text editor / image / audio panel
   ├─ edges/
   │  └─ AroundEdge.jsx     # curved edge that routes around nodes
   └─ nodes/
      ├─ ClusterNode.jsx       # Project Map: folder background
      ├─ ProjectFileNode.jsx   # Project Map: a real file + dependency highlighting
      ├─ SubspaceNode.jsx
      ├─ FileNode.jsx
      ├─ FunctionNode.jsx
      ├─ TunableNode.jsx
      └─ PortNode.jsx
\`\`\`

## Known prototype limitations

- **Project Map is build-time** — \`import.meta.glob('?raw', { eager: true })\` inlines every file's source into the bundle to parse imports client-side (no backend). Great for a prototype; for a large repo you'd move this to a small build script or dev-server endpoint. In \`dev\` it re-globs on add/remove of files via HMR.
- **Import parsing is regex-based** — it catches \`import … from '…'\`, bare \`import '…'\`, dynamic \`import('…')\` and \`require('…')\`, resolving relative paths only. It does not follow path aliases or \`package.json\` exports.
- **No cross-file drag-reparenting** (Functions view) — functions are clamped to their parent file (\`extent: 'parent'\`). Files auto-grow to contain their functions, but a function can't yet be dragged from one file into another.
- Node positions commit to the store on every drag frame (fine at this scale; would want a drag-end debounce for large graphs).
- Creation flows use \`window.prompt\` to stay dependency-free — swap for a real modal in production.
`,Rx=`<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinite Spatial IDE</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"><\/script>
  </body>
</html>
`,Dx=`{
  "name": "infinite-spatial-ide",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "infinite-spatial-ide",
      "version": "0.1.0",
      "dependencies": {
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-resizable-panels": "^2.1.7",
        "reactflow": "^11.11.4",
        "zustand": "^4.5.5"
      },
      "devDependencies": {
        "@types/react": "^18.3.12",
        "@types/react-dom": "^18.3.1",
        "@vitejs/plugin-react": "^4.3.4",
        "autoprefixer": "^10.4.20",
        "postcss": "^8.4.49",
        "tailwindcss": "^3.4.17",
        "vite": "^5.4.11"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.7.tgz",
      "integrity": "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.7.tgz",
      "integrity": "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helpers": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.7.tgz",
      "integrity": "sha512-DkXD5OJQaAQIdZ1bt3UZdEnHAn9Imd3IVBdX03UFe+ony9Ojw5pzr9YVKGDY1jt+Gcn/FnGkNf8r+Vj5NOJWtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.29.7.tgz",
      "integrity": "sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.29.7.tgz",
      "integrity": "sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.29.7.tgz",
      "integrity": "sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.29.7.tgz",
      "integrity": "sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.29.7.tgz",
      "integrity": "sha512-G7sHYigPY17oO5SYWnfD/0MTBwVR781S/JI643e/JhUYgVgWE/61SoW3NH9KWUKyKq5LVh3npif99Wkt6j86Jw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.29.7.tgz",
      "integrity": "sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.7.tgz",
      "integrity": "sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.7.tgz",
      "integrity": "sha512-hnORnjP/1P/zFEndoeX+n+t1RwWRJiJpM/jO7FW32Kn9r5+sJB2JWOdYo4L6k78j15eCwY3Gm/7364B1EMwtNg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.7"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.29.7.tgz",
      "integrity": "sha512-TL0hMc9xzy86VD31nUiwzd5otRAcyEPcsegCxolO0PvcXuH1v0kECe/UIznYFihpkvU5wg/jk4v0TTEFfm53fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.29.7.tgz",
      "integrity": "sha512-06IyK09H3wi4cGbhDBwp5gUGo0IKtnYa8tyTiephirPCK6fbobVGiXMMI5zLQ4aKEYP3wZ3ArU44o+8KMrSG/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.29.7.tgz",
      "integrity": "sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.7.tgz",
      "integrity": "sha512-EhlfNQtZ+NK22w5BM61ciuiq1m58ed33Wr1Xan//ZRTy6hgjnwyCffRYwzsGXdASJSUJ1guZILsErh1eQcl+zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.7",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.7.tgz",
      "integrity": "sha512-4zBIxpPzowiZpusoFkyGVwakdRJUyuH5PxQ/PrqghfdFWWasvnCdPfQXHrenDai+gyLARulZjZowCOj6fjT4pA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@reactflow/background": {
      "version": "11.3.14",
      "resolved": "https://registry.npmjs.org/@reactflow/background/-/background-11.3.14.tgz",
      "integrity": "sha512-Gewd7blEVT5Lh6jqrvOgd4G6Qk17eGKQfsDXgyRSqM+CTwDqRldG2LsWN4sNeno6sbqVIC2fZ+rAUBFA9ZEUDA==",
      "license": "MIT",
      "dependencies": {
        "@reactflow/core": "11.11.4",
        "classcat": "^5.0.3",
        "zustand": "^4.4.1"
      },
      "peerDependencies": {
        "react": ">=17",
        "react-dom": ">=17"
      }
    },
    "node_modules/@reactflow/controls": {
      "version": "11.2.14",
      "resolved": "https://registry.npmjs.org/@reactflow/controls/-/controls-11.2.14.tgz",
      "integrity": "sha512-MiJp5VldFD7FrqaBNIrQ85dxChrG6ivuZ+dcFhPQUwOK3HfYgX2RHdBua+gx+40p5Vw5It3dVNp/my4Z3jF0dw==",
      "license": "MIT",
      "dependencies": {
        "@reactflow/core": "11.11.4",
        "classcat": "^5.0.3",
        "zustand": "^4.4.1"
      },
      "peerDependencies": {
        "react": ">=17",
        "react-dom": ">=17"
      }
    },
    "node_modules/@reactflow/core": {
      "version": "11.11.4",
      "resolved": "https://registry.npmjs.org/@reactflow/core/-/core-11.11.4.tgz",
      "integrity": "sha512-H4vODklsjAq3AMq6Np4LE12i1I4Ta9PrDHuBR9GmL8uzTt2l2jh4CiQbEMpvMDcp7xi4be0hgXj+Ysodde/i7Q==",
      "license": "MIT",
      "dependencies": {
        "@types/d3": "^7.4.0",
        "@types/d3-drag": "^3.0.1",
        "@types/d3-selection": "^3.0.3",
        "@types/d3-zoom": "^3.0.1",
        "classcat": "^5.0.3",
        "d3-drag": "^3.0.0",
        "d3-selection": "^3.0.0",
        "d3-zoom": "^3.0.0",
        "zustand": "^4.4.1"
      },
      "peerDependencies": {
        "react": ">=17",
        "react-dom": ">=17"
      }
    },
    "node_modules/@reactflow/minimap": {
      "version": "11.7.14",
      "resolved": "https://registry.npmjs.org/@reactflow/minimap/-/minimap-11.7.14.tgz",
      "integrity": "sha512-mpwLKKrEAofgFJdkhwR5UQ1JYWlcAAL/ZU/bctBkuNTT1yqV+y0buoNVImsRehVYhJwffSWeSHaBR5/GJjlCSQ==",
      "license": "MIT",
      "dependencies": {
        "@reactflow/core": "11.11.4",
        "@types/d3-selection": "^3.0.3",
        "@types/d3-zoom": "^3.0.1",
        "classcat": "^5.0.3",
        "d3-selection": "^3.0.0",
        "d3-zoom": "^3.0.0",
        "zustand": "^4.4.1"
      },
      "peerDependencies": {
        "react": ">=17",
        "react-dom": ">=17"
      }
    },
    "node_modules/@reactflow/node-resizer": {
      "version": "2.2.14",
      "resolved": "https://registry.npmjs.org/@reactflow/node-resizer/-/node-resizer-2.2.14.tgz",
      "integrity": "sha512-fwqnks83jUlYr6OHcdFEedumWKChTHRGw/kbCxj0oqBd+ekfs+SIp4ddyNU0pdx96JIm5iNFS0oNrmEiJbbSaA==",
      "license": "MIT",
      "dependencies": {
        "@reactflow/core": "11.11.4",
        "classcat": "^5.0.4",
        "d3-drag": "^3.0.0",
        "d3-selection": "^3.0.0",
        "zustand": "^4.4.1"
      },
      "peerDependencies": {
        "react": ">=17",
        "react-dom": ">=17"
      }
    },
    "node_modules/@reactflow/node-toolbar": {
      "version": "1.3.14",
      "resolved": "https://registry.npmjs.org/@reactflow/node-toolbar/-/node-toolbar-1.3.14.tgz",
      "integrity": "sha512-rbynXQnH/xFNu4P9H+hVqlEUafDCkEoCy0Dg9mG22Sg+rY/0ck6KkrAQrYrTgXusd+cEJOMK0uOOFCK2/5rSGQ==",
      "license": "MIT",
      "dependencies": {
        "@reactflow/core": "11.11.4",
        "classcat": "^5.0.3",
        "zustand": "^4.4.1"
      },
      "peerDependencies": {
        "react": ">=17",
        "react-dom": ">=17"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.27",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.27.tgz",
      "integrity": "sha512-+d0F4MKMCbeVUJwG96uQ4SgAznZNSq93I3V+9NHA4OpvqG8mRCpGdKmK8l/dl02h2CCDHwW2FqilnTyDcAnqjA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.62.2.tgz",
      "integrity": "sha512-6o7ZLZK+BeenkZCFNDXqpbjw9bD6nuWonvS/lwQJp7NoVVxm6p3qE7qQ5jGuBjiFsgvqjD8mZAU5oWxTmbOeOg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.62.2.tgz",
      "integrity": "sha512-BaH7BllCACHoH1LguOU56UItGfUWjujlO65kS9LAodViaN4bwIKd7oeW/ZHJ/4ljr/7MIiENnNy3HJ0zXv8Zkw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.62.2.tgz",
      "integrity": "sha512-v39RCCvj4He82I9sFmk+M1VZ0PLM9sfsLVikjfx2hYBNALhrrOR2D3JjQA6AhlaSOgcR+RzrKY7e1+bT6SUO/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.62.2.tgz",
      "integrity": "sha512-yl0y2vq3S3lHeuXhEdss6TWfKW8vkujImO12tn4ZkG/4oghr09LvdYm2RElVjokTQiUvDUGXLGsYeLqUMCKpGA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.62.2.tgz",
      "integrity": "sha512-tT4pvt4qXD+vEoezupCWi+a1F0vvDiksiHc+PxRlYTOH1I6/X4id9jPxTP+Fg+545euaFT1jJVs4CEdHZAU1vw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.62.2.tgz",
      "integrity": "sha512-6nU5F2wCW+qvCBhTn1pdIU3bzsIoF7EUwsCDRxilWGprQR6yd508YnH9+OKFCwpfS8pjZqDUmnCAr7exax0XCg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.62.2.tgz",
      "integrity": "sha512-n1GJHPOvpIfhi3TmrCeh6S6URt9BFCt0KQE3qvexyGCTAKpR4Lg+eWvNZEqu7epxwus/8ElT3hacYEucm49SZg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.62.2.tgz",
      "integrity": "sha512-JqgflS8wEB+UXV/vS1RpRbifGBeN4D5lz8D8oOFbFZw4vedvdOgCFAjfBmIMdW3yL10XpQQ0Ambepw6MXrhOnA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.62.2.tgz",
      "integrity": "sha512-wnFJkogWvN4jm/hQRF2UBaeUmk20j5+DmHvoyWii2b8HJDyvz1MF2OU/6ynXt2KR63rbZLWkFpoytpdc/yBuSA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.62.2.tgz",
      "integrity": "sha512-HVu2bp0zhvJ8xHEV9+UUs7S90VadmBSY3LcIMvozbPo4AuMGDWlz3ymHLHZPX4hR67TKTt8Qp5PJ5RBg/i+RMQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.62.2.tgz",
      "integrity": "sha512-mQqqAV8QaoSgr9I2fKDLY2BAVvmKjWoGiu/cSYQonsLvtqwEn1E4QYfnCOcp5zoEqNhsDYin1s6jx/VJmrxlZg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-musl": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.62.2.tgz",
      "integrity": "sha512-IxKLoxCQ2IWi6bT2akyDUBGsOImDKB+sPp4EsTmwFQ/fMwpCKm8uLSSgP/Kx/QYUgKis6SEZ5/Nlhup0DIA0PQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.62.2.tgz",
      "integrity": "sha512-Mk5ha2RQSgyFfmYYLkBpPnUk8D8FriBxesO1u9O75X0mHgXL1UQcH5Itl2lurWL2tj0RxV9b9tJgipac0hRY9A==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-musl": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.62.2.tgz",
      "integrity": "sha512-CjvEnqJL/0/TQ3TXX3OPIJ/kmBellrWd4heXUmHeJlTnmwjKpSJzoehLaL6Xk0ZnMHBu9dZuFADNOrtjF4v+2w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.62.2.tgz",
      "integrity": "sha512-1SiZbzwdkaDURsew/tSOrooKiYy7EQGT6m8ufavAi9NEyQb/6VuIxFXAL1fqa4iZe3g4NbNk4P7J32z2tw5Mgg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.62.2.tgz",
      "integrity": "sha512-nQts12zJ3NQRoE6uYljOH89v7szzLDvG2JD/vsX+vGXU8w/At1GowTZ5/7qeFQ8m7L55rpR8Okugnuo5bgjy2Q==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.62.2.tgz",
      "integrity": "sha512-E9/ll019jhPIJgpzfZoIkBGhcz+kKNgVWYRY0zr9srBdPPFVpvOKW8VaJKUbeK+eZXyQF9ltME+Kk6affeaPgg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.62.2.tgz",
      "integrity": "sha512-5BqxR/pshjey51iliyzTD5Xi3EN0aLmQ2lZ3lvefVV9c82BvrLo2/6OT55iifpWBufs6kdwWbuOKS841DrmK9A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.62.2.tgz",
      "integrity": "sha512-uNN83XxQrRAh/w0/pmAfibcwyb6YWt4gP+dpnQKPVJshAloQ785ii8CT8ZCIxkGg9opVsvAlGhFitSm6D1Jjpg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openbsd-x64": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.62.2.tgz",
      "integrity": "sha512-srjEIxSH3LRnJN6THczDHWQplqEMFiAJrTab0msUryh9kwNpkICf3Ea6q6MN/2cZwRFUNx5w+h6Hpi4QuHS6Zg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.62.2.tgz",
      "integrity": "sha512-8hOJnxgbyObnCm5AlRA3A931xX19xq80RjVTKgJOvEKWqJruP/Uf12IbAOaDjjEXYRewwHLfmF0YRIdK3OwKWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.62.2.tgz",
      "integrity": "sha512-mmF4AY1i0hG/bLWUctUq59gtmgaSIRa3cu/A3JFRp/sCNEme2bgDEiDS22P9FbnJB8NJNF4jPJiSP5RHQpUTDg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.62.2.tgz",
      "integrity": "sha512-DZgkknc6jhHrk46V25vbAM0zZkyP0nSDkJB8/dRkLTxv470dOmWDqGoEJl/9A0dFfS7yE3REOwNDxpHwSLSt0Q==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.62.2.tgz",
      "integrity": "sha512-T6xr6ucWSFto+VGajA8YH26LdpHRuP4YLHEKAtCWvJDOlnmWcDZVCI2Jmjr+IFHDlt2zRaTAKE4tfjTaWLgJBg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.62.2.tgz",
      "integrity": "sha512-BfzEnDJOt9T8M989/lA37EcJgat01wLRnoi5dQf3QzOH7jzpqTAzdDbVfRljVr5r+jzKqpbHeyOfAaXxAd0PAA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/d3": {
      "version": "7.4.3",
      "resolved": "https://registry.npmjs.org/@types/d3/-/d3-7.4.3.tgz",
      "integrity": "sha512-lZXZ9ckh5R8uiFVt8ogUNf+pIrK4EsWrx2Np75WvF/eTpJ0FMHNhjXk8CKEx/+gpHbNQyJWehbFaTvqmHWB3ww==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-array": "*",
        "@types/d3-axis": "*",
        "@types/d3-brush": "*",
        "@types/d3-chord": "*",
        "@types/d3-color": "*",
        "@types/d3-contour": "*",
        "@types/d3-delaunay": "*",
        "@types/d3-dispatch": "*",
        "@types/d3-drag": "*",
        "@types/d3-dsv": "*",
        "@types/d3-ease": "*",
        "@types/d3-fetch": "*",
        "@types/d3-force": "*",
        "@types/d3-format": "*",
        "@types/d3-geo": "*",
        "@types/d3-hierarchy": "*",
        "@types/d3-interpolate": "*",
        "@types/d3-path": "*",
        "@types/d3-polygon": "*",
        "@types/d3-quadtree": "*",
        "@types/d3-random": "*",
        "@types/d3-scale": "*",
        "@types/d3-scale-chromatic": "*",
        "@types/d3-selection": "*",
        "@types/d3-shape": "*",
        "@types/d3-time": "*",
        "@types/d3-time-format": "*",
        "@types/d3-timer": "*",
        "@types/d3-transition": "*",
        "@types/d3-zoom": "*"
      }
    },
    "node_modules/@types/d3-array": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/@types/d3-array/-/d3-array-3.2.2.tgz",
      "integrity": "sha512-hOLWVbm7uRza0BYXpIIW5pxfrKe0W+D5lrFiAEYR+pb6w3N2SwSMaJbXdUfSEv+dT4MfHBLtn5js0LAWaO6otw==",
      "license": "MIT"
    },
    "node_modules/@types/d3-axis": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/@types/d3-axis/-/d3-axis-3.0.6.tgz",
      "integrity": "sha512-pYeijfZuBd87T0hGn0FO1vQ/cgLk6E1ALJjfkC0oJ8cbwkZl3TpgS8bVBLZN+2jjGgg38epgxb2zmoGtSfvgMw==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-selection": "*"
      }
    },
    "node_modules/@types/d3-brush": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/@types/d3-brush/-/d3-brush-3.0.6.tgz",
      "integrity": "sha512-nH60IZNNxEcrh6L1ZSMNA28rj27ut/2ZmI3r96Zd+1jrZD++zD3LsMIjWlvg4AYrHn/Pqz4CF3veCxGjtbqt7A==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-selection": "*"
      }
    },
    "node_modules/@types/d3-chord": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/@types/d3-chord/-/d3-chord-3.0.6.tgz",
      "integrity": "sha512-LFYWWd8nwfwEmTZG9PfQxd17HbNPksHBiJHaKuY1XeqscXacsS2tyoo6OdRsjf+NQYeB6XrNL3a25E3gH69lcg==",
      "license": "MIT"
    },
    "node_modules/@types/d3-color": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/@types/d3-color/-/d3-color-3.1.3.tgz",
      "integrity": "sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A==",
      "license": "MIT"
    },
    "node_modules/@types/d3-contour": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/@types/d3-contour/-/d3-contour-3.0.6.tgz",
      "integrity": "sha512-BjzLgXGnCWjUSYGfH1cpdo41/hgdWETu4YxpezoztawmqsvCeep+8QGfiY6YbDvfgHz/DkjeIkkZVJavB4a3rg==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-array": "*",
        "@types/geojson": "*"
      }
    },
    "node_modules/@types/d3-delaunay": {
      "version": "6.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-delaunay/-/d3-delaunay-6.0.4.tgz",
      "integrity": "sha512-ZMaSKu4THYCU6sV64Lhg6qjf1orxBthaC161plr5KuPHo3CNm8DTHiLw/5Eq2b6TsNP0W0iJrUOFscY6Q450Hw==",
      "license": "MIT"
    },
    "node_modules/@types/d3-dispatch": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@types/d3-dispatch/-/d3-dispatch-3.0.7.tgz",
      "integrity": "sha512-5o9OIAdKkhN1QItV2oqaE5KMIiXAvDWBDPrD85e58Qlz1c1kI/J0NcqbEG88CoTwJrYe7ntUCVfeUl2UJKbWgA==",
      "license": "MIT"
    },
    "node_modules/@types/d3-drag": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@types/d3-drag/-/d3-drag-3.0.7.tgz",
      "integrity": "sha512-HE3jVKlzU9AaMazNufooRJ5ZpWmLIoc90A37WU2JMmeq28w1FQqCZswHZ3xR+SuxYftzHq6WU6KJHvqxKzTxxQ==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-selection": "*"
      }
    },
    "node_modules/@types/d3-dsv": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@types/d3-dsv/-/d3-dsv-3.0.7.tgz",
      "integrity": "sha512-n6QBF9/+XASqcKK6waudgL0pf/S5XHPPI8APyMLLUHd8NqouBGLsU8MgtO7NINGtPBtk9Kko/W4ea0oAspwh9g==",
      "license": "MIT"
    },
    "node_modules/@types/d3-ease": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-ease/-/d3-ease-3.0.2.tgz",
      "integrity": "sha512-NcV1JjO5oDzoK26oMzbILE6HW7uVXOHLQvHshBUW4UMdZGfiY6v5BeQwh9a9tCzv+CeefZQHJt5SRgK154RtiA==",
      "license": "MIT"
    },
    "node_modules/@types/d3-fetch": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@types/d3-fetch/-/d3-fetch-3.0.7.tgz",
      "integrity": "sha512-fTAfNmxSb9SOWNB9IoG5c8Hg6R+AzUHDRlsXsDZsNp6sxAEOP0tkP3gKkNSO/qmHPoBFTxNrjDprVHDQDvo5aA==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-dsv": "*"
      }
    },
    "node_modules/@types/d3-force": {
      "version": "3.0.10",
      "resolved": "https://registry.npmjs.org/@types/d3-force/-/d3-force-3.0.10.tgz",
      "integrity": "sha512-ZYeSaCF3p73RdOKcjj+swRlZfnYpK1EbaDiYICEEp5Q6sUiqFaFQ9qgoshp5CzIyyb/yD09kD9o2zEltCexlgw==",
      "license": "MIT"
    },
    "node_modules/@types/d3-format": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-format/-/d3-format-3.0.4.tgz",
      "integrity": "sha512-fALi2aI6shfg7vM5KiR1wNJnZ7r6UuggVqtDA+xiEdPZQwy/trcQaHnwShLuLdta2rTymCNpxYTiMZX/e09F4g==",
      "license": "MIT"
    },
    "node_modules/@types/d3-geo": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@types/d3-geo/-/d3-geo-3.1.0.tgz",
      "integrity": "sha512-856sckF0oP/diXtS4jNsiQw/UuK5fQG8l/a9VVLeSouf1/PPbBE1i1W852zVwKwYCBkFJJB7nCFTbk6UMEXBOQ==",
      "license": "MIT",
      "dependencies": {
        "@types/geojson": "*"
      }
    },
    "node_modules/@types/d3-hierarchy": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/@types/d3-hierarchy/-/d3-hierarchy-3.1.7.tgz",
      "integrity": "sha512-tJFtNoYBtRtkNysX1Xq4sxtjK8YgoWUNpIiUee0/jHGRwqvzYxkq0hGVbbOGSz+JgFxxRu4K8nb3YpG3CMARtg==",
      "license": "MIT"
    },
    "node_modules/@types/d3-interpolate": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-interpolate/-/d3-interpolate-3.0.4.tgz",
      "integrity": "sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-color": "*"
      }
    },
    "node_modules/@types/d3-path": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/@types/d3-path/-/d3-path-3.1.1.tgz",
      "integrity": "sha512-VMZBYyQvbGmWyWVea0EHs/BwLgxc+MKi1zLDCONksozI4YJMcTt8ZEuIR4Sb1MMTE8MMW49v0IwI5+b7RmfWlg==",
      "license": "MIT"
    },
    "node_modules/@types/d3-polygon": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-polygon/-/d3-polygon-3.0.2.tgz",
      "integrity": "sha512-ZuWOtMaHCkN9xoeEMr1ubW2nGWsp4nIql+OPQRstu4ypeZ+zk3YKqQT0CXVe/PYqrKpZAi+J9mTs05TKwjXSRA==",
      "license": "MIT"
    },
    "node_modules/@types/d3-quadtree": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/@types/d3-quadtree/-/d3-quadtree-3.0.6.tgz",
      "integrity": "sha512-oUzyO1/Zm6rsxKRHA1vH0NEDG58HrT5icx/azi9MF1TWdtttWl0UIUsjEQBBh+SIkrpd21ZjEv7ptxWys1ncsg==",
      "license": "MIT"
    },
    "node_modules/@types/d3-random": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/d3-random/-/d3-random-3.0.3.tgz",
      "integrity": "sha512-Imagg1vJ3y76Y2ea0871wpabqp613+8/r0mCLEBfdtqC7xMSfj9idOnmBYyMoULfHePJyxMAw3nWhJxzc+LFwQ==",
      "license": "MIT"
    },
    "node_modules/@types/d3-scale": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@types/d3-scale/-/d3-scale-4.0.9.tgz",
      "integrity": "sha512-dLmtwB8zkAeO/juAMfnV+sItKjlsw2lKdZVVy6LRr0cBmegxSABiLEpGVmSJJ8O08i4+sGR6qQtb6WtuwJdvVw==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-time": "*"
      }
    },
    "node_modules/@types/d3-scale-chromatic": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@types/d3-scale-chromatic/-/d3-scale-chromatic-3.1.0.tgz",
      "integrity": "sha512-iWMJgwkK7yTRmWqRB5plb1kadXyQ5Sj8V/zYlFGMUBbIPKQScw+Dku9cAAMgJG+z5GYDoMjWGLVOvjghDEFnKQ==",
      "license": "MIT"
    },
    "node_modules/@types/d3-selection": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/@types/d3-selection/-/d3-selection-3.0.11.tgz",
      "integrity": "sha512-bhAXu23DJWsrI45xafYpkQ4NtcKMwWnAC/vKrd2l+nxMFuvOT3XMYTIj2opv8vq8AO5Yh7Qac/nSeP/3zjTK0w==",
      "license": "MIT"
    },
    "node_modules/@types/d3-shape": {
      "version": "3.1.8",
      "resolved": "https://registry.npmjs.org/@types/d3-shape/-/d3-shape-3.1.8.tgz",
      "integrity": "sha512-lae0iWfcDeR7qt7rA88BNiqdvPS5pFVPpo5OfjElwNaT2yyekbM0C9vK+yqBqEmHr6lDkRnYNoTBYlAgJa7a4w==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-path": "*"
      }
    },
    "node_modules/@types/d3-time": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-time/-/d3-time-3.0.4.tgz",
      "integrity": "sha512-yuzZug1nkAAaBlBBikKZTgzCeA+k1uy4ZFwWANOfKw5z5LRhV0gNA7gNkKm7HoK+HRN0wX3EkxGk0fpbWhmB7g==",
      "license": "MIT"
    },
    "node_modules/@types/d3-time-format": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/@types/d3-time-format/-/d3-time-format-4.0.3.tgz",
      "integrity": "sha512-5xg9rC+wWL8kdDj153qZcsJ0FWiFt0J5RB6LYUNZjwSnesfblqrI/bJ1wBdJ8OQfncgbJG5+2F+qfqnqyzYxyg==",
      "license": "MIT"
    },
    "node_modules/@types/d3-timer": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-timer/-/d3-timer-3.0.2.tgz",
      "integrity": "sha512-Ps3T8E8dZDam6fUyNiMkekK3XUsaUEik+idO9/YjPtfj2qruF8tFBXS7XhtE4iIXBLxhmLjP3SXpLhVf21I9Lw==",
      "license": "MIT"
    },
    "node_modules/@types/d3-transition": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/@types/d3-transition/-/d3-transition-3.0.9.tgz",
      "integrity": "sha512-uZS5shfxzO3rGlu0cC3bjmMFKsXv+SmZZcgp0KD22ts4uGXp5EVYGzu/0YdwZeKmddhcAccYtREJKkPfXkZuCg==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-selection": "*"
      }
    },
    "node_modules/@types/d3-zoom": {
      "version": "3.0.8",
      "resolved": "https://registry.npmjs.org/@types/d3-zoom/-/d3-zoom-3.0.8.tgz",
      "integrity": "sha512-iqMC4/YlFCSlO8+2Ii1GGGliCAY4XdeG748w5vQUbevlbDu0zSjH/+jojorQVBK/se0j6DUFNPBGSqD3YWYnDw==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-interpolate": "*",
        "@types/d3-selection": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/geojson": {
      "version": "7946.0.16",
      "resolved": "https://registry.npmjs.org/@types/geojson/-/geojson-7946.0.16.tgz",
      "integrity": "sha512-6C8nqWur3j98U6+lXDfTUWIfgvZU+EumvpHKcYjujKH7woYyLj2sUmff0tRhrqM7BohUw7Pz3ZB1jj2gW9Fvmg==",
      "license": "MIT"
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.15",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.15.tgz",
      "integrity": "sha512-F6bEyamV9jKGAFBEmlQnesRPGOQqS2+Uwi0Em15xenOxHaf2hv6L8YCVn3rPdPJOiJfPiCnLIRyvwVaqMY3MIw==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "18.3.31",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.31.tgz",
      "integrity": "sha512-vfEqpXTvwT91yhmwdfouStN2hSKwTvyRs8qpLfADyrq/kxDw0hZM7Wk9Ug1FELj8hIby+S/+kQCSRFF32nv2Qw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@types/prop-types": "*",
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "18.3.7",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.7.tgz",
      "integrity": "sha512-MEe3UeoENYVFXzoXEWsvcpg6ZvlrFNlOQ7EOsvhI3CfAXwzPfO8Qwuxd40nepsYKqyyVQnTdEfv68q91yLcKrQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^18.0.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.7.0.tgz",
      "integrity": "sha512-gUu9hwfWvvEDBBmgtAowQCojwZmJ5mcLn3aufeCsitijs3+f2NsrPtlAWIR6OPiqljl96GVCUbLe0HyqIpVaoA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.0",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.27",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.17.0"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.5.2",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.5.2.tgz",
      "integrity": "sha512-rD5t5DwOjJdmSORcTq64j8MawTC+tbQ+HHqjR4NDumamy/ambn1UJrlKL+KdwujWxMkFjPM3pPHOEA9tl4767Q==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.4",
        "caniuse-lite": "^1.0.30001799",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.10.40",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.40.tgz",
      "integrity": "sha512-BSSLZ9/Cjjv7Gtj5B68ZzXcXUg8iOf3fme+FCuh8rC/Go+Kmh8cox7M3A8dolou16s64QjLPOSdngh7GxXvkSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.4",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.4.tgz",
      "integrity": "sha512-MTc8i/x9jBQd1iMw2CFGS+rwMa07eYjLR0CCTLDACl9xhxy+nIs3KeML/biicXtk9JrZ6dnnTatmc7ErPXIxqw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.10.38",
        "caniuse-lite": "^1.0.30001799",
        "electron-to-chromium": "^1.5.376",
        "node-releases": "^2.0.48",
        "update-browserslist-db": "^1.2.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001799",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001799.tgz",
      "integrity": "sha512-hG1bReV+OUU+MOqK4t/ZWI0tZOyz3rqS9XuhOUz1cIcbwBKjOyJEJuw9ER5JuNyqxNk8u/JUVbGibBOL1yrjFw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/classcat": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/classcat/-/classcat-5.0.5.tgz",
      "integrity": "sha512-JhZUT7JFcQy/EzW605k/ktHtncoo9vnyW/2GspNYwFlN1C/WmjuV/xtS04e9SOkL2sTdw0VAZ2UGCcQ9lR6p6w==",
      "license": "MIT"
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/d3-color": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-color/-/d3-color-3.1.0.tgz",
      "integrity": "sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-dispatch": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-dispatch/-/d3-dispatch-3.0.1.tgz",
      "integrity": "sha512-rzUyPU/S7rwUflMyLc1ETDeBj0NRuHKKAcvukozwhshr6g6c5d8zh4c2gQjY2bZ0dXeGLWc1PF174P2tVvKhfg==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-drag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/d3-drag/-/d3-drag-3.0.0.tgz",
      "integrity": "sha512-pWbUJLdETVA8lQNJecMxoXfH6x+mO2UQo8rSmZ+QqxcbyA3hfeprFgIT//HW2nlHChWeIIMwS2Fq+gEARkhTkg==",
      "license": "ISC",
      "dependencies": {
        "d3-dispatch": "1 - 3",
        "d3-selection": "3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-ease": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-ease/-/d3-ease-3.0.1.tgz",
      "integrity": "sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-interpolate": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-interpolate/-/d3-interpolate-3.0.1.tgz",
      "integrity": "sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==",
      "license": "ISC",
      "dependencies": {
        "d3-color": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-selection": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/d3-selection/-/d3-selection-3.0.0.tgz",
      "integrity": "sha512-fmTRWbNMmsmWq6xJV8D19U/gw/bwrHfNXxrIN+HfZgnzqTHp9jOmKMhsTUjXOJnZOdZY9Q28y4yebKzqDKlxlQ==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-timer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-timer/-/d3-timer-3.0.1.tgz",
      "integrity": "sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-transition": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-transition/-/d3-transition-3.0.1.tgz",
      "integrity": "sha512-ApKvfjsSR6tg06xrL434C0WydLr7JewBB3V+/39RMHsaXTOG0zmt/OAXeng5M5LBm0ojmxJrpomQVZ1aPvBL4w==",
      "license": "ISC",
      "dependencies": {
        "d3-color": "1 - 3",
        "d3-dispatch": "1 - 3",
        "d3-ease": "1 - 3",
        "d3-interpolate": "1 - 3",
        "d3-timer": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      },
      "peerDependencies": {
        "d3-selection": "2 - 3"
      }
    },
    "node_modules/d3-zoom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/d3-zoom/-/d3-zoom-3.0.0.tgz",
      "integrity": "sha512-b8AmV3kfQaqWAuacbPuNbL6vahnOJflOhexLzMMNLga62+/nh0JzvJ0aO/5a5MVgUFGS7Hu1P9P03o3fJkDCyw==",
      "license": "ISC",
      "dependencies": {
        "d3-dispatch": "1 - 3",
        "d3-drag": "2 - 3",
        "d3-interpolate": "1 - 3",
        "d3-selection": "2 - 3",
        "d3-transition": "2 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.379",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.379.tgz",
      "integrity": "sha512-v/qV5aV5EUA2pGilzUCq5/eyOloZAqDZBu9UMBIzgPpLlprjSR6zswsWBTv0KpqxLGUAZEwhO95ZCt7srymNVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.2",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.2.tgz",
      "integrity": "sha512-evOr8xfXKxE6qSR0hSXL2r3sd7ALj8+7jQEUvPYcm5sgZFdJ+AYzT6yNmJenvIYQBgIGwfwz08sL8zoL7yq2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz",
      "integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.15",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.15.tgz",
      "integrity": "sha512-y7Wygv/7mEOvxTuEQDB8StXdMRBWf1kR/tlhAzBRUFkB2jfcLOAxO/SHmOO2zgz1pVgK29/kyupn059/bCHdjA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.50",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.50.tgz",
      "integrity": "sha512-J6l92tKHX6w8Jy5nO1Vuc01NoIiRGi/d6qBKVxh+IQ8Cr3b6HbVNfKiF8ZpFKufTwpwxMmce2W3iQZ861ZRyTg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
      "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.15",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.15.tgz",
      "integrity": "sha512-FfR8sjd4em2T6fb3I2MwAJU7HWVMr9zba+enmQeeWFfCbm+UOC/0X4DS8XtpUTMwWMGbjKYP7xjfNekzyGmB3A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.12",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.1.0.tgz",
      "integrity": "sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-6.0.1.tgz",
      "integrity": "sha512-oPtTM4oerL+UXmx+93ytZVN82RrlY/wPUV8IeDxFrzIjXOLF1pN+EmKPLbubvKHT2HC20xXsCAH2Z+CKV6Oz/g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.1.1"
      },
      "engines": {
        "node": ">= 18"
      },
      "peerDependencies": {
        "jiti": ">=1.21.0",
        "postcss": ">=8.0.9",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        },
        "postcss": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.4",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.4.tgz",
      "integrity": "sha512-bIoJLOmjCO1S9XdY/DcnR5hJxvrDir1PbGChrzXG3vw0/FOliy/fA3dmdhQ441kah4gKv+TwckGzex6wNS5cnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.17.0.tgz",
      "integrity": "sha512-z6F7K9bV85EfseRCp2bzrpyQ0Gkw1uLoCel9XBVWPg/TjRj94SkJzUTGfOa4bs7iJvBWtQG0Wq7wnI0syw3EBQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-resizable-panels": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/react-resizable-panels/-/react-resizable-panels-2.1.9.tgz",
      "integrity": "sha512-z77+X08YDIrgAes4jl8xhnUu1LNIRp4+E7cv4xHmLOxxUPO/ML7PSrE813b90vj7xvQ1lcf7g2uA9GeMZonjhQ==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.14.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^16.14.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/reactflow": {
      "version": "11.11.4",
      "resolved": "https://registry.npmjs.org/reactflow/-/reactflow-11.11.4.tgz",
      "integrity": "sha512-70FOtJkUWH3BAOsN+LU9lCrKoKbtOPnz2uq0CV2PLdNSwxTXOhCbsZr50GmZ+Rtw3jx8Uv7/vBFtCGixLfd4Og==",
      "license": "MIT",
      "dependencies": {
        "@reactflow/background": "11.3.14",
        "@reactflow/controls": "11.2.14",
        "@reactflow/core": "11.11.4",
        "@reactflow/minimap": "11.7.14",
        "@reactflow/node-resizer": "2.2.14",
        "@reactflow/node-toolbar": "1.3.14"
      },
      "peerDependencies": {
        "react": ">=17",
        "react-dom": ">=17"
      }
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.12",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.12.tgz",
      "integrity": "sha512-TyeJ1zif53BPfHootBGwPRYT1RUt6oGWsaQr8UyZW/eAm9bKoijtvruSDEmZHm92CwS9nj7/fWttqPCgzep8CA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rollup": {
      "version": "4.62.2",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.62.2.tgz",
      "integrity": "sha512-RFnrW4lhXA3s3eqHDZvN654g8OTjzRfqpIRJYczCGB6HzphckVAi/Qh4tbPUbRuDi7s1Llv8g/NspLkttY3gTA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.9"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.62.2",
        "@rollup/rollup-android-arm64": "4.62.2",
        "@rollup/rollup-darwin-arm64": "4.62.2",
        "@rollup/rollup-darwin-x64": "4.62.2",
        "@rollup/rollup-freebsd-arm64": "4.62.2",
        "@rollup/rollup-freebsd-x64": "4.62.2",
        "@rollup/rollup-linux-arm-gnueabihf": "4.62.2",
        "@rollup/rollup-linux-arm-musleabihf": "4.62.2",
        "@rollup/rollup-linux-arm64-gnu": "4.62.2",
        "@rollup/rollup-linux-arm64-musl": "4.62.2",
        "@rollup/rollup-linux-loong64-gnu": "4.62.2",
        "@rollup/rollup-linux-loong64-musl": "4.62.2",
        "@rollup/rollup-linux-ppc64-gnu": "4.62.2",
        "@rollup/rollup-linux-ppc64-musl": "4.62.2",
        "@rollup/rollup-linux-riscv64-gnu": "4.62.2",
        "@rollup/rollup-linux-riscv64-musl": "4.62.2",
        "@rollup/rollup-linux-s390x-gnu": "4.62.2",
        "@rollup/rollup-linux-x64-gnu": "4.62.2",
        "@rollup/rollup-linux-x64-musl": "4.62.2",
        "@rollup/rollup-openbsd-x64": "4.62.2",
        "@rollup/rollup-openharmony-arm64": "4.62.2",
        "@rollup/rollup-win32-arm64-msvc": "4.62.2",
        "@rollup/rollup-win32-ia32-msvc": "4.62.2",
        "@rollup/rollup-win32-x64-gnu": "4.62.2",
        "@rollup/rollup-win32-x64-msvc": "4.62.2",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.1",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.1.tgz",
      "integrity": "sha512-DhuTmvZWux4H1UOnWMB3sk0sbaCVOoQZjv8u1rDoTV0HTdGem9hkAZtl4JZy8P2z4Bg0nT+YMeOFyVr4zcG5Tw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "tinyglobby": "^0.2.11",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.19",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.19.tgz",
      "integrity": "sha512-3ofp+LL8E+pK/JuPLPggVAIaEuhvIz4qNcf3nA1Xn2o/7fb7s/TYpHhwGDv1ZU3PkBluUVaF8PyCHcm48cKLWQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.7",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2 || ^5.0 || ^6.0",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.6.0.tgz",
      "integrity": "sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "5.4.21",
      "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.21.tgz",
      "integrity": "sha512-o5a9xKjbtuhY6Bi5S3+HvbRERmouabWbyUcpXXUA1u+GNUKoROi9byOJ8M0nHbHYHkYICiMlqxkg1KkYmm25Sw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/zustand": {
      "version": "4.5.7",
      "resolved": "https://registry.npmjs.org/zustand/-/zustand-4.5.7.tgz",
      "integrity": "sha512-CHOUy7mu3lbD6o6LJLfllpjkzhHXSBlX8B9+qPddUsIfeF5S/UZ5q0kmCsnRqT1UHFQZchNFDDzMbQsuesHWlw==",
      "license": "MIT",
      "dependencies": {
        "use-sync-external-store": "^1.2.2"
      },
      "engines": {
        "node": ">=12.7.0"
      },
      "peerDependencies": {
        "@types/react": ">=16.8",
        "immer": ">=9.0.6",
        "react": ">=16.8"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "immer": {
          "optional": true
        },
        "react": {
          "optional": true
        }
      }
    }
  }
}
`,Lx=`{
  "name": "infinite-spatial-ide",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-resizable-panels": "^2.1.7",
    "reactflow": "^11.11.4",
    "zustand": "^4.5.5"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^5.4.11"
  }
}
`,Ox=`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`,Hx=`import Layout from './components/Layout'

export default function App() {
  return <Layout />
}
`,Bx=`import { useStore } from '../store'
import { Header } from './FileExplorer'

/* Bookmark Manager (bottom-left). A list of saved viewport states.
 * Double-clicking a bookmark:
 *   1. snapshots the CURRENT view as a temporary "return point" bookmark,
 *   2. pans/zooms the map to the saved bookmark's coordinates,
 *   3. focuses the saved object. */
export default function BookmarkManager() {
  const bookmarks = useStore((s) => s.bookmarks)
  const functions = useStore((s) => s.functions)
  const removeBookmark = useStore((s) => s.removeBookmark)
  const setFocusedNode = useStore((s) => s.setFocusedNode)
  const requestFocus = useStore((s) => s.requestFocus)
  const pushTemporaryBookmark = useStore((s) => s.pushTemporaryBookmark)

  const applyBookmark = (bm) => {
    const api = useStore.getState().flowApi
    if (api) {
      // 1) save where we are right now as a temporary return point
      pushTemporaryBookmark(api.getViewport())
      // 2) fly to the bookmarked coordinates
      api.setViewport(bm.viewport, { duration: 650 })
    }
    // 3) focus the saved object
    if (bm.focusObjectId) {
      if (functions[bm.focusObjectId]) setFocusedNode(bm.focusObjectId)
      requestFocus(bm.focusObjectId)
    }
  }

  return (
    <div className="flex h-full flex-col bg-panel">
      <Header title="Bookmark Manager" badge={bookmarks.length} />
      <div className="px-3 py-1.5 text-[10px] text-slate-500">Double-click to fly to a saved view</div>
      <div className="thin-scroll flex-1 overflow-auto pb-2">
        {bookmarks.length === 0 && <div className="px-3 py-6 text-center text-xs text-slate-600">No bookmarks yet — use “★ Save view”.</div>}
        {bookmarks.map((bm) => (
          <div
            key={bm.id}
            onDoubleClick={() => applyBookmark(bm)}
            className={[
              'group mx-2 mb-1.5 cursor-pointer rounded-lg border px-3 py-2 transition-colors',
              bm.temporary ? 'border-dashed border-slate-700 bg-slate-800/30' : 'border-slate-700 bg-slate-800/60 hover:border-indigo-500/70',
            ].join(' ')}
          >
            <div className="flex items-center gap-2">
              <span className={bm.temporary ? 'text-slate-500' : 'text-indigo-400'}>{bm.temporary ? '↩' : '★'}</span>
              <span className="flex-1 truncate text-[13px] text-slate-200">{bm.name}</span>
              <button
                onClick={(e) => { e.stopPropagation(); removeBookmark(bm.id) }}
                className="text-slate-600 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100"
                title="Delete bookmark"
              >
                ✕
              </button>
            </div>
            <div className="mt-0.5 flex items-center gap-2 pl-6 text-[10px] text-slate-500">
              <span className="font-mono">z {bm.viewport.zoom.toFixed(2)}</span>
              {bm.focusObjectId && functions[bm.focusObjectId] && (
                <span className="truncate font-mono text-slate-400">→ {functions[bm.focusObjectId].name}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
`,Vx=`import { useMemo, useRef } from 'react'
import { useStore } from '../store'
import { kindOf } from '../projectGraph'

/* File Explorer (top-left). Mode-aware:
 *   • Project mode  → lists the REAL directory; click selects + focuses the file
 *     on the map (revealing its dependency arrows).
 *   • Functions mode → lists the mock files; click highlights + frames the file.
 * Files are grouped by their folder path. */
export default function FileExplorer() {
  const viewMode = useStore((s) => s.viewMode)
  const isProject = viewMode === 'project'

  // function-mode data
  const files = useStore((s) => s.files)
  const functions = useStore((s) => s.functions)
  const focusedFileId = useStore((s) => s.focusedFileId)
  const focusFile = useStore((s) => s.focusFile)
  const openTerminal = useStore((s) => s.openTerminal)

  // project-mode data
  const projectFiles = useStore((s) => s.projectFiles)
  const selectedProjectFileId = useStore((s) => s.selectedProjectFileId)
  const selectProjectFile = useStore((s) => s.selectProjectFile)
  const requestFocus = useStore((s) => s.requestFocus)
  const projectFolderFilter = useStore((s) => s.projectFolderFilter)
  const setProjectFolderFilter = useStore((s) => s.setProjectFolderFilter)
  const clearProjectFolderFilter = useStore((s) => s.clearProjectFolderFilter)
  const deleteProjectFile = useStore((s) => s.deleteProjectFile)
  const addProjectFiles = useStore((s) => s.addProjectFiles)
  const fileInputRef = useRef(null)

  const source = isProject ? projectFiles : files

  const grouped = useMemo(() => {
    const g = {}
    for (const f of Object.values(source)) {
      const key = isProject ? f.folder : f.folderPath
      if (isProject && projectFolderFilter && key !== projectFolderFilter) continue
      ;(g[key] ||= []).push(f)
    }
    return Object.entries(g).sort(([a], [b]) => a.localeCompare(b))
  }, [source, isProject, projectFolderFilter])

  const visibleCount = grouped.reduce((sum, [, list]) => sum + list.length, 0)
  const fnCount = (fileId) => Object.values(functions).filter((f) => f.fileId === fileId).length

  const onPick = (f) => {
    if (isProject) {
      selectProjectFile(f.id)
      requestFocus(f.id)
    } else {
      focusFile(f.id)
    }
  }

  const handleImport = async (event) => {
    const filesToImport = Array.from(event.target.files || [])
    if (filesToImport.length === 0) return

    const imported = await Promise.all(
      filesToImport.map(async (file) => {
        const path = file.webkitRelativePath ? \`/\${file.webkitRelativePath}\` : \`/\${file.name}\`
        const folder = path.slice(0, path.lastIndexOf('/')) || '/'
        const kind = kindOf(file.name)

        if (kind === 'image' || kind === 'audio') {
          return { path, name: file.name, folder, kind, url: URL.createObjectURL(file) }
        }

        const source = await file.text()
        return { path, name: file.name, folder, kind, source }
      }),
    )

    addProjectFiles(imported)
    event.target.value = ''
  }

  const clearFolderFilter = () => clearProjectFolderFilter()
  const deleteFile = () => selectedProjectFileId && deleteProjectFile(selectedProjectFileId)

  return (
    <div className="flex h-full flex-col bg-panel">
      <Header
        title="File Explorer"
        badge={visibleCount}
        action={
          <div className="flex items-center gap-2">
            {projectFolderFilter ? (
              <button
                type="button"
                onClick={clearFolderFilter}
                className="rounded-full border border-rose-500 bg-rose-600/90 px-3 py-1 text-[11px] font-medium text-white transition hover:bg-rose-500"
              >
                Clear filter
              </button>
            ) : null}
            {selectedProjectFileId ? (
              <button
                type="button"
                onClick={deleteFile}
                className="rounded-full border border-red-500 bg-red-600/90 px-3 py-1 text-[11px] font-medium text-white transition hover:bg-red-500"
              >
                Delete
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1 text-[11px] font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Import files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              webkitdirectory=""
              directory=""
              className="hidden"
              onChange={handleImport}
            />
          </div>
        }
      />
      <div className="thin-scroll flex-1 overflow-auto py-1">
        {grouped.map(([folder, list]) => (
          <div key={folder} className="mb-1">
            <button
              type="button"
              onClick={() => setProjectFolderFilter(projectFolderFilter === folder ? null : folder)}
              className={[
                'flex w-full items-center justify-between gap-1.5 px-3 py-1 text-left text-[11px] transition',
                projectFolderFilter === folder ? 'bg-slate-800 text-slate-100' : 'text-slate-500 hover:bg-slate-900/80',
              ].join(' ')}
            >
              <span className="flex items-center gap-1.5">
                <span>▾</span>
                <span className="truncate font-mono">{folder || '/'}</span>
              </span>
              <span className="text-[10px] text-slate-400">{list.length} files</span>
            </button>
            {list.map((f) => {
              const active = isProject ? selectedProjectFileId === f.id : focusedFileId === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => onPick(f)}
                  onDoubleClick={() => !isProject && openTerminal(f.id)}
                  className={[
                    'group flex w-full items-center gap-2 py-1 pl-7 pr-3 text-left text-[13px] transition-colors',
                    active
                      ? isProject
                        ? 'bg-indigo-500/15 text-indigo-200'
                        : 'bg-amber-500/15 text-amber-200'
                      : 'text-slate-300 hover:bg-slate-800/60',
                  ].join(' ')}
                >
                  <span className={active ? (isProject ? 'text-indigo-400' : 'text-amber-400') : 'text-slate-500'}>▢</span>
                  <span className="flex-1 truncate font-mono">{f.name}</span>
                  {!isProject && (
                    <span className="rounded bg-slate-800 px-1.5 text-[10px] text-slate-400 group-hover:bg-slate-700">{fnCount(f.id)}</span>
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Header({ title, badge, action }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
      <div className="flex items-center gap-2">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{title}</h2>
        {badge != null && <span className="rounded-full bg-slate-800 px-1.5 text-[10px] text-slate-400">{badge}</span>}
      </div>
      {action}
    </div>
  )
}
`,Ux=`import { useEffect, useRef, useState } from 'react'
import { useStore, getFileContent } from '../store'

/* A small floating, draggable panel that opens on double-click of a project
 * file node:
 *   • text  → an editable code editor (edits are kept in-memory, no backend)
 *   • image → an image viewer
 *   • audio → an audio player with a Play button
 */
export default function FloatingEditor() {
  const editorFileId = useStore((s) => s.editorFileId)
  const projectFiles = useStore((s) => s.projectFiles)
  const closeEditor = useStore((s) => s.closeEditor)
  const setFileEdit = useStore((s) => s.setFileEdit)
  const revertFileEdit = useStore((s) => s.revertFileEdit)
  const fileEdits = useStore((s) => s.fileEdits)
  // subscribe so the textarea re-renders on external content changes
  const content = useStore((s) => (editorFileId ? getFileContent(s, editorFileId) : ''))

  const [pos, setPos] = useState({ x: 0, y: 0 })
  const drag = useRef(null)
  const audioRef = useRef(null)

  // Open near the top-right of the viewport each time a new file is opened.
  useEffect(() => {
    if (editorFileId) setPos({ x: Math.max(24, window.innerWidth - 470), y: 96 })
  }, [editorFileId])

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current) return
      setPos({ x: e.clientX - drag.current.dx, y: e.clientY - drag.current.dy })
    }
    const onUp = () => (drag.current = null)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeEditor()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeEditor])

  if (!editorFileId) return null
  const file = projectFiles[editorFileId]
  if (!file) return null

  const edited = file.path in fileEdits
  const startDrag = (e) => {
    drag.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y }
  }

  return (
    <div
      className="fixed z-50 flex w-[440px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl"
      style={{ left: pos.x, top: pos.y, height: file.kind === 'text' ? 420 : 'auto' }}
    >
      {/* title bar (drag handle) */}
      <div
        onMouseDown={startDrag}
        className="flex cursor-grab items-center gap-2 border-b border-slate-800 bg-slate-900 px-3 py-2 active:cursor-grabbing"
      >
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500" />
          <span className="h-3 w-3 rounded-full bg-amber-500" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </span>
        <span className="ml-1 truncate font-mono text-xs text-slate-300">{file.path}</span>
        {edited && <span className="rounded bg-amber-500/20 px-1.5 text-[10px] text-amber-300">● edited</span>}
        <span className="ml-auto rounded bg-slate-800 px-1.5 text-[10px] uppercase text-slate-400">{file.kind}</span>
        <button onClick={closeEditor} className="text-slate-500 hover:text-white">✕</button>
      </div>

      {/* body */}
      {file.kind === 'text' && (
        <>
          <textarea
            spellCheck={false}
            value={content}
            onChange={(e) => setFileEdit(file.path, e.target.value)}
            className="thin-scroll flex-1 resize-none bg-[#0b0e14] p-3 font-mono text-[12.5px] leading-relaxed text-slate-200 outline-none"
          />
          <div className="flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-3 py-1.5 text-[11px]">
            <span className="text-slate-500">{content.split('\\n').length} lines · in-memory only</span>
            <button
              disabled={!edited}
              onClick={() => revertFileEdit(file.path)}
              className="ml-auto rounded px-2 py-1 text-slate-300 enabled:hover:bg-slate-800 disabled:opacity-40"
            >
              Revert
            </button>
          </div>
        </>
      )}

      {file.kind === 'image' && (
        <div className="flex items-center justify-center bg-[repeating-conic-gradient(#1e2533_0%_25%,#11151f_0%_50%)] bg-[length:24px_24px] p-4">
          <img src={file.url} alt={file.name} className="max-h-[320px] max-w-full rounded-lg object-contain" />
        </div>
      )}

      {file.kind === 'audio' && (
        <div className="flex flex-col items-center gap-3 p-5">
          <button
            onClick={() => audioRef.current?.play()}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-lg transition hover:bg-indigo-500 active:scale-95"
            title="Play"
          >
            ▶
          </button>
          <audio ref={audioRef} src={file.url} controls className="w-full" />
          <span className="text-[11px] text-slate-500">{file.name}</span>
        </div>
      )}
    </div>
  )
}
`,Wx=`import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import FileExplorer from './FileExplorer'
import BookmarkManager from './BookmarkManager'
import MapView from './MapView'
import TerminalModal from './TerminalModal'
import FloatingEditor from './FloatingEditor'

/* Top-level layout:
 *   ┌───────────────┬──────────────────────────────┐
 *   │ File Explorer │                              │
 *   ├───────────────┤        Map View (70%)        │
 *   │   Bookmarks   │                              │
 *   └───────────────┴──────────────────────────────┘
 *  Left column = 30% (vertically split 50/50), right column = 70%.
 */
export default function Layout() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-canvas text-slate-200">
      <PanelGroup direction="horizontal">
        {/* LEFT COLUMN (30%) */}
        <Panel defaultSize={30} minSize={18} className="border-r border-slate-800">
          <PanelGroup direction="vertical">
            <Panel defaultSize={50} minSize={15}>
              <FileExplorer />
            </Panel>
            <PanelResizeHandle className="group relative h-[3px] bg-slate-800 transition-colors hover:bg-indigo-500">
              <div className="absolute inset-x-0 -top-1 -bottom-1" />
            </PanelResizeHandle>
            <Panel defaultSize={50} minSize={15}>
              <BookmarkManager />
            </Panel>
          </PanelGroup>
        </Panel>

        <PanelResizeHandle className="relative w-[3px] bg-slate-800 transition-colors hover:bg-indigo-500">
          <div className="absolute inset-y-0 -left-1 -right-1" />
        </PanelResizeHandle>

        {/* RIGHT COLUMN (70%) — the infinite map */}
        <Panel defaultSize={70} minSize={40}>
          <MapView />
        </Panel>
      </PanelGroup>

      <TerminalModal />
      <FloatingEditor />
    </div>
  )
}
`,$x=`import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
} from 'reactflow'
import 'reactflow/dist/style.css'

import { useStore, getFileSize, getFocusGraph, getProjectFocus, FN, FILE, PORT, FILE_COLORS } from '../store'
import SubspaceNode from './nodes/SubspaceNode'
import FileNode from './nodes/FileNode'
import FunctionNode from './nodes/FunctionNode'
import TunableNode from './nodes/TunableNode'
import PortNode from './nodes/PortNode'
import ClusterNode from './nodes/ClusterNode'
import ProjectFileNode from './nodes/ProjectFileNode'
import AroundEdge from './edges/AroundEdge'

const nodeTypes = {
  subspace: SubspaceNode,
  file: FileNode,
  function: FunctionNode,
  tunable: TunableNode,
  port: PortNode,
  cluster: ClusterNode,
  projectFile: ProjectFileNode,
}

const edgeTypes = { around: AroundEdge }

const DOWNSTREAM_COLOR = '#34d399' // selection AFFECTS these (arrow exits selection's right)
const UPSTREAM_COLOR = '#f59e0b' // these AFFECT the selection (arrow enters selection's left)

/* ---------- helpers ---------- */
function makeEdge(source, target, color, opts = {}) {
  return {
    id: \`e-\${source}-\${target}\`,
    source,
    target,
    type: 'around', // route around node bodies (see AroundEdge)
    animated: true,
    className: 'focus-edge',
    style: { stroke: color, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color, width: 16, height: 16 },
    data: { lane: opts.lane ?? 0, bow: opts.bow ?? 'down' },
  }
}

/* =============================================================================
 *  FLOW  (inner component — has access to the ReactFlow instance)
 * ========================================================================== */
function Flow() {
  const rf = useReactFlow()
  const wrapperRef = useRef(null)

  // --- view mode ---
  const viewMode = useStore((s) => s.viewMode)
  const setViewMode = useStore((s) => s.setViewMode)

  // --- function-graph (mock) slices ---
  const files = useStore((s) => s.files)
  const functions = useStore((s) => s.functions)
  const subspaces = useStore((s) => s.subspaces)
  const tunables = useStore((s) => s.tunables)
  const calls = useStore((s) => s.calls)
  const focusedNodeId = useStore((s) => s.focusedNodeId)

  // --- project-graph (real directory) slices ---
  const projectFiles = useStore((s) => s.projectFiles)
  const projectFolders = useStore((s) => s.projectFolders)
  const projectEdges = useStore((s) => s.projectEdges)
  const selectedProjectFileId = useStore((s) => s.selectedProjectFileId)
  const projectFolderFilter = useStore((s) => s.projectFolderFilter)
  const selectProjectFile = useStore((s) => s.selectProjectFile)
  const clearProjectSelection = useStore((s) => s.clearProjectSelection)

  // --- shared actions ---
  const moveNode = useStore((s) => s.moveNode)
  const clearFocus = useStore((s) => s.clearFocus)
  const setFocusedNode = useStore((s) => s.setFocusedNode)
  const requestFocus = useStore((s) => s.requestFocus)
  const setFlowApi = useStore((s) => s.setFlowApi)
  const saveBookmark = useStore((s) => s.saveBookmark)
  const createSubspace = useStore((s) => s.createSubspace)
  const createFile = useStore((s) => s.createFile)
  const createFunction = useStore((s) => s.createFunction)
  const pendingFocus = useStore((s) => s.pendingFocus)
  const consumePendingFocus = useStore((s) => s.consumePendingFocus)

  const [menu, setMenu] = useState(null) // { x, y, flowPos }
  const [search, setSearch] = useState('')

  const isProject = viewMode === 'project'

  /* ---------- expose an imperative bridge for the sidebar (bookmarks) ---------- */
  useEffect(() => {
    setFlowApi({
      getViewport: () => rf.getViewport(),
      setViewport: (vp, opts) => rf.setViewport(vp, opts),
      fitTo: (id, opts) => rf.fitView({ nodes: [{ id }], ...opts }),
    })
  }, [rf, setFlowApi])

  /* ---------- reframe when the view mode changes ---------- */
  useEffect(() => {
    const t = setTimeout(() => rf.fitView({ duration: 500, padding: 0.18 }), 60)
    return () => clearTimeout(t)
  }, [viewMode, rf])

  /* ---------- imperative pan/zoom when something requests focus ---------- */
  useEffect(() => {
    if (!pendingFocus) return
    const id = pendingFocus.id
    const isSub = !!subspaces[id]
    const isFn = !!functions[id]
    // Centre a function by framing its parent file for context.
    const targetId = isFn ? functions[id].fileId : id
    rf.fitView({
      nodes: [{ id: targetId }],
      duration: 650,
      padding: isSub ? 0.06 : 0.4,
      maxZoom: isSub ? 1.6 : 1.5,
    })
    consumePendingFocus()
  }, [pendingFocus, rf, subspaces, functions, consumePendingFocus])

  /* ===========================================================================
   *  FUNCTION-GRAPH nodes/edges (mock spatial demo)
   * ======================================================================== */
  const functionNodes = useMemo(() => {
    const out = []
    const focus = getFocusGraph({ focusedNodeId, functions, calls })

    for (const sp of Object.values(subspaces)) {
      out.push({
        id: sp.id,
        type: 'subspace',
        position: sp.position,
        data: { ...sp, width: sp.size.width, height: sp.size.height },
        style: { width: sp.size.width, height: sp.size.height, zIndex: 0 },
        zIndex: 0,
      })
    }
    for (const file of Object.values(files)) {
      const size = getFileSize(functions, file.id)
      out.push({
        id: file.id,
        type: 'file',
        position: file.position,
        data: { ...file, width: size.width, height: size.height },
        style: { width: size.width, height: size.height },
        zIndex: 1,
      })
    }
    for (const fn of Object.values(functions)) {
      out.push({
        id: fn.id,
        type: 'function',
        position: fn.position,
        parentNode: fn.fileId,
        extent: 'parent',
        data: { name: fn.name, fileId: fn.fileId, width: FN.W, height: FN.H },
        zIndex: 2,
      })
    }
    if (focus) {
      const size = getFileSize(functions, focus.fileId)
      focus.leftPorts.forEach((p, i) => {
        const color = FILE_COLORS[p.extFileId] || '#94a3b8'
        out.push({
          id: \`port-l-\${p.extFnId}\`,
          type: 'port',
          parentNode: focus.fileId,
          position: { x: -PORT.W / 2, y: FILE.HEADER + 8 + i * PORT.GAP_Y },
          data: { side: 'left', color, label: \`\${functions[p.extFnId].name} · \${files[p.extFileId].name}\` },
          draggable: false,
          selectable: false,
          zIndex: 6,
        })
      })
      focus.rightPorts.forEach((p, i) => {
        const color = FILE_COLORS[p.extFileId] || '#94a3b8'
        out.push({
          id: \`port-r-\${p.extFnId}\`,
          type: 'port',
          parentNode: focus.fileId,
          position: { x: size.width - PORT.W / 2, y: FILE.HEADER + 8 + i * PORT.GAP_Y },
          data: { side: 'right', color, label: \`\${functions[p.extFnId].name} · \${files[p.extFileId].name}\` },
          draggable: false,
          selectable: false,
          zIndex: 6,
        })
      })
    }
    for (const t of Object.values(tunables)) {
      out.push({ id: t.id, type: 'tunable', position: t.position, data: t, zIndex: 1 })
    }
    return out
  }, [files, functions, subspaces, tunables, calls, focusedNodeId])

  const functionEdges = useMemo(() => {
    const focus = getFocusGraph({ focusedNodeId, functions, calls })
    if (!focus) return []
    const fid = focus.focusedNodeId
    const E = []
    focus.internalUpstream.forEach((cid, i) => E.push(makeEdge(cid, fid, '#818cf8', { lane: i, bow: 'up' })))
    focus.internalDownstream.forEach((cid, i) => E.push(makeEdge(fid, cid, '#818cf8', { lane: i, bow: 'down' })))
    focus.leftPorts.forEach((p, i) => E.push(makeEdge(\`port-l-\${p.extFnId}\`, fid, FILE_COLORS[p.extFileId] || '#94a3b8', { lane: i, bow: 'up' })))
    focus.rightPorts.forEach((p, i) => E.push(makeEdge(fid, \`port-r-\${p.extFnId}\`, FILE_COLORS[p.extFileId] || '#94a3b8', { lane: i, bow: 'down' })))
    return E
  }, [focusedNodeId, functions, calls])

  /* ===========================================================================
   *  PROJECT-GRAPH nodes/edges (real directory)
   * ======================================================================== */
  const projectNodes = useMemo(() => {
    const out = []
    // folder clusters (background)
    for (const fld of Object.values(projectFolders)) {
      if (projectFolderFilter && fld.id !== projectFolderFilter) continue
      out.push({
        id: \`\${fld.id}::cluster\`,
        type: 'cluster',
        position: fld.position,
        data: { name: fld.name, width: fld.size.width, height: fld.size.height },
        style: { width: fld.size.width, height: fld.size.height, zIndex: 0 },
        zIndex: 0,
        selectable: false,
        draggable: false,
      })
    }
    // files
    for (const f of Object.values(projectFiles)) {
      if (projectFolderFilter && f.folder !== projectFolderFilter) continue
      out.push({ id: f.id, type: 'projectFile', position: f.position, data: f, zIndex: 2 })
    }
    return out
  }, [projectFiles, projectFolders, projectFolderFilter])

  const projectFlowEdges = useMemo(() => {
    const visibleIds = new Set(
      Object.values(projectFiles)
        .filter((f) => !projectFolderFilter || f.folder === projectFolderFilter)
        .map((f) => f.id),
    )
    if (projectFolderFilter && !visibleIds.has(selectedProjectFileId)) return []
    const focus = getProjectFocus({ selectedProjectFileId, projectEdges })
    if (!focus) return []
    const E = []
    focus.downstream
      .filter((t) => visibleIds.has(t))
      .forEach((t, i) => E.push(makeEdge(focus.id, t, DOWNSTREAM_COLOR, { lane: i, bow: 'down' })))
    focus.upstream
      .filter((srcId) => visibleIds.has(srcId))
      .forEach((srcId, i) => E.push(makeEdge(srcId, focus.id, UPSTREAM_COLOR, { lane: i, bow: 'up' })))
    return E
  }, [selectedProjectFileId, projectEdges, projectFiles, projectFolderFilter])

  const nodes = isProject ? projectNodes : functionNodes
  const edges = isProject ? projectFlowEdges : functionEdges

  /* ---------- drag → persist positions back to the store ---------- */
  const onNodesChange = useCallback(
    (changes) => {
      for (const ch of changes) {
        if (ch.type === 'position' && ch.position) moveNode(ch.id, ch.position)
      }
    },
    [moveNode],
  )

  const onPaneClick = useCallback(() => {
    clearFocus()
    clearProjectSelection()
    setMenu(null)
  }, [clearFocus, clearProjectSelection])

  /* ---------- context menu (creation — function mode only) ---------- */
  const onPaneContextMenu = useCallback(
    (e) => {
      e.preventDefault()
      if (isProject) return
      const bounds = wrapperRef.current.getBoundingClientRect()
      const flowPos = rf.screenToFlowPosition({ x: e.clientX, y: e.clientY })
      setMenu({ x: e.clientX - bounds.left, y: e.clientY - bounds.top, flowPos })
    },
    [rf, isProject],
  )

  const openMenuAtCenter = useCallback(() => {
    const bounds = wrapperRef.current.getBoundingClientRect()
    const cx = bounds.width - 240
    const cy = bounds.height - 220
    const flowPos = rf.screenToFlowPosition({ x: bounds.left + cx, y: bounds.top + cy })
    setMenu({ x: cx, y: cy, flowPos })
  }, [rf])

  /* ---------- top overlay actions ---------- */
  const handleSaveView = () => {
    const name = window.prompt('Name this bookmark', \`View \${Date.now() % 1000}\`)
    if (name === null) return
    saveBookmark(rf.getViewport(), name)
  }

  const searchResults = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return []
    const res = []
    if (isProject) {
      for (const f of Object.values(projectFiles)) {
        if (projectFolderFilter && f.folder !== projectFolderFilter) continue
        if (f.name.toLowerCase().includes(q)) res.push({ id: f.id, label: f.name, kind: 'file' })
      }
    } else {
      for (const f of Object.values(functions)) if (f.name.toLowerCase().includes(q)) res.push({ id: f.id, label: f.name, kind: 'fn' })
      for (const f of Object.values(files)) if (f.name.toLowerCase().includes(q)) res.push({ id: f.id, label: f.name, kind: 'file' })
      for (const s of Object.values(subspaces)) if (s.name.toLowerCase().includes(q)) res.push({ id: s.id, label: s.name, kind: 'sub' })
    }
    return res.slice(0, 6)
  }, [search, isProject, projectFiles, functions, files, subspaces])

  const gotoResult = (r) => {
    if (isProject) selectProjectFile(r.id)
    else if (r.kind === 'fn') setFocusedNode(r.id)
    requestFocus(r.id)
    setSearch('')
  }

  return (
    <div ref={wrapperRef} className="relative h-full w-full" onClick={() => setMenu(null)}>
      {/* ---------- MODE TOGGLE (top-left) ---------- */}
      <div className="pointer-events-none absolute left-3 top-3 z-20">
        <div className="pointer-events-auto inline-flex rounded-full border border-slate-700 bg-slate-900/90 p-0.5 text-xs shadow-lg backdrop-blur">
          <ToggleBtn active={isProject} onClick={() => setViewMode('project')}>📁 Project Map</ToggleBtn>
          <ToggleBtn active={!isProject} onClick={() => setViewMode('functions')}>◯ Functions</ToggleBtn>
        </div>
      </div>

      {/* ---------- TOP OVERLAY: search + save view ---------- */}
      <div className="pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-2">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchResults[0] && gotoResult(searchResults[0])}
              placeholder={isProject ? 'Search files…' : 'Search files & functions…'}
              className="w-80 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 shadow-lg outline-none backdrop-blur placeholder:text-slate-500 focus:border-indigo-500"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">⌕</span>
            {searchResults.length > 0 && (
              <div className="absolute mt-2 w-80 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl backdrop-blur">
                {searchResults.map((r) => (
                  <button
                    key={\`\${r.kind}-\${r.id}\`}
                    onClick={() => gotoResult(r)}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-200 hover:bg-slate-800"
                  >
                    <span className="text-[10px] uppercase text-slate-500">{r.kind}</span>
                    <span className="truncate font-mono">{r.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={handleSaveView}
            className="flex items-center gap-1.5 rounded-full border border-indigo-500/60 bg-indigo-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-indigo-500"
          >
            <span>★</span> Save view
          </button>
        </div>
      </div>

      {/* ---------- THE CANVAS ---------- */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onPaneClick={onPaneClick}
        onPaneContextMenu={onPaneContextMenu}
        minZoom={0.1}
        maxZoom={3}
        fitView
        proOptions={{ hideAttribution: true }}
        className="bg-canvas"
      >
        <Background variant={BackgroundVariant.Dots} gap={26} size={1.5} color="#1e2533" />
        <Controls className="!bg-slate-900 !border-slate-700" showInteractive={false} />
        <MiniMap
          pannable
          zoomable
          maskColor="rgba(2,6,23,0.7)"
          className="!bg-slate-900 !border !border-slate-700"
          nodeColor={(n) =>
            n.type === 'subspace'
              ? \`\${n.data?.color || '#6366f1'}55\`
              : n.type === 'cluster'
              ? '#1e293b'
              : n.type === 'projectFile'
              ? '#475569'
              : n.type === 'function'
              ? '#475569'
              : n.type === 'tunable'
              ? '#06b6d4'
              : '#334155'
          }
        />
      </ReactFlow>

      {/* ---------- PROJECT-MODE LEGEND ---------- */}
      {isProject && (
        <div className="pointer-events-none absolute bottom-6 left-6 z-20 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-[11px] shadow-lg backdrop-blur">
          <div className="mb-1 font-semibold text-slate-300">Click to trace · double-click to open</div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block h-0.5 w-5" style={{ background: DOWNSTREAM_COLOR }} /> affects (imports) →
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block h-0.5 w-5" style={{ background: UPSTREAM_COLOR }} /> ← affected by (imported by)
          </div>
          <div className="mt-1 text-slate-500">🖼 image · 🔊 audio · ▢ text → editor/viewer</div>
        </div>
      )}

      {/* ---------- FAB (creation — function mode only) ---------- */}
      {!isProject && (
        <button
          onClick={openMenuAtCenter}
          title="Create…"
          className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-xl shadow-indigo-900/50 transition hover:bg-indigo-500 active:scale-95"
        >
          +
        </button>
      )}

      {/* ---------- CONTEXT MENU ---------- */}
      {menu && (
        <CanvasMenu
          x={menu.x}
          y={menu.y}
          files={Object.values(files)}
          onClose={() => setMenu(null)}
          onCreateSubspace={() => { createSubspace(menu.flowPos); setMenu(null) }}
          onCreateFile={() => {
            const folder = window.prompt('Folder path for the new file', 'src/feature')
            if (folder === null) return
            createFile(menu.flowPos, folder)
            setMenu(null)
          }}
          onCreateFunction={(fileId) => {
            const name = window.prompt('Function name', 'newFn()')
            if (name === null) return
            createFunction(fileId, name)
            setMenu(null)
          }}
        />
      )}
    </div>
  )
}

function ToggleBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded-full px-3 py-1.5 font-medium transition-colors',
        active ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

/* ---------- creation context menu ---------- */
function CanvasMenu({ x, y, files, onCreateSubspace, onCreateFile, onCreateFunction, onClose }) {
  const [fnSub, setFnSub] = useState(false)
  return (
    <div
      className="absolute z-30 w-56 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 py-1 text-sm shadow-2xl backdrop-blur"
      style={{ left: x, top: y }}
      onClick={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-slate-500">Create</div>
      <MenuItem icon="◈" onClick={onCreateSubspace}>New Subspace</MenuItem>
      <MenuItem icon="▢" onClick={onCreateFile}>New File…</MenuItem>
      <div className="relative">
        <MenuItem icon="◯" chevron onClick={() => setFnSub((v) => !v)}>
          New Function
        </MenuItem>
        {fnSub && (
          <div className="border-t border-slate-800 bg-slate-950/60">
            {files.length === 0 && <div className="px-6 py-2 text-xs text-slate-500">No files yet</div>}
            {files.map((f) => (
              <button
                key={f.id}
                onClick={() => onCreateFunction(f.id)}
                className="block w-full px-6 py-1.5 text-left text-xs text-slate-300 hover:bg-slate-800"
              >
                in <span className="font-mono text-slate-100">{f.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="my-1 border-t border-slate-800" />
      <MenuItem icon="✕" onClick={onClose}>Close</MenuItem>
    </div>
  )
}

function MenuItem({ icon, children, onClick, chevron }) {
  return (
    <button onClick={onClick} className="flex w-full items-center gap-3 px-3 py-1.5 text-left text-slate-200 hover:bg-slate-800">
      <span className="w-4 text-center text-slate-400">{icon}</span>
      <span className="flex-1">{children}</span>
      {chevron && <span className="text-slate-500">▾</span>}
    </button>
  )
}

/* =============================================================================
 *  PUBLIC WRAPPER
 * ========================================================================== */
export default function MapView() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  )
}
`,Gx=`import { useEffect } from 'react'
import { useStore } from '../store'

/* Terminal editor modal — opened by double-clicking a File (node or explorer
 * row). A mock code/terminal surface generated from the file's functions. */
export default function TerminalModal() {
  const terminalFileId = useStore((s) => s.terminalFileId)
  const closeTerminal = useStore((s) => s.closeTerminal)
  const files = useStore((s) => s.files)
  const functions = useStore((s) => s.functions)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeTerminal()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeTerminal])

  if (!terminalFileId) return null
  const file = files[terminalFileId]
  if (!file) return null
  const fns = Object.values(functions).filter((f) => f.fileId === terminalFileId)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={closeTerminal}>
      <div
        className="flex h-[70vh] w-[760px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2">
          <span className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500" />
            <span className="h-3 w-3 rounded-full bg-amber-500" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </span>
          <span className="ml-2 font-mono text-xs text-slate-300">
            {file.folderPath}/{file.name}
          </span>
          <button onClick={closeTerminal} className="ml-auto text-slate-500 hover:text-white">✕</button>
        </div>

        {/* editor body */}
        <div className="thin-scroll flex-1 overflow-auto bg-[#0b0e14] p-4 font-mono text-[13px] leading-relaxed">
          <div className="text-slate-500">{'// ' + file.name + ' — ' + fns.length + ' functions'}</div>
          <div className="mt-2">
            <span className="text-fuchsia-400">import</span> <span className="text-slate-300">{'{ runtime }'}</span>{' '}
            <span className="text-fuchsia-400">from</span> <span className="text-emerald-400">'../runtime'</span>
          </div>
          {fns.map((fn) => (
            <div key={fn.id} className="mt-4">
              <span className="text-sky-400">export function</span>{' '}
              <span className="text-amber-300">{fn.name.replace('()', '')}</span>
              <span className="text-slate-300">(args) {'{'}</span>
              <div className="pl-6 text-slate-400">
                <span className="text-fuchsia-400">return</span> runtime.exec(<span className="text-emerald-400">'{fn.name}'</span>)
              </div>
              <span className="text-slate-300">{'}'}</span>
            </div>
          ))}
          {fns.length === 0 && <div className="mt-4 text-slate-600">{'// empty file — add a function from the canvas'}</div>}
        </div>

        {/* prompt line */}
        <div className="flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-4 py-2 font-mono text-xs">
          <span className="text-emerald-400">➜</span>
          <span className="text-sky-400">{file.folderPath}</span>
          <span className="text-slate-300">$ </span>
          <span className="text-slate-500">vim {file.name}</span>
          <span className="ml-1 inline-block h-3.5 w-2 animate-pulse bg-slate-400" />
        </div>
      </div>
    </div>
  )
}
`,Kx=`import { BaseEdge } from 'reactflow'

/* AroundEdge — instead of a straight line that slices through node bodies, this
 * draws a curve that bows away from the node row so the arrow visibly routes
 * *around* the nodes. Parallel edges from the same node get increasing \`lane\`
 * offsets so a fan of dependencies spreads out and stays readable.
 *
 *   data.bow  = 'up' | 'down'  (which way to arc)
 *   data.lane = 0,1,2,…        (extra separation for sibling edges)
 */
export default function AroundEdge({ id, sourceX, sourceY, targetX, targetY, markerEnd, style, data }) {
  const dx = targetX - sourceX
  const dy = targetY - sourceY
  const dist = Math.hypot(dx, dy)
  const lane = data?.lane ?? 0
  const sign = data?.bow === 'up' ? -1 : 1

  // Bow grows with distance (so long edges clear more) plus per-lane spreading.
  const bow = (Math.min(170, 55 + dist * 0.16) + lane * 30) * sign

  // Control points pushed out perpendicular-ish (vertically) from the midline,
  // biased toward the endpoints so the curve leaves/enters roughly horizontally.
  const c1x = sourceX + dx * 0.25
  const c2x = sourceX + dx * 0.75
  const cy = (sourceY + targetY) / 2 + bow

  const path = \`M \${sourceX},\${sourceY} C \${c1x},\${cy} \${c2x},\${cy} \${targetX},\${targetY}\`

  return <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} />
}
`,Yx=`import { memo } from 'react'

/* Folder cluster — a translucent background rectangle that visually groups the
 * files belonging to the same folder. Purely decorative / spatial. */
function ClusterNode({ data }) {
  return (
    <div
      className="h-full w-full rounded-2xl border border-dashed border-slate-700/70 bg-slate-800/15"
      style={{ width: data.width, height: data.height }}
    >
      <div className="px-3 py-1.5 text-[11px] font-mono tracking-tight text-slate-500">
        <span className="text-slate-600">📁</span> {data.name}
      </div>
    </div>
  )
}

export default memo(ClusterNode)
`,Qx=`import { memo } from 'react'
import { useStore } from '../../store'

/* File "square" — a movable container that auto-resizes (handled in the store /
 * MapView derivation) to fit the function pills dropped inside it. Double-click
 * opens the terminal editor modal. */
function FileNode({ id, data }) {
  const focusedFileId = useStore((s) => s.focusedFileId)
  const openTerminal = useStore((s) => s.openTerminal)
  const isHighlighted = focusedFileId === id

  return (
    <div
      onDoubleClick={(e) => {
        e.stopPropagation()
        openTerminal(id)
      }}
      className={[
        'relative h-full w-full rounded-xl border bg-slate-900/80 backdrop-blur-sm transition-all',
        isHighlighted
          ? 'border-amber-400 shadow-[0_0_0_1px_rgba(251,191,36,0.7),0_0_22px_rgba(251,191,36,0.35)]'
          : 'border-slate-700 shadow-lg shadow-black/40',
      ].join(' ')}
      style={{ width: data.width, height: data.height }}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-slate-700/70">
        <span className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="truncate text-[11px] font-mono text-slate-200">{data.name}</span>
        <span className="ml-auto truncate text-[9px] text-slate-500">{data.folderPath}</span>
      </div>
    </div>
  )
}

export default memo(FileNode)
`,Xx=`import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { useStore } from '../../store'

/* Function "pill" — lives inside a File node. Single-click focuses it, which
 * drives the entire dim / edge / port system from the store. */
function FunctionNode({ id, data }) {
  const focusedNodeId = useStore((s) => s.focusedNodeId)
  const functions = useStore((s) => s.functions)
  const setFocusedNode = useStore((s) => s.setFocusedNode)

  const isFocused = focusedNodeId === id
  const focusedFn = focusedNodeId ? functions[focusedNodeId] : null
  // Dim other functions that share the focused function's parent file.
  const dimmed = focusedFn && !isFocused && focusedFn.fileId === data.fileId

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        setFocusedNode(isFocused ? null : id)
      }}
      className={[
        'group relative flex items-center gap-2 rounded-full border px-3 text-[12px] font-mono select-none cursor-pointer transition-all duration-150',
        isFocused
          ? 'border-indigo-400 bg-indigo-500/25 text-indigo-100 shadow-[0_0_0_1px_rgba(99,102,241,0.6),0_0_18px_rgba(99,102,241,0.45)]'
          : dimmed
          ? 'border-slate-700/60 bg-transparent text-slate-500'
          : 'border-slate-600 bg-slate-700/70 text-slate-100 hover:border-slate-400',
      ].join(' ')}
      style={{ width: data.width, height: data.height }}
    >
      <Handle type="target" position={Position.Left} className="!bg-slate-400" />
      <span
        className={[
          'h-2 w-2 shrink-0 rounded-full',
          isFocused ? 'bg-indigo-300' : dimmed ? 'bg-slate-600' : 'bg-emerald-400',
        ].join(' ')}
      />
      <span className="truncate">{data.name}</span>
      <Handle type="source" position={Position.Right} className="!bg-slate-400" />
    </div>
  )
}

export default memo(FunctionNode)
`,qx=`import { memo } from 'react'
import { Handle, Position } from 'reactflow'

/* Port — a small coloured connector that materialises on a File's left/right
 * edge when one of its functions is focused.
 *   side: 'left'  → an external function CALLS the focused one (upstream)
 *   side: 'right' → the focused function CALLS an external one (downstream)
 * Colour is keyed to the external file the call crosses to. */
function PortNode({ data }) {
  const isLeft = data.side === 'left'
  return (
    <div className="group relative nodrag" style={{ width: 16, height: 16 }}>
      <div
        className="h-4 w-4 rounded-full ring-2 ring-slate-950 transition-transform group-hover:scale-125"
        style={{ background: data.color, boxShadow: \`0 0 10px \${data.color}\` }}
      />
      {/* Left ports emit (source on their right); right ports receive (target on their left). */}
      {isLeft ? (
        <Handle type="source" position={Position.Right} style={{ background: data.color }} />
      ) : (
        <Handle type="target" position={Position.Left} style={{ background: data.color }} />
      )}

      {/* hover tooltip naming the external function + file */}
      <div
        className={[
          'pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-0.5 text-[10px] font-mono text-slate-200 opacity-0 ring-1 ring-slate-700 transition-opacity group-hover:opacity-100',
          isLeft ? 'right-6' : 'left-6',
        ].join(' ')}
      >
        {data.label}
      </div>
    </div>
  )
}

export default memo(PortNode)
`,Zx=`import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { useStore } from '../../store'
import { FILE_EXT_COLOR } from '../../projectGraph'

/* A real file from the directory. Clicking it selects it; the store then drives
 * the directional arrows + dimming for the whole map.
 *
 * Relationship to the currently selected file decides the look:
 *   selected   → highlighted ring
 *   downstream → this file is AFFECTED BY the selection (selection points here)
 *   upstream   → this file AFFECTS the selection (it points at the selection)
 *   dim        → not involved → faded out
 */
function ProjectFileNode({ id, data }) {
  const selected = useStore((s) => s.selectedProjectFileId)
  const projectEdges = useStore((s) => s.projectEdges)
  const selectProjectFile = useStore((s) => s.selectProjectFile)
  const openEditor = useStore((s) => s.openEditor)

  let relation = 'idle'
  if (selected) {
    if (selected === id) relation = 'selected'
    else if (projectEdges.some((e) => e.source === selected && e.target === id)) relation = 'downstream'
    else if (projectEdges.some((e) => e.target === selected && e.source === id)) relation = 'upstream'
    else relation = 'dim'
  }

  const ext = data.name.split('.').pop()
  const dot = FILE_EXT_COLOR[ext] || '#64748b'
  const kindIcon = data.kind === 'image' ? '🖼' : data.kind === 'audio' ? '🔊' : null

  const shell =
    relation === 'selected'
      ? 'border-indigo-400 bg-indigo-500/20 shadow-[0_0_0_1px_rgba(99,102,241,0.7),0_0_20px_rgba(99,102,241,0.4)]'
      : relation === 'downstream'
      ? 'border-emerald-400/80 bg-slate-800/90'
      : relation === 'upstream'
      ? 'border-amber-400/80 bg-slate-800/90'
      : 'border-slate-700 bg-slate-800/80 hover:border-slate-500'

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        selectProjectFile(id)
      }}
      onDoubleClick={(e) => {
        e.stopPropagation()
        openEditor(id)
      }}
      title="Double-click to open"
      className={[
        'flex cursor-pointer flex-col rounded-lg border px-3 py-2 transition-all duration-200',
        shell,
        relation === 'dim' ? 'opacity-20 hover:opacity-50' : 'opacity-100',
      ].join(' ')}
      style={{ width: 178, height: 64 }}
    >
      <Handle type="target" position={Position.Left} className="!h-2 !w-2 !bg-amber-400" />
      <div className="flex items-center gap-2">
        {kindIcon ? (
          <span className="text-[13px] leading-none">{kindIcon}</span>
        ) : (
          <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: dot }} />
        )}
        <span className="truncate font-mono text-[12px] text-slate-100">{data.name}</span>
      </div>
      <span className="mt-1 truncate pl-[18px] text-[9px] text-slate-500">{data.folder}</span>
      <Handle type="source" position={Position.Right} className="!h-2 !w-2 !bg-emerald-400" />
    </div>
  )
}

export default memo(ProjectFileNode)
`,Jx=`import { memo, useState } from 'react'
import { useStore } from '../../store'

const SWATCHES = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#ef4444']

/* Subspace — a translucent rectangle used to visually group objects. Has a
 * top-right toolbar: Description · Colour · Expand. */
function SubspaceNode({ id, data }) {
  const setSubspaceColor = useStore((s) => s.setSubspaceColor)
  const setSubspaceDescription = useStore((s) => s.setSubspaceDescription)
  const setExpandedSubspace = useStore((s) => s.setExpandedSubspace)

  const [showDesc, setShowDesc] = useState(false)
  const [showColors, setShowColors] = useState(false)

  return (
    <div
      className="relative h-full w-full rounded-2xl border-2 border-dashed"
      style={{
        width: data.width,
        height: data.height,
        borderColor: \`\${data.color}66\`,
        background: \`\${data.color}10\`,
        boxShadow: \`inset 0 0 60px \${data.color}12\`,
      }}
    >
      {/* label */}
      <div className="absolute left-3 top-2 select-none text-[11px] font-semibold uppercase tracking-wider" style={{ color: \`\${data.color}cc\` }}>
        ◈ {data.name}
      </div>

      {/* toolbar */}
      <div className="absolute right-2 top-2 flex items-center gap-1 nodrag">
        <ToolBtn label="Description" onClick={() => { setShowDesc((v) => !v); setShowColors(false) }}>i</ToolBtn>
        <ToolBtn label="Colour" onClick={() => { setShowColors((v) => !v); setShowDesc(false) }}>
          <span className="h-3 w-3 rounded-full" style={{ background: data.color }} />
        </ToolBtn>
        <ToolBtn label="Expand" onClick={() => setExpandedSubspace(id)}>⛶</ToolBtn>
      </div>

      {/* description popover */}
      {showDesc && (
        <div className="absolute right-2 top-10 z-10 w-60 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag">
          <textarea
            autoFocus
            defaultValue={data.description}
            onBlur={(e) => setSubspaceDescription(id, e.target.value)}
            placeholder="Describe this subspace…"
            className="h-20 w-full resize-none rounded bg-slate-800 p-2 text-[11px] text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      )}

      {/* colour popover */}
      {showColors && (
        <div className="absolute right-2 top-10 z-10 flex gap-1.5 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag">
          {SWATCHES.map((c) => (
            <button
              key={c}
              onClick={() => { setSubspaceColor(id, c); setShowColors(false) }}
              className="h-5 w-5 rounded-full ring-2 ring-transparent hover:ring-white/60"
              style={{ background: c }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ToolBtn({ children, label, onClick }) {
  return (
    <button
      title={label}
      onClick={(e) => { e.stopPropagation(); onClick() }}
      className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 text-[11px] text-slate-300 hover:bg-slate-800 hover:text-white"
    >
      {children}
    </button>
  )
}

export default memo(SubspaceNode)
`,ew=`import { memo } from 'react'

/* Tunable — a visual variant of the square/file object representing a tweakable
 * configuration value. */
function TunableNode({ data }) {
  return (
    <div className="flex h-[88px] w-[150px] flex-col rounded-xl border border-cyan-500/50 bg-gradient-to-br from-cyan-900/40 to-slate-900/80 p-2.5 shadow-lg shadow-cyan-900/30">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-cyan-300/80">
        <span>⚙</span>
        <span>tunable</span>
      </div>
      <div className="mt-1 truncate font-mono text-[12px] text-slate-100">{data.name}</div>
      <div className="mt-auto rounded-md bg-slate-950/60 px-2 py-1 text-center font-mono text-[13px] font-semibold text-cyan-200">
        {data.value}
      </div>
    </div>
  )
}

export default memo(TunableNode)
`,tw=`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html,
body,
#root {
  height: 100%;
  margin: 0;
  background: #0b0e14;
  color: #e5e7eb;
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* ---- React Flow theme overrides ---- */
.react-flow {
  background: #0b0e14;
}

.react-flow__attribution {
  display: none;
}

.react-flow__handle {
  width: 7px;
  height: 7px;
  border: none;
  background: #475569;
}

/* Animated focus edges */
.react-flow__edge.focus-edge .react-flow__edge-path {
  stroke-dasharray: 6;
  animation: dashflow 0.6s linear infinite;
}

@keyframes dashflow {
  to {
    stroke-dashoffset: -12;
  }
}

/* Thin scrollbars for panels */
.thin-scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.thin-scroll::-webkit-scrollbar-thumb {
  background: #2a3344;
  border-radius: 9999px;
}
.thin-scroll::-webkit-scrollbar-track {
  background: transparent;
}
`,nw=`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`,rw=`import { create } from 'zustand'
import { buildProjectGraph, FILE_SOURCE, kindOf, dirname, parseImports, resolveImport } from './projectGraph'

/* =============================================================================
 *  GEOMETRY CONSTANTS
 *  Functions are children of File nodes; their \`position\` is relative to the
 *  parent File's top-left. The File node dynamically resizes to enclose its
 *  children (+ a buffer), see \`getFileSize\` below.
 * ========================================================================== */
export const FN = { W: 168, H: 38, GAP_Y: 14 }
export const FILE = {
  HEADER: 34, // reserved space for the file title bar
  PAD: 18, // inner padding / resize buffer around the function cluster
  MIN_W: 220,
  MIN_H: 110,
}
export const PORT = { W: 16, H: 16, GAP_Y: 26 }

/* A small deterministic palette used to colour external "port" nodes by the
 * file they originate from / point to. */
export const FILE_COLORS = {
  'file-auth': '#22d3ee', // cyan
  'file-api': '#a78bfa', // violet
  'file-db': '#f472b6', // pink
  'file-ui': '#34d399', // emerald
}

/* =============================================================================
 *  MOCK STATE  (no backend — this hardcoded graph drives every interaction)
 * ========================================================================== */
const initialFiles = {
  'file-auth': { id: 'file-auth', name: 'auth.service.ts', folderPath: 'src/core/auth', position: { x: 80, y: 80 } },
  'file-api': { id: 'file-api', name: 'api.client.ts', folderPath: 'src/core/net', position: { x: 620, y: 60 } },
  'file-db': { id: 'file-db', name: 'db.repository.ts', folderPath: 'src/core/data', position: { x: 360, y: 520 } },
  'file-ui': { id: 'file-ui', name: 'profile.view.tsx', folderPath: 'src/ui/profile', position: { x: 1040, y: 380 } },
}

/* Function positions are RELATIVE to their parent file's content origin. */
const initialFunctions = {
  // --- auth.service.ts ---
  'fn-login': { id: 'fn-login', name: 'login()', fileId: 'file-auth', position: { x: PORT.W, y: FILE.HEADER + 8 } },
  'fn-validate': { id: 'fn-validate', name: 'validateToken()', fileId: 'file-auth', position: { x: PORT.W, y: FILE.HEADER + 8 + (FN.H + FN.GAP_Y) } },
  'fn-hash': { id: 'fn-hash', name: 'hashPassword()', fileId: 'file-auth', position: { x: PORT.W, y: FILE.HEADER + 8 + 2 * (FN.H + FN.GAP_Y) } },
  // --- api.client.ts ---
  'fn-fetchUser': { id: 'fn-fetchUser', name: 'fetchUser()', fileId: 'file-api', position: { x: PORT.W, y: FILE.HEADER + 8 } },
  'fn-request': { id: 'fn-request', name: 'request()', fileId: 'file-api', position: { x: PORT.W, y: FILE.HEADER + 8 + (FN.H + FN.GAP_Y) } },
  // --- db.repository.ts ---
  'fn-query': { id: 'fn-query', name: 'query()', fileId: 'file-db', position: { x: PORT.W, y: FILE.HEADER + 8 } },
  'fn-connect': { id: 'fn-connect', name: 'connect()', fileId: 'file-db', position: { x: PORT.W, y: FILE.HEADER + 8 + (FN.H + FN.GAP_Y) } },
  // --- profile.view.tsx ---
  'fn-render': { id: 'fn-render', name: 'renderProfile()', fileId: 'file-ui', position: { x: PORT.W, y: FILE.HEADER + 8 } },
}

/* Call graph: \`source\` calls \`target\` (source = caller / upstream owner,
 * target = callee / downstream). This single list powers internal edges AND
 * the left/right port nodes. */
const initialCalls = [
  { source: 'fn-login', target: 'fn-validate' }, // internal (auth)
  { source: 'fn-login', target: 'fn-hash' }, // internal (auth)
  { source: 'fn-login', target: 'fn-fetchUser' }, // auth -> api
  { source: 'fn-validate', target: 'fn-query' }, // auth -> db
  { source: 'fn-fetchUser', target: 'fn-request' }, // internal (api)
  { source: 'fn-fetchUser', target: 'fn-query' }, // api -> db
  { source: 'fn-request', target: 'fn-validate' }, // api -> auth  (gives validate an external caller)
  { source: 'fn-query', target: 'fn-connect' }, // internal (db)
  { source: 'fn-render', target: 'fn-fetchUser' }, // ui -> api
  { source: 'fn-render', target: 'fn-login' }, // ui -> auth
]

const initialSubspaces = {
  'sub-core': {
    id: 'sub-core',
    name: 'Core Domain',
    position: { x: 20, y: 20 },
    size: { width: 760, height: 760 },
    color: '#6366f1',
    description: 'Authentication, networking and persistence live here.',
  },
}

const initialTunables = {
  'tune-cache': { id: 'tune-cache', name: 'CACHE_TTL', value: '300s', position: { x: 1060, y: 120 } },
}

const initialBookmarks = [
  { id: 'bm-auth', name: 'Auth cluster', viewport: { x: 40, y: 20, zoom: 1.1 }, focusObjectId: 'fn-login', temporary: false },
  { id: 'bm-db', name: 'Data layer', viewport: { x: -160, y: -360, zoom: 1 }, focusObjectId: 'fn-query', temporary: false },
]

/* Real directory + dependency graph, derived from the actual files on disk
 * (see projectGraph.js). This is the data behind the "Project Map" view. */
const projectGraph = buildProjectGraph()

/* =============================================================================
 *  STORE
 * ========================================================================== */
export const useStore = create((set, get) => ({
  files: initialFiles,
  functions: initialFunctions,
  calls: initialCalls,
  subspaces: initialSubspaces,
  tunables: initialTunables,
  bookmarks: initialBookmarks,

  // --- Project Map (real directory) ---
  viewMode: 'project', // 'project' (real directory) | 'functions' (mock spatial demo)
  projectFiles: projectGraph.files,
  projectFolders: projectGraph.folders,
  projectEdges: projectGraph.edges, // [{ source, target }] = source imports/affects target
  selectedProjectFileId: null,
  projectFolderFilter: null,

  setViewMode: (mode) => set({ viewMode: mode, focusedNodeId: null, selectedProjectFileId: null }),
  selectProjectFile: (id) => set({ selectedProjectFileId: id }),
  clearProjectSelection: () => set({ selectedProjectFileId: null }),
  setProjectFolderFilter: (folder) => set({ projectFolderFilter: folder }),
  clearProjectFolderFilter: () => set({ projectFolderFilter: null }),

  addProjectFiles: (newFiles) =>
    set((state) => {
      const projectFiles = { ...state.projectFiles }
      const projectFolders = { ...state.projectFolders }
      const projectEdges = [...state.projectEdges]
      const allPaths = new Set(Object.keys(projectFiles))

      // Place imported files in a visible area with simple layout.
      const folderCounts = Object.values(projectFiles).reduce((acc, file) => {
        acc[file.folder] = (acc[file.folder] || 0) + 1
        return acc
      }, {})

      for (const file of newFiles) {
        if (projectFiles[file.path]) continue
        const folder = file.folder || dirname(file.path)
        const existingFolderCount = folderCounts[folder] || 0
        const nodeX = 920 + existingFolderCount * 220
        const nodeY = 120 + (Object.keys(projectFiles).length % 6) * 120

        projectFiles[file.path] = {
          id: file.path,
          path: file.path,
          name: file.name,
          folder,
          kind: file.kind,
          position: file.position || { x: nodeX, y: nodeY },
          url: file.url || null,
          source: file.source || null,
        }

        allPaths.add(file.path)
        folderCounts[folder] = existingFolderCount + 1

        if (!projectFolders[folder]) {
          projectFolders[folder] = {
            id: folder,
            name: folder === '/' ? 'project root' : folder,
            position: { x: Object.keys(projectFolders).length * 940, y: 0 },
            size: { width: 380, height: 240 },
          }
        }
      }

      for (const path of Object.keys(projectFiles)) {
        const file = projectFiles[path]
        if (file.kind !== 'text') continue
        const source = file.source ?? FILE_SOURCE[path]
        if (typeof source !== 'string') continue
        for (const spec of parseImports(source)) {
          const target = resolveImport(path, spec, allPaths)
          if (!target || target === path) continue
          if (!projectEdges.some((e) => e.source === path && e.target === target)) {
            projectEdges.push({ source: path, target })
          }
        }
      }

      return { projectFiles, projectFolders, projectEdges }
    }),
  deleteProjectFile: (id) =>
    set((state) => {
      const projectFiles = { ...state.projectFiles }
      const projectFolders = { ...state.projectFolders }
      const projectEdges = state.projectEdges.filter((e) => e.source !== id && e.target !== id)

      delete projectFiles[id]
      const folder = state.projectFiles[id]?.folder
      if (folder) {
        const stillInFolder = Object.values(projectFiles).some((file) => file.folder === folder)
        if (!stillInFolder) delete projectFolders[folder]
      }

      return {
        projectFiles,
        projectFolders,
        projectEdges,
        selectedProjectFileId: state.selectedProjectFileId === id ? null : state.selectedProjectFileId,
      }
    }),

  // --- floating text editor / asset viewer ---
  editorFileId: null, // project file currently open in the floating panel
  fileEdits: {}, // { [path]: editedContent } — in-memory edits (no backend)
  openEditor: (id) => set({ editorFileId: id }),
  closeEditor: () => set({ editorFileId: null }),
  setFileEdit: (path, content) => set((s) => ({ fileEdits: { ...s.fileEdits, [path]: content } })),
  revertFileEdit: (path) =>
    set((s) => {
      const next = { ...s.fileEdits }
      delete next[path]
      return { fileEdits: next }
    }),

  // --- interaction state ---
  focusedNodeId: null, // currently focused FUNCTION id (drives ports/edges/dimming)
  focusedFileId: null, // file highlighted from the File Explorer
  expandedSubspaceId: null, // subspace requesting a full-map zoom
  terminalFileId: null, // file whose terminal modal is open
  searchQuery: '',
  pendingFocus: null, // { id } — a node the map should fitView onto, consumed by MapView
  flowApi: null, // imperative bridge { getViewport, setViewport, fitTo } set by MapView

  setFlowApi: (api) => set({ flowApi: api }),

  /* ----- focus / selection ----- */
  setFocusedNode: (id) => set({ focusedNodeId: id }),
  clearFocus: () => set({ focusedNodeId: null, focusedFileId: null }),

  focusFile: (fileId) => set({ focusedFileId: fileId, pendingFocus: { id: fileId } }),
  requestFocus: (id) => set({ pendingFocus: { id } }),
  consumePendingFocus: () => set({ pendingFocus: null }),

  setExpandedSubspace: (id) => set({ expandedSubspaceId: id, pendingFocus: id ? { id } : get().pendingFocus }),
  clearExpandedSubspace: () => set({ expandedSubspaceId: null }),

  openTerminal: (fileId) => set({ terminalFileId: fileId }),
  closeTerminal: () => set({ terminalFileId: null }),

  setSearchQuery: (q) => set({ searchQuery: q }),

  /* ----- position updates (called from React Flow onNodesChange) ----- */
  moveNode: (id, position) =>
    set((state) => {
      if (state.functions[id]) {
        return { functions: { ...state.functions, [id]: { ...state.functions[id], position } } }
      }
      if (state.files[id]) {
        return { files: { ...state.files, [id]: { ...state.files[id], position } } }
      }
      if (state.subspaces[id]) {
        return { subspaces: { ...state.subspaces, [id]: { ...state.subspaces[id], position } } }
      }
      if (state.tunables[id]) {
        return { tunables: { ...state.tunables, [id]: { ...state.tunables[id], position } } }
      }
      if (state.projectFiles[id]) {
        return { projectFiles: { ...state.projectFiles, [id]: { ...state.projectFiles[id], position } } }
      }
      return {}
    }),

  /* ----- subspace controls ----- */
  setSubspaceColor: (id, color) =>
    set((s) => ({ subspaces: { ...s.subspaces, [id]: { ...s.subspaces[id], color } } })),
  setSubspaceDescription: (id, description) =>
    set((s) => ({ subspaces: { ...s.subspaces, [id]: { ...s.subspaces[id], description } } })),

  /* ----- bookmarks ----- */
  // Save current viewport (used by the top "Save view" button).
  saveBookmark: (viewport, name) =>
    set((s) => ({
      bookmarks: [
        ...s.bookmarks,
        { id: \`bm-\${Date.now()}\`, name: name || \`View \${s.bookmarks.length + 1}\`, viewport, focusObjectId: s.focusedNodeId, temporary: false },
      ],
    })),
  // Double-click flow: snapshot the *current* view as a temp bookmark first.
  pushTemporaryBookmark: (viewport) =>
    set((s) => ({
      bookmarks: [
        ...s.bookmarks,
        { id: \`tmp-\${Date.now()}\`, name: \`↩ Return point\`, viewport, focusObjectId: s.focusedNodeId, temporary: true },
      ],
    })),
  removeBookmark: (id) => set((s) => ({ bookmarks: s.bookmarks.filter((b) => b.id !== id) })),

  /* ----- creation (context menu / FAB) ----- */
  createSubspace: (position) =>
    set((s) => {
      const id = \`sub-\${Date.now()}\`
      return {
        subspaces: {
          ...s.subspaces,
          [id]: { id, name: 'New Subspace', position, size: { width: 360, height: 280 }, color: '#10b981', description: '' },
        },
      }
    }),
  createFile: (position, folderPath) =>
    set((s) => {
      const id = \`file-\${Date.now()}\`
      return {
        files: { ...s.files, [id]: { id, name: 'untitled.ts', folderPath: folderPath || 'src', position } },
      }
    }),
  createFunction: (fileId, name) =>
    set((s) => {
      const id = \`fn-\${Date.now()}\`
      const siblings = Object.values(s.functions).filter((f) => f.fileId === fileId)
      const y = FILE.HEADER + 8 + siblings.length * (FN.H + FN.GAP_Y)
      return {
        functions: { ...s.functions, [id]: { id, name: name || 'newFn()', fileId, position: { x: PORT.W, y } } },
      }
    }),
}))

/* =============================================================================
 *  DERIVED SELECTORS (pure helpers — not hooks)
 * ========================================================================== */

// Dynamic file size: bounding box of child functions + buffer.
export function getFileSize(functions, fileId) {
  const kids = Object.values(functions).filter((f) => f.fileId === fileId)
  if (kids.length === 0) return { width: FILE.MIN_W, height: FILE.MIN_H }
  let maxX = 0
  let maxY = 0
  for (const f of kids) {
    maxX = Math.max(maxX, f.position.x + FN.W)
    maxY = Math.max(maxY, f.position.y + FN.H)
  }
  return {
    width: Math.max(FILE.MIN_W, maxX + FILE.PAD + PORT.W),
    height: Math.max(FILE.MIN_H, maxY + FILE.PAD),
  }
}

/* Given a focused function, classify every related call into the 4 buckets
 * that drive edges + ports. Returns relative ids so the renderer can build
 * React Flow nodes/edges. */
export function getFocusGraph(state) {
  const { focusedNodeId, functions, calls } = state
  const focused = focusedNodeId && functions[focusedNodeId]
  if (!focused) return null
  const fileId = focused.fileId

  const internalUpstream = [] // same-file callers   -> edge caller→focused
  const internalDownstream = [] // same-file callees -> edge focused→callee
  const leftPorts = [] // external callers (upstream)   -> port on LEFT edge
  const rightPorts = [] // external callees (downstream) -> port on RIGHT edge

  for (const c of calls) {
    if (c.target === focusedNodeId) {
      const caller = functions[c.source]
      if (!caller) continue
      if (caller.fileId === fileId) internalUpstream.push(caller.id)
      else leftPorts.push({ extFnId: caller.id, extFileId: caller.fileId })
    }
    if (c.source === focusedNodeId) {
      const callee = functions[c.target]
      if (!callee) continue
      if (callee.fileId === fileId) internalDownstream.push(callee.id)
      else rightPorts.push({ extFnId: callee.id, extFileId: callee.fileId })
    }
  }
  return { fileId, focusedNodeId, internalUpstream, internalDownstream, leftPorts, rightPorts }
}

/* PROJECT MAP focus: given the selected file, split its dependency edges into
 *   downstream = files this file affects/imports  (arrow exits selected's RIGHT)
 *   upstream   = files that affect/import this one (arrow enters selected's LEFT)
 * plus a \`neighbors\` set used to dim everything uninvolved. */
export function getProjectFocus(state) {
  const { selectedProjectFileId, projectEdges } = state
  if (!selectedProjectFileId) return null
  const downstream = []
  const upstream = []
  for (const e of projectEdges) {
    if (e.source === selectedProjectFileId) downstream.push(e.target)
    if (e.target === selectedProjectFileId) upstream.push(e.source)
  }
  const neighbors = new Set([selectedProjectFileId, ...downstream, ...upstream])
  return { id: selectedProjectFileId, downstream, upstream, neighbors }
}

/* Current content for a text file in the editor: the in-memory edit if present,
 * otherwise the original source pulled at build time. */
export function getFileContent(state, path) {
  if (path in state.fileEdits) return state.fileEdits[path]
  const projectFile = state.projectFiles?.[path]
  if (projectFile?.source) return projectFile.source
  return FILE_SOURCE[path] ?? ''
}
`,ow=`/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0b0e14',
        panel: '#11151f',
        edge: '#1e2533',
        accent: '#6366f1',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        dashflow: {
          to: { strokeDashoffset: '-12' },
        },
      },
    },
  },
  plugins: [],
}
`,sw=`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
`,iw="/assets/chime-ChslVLjt.wav",lw="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMTYwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE2MCI+CiAgPGRlZnM+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImciIGN4PSI1MCUiIGN5PSI0MCUiIHI9IjcwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMGIwZTE0Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2cpIi8+CiAgPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTViNGZjIiBzdHJva2Utd2lkdGg9IjIiPgogICAgPGNpcmNsZSBjeD0iNzAiIGN5PSI4MCIgcj0iMjIiLz4KICAgIDxjaXJjbGUgY3g9IjE3MCIgY3k9IjU1IiByPSIxNiIvPgogICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTE1IiByPSIxMyIvPgogICAgPHBhdGggZD0iTTkyIDgwIEwxNTQgNTgiIHN0cm9rZT0iIzM0ZDM5OSIvPgogICAgPHBhdGggZD0iTTkwIDg2IEwxNDggMTEyIiBzdHJva2U9IiNmNTllMGIiLz4KICA8L2c+CiAgPGcgZmlsbD0iI2U1ZTdlYiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMyI+CiAgICA8dGV4dCB4PSI1MCIgeT0iMTQ2Ij5zcGF0aWFsLWlkZTwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo=",mu=Object.assign({"/README.md":Ax,"/index.html":Rx,"/package-lock.json":Dx,"/package.json":Lx,"/postcss.config.js":Ox,"/src/App.jsx":Hx,"/src/components/BookmarkManager.jsx":Bx,"/src/components/FileExplorer.jsx":Vx,"/src/components/FloatingEditor.jsx":Ux,"/src/components/Layout.jsx":Wx,"/src/components/MapView.jsx":$x,"/src/components/TerminalModal.jsx":Gx,"/src/components/edges/AroundEdge.jsx":Kx,"/src/components/nodes/ClusterNode.jsx":Yx,"/src/components/nodes/FileNode.jsx":Qx,"/src/components/nodes/FunctionNode.jsx":Xx,"/src/components/nodes/PortNode.jsx":qx,"/src/components/nodes/ProjectFileNode.jsx":Zx,"/src/components/nodes/SubspaceNode.jsx":Jx,"/src/components/nodes/TunableNode.jsx":ew,"/src/index.css":tw,"/src/main.jsx":nw,"/src/store.js":rw,"/tailwind.config.js":ow,"/vite.config.js":sw}),wf=Object.assign({"/src/assets/chime.wav":iw,"/src/assets/logo.svg":lw}),rm=mu,aw=new Set(["svg","png","jpg","jpeg","gif","webp","avif"]),uw=new Set(["mp3","wav","ogg","m4a","flac","aac"]);function om(e){const t=e.slice(e.lastIndexOf(".")+1).toLowerCase();return aw.has(t)?"image":uw.has(t)?"audio":"text"}function Fc(e){const t=e.lastIndexOf("/");return t<=0?"/":e.slice(0,t)}function bf(e){return e.slice(e.lastIndexOf("/")+1)}function cw(e,t){const n=`${e}/${t}`.split("/"),r=[];for(const o of n)o===""||o==="."||(o===".."?r.pop():r.push(o));return"/"+r.join("/")}const dw=["",".js",".jsx",".ts",".tsx",".css","/index.js","/index.jsx","/index.ts","/index.tsx"];function sm(e,t,n){if(!t.startsWith("."))return null;const r=cw(Fc(e),t);for(const o of dw){const s=r+o;if(n.has(s))return s}return null}const fw=/(?:import\s+[^'"]*from\s*|import\s*|require\s*\(\s*|import\s*\(\s*)['"]([^'"]+)['"]/g;function im(e){const t=[];let n;for(;(n=fw.exec(e))!==null;)t.push(n[1]);return t}const Sf=178,Ef=64,Vs=36,pw=3,kf=32,Us=22,jf=180,hw=3;function gw(){const e=Object.keys(mu),t=Object.keys(wf),n=[...new Set([...e,...t])].sort(),r=new Set(n),o={},s={};for(const h of n){const m=Fc(h),v=om(bf(h));o[h]={id:h,name:bf(h),folder:m,path:h,kind:v,url:wf[h]||null,position:{x:0,y:0}},(s[m]||(s[m]=[])).push(h)}const i=new Set,l=[];for(const h of e){const m=mu[h];if(typeof m=="string")for(const v of im(m)){const b=sm(h,v,r);if(!b||b===h)continue;const p=`${h}→${b}`;i.has(p)||(i.add(p),l.push({source:h,target:b}))}}const a={},u=Object.keys(s).sort();let c=0,d=0,f=0;return u.forEach((h,m)=>{const v=s[h].slice().sort(),b=Math.min(pw,v.length),p=Math.ceil(v.length/b),g=b*Sf+(b-1)*Vs,y=p*Ef+(p-1)*Vs,x=g+2*Us,I=kf+y+2*Us;a[h]={id:h,name:h==="/"?"project root":h,position:{x:c,y:d},size:{width:x,height:I}},v.forEach((z,_)=>{const M=_%b,j=Math.floor(_/b);o[z].position={x:c+Us+M*(Sf+Vs),y:d+kf+Us+j*(Ef+Vs)}}),c+=x+jf,f=Math.max(f,I),(m+1)%hw===0&&(c=0,d+=f+jf,f=0)}),{files:o,folders:a,edges:l}}const mw={jsx:"#38bdf8",tsx:"#38bdf8",js:"#eab308",ts:"#eab308",json:"#f59e0b",css:"#ec4899",md:"#94a3b8",html:"#fb923c",svg:"#a78bfa",png:"#a78bfa",jpg:"#a78bfa",wav:"#22d3ee",mp3:"#22d3ee"},Ke={W:168,H:38,GAP_Y:14},Te={HEADER:34,PAD:18,MIN_W:220,MIN_H:110},nt={W:16,GAP_Y:26},Ws={"file-auth":"#22d3ee","file-api":"#a78bfa","file-db":"#f472b6","file-ui":"#34d399"},yw={"file-auth":{id:"file-auth",name:"auth.service.ts",folderPath:"src/core/auth",position:{x:80,y:80}},"file-api":{id:"file-api",name:"api.client.ts",folderPath:"src/core/net",position:{x:620,y:60}},"file-db":{id:"file-db",name:"db.repository.ts",folderPath:"src/core/data",position:{x:360,y:520}},"file-ui":{id:"file-ui",name:"profile.view.tsx",folderPath:"src/ui/profile",position:{x:1040,y:380}}},vw={"fn-login":{id:"fn-login",name:"login()",fileId:"file-auth",position:{x:nt.W,y:Te.HEADER+8}},"fn-validate":{id:"fn-validate",name:"validateToken()",fileId:"file-auth",position:{x:nt.W,y:Te.HEADER+8+(Ke.H+Ke.GAP_Y)}},"fn-hash":{id:"fn-hash",name:"hashPassword()",fileId:"file-auth",position:{x:nt.W,y:Te.HEADER+8+2*(Ke.H+Ke.GAP_Y)}},"fn-fetchUser":{id:"fn-fetchUser",name:"fetchUser()",fileId:"file-api",position:{x:nt.W,y:Te.HEADER+8}},"fn-request":{id:"fn-request",name:"request()",fileId:"file-api",position:{x:nt.W,y:Te.HEADER+8+(Ke.H+Ke.GAP_Y)}},"fn-query":{id:"fn-query",name:"query()",fileId:"file-db",position:{x:nt.W,y:Te.HEADER+8}},"fn-connect":{id:"fn-connect",name:"connect()",fileId:"file-db",position:{x:nt.W,y:Te.HEADER+8+(Ke.H+Ke.GAP_Y)}},"fn-render":{id:"fn-render",name:"renderProfile()",fileId:"file-ui",position:{x:nt.W,y:Te.HEADER+8}}},xw=[{source:"fn-login",target:"fn-validate"},{source:"fn-login",target:"fn-hash"},{source:"fn-login",target:"fn-fetchUser"},{source:"fn-validate",target:"fn-query"},{source:"fn-fetchUser",target:"fn-request"},{source:"fn-fetchUser",target:"fn-query"},{source:"fn-request",target:"fn-validate"},{source:"fn-query",target:"fn-connect"},{source:"fn-render",target:"fn-fetchUser"},{source:"fn-render",target:"fn-login"}],ww={"sub-core":{id:"sub-core",name:"Core Domain",position:{x:20,y:20},size:{width:760,height:760},color:"#6366f1",description:"Authentication, networking and persistence live here."}},bw={"tune-cache":{id:"tune-cache",name:"CACHE_TTL",value:"300s",position:{x:1060,y:120}}},Sw=[{id:"bm-auth",name:"Auth cluster",viewport:{x:40,y:20,zoom:1.1},focusObjectId:"fn-login",temporary:!1},{id:"bm-db",name:"Data layer",viewport:{x:-160,y:-360,zoom:1},focusObjectId:"fn-query",temporary:!1}],aa=gw(),J=Tx((e,t)=>({files:yw,functions:vw,calls:xw,subspaces:ww,tunables:bw,bookmarks:Sw,viewMode:"project",projectFiles:aa.files,projectFolders:aa.folders,projectEdges:aa.edges,selectedProjectFileId:null,projectFolderFilter:null,setViewMode:n=>e({viewMode:n,focusedNodeId:null,selectedProjectFileId:null}),selectProjectFile:n=>e({selectedProjectFileId:n}),clearProjectSelection:()=>e({selectedProjectFileId:null}),setProjectFolderFilter:n=>e({projectFolderFilter:n}),clearProjectFolderFilter:()=>e({projectFolderFilter:null}),addProjectFiles:n=>e(r=>{const o={...r.projectFiles},s={...r.projectFolders},i=[...r.projectEdges],l=new Set(Object.keys(o)),a=Object.values(o).reduce((u,c)=>(u[c.folder]=(u[c.folder]||0)+1,u),{});for(const u of n){if(o[u.path])continue;const c=u.folder||Fc(u.path),d=a[c]||0,f=920+d*220,h=120+Object.keys(o).length%6*120;o[u.path]={id:u.path,path:u.path,name:u.name,folder:c,kind:u.kind,position:u.position||{x:f,y:h},url:u.url||null,source:u.source||null},l.add(u.path),a[c]=d+1,s[c]||(s[c]={id:c,name:c==="/"?"project root":c,position:{x:Object.keys(s).length*940,y:0},size:{width:380,height:240}})}for(const u of Object.keys(o)){const c=o[u];if(c.kind!=="text")continue;const d=c.source??rm[u];if(typeof d=="string")for(const f of im(d)){const h=sm(u,f,l);!h||h===u||i.some(m=>m.source===u&&m.target===h)||i.push({source:u,target:h})}}return{projectFiles:o,projectFolders:s,projectEdges:i}}),deleteProjectFile:n=>e(r=>{var a;const o={...r.projectFiles},s={...r.projectFolders},i=r.projectEdges.filter(u=>u.source!==n&&u.target!==n);delete o[n];const l=(a=r.projectFiles[n])==null?void 0:a.folder;return l&&(Object.values(o).some(c=>c.folder===l)||delete s[l]),{projectFiles:o,projectFolders:s,projectEdges:i,selectedProjectFileId:r.selectedProjectFileId===n?null:r.selectedProjectFileId}}),editorFileId:null,fileEdits:{},openEditor:n=>e({editorFileId:n}),closeEditor:()=>e({editorFileId:null}),setFileEdit:(n,r)=>e(o=>({fileEdits:{...o.fileEdits,[n]:r}})),revertFileEdit:n=>e(r=>{const o={...r.fileEdits};return delete o[n],{fileEdits:o}}),focusedNodeId:null,focusedFileId:null,expandedSubspaceId:null,terminalFileId:null,searchQuery:"",pendingFocus:null,flowApi:null,setFlowApi:n=>e({flowApi:n}),setFocusedNode:n=>e({focusedNodeId:n}),clearFocus:()=>e({focusedNodeId:null,focusedFileId:null}),focusFile:n=>e({focusedFileId:n,pendingFocus:{id:n}}),requestFocus:n=>e({pendingFocus:{id:n}}),consumePendingFocus:()=>e({pendingFocus:null}),setExpandedSubspace:n=>e({expandedSubspaceId:n,pendingFocus:n?{id:n}:t().pendingFocus}),clearExpandedSubspace:()=>e({expandedSubspaceId:null}),openTerminal:n=>e({terminalFileId:n}),closeTerminal:()=>e({terminalFileId:null}),setSearchQuery:n=>e({searchQuery:n}),moveNode:(n,r)=>e(o=>o.functions[n]?{functions:{...o.functions,[n]:{...o.functions[n],position:r}}}:o.files[n]?{files:{...o.files,[n]:{...o.files[n],position:r}}}:o.subspaces[n]?{subspaces:{...o.subspaces,[n]:{...o.subspaces[n],position:r}}}:o.tunables[n]?{tunables:{...o.tunables,[n]:{...o.tunables[n],position:r}}}:o.projectFiles[n]?{projectFiles:{...o.projectFiles,[n]:{...o.projectFiles[n],position:r}}}:{}),setSubspaceColor:(n,r)=>e(o=>({subspaces:{...o.subspaces,[n]:{...o.subspaces[n],color:r}}})),setSubspaceDescription:(n,r)=>e(o=>({subspaces:{...o.subspaces,[n]:{...o.subspaces[n],description:r}}})),saveBookmark:(n,r)=>e(o=>({bookmarks:[...o.bookmarks,{id:`bm-${Date.now()}`,name:r||`View ${o.bookmarks.length+1}`,viewport:n,focusObjectId:o.focusedNodeId,temporary:!1}]})),pushTemporaryBookmark:n=>e(r=>({bookmarks:[...r.bookmarks,{id:`tmp-${Date.now()}`,name:"↩ Return point",viewport:n,focusObjectId:r.focusedNodeId,temporary:!0}]})),removeBookmark:n=>e(r=>({bookmarks:r.bookmarks.filter(o=>o.id!==n)})),createSubspace:n=>e(r=>{const o=`sub-${Date.now()}`;return{subspaces:{...r.subspaces,[o]:{id:o,name:"New Subspace",position:n,size:{width:360,height:280},color:"#10b981",description:""}}}}),createFile:(n,r)=>e(o=>{const s=`file-${Date.now()}`;return{files:{...o.files,[s]:{id:s,name:"untitled.ts",folderPath:r||"src",position:n}}}}),createFunction:(n,r)=>e(o=>{const s=`fn-${Date.now()}`,i=Object.values(o.functions).filter(a=>a.fileId===n),l=Te.HEADER+8+i.length*(Ke.H+Ke.GAP_Y);return{functions:{...o.functions,[s]:{id:s,name:r||"newFn()",fileId:n,position:{x:nt.W,y:l}}}}})}));function Nf(e,t){const n=Object.values(e).filter(s=>s.fileId===t);if(n.length===0)return{width:Te.MIN_W,height:Te.MIN_H};let r=0,o=0;for(const s of n)r=Math.max(r,s.position.x+Ke.W),o=Math.max(o,s.position.y+Ke.H);return{width:Math.max(Te.MIN_W,r+Te.PAD+nt.W),height:Math.max(Te.MIN_H,o+Te.PAD)}}function _f(e){const{focusedNodeId:t,functions:n,calls:r}=e,o=t&&n[t];if(!o)return null;const s=o.fileId,i=[],l=[],a=[],u=[];for(const c of r){if(c.target===t){const d=n[c.source];if(!d)continue;d.fileId===s?i.push(d.id):a.push({extFnId:d.id,extFileId:d.fileId})}if(c.source===t){const d=n[c.target];if(!d)continue;d.fileId===s?l.push(d.id):u.push({extFnId:d.id,extFileId:d.fileId})}}return{fileId:s,focusedNodeId:t,internalUpstream:i,internalDownstream:l,leftPorts:a,rightPorts:u}}function Ew(e){const{selectedProjectFileId:t,projectEdges:n}=e;if(!t)return null;const r=[],o=[];for(const i of n)i.source===t&&r.push(i.target),i.target===t&&o.push(i.source);const s=new Set([t,...r,...o]);return{id:t,downstream:r,upstream:o,neighbors:s}}function kw(e,t){var r;if(t in e.fileEdits)return e.fileEdits[t];const n=(r=e.projectFiles)==null?void 0:r[t];return n!=null&&n.source?n.source:rm[t]??""}function jw(){const t=J(j=>j.viewMode)==="project",n=J(j=>j.files),r=J(j=>j.functions),o=J(j=>j.focusedFileId),s=J(j=>j.focusFile),i=J(j=>j.openTerminal),l=J(j=>j.projectFiles),a=J(j=>j.selectedProjectFileId),u=J(j=>j.selectProjectFile),c=J(j=>j.requestFocus),d=J(j=>j.projectFolderFilter),f=J(j=>j.setProjectFolderFilter),h=J(j=>j.clearProjectFolderFilter),m=J(j=>j.deleteProjectFile),v=J(j=>j.addProjectFiles),b=S.useRef(null),p=t?l:n,g=S.useMemo(()=>{const j={};for(const A of Object.values(p)){const R=t?A.folder:A.folderPath;t&&d&&R!==d||(j[R]||(j[R]=[])).push(A)}return Object.entries(j).sort(([A],[R])=>A.localeCompare(R))},[p,t,d]),y=g.reduce((j,[,A])=>j+A.length,0),x=j=>Object.values(r).filter(A=>A.fileId===j).length,I=j=>{t?(u(j.id),c(j.id)):s(j.id)},z=async j=>{const A=Array.from(j.target.files||[]);if(A.length===0)return;const R=await Promise.all(A.map(async U=>{const W=U.webkitRelativePath?`/${U.webkitRelativePath}`:`/${U.name}`,w=W.slice(0,W.lastIndexOf("/"))||"/",P=om(U.name);if(P==="image"||P==="audio")return{path:W,name:U.name,folder:w,kind:P,url:URL.createObjectURL(U)};const N=await U.text();return{path:W,name:U.name,folder:w,kind:P,source:N}}));v(R),j.target.value=""},_=()=>h(),M=()=>a&&m(a);return k.jsxs("div",{className:"flex h-full flex-col bg-panel",children:[k.jsx(lm,{title:"File Explorer",badge:y,action:k.jsxs("div",{className:"flex items-center gap-2",children:[d?k.jsx("button",{type:"button",onClick:_,className:"rounded-full border border-rose-500 bg-rose-600/90 px-3 py-1 text-[11px] font-medium text-white transition hover:bg-rose-500",children:"Clear filter"}):null,a?k.jsx("button",{type:"button",onClick:M,className:"rounded-full border border-red-500 bg-red-600/90 px-3 py-1 text-[11px] font-medium text-white transition hover:bg-red-500",children:"Delete"}):null,k.jsx("button",{type:"button",onClick:()=>{var j;return(j=b.current)==null?void 0:j.click()},className:"rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1 text-[11px] font-medium text-slate-300 transition hover:border-slate-500 hover:text-white",children:"Import files"}),k.jsx("input",{ref:b,type:"file",multiple:!0,webkitdirectory:"",directory:"",className:"hidden",onChange:z})]})}),k.jsx("div",{className:"thin-scroll flex-1 overflow-auto py-1",children:g.map(([j,A])=>k.jsxs("div",{className:"mb-1",children:[k.jsxs("button",{type:"button",onClick:()=>f(d===j?null:j),className:["flex w-full items-center justify-between gap-1.5 px-3 py-1 text-left text-[11px] transition",d===j?"bg-slate-800 text-slate-100":"text-slate-500 hover:bg-slate-900/80"].join(" "),children:[k.jsxs("span",{className:"flex items-center gap-1.5",children:[k.jsx("span",{children:"▾"}),k.jsx("span",{className:"truncate font-mono",children:j||"/"})]}),k.jsxs("span",{className:"text-[10px] text-slate-400",children:[A.length," files"]})]}),A.map(R=>{const U=t?a===R.id:o===R.id;return k.jsxs("button",{onClick:()=>I(R),onDoubleClick:()=>!t&&i(R.id),className:["group flex w-full items-center gap-2 py-1 pl-7 pr-3 text-left text-[13px] transition-colors",U?t?"bg-indigo-500/15 text-indigo-200":"bg-amber-500/15 text-amber-200":"text-slate-300 hover:bg-slate-800/60"].join(" "),children:[k.jsx("span",{className:U?t?"text-indigo-400":"text-amber-400":"text-slate-500",children:"▢"}),k.jsx("span",{className:"flex-1 truncate font-mono",children:R.name}),!t&&k.jsx("span",{className:"rounded bg-slate-800 px-1.5 text-[10px] text-slate-400 group-hover:bg-slate-700",children:x(R.id)})]},R.id)})]},j))})]})}function lm({title:e,badge:t,action:n}){return k.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 px-3 py-2",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("h2",{className:"text-[11px] font-semibold uppercase tracking-wider text-slate-400",children:e}),t!=null&&k.jsx("span",{className:"rounded-full bg-slate-800 px-1.5 text-[10px] text-slate-400",children:t})]}),n]})}function Nw(){const e=J(l=>l.bookmarks),t=J(l=>l.functions),n=J(l=>l.removeBookmark),r=J(l=>l.setFocusedNode),o=J(l=>l.requestFocus),s=J(l=>l.pushTemporaryBookmark),i=l=>{const a=J.getState().flowApi;a&&(s(a.getViewport()),a.setViewport(l.viewport,{duration:650})),l.focusObjectId&&(t[l.focusObjectId]&&r(l.focusObjectId),o(l.focusObjectId))};return k.jsxs("div",{className:"flex h-full flex-col bg-panel",children:[k.jsx(lm,{title:"Bookmark Manager",badge:e.length}),k.jsx("div",{className:"px-3 py-1.5 text-[10px] text-slate-500",children:"Double-click to fly to a saved view"}),k.jsxs("div",{className:"thin-scroll flex-1 overflow-auto pb-2",children:[e.length===0&&k.jsx("div",{className:"px-3 py-6 text-center text-xs text-slate-600",children:"No bookmarks yet — use “★ Save view”."}),e.map(l=>k.jsxs("div",{onDoubleClick:()=>i(l),className:["group mx-2 mb-1.5 cursor-pointer rounded-lg border px-3 py-2 transition-colors",l.temporary?"border-dashed border-slate-700 bg-slate-800/30":"border-slate-700 bg-slate-800/60 hover:border-indigo-500/70"].join(" "),children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("span",{className:l.temporary?"text-slate-500":"text-indigo-400",children:l.temporary?"↩":"★"}),k.jsx("span",{className:"flex-1 truncate text-[13px] text-slate-200",children:l.name}),k.jsx("button",{onClick:a=>{a.stopPropagation(),n(l.id)},className:"text-slate-600 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100",title:"Delete bookmark",children:"✕"})]}),k.jsxs("div",{className:"mt-0.5 flex items-center gap-2 pl-6 text-[10px] text-slate-500",children:[k.jsxs("span",{className:"font-mono",children:["z ",l.viewport.zoom.toFixed(2)]}),l.focusObjectId&&t[l.focusObjectId]&&k.jsxs("span",{className:"truncate font-mono text-slate-400",children:["→ ",t[l.focusObjectId].name]})]})]},l.id))]})]})}function De(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,r;n<e.length;n++)(r=De(e[n]))!==""&&(t+=(t&&" ")+r);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}const{useDebugValue:_w}=D,{useSyncExternalStoreWithSelector:Iw}=tm,zw=e=>e;function am(e,t=zw,n){const r=Iw(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return _w(r),r}const If=(e,t)=>{const n=Xg(e),r=(o,s=t)=>am(n,o,s);return Object.assign(r,n),r},Cw=(e,t)=>e?If(e,t):If;function Pe(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}var Fw={value:()=>{}};function xl(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new hi(n)}function hi(e){this._=e}function Pw(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",o=n.indexOf(".");if(o>=0&&(r=n.slice(o+1),n=n.slice(0,o)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}hi.prototype=xl.prototype={constructor:hi,on:function(e,t){var n=this._,r=Pw(e+"",n),o,s=-1,i=r.length;if(arguments.length<2){for(;++s<i;)if((o=(e=r[s]).type)&&(o=Mw(n[o],e.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<i;)if(o=(e=r[s]).type)n[o]=zf(n[o],e.name,t);else if(t==null)for(o in n)n[o]=zf(n[o],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new hi(e)},call:function(e,t){if((o=arguments.length-2)>0)for(var n=new Array(o),r=0,o,s;r<o;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,o=s.length;r<o;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],o=0,s=r.length;o<s;++o)r[o].value.apply(t,n)}};function Mw(e,t){for(var n=0,r=e.length,o;n<r;++n)if((o=e[n]).name===t)return o.value}function zf(e,t,n){for(var r=0,o=e.length;r<o;++r)if(e[r].name===t){e[r]=Fw,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var yu="http://www.w3.org/1999/xhtml";const Cf={svg:"http://www.w3.org/2000/svg",xhtml:yu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function wl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Cf.hasOwnProperty(t)?{space:Cf[t],local:e}:e}function Tw(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===yu&&t.documentElement.namespaceURI===yu?t.createElement(e):t.createElementNS(n,e)}}function Aw(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function um(e){var t=wl(e);return(t.local?Aw:Tw)(t)}function Rw(){}function Pc(e){return e==null?Rw:function(){return this.querySelector(e)}}function Dw(e){typeof e!="function"&&(e=Pc(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var s=t[o],i=s.length,l=r[o]=new Array(i),a,u,c=0;c<i;++c)(a=s[c])&&(u=e.call(a,a.__data__,c,s))&&("__data__"in a&&(u.__data__=a.__data__),l[c]=u);return new it(r,this._parents)}function Lw(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Ow(){return[]}function cm(e){return e==null?Ow:function(){return this.querySelectorAll(e)}}function Hw(e){return function(){return Lw(e.apply(this,arguments))}}function Bw(e){typeof e=="function"?e=Hw(e):e=cm(e);for(var t=this._groups,n=t.length,r=[],o=[],s=0;s<n;++s)for(var i=t[s],l=i.length,a,u=0;u<l;++u)(a=i[u])&&(r.push(e.call(a,a.__data__,u,i)),o.push(a));return new it(r,o)}function dm(e){return function(){return this.matches(e)}}function fm(e){return function(t){return t.matches(e)}}var Vw=Array.prototype.find;function Uw(e){return function(){return Vw.call(this.children,e)}}function Ww(){return this.firstElementChild}function $w(e){return this.select(e==null?Ww:Uw(typeof e=="function"?e:fm(e)))}var Gw=Array.prototype.filter;function Kw(){return Array.from(this.children)}function Yw(e){return function(){return Gw.call(this.children,e)}}function Qw(e){return this.selectAll(e==null?Kw:Yw(typeof e=="function"?e:fm(e)))}function Xw(e){typeof e!="function"&&(e=dm(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var s=t[o],i=s.length,l=r[o]=[],a,u=0;u<i;++u)(a=s[u])&&e.call(a,a.__data__,u,s)&&l.push(a);return new it(r,this._parents)}function pm(e){return new Array(e.length)}function qw(){return new it(this._enter||this._groups.map(pm),this._parents)}function Wi(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Wi.prototype={constructor:Wi,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Zw(e){return function(){return e}}function Jw(e,t,n,r,o,s){for(var i=0,l,a=t.length,u=s.length;i<u;++i)(l=t[i])?(l.__data__=s[i],r[i]=l):n[i]=new Wi(e,s[i]);for(;i<a;++i)(l=t[i])&&(o[i]=l)}function e2(e,t,n,r,o,s,i){var l,a,u=new Map,c=t.length,d=s.length,f=new Array(c),h;for(l=0;l<c;++l)(a=t[l])&&(f[l]=h=i.call(a,a.__data__,l,t)+"",u.has(h)?o[l]=a:u.set(h,a));for(l=0;l<d;++l)h=i.call(e,s[l],l,s)+"",(a=u.get(h))?(r[l]=a,a.__data__=s[l],u.delete(h)):n[l]=new Wi(e,s[l]);for(l=0;l<c;++l)(a=t[l])&&u.get(f[l])===a&&(o[l]=a)}function t2(e){return e.__data__}function n2(e,t){if(!arguments.length)return Array.from(this,t2);var n=t?e2:Jw,r=this._parents,o=this._groups;typeof e!="function"&&(e=Zw(e));for(var s=o.length,i=new Array(s),l=new Array(s),a=new Array(s),u=0;u<s;++u){var c=r[u],d=o[u],f=d.length,h=r2(e.call(c,c&&c.__data__,u,r)),m=h.length,v=l[u]=new Array(m),b=i[u]=new Array(m),p=a[u]=new Array(f);n(c,d,v,b,p,h,t);for(var g=0,y=0,x,I;g<m;++g)if(x=v[g]){for(g>=y&&(y=g+1);!(I=b[y])&&++y<m;);x._next=I||null}}return i=new it(i,r),i._enter=l,i._exit=a,i}function r2(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function o2(){return new it(this._exit||this._groups.map(pm),this._parents)}function s2(e,t,n){var r=this.enter(),o=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(o=t(o),o&&(o=o.selection())),n==null?s.remove():n(s),r&&o?r.merge(o).order():o}function i2(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,o=n.length,s=r.length,i=Math.min(o,s),l=new Array(o),a=0;a<i;++a)for(var u=n[a],c=r[a],d=u.length,f=l[a]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;a<o;++a)l[a]=n[a];return new it(l,this._parents)}function l2(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],o=r.length-1,s=r[o],i;--o>=0;)(i=r[o])&&(s&&i.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(i,s),s=i);return this}function a2(e){e||(e=u2);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,r=n.length,o=new Array(r),s=0;s<r;++s){for(var i=n[s],l=i.length,a=o[s]=new Array(l),u,c=0;c<l;++c)(u=i[c])&&(a[c]=u);a.sort(t)}return new it(o,this._parents).order()}function u2(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function c2(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function d2(){return Array.from(this)}function f2(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],o=0,s=r.length;o<s;++o){var i=r[o];if(i)return i}return null}function p2(){let e=0;for(const t of this)++e;return e}function h2(){return!this.node()}function g2(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o=t[n],s=0,i=o.length,l;s<i;++s)(l=o[s])&&e.call(l,l.__data__,s,o);return this}function m2(e){return function(){this.removeAttribute(e)}}function y2(e){return function(){this.removeAttributeNS(e.space,e.local)}}function v2(e,t){return function(){this.setAttribute(e,t)}}function x2(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function w2(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function b2(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function S2(e,t){var n=wl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?y2:m2:typeof t=="function"?n.local?b2:w2:n.local?x2:v2)(n,t))}function hm(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function E2(e){return function(){this.style.removeProperty(e)}}function k2(e,t,n){return function(){this.style.setProperty(e,t,n)}}function j2(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function N2(e,t,n){return arguments.length>1?this.each((t==null?E2:typeof t=="function"?j2:k2)(e,t,n??"")):eo(this.node(),e)}function eo(e,t){return e.style.getPropertyValue(t)||hm(e).getComputedStyle(e,null).getPropertyValue(t)}function _2(e){return function(){delete this[e]}}function I2(e,t){return function(){this[e]=t}}function z2(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function C2(e,t){return arguments.length>1?this.each((t==null?_2:typeof t=="function"?z2:I2)(e,t)):this.node()[e]}function gm(e){return e.trim().split(/^|\s+/)}function Mc(e){return e.classList||new mm(e)}function mm(e){this._node=e,this._names=gm(e.getAttribute("class")||"")}mm.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function ym(e,t){for(var n=Mc(e),r=-1,o=t.length;++r<o;)n.add(t[r])}function vm(e,t){for(var n=Mc(e),r=-1,o=t.length;++r<o;)n.remove(t[r])}function F2(e){return function(){ym(this,e)}}function P2(e){return function(){vm(this,e)}}function M2(e,t){return function(){(t.apply(this,arguments)?ym:vm)(this,e)}}function T2(e,t){var n=gm(e+"");if(arguments.length<2){for(var r=Mc(this.node()),o=-1,s=n.length;++o<s;)if(!r.contains(n[o]))return!1;return!0}return this.each((typeof t=="function"?M2:t?F2:P2)(n,t))}function A2(){this.textContent=""}function R2(e){return function(){this.textContent=e}}function D2(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function L2(e){return arguments.length?this.each(e==null?A2:(typeof e=="function"?D2:R2)(e)):this.node().textContent}function O2(){this.innerHTML=""}function H2(e){return function(){this.innerHTML=e}}function B2(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function V2(e){return arguments.length?this.each(e==null?O2:(typeof e=="function"?B2:H2)(e)):this.node().innerHTML}function U2(){this.nextSibling&&this.parentNode.appendChild(this)}function W2(){return this.each(U2)}function $2(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function G2(){return this.each($2)}function K2(e){var t=typeof e=="function"?e:um(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Y2(){return null}function Q2(e,t){var n=typeof e=="function"?e:um(e),r=t==null?Y2:typeof t=="function"?t:Pc(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function X2(){var e=this.parentNode;e&&e.removeChild(this)}function q2(){return this.each(X2)}function Z2(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function J2(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function eb(e){return this.select(e?J2:Z2)}function tb(e){return arguments.length?this.property("__data__",e):this.node().__data__}function nb(e){return function(t){e.call(this,t,this.__data__)}}function rb(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function ob(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,o=t.length,s;n<o;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function sb(e,t,n){return function(){var r=this.__on,o,s=nb(t);if(r){for(var i=0,l=r.length;i<l;++i)if((o=r[i]).type===e.type&&o.name===e.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=s,o.options=n),o.value=t;return}}this.addEventListener(e.type,s,n),o={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(o):this.__on=[o]}}function ib(e,t,n){var r=rb(e+""),o,s=r.length,i;if(arguments.length<2){var l=this.node().__on;if(l){for(var a=0,u=l.length,c;a<u;++a)for(o=0,c=l[a];o<s;++o)if((i=r[o]).type===c.type&&i.name===c.name)return c.value}return}for(l=t?sb:ob,o=0;o<s;++o)this.each(l(r[o],t,n));return this}function xm(e,t,n){var r=hm(e),o=r.CustomEvent;typeof o=="function"?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),e.dispatchEvent(o)}function lb(e,t){return function(){return xm(this,e,t)}}function ab(e,t){return function(){return xm(this,e,t.apply(this,arguments))}}function ub(e,t){return this.each((typeof t=="function"?ab:lb)(e,t))}function*cb(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],o=0,s=r.length,i;o<s;++o)(i=r[o])&&(yield i)}var wm=[null];function it(e,t){this._groups=e,this._parents=t}function Ss(){return new it([[document.documentElement]],wm)}function db(){return this}it.prototype=Ss.prototype={constructor:it,select:Dw,selectAll:Bw,selectChild:$w,selectChildren:Qw,filter:Xw,data:n2,enter:qw,exit:o2,join:s2,merge:i2,selection:db,order:l2,sort:a2,call:c2,nodes:d2,node:f2,size:p2,empty:h2,each:g2,attr:S2,style:N2,property:C2,classed:T2,text:L2,html:V2,raise:W2,lower:G2,append:K2,insert:Q2,remove:q2,clone:eb,datum:tb,on:ib,dispatch:ub,[Symbol.iterator]:cb};function dt(e){return typeof e=="string"?new it([[document.querySelector(e)]],[document.documentElement]):new it([[e]],wm)}function fb(e){let t;for(;t=e.sourceEvent;)e=t;return e}function kt(e,t){if(e=fb(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var o=t.getBoundingClientRect();return[e.clientX-o.left-t.clientLeft,e.clientY-o.top-t.clientTop]}}return[e.pageX,e.pageY]}const pb={passive:!1},as={capture:!0,passive:!1};function ua(e){e.stopImmediatePropagation()}function Ur(e){e.preventDefault(),e.stopImmediatePropagation()}function bm(e){var t=e.document.documentElement,n=dt(e).on("dragstart.drag",Ur,as);"onselectstart"in t?n.on("selectstart.drag",Ur,as):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Sm(e,t){var n=e.document.documentElement,r=dt(e).on("dragstart.drag",null);t&&(r.on("click.drag",Ur,as),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const $s=e=>()=>e;function vu(e,{sourceEvent:t,subject:n,target:r,identifier:o,active:s,x:i,y:l,dx:a,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:a,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}vu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function hb(e){return!e.ctrlKey&&!e.button}function gb(){return this.parentNode}function mb(e,t){return t??{x:e.x,y:e.y}}function yb(){return navigator.maxTouchPoints||"ontouchstart"in this}function vb(){var e=hb,t=gb,n=mb,r=yb,o={},s=xl("start","drag","end"),i=0,l,a,u,c,d=0;function f(x){x.on("mousedown.drag",h).filter(r).on("touchstart.drag",b).on("touchmove.drag",p,pb).on("touchend.drag touchcancel.drag",g).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(x,I){if(!(c||!e.call(this,x,I))){var z=y(this,t.call(this,x,I),x,I,"mouse");z&&(dt(x.view).on("mousemove.drag",m,as).on("mouseup.drag",v,as),bm(x.view),ua(x),u=!1,l=x.clientX,a=x.clientY,z("start",x))}}function m(x){if(Ur(x),!u){var I=x.clientX-l,z=x.clientY-a;u=I*I+z*z>d}o.mouse("drag",x)}function v(x){dt(x.view).on("mousemove.drag mouseup.drag",null),Sm(x.view,u),Ur(x),o.mouse("end",x)}function b(x,I){if(e.call(this,x,I)){var z=x.changedTouches,_=t.call(this,x,I),M=z.length,j,A;for(j=0;j<M;++j)(A=y(this,_,x,I,z[j].identifier,z[j]))&&(ua(x),A("start",x,z[j]))}}function p(x){var I=x.changedTouches,z=I.length,_,M;for(_=0;_<z;++_)(M=o[I[_].identifier])&&(Ur(x),M("drag",x,I[_]))}function g(x){var I=x.changedTouches,z=I.length,_,M;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),_=0;_<z;++_)(M=o[I[_].identifier])&&(ua(x),M("end",x,I[_]))}function y(x,I,z,_,M,j){var A=s.copy(),R=kt(j||z,I),U,W,w;if((w=n.call(x,new vu("beforestart",{sourceEvent:z,target:f,identifier:M,active:i,x:R[0],y:R[1],dx:0,dy:0,dispatch:A}),_))!=null)return U=w.x-R[0]||0,W=w.y-R[1]||0,function P(N,H,F){var E=R,T;switch(N){case"start":o[M]=P,T=i++;break;case"end":delete o[M],--i;case"drag":R=kt(F||H,I),T=i;break}A.call(N,x,new vu(N,{sourceEvent:H,subject:w,target:f,identifier:M,active:T,x:R[0]+U,y:R[1]+W,dx:R[0]-E[0],dy:R[1]-E[1],dispatch:A}),_)}}return f.filter=function(x){return arguments.length?(e=typeof x=="function"?x:$s(!!x),f):e},f.container=function(x){return arguments.length?(t=typeof x=="function"?x:$s(x),f):t},f.subject=function(x){return arguments.length?(n=typeof x=="function"?x:$s(x),f):n},f.touchable=function(x){return arguments.length?(r=typeof x=="function"?x:$s(!!x),f):r},f.on=function(){var x=s.on.apply(s,arguments);return x===s?f:x},f.clickDistance=function(x){return arguments.length?(d=(x=+x)*x,f):Math.sqrt(d)},f}function Tc(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Em(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Es(){}var us=.7,$i=1/us,Wr="\\s*([+-]?\\d+)\\s*",cs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Lt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",xb=/^#([0-9a-f]{3,8})$/,wb=new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`),bb=new RegExp(`^rgb\\(${Lt},${Lt},${Lt}\\)$`),Sb=new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${cs}\\)$`),Eb=new RegExp(`^rgba\\(${Lt},${Lt},${Lt},${cs}\\)$`),kb=new RegExp(`^hsl\\(${cs},${Lt},${Lt}\\)$`),jb=new RegExp(`^hsla\\(${cs},${Lt},${Lt},${cs}\\)$`),Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Tc(Es,ds,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Pf,formatHex:Pf,formatHex8:Nb,formatHsl:_b,formatRgb:Mf,toString:Mf});function Pf(){return this.rgb().formatHex()}function Nb(){return this.rgb().formatHex8()}function _b(){return km(this).formatHsl()}function Mf(){return this.rgb().formatRgb()}function ds(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=xb.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Tf(t):n===3?new Xe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Gs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Gs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=wb.exec(e))?new Xe(t[1],t[2],t[3],1):(t=bb.exec(e))?new Xe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Sb.exec(e))?Gs(t[1],t[2],t[3],t[4]):(t=Eb.exec(e))?Gs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=kb.exec(e))?Df(t[1],t[2]/100,t[3]/100,1):(t=jb.exec(e))?Df(t[1],t[2]/100,t[3]/100,t[4]):Ff.hasOwnProperty(e)?Tf(Ff[e]):e==="transparent"?new Xe(NaN,NaN,NaN,0):null}function Tf(e){return new Xe(e>>16&255,e>>8&255,e&255,1)}function Gs(e,t,n,r){return r<=0&&(e=t=n=NaN),new Xe(e,t,n,r)}function Ib(e){return e instanceof Es||(e=ds(e)),e?(e=e.rgb(),new Xe(e.r,e.g,e.b,e.opacity)):new Xe}function xu(e,t,n,r){return arguments.length===1?Ib(e):new Xe(e,t,n,r??1)}function Xe(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Tc(Xe,xu,Em(Es,{brighter(e){return e=e==null?$i:Math.pow($i,e),new Xe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?us:Math.pow(us,e),new Xe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Xe(Jn(this.r),Jn(this.g),Jn(this.b),Gi(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Af,formatHex:Af,formatHex8:zb,formatRgb:Rf,toString:Rf}));function Af(){return`#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}`}function zb(){return`#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}${Yn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Rf(){const e=Gi(this.opacity);return`${e===1?"rgb(":"rgba("}${Jn(this.r)}, ${Jn(this.g)}, ${Jn(this.b)}${e===1?")":`, ${e})`}`}function Gi(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Jn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Yn(e){return e=Jn(e),(e<16?"0":"")+e.toString(16)}function Df(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Nt(e,t,n,r)}function km(e){if(e instanceof Nt)return new Nt(e.h,e.s,e.l,e.opacity);if(e instanceof Es||(e=ds(e)),!e)return new Nt;if(e instanceof Nt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,o=Math.min(t,n,r),s=Math.max(t,n,r),i=NaN,l=s-o,a=(s+o)/2;return l?(t===s?i=(n-r)/l+(n<r)*6:n===s?i=(r-t)/l+2:i=(t-n)/l+4,l/=a<.5?s+o:2-s-o,i*=60):l=a>0&&a<1?0:i,new Nt(i,l,a,e.opacity)}function Cb(e,t,n,r){return arguments.length===1?km(e):new Nt(e,t,n,r??1)}function Nt(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Tc(Nt,Cb,Em(Es,{brighter(e){return e=e==null?$i:Math.pow($i,e),new Nt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?us:Math.pow(us,e),new Nt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new Xe(ca(e>=240?e-240:e+120,o,r),ca(e,o,r),ca(e<120?e+240:e-120,o,r),this.opacity)},clamp(){return new Nt(Lf(this.h),Ks(this.s),Ks(this.l),Gi(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Gi(this.opacity);return`${e===1?"hsl(":"hsla("}${Lf(this.h)}, ${Ks(this.s)*100}%, ${Ks(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Lf(e){return e=(e||0)%360,e<0?e+360:e}function Ks(e){return Math.max(0,Math.min(1,e||0))}function ca(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const jm=e=>()=>e;function Fb(e,t){return function(n){return e+n*t}}function Pb(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Mb(e){return(e=+e)==1?Nm:function(t,n){return n-t?Pb(t,n,e):jm(isNaN(t)?n:t)}}function Nm(e,t){var n=t-e;return n?Fb(e,n):jm(isNaN(e)?t:e)}const Of=function e(t){var n=Mb(t);function r(o,s){var i=n((o=xu(o)).r,(s=xu(s)).r),l=n(o.g,s.g),a=n(o.b,s.b),u=Nm(o.opacity,s.opacity);return function(c){return o.r=i(c),o.g=l(c),o.b=a(c),o.opacity=u(c),o+""}}return r.gamma=e,r}(1);function fn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var wu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,da=new RegExp(wu.source,"g");function Tb(e){return function(){return e}}function Ab(e){return function(t){return e(t)+""}}function Rb(e,t){var n=wu.lastIndex=da.lastIndex=0,r,o,s,i=-1,l=[],a=[];for(e=e+"",t=t+"";(r=wu.exec(e))&&(o=da.exec(t));)(s=o.index)>n&&(s=t.slice(n,s),l[i]?l[i]+=s:l[++i]=s),(r=r[0])===(o=o[0])?l[i]?l[i]+=o:l[++i]=o:(l[++i]=null,a.push({i,x:fn(r,o)})),n=da.lastIndex;return n<t.length&&(s=t.slice(n),l[i]?l[i]+=s:l[++i]=s),l.length<2?a[0]?Ab(a[0].x):Tb(t):(t=a.length,function(u){for(var c=0,d;c<t;++c)l[(d=a[c]).i]=d.x(u);return l.join("")})}var Hf=180/Math.PI,bu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function _m(e,t,n,r,o,s){var i,l,a;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(a=e*n+t*r)&&(n-=e*a,r-=t*a),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,a/=l),e*r<t*n&&(e=-e,t=-t,a=-a,i=-i),{translateX:o,translateY:s,rotate:Math.atan2(t,e)*Hf,skewX:Math.atan(a)*Hf,scaleX:i,scaleY:l}}var Ys;function Db(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?bu:_m(t.a,t.b,t.c,t.d,t.e,t.f)}function Lb(e){return e==null||(Ys||(Ys=document.createElementNS("http://www.w3.org/2000/svg","g")),Ys.setAttribute("transform",e),!(e=Ys.transform.baseVal.consolidate()))?bu:(e=e.matrix,_m(e.a,e.b,e.c,e.d,e.e,e.f))}function Im(e,t,n,r){function o(u){return u.length?u.pop()+" ":""}function s(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push("translate(",null,t,null,n);m.push({i:v-4,x:fn(u,d)},{i:v-2,x:fn(c,f)})}else(d||f)&&h.push("translate("+d+t+f+n)}function i(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(o(d)+"rotate(",null,r)-2,x:fn(u,c)})):c&&d.push(o(d)+"rotate("+c+r)}function l(u,c,d,f){u!==c?f.push({i:d.push(o(d)+"skewX(",null,r)-2,x:fn(u,c)}):c&&d.push(o(d)+"skewX("+c+r)}function a(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push(o(h)+"scale(",null,",",null,")");m.push({i:v-4,x:fn(u,d)},{i:v-2,x:fn(c,f)})}else(d!==1||f!==1)&&h.push(o(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=e(u),c=e(c),s(u.translateX,u.translateY,c.translateX,c.translateY,d,f),i(u.rotate,c.rotate,d,f),l(u.skewX,c.skewX,d,f),a(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var m=-1,v=f.length,b;++m<v;)d[(b=f[m]).i]=b.x(h);return d.join("")}}}var Ob=Im(Db,"px, ","px)","deg)"),Hb=Im(Lb,", ",")",")"),Bb=1e-12;function Bf(e){return((e=Math.exp(e))+1/e)/2}function Vb(e){return((e=Math.exp(e))-1/e)/2}function Ub(e){return((e=Math.exp(2*e))-1)/(e+1)}const Wb=function e(t,n,r){function o(s,i){var l=s[0],a=s[1],u=s[2],c=i[0],d=i[1],f=i[2],h=c-l,m=d-a,v=h*h+m*m,b,p;if(v<Bb)p=Math.log(f/u)/t,b=function(_){return[l+_*h,a+_*m,u*Math.exp(t*_*p)]};else{var g=Math.sqrt(v),y=(f*f-u*u+r*v)/(2*u*n*g),x=(f*f-u*u-r*v)/(2*f*n*g),I=Math.log(Math.sqrt(y*y+1)-y),z=Math.log(Math.sqrt(x*x+1)-x);p=(z-I)/t,b=function(_){var M=_*p,j=Bf(I),A=u/(n*g)*(j*Ub(t*M+I)-Vb(I));return[l+A*h,a+A*m,u*j/Bf(t*M+I)]}}return b.duration=p*1e3*t/Math.SQRT2,b}return o.rho=function(s){var i=Math.max(.001,+s),l=i*i,a=l*l;return e(i,l,a)},o}(Math.SQRT2,2,4);var to=0,Fo=0,xo=0,zm=1e3,Ki,Po,Yi=0,lr=0,bl=0,fs=typeof performance=="object"&&performance.now?performance:Date,Cm=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Ac(){return lr||(Cm($b),lr=fs.now()+bl)}function $b(){lr=0}function Qi(){this._call=this._time=this._next=null}Qi.prototype=Fm.prototype={constructor:Qi,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Ac():+n)+(t==null?0:+t),!this._next&&Po!==this&&(Po?Po._next=this:Ki=this,Po=this),this._call=e,this._time=n,Su()},stop:function(){this._call&&(this._call=null,this._time=1/0,Su())}};function Fm(e,t,n){var r=new Qi;return r.restart(e,t,n),r}function Gb(){Ac(),++to;for(var e=Ki,t;e;)(t=lr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--to}function Vf(){lr=(Yi=fs.now())+bl,to=Fo=0;try{Gb()}finally{to=0,Yb(),lr=0}}function Kb(){var e=fs.now(),t=e-Yi;t>zm&&(bl-=t,Yi=e)}function Yb(){for(var e,t=Ki,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ki=n);Po=e,Su(r)}function Su(e){if(!to){Fo&&(Fo=clearTimeout(Fo));var t=e-lr;t>24?(e<1/0&&(Fo=setTimeout(Vf,e-fs.now()-bl)),xo&&(xo=clearInterval(xo))):(xo||(Yi=fs.now(),xo=setInterval(Kb,zm)),to=1,Cm(Vf))}}function Uf(e,t,n){var r=new Qi;return t=t==null?0:+t,r.restart(o=>{r.stop(),e(o+t)},t,n),r}var Qb=xl("start","end","cancel","interrupt"),Xb=[],Pm=0,Wf=1,Eu=2,gi=3,$f=4,ku=5,mi=6;function Sl(e,t,n,r,o,s){var i=e.__transition;if(!i)e.__transition={};else if(n in i)return;qb(e,n,{name:t,index:r,group:o,on:Qb,tween:Xb,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Pm})}function Rc(e,t){var n=Ft(e,t);if(n.state>Pm)throw new Error("too late; already scheduled");return n}function Ht(e,t){var n=Ft(e,t);if(n.state>gi)throw new Error("too late; already running");return n}function Ft(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function qb(e,t,n){var r=e.__transition,o;r[t]=n,n.timer=Fm(s,0,n.time);function s(u){n.state=Wf,n.timer.restart(i,n.delay,n.time),n.delay<=u&&i(u-n.delay)}function i(u){var c,d,f,h;if(n.state!==Wf)return a();for(c in r)if(h=r[c],h.name===n.name){if(h.state===gi)return Uf(i);h.state===$f?(h.state=mi,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[c]):+c<t&&(h.state=mi,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[c])}if(Uf(function(){n.state===gi&&(n.state=$f,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Eu,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Eu){for(n.state=gi,o=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(o[++d]=h);o.length=d+1}}function l(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(a),n.state=ku,1),d=-1,f=o.length;++d<f;)o[d].call(e,c);n.state===ku&&(n.on.call("end",e,e.__data__,n.index,n.group),a())}function a(){n.state=mi,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function yi(e,t){var n=e.__transition,r,o,s=!0,i;if(n){t=t==null?null:t+"";for(i in n){if((r=n[i]).name!==t){s=!1;continue}o=r.state>Eu&&r.state<ku,r.state=mi,r.timer.stop(),r.on.call(o?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[i]}s&&delete e.__transition}}function Zb(e){return this.each(function(){yi(this,e)})}function Jb(e,t){var n,r;return function(){var o=Ht(this,e),s=o.tween;if(s!==n){r=n=s;for(var i=0,l=r.length;i<l;++i)if(r[i].name===t){r=r.slice(),r.splice(i,1);break}}o.tween=r}}function e3(e,t,n){var r,o;if(typeof n!="function")throw new Error;return function(){var s=Ht(this,e),i=s.tween;if(i!==r){o=(r=i).slice();for(var l={name:t,value:n},a=0,u=o.length;a<u;++a)if(o[a].name===t){o[a]=l;break}a===u&&o.push(l)}s.tween=o}}function t3(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=Ft(this.node(),n).tween,o=0,s=r.length,i;o<s;++o)if((i=r[o]).name===e)return i.value;return null}return this.each((t==null?Jb:e3)(n,e,t))}function Dc(e,t,n){var r=e._id;return e.each(function(){var o=Ht(this,r);(o.value||(o.value={}))[t]=n.apply(this,arguments)}),function(o){return Ft(o,r).value[t]}}function Mm(e,t){var n;return(typeof t=="number"?fn:t instanceof ds?Of:(n=ds(t))?(t=n,Of):Rb)(e,t)}function n3(e){return function(){this.removeAttribute(e)}}function r3(e){return function(){this.removeAttributeNS(e.space,e.local)}}function o3(e,t,n){var r,o=n+"",s;return function(){var i=this.getAttribute(e);return i===o?null:i===r?s:s=t(r=i,n)}}function s3(e,t,n){var r,o=n+"",s;return function(){var i=this.getAttributeNS(e.space,e.local);return i===o?null:i===r?s:s=t(r=i,n)}}function i3(e,t,n){var r,o,s;return function(){var i,l=n(this),a;return l==null?void this.removeAttribute(e):(i=this.getAttribute(e),a=l+"",i===a?null:i===r&&a===o?s:(o=a,s=t(r=i,l)))}}function l3(e,t,n){var r,o,s;return function(){var i,l=n(this),a;return l==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),a=l+"",i===a?null:i===r&&a===o?s:(o=a,s=t(r=i,l)))}}function a3(e,t){var n=wl(e),r=n==="transform"?Hb:Mm;return this.attrTween(e,typeof t=="function"?(n.local?l3:i3)(n,r,Dc(this,"attr."+e,t)):t==null?(n.local?r3:n3)(n):(n.local?s3:o3)(n,r,t))}function u3(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function c3(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function d3(e,t){var n,r;function o(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&c3(e,s)),n}return o._value=t,o}function f3(e,t){var n,r;function o(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&u3(e,s)),n}return o._value=t,o}function p3(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=wl(e);return this.tween(n,(r.local?d3:f3)(r,t))}function h3(e,t){return function(){Rc(this,e).delay=+t.apply(this,arguments)}}function g3(e,t){return t=+t,function(){Rc(this,e).delay=t}}function m3(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?h3:g3)(t,e)):Ft(this.node(),t).delay}function y3(e,t){return function(){Ht(this,e).duration=+t.apply(this,arguments)}}function v3(e,t){return t=+t,function(){Ht(this,e).duration=t}}function x3(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?y3:v3)(t,e)):Ft(this.node(),t).duration}function w3(e,t){if(typeof t!="function")throw new Error;return function(){Ht(this,e).ease=t}}function b3(e){var t=this._id;return arguments.length?this.each(w3(t,e)):Ft(this.node(),t).ease}function S3(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Ht(this,e).ease=n}}function E3(e){if(typeof e!="function")throw new Error;return this.each(S3(this._id,e))}function k3(e){typeof e!="function"&&(e=dm(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var s=t[o],i=s.length,l=r[o]=[],a,u=0;u<i;++u)(a=s[u])&&e.call(a,a.__data__,u,s)&&l.push(a);return new rn(r,this._parents,this._name,this._id)}function j3(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,o=n.length,s=Math.min(r,o),i=new Array(r),l=0;l<s;++l)for(var a=t[l],u=n[l],c=a.length,d=i[l]=new Array(c),f,h=0;h<c;++h)(f=a[h]||u[h])&&(d[h]=f);for(;l<r;++l)i[l]=t[l];return new rn(i,this._parents,this._name,this._id)}function N3(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function _3(e,t,n){var r,o,s=N3(t)?Rc:Ht;return function(){var i=s(this,e),l=i.on;l!==r&&(o=(r=l).copy()).on(t,n),i.on=o}}function I3(e,t){var n=this._id;return arguments.length<2?Ft(this.node(),n).on.on(e):this.each(_3(n,e,t))}function z3(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function C3(){return this.on("end.remove",z3(this._id))}function F3(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Pc(e));for(var r=this._groups,o=r.length,s=new Array(o),i=0;i<o;++i)for(var l=r[i],a=l.length,u=s[i]=new Array(a),c,d,f=0;f<a;++f)(c=l[f])&&(d=e.call(c,c.__data__,f,l))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,Sl(u[f],t,n,f,u,Ft(c,n)));return new rn(s,this._parents,t,n)}function P3(e){var t=this._name,n=this._id;typeof e!="function"&&(e=cm(e));for(var r=this._groups,o=r.length,s=[],i=[],l=0;l<o;++l)for(var a=r[l],u=a.length,c,d=0;d<u;++d)if(c=a[d]){for(var f=e.call(c,c.__data__,d,a),h,m=Ft(c,n),v=0,b=f.length;v<b;++v)(h=f[v])&&Sl(h,t,n,v,f,m);s.push(f),i.push(c)}return new rn(s,i,t,n)}var M3=Ss.prototype.constructor;function T3(){return new M3(this._groups,this._parents)}function A3(e,t){var n,r,o;return function(){var s=eo(this,e),i=(this.style.removeProperty(e),eo(this,e));return s===i?null:s===n&&i===r?o:o=t(n=s,r=i)}}function Tm(e){return function(){this.style.removeProperty(e)}}function R3(e,t,n){var r,o=n+"",s;return function(){var i=eo(this,e);return i===o?null:i===r?s:s=t(r=i,n)}}function D3(e,t,n){var r,o,s;return function(){var i=eo(this,e),l=n(this),a=l+"";return l==null&&(a=l=(this.style.removeProperty(e),eo(this,e))),i===a?null:i===r&&a===o?s:(o=a,s=t(r=i,l))}}function L3(e,t){var n,r,o,s="style."+t,i="end."+s,l;return function(){var a=Ht(this,e),u=a.on,c=a.value[s]==null?l||(l=Tm(t)):void 0;(u!==n||o!==c)&&(r=(n=u).copy()).on(i,o=c),a.on=r}}function O3(e,t,n){var r=(e+="")=="transform"?Ob:Mm;return t==null?this.styleTween(e,A3(e,r)).on("end.style."+e,Tm(e)):typeof t=="function"?this.styleTween(e,D3(e,r,Dc(this,"style."+e,t))).each(L3(this._id,e)):this.styleTween(e,R3(e,r,t),n).on("end.style."+e,null)}function H3(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function B3(e,t,n){var r,o;function s(){var i=t.apply(this,arguments);return i!==o&&(r=(o=i)&&H3(e,i,n)),r}return s._value=t,s}function V3(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,B3(e,t,n??""))}function U3(e){return function(){this.textContent=e}}function W3(e){return function(){var t=e(this);this.textContent=t??""}}function $3(e){return this.tween("text",typeof e=="function"?W3(Dc(this,"text",e)):U3(e==null?"":e+""))}function G3(e){return function(t){this.textContent=e.call(this,t)}}function K3(e){var t,n;function r(){var o=e.apply(this,arguments);return o!==n&&(t=(n=o)&&G3(o)),t}return r._value=e,r}function Y3(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,K3(e))}function Q3(){for(var e=this._name,t=this._id,n=Am(),r=this._groups,o=r.length,s=0;s<o;++s)for(var i=r[s],l=i.length,a,u=0;u<l;++u)if(a=i[u]){var c=Ft(a,t);Sl(a,e,n,u,i,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new rn(r,this._parents,e,n)}function X3(){var e,t,n=this,r=n._id,o=n.size();return new Promise(function(s,i){var l={value:i},a={value:function(){--o===0&&s()}};n.each(function(){var u=Ht(this,r),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(a)),u.on=t}),o===0&&s()})}var q3=0;function rn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Am(){return++q3}var Wt=Ss.prototype;rn.prototype={constructor:rn,select:F3,selectAll:P3,selectChild:Wt.selectChild,selectChildren:Wt.selectChildren,filter:k3,merge:j3,selection:T3,transition:Q3,call:Wt.call,nodes:Wt.nodes,node:Wt.node,size:Wt.size,empty:Wt.empty,each:Wt.each,on:I3,attr:a3,attrTween:p3,style:O3,styleTween:V3,text:$3,textTween:Y3,remove:C3,tween:t3,delay:m3,duration:x3,ease:b3,easeVarying:E3,end:X3,[Symbol.iterator]:Wt[Symbol.iterator]};function Z3(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var J3={time:null,delay:0,duration:250,ease:Z3};function eS(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function tS(e){var t,n;e instanceof rn?(t=e._id,e=e._name):(t=Am(),(n=J3).time=Ac(),e=e==null?null:e+"");for(var r=this._groups,o=r.length,s=0;s<o;++s)for(var i=r[s],l=i.length,a,u=0;u<l;++u)(a=i[u])&&Sl(a,e,t,u,i,n||eS(a,t));return new rn(r,this._parents,e,t)}Ss.prototype.interrupt=Zb;Ss.prototype.transition=tS;const Qs=e=>()=>e;function nS(e,{sourceEvent:t,target:n,transform:r,dispatch:o}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:o}})}function Xt(e,t,n){this.k=e,this.x=t,this.y=n}Xt.prototype={constructor:Xt,scale:function(e){return e===1?this:new Xt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Xt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Zt=new Xt(1,0,0);Xt.prototype;function fa(e){e.stopImmediatePropagation()}function wo(e){e.preventDefault(),e.stopImmediatePropagation()}function rS(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function oS(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Gf(){return this.__zoom||Zt}function sS(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function iS(){return navigator.maxTouchPoints||"ontouchstart"in this}function lS(e,t,n){var r=e.invertX(t[0][0])-n[0][0],o=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],i=e.invertY(t[1][1])-n[1][1];return e.translate(o>r?(r+o)/2:Math.min(0,r)||Math.max(0,o),i>s?(s+i)/2:Math.min(0,s)||Math.max(0,i))}function Rm(){var e=rS,t=oS,n=lS,r=sS,o=iS,s=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],l=250,a=Wb,u=xl("start","zoom","end"),c,d,f,h=500,m=150,v=0,b=10;function p(w){w.property("__zoom",Gf).on("wheel.zoom",M,{passive:!1}).on("mousedown.zoom",j).on("dblclick.zoom",A).filter(o).on("touchstart.zoom",R).on("touchmove.zoom",U).on("touchend.zoom touchcancel.zoom",W).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(w,P,N,H){var F=w.selection?w.selection():w;F.property("__zoom",Gf),w!==F?I(w,P,N,H):F.interrupt().each(function(){z(this,arguments).event(H).start().zoom(null,typeof P=="function"?P.apply(this,arguments):P).end()})},p.scaleBy=function(w,P,N,H){p.scaleTo(w,function(){var F=this.__zoom.k,E=typeof P=="function"?P.apply(this,arguments):P;return F*E},N,H)},p.scaleTo=function(w,P,N,H){p.transform(w,function(){var F=t.apply(this,arguments),E=this.__zoom,T=N==null?x(F):typeof N=="function"?N.apply(this,arguments):N,O=E.invert(T),B=typeof P=="function"?P.apply(this,arguments):P;return n(y(g(E,B),T,O),F,i)},N,H)},p.translateBy=function(w,P,N,H){p.transform(w,function(){return n(this.__zoom.translate(typeof P=="function"?P.apply(this,arguments):P,typeof N=="function"?N.apply(this,arguments):N),t.apply(this,arguments),i)},null,H)},p.translateTo=function(w,P,N,H,F){p.transform(w,function(){var E=t.apply(this,arguments),T=this.__zoom,O=H==null?x(E):typeof H=="function"?H.apply(this,arguments):H;return n(Zt.translate(O[0],O[1]).scale(T.k).translate(typeof P=="function"?-P.apply(this,arguments):-P,typeof N=="function"?-N.apply(this,arguments):-N),E,i)},H,F)};function g(w,P){return P=Math.max(s[0],Math.min(s[1],P)),P===w.k?w:new Xt(P,w.x,w.y)}function y(w,P,N){var H=P[0]-N[0]*w.k,F=P[1]-N[1]*w.k;return H===w.x&&F===w.y?w:new Xt(w.k,H,F)}function x(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function I(w,P,N,H){w.on("start.zoom",function(){z(this,arguments).event(H).start()}).on("interrupt.zoom end.zoom",function(){z(this,arguments).event(H).end()}).tween("zoom",function(){var F=this,E=arguments,T=z(F,E).event(H),O=t.apply(F,E),B=N==null?x(O):typeof N=="function"?N.apply(F,E):N,L=Math.max(O[1][0]-O[0][0],O[1][1]-O[0][1]),V=F.__zoom,$=typeof P=="function"?P.apply(F,E):P,K=a(V.invert(B).concat(L/V.k),$.invert(B).concat(L/$.k));return function(G){if(G===1)G=$;else{var Z=K(G),ne=L/Z[2];G=new Xt(ne,B[0]-Z[0]*ne,B[1]-Z[1]*ne)}T.zoom(null,G)}})}function z(w,P,N){return!N&&w.__zooming||new _(w,P)}function _(w,P){this.that=w,this.args=P,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,P),this.taps=0}_.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,P){return this.mouse&&w!=="mouse"&&(this.mouse[1]=P.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=P.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=P.invert(this.touch1[0])),this.that.__zoom=P,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var P=dt(this.that).datum();u.call(w,this.that,new nS(w,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),P)}};function M(w,...P){if(!e.apply(this,arguments))return;var N=z(this,P).event(w),H=this.__zoom,F=Math.max(s[0],Math.min(s[1],H.k*Math.pow(2,r.apply(this,arguments)))),E=kt(w);if(N.wheel)(N.mouse[0][0]!==E[0]||N.mouse[0][1]!==E[1])&&(N.mouse[1]=H.invert(N.mouse[0]=E)),clearTimeout(N.wheel);else{if(H.k===F)return;N.mouse=[E,H.invert(E)],yi(this),N.start()}wo(w),N.wheel=setTimeout(T,m),N.zoom("mouse",n(y(g(H,F),N.mouse[0],N.mouse[1]),N.extent,i));function T(){N.wheel=null,N.end()}}function j(w,...P){if(f||!e.apply(this,arguments))return;var N=w.currentTarget,H=z(this,P,!0).event(w),F=dt(w.view).on("mousemove.zoom",B,!0).on("mouseup.zoom",L,!0),E=kt(w,N),T=w.clientX,O=w.clientY;bm(w.view),fa(w),H.mouse=[E,this.__zoom.invert(E)],yi(this),H.start();function B(V){if(wo(V),!H.moved){var $=V.clientX-T,K=V.clientY-O;H.moved=$*$+K*K>v}H.event(V).zoom("mouse",n(y(H.that.__zoom,H.mouse[0]=kt(V,N),H.mouse[1]),H.extent,i))}function L(V){F.on("mousemove.zoom mouseup.zoom",null),Sm(V.view,H.moved),wo(V),H.event(V).end()}}function A(w,...P){if(e.apply(this,arguments)){var N=this.__zoom,H=kt(w.changedTouches?w.changedTouches[0]:w,this),F=N.invert(H),E=N.k*(w.shiftKey?.5:2),T=n(y(g(N,E),H,F),t.apply(this,P),i);wo(w),l>0?dt(this).transition().duration(l).call(I,T,H,w):dt(this).call(p.transform,T,H,w)}}function R(w,...P){if(e.apply(this,arguments)){var N=w.touches,H=N.length,F=z(this,P,w.changedTouches.length===H).event(w),E,T,O,B;for(fa(w),T=0;T<H;++T)O=N[T],B=kt(O,this),B=[B,this.__zoom.invert(B),O.identifier],F.touch0?!F.touch1&&F.touch0[2]!==B[2]&&(F.touch1=B,F.taps=0):(F.touch0=B,E=!0,F.taps=1+!!c);c&&(c=clearTimeout(c)),E&&(F.taps<2&&(d=B[0],c=setTimeout(function(){c=null},h)),yi(this),F.start())}}function U(w,...P){if(this.__zooming){var N=z(this,P).event(w),H=w.changedTouches,F=H.length,E,T,O,B;for(wo(w),E=0;E<F;++E)T=H[E],O=kt(T,this),N.touch0&&N.touch0[2]===T.identifier?N.touch0[0]=O:N.touch1&&N.touch1[2]===T.identifier&&(N.touch1[0]=O);if(T=N.that.__zoom,N.touch1){var L=N.touch0[0],V=N.touch0[1],$=N.touch1[0],K=N.touch1[1],G=(G=$[0]-L[0])*G+(G=$[1]-L[1])*G,Z=(Z=K[0]-V[0])*Z+(Z=K[1]-V[1])*Z;T=g(T,Math.sqrt(G/Z)),O=[(L[0]+$[0])/2,(L[1]+$[1])/2],B=[(V[0]+K[0])/2,(V[1]+K[1])/2]}else if(N.touch0)O=N.touch0[0],B=N.touch0[1];else return;N.zoom("touch",n(y(T,O,B),N.extent,i))}}function W(w,...P){if(this.__zooming){var N=z(this,P).event(w),H=w.changedTouches,F=H.length,E,T;for(fa(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),E=0;E<F;++E)T=H[E],N.touch0&&N.touch0[2]===T.identifier?delete N.touch0:N.touch1&&N.touch1[2]===T.identifier&&delete N.touch1;if(N.touch1&&!N.touch0&&(N.touch0=N.touch1,delete N.touch1),N.touch0)N.touch0[1]=this.__zoom.invert(N.touch0[0]);else if(N.end(),N.taps===2&&(T=kt(T,this),Math.hypot(d[0]-T[0],d[1]-T[1])<b)){var O=dt(this).on("dblclick.zoom");O&&O.apply(this,arguments)}}}return p.wheelDelta=function(w){return arguments.length?(r=typeof w=="function"?w:Qs(+w),p):r},p.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Qs(!!w),p):e},p.touchable=function(w){return arguments.length?(o=typeof w=="function"?w:Qs(!!w),p):o},p.extent=function(w){return arguments.length?(t=typeof w=="function"?w:Qs([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),p):t},p.scaleExtent=function(w){return arguments.length?(s[0]=+w[0],s[1]=+w[1],p):[s[0],s[1]]},p.translateExtent=function(w){return arguments.length?(i[0][0]=+w[0][0],i[1][0]=+w[1][0],i[0][1]=+w[0][1],i[1][1]=+w[1][1],p):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},p.constrain=function(w){return arguments.length?(n=w,p):n},p.duration=function(w){return arguments.length?(l=+w,p):l},p.interpolate=function(w){return arguments.length?(a=w,p):a},p.on=function(){var w=u.on.apply(u,arguments);return w===u?p:w},p.clickDistance=function(w){return arguments.length?(v=(w=+w)*w,p):Math.sqrt(v)},p.tapDistance=function(w){return arguments.length?(b=+w,p):b},p}const El=S.createContext(null),aS=El.Provider,on={error001:()=>"[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The React Flow parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,t)=>`Couldn't create edge for ${e?"target":"source"} handle id: "${e?t.targetHandle:t.sourceHandle}", edge id: ${t.id}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`},Dm=on.error001();function pe(e,t){const n=S.useContext(El);if(n===null)throw new Error(Dm);return am(n,e,t)}const _e=()=>{const e=S.useContext(El);if(e===null)throw new Error(Dm);return S.useMemo(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe,destroy:e.destroy}),[e])},uS=e=>e.userSelectionActive?"none":"all";function Lc({position:e,children:t,className:n,style:r,...o}){const s=pe(uS),i=`${e}`.split("-");return D.createElement("div",{className:De(["react-flow__panel",n,...i]),style:{...r,pointerEvents:s},...o},t)}function cS({proOptions:e,position:t="bottom-right"}){return e!=null&&e.hideAttribution?null:D.createElement(Lc,{position:t,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro"},D.createElement("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution"},"React Flow"))}const dS=({x:e,y:t,label:n,labelStyle:r={},labelShowBg:o=!0,labelBgStyle:s={},labelBgPadding:i=[2,4],labelBgBorderRadius:l=2,children:a,className:u,...c})=>{const d=S.useRef(null),[f,h]=S.useState({x:0,y:0,width:0,height:0}),m=De(["react-flow__edge-textwrapper",u]);return S.useEffect(()=>{if(d.current){const v=d.current.getBBox();h({x:v.x,y:v.y,width:v.width,height:v.height})}},[n]),typeof n>"u"||!n?null:D.createElement("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:m,visibility:f.width?"visible":"hidden",...c},o&&D.createElement("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:s,rx:l,ry:l}),D.createElement("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:d,style:r},n),a)};var fS=S.memo(dS);const Oc=e=>({width:e.offsetWidth,height:e.offsetHeight}),no=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),Hc=(e={x:0,y:0},t)=>({x:no(e.x,t[0][0],t[1][0]),y:no(e.y,t[0][1],t[1][1])}),Kf=(e,t,n)=>e<t?no(Math.abs(e-t),1,50)/50:e>n?-no(Math.abs(e-n),1,50)/50:0,Lm=(e,t)=>{const n=Kf(e.x,35,t.width-35)*20,r=Kf(e.y,35,t.height-35)*20;return[n,r]},Om=e=>{var t;return((t=e.getRootNode)==null?void 0:t.call(e))||(window==null?void 0:window.document)},Hm=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),ps=({x:e,y:t,width:n,height:r})=>({x:e,y:t,x2:e+n,y2:t+r}),Bm=({x:e,y:t,x2:n,y2:r})=>({x:e,y:t,width:n-e,height:r-t}),Yf=e=>({...e.positionAbsolute||{x:0,y:0},width:e.width||0,height:e.height||0}),pS=(e,t)=>Bm(Hm(ps(e),ps(t))),ju=(e,t)=>{const n=Math.max(0,Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x)),r=Math.max(0,Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y));return Math.ceil(n*r)},hS=e=>pt(e.width)&&pt(e.height)&&pt(e.x)&&pt(e.y),pt=e=>!isNaN(e)&&isFinite(e),Se=Symbol.for("internals"),Vm=["Enter"," ","Escape"],gS=(e,t)=>{},mS=e=>"nativeEvent"in e;function Nu(e){var o,s;const t=mS(e)?e.nativeEvent:e,n=((s=(o=t.composedPath)==null?void 0:o.call(t))==null?void 0:s[0])||e.target;return["INPUT","SELECT","TEXTAREA"].includes(n==null?void 0:n.nodeName)||(n==null?void 0:n.hasAttribute("contenteditable"))||!!(n!=null&&n.closest(".nokey"))}const Um=e=>"clientX"in e,In=(e,t)=>{var s,i;const n=Um(e),r=n?e.clientX:(s=e.touches)==null?void 0:s[0].clientX,o=n?e.clientY:(i=e.touches)==null?void 0:i[0].clientY;return{x:r-((t==null?void 0:t.left)??0),y:o-((t==null?void 0:t.top)??0)}},Xi=()=>{var e;return typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)==null?void 0:e.indexOf("Mac"))>=0},io=({id:e,path:t,labelX:n,labelY:r,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:f,interactionWidth:h=20})=>D.createElement(D.Fragment,null,D.createElement("path",{id:e,style:c,d:t,fill:"none",className:"react-flow__edge-path",markerEnd:d,markerStart:f}),h&&D.createElement("path",{d:t,fill:"none",strokeOpacity:0,strokeWidth:h,className:"react-flow__edge-interaction"}),o&&pt(n)&&pt(r)?D.createElement(fS,{x:n,y:r,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u}):null);io.displayName="BaseEdge";function bo(e,t,n){return n===void 0?n:r=>{const o=t().edges.find(s=>s.id===e);o&&n(r,{...o})}}function Wm({sourceX:e,sourceY:t,targetX:n,targetY:r}){const o=Math.abs(n-e)/2,s=n<e?n+o:n-o,i=Math.abs(r-t)/2,l=r<t?r+i:r-i;return[s,l,o,i]}function $m({sourceX:e,sourceY:t,targetX:n,targetY:r,sourceControlX:o,sourceControlY:s,targetControlX:i,targetControlY:l}){const a=e*.125+o*.375+i*.375+n*.125,u=t*.125+s*.375+l*.375+r*.125,c=Math.abs(a-e),d=Math.abs(u-t);return[a,u,c,d]}var ar;(function(e){e.Strict="strict",e.Loose="loose"})(ar||(ar={}));var Qn;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Qn||(Qn={}));var hs;(function(e){e.Partial="partial",e.Full="full"})(hs||(hs={}));var yn;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(yn||(yn={}));var gs;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(gs||(gs={}));var re;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(re||(re={}));function Qf({pos:e,x1:t,y1:n,x2:r,y2:o}){return e===re.Left||e===re.Right?[.5*(t+r),n]:[t,.5*(n+o)]}function Gm({sourceX:e,sourceY:t,sourcePosition:n=re.Bottom,targetX:r,targetY:o,targetPosition:s=re.Top}){const[i,l]=Qf({pos:n,x1:e,y1:t,x2:r,y2:o}),[a,u]=Qf({pos:s,x1:r,y1:o,x2:e,y2:t}),[c,d,f,h]=$m({sourceX:e,sourceY:t,targetX:r,targetY:o,sourceControlX:i,sourceControlY:l,targetControlX:a,targetControlY:u});return[`M${e},${t} C${i},${l} ${a},${u} ${r},${o}`,c,d,f,h]}const Bc=S.memo(({sourceX:e,sourceY:t,targetX:n,targetY:r,sourcePosition:o=re.Bottom,targetPosition:s=re.Top,label:i,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:h,markerStart:m,interactionWidth:v})=>{const[b,p,g]=Gm({sourceX:e,sourceY:t,sourcePosition:o,targetX:n,targetY:r,targetPosition:s});return D.createElement(io,{path:b,labelX:p,labelY:g,label:i,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:h,markerStart:m,interactionWidth:v})});Bc.displayName="SimpleBezierEdge";const Xf={[re.Left]:{x:-1,y:0},[re.Right]:{x:1,y:0},[re.Top]:{x:0,y:-1},[re.Bottom]:{x:0,y:1}},yS=({source:e,sourcePosition:t=re.Bottom,target:n})=>t===re.Left||t===re.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},qf=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function vS({source:e,sourcePosition:t=re.Bottom,target:n,targetPosition:r=re.Top,center:o,offset:s}){const i=Xf[t],l=Xf[r],a={x:e.x+i.x*s,y:e.y+i.y*s},u={x:n.x+l.x*s,y:n.y+l.y*s},c=yS({source:a,sourcePosition:t,target:u}),d=c.x!==0?"x":"y",f=c[d];let h=[],m,v;const b={x:0,y:0},p={x:0,y:0},[g,y,x,I]=Wm({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(i[d]*l[d]===-1){m=o.x??g,v=o.y??y;const _=[{x:m,y:a.y},{x:m,y:u.y}],M=[{x:a.x,y:v},{x:u.x,y:v}];i[d]===f?h=d==="x"?_:M:h=d==="x"?M:_}else{const _=[{x:a.x,y:u.y}],M=[{x:u.x,y:a.y}];if(d==="x"?h=i.x===f?M:_:h=i.y===f?_:M,t===r){const W=Math.abs(e[d]-n[d]);if(W<=s){const w=Math.min(s-1,s-W);i[d]===f?b[d]=(a[d]>e[d]?-1:1)*w:p[d]=(u[d]>n[d]?-1:1)*w}}if(t!==r){const W=d==="x"?"y":"x",w=i[d]===l[W],P=a[W]>u[W],N=a[W]<u[W];(i[d]===1&&(!w&&P||w&&N)||i[d]!==1&&(!w&&N||w&&P))&&(h=d==="x"?_:M)}const j={x:a.x+b.x,y:a.y+b.y},A={x:u.x+p.x,y:u.y+p.y},R=Math.max(Math.abs(j.x-h[0].x),Math.abs(A.x-h[0].x)),U=Math.max(Math.abs(j.y-h[0].y),Math.abs(A.y-h[0].y));R>=U?(m=(j.x+A.x)/2,v=h[0].y):(m=h[0].x,v=(j.y+A.y)/2)}return[[e,{x:a.x+b.x,y:a.y+b.y},...h,{x:u.x+p.x,y:u.y+p.y},n],m,v,x,I]}function xS(e,t,n,r){const o=Math.min(qf(e,t)/2,qf(t,n)/2,r),{x:s,y:i}=t;if(e.x===s&&s===n.x||e.y===i&&i===n.y)return`L${s} ${i}`;if(e.y===i){const u=e.x<n.x?-1:1,c=e.y<n.y?1:-1;return`L ${s+o*u},${i}Q ${s},${i} ${s},${i+o*c}`}const l=e.x<n.x?1:-1,a=e.y<n.y?-1:1;return`L ${s},${i+o*a}Q ${s},${i} ${s+o*l},${i}`}function _u({sourceX:e,sourceY:t,sourcePosition:n=re.Bottom,targetX:r,targetY:o,targetPosition:s=re.Top,borderRadius:i=5,centerX:l,centerY:a,offset:u=20}){const[c,d,f,h,m]=vS({source:{x:e,y:t},sourcePosition:n,target:{x:r,y:o},targetPosition:s,center:{x:l,y:a},offset:u});return[c.reduce((b,p,g)=>{let y="";return g>0&&g<c.length-1?y=xS(c[g-1],p,c[g+1],i):y=`${g===0?"M":"L"}${p.x} ${p.y}`,b+=y,b},""),d,f,h,m]}const kl=S.memo(({sourceX:e,sourceY:t,targetX:n,targetY:r,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,sourcePosition:d=re.Bottom,targetPosition:f=re.Top,markerEnd:h,markerStart:m,pathOptions:v,interactionWidth:b})=>{const[p,g,y]=_u({sourceX:e,sourceY:t,sourcePosition:d,targetX:n,targetY:r,targetPosition:f,borderRadius:v==null?void 0:v.borderRadius,offset:v==null?void 0:v.offset});return D.createElement(io,{path:p,labelX:g,labelY:y,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,markerEnd:h,markerStart:m,interactionWidth:b})});kl.displayName="SmoothStepEdge";const Vc=S.memo(e=>{var t;return D.createElement(kl,{...e,pathOptions:S.useMemo(()=>{var n;return{borderRadius:0,offset:(n=e.pathOptions)==null?void 0:n.offset}},[(t=e.pathOptions)==null?void 0:t.offset])})});Vc.displayName="StepEdge";function wS({sourceX:e,sourceY:t,targetX:n,targetY:r}){const[o,s,i,l]=Wm({sourceX:e,sourceY:t,targetX:n,targetY:r});return[`M ${e},${t}L ${n},${r}`,o,s,i,l]}const Uc=S.memo(({sourceX:e,sourceY:t,targetX:n,targetY:r,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:f,interactionWidth:h})=>{const[m,v,b]=wS({sourceX:e,sourceY:t,targetX:n,targetY:r});return D.createElement(io,{path:m,labelX:v,labelY:b,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:f,interactionWidth:h})});Uc.displayName="StraightEdge";function Xs(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Zf({pos:e,x1:t,y1:n,x2:r,y2:o,c:s}){switch(e){case re.Left:return[t-Xs(t-r,s),n];case re.Right:return[t+Xs(r-t,s),n];case re.Top:return[t,n-Xs(n-o,s)];case re.Bottom:return[t,n+Xs(o-n,s)]}}function Km({sourceX:e,sourceY:t,sourcePosition:n=re.Bottom,targetX:r,targetY:o,targetPosition:s=re.Top,curvature:i=.25}){const[l,a]=Zf({pos:n,x1:e,y1:t,x2:r,y2:o,c:i}),[u,c]=Zf({pos:s,x1:r,y1:o,x2:e,y2:t,c:i}),[d,f,h,m]=$m({sourceX:e,sourceY:t,targetX:r,targetY:o,sourceControlX:l,sourceControlY:a,targetControlX:u,targetControlY:c});return[`M${e},${t} C${l},${a} ${u},${c} ${r},${o}`,d,f,h,m]}const qi=S.memo(({sourceX:e,sourceY:t,targetX:n,targetY:r,sourcePosition:o=re.Bottom,targetPosition:s=re.Top,label:i,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:h,markerStart:m,pathOptions:v,interactionWidth:b})=>{const[p,g,y]=Km({sourceX:e,sourceY:t,sourcePosition:o,targetX:n,targetY:r,targetPosition:s,curvature:v==null?void 0:v.curvature});return D.createElement(io,{path:p,labelX:g,labelY:y,label:i,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:h,markerStart:m,interactionWidth:b})});qi.displayName="BezierEdge";const Wc=S.createContext(null),bS=Wc.Provider;Wc.Consumer;const SS=()=>S.useContext(Wc),ES=e=>"id"in e&&"source"in e&&"target"in e,kS=({source:e,sourceHandle:t,target:n,targetHandle:r})=>`reactflow__edge-${e}${t||""}-${n}${r||""}`,Iu=(e,t)=>typeof e>"u"?"":typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(r=>`${r}=${e[r]}`).join("&")}`,jS=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),NS=(e,t)=>{if(!e.source||!e.target)return t;let n;return ES(e)?n={...e}:n={...e,id:kS(e)},jS(n,t)?t:t.concat(n)},zu=({x:e,y:t},[n,r,o],s,[i,l])=>{const a={x:(e-n)/o,y:(t-r)/o};return s?{x:i*Math.round(a.x/i),y:l*Math.round(a.y/l)}:a},Ym=({x:e,y:t},[n,r,o])=>({x:e*o+n,y:t*o+r}),er=(e,t=[0,0])=>{if(!e)return{x:0,y:0,positionAbsolute:{x:0,y:0}};const n=(e.width??0)*t[0],r=(e.height??0)*t[1],o={x:e.position.x-n,y:e.position.y-r};return{...o,positionAbsolute:e.positionAbsolute?{x:e.positionAbsolute.x-n,y:e.positionAbsolute.y-r}:o}},jl=(e,t=[0,0])=>{if(e.length===0)return{x:0,y:0,width:0,height:0};const n=e.reduce((r,o)=>{const{x:s,y:i}=er(o,t).positionAbsolute;return Hm(r,ps({x:s,y:i,width:o.width||0,height:o.height||0}))},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return Bm(n)},Qm=(e,t,[n,r,o]=[0,0,1],s=!1,i=!1,l=[0,0])=>{const a={x:(t.x-n)/o,y:(t.y-r)/o,width:t.width/o,height:t.height/o},u=[];return e.forEach(c=>{const{width:d,height:f,selectable:h=!0,hidden:m=!1}=c;if(i&&!h||m)return!1;const{positionAbsolute:v}=er(c,l),b={x:v.x,y:v.y,width:d||0,height:f||0},p=ju(a,b),g=typeof d>"u"||typeof f>"u"||d===null||f===null,y=s&&p>0,x=(d||0)*(f||0);(g||y||p>=x||c.dragging)&&u.push(c)}),u},Xm=(e,t)=>{const n=e.map(r=>r.id);return t.filter(r=>n.includes(r.source)||n.includes(r.target))},qm=(e,t,n,r,o,s=.1)=>{const i=t/(e.width*(1+s)),l=n/(e.height*(1+s)),a=Math.min(i,l),u=no(a,r,o),c=e.x+e.width/2,d=e.y+e.height/2,f=t/2-c*u,h=n/2-d*u;return{x:f,y:h,zoom:u}},Un=(e,t=0)=>e.transition().duration(t);function Jf(e,t,n,r){return(t[n]||[]).reduce((o,s)=>{var i,l;return`${e.id}-${s.id}-${n}`!==r&&o.push({id:s.id||null,type:n,nodeId:e.id,x:(((i=e.positionAbsolute)==null?void 0:i.x)??0)+s.x+s.width/2,y:(((l=e.positionAbsolute)==null?void 0:l.y)??0)+s.y+s.height/2}),o},[])}function _S(e,t,n,r,o,s){const{x:i,y:l}=In(e),u=t.elementsFromPoint(i,l).find(m=>m.classList.contains("react-flow__handle"));if(u){const m=u.getAttribute("data-nodeid");if(m){const v=$c(void 0,u),b=u.getAttribute("data-handleid"),p=s({nodeId:m,id:b,type:v});if(p){const g=o.find(y=>y.nodeId===m&&y.type===v&&y.id===b);return{handle:{id:b,type:v,nodeId:m,x:(g==null?void 0:g.x)||n.x,y:(g==null?void 0:g.y)||n.y},validHandleResult:p}}}}let c=[],d=1/0;if(o.forEach(m=>{const v=Math.sqrt((m.x-n.x)**2+(m.y-n.y)**2);if(v<=r){const b=s(m);v<=d&&(v<d?c=[{handle:m,validHandleResult:b}]:v===d&&c.push({handle:m,validHandleResult:b}),d=v)}}),!c.length)return{handle:null,validHandleResult:Zm()};if(c.length===1)return c[0];const f=c.some(({validHandleResult:m})=>m.isValid),h=c.some(({handle:m})=>m.type==="target");return c.find(({handle:m,validHandleResult:v})=>h?m.type==="target":f?v.isValid:!0)||c[0]}const IS={source:null,target:null,sourceHandle:null,targetHandle:null},Zm=()=>({handleDomNode:null,isValid:!1,connection:IS,endHandle:null});function Jm(e,t,n,r,o,s,i){const l=o==="target",a=i.querySelector(`.react-flow__handle[data-id="${e==null?void 0:e.nodeId}-${e==null?void 0:e.id}-${e==null?void 0:e.type}"]`),u={...Zm(),handleDomNode:a};if(a){const c=$c(void 0,a),d=a.getAttribute("data-nodeid"),f=a.getAttribute("data-handleid"),h=a.classList.contains("connectable"),m=a.classList.contains("connectableend"),v={source:l?d:n,sourceHandle:l?f:r,target:l?n:d,targetHandle:l?r:f};u.connection=v,h&&m&&(t===ar.Strict?l&&c==="source"||!l&&c==="target":d!==n||f!==r)&&(u.endHandle={nodeId:d,handleId:f,type:c},u.isValid=s(v))}return u}function zS({nodes:e,nodeId:t,handleId:n,handleType:r}){return e.reduce((o,s)=>{if(s[Se]){const{handleBounds:i}=s[Se];let l=[],a=[];i&&(l=Jf(s,i,"source",`${t}-${n}-${r}`),a=Jf(s,i,"target",`${t}-${n}-${r}`)),o.push(...l,...a)}return o},[])}function $c(e,t){return e||(t!=null&&t.classList.contains("target")?"target":t!=null&&t.classList.contains("source")?"source":null)}function pa(e){e==null||e.classList.remove("valid","connecting","react-flow__handle-valid","react-flow__handle-connecting")}function CS(e,t){let n=null;return t?n="valid":e&&!t&&(n="invalid"),n}function e0({event:e,handleId:t,nodeId:n,onConnect:r,isTarget:o,getState:s,setState:i,isValidConnection:l,edgeUpdaterType:a,onReconnectEnd:u}){const c=Om(e.target),{connectionMode:d,domNode:f,autoPanOnConnect:h,connectionRadius:m,onConnectStart:v,panBy:b,getNodes:p,cancelConnection:g}=s();let y=0,x;const{x:I,y:z}=In(e),_=c==null?void 0:c.elementFromPoint(I,z),M=$c(a,_),j=f==null?void 0:f.getBoundingClientRect();if(!j||!M)return;let A,R=In(e,j),U=!1,W=null,w=!1,P=null;const N=zS({nodes:p(),nodeId:n,handleId:t,handleType:M}),H=()=>{if(!h)return;const[T,O]=Lm(R,j);b({x:T,y:O}),y=requestAnimationFrame(H)};i({connectionPosition:R,connectionStatus:null,connectionNodeId:n,connectionHandleId:t,connectionHandleType:M,connectionStartHandle:{nodeId:n,handleId:t,type:M},connectionEndHandle:null}),v==null||v(e,{nodeId:n,handleId:t,handleType:M});function F(T){const{transform:O}=s();R=In(T,j);const{handle:B,validHandleResult:L}=_S(T,c,zu(R,O,!1,[1,1]),m,N,V=>Jm(V,d,n,t,o?"target":"source",l,c));if(x=B,U||(H(),U=!0),P=L.handleDomNode,W=L.connection,w=L.isValid,i({connectionPosition:x&&w?Ym({x:x.x,y:x.y},O):R,connectionStatus:CS(!!x,w),connectionEndHandle:L.endHandle}),!x&&!w&&!P)return pa(A);W.source!==W.target&&P&&(pa(A),A=P,P.classList.add("connecting","react-flow__handle-connecting"),P.classList.toggle("valid",w),P.classList.toggle("react-flow__handle-valid",w))}function E(T){var O,B;(x||P)&&W&&w&&(r==null||r(W)),(B=(O=s()).onConnectEnd)==null||B.call(O,T),a&&(u==null||u(T)),pa(A),g(),cancelAnimationFrame(y),U=!1,w=!1,W=null,P=null,c.removeEventListener("mousemove",F),c.removeEventListener("mouseup",E),c.removeEventListener("touchmove",F),c.removeEventListener("touchend",E)}c.addEventListener("mousemove",F),c.addEventListener("mouseup",E),c.addEventListener("touchmove",F),c.addEventListener("touchend",E)}const ep=()=>!0,FS=e=>({connectionStartHandle:e.connectionStartHandle,connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName}),PS=(e,t,n)=>r=>{const{connectionStartHandle:o,connectionEndHandle:s,connectionClickStartHandle:i}=r;return{connecting:(o==null?void 0:o.nodeId)===e&&(o==null?void 0:o.handleId)===t&&(o==null?void 0:o.type)===n||(s==null?void 0:s.nodeId)===e&&(s==null?void 0:s.handleId)===t&&(s==null?void 0:s.type)===n,clickConnecting:(i==null?void 0:i.nodeId)===e&&(i==null?void 0:i.handleId)===t&&(i==null?void 0:i.type)===n}},t0=S.forwardRef(({type:e="source",position:t=re.Top,isValidConnection:n,isConnectable:r=!0,isConnectableStart:o=!0,isConnectableEnd:s=!0,id:i,onConnect:l,children:a,className:u,onMouseDown:c,onTouchStart:d,...f},h)=>{var j,A;const m=i||null,v=e==="target",b=_e(),p=SS(),{connectOnClick:g,noPanClassName:y}=pe(FS,Pe),{connecting:x,clickConnecting:I}=pe(PS(p,m,e),Pe);p||(A=(j=b.getState()).onError)==null||A.call(j,"010",on.error010());const z=R=>{const{defaultEdgeOptions:U,onConnect:W,hasDefaultEdges:w}=b.getState(),P={...U,...R};if(w){const{edges:N,setEdges:H}=b.getState();H(NS(P,N))}W==null||W(P),l==null||l(P)},_=R=>{if(!p)return;const U=Um(R);o&&(U&&R.button===0||!U)&&e0({event:R,handleId:m,nodeId:p,onConnect:z,isTarget:v,getState:b.getState,setState:b.setState,isValidConnection:n||b.getState().isValidConnection||ep}),U?c==null||c(R):d==null||d(R)},M=R=>{const{onClickConnectStart:U,onClickConnectEnd:W,connectionClickStartHandle:w,connectionMode:P,isValidConnection:N}=b.getState();if(!p||!w&&!o)return;if(!w){U==null||U(R,{nodeId:p,handleId:m,handleType:e}),b.setState({connectionClickStartHandle:{nodeId:p,type:e,handleId:m}});return}const H=Om(R.target),F=n||N||ep,{connection:E,isValid:T}=Jm({nodeId:p,id:m,type:e},P,w.nodeId,w.handleId||null,w.type,F,H);T&&z(E),W==null||W(R),b.setState({connectionClickStartHandle:null})};return D.createElement("div",{"data-handleid":m,"data-nodeid":p,"data-handlepos":t,"data-id":`${p}-${m}-${e}`,className:De(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",y,u,{source:!v,target:v,connectable:r,connectablestart:o,connectableend:s,connecting:I,connectionindicator:r&&(o&&!x||s&&x)}]),onMouseDown:_,onTouchStart:_,onClick:g?M:void 0,ref:h,...f},a)});t0.displayName="Handle";var Ot=S.memo(t0);const n0=({data:e,isConnectable:t,targetPosition:n=re.Top,sourcePosition:r=re.Bottom})=>D.createElement(D.Fragment,null,D.createElement(Ot,{type:"target",position:n,isConnectable:t}),e==null?void 0:e.label,D.createElement(Ot,{type:"source",position:r,isConnectable:t}));n0.displayName="DefaultNode";var Cu=S.memo(n0);const r0=({data:e,isConnectable:t,sourcePosition:n=re.Bottom})=>D.createElement(D.Fragment,null,e==null?void 0:e.label,D.createElement(Ot,{type:"source",position:n,isConnectable:t}));r0.displayName="InputNode";var o0=S.memo(r0);const s0=({data:e,isConnectable:t,targetPosition:n=re.Top})=>D.createElement(D.Fragment,null,D.createElement(Ot,{type:"target",position:n,isConnectable:t}),e==null?void 0:e.label);s0.displayName="OutputNode";var i0=S.memo(s0);const Gc=()=>null;Gc.displayName="GroupNode";const MS=e=>({selectedNodes:e.getNodes().filter(t=>t.selected),selectedEdges:e.edges.filter(t=>t.selected).map(t=>({...t}))}),qs=e=>e.id;function TS(e,t){return Pe(e.selectedNodes.map(qs),t.selectedNodes.map(qs))&&Pe(e.selectedEdges.map(qs),t.selectedEdges.map(qs))}const l0=S.memo(({onSelectionChange:e})=>{const t=_e(),{selectedNodes:n,selectedEdges:r}=pe(MS,TS);return S.useEffect(()=>{const o={nodes:n,edges:r};e==null||e(o),t.getState().onSelectionChange.forEach(s=>s(o))},[n,r,e]),null});l0.displayName="SelectionListener";const AS=e=>!!e.onSelectionChange;function RS({onSelectionChange:e}){const t=pe(AS);return e||t?D.createElement(l0,{onSelectionChange:e}):null}const DS=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset});function mr(e,t){S.useEffect(()=>{typeof e<"u"&&t(e)},[e])}function ie(e,t,n){S.useEffect(()=>{typeof t<"u"&&n({[e]:t})},[t])}const LS=({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,onConnect:o,onConnectStart:s,onConnectEnd:i,onClickConnectStart:l,onClickConnectEnd:a,nodesDraggable:u,nodesConnectable:c,nodesFocusable:d,edgesFocusable:f,edgesUpdatable:h,elevateNodesOnSelect:m,minZoom:v,maxZoom:b,nodeExtent:p,onNodesChange:g,onEdgesChange:y,elementsSelectable:x,connectionMode:I,snapGrid:z,snapToGrid:_,translateExtent:M,connectOnClick:j,defaultEdgeOptions:A,fitView:R,fitViewOptions:U,onNodesDelete:W,onEdgesDelete:w,onNodeDrag:P,onNodeDragStart:N,onNodeDragStop:H,onSelectionDrag:F,onSelectionDragStart:E,onSelectionDragStop:T,noPanClassName:O,nodeOrigin:B,rfId:L,autoPanOnConnect:V,autoPanOnNodeDrag:$,onError:K,connectionRadius:G,isValidConnection:Z,nodeDragThreshold:ne})=>{const{setNodes:C,setEdges:Q,setDefaultNodesAndEdges:X,setMinZoom:q,setMaxZoom:oe,setTranslateExtent:ce,setNodeExtent:Ie,reset:ue}=pe(DS,Pe),ee=_e();return S.useEffect(()=>{const ze=r==null?void 0:r.map(vt=>({...vt,...A}));return X(n,ze),()=>{ue()}},[]),ie("defaultEdgeOptions",A,ee.setState),ie("connectionMode",I,ee.setState),ie("onConnect",o,ee.setState),ie("onConnectStart",s,ee.setState),ie("onConnectEnd",i,ee.setState),ie("onClickConnectStart",l,ee.setState),ie("onClickConnectEnd",a,ee.setState),ie("nodesDraggable",u,ee.setState),ie("nodesConnectable",c,ee.setState),ie("nodesFocusable",d,ee.setState),ie("edgesFocusable",f,ee.setState),ie("edgesUpdatable",h,ee.setState),ie("elementsSelectable",x,ee.setState),ie("elevateNodesOnSelect",m,ee.setState),ie("snapToGrid",_,ee.setState),ie("snapGrid",z,ee.setState),ie("onNodesChange",g,ee.setState),ie("onEdgesChange",y,ee.setState),ie("connectOnClick",j,ee.setState),ie("fitViewOnInit",R,ee.setState),ie("fitViewOnInitOptions",U,ee.setState),ie("onNodesDelete",W,ee.setState),ie("onEdgesDelete",w,ee.setState),ie("onNodeDrag",P,ee.setState),ie("onNodeDragStart",N,ee.setState),ie("onNodeDragStop",H,ee.setState),ie("onSelectionDrag",F,ee.setState),ie("onSelectionDragStart",E,ee.setState),ie("onSelectionDragStop",T,ee.setState),ie("noPanClassName",O,ee.setState),ie("nodeOrigin",B,ee.setState),ie("rfId",L,ee.setState),ie("autoPanOnConnect",V,ee.setState),ie("autoPanOnNodeDrag",$,ee.setState),ie("onError",K,ee.setState),ie("connectionRadius",G,ee.setState),ie("isValidConnection",Z,ee.setState),ie("nodeDragThreshold",ne,ee.setState),mr(e,C),mr(t,Q),mr(v,q),mr(b,oe),mr(M,ce),mr(p,Ie),null},tp={display:"none"},OS={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},a0="react-flow__node-desc",u0="react-flow__edge-desc",HS="react-flow__aria-live",BS=e=>e.ariaLiveMessage;function VS({rfId:e}){const t=pe(BS);return D.createElement("div",{id:`${HS}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:OS},t)}function US({rfId:e,disableKeyboardA11y:t}){return D.createElement(D.Fragment,null,D.createElement("div",{id:`${a0}-${e}`,style:tp},"Press enter or space to select a node.",!t&&"You can then use the arrow keys to move the node around."," Press delete to remove it and escape to cancel."," "),D.createElement("div",{id:`${u0}-${e}`,style:tp},"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."),!t&&D.createElement(VS,{rfId:e}))}var ms=(e=null,t={actInsideInputWithModifier:!0})=>{const[n,r]=S.useState(!1),o=S.useRef(!1),s=S.useRef(new Set([])),[i,l]=S.useMemo(()=>{if(e!==null){const u=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.split("+")),c=u.reduce((d,f)=>d.concat(...f),[]);return[u,c]}return[[],[]]},[e]);return S.useEffect(()=>{const a=typeof document<"u"?document:null,u=(t==null?void 0:t.target)||a;if(e!==null){const c=h=>{if(o.current=h.ctrlKey||h.metaKey||h.shiftKey,(!o.current||o.current&&!t.actInsideInputWithModifier)&&Nu(h))return!1;const v=rp(h.code,l);s.current.add(h[v]),np(i,s.current,!1)&&(h.preventDefault(),r(!0))},d=h=>{if((!o.current||o.current&&!t.actInsideInputWithModifier)&&Nu(h))return!1;const v=rp(h.code,l);np(i,s.current,!0)?(r(!1),s.current.clear()):s.current.delete(h[v]),h.key==="Meta"&&s.current.clear(),o.current=!1},f=()=>{s.current.clear(),r(!1)};return u==null||u.addEventListener("keydown",c),u==null||u.addEventListener("keyup",d),window.addEventListener("blur",f),()=>{u==null||u.removeEventListener("keydown",c),u==null||u.removeEventListener("keyup",d),window.removeEventListener("blur",f)}}},[e,r]),n};function np(e,t,n){return e.filter(r=>n||r.length===t.size).some(r=>r.every(o=>t.has(o)))}function rp(e,t){return t.includes(e)?"code":"key"}function c0(e,t,n,r){var l,a;const o=e.parentNode||e.parentId;if(!o)return n;const s=t.get(o),i=er(s,r);return c0(s,t,{x:(n.x??0)+i.x,y:(n.y??0)+i.y,z:(((l=s[Se])==null?void 0:l.z)??0)>(n.z??0)?((a=s[Se])==null?void 0:a.z)??0:n.z??0},r)}function d0(e,t,n){e.forEach(r=>{var s;const o=r.parentNode||r.parentId;if(o&&!e.has(o))throw new Error(`Parent node ${o} not found`);if(o||n!=null&&n[r.id]){const{x:i,y:l,z:a}=c0(r,e,{...r.position,z:((s=r[Se])==null?void 0:s.z)??0},t);r.positionAbsolute={x:i,y:l},r[Se].z=a,n!=null&&n[r.id]&&(r[Se].isParent=!0)}})}function ha(e,t,n,r){const o=new Map,s={},i=r?1e3:0;return e.forEach(l=>{var h;const a=(pt(l.zIndex)?l.zIndex:0)+(l.selected?i:0),u=t.get(l.id),c={...l,positionAbsolute:{x:l.position.x,y:l.position.y}},d=l.parentNode||l.parentId;d&&(s[d]=!0);const f=(u==null?void 0:u.type)&&(u==null?void 0:u.type)!==l.type;Object.defineProperty(c,Se,{enumerable:!1,value:{handleBounds:f||(h=u==null?void 0:u[Se])==null?void 0:h.handleBounds,z:a}}),o.set(l.id,c)}),d0(o,n,s),o}function f0(e,t={}){const{getNodes:n,width:r,height:o,minZoom:s,maxZoom:i,d3Zoom:l,d3Selection:a,fitViewOnInitDone:u,fitViewOnInit:c,nodeOrigin:d}=e(),f=t.initial&&!u&&c;if(l&&a&&(f||!t.initial)){const m=n().filter(b=>{var g;const p=t.includeHiddenNodes?b.width&&b.height:!b.hidden;return(g=t.nodes)!=null&&g.length?p&&t.nodes.some(y=>y.id===b.id):p}),v=m.every(b=>b.width&&b.height);if(m.length>0&&v){const b=jl(m,d),{x:p,y:g,zoom:y}=qm(b,r,o,t.minZoom??s,t.maxZoom??i,t.padding??.1),x=Zt.translate(p,g).scale(y);return typeof t.duration=="number"&&t.duration>0?l.transform(Un(a,t.duration),x):l.transform(a,x),!0}}return!1}function WS(e,t){return e.forEach(n=>{const r=t.get(n.id);r&&t.set(r.id,{...r,[Se]:r[Se],selected:n.selected})}),new Map(t)}function $S(e,t){return t.map(n=>{const r=e.find(o=>o.id===n.id);return r&&(n.selected=r.selected),n})}function Zs({changedNodes:e,changedEdges:t,get:n,set:r}){const{nodeInternals:o,edges:s,onNodesChange:i,onEdgesChange:l,hasDefaultNodes:a,hasDefaultEdges:u}=n();e!=null&&e.length&&(a&&r({nodeInternals:WS(e,o)}),i==null||i(e)),t!=null&&t.length&&(u&&r({edges:$S(t,s)}),l==null||l(t))}const yr=()=>{},GS={zoomIn:yr,zoomOut:yr,zoomTo:yr,getZoom:()=>1,setViewport:yr,getViewport:()=>({x:0,y:0,zoom:1}),fitView:()=>!1,setCenter:yr,fitBounds:yr,project:e=>e,screenToFlowPosition:e=>e,flowToScreenPosition:e=>e,viewportInitialized:!1},KS=e=>({d3Zoom:e.d3Zoom,d3Selection:e.d3Selection}),YS=()=>{const e=_e(),{d3Zoom:t,d3Selection:n}=pe(KS,Pe);return S.useMemo(()=>n&&t?{zoomIn:o=>t.scaleBy(Un(n,o==null?void 0:o.duration),1.2),zoomOut:o=>t.scaleBy(Un(n,o==null?void 0:o.duration),1/1.2),zoomTo:(o,s)=>t.scaleTo(Un(n,s==null?void 0:s.duration),o),getZoom:()=>e.getState().transform[2],setViewport:(o,s)=>{const[i,l,a]=e.getState().transform,u=Zt.translate(o.x??i,o.y??l).scale(o.zoom??a);t.transform(Un(n,s==null?void 0:s.duration),u)},getViewport:()=>{const[o,s,i]=e.getState().transform;return{x:o,y:s,zoom:i}},fitView:o=>f0(e.getState,o),setCenter:(o,s,i)=>{const{width:l,height:a,maxZoom:u}=e.getState(),c=typeof(i==null?void 0:i.zoom)<"u"?i.zoom:u,d=l/2-o*c,f=a/2-s*c,h=Zt.translate(d,f).scale(c);t.transform(Un(n,i==null?void 0:i.duration),h)},fitBounds:(o,s)=>{const{width:i,height:l,minZoom:a,maxZoom:u}=e.getState(),{x:c,y:d,zoom:f}=qm(o,i,l,a,u,(s==null?void 0:s.padding)??.1),h=Zt.translate(c,d).scale(f);t.transform(Un(n,s==null?void 0:s.duration),h)},project:o=>{const{transform:s,snapToGrid:i,snapGrid:l}=e.getState();return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"),zu(o,s,i,l)},screenToFlowPosition:o=>{const{transform:s,snapToGrid:i,snapGrid:l,domNode:a}=e.getState();if(!a)return o;const{x:u,y:c}=a.getBoundingClientRect(),d={x:o.x-u,y:o.y-c};return zu(d,s,i,l)},flowToScreenPosition:o=>{const{transform:s,domNode:i}=e.getState();if(!i)return o;const{x:l,y:a}=i.getBoundingClientRect(),u=Ym(o,s);return{x:u.x+l,y:u.y+a}},viewportInitialized:!0}:GS,[t,n])};function Nl(){const e=YS(),t=_e(),n=S.useCallback(()=>t.getState().getNodes().map(v=>({...v})),[]),r=S.useCallback(v=>t.getState().nodeInternals.get(v),[]),o=S.useCallback(()=>{const{edges:v=[]}=t.getState();return v.map(b=>({...b}))},[]),s=S.useCallback(v=>{const{edges:b=[]}=t.getState();return b.find(p=>p.id===v)},[]),i=S.useCallback(v=>{const{getNodes:b,setNodes:p,hasDefaultNodes:g,onNodesChange:y}=t.getState(),x=b(),I=typeof v=="function"?v(x):v;if(g)p(I);else if(y){const z=I.length===0?x.map(_=>({type:"remove",id:_.id})):I.map(_=>({item:_,type:"reset"}));y(z)}},[]),l=S.useCallback(v=>{const{edges:b=[],setEdges:p,hasDefaultEdges:g,onEdgesChange:y}=t.getState(),x=typeof v=="function"?v(b):v;if(g)p(x);else if(y){const I=x.length===0?b.map(z=>({type:"remove",id:z.id})):x.map(z=>({item:z,type:"reset"}));y(I)}},[]),a=S.useCallback(v=>{const b=Array.isArray(v)?v:[v],{getNodes:p,setNodes:g,hasDefaultNodes:y,onNodesChange:x}=t.getState();if(y){const z=[...p(),...b];g(z)}else if(x){const I=b.map(z=>({item:z,type:"add"}));x(I)}},[]),u=S.useCallback(v=>{const b=Array.isArray(v)?v:[v],{edges:p=[],setEdges:g,hasDefaultEdges:y,onEdgesChange:x}=t.getState();if(y)g([...p,...b]);else if(x){const I=b.map(z=>({item:z,type:"add"}));x(I)}},[]),c=S.useCallback(()=>{const{getNodes:v,edges:b=[],transform:p}=t.getState(),[g,y,x]=p;return{nodes:v().map(I=>({...I})),edges:b.map(I=>({...I})),viewport:{x:g,y,zoom:x}}},[]),d=S.useCallback(({nodes:v,edges:b})=>{const{nodeInternals:p,getNodes:g,edges:y,hasDefaultNodes:x,hasDefaultEdges:I,onNodesDelete:z,onEdgesDelete:_,onNodesChange:M,onEdgesChange:j}=t.getState(),A=(v||[]).map(P=>P.id),R=(b||[]).map(P=>P.id),U=g().reduce((P,N)=>{const H=N.parentNode||N.parentId,F=!A.includes(N.id)&&H&&P.find(T=>T.id===H);return(typeof N.deletable=="boolean"?N.deletable:!0)&&(A.includes(N.id)||F)&&P.push(N),P},[]),W=y.filter(P=>typeof P.deletable=="boolean"?P.deletable:!0),w=W.filter(P=>R.includes(P.id));if(U||w){const P=Xm(U,W),N=[...w,...P],H=N.reduce((F,E)=>(F.includes(E.id)||F.push(E.id),F),[]);if((I||x)&&(I&&t.setState({edges:y.filter(F=>!H.includes(F.id))}),x&&(U.forEach(F=>{p.delete(F.id)}),t.setState({nodeInternals:new Map(p)}))),H.length>0&&(_==null||_(N),j&&j(H.map(F=>({id:F,type:"remove"})))),U.length>0&&(z==null||z(U),M)){const F=U.map(E=>({id:E.id,type:"remove"}));M(F)}}},[]),f=S.useCallback(v=>{const b=hS(v),p=b?null:t.getState().nodeInternals.get(v.id);return!b&&!p?[null,null,b]:[b?v:Yf(p),p,b]},[]),h=S.useCallback((v,b=!0,p)=>{const[g,y,x]=f(v);return g?(p||t.getState().getNodes()).filter(I=>{if(!x&&(I.id===y.id||!I.positionAbsolute))return!1;const z=Yf(I),_=ju(z,g);return b&&_>0||_>=g.width*g.height}):[]},[]),m=S.useCallback((v,b,p=!0)=>{const[g]=f(v);if(!g)return!1;const y=ju(g,b);return p&&y>0||y>=g.width*g.height},[]);return S.useMemo(()=>({...e,getNodes:n,getNode:r,getEdges:o,getEdge:s,setNodes:i,setEdges:l,addNodes:a,addEdges:u,toObject:c,deleteElements:d,getIntersectingNodes:h,isNodeIntersecting:m}),[e,n,r,o,s,i,l,a,u,c,d,h,m])}const QS={actInsideInputWithModifier:!1};var XS=({deleteKeyCode:e,multiSelectionKeyCode:t})=>{const n=_e(),{deleteElements:r}=Nl(),o=ms(e,QS),s=ms(t);S.useEffect(()=>{if(o){const{edges:i,getNodes:l}=n.getState(),a=l().filter(c=>c.selected),u=i.filter(c=>c.selected);r({nodes:a,edges:u}),n.setState({nodesSelectionActive:!1})}},[o]),S.useEffect(()=>{n.setState({multiSelectionActive:s})},[s])};function qS(e){const t=_e();S.useEffect(()=>{let n;const r=()=>{var s,i;if(!e.current)return;const o=Oc(e.current);(o.height===0||o.width===0)&&((i=(s=t.getState()).onError)==null||i.call(s,"004",on.error004())),t.setState({width:o.width||500,height:o.height||500})};return r(),window.addEventListener("resize",r),e.current&&(n=new ResizeObserver(()=>r()),n.observe(e.current)),()=>{window.removeEventListener("resize",r),n&&e.current&&n.unobserve(e.current)}},[])}const Kc={position:"absolute",width:"100%",height:"100%",top:0,left:0},ZS=(e,t)=>e.x!==t.x||e.y!==t.y||e.zoom!==t.k,Js=e=>({x:e.x,y:e.y,zoom:e.k}),vr=(e,t)=>e.target.closest(`.${t}`),op=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),sp=e=>{const t=e.ctrlKey&&Xi()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t},JS=e=>({d3Zoom:e.d3Zoom,d3Selection:e.d3Selection,d3ZoomHandler:e.d3ZoomHandler,userSelectionActive:e.userSelectionActive}),eE=({onMove:e,onMoveStart:t,onMoveEnd:n,onPaneContextMenu:r,zoomOnScroll:o=!0,zoomOnPinch:s=!0,panOnScroll:i=!1,panOnScrollSpeed:l=.5,panOnScrollMode:a=Qn.Free,zoomOnDoubleClick:u=!0,elementsSelectable:c,panOnDrag:d=!0,defaultViewport:f,translateExtent:h,minZoom:m,maxZoom:v,zoomActivationKeyCode:b,preventScrolling:p=!0,children:g,noWheelClassName:y,noPanClassName:x})=>{const I=S.useRef(),z=_e(),_=S.useRef(!1),M=S.useRef(!1),j=S.useRef(null),A=S.useRef({x:0,y:0,zoom:0}),{d3Zoom:R,d3Selection:U,d3ZoomHandler:W,userSelectionActive:w}=pe(JS,Pe),P=ms(b),N=S.useRef(0),H=S.useRef(!1),F=S.useRef();return qS(j),S.useEffect(()=>{if(j.current){const E=j.current.getBoundingClientRect(),T=Rm().scaleExtent([m,v]).translateExtent(h),O=dt(j.current).call(T),B=Zt.translate(f.x,f.y).scale(no(f.zoom,m,v)),L=[[0,0],[E.width,E.height]],V=T.constrain()(B,L,h);T.transform(O,V),T.wheelDelta(sp),z.setState({d3Zoom:T,d3Selection:O,d3ZoomHandler:O.on("wheel.zoom"),transform:[V.x,V.y,V.k],domNode:j.current.closest(".react-flow")})}},[]),S.useEffect(()=>{U&&R&&(i&&!P&&!w?U.on("wheel.zoom",E=>{if(vr(E,y))return!1;E.preventDefault(),E.stopImmediatePropagation();const T=U.property("__zoom").k||1;if(E.ctrlKey&&s){const Z=kt(E),ne=sp(E),C=T*Math.pow(2,ne);R.scaleTo(U,C,Z,E);return}const O=E.deltaMode===1?20:1;let B=a===Qn.Vertical?0:E.deltaX*O,L=a===Qn.Horizontal?0:E.deltaY*O;!Xi()&&E.shiftKey&&a!==Qn.Vertical&&(B=E.deltaY*O,L=0),R.translateBy(U,-(B/T)*l,-(L/T)*l,{internal:!0});const V=Js(U.property("__zoom")),{onViewportChangeStart:$,onViewportChange:K,onViewportChangeEnd:G}=z.getState();clearTimeout(F.current),H.current||(H.current=!0,t==null||t(E,V),$==null||$(V)),H.current&&(e==null||e(E,V),K==null||K(V),F.current=setTimeout(()=>{n==null||n(E,V),G==null||G(V),H.current=!1},150))},{passive:!1}):typeof W<"u"&&U.on("wheel.zoom",function(E,T){if(!p&&E.type==="wheel"&&!E.ctrlKey||vr(E,y))return null;E.preventDefault(),W.call(this,E,T)},{passive:!1}))},[w,i,a,U,R,W,P,s,p,y,t,e,n]),S.useEffect(()=>{R&&R.on("start",E=>{var B,L;if(!E.sourceEvent||E.sourceEvent.internal)return null;N.current=(B=E.sourceEvent)==null?void 0:B.button;const{onViewportChangeStart:T}=z.getState(),O=Js(E.transform);_.current=!0,A.current=O,((L=E.sourceEvent)==null?void 0:L.type)==="mousedown"&&z.setState({paneDragging:!0}),T==null||T(O),t==null||t(E.sourceEvent,O)})},[R,t]),S.useEffect(()=>{R&&(w&&!_.current?R.on("zoom",null):w||R.on("zoom",E=>{var O;const{onViewportChange:T}=z.getState();if(z.setState({transform:[E.transform.x,E.transform.y,E.transform.k]}),M.current=!!(r&&op(d,N.current??0)),(e||T)&&!((O=E.sourceEvent)!=null&&O.internal)){const B=Js(E.transform);T==null||T(B),e==null||e(E.sourceEvent,B)}}))},[w,R,e,d,r]),S.useEffect(()=>{R&&R.on("end",E=>{if(!E.sourceEvent||E.sourceEvent.internal)return null;const{onViewportChangeEnd:T}=z.getState();if(_.current=!1,z.setState({paneDragging:!1}),r&&op(d,N.current??0)&&!M.current&&r(E.sourceEvent),M.current=!1,(n||T)&&ZS(A.current,E.transform)){const O=Js(E.transform);A.current=O,clearTimeout(I.current),I.current=setTimeout(()=>{T==null||T(O),n==null||n(E.sourceEvent,O)},i?150:0)}})},[R,i,d,n,r]),S.useEffect(()=>{R&&R.filter(E=>{const T=P||o,O=s&&E.ctrlKey;if((d===!0||Array.isArray(d)&&d.includes(1))&&E.button===1&&E.type==="mousedown"&&(vr(E,"react-flow__node")||vr(E,"react-flow__edge")))return!0;if(!d&&!T&&!i&&!u&&!s||w||!u&&E.type==="dblclick"||vr(E,y)&&E.type==="wheel"||vr(E,x)&&(E.type!=="wheel"||i&&E.type==="wheel"&&!P)||!s&&E.ctrlKey&&E.type==="wheel"||!T&&!i&&!O&&E.type==="wheel"||!d&&(E.type==="mousedown"||E.type==="touchstart")||Array.isArray(d)&&!d.includes(E.button)&&E.type==="mousedown")return!1;const B=Array.isArray(d)&&d.includes(E.button)||!E.button||E.button<=1;return(!E.ctrlKey||E.type==="wheel")&&B})},[w,R,o,s,i,u,d,c,P]),D.createElement("div",{className:"react-flow__renderer",ref:j,style:Kc},g)},tE=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function nE(){const{userSelectionActive:e,userSelectionRect:t}=pe(tE,Pe);return e&&t?D.createElement("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}function ip(e,t){const n=t.parentNode||t.parentId,r=e.find(o=>o.id===n);if(r){const o=t.position.x+t.width-r.width,s=t.position.y+t.height-r.height;if(o>0||s>0||t.position.x<0||t.position.y<0){if(r.style={...r.style},r.style.width=r.style.width??r.width,r.style.height=r.style.height??r.height,o>0&&(r.style.width+=o),s>0&&(r.style.height+=s),t.position.x<0){const i=Math.abs(t.position.x);r.position.x=r.position.x-i,r.style.width+=i,t.position.x=0}if(t.position.y<0){const i=Math.abs(t.position.y);r.position.y=r.position.y-i,r.style.height+=i,t.position.y=0}r.width=r.style.width,r.height=r.style.height}}}function rE(e,t){if(e.some(r=>r.type==="reset"))return e.filter(r=>r.type==="reset").map(r=>r.item);const n=e.filter(r=>r.type==="add").map(r=>r.item);return t.reduce((r,o)=>{const s=e.filter(l=>l.id===o.id);if(s.length===0)return r.push(o),r;const i={...o};for(const l of s)if(l)switch(l.type){case"select":{i.selected=l.selected;break}case"position":{typeof l.position<"u"&&(i.position=l.position),typeof l.positionAbsolute<"u"&&(i.positionAbsolute=l.positionAbsolute),typeof l.dragging<"u"&&(i.dragging=l.dragging),i.expandParent&&ip(r,i);break}case"dimensions":{typeof l.dimensions<"u"&&(i.width=l.dimensions.width,i.height=l.dimensions.height),typeof l.updateStyle<"u"&&(i.style={...i.style||{},...l.dimensions}),typeof l.resizing=="boolean"&&(i.resizing=l.resizing),i.expandParent&&ip(r,i);break}case"remove":return r}return r.push(i),r},n)}function oE(e,t){return rE(e,t)}const pn=(e,t)=>({id:e,type:"select",selected:t});function Ar(e,t){return e.reduce((n,r)=>{const o=t.includes(r.id);return!r.selected&&o?(r.selected=!0,n.push(pn(r.id,!0))):r.selected&&!o&&(r.selected=!1,n.push(pn(r.id,!1))),n},[])}const ga=(e,t)=>n=>{n.target===t.current&&(e==null||e(n))},sE=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging}),p0=S.memo(({isSelecting:e,selectionMode:t=hs.Full,panOnDrag:n,onSelectionStart:r,onSelectionEnd:o,onPaneClick:s,onPaneContextMenu:i,onPaneScroll:l,onPaneMouseEnter:a,onPaneMouseMove:u,onPaneMouseLeave:c,children:d})=>{const f=S.useRef(null),h=_e(),m=S.useRef(0),v=S.useRef(0),b=S.useRef(),{userSelectionActive:p,elementsSelectable:g,dragging:y}=pe(sE,Pe),x=()=>{h.setState({userSelectionActive:!1,userSelectionRect:null}),m.current=0,v.current=0},I=W=>{s==null||s(W),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},z=W=>{if(Array.isArray(n)&&(n!=null&&n.includes(2))){W.preventDefault();return}i==null||i(W)},_=l?W=>l(W):void 0,M=W=>{const{resetSelectedElements:w,domNode:P}=h.getState();if(b.current=P==null?void 0:P.getBoundingClientRect(),!g||!e||W.button!==0||W.target!==f.current||!b.current)return;const{x:N,y:H}=In(W,b.current);w(),h.setState({userSelectionRect:{width:0,height:0,startX:N,startY:H,x:N,y:H}}),r==null||r(W)},j=W=>{const{userSelectionRect:w,nodeInternals:P,edges:N,transform:H,onNodesChange:F,onEdgesChange:E,nodeOrigin:T,getNodes:O}=h.getState();if(!e||!b.current||!w)return;h.setState({userSelectionActive:!0,nodesSelectionActive:!1});const B=In(W,b.current),L=w.startX??0,V=w.startY??0,$={...w,x:B.x<L?B.x:L,y:B.y<V?B.y:V,width:Math.abs(B.x-L),height:Math.abs(B.y-V)},K=O(),G=Qm(P,$,H,t===hs.Partial,!0,T),Z=Xm(G,N).map(C=>C.id),ne=G.map(C=>C.id);if(m.current!==ne.length){m.current=ne.length;const C=Ar(K,ne);C.length&&(F==null||F(C))}if(v.current!==Z.length){v.current=Z.length;const C=Ar(N,Z);C.length&&(E==null||E(C))}h.setState({userSelectionRect:$})},A=W=>{if(W.button!==0)return;const{userSelectionRect:w}=h.getState();!p&&w&&W.target===f.current&&(I==null||I(W)),h.setState({nodesSelectionActive:m.current>0}),x(),o==null||o(W)},R=W=>{p&&(h.setState({nodesSelectionActive:m.current>0}),o==null||o(W)),x()},U=g&&(e||p);return D.createElement("div",{className:De(["react-flow__pane",{dragging:y,selection:e}]),onClick:U?void 0:ga(I,f),onContextMenu:ga(z,f),onWheel:ga(_,f),onMouseEnter:U?void 0:a,onMouseDown:U?M:void 0,onMouseMove:U?j:u,onMouseUp:U?A:void 0,onMouseLeave:U?R:c,ref:f,style:Kc},d,D.createElement(nE,null))});p0.displayName="Pane";function h0(e,t){const n=e.parentNode||e.parentId;if(!n)return!1;const r=t.get(n);return r?r.selected?!0:h0(r,t):!1}function lp(e,t,n){let r=e;do{if(r!=null&&r.matches(t))return!0;if(r===n.current)return!1;r=r.parentElement}while(r);return!1}function iE(e,t,n,r){return Array.from(e.values()).filter(o=>(o.selected||o.id===r)&&(!o.parentNode||o.parentId||!h0(o,e))&&(o.draggable||t&&typeof o.draggable>"u")).map(o=>{var s,i;return{id:o.id,position:o.position||{x:0,y:0},positionAbsolute:o.positionAbsolute||{x:0,y:0},distance:{x:n.x-(((s=o.positionAbsolute)==null?void 0:s.x)??0),y:n.y-(((i=o.positionAbsolute)==null?void 0:i.y)??0)},delta:{x:0,y:0},extent:o.extent,parentNode:o.parentNode||o.parentId,parentId:o.parentNode||o.parentId,width:o.width,height:o.height,expandParent:o.expandParent}})}function lE(e,t){return!t||t==="parent"?t:[t[0],[t[1][0]-(e.width||0),t[1][1]-(e.height||0)]]}function g0(e,t,n,r,o=[0,0],s){const i=lE(e,e.extent||r);let l=i;const a=e.parentNode||e.parentId;if(e.extent==="parent"&&!e.expandParent)if(a&&e.width&&e.height){const d=n.get(a),{x:f,y:h}=er(d,o).positionAbsolute;l=d&&pt(f)&&pt(h)&&pt(d.width)&&pt(d.height)?[[f+e.width*o[0],h+e.height*o[1]],[f+d.width-e.width+e.width*o[0],h+d.height-e.height+e.height*o[1]]]:l}else s==null||s("005",on.error005()),l=i;else if(e.extent&&a&&e.extent!=="parent"){const d=n.get(a),{x:f,y:h}=er(d,o).positionAbsolute;l=[[e.extent[0][0]+f,e.extent[0][1]+h],[e.extent[1][0]+f,e.extent[1][1]+h]]}let u={x:0,y:0};if(a){const d=n.get(a);u=er(d,o).positionAbsolute}const c=l&&l!=="parent"?Hc(t,l):t;return{position:{x:c.x-u.x,y:c.y-u.y},positionAbsolute:c}}function ma({nodeId:e,dragItems:t,nodeInternals:n}){const r=t.map(o=>({...n.get(o.id),position:o.position,positionAbsolute:o.positionAbsolute}));return[e?r.find(o=>o.id===e):r[0],r]}const ap=(e,t,n,r)=>{const o=t.querySelectorAll(e);if(!o||!o.length)return null;const s=Array.from(o),i=t.getBoundingClientRect(),l={x:i.width*r[0],y:i.height*r[1]};return s.map(a=>{const u=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),position:a.getAttribute("data-handlepos"),x:(u.left-i.left-l.x)/n,y:(u.top-i.top-l.y)/n,...Oc(a)}})};function So(e,t,n){return n===void 0?n:r=>{const o=t().nodeInternals.get(e);o&&n(r,{...o})}}function Fu({id:e,store:t,unselect:n=!1,nodeRef:r}){const{addSelectedNodes:o,unselectNodesAndEdges:s,multiSelectionActive:i,nodeInternals:l,onError:a}=t.getState(),u=l.get(e);if(!u){a==null||a("012",on.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(n||u.selected&&i)&&(s({nodes:[u],edges:[]}),requestAnimationFrame(()=>{var c;return(c=r==null?void 0:r.current)==null?void 0:c.blur()})):o([e])}function aE(){const e=_e();return S.useCallback(({sourceEvent:n})=>{const{transform:r,snapGrid:o,snapToGrid:s}=e.getState(),i=n.touches?n.touches[0].clientX:n.clientX,l=n.touches?n.touches[0].clientY:n.clientY,a={x:(i-r[0])/r[2],y:(l-r[1])/r[2]};return{xSnapped:s?o[0]*Math.round(a.x/o[0]):a.x,ySnapped:s?o[1]*Math.round(a.y/o[1]):a.y,...a}},[])}function ya(e){return(t,n,r)=>e==null?void 0:e(t,r)}function m0({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:r,nodeId:o,isSelectable:s,selectNodesOnDrag:i}){const l=_e(),[a,u]=S.useState(!1),c=S.useRef([]),d=S.useRef({x:null,y:null}),f=S.useRef(0),h=S.useRef(null),m=S.useRef({x:0,y:0}),v=S.useRef(null),b=S.useRef(!1),p=S.useRef(!1),g=S.useRef(!1),y=aE();return S.useEffect(()=>{if(e!=null&&e.current){const x=dt(e.current),I=({x:M,y:j})=>{const{nodeInternals:A,onNodeDrag:R,onSelectionDrag:U,updateNodePositions:W,nodeExtent:w,snapGrid:P,snapToGrid:N,nodeOrigin:H,onError:F}=l.getState();d.current={x:M,y:j};let E=!1,T={x:0,y:0,x2:0,y2:0};if(c.current.length>1&&w){const B=jl(c.current,H);T=ps(B)}if(c.current=c.current.map(B=>{const L={x:M-B.distance.x,y:j-B.distance.y};N&&(L.x=P[0]*Math.round(L.x/P[0]),L.y=P[1]*Math.round(L.y/P[1]));const V=[[w[0][0],w[0][1]],[w[1][0],w[1][1]]];c.current.length>1&&w&&!B.extent&&(V[0][0]=B.positionAbsolute.x-T.x+w[0][0],V[1][0]=B.positionAbsolute.x+(B.width??0)-T.x2+w[1][0],V[0][1]=B.positionAbsolute.y-T.y+w[0][1],V[1][1]=B.positionAbsolute.y+(B.height??0)-T.y2+w[1][1]);const $=g0(B,L,A,V,H,F);return E=E||B.position.x!==$.position.x||B.position.y!==$.position.y,B.position=$.position,B.positionAbsolute=$.positionAbsolute,B}),!E)return;W(c.current,!0,!0),u(!0);const O=o?R:ya(U);if(O&&v.current){const[B,L]=ma({nodeId:o,dragItems:c.current,nodeInternals:A});O(v.current,B,L)}},z=()=>{if(!h.current)return;const[M,j]=Lm(m.current,h.current);if(M!==0||j!==0){const{transform:A,panBy:R}=l.getState();d.current.x=(d.current.x??0)-M/A[2],d.current.y=(d.current.y??0)-j/A[2],R({x:M,y:j})&&I(d.current)}f.current=requestAnimationFrame(z)},_=M=>{var H;const{nodeInternals:j,multiSelectionActive:A,nodesDraggable:R,unselectNodesAndEdges:U,onNodeDragStart:W,onSelectionDragStart:w}=l.getState();p.current=!0;const P=o?W:ya(w);(!i||!s)&&!A&&o&&((H=j.get(o))!=null&&H.selected||U()),o&&s&&i&&Fu({id:o,store:l,nodeRef:e});const N=y(M);if(d.current=N,c.current=iE(j,R,N,o),P&&c.current){const[F,E]=ma({nodeId:o,dragItems:c.current,nodeInternals:j});P(M.sourceEvent,F,E)}};if(t)x.on(".drag",null);else{const M=vb().on("start",j=>{const{domNode:A,nodeDragThreshold:R}=l.getState();R===0&&_(j),g.current=!1;const U=y(j);d.current=U,h.current=(A==null?void 0:A.getBoundingClientRect())||null,m.current=In(j.sourceEvent,h.current)}).on("drag",j=>{var W,w;const A=y(j),{autoPanOnNodeDrag:R,nodeDragThreshold:U}=l.getState();if(j.sourceEvent.type==="touchmove"&&j.sourceEvent.touches.length>1&&(g.current=!0),!g.current){if(!b.current&&p.current&&R&&(b.current=!0,z()),!p.current){const P=A.xSnapped-(((W=d==null?void 0:d.current)==null?void 0:W.x)??0),N=A.ySnapped-(((w=d==null?void 0:d.current)==null?void 0:w.y)??0);Math.sqrt(P*P+N*N)>U&&_(j)}(d.current.x!==A.xSnapped||d.current.y!==A.ySnapped)&&c.current&&p.current&&(v.current=j.sourceEvent,m.current=In(j.sourceEvent,h.current),I(A))}}).on("end",j=>{if(!(!p.current||g.current)&&(u(!1),b.current=!1,p.current=!1,cancelAnimationFrame(f.current),c.current)){const{updateNodePositions:A,nodeInternals:R,onNodeDragStop:U,onSelectionDragStop:W}=l.getState(),w=o?U:ya(W);if(A(c.current,!1,!1),w){const[P,N]=ma({nodeId:o,dragItems:c.current,nodeInternals:R});w(j.sourceEvent,P,N)}}}).filter(j=>{const A=j.target;return!j.button&&(!n||!lp(A,`.${n}`,e))&&(!r||lp(A,r,e))});return x.call(M),()=>{x.on(".drag",null)}}}},[e,t,n,r,s,l,o,i,y]),a}function y0(){const e=_e();return S.useCallback(n=>{const{nodeInternals:r,nodeExtent:o,updateNodePositions:s,getNodes:i,snapToGrid:l,snapGrid:a,onError:u,nodesDraggable:c}=e.getState(),d=i().filter(g=>g.selected&&(g.draggable||c&&typeof g.draggable>"u")),f=l?a[0]:5,h=l?a[1]:5,m=n.isShiftPressed?4:1,v=n.x*f*m,b=n.y*h*m,p=d.map(g=>{if(g.positionAbsolute){const y={x:g.positionAbsolute.x+v,y:g.positionAbsolute.y+b};l&&(y.x=a[0]*Math.round(y.x/a[0]),y.y=a[1]*Math.round(y.y/a[1]));const{positionAbsolute:x,position:I}=g0(g,y,r,o,void 0,u);g.position=I,g.positionAbsolute=x}return g});s(p,!0,!1)},[])}const $r={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};var Eo=e=>{const t=({id:n,type:r,data:o,xPos:s,yPos:i,xPosOrigin:l,yPosOrigin:a,selected:u,onClick:c,onMouseEnter:d,onMouseMove:f,onMouseLeave:h,onContextMenu:m,onDoubleClick:v,style:b,className:p,isDraggable:g,isSelectable:y,isConnectable:x,isFocusable:I,selectNodesOnDrag:z,sourcePosition:_,targetPosition:M,hidden:j,resizeObserver:A,dragHandle:R,zIndex:U,isParent:W,noDragClassName:w,noPanClassName:P,initialized:N,disableKeyboardA11y:H,ariaLabel:F,rfId:E,hasHandleBounds:T})=>{const O=_e(),B=S.useRef(null),L=S.useRef(null),V=S.useRef(_),$=S.useRef(M),K=S.useRef(r),G=y||g||c||d||f||h,Z=y0(),ne=So(n,O.getState,d),C=So(n,O.getState,f),Q=So(n,O.getState,h),X=So(n,O.getState,m),q=So(n,O.getState,v),oe=ue=>{const{nodeDragThreshold:ee}=O.getState();if(y&&(!z||!g||ee>0)&&Fu({id:n,store:O,nodeRef:B}),c){const ze=O.getState().nodeInternals.get(n);ze&&c(ue,{...ze})}},ce=ue=>{if(!Nu(ue)&&!H)if(Vm.includes(ue.key)&&y){const ee=ue.key==="Escape";Fu({id:n,store:O,unselect:ee,nodeRef:B})}else g&&u&&Object.prototype.hasOwnProperty.call($r,ue.key)&&(O.setState({ariaLiveMessage:`Moved selected node ${ue.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~s}, y: ${~~i}`}),Z({x:$r[ue.key].x,y:$r[ue.key].y,isShiftPressed:ue.shiftKey}))};S.useEffect(()=>()=>{L.current&&(A==null||A.unobserve(L.current),L.current=null)},[]),S.useEffect(()=>{if(B.current&&!j){const ue=B.current;(!N||!T||L.current!==ue)&&(L.current&&(A==null||A.unobserve(L.current)),A==null||A.observe(ue),L.current=ue)}},[j,N,T]),S.useEffect(()=>{const ue=K.current!==r,ee=V.current!==_,ze=$.current!==M;B.current&&(ue||ee||ze)&&(ue&&(K.current=r),ee&&(V.current=_),ze&&($.current=M),O.getState().updateNodeDimensions([{id:n,nodeElement:B.current,forceUpdate:!0}]))},[n,r,_,M]);const Ie=m0({nodeRef:B,disabled:j||!g,noDragClassName:w,handleSelector:R,nodeId:n,isSelectable:y,selectNodesOnDrag:z});return j?null:D.createElement("div",{className:De(["react-flow__node",`react-flow__node-${r}`,{[P]:g},p,{selected:u,selectable:y,parent:W,dragging:Ie}]),ref:B,style:{zIndex:U,transform:`translate(${l}px,${a}px)`,pointerEvents:G?"all":"none",visibility:N?"visible":"hidden",...b},"data-id":n,"data-testid":`rf__node-${n}`,onMouseEnter:ne,onMouseMove:C,onMouseLeave:Q,onContextMenu:X,onClick:oe,onDoubleClick:q,onKeyDown:I?ce:void 0,tabIndex:I?0:void 0,role:I?"button":void 0,"aria-describedby":H?void 0:`${a0}-${E}`,"aria-label":F},D.createElement(bS,{value:n},D.createElement(e,{id:n,data:o,type:r,xPos:s,yPos:i,selected:u,isConnectable:x,sourcePosition:_,targetPosition:M,dragging:Ie,dragHandle:R,zIndex:U})))};return t.displayName="NodeWrapper",S.memo(t)};const uE=e=>{const t=e.getNodes().filter(n=>n.selected);return{...jl(t,e.nodeOrigin),transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,userSelectionActive:e.userSelectionActive}};function cE({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){const r=_e(),{width:o,height:s,x:i,y:l,transformString:a,userSelectionActive:u}=pe(uE,Pe),c=y0(),d=S.useRef(null);if(S.useEffect(()=>{var m;n||(m=d.current)==null||m.focus({preventScroll:!0})},[n]),m0({nodeRef:d}),u||!o||!s)return null;const f=e?m=>{const v=r.getState().getNodes().filter(b=>b.selected);e(m,v)}:void 0,h=m=>{Object.prototype.hasOwnProperty.call($r,m.key)&&c({x:$r[m.key].x,y:$r[m.key].y,isShiftPressed:m.shiftKey})};return D.createElement("div",{className:De(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a}},D.createElement("div",{ref:d,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:n?void 0:-1,onKeyDown:n?void 0:h,style:{width:o,height:s,top:l,left:i}}))}var dE=S.memo(cE);const fE=e=>e.nodesSelectionActive,v0=({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:o,onPaneContextMenu:s,onPaneScroll:i,deleteKeyCode:l,onMove:a,onMoveStart:u,onMoveEnd:c,selectionKeyCode:d,selectionOnDrag:f,selectionMode:h,onSelectionStart:m,onSelectionEnd:v,multiSelectionKeyCode:b,panActivationKeyCode:p,zoomActivationKeyCode:g,elementsSelectable:y,zoomOnScroll:x,zoomOnPinch:I,panOnScroll:z,panOnScrollSpeed:_,panOnScrollMode:M,zoomOnDoubleClick:j,panOnDrag:A,defaultViewport:R,translateExtent:U,minZoom:W,maxZoom:w,preventScrolling:P,onSelectionContextMenu:N,noWheelClassName:H,noPanClassName:F,disableKeyboardA11y:E})=>{const T=pe(fE),O=ms(d),B=ms(p),L=B||A,V=B||z,$=O||f&&L!==!0;return XS({deleteKeyCode:l,multiSelectionKeyCode:b}),D.createElement(eE,{onMove:a,onMoveStart:u,onMoveEnd:c,onPaneContextMenu:s,elementsSelectable:y,zoomOnScroll:x,zoomOnPinch:I,panOnScroll:V,panOnScrollSpeed:_,panOnScrollMode:M,zoomOnDoubleClick:j,panOnDrag:!O&&L,defaultViewport:R,translateExtent:U,minZoom:W,maxZoom:w,zoomActivationKeyCode:g,preventScrolling:P,noWheelClassName:H,noPanClassName:F},D.createElement(p0,{onSelectionStart:m,onSelectionEnd:v,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:o,onPaneContextMenu:s,onPaneScroll:i,panOnDrag:L,isSelecting:!!$,selectionMode:h},e,T&&D.createElement(dE,{onSelectionContextMenu:N,noPanClassName:F,disableKeyboardA11y:E})))};v0.displayName="FlowRenderer";var pE=S.memo(v0);function hE(e){return pe(S.useCallback(n=>e?Qm(n.nodeInternals,{x:0,y:0,width:n.width,height:n.height},n.transform,!0):n.getNodes(),[e]))}function gE(e){const t={input:Eo(e.input||o0),default:Eo(e.default||Cu),output:Eo(e.output||i0),group:Eo(e.group||Gc)},n={},r=Object.keys(e).filter(o=>!["input","default","output","group"].includes(o)).reduce((o,s)=>(o[s]=Eo(e[s]||Cu),o),n);return{...t,...r}}const mE=({x:e,y:t,width:n,height:r,origin:o})=>!n||!r?{x:e,y:t}:o[0]<0||o[1]<0||o[0]>1||o[1]>1?{x:e,y:t}:{x:e-n*o[0],y:t-r*o[1]},yE=e=>({nodesDraggable:e.nodesDraggable,nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,updateNodeDimensions:e.updateNodeDimensions,onError:e.onError}),x0=e=>{const{nodesDraggable:t,nodesConnectable:n,nodesFocusable:r,elementsSelectable:o,updateNodeDimensions:s,onError:i}=pe(yE,Pe),l=hE(e.onlyRenderVisibleElements),a=S.useRef(),u=S.useMemo(()=>{if(typeof ResizeObserver>"u")return null;const c=new ResizeObserver(d=>{const f=d.map(h=>({id:h.target.getAttribute("data-id"),nodeElement:h.target,forceUpdate:!0}));s(f)});return a.current=c,c},[]);return S.useEffect(()=>()=>{var c;(c=a==null?void 0:a.current)==null||c.disconnect()},[]),D.createElement("div",{className:"react-flow__nodes",style:Kc},l.map(c=>{var I,z,_;let d=c.type||"default";e.nodeTypes[d]||(i==null||i("003",on.error003(d)),d="default");const f=e.nodeTypes[d]||e.nodeTypes.default,h=!!(c.draggable||t&&typeof c.draggable>"u"),m=!!(c.selectable||o&&typeof c.selectable>"u"),v=!!(c.connectable||n&&typeof c.connectable>"u"),b=!!(c.focusable||r&&typeof c.focusable>"u"),p=e.nodeExtent?Hc(c.positionAbsolute,e.nodeExtent):c.positionAbsolute,g=(p==null?void 0:p.x)??0,y=(p==null?void 0:p.y)??0,x=mE({x:g,y,width:c.width??0,height:c.height??0,origin:e.nodeOrigin});return D.createElement(f,{key:c.id,id:c.id,className:c.className,style:c.style,type:d,data:c.data,sourcePosition:c.sourcePosition||re.Bottom,targetPosition:c.targetPosition||re.Top,hidden:c.hidden,xPos:g,yPos:y,xPosOrigin:x.x,yPosOrigin:x.y,selectNodesOnDrag:e.selectNodesOnDrag,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,selected:!!c.selected,isDraggable:h,isSelectable:m,isConnectable:v,isFocusable:b,resizeObserver:u,dragHandle:c.dragHandle,zIndex:((I=c[Se])==null?void 0:I.z)??0,isParent:!!((z=c[Se])!=null&&z.isParent),noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,initialized:!!c.width&&!!c.height,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,ariaLabel:c.ariaLabel,hasHandleBounds:!!((_=c[Se])!=null&&_.handleBounds)})}))};x0.displayName="NodeRenderer";var vE=S.memo(x0);const xE=(e,t,n)=>n===re.Left?e-t:n===re.Right?e+t:e,wE=(e,t,n)=>n===re.Top?e-t:n===re.Bottom?e+t:e,up="react-flow__edgeupdater",cp=({position:e,centerX:t,centerY:n,radius:r=10,onMouseDown:o,onMouseEnter:s,onMouseOut:i,type:l})=>D.createElement("circle",{onMouseDown:o,onMouseEnter:s,onMouseOut:i,className:De([up,`${up}-${l}`]),cx:xE(t,r,e),cy:wE(n,r,e),r,stroke:"transparent",fill:"transparent"}),bE=()=>!0;var xr=e=>{const t=({id:n,className:r,type:o,data:s,onClick:i,onEdgeDoubleClick:l,selected:a,animated:u,label:c,labelStyle:d,labelShowBg:f,labelBgStyle:h,labelBgPadding:m,labelBgBorderRadius:v,style:b,source:p,target:g,sourceX:y,sourceY:x,targetX:I,targetY:z,sourcePosition:_,targetPosition:M,elementsSelectable:j,hidden:A,sourceHandleId:R,targetHandleId:U,onContextMenu:W,onMouseEnter:w,onMouseMove:P,onMouseLeave:N,reconnectRadius:H,onReconnect:F,onReconnectStart:E,onReconnectEnd:T,markerEnd:O,markerStart:B,rfId:L,ariaLabel:V,isFocusable:$,isReconnectable:K,pathOptions:G,interactionWidth:Z,disableKeyboardA11y:ne})=>{const C=S.useRef(null),[Q,X]=S.useState(!1),[q,oe]=S.useState(!1),ce=_e(),Ie=S.useMemo(()=>`url('#${Iu(B,L)}')`,[B,L]),ue=S.useMemo(()=>`url('#${Iu(O,L)}')`,[O,L]);if(A)return null;const ee=Le=>{var Pt;const{edges:wt,addSelectedEdges:Rn,unselectNodesAndEdges:Dn,multiSelectionActive:Ln}=ce.getState(),Ut=wt.find(ao=>ao.id===n);Ut&&(j&&(ce.setState({nodesSelectionActive:!1}),Ut.selected&&Ln?(Dn({nodes:[],edges:[Ut]}),(Pt=C.current)==null||Pt.blur()):Rn([n])),i&&i(Le,Ut))},ze=bo(n,ce.getState,l),vt=bo(n,ce.getState,W),xt=bo(n,ce.getState,w),Bt=bo(n,ce.getState,P),ln=bo(n,ce.getState,N),Vt=(Le,wt)=>{if(Le.button!==0)return;const{edges:Rn,isValidConnection:Dn}=ce.getState(),Ln=wt?g:p,Ut=(wt?U:R)||null,Pt=wt?"target":"source",ao=Dn||bE,_l=wt,uo=Rn.find(On=>On.id===n);oe(!0),E==null||E(Le,uo,Pt);const Il=On=>{oe(!1),T==null||T(On,uo,Pt)};e0({event:Le,handleId:Ut,nodeId:Ln,onConnect:On=>F==null?void 0:F(uo,On),isTarget:_l,getState:ce.getState,setState:ce.setState,isValidConnection:ao,edgeUpdaterType:Pt,onReconnectEnd:Il})},dr=Le=>Vt(Le,!0),Tn=Le=>Vt(Le,!1),An=()=>X(!0),fr=()=>X(!1),pr=!j&&!i,lo=Le=>{var wt;if(!ne&&Vm.includes(Le.key)&&j){const{unselectNodesAndEdges:Rn,addSelectedEdges:Dn,edges:Ln}=ce.getState();Le.key==="Escape"?((wt=C.current)==null||wt.blur(),Rn({edges:[Ln.find(Pt=>Pt.id===n)]})):Dn([n])}};return D.createElement("g",{className:De(["react-flow__edge",`react-flow__edge-${o}`,r,{selected:a,animated:u,inactive:pr,updating:Q}]),onClick:ee,onDoubleClick:ze,onContextMenu:vt,onMouseEnter:xt,onMouseMove:Bt,onMouseLeave:ln,onKeyDown:$?lo:void 0,tabIndex:$?0:void 0,role:$?"button":"img","data-testid":`rf__edge-${n}`,"aria-label":V===null?void 0:V||`Edge from ${p} to ${g}`,"aria-describedby":$?`${u0}-${L}`:void 0,ref:C},!q&&D.createElement(e,{id:n,source:p,target:g,selected:a,animated:u,label:c,labelStyle:d,labelShowBg:f,labelBgStyle:h,labelBgPadding:m,labelBgBorderRadius:v,data:s,style:b,sourceX:y,sourceY:x,targetX:I,targetY:z,sourcePosition:_,targetPosition:M,sourceHandleId:R,targetHandleId:U,markerStart:Ie,markerEnd:ue,pathOptions:G,interactionWidth:Z}),K&&D.createElement(D.Fragment,null,(K==="source"||K===!0)&&D.createElement(cp,{position:_,centerX:y,centerY:x,radius:H,onMouseDown:dr,onMouseEnter:An,onMouseOut:fr,type:"source"}),(K==="target"||K===!0)&&D.createElement(cp,{position:M,centerX:I,centerY:z,radius:H,onMouseDown:Tn,onMouseEnter:An,onMouseOut:fr,type:"target"})))};return t.displayName="EdgeWrapper",S.memo(t)};function SE(e){const t={default:xr(e.default||qi),straight:xr(e.bezier||Uc),step:xr(e.step||Vc),smoothstep:xr(e.step||kl),simplebezier:xr(e.simplebezier||Bc)},n={},r=Object.keys(e).filter(o=>!["default","bezier"].includes(o)).reduce((o,s)=>(o[s]=xr(e[s]||qi),o),n);return{...t,...r}}function dp(e,t,n=null){const r=((n==null?void 0:n.x)||0)+t.x,o=((n==null?void 0:n.y)||0)+t.y,s=(n==null?void 0:n.width)||t.width,i=(n==null?void 0:n.height)||t.height;switch(e){case re.Top:return{x:r+s/2,y:o};case re.Right:return{x:r+s,y:o+i/2};case re.Bottom:return{x:r+s/2,y:o+i};case re.Left:return{x:r,y:o+i/2}}}function fp(e,t){return e?e.length===1||!t?e[0]:t&&e.find(n=>n.id===t)||null:null}const EE=(e,t,n,r,o,s)=>{const i=dp(n,e,t),l=dp(s,r,o);return{sourceX:i.x,sourceY:i.y,targetX:l.x,targetY:l.y}};function kE({sourcePos:e,targetPos:t,sourceWidth:n,sourceHeight:r,targetWidth:o,targetHeight:s,width:i,height:l,transform:a}){const u={x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x+n,t.x+o),y2:Math.max(e.y+r,t.y+s)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=ps({x:(0-a[0])/a[2],y:(0-a[1])/a[2],width:i/a[2],height:l/a[2]}),d=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),f=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(d*f)>0}function pp(e){var r,o,s,i,l;const t=((r=e==null?void 0:e[Se])==null?void 0:r.handleBounds)||null,n=t&&(e==null?void 0:e.width)&&(e==null?void 0:e.height)&&typeof((o=e==null?void 0:e.positionAbsolute)==null?void 0:o.x)<"u"&&typeof((s=e==null?void 0:e.positionAbsolute)==null?void 0:s.y)<"u";return[{x:((i=e==null?void 0:e.positionAbsolute)==null?void 0:i.x)||0,y:((l=e==null?void 0:e.positionAbsolute)==null?void 0:l.y)||0,width:(e==null?void 0:e.width)||0,height:(e==null?void 0:e.height)||0},t,!!n]}const jE=[{level:0,isMaxLevel:!0,edges:[]}];function NE(e,t,n=!1){let r=-1;const o=e.reduce((i,l)=>{var c,d;const a=pt(l.zIndex);let u=a?l.zIndex:0;if(n){const f=t.get(l.target),h=t.get(l.source),m=l.selected||(f==null?void 0:f.selected)||(h==null?void 0:h.selected),v=Math.max(((c=h==null?void 0:h[Se])==null?void 0:c.z)||0,((d=f==null?void 0:f[Se])==null?void 0:d.z)||0,1e3);u=(a?l.zIndex:0)+(m?v:0)}return i[u]?i[u].push(l):i[u]=[l],r=u>r?u:r,i},{}),s=Object.entries(o).map(([i,l])=>{const a=+i;return{edges:l,level:a,isMaxLevel:a===r}});return s.length===0?jE:s}function _E(e,t,n){const r=pe(S.useCallback(o=>e?o.edges.filter(s=>{const i=t.get(s.source),l=t.get(s.target);return(i==null?void 0:i.width)&&(i==null?void 0:i.height)&&(l==null?void 0:l.width)&&(l==null?void 0:l.height)&&kE({sourcePos:i.positionAbsolute||{x:0,y:0},targetPos:l.positionAbsolute||{x:0,y:0},sourceWidth:i.width,sourceHeight:i.height,targetWidth:l.width,targetHeight:l.height,width:o.width,height:o.height,transform:o.transform})}):o.edges,[e,t]));return NE(r,t,n)}const IE=({color:e="none",strokeWidth:t=1})=>D.createElement("polyline",{style:{stroke:e,strokeWidth:t},strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"-5,-4 0,0 -5,4"}),zE=({color:e="none",strokeWidth:t=1})=>D.createElement("polyline",{style:{stroke:e,fill:e,strokeWidth:t},strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"}),hp={[gs.Arrow]:IE,[gs.ArrowClosed]:zE};function CE(e){const t=_e();return S.useMemo(()=>{var o,s;return Object.prototype.hasOwnProperty.call(hp,e)?hp[e]:((s=(o=t.getState()).onError)==null||s.call(o,"009",on.error009(e)),null)},[e])}const FE=({id:e,type:t,color:n,width:r=12.5,height:o=12.5,markerUnits:s="strokeWidth",strokeWidth:i,orient:l="auto-start-reverse"})=>{const a=CE(t);return a?D.createElement("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${r}`,markerHeight:`${o}`,viewBox:"-10 -10 20 20",markerUnits:s,orient:l,refX:"0",refY:"0"},D.createElement(a,{color:n,strokeWidth:i})):null},PE=({defaultColor:e,rfId:t})=>n=>{const r=[];return n.edges.reduce((o,s)=>([s.markerStart,s.markerEnd].forEach(i=>{if(i&&typeof i=="object"){const l=Iu(i,t);r.includes(l)||(o.push({id:l,color:i.color||e,...i}),r.push(l))}}),o),[]).sort((o,s)=>o.id.localeCompare(s.id))},w0=({defaultColor:e,rfId:t})=>{const n=pe(S.useCallback(PE({defaultColor:e,rfId:t}),[e,t]),(r,o)=>!(r.length!==o.length||r.some((s,i)=>s.id!==o[i].id)));return D.createElement("defs",null,n.map(r=>D.createElement(FE,{id:r.id,key:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient})))};w0.displayName="MarkerDefinitions";var ME=S.memo(w0);const TE=e=>({nodesConnectable:e.nodesConnectable,edgesFocusable:e.edgesFocusable,edgesUpdatable:e.edgesUpdatable,elementsSelectable:e.elementsSelectable,width:e.width,height:e.height,connectionMode:e.connectionMode,nodeInternals:e.nodeInternals,onError:e.onError}),b0=({defaultMarkerColor:e,onlyRenderVisibleElements:t,elevateEdgesOnSelect:n,rfId:r,edgeTypes:o,noPanClassName:s,onEdgeContextMenu:i,onEdgeMouseEnter:l,onEdgeMouseMove:a,onEdgeMouseLeave:u,onEdgeClick:c,onEdgeDoubleClick:d,onReconnect:f,onReconnectStart:h,onReconnectEnd:m,reconnectRadius:v,children:b,disableKeyboardA11y:p})=>{const{edgesFocusable:g,edgesUpdatable:y,elementsSelectable:x,width:I,height:z,connectionMode:_,nodeInternals:M,onError:j}=pe(TE,Pe),A=_E(t,M,n);return I?D.createElement(D.Fragment,null,A.map(({level:R,edges:U,isMaxLevel:W})=>D.createElement("svg",{key:R,style:{zIndex:R},width:I,height:z,className:"react-flow__edges react-flow__container"},W&&D.createElement(ME,{defaultColor:e,rfId:r}),D.createElement("g",null,U.map(w=>{const[P,N,H]=pp(M.get(w.source)),[F,E,T]=pp(M.get(w.target));if(!H||!T)return null;let O=w.type||"default";o[O]||(j==null||j("011",on.error011(O)),O="default");const B=o[O]||o.default,L=_===ar.Strict?E.target:(E.target??[]).concat(E.source??[]),V=fp(N.source,w.sourceHandle),$=fp(L,w.targetHandle),K=(V==null?void 0:V.position)||re.Bottom,G=($==null?void 0:$.position)||re.Top,Z=!!(w.focusable||g&&typeof w.focusable>"u"),ne=w.reconnectable||w.updatable,C=typeof f<"u"&&(ne||y&&typeof ne>"u");if(!V||!$)return j==null||j("008",on.error008(V,w)),null;const{sourceX:Q,sourceY:X,targetX:q,targetY:oe}=EE(P,V,K,F,$,G);return D.createElement(B,{key:w.id,id:w.id,className:De([w.className,s]),type:O,data:w.data,selected:!!w.selected,animated:!!w.animated,hidden:!!w.hidden,label:w.label,labelStyle:w.labelStyle,labelShowBg:w.labelShowBg,labelBgStyle:w.labelBgStyle,labelBgPadding:w.labelBgPadding,labelBgBorderRadius:w.labelBgBorderRadius,style:w.style,source:w.source,target:w.target,sourceHandleId:w.sourceHandle,targetHandleId:w.targetHandle,markerEnd:w.markerEnd,markerStart:w.markerStart,sourceX:Q,sourceY:X,targetX:q,targetY:oe,sourcePosition:K,targetPosition:G,elementsSelectable:x,onContextMenu:i,onMouseEnter:l,onMouseMove:a,onMouseLeave:u,onClick:c,onEdgeDoubleClick:d,onReconnect:f,onReconnectStart:h,onReconnectEnd:m,reconnectRadius:v,rfId:r,ariaLabel:w.ariaLabel,isFocusable:Z,isReconnectable:C,pathOptions:"pathOptions"in w?w.pathOptions:void 0,interactionWidth:w.interactionWidth,disableKeyboardA11y:p})})))),b):null};b0.displayName="EdgeRenderer";var AE=S.memo(b0);const RE=e=>`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;function DE({children:e}){const t=pe(RE);return D.createElement("div",{className:"react-flow__viewport react-flow__container",style:{transform:t}},e)}function LE(e){const t=Nl(),n=S.useRef(!1);S.useEffect(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}const OE={[re.Left]:re.Right,[re.Right]:re.Left,[re.Top]:re.Bottom,[re.Bottom]:re.Top},S0=({nodeId:e,handleType:t,style:n,type:r=yn.Bezier,CustomComponent:o,connectionStatus:s})=>{var z,_,M;const{fromNode:i,handleId:l,toX:a,toY:u,connectionMode:c}=pe(S.useCallback(j=>({fromNode:j.nodeInternals.get(e),handleId:j.connectionHandleId,toX:(j.connectionPosition.x-j.transform[0])/j.transform[2],toY:(j.connectionPosition.y-j.transform[1])/j.transform[2],connectionMode:j.connectionMode}),[e]),Pe),d=(z=i==null?void 0:i[Se])==null?void 0:z.handleBounds;let f=d==null?void 0:d[t];if(c===ar.Loose&&(f=f||(d==null?void 0:d[t==="source"?"target":"source"])),!i||!f)return null;const h=l?f.find(j=>j.id===l):f[0],m=h?h.x+h.width/2:(i.width??0)/2,v=h?h.y+h.height/2:i.height??0,b=(((_=i.positionAbsolute)==null?void 0:_.x)??0)+m,p=(((M=i.positionAbsolute)==null?void 0:M.y)??0)+v,g=h==null?void 0:h.position,y=g?OE[g]:null;if(!g||!y)return null;if(o)return D.createElement(o,{connectionLineType:r,connectionLineStyle:n,fromNode:i,fromHandle:h,fromX:b,fromY:p,toX:a,toY:u,fromPosition:g,toPosition:y,connectionStatus:s});let x="";const I={sourceX:b,sourceY:p,sourcePosition:g,targetX:a,targetY:u,targetPosition:y};return r===yn.Bezier?[x]=Km(I):r===yn.Step?[x]=_u({...I,borderRadius:0}):r===yn.SmoothStep?[x]=_u(I):r===yn.SimpleBezier?[x]=Gm(I):x=`M${b},${p} ${a},${u}`,D.createElement("path",{d:x,fill:"none",className:"react-flow__connection-path",style:n})};S0.displayName="ConnectionLine";const HE=e=>({nodeId:e.connectionNodeId,handleType:e.connectionHandleType,nodesConnectable:e.nodesConnectable,connectionStatus:e.connectionStatus,width:e.width,height:e.height});function BE({containerStyle:e,style:t,type:n,component:r}){const{nodeId:o,handleType:s,nodesConnectable:i,width:l,height:a,connectionStatus:u}=pe(HE,Pe);return!(o&&s&&l&&i)?null:D.createElement("svg",{style:e,width:l,height:a,className:"react-flow__edges react-flow__connectionline react-flow__container"},D.createElement("g",{className:De(["react-flow__connection",u])},D.createElement(S0,{nodeId:o,handleType:s,style:t,type:n,CustomComponent:r,connectionStatus:u})))}function gp(e,t){return S.useRef(null),_e(),S.useMemo(()=>t(e),[e])}const E0=({nodeTypes:e,edgeTypes:t,onMove:n,onMoveStart:r,onMoveEnd:o,onInit:s,onNodeClick:i,onEdgeClick:l,onNodeDoubleClick:a,onEdgeDoubleClick:u,onNodeMouseEnter:c,onNodeMouseMove:d,onNodeMouseLeave:f,onNodeContextMenu:h,onSelectionContextMenu:m,onSelectionStart:v,onSelectionEnd:b,connectionLineType:p,connectionLineStyle:g,connectionLineComponent:y,connectionLineContainerStyle:x,selectionKeyCode:I,selectionOnDrag:z,selectionMode:_,multiSelectionKeyCode:M,panActivationKeyCode:j,zoomActivationKeyCode:A,deleteKeyCode:R,onlyRenderVisibleElements:U,elementsSelectable:W,selectNodesOnDrag:w,defaultViewport:P,translateExtent:N,minZoom:H,maxZoom:F,preventScrolling:E,defaultMarkerColor:T,zoomOnScroll:O,zoomOnPinch:B,panOnScroll:L,panOnScrollSpeed:V,panOnScrollMode:$,zoomOnDoubleClick:K,panOnDrag:G,onPaneClick:Z,onPaneMouseEnter:ne,onPaneMouseMove:C,onPaneMouseLeave:Q,onPaneScroll:X,onPaneContextMenu:q,onEdgeContextMenu:oe,onEdgeMouseEnter:ce,onEdgeMouseMove:Ie,onEdgeMouseLeave:ue,onReconnect:ee,onReconnectStart:ze,onReconnectEnd:vt,reconnectRadius:xt,noDragClassName:Bt,noWheelClassName:ln,noPanClassName:Vt,elevateEdgesOnSelect:dr,disableKeyboardA11y:Tn,nodeOrigin:An,nodeExtent:fr,rfId:pr})=>{const lo=gp(e,gE),Le=gp(t,SE);return LE(s),D.createElement(pE,{onPaneClick:Z,onPaneMouseEnter:ne,onPaneMouseMove:C,onPaneMouseLeave:Q,onPaneContextMenu:q,onPaneScroll:X,deleteKeyCode:R,selectionKeyCode:I,selectionOnDrag:z,selectionMode:_,onSelectionStart:v,onSelectionEnd:b,multiSelectionKeyCode:M,panActivationKeyCode:j,zoomActivationKeyCode:A,elementsSelectable:W,onMove:n,onMoveStart:r,onMoveEnd:o,zoomOnScroll:O,zoomOnPinch:B,zoomOnDoubleClick:K,panOnScroll:L,panOnScrollSpeed:V,panOnScrollMode:$,panOnDrag:G,defaultViewport:P,translateExtent:N,minZoom:H,maxZoom:F,onSelectionContextMenu:m,preventScrolling:E,noDragClassName:Bt,noWheelClassName:ln,noPanClassName:Vt,disableKeyboardA11y:Tn},D.createElement(DE,null,D.createElement(AE,{edgeTypes:Le,onEdgeClick:l,onEdgeDoubleClick:u,onlyRenderVisibleElements:U,onEdgeContextMenu:oe,onEdgeMouseEnter:ce,onEdgeMouseMove:Ie,onEdgeMouseLeave:ue,onReconnect:ee,onReconnectStart:ze,onReconnectEnd:vt,reconnectRadius:xt,defaultMarkerColor:T,noPanClassName:Vt,elevateEdgesOnSelect:!!dr,disableKeyboardA11y:Tn,rfId:pr},D.createElement(BE,{style:g,type:p,component:y,containerStyle:x})),D.createElement("div",{className:"react-flow__edgelabel-renderer"}),D.createElement(vE,{nodeTypes:lo,onNodeClick:i,onNodeDoubleClick:a,onNodeMouseEnter:c,onNodeMouseMove:d,onNodeMouseLeave:f,onNodeContextMenu:h,selectNodesOnDrag:w,onlyRenderVisibleElements:U,noPanClassName:Vt,noDragClassName:Bt,disableKeyboardA11y:Tn,nodeOrigin:An,nodeExtent:fr,rfId:pr})))};E0.displayName="GraphView";var VE=S.memo(E0);const Pu=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],un={rfId:"1",width:0,height:0,transform:[0,0,1],nodeInternals:new Map,edges:[],onNodesChange:null,onEdgesChange:null,hasDefaultNodes:!1,hasDefaultEdges:!1,d3Zoom:null,d3Selection:null,d3ZoomHandler:void 0,minZoom:.5,maxZoom:2,translateExtent:Pu,nodeExtent:Pu,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionNodeId:null,connectionHandleId:null,connectionHandleType:"source",connectionPosition:{x:0,y:0},connectionStatus:null,connectionMode:ar.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:[0,0],nodeDragThreshold:0,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesUpdatable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,fitViewOnInit:!1,fitViewOnInitDone:!1,fitViewOnInitOptions:void 0,onSelectionChange:[],multiSelectionActive:!1,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,connectionRadius:20,onError:gS,isValidConnection:void 0},UE=()=>Cw((e,t)=>({...un,setNodes:n=>{const{nodeInternals:r,nodeOrigin:o,elevateNodesOnSelect:s}=t();e({nodeInternals:ha(n,r,o,s)})},getNodes:()=>Array.from(t().nodeInternals.values()),setEdges:n=>{const{defaultEdgeOptions:r={}}=t();e({edges:n.map(o=>({...r,...o}))})},setDefaultNodesAndEdges:(n,r)=>{const o=typeof n<"u",s=typeof r<"u",i=o?ha(n,new Map,t().nodeOrigin,t().elevateNodesOnSelect):new Map;e({nodeInternals:i,edges:s?r:[],hasDefaultNodes:o,hasDefaultEdges:s})},updateNodeDimensions:n=>{const{onNodesChange:r,nodeInternals:o,fitViewOnInit:s,fitViewOnInitDone:i,fitViewOnInitOptions:l,domNode:a,nodeOrigin:u}=t(),c=a==null?void 0:a.querySelector(".react-flow__viewport");if(!c)return;const d=window.getComputedStyle(c),{m22:f}=new window.DOMMatrixReadOnly(d.transform),h=n.reduce((v,b)=>{const p=o.get(b.id);if(p!=null&&p.hidden)o.set(p.id,{...p,[Se]:{...p[Se],handleBounds:void 0}});else if(p){const g=Oc(b.nodeElement);!!(g.width&&g.height&&(p.width!==g.width||p.height!==g.height||b.forceUpdate))&&(o.set(p.id,{...p,[Se]:{...p[Se],handleBounds:{source:ap(".source",b.nodeElement,f,u),target:ap(".target",b.nodeElement,f,u)}},...g}),v.push({id:p.id,type:"dimensions",dimensions:g}))}return v},[]);d0(o,u);const m=i||s&&!i&&f0(t,{initial:!0,...l});e({nodeInternals:new Map(o),fitViewOnInitDone:m}),(h==null?void 0:h.length)>0&&(r==null||r(h))},updateNodePositions:(n,r=!0,o=!1)=>{const{triggerNodeChanges:s}=t(),i=n.map(l=>{const a={id:l.id,type:"position",dragging:o};return r&&(a.positionAbsolute=l.positionAbsolute,a.position=l.position),a});s(i)},triggerNodeChanges:n=>{const{onNodesChange:r,nodeInternals:o,hasDefaultNodes:s,nodeOrigin:i,getNodes:l,elevateNodesOnSelect:a}=t();if(n!=null&&n.length){if(s){const u=oE(n,l()),c=ha(u,o,i,a);e({nodeInternals:c})}r==null||r(n)}},addSelectedNodes:n=>{const{multiSelectionActive:r,edges:o,getNodes:s}=t();let i,l=null;r?i=n.map(a=>pn(a,!0)):(i=Ar(s(),n),l=Ar(o,[])),Zs({changedNodes:i,changedEdges:l,get:t,set:e})},addSelectedEdges:n=>{const{multiSelectionActive:r,edges:o,getNodes:s}=t();let i,l=null;r?i=n.map(a=>pn(a,!0)):(i=Ar(o,n),l=Ar(s(),[])),Zs({changedNodes:l,changedEdges:i,get:t,set:e})},unselectNodesAndEdges:({nodes:n,edges:r}={})=>{const{edges:o,getNodes:s}=t(),i=n||s(),l=r||o,a=i.map(c=>(c.selected=!1,pn(c.id,!1))),u=l.map(c=>pn(c.id,!1));Zs({changedNodes:a,changedEdges:u,get:t,set:e})},setMinZoom:n=>{const{d3Zoom:r,maxZoom:o}=t();r==null||r.scaleExtent([n,o]),e({minZoom:n})},setMaxZoom:n=>{const{d3Zoom:r,minZoom:o}=t();r==null||r.scaleExtent([o,n]),e({maxZoom:n})},setTranslateExtent:n=>{var r;(r=t().d3Zoom)==null||r.translateExtent(n),e({translateExtent:n})},resetSelectedElements:()=>{const{edges:n,getNodes:r}=t(),s=r().filter(l=>l.selected).map(l=>pn(l.id,!1)),i=n.filter(l=>l.selected).map(l=>pn(l.id,!1));Zs({changedNodes:s,changedEdges:i,get:t,set:e})},setNodeExtent:n=>{const{nodeInternals:r}=t();r.forEach(o=>{o.positionAbsolute=Hc(o.position,n)}),e({nodeExtent:n,nodeInternals:new Map(r)})},panBy:n=>{const{transform:r,width:o,height:s,d3Zoom:i,d3Selection:l,translateExtent:a}=t();if(!i||!l||!n.x&&!n.y)return!1;const u=Zt.translate(r[0]+n.x,r[1]+n.y).scale(r[2]),c=[[0,0],[o,s]],d=i==null?void 0:i.constrain()(u,c,a);return i.transform(l,d),r[0]!==d.x||r[1]!==d.y||r[2]!==d.k},cancelConnection:()=>e({connectionNodeId:un.connectionNodeId,connectionHandleId:un.connectionHandleId,connectionHandleType:un.connectionHandleType,connectionStatus:un.connectionStatus,connectionStartHandle:un.connectionStartHandle,connectionEndHandle:un.connectionEndHandle}),reset:()=>e({...un})}),Object.is),Yc=({children:e})=>{const t=S.useRef(null);return t.current||(t.current=UE()),D.createElement(aS,{value:t.current},e)};Yc.displayName="ReactFlowProvider";const k0=({children:e})=>S.useContext(El)?D.createElement(D.Fragment,null,e):D.createElement(Yc,null,e);k0.displayName="ReactFlowWrapper";const WE={input:o0,default:Cu,output:i0,group:Gc},$E={default:qi,straight:Uc,step:Vc,smoothstep:kl,simplebezier:Bc},GE=[0,0],KE=[15,15],YE={x:0,y:0,zoom:1},QE={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0},j0=S.forwardRef(({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,className:o,nodeTypes:s=WE,edgeTypes:i=$E,onNodeClick:l,onEdgeClick:a,onInit:u,onMove:c,onMoveStart:d,onMoveEnd:f,onConnect:h,onConnectStart:m,onConnectEnd:v,onClickConnectStart:b,onClickConnectEnd:p,onNodeMouseEnter:g,onNodeMouseMove:y,onNodeMouseLeave:x,onNodeContextMenu:I,onNodeDoubleClick:z,onNodeDragStart:_,onNodeDrag:M,onNodeDragStop:j,onNodesDelete:A,onEdgesDelete:R,onSelectionChange:U,onSelectionDragStart:W,onSelectionDrag:w,onSelectionDragStop:P,onSelectionContextMenu:N,onSelectionStart:H,onSelectionEnd:F,connectionMode:E=ar.Strict,connectionLineType:T=yn.Bezier,connectionLineStyle:O,connectionLineComponent:B,connectionLineContainerStyle:L,deleteKeyCode:V="Backspace",selectionKeyCode:$="Shift",selectionOnDrag:K=!1,selectionMode:G=hs.Full,panActivationKeyCode:Z="Space",multiSelectionKeyCode:ne=Xi()?"Meta":"Control",zoomActivationKeyCode:C=Xi()?"Meta":"Control",snapToGrid:Q=!1,snapGrid:X=KE,onlyRenderVisibleElements:q=!1,selectNodesOnDrag:oe=!0,nodesDraggable:ce,nodesConnectable:Ie,nodesFocusable:ue,nodeOrigin:ee=GE,edgesFocusable:ze,edgesUpdatable:vt,elementsSelectable:xt,defaultViewport:Bt=YE,minZoom:ln=.5,maxZoom:Vt=2,translateExtent:dr=Pu,preventScrolling:Tn=!0,nodeExtent:An,defaultMarkerColor:fr="#b1b1b7",zoomOnScroll:pr=!0,zoomOnPinch:lo=!0,panOnScroll:Le=!1,panOnScrollSpeed:wt=.5,panOnScrollMode:Rn=Qn.Free,zoomOnDoubleClick:Dn=!0,panOnDrag:Ln=!0,onPaneClick:Ut,onPaneMouseEnter:Pt,onPaneMouseMove:ao,onPaneMouseLeave:_l,onPaneScroll:uo,onPaneContextMenu:Il,children:Qc,onEdgeContextMenu:On,onEdgeDoubleClick:C0,onEdgeMouseEnter:F0,onEdgeMouseMove:P0,onEdgeMouseLeave:M0,onEdgeUpdate:T0,onEdgeUpdateStart:A0,onEdgeUpdateEnd:R0,onReconnect:D0,onReconnectStart:L0,onReconnectEnd:O0,reconnectRadius:H0=10,edgeUpdaterRadius:B0=10,onNodesChange:V0,onEdgesChange:U0,noDragClassName:W0="nodrag",noWheelClassName:$0="nowheel",noPanClassName:Xc="nopan",fitView:G0=!1,fitViewOptions:K0,connectOnClick:Y0=!0,attributionPosition:Q0,proOptions:X0,defaultEdgeOptions:q0,elevateNodesOnSelect:Z0=!0,elevateEdgesOnSelect:J0=!1,disableKeyboardA11y:qc=!1,autoPanOnConnect:ey=!0,autoPanOnNodeDrag:ty=!0,connectionRadius:ny=20,isValidConnection:ry,onError:oy,style:sy,id:Zc,nodeDragThreshold:iy,...ly},ay)=>{const zl=Zc||"1";return D.createElement("div",{...ly,style:{...sy,...QE},ref:ay,className:De(["react-flow",o]),"data-testid":"rf__wrapper",id:Zc},D.createElement(k0,null,D.createElement(VE,{onInit:u,onMove:c,onMoveStart:d,onMoveEnd:f,onNodeClick:l,onEdgeClick:a,onNodeMouseEnter:g,onNodeMouseMove:y,onNodeMouseLeave:x,onNodeContextMenu:I,onNodeDoubleClick:z,nodeTypes:s,edgeTypes:i,connectionLineType:T,connectionLineStyle:O,connectionLineComponent:B,connectionLineContainerStyle:L,selectionKeyCode:$,selectionOnDrag:K,selectionMode:G,deleteKeyCode:V,multiSelectionKeyCode:ne,panActivationKeyCode:Z,zoomActivationKeyCode:C,onlyRenderVisibleElements:q,selectNodesOnDrag:oe,defaultViewport:Bt,translateExtent:dr,minZoom:ln,maxZoom:Vt,preventScrolling:Tn,zoomOnScroll:pr,zoomOnPinch:lo,zoomOnDoubleClick:Dn,panOnScroll:Le,panOnScrollSpeed:wt,panOnScrollMode:Rn,panOnDrag:Ln,onPaneClick:Ut,onPaneMouseEnter:Pt,onPaneMouseMove:ao,onPaneMouseLeave:_l,onPaneScroll:uo,onPaneContextMenu:Il,onSelectionContextMenu:N,onSelectionStart:H,onSelectionEnd:F,onEdgeContextMenu:On,onEdgeDoubleClick:C0,onEdgeMouseEnter:F0,onEdgeMouseMove:P0,onEdgeMouseLeave:M0,onReconnect:D0??T0,onReconnectStart:L0??A0,onReconnectEnd:O0??R0,reconnectRadius:H0??B0,defaultMarkerColor:fr,noDragClassName:W0,noWheelClassName:$0,noPanClassName:Xc,elevateEdgesOnSelect:J0,rfId:zl,disableKeyboardA11y:qc,nodeOrigin:ee,nodeExtent:An}),D.createElement(LS,{nodes:e,edges:t,defaultNodes:n,defaultEdges:r,onConnect:h,onConnectStart:m,onConnectEnd:v,onClickConnectStart:b,onClickConnectEnd:p,nodesDraggable:ce,nodesConnectable:Ie,nodesFocusable:ue,edgesFocusable:ze,edgesUpdatable:vt,elementsSelectable:xt,elevateNodesOnSelect:Z0,minZoom:ln,maxZoom:Vt,nodeExtent:An,onNodesChange:V0,onEdgesChange:U0,snapToGrid:Q,snapGrid:X,connectionMode:E,translateExtent:dr,connectOnClick:Y0,defaultEdgeOptions:q0,fitView:G0,fitViewOptions:K0,onNodesDelete:A,onEdgesDelete:R,onNodeDragStart:_,onNodeDrag:M,onNodeDragStop:j,onSelectionDrag:w,onSelectionDragStart:W,onSelectionDragStop:P,noPanClassName:Xc,nodeOrigin:ee,rfId:zl,autoPanOnConnect:ey,autoPanOnNodeDrag:ty,onError:oy,connectionRadius:ny,isValidConnection:ry,nodeDragThreshold:iy}),D.createElement(RS,{onSelectionChange:U}),Qc,D.createElement(cS,{proOptions:X0,position:Q0}),D.createElement(US,{rfId:zl,disableKeyboardA11y:qc})))});j0.displayName="ReactFlow";const N0=({id:e,x:t,y:n,width:r,height:o,style:s,color:i,strokeColor:l,strokeWidth:a,className:u,borderRadius:c,shapeRendering:d,onClick:f,selected:h})=>{const{background:m,backgroundColor:v}=s||{},b=i||m||v;return D.createElement("rect",{className:De(["react-flow__minimap-node",{selected:h},u]),x:t,y:n,rx:c,ry:c,width:r,height:o,fill:b,stroke:l,strokeWidth:a,shapeRendering:d,onClick:f?p=>f(p,e):void 0})};N0.displayName="MiniMapNode";var XE=S.memo(N0);const qE=e=>e.nodeOrigin,ZE=e=>e.getNodes().filter(t=>!t.hidden&&t.width&&t.height),va=e=>e instanceof Function?e:()=>e;function JE({nodeStrokeColor:e="transparent",nodeColor:t="#e2e2e2",nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:o=2,nodeComponent:s=XE,onClick:i}){const l=pe(ZE,Pe),a=pe(qE),u=va(t),c=va(e),d=va(n),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return D.createElement(D.Fragment,null,l.map(h=>{const{x:m,y:v}=er(h,a).positionAbsolute;return D.createElement(s,{key:h.id,x:m,y:v,width:h.width,height:h.height,style:h.style,selected:h.selected,className:d(h),color:u(h),borderRadius:r,strokeColor:c(h),strokeWidth:o,shapeRendering:f,onClick:i,id:h.id})}))}var ek=S.memo(JE);const tk=200,nk=150,rk=e=>{const t=e.getNodes(),n={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:n,boundingRect:t.length>0?pS(jl(t,e.nodeOrigin),n):n,rfId:e.rfId}},ok="react-flow__minimap-desc";function _0({style:e,className:t,nodeStrokeColor:n="transparent",nodeColor:r="#e2e2e2",nodeClassName:o="",nodeBorderRadius:s=5,nodeStrokeWidth:i=2,nodeComponent:l,maskColor:a="rgb(240, 240, 240, 0.6)",maskStrokeColor:u="none",maskStrokeWidth:c=1,position:d="bottom-right",onClick:f,onNodeClick:h,pannable:m=!1,zoomable:v=!1,ariaLabel:b="React Flow mini map",inversePan:p=!1,zoomStep:g=10,offsetScale:y=5}){const x=_e(),I=S.useRef(null),{boundingRect:z,viewBB:_,rfId:M}=pe(rk,Pe),j=(e==null?void 0:e.width)??tk,A=(e==null?void 0:e.height)??nk,R=z.width/j,U=z.height/A,W=Math.max(R,U),w=W*j,P=W*A,N=y*W,H=z.x-(w-z.width)/2-N,F=z.y-(P-z.height)/2-N,E=w+N*2,T=P+N*2,O=`${ok}-${M}`,B=S.useRef(0);B.current=W,S.useEffect(()=>{if(I.current){const $=dt(I.current),K=ne=>{const{transform:C,d3Selection:Q,d3Zoom:X}=x.getState();if(ne.sourceEvent.type!=="wheel"||!Q||!X)return;const q=-ne.sourceEvent.deltaY*(ne.sourceEvent.deltaMode===1?.05:ne.sourceEvent.deltaMode?1:.002)*g,oe=C[2]*Math.pow(2,q);X.scaleTo(Q,oe)},G=ne=>{const{transform:C,d3Selection:Q,d3Zoom:X,translateExtent:q,width:oe,height:ce}=x.getState();if(ne.sourceEvent.type!=="mousemove"||!Q||!X)return;const Ie=B.current*Math.max(1,C[2])*(p?-1:1),ue={x:C[0]-ne.sourceEvent.movementX*Ie,y:C[1]-ne.sourceEvent.movementY*Ie},ee=[[0,0],[oe,ce]],ze=Zt.translate(ue.x,ue.y).scale(C[2]),vt=X.constrain()(ze,ee,q);X.transform(Q,vt)},Z=Rm().on("zoom",m?G:null).on("zoom.wheel",v?K:null);return $.call(Z),()=>{$.on("zoom",null)}}},[m,v,p,g]);const L=f?$=>{const K=kt($);f($,{x:K[0],y:K[1]})}:void 0,V=h?($,K)=>{const G=x.getState().nodeInternals.get(K);h($,G)}:void 0;return D.createElement(Lc,{position:d,style:e,className:De(["react-flow__minimap",t]),"data-testid":"rf__minimap"},D.createElement("svg",{width:j,height:A,viewBox:`${H} ${F} ${E} ${T}`,role:"img","aria-labelledby":O,ref:I,onClick:L},b&&D.createElement("title",{id:O},b),D.createElement(ek,{onClick:V,nodeColor:r,nodeStrokeColor:n,nodeBorderRadius:s,nodeClassName:o,nodeStrokeWidth:i,nodeComponent:l}),D.createElement("path",{className:"react-flow__minimap-mask",d:`M${H-N},${F-N}h${E+N*2}v${T+N*2}h${-E-N*2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`,fill:a,fillRule:"evenodd",stroke:u,strokeWidth:c,pointerEvents:"none"})))}_0.displayName="MiniMap";var sk=S.memo(_0);function ik(){return D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},D.createElement("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"}))}function lk(){return D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5"},D.createElement("path",{d:"M0 0h32v4.2H0z"}))}function ak(){return D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30"},D.createElement("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"}))}function uk(){return D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},D.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"}))}function ck(){return D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},D.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"}))}const Mo=({children:e,className:t,...n})=>D.createElement("button",{type:"button",className:De(["react-flow__controls-button",t]),...n},e);Mo.displayName="ControlButton";const dk=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom}),I0=({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:r=!0,fitViewOptions:o,onZoomIn:s,onZoomOut:i,onFitView:l,onInteractiveChange:a,className:u,children:c,position:d="bottom-left"})=>{const f=_e(),[h,m]=S.useState(!1),{isInteractive:v,minZoomReached:b,maxZoomReached:p}=pe(dk,Pe),{zoomIn:g,zoomOut:y,fitView:x}=Nl();if(S.useEffect(()=>{m(!0)},[]),!h)return null;const I=()=>{g(),s==null||s()},z=()=>{y(),i==null||i()},_=()=>{x(o),l==null||l()},M=()=>{f.setState({nodesDraggable:!v,nodesConnectable:!v,elementsSelectable:!v}),a==null||a(!v)};return D.createElement(Lc,{className:De(["react-flow__controls",u]),position:d,style:e,"data-testid":"rf__controls"},t&&D.createElement(D.Fragment,null,D.createElement(Mo,{onClick:I,className:"react-flow__controls-zoomin",title:"zoom in","aria-label":"zoom in",disabled:p},D.createElement(ik,null)),D.createElement(Mo,{onClick:z,className:"react-flow__controls-zoomout",title:"zoom out","aria-label":"zoom out",disabled:b},D.createElement(lk,null))),n&&D.createElement(Mo,{className:"react-flow__controls-fitview",onClick:_,title:"fit view","aria-label":"fit view"},D.createElement(ak,null)),r&&D.createElement(Mo,{className:"react-flow__controls-interactive",onClick:M,title:"toggle interactivity","aria-label":"toggle interactivity"},v?D.createElement(ck,null):D.createElement(uk,null)),c)};I0.displayName="Controls";var fk=S.memo(I0),gt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(gt||(gt={}));function pk({color:e,dimensions:t,lineWidth:n}){return D.createElement("path",{stroke:e,strokeWidth:n,d:`M${t[0]/2} 0 V${t[1]} M0 ${t[1]/2} H${t[0]}`})}function hk({color:e,radius:t}){return D.createElement("circle",{cx:t,cy:t,r:t,fill:e})}const gk={[gt.Dots]:"#91919a",[gt.Lines]:"#eee",[gt.Cross]:"#e2e2e2"},mk={[gt.Dots]:1,[gt.Lines]:1,[gt.Cross]:6},yk=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function z0({id:e,variant:t=gt.Dots,gap:n=20,size:r,lineWidth:o=1,offset:s=2,color:i,style:l,className:a}){const u=S.useRef(null),{transform:c,patternId:d}=pe(yk,Pe),f=i||gk[t],h=r||mk[t],m=t===gt.Dots,v=t===gt.Cross,b=Array.isArray(n)?n:[n,n],p=[b[0]*c[2]||1,b[1]*c[2]||1],g=h*c[2],y=v?[g,g]:p,x=m?[g/s,g/s]:[y[0]/s,y[1]/s];return D.createElement("svg",{className:De(["react-flow__background",a]),style:{...l,position:"absolute",width:"100%",height:"100%",top:0,left:0},ref:u,"data-testid":"rf__background"},D.createElement("pattern",{id:d+e,x:c[0]%p[0],y:c[1]%p[1],width:p[0],height:p[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${x[0]},-${x[1]})`},m?D.createElement(hk,{color:f,radius:g/s}):D.createElement(pk,{dimensions:y,color:f,lineWidth:o})),D.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${d+e})`}))}z0.displayName="Background";var vk=S.memo(z0);const xk=["#6366f1","#10b981","#f59e0b","#ec4899","#06b6d4","#ef4444"];function wk({id:e,data:t}){const n=J(u=>u.setSubspaceColor),r=J(u=>u.setSubspaceDescription),o=J(u=>u.setExpandedSubspace),[s,i]=S.useState(!1),[l,a]=S.useState(!1);return k.jsxs("div",{className:"relative h-full w-full rounded-2xl border-2 border-dashed",style:{width:t.width,height:t.height,borderColor:`${t.color}66`,background:`${t.color}10`,boxShadow:`inset 0 0 60px ${t.color}12`},children:[k.jsxs("div",{className:"absolute left-3 top-2 select-none text-[11px] font-semibold uppercase tracking-wider",style:{color:`${t.color}cc`},children:["◈ ",t.name]}),k.jsxs("div",{className:"absolute right-2 top-2 flex items-center gap-1 nodrag",children:[k.jsx(xa,{label:"Description",onClick:()=>{i(u=>!u),a(!1)},children:"i"}),k.jsx(xa,{label:"Colour",onClick:()=>{a(u=>!u),i(!1)},children:k.jsx("span",{className:"h-3 w-3 rounded-full",style:{background:t.color}})}),k.jsx(xa,{label:"Expand",onClick:()=>o(e),children:"⛶"})]}),s&&k.jsx("div",{className:"absolute right-2 top-10 z-10 w-60 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag",children:k.jsx("textarea",{autoFocus:!0,defaultValue:t.description,onBlur:u=>r(e,u.target.value),placeholder:"Describe this subspace…",className:"h-20 w-full resize-none rounded bg-slate-800 p-2 text-[11px] text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500"})}),l&&k.jsx("div",{className:"absolute right-2 top-10 z-10 flex gap-1.5 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag",children:xk.map(u=>k.jsx("button",{onClick:()=>{n(e,u),a(!1)},className:"h-5 w-5 rounded-full ring-2 ring-transparent hover:ring-white/60",style:{background:u}},u))})]})}function xa({children:e,label:t,onClick:n}){return k.jsx("button",{title:t,onClick:r=>{r.stopPropagation(),n()},className:"flex h-6 w-6 items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 text-[11px] text-slate-300 hover:bg-slate-800 hover:text-white",children:e})}const bk=S.memo(wk);function Sk({id:e,data:t}){const n=J(s=>s.focusedFileId),r=J(s=>s.openTerminal),o=n===e;return k.jsx("div",{onDoubleClick:s=>{s.stopPropagation(),r(e)},className:["relative h-full w-full rounded-xl border bg-slate-900/80 backdrop-blur-sm transition-all",o?"border-amber-400 shadow-[0_0_0_1px_rgba(251,191,36,0.7),0_0_22px_rgba(251,191,36,0.35)]":"border-slate-700 shadow-lg shadow-black/40"].join(" "),style:{width:t.width,height:t.height},children:k.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 border-b border-slate-700/70",children:[k.jsxs("span",{className:"flex gap-1",children:[k.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-rose-400/80"}),k.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-400/80"}),k.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400/80"})]}),k.jsx("span",{className:"truncate text-[11px] font-mono text-slate-200",children:t.name}),k.jsx("span",{className:"ml-auto truncate text-[9px] text-slate-500",children:t.folderPath})]})})}const Ek=S.memo(Sk);function kk({id:e,data:t}){const n=J(a=>a.focusedNodeId),r=J(a=>a.functions),o=J(a=>a.setFocusedNode),s=n===e,i=n?r[n]:null,l=i&&!s&&i.fileId===t.fileId;return k.jsxs("div",{onClick:a=>{a.stopPropagation(),o(s?null:e)},className:["group relative flex items-center gap-2 rounded-full border px-3 text-[12px] font-mono select-none cursor-pointer transition-all duration-150",s?"border-indigo-400 bg-indigo-500/25 text-indigo-100 shadow-[0_0_0_1px_rgba(99,102,241,0.6),0_0_18px_rgba(99,102,241,0.45)]":l?"border-slate-700/60 bg-transparent text-slate-500":"border-slate-600 bg-slate-700/70 text-slate-100 hover:border-slate-400"].join(" "),style:{width:t.width,height:t.height},children:[k.jsx(Ot,{type:"target",position:re.Left,className:"!bg-slate-400"}),k.jsx("span",{className:["h-2 w-2 shrink-0 rounded-full",s?"bg-indigo-300":l?"bg-slate-600":"bg-emerald-400"].join(" ")}),k.jsx("span",{className:"truncate",children:t.name}),k.jsx(Ot,{type:"source",position:re.Right,className:"!bg-slate-400"})]})}const jk=S.memo(kk);function Nk({data:e}){return k.jsxs("div",{className:"flex h-[88px] w-[150px] flex-col rounded-xl border border-cyan-500/50 bg-gradient-to-br from-cyan-900/40 to-slate-900/80 p-2.5 shadow-lg shadow-cyan-900/30",children:[k.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-cyan-300/80",children:[k.jsx("span",{children:"⚙"}),k.jsx("span",{children:"tunable"})]}),k.jsx("div",{className:"mt-1 truncate font-mono text-[12px] text-slate-100",children:e.name}),k.jsx("div",{className:"mt-auto rounded-md bg-slate-950/60 px-2 py-1 text-center font-mono text-[13px] font-semibold text-cyan-200",children:e.value})]})}const _k=S.memo(Nk);function Ik({data:e}){const t=e.side==="left";return k.jsxs("div",{className:"group relative nodrag",style:{width:16,height:16},children:[k.jsx("div",{className:"h-4 w-4 rounded-full ring-2 ring-slate-950 transition-transform group-hover:scale-125",style:{background:e.color,boxShadow:`0 0 10px ${e.color}`}}),t?k.jsx(Ot,{type:"source",position:re.Right,style:{background:e.color}}):k.jsx(Ot,{type:"target",position:re.Left,style:{background:e.color}}),k.jsx("div",{className:["pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-0.5 text-[10px] font-mono text-slate-200 opacity-0 ring-1 ring-slate-700 transition-opacity group-hover:opacity-100",t?"right-6":"left-6"].join(" "),children:e.label})]})}const zk=S.memo(Ik);function Ck({data:e}){return k.jsx("div",{className:"h-full w-full rounded-2xl border border-dashed border-slate-700/70 bg-slate-800/15",style:{width:e.width,height:e.height},children:k.jsxs("div",{className:"px-3 py-1.5 text-[11px] font-mono tracking-tight text-slate-500",children:[k.jsx("span",{className:"text-slate-600",children:"📁"})," ",e.name]})})}const Fk=S.memo(Ck);function Pk({id:e,data:t}){const n=J(d=>d.selectedProjectFileId),r=J(d=>d.projectEdges),o=J(d=>d.selectProjectFile),s=J(d=>d.openEditor);let i="idle";n&&(n===e?i="selected":r.some(d=>d.source===n&&d.target===e)?i="downstream":r.some(d=>d.target===n&&d.source===e)?i="upstream":i="dim");const l=t.name.split(".").pop(),a=mw[l]||"#64748b",u=t.kind==="image"?"🖼":t.kind==="audio"?"🔊":null,c=i==="selected"?"border-indigo-400 bg-indigo-500/20 shadow-[0_0_0_1px_rgba(99,102,241,0.7),0_0_20px_rgba(99,102,241,0.4)]":i==="downstream"?"border-emerald-400/80 bg-slate-800/90":i==="upstream"?"border-amber-400/80 bg-slate-800/90":"border-slate-700 bg-slate-800/80 hover:border-slate-500";return k.jsxs("div",{onClick:d=>{d.stopPropagation(),o(e)},onDoubleClick:d=>{d.stopPropagation(),s(e)},title:"Double-click to open",className:["flex cursor-pointer flex-col rounded-lg border px-3 py-2 transition-all duration-200",c,i==="dim"?"opacity-20 hover:opacity-50":"opacity-100"].join(" "),style:{width:178,height:64},children:[k.jsx(Ot,{type:"target",position:re.Left,className:"!h-2 !w-2 !bg-amber-400"}),k.jsxs("div",{className:"flex items-center gap-2",children:[u?k.jsx("span",{className:"text-[13px] leading-none",children:u}):k.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-sm",style:{background:a}}),k.jsx("span",{className:"truncate font-mono text-[12px] text-slate-100",children:t.name})]}),k.jsx("span",{className:"mt-1 truncate pl-[18px] text-[9px] text-slate-500",children:t.folder}),k.jsx(Ot,{type:"source",position:re.Right,className:"!h-2 !w-2 !bg-emerald-400"})]})}const Mk=S.memo(Pk);function Tk({id:e,sourceX:t,sourceY:n,targetX:r,targetY:o,markerEnd:s,style:i,data:l}){const a=r-t,u=o-n,c=Math.hypot(a,u),d=(l==null?void 0:l.lane)??0,f=(l==null?void 0:l.bow)==="up"?-1:1,h=(Math.min(170,55+c*.16)+d*30)*f,m=t+a*.25,v=t+a*.75,b=(n+o)/2+h,p=`M ${t},${n} C ${m},${b} ${v},${b} ${r},${o}`;return k.jsx(io,{id:e,path:p,markerEnd:s,style:i})}const Ak={subspace:bk,file:Ek,function:jk,tunable:_k,port:zk,cluster:Fk,projectFile:Mk},Rk={around:Tk},mp="#34d399",yp="#f59e0b";function wr(e,t,n,r={}){return{id:`e-${e}-${t}`,source:e,target:t,type:"around",animated:!0,className:"focus-edge",style:{stroke:n,strokeWidth:2},markerEnd:{type:gs.ArrowClosed,color:n,width:16,height:16},data:{lane:r.lane??0,bow:r.bow??"down"}}}function Dk(){const e=Nl(),t=S.useRef(null),n=J(C=>C.viewMode),r=J(C=>C.setViewMode),o=J(C=>C.files),s=J(C=>C.functions),i=J(C=>C.subspaces),l=J(C=>C.tunables),a=J(C=>C.calls),u=J(C=>C.focusedNodeId),c=J(C=>C.projectFiles),d=J(C=>C.projectFolders),f=J(C=>C.projectEdges),h=J(C=>C.selectedProjectFileId),m=J(C=>C.projectFolderFilter),v=J(C=>C.selectProjectFile),b=J(C=>C.clearProjectSelection),p=J(C=>C.moveNode),g=J(C=>C.clearFocus),y=J(C=>C.setFocusedNode),x=J(C=>C.requestFocus),I=J(C=>C.setFlowApi),z=J(C=>C.saveBookmark),_=J(C=>C.createSubspace),M=J(C=>C.createFile),j=J(C=>C.createFunction),A=J(C=>C.pendingFocus),R=J(C=>C.consumePendingFocus),[U,W]=S.useState(null),[w,P]=S.useState(""),N=n==="project";S.useEffect(()=>{I({getViewport:()=>e.getViewport(),setViewport:(C,Q)=>e.setViewport(C,Q),fitTo:(C,Q)=>e.fitView({nodes:[{id:C}],...Q})})},[e,I]),S.useEffect(()=>{const C=setTimeout(()=>e.fitView({duration:500,padding:.18}),60);return()=>clearTimeout(C)},[n,e]),S.useEffect(()=>{if(!A)return;const C=A.id,Q=!!i[C],q=!!s[C]?s[C].fileId:C;e.fitView({nodes:[{id:q}],duration:650,padding:Q?.06:.4,maxZoom:Q?1.6:1.5}),R()},[A,e,i,s,R]);const H=S.useMemo(()=>{const C=[],Q=_f({focusedNodeId:u,functions:s,calls:a});for(const X of Object.values(i))C.push({id:X.id,type:"subspace",position:X.position,data:{...X,width:X.size.width,height:X.size.height},style:{width:X.size.width,height:X.size.height,zIndex:0},zIndex:0});for(const X of Object.values(o)){const q=Nf(s,X.id);C.push({id:X.id,type:"file",position:X.position,data:{...X,width:q.width,height:q.height},style:{width:q.width,height:q.height},zIndex:1})}for(const X of Object.values(s))C.push({id:X.id,type:"function",position:X.position,parentNode:X.fileId,extent:"parent",data:{name:X.name,fileId:X.fileId,width:Ke.W,height:Ke.H},zIndex:2});if(Q){const X=Nf(s,Q.fileId);Q.leftPorts.forEach((q,oe)=>{const ce=Ws[q.extFileId]||"#94a3b8";C.push({id:`port-l-${q.extFnId}`,type:"port",parentNode:Q.fileId,position:{x:-16/2,y:Te.HEADER+8+oe*nt.GAP_Y},data:{side:"left",color:ce,label:`${s[q.extFnId].name} · ${o[q.extFileId].name}`},draggable:!1,selectable:!1,zIndex:6})}),Q.rightPorts.forEach((q,oe)=>{const ce=Ws[q.extFileId]||"#94a3b8";C.push({id:`port-r-${q.extFnId}`,type:"port",parentNode:Q.fileId,position:{x:X.width-nt.W/2,y:Te.HEADER+8+oe*nt.GAP_Y},data:{side:"right",color:ce,label:`${s[q.extFnId].name} · ${o[q.extFileId].name}`},draggable:!1,selectable:!1,zIndex:6})})}for(const X of Object.values(l))C.push({id:X.id,type:"tunable",position:X.position,data:X,zIndex:1});return C},[o,s,i,l,a,u]),F=S.useMemo(()=>{const C=_f({focusedNodeId:u,functions:s,calls:a});if(!C)return[];const Q=C.focusedNodeId,X=[];return C.internalUpstream.forEach((q,oe)=>X.push(wr(q,Q,"#818cf8",{lane:oe,bow:"up"}))),C.internalDownstream.forEach((q,oe)=>X.push(wr(Q,q,"#818cf8",{lane:oe,bow:"down"}))),C.leftPorts.forEach((q,oe)=>X.push(wr(`port-l-${q.extFnId}`,Q,Ws[q.extFileId]||"#94a3b8",{lane:oe,bow:"up"}))),C.rightPorts.forEach((q,oe)=>X.push(wr(Q,`port-r-${q.extFnId}`,Ws[q.extFileId]||"#94a3b8",{lane:oe,bow:"down"}))),X},[u,s,a]),E=S.useMemo(()=>{const C=[];for(const Q of Object.values(d))m&&Q.id!==m||C.push({id:`${Q.id}::cluster`,type:"cluster",position:Q.position,data:{name:Q.name,width:Q.size.width,height:Q.size.height},style:{width:Q.size.width,height:Q.size.height,zIndex:0},zIndex:0,selectable:!1,draggable:!1});for(const Q of Object.values(c))m&&Q.folder!==m||C.push({id:Q.id,type:"projectFile",position:Q.position,data:Q,zIndex:2});return C},[c,d,m]),T=S.useMemo(()=>{const C=new Set(Object.values(c).filter(q=>!m||q.folder===m).map(q=>q.id));if(m&&!C.has(h))return[];const Q=Ew({selectedProjectFileId:h,projectEdges:f});if(!Q)return[];const X=[];return Q.downstream.filter(q=>C.has(q)).forEach((q,oe)=>X.push(wr(Q.id,q,mp,{lane:oe,bow:"down"}))),Q.upstream.filter(q=>C.has(q)).forEach((q,oe)=>X.push(wr(q,Q.id,yp,{lane:oe,bow:"up"}))),X},[h,f,c,m]),O=N?E:H,B=N?T:F,L=S.useCallback(C=>{for(const Q of C)Q.type==="position"&&Q.position&&p(Q.id,Q.position)},[p]),V=S.useCallback(()=>{g(),b(),W(null)},[g,b]),$=S.useCallback(C=>{if(C.preventDefault(),N)return;const Q=t.current.getBoundingClientRect(),X=e.screenToFlowPosition({x:C.clientX,y:C.clientY});W({x:C.clientX-Q.left,y:C.clientY-Q.top,flowPos:X})},[e,N]),K=S.useCallback(()=>{const C=t.current.getBoundingClientRect(),Q=C.width-240,X=C.height-220,q=e.screenToFlowPosition({x:C.left+Q,y:C.top+X});W({x:Q,y:X,flowPos:q})},[e]),G=()=>{const C=window.prompt("Name this bookmark",`View ${Date.now()%1e3}`);C!==null&&z(e.getViewport(),C)},Z=S.useMemo(()=>{const C=w.trim().toLowerCase();if(!C)return[];const Q=[];if(N)for(const X of Object.values(c))m&&X.folder!==m||X.name.toLowerCase().includes(C)&&Q.push({id:X.id,label:X.name,kind:"file"});else{for(const X of Object.values(s))X.name.toLowerCase().includes(C)&&Q.push({id:X.id,label:X.name,kind:"fn"});for(const X of Object.values(o))X.name.toLowerCase().includes(C)&&Q.push({id:X.id,label:X.name,kind:"file"});for(const X of Object.values(i))X.name.toLowerCase().includes(C)&&Q.push({id:X.id,label:X.name,kind:"sub"})}return Q.slice(0,6)},[w,N,c,s,o,i]),ne=C=>{N?v(C.id):C.kind==="fn"&&y(C.id),x(C.id),P("")};return k.jsxs("div",{ref:t,className:"relative h-full w-full",onClick:()=>W(null),children:[k.jsx("div",{className:"pointer-events-none absolute left-3 top-3 z-20",children:k.jsxs("div",{className:"pointer-events-auto inline-flex rounded-full border border-slate-700 bg-slate-900/90 p-0.5 text-xs shadow-lg backdrop-blur",children:[k.jsx(vp,{active:N,onClick:()=>r("project"),children:"📁 Project Map"}),k.jsx(vp,{active:!N,onClick:()=>r("functions"),children:"◯ Functions"})]})}),k.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center",children:k.jsxs("div",{className:"pointer-events-auto flex items-center gap-2",children:[k.jsxs("div",{className:"relative",children:[k.jsx("input",{value:w,onChange:C=>P(C.target.value),onKeyDown:C=>C.key==="Enter"&&Z[0]&&ne(Z[0]),placeholder:N?"Search files…":"Search files & functions…",className:"w-80 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 shadow-lg outline-none backdrop-blur placeholder:text-slate-500 focus:border-indigo-500"}),k.jsx("span",{className:"pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500",children:"⌕"}),Z.length>0&&k.jsx("div",{className:"absolute mt-2 w-80 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl backdrop-blur",children:Z.map(C=>k.jsxs("button",{onClick:()=>ne(C),className:"flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-200 hover:bg-slate-800",children:[k.jsx("span",{className:"text-[10px] uppercase text-slate-500",children:C.kind}),k.jsx("span",{className:"truncate font-mono",children:C.label})]},`${C.kind}-${C.id}`))})]}),k.jsxs("button",{onClick:G,className:"flex items-center gap-1.5 rounded-full border border-indigo-500/60 bg-indigo-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-indigo-500",children:[k.jsx("span",{children:"★"})," Save view"]})]})}),k.jsxs(j0,{nodes:O,edges:B,nodeTypes:Ak,edgeTypes:Rk,onNodesChange:L,onPaneClick:V,onPaneContextMenu:$,minZoom:.1,maxZoom:3,fitView:!0,proOptions:{hideAttribution:!0},className:"bg-canvas",children:[k.jsx(vk,{variant:gt.Dots,gap:26,size:1.5,color:"#1e2533"}),k.jsx(fk,{className:"!bg-slate-900 !border-slate-700",showInteractive:!1}),k.jsx(sk,{pannable:!0,zoomable:!0,maskColor:"rgba(2,6,23,0.7)",className:"!bg-slate-900 !border !border-slate-700",nodeColor:C=>{var Q;return C.type==="subspace"?`${((Q=C.data)==null?void 0:Q.color)||"#6366f1"}55`:C.type==="cluster"?"#1e293b":C.type==="projectFile"||C.type==="function"?"#475569":C.type==="tunable"?"#06b6d4":"#334155"}})]}),N&&k.jsxs("div",{className:"pointer-events-none absolute bottom-6 left-6 z-20 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-[11px] shadow-lg backdrop-blur",children:[k.jsx("div",{className:"mb-1 font-semibold text-slate-300",children:"Click to trace · double-click to open"}),k.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[k.jsx("span",{className:"inline-block h-0.5 w-5",style:{background:mp}})," affects (imports) →"]}),k.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[k.jsx("span",{className:"inline-block h-0.5 w-5",style:{background:yp}})," ← affected by (imported by)"]}),k.jsx("div",{className:"mt-1 text-slate-500",children:"🖼 image · 🔊 audio · ▢ text → editor/viewer"})]}),!N&&k.jsx("button",{onClick:K,title:"Create…",className:"absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-xl shadow-indigo-900/50 transition hover:bg-indigo-500 active:scale-95",children:"+"}),U&&k.jsx(Lk,{x:U.x,y:U.y,files:Object.values(o),onClose:()=>W(null),onCreateSubspace:()=>{_(U.flowPos),W(null)},onCreateFile:()=>{const C=window.prompt("Folder path for the new file","src/feature");C!==null&&(M(U.flowPos,C),W(null))},onCreateFunction:C=>{const Q=window.prompt("Function name","newFn()");Q!==null&&(j(C,Q),W(null))}})]})}function vp({active:e,onClick:t,children:n}){return k.jsx("button",{onClick:t,className:["rounded-full px-3 py-1.5 font-medium transition-colors",e?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-200"].join(" "),children:n})}function Lk({x:e,y:t,files:n,onCreateSubspace:r,onCreateFile:o,onCreateFunction:s,onClose:i}){const[l,a]=S.useState(!1);return k.jsxs("div",{className:"absolute z-30 w-56 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 py-1 text-sm shadow-2xl backdrop-blur",style:{left:e,top:t},onClick:u=>u.stopPropagation(),onContextMenu:u=>u.preventDefault(),children:[k.jsx("div",{className:"px-3 py-1 text-[10px] uppercase tracking-wider text-slate-500",children:"Create"}),k.jsx(ei,{icon:"◈",onClick:r,children:"New Subspace"}),k.jsx(ei,{icon:"▢",onClick:o,children:"New File…"}),k.jsxs("div",{className:"relative",children:[k.jsx(ei,{icon:"◯",chevron:!0,onClick:()=>a(u=>!u),children:"New Function"}),l&&k.jsxs("div",{className:"border-t border-slate-800 bg-slate-950/60",children:[n.length===0&&k.jsx("div",{className:"px-6 py-2 text-xs text-slate-500",children:"No files yet"}),n.map(u=>k.jsxs("button",{onClick:()=>s(u.id),className:"block w-full px-6 py-1.5 text-left text-xs text-slate-300 hover:bg-slate-800",children:["in ",k.jsx("span",{className:"font-mono text-slate-100",children:u.name})]},u.id))]})]}),k.jsx("div",{className:"my-1 border-t border-slate-800"}),k.jsx(ei,{icon:"✕",onClick:i,children:"Close"})]})}function ei({icon:e,children:t,onClick:n,chevron:r}){return k.jsxs("button",{onClick:n,className:"flex w-full items-center gap-3 px-3 py-1.5 text-left text-slate-200 hover:bg-slate-800",children:[k.jsx("span",{className:"w-4 text-center text-slate-400",children:e}),k.jsx("span",{className:"flex-1",children:t}),r&&k.jsx("span",{className:"text-slate-500",children:"▾"})]})}function Ok(){return k.jsx(Yc,{children:k.jsx(Dk,{})})}function Hk(){const e=J(i=>i.terminalFileId),t=J(i=>i.closeTerminal),n=J(i=>i.files),r=J(i=>i.functions);if(S.useEffect(()=>{const i=l=>l.key==="Escape"&&t();return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[t]),!e)return null;const o=n[e];if(!o)return null;const s=Object.values(r).filter(i=>i.fileId===e);return k.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",onClick:t,children:k.jsxs("div",{className:"flex h-[70vh] w-[760px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl",onClick:i=>i.stopPropagation(),children:[k.jsxs("div",{className:"flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2",children:[k.jsxs("span",{className:"flex gap-1.5",children:[k.jsx("span",{className:"h-3 w-3 rounded-full bg-rose-500"}),k.jsx("span",{className:"h-3 w-3 rounded-full bg-amber-500"}),k.jsx("span",{className:"h-3 w-3 rounded-full bg-emerald-500"})]}),k.jsxs("span",{className:"ml-2 font-mono text-xs text-slate-300",children:[o.folderPath,"/",o.name]}),k.jsx("button",{onClick:t,className:"ml-auto text-slate-500 hover:text-white",children:"✕"})]}),k.jsxs("div",{className:"thin-scroll flex-1 overflow-auto bg-[#0b0e14] p-4 font-mono text-[13px] leading-relaxed",children:[k.jsx("div",{className:"text-slate-500",children:"// "+o.name+" — "+s.length+" functions"}),k.jsxs("div",{className:"mt-2",children:[k.jsx("span",{className:"text-fuchsia-400",children:"import"})," ",k.jsx("span",{className:"text-slate-300",children:"{ runtime }"})," ",k.jsx("span",{className:"text-fuchsia-400",children:"from"})," ",k.jsx("span",{className:"text-emerald-400",children:"'../runtime'"})]}),s.map(i=>k.jsxs("div",{className:"mt-4",children:[k.jsx("span",{className:"text-sky-400",children:"export function"})," ",k.jsx("span",{className:"text-amber-300",children:i.name.replace("()","")}),k.jsxs("span",{className:"text-slate-300",children:["(args) ","{"]}),k.jsxs("div",{className:"pl-6 text-slate-400",children:[k.jsx("span",{className:"text-fuchsia-400",children:"return"})," runtime.exec(",k.jsxs("span",{className:"text-emerald-400",children:["'",i.name,"'"]}),")"]}),k.jsx("span",{className:"text-slate-300",children:"}"})]},i.id)),s.length===0&&k.jsx("div",{className:"mt-4 text-slate-600",children:"// empty file — add a function from the canvas"})]}),k.jsxs("div",{className:"flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-4 py-2 font-mono text-xs",children:[k.jsx("span",{className:"text-emerald-400",children:"➜"}),k.jsx("span",{className:"text-sky-400",children:o.folderPath}),k.jsx("span",{className:"text-slate-300",children:"$ "}),k.jsxs("span",{className:"text-slate-500",children:["vim ",o.name]}),k.jsx("span",{className:"ml-1 inline-block h-3.5 w-2 animate-pulse bg-slate-400"})]})]})})}function Bk(){const e=J(m=>m.editorFileId),t=J(m=>m.projectFiles),n=J(m=>m.closeEditor),r=J(m=>m.setFileEdit),o=J(m=>m.revertFileEdit),s=J(m=>m.fileEdits),i=J(m=>e?kw(m,e):""),[l,a]=S.useState({x:0,y:0}),u=S.useRef(null),c=S.useRef(null);if(S.useEffect(()=>{e&&a({x:Math.max(24,window.innerWidth-470),y:96})},[e]),S.useEffect(()=>{const m=b=>{u.current&&a({x:b.clientX-u.current.dx,y:b.clientY-u.current.dy})},v=()=>u.current=null;return window.addEventListener("mousemove",m),window.addEventListener("mouseup",v),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",v)}},[]),S.useEffect(()=>{const m=v=>v.key==="Escape"&&n();return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[n]),!e)return null;const d=t[e];if(!d)return null;const f=d.path in s,h=m=>{u.current={dx:m.clientX-l.x,dy:m.clientY-l.y}};return k.jsxs("div",{className:"fixed z-50 flex w-[440px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl",style:{left:l.x,top:l.y,height:d.kind==="text"?420:"auto"},children:[k.jsxs("div",{onMouseDown:h,className:"flex cursor-grab items-center gap-2 border-b border-slate-800 bg-slate-900 px-3 py-2 active:cursor-grabbing",children:[k.jsxs("span",{className:"flex gap-1.5",children:[k.jsx("span",{className:"h-3 w-3 rounded-full bg-rose-500"}),k.jsx("span",{className:"h-3 w-3 rounded-full bg-amber-500"}),k.jsx("span",{className:"h-3 w-3 rounded-full bg-emerald-500"})]}),k.jsx("span",{className:"ml-1 truncate font-mono text-xs text-slate-300",children:d.path}),f&&k.jsx("span",{className:"rounded bg-amber-500/20 px-1.5 text-[10px] text-amber-300",children:"● edited"}),k.jsx("span",{className:"ml-auto rounded bg-slate-800 px-1.5 text-[10px] uppercase text-slate-400",children:d.kind}),k.jsx("button",{onClick:n,className:"text-slate-500 hover:text-white",children:"✕"})]}),d.kind==="text"&&k.jsxs(k.Fragment,{children:[k.jsx("textarea",{spellCheck:!1,value:i,onChange:m=>r(d.path,m.target.value),className:"thin-scroll flex-1 resize-none bg-[#0b0e14] p-3 font-mono text-[12.5px] leading-relaxed text-slate-200 outline-none"}),k.jsxs("div",{className:"flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-3 py-1.5 text-[11px]",children:[k.jsxs("span",{className:"text-slate-500",children:[i.split(`
`).length," lines · in-memory only"]}),k.jsx("button",{disabled:!f,onClick:()=>o(d.path),className:"ml-auto rounded px-2 py-1 text-slate-300 enabled:hover:bg-slate-800 disabled:opacity-40",children:"Revert"})]})]}),d.kind==="image"&&k.jsx("div",{className:"flex items-center justify-center bg-[repeating-conic-gradient(#1e2533_0%_25%,#11151f_0%_50%)] bg-[length:24px_24px] p-4",children:k.jsx("img",{src:d.url,alt:d.name,className:"max-h-[320px] max-w-full rounded-lg object-contain"})}),d.kind==="audio"&&k.jsxs("div",{className:"flex flex-col items-center gap-3 p-5",children:[k.jsx("button",{onClick:()=>{var m;return(m=c.current)==null?void 0:m.play()},className:"flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-lg transition hover:bg-indigo-500 active:scale-95",title:"Play",children:"▶"}),k.jsx("audio",{ref:c,src:d.url,controls:!0,className:"w-full"}),k.jsx("span",{className:"text-[11px] text-slate-500",children:d.name})]})]})}function Vk(){return k.jsxs("div",{className:"h-screen w-screen overflow-hidden bg-canvas text-slate-200",children:[k.jsxs(hu,{direction:"horizontal",children:[k.jsx(Io,{defaultSize:30,minSize:18,className:"border-r border-slate-800",children:k.jsxs(hu,{direction:"vertical",children:[k.jsx(Io,{defaultSize:50,minSize:15,children:k.jsx(jw,{})}),k.jsx(gu,{className:"group relative h-[3px] bg-slate-800 transition-colors hover:bg-indigo-500",children:k.jsx("div",{className:"absolute inset-x-0 -top-1 -bottom-1"})}),k.jsx(Io,{defaultSize:50,minSize:15,children:k.jsx(Nw,{})})]})}),k.jsx(gu,{className:"relative w-[3px] bg-slate-800 transition-colors hover:bg-indigo-500",children:k.jsx("div",{className:"absolute inset-y-0 -left-1 -right-1"})}),k.jsx(Io,{defaultSize:70,minSize:40,children:k.jsx(Ok,{})})]}),k.jsx(Hk,{}),k.jsx(Bk,{})]})}function Uk(){return k.jsx(Vk,{})}wa.createRoot(document.getElementById("root")).render(k.jsx(D.StrictMode,{children:k.jsx(Uk,{})}));
