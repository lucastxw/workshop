function ry(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();function gp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yp={exports:{}},Zi={},vp={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),oy=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),iy=Symbol.for("react.strict_mode"),ly=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),uy=Symbol.for("react.context"),cy=Symbol.for("react.forward_ref"),dy=Symbol.for("react.suspense"),fy=Symbol.for("react.memo"),py=Symbol.for("react.lazy"),qc=Symbol.iterator;function hy(e){return e===null||typeof e!="object"?null:(e=qc&&e[qc]||e["@@iterator"],typeof e=="function"?e:null)}var xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wp=Object.assign,bp={};function ro(e,n,t){this.props=e,this.context=n,this.refs=bp,this.updater=t||xp}ro.prototype.isReactComponent={};ro.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ro.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sp(){}Sp.prototype=ro.prototype;function Tu(e,n,t){this.props=e,this.context=n,this.refs=bp,this.updater=t||xp}var Pu=Tu.prototype=new Sp;Pu.constructor=Tu;wp(Pu,ro.prototype);Pu.isPureReactComponent=!0;var Zc=Array.isArray,kp=Object.prototype.hasOwnProperty,Fu={current:null},Ep={key:!0,ref:!0,__self:!0,__source:!0};function Np(e,n,t){var r,o={},s=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(s=""+n.key),n)kp.call(n,r)&&!Ep.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:gs,type:e,key:s,ref:i,props:o,_owner:Fu.current}}function my(e,n){return{$$typeof:gs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Au(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs}function gy(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Jc=/\/+/g;function Cl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?gy(""+e.key):n.toString(36)}function ni(e,n,t,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case gs:case oy:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Cl(i,0):r,Zc(o)?(t="",e!=null&&(t=e.replace(Jc,"$&/")+"/"),ni(o,n,t,"",function(u){return u})):o!=null&&(Au(o)&&(o=my(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Jc,"$&/")+"/")+e)),n.push(o)),1;if(i=0,r=r===""?".":r+":",Zc(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+Cl(s,l);i+=ni(s,n,t,a,o)}else if(a=hy(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+Cl(s,l++),i+=ni(s,n,t,a,o);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Es(e,n,t){if(e==null)return e;var r=[],o=0;return ni(e,r,"","",function(s){return n.call(t,s,o++)}),r}function yy(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ti={transition:null},vy={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ti,ReactCurrentOwner:Fu};function _p(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Es,forEach:function(e,n,t){Es(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Es(e,function(){n++}),n},toArray:function(e){return Es(e,function(n){return n})||[]},only:function(e){if(!Au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=ro;ie.Fragment=sy;ie.Profiler=ly;ie.PureComponent=Tu;ie.StrictMode=iy;ie.Suspense=dy;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;ie.act=_p;ie.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wp({},e.props),o=e.key,s=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,i=Fu.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in n)kp.call(n,a)&&!Ep.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&l!==void 0?l[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:gs,type:e.type,key:o,ref:s,props:r,_owner:i}};ie.createContext=function(e){return e={$$typeof:uy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ay,_context:e},e.Consumer=e};ie.createElement=Np;ie.createFactory=function(e){var n=Np.bind(null,e);return n.type=e,n};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:cy,render:e}};ie.isValidElement=Au;ie.lazy=function(e){return{$$typeof:py,_payload:{_status:-1,_result:e},_init:yy}};ie.memo=function(e,n){return{$$typeof:fy,type:e,compare:n===void 0?null:n}};ie.startTransition=function(e){var n=ti.transition;ti.transition={};try{e()}finally{ti.transition=n}};ie.unstable_act=_p;ie.useCallback=function(e,n){return $e.current.useCallback(e,n)};ie.useContext=function(e){return $e.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};ie.useEffect=function(e,n){return $e.current.useEffect(e,n)};ie.useId=function(){return $e.current.useId()};ie.useImperativeHandle=function(e,n,t){return $e.current.useImperativeHandle(e,n,t)};ie.useInsertionEffect=function(e,n){return $e.current.useInsertionEffect(e,n)};ie.useLayoutEffect=function(e,n){return $e.current.useLayoutEffect(e,n)};ie.useMemo=function(e,n){return $e.current.useMemo(e,n)};ie.useReducer=function(e,n,t){return $e.current.useReducer(e,n,t)};ie.useRef=function(e){return $e.current.useRef(e)};ie.useState=function(e){return $e.current.useState(e)};ie.useSyncExternalStore=function(e,n,t){return $e.current.useSyncExternalStore(e,n,t)};ie.useTransition=function(){return $e.current.useTransition()};ie.version="18.3.1";vp.exports=ie;var S=vp.exports;const R=gp(S),xy=ry({__proto__:null,default:R},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=S,by=Symbol.for("react.element"),Sy=Symbol.for("react.fragment"),ky=Object.prototype.hasOwnProperty,Ey=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ny={key:!0,ref:!0,__self:!0,__source:!0};function zp(e,n,t){var r,o={},s=null,i=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)ky.call(n,r)&&!Ny.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:by,type:e,key:s,ref:i,props:o,_owner:Ey.current}}Zi.Fragment=Sy;Zi.jsx=zp;Zi.jsxs=zp;yp.exports=Zi;var I=yp.exports,wa={},jp={exports:{}},an={},Ip={exports:{}},Cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,k){var T=M.length;M.push(k);e:for(;0<T;){var L=T-1>>>1,B=M[L];if(0<o(B,k))M[L]=k,M[T]=B,T=L;else break e}}function t(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var k=M[0],T=M.pop();if(T!==k){M[0]=T;e:for(var L=0,B=M.length,D=B>>>1;L<D;){var V=2*(L+1)-1,G=M[V],Q=V+1,K=M[Q];if(0>o(G,T))Q<B&&0>o(K,G)?(M[L]=K,M[Q]=T,L=Q):(M[L]=G,M[V]=T,L=V);else if(Q<B&&0>o(K,T))M[L]=K,M[Q]=T,L=Q;else break e}}return k}function o(M,k){var T=M.sortIndex-k.sortIndex;return T!==0?T:M.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var a=[],u=[],c=1,d=null,f=3,m=!1,v=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var k=t(u);k!==null;){if(k.callback===null)r(u);else if(k.startTime<=M)r(u),k.sortIndex=k.expirationTime,n(a,k);else break;k=t(u)}}function x(M){if(g=!1,y(M),!v)if(t(a)!==null)v=!0,j(_);else{var k=t(u);k!==null&&H(x,k.startTime-M)}}function _(M,k){v=!1,g&&(g=!1,p(P),P=-1),m=!0;var T=f;try{for(y(k),d=t(a);d!==null&&(!(d.expirationTime>k)||M&&!O());){var L=d.callback;if(typeof L=="function"){d.callback=null,f=d.priorityLevel;var B=L(d.expirationTime<=k);k=e.unstable_now(),typeof B=="function"?d.callback=B:d===t(a)&&r(a),y(k)}else r(a);d=t(a)}if(d!==null)var D=!0;else{var V=t(u);V!==null&&H(x,V.startTime-k),D=!1}return D}finally{d=null,f=T,m=!1}}var z=!1,N=null,P=-1,F=5,A=-1;function O(){return!(e.unstable_now()-A<F)}function W(){if(N!==null){var M=e.unstable_now();A=M;var k=!0;try{k=N(!0,M)}finally{k?$():(z=!1,N=null)}}else z=!1}var $;if(typeof h=="function")$=function(){h(W)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,C=w.port2;w.port1.onmessage=W,$=function(){C.postMessage(null)}}else $=function(){b(W,0)};function j(M){N=M,z||(z=!0,$())}function H(M,k){P=b(function(){M(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,j(_))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var T=f;f=k;try{return M()}finally{f=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,k){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var T=f;f=M;try{return k()}finally{f=T}},e.unstable_scheduleCallback=function(M,k,T){var L=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?L+T:L):T=L,M){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=T+B,M={id:c++,callback:k,priorityLevel:M,startTime:T,expirationTime:B,sortIndex:-1},T>L?(M.sortIndex=T,n(u,M),t(a)===null&&M===t(u)&&(g?(p(P),P=-1):g=!0,H(x,T-L))):(M.sortIndex=B,n(a,M),v||m||(v=!0,j(_))),M},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(M){var k=f;return function(){var T=f;f=k;try{return M.apply(this,arguments)}finally{f=T}}}})(Cp);Ip.exports=Cp;var _y=Ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=S,sn=_y;function Y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mp=new Set,Vo={};function ur(e,n){Kr(e,n),Kr(e+"Capture",n)}function Kr(e,n){for(Vo[e]=n,e=0;e<n.length;e++)Mp.add(n[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ba=Object.prototype.hasOwnProperty,jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ed={},nd={};function Iy(e){return ba.call(nd,e)?!0:ba.call(ed,e)?!1:jy.test(e)?nd[e]=!0:(ed[e]=!0,!1)}function Cy(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function My(e,n,t,r){if(n===null||typeof n>"u"||Cy(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ke(e,n,t,r,o,s,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=i}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Re[n]=new Ke(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ru=/[\-:]([a-z])/g;function Du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ru,Du);Re[n]=new Ke(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ru,Du);Re[n]=new Ke(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ru,Du);Re[n]=new Ke(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lu(e,n,t,r){var o=Re.hasOwnProperty(n)?Re[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(My(n,t,o,r)&&(t=null),r||o===null?Iy(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var it=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ns=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),Sa=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Bu=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Fp=Symbol.for("react.offscreen"),td=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=td&&e[td]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Ml;function ko(e){if(Ml===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ml=n&&n[1]||""}return`
`+Ml+e}var Tl=!1;function Pl(e,n){if(!e||Tl)return"";Tl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,l=s.length-1;1<=i&&0<=l&&o[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==s[l]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=l);break}}}finally{Tl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ko(e):""}function Ty(e){switch(e.tag){case 5:return ko(e.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function Na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case Sr:return"Portal";case Sa:return"Profiler";case Ou:return"StrictMode";case ka:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pp:return(e.displayName||"Context")+".Consumer";case Tp:return(e._context.displayName||"Context")+".Provider";case Hu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bu:return n=e.displayName||null,n!==null?n:Na(e.type)||"Memo";case ct:n=e._payload,e=e._init;try{return Na(e(n))}catch{}}return null}function Py(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Na(n);case 8:return n===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ap(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fy(e){var n=Ap(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _s(e){e._valueTracker||(e._valueTracker=Fy(e))}function Rp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ap(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _a(e,n){var t=n.checked;return xe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function rd(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=It(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Dp(e,n){n=n.checked,n!=null&&Lu(e,"checked",n,!1)}function za(e,n){Dp(e,n);var t=It(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ja(e,n.type,t):n.hasOwnProperty("defaultValue")&&ja(e,n.type,It(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function od(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ja(e,n,t){(n!=="number"||vi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Eo=Array.isArray;function Rr(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+It(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Ia(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(Y(91));return xe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(Y(92));if(Eo(t)){if(1<t.length)throw Error(Y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:It(t)}}function Lp(e,n){var t=It(n.value),r=It(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function id(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Op(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Op(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zs,Hp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=zs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Uo(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ay=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(e){Ay.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Po[n]=Po[e]})});function Bp(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Po.hasOwnProperty(e)&&Po[e]?(""+n).trim():n+"px"}function Vp(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Bp(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Ry=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ma(e,n){if(n){if(Ry[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(Y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(Y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(Y(62))}}function Ta(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Dr=null,Lr=null;function ld(e){if(e=xs(e)){if(typeof Fa!="function")throw Error(Y(280));var n=e.stateNode;n&&(n=rl(n),Fa(e.stateNode,e.type,n))}}function Up(e){Dr?Lr?Lr.push(e):Lr=[e]:Dr=e}function Wp(){if(Dr){var e=Dr,n=Lr;if(Lr=Dr=null,ld(e),n)for(e=0;e<n.length;e++)ld(n[e])}}function $p(e,n){return e(n)}function Kp(){}var Fl=!1;function Gp(e,n,t){if(Fl)return e(n,t);Fl=!0;try{return $p(e,n,t)}finally{Fl=!1,(Dr!==null||Lr!==null)&&(Kp(),Wp())}}function Wo(e,n){var t=e.stateNode;if(t===null)return null;var r=rl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(Y(231,n,typeof t));return t}var Aa=!1;if(et)try{var co={};Object.defineProperty(co,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Aa=!1}function Dy(e,n,t,r,o,s,i,l,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var Fo=!1,xi=null,wi=!1,Ra=null,Ly={onError:function(e){Fo=!0,xi=e}};function Oy(e,n,t,r,o,s,i,l,a){Fo=!1,xi=null,Dy.apply(Ly,arguments)}function Hy(e,n,t,r,o,s,i,l,a){if(Oy.apply(this,arguments),Fo){if(Fo){var u=xi;Fo=!1,xi=null}else throw Error(Y(198));wi||(wi=!0,Ra=u)}}function cr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Qp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ad(e){if(cr(e)!==e)throw Error(Y(188))}function By(e){var n=e.alternate;if(!n){if(n=cr(e),n===null)throw Error(Y(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return ad(o),e;if(s===r)return ad(o),n;s=s.sibling}throw Error(Y(188))}if(t.return!==r.return)t=o,r=s;else{for(var i=!1,l=o.child;l;){if(l===t){i=!0,t=o,r=s;break}if(l===r){i=!0,r=o,t=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===t){i=!0,t=s,r=o;break}if(l===r){i=!0,r=s,t=o;break}l=l.sibling}if(!i)throw Error(Y(189))}}if(t.alternate!==r)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?e:n}function Yp(e){return e=By(e),e!==null?Xp(e):null}function Xp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Xp(e);if(n!==null)return n;e=e.sibling}return null}var qp=sn.unstable_scheduleCallback,ud=sn.unstable_cancelCallback,Vy=sn.unstable_shouldYield,Uy=sn.unstable_requestPaint,ke=sn.unstable_now,Wy=sn.unstable_getCurrentPriorityLevel,Uu=sn.unstable_ImmediatePriority,Zp=sn.unstable_UserBlockingPriority,bi=sn.unstable_NormalPriority,$y=sn.unstable_LowPriority,Jp=sn.unstable_IdlePriority,Ji=null,Dn=null;function Ky(e){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Yy,Gy=Math.log,Qy=Math.LN2;function Yy(e){return e>>>=0,e===0?32:31-(Gy(e)/Qy|0)|0}var js=64,Is=4194304;function No(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Si(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~o;l!==0?r=No(l):(s&=i,s!==0&&(r=No(s)))}else i=t&~o,i!==0?r=No(i):s!==0&&(r=No(s));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,s=n&-n,o>=s||o===16&&(s&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-jn(n),o=1<<t,r|=e[t],n&=~o;return r}function Xy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qy(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-jn(s),l=1<<i,a=o[i];a===-1?(!(l&t)||l&r)&&(o[i]=Xy(l,n)):a<=n&&(e.expiredLanes|=l),s&=~l}}function Da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function eh(){var e=js;return js<<=1,!(js&4194240)&&(js=64),e}function Al(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ys(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-jn(n),e[n]=t}function Zy(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-jn(t),s=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~s}}function Wu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-jn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var ce=0;function nh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var th,$u,rh,oh,sh,La=!1,Cs=[],wt=null,bt=null,St=null,$o=new Map,Ko=new Map,ht=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(e,n){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":$o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function fo(e,n,t,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},n!==null&&(n=xs(n),n!==null&&$u(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function ev(e,n,t,r,o){switch(n){case"focusin":return wt=fo(wt,e,n,t,r,o),!0;case"dragenter":return bt=fo(bt,e,n,t,r,o),!0;case"mouseover":return St=fo(St,e,n,t,r,o),!0;case"pointerover":var s=o.pointerId;return $o.set(s,fo($o.get(s)||null,e,n,t,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Ko.set(s,fo(Ko.get(s)||null,e,n,t,r,o)),!0}return!1}function ih(e){var n=$t(e.target);if(n!==null){var t=cr(n);if(t!==null){if(n=t.tag,n===13){if(n=Qp(t),n!==null){e.blockedOn=n,sh(e.priority,function(){rh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Oa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Pa=r,t.target.dispatchEvent(r),Pa=null}else return n=xs(t),n!==null&&$u(n),e.blockedOn=t,!1;n.shift()}return!0}function dd(e,n,t){ri(e)&&t.delete(n)}function nv(){La=!1,wt!==null&&ri(wt)&&(wt=null),bt!==null&&ri(bt)&&(bt=null),St!==null&&ri(St)&&(St=null),$o.forEach(dd),Ko.forEach(dd)}function po(e,n){e.blockedOn===n&&(e.blockedOn=null,La||(La=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,nv)))}function Go(e){function n(o){return po(o,e)}if(0<Cs.length){po(Cs[0],e);for(var t=1;t<Cs.length;t++){var r=Cs[t];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&po(wt,e),bt!==null&&po(bt,e),St!==null&&po(St,e),$o.forEach(n),Ko.forEach(n),t=0;t<ht.length;t++)r=ht[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&(t=ht[0],t.blockedOn===null);)ih(t),t.blockedOn===null&&ht.shift()}var Or=it.ReactCurrentBatchConfig,ki=!0;function tv(e,n,t,r){var o=ce,s=Or.transition;Or.transition=null;try{ce=1,Ku(e,n,t,r)}finally{ce=o,Or.transition=s}}function rv(e,n,t,r){var o=ce,s=Or.transition;Or.transition=null;try{ce=4,Ku(e,n,t,r)}finally{ce=o,Or.transition=s}}function Ku(e,n,t,r){if(ki){var o=Oa(e,n,t,r);if(o===null)$l(e,n,r,Ei,t),cd(e,r);else if(ev(o,e,n,t,r))r.stopPropagation();else if(cd(e,r),n&4&&-1<Jy.indexOf(e)){for(;o!==null;){var s=xs(o);if(s!==null&&th(s),s=Oa(e,n,t,r),s===null&&$l(e,n,r,Ei,t),s===o)break;o=s}o!==null&&r.stopPropagation()}else $l(e,n,r,null,t)}}var Ei=null;function Oa(e,n,t,r){if(Ei=null,e=Vu(r),e=$t(e),e!==null)if(n=cr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Qp(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ei=e,null}function lh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wy()){case Uu:return 1;case Zp:return 4;case bi:case $y:return 16;case Jp:return 536870912;default:return 16}default:return 16}}var vt=null,Gu=null,oi=null;function ah(){if(oi)return oi;var e,n=Gu,t=n.length,r,o="value"in vt?vt.value:vt.textContent,s=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[s-r];r++);return oi=o.slice(e,1<r?1-r:void 0)}function si(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ms(){return!0}function fd(){return!1}function un(e){function n(t,r,o,s,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ms:fd,this.isPropagationStopped=fd,this}return xe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ms)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ms)},persist:function(){},isPersistent:Ms}),n}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=un(oo),vs=xe({},oo,{view:0,detail:0}),ov=un(vs),Rl,Dl,ho,el=xe({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Rl=e.screenX-ho.screenX,Dl=e.screenY-ho.screenY):Dl=Rl=0,ho=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),pd=un(el),sv=xe({},el,{dataTransfer:0}),iv=un(sv),lv=xe({},vs,{relatedTarget:0}),Ll=un(lv),av=xe({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=un(av),cv=xe({},oo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dv=un(cv),fv=xe({},oo,{data:0}),hd=un(fv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mv[e])?!!n[e]:!1}function Yu(){return gv}var yv=xe({},vs,{key:function(e){if(e.key){var n=pv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vv=un(yv),xv=xe({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=un(xv),wv=xe({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),bv=un(wv),Sv=xe({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=un(Sv),Ev=xe({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=un(Ev),_v=[9,13,27,32],Xu=et&&"CompositionEvent"in window,Ao=null;et&&"documentMode"in document&&(Ao=document.documentMode);var zv=et&&"TextEvent"in window&&!Ao,uh=et&&(!Xu||Ao&&8<Ao&&11>=Ao),gd=" ",yd=!1;function ch(e,n){switch(e){case"keyup":return _v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function jv(e,n){switch(e){case"compositionend":return dh(n);case"keypress":return n.which!==32?null:(yd=!0,gd);case"textInput":return e=n.data,e===gd&&yd?null:e;default:return null}}function Iv(e,n){if(Er)return e==="compositionend"||!Xu&&ch(e,n)?(e=ah(),oi=Gu=vt=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return uh&&n.locale!=="ko"?null:n.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cv[e.type]:n==="textarea"}function fh(e,n,t,r){Up(r),n=Ni(n,"onChange"),0<n.length&&(t=new Qu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ro=null,Qo=null;function Mv(e){kh(e,0)}function nl(e){var n=zr(e);if(Rp(n))return e}function Tv(e,n){if(e==="change")return n}var ph=!1;if(et){var Ol;if(et){var Hl="oninput"in document;if(!Hl){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),Hl=typeof xd.oninput=="function"}Ol=Hl}else Ol=!1;ph=Ol&&(!document.documentMode||9<document.documentMode)}function wd(){Ro&&(Ro.detachEvent("onpropertychange",hh),Qo=Ro=null)}function hh(e){if(e.propertyName==="value"&&nl(Qo)){var n=[];fh(n,Qo,e,Vu(e)),Gp(Mv,n)}}function Pv(e,n,t){e==="focusin"?(wd(),Ro=n,Qo=t,Ro.attachEvent("onpropertychange",hh)):e==="focusout"&&wd()}function Fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Qo)}function Av(e,n){if(e==="click")return nl(n)}function Rv(e,n){if(e==="input"||e==="change")return nl(n)}function Dv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mn=typeof Object.is=="function"?Object.is:Dv;function Yo(e,n){if(Mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!ba.call(n,o)||!Mn(e[o],n[o]))return!1}return!0}function bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sd(e,n){var t=bd(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bd(t)}}function mh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?mh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gh(){for(var e=window,n=vi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=vi(e.document)}return n}function qu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Lv(e){var n=gh(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&mh(t.ownerDocument.documentElement,t)){if(r!==null&&qu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Sd(t,s);var i=Sd(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ov=et&&"documentMode"in document&&11>=document.documentMode,Nr=null,Ha=null,Do=null,Ba=!1;function kd(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ba||Nr==null||Nr!==vi(r)||(r=Nr,"selectionStart"in r&&qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&Yo(Do,r)||(Do=r,r=Ni(Ha,"onSelect"),0<r.length&&(n=new Qu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Nr)))}function Ts(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var _r={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionend:Ts("Transition","TransitionEnd")},Bl={},yh={};et&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function tl(e){if(Bl[e])return Bl[e];if(!_r[e])return e;var n=_r[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in yh)return Bl[e]=n[t];return e}var vh=tl("animationend"),xh=tl("animationiteration"),wh=tl("animationstart"),bh=tl("transitionend"),Sh=new Map,Ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,n){Sh.set(e,n),ur(n,[e])}for(var Vl=0;Vl<Ed.length;Vl++){var Ul=Ed[Vl],Hv=Ul.toLowerCase(),Bv=Ul[0].toUpperCase()+Ul.slice(1);Mt(Hv,"on"+Bv)}Mt(vh,"onAnimationEnd");Mt(xh,"onAnimationIteration");Mt(wh,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(bh,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Nd(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hy(r,n,void 0,e),e.currentTarget=null}function kh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var i=r.length-1;0<=i;i--){var l=r[i],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&o.isPropagationStopped())break e;Nd(o,l,u),s=a}else for(i=0;i<r.length;i++){if(l=r[i],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&o.isPropagationStopped())break e;Nd(o,l,u),s=a}}}if(wi)throw e=Ra,wi=!1,Ra=null,e}function he(e,n){var t=n[Ka];t===void 0&&(t=n[Ka]=new Set);var r=e+"__bubble";t.has(r)||(Eh(n,e,2,!1),t.add(r))}function Wl(e,n,t){var r=0;n&&(r|=4),Eh(t,e,r,n)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[Ps]){e[Ps]=!0,Mp.forEach(function(t){t!=="selectionchange"&&(Vv.has(t)||Wl(t,!1,e),Wl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ps]||(n[Ps]=!0,Wl("selectionchange",!1,n))}}function Eh(e,n,t,r){switch(lh(n)){case 1:var o=tv;break;case 4:o=rv;break;default:o=Ku}t=o.bind(null,n,t,e),o=void 0,!Aa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function $l(e,n,t,r,o){var s=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;l!==null;){if(i=$t(l),i===null)return;if(a=i.tag,a===5||a===6){r=s=i;continue e}l=l.parentNode}}r=r.return}Gp(function(){var u=s,c=Vu(t),d=[];e:{var f=Sh.get(e);if(f!==void 0){var m=Qu,v=e;switch(e){case"keypress":if(si(t)===0)break e;case"keydown":case"keyup":m=vv;break;case"focusin":v="focus",m=Ll;break;case"focusout":v="blur",m=Ll;break;case"beforeblur":case"afterblur":m=Ll;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=bv;break;case vh:case xh:case wh:m=uv;break;case bh:m=kv;break;case"scroll":m=ov;break;case"wheel":m=Nv;break;case"copy":case"cut":case"paste":m=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=md}var g=(n&4)!==0,b=!g&&e==="scroll",p=g?f!==null?f+"Capture":null:f;g=[];for(var h=u,y;h!==null;){y=h;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,p!==null&&(x=Wo(h,p),x!=null&&g.push(qo(h,x,y)))),b)break;h=h.return}0<g.length&&(f=new m(f,v,null,t,c),d.push({event:f,listeners:g}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&t!==Pa&&(v=t.relatedTarget||t.fromElement)&&($t(v)||v[nt]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=t.relatedTarget||t.toElement,m=u,v=v?$t(v):null,v!==null&&(b=cr(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(g=pd,x="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(g=md,x="onPointerLeave",p="onPointerEnter",h="pointer"),b=m==null?f:zr(m),y=v==null?f:zr(v),f=new g(x,h+"leave",m,t,c),f.target=b,f.relatedTarget=y,x=null,$t(c)===u&&(g=new g(p,h+"enter",v,t,c),g.target=y,g.relatedTarget=b,x=g),b=x,m&&v)n:{for(g=m,p=v,h=0,y=g;y;y=hr(y))h++;for(y=0,x=p;x;x=hr(x))y++;for(;0<h-y;)g=hr(g),h--;for(;0<y-h;)p=hr(p),y--;for(;h--;){if(g===p||p!==null&&g===p.alternate)break n;g=hr(g),p=hr(p)}g=null}else g=null;m!==null&&_d(d,f,m,g,!1),v!==null&&b!==null&&_d(d,b,v,g,!0)}}e:{if(f=u?zr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var _=Tv;else if(vd(f))if(ph)_=Rv;else{_=Fv;var z=Pv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=Av);if(_&&(_=_(e,u))){fh(d,_,t,c);break e}z&&z(e,f,u),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&ja(f,"number",f.value)}switch(z=u?zr(u):window,e){case"focusin":(vd(z)||z.contentEditable==="true")&&(Nr=z,Ha=u,Do=null);break;case"focusout":Do=Ha=Nr=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,kd(d,t,c);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":kd(d,t,c)}var N;if(Xu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Er?ch(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(uh&&t.locale!=="ko"&&(Er||P!=="onCompositionStart"?P==="onCompositionEnd"&&Er&&(N=ah()):(vt=c,Gu="value"in vt?vt.value:vt.textContent,Er=!0)),z=Ni(u,P),0<z.length&&(P=new hd(P,e,null,t,c),d.push({event:P,listeners:z}),N?P.data=N:(N=dh(t),N!==null&&(P.data=N)))),(N=zv?jv(e,t):Iv(e,t))&&(u=Ni(u,"onBeforeInput"),0<u.length&&(c=new hd("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=N))}kh(d,n)})}function qo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ni(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Wo(e,t),s!=null&&r.unshift(qo(e,s,o)),s=Wo(e,n),s!=null&&r.push(qo(e,s,o))),e=e.return}return r}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _d(e,n,t,r,o){for(var s=n._reactName,i=[];t!==null&&t!==r;){var l=t,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,o?(a=Wo(t,s),a!=null&&i.unshift(qo(t,a,l))):o||(a=Wo(t,s),a!=null&&i.push(qo(t,a,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Uv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(Uv,`
`).replace(Wv,"")}function Fs(e,n,t){if(n=zd(n),zd(e)!==n&&t)throw Error(Y(425))}function _i(){}var Va=null,Ua=null;function Wa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(Gv)}:$a;function Gv(e){setTimeout(function(){throw e})}function Kl(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Go(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Go(n)}function kt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Id(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var so=Math.random().toString(36).slice(2),Rn="__reactFiber$"+so,Zo="__reactProps$"+so,nt="__reactContainer$"+so,Ka="__reactEvents$"+so,Qv="__reactListeners$"+so,Yv="__reactHandles$"+so;function $t(e){var n=e[Rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nt]||t[Rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Id(e);e!==null;){if(t=e[Rn])return t;e=Id(e)}return n}e=t,t=e.parentNode}return null}function xs(e){return e=e[Rn]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function rl(e){return e[Zo]||null}var Ga=[],jr=-1;function Tt(e){return{current:e}}function me(e){0>jr||(e.current=Ga[jr],Ga[jr]=null,jr--)}function fe(e,n){jr++,Ga[jr]=e.current,e.current=n}var Ct={},Ve=Tt(Ct),qe=Tt(!1),nr=Ct;function Gr(e,n){var t=e.type.contextTypes;if(!t)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in t)o[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ze(e){return e=e.childContextTypes,e!=null}function zi(){me(qe),me(Ve)}function Cd(e,n,t){if(Ve.current!==Ct)throw Error(Y(168));fe(Ve,n),fe(qe,t)}function Nh(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(Y(108,Py(e)||"Unknown",o));return xe({},t,r)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,nr=Ve.current,fe(Ve,e),fe(qe,qe.current),!0}function Md(e,n,t){var r=e.stateNode;if(!r)throw Error(Y(169));t?(e=Nh(e,n,nr),r.__reactInternalMemoizedMergedChildContext=e,me(qe),me(Ve),fe(Ve,e)):me(qe),fe(qe,t)}var Gn=null,ol=!1,Gl=!1;function _h(e){Gn===null?Gn=[e]:Gn.push(e)}function Xv(e){ol=!0,_h(e)}function Pt(){if(!Gl&&Gn!==null){Gl=!0;var e=0,n=ce;try{var t=Gn;for(ce=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Gn=null,ol=!1}catch(o){throw Gn!==null&&(Gn=Gn.slice(e+1)),qp(Uu,Pt),o}finally{ce=n,Gl=!1}}return null}var Ir=[],Cr=0,Ii=null,Ci=0,cn=[],dn=0,tr=null,Yn=1,Xn="";function Bt(e,n){Ir[Cr++]=Ci,Ir[Cr++]=Ii,Ii=e,Ci=n}function zh(e,n,t){cn[dn++]=Yn,cn[dn++]=Xn,cn[dn++]=tr,tr=e;var r=Yn;e=Xn;var o=32-jn(r)-1;r&=~(1<<o),t+=1;var s=32-jn(n)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Yn=1<<32-jn(n)+o|t<<o|r,Xn=s+e}else Yn=1<<s|t<<o|r,Xn=e}function Zu(e){e.return!==null&&(Bt(e,1),zh(e,1,0))}function Ju(e){for(;e===Ii;)Ii=Ir[--Cr],Ir[Cr]=null,Ci=Ir[--Cr],Ir[Cr]=null;for(;e===tr;)tr=cn[--dn],cn[dn]=null,Xn=cn[--dn],cn[dn]=null,Yn=cn[--dn],cn[dn]=null}var on=null,rn=null,ge=!1,_n=null;function jh(e,n){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Td(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,on=e,rn=kt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,on=e,rn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=tr!==null?{id:Yn,overflow:Xn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,on=e,rn=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(ge){var n=rn;if(n){var t=n;if(!Td(e,n)){if(Qa(e))throw Error(Y(418));n=kt(t.nextSibling);var r=on;n&&Td(e,n)?jh(r,t):(e.flags=e.flags&-4097|2,ge=!1,on=e)}}else{if(Qa(e))throw Error(Y(418));e.flags=e.flags&-4097|2,ge=!1,on=e}}}function Pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function As(e){if(e!==on)return!1;if(!ge)return Pd(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wa(e.type,e.memoizedProps)),n&&(n=rn)){if(Qa(e))throw Ih(),Error(Y(418));for(;n;)jh(e,n),n=kt(n.nextSibling)}if(Pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){rn=kt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}rn=null}}else rn=on?kt(e.stateNode.nextSibling):null;return!0}function Ih(){for(var e=rn;e;)e=kt(e.nextSibling)}function Qr(){rn=on=null,ge=!1}function ec(e){_n===null?_n=[e]:_n.push(e)}var qv=it.ReactCurrentBatchConfig;function mo(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var r=t.stateNode}if(!r)throw Error(Y(147,e));var o=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(i){var l=o.refs;i===null?delete l[s]:l[s]=i},n._stringRef=s,n)}if(typeof e!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,e))}return e}function Rs(e,n){throw e=Object.prototype.toString.call(n),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Fd(e){var n=e._init;return n(e._payload)}function Ch(e){function n(p,h){if(e){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function t(p,h){if(!e)return null;for(;h!==null;)n(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function o(p,h){return p=zt(p,h),p.index=0,p.sibling=null,p}function s(p,h,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,y,x){return h===null||h.tag!==6?(h=ea(y,p.mode,x),h.return=p,h):(h=o(h,y),h.return=p,h)}function a(p,h,y,x){var _=y.type;return _===kr?c(p,h,y.props.children,x,y.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ct&&Fd(_)===h.type)?(x=o(h,y.props),x.ref=mo(p,h,y),x.return=p,x):(x=fi(y.type,y.key,y.props,null,p.mode,x),x.ref=mo(p,h,y),x.return=p,x)}function u(p,h,y,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=na(y,p.mode,x),h.return=p,h):(h=o(h,y.children||[]),h.return=p,h)}function c(p,h,y,x,_){return h===null||h.tag!==7?(h=qt(y,p.mode,x,_),h.return=p,h):(h=o(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ea(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ns:return y=fi(h.type,h.key,h.props,null,p.mode,y),y.ref=mo(p,null,h),y.return=p,y;case Sr:return h=na(h,p.mode,y),h.return=p,h;case ct:var x=h._init;return d(p,x(h._payload),y)}if(Eo(h)||uo(h))return h=qt(h,p.mode,y,null),h.return=p,h;Rs(p,h)}return null}function f(p,h,y,x){var _=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:l(p,h,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ns:return y.key===_?a(p,h,y,x):null;case Sr:return y.key===_?u(p,h,y,x):null;case ct:return _=y._init,f(p,h,_(y._payload),x)}if(Eo(y)||uo(y))return _!==null?null:c(p,h,y,x,null);Rs(p,y)}return null}function m(p,h,y,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(y)||null,l(h,p,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ns:return p=p.get(x.key===null?y:x.key)||null,a(h,p,x,_);case Sr:return p=p.get(x.key===null?y:x.key)||null,u(h,p,x,_);case ct:var z=x._init;return m(p,h,y,z(x._payload),_)}if(Eo(x)||uo(x))return p=p.get(y)||null,c(h,p,x,_,null);Rs(h,x)}return null}function v(p,h,y,x){for(var _=null,z=null,N=h,P=h=0,F=null;N!==null&&P<y.length;P++){N.index>P?(F=N,N=null):F=N.sibling;var A=f(p,N,y[P],x);if(A===null){N===null&&(N=F);break}e&&N&&A.alternate===null&&n(p,N),h=s(A,h,P),z===null?_=A:z.sibling=A,z=A,N=F}if(P===y.length)return t(p,N),ge&&Bt(p,P),_;if(N===null){for(;P<y.length;P++)N=d(p,y[P],x),N!==null&&(h=s(N,h,P),z===null?_=N:z.sibling=N,z=N);return ge&&Bt(p,P),_}for(N=r(p,N);P<y.length;P++)F=m(N,p,P,y[P],x),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?P:F.key),h=s(F,h,P),z===null?_=F:z.sibling=F,z=F);return e&&N.forEach(function(O){return n(p,O)}),ge&&Bt(p,P),_}function g(p,h,y,x){var _=uo(y);if(typeof _!="function")throw Error(Y(150));if(y=_.call(y),y==null)throw Error(Y(151));for(var z=_=null,N=h,P=h=0,F=null,A=y.next();N!==null&&!A.done;P++,A=y.next()){N.index>P?(F=N,N=null):F=N.sibling;var O=f(p,N,A.value,x);if(O===null){N===null&&(N=F);break}e&&N&&O.alternate===null&&n(p,N),h=s(O,h,P),z===null?_=O:z.sibling=O,z=O,N=F}if(A.done)return t(p,N),ge&&Bt(p,P),_;if(N===null){for(;!A.done;P++,A=y.next())A=d(p,A.value,x),A!==null&&(h=s(A,h,P),z===null?_=A:z.sibling=A,z=A);return ge&&Bt(p,P),_}for(N=r(p,N);!A.done;P++,A=y.next())A=m(N,p,P,A.value,x),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?P:A.key),h=s(A,h,P),z===null?_=A:z.sibling=A,z=A);return e&&N.forEach(function(W){return n(p,W)}),ge&&Bt(p,P),_}function b(p,h,y,x){if(typeof y=="object"&&y!==null&&y.type===kr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ns:e:{for(var _=y.key,z=h;z!==null;){if(z.key===_){if(_=y.type,_===kr){if(z.tag===7){t(p,z.sibling),h=o(z,y.props.children),h.return=p,p=h;break e}}else if(z.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ct&&Fd(_)===z.type){t(p,z.sibling),h=o(z,y.props),h.ref=mo(p,z,y),h.return=p,p=h;break e}t(p,z);break}else n(p,z);z=z.sibling}y.type===kr?(h=qt(y.props.children,p.mode,x,y.key),h.return=p,p=h):(x=fi(y.type,y.key,y.props,null,p.mode,x),x.ref=mo(p,h,y),x.return=p,p=x)}return i(p);case Sr:e:{for(z=y.key;h!==null;){if(h.key===z)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){t(p,h.sibling),h=o(h,y.children||[]),h.return=p,p=h;break e}else{t(p,h);break}else n(p,h);h=h.sibling}h=na(y,p.mode,x),h.return=p,p=h}return i(p);case ct:return z=y._init,b(p,h,z(y._payload),x)}if(Eo(y))return v(p,h,y,x);if(uo(y))return g(p,h,y,x);Rs(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(t(p,h.sibling),h=o(h,y),h.return=p,p=h):(t(p,h),h=ea(y,p.mode,x),h.return=p,p=h),i(p)):t(p,h)}return b}var Yr=Ch(!0),Mh=Ch(!1),Mi=Tt(null),Ti=null,Mr=null,nc=null;function tc(){nc=Mr=Ti=null}function rc(e){var n=Mi.current;me(Mi),e._currentValue=n}function Xa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Hr(e,n){Ti=e,nc=Mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ye=!0),e.firstContext=null)}function yn(e){var n=e._currentValue;if(nc!==e)if(e={context:e,memoizedValue:n,next:null},Mr===null){if(Ti===null)throw Error(Y(308));Mr=e,Ti.dependencies={lanes:0,firstContext:e}}else Mr=Mr.next=e;return n}var Kt=null;function oc(e){Kt===null?Kt=[e]:Kt.push(e)}function Th(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,oc(n)):(t.next=o.next,o.next=t),n.interleaved=t,tt(e,r)}function tt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dt=!1;function sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Et(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,tt(e,t)}return o=r.interleaved,o===null?(n.next=n,oc(r)):(n.next=o.next,o.next=n),r.interleaved=n,tt(e,t)}function ii(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wu(e,t)}}function Ad(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?o=s=i:s=s.next=i,t=t.next}while(t!==null);s===null?o=s=n:s=s.next=n}else o=s=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Pi(e,n,t,r){var o=e.updateQueue;dt=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,i===null?s=u:i.next=u,i=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==i&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=o.baseState;i=0,c=u=a=null,l=s;do{var f=l.lane,m=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,g=l;switch(f=n,m=t,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=xe({},d,f);break e;case 2:dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=d):c=c.next=m,i|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else s===null&&(o.shared.lanes=0);or|=i,e.lanes=i,e.memoizedState=d}}function Rd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(Y(191,o));o.call(r)}}}var ws={},Ln=Tt(ws),Jo=Tt(ws),es=Tt(ws);function Gt(e){if(e===ws)throw Error(Y(174));return e}function ic(e,n){switch(fe(es,n),fe(Jo,e),fe(Ln,ws),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ca(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ca(n,e)}me(Ln),fe(Ln,n)}function Xr(){me(Ln),me(Jo),me(es)}function Fh(e){Gt(es.current);var n=Gt(Ln.current),t=Ca(n,e.type);n!==t&&(fe(Jo,e),fe(Ln,t))}function lc(e){Jo.current===e&&(me(Ln),me(Jo))}var ye=Tt(0);function Fi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ql=[];function ac(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var li=it.ReactCurrentDispatcher,Yl=it.ReactCurrentBatchConfig,rr=0,ve=null,Ne=null,Ce=null,Ai=!1,Lo=!1,ns=0,Zv=0;function Oe(){throw Error(Y(321))}function uc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Mn(e[t],n[t]))return!1;return!0}function cc(e,n,t,r,o,s){if(rr=s,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,li.current=e===null||e.memoizedState===null?t1:r1,e=t(r,o),Lo){s=0;do{if(Lo=!1,ns=0,25<=s)throw Error(Y(301));s+=1,Ce=Ne=null,n.updateQueue=null,li.current=o1,e=t(r,o)}while(Lo)}if(li.current=Ri,n=Ne!==null&&Ne.next!==null,rr=0,Ce=Ne=ve=null,Ai=!1,n)throw Error(Y(300));return e}function dc(){var e=ns!==0;return ns=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ve.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function vn(){if(Ne===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Ce===null?ve.memoizedState:Ce.next;if(n!==null)Ce=n,Ne=e;else{if(e===null)throw Error(Y(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ce===null?ve.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function ts(e,n){return typeof n=="function"?n(e):n}function Xl(e){var n=vn(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=Ne,o=r.baseQueue,s=t.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,t.pending=null}if(o!==null){s=o.next,r=r.baseState;var l=i=null,a=null,u=s;do{var c=u.lane;if((rr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,i=r):a=a.next=d,ve.lanes|=c,or|=c}u=u.next}while(u!==null&&u!==s);a===null?i=r:a.next=l,Mn(r,n.memoizedState)||(Ye=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do s=o.lane,ve.lanes|=s,or|=s,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ql(e){var n=vn(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,s=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);Mn(s,n.memoizedState)||(Ye=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function Ah(){}function Rh(e,n){var t=ve,r=vn(),o=n(),s=!Mn(r.memoizedState,o);if(s&&(r.memoizedState=o,Ye=!0),r=r.queue,fc(Oh.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||Ce!==null&&Ce.memoizedState.tag&1){if(t.flags|=2048,rs(9,Lh.bind(null,t,r,o,n),void 0,null),Me===null)throw Error(Y(349));rr&30||Dh(t,n,o)}return o}function Dh(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Lh(e,n,t,r){n.value=t,n.getSnapshot=r,Hh(n)&&Bh(e)}function Oh(e,n,t){return t(function(){Hh(n)&&Bh(e)})}function Hh(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Mn(e,t)}catch{return!0}}function Bh(e){var n=tt(e,1);n!==null&&In(n,e,1,-1)}function Dd(e){var n=An();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:e},n.queue=e,e=e.dispatch=n1.bind(null,ve,e),[n.memoizedState,e]}function rs(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Vh(){return vn().memoizedState}function ai(e,n,t,r){var o=An();ve.flags|=e,o.memoizedState=rs(1|n,t,void 0,r===void 0?null:r)}function sl(e,n,t,r){var o=vn();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var i=Ne.memoizedState;if(s=i.destroy,r!==null&&uc(r,i.deps)){o.memoizedState=rs(n,t,s,r);return}}ve.flags|=e,o.memoizedState=rs(1|n,t,s,r)}function Ld(e,n){return ai(8390656,8,e,n)}function fc(e,n){return sl(2048,8,e,n)}function Uh(e,n){return sl(4,2,e,n)}function Wh(e,n){return sl(4,4,e,n)}function $h(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kh(e,n,t){return t=t!=null?t.concat([e]):null,sl(4,4,$h.bind(null,n,e),t)}function pc(){}function Gh(e,n){var t=vn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&uc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qh(e,n){var t=vn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&uc(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Yh(e,n,t){return rr&21?(Mn(t,n)||(t=eh(),ve.lanes|=t,or|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=t)}function Jv(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),n()}finally{ce=t,Yl.transition=r}}function Xh(){return vn().memoizedState}function e1(e,n,t){var r=_t(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},qh(e))Zh(n,t);else if(t=Th(e,n,t,r),t!==null){var o=We();In(t,e,r,o),Jh(t,n,r)}}function n1(e,n,t){var r=_t(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(qh(e))Zh(n,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var i=n.lastRenderedState,l=s(i,t);if(o.hasEagerState=!0,o.eagerState=l,Mn(l,i)){var a=n.interleaved;a===null?(o.next=o,oc(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=Th(e,n,o,r),t!==null&&(o=We(),In(t,e,r,o),Jh(t,n,r))}}function qh(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Zh(e,n){Lo=Ai=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Jh(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wu(e,t)}}var Ri={readContext:yn,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},t1={readContext:yn,useCallback:function(e,n){return An().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Ld,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ai(4194308,4,$h.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ai(4194308,4,e,n)},useInsertionEffect:function(e,n){return ai(4,2,e,n)},useMemo:function(e,n){var t=An();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=An();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=e1.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var n=An();return e={current:e},n.memoizedState=e},useState:Dd,useDebugValue:pc,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=Dd(!1),n=e[0];return e=Jv.bind(null,e[1]),An().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ve,o=An();if(ge){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=n(),Me===null)throw Error(Y(349));rr&30||Dh(r,n,t)}o.memoizedState=t;var s={value:t,getSnapshot:n};return o.queue=s,Ld(Oh.bind(null,r,s,e),[e]),r.flags|=2048,rs(9,Lh.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=An(),n=Me.identifierPrefix;if(ge){var t=Xn,r=Yn;t=(r&~(1<<32-jn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ns++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},r1={readContext:yn,useCallback:Gh,useContext:yn,useEffect:fc,useImperativeHandle:Kh,useInsertionEffect:Uh,useLayoutEffect:Wh,useMemo:Qh,useReducer:Xl,useRef:Vh,useState:function(){return Xl(ts)},useDebugValue:pc,useDeferredValue:function(e){var n=vn();return Yh(n,Ne.memoizedState,e)},useTransition:function(){var e=Xl(ts)[0],n=vn().memoizedState;return[e,n]},useMutableSource:Ah,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1},o1={readContext:yn,useCallback:Gh,useContext:yn,useEffect:fc,useImperativeHandle:Kh,useInsertionEffect:Uh,useLayoutEffect:Wh,useMemo:Qh,useReducer:ql,useRef:Vh,useState:function(){return ql(ts)},useDebugValue:pc,useDeferredValue:function(e){var n=vn();return Ne===null?n.memoizedState=e:Yh(n,Ne.memoizedState,e)},useTransition:function(){var e=ql(ts)[0],n=vn().memoizedState;return[e,n]},useMutableSource:Ah,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1};function kn(e,n){if(e&&e.defaultProps){n=xe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function qa(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:xe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var il={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=We(),o=_t(e),s=Zn(r,o);s.payload=n,t!=null&&(s.callback=t),n=Et(e,s,o),n!==null&&(In(n,e,o,r),ii(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=We(),o=_t(e),s=Zn(r,o);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=Et(e,s,o),n!==null&&(In(n,e,o,r),ii(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=We(),r=_t(e),o=Zn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Et(e,o,r),n!==null&&(In(n,e,r,t),ii(n,e,r))}};function Od(e,n,t,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):n.prototype&&n.prototype.isPureReactComponent?!Yo(t,r)||!Yo(o,s):!0}function em(e,n,t){var r=!1,o=Ct,s=n.contextType;return typeof s=="object"&&s!==null?s=yn(s):(o=Ze(n)?nr:Ve.current,r=n.contextTypes,s=(r=r!=null)?Gr(e,o):Ct),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=il,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),n}function Hd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&il.enqueueReplaceState(n,n.state,null)}function Za(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},sc(e);var s=n.contextType;typeof s=="object"&&s!==null?o.context=yn(s):(s=Ze(n)?nr:Ve.current,o.context=Gr(e,s)),o.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(qa(e,n,s,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&il.enqueueReplaceState(o,o.state,null),Pi(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,n){try{var t="",r=n;do t+=Ty(r),r=r.return;while(r);var o=t}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:o,digest:null}}function Zl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ja(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var s1=typeof WeakMap=="function"?WeakMap:Map;function nm(e,n,t){t=Zn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Li||(Li=!0,uu=r),Ja(e,n)},t}function tm(e,n,t){t=Zn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Ja(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ja(e,n),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Bd(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new s1;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=x1.bind(null,e,n,t),n.then(e,e))}function Vd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ud(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Zn(-1,1),n.tag=2,Et(t,n,1))),t.lanes|=1),e)}var i1=it.ReactCurrentOwner,Ye=!1;function Ue(e,n,t,r){n.child=e===null?Mh(n,null,t,r):Yr(n,e.child,t,r)}function Wd(e,n,t,r,o){t=t.render;var s=n.ref;return Hr(n,o),r=cc(e,n,t,r,s,o),t=dc(),e!==null&&!Ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,rt(e,n,o)):(ge&&t&&Zu(n),n.flags|=1,Ue(e,n,r,o),n.child)}function $d(e,n,t,r,o){if(e===null){var s=t.type;return typeof s=="function"&&!bc(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,rm(e,n,s,r,o)):(e=fi(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&o)){var i=s.memoizedProps;if(t=t.compare,t=t!==null?t:Yo,t(i,r)&&e.ref===n.ref)return rt(e,n,o)}return n.flags|=1,e=zt(s,r),e.ref=n.ref,e.return=n,n.child=e}function rm(e,n,t,r,o){if(e!==null){var s=e.memoizedProps;if(Yo(s,r)&&e.ref===n.ref)if(Ye=!1,n.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(Ye=!0);else return n.lanes=e.lanes,rt(e,n,o)}return eu(e,n,t,r,o)}function om(e,n,t){var r=n.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Pr,en),en|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,fe(Pr,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,fe(Pr,en),en|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,fe(Pr,en),en|=r;return Ue(e,n,o,t),n.child}function sm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function eu(e,n,t,r,o){var s=Ze(t)?nr:Ve.current;return s=Gr(n,s),Hr(n,o),t=cc(e,n,t,r,s,o),r=dc(),e!==null&&!Ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,rt(e,n,o)):(ge&&r&&Zu(n),n.flags|=1,Ue(e,n,t,o),n.child)}function Kd(e,n,t,r,o){if(Ze(t)){var s=!0;ji(n)}else s=!1;if(Hr(n,o),n.stateNode===null)ui(e,n),em(n,t,r),Za(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var a=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=Ze(t)?nr:Ve.current,u=Gr(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Hd(n,i,r,u),dt=!1;var f=n.memoizedState;i.state=f,Pi(n,r,i,o),a=n.memoizedState,l!==r||f!==a||qe.current||dt?(typeof c=="function"&&(qa(n,t,c,r),a=n.memoizedState),(l=dt||Od(n,t,l,r,f,a,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Ph(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:kn(n.type,l),i.props=u,d=n.pendingProps,f=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=yn(a):(a=Ze(t)?nr:Ve.current,a=Gr(n,a));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Hd(n,i,r,a),dt=!1,f=n.memoizedState,i.state=f,Pi(n,r,i,o);var v=n.memoizedState;l!==d||f!==v||qe.current||dt?(typeof m=="function"&&(qa(n,t,m,r),v=n.memoizedState),(u=dt||Od(n,t,u,r,f,v,a)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),i.props=r,i.state=v,i.context=a,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return nu(e,n,t,r,s,o)}function nu(e,n,t,r,o,s){sm(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&Md(n,t,!1),rt(e,n,s);r=n.stateNode,i1.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Yr(n,e.child,null,s),n.child=Yr(n,null,l,s)):Ue(e,n,l,s),n.memoizedState=r.state,o&&Md(n,t,!0),n.child}function im(e){var n=e.stateNode;n.pendingContext?Cd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Cd(e,n.context,!1),ic(e,n.containerInfo)}function Gd(e,n,t,r,o){return Qr(),ec(o),n.flags|=256,Ue(e,n,t,r),n.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function ru(e){return{baseLanes:e,cachePool:null,transitions:null}}function lm(e,n,t){var r=n.pendingProps,o=ye.current,s=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),fe(ye,o&1),e===null)return Ya(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,s?(r=n.mode,s=n.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ul(i,r,0,null),e=qt(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=ru(t),n.memoizedState=tu,e):hc(n,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return l1(e,n,i,r,l,o,t);if(s){s=r.fallback,i=n.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=zt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=zt(l,s):(s=qt(s,i,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,i=e.child.memoizedState,i=i===null?ru(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~t,n.memoizedState=tu,r}return s=e.child,e=s.sibling,r=zt(s,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function hc(e,n){return n=ul({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ds(e,n,t,r){return r!==null&&ec(r),Yr(n,e.child,null,t),e=hc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function l1(e,n,t,r,o,s,i){if(t)return n.flags&256?(n.flags&=-257,r=Zl(Error(Y(422))),Ds(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,o=n.mode,r=ul({mode:"visible",children:r.children},o,0,null),s=qt(s,o,i,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,n.mode&1&&Yr(n,e.child,null,i),n.child.memoizedState=ru(i),n.memoizedState=tu,s);if(!(n.mode&1))return Ds(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(Y(419)),r=Zl(s,r,void 0),Ds(e,n,i,r)}if(l=(i&e.childLanes)!==0,Ye||l){if(r=Me,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,tt(e,o),In(r,e,o,-1))}return wc(),r=Zl(Error(Y(421))),Ds(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=w1.bind(null,e),o._reactRetry=n,null):(e=s.treeContext,rn=kt(o.nextSibling),on=n,ge=!0,_n=null,e!==null&&(cn[dn++]=Yn,cn[dn++]=Xn,cn[dn++]=tr,Yn=e.id,Xn=e.overflow,tr=n),n=hc(n,r.children),n.flags|=4096,n)}function Qd(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Xa(e.return,n,t)}function Jl(e,n,t,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=o)}function am(e,n,t){var r=n.pendingProps,o=r.revealOrder,s=r.tail;if(Ue(e,n,r.children,t),r=ye.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,t,n);else if(e.tag===19)Qd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(ye,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Fi(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Jl(n,!1,o,t,s);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Fi(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Jl(n,!0,t,null,s);break;case"together":Jl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ui(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),or|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(Y(153));if(n.child!==null){for(e=n.child,t=zt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=zt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function a1(e,n,t){switch(n.tag){case 3:im(n),Qr();break;case 5:Fh(n);break;case 1:Ze(n.type)&&ji(n);break;case 4:ic(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;fe(Mi,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(fe(ye,ye.current&1),n.flags|=128,null):t&n.child.childLanes?lm(e,n,t):(fe(ye,ye.current&1),e=rt(e,n,t),e!==null?e.sibling:null);fe(ye,ye.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return am(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),fe(ye,ye.current),r)break;return null;case 22:case 23:return n.lanes=0,om(e,n,t)}return rt(e,n,t)}var um,ou,cm,dm;um=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ou=function(){};cm=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Gt(Ln.current);var s=null;switch(t){case"input":o=_a(e,o),r=_a(e,r),s=[];break;case"select":o=xe({},o,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":o=Ia(e,o),r=Ia(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_i)}Ma(t,r);var i;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&l[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(s||(s=[]),s.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&he("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};dm=function(e,n,t,r){t!==r&&(n.flags|=4)};function go(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function u1(e,n,t){var r=n.pendingProps;switch(Ju(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return Ze(n.type)&&zi(),He(n),null;case 3:return r=n.stateNode,Xr(),me(qe),me(Ve),ac(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(As(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_n!==null&&(fu(_n),_n=null))),ou(e,n),He(n),null;case 5:lc(n);var o=Gt(es.current);if(t=n.type,e!==null&&n.stateNode!=null)cm(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(Y(166));return He(n),null}if(e=Gt(Ln.current),As(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[Rn]=n,r[Zo]=s,e=(n.mode&1)!==0,t){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(o=0;o<_o.length;o++)he(_o[o],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":rd(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":sd(r,s),he("invalid",r)}Ma(t,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fs(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fs(r.textContent,l,e),o=["children",""+l]):Vo.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&he("scroll",r)}switch(t){case"input":_s(r),od(r,s,!0);break;case"textarea":_s(r),id(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_i)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Op(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Rn]=n,e[Zo]=r,um(e,n,!1,!1),n.stateNode=e;e:{switch(i=Ta(t,r),t){case"dialog":he("cancel",e),he("close",e),o=r;break;case"iframe":case"object":case"embed":he("load",e),o=r;break;case"video":case"audio":for(o=0;o<_o.length;o++)he(_o[o],e);o=r;break;case"source":he("error",e),o=r;break;case"img":case"image":case"link":he("error",e),he("load",e),o=r;break;case"details":he("toggle",e),o=r;break;case"input":rd(e,r),o=_a(e,r),he("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=xe({},r,{value:void 0}),he("invalid",e);break;case"textarea":sd(e,r),o=Ia(e,r),he("invalid",e);break;default:o=r}Ma(t,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Vp(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hp(e,a)):s==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Uo(e,a):typeof a=="number"&&Uo(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?a!=null&&s==="onScroll"&&he("scroll",e):a!=null&&Lu(e,s,a,i))}switch(t){case"input":_s(e),od(e,r,!1);break;case"textarea":_s(e),id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Rr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_i)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return He(n),null;case 6:if(e&&n.stateNode!=null)dm(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(Y(166));if(t=Gt(es.current),Gt(Ln.current),As(n)){if(r=n.stateNode,t=n.memoizedProps,r[Rn]=n,(s=r.nodeValue!==t)&&(e=on,e!==null))switch(e.tag){case 3:Fs(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fs(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Rn]=n,n.stateNode=r}return He(n),null;case 13:if(me(ye),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&rn!==null&&n.mode&1&&!(n.flags&128))Ih(),Qr(),n.flags|=98560,s=!1;else if(s=As(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(Y(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[Rn]=n}else Qr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;He(n),s=!1}else _n!==null&&(fu(_n),_n=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ye.current&1?_e===0&&(_e=3):wc())),n.updateQueue!==null&&(n.flags|=4),He(n),null);case 4:return Xr(),ou(e,n),e===null&&Xo(n.stateNode.containerInfo),He(n),null;case 10:return rc(n.type._context),He(n),null;case 17:return Ze(n.type)&&zi(),He(n),null;case 19:if(me(ye),s=n.memoizedState,s===null)return He(n),null;if(r=(n.flags&128)!==0,i=s.rendering,i===null)if(r)go(s,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Fi(e),i!==null){for(n.flags|=128,go(s,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return fe(ye,ye.current&1|2),n.child}e=e.sibling}s.tail!==null&&ke()>Zr&&(n.flags|=128,r=!0,go(s,!1),n.lanes=4194304)}else{if(!r)if(e=Fi(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!ge)return He(n),null}else 2*ke()-s.renderingStartTime>Zr&&t!==1073741824&&(n.flags|=128,r=!0,go(s,!1),n.lanes=4194304);s.isBackwards?(i.sibling=n.child,n.child=i):(t=s.last,t!==null?t.sibling=i:n.child=i,s.last=i)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=ke(),n.sibling=null,t=ye.current,fe(ye,r?t&1|2:t&1),n):(He(n),null);case 22:case 23:return xc(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?en&1073741824&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),null;case 24:return null;case 25:return null}throw Error(Y(156,n.tag))}function c1(e,n){switch(Ju(n),n.tag){case 1:return Ze(n.type)&&zi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xr(),me(qe),me(Ve),ac(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return lc(n),null;case 13:if(me(ye),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(Y(340));Qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(ye),null;case 4:return Xr(),null;case 10:return rc(n.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Ls=!1,Be=!1,d1=typeof WeakSet=="function"?WeakSet:Set,J=null;function Tr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){we(e,n,r)}else t.current=null}function su(e,n,t){try{t()}catch(r){we(e,n,r)}}var Yd=!1;function f1(e,n){if(Va=ki,e=gh(),qu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var i=0,l=-1,a=-1,u=0,c=0,d=e,f=null;n:for(;;){for(var m;d!==t||o!==0&&d.nodeType!==3||(l=i+o),d!==s||r!==0&&d.nodeType!==3||(a=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break n;if(f===t&&++u===o&&(l=i),f===s&&++c===r&&(a=i),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}t=l===-1||a===-1?null:{start:l,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ua={focusedElem:e,selectionRange:t},ki=!1,J=n;J!==null;)if(n=J,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,J=e;else for(;J!==null;){n=J;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,b=v.memoizedState,p=n.stateNode,h=p.getSnapshotBeforeUpdate(n.elementType===n.type?g:kn(n.type,g),b);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(x){we(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,J=e;break}J=n.return}return v=Yd,Yd=!1,v}function Oo(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&su(n,t,s)}o=o.next}while(o!==r)}}function ll(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function iu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function fm(e){var n=e.alternate;n!==null&&(e.alternate=null,fm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Rn],delete n[Zo],delete n[Ka],delete n[Qv],delete n[Yv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pm(e){return e.tag===5||e.tag===3||e.tag===4}function Xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=_i));else if(r!==4&&(e=e.child,e!==null))for(lu(e,n,t),e=e.sibling;e!==null;)lu(e,n,t),e=e.sibling}function au(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(au(e,n,t),e=e.sibling;e!==null;)au(e,n,t),e=e.sibling}var Pe=null,En=!1;function at(e,n,t){for(t=t.child;t!==null;)hm(e,n,t),t=t.sibling}function hm(e,n,t){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Ji,t)}catch{}switch(t.tag){case 5:Be||Tr(t,n);case 6:var r=Pe,o=En;Pe=null,at(e,n,t),Pe=r,En=o,Pe!==null&&(En?(e=Pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Pe.removeChild(t.stateNode));break;case 18:Pe!==null&&(En?(e=Pe,t=t.stateNode,e.nodeType===8?Kl(e.parentNode,t):e.nodeType===1&&Kl(e,t),Go(e)):Kl(Pe,t.stateNode));break;case 4:r=Pe,o=En,Pe=t.stateNode.containerInfo,En=!0,at(e,n,t),Pe=r,En=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&su(t,n,i),o=o.next}while(o!==r)}at(e,n,t);break;case 1:if(!Be&&(Tr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){we(t,n,l)}at(e,n,t);break;case 21:at(e,n,t);break;case 22:t.mode&1?(Be=(r=Be)||t.memoizedState!==null,at(e,n,t),Be=r):at(e,n,t);break;default:at(e,n,t)}}function qd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new d1),n.forEach(function(r){var o=b1.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var s=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,En=!1;break e;case 3:Pe=l.stateNode.containerInfo,En=!0;break e;case 4:Pe=l.stateNode.containerInfo,En=!0;break e}l=l.return}if(Pe===null)throw Error(Y(160));hm(s,i,o),Pe=null,En=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){we(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mm(n,e),n=n.sibling}function mm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(n,e),Fn(e),r&4){try{Oo(3,e,e.return),ll(3,e)}catch(g){we(e,e.return,g)}try{Oo(5,e,e.return)}catch(g){we(e,e.return,g)}}break;case 1:Sn(n,e),Fn(e),r&512&&t!==null&&Tr(t,t.return);break;case 5:if(Sn(n,e),Fn(e),r&512&&t!==null&&Tr(t,t.return),e.flags&32){var o=e.stateNode;try{Uo(o,"")}catch(g){we(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=t!==null?t.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dp(o,s),Ta(l,i);var u=Ta(l,s);for(i=0;i<a.length;i+=2){var c=a[i],d=a[i+1];c==="style"?Vp(o,d):c==="dangerouslySetInnerHTML"?Hp(o,d):c==="children"?Uo(o,d):Lu(o,c,d,u)}switch(l){case"input":za(o,s);break;case"textarea":Lp(o,s);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rr(o,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Rr(o,!!s.multiple,s.defaultValue,!0):Rr(o,!!s.multiple,s.multiple?[]:"",!1))}o[Zo]=s}catch(g){we(e,e.return,g)}}break;case 6:if(Sn(n,e),Fn(e),r&4){if(e.stateNode===null)throw Error(Y(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(g){we(e,e.return,g)}}break;case 3:if(Sn(n,e),Fn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Go(n.containerInfo)}catch(g){we(e,e.return,g)}break;case 4:Sn(n,e),Fn(e);break;case 13:Sn(n,e),Fn(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(yc=ke())),r&4&&qd(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,Sn(n,e),Be=u):Sn(n,e),Fn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(J=e,c=e.child;c!==null;){for(d=J=c;J!==null;){switch(f=J,m=f.child,f.tag){case 0:case 11:case 14:case 15:Oo(4,f,f.return);break;case 1:Tr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(g){we(r,t,g)}}break;case 5:Tr(f,f.return);break;case 22:if(f.memoizedState!==null){Jd(d);continue}}m!==null?(m.return=f,J=m):Jd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Bp("display",i))}catch(g){we(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){we(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Sn(n,e),Fn(e),r&4&&qd(e);break;case 21:break;default:Sn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(pm(t)){var r=t;break e}t=t.return}throw Error(Y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Uo(o,""),r.flags&=-33);var s=Xd(e);au(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Xd(e);lu(e,l,i);break;default:throw Error(Y(161))}}catch(a){we(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function p1(e,n,t){J=e,gm(e)}function gm(e,n,t){for(var r=(e.mode&1)!==0;J!==null;){var o=J,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ls;if(!i){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Be;l=Ls;var u=Be;if(Ls=i,(Be=a)&&!u)for(J=o;J!==null;)i=J,a=i.child,i.tag===22&&i.memoizedState!==null?ef(o):a!==null?(a.return=i,J=a):ef(o);for(;s!==null;)J=s,gm(s),s=s.sibling;J=o,Ls=l,Be=u}Zd(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,J=s):Zd(e)}}function Zd(e){for(;J!==null;){var n=J;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Be||ll(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Be)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:kn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Rd(n,s,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Rd(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Go(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Be||n.flags&512&&iu(n)}catch(f){we(n,n.return,f)}}if(n===e){J=null;break}if(t=n.sibling,t!==null){t.return=n.return,J=t;break}J=n.return}}function Jd(e){for(;J!==null;){var n=J;if(n===e){J=null;break}var t=n.sibling;if(t!==null){t.return=n.return,J=t;break}J=n.return}}function ef(e){for(;J!==null;){var n=J;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ll(4,n)}catch(a){we(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){we(n,o,a)}}var s=n.return;try{iu(n)}catch(a){we(n,s,a)}break;case 5:var i=n.return;try{iu(n)}catch(a){we(n,i,a)}}}catch(a){we(n,n.return,a)}if(n===e){J=null;break}var l=n.sibling;if(l!==null){l.return=n.return,J=l;break}J=n.return}}var h1=Math.ceil,Di=it.ReactCurrentDispatcher,mc=it.ReactCurrentOwner,mn=it.ReactCurrentBatchConfig,le=0,Me=null,Ee=null,Ae=0,en=0,Pr=Tt(0),_e=0,os=null,or=0,al=0,gc=0,Ho=null,Qe=null,yc=0,Zr=1/0,Kn=null,Li=!1,uu=null,Nt=null,Os=!1,xt=null,Oi=0,Bo=0,cu=null,ci=-1,di=0;function We(){return le&6?ke():ci!==-1?ci:ci=ke()}function _t(e){return e.mode&1?le&2&&Ae!==0?Ae&-Ae:qv.transition!==null?(di===0&&(di=eh()),di):(e=ce,e!==0||(e=window.event,e=e===void 0?16:lh(e.type)),e):1}function In(e,n,t,r){if(50<Bo)throw Bo=0,cu=null,Error(Y(185));ys(e,t,r),(!(le&2)||e!==Me)&&(e===Me&&(!(le&2)&&(al|=t),_e===4&&mt(e,Ae)),Je(e,r),t===1&&le===0&&!(n.mode&1)&&(Zr=ke()+500,ol&&Pt()))}function Je(e,n){var t=e.callbackNode;qy(e,n);var r=Si(e,e===Me?Ae:0);if(r===0)t!==null&&ud(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ud(t),n===1)e.tag===0?Xv(nf.bind(null,e)):_h(nf.bind(null,e)),Kv(function(){!(le&6)&&Pt()}),t=null;else{switch(nh(r)){case 1:t=Uu;break;case 4:t=Zp;break;case 16:t=bi;break;case 536870912:t=Jp;break;default:t=bi}t=Em(t,ym.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ym(e,n){if(ci=-1,di=0,le&6)throw Error(Y(327));var t=e.callbackNode;if(Br()&&e.callbackNode!==t)return null;var r=Si(e,e===Me?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Hi(e,r);else{n=r;var o=le;le|=2;var s=xm();(Me!==e||Ae!==n)&&(Kn=null,Zr=ke()+500,Xt(e,n));do try{y1();break}catch(l){vm(e,l)}while(!0);tc(),Di.current=s,le=o,Ee!==null?n=0:(Me=null,Ae=0,n=_e)}if(n!==0){if(n===2&&(o=Da(e),o!==0&&(r=o,n=du(e,o))),n===1)throw t=os,Xt(e,0),mt(e,r),Je(e,ke()),t;if(n===6)mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!m1(o)&&(n=Hi(e,r),n===2&&(s=Da(e),s!==0&&(r=s,n=du(e,s))),n===1))throw t=os,Xt(e,0),mt(e,r),Je(e,ke()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(Y(345));case 2:Vt(e,Qe,Kn);break;case 3:if(mt(e,r),(r&130023424)===r&&(n=yc+500-ke(),10<n)){if(Si(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$a(Vt.bind(null,e,Qe,Kn),n);break}Vt(e,Qe,Kn);break;case 4:if(mt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-jn(r);s=1<<i,i=n[i],i>o&&(o=i),r&=~s}if(r=o,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*h1(r/1960))-r,10<r){e.timeoutHandle=$a(Vt.bind(null,e,Qe,Kn),r);break}Vt(e,Qe,Kn);break;case 5:Vt(e,Qe,Kn);break;default:throw Error(Y(329))}}}return Je(e,ke()),e.callbackNode===t?ym.bind(null,e):null}function du(e,n){var t=Ho;return e.current.memoizedState.isDehydrated&&(Xt(e,n).flags|=256),e=Hi(e,n),e!==2&&(n=Qe,Qe=t,n!==null&&fu(n)),e}function fu(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function m1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],s=o.getSnapshot;o=o.value;try{if(!Mn(s(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mt(e,n){for(n&=~gc,n&=~al,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-jn(n),r=1<<t;e[t]=-1,n&=~r}}function nf(e){if(le&6)throw Error(Y(327));Br();var n=Si(e,0);if(!(n&1))return Je(e,ke()),null;var t=Hi(e,n);if(e.tag!==0&&t===2){var r=Da(e);r!==0&&(n=r,t=du(e,r))}if(t===1)throw t=os,Xt(e,0),mt(e,n),Je(e,ke()),t;if(t===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Vt(e,Qe,Kn),Je(e,ke()),null}function vc(e,n){var t=le;le|=1;try{return e(n)}finally{le=t,le===0&&(Zr=ke()+500,ol&&Pt())}}function sr(e){xt!==null&&xt.tag===0&&!(le&6)&&Br();var n=le;le|=1;var t=mn.transition,r=ce;try{if(mn.transition=null,ce=1,e)return e()}finally{ce=r,mn.transition=t,le=n,!(le&6)&&Pt()}}function xc(){en=Pr.current,me(Pr)}function Xt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$v(t)),Ee!==null)for(t=Ee.return;t!==null;){var r=t;switch(Ju(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zi();break;case 3:Xr(),me(qe),me(Ve),ac();break;case 5:lc(r);break;case 4:Xr();break;case 13:me(ye);break;case 19:me(ye);break;case 10:rc(r.type._context);break;case 22:case 23:xc()}t=t.return}if(Me=e,Ee=e=zt(e.current,null),Ae=en=n,_e=0,os=null,gc=al=or=0,Qe=Ho=null,Kt!==null){for(n=0;n<Kt.length;n++)if(t=Kt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,s=t.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}t.pending=r}Kt=null}return e}function vm(e,n){do{var t=Ee;try{if(tc(),li.current=Ri,Ai){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ai=!1}if(rr=0,Ce=Ne=ve=null,Lo=!1,ns=0,mc.current=null,t===null||t.return===null){_e=1,os=n,Ee=null;break}e:{var s=e,i=t.return,l=t,a=n;if(n=Ae,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Vd(i);if(m!==null){m.flags&=-257,Ud(m,i,l,s,n),m.mode&1&&Bd(s,u,n),n=m,a=u;var v=n.updateQueue;if(v===null){var g=new Set;g.add(a),n.updateQueue=g}else v.add(a);break e}else{if(!(n&1)){Bd(s,u,n),wc();break e}a=Error(Y(426))}}else if(ge&&l.mode&1){var b=Vd(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ud(b,i,l,s,n),ec(qr(a,l));break e}}s=a=qr(a,l),_e!==4&&(_e=2),Ho===null?Ho=[s]:Ho.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var p=nm(s,a,n);Ad(s,p);break e;case 1:l=a;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Nt===null||!Nt.has(y)))){s.flags|=65536,n&=-n,s.lanes|=n;var x=tm(s,l,n);Ad(s,x);break e}}s=s.return}while(s!==null)}bm(t)}catch(_){n=_,Ee===t&&t!==null&&(Ee=t=t.return);continue}break}while(!0)}function xm(){var e=Di.current;return Di.current=Ri,e===null?Ri:e}function wc(){(_e===0||_e===3||_e===2)&&(_e=4),Me===null||!(or&268435455)&&!(al&268435455)||mt(Me,Ae)}function Hi(e,n){var t=le;le|=2;var r=xm();(Me!==e||Ae!==n)&&(Kn=null,Xt(e,n));do try{g1();break}catch(o){vm(e,o)}while(!0);if(tc(),le=t,Di.current=r,Ee!==null)throw Error(Y(261));return Me=null,Ae=0,_e}function g1(){for(;Ee!==null;)wm(Ee)}function y1(){for(;Ee!==null&&!Vy();)wm(Ee)}function wm(e){var n=km(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?bm(e):Ee=n,mc.current=null}function bm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=c1(t,n),t!==null){t.flags&=32767,Ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Ee=null;return}}else if(t=u1(t,n,en),t!==null){Ee=t;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);_e===0&&(_e=5)}function Vt(e,n,t){var r=ce,o=mn.transition;try{mn.transition=null,ce=1,v1(e,n,t,r)}finally{mn.transition=o,ce=r}return null}function v1(e,n,t,r){do Br();while(xt!==null);if(le&6)throw Error(Y(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Zy(e,s),e===Me&&(Ee=Me=null,Ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Os||(Os=!0,Em(bi,function(){return Br(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=mn.transition,mn.transition=null;var i=ce;ce=1;var l=le;le|=4,mc.current=null,f1(e,t),mm(t,e),Lv(Ua),ki=!!Va,Ua=Va=null,e.current=t,p1(t),Uy(),le=l,ce=i,mn.transition=s}else e.current=t;if(Os&&(Os=!1,xt=e,Oi=o),s=e.pendingLanes,s===0&&(Nt=null),Ky(t.stateNode),Je(e,ke()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Li)throw Li=!1,e=uu,uu=null,e;return Oi&1&&e.tag!==0&&Br(),s=e.pendingLanes,s&1?e===cu?Bo++:(Bo=0,cu=e):Bo=0,Pt(),null}function Br(){if(xt!==null){var e=nh(Oi),n=mn.transition,t=ce;try{if(mn.transition=null,ce=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,Oi=0,le&6)throw Error(Y(331));var o=le;for(le|=4,J=e.current;J!==null;){var s=J,i=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(J=u;J!==null;){var c=J;switch(c.tag){case 0:case 11:case 15:Oo(8,c,s)}var d=c.child;if(d!==null)d.return=c,J=d;else for(;J!==null;){c=J;var f=c.sibling,m=c.return;if(fm(c),c===u){J=null;break}if(f!==null){f.return=m,J=f;break}J=m}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}J=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,J=i;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,J=p;break e}J=s.return}}var h=e.current;for(J=h;J!==null;){i=J;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,J=y;else e:for(i=h;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ll(9,l)}}catch(_){we(l,l.return,_)}if(l===i){J=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,J=x;break e}J=l.return}}if(le=o,Pt(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{ce=t,mn.transition=n}}return!1}function tf(e,n,t){n=qr(t,n),n=nm(e,n,1),e=Et(e,n,1),n=We(),e!==null&&(ys(e,1,n),Je(e,n))}function we(e,n,t){if(e.tag===3)tf(e,e,t);else for(;n!==null;){if(n.tag===3){tf(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=qr(t,e),e=tm(n,e,1),n=Et(n,e,1),e=We(),n!==null&&(ys(n,1,e),Je(n,e));break}}n=n.return}}function x1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=We(),e.pingedLanes|=e.suspendedLanes&t,Me===e&&(Ae&t)===t&&(_e===4||_e===3&&(Ae&130023424)===Ae&&500>ke()-yc?Xt(e,0):gc|=t),Je(e,n)}function Sm(e,n){n===0&&(e.mode&1?(n=Is,Is<<=1,!(Is&130023424)&&(Is=4194304)):n=1);var t=We();e=tt(e,n),e!==null&&(ys(e,n,t),Je(e,t))}function w1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Sm(e,t)}function b1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(n),Sm(e,t)}var km;km=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||qe.current)Ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ye=!1,a1(e,n,t);Ye=!!(e.flags&131072)}else Ye=!1,ge&&n.flags&1048576&&zh(n,Ci,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ui(e,n),e=n.pendingProps;var o=Gr(n,Ve.current);Hr(n,t),o=cc(null,n,r,e,o,t);var s=dc();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ze(r)?(s=!0,ji(n)):s=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,sc(n),o.updater=il,n.stateNode=o,o._reactInternals=n,Za(n,r,e,t),n=nu(null,n,r,!0,s,t)):(n.tag=0,ge&&s&&Zu(n),Ue(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ui(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=k1(r),e=kn(r,e),o){case 0:n=eu(null,n,r,e,t);break e;case 1:n=Kd(null,n,r,e,t);break e;case 11:n=Wd(null,n,r,e,t);break e;case 14:n=$d(null,n,r,kn(r.type,e),t);break e}throw Error(Y(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:kn(r,o),eu(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:kn(r,o),Kd(e,n,r,o,t);case 3:e:{if(im(n),e===null)throw Error(Y(387));r=n.pendingProps,s=n.memoizedState,o=s.element,Ph(e,n),Pi(n,r,null,t);var i=n.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){o=qr(Error(Y(423)),n),n=Gd(e,n,r,t,o);break e}else if(r!==o){o=qr(Error(Y(424)),n),n=Gd(e,n,r,t,o);break e}else for(rn=kt(n.stateNode.containerInfo.firstChild),on=n,ge=!0,_n=null,t=Mh(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qr(),r===o){n=rt(e,n,t);break e}Ue(e,n,r,t)}n=n.child}return n;case 5:return Fh(n),e===null&&Ya(n),r=n.type,o=n.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,Wa(r,o)?i=null:s!==null&&Wa(r,s)&&(n.flags|=32),sm(e,n),Ue(e,n,i,t),n.child;case 6:return e===null&&Ya(n),null;case 13:return lm(e,n,t);case 4:return ic(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Yr(n,null,r,t):Ue(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:kn(r,o),Wd(e,n,r,o,t);case 7:return Ue(e,n,n.pendingProps,t),n.child;case 8:return Ue(e,n,n.pendingProps.children,t),n.child;case 12:return Ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,s=n.memoizedProps,i=o.value,fe(Mi,r._currentValue),r._currentValue=i,s!==null)if(Mn(s.value,i)){if(s.children===o.children&&!qe.current){n=rt(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Zn(-1,t&-t),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Xa(s.return,t,n),l.lanes|=t;break}a=a.next}}else if(s.tag===10)i=s.type===n.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(Y(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Xa(i,t,n),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===n){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ue(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Hr(n,t),o=yn(o),r=r(o),n.flags|=1,Ue(e,n,r,t),n.child;case 14:return r=n.type,o=kn(r,n.pendingProps),o=kn(r.type,o),$d(e,n,r,o,t);case 15:return rm(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:kn(r,o),ui(e,n),n.tag=1,Ze(r)?(e=!0,ji(n)):e=!1,Hr(n,t),em(n,r,o),Za(n,r,o,t),nu(null,n,r,!0,e,t);case 19:return am(e,n,t);case 22:return om(e,n,t)}throw Error(Y(156,n.tag))};function Em(e,n){return qp(e,n)}function S1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,r){return new S1(e,n,t,r)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function k1(e){if(typeof e=="function")return bc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===Bu)return 14}return 2}function zt(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function fi(e,n,t,r,o,s){var i=2;if(r=e,typeof e=="function")bc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case kr:return qt(t.children,o,s,n);case Ou:i=8,o|=8;break;case Sa:return e=pn(12,t,n,o|2),e.elementType=Sa,e.lanes=s,e;case ka:return e=pn(13,t,n,o),e.elementType=ka,e.lanes=s,e;case Ea:return e=pn(19,t,n,o),e.elementType=Ea,e.lanes=s,e;case Fp:return ul(t,o,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tp:i=10;break e;case Pp:i=9;break e;case Hu:i=11;break e;case Bu:i=14;break e;case ct:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return n=pn(i,t,n,o),n.elementType=e,n.type=r,n.lanes=s,n}function qt(e,n,t,r){return e=pn(7,e,r,n),e.lanes=t,e}function ul(e,n,t,r){return e=pn(22,e,r,n),e.elementType=Fp,e.lanes=t,e.stateNode={isHidden:!1},e}function ea(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function na(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function E1(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Sc(e,n,t,r,o,s,i,l,a){return e=new E1(e,n,t,l,a),n===1?(n=1,s===!0&&(n|=8)):n=0,s=pn(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},sc(s),e}function N1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Nm(e){if(!e)return Ct;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(Y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ze(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(Y(171))}if(e.tag===1){var t=e.type;if(Ze(t))return Nh(e,t,n)}return n}function _m(e,n,t,r,o,s,i,l,a){return e=Sc(t,r,!0,e,o,s,i,l,a),e.context=Nm(null),t=e.current,r=We(),o=_t(t),s=Zn(r,o),s.callback=n??null,Et(t,s,o),e.current.lanes=o,ys(e,o,r),Je(e,r),e}function cl(e,n,t,r){var o=n.current,s=We(),i=_t(o);return t=Nm(t),n.context===null?n.context=t:n.pendingContext=t,n=Zn(s,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Et(o,n,i),e!==null&&(In(e,o,i,s),ii(e,o,i)),i}function Bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function kc(e,n){rf(e,n),(e=e.alternate)&&rf(e,n)}function _1(){return null}var zm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ec(e){this._internalRoot=e}dl.prototype.render=Ec.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(Y(409));cl(e,n,null,null)};dl.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;sr(function(){cl(null,e,null,null)}),n[nt]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=oh();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ht.length&&n!==0&&n<ht[t].priority;t++);ht.splice(t,0,e),t===0&&ih(e)}};function Nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function of(){}function z1(e,n,t,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=Bi(i);s.call(u)}}var i=_m(n,r,e,0,null,!1,!1,"",of);return e._reactRootContainer=i,e[nt]=i.current,Xo(e.nodeType===8?e.parentNode:e),sr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Bi(a);l.call(u)}}var a=Sc(e,0,!1,null,null,!1,!1,"",of);return e._reactRootContainer=a,e[nt]=a.current,Xo(e.nodeType===8?e.parentNode:e),sr(function(){cl(n,a,t,r)}),a}function pl(e,n,t,r,o){var s=t._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var l=o;o=function(){var a=Bi(i);l.call(a)}}cl(n,i,e,o)}else i=z1(t,n,e,o,r);return Bi(i)}th=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=No(n.pendingLanes);t!==0&&(Wu(n,t|1),Je(n,ke()),!(le&6)&&(Zr=ke()+500,Pt()))}break;case 13:sr(function(){var r=tt(e,1);if(r!==null){var o=We();In(r,e,1,o)}}),kc(e,1)}};$u=function(e){if(e.tag===13){var n=tt(e,134217728);if(n!==null){var t=We();In(n,e,134217728,t)}kc(e,134217728)}};rh=function(e){if(e.tag===13){var n=_t(e),t=tt(e,n);if(t!==null){var r=We();In(t,e,n,r)}kc(e,n)}};oh=function(){return ce};sh=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}};Fa=function(e,n,t){switch(n){case"input":if(za(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=rl(r);if(!o)throw Error(Y(90));Rp(r),za(r,o)}}}break;case"textarea":Lp(e,t);break;case"select":n=t.value,n!=null&&Rr(e,!!t.multiple,n,!1)}};$p=vc;Kp=sr;var j1={usingClientEntryPoint:!1,Events:[xs,zr,rl,Up,Wp,vc]},yo={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I1={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yp(e),e===null?null:e.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||_1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{Ji=Hs.inject(I1),Dn=Hs}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;an.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(n))throw Error(Y(200));return N1(e,n,null,t)};an.createRoot=function(e,n){if(!Nc(e))throw Error(Y(299));var t=!1,r="",o=zm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Sc(e,1,!1,null,null,t,!1,r,o),e[nt]=n.current,Xo(e.nodeType===8?e.parentNode:e),new Ec(n)};an.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Yp(n),e=e===null?null:e.stateNode,e};an.flushSync=function(e){return sr(e)};an.hydrate=function(e,n,t){if(!fl(n))throw Error(Y(200));return pl(null,e,n,!0,t)};an.hydrateRoot=function(e,n,t){if(!Nc(e))throw Error(Y(405));var r=t!=null&&t.hydratedSources||null,o=!1,s="",i=zm;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=_m(n,null,e,1,t??null,o,!1,s,i),e[nt]=n.current,Xo(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new dl(n)};an.render=function(e,n,t){if(!fl(n))throw Error(Y(200));return pl(null,e,n,!1,t)};an.unmountComponentAtNode=function(e){if(!fl(e))throw Error(Y(40));return e._reactRootContainer?(sr(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};an.unstable_batchedUpdates=vc;an.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fl(t))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return pl(e,n,t,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function jm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jm)}catch(e){console.error(e)}}jm(),jp.exports=an;var C1=jp.exports,sf=C1;wa.createRoot=sf.createRoot,wa.hydrateRoot=sf.hydrateRoot;const hl=S.createContext(null);hl.displayName="PanelGroupContext";const be={group:"data-panel-group",groupDirection:"data-panel-group-direction",groupId:"data-panel-group-id",panel:"data-panel",panelCollapsible:"data-panel-collapsible",panelId:"data-panel-id",panelSize:"data-panel-size",resizeHandle:"data-resize-handle",resizeHandleActive:"data-resize-handle-active",resizeHandleEnabled:"data-panel-resize-handle-enabled",resizeHandleId:"data-panel-resize-handle-id",resizeHandleState:"data-resize-handle-state"},_c=10,Zt=S.useLayoutEffect,lf=xy.useId,M1=typeof lf=="function"?lf:()=>null;let T1=0;function zc(e=null){const n=M1(),t=S.useRef(e||n||null);return t.current===null&&(t.current=""+T1++),e??t.current}function Im({children:e,className:n="",collapsedSize:t,collapsible:r,defaultSize:o,forwardedRef:s,id:i,maxSize:l,minSize:a,onCollapse:u,onExpand:c,onResize:d,order:f,style:m,tagName:v="div",...g}){const b=S.useContext(hl);if(b===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:p,expandPanel:h,getPanelSize:y,getPanelStyle:x,groupId:_,isPanelCollapsed:z,reevaluatePanelConstraints:N,registerPanel:P,resizePanel:F,unregisterPanel:A}=b,O=zc(i),W=S.useRef({callbacks:{onCollapse:u,onExpand:c,onResize:d},constraints:{collapsedSize:t,collapsible:r,defaultSize:o,maxSize:l,minSize:a},id:O,idIsFromProps:i!==void 0,order:f});S.useRef({didLogMissingDefaultSizeWarning:!1}),Zt(()=>{const{callbacks:w,constraints:C}=W.current,j={...C};W.current.id=O,W.current.idIsFromProps=i!==void 0,W.current.order=f,w.onCollapse=u,w.onExpand=c,w.onResize=d,C.collapsedSize=t,C.collapsible=r,C.defaultSize=o,C.maxSize=l,C.minSize=a,(j.collapsedSize!==C.collapsedSize||j.collapsible!==C.collapsible||j.maxSize!==C.maxSize||j.minSize!==C.minSize)&&N(W.current,j)}),Zt(()=>{const w=W.current;return P(w),()=>{A(w)}},[f,O,P,A]),S.useImperativeHandle(s,()=>({collapse:()=>{p(W.current)},expand:w=>{h(W.current,w)},getId(){return O},getSize(){return y(W.current)},isCollapsed(){return z(W.current)},isExpanded(){return!z(W.current)},resize:w=>{F(W.current,w)}}),[p,h,y,z,O,F]);const $=x(W.current,o);return S.createElement(v,{...g,children:e,className:n,id:O,style:{...$,...m},[be.groupId]:_,[be.panel]:"",[be.panelCollapsible]:r||void 0,[be.panelId]:O,[be.panelSize]:parseFloat(""+$.flexGrow).toFixed(1)})}const zo=S.forwardRef((e,n)=>S.createElement(Im,{...e,forwardedRef:n}));Im.displayName="Panel";zo.displayName="forwardRef(Panel)";let pu=null,pi=-1,gt=null;function P1(e,n){if(n){const t=(n&Fm)!==0,r=(n&Am)!==0,o=(n&Rm)!==0,s=(n&Dm)!==0;if(t)return o?"se-resize":s?"ne-resize":"e-resize";if(r)return o?"sw-resize":s?"nw-resize":"w-resize";if(o)return"s-resize";if(s)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function F1(){gt!==null&&(document.head.removeChild(gt),pu=null,gt=null,pi=-1)}function ta(e,n){var t,r;const o=P1(e,n);if(pu!==o){if(pu=o,gt===null&&(gt=document.createElement("style"),document.head.appendChild(gt)),pi>=0){var s;(s=gt.sheet)===null||s===void 0||s.removeRule(pi)}pi=(t=(r=gt.sheet)===null||r===void 0?void 0:r.insertRule(`*{cursor: ${o} !important;}`))!==null&&t!==void 0?t:-1}}function Cm(e){return e.type==="keydown"}function Mm(e){return e.type.startsWith("pointer")}function Tm(e){return e.type.startsWith("mouse")}function ml(e){if(Mm(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Tm(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function A1(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function R1(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function D1(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:cf(e),b:cf(n)};let r;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),r=e;oe(r,"Stacking order can only be calculated for elements with a common ancestor");const o={a:uf(af(t.a)),b:uf(af(t.b))};if(o.a===o.b){const s=r.childNodes,i={a:t.a.at(-1),b:t.b.at(-1)};let l=s.length;for(;l--;){const a=s[l];if(a===i.a)return 1;if(a===i.b)return-1}}return Math.sign(o.a-o.b)}const L1=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function O1(e){var n;const t=getComputedStyle((n=Pm(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function H1(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||O1(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||L1.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function af(e){let n=e.length;for(;n--;){const t=e[n];if(oe(t,"Missing node"),H1(t))return t}return null}function uf(e){return e&&Number(getComputedStyle(e).zIndex)||0}function cf(e){const n=[];for(;e;)n.push(e),e=Pm(e);return n}function Pm(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const Fm=1,Am=2,Rm=4,Dm=8,B1=A1()==="coarse";let Cn=[],Vr=!1,Wt=new Map,gl=new Map;const ss=new Set;function V1(e,n,t,r,o){var s;const{ownerDocument:i}=n,l={direction:t,element:n,hitAreaMargins:r,setResizeHandlerState:o},a=(s=Wt.get(i))!==null&&s!==void 0?s:0;return Wt.set(i,a+1),ss.add(l),Vi(),function(){var c;gl.delete(e),ss.delete(l);const d=(c=Wt.get(i))!==null&&c!==void 0?c:1;if(Wt.set(i,d-1),Vi(),d===1&&Wt.delete(i),Cn.includes(l)){const f=Cn.indexOf(l);f>=0&&Cn.splice(f,1),Ic(),o("up",!0,null)}}}function U1(e){const{target:n}=e,{x:t,y:r}=ml(e);Vr=!0,jc({target:n,x:t,y:r}),Vi(),Cn.length>0&&(Ui("down",e),e.preventDefault(),Lm(n)||e.stopImmediatePropagation())}function ra(e){const{x:n,y:t}=ml(e);if(Vr&&e.buttons===0&&(Vr=!1,Ui("up",e)),!Vr){const{target:r}=e;jc({target:r,x:n,y:t})}Ui("move",e),Ic(),Cn.length>0&&e.preventDefault()}function oa(e){const{target:n}=e,{x:t,y:r}=ml(e);gl.clear(),Vr=!1,Cn.length>0&&(e.preventDefault(),Lm(n)||e.stopImmediatePropagation()),Ui("up",e),jc({target:n,x:t,y:r}),Ic(),Vi()}function Lm(e){let n=e;for(;n;){if(n.hasAttribute(be.resizeHandle))return!0;n=n.parentElement}return!1}function jc({target:e,x:n,y:t}){Cn.splice(0);let r=null;(e instanceof HTMLElement||e instanceof SVGElement)&&(r=e),ss.forEach(o=>{const{element:s,hitAreaMargins:i}=o,l=s.getBoundingClientRect(),{bottom:a,left:u,right:c,top:d}=l,f=B1?i.coarse:i.fine;if(n>=u-f&&n<=c+f&&t>=d-f&&t<=a+f){if(r!==null&&document.contains(r)&&s!==r&&!s.contains(r)&&!r.contains(s)&&D1(r,s)>0){let v=r,g=!1;for(;v&&!v.contains(s);){if(R1(v.getBoundingClientRect(),l)){g=!0;break}v=v.parentElement}if(g)return}Cn.push(o)}})}function sa(e,n){gl.set(e,n)}function Ic(){let e=!1,n=!1;Cn.forEach(r=>{const{direction:o}=r;o==="horizontal"?e=!0:n=!0});let t=0;gl.forEach(r=>{t|=r}),e&&n?ta("intersection",t):e?ta("horizontal",t):n?ta("vertical",t):F1()}let ia=new AbortController;function Vi(){ia.abort(),ia=new AbortController;const e={capture:!0,signal:ia.signal};ss.size&&(Vr?(Cn.length>0&&Wt.forEach((n,t)=>{const{body:r}=t;n>0&&(r.addEventListener("contextmenu",oa,e),r.addEventListener("pointerleave",ra,e),r.addEventListener("pointermove",ra,e))}),window.addEventListener("pointerup",oa,e),window.addEventListener("pointercancel",oa,e)):Wt.forEach((n,t)=>{const{body:r}=t;n>0&&(r.addEventListener("pointerdown",U1,e),r.addEventListener("pointermove",ra,e))}))}function Ui(e,n){ss.forEach(t=>{const{setResizeHandlerState:r}=t,o=Cn.includes(t);r(e,o,n)})}function W1(){const[e,n]=S.useState(0);return S.useCallback(()=>n(t=>t+1),[])}function oe(e,n){if(!e)throw console.error(n),Error(n)}function ir(e,n,t=_c){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function Qn(e,n,t=_c){return ir(e,n,t)===0}function nn(e,n,t){return ir(e,n,t)===0}function $1(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){const o=e[r],s=n[r];if(!nn(o,s,t))return!1}return!0}function Fr({panelConstraints:e,panelIndex:n,size:t}){const r=e[n];oe(r!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:o=0,collapsible:s,maxSize:i=100,minSize:l=0}=r;if(ir(t,l)<0)if(s){const a=(o+l)/2;ir(t,a)<0?t=o:t=l}else t=l;return t=Math.min(i,t),t=parseFloat(t.toFixed(_c)),t}function jo({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:r,prevLayout:o,trigger:s}){if(nn(e,0))return n;const i=[...n],[l,a]=r;oe(l!=null,"Invalid first pivot index"),oe(a!=null,"Invalid second pivot index");let u=0;if(s==="keyboard"){{const d=e<0?a:l,f=t[d];oe(f,`Panel constraints not found for index ${d}`);const{collapsedSize:m=0,collapsible:v,minSize:g=0}=f;if(v){const b=n[d];if(oe(b!=null,`Previous layout not found for panel index ${d}`),nn(b,m)){const p=g-b;ir(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}{const d=e<0?l:a,f=t[d];oe(f,`No panel constraints found for index ${d}`);const{collapsedSize:m=0,collapsible:v,minSize:g=0}=f;if(v){const b=n[d];if(oe(b!=null,`Previous layout not found for panel index ${d}`),nn(b,g)){const p=b-m;ir(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}}{const d=e<0?1:-1;let f=e<0?a:l,m=0;for(;;){const g=n[f];oe(g!=null,`Previous layout not found for panel index ${f}`);const p=Fr({panelConstraints:t,panelIndex:f,size:100})-g;if(m+=p,f+=d,f<0||f>=t.length)break}const v=Math.min(Math.abs(e),Math.abs(m));e=e<0?0-v:v}{let f=e<0?l:a;for(;f>=0&&f<t.length;){const m=Math.abs(e)-Math.abs(u),v=n[f];oe(v!=null,`Previous layout not found for panel index ${f}`);const g=v-m,b=Fr({panelConstraints:t,panelIndex:f,size:g});if(!nn(v,b)&&(u+=v-b,i[f]=b,u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?f--:f++}}if($1(o,i))return o;{const d=e<0?a:l,f=n[d];oe(f!=null,`Previous layout not found for panel index ${d}`);const m=f+u,v=Fr({panelConstraints:t,panelIndex:d,size:m});if(i[d]=v,!nn(v,m)){let g=m-v,p=e<0?a:l;for(;p>=0&&p<t.length;){const h=i[p];oe(h!=null,`Previous layout not found for panel index ${p}`);const y=h+g,x=Fr({panelConstraints:t,panelIndex:p,size:y});if(nn(h,x)||(g-=x-h,i[p]=x),nn(g,0))break;e>0?p--:p++}}}const c=i.reduce((d,f)=>f+d,0);return nn(c,100)?i:o}function K1({layout:e,panelsArray:n,pivotIndices:t}){let r=0,o=100,s=0,i=0;const l=t[0];oe(l!=null,"No pivot index found"),n.forEach((d,f)=>{const{constraints:m}=d,{maxSize:v=100,minSize:g=0}=m;f===l?(r=g,o=v):(s+=g,i+=v)});const a=Math.min(o,100-s),u=Math.max(r,100-i),c=e[l];return{valueMax:a,valueMin:u,valueNow:c}}function is(e,n=document){return Array.from(n.querySelectorAll(`[${be.resizeHandleId}][data-panel-group-id="${e}"]`))}function Om(e,n,t=document){const o=is(e,t).findIndex(s=>s.getAttribute(be.resizeHandleId)===n);return o??null}function Hm(e,n,t){const r=Om(e,n,t);return r!=null?[r,r+1]:[-1,-1]}function Bm(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const r=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return r||null}function yl(e,n=document){const t=n.querySelector(`[${be.resizeHandleId}="${e}"]`);return t||null}function G1(e,n,t,r=document){var o,s,i,l;const a=yl(n,r),u=is(e,r),c=a?u.indexOf(a):-1,d=(o=(s=t[c])===null||s===void 0?void 0:s.id)!==null&&o!==void 0?o:null,f=(i=(l=t[c+1])===null||l===void 0?void 0:l.id)!==null&&i!==void 0?i:null;return[d,f]}function Q1({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:r,panelDataArray:o,panelGroupElement:s,setLayout:i}){S.useRef({didWarnAboutMissingResizeHandle:!1}),Zt(()=>{if(!s)return;const l=is(t,s);for(let a=0;a<o.length-1;a++){const{valueMax:u,valueMin:c,valueNow:d}=K1({layout:r,panelsArray:o,pivotIndices:[a,a+1]}),f=l[a];if(f!=null){const m=o[a];oe(m,`No panel data found for index "${a}"`),f.setAttribute("aria-controls",m.id),f.setAttribute("aria-valuemax",""+Math.round(u)),f.setAttribute("aria-valuemin",""+Math.round(c)),f.setAttribute("aria-valuenow",d!=null?""+Math.round(d):"")}}return()=>{l.forEach((a,u)=>{a.removeAttribute("aria-controls"),a.removeAttribute("aria-valuemax"),a.removeAttribute("aria-valuemin"),a.removeAttribute("aria-valuenow")})}},[t,r,o,s]),S.useEffect(()=>{if(!s)return;const l=n.current;oe(l,"Eager values not found");const{panelDataArray:a}=l,u=Bm(t,s);oe(u!=null,`No group found for id "${t}"`);const c=is(t,s);oe(c,`No resize handles found for group id "${t}"`);const d=c.map(f=>{const m=f.getAttribute(be.resizeHandleId);oe(m,"Resize handle element has no handle id attribute");const[v,g]=G1(t,m,a,s);if(v==null||g==null)return()=>{};const b=p=>{if(!p.defaultPrevented)switch(p.key){case"Enter":{p.preventDefault();const h=a.findIndex(y=>y.id===v);if(h>=0){const y=a[h];oe(y,`No panel data found for index ${h}`);const x=r[h],{collapsedSize:_=0,collapsible:z,minSize:N=0}=y.constraints;if(x!=null&&z){const P=jo({delta:nn(x,_)?N-_:_-x,initialLayout:r,panelConstraints:a.map(F=>F.constraints),pivotIndices:Hm(t,m,s),prevLayout:r,trigger:"keyboard"});r!==P&&i(P)}}break}}};return f.addEventListener("keydown",b),()=>{f.removeEventListener("keydown",b)}});return()=>{d.forEach(f=>f())}},[s,e,n,t,r,o,i])}function df(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Vm(e,n){const t=e==="horizontal",{x:r,y:o}=ml(n);return t?r:o}function Y1(e,n,t,r,o){const s=t==="horizontal",i=yl(n,o);oe(i,`No resize handle element found for id "${n}"`);const l=i.getAttribute(be.groupId);oe(l,"Resize handle element has no group id attribute");let{initialCursorPosition:a}=r;const u=Vm(t,e),c=Bm(l,o);oe(c,`No group element found for id "${l}"`);const d=c.getBoundingClientRect(),f=s?d.width:d.height;return(u-a)/f*100}function X1(e,n,t,r,o,s){if(Cm(e)){const i=t==="horizontal";let l=0;e.shiftKey?l=100:o!=null?l=o:l=10;let a=0;switch(e.key){case"ArrowDown":a=i?0:l;break;case"ArrowLeft":a=i?-l:0;break;case"ArrowRight":a=i?l:0;break;case"ArrowUp":a=i?0:-l;break;case"End":a=100;break;case"Home":a=-100;break}return a}else return r==null?0:Y1(e,n,t,r,s)}function q1({panelDataArray:e}){const n=Array(e.length),t=e.map(s=>s.constraints);let r=0,o=100;for(let s=0;s<e.length;s++){const i=t[s];oe(i,`Panel constraints not found for index ${s}`);const{defaultSize:l}=i;l!=null&&(r++,n[s]=l,o-=l)}for(let s=0;s<e.length;s++){const i=t[s];oe(i,`Panel constraints not found for index ${s}`);const{defaultSize:l}=i;if(l!=null)continue;const a=e.length-r,u=o/a;r++,n[s]=u,o-=u}return n}function mr(e,n,t){n.forEach((r,o)=>{const s=e[o];oe(s,`Panel data not found for index ${o}`);const{callbacks:i,constraints:l,id:a}=s,{collapsedSize:u=0,collapsible:c}=l,d=t[a];if(d==null||r!==d){t[a]=r;const{onCollapse:f,onExpand:m,onResize:v}=i;v&&v(r,d),c&&(f||m)&&(m&&(d==null||Qn(d,u))&&!Qn(r,u)&&m(),f&&(d==null||!Qn(d,u))&&Qn(r,u)&&f())}})}function Bs(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Z1({defaultSize:e,dragState:n,layout:t,panelData:r,panelIndex:o,precision:s=3}){const i=t[o];let l;return i==null?l=e!=null?e.toPrecision(s):"1":r.length===1?l="1":l=i.toPrecision(s),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function J1(e,n=10){let t=null;return(...o)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...o)},n)}}function ff(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Um(e){return`react-resizable-panels:${e}`}function Wm(e){return e.map(n=>{const{constraints:t,id:r,idIsFromProps:o,order:s}=n;return o?r:s?`${s}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function $m(e,n){try{const t=Um(e),r=n.getItem(t);if(r){const o=JSON.parse(r);if(typeof o=="object"&&o!=null)return o}}catch{}return null}function ex(e,n,t){var r,o;const s=(r=$m(e,t))!==null&&r!==void 0?r:{},i=Wm(n);return(o=s[i])!==null&&o!==void 0?o:null}function nx(e,n,t,r,o){var s;const i=Um(e),l=Wm(n),a=(s=$m(e,o))!==null&&s!==void 0?s:{};a[l]={expandToSizes:Object.fromEntries(t.entries()),layout:r};try{o.setItem(i,JSON.stringify(a))}catch(u){console.error(u)}}function pf({layout:e,panelConstraints:n}){const t=[...e],r=t.reduce((s,i)=>s+i,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(s=>`${s}%`).join(", ")}`);if(!nn(r,100)&&t.length>0)for(let s=0;s<n.length;s++){const i=t[s];oe(i!=null,`No layout data found for index ${s}`);const l=100/r*i;t[s]=l}let o=0;for(let s=0;s<n.length;s++){const i=t[s];oe(i!=null,`No layout data found for index ${s}`);const l=Fr({panelConstraints:n,panelIndex:s,size:i});i!=l&&(o+=i-l,t[s]=l)}if(!nn(o,0))for(let s=0;s<n.length;s++){const i=t[s];oe(i!=null,`No layout data found for index ${s}`);const l=i+o,a=Fr({panelConstraints:n,panelIndex:s,size:l});if(i!==a&&(o-=a-i,t[s]=a,nn(o,0)))break}return t}const tx=100,Io={getItem:e=>(ff(Io),Io.getItem(e)),setItem:(e,n)=>{ff(Io),Io.setItem(e,n)}},hf={};function Km({autoSaveId:e=null,children:n,className:t="",direction:r,forwardedRef:o,id:s=null,onLayout:i=null,keyboardResizeBy:l=null,storage:a=Io,style:u,tagName:c="div",...d}){const f=zc(s),m=S.useRef(null),[v,g]=S.useState(null),[b,p]=S.useState([]),h=W1(),y=S.useRef({}),x=S.useRef(new Map),_=S.useRef(0),z=S.useRef({autoSaveId:e,direction:r,dragState:v,id:f,keyboardResizeBy:l,onLayout:i,storage:a}),N=S.useRef({layout:b,panelDataArray:[],panelDataArrayChanged:!1});S.useRef({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),S.useImperativeHandle(o,()=>({getId:()=>z.current.id,getLayout:()=>{const{layout:D}=N.current;return D},setLayout:D=>{const{onLayout:V}=z.current,{layout:G,panelDataArray:Q}=N.current,K=pf({layout:D,panelConstraints:Q.map(q=>q.constraints)});df(G,K)||(p(K),N.current.layout=K,V&&V(K),mr(Q,K,y.current))}}),[]),Zt(()=>{z.current.autoSaveId=e,z.current.direction=r,z.current.dragState=v,z.current.id=f,z.current.onLayout=i,z.current.storage=a}),Q1({committedValuesRef:z,eagerValuesRef:N,groupId:f,layout:b,panelDataArray:N.current.panelDataArray,setLayout:p,panelGroupElement:m.current}),S.useEffect(()=>{const{panelDataArray:D}=N.current;if(e){if(b.length===0||b.length!==D.length)return;let V=hf[e];V==null&&(V=J1(nx,tx),hf[e]=V);const G=[...D],Q=new Map(x.current);V(e,G,Q,b,a)}},[e,b,a]),S.useEffect(()=>{});const P=S.useCallback(D=>{const{onLayout:V}=z.current,{layout:G,panelDataArray:Q}=N.current;if(D.constraints.collapsible){const K=Q.map(X=>X.constraints),{collapsedSize:q=0,panelSize:E,pivotIndices:U}=Ht(Q,D,G);if(oe(E!=null,`Panel size not found for panel "${D.id}"`),!Qn(E,q)){x.current.set(D.id,E);const ne=br(Q,D)===Q.length-1?E-q:q-E,re=jo({delta:ne,initialLayout:G,panelConstraints:K,pivotIndices:U,prevLayout:G,trigger:"imperative-api"});Bs(G,re)||(p(re),N.current.layout=re,V&&V(re),mr(Q,re,y.current))}}},[]),F=S.useCallback((D,V)=>{const{onLayout:G}=z.current,{layout:Q,panelDataArray:K}=N.current;if(D.constraints.collapsible){const q=K.map(ae=>ae.constraints),{collapsedSize:E=0,panelSize:U=0,minSize:X=0,pivotIndices:ne}=Ht(K,D,Q),re=V??X;if(Qn(U,E)){const ae=x.current.get(D.id),de=ae!=null&&ae>=re?ae:re,ue=br(K,D)===K.length-1?U-de:de-U,Z=jo({delta:ue,initialLayout:Q,panelConstraints:q,pivotIndices:ne,prevLayout:Q,trigger:"imperative-api"});Bs(Q,Z)||(p(Z),N.current.layout=Z,G&&G(Z),mr(K,Z,y.current))}}},[]),A=S.useCallback(D=>{const{layout:V,panelDataArray:G}=N.current,{panelSize:Q}=Ht(G,D,V);return oe(Q!=null,`Panel size not found for panel "${D.id}"`),Q},[]),O=S.useCallback((D,V)=>{const{panelDataArray:G}=N.current,Q=br(G,D);return Z1({defaultSize:V,dragState:v,layout:b,panelData:G,panelIndex:Q})},[v,b]),W=S.useCallback(D=>{const{layout:V,panelDataArray:G}=N.current,{collapsedSize:Q=0,collapsible:K,panelSize:q}=Ht(G,D,V);return oe(q!=null,`Panel size not found for panel "${D.id}"`),K===!0&&Qn(q,Q)},[]),$=S.useCallback(D=>{const{layout:V,panelDataArray:G}=N.current,{collapsedSize:Q=0,collapsible:K,panelSize:q}=Ht(G,D,V);return oe(q!=null,`Panel size not found for panel "${D.id}"`),!K||ir(q,Q)>0},[]),w=S.useCallback(D=>{const{panelDataArray:V}=N.current;V.push(D),V.sort((G,Q)=>{const K=G.order,q=Q.order;return K==null&&q==null?0:K==null?-1:q==null?1:K-q}),N.current.panelDataArrayChanged=!0,h()},[h]);Zt(()=>{if(N.current.panelDataArrayChanged){N.current.panelDataArrayChanged=!1;const{autoSaveId:D,onLayout:V,storage:G}=z.current,{layout:Q,panelDataArray:K}=N.current;let q=null;if(D){const U=ex(D,K,G);U&&(x.current=new Map(Object.entries(U.expandToSizes)),q=U.layout)}q==null&&(q=q1({panelDataArray:K}));const E=pf({layout:q,panelConstraints:K.map(U=>U.constraints)});df(Q,E)||(p(E),N.current.layout=E,V&&V(E),mr(K,E,y.current))}}),Zt(()=>{const D=N.current;return()=>{D.layout=[]}},[]);const C=S.useCallback(D=>{let V=!1;const G=m.current;return G&&window.getComputedStyle(G,null).getPropertyValue("direction")==="rtl"&&(V=!0),function(K){K.preventDefault();const q=m.current;if(!q)return()=>null;const{direction:E,dragState:U,id:X,keyboardResizeBy:ne,onLayout:re}=z.current,{layout:ae,panelDataArray:de}=N.current,{initialLayout:je}=U??{},ue=Hm(X,D,q);let Z=X1(K,D,E,U,ne,q);const Ie=E==="horizontal";Ie&&V&&(Z=-Z);const xn=de.map(lt=>lt.constraints),wn=jo({delta:Z,initialLayout:je??ae,panelConstraints:xn,pivotIndices:ue,prevLayout:ae,trigger:Cm(K)?"keyboard":"mouse-or-touch"}),Vn=!Bs(ae,wn);(Mm(K)||Tm(K))&&_.current!=Z&&(_.current=Z,!Vn&&Z!==0?Ie?sa(D,Z<0?Fm:Am):sa(D,Z<0?Rm:Dm):sa(D,0)),Vn&&(p(wn),N.current.layout=wn,re&&re(wn),mr(de,wn,y.current))}},[]),j=S.useCallback((D,V)=>{const{onLayout:G}=z.current,{layout:Q,panelDataArray:K}=N.current,q=K.map(ae=>ae.constraints),{panelSize:E,pivotIndices:U}=Ht(K,D,Q);oe(E!=null,`Panel size not found for panel "${D.id}"`);const ne=br(K,D)===K.length-1?E-V:V-E,re=jo({delta:ne,initialLayout:Q,panelConstraints:q,pivotIndices:U,prevLayout:Q,trigger:"imperative-api"});Bs(Q,re)||(p(re),N.current.layout=re,G&&G(re),mr(K,re,y.current))},[]),H=S.useCallback((D,V)=>{const{layout:G,panelDataArray:Q}=N.current,{collapsedSize:K=0,collapsible:q}=V,{collapsedSize:E=0,collapsible:U,maxSize:X=100,minSize:ne=0}=D.constraints,{panelSize:re}=Ht(Q,D,G);re!=null&&(q&&U&&Qn(re,K)?Qn(K,E)||j(D,E):re<ne?j(D,ne):re>X&&j(D,X))},[j]),M=S.useCallback((D,V)=>{const{direction:G}=z.current,{layout:Q}=N.current;if(!m.current)return;const K=yl(D,m.current);oe(K,`Drag handle element not found for id "${D}"`);const q=Vm(G,V);g({dragHandleId:D,dragHandleRect:K.getBoundingClientRect(),initialCursorPosition:q,initialLayout:Q})},[]),k=S.useCallback(()=>{g(null)},[]),T=S.useCallback(D=>{const{panelDataArray:V}=N.current,G=br(V,D);G>=0&&(V.splice(G,1),delete y.current[D.id],N.current.panelDataArrayChanged=!0,h())},[h]),L=S.useMemo(()=>({collapsePanel:P,direction:r,dragState:v,expandPanel:F,getPanelSize:A,getPanelStyle:O,groupId:f,isPanelCollapsed:W,isPanelExpanded:$,reevaluatePanelConstraints:H,registerPanel:w,registerResizeHandle:C,resizePanel:j,startDragging:M,stopDragging:k,unregisterPanel:T,panelGroupElement:m.current}),[P,v,r,F,A,O,f,W,$,H,w,C,j,M,k,T]),B={display:"flex",flexDirection:r==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return S.createElement(hl.Provider,{value:L},S.createElement(c,{...d,children:n,className:t,id:s,ref:m,style:{...B,...u},[be.group]:"",[be.groupDirection]:r,[be.groupId]:f}))}const hu=S.forwardRef((e,n)=>S.createElement(Km,{...e,forwardedRef:n}));Km.displayName="PanelGroup";hu.displayName="forwardRef(PanelGroup)";function br(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function Ht(e,n,t){const r=br(e,n),s=r===e.length-1?[r-1,r]:[r,r+1],i=t[r];return{...n.constraints,panelSize:i,pivotIndices:s}}function rx({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:r}){S.useEffect(()=>{if(e||t==null||r==null)return;const o=yl(n,r);if(o==null)return;const s=i=>{if(!i.defaultPrevented)switch(i.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{i.preventDefault(),t(i);break}case"F6":{i.preventDefault();const l=o.getAttribute(be.groupId);oe(l,`No group element found for id "${l}"`);const a=is(l,r),u=Om(l,n,r);oe(u!==null,`No resize element found for id "${n}"`);const c=i.shiftKey?u>0?u-1:a.length-1:u+1<a.length?u+1:0;a[c].focus();break}}};return o.addEventListener("keydown",s),()=>{o.removeEventListener("keydown",s)}},[r,e,n,t])}function mu({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:r,id:o,onBlur:s,onClick:i,onDragging:l,onFocus:a,onPointerDown:u,onPointerUp:c,style:d={},tabIndex:f=0,tagName:m="div",...v}){var g,b;const p=S.useRef(null),h=S.useRef({onClick:i,onDragging:l,onPointerDown:u,onPointerUp:c});S.useEffect(()=>{h.current.onClick=i,h.current.onDragging=l,h.current.onPointerDown=u,h.current.onPointerUp=c});const y=S.useContext(hl);if(y===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:x,groupId:_,registerResizeHandle:z,startDragging:N,stopDragging:P,panelGroupElement:F}=y,A=zc(o),[O,W]=S.useState("inactive"),[$,w]=S.useState(!1),[C,j]=S.useState(null),H=S.useRef({state:O});Zt(()=>{H.current.state=O}),S.useEffect(()=>{if(t)j(null);else{const L=z(A);j(()=>L)}},[t,A,z]);const M=(g=r==null?void 0:r.coarse)!==null&&g!==void 0?g:15,k=(b=r==null?void 0:r.fine)!==null&&b!==void 0?b:5;S.useEffect(()=>{if(t||C==null)return;const L=p.current;oe(L,"Element ref not attached");let B=!1;return V1(A,L,x,{coarse:M,fine:k},(V,G,Q)=>{if(!G){W("inactive");return}switch(V){case"down":{W("drag"),B=!1,oe(Q,'Expected event to be defined for "down" action'),N(A,Q);const{onDragging:K,onPointerDown:q}=h.current;K==null||K(!0),q==null||q();break}case"move":{const{state:K}=H.current;B=!0,K!=="drag"&&W("hover"),oe(Q,'Expected event to be defined for "move" action'),C(Q);break}case"up":{W("hover"),P();const{onClick:K,onDragging:q,onPointerUp:E}=h.current;q==null||q(!1),E==null||E(),B||K==null||K();break}}})},[M,x,t,k,z,A,C,N,P]),rx({disabled:t,handleId:A,resizeHandler:C,panelGroupElement:F});const T={touchAction:"none",userSelect:"none"};return S.createElement(m,{...v,children:e,className:n,id:o,onBlur:()=>{w(!1),s==null||s()},onFocus:()=>{w(!0),a==null||a()},ref:p,role:"separator",style:{...T,...d},tabIndex:f,[be.groupDirection]:x,[be.groupId]:_,[be.resizeHandle]:"",[be.resizeHandleActive]:O==="drag"?"pointer":$?"keyboard":void 0,[be.resizeHandleEnabled]:!t,[be.resizeHandleId]:A,[be.resizeHandleState]:O})}mu.displayName="PanelResizeHandle";const ox={},mf=e=>{let n;const t=new Set,r=(c,d)=>{const f=typeof c=="function"?c(n):c;if(!Object.is(f,n)){const m=n;n=d??(typeof f!="object"||f===null)?f:Object.assign({},n,f),t.forEach(v=>v(n,m))}},o=()=>n,a={setState:r,getState:o,getInitialState:()=>u,subscribe:c=>(t.add(c),()=>t.delete(c)),destroy:()=>{(ox?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},u=n=e(r,o,a);return a},Gm=e=>e?mf(e):mf;var Qm={exports:{}},Ym={},Xm={exports:{}},qm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=S;function sx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ix=typeof Object.is=="function"?Object.is:sx,lx=Jr.useState,ax=Jr.useEffect,ux=Jr.useLayoutEffect,cx=Jr.useDebugValue;function dx(e,n){var t=n(),r=lx({inst:{value:t,getSnapshot:n}}),o=r[0].inst,s=r[1];return ux(function(){o.value=t,o.getSnapshot=n,la(o)&&s({inst:o})},[e,t,n]),ax(function(){return la(o)&&s({inst:o}),e(function(){la(o)&&s({inst:o})})},[e]),cx(t),t}function la(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ix(e,t)}catch{return!0}}function fx(e,n){return n()}var px=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?fx:dx;qm.useSyncExternalStore=Jr.useSyncExternalStore!==void 0?Jr.useSyncExternalStore:px;Xm.exports=qm;var hx=Xm.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=S,mx=hx;function gx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yx=typeof Object.is=="function"?Object.is:gx,vx=mx.useSyncExternalStore,xx=vl.useRef,wx=vl.useEffect,bx=vl.useMemo,Sx=vl.useDebugValue;Ym.useSyncExternalStoreWithSelector=function(e,n,t,r,o){var s=xx(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=bx(function(){function a(m){if(!u){if(u=!0,c=m,m=r(m),o!==void 0&&i.hasValue){var v=i.value;if(o(v,m))return d=v}return d=m}if(v=d,yx(c,m))return v;var g=r(m);return o!==void 0&&o(v,g)?(c=m,v):(c=m,d=g)}var u=!1,c,d,f=t===void 0?null:t;return[function(){return a(n())},f===null?void 0:function(){return a(f())}]},[n,t,r,o]);var l=vx(e,s[0],s[1]);return wx(function(){i.hasValue=!0,i.value=l},[l]),Sx(l),l};Qm.exports=Ym;var kx=Qm.exports;const Zm=gp(kx),Jm={},{useDebugValue:Ex}=R,{useSyncExternalStoreWithSelector:Nx}=Zm;let gf=!1;const _x=e=>e;function zx(e,n=_x,t){(Jm?"production":void 0)!=="production"&&t&&!gf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),gf=!0);const r=Nx(e.subscribe,e.getState,e.getServerState||e.getInitialState,n,t);return Ex(r),r}const yf=e=>{(Jm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const n=typeof e=="function"?Gm(e):e,t=(r,o)=>zx(n,r,o);return Object.assign(t,n),t},jx=e=>e?yf(e):yf,Ix=`# Infinite Spatial IDE

A prototype of a spatial, infinitely-zoomable code editor where files and functions live on a 2D map instead of a file tree. Single-clicking a function reveals its call graph as live edges and dynamic "port" connectors on the file's edges.

> Prototype only — there is **no backend**. The entire app is driven by a hardcoded mock graph in [\`src/store.js\`](src/store.js).

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

## The core idea: focus → ports

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
├─ store.js                 # mock graph + all state/logic (start here)
├─ App.jsx
└─ components/
   ├─ Layout.jsx            # 30/70 split, left column split 50/50
   ├─ FileExplorer.jsx
   ├─ BookmarkManager.jsx
   ├─ MapView.jsx           # node/edge/port derivation, click logic, search, context menu
   ├─ TerminalModal.jsx
   └─ nodes/
      ├─ SubspaceNode.jsx
      ├─ FileNode.jsx
      ├─ FunctionNode.jsx
      ├─ TunableNode.jsx
      └─ PortNode.jsx
\`\`\`

## Known prototype limitations

- **No cross-file drag-reparenting** — functions are clamped to their parent file (\`extent: 'parent'\`). Files auto-grow to contain their functions, but a function can't yet be dragged from one file into another.
- Node positions commit to the store on every drag frame (fine at this scale; would want a drag-end debounce for large graphs).
- Creation flows use \`window.prompt\` to stay dependency-free — swap for a real modal in production.
`,Cx=`<!doctype html>
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
`,Mx=`{
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
      "libc": [
        "glibc"
      ],
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
      "libc": [
        "musl"
      ],
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
      "libc": [
        "glibc"
      ],
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
      "libc": [
        "musl"
      ],
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
      "libc": [
        "glibc"
      ],
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
      "libc": [
        "musl"
      ],
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
      "libc": [
        "glibc"
      ],
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
      "libc": [
        "musl"
      ],
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
      "libc": [
        "glibc"
      ],
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
      "libc": [
        "musl"
      ],
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
      "libc": [
        "glibc"
      ],
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
      "libc": [
        "glibc"
      ],
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
      "libc": [
        "musl"
      ],
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
`,Tx=`{
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
`,Px=`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`,Fx=`import Layout from './components/Layout'

export default function App() {
  return <Layout />
}
`,Ax=`import { useStore } from '../store'
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
`,Rx=`import { useMemo } from 'react'
import { useStore } from '../store'

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

  const source = isProject ? projectFiles : files

  const grouped = useMemo(() => {
    const g = {}
    for (const f of Object.values(source)) {
      const key = isProject ? f.folder : f.folderPath
      ;(g[key] ||= []).push(f)
    }
    return Object.entries(g).sort(([a], [b]) => a.localeCompare(b))
  }, [source, isProject])

  const fnCount = (fileId) => Object.values(functions).filter((f) => f.fileId === fileId).length

  const onPick = (f) => {
    if (isProject) {
      selectProjectFile(f.id)
      requestFocus(f.id)
    } else {
      focusFile(f.id)
    }
  }

  return (
    <div className="flex h-full flex-col bg-panel">
      <Header title="File Explorer" badge={Object.keys(source).length} />
      <div className="thin-scroll flex-1 overflow-auto py-1">
        {grouped.map(([folder, list]) => (
          <div key={folder} className="mb-1">
            <div className="flex items-center gap-1.5 px-3 py-1 text-[11px] text-slate-500">
              <span>▾</span>
              <span className="truncate font-mono">{folder || '/'}</span>
            </div>
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
`,Dx=`import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import FileExplorer from './FileExplorer'
import BookmarkManager from './BookmarkManager'
import MapView from './MapView'
import TerminalModal from './TerminalModal'

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
    </div>
  )
}
`,Lx=`import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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

const nodeTypes = {
  subspace: SubspaceNode,
  file: FileNode,
  function: FunctionNode,
  tunable: TunableNode,
  port: PortNode,
  cluster: ClusterNode,
  projectFile: ProjectFileNode,
}

const DOWNSTREAM_COLOR = '#34d399' // selection AFFECTS these (arrow exits selection's right)
const UPSTREAM_COLOR = '#f59e0b' // these AFFECT the selection (arrow enters selection's left)

/* ---------- helpers ---------- */
function makeEdge(source, target, color) {
  return {
    id: \`e-\${source}-\${target}\`,
    source,
    target,
    animated: true,
    className: 'focus-edge',
    style: { stroke: color, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color, width: 16, height: 16 },
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
    focus.internalUpstream.forEach((cid) => E.push(makeEdge(cid, fid, '#818cf8')))
    focus.internalDownstream.forEach((cid) => E.push(makeEdge(fid, cid, '#818cf8')))
    focus.leftPorts.forEach((p) => E.push(makeEdge(\`port-l-\${p.extFnId}\`, fid, FILE_COLORS[p.extFileId] || '#94a3b8')))
    focus.rightPorts.forEach((p) => E.push(makeEdge(fid, \`port-r-\${p.extFnId}\`, FILE_COLORS[p.extFileId] || '#94a3b8')))
    return E
  }, [focusedNodeId, functions, calls])

  /* ===========================================================================
   *  PROJECT-GRAPH nodes/edges (real directory)
   * ======================================================================== */
  const projectNodes = useMemo(() => {
    const out = []
    // folder clusters (background)
    for (const fld of Object.values(projectFolders)) {
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
      out.push({ id: f.id, type: 'projectFile', position: f.position, data: f, zIndex: 2 })
    }
    return out
  }, [projectFiles, projectFolders])

  const projectFlowEdges = useMemo(() => {
    const focus = getProjectFocus({ selectedProjectFileId, projectEdges })
    if (!focus) return []
    const E = []
    // selection → things it affects (arrow exits selection's RIGHT, enters target's LEFT)
    focus.downstream.forEach((t) => E.push(makeEdge(focus.id, t, DOWNSTREAM_COLOR)))
    // things that affect selection → selection (arrow exits their RIGHT, enters selection's LEFT)
    focus.upstream.forEach((srcId) => E.push(makeEdge(srcId, focus.id, UPSTREAM_COLOR)))
    return E
  }, [selectedProjectFileId, projectEdges])

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
      for (const f of Object.values(projectFiles)) if (f.name.toLowerCase().includes(q)) res.push({ id: f.id, label: f.name, kind: 'file' })
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
          <div className="mb-1 font-semibold text-slate-300">Click a file to trace dependencies</div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block h-0.5 w-5" style={{ background: DOWNSTREAM_COLOR }} /> affects (imports) →
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block h-0.5 w-5" style={{ background: UPSTREAM_COLOR }} /> ← affected by (imported by)
          </div>
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
`,Ox=`import { useEffect } from 'react'
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
`,Hx=`import { memo } from 'react'

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
`,Bx=`import { memo } from 'react'
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
`,Vx=`import { memo } from 'react'
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
`,Ux=`import { memo } from 'react'
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
`,Wx=`import { memo } from 'react'
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

  let relation = 'idle'
  if (selected) {
    if (selected === id) relation = 'selected'
    else if (projectEdges.some((e) => e.source === selected && e.target === id)) relation = 'downstream'
    else if (projectEdges.some((e) => e.target === selected && e.source === id)) relation = 'upstream'
    else relation = 'dim'
  }

  const ext = data.name.split('.').pop()
  const dot = FILE_EXT_COLOR[ext] || '#64748b'

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
        selectProjectFile(selected === id ? null : id)
      }}
      className={[
        'flex cursor-pointer flex-col rounded-lg border px-3 py-2 transition-all duration-200',
        shell,
        relation === 'dim' ? 'opacity-20 hover:opacity-50' : 'opacity-100',
      ].join(' ')}
      style={{ width: 174, height: 62 }}
    >
      <Handle type="target" position={Position.Left} className="!h-2 !w-2 !bg-amber-400" />
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: dot }} />
        <span className="truncate font-mono text-[12px] text-slate-100">{data.name}</span>
      </div>
      <span className="mt-1 truncate pl-[18px] text-[9px] text-slate-500">{data.folder}</span>
      <Handle type="source" position={Position.Right} className="!h-2 !w-2 !bg-emerald-400" />
    </div>
  )
}

export default memo(ProjectFileNode)
`,$x=`import { memo, useState } from 'react'
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
`,Kx=`import { memo } from 'react'

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
`,Gx=`@tailwind base;
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
`,Qx=`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`,Yx=`import { create } from 'zustand'
import { buildProjectGraph } from './projectGraph'

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

  setViewMode: (mode) => set({ viewMode: mode, focusedNodeId: null, selectedProjectFileId: null }),
  selectProjectFile: (id) => set({ selectedProjectFileId: id }),
  clearProjectSelection: () => set({ selectedProjectFileId: null }),

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
`,Xx=`/** @type {import('tailwindcss').Config} */
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
`,qx=`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
`,vf=Object.assign({"/README.md":Ix,"/index.html":Cx,"/package-lock.json":Mx,"/package.json":Tx,"/postcss.config.js":Px,"/src/App.jsx":Fx,"/src/components/BookmarkManager.jsx":Ax,"/src/components/FileExplorer.jsx":Rx,"/src/components/Layout.jsx":Dx,"/src/components/MapView.jsx":Lx,"/src/components/TerminalModal.jsx":Ox,"/src/components/nodes/ClusterNode.jsx":Hx,"/src/components/nodes/FileNode.jsx":Bx,"/src/components/nodes/FunctionNode.jsx":Vx,"/src/components/nodes/PortNode.jsx":Ux,"/src/components/nodes/ProjectFileNode.jsx":Wx,"/src/components/nodes/SubspaceNode.jsx":$x,"/src/components/nodes/TunableNode.jsx":Kx,"/src/index.css":Gx,"/src/main.jsx":Qx,"/src/store.js":Yx,"/tailwind.config.js":Xx,"/vite.config.js":qx});function eg(e){const n=e.lastIndexOf("/");return n<=0?"/":e.slice(0,n)}function Zx(e){return e.slice(e.lastIndexOf("/")+1)}function Jx(e,n){const t=`${e}/${n}`.split("/"),r=[];for(const o of t)o===""||o==="."||(o===".."?r.pop():r.push(o));return"/"+r.join("/")}const ew=["",".js",".jsx",".ts",".tsx",".css","/index.js","/index.jsx","/index.ts","/index.tsx"];function nw(e,n,t){if(!n.startsWith("."))return null;const r=Jx(eg(e),n);for(const o of ew){const s=r+o;if(t.has(s))return s}return null}const tw=/(?:import\s+[^'"]*from\s*|import\s*|require\s*\(\s*|import\s*\(\s*)['"]([^'"]+)['"]/g;function rw(e){const n=[];let t;for(;(t=tw.exec(e))!==null;)n.push(t[1]);return n}const xf=174,wf=62,Vs=16,ow=3,bf=30,Us=18,Sf=90,sw=3;function iw(){const e=Object.keys(vf).sort(),n=new Set(e),t={},r={};for(const d of e){const f=eg(d);t[d]={id:d,name:Zx(d),folder:f,path:d,position:{x:0,y:0}},(r[f]||(r[f]=[])).push(d)}const o=new Set,s=[];for(const d of e){const f=vf[d];if(typeof f=="string")for(const m of rw(f)){const v=nw(d,m,n);if(!v||v===d)continue;const g=`${d}→${v}`;o.has(g)||(o.add(g),s.push({source:d,target:v}))}}const i={},l=Object.keys(r).sort();let a=0,u=0,c=0;return l.forEach((d,f)=>{const m=r[d].slice().sort(),v=Math.min(ow,m.length),g=Math.ceil(m.length/v),b=v*xf+(v-1)*Vs,p=g*wf+(g-1)*Vs,h=b+2*Us,y=bf+p+2*Us;i[d]={id:d,name:d==="/"?"project root":d,position:{x:a,y:u},size:{width:h,height:y}},m.forEach((x,_)=>{const z=_%v,N=Math.floor(_/v);t[x].position={x:a+Us+z*(xf+Vs),y:u+bf+Us+N*(wf+Vs)}}),a+=h+Sf,c=Math.max(c,y),(f+1)%sw===0&&(a=0,u+=c+Sf,c=0)}),{files:t,folders:i,edges:s}}const lw={jsx:"#38bdf8",tsx:"#38bdf8",js:"#eab308",ts:"#eab308",json:"#f59e0b",css:"#ec4899",md:"#94a3b8",html:"#fb923c"},Ge={W:168,H:38,GAP_Y:14},Fe={HEADER:34,PAD:18,MIN_W:220,MIN_H:110},tn={W:16,GAP_Y:26},Ws={"file-auth":"#22d3ee","file-api":"#a78bfa","file-db":"#f472b6","file-ui":"#34d399"},aw={"file-auth":{id:"file-auth",name:"auth.service.ts",folderPath:"src/core/auth",position:{x:80,y:80}},"file-api":{id:"file-api",name:"api.client.ts",folderPath:"src/core/net",position:{x:620,y:60}},"file-db":{id:"file-db",name:"db.repository.ts",folderPath:"src/core/data",position:{x:360,y:520}},"file-ui":{id:"file-ui",name:"profile.view.tsx",folderPath:"src/ui/profile",position:{x:1040,y:380}}},uw={"fn-login":{id:"fn-login",name:"login()",fileId:"file-auth",position:{x:tn.W,y:Fe.HEADER+8}},"fn-validate":{id:"fn-validate",name:"validateToken()",fileId:"file-auth",position:{x:tn.W,y:Fe.HEADER+8+(Ge.H+Ge.GAP_Y)}},"fn-hash":{id:"fn-hash",name:"hashPassword()",fileId:"file-auth",position:{x:tn.W,y:Fe.HEADER+8+2*(Ge.H+Ge.GAP_Y)}},"fn-fetchUser":{id:"fn-fetchUser",name:"fetchUser()",fileId:"file-api",position:{x:tn.W,y:Fe.HEADER+8}},"fn-request":{id:"fn-request",name:"request()",fileId:"file-api",position:{x:tn.W,y:Fe.HEADER+8+(Ge.H+Ge.GAP_Y)}},"fn-query":{id:"fn-query",name:"query()",fileId:"file-db",position:{x:tn.W,y:Fe.HEADER+8}},"fn-connect":{id:"fn-connect",name:"connect()",fileId:"file-db",position:{x:tn.W,y:Fe.HEADER+8+(Ge.H+Ge.GAP_Y)}},"fn-render":{id:"fn-render",name:"renderProfile()",fileId:"file-ui",position:{x:tn.W,y:Fe.HEADER+8}}},cw=[{source:"fn-login",target:"fn-validate"},{source:"fn-login",target:"fn-hash"},{source:"fn-login",target:"fn-fetchUser"},{source:"fn-validate",target:"fn-query"},{source:"fn-fetchUser",target:"fn-request"},{source:"fn-fetchUser",target:"fn-query"},{source:"fn-request",target:"fn-validate"},{source:"fn-query",target:"fn-connect"},{source:"fn-render",target:"fn-fetchUser"},{source:"fn-render",target:"fn-login"}],dw={"sub-core":{id:"sub-core",name:"Core Domain",position:{x:20,y:20},size:{width:760,height:760},color:"#6366f1",description:"Authentication, networking and persistence live here."}},fw={"tune-cache":{id:"tune-cache",name:"CACHE_TTL",value:"300s",position:{x:1060,y:120}}},pw=[{id:"bm-auth",name:"Auth cluster",viewport:{x:40,y:20,zoom:1.1},focusObjectId:"fn-login",temporary:!1},{id:"bm-db",name:"Data layer",viewport:{x:-160,y:-360,zoom:1},focusObjectId:"fn-query",temporary:!1}],aa=iw(),te=jx((e,n)=>({files:aw,functions:uw,calls:cw,subspaces:dw,tunables:fw,bookmarks:pw,viewMode:"project",projectFiles:aa.files,projectFolders:aa.folders,projectEdges:aa.edges,selectedProjectFileId:null,setViewMode:t=>e({viewMode:t,focusedNodeId:null,selectedProjectFileId:null}),selectProjectFile:t=>e({selectedProjectFileId:t}),clearProjectSelection:()=>e({selectedProjectFileId:null}),focusedNodeId:null,focusedFileId:null,expandedSubspaceId:null,terminalFileId:null,searchQuery:"",pendingFocus:null,flowApi:null,setFlowApi:t=>e({flowApi:t}),setFocusedNode:t=>e({focusedNodeId:t}),clearFocus:()=>e({focusedNodeId:null,focusedFileId:null}),focusFile:t=>e({focusedFileId:t,pendingFocus:{id:t}}),requestFocus:t=>e({pendingFocus:{id:t}}),consumePendingFocus:()=>e({pendingFocus:null}),setExpandedSubspace:t=>e({expandedSubspaceId:t,pendingFocus:t?{id:t}:n().pendingFocus}),clearExpandedSubspace:()=>e({expandedSubspaceId:null}),openTerminal:t=>e({terminalFileId:t}),closeTerminal:()=>e({terminalFileId:null}),setSearchQuery:t=>e({searchQuery:t}),moveNode:(t,r)=>e(o=>o.functions[t]?{functions:{...o.functions,[t]:{...o.functions[t],position:r}}}:o.files[t]?{files:{...o.files,[t]:{...o.files[t],position:r}}}:o.subspaces[t]?{subspaces:{...o.subspaces,[t]:{...o.subspaces[t],position:r}}}:o.tunables[t]?{tunables:{...o.tunables,[t]:{...o.tunables[t],position:r}}}:o.projectFiles[t]?{projectFiles:{...o.projectFiles,[t]:{...o.projectFiles[t],position:r}}}:{}),setSubspaceColor:(t,r)=>e(o=>({subspaces:{...o.subspaces,[t]:{...o.subspaces[t],color:r}}})),setSubspaceDescription:(t,r)=>e(o=>({subspaces:{...o.subspaces,[t]:{...o.subspaces[t],description:r}}})),saveBookmark:(t,r)=>e(o=>({bookmarks:[...o.bookmarks,{id:`bm-${Date.now()}`,name:r||`View ${o.bookmarks.length+1}`,viewport:t,focusObjectId:o.focusedNodeId,temporary:!1}]})),pushTemporaryBookmark:t=>e(r=>({bookmarks:[...r.bookmarks,{id:`tmp-${Date.now()}`,name:"↩ Return point",viewport:t,focusObjectId:r.focusedNodeId,temporary:!0}]})),removeBookmark:t=>e(r=>({bookmarks:r.bookmarks.filter(o=>o.id!==t)})),createSubspace:t=>e(r=>{const o=`sub-${Date.now()}`;return{subspaces:{...r.subspaces,[o]:{id:o,name:"New Subspace",position:t,size:{width:360,height:280},color:"#10b981",description:""}}}}),createFile:(t,r)=>e(o=>{const s=`file-${Date.now()}`;return{files:{...o.files,[s]:{id:s,name:"untitled.ts",folderPath:r||"src",position:t}}}}),createFunction:(t,r)=>e(o=>{const s=`fn-${Date.now()}`,i=Object.values(o.functions).filter(a=>a.fileId===t),l=Fe.HEADER+8+i.length*(Ge.H+Ge.GAP_Y);return{functions:{...o.functions,[s]:{id:s,name:r||"newFn()",fileId:t,position:{x:tn.W,y:l}}}}})}));function kf(e,n){const t=Object.values(e).filter(s=>s.fileId===n);if(t.length===0)return{width:Fe.MIN_W,height:Fe.MIN_H};let r=0,o=0;for(const s of t)r=Math.max(r,s.position.x+Ge.W),o=Math.max(o,s.position.y+Ge.H);return{width:Math.max(Fe.MIN_W,r+Fe.PAD+tn.W),height:Math.max(Fe.MIN_H,o+Fe.PAD)}}function Ef(e){const{focusedNodeId:n,functions:t,calls:r}=e,o=n&&t[n];if(!o)return null;const s=o.fileId,i=[],l=[],a=[],u=[];for(const c of r){if(c.target===n){const d=t[c.source];if(!d)continue;d.fileId===s?i.push(d.id):a.push({extFnId:d.id,extFileId:d.fileId})}if(c.source===n){const d=t[c.target];if(!d)continue;d.fileId===s?l.push(d.id):u.push({extFnId:d.id,extFileId:d.fileId})}}return{fileId:s,focusedNodeId:n,internalUpstream:i,internalDownstream:l,leftPorts:a,rightPorts:u}}function hw(e){const{selectedProjectFileId:n,projectEdges:t}=e;if(!n)return null;const r=[],o=[];for(const i of t)i.source===n&&r.push(i.target),i.target===n&&o.push(i.source);const s=new Set([n,...r,...o]);return{id:n,downstream:r,upstream:o,neighbors:s}}function mw(){const n=te(g=>g.viewMode)==="project",t=te(g=>g.files),r=te(g=>g.functions),o=te(g=>g.focusedFileId),s=te(g=>g.focusFile),i=te(g=>g.openTerminal),l=te(g=>g.projectFiles),a=te(g=>g.selectedProjectFileId),u=te(g=>g.selectProjectFile),c=te(g=>g.requestFocus),d=n?l:t,f=S.useMemo(()=>{const g={};for(const b of Object.values(d)){const p=n?b.folder:b.folderPath;(g[p]||(g[p]=[])).push(b)}return Object.entries(g).sort(([b],[p])=>b.localeCompare(p))},[d,n]),m=g=>Object.values(r).filter(b=>b.fileId===g).length,v=g=>{n?(u(g.id),c(g.id)):s(g.id)};return I.jsxs("div",{className:"flex h-full flex-col bg-panel",children:[I.jsx(ng,{title:"File Explorer",badge:Object.keys(d).length}),I.jsx("div",{className:"thin-scroll flex-1 overflow-auto py-1",children:f.map(([g,b])=>I.jsxs("div",{className:"mb-1",children:[I.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 text-[11px] text-slate-500",children:[I.jsx("span",{children:"▾"}),I.jsx("span",{className:"truncate font-mono",children:g||"/"})]}),b.map(p=>{const h=n?a===p.id:o===p.id;return I.jsxs("button",{onClick:()=>v(p),onDoubleClick:()=>!n&&i(p.id),className:["group flex w-full items-center gap-2 py-1 pl-7 pr-3 text-left text-[13px] transition-colors",h?n?"bg-indigo-500/15 text-indigo-200":"bg-amber-500/15 text-amber-200":"text-slate-300 hover:bg-slate-800/60"].join(" "),children:[I.jsx("span",{className:h?n?"text-indigo-400":"text-amber-400":"text-slate-500",children:"▢"}),I.jsx("span",{className:"flex-1 truncate font-mono",children:p.name}),!n&&I.jsx("span",{className:"rounded bg-slate-800 px-1.5 text-[10px] text-slate-400 group-hover:bg-slate-700",children:m(p.id)})]},p.id)})]},g))})]})}function ng({title:e,badge:n,action:t}){return I.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 px-3 py-2",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("h2",{className:"text-[11px] font-semibold uppercase tracking-wider text-slate-400",children:e}),n!=null&&I.jsx("span",{className:"rounded-full bg-slate-800 px-1.5 text-[10px] text-slate-400",children:n})]}),t]})}function gw(){const e=te(l=>l.bookmarks),n=te(l=>l.functions),t=te(l=>l.removeBookmark),r=te(l=>l.setFocusedNode),o=te(l=>l.requestFocus),s=te(l=>l.pushTemporaryBookmark),i=l=>{const a=te.getState().flowApi;a&&(s(a.getViewport()),a.setViewport(l.viewport,{duration:650})),l.focusObjectId&&(n[l.focusObjectId]&&r(l.focusObjectId),o(l.focusObjectId))};return I.jsxs("div",{className:"flex h-full flex-col bg-panel",children:[I.jsx(ng,{title:"Bookmark Manager",badge:e.length}),I.jsx("div",{className:"px-3 py-1.5 text-[10px] text-slate-500",children:"Double-click to fly to a saved view"}),I.jsxs("div",{className:"thin-scroll flex-1 overflow-auto pb-2",children:[e.length===0&&I.jsx("div",{className:"px-3 py-6 text-center text-xs text-slate-600",children:"No bookmarks yet — use “★ Save view”."}),e.map(l=>I.jsxs("div",{onDoubleClick:()=>i(l),className:["group mx-2 mb-1.5 cursor-pointer rounded-lg border px-3 py-2 transition-colors",l.temporary?"border-dashed border-slate-700 bg-slate-800/30":"border-slate-700 bg-slate-800/60 hover:border-indigo-500/70"].join(" "),children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("span",{className:l.temporary?"text-slate-500":"text-indigo-400",children:l.temporary?"↩":"★"}),I.jsx("span",{className:"flex-1 truncate text-[13px] text-slate-200",children:l.name}),I.jsx("button",{onClick:a=>{a.stopPropagation(),t(l.id)},className:"text-slate-600 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100",title:"Delete bookmark",children:"✕"})]}),I.jsxs("div",{className:"mt-0.5 flex items-center gap-2 pl-6 text-[10px] text-slate-500",children:[I.jsxs("span",{className:"font-mono",children:["z ",l.viewport.zoom.toFixed(2)]}),l.focusObjectId&&n[l.focusObjectId]&&I.jsxs("span",{className:"truncate font-mono text-slate-400",children:["→ ",n[l.focusObjectId].name]})]})]},l.id))]})]})}function De(e){if(typeof e=="string"||typeof e=="number")return""+e;let n="";if(Array.isArray(e))for(let t=0,r;t<e.length;t++)(r=De(e[t]))!==""&&(n+=(n&&" ")+r);else for(let t in e)e[t]&&(n+=(n&&" ")+t);return n}const{useDebugValue:yw}=R,{useSyncExternalStoreWithSelector:vw}=Zm,xw=e=>e;function tg(e,n=xw,t){const r=vw(e.subscribe,e.getState,e.getServerState||e.getInitialState,n,t);return yw(r),r}const Nf=(e,n)=>{const t=Gm(e),r=(o,s=n)=>tg(t,o,s);return Object.assign(r,t),r},ww=(e,n)=>e?Nf(e,n):Nf;function Te(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(const[r,o]of e)if(!Object.is(o,n.get(r)))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(const r of e)if(!n.has(r))return!1;return!0}const t=Object.keys(e);if(t.length!==Object.keys(n).length)return!1;for(const r of t)if(!Object.prototype.hasOwnProperty.call(n,r)||!Object.is(e[r],n[r]))return!1;return!0}var bw={value:()=>{}};function xl(){for(var e=0,n=arguments.length,t={},r;e<n;++e){if(!(r=arguments[e]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new hi(t)}function hi(e){this._=e}function Sw(e,n){return e.trim().split(/^|\s+/).map(function(t){var r="",o=t.indexOf(".");if(o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}hi.prototype=xl.prototype={constructor:hi,on:function(e,n){var t=this._,r=Sw(e+"",t),o,s=-1,i=r.length;if(arguments.length<2){for(;++s<i;)if((o=(e=r[s]).type)&&(o=kw(t[o],e.name)))return o;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++s<i;)if(o=(e=r[s]).type)t[o]=_f(t[o],e.name,n);else if(n==null)for(o in t)t[o]=_f(t[o],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new hi(e)},call:function(e,n){if((o=arguments.length-2)>0)for(var t=new Array(o),r=0,o,s;r<o;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,o=s.length;r<o;++r)s[r].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],o=0,s=r.length;o<s;++o)r[o].value.apply(n,t)}};function kw(e,n){for(var t=0,r=e.length,o;t<r;++t)if((o=e[t]).name===n)return o.value}function _f(e,n,t){for(var r=0,o=e.length;r<o;++r)if(e[r].name===n){e[r]=bw,e=e.slice(0,r).concat(e.slice(r+1));break}return t!=null&&e.push({name:n,value:t}),e}var gu="http://www.w3.org/1999/xhtml";const zf={svg:"http://www.w3.org/2000/svg",xhtml:gu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function wl(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),zf.hasOwnProperty(n)?{space:zf[n],local:e}:e}function Ew(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===gu&&n.documentElement.namespaceURI===gu?n.createElement(e):n.createElementNS(t,e)}}function Nw(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function rg(e){var n=wl(e);return(n.local?Nw:Ew)(n)}function _w(){}function Cc(e){return e==null?_w:function(){return this.querySelector(e)}}function zw(e){typeof e!="function"&&(e=Cc(e));for(var n=this._groups,t=n.length,r=new Array(t),o=0;o<t;++o)for(var s=n[o],i=s.length,l=r[o]=new Array(i),a,u,c=0;c<i;++c)(a=s[c])&&(u=e.call(a,a.__data__,c,s))&&("__data__"in a&&(u.__data__=a.__data__),l[c]=u);return new ln(r,this._parents)}function jw(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Iw(){return[]}function og(e){return e==null?Iw:function(){return this.querySelectorAll(e)}}function Cw(e){return function(){return jw(e.apply(this,arguments))}}function Mw(e){typeof e=="function"?e=Cw(e):e=og(e);for(var n=this._groups,t=n.length,r=[],o=[],s=0;s<t;++s)for(var i=n[s],l=i.length,a,u=0;u<l;++u)(a=i[u])&&(r.push(e.call(a,a.__data__,u,i)),o.push(a));return new ln(r,o)}function sg(e){return function(){return this.matches(e)}}function ig(e){return function(n){return n.matches(e)}}var Tw=Array.prototype.find;function Pw(e){return function(){return Tw.call(this.children,e)}}function Fw(){return this.firstElementChild}function Aw(e){return this.select(e==null?Fw:Pw(typeof e=="function"?e:ig(e)))}var Rw=Array.prototype.filter;function Dw(){return Array.from(this.children)}function Lw(e){return function(){return Rw.call(this.children,e)}}function Ow(e){return this.selectAll(e==null?Dw:Lw(typeof e=="function"?e:ig(e)))}function Hw(e){typeof e!="function"&&(e=sg(e));for(var n=this._groups,t=n.length,r=new Array(t),o=0;o<t;++o)for(var s=n[o],i=s.length,l=r[o]=[],a,u=0;u<i;++u)(a=s[u])&&e.call(a,a.__data__,u,s)&&l.push(a);return new ln(r,this._parents)}function lg(e){return new Array(e.length)}function Bw(){return new ln(this._enter||this._groups.map(lg),this._parents)}function Wi(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}Wi.prototype={constructor:Wi,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Vw(e){return function(){return e}}function Uw(e,n,t,r,o,s){for(var i=0,l,a=n.length,u=s.length;i<u;++i)(l=n[i])?(l.__data__=s[i],r[i]=l):t[i]=new Wi(e,s[i]);for(;i<a;++i)(l=n[i])&&(o[i]=l)}function Ww(e,n,t,r,o,s,i){var l,a,u=new Map,c=n.length,d=s.length,f=new Array(c),m;for(l=0;l<c;++l)(a=n[l])&&(f[l]=m=i.call(a,a.__data__,l,n)+"",u.has(m)?o[l]=a:u.set(m,a));for(l=0;l<d;++l)m=i.call(e,s[l],l,s)+"",(a=u.get(m))?(r[l]=a,a.__data__=s[l],u.delete(m)):t[l]=new Wi(e,s[l]);for(l=0;l<c;++l)(a=n[l])&&u.get(f[l])===a&&(o[l]=a)}function $w(e){return e.__data__}function Kw(e,n){if(!arguments.length)return Array.from(this,$w);var t=n?Ww:Uw,r=this._parents,o=this._groups;typeof e!="function"&&(e=Vw(e));for(var s=o.length,i=new Array(s),l=new Array(s),a=new Array(s),u=0;u<s;++u){var c=r[u],d=o[u],f=d.length,m=Gw(e.call(c,c&&c.__data__,u,r)),v=m.length,g=l[u]=new Array(v),b=i[u]=new Array(v),p=a[u]=new Array(f);t(c,d,g,b,p,m,n);for(var h=0,y=0,x,_;h<v;++h)if(x=g[h]){for(h>=y&&(y=h+1);!(_=b[y])&&++y<v;);x._next=_||null}}return i=new ln(i,r),i._enter=l,i._exit=a,i}function Gw(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Qw(){return new ln(this._exit||this._groups.map(lg),this._parents)}function Yw(e,n,t){var r=this.enter(),o=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),n!=null&&(o=n(o),o&&(o=o.selection())),t==null?s.remove():t(s),r&&o?r.merge(o).order():o}function Xw(e){for(var n=e.selection?e.selection():e,t=this._groups,r=n._groups,o=t.length,s=r.length,i=Math.min(o,s),l=new Array(o),a=0;a<i;++a)for(var u=t[a],c=r[a],d=u.length,f=l[a]=new Array(d),m,v=0;v<d;++v)(m=u[v]||c[v])&&(f[v]=m);for(;a<o;++a)l[a]=t[a];return new ln(l,this._parents)}function qw(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var r=e[n],o=r.length-1,s=r[o],i;--o>=0;)(i=r[o])&&(s&&i.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(i,s),s=i);return this}function Zw(e){e||(e=Jw);function n(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var t=this._groups,r=t.length,o=new Array(r),s=0;s<r;++s){for(var i=t[s],l=i.length,a=o[s]=new Array(l),u,c=0;c<l;++c)(u=i[c])&&(a[c]=u);a.sort(n)}return new ln(o,this._parents).order()}function Jw(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function e2(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function n2(){return Array.from(this)}function t2(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var r=e[n],o=0,s=r.length;o<s;++o){var i=r[o];if(i)return i}return null}function r2(){let e=0;for(const n of this)++e;return e}function o2(){return!this.node()}function s2(e){for(var n=this._groups,t=0,r=n.length;t<r;++t)for(var o=n[t],s=0,i=o.length,l;s<i;++s)(l=o[s])&&e.call(l,l.__data__,s,o);return this}function i2(e){return function(){this.removeAttribute(e)}}function l2(e){return function(){this.removeAttributeNS(e.space,e.local)}}function a2(e,n){return function(){this.setAttribute(e,n)}}function u2(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function c2(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function d2(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function f2(e,n){var t=wl(e);if(arguments.length<2){var r=this.node();return t.local?r.getAttributeNS(t.space,t.local):r.getAttribute(t)}return this.each((n==null?t.local?l2:i2:typeof n=="function"?t.local?d2:c2:t.local?u2:a2)(t,n))}function ag(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function p2(e){return function(){this.style.removeProperty(e)}}function h2(e,n,t){return function(){this.style.setProperty(e,n,t)}}function m2(e,n,t){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,t)}}function g2(e,n,t){return arguments.length>1?this.each((n==null?p2:typeof n=="function"?m2:h2)(e,n,t??"")):eo(this.node(),e)}function eo(e,n){return e.style.getPropertyValue(n)||ag(e).getComputedStyle(e,null).getPropertyValue(n)}function y2(e){return function(){delete this[e]}}function v2(e,n){return function(){this[e]=n}}function x2(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function w2(e,n){return arguments.length>1?this.each((n==null?y2:typeof n=="function"?x2:v2)(e,n)):this.node()[e]}function ug(e){return e.trim().split(/^|\s+/)}function Mc(e){return e.classList||new cg(e)}function cg(e){this._node=e,this._names=ug(e.getAttribute("class")||"")}cg.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function dg(e,n){for(var t=Mc(e),r=-1,o=n.length;++r<o;)t.add(n[r])}function fg(e,n){for(var t=Mc(e),r=-1,o=n.length;++r<o;)t.remove(n[r])}function b2(e){return function(){dg(this,e)}}function S2(e){return function(){fg(this,e)}}function k2(e,n){return function(){(n.apply(this,arguments)?dg:fg)(this,e)}}function E2(e,n){var t=ug(e+"");if(arguments.length<2){for(var r=Mc(this.node()),o=-1,s=t.length;++o<s;)if(!r.contains(t[o]))return!1;return!0}return this.each((typeof n=="function"?k2:n?b2:S2)(t,n))}function N2(){this.textContent=""}function _2(e){return function(){this.textContent=e}}function z2(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function j2(e){return arguments.length?this.each(e==null?N2:(typeof e=="function"?z2:_2)(e)):this.node().textContent}function I2(){this.innerHTML=""}function C2(e){return function(){this.innerHTML=e}}function M2(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function T2(e){return arguments.length?this.each(e==null?I2:(typeof e=="function"?M2:C2)(e)):this.node().innerHTML}function P2(){this.nextSibling&&this.parentNode.appendChild(this)}function F2(){return this.each(P2)}function A2(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function R2(){return this.each(A2)}function D2(e){var n=typeof e=="function"?e:rg(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function L2(){return null}function O2(e,n){var t=typeof e=="function"?e:rg(e),r=n==null?L2:typeof n=="function"?n:Cc(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),r.apply(this,arguments)||null)})}function H2(){var e=this.parentNode;e&&e.removeChild(this)}function B2(){return this.each(H2)}function V2(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function U2(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function W2(e){return this.select(e?U2:V2)}function $2(e){return arguments.length?this.property("__data__",e):this.node().__data__}function K2(e){return function(n){e.call(this,n,this.__data__)}}function G2(e){return e.trim().split(/^|\s+/).map(function(n){var t="",r=n.indexOf(".");return r>=0&&(t=n.slice(r+1),n=n.slice(0,r)),{type:n,name:t}})}function Q2(e){return function(){var n=this.__on;if(n){for(var t=0,r=-1,o=n.length,s;t<o;++t)s=n[t],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):n[++r]=s;++r?n.length=r:delete this.__on}}}function Y2(e,n,t){return function(){var r=this.__on,o,s=K2(n);if(r){for(var i=0,l=r.length;i<l;++i)if((o=r[i]).type===e.type&&o.name===e.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=s,o.options=t),o.value=n;return}}this.addEventListener(e.type,s,t),o={type:e.type,name:e.name,value:n,listener:s,options:t},r?r.push(o):this.__on=[o]}}function X2(e,n,t){var r=G2(e+""),o,s=r.length,i;if(arguments.length<2){var l=this.node().__on;if(l){for(var a=0,u=l.length,c;a<u;++a)for(o=0,c=l[a];o<s;++o)if((i=r[o]).type===c.type&&i.name===c.name)return c.value}return}for(l=n?Y2:Q2,o=0;o<s;++o)this.each(l(r[o],n,t));return this}function pg(e,n,t){var r=ag(e),o=r.CustomEvent;typeof o=="function"?o=new o(n,t):(o=r.document.createEvent("Event"),t?(o.initEvent(n,t.bubbles,t.cancelable),o.detail=t.detail):o.initEvent(n,!1,!1)),e.dispatchEvent(o)}function q2(e,n){return function(){return pg(this,e,n)}}function Z2(e,n){return function(){return pg(this,e,n.apply(this,arguments))}}function J2(e,n){return this.each((typeof n=="function"?Z2:q2)(e,n))}function*eb(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var r=e[n],o=0,s=r.length,i;o<s;++o)(i=r[o])&&(yield i)}var hg=[null];function ln(e,n){this._groups=e,this._parents=n}function bs(){return new ln([[document.documentElement]],hg)}function nb(){return this}ln.prototype=bs.prototype={constructor:ln,select:zw,selectAll:Mw,selectChild:Aw,selectChildren:Ow,filter:Hw,data:Kw,enter:Bw,exit:Qw,join:Yw,merge:Xw,selection:nb,order:qw,sort:Zw,call:e2,nodes:n2,node:t2,size:r2,empty:o2,each:s2,attr:f2,style:g2,property:w2,classed:E2,text:j2,html:T2,raise:F2,lower:R2,append:D2,insert:O2,remove:B2,clone:W2,datum:$2,on:X2,dispatch:J2,[Symbol.iterator]:eb};function fn(e){return typeof e=="string"?new ln([[document.querySelector(e)]],[document.documentElement]):new ln([[e]],hg)}function tb(e){let n;for(;n=e.sourceEvent;)e=n;return e}function Nn(e,n){if(e=tb(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var r=t.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}if(n.getBoundingClientRect){var o=n.getBoundingClientRect();return[e.clientX-o.left-n.clientLeft,e.clientY-o.top-n.clientTop]}}return[e.pageX,e.pageY]}const rb={passive:!1},ls={capture:!0,passive:!1};function ua(e){e.stopImmediatePropagation()}function Ur(e){e.preventDefault(),e.stopImmediatePropagation()}function mg(e){var n=e.document.documentElement,t=fn(e).on("dragstart.drag",Ur,ls);"onselectstart"in n?t.on("selectstart.drag",Ur,ls):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function gg(e,n){var t=e.document.documentElement,r=fn(e).on("dragstart.drag",null);n&&(r.on("click.drag",Ur,ls),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in t?r.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}const $s=e=>()=>e;function yu(e,{sourceEvent:n,subject:t,target:r,identifier:o,active:s,x:i,y:l,dx:a,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},subject:{value:t,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:a,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}yu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function ob(e){return!e.ctrlKey&&!e.button}function sb(){return this.parentNode}function ib(e,n){return n??{x:e.x,y:e.y}}function lb(){return navigator.maxTouchPoints||"ontouchstart"in this}function ab(){var e=ob,n=sb,t=ib,r=lb,o={},s=xl("start","drag","end"),i=0,l,a,u,c,d=0;function f(x){x.on("mousedown.drag",m).filter(r).on("touchstart.drag",b).on("touchmove.drag",p,rb).on("touchend.drag touchcancel.drag",h).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(x,_){if(!(c||!e.call(this,x,_))){var z=y(this,n.call(this,x,_),x,_,"mouse");z&&(fn(x.view).on("mousemove.drag",v,ls).on("mouseup.drag",g,ls),mg(x.view),ua(x),u=!1,l=x.clientX,a=x.clientY,z("start",x))}}function v(x){if(Ur(x),!u){var _=x.clientX-l,z=x.clientY-a;u=_*_+z*z>d}o.mouse("drag",x)}function g(x){fn(x.view).on("mousemove.drag mouseup.drag",null),gg(x.view,u),Ur(x),o.mouse("end",x)}function b(x,_){if(e.call(this,x,_)){var z=x.changedTouches,N=n.call(this,x,_),P=z.length,F,A;for(F=0;F<P;++F)(A=y(this,N,x,_,z[F].identifier,z[F]))&&(ua(x),A("start",x,z[F]))}}function p(x){var _=x.changedTouches,z=_.length,N,P;for(N=0;N<z;++N)(P=o[_[N].identifier])&&(Ur(x),P("drag",x,_[N]))}function h(x){var _=x.changedTouches,z=_.length,N,P;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),N=0;N<z;++N)(P=o[_[N].identifier])&&(ua(x),P("end",x,_[N]))}function y(x,_,z,N,P,F){var A=s.copy(),O=Nn(F||z,_),W,$,w;if((w=t.call(x,new yu("beforestart",{sourceEvent:z,target:f,identifier:P,active:i,x:O[0],y:O[1],dx:0,dy:0,dispatch:A}),N))!=null)return W=w.x-O[0]||0,$=w.y-O[1]||0,function C(j,H,M){var k=O,T;switch(j){case"start":o[P]=C,T=i++;break;case"end":delete o[P],--i;case"drag":O=Nn(M||H,_),T=i;break}A.call(j,x,new yu(j,{sourceEvent:H,subject:w,target:f,identifier:P,active:T,x:O[0]+W,y:O[1]+$,dx:O[0]-k[0],dy:O[1]-k[1],dispatch:A}),N)}}return f.filter=function(x){return arguments.length?(e=typeof x=="function"?x:$s(!!x),f):e},f.container=function(x){return arguments.length?(n=typeof x=="function"?x:$s(x),f):n},f.subject=function(x){return arguments.length?(t=typeof x=="function"?x:$s(x),f):t},f.touchable=function(x){return arguments.length?(r=typeof x=="function"?x:$s(!!x),f):r},f.on=function(){var x=s.on.apply(s,arguments);return x===s?f:x},f.clickDistance=function(x){return arguments.length?(d=(x=+x)*x,f):Math.sqrt(d)},f}function Tc(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function yg(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function Ss(){}var as=.7,$i=1/as,Wr="\\s*([+-]?\\d+)\\s*",us="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",On="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ub=/^#([0-9a-f]{3,8})$/,cb=new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`),db=new RegExp(`^rgb\\(${On},${On},${On}\\)$`),fb=new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${us}\\)$`),pb=new RegExp(`^rgba\\(${On},${On},${On},${us}\\)$`),hb=new RegExp(`^hsl\\(${us},${On},${On}\\)$`),mb=new RegExp(`^hsla\\(${us},${On},${On},${us}\\)$`),jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Tc(Ss,cs,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:If,formatHex:If,formatHex8:gb,formatHsl:yb,formatRgb:Cf,toString:Cf});function If(){return this.rgb().formatHex()}function gb(){return this.rgb().formatHex8()}function yb(){return vg(this).formatHsl()}function Cf(){return this.rgb().formatRgb()}function cs(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=ub.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?Mf(n):t===3?new Xe(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?Ks(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?Ks(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=cb.exec(e))?new Xe(n[1],n[2],n[3],1):(n=db.exec(e))?new Xe(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=fb.exec(e))?Ks(n[1],n[2],n[3],n[4]):(n=pb.exec(e))?Ks(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=hb.exec(e))?Ff(n[1],n[2]/100,n[3]/100,1):(n=mb.exec(e))?Ff(n[1],n[2]/100,n[3]/100,n[4]):jf.hasOwnProperty(e)?Mf(jf[e]):e==="transparent"?new Xe(NaN,NaN,NaN,0):null}function Mf(e){return new Xe(e>>16&255,e>>8&255,e&255,1)}function Ks(e,n,t,r){return r<=0&&(e=n=t=NaN),new Xe(e,n,t,r)}function vb(e){return e instanceof Ss||(e=cs(e)),e?(e=e.rgb(),new Xe(e.r,e.g,e.b,e.opacity)):new Xe}function vu(e,n,t,r){return arguments.length===1?vb(e):new Xe(e,n,t,r??1)}function Xe(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}Tc(Xe,vu,yg(Ss,{brighter(e){return e=e==null?$i:Math.pow($i,e),new Xe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?as:Math.pow(as,e),new Xe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Xe(Jt(this.r),Jt(this.g),Jt(this.b),Ki(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Tf,formatHex:Tf,formatHex8:xb,formatRgb:Pf,toString:Pf}));function Tf(){return`#${Qt(this.r)}${Qt(this.g)}${Qt(this.b)}`}function xb(){return`#${Qt(this.r)}${Qt(this.g)}${Qt(this.b)}${Qt((isNaN(this.opacity)?1:this.opacity)*255)}`}function Pf(){const e=Ki(this.opacity);return`${e===1?"rgb(":"rgba("}${Jt(this.r)}, ${Jt(this.g)}, ${Jt(this.b)}${e===1?")":`, ${e})`}`}function Ki(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Jt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qt(e){return e=Jt(e),(e<16?"0":"")+e.toString(16)}function Ff(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new zn(e,n,t,r)}function vg(e){if(e instanceof zn)return new zn(e.h,e.s,e.l,e.opacity);if(e instanceof Ss||(e=cs(e)),!e)return new zn;if(e instanceof zn)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,o=Math.min(n,t,r),s=Math.max(n,t,r),i=NaN,l=s-o,a=(s+o)/2;return l?(n===s?i=(t-r)/l+(t<r)*6:t===s?i=(r-n)/l+2:i=(n-t)/l+4,l/=a<.5?s+o:2-s-o,i*=60):l=a>0&&a<1?0:i,new zn(i,l,a,e.opacity)}function wb(e,n,t,r){return arguments.length===1?vg(e):new zn(e,n,t,r??1)}function zn(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Tc(zn,wb,yg(Ss,{brighter(e){return e=e==null?$i:Math.pow($i,e),new zn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?as:Math.pow(as,e),new zn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,o=2*t-r;return new Xe(ca(e>=240?e-240:e+120,o,r),ca(e,o,r),ca(e<120?e+240:e-120,o,r),this.opacity)},clamp(){return new zn(Af(this.h),Gs(this.s),Gs(this.l),Ki(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ki(this.opacity);return`${e===1?"hsl(":"hsla("}${Af(this.h)}, ${Gs(this.s)*100}%, ${Gs(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Af(e){return e=(e||0)%360,e<0?e+360:e}function Gs(e){return Math.max(0,Math.min(1,e||0))}function ca(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const xg=e=>()=>e;function bb(e,n){return function(t){return e+t*n}}function Sb(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function kb(e){return(e=+e)==1?wg:function(n,t){return t-n?Sb(n,t,e):xg(isNaN(n)?t:n)}}function wg(e,n){var t=n-e;return t?bb(e,t):xg(isNaN(e)?n:e)}const Rf=function e(n){var t=kb(n);function r(o,s){var i=t((o=vu(o)).r,(s=vu(s)).r),l=t(o.g,s.g),a=t(o.b,s.b),u=wg(o.opacity,s.opacity);return function(c){return o.r=i(c),o.g=l(c),o.b=a(c),o.opacity=u(c),o+""}}return r.gamma=e,r}(1);function ft(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}var xu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,da=new RegExp(xu.source,"g");function Eb(e){return function(){return e}}function Nb(e){return function(n){return e(n)+""}}function _b(e,n){var t=xu.lastIndex=da.lastIndex=0,r,o,s,i=-1,l=[],a=[];for(e=e+"",n=n+"";(r=xu.exec(e))&&(o=da.exec(n));)(s=o.index)>t&&(s=n.slice(t,s),l[i]?l[i]+=s:l[++i]=s),(r=r[0])===(o=o[0])?l[i]?l[i]+=o:l[++i]=o:(l[++i]=null,a.push({i,x:ft(r,o)})),t=da.lastIndex;return t<n.length&&(s=n.slice(t),l[i]?l[i]+=s:l[++i]=s),l.length<2?a[0]?Nb(a[0].x):Eb(n):(n=a.length,function(u){for(var c=0,d;c<n;++c)l[(d=a[c]).i]=d.x(u);return l.join("")})}var Df=180/Math.PI,wu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function bg(e,n,t,r,o,s){var i,l,a;return(i=Math.sqrt(e*e+n*n))&&(e/=i,n/=i),(a=e*t+n*r)&&(t-=e*a,r-=n*a),(l=Math.sqrt(t*t+r*r))&&(t/=l,r/=l,a/=l),e*r<n*t&&(e=-e,n=-n,a=-a,i=-i),{translateX:o,translateY:s,rotate:Math.atan2(n,e)*Df,skewX:Math.atan(a)*Df,scaleX:i,scaleY:l}}var Qs;function zb(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?wu:bg(n.a,n.b,n.c,n.d,n.e,n.f)}function jb(e){return e==null||(Qs||(Qs=document.createElementNS("http://www.w3.org/2000/svg","g")),Qs.setAttribute("transform",e),!(e=Qs.transform.baseVal.consolidate()))?wu:(e=e.matrix,bg(e.a,e.b,e.c,e.d,e.e,e.f))}function Sg(e,n,t,r){function o(u){return u.length?u.pop()+" ":""}function s(u,c,d,f,m,v){if(u!==d||c!==f){var g=m.push("translate(",null,n,null,t);v.push({i:g-4,x:ft(u,d)},{i:g-2,x:ft(c,f)})}else(d||f)&&m.push("translate("+d+n+f+t)}function i(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(o(d)+"rotate(",null,r)-2,x:ft(u,c)})):c&&d.push(o(d)+"rotate("+c+r)}function l(u,c,d,f){u!==c?f.push({i:d.push(o(d)+"skewX(",null,r)-2,x:ft(u,c)}):c&&d.push(o(d)+"skewX("+c+r)}function a(u,c,d,f,m,v){if(u!==d||c!==f){var g=m.push(o(m)+"scale(",null,",",null,")");v.push({i:g-4,x:ft(u,d)},{i:g-2,x:ft(c,f)})}else(d!==1||f!==1)&&m.push(o(m)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=e(u),c=e(c),s(u.translateX,u.translateY,c.translateX,c.translateY,d,f),i(u.rotate,c.rotate,d,f),l(u.skewX,c.skewX,d,f),a(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(m){for(var v=-1,g=f.length,b;++v<g;)d[(b=f[v]).i]=b.x(m);return d.join("")}}}var Ib=Sg(zb,"px, ","px)","deg)"),Cb=Sg(jb,", ",")",")"),Mb=1e-12;function Lf(e){return((e=Math.exp(e))+1/e)/2}function Tb(e){return((e=Math.exp(e))-1/e)/2}function Pb(e){return((e=Math.exp(2*e))-1)/(e+1)}const Fb=function e(n,t,r){function o(s,i){var l=s[0],a=s[1],u=s[2],c=i[0],d=i[1],f=i[2],m=c-l,v=d-a,g=m*m+v*v,b,p;if(g<Mb)p=Math.log(f/u)/n,b=function(N){return[l+N*m,a+N*v,u*Math.exp(n*N*p)]};else{var h=Math.sqrt(g),y=(f*f-u*u+r*g)/(2*u*t*h),x=(f*f-u*u-r*g)/(2*f*t*h),_=Math.log(Math.sqrt(y*y+1)-y),z=Math.log(Math.sqrt(x*x+1)-x);p=(z-_)/n,b=function(N){var P=N*p,F=Lf(_),A=u/(t*h)*(F*Pb(n*P+_)-Tb(_));return[l+A*m,a+A*v,u*F/Lf(n*P+_)]}}return b.duration=p*1e3*n/Math.SQRT2,b}return o.rho=function(s){var i=Math.max(.001,+s),l=i*i,a=l*l;return e(i,l,a)},o}(Math.SQRT2,2,4);var no=0,Co=0,vo=0,kg=1e3,Gi,Mo,Qi=0,lr=0,bl=0,ds=typeof performance=="object"&&performance.now?performance:Date,Eg=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Pc(){return lr||(Eg(Ab),lr=ds.now()+bl)}function Ab(){lr=0}function Yi(){this._call=this._time=this._next=null}Yi.prototype=Ng.prototype={constructor:Yi,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?Pc():+t)+(n==null?0:+n),!this._next&&Mo!==this&&(Mo?Mo._next=this:Gi=this,Mo=this),this._call=e,this._time=t,bu()},stop:function(){this._call&&(this._call=null,this._time=1/0,bu())}};function Ng(e,n,t){var r=new Yi;return r.restart(e,n,t),r}function Rb(){Pc(),++no;for(var e=Gi,n;e;)(n=lr-e._time)>=0&&e._call.call(void 0,n),e=e._next;--no}function Of(){lr=(Qi=ds.now())+bl,no=Co=0;try{Rb()}finally{no=0,Lb(),lr=0}}function Db(){var e=ds.now(),n=e-Qi;n>kg&&(bl-=n,Qi=e)}function Lb(){for(var e,n=Gi,t,r=1/0;n;)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:Gi=t);Mo=e,bu(r)}function bu(e){if(!no){Co&&(Co=clearTimeout(Co));var n=e-lr;n>24?(e<1/0&&(Co=setTimeout(Of,e-ds.now()-bl)),vo&&(vo=clearInterval(vo))):(vo||(Qi=ds.now(),vo=setInterval(Db,kg)),no=1,Eg(Of))}}function Hf(e,n,t){var r=new Yi;return n=n==null?0:+n,r.restart(o=>{r.stop(),e(o+n)},n,t),r}var Ob=xl("start","end","cancel","interrupt"),Hb=[],_g=0,Bf=1,Su=2,mi=3,Vf=4,ku=5,gi=6;function Sl(e,n,t,r,o,s){var i=e.__transition;if(!i)e.__transition={};else if(t in i)return;Bb(e,t,{name:n,index:r,group:o,on:Ob,tween:Hb,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:_g})}function Fc(e,n){var t=Tn(e,n);if(t.state>_g)throw new Error("too late; already scheduled");return t}function Bn(e,n){var t=Tn(e,n);if(t.state>mi)throw new Error("too late; already running");return t}function Tn(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function Bb(e,n,t){var r=e.__transition,o;r[n]=t,t.timer=Ng(s,0,t.time);function s(u){t.state=Bf,t.timer.restart(i,t.delay,t.time),t.delay<=u&&i(u-t.delay)}function i(u){var c,d,f,m;if(t.state!==Bf)return a();for(c in r)if(m=r[c],m.name===t.name){if(m.state===mi)return Hf(i);m.state===Vf?(m.state=gi,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete r[c]):+c<n&&(m.state=gi,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete r[c])}if(Hf(function(){t.state===mi&&(t.state=Vf,t.timer.restart(l,t.delay,t.time),l(u))}),t.state=Su,t.on.call("start",e,e.__data__,t.index,t.group),t.state===Su){for(t.state=mi,o=new Array(f=t.tween.length),c=0,d=-1;c<f;++c)(m=t.tween[c].value.call(e,e.__data__,t.index,t.group))&&(o[++d]=m);o.length=d+1}}function l(u){for(var c=u<t.duration?t.ease.call(null,u/t.duration):(t.timer.restart(a),t.state=ku,1),d=-1,f=o.length;++d<f;)o[d].call(e,c);t.state===ku&&(t.on.call("end",e,e.__data__,t.index,t.group),a())}function a(){t.state=gi,t.timer.stop(),delete r[n];for(var u in r)return;delete e.__transition}}function yi(e,n){var t=e.__transition,r,o,s=!0,i;if(t){n=n==null?null:n+"";for(i in t){if((r=t[i]).name!==n){s=!1;continue}o=r.state>Su&&r.state<ku,r.state=gi,r.timer.stop(),r.on.call(o?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete t[i]}s&&delete e.__transition}}function Vb(e){return this.each(function(){yi(this,e)})}function Ub(e,n){var t,r;return function(){var o=Bn(this,e),s=o.tween;if(s!==t){r=t=s;for(var i=0,l=r.length;i<l;++i)if(r[i].name===n){r=r.slice(),r.splice(i,1);break}}o.tween=r}}function Wb(e,n,t){var r,o;if(typeof t!="function")throw new Error;return function(){var s=Bn(this,e),i=s.tween;if(i!==r){o=(r=i).slice();for(var l={name:n,value:t},a=0,u=o.length;a<u;++a)if(o[a].name===n){o[a]=l;break}a===u&&o.push(l)}s.tween=o}}function $b(e,n){var t=this._id;if(e+="",arguments.length<2){for(var r=Tn(this.node(),t).tween,o=0,s=r.length,i;o<s;++o)if((i=r[o]).name===e)return i.value;return null}return this.each((n==null?Ub:Wb)(t,e,n))}function Ac(e,n,t){var r=e._id;return e.each(function(){var o=Bn(this,r);(o.value||(o.value={}))[n]=t.apply(this,arguments)}),function(o){return Tn(o,r).value[n]}}function zg(e,n){var t;return(typeof n=="number"?ft:n instanceof cs?Rf:(t=cs(n))?(n=t,Rf):_b)(e,n)}function Kb(e){return function(){this.removeAttribute(e)}}function Gb(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Qb(e,n,t){var r,o=t+"",s;return function(){var i=this.getAttribute(e);return i===o?null:i===r?s:s=n(r=i,t)}}function Yb(e,n,t){var r,o=t+"",s;return function(){var i=this.getAttributeNS(e.space,e.local);return i===o?null:i===r?s:s=n(r=i,t)}}function Xb(e,n,t){var r,o,s;return function(){var i,l=t(this),a;return l==null?void this.removeAttribute(e):(i=this.getAttribute(e),a=l+"",i===a?null:i===r&&a===o?s:(o=a,s=n(r=i,l)))}}function qb(e,n,t){var r,o,s;return function(){var i,l=t(this),a;return l==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),a=l+"",i===a?null:i===r&&a===o?s:(o=a,s=n(r=i,l)))}}function Zb(e,n){var t=wl(e),r=t==="transform"?Cb:zg;return this.attrTween(e,typeof n=="function"?(t.local?qb:Xb)(t,r,Ac(this,"attr."+e,n)):n==null?(t.local?Gb:Kb)(t):(t.local?Yb:Qb)(t,r,n))}function Jb(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function eS(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function nS(e,n){var t,r;function o(){var s=n.apply(this,arguments);return s!==r&&(t=(r=s)&&eS(e,s)),t}return o._value=n,o}function tS(e,n){var t,r;function o(){var s=n.apply(this,arguments);return s!==r&&(t=(r=s)&&Jb(e,s)),t}return o._value=n,o}function rS(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var r=wl(e);return this.tween(t,(r.local?nS:tS)(r,n))}function oS(e,n){return function(){Fc(this,e).delay=+n.apply(this,arguments)}}function sS(e,n){return n=+n,function(){Fc(this,e).delay=n}}function iS(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?oS:sS)(n,e)):Tn(this.node(),n).delay}function lS(e,n){return function(){Bn(this,e).duration=+n.apply(this,arguments)}}function aS(e,n){return n=+n,function(){Bn(this,e).duration=n}}function uS(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?lS:aS)(n,e)):Tn(this.node(),n).duration}function cS(e,n){if(typeof n!="function")throw new Error;return function(){Bn(this,e).ease=n}}function dS(e){var n=this._id;return arguments.length?this.each(cS(n,e)):Tn(this.node(),n).ease}function fS(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;Bn(this,e).ease=t}}function pS(e){if(typeof e!="function")throw new Error;return this.each(fS(this._id,e))}function hS(e){typeof e!="function"&&(e=sg(e));for(var n=this._groups,t=n.length,r=new Array(t),o=0;o<t;++o)for(var s=n[o],i=s.length,l=r[o]=[],a,u=0;u<i;++u)(a=s[u])&&e.call(a,a.__data__,u,s)&&l.push(a);return new ot(r,this._parents,this._name,this._id)}function mS(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,r=n.length,o=t.length,s=Math.min(r,o),i=new Array(r),l=0;l<s;++l)for(var a=n[l],u=t[l],c=a.length,d=i[l]=new Array(c),f,m=0;m<c;++m)(f=a[m]||u[m])&&(d[m]=f);for(;l<r;++l)i[l]=n[l];return new ot(i,this._parents,this._name,this._id)}function gS(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function yS(e,n,t){var r,o,s=gS(n)?Fc:Bn;return function(){var i=s(this,e),l=i.on;l!==r&&(o=(r=l).copy()).on(n,t),i.on=o}}function vS(e,n){var t=this._id;return arguments.length<2?Tn(this.node(),t).on.on(e):this.each(yS(t,e,n))}function xS(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function wS(){return this.on("end.remove",xS(this._id))}function bS(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Cc(e));for(var r=this._groups,o=r.length,s=new Array(o),i=0;i<o;++i)for(var l=r[i],a=l.length,u=s[i]=new Array(a),c,d,f=0;f<a;++f)(c=l[f])&&(d=e.call(c,c.__data__,f,l))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,Sl(u[f],n,t,f,u,Tn(c,t)));return new ot(s,this._parents,n,t)}function SS(e){var n=this._name,t=this._id;typeof e!="function"&&(e=og(e));for(var r=this._groups,o=r.length,s=[],i=[],l=0;l<o;++l)for(var a=r[l],u=a.length,c,d=0;d<u;++d)if(c=a[d]){for(var f=e.call(c,c.__data__,d,a),m,v=Tn(c,t),g=0,b=f.length;g<b;++g)(m=f[g])&&Sl(m,n,t,g,f,v);s.push(f),i.push(c)}return new ot(s,i,n,t)}var kS=bs.prototype.constructor;function ES(){return new kS(this._groups,this._parents)}function NS(e,n){var t,r,o;return function(){var s=eo(this,e),i=(this.style.removeProperty(e),eo(this,e));return s===i?null:s===t&&i===r?o:o=n(t=s,r=i)}}function jg(e){return function(){this.style.removeProperty(e)}}function _S(e,n,t){var r,o=t+"",s;return function(){var i=eo(this,e);return i===o?null:i===r?s:s=n(r=i,t)}}function zS(e,n,t){var r,o,s;return function(){var i=eo(this,e),l=t(this),a=l+"";return l==null&&(a=l=(this.style.removeProperty(e),eo(this,e))),i===a?null:i===r&&a===o?s:(o=a,s=n(r=i,l))}}function jS(e,n){var t,r,o,s="style."+n,i="end."+s,l;return function(){var a=Bn(this,e),u=a.on,c=a.value[s]==null?l||(l=jg(n)):void 0;(u!==t||o!==c)&&(r=(t=u).copy()).on(i,o=c),a.on=r}}function IS(e,n,t){var r=(e+="")=="transform"?Ib:zg;return n==null?this.styleTween(e,NS(e,r)).on("end.style."+e,jg(e)):typeof n=="function"?this.styleTween(e,zS(e,r,Ac(this,"style."+e,n))).each(jS(this._id,e)):this.styleTween(e,_S(e,r,n),t).on("end.style."+e,null)}function CS(e,n,t){return function(r){this.style.setProperty(e,n.call(this,r),t)}}function MS(e,n,t){var r,o;function s(){var i=n.apply(this,arguments);return i!==o&&(r=(o=i)&&CS(e,i,t)),r}return s._value=n,s}function TS(e,n,t){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,MS(e,n,t??""))}function PS(e){return function(){this.textContent=e}}function FS(e){return function(){var n=e(this);this.textContent=n??""}}function AS(e){return this.tween("text",typeof e=="function"?FS(Ac(this,"text",e)):PS(e==null?"":e+""))}function RS(e){return function(n){this.textContent=e.call(this,n)}}function DS(e){var n,t;function r(){var o=e.apply(this,arguments);return o!==t&&(n=(t=o)&&RS(o)),n}return r._value=e,r}function LS(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,DS(e))}function OS(){for(var e=this._name,n=this._id,t=Ig(),r=this._groups,o=r.length,s=0;s<o;++s)for(var i=r[s],l=i.length,a,u=0;u<l;++u)if(a=i[u]){var c=Tn(a,n);Sl(a,e,t,u,i,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new ot(r,this._parents,e,t)}function HS(){var e,n,t=this,r=t._id,o=t.size();return new Promise(function(s,i){var l={value:i},a={value:function(){--o===0&&s()}};t.each(function(){var u=Bn(this,r),c=u.on;c!==e&&(n=(e=c).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(a)),u.on=n}),o===0&&s()})}var BS=0;function ot(e,n,t,r){this._groups=e,this._parents=n,this._name=t,this._id=r}function Ig(){return++BS}var $n=bs.prototype;ot.prototype={constructor:ot,select:bS,selectAll:SS,selectChild:$n.selectChild,selectChildren:$n.selectChildren,filter:hS,merge:mS,selection:ES,transition:OS,call:$n.call,nodes:$n.nodes,node:$n.node,size:$n.size,empty:$n.empty,each:$n.each,on:vS,attr:Zb,attrTween:rS,style:IS,styleTween:TS,text:AS,textTween:LS,remove:wS,tween:$b,delay:iS,duration:uS,ease:dS,easeVarying:pS,end:HS,[Symbol.iterator]:$n[Symbol.iterator]};function VS(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var US={time:null,delay:0,duration:250,ease:VS};function WS(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function $S(e){var n,t;e instanceof ot?(n=e._id,e=e._name):(n=Ig(),(t=US).time=Pc(),e=e==null?null:e+"");for(var r=this._groups,o=r.length,s=0;s<o;++s)for(var i=r[s],l=i.length,a,u=0;u<l;++u)(a=i[u])&&Sl(a,e,n,u,i,t||WS(a,n));return new ot(r,this._parents,e,n)}bs.prototype.interrupt=Vb;bs.prototype.transition=$S;const Ys=e=>()=>e;function KS(e,{sourceEvent:n,target:t,transform:r,dispatch:o}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:o}})}function qn(e,n,t){this.k=e,this.x=n,this.y=t}qn.prototype={constructor:qn,scale:function(e){return e===1?this:new qn(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new qn(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Jn=new qn(1,0,0);qn.prototype;function fa(e){e.stopImmediatePropagation()}function xo(e){e.preventDefault(),e.stopImmediatePropagation()}function GS(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function QS(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Uf(){return this.__zoom||Jn}function YS(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function XS(){return navigator.maxTouchPoints||"ontouchstart"in this}function qS(e,n,t){var r=e.invertX(n[0][0])-t[0][0],o=e.invertX(n[1][0])-t[1][0],s=e.invertY(n[0][1])-t[0][1],i=e.invertY(n[1][1])-t[1][1];return e.translate(o>r?(r+o)/2:Math.min(0,r)||Math.max(0,o),i>s?(s+i)/2:Math.min(0,s)||Math.max(0,i))}function Cg(){var e=GS,n=QS,t=qS,r=YS,o=XS,s=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],l=250,a=Fb,u=xl("start","zoom","end"),c,d,f,m=500,v=150,g=0,b=10;function p(w){w.property("__zoom",Uf).on("wheel.zoom",P,{passive:!1}).on("mousedown.zoom",F).on("dblclick.zoom",A).filter(o).on("touchstart.zoom",O).on("touchmove.zoom",W).on("touchend.zoom touchcancel.zoom",$).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(w,C,j,H){var M=w.selection?w.selection():w;M.property("__zoom",Uf),w!==M?_(w,C,j,H):M.interrupt().each(function(){z(this,arguments).event(H).start().zoom(null,typeof C=="function"?C.apply(this,arguments):C).end()})},p.scaleBy=function(w,C,j,H){p.scaleTo(w,function(){var M=this.__zoom.k,k=typeof C=="function"?C.apply(this,arguments):C;return M*k},j,H)},p.scaleTo=function(w,C,j,H){p.transform(w,function(){var M=n.apply(this,arguments),k=this.__zoom,T=j==null?x(M):typeof j=="function"?j.apply(this,arguments):j,L=k.invert(T),B=typeof C=="function"?C.apply(this,arguments):C;return t(y(h(k,B),T,L),M,i)},j,H)},p.translateBy=function(w,C,j,H){p.transform(w,function(){return t(this.__zoom.translate(typeof C=="function"?C.apply(this,arguments):C,typeof j=="function"?j.apply(this,arguments):j),n.apply(this,arguments),i)},null,H)},p.translateTo=function(w,C,j,H,M){p.transform(w,function(){var k=n.apply(this,arguments),T=this.__zoom,L=H==null?x(k):typeof H=="function"?H.apply(this,arguments):H;return t(Jn.translate(L[0],L[1]).scale(T.k).translate(typeof C=="function"?-C.apply(this,arguments):-C,typeof j=="function"?-j.apply(this,arguments):-j),k,i)},H,M)};function h(w,C){return C=Math.max(s[0],Math.min(s[1],C)),C===w.k?w:new qn(C,w.x,w.y)}function y(w,C,j){var H=C[0]-j[0]*w.k,M=C[1]-j[1]*w.k;return H===w.x&&M===w.y?w:new qn(w.k,H,M)}function x(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function _(w,C,j,H){w.on("start.zoom",function(){z(this,arguments).event(H).start()}).on("interrupt.zoom end.zoom",function(){z(this,arguments).event(H).end()}).tween("zoom",function(){var M=this,k=arguments,T=z(M,k).event(H),L=n.apply(M,k),B=j==null?x(L):typeof j=="function"?j.apply(M,k):j,D=Math.max(L[1][0]-L[0][0],L[1][1]-L[0][1]),V=M.__zoom,G=typeof C=="function"?C.apply(M,k):C,Q=a(V.invert(B).concat(D/V.k),G.invert(B).concat(D/G.k));return function(K){if(K===1)K=G;else{var q=Q(K),E=D/q[2];K=new qn(E,B[0]-q[0]*E,B[1]-q[1]*E)}T.zoom(null,K)}})}function z(w,C,j){return!j&&w.__zooming||new N(w,C)}function N(w,C){this.that=w,this.args=C,this.active=0,this.sourceEvent=null,this.extent=n.apply(w,C),this.taps=0}N.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,C){return this.mouse&&w!=="mouse"&&(this.mouse[1]=C.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=C.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=C.invert(this.touch1[0])),this.that.__zoom=C,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var C=fn(this.that).datum();u.call(w,this.that,new KS(w,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),C)}};function P(w,...C){if(!e.apply(this,arguments))return;var j=z(this,C).event(w),H=this.__zoom,M=Math.max(s[0],Math.min(s[1],H.k*Math.pow(2,r.apply(this,arguments)))),k=Nn(w);if(j.wheel)(j.mouse[0][0]!==k[0]||j.mouse[0][1]!==k[1])&&(j.mouse[1]=H.invert(j.mouse[0]=k)),clearTimeout(j.wheel);else{if(H.k===M)return;j.mouse=[k,H.invert(k)],yi(this),j.start()}xo(w),j.wheel=setTimeout(T,v),j.zoom("mouse",t(y(h(H,M),j.mouse[0],j.mouse[1]),j.extent,i));function T(){j.wheel=null,j.end()}}function F(w,...C){if(f||!e.apply(this,arguments))return;var j=w.currentTarget,H=z(this,C,!0).event(w),M=fn(w.view).on("mousemove.zoom",B,!0).on("mouseup.zoom",D,!0),k=Nn(w,j),T=w.clientX,L=w.clientY;mg(w.view),fa(w),H.mouse=[k,this.__zoom.invert(k)],yi(this),H.start();function B(V){if(xo(V),!H.moved){var G=V.clientX-T,Q=V.clientY-L;H.moved=G*G+Q*Q>g}H.event(V).zoom("mouse",t(y(H.that.__zoom,H.mouse[0]=Nn(V,j),H.mouse[1]),H.extent,i))}function D(V){M.on("mousemove.zoom mouseup.zoom",null),gg(V.view,H.moved),xo(V),H.event(V).end()}}function A(w,...C){if(e.apply(this,arguments)){var j=this.__zoom,H=Nn(w.changedTouches?w.changedTouches[0]:w,this),M=j.invert(H),k=j.k*(w.shiftKey?.5:2),T=t(y(h(j,k),H,M),n.apply(this,C),i);xo(w),l>0?fn(this).transition().duration(l).call(_,T,H,w):fn(this).call(p.transform,T,H,w)}}function O(w,...C){if(e.apply(this,arguments)){var j=w.touches,H=j.length,M=z(this,C,w.changedTouches.length===H).event(w),k,T,L,B;for(fa(w),T=0;T<H;++T)L=j[T],B=Nn(L,this),B=[B,this.__zoom.invert(B),L.identifier],M.touch0?!M.touch1&&M.touch0[2]!==B[2]&&(M.touch1=B,M.taps=0):(M.touch0=B,k=!0,M.taps=1+!!c);c&&(c=clearTimeout(c)),k&&(M.taps<2&&(d=B[0],c=setTimeout(function(){c=null},m)),yi(this),M.start())}}function W(w,...C){if(this.__zooming){var j=z(this,C).event(w),H=w.changedTouches,M=H.length,k,T,L,B;for(xo(w),k=0;k<M;++k)T=H[k],L=Nn(T,this),j.touch0&&j.touch0[2]===T.identifier?j.touch0[0]=L:j.touch1&&j.touch1[2]===T.identifier&&(j.touch1[0]=L);if(T=j.that.__zoom,j.touch1){var D=j.touch0[0],V=j.touch0[1],G=j.touch1[0],Q=j.touch1[1],K=(K=G[0]-D[0])*K+(K=G[1]-D[1])*K,q=(q=Q[0]-V[0])*q+(q=Q[1]-V[1])*q;T=h(T,Math.sqrt(K/q)),L=[(D[0]+G[0])/2,(D[1]+G[1])/2],B=[(V[0]+Q[0])/2,(V[1]+Q[1])/2]}else if(j.touch0)L=j.touch0[0],B=j.touch0[1];else return;j.zoom("touch",t(y(T,L,B),j.extent,i))}}function $(w,...C){if(this.__zooming){var j=z(this,C).event(w),H=w.changedTouches,M=H.length,k,T;for(fa(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},m),k=0;k<M;++k)T=H[k],j.touch0&&j.touch0[2]===T.identifier?delete j.touch0:j.touch1&&j.touch1[2]===T.identifier&&delete j.touch1;if(j.touch1&&!j.touch0&&(j.touch0=j.touch1,delete j.touch1),j.touch0)j.touch0[1]=this.__zoom.invert(j.touch0[0]);else if(j.end(),j.taps===2&&(T=Nn(T,this),Math.hypot(d[0]-T[0],d[1]-T[1])<b)){var L=fn(this).on("dblclick.zoom");L&&L.apply(this,arguments)}}}return p.wheelDelta=function(w){return arguments.length?(r=typeof w=="function"?w:Ys(+w),p):r},p.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Ys(!!w),p):e},p.touchable=function(w){return arguments.length?(o=typeof w=="function"?w:Ys(!!w),p):o},p.extent=function(w){return arguments.length?(n=typeof w=="function"?w:Ys([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),p):n},p.scaleExtent=function(w){return arguments.length?(s[0]=+w[0],s[1]=+w[1],p):[s[0],s[1]]},p.translateExtent=function(w){return arguments.length?(i[0][0]=+w[0][0],i[1][0]=+w[1][0],i[0][1]=+w[0][1],i[1][1]=+w[1][1],p):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},p.constrain=function(w){return arguments.length?(t=w,p):t},p.duration=function(w){return arguments.length?(l=+w,p):l},p.interpolate=function(w){return arguments.length?(a=w,p):a},p.on=function(){var w=u.on.apply(u,arguments);return w===u?p:w},p.clickDistance=function(w){return arguments.length?(g=(w=+w)*w,p):Math.sqrt(g)},p.tapDistance=function(w){return arguments.length?(b=+w,p):b},p}const kl=S.createContext(null),ZS=kl.Provider,st={error001:()=>"[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The React Flow parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,n)=>`Couldn't create edge for ${e?"target":"source"} handle id: "${e?n.targetHandle:n.sourceHandle}", edge id: ${n.id}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`},Mg=st.error001();function pe(e,n){const t=S.useContext(kl);if(t===null)throw new Error(Mg);return tg(t,e,n)}const ze=()=>{const e=S.useContext(kl);if(e===null)throw new Error(Mg);return S.useMemo(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe,destroy:e.destroy}),[e])},JS=e=>e.userSelectionActive?"none":"all";function Rc({position:e,children:n,className:t,style:r,...o}){const s=pe(JS),i=`${e}`.split("-");return R.createElement("div",{className:De(["react-flow__panel",t,...i]),style:{...r,pointerEvents:s},...o},n)}function e3({proOptions:e,position:n="bottom-right"}){return e!=null&&e.hideAttribution?null:R.createElement(Rc,{position:n,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro"},R.createElement("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution"},"React Flow"))}const n3=({x:e,y:n,label:t,labelStyle:r={},labelShowBg:o=!0,labelBgStyle:s={},labelBgPadding:i=[2,4],labelBgBorderRadius:l=2,children:a,className:u,...c})=>{const d=S.useRef(null),[f,m]=S.useState({x:0,y:0,width:0,height:0}),v=De(["react-flow__edge-textwrapper",u]);return S.useEffect(()=>{if(d.current){const g=d.current.getBBox();m({x:g.x,y:g.y,width:g.width,height:g.height})}},[t]),typeof t>"u"||!t?null:R.createElement("g",{transform:`translate(${e-f.width/2} ${n-f.height/2})`,className:v,visibility:f.width?"visible":"hidden",...c},o&&R.createElement("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:s,rx:l,ry:l}),R.createElement("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:d,style:r},t),a)};var t3=S.memo(n3);const Dc=e=>({width:e.offsetWidth,height:e.offsetHeight}),to=(e,n=0,t=1)=>Math.min(Math.max(e,n),t),Lc=(e={x:0,y:0},n)=>({x:to(e.x,n[0][0],n[1][0]),y:to(e.y,n[0][1],n[1][1])}),Wf=(e,n,t)=>e<n?to(Math.abs(e-n),1,50)/50:e>t?-to(Math.abs(e-t),1,50)/50:0,Tg=(e,n)=>{const t=Wf(e.x,35,n.width-35)*20,r=Wf(e.y,35,n.height-35)*20;return[t,r]},Pg=e=>{var n;return((n=e.getRootNode)==null?void 0:n.call(e))||(window==null?void 0:window.document)},Fg=(e,n)=>({x:Math.min(e.x,n.x),y:Math.min(e.y,n.y),x2:Math.max(e.x2,n.x2),y2:Math.max(e.y2,n.y2)}),fs=({x:e,y:n,width:t,height:r})=>({x:e,y:n,x2:e+t,y2:n+r}),Ag=({x:e,y:n,x2:t,y2:r})=>({x:e,y:n,width:t-e,height:r-n}),$f=e=>({...e.positionAbsolute||{x:0,y:0},width:e.width||0,height:e.height||0}),r3=(e,n)=>Ag(Fg(fs(e),fs(n))),Eu=(e,n)=>{const t=Math.max(0,Math.min(e.x+e.width,n.x+n.width)-Math.max(e.x,n.x)),r=Math.max(0,Math.min(e.y+e.height,n.y+n.height)-Math.max(e.y,n.y));return Math.ceil(t*r)},o3=e=>hn(e.width)&&hn(e.height)&&hn(e.x)&&hn(e.y),hn=e=>!isNaN(e)&&isFinite(e),Se=Symbol.for("internals"),Rg=["Enter"," ","Escape"],s3=(e,n)=>{},i3=e=>"nativeEvent"in e;function Nu(e){var o,s;const n=i3(e)?e.nativeEvent:e,t=((s=(o=n.composedPath)==null?void 0:o.call(n))==null?void 0:s[0])||e.target;return["INPUT","SELECT","TEXTAREA"].includes(t==null?void 0:t.nodeName)||(t==null?void 0:t.hasAttribute("contenteditable"))||!!(t!=null&&t.closest(".nokey"))}const Dg=e=>"clientX"in e,jt=(e,n)=>{var s,i;const t=Dg(e),r=t?e.clientX:(s=e.touches)==null?void 0:s[0].clientX,o=t?e.clientY:(i=e.touches)==null?void 0:i[0].clientY;return{x:r-((n==null?void 0:n.left)??0),y:o-((n==null?void 0:n.top)??0)}},Xi=()=>{var e;return typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)==null?void 0:e.indexOf("Mac"))>=0},ks=({id:e,path:n,labelX:t,labelY:r,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:f,interactionWidth:m=20})=>R.createElement(R.Fragment,null,R.createElement("path",{id:e,style:c,d:n,fill:"none",className:"react-flow__edge-path",markerEnd:d,markerStart:f}),m&&R.createElement("path",{d:n,fill:"none",strokeOpacity:0,strokeWidth:m,className:"react-flow__edge-interaction"}),o&&hn(t)&&hn(r)?R.createElement(t3,{x:t,y:r,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u}):null);ks.displayName="BaseEdge";function wo(e,n,t){return t===void 0?t:r=>{const o=n().edges.find(s=>s.id===e);o&&t(r,{...o})}}function Lg({sourceX:e,sourceY:n,targetX:t,targetY:r}){const o=Math.abs(t-e)/2,s=t<e?t+o:t-o,i=Math.abs(r-n)/2,l=r<n?r+i:r-i;return[s,l,o,i]}function Og({sourceX:e,sourceY:n,targetX:t,targetY:r,sourceControlX:o,sourceControlY:s,targetControlX:i,targetControlY:l}){const a=e*.125+o*.375+i*.375+t*.125,u=n*.125+s*.375+l*.375+r*.125,c=Math.abs(a-e),d=Math.abs(u-n);return[a,u,c,d]}var ar;(function(e){e.Strict="strict",e.Loose="loose"})(ar||(ar={}));var Yt;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Yt||(Yt={}));var ps;(function(e){e.Partial="partial",e.Full="full"})(ps||(ps={}));var yt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(yt||(yt={}));var hs;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(hs||(hs={}));var ee;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ee||(ee={}));function Kf({pos:e,x1:n,y1:t,x2:r,y2:o}){return e===ee.Left||e===ee.Right?[.5*(n+r),t]:[n,.5*(t+o)]}function Hg({sourceX:e,sourceY:n,sourcePosition:t=ee.Bottom,targetX:r,targetY:o,targetPosition:s=ee.Top}){const[i,l]=Kf({pos:t,x1:e,y1:n,x2:r,y2:o}),[a,u]=Kf({pos:s,x1:r,y1:o,x2:e,y2:n}),[c,d,f,m]=Og({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:i,sourceControlY:l,targetControlX:a,targetControlY:u});return[`M${e},${n} C${i},${l} ${a},${u} ${r},${o}`,c,d,f,m]}const Oc=S.memo(({sourceX:e,sourceY:n,targetX:t,targetY:r,sourcePosition:o=ee.Bottom,targetPosition:s=ee.Top,label:i,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:v,interactionWidth:g})=>{const[b,p,h]=Hg({sourceX:e,sourceY:n,sourcePosition:o,targetX:t,targetY:r,targetPosition:s});return R.createElement(ks,{path:b,labelX:p,labelY:h,label:i,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:v,interactionWidth:g})});Oc.displayName="SimpleBezierEdge";const Gf={[ee.Left]:{x:-1,y:0},[ee.Right]:{x:1,y:0},[ee.Top]:{x:0,y:-1},[ee.Bottom]:{x:0,y:1}},l3=({source:e,sourcePosition:n=ee.Bottom,target:t})=>n===ee.Left||n===ee.Right?e.x<t.x?{x:1,y:0}:{x:-1,y:0}:e.y<t.y?{x:0,y:1}:{x:0,y:-1},Qf=(e,n)=>Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2));function a3({source:e,sourcePosition:n=ee.Bottom,target:t,targetPosition:r=ee.Top,center:o,offset:s}){const i=Gf[n],l=Gf[r],a={x:e.x+i.x*s,y:e.y+i.y*s},u={x:t.x+l.x*s,y:t.y+l.y*s},c=l3({source:a,sourcePosition:n,target:u}),d=c.x!==0?"x":"y",f=c[d];let m=[],v,g;const b={x:0,y:0},p={x:0,y:0},[h,y,x,_]=Lg({sourceX:e.x,sourceY:e.y,targetX:t.x,targetY:t.y});if(i[d]*l[d]===-1){v=o.x??h,g=o.y??y;const N=[{x:v,y:a.y},{x:v,y:u.y}],P=[{x:a.x,y:g},{x:u.x,y:g}];i[d]===f?m=d==="x"?N:P:m=d==="x"?P:N}else{const N=[{x:a.x,y:u.y}],P=[{x:u.x,y:a.y}];if(d==="x"?m=i.x===f?P:N:m=i.y===f?N:P,n===r){const $=Math.abs(e[d]-t[d]);if($<=s){const w=Math.min(s-1,s-$);i[d]===f?b[d]=(a[d]>e[d]?-1:1)*w:p[d]=(u[d]>t[d]?-1:1)*w}}if(n!==r){const $=d==="x"?"y":"x",w=i[d]===l[$],C=a[$]>u[$],j=a[$]<u[$];(i[d]===1&&(!w&&C||w&&j)||i[d]!==1&&(!w&&j||w&&C))&&(m=d==="x"?N:P)}const F={x:a.x+b.x,y:a.y+b.y},A={x:u.x+p.x,y:u.y+p.y},O=Math.max(Math.abs(F.x-m[0].x),Math.abs(A.x-m[0].x)),W=Math.max(Math.abs(F.y-m[0].y),Math.abs(A.y-m[0].y));O>=W?(v=(F.x+A.x)/2,g=m[0].y):(v=m[0].x,g=(F.y+A.y)/2)}return[[e,{x:a.x+b.x,y:a.y+b.y},...m,{x:u.x+p.x,y:u.y+p.y},t],v,g,x,_]}function u3(e,n,t,r){const o=Math.min(Qf(e,n)/2,Qf(n,t)/2,r),{x:s,y:i}=n;if(e.x===s&&s===t.x||e.y===i&&i===t.y)return`L${s} ${i}`;if(e.y===i){const u=e.x<t.x?-1:1,c=e.y<t.y?1:-1;return`L ${s+o*u},${i}Q ${s},${i} ${s},${i+o*c}`}const l=e.x<t.x?1:-1,a=e.y<t.y?-1:1;return`L ${s},${i+o*a}Q ${s},${i} ${s+o*l},${i}`}function _u({sourceX:e,sourceY:n,sourcePosition:t=ee.Bottom,targetX:r,targetY:o,targetPosition:s=ee.Top,borderRadius:i=5,centerX:l,centerY:a,offset:u=20}){const[c,d,f,m,v]=a3({source:{x:e,y:n},sourcePosition:t,target:{x:r,y:o},targetPosition:s,center:{x:l,y:a},offset:u});return[c.reduce((b,p,h)=>{let y="";return h>0&&h<c.length-1?y=u3(c[h-1],p,c[h+1],i):y=`${h===0?"M":"L"}${p.x} ${p.y}`,b+=y,b},""),d,f,m,v]}const El=S.memo(({sourceX:e,sourceY:n,targetX:t,targetY:r,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,sourcePosition:d=ee.Bottom,targetPosition:f=ee.Top,markerEnd:m,markerStart:v,pathOptions:g,interactionWidth:b})=>{const[p,h,y]=_u({sourceX:e,sourceY:n,sourcePosition:d,targetX:t,targetY:r,targetPosition:f,borderRadius:g==null?void 0:g.borderRadius,offset:g==null?void 0:g.offset});return R.createElement(ks,{path:p,labelX:h,labelY:y,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,markerEnd:m,markerStart:v,interactionWidth:b})});El.displayName="SmoothStepEdge";const Hc=S.memo(e=>{var n;return R.createElement(El,{...e,pathOptions:S.useMemo(()=>{var t;return{borderRadius:0,offset:(t=e.pathOptions)==null?void 0:t.offset}},[(n=e.pathOptions)==null?void 0:n.offset])})});Hc.displayName="StepEdge";function c3({sourceX:e,sourceY:n,targetX:t,targetY:r}){const[o,s,i,l]=Lg({sourceX:e,sourceY:n,targetX:t,targetY:r});return[`M ${e},${n}L ${t},${r}`,o,s,i,l]}const Bc=S.memo(({sourceX:e,sourceY:n,targetX:t,targetY:r,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:f,interactionWidth:m})=>{const[v,g,b]=c3({sourceX:e,sourceY:n,targetX:t,targetY:r});return R.createElement(ks,{path:v,labelX:g,labelY:b,label:o,labelStyle:s,labelShowBg:i,labelBgStyle:l,labelBgPadding:a,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:f,interactionWidth:m})});Bc.displayName="StraightEdge";function Xs(e,n){return e>=0?.5*e:n*25*Math.sqrt(-e)}function Yf({pos:e,x1:n,y1:t,x2:r,y2:o,c:s}){switch(e){case ee.Left:return[n-Xs(n-r,s),t];case ee.Right:return[n+Xs(r-n,s),t];case ee.Top:return[n,t-Xs(t-o,s)];case ee.Bottom:return[n,t+Xs(o-t,s)]}}function Bg({sourceX:e,sourceY:n,sourcePosition:t=ee.Bottom,targetX:r,targetY:o,targetPosition:s=ee.Top,curvature:i=.25}){const[l,a]=Yf({pos:t,x1:e,y1:n,x2:r,y2:o,c:i}),[u,c]=Yf({pos:s,x1:r,y1:o,x2:e,y2:n,c:i}),[d,f,m,v]=Og({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:l,sourceControlY:a,targetControlX:u,targetControlY:c});return[`M${e},${n} C${l},${a} ${u},${c} ${r},${o}`,d,f,m,v]}const qi=S.memo(({sourceX:e,sourceY:n,targetX:t,targetY:r,sourcePosition:o=ee.Bottom,targetPosition:s=ee.Top,label:i,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:v,pathOptions:g,interactionWidth:b})=>{const[p,h,y]=Bg({sourceX:e,sourceY:n,sourcePosition:o,targetX:t,targetY:r,targetPosition:s,curvature:g==null?void 0:g.curvature});return R.createElement(ks,{path:p,labelX:h,labelY:y,label:i,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:v,interactionWidth:b})});qi.displayName="BezierEdge";const Vc=S.createContext(null),d3=Vc.Provider;Vc.Consumer;const f3=()=>S.useContext(Vc),p3=e=>"id"in e&&"source"in e&&"target"in e,h3=({source:e,sourceHandle:n,target:t,targetHandle:r})=>`reactflow__edge-${e}${n||""}-${t}${r||""}`,zu=(e,n)=>typeof e>"u"?"":typeof e=="string"?e:`${n?`${n}__`:""}${Object.keys(e).sort().map(r=>`${r}=${e[r]}`).join("&")}`,m3=(e,n)=>n.some(t=>t.source===e.source&&t.target===e.target&&(t.sourceHandle===e.sourceHandle||!t.sourceHandle&&!e.sourceHandle)&&(t.targetHandle===e.targetHandle||!t.targetHandle&&!e.targetHandle)),g3=(e,n)=>{if(!e.source||!e.target)return n;let t;return p3(e)?t={...e}:t={...e,id:h3(e)},m3(t,n)?n:n.concat(t)},ju=({x:e,y:n},[t,r,o],s,[i,l])=>{const a={x:(e-t)/o,y:(n-r)/o};return s?{x:i*Math.round(a.x/i),y:l*Math.round(a.y/l)}:a},Vg=({x:e,y:n},[t,r,o])=>({x:e*o+t,y:n*o+r}),er=(e,n=[0,0])=>{if(!e)return{x:0,y:0,positionAbsolute:{x:0,y:0}};const t=(e.width??0)*n[0],r=(e.height??0)*n[1],o={x:e.position.x-t,y:e.position.y-r};return{...o,positionAbsolute:e.positionAbsolute?{x:e.positionAbsolute.x-t,y:e.positionAbsolute.y-r}:o}},Nl=(e,n=[0,0])=>{if(e.length===0)return{x:0,y:0,width:0,height:0};const t=e.reduce((r,o)=>{const{x:s,y:i}=er(o,n).positionAbsolute;return Fg(r,fs({x:s,y:i,width:o.width||0,height:o.height||0}))},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return Ag(t)},Ug=(e,n,[t,r,o]=[0,0,1],s=!1,i=!1,l=[0,0])=>{const a={x:(n.x-t)/o,y:(n.y-r)/o,width:n.width/o,height:n.height/o},u=[];return e.forEach(c=>{const{width:d,height:f,selectable:m=!0,hidden:v=!1}=c;if(i&&!m||v)return!1;const{positionAbsolute:g}=er(c,l),b={x:g.x,y:g.y,width:d||0,height:f||0},p=Eu(a,b),h=typeof d>"u"||typeof f>"u"||d===null||f===null,y=s&&p>0,x=(d||0)*(f||0);(h||y||p>=x||c.dragging)&&u.push(c)}),u},Wg=(e,n)=>{const t=e.map(r=>r.id);return n.filter(r=>t.includes(r.source)||t.includes(r.target))},$g=(e,n,t,r,o,s=.1)=>{const i=n/(e.width*(1+s)),l=t/(e.height*(1+s)),a=Math.min(i,l),u=to(a,r,o),c=e.x+e.width/2,d=e.y+e.height/2,f=n/2-c*u,m=t/2-d*u;return{x:f,y:m,zoom:u}},Ut=(e,n=0)=>e.transition().duration(n);function Xf(e,n,t,r){return(n[t]||[]).reduce((o,s)=>{var i,l;return`${e.id}-${s.id}-${t}`!==r&&o.push({id:s.id||null,type:t,nodeId:e.id,x:(((i=e.positionAbsolute)==null?void 0:i.x)??0)+s.x+s.width/2,y:(((l=e.positionAbsolute)==null?void 0:l.y)??0)+s.y+s.height/2}),o},[])}function y3(e,n,t,r,o,s){const{x:i,y:l}=jt(e),u=n.elementsFromPoint(i,l).find(v=>v.classList.contains("react-flow__handle"));if(u){const v=u.getAttribute("data-nodeid");if(v){const g=Uc(void 0,u),b=u.getAttribute("data-handleid"),p=s({nodeId:v,id:b,type:g});if(p){const h=o.find(y=>y.nodeId===v&&y.type===g&&y.id===b);return{handle:{id:b,type:g,nodeId:v,x:(h==null?void 0:h.x)||t.x,y:(h==null?void 0:h.y)||t.y},validHandleResult:p}}}}let c=[],d=1/0;if(o.forEach(v=>{const g=Math.sqrt((v.x-t.x)**2+(v.y-t.y)**2);if(g<=r){const b=s(v);g<=d&&(g<d?c=[{handle:v,validHandleResult:b}]:g===d&&c.push({handle:v,validHandleResult:b}),d=g)}}),!c.length)return{handle:null,validHandleResult:Kg()};if(c.length===1)return c[0];const f=c.some(({validHandleResult:v})=>v.isValid),m=c.some(({handle:v})=>v.type==="target");return c.find(({handle:v,validHandleResult:g})=>m?v.type==="target":f?g.isValid:!0)||c[0]}const v3={source:null,target:null,sourceHandle:null,targetHandle:null},Kg=()=>({handleDomNode:null,isValid:!1,connection:v3,endHandle:null});function Gg(e,n,t,r,o,s,i){const l=o==="target",a=i.querySelector(`.react-flow__handle[data-id="${e==null?void 0:e.nodeId}-${e==null?void 0:e.id}-${e==null?void 0:e.type}"]`),u={...Kg(),handleDomNode:a};if(a){const c=Uc(void 0,a),d=a.getAttribute("data-nodeid"),f=a.getAttribute("data-handleid"),m=a.classList.contains("connectable"),v=a.classList.contains("connectableend"),g={source:l?d:t,sourceHandle:l?f:r,target:l?t:d,targetHandle:l?r:f};u.connection=g,m&&v&&(n===ar.Strict?l&&c==="source"||!l&&c==="target":d!==t||f!==r)&&(u.endHandle={nodeId:d,handleId:f,type:c},u.isValid=s(g))}return u}function x3({nodes:e,nodeId:n,handleId:t,handleType:r}){return e.reduce((o,s)=>{if(s[Se]){const{handleBounds:i}=s[Se];let l=[],a=[];i&&(l=Xf(s,i,"source",`${n}-${t}-${r}`),a=Xf(s,i,"target",`${n}-${t}-${r}`)),o.push(...l,...a)}return o},[])}function Uc(e,n){return e||(n!=null&&n.classList.contains("target")?"target":n!=null&&n.classList.contains("source")?"source":null)}function pa(e){e==null||e.classList.remove("valid","connecting","react-flow__handle-valid","react-flow__handle-connecting")}function w3(e,n){let t=null;return n?t="valid":e&&!n&&(t="invalid"),t}function Qg({event:e,handleId:n,nodeId:t,onConnect:r,isTarget:o,getState:s,setState:i,isValidConnection:l,edgeUpdaterType:a,onReconnectEnd:u}){const c=Pg(e.target),{connectionMode:d,domNode:f,autoPanOnConnect:m,connectionRadius:v,onConnectStart:g,panBy:b,getNodes:p,cancelConnection:h}=s();let y=0,x;const{x:_,y:z}=jt(e),N=c==null?void 0:c.elementFromPoint(_,z),P=Uc(a,N),F=f==null?void 0:f.getBoundingClientRect();if(!F||!P)return;let A,O=jt(e,F),W=!1,$=null,w=!1,C=null;const j=x3({nodes:p(),nodeId:t,handleId:n,handleType:P}),H=()=>{if(!m)return;const[T,L]=Tg(O,F);b({x:T,y:L}),y=requestAnimationFrame(H)};i({connectionPosition:O,connectionStatus:null,connectionNodeId:t,connectionHandleId:n,connectionHandleType:P,connectionStartHandle:{nodeId:t,handleId:n,type:P},connectionEndHandle:null}),g==null||g(e,{nodeId:t,handleId:n,handleType:P});function M(T){const{transform:L}=s();O=jt(T,F);const{handle:B,validHandleResult:D}=y3(T,c,ju(O,L,!1,[1,1]),v,j,V=>Gg(V,d,t,n,o?"target":"source",l,c));if(x=B,W||(H(),W=!0),C=D.handleDomNode,$=D.connection,w=D.isValid,i({connectionPosition:x&&w?Vg({x:x.x,y:x.y},L):O,connectionStatus:w3(!!x,w),connectionEndHandle:D.endHandle}),!x&&!w&&!C)return pa(A);$.source!==$.target&&C&&(pa(A),A=C,C.classList.add("connecting","react-flow__handle-connecting"),C.classList.toggle("valid",w),C.classList.toggle("react-flow__handle-valid",w))}function k(T){var L,B;(x||C)&&$&&w&&(r==null||r($)),(B=(L=s()).onConnectEnd)==null||B.call(L,T),a&&(u==null||u(T)),pa(A),h(),cancelAnimationFrame(y),W=!1,w=!1,$=null,C=null,c.removeEventListener("mousemove",M),c.removeEventListener("mouseup",k),c.removeEventListener("touchmove",M),c.removeEventListener("touchend",k)}c.addEventListener("mousemove",M),c.addEventListener("mouseup",k),c.addEventListener("touchmove",M),c.addEventListener("touchend",k)}const qf=()=>!0,b3=e=>({connectionStartHandle:e.connectionStartHandle,connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName}),S3=(e,n,t)=>r=>{const{connectionStartHandle:o,connectionEndHandle:s,connectionClickStartHandle:i}=r;return{connecting:(o==null?void 0:o.nodeId)===e&&(o==null?void 0:o.handleId)===n&&(o==null?void 0:o.type)===t||(s==null?void 0:s.nodeId)===e&&(s==null?void 0:s.handleId)===n&&(s==null?void 0:s.type)===t,clickConnecting:(i==null?void 0:i.nodeId)===e&&(i==null?void 0:i.handleId)===n&&(i==null?void 0:i.type)===t}},Yg=S.forwardRef(({type:e="source",position:n=ee.Top,isValidConnection:t,isConnectable:r=!0,isConnectableStart:o=!0,isConnectableEnd:s=!0,id:i,onConnect:l,children:a,className:u,onMouseDown:c,onTouchStart:d,...f},m)=>{var F,A;const v=i||null,g=e==="target",b=ze(),p=f3(),{connectOnClick:h,noPanClassName:y}=pe(b3,Te),{connecting:x,clickConnecting:_}=pe(S3(p,v,e),Te);p||(A=(F=b.getState()).onError)==null||A.call(F,"010",st.error010());const z=O=>{const{defaultEdgeOptions:W,onConnect:$,hasDefaultEdges:w}=b.getState(),C={...W,...O};if(w){const{edges:j,setEdges:H}=b.getState();H(g3(C,j))}$==null||$(C),l==null||l(C)},N=O=>{if(!p)return;const W=Dg(O);o&&(W&&O.button===0||!W)&&Qg({event:O,handleId:v,nodeId:p,onConnect:z,isTarget:g,getState:b.getState,setState:b.setState,isValidConnection:t||b.getState().isValidConnection||qf}),W?c==null||c(O):d==null||d(O)},P=O=>{const{onClickConnectStart:W,onClickConnectEnd:$,connectionClickStartHandle:w,connectionMode:C,isValidConnection:j}=b.getState();if(!p||!w&&!o)return;if(!w){W==null||W(O,{nodeId:p,handleId:v,handleType:e}),b.setState({connectionClickStartHandle:{nodeId:p,type:e,handleId:v}});return}const H=Pg(O.target),M=t||j||qf,{connection:k,isValid:T}=Gg({nodeId:p,id:v,type:e},C,w.nodeId,w.handleId||null,w.type,M,H);T&&z(k),$==null||$(O),b.setState({connectionClickStartHandle:null})};return R.createElement("div",{"data-handleid":v,"data-nodeid":p,"data-handlepos":n,"data-id":`${p}-${v}-${e}`,className:De(["react-flow__handle",`react-flow__handle-${n}`,"nodrag",y,u,{source:!g,target:g,connectable:r,connectablestart:o,connectableend:s,connecting:_,connectionindicator:r&&(o&&!x||s&&x)}]),onMouseDown:N,onTouchStart:N,onClick:h?P:void 0,ref:m,...f},a)});Yg.displayName="Handle";var Hn=S.memo(Yg);const Xg=({data:e,isConnectable:n,targetPosition:t=ee.Top,sourcePosition:r=ee.Bottom})=>R.createElement(R.Fragment,null,R.createElement(Hn,{type:"target",position:t,isConnectable:n}),e==null?void 0:e.label,R.createElement(Hn,{type:"source",position:r,isConnectable:n}));Xg.displayName="DefaultNode";var Iu=S.memo(Xg);const qg=({data:e,isConnectable:n,sourcePosition:t=ee.Bottom})=>R.createElement(R.Fragment,null,e==null?void 0:e.label,R.createElement(Hn,{type:"source",position:t,isConnectable:n}));qg.displayName="InputNode";var Zg=S.memo(qg);const Jg=({data:e,isConnectable:n,targetPosition:t=ee.Top})=>R.createElement(R.Fragment,null,R.createElement(Hn,{type:"target",position:t,isConnectable:n}),e==null?void 0:e.label);Jg.displayName="OutputNode";var e0=S.memo(Jg);const Wc=()=>null;Wc.displayName="GroupNode";const k3=e=>({selectedNodes:e.getNodes().filter(n=>n.selected),selectedEdges:e.edges.filter(n=>n.selected).map(n=>({...n}))}),qs=e=>e.id;function E3(e,n){return Te(e.selectedNodes.map(qs),n.selectedNodes.map(qs))&&Te(e.selectedEdges.map(qs),n.selectedEdges.map(qs))}const n0=S.memo(({onSelectionChange:e})=>{const n=ze(),{selectedNodes:t,selectedEdges:r}=pe(k3,E3);return S.useEffect(()=>{const o={nodes:t,edges:r};e==null||e(o),n.getState().onSelectionChange.forEach(s=>s(o))},[t,r,e]),null});n0.displayName="SelectionListener";const N3=e=>!!e.onSelectionChange;function _3({onSelectionChange:e}){const n=pe(N3);return e||n?R.createElement(n0,{onSelectionChange:e}):null}const z3=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset});function gr(e,n){S.useEffect(()=>{typeof e<"u"&&n(e)},[e])}function se(e,n,t){S.useEffect(()=>{typeof n<"u"&&t({[e]:n})},[n])}const j3=({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,onConnect:o,onConnectStart:s,onConnectEnd:i,onClickConnectStart:l,onClickConnectEnd:a,nodesDraggable:u,nodesConnectable:c,nodesFocusable:d,edgesFocusable:f,edgesUpdatable:m,elevateNodesOnSelect:v,minZoom:g,maxZoom:b,nodeExtent:p,onNodesChange:h,onEdgesChange:y,elementsSelectable:x,connectionMode:_,snapGrid:z,snapToGrid:N,translateExtent:P,connectOnClick:F,defaultEdgeOptions:A,fitView:O,fitViewOptions:W,onNodesDelete:$,onEdgesDelete:w,onNodeDrag:C,onNodeDragStart:j,onNodeDragStop:H,onSelectionDrag:M,onSelectionDragStart:k,onSelectionDragStop:T,noPanClassName:L,nodeOrigin:B,rfId:D,autoPanOnConnect:V,autoPanOnNodeDrag:G,onError:Q,connectionRadius:K,isValidConnection:q,nodeDragThreshold:E})=>{const{setNodes:U,setEdges:X,setDefaultNodesAndEdges:ne,setMinZoom:re,setMaxZoom:ae,setTranslateExtent:de,setNodeExtent:je,reset:ue}=pe(z3,Te),Z=ze();return S.useEffect(()=>{const Ie=r==null?void 0:r.map(xn=>({...xn,...A}));return ne(t,Ie),()=>{ue()}},[]),se("defaultEdgeOptions",A,Z.setState),se("connectionMode",_,Z.setState),se("onConnect",o,Z.setState),se("onConnectStart",s,Z.setState),se("onConnectEnd",i,Z.setState),se("onClickConnectStart",l,Z.setState),se("onClickConnectEnd",a,Z.setState),se("nodesDraggable",u,Z.setState),se("nodesConnectable",c,Z.setState),se("nodesFocusable",d,Z.setState),se("edgesFocusable",f,Z.setState),se("edgesUpdatable",m,Z.setState),se("elementsSelectable",x,Z.setState),se("elevateNodesOnSelect",v,Z.setState),se("snapToGrid",N,Z.setState),se("snapGrid",z,Z.setState),se("onNodesChange",h,Z.setState),se("onEdgesChange",y,Z.setState),se("connectOnClick",F,Z.setState),se("fitViewOnInit",O,Z.setState),se("fitViewOnInitOptions",W,Z.setState),se("onNodesDelete",$,Z.setState),se("onEdgesDelete",w,Z.setState),se("onNodeDrag",C,Z.setState),se("onNodeDragStart",j,Z.setState),se("onNodeDragStop",H,Z.setState),se("onSelectionDrag",M,Z.setState),se("onSelectionDragStart",k,Z.setState),se("onSelectionDragStop",T,Z.setState),se("noPanClassName",L,Z.setState),se("nodeOrigin",B,Z.setState),se("rfId",D,Z.setState),se("autoPanOnConnect",V,Z.setState),se("autoPanOnNodeDrag",G,Z.setState),se("onError",Q,Z.setState),se("connectionRadius",K,Z.setState),se("isValidConnection",q,Z.setState),se("nodeDragThreshold",E,Z.setState),gr(e,U),gr(n,X),gr(g,re),gr(b,ae),gr(P,de),gr(p,je),null},Zf={display:"none"},I3={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},t0="react-flow__node-desc",r0="react-flow__edge-desc",C3="react-flow__aria-live",M3=e=>e.ariaLiveMessage;function T3({rfId:e}){const n=pe(M3);return R.createElement("div",{id:`${C3}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:I3},n)}function P3({rfId:e,disableKeyboardA11y:n}){return R.createElement(R.Fragment,null,R.createElement("div",{id:`${t0}-${e}`,style:Zf},"Press enter or space to select a node.",!n&&"You can then use the arrow keys to move the node around."," Press delete to remove it and escape to cancel."," "),R.createElement("div",{id:`${r0}-${e}`,style:Zf},"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."),!n&&R.createElement(T3,{rfId:e}))}var ms=(e=null,n={actInsideInputWithModifier:!0})=>{const[t,r]=S.useState(!1),o=S.useRef(!1),s=S.useRef(new Set([])),[i,l]=S.useMemo(()=>{if(e!==null){const u=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.split("+")),c=u.reduce((d,f)=>d.concat(...f),[]);return[u,c]}return[[],[]]},[e]);return S.useEffect(()=>{const a=typeof document<"u"?document:null,u=(n==null?void 0:n.target)||a;if(e!==null){const c=m=>{if(o.current=m.ctrlKey||m.metaKey||m.shiftKey,(!o.current||o.current&&!n.actInsideInputWithModifier)&&Nu(m))return!1;const g=ep(m.code,l);s.current.add(m[g]),Jf(i,s.current,!1)&&(m.preventDefault(),r(!0))},d=m=>{if((!o.current||o.current&&!n.actInsideInputWithModifier)&&Nu(m))return!1;const g=ep(m.code,l);Jf(i,s.current,!0)?(r(!1),s.current.clear()):s.current.delete(m[g]),m.key==="Meta"&&s.current.clear(),o.current=!1},f=()=>{s.current.clear(),r(!1)};return u==null||u.addEventListener("keydown",c),u==null||u.addEventListener("keyup",d),window.addEventListener("blur",f),()=>{u==null||u.removeEventListener("keydown",c),u==null||u.removeEventListener("keyup",d),window.removeEventListener("blur",f)}}},[e,r]),t};function Jf(e,n,t){return e.filter(r=>t||r.length===n.size).some(r=>r.every(o=>n.has(o)))}function ep(e,n){return n.includes(e)?"code":"key"}function o0(e,n,t,r){var l,a;const o=e.parentNode||e.parentId;if(!o)return t;const s=n.get(o),i=er(s,r);return o0(s,n,{x:(t.x??0)+i.x,y:(t.y??0)+i.y,z:(((l=s[Se])==null?void 0:l.z)??0)>(t.z??0)?((a=s[Se])==null?void 0:a.z)??0:t.z??0},r)}function s0(e,n,t){e.forEach(r=>{var s;const o=r.parentNode||r.parentId;if(o&&!e.has(o))throw new Error(`Parent node ${o} not found`);if(o||t!=null&&t[r.id]){const{x:i,y:l,z:a}=o0(r,e,{...r.position,z:((s=r[Se])==null?void 0:s.z)??0},n);r.positionAbsolute={x:i,y:l},r[Se].z=a,t!=null&&t[r.id]&&(r[Se].isParent=!0)}})}function ha(e,n,t,r){const o=new Map,s={},i=r?1e3:0;return e.forEach(l=>{var m;const a=(hn(l.zIndex)?l.zIndex:0)+(l.selected?i:0),u=n.get(l.id),c={...l,positionAbsolute:{x:l.position.x,y:l.position.y}},d=l.parentNode||l.parentId;d&&(s[d]=!0);const f=(u==null?void 0:u.type)&&(u==null?void 0:u.type)!==l.type;Object.defineProperty(c,Se,{enumerable:!1,value:{handleBounds:f||(m=u==null?void 0:u[Se])==null?void 0:m.handleBounds,z:a}}),o.set(l.id,c)}),s0(o,t,s),o}function i0(e,n={}){const{getNodes:t,width:r,height:o,minZoom:s,maxZoom:i,d3Zoom:l,d3Selection:a,fitViewOnInitDone:u,fitViewOnInit:c,nodeOrigin:d}=e(),f=n.initial&&!u&&c;if(l&&a&&(f||!n.initial)){const v=t().filter(b=>{var h;const p=n.includeHiddenNodes?b.width&&b.height:!b.hidden;return(h=n.nodes)!=null&&h.length?p&&n.nodes.some(y=>y.id===b.id):p}),g=v.every(b=>b.width&&b.height);if(v.length>0&&g){const b=Nl(v,d),{x:p,y:h,zoom:y}=$g(b,r,o,n.minZoom??s,n.maxZoom??i,n.padding??.1),x=Jn.translate(p,h).scale(y);return typeof n.duration=="number"&&n.duration>0?l.transform(Ut(a,n.duration),x):l.transform(a,x),!0}}return!1}function F3(e,n){return e.forEach(t=>{const r=n.get(t.id);r&&n.set(r.id,{...r,[Se]:r[Se],selected:t.selected})}),new Map(n)}function A3(e,n){return n.map(t=>{const r=e.find(o=>o.id===t.id);return r&&(t.selected=r.selected),t})}function Zs({changedNodes:e,changedEdges:n,get:t,set:r}){const{nodeInternals:o,edges:s,onNodesChange:i,onEdgesChange:l,hasDefaultNodes:a,hasDefaultEdges:u}=t();e!=null&&e.length&&(a&&r({nodeInternals:F3(e,o)}),i==null||i(e)),n!=null&&n.length&&(u&&r({edges:A3(n,s)}),l==null||l(n))}const yr=()=>{},R3={zoomIn:yr,zoomOut:yr,zoomTo:yr,getZoom:()=>1,setViewport:yr,getViewport:()=>({x:0,y:0,zoom:1}),fitView:()=>!1,setCenter:yr,fitBounds:yr,project:e=>e,screenToFlowPosition:e=>e,flowToScreenPosition:e=>e,viewportInitialized:!1},D3=e=>({d3Zoom:e.d3Zoom,d3Selection:e.d3Selection}),L3=()=>{const e=ze(),{d3Zoom:n,d3Selection:t}=pe(D3,Te);return S.useMemo(()=>t&&n?{zoomIn:o=>n.scaleBy(Ut(t,o==null?void 0:o.duration),1.2),zoomOut:o=>n.scaleBy(Ut(t,o==null?void 0:o.duration),1/1.2),zoomTo:(o,s)=>n.scaleTo(Ut(t,s==null?void 0:s.duration),o),getZoom:()=>e.getState().transform[2],setViewport:(o,s)=>{const[i,l,a]=e.getState().transform,u=Jn.translate(o.x??i,o.y??l).scale(o.zoom??a);n.transform(Ut(t,s==null?void 0:s.duration),u)},getViewport:()=>{const[o,s,i]=e.getState().transform;return{x:o,y:s,zoom:i}},fitView:o=>i0(e.getState,o),setCenter:(o,s,i)=>{const{width:l,height:a,maxZoom:u}=e.getState(),c=typeof(i==null?void 0:i.zoom)<"u"?i.zoom:u,d=l/2-o*c,f=a/2-s*c,m=Jn.translate(d,f).scale(c);n.transform(Ut(t,i==null?void 0:i.duration),m)},fitBounds:(o,s)=>{const{width:i,height:l,minZoom:a,maxZoom:u}=e.getState(),{x:c,y:d,zoom:f}=$g(o,i,l,a,u,(s==null?void 0:s.padding)??.1),m=Jn.translate(c,d).scale(f);n.transform(Ut(t,s==null?void 0:s.duration),m)},project:o=>{const{transform:s,snapToGrid:i,snapGrid:l}=e.getState();return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"),ju(o,s,i,l)},screenToFlowPosition:o=>{const{transform:s,snapToGrid:i,snapGrid:l,domNode:a}=e.getState();if(!a)return o;const{x:u,y:c}=a.getBoundingClientRect(),d={x:o.x-u,y:o.y-c};return ju(d,s,i,l)},flowToScreenPosition:o=>{const{transform:s,domNode:i}=e.getState();if(!i)return o;const{x:l,y:a}=i.getBoundingClientRect(),u=Vg(o,s);return{x:u.x+l,y:u.y+a}},viewportInitialized:!0}:R3,[n,t])};function _l(){const e=L3(),n=ze(),t=S.useCallback(()=>n.getState().getNodes().map(g=>({...g})),[]),r=S.useCallback(g=>n.getState().nodeInternals.get(g),[]),o=S.useCallback(()=>{const{edges:g=[]}=n.getState();return g.map(b=>({...b}))},[]),s=S.useCallback(g=>{const{edges:b=[]}=n.getState();return b.find(p=>p.id===g)},[]),i=S.useCallback(g=>{const{getNodes:b,setNodes:p,hasDefaultNodes:h,onNodesChange:y}=n.getState(),x=b(),_=typeof g=="function"?g(x):g;if(h)p(_);else if(y){const z=_.length===0?x.map(N=>({type:"remove",id:N.id})):_.map(N=>({item:N,type:"reset"}));y(z)}},[]),l=S.useCallback(g=>{const{edges:b=[],setEdges:p,hasDefaultEdges:h,onEdgesChange:y}=n.getState(),x=typeof g=="function"?g(b):g;if(h)p(x);else if(y){const _=x.length===0?b.map(z=>({type:"remove",id:z.id})):x.map(z=>({item:z,type:"reset"}));y(_)}},[]),a=S.useCallback(g=>{const b=Array.isArray(g)?g:[g],{getNodes:p,setNodes:h,hasDefaultNodes:y,onNodesChange:x}=n.getState();if(y){const z=[...p(),...b];h(z)}else if(x){const _=b.map(z=>({item:z,type:"add"}));x(_)}},[]),u=S.useCallback(g=>{const b=Array.isArray(g)?g:[g],{edges:p=[],setEdges:h,hasDefaultEdges:y,onEdgesChange:x}=n.getState();if(y)h([...p,...b]);else if(x){const _=b.map(z=>({item:z,type:"add"}));x(_)}},[]),c=S.useCallback(()=>{const{getNodes:g,edges:b=[],transform:p}=n.getState(),[h,y,x]=p;return{nodes:g().map(_=>({..._})),edges:b.map(_=>({..._})),viewport:{x:h,y,zoom:x}}},[]),d=S.useCallback(({nodes:g,edges:b})=>{const{nodeInternals:p,getNodes:h,edges:y,hasDefaultNodes:x,hasDefaultEdges:_,onNodesDelete:z,onEdgesDelete:N,onNodesChange:P,onEdgesChange:F}=n.getState(),A=(g||[]).map(C=>C.id),O=(b||[]).map(C=>C.id),W=h().reduce((C,j)=>{const H=j.parentNode||j.parentId,M=!A.includes(j.id)&&H&&C.find(T=>T.id===H);return(typeof j.deletable=="boolean"?j.deletable:!0)&&(A.includes(j.id)||M)&&C.push(j),C},[]),$=y.filter(C=>typeof C.deletable=="boolean"?C.deletable:!0),w=$.filter(C=>O.includes(C.id));if(W||w){const C=Wg(W,$),j=[...w,...C],H=j.reduce((M,k)=>(M.includes(k.id)||M.push(k.id),M),[]);if((_||x)&&(_&&n.setState({edges:y.filter(M=>!H.includes(M.id))}),x&&(W.forEach(M=>{p.delete(M.id)}),n.setState({nodeInternals:new Map(p)}))),H.length>0&&(N==null||N(j),F&&F(H.map(M=>({id:M,type:"remove"})))),W.length>0&&(z==null||z(W),P)){const M=W.map(k=>({id:k.id,type:"remove"}));P(M)}}},[]),f=S.useCallback(g=>{const b=o3(g),p=b?null:n.getState().nodeInternals.get(g.id);return!b&&!p?[null,null,b]:[b?g:$f(p),p,b]},[]),m=S.useCallback((g,b=!0,p)=>{const[h,y,x]=f(g);return h?(p||n.getState().getNodes()).filter(_=>{if(!x&&(_.id===y.id||!_.positionAbsolute))return!1;const z=$f(_),N=Eu(z,h);return b&&N>0||N>=h.width*h.height}):[]},[]),v=S.useCallback((g,b,p=!0)=>{const[h]=f(g);if(!h)return!1;const y=Eu(h,b);return p&&y>0||y>=h.width*h.height},[]);return S.useMemo(()=>({...e,getNodes:t,getNode:r,getEdges:o,getEdge:s,setNodes:i,setEdges:l,addNodes:a,addEdges:u,toObject:c,deleteElements:d,getIntersectingNodes:m,isNodeIntersecting:v}),[e,t,r,o,s,i,l,a,u,c,d,m,v])}const O3={actInsideInputWithModifier:!1};var H3=({deleteKeyCode:e,multiSelectionKeyCode:n})=>{const t=ze(),{deleteElements:r}=_l(),o=ms(e,O3),s=ms(n);S.useEffect(()=>{if(o){const{edges:i,getNodes:l}=t.getState(),a=l().filter(c=>c.selected),u=i.filter(c=>c.selected);r({nodes:a,edges:u}),t.setState({nodesSelectionActive:!1})}},[o]),S.useEffect(()=>{t.setState({multiSelectionActive:s})},[s])};function B3(e){const n=ze();S.useEffect(()=>{let t;const r=()=>{var s,i;if(!e.current)return;const o=Dc(e.current);(o.height===0||o.width===0)&&((i=(s=n.getState()).onError)==null||i.call(s,"004",st.error004())),n.setState({width:o.width||500,height:o.height||500})};return r(),window.addEventListener("resize",r),e.current&&(t=new ResizeObserver(()=>r()),t.observe(e.current)),()=>{window.removeEventListener("resize",r),t&&e.current&&t.unobserve(e.current)}},[])}const $c={position:"absolute",width:"100%",height:"100%",top:0,left:0},V3=(e,n)=>e.x!==n.x||e.y!==n.y||e.zoom!==n.k,Js=e=>({x:e.x,y:e.y,zoom:e.k}),vr=(e,n)=>e.target.closest(`.${n}`),np=(e,n)=>n===2&&Array.isArray(e)&&e.includes(2),tp=e=>{const n=e.ctrlKey&&Xi()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*n},U3=e=>({d3Zoom:e.d3Zoom,d3Selection:e.d3Selection,d3ZoomHandler:e.d3ZoomHandler,userSelectionActive:e.userSelectionActive}),W3=({onMove:e,onMoveStart:n,onMoveEnd:t,onPaneContextMenu:r,zoomOnScroll:o=!0,zoomOnPinch:s=!0,panOnScroll:i=!1,panOnScrollSpeed:l=.5,panOnScrollMode:a=Yt.Free,zoomOnDoubleClick:u=!0,elementsSelectable:c,panOnDrag:d=!0,defaultViewport:f,translateExtent:m,minZoom:v,maxZoom:g,zoomActivationKeyCode:b,preventScrolling:p=!0,children:h,noWheelClassName:y,noPanClassName:x})=>{const _=S.useRef(),z=ze(),N=S.useRef(!1),P=S.useRef(!1),F=S.useRef(null),A=S.useRef({x:0,y:0,zoom:0}),{d3Zoom:O,d3Selection:W,d3ZoomHandler:$,userSelectionActive:w}=pe(U3,Te),C=ms(b),j=S.useRef(0),H=S.useRef(!1),M=S.useRef();return B3(F),S.useEffect(()=>{if(F.current){const k=F.current.getBoundingClientRect(),T=Cg().scaleExtent([v,g]).translateExtent(m),L=fn(F.current).call(T),B=Jn.translate(f.x,f.y).scale(to(f.zoom,v,g)),D=[[0,0],[k.width,k.height]],V=T.constrain()(B,D,m);T.transform(L,V),T.wheelDelta(tp),z.setState({d3Zoom:T,d3Selection:L,d3ZoomHandler:L.on("wheel.zoom"),transform:[V.x,V.y,V.k],domNode:F.current.closest(".react-flow")})}},[]),S.useEffect(()=>{W&&O&&(i&&!C&&!w?W.on("wheel.zoom",k=>{if(vr(k,y))return!1;k.preventDefault(),k.stopImmediatePropagation();const T=W.property("__zoom").k||1;if(k.ctrlKey&&s){const q=Nn(k),E=tp(k),U=T*Math.pow(2,E);O.scaleTo(W,U,q,k);return}const L=k.deltaMode===1?20:1;let B=a===Yt.Vertical?0:k.deltaX*L,D=a===Yt.Horizontal?0:k.deltaY*L;!Xi()&&k.shiftKey&&a!==Yt.Vertical&&(B=k.deltaY*L,D=0),O.translateBy(W,-(B/T)*l,-(D/T)*l,{internal:!0});const V=Js(W.property("__zoom")),{onViewportChangeStart:G,onViewportChange:Q,onViewportChangeEnd:K}=z.getState();clearTimeout(M.current),H.current||(H.current=!0,n==null||n(k,V),G==null||G(V)),H.current&&(e==null||e(k,V),Q==null||Q(V),M.current=setTimeout(()=>{t==null||t(k,V),K==null||K(V),H.current=!1},150))},{passive:!1}):typeof $<"u"&&W.on("wheel.zoom",function(k,T){if(!p&&k.type==="wheel"&&!k.ctrlKey||vr(k,y))return null;k.preventDefault(),$.call(this,k,T)},{passive:!1}))},[w,i,a,W,O,$,C,s,p,y,n,e,t]),S.useEffect(()=>{O&&O.on("start",k=>{var B,D;if(!k.sourceEvent||k.sourceEvent.internal)return null;j.current=(B=k.sourceEvent)==null?void 0:B.button;const{onViewportChangeStart:T}=z.getState(),L=Js(k.transform);N.current=!0,A.current=L,((D=k.sourceEvent)==null?void 0:D.type)==="mousedown"&&z.setState({paneDragging:!0}),T==null||T(L),n==null||n(k.sourceEvent,L)})},[O,n]),S.useEffect(()=>{O&&(w&&!N.current?O.on("zoom",null):w||O.on("zoom",k=>{var L;const{onViewportChange:T}=z.getState();if(z.setState({transform:[k.transform.x,k.transform.y,k.transform.k]}),P.current=!!(r&&np(d,j.current??0)),(e||T)&&!((L=k.sourceEvent)!=null&&L.internal)){const B=Js(k.transform);T==null||T(B),e==null||e(k.sourceEvent,B)}}))},[w,O,e,d,r]),S.useEffect(()=>{O&&O.on("end",k=>{if(!k.sourceEvent||k.sourceEvent.internal)return null;const{onViewportChangeEnd:T}=z.getState();if(N.current=!1,z.setState({paneDragging:!1}),r&&np(d,j.current??0)&&!P.current&&r(k.sourceEvent),P.current=!1,(t||T)&&V3(A.current,k.transform)){const L=Js(k.transform);A.current=L,clearTimeout(_.current),_.current=setTimeout(()=>{T==null||T(L),t==null||t(k.sourceEvent,L)},i?150:0)}})},[O,i,d,t,r]),S.useEffect(()=>{O&&O.filter(k=>{const T=C||o,L=s&&k.ctrlKey;if((d===!0||Array.isArray(d)&&d.includes(1))&&k.button===1&&k.type==="mousedown"&&(vr(k,"react-flow__node")||vr(k,"react-flow__edge")))return!0;if(!d&&!T&&!i&&!u&&!s||w||!u&&k.type==="dblclick"||vr(k,y)&&k.type==="wheel"||vr(k,x)&&(k.type!=="wheel"||i&&k.type==="wheel"&&!C)||!s&&k.ctrlKey&&k.type==="wheel"||!T&&!i&&!L&&k.type==="wheel"||!d&&(k.type==="mousedown"||k.type==="touchstart")||Array.isArray(d)&&!d.includes(k.button)&&k.type==="mousedown")return!1;const B=Array.isArray(d)&&d.includes(k.button)||!k.button||k.button<=1;return(!k.ctrlKey||k.type==="wheel")&&B})},[w,O,o,s,i,u,d,c,C]),R.createElement("div",{className:"react-flow__renderer",ref:F,style:$c},h)},$3=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function K3(){const{userSelectionActive:e,userSelectionRect:n}=pe($3,Te);return e&&n?R.createElement("div",{className:"react-flow__selection react-flow__container",style:{width:n.width,height:n.height,transform:`translate(${n.x}px, ${n.y}px)`}}):null}function rp(e,n){const t=n.parentNode||n.parentId,r=e.find(o=>o.id===t);if(r){const o=n.position.x+n.width-r.width,s=n.position.y+n.height-r.height;if(o>0||s>0||n.position.x<0||n.position.y<0){if(r.style={...r.style},r.style.width=r.style.width??r.width,r.style.height=r.style.height??r.height,o>0&&(r.style.width+=o),s>0&&(r.style.height+=s),n.position.x<0){const i=Math.abs(n.position.x);r.position.x=r.position.x-i,r.style.width+=i,n.position.x=0}if(n.position.y<0){const i=Math.abs(n.position.y);r.position.y=r.position.y-i,r.style.height+=i,n.position.y=0}r.width=r.style.width,r.height=r.style.height}}}function G3(e,n){if(e.some(r=>r.type==="reset"))return e.filter(r=>r.type==="reset").map(r=>r.item);const t=e.filter(r=>r.type==="add").map(r=>r.item);return n.reduce((r,o)=>{const s=e.filter(l=>l.id===o.id);if(s.length===0)return r.push(o),r;const i={...o};for(const l of s)if(l)switch(l.type){case"select":{i.selected=l.selected;break}case"position":{typeof l.position<"u"&&(i.position=l.position),typeof l.positionAbsolute<"u"&&(i.positionAbsolute=l.positionAbsolute),typeof l.dragging<"u"&&(i.dragging=l.dragging),i.expandParent&&rp(r,i);break}case"dimensions":{typeof l.dimensions<"u"&&(i.width=l.dimensions.width,i.height=l.dimensions.height),typeof l.updateStyle<"u"&&(i.style={...i.style||{},...l.dimensions}),typeof l.resizing=="boolean"&&(i.resizing=l.resizing),i.expandParent&&rp(r,i);break}case"remove":return r}return r.push(i),r},t)}function Q3(e,n){return G3(e,n)}const pt=(e,n)=>({id:e,type:"select",selected:n});function Ar(e,n){return e.reduce((t,r)=>{const o=n.includes(r.id);return!r.selected&&o?(r.selected=!0,t.push(pt(r.id,!0))):r.selected&&!o&&(r.selected=!1,t.push(pt(r.id,!1))),t},[])}const ma=(e,n)=>t=>{t.target===n.current&&(e==null||e(t))},Y3=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging}),l0=S.memo(({isSelecting:e,selectionMode:n=ps.Full,panOnDrag:t,onSelectionStart:r,onSelectionEnd:o,onPaneClick:s,onPaneContextMenu:i,onPaneScroll:l,onPaneMouseEnter:a,onPaneMouseMove:u,onPaneMouseLeave:c,children:d})=>{const f=S.useRef(null),m=ze(),v=S.useRef(0),g=S.useRef(0),b=S.useRef(),{userSelectionActive:p,elementsSelectable:h,dragging:y}=pe(Y3,Te),x=()=>{m.setState({userSelectionActive:!1,userSelectionRect:null}),v.current=0,g.current=0},_=$=>{s==null||s($),m.getState().resetSelectedElements(),m.setState({nodesSelectionActive:!1})},z=$=>{if(Array.isArray(t)&&(t!=null&&t.includes(2))){$.preventDefault();return}i==null||i($)},N=l?$=>l($):void 0,P=$=>{const{resetSelectedElements:w,domNode:C}=m.getState();if(b.current=C==null?void 0:C.getBoundingClientRect(),!h||!e||$.button!==0||$.target!==f.current||!b.current)return;const{x:j,y:H}=jt($,b.current);w(),m.setState({userSelectionRect:{width:0,height:0,startX:j,startY:H,x:j,y:H}}),r==null||r($)},F=$=>{const{userSelectionRect:w,nodeInternals:C,edges:j,transform:H,onNodesChange:M,onEdgesChange:k,nodeOrigin:T,getNodes:L}=m.getState();if(!e||!b.current||!w)return;m.setState({userSelectionActive:!0,nodesSelectionActive:!1});const B=jt($,b.current),D=w.startX??0,V=w.startY??0,G={...w,x:B.x<D?B.x:D,y:B.y<V?B.y:V,width:Math.abs(B.x-D),height:Math.abs(B.y-V)},Q=L(),K=Ug(C,G,H,n===ps.Partial,!0,T),q=Wg(K,j).map(U=>U.id),E=K.map(U=>U.id);if(v.current!==E.length){v.current=E.length;const U=Ar(Q,E);U.length&&(M==null||M(U))}if(g.current!==q.length){g.current=q.length;const U=Ar(j,q);U.length&&(k==null||k(U))}m.setState({userSelectionRect:G})},A=$=>{if($.button!==0)return;const{userSelectionRect:w}=m.getState();!p&&w&&$.target===f.current&&(_==null||_($)),m.setState({nodesSelectionActive:v.current>0}),x(),o==null||o($)},O=$=>{p&&(m.setState({nodesSelectionActive:v.current>0}),o==null||o($)),x()},W=h&&(e||p);return R.createElement("div",{className:De(["react-flow__pane",{dragging:y,selection:e}]),onClick:W?void 0:ma(_,f),onContextMenu:ma(z,f),onWheel:ma(N,f),onMouseEnter:W?void 0:a,onMouseDown:W?P:void 0,onMouseMove:W?F:u,onMouseUp:W?A:void 0,onMouseLeave:W?O:c,ref:f,style:$c},d,R.createElement(K3,null))});l0.displayName="Pane";function a0(e,n){const t=e.parentNode||e.parentId;if(!t)return!1;const r=n.get(t);return r?r.selected?!0:a0(r,n):!1}function op(e,n,t){let r=e;do{if(r!=null&&r.matches(n))return!0;if(r===t.current)return!1;r=r.parentElement}while(r);return!1}function X3(e,n,t,r){return Array.from(e.values()).filter(o=>(o.selected||o.id===r)&&(!o.parentNode||o.parentId||!a0(o,e))&&(o.draggable||n&&typeof o.draggable>"u")).map(o=>{var s,i;return{id:o.id,position:o.position||{x:0,y:0},positionAbsolute:o.positionAbsolute||{x:0,y:0},distance:{x:t.x-(((s=o.positionAbsolute)==null?void 0:s.x)??0),y:t.y-(((i=o.positionAbsolute)==null?void 0:i.y)??0)},delta:{x:0,y:0},extent:o.extent,parentNode:o.parentNode||o.parentId,parentId:o.parentNode||o.parentId,width:o.width,height:o.height,expandParent:o.expandParent}})}function q3(e,n){return!n||n==="parent"?n:[n[0],[n[1][0]-(e.width||0),n[1][1]-(e.height||0)]]}function u0(e,n,t,r,o=[0,0],s){const i=q3(e,e.extent||r);let l=i;const a=e.parentNode||e.parentId;if(e.extent==="parent"&&!e.expandParent)if(a&&e.width&&e.height){const d=t.get(a),{x:f,y:m}=er(d,o).positionAbsolute;l=d&&hn(f)&&hn(m)&&hn(d.width)&&hn(d.height)?[[f+e.width*o[0],m+e.height*o[1]],[f+d.width-e.width+e.width*o[0],m+d.height-e.height+e.height*o[1]]]:l}else s==null||s("005",st.error005()),l=i;else if(e.extent&&a&&e.extent!=="parent"){const d=t.get(a),{x:f,y:m}=er(d,o).positionAbsolute;l=[[e.extent[0][0]+f,e.extent[0][1]+m],[e.extent[1][0]+f,e.extent[1][1]+m]]}let u={x:0,y:0};if(a){const d=t.get(a);u=er(d,o).positionAbsolute}const c=l&&l!=="parent"?Lc(n,l):n;return{position:{x:c.x-u.x,y:c.y-u.y},positionAbsolute:c}}function ga({nodeId:e,dragItems:n,nodeInternals:t}){const r=n.map(o=>({...t.get(o.id),position:o.position,positionAbsolute:o.positionAbsolute}));return[e?r.find(o=>o.id===e):r[0],r]}const sp=(e,n,t,r)=>{const o=n.querySelectorAll(e);if(!o||!o.length)return null;const s=Array.from(o),i=n.getBoundingClientRect(),l={x:i.width*r[0],y:i.height*r[1]};return s.map(a=>{const u=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),position:a.getAttribute("data-handlepos"),x:(u.left-i.left-l.x)/t,y:(u.top-i.top-l.y)/t,...Dc(a)}})};function bo(e,n,t){return t===void 0?t:r=>{const o=n().nodeInternals.get(e);o&&t(r,{...o})}}function Cu({id:e,store:n,unselect:t=!1,nodeRef:r}){const{addSelectedNodes:o,unselectNodesAndEdges:s,multiSelectionActive:i,nodeInternals:l,onError:a}=n.getState(),u=l.get(e);if(!u){a==null||a("012",st.error012(e));return}n.setState({nodesSelectionActive:!1}),u.selected?(t||u.selected&&i)&&(s({nodes:[u],edges:[]}),requestAnimationFrame(()=>{var c;return(c=r==null?void 0:r.current)==null?void 0:c.blur()})):o([e])}function Z3(){const e=ze();return S.useCallback(({sourceEvent:t})=>{const{transform:r,snapGrid:o,snapToGrid:s}=e.getState(),i=t.touches?t.touches[0].clientX:t.clientX,l=t.touches?t.touches[0].clientY:t.clientY,a={x:(i-r[0])/r[2],y:(l-r[1])/r[2]};return{xSnapped:s?o[0]*Math.round(a.x/o[0]):a.x,ySnapped:s?o[1]*Math.round(a.y/o[1]):a.y,...a}},[])}function ya(e){return(n,t,r)=>e==null?void 0:e(n,r)}function c0({nodeRef:e,disabled:n=!1,noDragClassName:t,handleSelector:r,nodeId:o,isSelectable:s,selectNodesOnDrag:i}){const l=ze(),[a,u]=S.useState(!1),c=S.useRef([]),d=S.useRef({x:null,y:null}),f=S.useRef(0),m=S.useRef(null),v=S.useRef({x:0,y:0}),g=S.useRef(null),b=S.useRef(!1),p=S.useRef(!1),h=S.useRef(!1),y=Z3();return S.useEffect(()=>{if(e!=null&&e.current){const x=fn(e.current),_=({x:P,y:F})=>{const{nodeInternals:A,onNodeDrag:O,onSelectionDrag:W,updateNodePositions:$,nodeExtent:w,snapGrid:C,snapToGrid:j,nodeOrigin:H,onError:M}=l.getState();d.current={x:P,y:F};let k=!1,T={x:0,y:0,x2:0,y2:0};if(c.current.length>1&&w){const B=Nl(c.current,H);T=fs(B)}if(c.current=c.current.map(B=>{const D={x:P-B.distance.x,y:F-B.distance.y};j&&(D.x=C[0]*Math.round(D.x/C[0]),D.y=C[1]*Math.round(D.y/C[1]));const V=[[w[0][0],w[0][1]],[w[1][0],w[1][1]]];c.current.length>1&&w&&!B.extent&&(V[0][0]=B.positionAbsolute.x-T.x+w[0][0],V[1][0]=B.positionAbsolute.x+(B.width??0)-T.x2+w[1][0],V[0][1]=B.positionAbsolute.y-T.y+w[0][1],V[1][1]=B.positionAbsolute.y+(B.height??0)-T.y2+w[1][1]);const G=u0(B,D,A,V,H,M);return k=k||B.position.x!==G.position.x||B.position.y!==G.position.y,B.position=G.position,B.positionAbsolute=G.positionAbsolute,B}),!k)return;$(c.current,!0,!0),u(!0);const L=o?O:ya(W);if(L&&g.current){const[B,D]=ga({nodeId:o,dragItems:c.current,nodeInternals:A});L(g.current,B,D)}},z=()=>{if(!m.current)return;const[P,F]=Tg(v.current,m.current);if(P!==0||F!==0){const{transform:A,panBy:O}=l.getState();d.current.x=(d.current.x??0)-P/A[2],d.current.y=(d.current.y??0)-F/A[2],O({x:P,y:F})&&_(d.current)}f.current=requestAnimationFrame(z)},N=P=>{var H;const{nodeInternals:F,multiSelectionActive:A,nodesDraggable:O,unselectNodesAndEdges:W,onNodeDragStart:$,onSelectionDragStart:w}=l.getState();p.current=!0;const C=o?$:ya(w);(!i||!s)&&!A&&o&&((H=F.get(o))!=null&&H.selected||W()),o&&s&&i&&Cu({id:o,store:l,nodeRef:e});const j=y(P);if(d.current=j,c.current=X3(F,O,j,o),C&&c.current){const[M,k]=ga({nodeId:o,dragItems:c.current,nodeInternals:F});C(P.sourceEvent,M,k)}};if(n)x.on(".drag",null);else{const P=ab().on("start",F=>{const{domNode:A,nodeDragThreshold:O}=l.getState();O===0&&N(F),h.current=!1;const W=y(F);d.current=W,m.current=(A==null?void 0:A.getBoundingClientRect())||null,v.current=jt(F.sourceEvent,m.current)}).on("drag",F=>{var $,w;const A=y(F),{autoPanOnNodeDrag:O,nodeDragThreshold:W}=l.getState();if(F.sourceEvent.type==="touchmove"&&F.sourceEvent.touches.length>1&&(h.current=!0),!h.current){if(!b.current&&p.current&&O&&(b.current=!0,z()),!p.current){const C=A.xSnapped-((($=d==null?void 0:d.current)==null?void 0:$.x)??0),j=A.ySnapped-(((w=d==null?void 0:d.current)==null?void 0:w.y)??0);Math.sqrt(C*C+j*j)>W&&N(F)}(d.current.x!==A.xSnapped||d.current.y!==A.ySnapped)&&c.current&&p.current&&(g.current=F.sourceEvent,v.current=jt(F.sourceEvent,m.current),_(A))}}).on("end",F=>{if(!(!p.current||h.current)&&(u(!1),b.current=!1,p.current=!1,cancelAnimationFrame(f.current),c.current)){const{updateNodePositions:A,nodeInternals:O,onNodeDragStop:W,onSelectionDragStop:$}=l.getState(),w=o?W:ya($);if(A(c.current,!1,!1),w){const[C,j]=ga({nodeId:o,dragItems:c.current,nodeInternals:O});w(F.sourceEvent,C,j)}}}).filter(F=>{const A=F.target;return!F.button&&(!t||!op(A,`.${t}`,e))&&(!r||op(A,r,e))});return x.call(P),()=>{x.on(".drag",null)}}}},[e,n,t,r,s,l,o,i,y]),a}function d0(){const e=ze();return S.useCallback(t=>{const{nodeInternals:r,nodeExtent:o,updateNodePositions:s,getNodes:i,snapToGrid:l,snapGrid:a,onError:u,nodesDraggable:c}=e.getState(),d=i().filter(h=>h.selected&&(h.draggable||c&&typeof h.draggable>"u")),f=l?a[0]:5,m=l?a[1]:5,v=t.isShiftPressed?4:1,g=t.x*f*v,b=t.y*m*v,p=d.map(h=>{if(h.positionAbsolute){const y={x:h.positionAbsolute.x+g,y:h.positionAbsolute.y+b};l&&(y.x=a[0]*Math.round(y.x/a[0]),y.y=a[1]*Math.round(y.y/a[1]));const{positionAbsolute:x,position:_}=u0(h,y,r,o,void 0,u);h.position=_,h.positionAbsolute=x}return h});s(p,!0,!1)},[])}const $r={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};var So=e=>{const n=({id:t,type:r,data:o,xPos:s,yPos:i,xPosOrigin:l,yPosOrigin:a,selected:u,onClick:c,onMouseEnter:d,onMouseMove:f,onMouseLeave:m,onContextMenu:v,onDoubleClick:g,style:b,className:p,isDraggable:h,isSelectable:y,isConnectable:x,isFocusable:_,selectNodesOnDrag:z,sourcePosition:N,targetPosition:P,hidden:F,resizeObserver:A,dragHandle:O,zIndex:W,isParent:$,noDragClassName:w,noPanClassName:C,initialized:j,disableKeyboardA11y:H,ariaLabel:M,rfId:k,hasHandleBounds:T})=>{const L=ze(),B=S.useRef(null),D=S.useRef(null),V=S.useRef(N),G=S.useRef(P),Q=S.useRef(r),K=y||h||c||d||f||m,q=d0(),E=bo(t,L.getState,d),U=bo(t,L.getState,f),X=bo(t,L.getState,m),ne=bo(t,L.getState,v),re=bo(t,L.getState,g),ae=ue=>{const{nodeDragThreshold:Z}=L.getState();if(y&&(!z||!h||Z>0)&&Cu({id:t,store:L,nodeRef:B}),c){const Ie=L.getState().nodeInternals.get(t);Ie&&c(ue,{...Ie})}},de=ue=>{if(!Nu(ue)&&!H)if(Rg.includes(ue.key)&&y){const Z=ue.key==="Escape";Cu({id:t,store:L,unselect:Z,nodeRef:B})}else h&&u&&Object.prototype.hasOwnProperty.call($r,ue.key)&&(L.setState({ariaLiveMessage:`Moved selected node ${ue.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~s}, y: ${~~i}`}),q({x:$r[ue.key].x,y:$r[ue.key].y,isShiftPressed:ue.shiftKey}))};S.useEffect(()=>()=>{D.current&&(A==null||A.unobserve(D.current),D.current=null)},[]),S.useEffect(()=>{if(B.current&&!F){const ue=B.current;(!j||!T||D.current!==ue)&&(D.current&&(A==null||A.unobserve(D.current)),A==null||A.observe(ue),D.current=ue)}},[F,j,T]),S.useEffect(()=>{const ue=Q.current!==r,Z=V.current!==N,Ie=G.current!==P;B.current&&(ue||Z||Ie)&&(ue&&(Q.current=r),Z&&(V.current=N),Ie&&(G.current=P),L.getState().updateNodeDimensions([{id:t,nodeElement:B.current,forceUpdate:!0}]))},[t,r,N,P]);const je=c0({nodeRef:B,disabled:F||!h,noDragClassName:w,handleSelector:O,nodeId:t,isSelectable:y,selectNodesOnDrag:z});return F?null:R.createElement("div",{className:De(["react-flow__node",`react-flow__node-${r}`,{[C]:h},p,{selected:u,selectable:y,parent:$,dragging:je}]),ref:B,style:{zIndex:W,transform:`translate(${l}px,${a}px)`,pointerEvents:K?"all":"none",visibility:j?"visible":"hidden",...b},"data-id":t,"data-testid":`rf__node-${t}`,onMouseEnter:E,onMouseMove:U,onMouseLeave:X,onContextMenu:ne,onClick:ae,onDoubleClick:re,onKeyDown:_?de:void 0,tabIndex:_?0:void 0,role:_?"button":void 0,"aria-describedby":H?void 0:`${t0}-${k}`,"aria-label":M},R.createElement(d3,{value:t},R.createElement(e,{id:t,data:o,type:r,xPos:s,yPos:i,selected:u,isConnectable:x,sourcePosition:N,targetPosition:P,dragging:je,dragHandle:O,zIndex:W})))};return n.displayName="NodeWrapper",S.memo(n)};const J3=e=>{const n=e.getNodes().filter(t=>t.selected);return{...Nl(n,e.nodeOrigin),transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,userSelectionActive:e.userSelectionActive}};function ek({onSelectionContextMenu:e,noPanClassName:n,disableKeyboardA11y:t}){const r=ze(),{width:o,height:s,x:i,y:l,transformString:a,userSelectionActive:u}=pe(J3,Te),c=d0(),d=S.useRef(null);if(S.useEffect(()=>{var v;t||(v=d.current)==null||v.focus({preventScroll:!0})},[t]),c0({nodeRef:d}),u||!o||!s)return null;const f=e?v=>{const g=r.getState().getNodes().filter(b=>b.selected);e(v,g)}:void 0,m=v=>{Object.prototype.hasOwnProperty.call($r,v.key)&&c({x:$r[v.key].x,y:$r[v.key].y,isShiftPressed:v.shiftKey})};return R.createElement("div",{className:De(["react-flow__nodesselection","react-flow__container",n]),style:{transform:a}},R.createElement("div",{ref:d,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:t?void 0:-1,onKeyDown:t?void 0:m,style:{width:o,height:s,top:l,left:i}}))}var nk=S.memo(ek);const tk=e=>e.nodesSelectionActive,f0=({children:e,onPaneClick:n,onPaneMouseEnter:t,onPaneMouseMove:r,onPaneMouseLeave:o,onPaneContextMenu:s,onPaneScroll:i,deleteKeyCode:l,onMove:a,onMoveStart:u,onMoveEnd:c,selectionKeyCode:d,selectionOnDrag:f,selectionMode:m,onSelectionStart:v,onSelectionEnd:g,multiSelectionKeyCode:b,panActivationKeyCode:p,zoomActivationKeyCode:h,elementsSelectable:y,zoomOnScroll:x,zoomOnPinch:_,panOnScroll:z,panOnScrollSpeed:N,panOnScrollMode:P,zoomOnDoubleClick:F,panOnDrag:A,defaultViewport:O,translateExtent:W,minZoom:$,maxZoom:w,preventScrolling:C,onSelectionContextMenu:j,noWheelClassName:H,noPanClassName:M,disableKeyboardA11y:k})=>{const T=pe(tk),L=ms(d),B=ms(p),D=B||A,V=B||z,G=L||f&&D!==!0;return H3({deleteKeyCode:l,multiSelectionKeyCode:b}),R.createElement(W3,{onMove:a,onMoveStart:u,onMoveEnd:c,onPaneContextMenu:s,elementsSelectable:y,zoomOnScroll:x,zoomOnPinch:_,panOnScroll:V,panOnScrollSpeed:N,panOnScrollMode:P,zoomOnDoubleClick:F,panOnDrag:!L&&D,defaultViewport:O,translateExtent:W,minZoom:$,maxZoom:w,zoomActivationKeyCode:h,preventScrolling:C,noWheelClassName:H,noPanClassName:M},R.createElement(l0,{onSelectionStart:v,onSelectionEnd:g,onPaneClick:n,onPaneMouseEnter:t,onPaneMouseMove:r,onPaneMouseLeave:o,onPaneContextMenu:s,onPaneScroll:i,panOnDrag:D,isSelecting:!!G,selectionMode:m},e,T&&R.createElement(nk,{onSelectionContextMenu:j,noPanClassName:M,disableKeyboardA11y:k})))};f0.displayName="FlowRenderer";var rk=S.memo(f0);function ok(e){return pe(S.useCallback(t=>e?Ug(t.nodeInternals,{x:0,y:0,width:t.width,height:t.height},t.transform,!0):t.getNodes(),[e]))}function sk(e){const n={input:So(e.input||Zg),default:So(e.default||Iu),output:So(e.output||e0),group:So(e.group||Wc)},t={},r=Object.keys(e).filter(o=>!["input","default","output","group"].includes(o)).reduce((o,s)=>(o[s]=So(e[s]||Iu),o),t);return{...n,...r}}const ik=({x:e,y:n,width:t,height:r,origin:o})=>!t||!r?{x:e,y:n}:o[0]<0||o[1]<0||o[0]>1||o[1]>1?{x:e,y:n}:{x:e-t*o[0],y:n-r*o[1]},lk=e=>({nodesDraggable:e.nodesDraggable,nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,updateNodeDimensions:e.updateNodeDimensions,onError:e.onError}),p0=e=>{const{nodesDraggable:n,nodesConnectable:t,nodesFocusable:r,elementsSelectable:o,updateNodeDimensions:s,onError:i}=pe(lk,Te),l=ok(e.onlyRenderVisibleElements),a=S.useRef(),u=S.useMemo(()=>{if(typeof ResizeObserver>"u")return null;const c=new ResizeObserver(d=>{const f=d.map(m=>({id:m.target.getAttribute("data-id"),nodeElement:m.target,forceUpdate:!0}));s(f)});return a.current=c,c},[]);return S.useEffect(()=>()=>{var c;(c=a==null?void 0:a.current)==null||c.disconnect()},[]),R.createElement("div",{className:"react-flow__nodes",style:$c},l.map(c=>{var _,z,N;let d=c.type||"default";e.nodeTypes[d]||(i==null||i("003",st.error003(d)),d="default");const f=e.nodeTypes[d]||e.nodeTypes.default,m=!!(c.draggable||n&&typeof c.draggable>"u"),v=!!(c.selectable||o&&typeof c.selectable>"u"),g=!!(c.connectable||t&&typeof c.connectable>"u"),b=!!(c.focusable||r&&typeof c.focusable>"u"),p=e.nodeExtent?Lc(c.positionAbsolute,e.nodeExtent):c.positionAbsolute,h=(p==null?void 0:p.x)??0,y=(p==null?void 0:p.y)??0,x=ik({x:h,y,width:c.width??0,height:c.height??0,origin:e.nodeOrigin});return R.createElement(f,{key:c.id,id:c.id,className:c.className,style:c.style,type:d,data:c.data,sourcePosition:c.sourcePosition||ee.Bottom,targetPosition:c.targetPosition||ee.Top,hidden:c.hidden,xPos:h,yPos:y,xPosOrigin:x.x,yPosOrigin:x.y,selectNodesOnDrag:e.selectNodesOnDrag,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,selected:!!c.selected,isDraggable:m,isSelectable:v,isConnectable:g,isFocusable:b,resizeObserver:u,dragHandle:c.dragHandle,zIndex:((_=c[Se])==null?void 0:_.z)??0,isParent:!!((z=c[Se])!=null&&z.isParent),noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,initialized:!!c.width&&!!c.height,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,ariaLabel:c.ariaLabel,hasHandleBounds:!!((N=c[Se])!=null&&N.handleBounds)})}))};p0.displayName="NodeRenderer";var ak=S.memo(p0);const uk=(e,n,t)=>t===ee.Left?e-n:t===ee.Right?e+n:e,ck=(e,n,t)=>t===ee.Top?e-n:t===ee.Bottom?e+n:e,ip="react-flow__edgeupdater",lp=({position:e,centerX:n,centerY:t,radius:r=10,onMouseDown:o,onMouseEnter:s,onMouseOut:i,type:l})=>R.createElement("circle",{onMouseDown:o,onMouseEnter:s,onMouseOut:i,className:De([ip,`${ip}-${l}`]),cx:uk(n,r,e),cy:ck(t,r,e),r,stroke:"transparent",fill:"transparent"}),dk=()=>!0;var xr=e=>{const n=({id:t,className:r,type:o,data:s,onClick:i,onEdgeDoubleClick:l,selected:a,animated:u,label:c,labelStyle:d,labelShowBg:f,labelBgStyle:m,labelBgPadding:v,labelBgBorderRadius:g,style:b,source:p,target:h,sourceX:y,sourceY:x,targetX:_,targetY:z,sourcePosition:N,targetPosition:P,elementsSelectable:F,hidden:A,sourceHandleId:O,targetHandleId:W,onContextMenu:$,onMouseEnter:w,onMouseMove:C,onMouseLeave:j,reconnectRadius:H,onReconnect:M,onReconnectStart:k,onReconnectEnd:T,markerEnd:L,markerStart:B,rfId:D,ariaLabel:V,isFocusable:G,isReconnectable:Q,pathOptions:K,interactionWidth:q,disableKeyboardA11y:E})=>{const U=S.useRef(null),[X,ne]=S.useState(!1),[re,ae]=S.useState(!1),de=ze(),je=S.useMemo(()=>`url('#${zu(B,D)}')`,[B,D]),ue=S.useMemo(()=>`url('#${zu(L,D)}')`,[L,D]);if(A)return null;const Z=Le=>{var Pn;const{edges:bn,addSelectedEdges:Rt,unselectNodesAndEdges:Dt,multiSelectionActive:Lt}=de.getState(),Wn=bn.find(lo=>lo.id===t);Wn&&(F&&(de.setState({nodesSelectionActive:!1}),Wn.selected&&Lt?(Dt({nodes:[],edges:[Wn]}),(Pn=U.current)==null||Pn.blur()):Rt([t])),i&&i(Le,Wn))},Ie=wo(t,de.getState,l),xn=wo(t,de.getState,$),wn=wo(t,de.getState,w),Vn=wo(t,de.getState,C),lt=wo(t,de.getState,j),Un=(Le,bn)=>{if(Le.button!==0)return;const{edges:Rt,isValidConnection:Dt}=de.getState(),Lt=bn?h:p,Wn=(bn?W:O)||null,Pn=bn?"target":"source",lo=Dt||dk,zl=bn,ao=Rt.find(Ot=>Ot.id===t);ae(!0),k==null||k(Le,ao,Pn);const jl=Ot=>{ae(!1),T==null||T(Ot,ao,Pn)};Qg({event:Le,handleId:Wn,nodeId:Lt,onConnect:Ot=>M==null?void 0:M(ao,Ot),isTarget:zl,getState:de.getState,setState:de.setState,isValidConnection:lo,edgeUpdaterType:Pn,onReconnectEnd:jl})},dr=Le=>Un(Le,!0),Ft=Le=>Un(Le,!1),At=()=>ne(!0),fr=()=>ne(!1),pr=!F&&!i,io=Le=>{var bn;if(!E&&Rg.includes(Le.key)&&F){const{unselectNodesAndEdges:Rt,addSelectedEdges:Dt,edges:Lt}=de.getState();Le.key==="Escape"?((bn=U.current)==null||bn.blur(),Rt({edges:[Lt.find(Pn=>Pn.id===t)]})):Dt([t])}};return R.createElement("g",{className:De(["react-flow__edge",`react-flow__edge-${o}`,r,{selected:a,animated:u,inactive:pr,updating:X}]),onClick:Z,onDoubleClick:Ie,onContextMenu:xn,onMouseEnter:wn,onMouseMove:Vn,onMouseLeave:lt,onKeyDown:G?io:void 0,tabIndex:G?0:void 0,role:G?"button":"img","data-testid":`rf__edge-${t}`,"aria-label":V===null?void 0:V||`Edge from ${p} to ${h}`,"aria-describedby":G?`${r0}-${D}`:void 0,ref:U},!re&&R.createElement(e,{id:t,source:p,target:h,selected:a,animated:u,label:c,labelStyle:d,labelShowBg:f,labelBgStyle:m,labelBgPadding:v,labelBgBorderRadius:g,data:s,style:b,sourceX:y,sourceY:x,targetX:_,targetY:z,sourcePosition:N,targetPosition:P,sourceHandleId:O,targetHandleId:W,markerStart:je,markerEnd:ue,pathOptions:K,interactionWidth:q}),Q&&R.createElement(R.Fragment,null,(Q==="source"||Q===!0)&&R.createElement(lp,{position:N,centerX:y,centerY:x,radius:H,onMouseDown:dr,onMouseEnter:At,onMouseOut:fr,type:"source"}),(Q==="target"||Q===!0)&&R.createElement(lp,{position:P,centerX:_,centerY:z,radius:H,onMouseDown:Ft,onMouseEnter:At,onMouseOut:fr,type:"target"})))};return n.displayName="EdgeWrapper",S.memo(n)};function fk(e){const n={default:xr(e.default||qi),straight:xr(e.bezier||Bc),step:xr(e.step||Hc),smoothstep:xr(e.step||El),simplebezier:xr(e.simplebezier||Oc)},t={},r=Object.keys(e).filter(o=>!["default","bezier"].includes(o)).reduce((o,s)=>(o[s]=xr(e[s]||qi),o),t);return{...n,...r}}function ap(e,n,t=null){const r=((t==null?void 0:t.x)||0)+n.x,o=((t==null?void 0:t.y)||0)+n.y,s=(t==null?void 0:t.width)||n.width,i=(t==null?void 0:t.height)||n.height;switch(e){case ee.Top:return{x:r+s/2,y:o};case ee.Right:return{x:r+s,y:o+i/2};case ee.Bottom:return{x:r+s/2,y:o+i};case ee.Left:return{x:r,y:o+i/2}}}function up(e,n){return e?e.length===1||!n?e[0]:n&&e.find(t=>t.id===n)||null:null}const pk=(e,n,t,r,o,s)=>{const i=ap(t,e,n),l=ap(s,r,o);return{sourceX:i.x,sourceY:i.y,targetX:l.x,targetY:l.y}};function hk({sourcePos:e,targetPos:n,sourceWidth:t,sourceHeight:r,targetWidth:o,targetHeight:s,width:i,height:l,transform:a}){const u={x:Math.min(e.x,n.x),y:Math.min(e.y,n.y),x2:Math.max(e.x+t,n.x+o),y2:Math.max(e.y+r,n.y+s)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=fs({x:(0-a[0])/a[2],y:(0-a[1])/a[2],width:i/a[2],height:l/a[2]}),d=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),f=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(d*f)>0}function cp(e){var r,o,s,i,l;const n=((r=e==null?void 0:e[Se])==null?void 0:r.handleBounds)||null,t=n&&(e==null?void 0:e.width)&&(e==null?void 0:e.height)&&typeof((o=e==null?void 0:e.positionAbsolute)==null?void 0:o.x)<"u"&&typeof((s=e==null?void 0:e.positionAbsolute)==null?void 0:s.y)<"u";return[{x:((i=e==null?void 0:e.positionAbsolute)==null?void 0:i.x)||0,y:((l=e==null?void 0:e.positionAbsolute)==null?void 0:l.y)||0,width:(e==null?void 0:e.width)||0,height:(e==null?void 0:e.height)||0},n,!!t]}const mk=[{level:0,isMaxLevel:!0,edges:[]}];function gk(e,n,t=!1){let r=-1;const o=e.reduce((i,l)=>{var c,d;const a=hn(l.zIndex);let u=a?l.zIndex:0;if(t){const f=n.get(l.target),m=n.get(l.source),v=l.selected||(f==null?void 0:f.selected)||(m==null?void 0:m.selected),g=Math.max(((c=m==null?void 0:m[Se])==null?void 0:c.z)||0,((d=f==null?void 0:f[Se])==null?void 0:d.z)||0,1e3);u=(a?l.zIndex:0)+(v?g:0)}return i[u]?i[u].push(l):i[u]=[l],r=u>r?u:r,i},{}),s=Object.entries(o).map(([i,l])=>{const a=+i;return{edges:l,level:a,isMaxLevel:a===r}});return s.length===0?mk:s}function yk(e,n,t){const r=pe(S.useCallback(o=>e?o.edges.filter(s=>{const i=n.get(s.source),l=n.get(s.target);return(i==null?void 0:i.width)&&(i==null?void 0:i.height)&&(l==null?void 0:l.width)&&(l==null?void 0:l.height)&&hk({sourcePos:i.positionAbsolute||{x:0,y:0},targetPos:l.positionAbsolute||{x:0,y:0},sourceWidth:i.width,sourceHeight:i.height,targetWidth:l.width,targetHeight:l.height,width:o.width,height:o.height,transform:o.transform})}):o.edges,[e,n]));return gk(r,n,t)}const vk=({color:e="none",strokeWidth:n=1})=>R.createElement("polyline",{style:{stroke:e,strokeWidth:n},strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"-5,-4 0,0 -5,4"}),xk=({color:e="none",strokeWidth:n=1})=>R.createElement("polyline",{style:{stroke:e,fill:e,strokeWidth:n},strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"}),dp={[hs.Arrow]:vk,[hs.ArrowClosed]:xk};function wk(e){const n=ze();return S.useMemo(()=>{var o,s;return Object.prototype.hasOwnProperty.call(dp,e)?dp[e]:((s=(o=n.getState()).onError)==null||s.call(o,"009",st.error009(e)),null)},[e])}const bk=({id:e,type:n,color:t,width:r=12.5,height:o=12.5,markerUnits:s="strokeWidth",strokeWidth:i,orient:l="auto-start-reverse"})=>{const a=wk(n);return a?R.createElement("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${r}`,markerHeight:`${o}`,viewBox:"-10 -10 20 20",markerUnits:s,orient:l,refX:"0",refY:"0"},R.createElement(a,{color:t,strokeWidth:i})):null},Sk=({defaultColor:e,rfId:n})=>t=>{const r=[];return t.edges.reduce((o,s)=>([s.markerStart,s.markerEnd].forEach(i=>{if(i&&typeof i=="object"){const l=zu(i,n);r.includes(l)||(o.push({id:l,color:i.color||e,...i}),r.push(l))}}),o),[]).sort((o,s)=>o.id.localeCompare(s.id))},h0=({defaultColor:e,rfId:n})=>{const t=pe(S.useCallback(Sk({defaultColor:e,rfId:n}),[e,n]),(r,o)=>!(r.length!==o.length||r.some((s,i)=>s.id!==o[i].id)));return R.createElement("defs",null,t.map(r=>R.createElement(bk,{id:r.id,key:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient})))};h0.displayName="MarkerDefinitions";var kk=S.memo(h0);const Ek=e=>({nodesConnectable:e.nodesConnectable,edgesFocusable:e.edgesFocusable,edgesUpdatable:e.edgesUpdatable,elementsSelectable:e.elementsSelectable,width:e.width,height:e.height,connectionMode:e.connectionMode,nodeInternals:e.nodeInternals,onError:e.onError}),m0=({defaultMarkerColor:e,onlyRenderVisibleElements:n,elevateEdgesOnSelect:t,rfId:r,edgeTypes:o,noPanClassName:s,onEdgeContextMenu:i,onEdgeMouseEnter:l,onEdgeMouseMove:a,onEdgeMouseLeave:u,onEdgeClick:c,onEdgeDoubleClick:d,onReconnect:f,onReconnectStart:m,onReconnectEnd:v,reconnectRadius:g,children:b,disableKeyboardA11y:p})=>{const{edgesFocusable:h,edgesUpdatable:y,elementsSelectable:x,width:_,height:z,connectionMode:N,nodeInternals:P,onError:F}=pe(Ek,Te),A=yk(n,P,t);return _?R.createElement(R.Fragment,null,A.map(({level:O,edges:W,isMaxLevel:$})=>R.createElement("svg",{key:O,style:{zIndex:O},width:_,height:z,className:"react-flow__edges react-flow__container"},$&&R.createElement(kk,{defaultColor:e,rfId:r}),R.createElement("g",null,W.map(w=>{const[C,j,H]=cp(P.get(w.source)),[M,k,T]=cp(P.get(w.target));if(!H||!T)return null;let L=w.type||"default";o[L]||(F==null||F("011",st.error011(L)),L="default");const B=o[L]||o.default,D=N===ar.Strict?k.target:(k.target??[]).concat(k.source??[]),V=up(j.source,w.sourceHandle),G=up(D,w.targetHandle),Q=(V==null?void 0:V.position)||ee.Bottom,K=(G==null?void 0:G.position)||ee.Top,q=!!(w.focusable||h&&typeof w.focusable>"u"),E=w.reconnectable||w.updatable,U=typeof f<"u"&&(E||y&&typeof E>"u");if(!V||!G)return F==null||F("008",st.error008(V,w)),null;const{sourceX:X,sourceY:ne,targetX:re,targetY:ae}=pk(C,V,Q,M,G,K);return R.createElement(B,{key:w.id,id:w.id,className:De([w.className,s]),type:L,data:w.data,selected:!!w.selected,animated:!!w.animated,hidden:!!w.hidden,label:w.label,labelStyle:w.labelStyle,labelShowBg:w.labelShowBg,labelBgStyle:w.labelBgStyle,labelBgPadding:w.labelBgPadding,labelBgBorderRadius:w.labelBgBorderRadius,style:w.style,source:w.source,target:w.target,sourceHandleId:w.sourceHandle,targetHandleId:w.targetHandle,markerEnd:w.markerEnd,markerStart:w.markerStart,sourceX:X,sourceY:ne,targetX:re,targetY:ae,sourcePosition:Q,targetPosition:K,elementsSelectable:x,onContextMenu:i,onMouseEnter:l,onMouseMove:a,onMouseLeave:u,onClick:c,onEdgeDoubleClick:d,onReconnect:f,onReconnectStart:m,onReconnectEnd:v,reconnectRadius:g,rfId:r,ariaLabel:w.ariaLabel,isFocusable:q,isReconnectable:U,pathOptions:"pathOptions"in w?w.pathOptions:void 0,interactionWidth:w.interactionWidth,disableKeyboardA11y:p})})))),b):null};m0.displayName="EdgeRenderer";var Nk=S.memo(m0);const _k=e=>`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;function zk({children:e}){const n=pe(_k);return R.createElement("div",{className:"react-flow__viewport react-flow__container",style:{transform:n}},e)}function jk(e){const n=_l(),t=S.useRef(!1);S.useEffect(()=>{!t.current&&n.viewportInitialized&&e&&(setTimeout(()=>e(n),1),t.current=!0)},[e,n.viewportInitialized])}const Ik={[ee.Left]:ee.Right,[ee.Right]:ee.Left,[ee.Top]:ee.Bottom,[ee.Bottom]:ee.Top},g0=({nodeId:e,handleType:n,style:t,type:r=yt.Bezier,CustomComponent:o,connectionStatus:s})=>{var z,N,P;const{fromNode:i,handleId:l,toX:a,toY:u,connectionMode:c}=pe(S.useCallback(F=>({fromNode:F.nodeInternals.get(e),handleId:F.connectionHandleId,toX:(F.connectionPosition.x-F.transform[0])/F.transform[2],toY:(F.connectionPosition.y-F.transform[1])/F.transform[2],connectionMode:F.connectionMode}),[e]),Te),d=(z=i==null?void 0:i[Se])==null?void 0:z.handleBounds;let f=d==null?void 0:d[n];if(c===ar.Loose&&(f=f||(d==null?void 0:d[n==="source"?"target":"source"])),!i||!f)return null;const m=l?f.find(F=>F.id===l):f[0],v=m?m.x+m.width/2:(i.width??0)/2,g=m?m.y+m.height/2:i.height??0,b=(((N=i.positionAbsolute)==null?void 0:N.x)??0)+v,p=(((P=i.positionAbsolute)==null?void 0:P.y)??0)+g,h=m==null?void 0:m.position,y=h?Ik[h]:null;if(!h||!y)return null;if(o)return R.createElement(o,{connectionLineType:r,connectionLineStyle:t,fromNode:i,fromHandle:m,fromX:b,fromY:p,toX:a,toY:u,fromPosition:h,toPosition:y,connectionStatus:s});let x="";const _={sourceX:b,sourceY:p,sourcePosition:h,targetX:a,targetY:u,targetPosition:y};return r===yt.Bezier?[x]=Bg(_):r===yt.Step?[x]=_u({..._,borderRadius:0}):r===yt.SmoothStep?[x]=_u(_):r===yt.SimpleBezier?[x]=Hg(_):x=`M${b},${p} ${a},${u}`,R.createElement("path",{d:x,fill:"none",className:"react-flow__connection-path",style:t})};g0.displayName="ConnectionLine";const Ck=e=>({nodeId:e.connectionNodeId,handleType:e.connectionHandleType,nodesConnectable:e.nodesConnectable,connectionStatus:e.connectionStatus,width:e.width,height:e.height});function Mk({containerStyle:e,style:n,type:t,component:r}){const{nodeId:o,handleType:s,nodesConnectable:i,width:l,height:a,connectionStatus:u}=pe(Ck,Te);return!(o&&s&&l&&i)?null:R.createElement("svg",{style:e,width:l,height:a,className:"react-flow__edges react-flow__connectionline react-flow__container"},R.createElement("g",{className:De(["react-flow__connection",u])},R.createElement(g0,{nodeId:o,handleType:s,style:n,type:t,CustomComponent:r,connectionStatus:u})))}function fp(e,n){return S.useRef(null),ze(),S.useMemo(()=>n(e),[e])}const y0=({nodeTypes:e,edgeTypes:n,onMove:t,onMoveStart:r,onMoveEnd:o,onInit:s,onNodeClick:i,onEdgeClick:l,onNodeDoubleClick:a,onEdgeDoubleClick:u,onNodeMouseEnter:c,onNodeMouseMove:d,onNodeMouseLeave:f,onNodeContextMenu:m,onSelectionContextMenu:v,onSelectionStart:g,onSelectionEnd:b,connectionLineType:p,connectionLineStyle:h,connectionLineComponent:y,connectionLineContainerStyle:x,selectionKeyCode:_,selectionOnDrag:z,selectionMode:N,multiSelectionKeyCode:P,panActivationKeyCode:F,zoomActivationKeyCode:A,deleteKeyCode:O,onlyRenderVisibleElements:W,elementsSelectable:$,selectNodesOnDrag:w,defaultViewport:C,translateExtent:j,minZoom:H,maxZoom:M,preventScrolling:k,defaultMarkerColor:T,zoomOnScroll:L,zoomOnPinch:B,panOnScroll:D,panOnScrollSpeed:V,panOnScrollMode:G,zoomOnDoubleClick:Q,panOnDrag:K,onPaneClick:q,onPaneMouseEnter:E,onPaneMouseMove:U,onPaneMouseLeave:X,onPaneScroll:ne,onPaneContextMenu:re,onEdgeContextMenu:ae,onEdgeMouseEnter:de,onEdgeMouseMove:je,onEdgeMouseLeave:ue,onReconnect:Z,onReconnectStart:Ie,onReconnectEnd:xn,reconnectRadius:wn,noDragClassName:Vn,noWheelClassName:lt,noPanClassName:Un,elevateEdgesOnSelect:dr,disableKeyboardA11y:Ft,nodeOrigin:At,nodeExtent:fr,rfId:pr})=>{const io=fp(e,sk),Le=fp(n,fk);return jk(s),R.createElement(rk,{onPaneClick:q,onPaneMouseEnter:E,onPaneMouseMove:U,onPaneMouseLeave:X,onPaneContextMenu:re,onPaneScroll:ne,deleteKeyCode:O,selectionKeyCode:_,selectionOnDrag:z,selectionMode:N,onSelectionStart:g,onSelectionEnd:b,multiSelectionKeyCode:P,panActivationKeyCode:F,zoomActivationKeyCode:A,elementsSelectable:$,onMove:t,onMoveStart:r,onMoveEnd:o,zoomOnScroll:L,zoomOnPinch:B,zoomOnDoubleClick:Q,panOnScroll:D,panOnScrollSpeed:V,panOnScrollMode:G,panOnDrag:K,defaultViewport:C,translateExtent:j,minZoom:H,maxZoom:M,onSelectionContextMenu:v,preventScrolling:k,noDragClassName:Vn,noWheelClassName:lt,noPanClassName:Un,disableKeyboardA11y:Ft},R.createElement(zk,null,R.createElement(Nk,{edgeTypes:Le,onEdgeClick:l,onEdgeDoubleClick:u,onlyRenderVisibleElements:W,onEdgeContextMenu:ae,onEdgeMouseEnter:de,onEdgeMouseMove:je,onEdgeMouseLeave:ue,onReconnect:Z,onReconnectStart:Ie,onReconnectEnd:xn,reconnectRadius:wn,defaultMarkerColor:T,noPanClassName:Un,elevateEdgesOnSelect:!!dr,disableKeyboardA11y:Ft,rfId:pr},R.createElement(Mk,{style:h,type:p,component:y,containerStyle:x})),R.createElement("div",{className:"react-flow__edgelabel-renderer"}),R.createElement(ak,{nodeTypes:io,onNodeClick:i,onNodeDoubleClick:a,onNodeMouseEnter:c,onNodeMouseMove:d,onNodeMouseLeave:f,onNodeContextMenu:m,selectNodesOnDrag:w,onlyRenderVisibleElements:W,noPanClassName:Un,noDragClassName:Vn,disableKeyboardA11y:Ft,nodeOrigin:At,nodeExtent:fr,rfId:pr})))};y0.displayName="GraphView";var Tk=S.memo(y0);const Mu=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],ut={rfId:"1",width:0,height:0,transform:[0,0,1],nodeInternals:new Map,edges:[],onNodesChange:null,onEdgesChange:null,hasDefaultNodes:!1,hasDefaultEdges:!1,d3Zoom:null,d3Selection:null,d3ZoomHandler:void 0,minZoom:.5,maxZoom:2,translateExtent:Mu,nodeExtent:Mu,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionNodeId:null,connectionHandleId:null,connectionHandleType:"source",connectionPosition:{x:0,y:0},connectionStatus:null,connectionMode:ar.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:[0,0],nodeDragThreshold:0,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesUpdatable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,fitViewOnInit:!1,fitViewOnInitDone:!1,fitViewOnInitOptions:void 0,onSelectionChange:[],multiSelectionActive:!1,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,connectionRadius:20,onError:s3,isValidConnection:void 0},Pk=()=>ww((e,n)=>({...ut,setNodes:t=>{const{nodeInternals:r,nodeOrigin:o,elevateNodesOnSelect:s}=n();e({nodeInternals:ha(t,r,o,s)})},getNodes:()=>Array.from(n().nodeInternals.values()),setEdges:t=>{const{defaultEdgeOptions:r={}}=n();e({edges:t.map(o=>({...r,...o}))})},setDefaultNodesAndEdges:(t,r)=>{const o=typeof t<"u",s=typeof r<"u",i=o?ha(t,new Map,n().nodeOrigin,n().elevateNodesOnSelect):new Map;e({nodeInternals:i,edges:s?r:[],hasDefaultNodes:o,hasDefaultEdges:s})},updateNodeDimensions:t=>{const{onNodesChange:r,nodeInternals:o,fitViewOnInit:s,fitViewOnInitDone:i,fitViewOnInitOptions:l,domNode:a,nodeOrigin:u}=n(),c=a==null?void 0:a.querySelector(".react-flow__viewport");if(!c)return;const d=window.getComputedStyle(c),{m22:f}=new window.DOMMatrixReadOnly(d.transform),m=t.reduce((g,b)=>{const p=o.get(b.id);if(p!=null&&p.hidden)o.set(p.id,{...p,[Se]:{...p[Se],handleBounds:void 0}});else if(p){const h=Dc(b.nodeElement);!!(h.width&&h.height&&(p.width!==h.width||p.height!==h.height||b.forceUpdate))&&(o.set(p.id,{...p,[Se]:{...p[Se],handleBounds:{source:sp(".source",b.nodeElement,f,u),target:sp(".target",b.nodeElement,f,u)}},...h}),g.push({id:p.id,type:"dimensions",dimensions:h}))}return g},[]);s0(o,u);const v=i||s&&!i&&i0(n,{initial:!0,...l});e({nodeInternals:new Map(o),fitViewOnInitDone:v}),(m==null?void 0:m.length)>0&&(r==null||r(m))},updateNodePositions:(t,r=!0,o=!1)=>{const{triggerNodeChanges:s}=n(),i=t.map(l=>{const a={id:l.id,type:"position",dragging:o};return r&&(a.positionAbsolute=l.positionAbsolute,a.position=l.position),a});s(i)},triggerNodeChanges:t=>{const{onNodesChange:r,nodeInternals:o,hasDefaultNodes:s,nodeOrigin:i,getNodes:l,elevateNodesOnSelect:a}=n();if(t!=null&&t.length){if(s){const u=Q3(t,l()),c=ha(u,o,i,a);e({nodeInternals:c})}r==null||r(t)}},addSelectedNodes:t=>{const{multiSelectionActive:r,edges:o,getNodes:s}=n();let i,l=null;r?i=t.map(a=>pt(a,!0)):(i=Ar(s(),t),l=Ar(o,[])),Zs({changedNodes:i,changedEdges:l,get:n,set:e})},addSelectedEdges:t=>{const{multiSelectionActive:r,edges:o,getNodes:s}=n();let i,l=null;r?i=t.map(a=>pt(a,!0)):(i=Ar(o,t),l=Ar(s(),[])),Zs({changedNodes:l,changedEdges:i,get:n,set:e})},unselectNodesAndEdges:({nodes:t,edges:r}={})=>{const{edges:o,getNodes:s}=n(),i=t||s(),l=r||o,a=i.map(c=>(c.selected=!1,pt(c.id,!1))),u=l.map(c=>pt(c.id,!1));Zs({changedNodes:a,changedEdges:u,get:n,set:e})},setMinZoom:t=>{const{d3Zoom:r,maxZoom:o}=n();r==null||r.scaleExtent([t,o]),e({minZoom:t})},setMaxZoom:t=>{const{d3Zoom:r,minZoom:o}=n();r==null||r.scaleExtent([o,t]),e({maxZoom:t})},setTranslateExtent:t=>{var r;(r=n().d3Zoom)==null||r.translateExtent(t),e({translateExtent:t})},resetSelectedElements:()=>{const{edges:t,getNodes:r}=n(),s=r().filter(l=>l.selected).map(l=>pt(l.id,!1)),i=t.filter(l=>l.selected).map(l=>pt(l.id,!1));Zs({changedNodes:s,changedEdges:i,get:n,set:e})},setNodeExtent:t=>{const{nodeInternals:r}=n();r.forEach(o=>{o.positionAbsolute=Lc(o.position,t)}),e({nodeExtent:t,nodeInternals:new Map(r)})},panBy:t=>{const{transform:r,width:o,height:s,d3Zoom:i,d3Selection:l,translateExtent:a}=n();if(!i||!l||!t.x&&!t.y)return!1;const u=Jn.translate(r[0]+t.x,r[1]+t.y).scale(r[2]),c=[[0,0],[o,s]],d=i==null?void 0:i.constrain()(u,c,a);return i.transform(l,d),r[0]!==d.x||r[1]!==d.y||r[2]!==d.k},cancelConnection:()=>e({connectionNodeId:ut.connectionNodeId,connectionHandleId:ut.connectionHandleId,connectionHandleType:ut.connectionHandleType,connectionStatus:ut.connectionStatus,connectionStartHandle:ut.connectionStartHandle,connectionEndHandle:ut.connectionEndHandle}),reset:()=>e({...ut})}),Object.is),Kc=({children:e})=>{const n=S.useRef(null);return n.current||(n.current=Pk()),R.createElement(ZS,{value:n.current},e)};Kc.displayName="ReactFlowProvider";const v0=({children:e})=>S.useContext(kl)?R.createElement(R.Fragment,null,e):R.createElement(Kc,null,e);v0.displayName="ReactFlowWrapper";const Fk={input:Zg,default:Iu,output:e0,group:Wc},Ak={default:qi,straight:Bc,step:Hc,smoothstep:El,simplebezier:Oc},Rk=[0,0],Dk=[15,15],Lk={x:0,y:0,zoom:1},Ok={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0},x0=S.forwardRef(({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,className:o,nodeTypes:s=Fk,edgeTypes:i=Ak,onNodeClick:l,onEdgeClick:a,onInit:u,onMove:c,onMoveStart:d,onMoveEnd:f,onConnect:m,onConnectStart:v,onConnectEnd:g,onClickConnectStart:b,onClickConnectEnd:p,onNodeMouseEnter:h,onNodeMouseMove:y,onNodeMouseLeave:x,onNodeContextMenu:_,onNodeDoubleClick:z,onNodeDragStart:N,onNodeDrag:P,onNodeDragStop:F,onNodesDelete:A,onEdgesDelete:O,onSelectionChange:W,onSelectionDragStart:$,onSelectionDrag:w,onSelectionDragStop:C,onSelectionContextMenu:j,onSelectionStart:H,onSelectionEnd:M,connectionMode:k=ar.Strict,connectionLineType:T=yt.Bezier,connectionLineStyle:L,connectionLineComponent:B,connectionLineContainerStyle:D,deleteKeyCode:V="Backspace",selectionKeyCode:G="Shift",selectionOnDrag:Q=!1,selectionMode:K=ps.Full,panActivationKeyCode:q="Space",multiSelectionKeyCode:E=Xi()?"Meta":"Control",zoomActivationKeyCode:U=Xi()?"Meta":"Control",snapToGrid:X=!1,snapGrid:ne=Dk,onlyRenderVisibleElements:re=!1,selectNodesOnDrag:ae=!0,nodesDraggable:de,nodesConnectable:je,nodesFocusable:ue,nodeOrigin:Z=Rk,edgesFocusable:Ie,edgesUpdatable:xn,elementsSelectable:wn,defaultViewport:Vn=Lk,minZoom:lt=.5,maxZoom:Un=2,translateExtent:dr=Mu,preventScrolling:Ft=!0,nodeExtent:At,defaultMarkerColor:fr="#b1b1b7",zoomOnScroll:pr=!0,zoomOnPinch:io=!0,panOnScroll:Le=!1,panOnScrollSpeed:bn=.5,panOnScrollMode:Rt=Yt.Free,zoomOnDoubleClick:Dt=!0,panOnDrag:Lt=!0,onPaneClick:Wn,onPaneMouseEnter:Pn,onPaneMouseMove:lo,onPaneMouseLeave:zl,onPaneScroll:ao,onPaneContextMenu:jl,children:Gc,onEdgeContextMenu:Ot,onEdgeDoubleClick:E0,onEdgeMouseEnter:N0,onEdgeMouseMove:_0,onEdgeMouseLeave:z0,onEdgeUpdate:j0,onEdgeUpdateStart:I0,onEdgeUpdateEnd:C0,onReconnect:M0,onReconnectStart:T0,onReconnectEnd:P0,reconnectRadius:F0=10,edgeUpdaterRadius:A0=10,onNodesChange:R0,onEdgesChange:D0,noDragClassName:L0="nodrag",noWheelClassName:O0="nowheel",noPanClassName:Qc="nopan",fitView:H0=!1,fitViewOptions:B0,connectOnClick:V0=!0,attributionPosition:U0,proOptions:W0,defaultEdgeOptions:$0,elevateNodesOnSelect:K0=!0,elevateEdgesOnSelect:G0=!1,disableKeyboardA11y:Yc=!1,autoPanOnConnect:Q0=!0,autoPanOnNodeDrag:Y0=!0,connectionRadius:X0=20,isValidConnection:q0,onError:Z0,style:J0,id:Xc,nodeDragThreshold:ey,...ny},ty)=>{const Il=Xc||"1";return R.createElement("div",{...ny,style:{...J0,...Ok},ref:ty,className:De(["react-flow",o]),"data-testid":"rf__wrapper",id:Xc},R.createElement(v0,null,R.createElement(Tk,{onInit:u,onMove:c,onMoveStart:d,onMoveEnd:f,onNodeClick:l,onEdgeClick:a,onNodeMouseEnter:h,onNodeMouseMove:y,onNodeMouseLeave:x,onNodeContextMenu:_,onNodeDoubleClick:z,nodeTypes:s,edgeTypes:i,connectionLineType:T,connectionLineStyle:L,connectionLineComponent:B,connectionLineContainerStyle:D,selectionKeyCode:G,selectionOnDrag:Q,selectionMode:K,deleteKeyCode:V,multiSelectionKeyCode:E,panActivationKeyCode:q,zoomActivationKeyCode:U,onlyRenderVisibleElements:re,selectNodesOnDrag:ae,defaultViewport:Vn,translateExtent:dr,minZoom:lt,maxZoom:Un,preventScrolling:Ft,zoomOnScroll:pr,zoomOnPinch:io,zoomOnDoubleClick:Dt,panOnScroll:Le,panOnScrollSpeed:bn,panOnScrollMode:Rt,panOnDrag:Lt,onPaneClick:Wn,onPaneMouseEnter:Pn,onPaneMouseMove:lo,onPaneMouseLeave:zl,onPaneScroll:ao,onPaneContextMenu:jl,onSelectionContextMenu:j,onSelectionStart:H,onSelectionEnd:M,onEdgeContextMenu:Ot,onEdgeDoubleClick:E0,onEdgeMouseEnter:N0,onEdgeMouseMove:_0,onEdgeMouseLeave:z0,onReconnect:M0??j0,onReconnectStart:T0??I0,onReconnectEnd:P0??C0,reconnectRadius:F0??A0,defaultMarkerColor:fr,noDragClassName:L0,noWheelClassName:O0,noPanClassName:Qc,elevateEdgesOnSelect:G0,rfId:Il,disableKeyboardA11y:Yc,nodeOrigin:Z,nodeExtent:At}),R.createElement(j3,{nodes:e,edges:n,defaultNodes:t,defaultEdges:r,onConnect:m,onConnectStart:v,onConnectEnd:g,onClickConnectStart:b,onClickConnectEnd:p,nodesDraggable:de,nodesConnectable:je,nodesFocusable:ue,edgesFocusable:Ie,edgesUpdatable:xn,elementsSelectable:wn,elevateNodesOnSelect:K0,minZoom:lt,maxZoom:Un,nodeExtent:At,onNodesChange:R0,onEdgesChange:D0,snapToGrid:X,snapGrid:ne,connectionMode:k,translateExtent:dr,connectOnClick:V0,defaultEdgeOptions:$0,fitView:H0,fitViewOptions:B0,onNodesDelete:A,onEdgesDelete:O,onNodeDragStart:N,onNodeDrag:P,onNodeDragStop:F,onSelectionDrag:w,onSelectionDragStart:$,onSelectionDragStop:C,noPanClassName:Qc,nodeOrigin:Z,rfId:Il,autoPanOnConnect:Q0,autoPanOnNodeDrag:Y0,onError:Z0,connectionRadius:X0,isValidConnection:q0,nodeDragThreshold:ey}),R.createElement(_3,{onSelectionChange:W}),Gc,R.createElement(e3,{proOptions:W0,position:U0}),R.createElement(P3,{rfId:Il,disableKeyboardA11y:Yc})))});x0.displayName="ReactFlow";const w0=({id:e,x:n,y:t,width:r,height:o,style:s,color:i,strokeColor:l,strokeWidth:a,className:u,borderRadius:c,shapeRendering:d,onClick:f,selected:m})=>{const{background:v,backgroundColor:g}=s||{},b=i||v||g;return R.createElement("rect",{className:De(["react-flow__minimap-node",{selected:m},u]),x:n,y:t,rx:c,ry:c,width:r,height:o,fill:b,stroke:l,strokeWidth:a,shapeRendering:d,onClick:f?p=>f(p,e):void 0})};w0.displayName="MiniMapNode";var Hk=S.memo(w0);const Bk=e=>e.nodeOrigin,Vk=e=>e.getNodes().filter(n=>!n.hidden&&n.width&&n.height),va=e=>e instanceof Function?e:()=>e;function Uk({nodeStrokeColor:e="transparent",nodeColor:n="#e2e2e2",nodeClassName:t="",nodeBorderRadius:r=5,nodeStrokeWidth:o=2,nodeComponent:s=Hk,onClick:i}){const l=pe(Vk,Te),a=pe(Bk),u=va(n),c=va(e),d=va(t),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return R.createElement(R.Fragment,null,l.map(m=>{const{x:v,y:g}=er(m,a).positionAbsolute;return R.createElement(s,{key:m.id,x:v,y:g,width:m.width,height:m.height,style:m.style,selected:m.selected,className:d(m),color:u(m),borderRadius:r,strokeColor:c(m),strokeWidth:o,shapeRendering:f,onClick:i,id:m.id})}))}var Wk=S.memo(Uk);const $k=200,Kk=150,Gk=e=>{const n=e.getNodes(),t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:n.length>0?r3(Nl(n,e.nodeOrigin),t):t,rfId:e.rfId}},Qk="react-flow__minimap-desc";function b0({style:e,className:n,nodeStrokeColor:t="transparent",nodeColor:r="#e2e2e2",nodeClassName:o="",nodeBorderRadius:s=5,nodeStrokeWidth:i=2,nodeComponent:l,maskColor:a="rgb(240, 240, 240, 0.6)",maskStrokeColor:u="none",maskStrokeWidth:c=1,position:d="bottom-right",onClick:f,onNodeClick:m,pannable:v=!1,zoomable:g=!1,ariaLabel:b="React Flow mini map",inversePan:p=!1,zoomStep:h=10,offsetScale:y=5}){const x=ze(),_=S.useRef(null),{boundingRect:z,viewBB:N,rfId:P}=pe(Gk,Te),F=(e==null?void 0:e.width)??$k,A=(e==null?void 0:e.height)??Kk,O=z.width/F,W=z.height/A,$=Math.max(O,W),w=$*F,C=$*A,j=y*$,H=z.x-(w-z.width)/2-j,M=z.y-(C-z.height)/2-j,k=w+j*2,T=C+j*2,L=`${Qk}-${P}`,B=S.useRef(0);B.current=$,S.useEffect(()=>{if(_.current){const G=fn(_.current),Q=E=>{const{transform:U,d3Selection:X,d3Zoom:ne}=x.getState();if(E.sourceEvent.type!=="wheel"||!X||!ne)return;const re=-E.sourceEvent.deltaY*(E.sourceEvent.deltaMode===1?.05:E.sourceEvent.deltaMode?1:.002)*h,ae=U[2]*Math.pow(2,re);ne.scaleTo(X,ae)},K=E=>{const{transform:U,d3Selection:X,d3Zoom:ne,translateExtent:re,width:ae,height:de}=x.getState();if(E.sourceEvent.type!=="mousemove"||!X||!ne)return;const je=B.current*Math.max(1,U[2])*(p?-1:1),ue={x:U[0]-E.sourceEvent.movementX*je,y:U[1]-E.sourceEvent.movementY*je},Z=[[0,0],[ae,de]],Ie=Jn.translate(ue.x,ue.y).scale(U[2]),xn=ne.constrain()(Ie,Z,re);ne.transform(X,xn)},q=Cg().on("zoom",v?K:null).on("zoom.wheel",g?Q:null);return G.call(q),()=>{G.on("zoom",null)}}},[v,g,p,h]);const D=f?G=>{const Q=Nn(G);f(G,{x:Q[0],y:Q[1]})}:void 0,V=m?(G,Q)=>{const K=x.getState().nodeInternals.get(Q);m(G,K)}:void 0;return R.createElement(Rc,{position:d,style:e,className:De(["react-flow__minimap",n]),"data-testid":"rf__minimap"},R.createElement("svg",{width:F,height:A,viewBox:`${H} ${M} ${k} ${T}`,role:"img","aria-labelledby":L,ref:_,onClick:D},b&&R.createElement("title",{id:L},b),R.createElement(Wk,{onClick:V,nodeColor:r,nodeStrokeColor:t,nodeBorderRadius:s,nodeClassName:o,nodeStrokeWidth:i,nodeComponent:l}),R.createElement("path",{className:"react-flow__minimap-mask",d:`M${H-j},${M-j}h${k+j*2}v${T+j*2}h${-k-j*2}z
        M${N.x},${N.y}h${N.width}v${N.height}h${-N.width}z`,fill:a,fillRule:"evenodd",stroke:u,strokeWidth:c,pointerEvents:"none"})))}b0.displayName="MiniMap";var Yk=S.memo(b0);function Xk(){return R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},R.createElement("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"}))}function qk(){return R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5"},R.createElement("path",{d:"M0 0h32v4.2H0z"}))}function Zk(){return R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30"},R.createElement("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"}))}function Jk(){return R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},R.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"}))}function eE(){return R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},R.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"}))}const To=({children:e,className:n,...t})=>R.createElement("button",{type:"button",className:De(["react-flow__controls-button",n]),...t},e);To.displayName="ControlButton";const nE=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom}),S0=({style:e,showZoom:n=!0,showFitView:t=!0,showInteractive:r=!0,fitViewOptions:o,onZoomIn:s,onZoomOut:i,onFitView:l,onInteractiveChange:a,className:u,children:c,position:d="bottom-left"})=>{const f=ze(),[m,v]=S.useState(!1),{isInteractive:g,minZoomReached:b,maxZoomReached:p}=pe(nE,Te),{zoomIn:h,zoomOut:y,fitView:x}=_l();if(S.useEffect(()=>{v(!0)},[]),!m)return null;const _=()=>{h(),s==null||s()},z=()=>{y(),i==null||i()},N=()=>{x(o),l==null||l()},P=()=>{f.setState({nodesDraggable:!g,nodesConnectable:!g,elementsSelectable:!g}),a==null||a(!g)};return R.createElement(Rc,{className:De(["react-flow__controls",u]),position:d,style:e,"data-testid":"rf__controls"},n&&R.createElement(R.Fragment,null,R.createElement(To,{onClick:_,className:"react-flow__controls-zoomin",title:"zoom in","aria-label":"zoom in",disabled:p},R.createElement(Xk,null)),R.createElement(To,{onClick:z,className:"react-flow__controls-zoomout",title:"zoom out","aria-label":"zoom out",disabled:b},R.createElement(qk,null))),t&&R.createElement(To,{className:"react-flow__controls-fitview",onClick:N,title:"fit view","aria-label":"fit view"},R.createElement(Zk,null)),r&&R.createElement(To,{className:"react-flow__controls-interactive",onClick:P,title:"toggle interactivity","aria-label":"toggle interactivity"},g?R.createElement(eE,null):R.createElement(Jk,null)),c)};S0.displayName="Controls";var tE=S.memo(S0),gn;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(gn||(gn={}));function rE({color:e,dimensions:n,lineWidth:t}){return R.createElement("path",{stroke:e,strokeWidth:t,d:`M${n[0]/2} 0 V${n[1]} M0 ${n[1]/2} H${n[0]}`})}function oE({color:e,radius:n}){return R.createElement("circle",{cx:n,cy:n,r:n,fill:e})}const sE={[gn.Dots]:"#91919a",[gn.Lines]:"#eee",[gn.Cross]:"#e2e2e2"},iE={[gn.Dots]:1,[gn.Lines]:1,[gn.Cross]:6},lE=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function k0({id:e,variant:n=gn.Dots,gap:t=20,size:r,lineWidth:o=1,offset:s=2,color:i,style:l,className:a}){const u=S.useRef(null),{transform:c,patternId:d}=pe(lE,Te),f=i||sE[n],m=r||iE[n],v=n===gn.Dots,g=n===gn.Cross,b=Array.isArray(t)?t:[t,t],p=[b[0]*c[2]||1,b[1]*c[2]||1],h=m*c[2],y=g?[h,h]:p,x=v?[h/s,h/s]:[y[0]/s,y[1]/s];return R.createElement("svg",{className:De(["react-flow__background",a]),style:{...l,position:"absolute",width:"100%",height:"100%",top:0,left:0},ref:u,"data-testid":"rf__background"},R.createElement("pattern",{id:d+e,x:c[0]%p[0],y:c[1]%p[1],width:p[0],height:p[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${x[0]},-${x[1]})`},v?R.createElement(oE,{color:f,radius:h/s}):R.createElement(rE,{dimensions:y,color:f,lineWidth:o})),R.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${d+e})`}))}k0.displayName="Background";var aE=S.memo(k0);const uE=["#6366f1","#10b981","#f59e0b","#ec4899","#06b6d4","#ef4444"];function cE({id:e,data:n}){const t=te(u=>u.setSubspaceColor),r=te(u=>u.setSubspaceDescription),o=te(u=>u.setExpandedSubspace),[s,i]=S.useState(!1),[l,a]=S.useState(!1);return I.jsxs("div",{className:"relative h-full w-full rounded-2xl border-2 border-dashed",style:{width:n.width,height:n.height,borderColor:`${n.color}66`,background:`${n.color}10`,boxShadow:`inset 0 0 60px ${n.color}12`},children:[I.jsxs("div",{className:"absolute left-3 top-2 select-none text-[11px] font-semibold uppercase tracking-wider",style:{color:`${n.color}cc`},children:["◈ ",n.name]}),I.jsxs("div",{className:"absolute right-2 top-2 flex items-center gap-1 nodrag",children:[I.jsx(xa,{label:"Description",onClick:()=>{i(u=>!u),a(!1)},children:"i"}),I.jsx(xa,{label:"Colour",onClick:()=>{a(u=>!u),i(!1)},children:I.jsx("span",{className:"h-3 w-3 rounded-full",style:{background:n.color}})}),I.jsx(xa,{label:"Expand",onClick:()=>o(e),children:"⛶"})]}),s&&I.jsx("div",{className:"absolute right-2 top-10 z-10 w-60 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag",children:I.jsx("textarea",{autoFocus:!0,defaultValue:n.description,onBlur:u=>r(e,u.target.value),placeholder:"Describe this subspace…",className:"h-20 w-full resize-none rounded bg-slate-800 p-2 text-[11px] text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500"})}),l&&I.jsx("div",{className:"absolute right-2 top-10 z-10 flex gap-1.5 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag",children:uE.map(u=>I.jsx("button",{onClick:()=>{t(e,u),a(!1)},className:"h-5 w-5 rounded-full ring-2 ring-transparent hover:ring-white/60",style:{background:u}},u))})]})}function xa({children:e,label:n,onClick:t}){return I.jsx("button",{title:n,onClick:r=>{r.stopPropagation(),t()},className:"flex h-6 w-6 items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 text-[11px] text-slate-300 hover:bg-slate-800 hover:text-white",children:e})}const dE=S.memo(cE);function fE({id:e,data:n}){const t=te(s=>s.focusedFileId),r=te(s=>s.openTerminal),o=t===e;return I.jsx("div",{onDoubleClick:s=>{s.stopPropagation(),r(e)},className:["relative h-full w-full rounded-xl border bg-slate-900/80 backdrop-blur-sm transition-all",o?"border-amber-400 shadow-[0_0_0_1px_rgba(251,191,36,0.7),0_0_22px_rgba(251,191,36,0.35)]":"border-slate-700 shadow-lg shadow-black/40"].join(" "),style:{width:n.width,height:n.height},children:I.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 border-b border-slate-700/70",children:[I.jsxs("span",{className:"flex gap-1",children:[I.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-rose-400/80"}),I.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-400/80"}),I.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400/80"})]}),I.jsx("span",{className:"truncate text-[11px] font-mono text-slate-200",children:n.name}),I.jsx("span",{className:"ml-auto truncate text-[9px] text-slate-500",children:n.folderPath})]})})}const pE=S.memo(fE);function hE({id:e,data:n}){const t=te(a=>a.focusedNodeId),r=te(a=>a.functions),o=te(a=>a.setFocusedNode),s=t===e,i=t?r[t]:null,l=i&&!s&&i.fileId===n.fileId;return I.jsxs("div",{onClick:a=>{a.stopPropagation(),o(s?null:e)},className:["group relative flex items-center gap-2 rounded-full border px-3 text-[12px] font-mono select-none cursor-pointer transition-all duration-150",s?"border-indigo-400 bg-indigo-500/25 text-indigo-100 shadow-[0_0_0_1px_rgba(99,102,241,0.6),0_0_18px_rgba(99,102,241,0.45)]":l?"border-slate-700/60 bg-transparent text-slate-500":"border-slate-600 bg-slate-700/70 text-slate-100 hover:border-slate-400"].join(" "),style:{width:n.width,height:n.height},children:[I.jsx(Hn,{type:"target",position:ee.Left,className:"!bg-slate-400"}),I.jsx("span",{className:["h-2 w-2 shrink-0 rounded-full",s?"bg-indigo-300":l?"bg-slate-600":"bg-emerald-400"].join(" ")}),I.jsx("span",{className:"truncate",children:n.name}),I.jsx(Hn,{type:"source",position:ee.Right,className:"!bg-slate-400"})]})}const mE=S.memo(hE);function gE({data:e}){return I.jsxs("div",{className:"flex h-[88px] w-[150px] flex-col rounded-xl border border-cyan-500/50 bg-gradient-to-br from-cyan-900/40 to-slate-900/80 p-2.5 shadow-lg shadow-cyan-900/30",children:[I.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-cyan-300/80",children:[I.jsx("span",{children:"⚙"}),I.jsx("span",{children:"tunable"})]}),I.jsx("div",{className:"mt-1 truncate font-mono text-[12px] text-slate-100",children:e.name}),I.jsx("div",{className:"mt-auto rounded-md bg-slate-950/60 px-2 py-1 text-center font-mono text-[13px] font-semibold text-cyan-200",children:e.value})]})}const yE=S.memo(gE);function vE({data:e}){const n=e.side==="left";return I.jsxs("div",{className:"group relative nodrag",style:{width:16,height:16},children:[I.jsx("div",{className:"h-4 w-4 rounded-full ring-2 ring-slate-950 transition-transform group-hover:scale-125",style:{background:e.color,boxShadow:`0 0 10px ${e.color}`}}),n?I.jsx(Hn,{type:"source",position:ee.Right,style:{background:e.color}}):I.jsx(Hn,{type:"target",position:ee.Left,style:{background:e.color}}),I.jsx("div",{className:["pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-0.5 text-[10px] font-mono text-slate-200 opacity-0 ring-1 ring-slate-700 transition-opacity group-hover:opacity-100",n?"right-6":"left-6"].join(" "),children:e.label})]})}const xE=S.memo(vE);function wE({data:e}){return I.jsx("div",{className:"h-full w-full rounded-2xl border border-dashed border-slate-700/70 bg-slate-800/15",style:{width:e.width,height:e.height},children:I.jsxs("div",{className:"px-3 py-1.5 text-[11px] font-mono tracking-tight text-slate-500",children:[I.jsx("span",{className:"text-slate-600",children:"📁"})," ",e.name]})})}const bE=S.memo(wE);function SE({id:e,data:n}){const t=te(u=>u.selectedProjectFileId),r=te(u=>u.projectEdges),o=te(u=>u.selectProjectFile);let s="idle";t&&(t===e?s="selected":r.some(u=>u.source===t&&u.target===e)?s="downstream":r.some(u=>u.target===t&&u.source===e)?s="upstream":s="dim");const i=n.name.split(".").pop(),l=lw[i]||"#64748b",a=s==="selected"?"border-indigo-400 bg-indigo-500/20 shadow-[0_0_0_1px_rgba(99,102,241,0.7),0_0_20px_rgba(99,102,241,0.4)]":s==="downstream"?"border-emerald-400/80 bg-slate-800/90":s==="upstream"?"border-amber-400/80 bg-slate-800/90":"border-slate-700 bg-slate-800/80 hover:border-slate-500";return I.jsxs("div",{onClick:u=>{u.stopPropagation(),o(t===e?null:e)},className:["flex cursor-pointer flex-col rounded-lg border px-3 py-2 transition-all duration-200",a,s==="dim"?"opacity-20 hover:opacity-50":"opacity-100"].join(" "),style:{width:174,height:62},children:[I.jsx(Hn,{type:"target",position:ee.Left,className:"!h-2 !w-2 !bg-amber-400"}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-sm",style:{background:l}}),I.jsx("span",{className:"truncate font-mono text-[12px] text-slate-100",children:n.name})]}),I.jsx("span",{className:"mt-1 truncate pl-[18px] text-[9px] text-slate-500",children:n.folder}),I.jsx(Hn,{type:"source",position:ee.Right,className:"!h-2 !w-2 !bg-emerald-400"})]})}const kE=S.memo(SE),EE={subspace:dE,file:pE,function:mE,tunable:yE,port:xE,cluster:bE,projectFile:kE},pp="#34d399",hp="#f59e0b";function wr(e,n,t){return{id:`e-${e}-${n}`,source:e,target:n,animated:!0,className:"focus-edge",style:{stroke:t,strokeWidth:2},markerEnd:{type:hs.ArrowClosed,color:t,width:16,height:16}}}function NE(){const e=_l(),n=S.useRef(null),t=te(E=>E.viewMode),r=te(E=>E.setViewMode),o=te(E=>E.files),s=te(E=>E.functions),i=te(E=>E.subspaces),l=te(E=>E.tunables),a=te(E=>E.calls),u=te(E=>E.focusedNodeId),c=te(E=>E.projectFiles),d=te(E=>E.projectFolders),f=te(E=>E.projectEdges),m=te(E=>E.selectedProjectFileId),v=te(E=>E.selectProjectFile),g=te(E=>E.clearProjectSelection),b=te(E=>E.moveNode),p=te(E=>E.clearFocus),h=te(E=>E.setFocusedNode),y=te(E=>E.requestFocus),x=te(E=>E.setFlowApi),_=te(E=>E.saveBookmark),z=te(E=>E.createSubspace),N=te(E=>E.createFile),P=te(E=>E.createFunction),F=te(E=>E.pendingFocus),A=te(E=>E.consumePendingFocus),[O,W]=S.useState(null),[$,w]=S.useState(""),C=t==="project";S.useEffect(()=>{x({getViewport:()=>e.getViewport(),setViewport:(E,U)=>e.setViewport(E,U),fitTo:(E,U)=>e.fitView({nodes:[{id:E}],...U})})},[e,x]),S.useEffect(()=>{const E=setTimeout(()=>e.fitView({duration:500,padding:.18}),60);return()=>clearTimeout(E)},[t,e]),S.useEffect(()=>{if(!F)return;const E=F.id,U=!!i[E],ne=!!s[E]?s[E].fileId:E;e.fitView({nodes:[{id:ne}],duration:650,padding:U?.06:.4,maxZoom:U?1.6:1.5}),A()},[F,e,i,s,A]);const j=S.useMemo(()=>{const E=[],U=Ef({focusedNodeId:u,functions:s,calls:a});for(const X of Object.values(i))E.push({id:X.id,type:"subspace",position:X.position,data:{...X,width:X.size.width,height:X.size.height},style:{width:X.size.width,height:X.size.height,zIndex:0},zIndex:0});for(const X of Object.values(o)){const ne=kf(s,X.id);E.push({id:X.id,type:"file",position:X.position,data:{...X,width:ne.width,height:ne.height},style:{width:ne.width,height:ne.height},zIndex:1})}for(const X of Object.values(s))E.push({id:X.id,type:"function",position:X.position,parentNode:X.fileId,extent:"parent",data:{name:X.name,fileId:X.fileId,width:Ge.W,height:Ge.H},zIndex:2});if(U){const X=kf(s,U.fileId);U.leftPorts.forEach((ne,re)=>{const ae=Ws[ne.extFileId]||"#94a3b8";E.push({id:`port-l-${ne.extFnId}`,type:"port",parentNode:U.fileId,position:{x:-16/2,y:Fe.HEADER+8+re*tn.GAP_Y},data:{side:"left",color:ae,label:`${s[ne.extFnId].name} · ${o[ne.extFileId].name}`},draggable:!1,selectable:!1,zIndex:6})}),U.rightPorts.forEach((ne,re)=>{const ae=Ws[ne.extFileId]||"#94a3b8";E.push({id:`port-r-${ne.extFnId}`,type:"port",parentNode:U.fileId,position:{x:X.width-tn.W/2,y:Fe.HEADER+8+re*tn.GAP_Y},data:{side:"right",color:ae,label:`${s[ne.extFnId].name} · ${o[ne.extFileId].name}`},draggable:!1,selectable:!1,zIndex:6})})}for(const X of Object.values(l))E.push({id:X.id,type:"tunable",position:X.position,data:X,zIndex:1});return E},[o,s,i,l,a,u]),H=S.useMemo(()=>{const E=Ef({focusedNodeId:u,functions:s,calls:a});if(!E)return[];const U=E.focusedNodeId,X=[];return E.internalUpstream.forEach(ne=>X.push(wr(ne,U,"#818cf8"))),E.internalDownstream.forEach(ne=>X.push(wr(U,ne,"#818cf8"))),E.leftPorts.forEach(ne=>X.push(wr(`port-l-${ne.extFnId}`,U,Ws[ne.extFileId]||"#94a3b8"))),E.rightPorts.forEach(ne=>X.push(wr(U,`port-r-${ne.extFnId}`,Ws[ne.extFileId]||"#94a3b8"))),X},[u,s,a]),M=S.useMemo(()=>{const E=[];for(const U of Object.values(d))E.push({id:`${U.id}::cluster`,type:"cluster",position:U.position,data:{name:U.name,width:U.size.width,height:U.size.height},style:{width:U.size.width,height:U.size.height,zIndex:0},zIndex:0,selectable:!1,draggable:!1});for(const U of Object.values(c))E.push({id:U.id,type:"projectFile",position:U.position,data:U,zIndex:2});return E},[c,d]),k=S.useMemo(()=>{const E=hw({selectedProjectFileId:m,projectEdges:f});if(!E)return[];const U=[];return E.downstream.forEach(X=>U.push(wr(E.id,X,pp))),E.upstream.forEach(X=>U.push(wr(X,E.id,hp))),U},[m,f]),T=C?M:j,L=C?k:H,B=S.useCallback(E=>{for(const U of E)U.type==="position"&&U.position&&b(U.id,U.position)},[b]),D=S.useCallback(()=>{p(),g(),W(null)},[p,g]),V=S.useCallback(E=>{if(E.preventDefault(),C)return;const U=n.current.getBoundingClientRect(),X=e.screenToFlowPosition({x:E.clientX,y:E.clientY});W({x:E.clientX-U.left,y:E.clientY-U.top,flowPos:X})},[e,C]),G=S.useCallback(()=>{const E=n.current.getBoundingClientRect(),U=E.width-240,X=E.height-220,ne=e.screenToFlowPosition({x:E.left+U,y:E.top+X});W({x:U,y:X,flowPos:ne})},[e]),Q=()=>{const E=window.prompt("Name this bookmark",`View ${Date.now()%1e3}`);E!==null&&_(e.getViewport(),E)},K=S.useMemo(()=>{const E=$.trim().toLowerCase();if(!E)return[];const U=[];if(C)for(const X of Object.values(c))X.name.toLowerCase().includes(E)&&U.push({id:X.id,label:X.name,kind:"file"});else{for(const X of Object.values(s))X.name.toLowerCase().includes(E)&&U.push({id:X.id,label:X.name,kind:"fn"});for(const X of Object.values(o))X.name.toLowerCase().includes(E)&&U.push({id:X.id,label:X.name,kind:"file"});for(const X of Object.values(i))X.name.toLowerCase().includes(E)&&U.push({id:X.id,label:X.name,kind:"sub"})}return U.slice(0,6)},[$,C,c,s,o,i]),q=E=>{C?v(E.id):E.kind==="fn"&&h(E.id),y(E.id),w("")};return I.jsxs("div",{ref:n,className:"relative h-full w-full",onClick:()=>W(null),children:[I.jsx("div",{className:"pointer-events-none absolute left-3 top-3 z-20",children:I.jsxs("div",{className:"pointer-events-auto inline-flex rounded-full border border-slate-700 bg-slate-900/90 p-0.5 text-xs shadow-lg backdrop-blur",children:[I.jsx(mp,{active:C,onClick:()=>r("project"),children:"📁 Project Map"}),I.jsx(mp,{active:!C,onClick:()=>r("functions"),children:"◯ Functions"})]})}),I.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center",children:I.jsxs("div",{className:"pointer-events-auto flex items-center gap-2",children:[I.jsxs("div",{className:"relative",children:[I.jsx("input",{value:$,onChange:E=>w(E.target.value),onKeyDown:E=>E.key==="Enter"&&K[0]&&q(K[0]),placeholder:C?"Search files…":"Search files & functions…",className:"w-80 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 shadow-lg outline-none backdrop-blur placeholder:text-slate-500 focus:border-indigo-500"}),I.jsx("span",{className:"pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500",children:"⌕"}),K.length>0&&I.jsx("div",{className:"absolute mt-2 w-80 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl backdrop-blur",children:K.map(E=>I.jsxs("button",{onClick:()=>q(E),className:"flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-200 hover:bg-slate-800",children:[I.jsx("span",{className:"text-[10px] uppercase text-slate-500",children:E.kind}),I.jsx("span",{className:"truncate font-mono",children:E.label})]},`${E.kind}-${E.id}`))})]}),I.jsxs("button",{onClick:Q,className:"flex items-center gap-1.5 rounded-full border border-indigo-500/60 bg-indigo-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-indigo-500",children:[I.jsx("span",{children:"★"})," Save view"]})]})}),I.jsxs(x0,{nodes:T,edges:L,nodeTypes:EE,onNodesChange:B,onPaneClick:D,onPaneContextMenu:V,minZoom:.1,maxZoom:3,fitView:!0,proOptions:{hideAttribution:!0},className:"bg-canvas",children:[I.jsx(aE,{variant:gn.Dots,gap:26,size:1.5,color:"#1e2533"}),I.jsx(tE,{className:"!bg-slate-900 !border-slate-700",showInteractive:!1}),I.jsx(Yk,{pannable:!0,zoomable:!0,maskColor:"rgba(2,6,23,0.7)",className:"!bg-slate-900 !border !border-slate-700",nodeColor:E=>{var U;return E.type==="subspace"?`${((U=E.data)==null?void 0:U.color)||"#6366f1"}55`:E.type==="cluster"?"#1e293b":E.type==="projectFile"||E.type==="function"?"#475569":E.type==="tunable"?"#06b6d4":"#334155"}})]}),C&&I.jsxs("div",{className:"pointer-events-none absolute bottom-6 left-6 z-20 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-[11px] shadow-lg backdrop-blur",children:[I.jsx("div",{className:"mb-1 font-semibold text-slate-300",children:"Click a file to trace dependencies"}),I.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[I.jsx("span",{className:"inline-block h-0.5 w-5",style:{background:pp}})," affects (imports) →"]}),I.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[I.jsx("span",{className:"inline-block h-0.5 w-5",style:{background:hp}})," ← affected by (imported by)"]})]}),!C&&I.jsx("button",{onClick:G,title:"Create…",className:"absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-xl shadow-indigo-900/50 transition hover:bg-indigo-500 active:scale-95",children:"+"}),O&&I.jsx(_E,{x:O.x,y:O.y,files:Object.values(o),onClose:()=>W(null),onCreateSubspace:()=>{z(O.flowPos),W(null)},onCreateFile:()=>{const E=window.prompt("Folder path for the new file","src/feature");E!==null&&(N(O.flowPos,E),W(null))},onCreateFunction:E=>{const U=window.prompt("Function name","newFn()");U!==null&&(P(E,U),W(null))}})]})}function mp({active:e,onClick:n,children:t}){return I.jsx("button",{onClick:n,className:["rounded-full px-3 py-1.5 font-medium transition-colors",e?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-200"].join(" "),children:t})}function _E({x:e,y:n,files:t,onCreateSubspace:r,onCreateFile:o,onCreateFunction:s,onClose:i}){const[l,a]=S.useState(!1);return I.jsxs("div",{className:"absolute z-30 w-56 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 py-1 text-sm shadow-2xl backdrop-blur",style:{left:e,top:n},onClick:u=>u.stopPropagation(),onContextMenu:u=>u.preventDefault(),children:[I.jsx("div",{className:"px-3 py-1 text-[10px] uppercase tracking-wider text-slate-500",children:"Create"}),I.jsx(ei,{icon:"◈",onClick:r,children:"New Subspace"}),I.jsx(ei,{icon:"▢",onClick:o,children:"New File…"}),I.jsxs("div",{className:"relative",children:[I.jsx(ei,{icon:"◯",chevron:!0,onClick:()=>a(u=>!u),children:"New Function"}),l&&I.jsxs("div",{className:"border-t border-slate-800 bg-slate-950/60",children:[t.length===0&&I.jsx("div",{className:"px-6 py-2 text-xs text-slate-500",children:"No files yet"}),t.map(u=>I.jsxs("button",{onClick:()=>s(u.id),className:"block w-full px-6 py-1.5 text-left text-xs text-slate-300 hover:bg-slate-800",children:["in ",I.jsx("span",{className:"font-mono text-slate-100",children:u.name})]},u.id))]})]}),I.jsx("div",{className:"my-1 border-t border-slate-800"}),I.jsx(ei,{icon:"✕",onClick:i,children:"Close"})]})}function ei({icon:e,children:n,onClick:t,chevron:r}){return I.jsxs("button",{onClick:t,className:"flex w-full items-center gap-3 px-3 py-1.5 text-left text-slate-200 hover:bg-slate-800",children:[I.jsx("span",{className:"w-4 text-center text-slate-400",children:e}),I.jsx("span",{className:"flex-1",children:n}),r&&I.jsx("span",{className:"text-slate-500",children:"▾"})]})}function zE(){return I.jsx(Kc,{children:I.jsx(NE,{})})}function jE(){const e=te(i=>i.terminalFileId),n=te(i=>i.closeTerminal),t=te(i=>i.files),r=te(i=>i.functions);if(S.useEffect(()=>{const i=l=>l.key==="Escape"&&n();return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[n]),!e)return null;const o=t[e];if(!o)return null;const s=Object.values(r).filter(i=>i.fileId===e);return I.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",onClick:n,children:I.jsxs("div",{className:"flex h-[70vh] w-[760px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl",onClick:i=>i.stopPropagation(),children:[I.jsxs("div",{className:"flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2",children:[I.jsxs("span",{className:"flex gap-1.5",children:[I.jsx("span",{className:"h-3 w-3 rounded-full bg-rose-500"}),I.jsx("span",{className:"h-3 w-3 rounded-full bg-amber-500"}),I.jsx("span",{className:"h-3 w-3 rounded-full bg-emerald-500"})]}),I.jsxs("span",{className:"ml-2 font-mono text-xs text-slate-300",children:[o.folderPath,"/",o.name]}),I.jsx("button",{onClick:n,className:"ml-auto text-slate-500 hover:text-white",children:"✕"})]}),I.jsxs("div",{className:"thin-scroll flex-1 overflow-auto bg-[#0b0e14] p-4 font-mono text-[13px] leading-relaxed",children:[I.jsx("div",{className:"text-slate-500",children:"// "+o.name+" — "+s.length+" functions"}),I.jsxs("div",{className:"mt-2",children:[I.jsx("span",{className:"text-fuchsia-400",children:"import"})," ",I.jsx("span",{className:"text-slate-300",children:"{ runtime }"})," ",I.jsx("span",{className:"text-fuchsia-400",children:"from"})," ",I.jsx("span",{className:"text-emerald-400",children:"'../runtime'"})]}),s.map(i=>I.jsxs("div",{className:"mt-4",children:[I.jsx("span",{className:"text-sky-400",children:"export function"})," ",I.jsx("span",{className:"text-amber-300",children:i.name.replace("()","")}),I.jsxs("span",{className:"text-slate-300",children:["(args) ","{"]}),I.jsxs("div",{className:"pl-6 text-slate-400",children:[I.jsx("span",{className:"text-fuchsia-400",children:"return"})," runtime.exec(",I.jsxs("span",{className:"text-emerald-400",children:["'",i.name,"'"]}),")"]}),I.jsx("span",{className:"text-slate-300",children:"}"})]},i.id)),s.length===0&&I.jsx("div",{className:"mt-4 text-slate-600",children:"// empty file — add a function from the canvas"})]}),I.jsxs("div",{className:"flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-4 py-2 font-mono text-xs",children:[I.jsx("span",{className:"text-emerald-400",children:"➜"}),I.jsx("span",{className:"text-sky-400",children:o.folderPath}),I.jsx("span",{className:"text-slate-300",children:"$ "}),I.jsxs("span",{className:"text-slate-500",children:["vim ",o.name]}),I.jsx("span",{className:"ml-1 inline-block h-3.5 w-2 animate-pulse bg-slate-400"})]})]})})}function IE(){return I.jsxs("div",{className:"h-screen w-screen overflow-hidden bg-canvas text-slate-200",children:[I.jsxs(hu,{direction:"horizontal",children:[I.jsx(zo,{defaultSize:30,minSize:18,className:"border-r border-slate-800",children:I.jsxs(hu,{direction:"vertical",children:[I.jsx(zo,{defaultSize:50,minSize:15,children:I.jsx(mw,{})}),I.jsx(mu,{className:"group relative h-[3px] bg-slate-800 transition-colors hover:bg-indigo-500",children:I.jsx("div",{className:"absolute inset-x-0 -top-1 -bottom-1"})}),I.jsx(zo,{defaultSize:50,minSize:15,children:I.jsx(gw,{})})]})}),I.jsx(mu,{className:"relative w-[3px] bg-slate-800 transition-colors hover:bg-indigo-500",children:I.jsx("div",{className:"absolute inset-y-0 -left-1 -right-1"})}),I.jsx(zo,{defaultSize:70,minSize:40,children:I.jsx(zE,{})})]}),I.jsx(jE,{})]})}function CE(){return I.jsx(IE,{})}wa.createRoot(document.getElementById("root")).render(I.jsx(R.StrictMode,{children:I.jsx(CE,{})}));
