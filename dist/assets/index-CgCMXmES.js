function Ub(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function D0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H0={exports:{}},Eu={},$0={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),Wb=Symbol.for("react.portal"),Vb=Symbol.for("react.fragment"),Kb=Symbol.for("react.strict_mode"),qb=Symbol.for("react.profiler"),Gb=Symbol.for("react.provider"),Yb=Symbol.for("react.context"),Xb=Symbol.for("react.forward_ref"),Qb=Symbol.for("react.suspense"),Jb=Symbol.for("react.memo"),Zb=Symbol.for("react.lazy"),Tp=Symbol.iterator;function e2(e){return e===null||typeof e!="object"?null:(e=Tp&&e[Tp]||e["@@iterator"],typeof e=="function"?e:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,W0={};function po(e,t,n){this.props=e,this.context=t,this.refs=W0,this.updater=n||B0}po.prototype.isReactComponent={};po.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function V0(){}V0.prototype=po.prototype;function Uf(e,t,n){this.props=e,this.context=t,this.refs=W0,this.updater=n||B0}var Wf=Uf.prototype=new V0;Wf.constructor=Uf;U0(Wf,po.prototype);Wf.isPureReactComponent=!0;var jp=Array.isArray,K0=Object.prototype.hasOwnProperty,Vf={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function G0(e,t,n){var r,s={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)K0.call(t,r)&&!q0.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:ta,type:e,key:o,ref:i,props:s,_owner:Vf.current}}function t2(e,t){return{$$typeof:ta,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ta}function n2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mp=/\/+/g;function uc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?n2(""+e.key):t.toString(36)}function pl(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ta:case Wb:i=!0}}if(i)return i=e,s=s(i),e=r===""?"."+uc(i,0):r,jp(s)?(n="",e!=null&&(n=e.replace(Mp,"$&/")+"/"),pl(s,t,n,"",function(u){return u})):s!=null&&(Kf(s)&&(s=t2(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(Mp,"$&/")+"/")+e)),t.push(s)),1;if(i=0,r=r===""?".":r+":",jp(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+uc(o,a);i+=pl(o,t,n,l,s)}else if(l=e2(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+uc(o,a++),i+=pl(o,t,n,l,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ga(e,t,n){if(e==null)return e;var r=[],s=0;return pl(e,r,"","",function(o){return t.call(n,o,s++)}),r}function r2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ut={current:null},ml={transition:null},s2={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Vf};function Y0(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:ga,forEach:function(e,t,n){ga(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ga(e,function(){t++}),t},toArray:function(e){return ga(e,function(t){return t})||[]},only:function(e){if(!Kf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=po;de.Fragment=Vb;de.Profiler=qb;de.PureComponent=Uf;de.StrictMode=Kb;de.Suspense=Qb;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s2;de.act=Y0;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=U0({},e.props),s=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Vf.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)K0.call(t,l)&&!q0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ta,type:e.type,key:s,ref:o,props:r,_owner:i}};de.createContext=function(e){return e={$$typeof:Yb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gb,_context:e},e.Consumer=e};de.createElement=G0;de.createFactory=function(e){var t=G0.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:Xb,render:e}};de.isValidElement=Kf;de.lazy=function(e){return{$$typeof:Zb,_payload:{_status:-1,_result:e},_init:r2}};de.memo=function(e,t){return{$$typeof:Jb,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=ml.transition;ml.transition={};try{e()}finally{ml.transition=t}};de.unstable_act=Y0;de.useCallback=function(e,t){return ut.current.useCallback(e,t)};de.useContext=function(e){return ut.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return ut.current.useDeferredValue(e)};de.useEffect=function(e,t){return ut.current.useEffect(e,t)};de.useId=function(){return ut.current.useId()};de.useImperativeHandle=function(e,t,n){return ut.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return ut.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return ut.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return ut.current.useMemo(e,t)};de.useReducer=function(e,t,n){return ut.current.useReducer(e,t,n)};de.useRef=function(e){return ut.current.useRef(e)};de.useState=function(e){return ut.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return ut.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return ut.current.useTransition()};de.version="18.3.1";$0.exports=de;var k=$0.exports;const L=D0(k),o2=Ub({__proto__:null,default:L},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i2=k,a2=Symbol.for("react.element"),l2=Symbol.for("react.fragment"),u2=Object.prototype.hasOwnProperty,c2=i2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d2={key:!0,ref:!0,__self:!0,__source:!0};function X0(e,t,n){var r,s={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)u2.call(t,r)&&!d2.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:a2,type:e,key:o,ref:i,props:s,_owner:c2.current}}Eu.Fragment=l2;Eu.jsx=X0;Eu.jsxs=X0;H0.exports=Eu;var E=H0.exports,wd={},Q0={exports:{}},At={},J0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,T){var F=z.length;z.push(T);e:for(;0<F;){var $=F-1>>>1,U=z[$];if(0<s(U,T))z[$]=T,z[F]=U,F=$;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var T=z[0],F=z.pop();if(F!==T){z[0]=F;e:for(var $=0,U=z.length,D=U>>>1;$<D;){var W=2*($+1)-1,Y=z[W],X=W+1,G=z[X];if(0>s(Y,F))X<U&&0>s(G,Y)?(z[$]=G,z[X]=F,$=X):(z[$]=Y,z[W]=F,$=W);else if(X<U&&0>s(G,F))z[$]=G,z[X]=F,$=X;else break e}}return T}function s(z,T){var F=z.sortIndex-T.sortIndex;return F!==0?F:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,y=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=z)r(u),T.sortIndex=T.expirationTime,t(l,T);else break;T=n(u)}}function w(z){if(g=!1,v(z),!y)if(n(l)!==null)y=!0,M(S);else{var T=n(u);T!==null&&B(w,T.startTime-z)}}function S(z,T){y=!1,g&&(g=!1,p(C),C=-1),f=!0;var F=h;try{for(v(T),d=n(l);d!==null&&(!(d.expirationTime>T)||z&&!O());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var U=$(d.expirationTime<=T);T=e.unstable_now(),typeof U=="function"?d.callback=U:d===n(l)&&r(l),v(T)}else r(l);d=n(l)}if(d!==null)var D=!0;else{var W=n(u);W!==null&&B(w,W.startTime-T),D=!1}return D}finally{d=null,h=F,f=!1}}var N=!1,I=null,C=-1,R=5,P=-1;function O(){return!(e.unstable_now()-P<R)}function V(){if(I!==null){var z=e.unstable_now();P=z;var T=!0;try{T=I(!0,z)}finally{T?K():(N=!1,I=null)}}else N=!1}var K;if(typeof m=="function")K=function(){m(V)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,A=_.port2;_.port1.onmessage=V,K=function(){A.postMessage(null)}}else K=function(){x(V,0)};function M(z){I=z,N||(N=!0,K())}function B(z,T){C=x(function(){z(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||f||(y=!0,M(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var F=h;h=T;try{return z()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=h;h=z;try{return T()}finally{h=F}},e.unstable_scheduleCallback=function(z,T,F){var $=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=F+U,z={id:c++,callback:T,priorityLevel:z,startTime:F,expirationTime:U,sortIndex:-1},F>$?(z.sortIndex=F,t(u,z),n(l)===null&&z===n(u)&&(g?(p(C),C=-1):g=!0,B(w,F-$))):(z.sortIndex=U,t(l,z),y||f||(y=!0,M(S))),z},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(z){var T=h;return function(){var F=h;h=T;try{return z.apply(this,arguments)}finally{h=F}}}})(Z0);J0.exports=Z0;var f2=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h2=k,Mt=f2;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ey=new Set,Ei={};function is(e,t){to(e,t),to(e+"Capture",t)}function to(e,t){for(Ei[e]=t,e=0;e<t.length;e++)ey.add(t[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,p2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cp={},Pp={};function m2(e){return xd.call(Pp,e)?!0:xd.call(Cp,e)?!1:p2.test(e)?Pp[e]=!0:(Cp[e]=!0,!1)}function g2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y2(e,t,n,r){if(t===null||typeof t>"u"||g2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ct(e,t,n,r,s,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function Gf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qf,Gf);Ze[t]=new ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qf,Gf);Ze[t]=new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qf,Gf);Ze[t]=new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new ct(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yf(e,t,n,r){var s=Ze.hasOwnProperty(t)?Ze[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(y2(t,n,s,r)&&(n=null),r||s===null?m2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wn=h2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),ty=Symbol.for("react.provider"),ny=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),ry=Symbol.for("react.offscreen"),Ap=Symbol.iterator;function bo(e){return e===null||typeof e!="object"?null:(e=Ap&&e[Ap]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,cc;function Jo(e){if(cc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cc=t&&t[1]||""}return`
`+cc+e}var dc=!1;function fc(e,t){if(!e||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=r.stack.split(`
`),i=s.length-1,a=o.length-1;1<=i&&0<=a&&s[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(s[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||s[i]!==o[a]){var l=`
`+s[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jo(e):""}function v2(e){switch(e.tag){case 5:return Jo(e.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return e=fc(e.type,!1),e;case 11:return e=fc(e.type.render,!1),e;case 1:return e=fc(e.type,!0),e;default:return""}}function kd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ts:return"Fragment";case Is:return"Portal";case bd:return"Profiler";case Xf:return"StrictMode";case _d:return"Suspense";case Sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ny:return(e.displayName||"Context")+".Consumer";case ty:return(e._context.displayName||"Context")+".Provider";case Qf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jf:return t=e.displayName||null,t!==null?t:kd(e.type)||"Memo";case Zn:t=e._payload,e=e._init;try{return kd(e(t))}catch{}}return null}function w2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kd(t);case 8:return t===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function x2(e){var t=sy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function va(e){e._valueTracker||(e._valueTracker=x2(e))}function oy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ed(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function iy(e,t){t=t.checked,t!=null&&Yf(e,"checked",t,!1)}function Nd(e,t){iy(e,t);var n=xr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Id(e,t.type,n):t.hasOwnProperty("defaultValue")&&Id(e,t.type,xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Id(e,t,n){(t!=="number"||Ol(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zo=Array.isArray;function Us(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xr(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Td(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(J(92));if(Zo(n)){if(1<n.length)throw Error(J(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xr(n)}}function ay(e,t){var n=xr(t.value),r=xr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Op(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ly(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ly(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,uy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b2=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){b2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function cy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function dy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=cy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var _2=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Md(e,t){if(t){if(_2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function Cd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=null;function Zf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ad=null,Ws=null,Vs=null;function Lp(e){if(e=sa(e)){if(typeof Ad!="function")throw Error(J(280));var t=e.stateNode;t&&(t=Mu(t),Ad(e.stateNode,e.type,t))}}function fy(e){Ws?Vs?Vs.push(e):Vs=[e]:Ws=e}function hy(){if(Ws){var e=Ws,t=Vs;if(Vs=Ws=null,Lp(e),t)for(e=0;e<t.length;e++)Lp(t[e])}}function py(e,t){return e(t)}function my(){}var hc=!1;function gy(e,t,n){if(hc)return e(t,n);hc=!0;try{return py(e,t,n)}finally{hc=!1,(Ws!==null||Vs!==null)&&(my(),hy())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=Mu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var Rd=!1;if(Ln)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Rd=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Rd=!1}function S2(e,t,n,r,s,o,i,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var hi=!1,Ll=null,Dl=!1,zd=null,k2={onError:function(e){hi=!0,Ll=e}};function E2(e,t,n,r,s,o,i,a,l){hi=!1,Ll=null,S2.apply(k2,arguments)}function N2(e,t,n,r,s,o,i,a,l){if(E2.apply(this,arguments),hi){if(hi){var u=Ll;hi=!1,Ll=null}else throw Error(J(198));Dl||(Dl=!0,zd=u)}}function as(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dp(e){if(as(e)!==e)throw Error(J(188))}function I2(e){var t=e.alternate;if(!t){if(t=as(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Dp(s),e;if(o===r)return Dp(s),t;o=o.sibling}throw Error(J(188))}if(n.return!==r.return)n=s,r=o;else{for(var i=!1,a=s.child;a;){if(a===n){i=!0,n=s,r=o;break}if(a===r){i=!0,r=s,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=s;break}if(a===r){i=!0,r=o,n=s;break}a=a.sibling}if(!i)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function vy(e){return e=I2(e),e!==null?wy(e):null}function wy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wy(e);if(t!==null)return t;e=e.sibling}return null}var xy=Mt.unstable_scheduleCallback,Hp=Mt.unstable_cancelCallback,T2=Mt.unstable_shouldYield,j2=Mt.unstable_requestPaint,Pe=Mt.unstable_now,M2=Mt.unstable_getCurrentPriorityLevel,eh=Mt.unstable_ImmediatePriority,by=Mt.unstable_UserBlockingPriority,Hl=Mt.unstable_NormalPriority,C2=Mt.unstable_LowPriority,_y=Mt.unstable_IdlePriority,Nu=null,wn=null;function P2(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Nu,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:z2,A2=Math.log,R2=Math.LN2;function z2(e){return e>>>=0,e===0?32:31-(A2(e)/R2|0)|0}var xa=64,ba=4194304;function ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $l(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~s;a!==0?r=ei(a):(o&=i,o!==0&&(r=ei(o)))}else i=n&~s,i!==0?r=ei(i):o!==0&&(r=ei(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-sn(t),s=1<<n,r|=e[n],t&=~s;return r}function F2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-sn(o),a=1<<i,l=s[i];l===-1?(!(a&n)||a&r)&&(s[i]=F2(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Fd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sy(){var e=xa;return xa<<=1,!(xa&4194240)&&(xa=64),e}function pc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function na(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=n}function L2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-sn(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function th(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var ge=0;function ky(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ey,nh,Ny,Iy,Ty,Od=!1,_a=[],dr=null,fr=null,hr=null,Ti=new Map,ji=new Map,rr=[],D2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(e,t){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function So(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=sa(t),t!==null&&nh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function H2(e,t,n,r,s){switch(t){case"focusin":return dr=So(dr,e,t,n,r,s),!0;case"dragenter":return fr=So(fr,e,t,n,r,s),!0;case"mouseover":return hr=So(hr,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return Ti.set(o,So(Ti.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,ji.set(o,So(ji.get(o)||null,e,t,n,r,s)),!0}return!1}function jy(e){var t=Hr(e.target);if(t!==null){var n=as(t);if(n!==null){if(t=n.tag,t===13){if(t=yy(n),t!==null){e.blockedOn=t,Ty(e.priority,function(){Ny(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ld(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pd=r,n.target.dispatchEvent(r),Pd=null}else return t=sa(n),t!==null&&nh(t),e.blockedOn=n,!1;t.shift()}return!0}function Bp(e,t,n){gl(e)&&n.delete(t)}function $2(){Od=!1,dr!==null&&gl(dr)&&(dr=null),fr!==null&&gl(fr)&&(fr=null),hr!==null&&gl(hr)&&(hr=null),Ti.forEach(Bp),ji.forEach(Bp)}function ko(e,t){e.blockedOn===t&&(e.blockedOn=null,Od||(Od=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,$2)))}function Mi(e){function t(s){return ko(s,e)}if(0<_a.length){ko(_a[0],e);for(var n=1;n<_a.length;n++){var r=_a[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dr!==null&&ko(dr,e),fr!==null&&ko(fr,e),hr!==null&&ko(hr,e),Ti.forEach(t),ji.forEach(t),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)jy(n),n.blockedOn===null&&rr.shift()}var Ks=Wn.ReactCurrentBatchConfig,Bl=!0;function B2(e,t,n,r){var s=ge,o=Ks.transition;Ks.transition=null;try{ge=1,rh(e,t,n,r)}finally{ge=s,Ks.transition=o}}function U2(e,t,n,r){var s=ge,o=Ks.transition;Ks.transition=null;try{ge=4,rh(e,t,n,r)}finally{ge=s,Ks.transition=o}}function rh(e,t,n,r){if(Bl){var s=Ld(e,t,n,r);if(s===null)kc(e,t,r,Ul,n),$p(e,r);else if(H2(s,e,t,n,r))r.stopPropagation();else if($p(e,r),t&4&&-1<D2.indexOf(e)){for(;s!==null;){var o=sa(s);if(o!==null&&Ey(o),o=Ld(e,t,n,r),o===null&&kc(e,t,r,Ul,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else kc(e,t,r,null,n)}}var Ul=null;function Ld(e,t,n,r){if(Ul=null,e=Zf(r),e=Hr(e),e!==null)if(t=as(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ul=e,null}function My(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M2()){case eh:return 1;case by:return 4;case Hl:case C2:return 16;case _y:return 536870912;default:return 16}default:return 16}}var ur=null,sh=null,yl=null;function Cy(){if(yl)return yl;var e,t=sh,n=t.length,r,s="value"in ur?ur.value:ur.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===s[o-r];r++);return yl=s.slice(e,1<r?1-r:void 0)}function vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function Up(){return!1}function Rt(e){function t(n,r,s,o,i){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sa:Up,this.isPropagationStopped=Up,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oh=Rt(mo),ra=Te({},mo,{view:0,detail:0}),W2=Rt(ra),mc,gc,Eo,Iu=Te({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ih,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Eo&&(Eo&&e.type==="mousemove"?(mc=e.screenX-Eo.screenX,gc=e.screenY-Eo.screenY):gc=mc=0,Eo=e),mc)},movementY:function(e){return"movementY"in e?e.movementY:gc}}),Wp=Rt(Iu),V2=Te({},Iu,{dataTransfer:0}),K2=Rt(V2),q2=Te({},ra,{relatedTarget:0}),yc=Rt(q2),G2=Te({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),Y2=Rt(G2),X2=Te({},mo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Q2=Rt(X2),J2=Te({},mo,{data:0}),Vp=Rt(J2),Z2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t_[e])?!!t[e]:!1}function ih(){return n_}var r_=Te({},ra,{key:function(e){if(e.key){var t=Z2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ih,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s_=Rt(r_),o_=Te({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Rt(o_),i_=Te({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ih}),a_=Rt(i_),l_=Te({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=Rt(l_),c_=Te({},Iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d_=Rt(c_),f_=[9,13,27,32],ah=Ln&&"CompositionEvent"in window,pi=null;Ln&&"documentMode"in document&&(pi=document.documentMode);var h_=Ln&&"TextEvent"in window&&!pi,Py=Ln&&(!ah||pi&&8<pi&&11>=pi),qp=" ",Gp=!1;function Ay(e,t){switch(e){case"keyup":return f_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ry(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function p_(e,t){switch(e){case"compositionend":return Ry(t);case"keypress":return t.which!==32?null:(Gp=!0,qp);case"textInput":return e=t.data,e===qp&&Gp?null:e;default:return null}}function m_(e,t){if(js)return e==="compositionend"||!ah&&Ay(e,t)?(e=Cy(),yl=sh=ur=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Py&&t.locale!=="ko"?null:t.data;default:return null}}var g_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g_[e.type]:t==="textarea"}function zy(e,t,n,r){fy(r),t=Wl(t,"onChange"),0<t.length&&(n=new oh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Ci=null;function y_(e){Ky(e,0)}function Tu(e){var t=Ps(e);if(oy(t))return e}function v_(e,t){if(e==="change")return t}var Fy=!1;if(Ln){var vc;if(Ln){var wc="oninput"in document;if(!wc){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),wc=typeof Xp.oninput=="function"}vc=wc}else vc=!1;Fy=vc&&(!document.documentMode||9<document.documentMode)}function Qp(){mi&&(mi.detachEvent("onpropertychange",Oy),Ci=mi=null)}function Oy(e){if(e.propertyName==="value"&&Tu(Ci)){var t=[];zy(t,Ci,e,Zf(e)),gy(y_,t)}}function w_(e,t,n){e==="focusin"?(Qp(),mi=t,Ci=n,mi.attachEvent("onpropertychange",Oy)):e==="focusout"&&Qp()}function x_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tu(Ci)}function b_(e,t){if(e==="click")return Tu(t)}function __(e,t){if(e==="input"||e==="change")return Tu(t)}function S_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:S_;function Pi(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!xd.call(t,s)||!ln(e[s],t[s]))return!1}return!0}function Jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zp(e,t){var n=Jp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jp(n)}}function Ly(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ly(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dy(){for(var e=window,t=Ol();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ol(e.document)}return t}function lh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function k_(e){var t=Dy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ly(n.ownerDocument.documentElement,n)){if(r!==null&&lh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=Zp(n,o);var i=Zp(n,r);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E_=Ln&&"documentMode"in document&&11>=document.documentMode,Ms=null,Dd=null,gi=null,Hd=!1;function em(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||Ms==null||Ms!==Ol(r)||(r=Ms,"selectionStart"in r&&lh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&Pi(gi,r)||(gi=r,r=Wl(Dd,"onSelect"),0<r.length&&(t=new oh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ms)))}function ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cs={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},xc={},Hy={};Ln&&(Hy=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function ju(e){if(xc[e])return xc[e];if(!Cs[e])return e;var t=Cs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hy)return xc[e]=t[n];return e}var $y=ju("animationend"),By=ju("animationiteration"),Uy=ju("animationstart"),Wy=ju("transitionend"),Vy=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){Vy.set(e,t),is(t,[e])}for(var bc=0;bc<tm.length;bc++){var _c=tm[bc],N_=_c.toLowerCase(),I_=_c[0].toUpperCase()+_c.slice(1);_r(N_,"on"+I_)}_r($y,"onAnimationEnd");_r(By,"onAnimationIteration");_r(Uy,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Wy,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));function nm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N2(r,t,void 0,e),e.currentTarget=null}function Ky(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&s.isPropagationStopped())break e;nm(s,a,u),o=l}else for(i=0;i<r.length;i++){if(a=r[i],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&s.isPropagationStopped())break e;nm(s,a,u),o=l}}}if(Dl)throw e=zd,Dl=!1,zd=null,e}function be(e,t){var n=t[Vd];n===void 0&&(n=t[Vd]=new Set);var r=e+"__bubble";n.has(r)||(qy(t,e,2,!1),n.add(r))}function Sc(e,t,n){var r=0;t&&(r|=4),qy(n,e,r,t)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Ai(e){if(!e[Ea]){e[Ea]=!0,ey.forEach(function(n){n!=="selectionchange"&&(T_.has(n)||Sc(n,!1,e),Sc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ea]||(t[Ea]=!0,Sc("selectionchange",!1,t))}}function qy(e,t,n,r){switch(My(t)){case 1:var s=B2;break;case 4:s=U2;break;default:s=rh}n=s.bind(null,t,n,e),s=void 0,!Rd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function kc(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;i=i.return}for(;a!==null;){if(i=Hr(a),i===null)return;if(l=i.tag,l===5||l===6){r=o=i;continue e}a=a.parentNode}}r=r.return}gy(function(){var u=o,c=Zf(n),d=[];e:{var h=Vy.get(e);if(h!==void 0){var f=oh,y=e;switch(e){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":f=s_;break;case"focusin":y="focus",f=yc;break;case"focusout":y="blur",f=yc;break;case"beforeblur":case"afterblur":f=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=K2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=a_;break;case $y:case By:case Uy:f=Y2;break;case Wy:f=u_;break;case"scroll":f=W2;break;case"wheel":f=d_;break;case"copy":case"cut":case"paste":f=Q2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Kp}var g=(t&4)!==0,x=!g&&e==="scroll",p=g?h!==null?h+"Capture":null:h;g=[];for(var m=u,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,p!==null&&(w=Ii(m,p),w!=null&&g.push(Ri(m,w,v)))),x)break;m=m.return}0<g.length&&(h=new f(h,y,null,n,c),d.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==Pd&&(y=n.relatedTarget||n.fromElement)&&(Hr(y)||y[Dn]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?Hr(y):null,y!==null&&(x=as(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(g=Wp,w="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(g=Kp,w="onPointerLeave",p="onPointerEnter",m="pointer"),x=f==null?h:Ps(f),v=y==null?h:Ps(y),h=new g(w,m+"leave",f,n,c),h.target=x,h.relatedTarget=v,w=null,Hr(c)===u&&(g=new g(p,m+"enter",y,n,c),g.target=v,g.relatedTarget=x,w=g),x=w,f&&y)t:{for(g=f,p=y,m=0,v=g;v;v=ds(v))m++;for(v=0,w=p;w;w=ds(w))v++;for(;0<m-v;)g=ds(g),m--;for(;0<v-m;)p=ds(p),v--;for(;m--;){if(g===p||p!==null&&g===p.alternate)break t;g=ds(g),p=ds(p)}g=null}else g=null;f!==null&&rm(d,h,f,g,!1),y!==null&&x!==null&&rm(d,x,y,g,!0)}}e:{if(h=u?Ps(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var S=v_;else if(Yp(h))if(Fy)S=__;else{S=x_;var N=w_}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=b_);if(S&&(S=S(e,u))){zy(d,S,n,c);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Id(h,"number",h.value)}switch(N=u?Ps(u):window,e){case"focusin":(Yp(N)||N.contentEditable==="true")&&(Ms=N,Dd=u,gi=null);break;case"focusout":gi=Dd=Ms=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,em(d,n,c);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":em(d,n,c)}var I;if(ah)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else js?Ay(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Py&&n.locale!=="ko"&&(js||C!=="onCompositionStart"?C==="onCompositionEnd"&&js&&(I=Cy()):(ur=c,sh="value"in ur?ur.value:ur.textContent,js=!0)),N=Wl(u,C),0<N.length&&(C=new Vp(C,e,null,n,c),d.push({event:C,listeners:N}),I?C.data=I:(I=Ry(n),I!==null&&(C.data=I)))),(I=h_?p_(e,n):m_(e,n))&&(u=Wl(u,"onBeforeInput"),0<u.length&&(c=new Vp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}Ky(d,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wl(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Ii(e,n),o!=null&&r.unshift(Ri(e,o,s)),o=Ii(e,t),o!=null&&r.push(Ri(e,o,s))),e=e.return}return r}function ds(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rm(e,t,n,r,s){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=Ii(n,o),l!=null&&i.unshift(Ri(n,l,a))):s||(l=Ii(n,o),l!=null&&i.push(Ri(n,l,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var j_=/\r\n?/g,M_=/\u0000|\uFFFD/g;function sm(e){return(typeof e=="string"?e:""+e).replace(j_,`
`).replace(M_,"")}function Na(e,t,n){if(t=sm(t),sm(e)!==t&&n)throw Error(J(425))}function Vl(){}var $d=null,Bd=null;function Ud(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,C_=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,P_=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(e){return om.resolve(null).then(e).catch(A_)}:Wd;function A_(e){setTimeout(function(){throw e})}function Ec(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Mi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Mi(t)}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function im(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),vn="__reactFiber$"+go,zi="__reactProps$"+go,Dn="__reactContainer$"+go,Vd="__reactEvents$"+go,R_="__reactListeners$"+go,z_="__reactHandles$"+go;function Hr(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dn]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=im(e);e!==null;){if(n=e[vn])return n;e=im(e)}return t}e=n,n=e.parentNode}return null}function sa(e){return e=e[vn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ps(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function Mu(e){return e[zi]||null}var Kd=[],As=-1;function Sr(e){return{current:e}}function ke(e){0>As||(e.current=Kd[As],Kd[As]=null,As--)}function we(e,t){As++,Kd[As]=e.current,e.current=t}var br={},it=Sr(br),wt=Sr(!1),Jr=br;function no(e,t){var n=e.type.contextTypes;if(!n)return br;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function xt(e){return e=e.childContextTypes,e!=null}function Kl(){ke(wt),ke(it)}function am(e,t,n){if(it.current!==br)throw Error(J(168));we(it,t),we(wt,n)}function Gy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(J(108,w2(e)||"Unknown",s));return Te({},n,r)}function ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||br,Jr=it.current,we(it,e),we(wt,wt.current),!0}function lm(e,t,n){var r=e.stateNode;if(!r)throw Error(J(169));n?(e=Gy(e,t,Jr),r.__reactInternalMemoizedMergedChildContext=e,ke(wt),ke(it),we(it,e)):ke(wt),we(wt,n)}var Mn=null,Cu=!1,Nc=!1;function Yy(e){Mn===null?Mn=[e]:Mn.push(e)}function F_(e){Cu=!0,Yy(e)}function kr(){if(!Nc&&Mn!==null){Nc=!0;var e=0,t=ge;try{var n=Mn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mn=null,Cu=!1}catch(s){throw Mn!==null&&(Mn=Mn.slice(e+1)),xy(eh,kr),s}finally{ge=t,Nc=!1}}return null}var Rs=[],zs=0,Gl=null,Yl=0,Ot=[],Lt=0,Zr=null,An=1,Rn="";function zr(e,t){Rs[zs++]=Yl,Rs[zs++]=Gl,Gl=e,Yl=t}function Xy(e,t,n){Ot[Lt++]=An,Ot[Lt++]=Rn,Ot[Lt++]=Zr,Zr=e;var r=An;e=Rn;var s=32-sn(r)-1;r&=~(1<<s),n+=1;var o=32-sn(t)+s;if(30<o){var i=s-s%5;o=(r&(1<<i)-1).toString(32),r>>=i,s-=i,An=1<<32-sn(t)+s|n<<s|r,Rn=o+e}else An=1<<o|n<<s|r,Rn=e}function uh(e){e.return!==null&&(zr(e,1),Xy(e,1,0))}function ch(e){for(;e===Gl;)Gl=Rs[--zs],Rs[zs]=null,Yl=Rs[--zs],Rs[zs]=null;for(;e===Zr;)Zr=Ot[--Lt],Ot[Lt]=null,Rn=Ot[--Lt],Ot[Lt]=null,An=Ot[--Lt],Ot[Lt]=null}var jt=null,Tt=null,Ee=!1,en=null;function Qy(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function um(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Tt=pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zr!==null?{id:An,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Tt=null,!0):!1;default:return!1}}function qd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gd(e){if(Ee){var t=Tt;if(t){var n=t;if(!um(e,t)){if(qd(e))throw Error(J(418));t=pr(n.nextSibling);var r=jt;t&&um(e,t)?Qy(r,n):(e.flags=e.flags&-4097|2,Ee=!1,jt=e)}}else{if(qd(e))throw Error(J(418));e.flags=e.flags&-4097|2,Ee=!1,jt=e}}}function cm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function Ia(e){if(e!==jt)return!1;if(!Ee)return cm(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ud(e.type,e.memoizedProps)),t&&(t=Tt)){if(qd(e))throw Jy(),Error(J(418));for(;t;)Qy(e,t),t=pr(t.nextSibling)}if(cm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Tt=pr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=jt?pr(e.stateNode.nextSibling):null;return!0}function Jy(){for(var e=Tt;e;)e=pr(e.nextSibling)}function ro(){Tt=jt=null,Ee=!1}function dh(e){en===null?en=[e]:en.push(e)}var O_=Wn.ReactCurrentBatchConfig;function No(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=s.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,e))}return e}function Ta(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dm(e){var t=e._init;return t(e._payload)}function Zy(e){function t(p,m){if(e){var v=p.deletions;v===null?(p.deletions=[m],p.flags|=16):v.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function s(p,m){return p=vr(p,m),p.index=0,p.sibling=null,p}function o(p,m,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<m?(p.flags|=2,m):v):(p.flags|=2,m)):(p.flags|=1048576,m)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,v,w){return m===null||m.tag!==6?(m=Ac(v,p.mode,w),m.return=p,m):(m=s(m,v),m.return=p,m)}function l(p,m,v,w){var S=v.type;return S===Ts?c(p,m,v.props.children,w,v.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zn&&dm(S)===m.type)?(w=s(m,v.props),w.ref=No(p,m,v),w.return=p,w):(w=El(v.type,v.key,v.props,null,p.mode,w),w.ref=No(p,m,v),w.return=p,w)}function u(p,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Rc(v,p.mode,w),m.return=p,m):(m=s(m,v.children||[]),m.return=p,m)}function c(p,m,v,w,S){return m===null||m.tag!==7?(m=Kr(v,p.mode,w,S),m.return=p,m):(m=s(m,v),m.return=p,m)}function d(p,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ac(""+m,p.mode,v),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ya:return v=El(m.type,m.key,m.props,null,p.mode,v),v.ref=No(p,null,m),v.return=p,v;case Is:return m=Rc(m,p.mode,v),m.return=p,m;case Zn:var w=m._init;return d(p,w(m._payload),v)}if(Zo(m)||bo(m))return m=Kr(m,p.mode,v,null),m.return=p,m;Ta(p,m)}return null}function h(p,m,v,w){var S=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(p,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ya:return v.key===S?l(p,m,v,w):null;case Is:return v.key===S?u(p,m,v,w):null;case Zn:return S=v._init,h(p,m,S(v._payload),w)}if(Zo(v)||bo(v))return S!==null?null:c(p,m,v,w,null);Ta(p,v)}return null}function f(p,m,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(v)||null,a(m,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ya:return p=p.get(w.key===null?v:w.key)||null,l(m,p,w,S);case Is:return p=p.get(w.key===null?v:w.key)||null,u(m,p,w,S);case Zn:var N=w._init;return f(p,m,v,N(w._payload),S)}if(Zo(w)||bo(w))return p=p.get(v)||null,c(m,p,w,S,null);Ta(m,w)}return null}function y(p,m,v,w){for(var S=null,N=null,I=m,C=m=0,R=null;I!==null&&C<v.length;C++){I.index>C?(R=I,I=null):R=I.sibling;var P=h(p,I,v[C],w);if(P===null){I===null&&(I=R);break}e&&I&&P.alternate===null&&t(p,I),m=o(P,m,C),N===null?S=P:N.sibling=P,N=P,I=R}if(C===v.length)return n(p,I),Ee&&zr(p,C),S;if(I===null){for(;C<v.length;C++)I=d(p,v[C],w),I!==null&&(m=o(I,m,C),N===null?S=I:N.sibling=I,N=I);return Ee&&zr(p,C),S}for(I=r(p,I);C<v.length;C++)R=f(I,p,C,v[C],w),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?C:R.key),m=o(R,m,C),N===null?S=R:N.sibling=R,N=R);return e&&I.forEach(function(O){return t(p,O)}),Ee&&zr(p,C),S}function g(p,m,v,w){var S=bo(v);if(typeof S!="function")throw Error(J(150));if(v=S.call(v),v==null)throw Error(J(151));for(var N=S=null,I=m,C=m=0,R=null,P=v.next();I!==null&&!P.done;C++,P=v.next()){I.index>C?(R=I,I=null):R=I.sibling;var O=h(p,I,P.value,w);if(O===null){I===null&&(I=R);break}e&&I&&O.alternate===null&&t(p,I),m=o(O,m,C),N===null?S=O:N.sibling=O,N=O,I=R}if(P.done)return n(p,I),Ee&&zr(p,C),S;if(I===null){for(;!P.done;C++,P=v.next())P=d(p,P.value,w),P!==null&&(m=o(P,m,C),N===null?S=P:N.sibling=P,N=P);return Ee&&zr(p,C),S}for(I=r(p,I);!P.done;C++,P=v.next())P=f(I,p,C,P.value,w),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?C:P.key),m=o(P,m,C),N===null?S=P:N.sibling=P,N=P);return e&&I.forEach(function(V){return t(p,V)}),Ee&&zr(p,C),S}function x(p,m,v,w){if(typeof v=="object"&&v!==null&&v.type===Ts&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ya:e:{for(var S=v.key,N=m;N!==null;){if(N.key===S){if(S=v.type,S===Ts){if(N.tag===7){n(p,N.sibling),m=s(N,v.props.children),m.return=p,p=m;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zn&&dm(S)===N.type){n(p,N.sibling),m=s(N,v.props),m.ref=No(p,N,v),m.return=p,p=m;break e}n(p,N);break}else t(p,N);N=N.sibling}v.type===Ts?(m=Kr(v.props.children,p.mode,w,v.key),m.return=p,p=m):(w=El(v.type,v.key,v.props,null,p.mode,w),w.ref=No(p,m,v),w.return=p,p=w)}return i(p);case Is:e:{for(N=v.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(p,m.sibling),m=s(m,v.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Rc(v,p.mode,w),m.return=p,p=m}return i(p);case Zn:return N=v._init,x(p,m,N(v._payload),w)}if(Zo(v))return y(p,m,v,w);if(bo(v))return g(p,m,v,w);Ta(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(p,m.sibling),m=s(m,v),m.return=p,p=m):(n(p,m),m=Ac(v,p.mode,w),m.return=p,p=m),i(p)):n(p,m)}return x}var so=Zy(!0),ev=Zy(!1),Xl=Sr(null),Ql=null,Fs=null,fh=null;function hh(){fh=Fs=Ql=null}function ph(e){var t=Xl.current;ke(Xl),e._currentValue=t}function Yd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qs(e,t){Ql=e,fh=Fs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(fh!==e)if(e={context:e,memoizedValue:t,next:null},Fs===null){if(Ql===null)throw Error(J(308));Fs=e,Ql.dependencies={lanes:0,firstContext:e}}else Fs=Fs.next=e;return t}var $r=null;function mh(e){$r===null?$r=[e]:$r.push(e)}function tv(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,mh(t)):(n.next=s.next,s.next=n),t.interleaved=n,Hn(e,r)}function Hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var er=!1;function gh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Hn(e,n)}return s=r.interleaved,s===null?(t.next=t,mh(r)):(t.next=s.next,s.next=t),r.interleaved=t,Hn(e,n)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,th(e,n)}}function fm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jl(e,t,n,r){var s=e.updateQueue;er=!1;var o=s.firstBaseUpdate,i=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==i&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=s.baseState;i=0,c=u=l=null,a=o;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(h=t,f=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){d=y.call(f,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,h=typeof y=="function"?y.call(f,d,h):y,h==null)break e;d=Te({},d,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,i|=h;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;h=a,a=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(c===null&&(l=d),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=c,t=s.shared.interleaved,t!==null){s=t;do i|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);ts|=i,e.lanes=i,e.memoizedState=d}}function hm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(J(191,s));s.call(r)}}}var oa={},xn=Sr(oa),Fi=Sr(oa),Oi=Sr(oa);function Br(e){if(e===oa)throw Error(J(174));return e}function yh(e,t){switch(we(Oi,t),we(Fi,e),we(xn,oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jd(t,e)}ke(xn),we(xn,t)}function oo(){ke(xn),ke(Fi),ke(Oi)}function rv(e){Br(Oi.current);var t=Br(xn.current),n=jd(t,e.type);t!==n&&(we(Fi,e),we(xn,n))}function vh(e){Fi.current===e&&(ke(xn),ke(Fi))}var Ne=Sr(0);function Zl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ic=[];function wh(){for(var e=0;e<Ic.length;e++)Ic[e]._workInProgressVersionPrimary=null;Ic.length=0}var xl=Wn.ReactCurrentDispatcher,Tc=Wn.ReactCurrentBatchConfig,es=0,Ie=null,De=null,Ve=null,eu=!1,yi=!1,Li=0,L_=0;function nt(){throw Error(J(321))}function xh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function bh(e,t,n,r,s,o){if(es=o,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xl.current=e===null||e.memoizedState===null?B_:U_,e=n(r,s),yi){o=0;do{if(yi=!1,Li=0,25<=o)throw Error(J(301));o+=1,Ve=De=null,t.updateQueue=null,xl.current=W_,e=n(r,s)}while(yi)}if(xl.current=tu,t=De!==null&&De.next!==null,es=0,Ve=De=Ie=null,eu=!1,t)throw Error(J(300));return e}function _h(){var e=Li!==0;return Li=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ie.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Kt(){if(De===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ve===null?Ie.memoizedState:Ve.next;if(t!==null)Ve=t,De=e;else{if(e===null)throw Error(J(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ve===null?Ie.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Di(e,t){return typeof t=="function"?t(e):t}function jc(e){var t=Kt(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=De,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var i=s.next;s.next=o.next,o.next=i}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var a=i=null,l=null,u=o;do{var c=u.lane;if((es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,i=r):l=l.next=d,Ie.lanes|=c,ts|=c}u=u.next}while(u!==null&&u!==o);l===null?i=r:l.next=a,ln(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,Ie.lanes|=o,ts|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mc(e){var t=Kt(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var i=s=s.next;do o=e(o,i.action),i=i.next;while(i!==s);ln(o,t.memoizedState)||(yt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function sv(){}function ov(e,t){var n=Ie,r=Kt(),s=t(),o=!ln(r.memoizedState,s);if(o&&(r.memoizedState=s,yt=!0),r=r.queue,Sh(lv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Hi(9,av.bind(null,n,r,s,t),void 0,null),Ke===null)throw Error(J(349));es&30||iv(n,t,s)}return s}function iv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function av(e,t,n,r){t.value=n,t.getSnapshot=r,uv(t)&&cv(e)}function lv(e,t,n){return n(function(){uv(t)&&cv(e)})}function uv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function cv(e){var t=Hn(e,1);t!==null&&on(t,e,1,-1)}function pm(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=$_.bind(null,Ie,e),[t.memoizedState,e]}function Hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dv(){return Kt().memoizedState}function bl(e,t,n,r){var s=gn();Ie.flags|=e,s.memoizedState=Hi(1|t,n,void 0,r===void 0?null:r)}function Pu(e,t,n,r){var s=Kt();r=r===void 0?null:r;var o=void 0;if(De!==null){var i=De.memoizedState;if(o=i.destroy,r!==null&&xh(r,i.deps)){s.memoizedState=Hi(t,n,o,r);return}}Ie.flags|=e,s.memoizedState=Hi(1|t,n,o,r)}function mm(e,t){return bl(8390656,8,e,t)}function Sh(e,t){return Pu(2048,8,e,t)}function fv(e,t){return Pu(4,2,e,t)}function hv(e,t){return Pu(4,4,e,t)}function pv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mv(e,t,n){return n=n!=null?n.concat([e]):null,Pu(4,4,pv.bind(null,t,e),n)}function kh(){}function gv(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yv(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vv(e,t,n){return es&21?(ln(n,t)||(n=Sy(),Ie.lanes|=n,ts|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function D_(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=Tc.transition;Tc.transition={};try{e(!1),t()}finally{ge=n,Tc.transition=r}}function wv(){return Kt().memoizedState}function H_(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xv(e))bv(t,n);else if(n=tv(e,t,n,r),n!==null){var s=lt();on(n,e,r,s),_v(n,t,r)}}function $_(e,t,n){var r=yr(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xv(e))bv(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(s.hasEagerState=!0,s.eagerState=a,ln(a,i)){var l=t.interleaved;l===null?(s.next=s,mh(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}n=tv(e,t,s,r),n!==null&&(s=lt(),on(n,e,r,s),_v(n,t,r))}}function xv(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function bv(e,t){yi=eu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _v(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,th(e,n)}}var tu={readContext:Vt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},B_={readContext:Vt,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:mm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bl(4194308,4,pv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bl(4194308,4,e,t)},useInsertionEffect:function(e,t){return bl(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=H_.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:pm,useDebugValue:kh,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=pm(!1),t=e[0];return e=D_.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,s=gn();if(Ee){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),Ke===null)throw Error(J(349));es&30||iv(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,mm(lv.bind(null,r,o,e),[e]),r.flags|=2048,Hi(9,av.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gn(),t=Ke.identifierPrefix;if(Ee){var n=Rn,r=An;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},U_={readContext:Vt,useCallback:gv,useContext:Vt,useEffect:Sh,useImperativeHandle:mv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:yv,useReducer:jc,useRef:dv,useState:function(){return jc(Di)},useDebugValue:kh,useDeferredValue:function(e){var t=Kt();return vv(t,De.memoizedState,e)},useTransition:function(){var e=jc(Di)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:sv,useSyncExternalStore:ov,useId:wv,unstable_isNewReconciler:!1},W_={readContext:Vt,useCallback:gv,useContext:Vt,useEffect:Sh,useImperativeHandle:mv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:yv,useReducer:Mc,useRef:dv,useState:function(){return Mc(Di)},useDebugValue:kh,useDeferredValue:function(e){var t=Kt();return De===null?t.memoizedState=e:vv(t,De.memoizedState,e)},useTransition:function(){var e=Mc(Di)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:sv,useSyncExternalStore:ov,useId:wv,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Au={isMounted:function(e){return(e=e._reactInternals)?as(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),s=yr(e),o=Fn(r,s);o.payload=t,n!=null&&(o.callback=n),t=mr(e,o,s),t!==null&&(on(t,e,s,r),wl(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),s=yr(e),o=Fn(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mr(e,o,s),t!==null&&(on(t,e,s,r),wl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=yr(e),s=Fn(n,r);s.tag=2,t!=null&&(s.callback=t),t=mr(e,s,r),t!==null&&(on(t,e,r,n),wl(t,e,r))}};function gm(e,t,n,r,s,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(s,o):!0}function Sv(e,t,n){var r=!1,s=br,o=t.contextType;return typeof o=="object"&&o!==null?o=Vt(o):(s=xt(t)?Jr:it.current,r=t.contextTypes,o=(r=r!=null)?no(e,s):br),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Au,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function ym(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Au.enqueueReplaceState(t,t.state,null)}function Qd(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},gh(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Vt(o):(o=xt(t)?Jr:it.current,s.context=no(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xd(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Au.enqueueReplaceState(s,s.state,null),Jl(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function io(e,t){try{var n="",r=t;do n+=v2(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Cc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var V_=typeof WeakMap=="function"?WeakMap:Map;function kv(e,t,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ru||(ru=!0,uf=r),Jd(e,t)},n}function Ev(e,t,n){n=Fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Jd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jd(e,t),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function vm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new V_;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=oS.bind(null,e,t,n),t.then(e,e))}function wm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xm(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fn(-1,1),t.tag=2,mr(n,t,1))),n.lanes|=1),e)}var K_=Wn.ReactCurrentOwner,yt=!1;function at(e,t,n,r){t.child=e===null?ev(t,null,n,r):so(t,e.child,n,r)}function bm(e,t,n,r,s){n=n.render;var o=t.ref;return qs(t,s),r=bh(e,t,n,r,o,s),n=_h(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,$n(e,t,s)):(Ee&&n&&uh(t),t.flags|=1,at(e,t,r,s),t.child)}function _m(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!Ph(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Nv(e,t,o,r,s)):(e=El(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(i,r)&&e.ref===t.ref)return $n(e,t,s)}return t.flags|=1,e=vr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Nv(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(Pi(o,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,$n(e,t,s)}return Zd(e,t,n,r,s)}function Iv(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ls,Et),Et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(Ls,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,we(Ls,Et),Et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,we(Ls,Et),Et|=r;return at(e,t,s,n),t.child}function Tv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zd(e,t,n,r,s){var o=xt(n)?Jr:it.current;return o=no(t,o),qs(t,s),n=bh(e,t,n,r,o,s),r=_h(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,$n(e,t,s)):(Ee&&r&&uh(t),t.flags|=1,at(e,t,n,s),t.child)}function Sm(e,t,n,r,s){if(xt(n)){var o=!0;ql(t)}else o=!1;if(qs(t,s),t.stateNode===null)_l(e,t),Sv(t,n,r),Qd(t,n,r,s),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=xt(n)?Jr:it.current,u=no(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ym(t,i,r,u),er=!1;var h=t.memoizedState;i.state=h,Jl(t,r,i,s),l=t.memoizedState,a!==r||h!==l||wt.current||er?(typeof c=="function"&&(Xd(t,n,c,r),l=t.memoizedState),(a=er||gm(t,n,a,r,h,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,nv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qt(t.type,a),i.props=u,d=t.pendingProps,h=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=xt(n)?Jr:it.current,l=no(t,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==d||h!==l)&&ym(t,i,r,l),er=!1,h=t.memoizedState,i.state=h,Jl(t,r,i,s);var y=t.memoizedState;a!==d||h!==y||wt.current||er?(typeof f=="function"&&(Xd(t,n,f,r),y=t.memoizedState),(u=er||gm(t,n,u,r,h,y,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ef(e,t,n,r,o,s)}function ef(e,t,n,r,s,o){Tv(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return s&&lm(t,n,!1),$n(e,t,o);r=t.stateNode,K_.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=so(t,e.child,null,o),t.child=so(t,null,a,o)):at(e,t,a,o),t.memoizedState=r.state,s&&lm(t,n,!0),t.child}function jv(e){var t=e.stateNode;t.pendingContext?am(e,t.pendingContext,t.pendingContext!==t.context):t.context&&am(e,t.context,!1),yh(e,t.containerInfo)}function km(e,t,n,r,s){return ro(),dh(s),t.flags|=256,at(e,t,n,r),t.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mv(e,t,n){var r=t.pendingProps,s=Ne.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),we(Ne,s&1),e===null)return Gd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Fu(i,r,0,null),e=Kr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=nf(n),t.memoizedState=tf,e):Eh(t,i));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return q_(e,t,i,r,a,s,n);if(o){o=r.fallback,i=t.mode,s=e.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(i&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vr(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?o=vr(a,o):(o=Kr(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?nf(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=tf,r}return o=e.child,e=o.sibling,r=vr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eh(e,t){return t=Fu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ja(e,t,n,r){return r!==null&&dh(r),so(t,e.child,null,n),e=Eh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q_(e,t,n,r,s,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Cc(Error(J(422))),ja(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=Fu({mode:"visible",children:r.children},s,0,null),o=Kr(o,s,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&so(t,e.child,null,i),t.child.memoizedState=nf(i),t.memoizedState=tf,o);if(!(t.mode&1))return ja(e,t,i,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(J(419)),r=Cc(o,r,void 0),ja(e,t,i,r)}if(a=(i&e.childLanes)!==0,yt||a){if(r=Ke,r!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|i)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Hn(e,s),on(r,e,s,-1))}return Ch(),r=Cc(Error(J(421))),ja(e,t,i,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=iS.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,Tt=pr(s.nextSibling),jt=t,Ee=!0,en=null,e!==null&&(Ot[Lt++]=An,Ot[Lt++]=Rn,Ot[Lt++]=Zr,An=e.id,Rn=e.overflow,Zr=t),t=Eh(t,r.children),t.flags|=4096,t)}function Em(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yd(e.return,t,n)}function Pc(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function Cv(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Em(e,n,t);else if(e.tag===19)Em(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Zl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Pc(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Zl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Pc(t,!0,n,null,o);break;case"together":Pc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _l(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ts|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=vr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G_(e,t,n){switch(t.tag){case 3:jv(t),ro();break;case 5:rv(t);break;case 1:xt(t.type)&&ql(t);break;case 4:yh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;we(Xl,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?Mv(e,t,n):(we(Ne,Ne.current&1),e=$n(e,t,n),e!==null?e.sibling:null);we(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cv(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Iv(e,t,n)}return $n(e,t,n)}var Pv,rf,Av,Rv;Pv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rf=function(){};Av=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Br(xn.current);var o=null;switch(n){case"input":s=Ed(e,s),r=Ed(e,r),o=[];break;case"select":s=Te({},s,{value:void 0}),r=Te({},r,{value:void 0}),o=[];break;case"textarea":s=Td(e,s),r=Td(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vl)}Md(n,r);var i;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ei.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&a[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&be("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Rv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Io(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Y_(e,t,n){var r=t.pendingProps;switch(ch(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return xt(t.type)&&Kl(),rt(t),null;case 3:return r=t.stateNode,oo(),ke(wt),ke(it),wh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,en!==null&&(ff(en),en=null))),rf(e,t),rt(t),null;case 5:vh(t);var s=Br(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Av(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(J(166));return rt(t),null}if(e=Br(xn.current),Ia(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vn]=t,r[zi]=o,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(s=0;s<ti.length;s++)be(ti[s],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Rp(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":Fp(r,o),be("invalid",r)}Md(n,o),s=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Na(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Na(r.textContent,a,e),s=["children",""+a]):Ei.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&be("scroll",r)}switch(n){case"input":va(r),zp(r,o,!0);break;case"textarea":va(r),Op(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vl)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ly(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[vn]=t,e[zi]=r,Pv(e,t,!1,!1),t.stateNode=e;e:{switch(i=Cd(n,r),n){case"dialog":be("cancel",e),be("close",e),s=r;break;case"iframe":case"object":case"embed":be("load",e),s=r;break;case"video":case"audio":for(s=0;s<ti.length;s++)be(ti[s],e);s=r;break;case"source":be("error",e),s=r;break;case"img":case"image":case"link":be("error",e),be("load",e),s=r;break;case"details":be("toggle",e),s=r;break;case"input":Rp(e,r),s=Ed(e,r),be("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Te({},r,{value:void 0}),be("invalid",e);break;case"textarea":Fp(e,r),s=Td(e,r),be("invalid",e);break;default:s=r}Md(n,s),a=s;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?dy(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uy(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ni(e,l):typeof l=="number"&&Ni(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?l!=null&&o==="onScroll"&&be("scroll",e):l!=null&&Yf(e,o,l,i))}switch(n){case"input":va(e),zp(e,r,!1);break;case"textarea":va(e),Op(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Us(e,!!r.multiple,o,!1):r.defaultValue!=null&&Us(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Rv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(J(166));if(n=Br(Oi.current),Br(xn.current),Ia(t)){if(r=t.stateNode,n=t.memoizedProps,r[vn]=t,(o=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:Na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=t,t.stateNode=r}return rt(t),null;case 13:if(ke(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&Tt!==null&&t.mode&1&&!(t.flags&128))Jy(),ro(),t.flags|=98560,o=!1;else if(o=Ia(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(J(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(J(317));o[vn]=t}else ro(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),o=!1}else en!==null&&(ff(en),en=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?He===0&&(He=3):Ch())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return oo(),rf(e,t),e===null&&Ai(t.stateNode.containerInfo),rt(t),null;case 10:return ph(t.type._context),rt(t),null;case 17:return xt(t.type)&&Kl(),rt(t),null;case 19:if(ke(Ne),o=t.memoizedState,o===null)return rt(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Io(o,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Zl(e),i!==null){for(t.flags|=128,Io(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Ne,Ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>ao&&(t.flags|=128,r=!0,Io(o,!1),t.lanes=4194304)}else{if(!r)if(e=Zl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Ee)return rt(t),null}else 2*Pe()-o.renderingStartTime>ao&&n!==1073741824&&(t.flags|=128,r=!0,Io(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=Ne.current,we(Ne,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return Mh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Et&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function X_(e,t){switch(ch(t),t.tag){case 1:return xt(t.type)&&Kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oo(),ke(wt),ke(it),wh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vh(t),null;case 13:if(ke(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));ro()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Ne),null;case 4:return oo(),null;case 10:return ph(t.type._context),null;case 22:case 23:return Mh(),null;case 24:return null;default:return null}}var Ma=!1,ot=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,se=null;function Os(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function sf(e,t,n){try{n()}catch(r){je(e,t,r)}}var Nm=!1;function J_(e,t){if($d=Bl,e=Dy(),lh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||s!==0&&d.nodeType!==3||(a=i+s),d!==o||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===s&&(a=i),h===o&&++c===r&&(l=i),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},Bl=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,x=y.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?g:Qt(t.type,g),x);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(w){je(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return y=Nm,Nm=!1,y}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&sf(t,n,o)}s=s.next}while(s!==r)}}function Ru(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function of(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zv(e){var t=e.alternate;t!==null&&(e.alternate=null,zv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vn],delete t[zi],delete t[Vd],delete t[R_],delete t[z_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fv(e){return e.tag===5||e.tag===3||e.tag===4}function Im(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vl));else if(r!==4&&(e=e.child,e!==null))for(af(e,t,n),e=e.sibling;e!==null;)af(e,t,n),e=e.sibling}function lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lf(e,t,n),e=e.sibling;e!==null;)lf(e,t,n),e=e.sibling}var Ye=null,Jt=!1;function Kn(e,t,n){for(n=n.child;n!==null;)Ov(e,t,n),n=n.sibling}function Ov(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Nu,n)}catch{}switch(n.tag){case 5:ot||Os(n,t);case 6:var r=Ye,s=Jt;Ye=null,Kn(e,t,n),Ye=r,Jt=s,Ye!==null&&(Jt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Jt?(e=Ye,n=n.stateNode,e.nodeType===8?Ec(e.parentNode,n):e.nodeType===1&&Ec(e,n),Mi(e)):Ec(Ye,n.stateNode));break;case 4:r=Ye,s=Jt,Ye=n.stateNode.containerInfo,Jt=!0,Kn(e,t,n),Ye=r,Jt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&sf(n,t,i),s=s.next}while(s!==r)}Kn(e,t,n);break;case 1:if(!ot&&(Os(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}Kn(e,t,n);break;case 21:Kn(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Kn(e,t,n),ot=r):Kn(e,t,n);break;default:Kn(e,t,n)}}function Tm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Q_),t.forEach(function(r){var s=aS.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Jt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Jt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(Ye===null)throw Error(J(160));Ov(o,i,s),Ye=null,Jt=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){je(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lv(t,e),t=t.sibling}function Lv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),fn(e),r&4){try{vi(3,e,e.return),Ru(3,e)}catch(g){je(e,e.return,g)}try{vi(5,e,e.return)}catch(g){je(e,e.return,g)}}break;case 1:Xt(t,e),fn(e),r&512&&n!==null&&Os(n,n.return);break;case 5:if(Xt(t,e),fn(e),r&512&&n!==null&&Os(n,n.return),e.flags&32){var s=e.stateNode;try{Ni(s,"")}catch(g){je(e,e.return,g)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&iy(s,o),Cd(a,i);var u=Cd(a,o);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?dy(s,d):c==="dangerouslySetInnerHTML"?uy(s,d):c==="children"?Ni(s,d):Yf(s,c,d,u)}switch(a){case"input":Nd(s,o);break;case"textarea":ay(s,o);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Us(s,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?Us(s,!!o.multiple,o.defaultValue,!0):Us(s,!!o.multiple,o.multiple?[]:"",!1))}s[zi]=o}catch(g){je(e,e.return,g)}}break;case 6:if(Xt(t,e),fn(e),r&4){if(e.stateNode===null)throw Error(J(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(g){je(e,e.return,g)}}break;case 3:if(Xt(t,e),fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(g){je(e,e.return,g)}break;case 4:Xt(t,e),fn(e);break;case 13:Xt(t,e),fn(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Th=Pe())),r&4&&Tm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(u=ot)||c,Xt(t,e),ot=u):Xt(t,e),fn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(se=e,c=e.child;c!==null;){for(d=se=c;se!==null;){switch(h=se,f=h.child,h.tag){case 0:case 11:case 14:case 15:vi(4,h,h.return);break;case 1:Os(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){je(r,n,g)}}break;case 5:Os(h,h.return);break;case 22:if(h.memoizedState!==null){Mm(d);continue}}f!==null?(f.return=h,se=f):Mm(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{s=d.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cy("display",i))}catch(g){je(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){je(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xt(t,e),fn(e),r&4&&Tm(e);break;case 21:break;default:Xt(t,e),fn(e)}}function fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fv(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ni(s,""),r.flags&=-33);var o=Im(e);lf(e,o,s);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Im(e);af(e,a,i);break;default:throw Error(J(161))}}catch(l){je(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Z_(e,t,n){se=e,Dv(e)}function Dv(e,t,n){for(var r=(e.mode&1)!==0;se!==null;){var s=se,o=s.child;if(s.tag===22&&r){var i=s.memoizedState!==null||Ma;if(!i){var a=s.alternate,l=a!==null&&a.memoizedState!==null||ot;a=Ma;var u=ot;if(Ma=i,(ot=l)&&!u)for(se=s;se!==null;)i=se,l=i.child,i.tag===22&&i.memoizedState!==null?Cm(s):l!==null?(l.return=i,se=l):Cm(s);for(;o!==null;)se=o,Dv(o),o=o.sibling;se=s,Ma=a,ot=u}jm(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,se=o):jm(e)}}function jm(e){for(;se!==null;){var t=se;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||Ru(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hm(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hm(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Mi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}ot||t.flags&512&&of(t)}catch(h){je(t,t.return,h)}}if(t===e){se=null;break}if(n=t.sibling,n!==null){n.return=t.return,se=n;break}se=t.return}}function Mm(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var n=t.sibling;if(n!==null){n.return=t.return,se=n;break}se=t.return}}function Cm(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ru(4,t)}catch(l){je(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(l){je(t,s,l)}}var o=t.return;try{of(t)}catch(l){je(t,o,l)}break;case 5:var i=t.return;try{of(t)}catch(l){je(t,i,l)}}}catch(l){je(t,t.return,l)}if(t===e){se=null;break}var a=t.sibling;if(a!==null){a.return=t.return,se=a;break}se=t.return}}var eS=Math.ceil,nu=Wn.ReactCurrentDispatcher,Nh=Wn.ReactCurrentOwner,Ut=Wn.ReactCurrentBatchConfig,he=0,Ke=null,Re=null,Je=0,Et=0,Ls=Sr(0),He=0,$i=null,ts=0,zu=0,Ih=0,wi=null,gt=null,Th=0,ao=1/0,Tn=null,ru=!1,uf=null,gr=null,Ca=!1,cr=null,su=0,xi=0,cf=null,Sl=-1,kl=0;function lt(){return he&6?Pe():Sl!==-1?Sl:Sl=Pe()}function yr(e){return e.mode&1?he&2&&Je!==0?Je&-Je:O_.transition!==null?(kl===0&&(kl=Sy()),kl):(e=ge,e!==0||(e=window.event,e=e===void 0?16:My(e.type)),e):1}function on(e,t,n,r){if(50<xi)throw xi=0,cf=null,Error(J(185));na(e,n,r),(!(he&2)||e!==Ke)&&(e===Ke&&(!(he&2)&&(zu|=n),He===4&&sr(e,Je)),bt(e,r),n===1&&he===0&&!(t.mode&1)&&(ao=Pe()+500,Cu&&kr()))}function bt(e,t){var n=e.callbackNode;O2(e,t);var r=$l(e,e===Ke?Je:0);if(r===0)n!==null&&Hp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hp(n),t===1)e.tag===0?F_(Pm.bind(null,e)):Yy(Pm.bind(null,e)),P_(function(){!(he&6)&&kr()}),n=null;else{switch(ky(r)){case 1:n=eh;break;case 4:n=by;break;case 16:n=Hl;break;case 536870912:n=_y;break;default:n=Hl}n=qv(n,Hv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hv(e,t){if(Sl=-1,kl=0,he&6)throw Error(J(327));var n=e.callbackNode;if(Gs()&&e.callbackNode!==n)return null;var r=$l(e,e===Ke?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ou(e,r);else{t=r;var s=he;he|=2;var o=Bv();(Ke!==e||Je!==t)&&(Tn=null,ao=Pe()+500,Vr(e,t));do try{rS();break}catch(a){$v(e,a)}while(!0);hh(),nu.current=o,he=s,Re!==null?t=0:(Ke=null,Je=0,t=He)}if(t!==0){if(t===2&&(s=Fd(e),s!==0&&(r=s,t=df(e,s))),t===1)throw n=$i,Vr(e,0),sr(e,r),bt(e,Pe()),n;if(t===6)sr(e,r);else{if(s=e.current.alternate,!(r&30)&&!tS(s)&&(t=ou(e,r),t===2&&(o=Fd(e),o!==0&&(r=o,t=df(e,o))),t===1))throw n=$i,Vr(e,0),sr(e,r),bt(e,Pe()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(J(345));case 2:Fr(e,gt,Tn);break;case 3:if(sr(e,r),(r&130023424)===r&&(t=Th+500-Pe(),10<t)){if($l(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Wd(Fr.bind(null,e,gt,Tn),t);break}Fr(e,gt,Tn);break;case 4:if(sr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var i=31-sn(r);o=1<<i,i=t[i],i>s&&(s=i),r&=~o}if(r=s,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eS(r/1960))-r,10<r){e.timeoutHandle=Wd(Fr.bind(null,e,gt,Tn),r);break}Fr(e,gt,Tn);break;case 5:Fr(e,gt,Tn);break;default:throw Error(J(329))}}}return bt(e,Pe()),e.callbackNode===n?Hv.bind(null,e):null}function df(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=ou(e,t),e!==2&&(t=gt,gt=n,t!==null&&ff(t)),e}function ff(e){gt===null?gt=e:gt.push.apply(gt,e)}function tS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!ln(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Ih,t&=~zu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function Pm(e){if(he&6)throw Error(J(327));Gs();var t=$l(e,0);if(!(t&1))return bt(e,Pe()),null;var n=ou(e,t);if(e.tag!==0&&n===2){var r=Fd(e);r!==0&&(t=r,n=df(e,r))}if(n===1)throw n=$i,Vr(e,0),sr(e,t),bt(e,Pe()),n;if(n===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,gt,Tn),bt(e,Pe()),null}function jh(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(ao=Pe()+500,Cu&&kr())}}function ns(e){cr!==null&&cr.tag===0&&!(he&6)&&Gs();var t=he;he|=1;var n=Ut.transition,r=ge;try{if(Ut.transition=null,ge=1,e)return e()}finally{ge=r,Ut.transition=n,he=t,!(he&6)&&kr()}}function Mh(){Et=Ls.current,ke(Ls)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,C_(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(ch(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kl();break;case 3:oo(),ke(wt),ke(it),wh();break;case 5:vh(r);break;case 4:oo();break;case 13:ke(Ne);break;case 19:ke(Ne);break;case 10:ph(r.type._context);break;case 22:case 23:Mh()}n=n.return}if(Ke=e,Re=e=vr(e.current,null),Je=Et=t,He=0,$i=null,Ih=zu=ts=0,gt=wi=null,$r!==null){for(t=0;t<$r.length;t++)if(n=$r[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=s,r.next=i}n.pending=r}$r=null}return e}function $v(e,t){do{var n=Re;try{if(hh(),xl.current=tu,eu){for(var r=Ie.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}eu=!1}if(es=0,Ve=De=Ie=null,yi=!1,Li=0,Nh.current=null,n===null||n.return===null){He=1,$i=t,Re=null;break}e:{var o=e,i=n.return,a=n,l=t;if(t=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=wm(i);if(f!==null){f.flags&=-257,xm(f,i,a,o,t),f.mode&1&&vm(o,u,t),t=f,l=u;var y=t.updateQueue;if(y===null){var g=new Set;g.add(l),t.updateQueue=g}else y.add(l);break e}else{if(!(t&1)){vm(o,u,t),Ch();break e}l=Error(J(426))}}else if(Ee&&a.mode&1){var x=wm(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),xm(x,i,a,o,t),dh(io(l,a));break e}}o=l=io(l,a),He!==4&&(He=2),wi===null?wi=[o]:wi.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=kv(o,l,t);fm(o,p);break e;case 1:a=l;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gr===null||!gr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Ev(o,a,t);fm(o,w);break e}}o=o.return}while(o!==null)}Wv(n)}catch(S){t=S,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Bv(){var e=nu.current;return nu.current=tu,e===null?tu:e}function Ch(){(He===0||He===3||He===2)&&(He=4),Ke===null||!(ts&268435455)&&!(zu&268435455)||sr(Ke,Je)}function ou(e,t){var n=he;he|=2;var r=Bv();(Ke!==e||Je!==t)&&(Tn=null,Vr(e,t));do try{nS();break}catch(s){$v(e,s)}while(!0);if(hh(),he=n,nu.current=r,Re!==null)throw Error(J(261));return Ke=null,Je=0,He}function nS(){for(;Re!==null;)Uv(Re)}function rS(){for(;Re!==null&&!T2();)Uv(Re)}function Uv(e){var t=Kv(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?Wv(e):Re=t,Nh.current=null}function Wv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=X_(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Re=null;return}}else if(n=Y_(n,t,Et),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);He===0&&(He=5)}function Fr(e,t,n){var r=ge,s=Ut.transition;try{Ut.transition=null,ge=1,sS(e,t,n,r)}finally{Ut.transition=s,ge=r}return null}function sS(e,t,n,r){do Gs();while(cr!==null);if(he&6)throw Error(J(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(L2(e,o),e===Ke&&(Re=Ke=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,qv(Hl,function(){return Gs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ut.transition,Ut.transition=null;var i=ge;ge=1;var a=he;he|=4,Nh.current=null,J_(e,n),Lv(n,e),k_(Bd),Bl=!!$d,Bd=$d=null,e.current=n,Z_(n),j2(),he=a,ge=i,Ut.transition=o}else e.current=n;if(Ca&&(Ca=!1,cr=e,su=s),o=e.pendingLanes,o===0&&(gr=null),P2(n.stateNode),bt(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ru)throw ru=!1,e=uf,uf=null,e;return su&1&&e.tag!==0&&Gs(),o=e.pendingLanes,o&1?e===cf?xi++:(xi=0,cf=e):xi=0,kr(),null}function Gs(){if(cr!==null){var e=ky(su),t=Ut.transition,n=ge;try{if(Ut.transition=null,ge=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,su=0,he&6)throw Error(J(331));var s=he;for(he|=4,se=e.current;se!==null;){var o=se,i=o.child;if(se.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(se=u;se!==null;){var c=se;switch(c.tag){case 0:case 11:case 15:vi(8,c,o)}var d=c.child;if(d!==null)d.return=c,se=d;else for(;se!==null;){c=se;var h=c.sibling,f=c.return;if(zv(c),c===u){se=null;break}if(h!==null){h.return=f,se=h;break}se=f}}}var y=o.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}se=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,se=i;else e:for(;se!==null;){if(o=se,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,se=p;break e}se=o.return}}var m=e.current;for(se=m;se!==null;){i=se;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,se=v;else e:for(i=m;se!==null;){if(a=se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ru(9,a)}}catch(S){je(a,a.return,S)}if(a===i){se=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,se=w;break e}se=a.return}}if(he=s,kr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Nu,e)}catch{}r=!0}return r}finally{ge=n,Ut.transition=t}}return!1}function Am(e,t,n){t=io(n,t),t=kv(e,t,1),e=mr(e,t,1),t=lt(),e!==null&&(na(e,1,t),bt(e,t))}function je(e,t,n){if(e.tag===3)Am(e,e,n);else for(;t!==null;){if(t.tag===3){Am(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){e=io(n,e),e=Ev(t,e,1),t=mr(t,e,1),e=lt(),t!==null&&(na(t,1,e),bt(t,e));break}}t=t.return}}function oS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(Je&n)===n&&(He===4||He===3&&(Je&130023424)===Je&&500>Pe()-Th?Vr(e,0):Ih|=n),bt(e,t)}function Vv(e,t){t===0&&(e.mode&1?(t=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):t=1);var n=lt();e=Hn(e,t),e!==null&&(na(e,t,n),bt(e,n))}function iS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vv(e,n)}function aS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(t),Vv(e,n)}var Kv;Kv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,G_(e,t,n);yt=!!(e.flags&131072)}else yt=!1,Ee&&t.flags&1048576&&Xy(t,Yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_l(e,t),e=t.pendingProps;var s=no(t,it.current);qs(t,n),s=bh(null,t,r,e,s,n);var o=_h();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(o=!0,ql(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gh(t),s.updater=Au,t.stateNode=s,s._reactInternals=t,Qd(t,r,e,n),t=ef(null,t,r,!0,o,n)):(t.tag=0,Ee&&o&&uh(t),at(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_l(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=uS(r),e=Qt(r,e),s){case 0:t=Zd(null,t,r,e,n);break e;case 1:t=Sm(null,t,r,e,n);break e;case 11:t=bm(null,t,r,e,n);break e;case 14:t=_m(null,t,r,Qt(r.type,e),n);break e}throw Error(J(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Qt(r,s),Zd(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Qt(r,s),Sm(e,t,r,s,n);case 3:e:{if(jv(t),e===null)throw Error(J(387));r=t.pendingProps,o=t.memoizedState,s=o.element,nv(e,t),Jl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=io(Error(J(423)),t),t=km(e,t,r,n,s);break e}else if(r!==s){s=io(Error(J(424)),t),t=km(e,t,r,n,s);break e}else for(Tt=pr(t.stateNode.containerInfo.firstChild),jt=t,Ee=!0,en=null,n=ev(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),r===s){t=$n(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return rv(t),e===null&&Gd(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,i=s.children,Ud(r,s)?i=null:o!==null&&Ud(r,o)&&(t.flags|=32),Tv(e,t),at(e,t,i,n),t.child;case 6:return e===null&&Gd(t),null;case 13:return Mv(e,t,n);case 4:return yh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=so(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Qt(r,s),bm(e,t,r,s,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,i=s.value,we(Xl,r._currentValue),r._currentValue=i,o!==null)if(ln(o.value,i)){if(o.children===s.children&&!wt.current){t=$n(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Fn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yd(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(J(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Yd(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}at(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,qs(t,n),s=Vt(s),r=r(s),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,s=Qt(r,t.pendingProps),s=Qt(r.type,s),_m(e,t,r,s,n);case 15:return Nv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Qt(r,s),_l(e,t),t.tag=1,xt(r)?(e=!0,ql(t)):e=!1,qs(t,n),Sv(t,r,s),Qd(t,r,s,n),ef(null,t,r,!0,e,n);case 19:return Cv(e,t,n);case 22:return Iv(e,t,n)}throw Error(J(156,t.tag))};function qv(e,t){return xy(e,t)}function lS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new lS(e,t,n,r)}function Ph(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uS(e){if(typeof e=="function")return Ph(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qf)return 11;if(e===Jf)return 14}return 2}function vr(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function El(e,t,n,r,s,o){var i=2;if(r=e,typeof e=="function")Ph(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ts:return Kr(n.children,s,o,t);case Xf:i=8,s|=8;break;case bd:return e=Ht(12,n,t,s|2),e.elementType=bd,e.lanes=o,e;case _d:return e=Ht(13,n,t,s),e.elementType=_d,e.lanes=o,e;case Sd:return e=Ht(19,n,t,s),e.elementType=Sd,e.lanes=o,e;case ry:return Fu(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ty:i=10;break e;case ny:i=9;break e;case Qf:i=11;break e;case Jf:i=14;break e;case Zn:i=16,r=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=Ht(i,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function Kr(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function Fu(e,t,n,r){return e=Ht(22,e,r,t),e.elementType=ry,e.lanes=n,e.stateNode={isHidden:!1},e}function Ac(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function Rc(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cS(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ah(e,t,n,r,s,o,i,a,l){return e=new cS(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ht(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gh(o),e}function dS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gv(e){if(!e)return br;e=e._reactInternals;e:{if(as(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var n=e.type;if(xt(n))return Gy(e,n,t)}return t}function Yv(e,t,n,r,s,o,i,a,l){return e=Ah(n,r,!0,e,s,o,i,a,l),e.context=Gv(null),n=e.current,r=lt(),s=yr(n),o=Fn(r,s),o.callback=t??null,mr(n,o,s),e.current.lanes=s,na(e,s,r),bt(e,r),e}function Ou(e,t,n,r){var s=t.current,o=lt(),i=yr(s);return n=Gv(n),t.context===null?t.context=n:t.pendingContext=n,t=Fn(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mr(s,t,i),e!==null&&(on(e,s,i,o),wl(e,s,i)),i}function iu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rh(e,t){Rm(e,t),(e=e.alternate)&&Rm(e,t)}function fS(){return null}var Xv=typeof reportError=="function"?reportError:function(e){console.error(e)};function zh(e){this._internalRoot=e}Lu.prototype.render=zh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));Ou(e,t,null,null)};Lu.prototype.unmount=zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ns(function(){Ou(null,e,null,null)}),t[Dn]=null}};function Lu(e){this._internalRoot=e}Lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rr.length&&t!==0&&t<rr[n].priority;n++);rr.splice(n,0,e),n===0&&jy(e)}};function Fh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zm(){}function hS(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var u=iu(i);o.call(u)}}var i=Yv(t,r,e,0,null,!1,!1,"",zm);return e._reactRootContainer=i,e[Dn]=i.current,Ai(e.nodeType===8?e.parentNode:e),ns(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=iu(l);a.call(u)}}var l=Ah(e,0,!1,null,null,!1,!1,"",zm);return e._reactRootContainer=l,e[Dn]=l.current,Ai(e.nodeType===8?e.parentNode:e),ns(function(){Ou(t,l,n,r)}),l}function Hu(e,t,n,r,s){var o=n._reactRootContainer;if(o){var i=o;if(typeof s=="function"){var a=s;s=function(){var l=iu(i);a.call(l)}}Ou(t,i,e,s)}else i=hS(n,t,e,s,r);return iu(i)}Ey=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ei(t.pendingLanes);n!==0&&(th(t,n|1),bt(t,Pe()),!(he&6)&&(ao=Pe()+500,kr()))}break;case 13:ns(function(){var r=Hn(e,1);if(r!==null){var s=lt();on(r,e,1,s)}}),Rh(e,1)}};nh=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var n=lt();on(t,e,134217728,n)}Rh(e,134217728)}};Ny=function(e){if(e.tag===13){var t=yr(e),n=Hn(e,t);if(n!==null){var r=lt();on(n,e,t,r)}Rh(e,t)}};Iy=function(){return ge};Ty=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};Ad=function(e,t,n){switch(t){case"input":if(Nd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Mu(r);if(!s)throw Error(J(90));oy(r),Nd(r,s)}}}break;case"textarea":ay(e,n);break;case"select":t=n.value,t!=null&&Us(e,!!n.multiple,t,!1)}};py=jh;my=ns;var pS={usingClientEntryPoint:!1,Events:[sa,Ps,Mu,fy,hy,jh]},To={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mS={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vy(e),e===null?null:e.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||fS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Nu=Pa.inject(mS),wn=Pa}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(t))throw Error(J(200));return dS(e,t,null,n)};At.createRoot=function(e,t){if(!Fh(e))throw Error(J(299));var n=!1,r="",s=Xv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ah(e,1,!1,null,null,n,!1,r,s),e[Dn]=t.current,Ai(e.nodeType===8?e.parentNode:e),new zh(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=vy(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return ns(e)};At.hydrate=function(e,t,n){if(!Du(t))throw Error(J(200));return Hu(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!Fh(e))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",i=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Yv(t,null,e,1,n??null,s,!1,o,i),e[Dn]=t.current,Ai(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Lu(t)};At.render=function(e,t,n){if(!Du(t))throw Error(J(200));return Hu(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!Du(e))throw Error(J(40));return e._reactRootContainer?(ns(function(){Hu(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};At.unstable_batchedUpdates=jh;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Du(n))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return Hu(e,t,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function Qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qv)}catch(e){console.error(e)}}Qv(),Q0.exports=At;var gS=Q0.exports,Fm=gS;wd.createRoot=Fm.createRoot,wd.hydrateRoot=Fm.hydrateRoot;const $u=k.createContext(null);$u.displayName="PanelGroupContext";const Me={group:"data-panel-group",groupDirection:"data-panel-group-direction",groupId:"data-panel-group-id",panel:"data-panel",panelCollapsible:"data-panel-collapsible",panelId:"data-panel-id",panelSize:"data-panel-size",resizeHandle:"data-resize-handle",resizeHandleActive:"data-resize-handle-active",resizeHandleEnabled:"data-panel-resize-handle-enabled",resizeHandleId:"data-panel-resize-handle-id",resizeHandleState:"data-resize-handle-state"},Oh=10,qr=k.useLayoutEffect,Om=o2.useId,yS=typeof Om=="function"?Om:()=>null;let vS=0;function Lh(e=null){const t=yS(),n=k.useRef(e||t||null);return n.current===null&&(n.current=""+vS++),e??n.current}function Jv({children:e,className:t="",collapsedSize:n,collapsible:r,defaultSize:s,forwardedRef:o,id:i,maxSize:a,minSize:l,onCollapse:u,onExpand:c,onResize:d,order:h,style:f,tagName:y="div",...g}){const x=k.useContext($u);if(x===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:p,expandPanel:m,getPanelSize:v,getPanelStyle:w,groupId:S,isPanelCollapsed:N,reevaluatePanelConstraints:I,registerPanel:C,resizePanel:R,unregisterPanel:P}=x,O=Lh(i),V=k.useRef({callbacks:{onCollapse:u,onExpand:c,onResize:d},constraints:{collapsedSize:n,collapsible:r,defaultSize:s,maxSize:a,minSize:l},id:O,idIsFromProps:i!==void 0,order:h});k.useRef({didLogMissingDefaultSizeWarning:!1}),qr(()=>{const{callbacks:_,constraints:A}=V.current,M={...A};V.current.id=O,V.current.idIsFromProps=i!==void 0,V.current.order=h,_.onCollapse=u,_.onExpand=c,_.onResize=d,A.collapsedSize=n,A.collapsible=r,A.defaultSize=s,A.maxSize=a,A.minSize=l,(M.collapsedSize!==A.collapsedSize||M.collapsible!==A.collapsible||M.maxSize!==A.maxSize||M.minSize!==A.minSize)&&I(V.current,M)}),qr(()=>{const _=V.current;return C(_),()=>{P(_)}},[h,O,C,P]),k.useImperativeHandle(o,()=>({collapse:()=>{p(V.current)},expand:_=>{m(V.current,_)},getId(){return O},getSize(){return v(V.current)},isCollapsed(){return N(V.current)},isExpanded(){return!N(V.current)},resize:_=>{R(V.current,_)}}),[p,m,v,N,O,R]);const K=w(V.current,s);return k.createElement(y,{...g,children:e,className:t,id:O,style:{...K,...f},[Me.groupId]:S,[Me.panel]:"",[Me.panelCollapsible]:r||void 0,[Me.panelId]:O,[Me.panelSize]:parseFloat(""+K.flexGrow).toFixed(1)})}const ni=k.forwardRef((e,t)=>k.createElement(Jv,{...e,forwardedRef:t}));Jv.displayName="Panel";ni.displayName="forwardRef(Panel)";let hf=null,Nl=-1,or=null;function wS(e,t){if(t){const n=(t&rw)!==0,r=(t&sw)!==0,s=(t&ow)!==0,o=(t&iw)!==0;if(n)return s?"se-resize":o?"ne-resize":"e-resize";if(r)return s?"sw-resize":o?"nw-resize":"w-resize";if(s)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function xS(){or!==null&&(document.head.removeChild(or),hf=null,or=null,Nl=-1)}function zc(e,t){var n,r;const s=wS(e,t);if(hf!==s){if(hf=s,or===null&&(or=document.createElement("style"),document.head.appendChild(or)),Nl>=0){var o;(o=or.sheet)===null||o===void 0||o.removeRule(Nl)}Nl=(n=(r=or.sheet)===null||r===void 0?void 0:r.insertRule(`*{cursor: ${s} !important;}`))!==null&&n!==void 0?n:-1}}function Zv(e){return e.type==="keydown"}function ew(e){return e.type.startsWith("pointer")}function tw(e){return e.type.startsWith("mouse")}function Bu(e){if(ew(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(tw(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function bS(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function _S(e,t,n){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function SS(e,t){if(e===t)throw new Error("Cannot compare node with itself");const n={a:Hm(e),b:Hm(t)};let r;for(;n.a.at(-1)===n.b.at(-1);)e=n.a.pop(),t=n.b.pop(),r=e;ue(r,"Stacking order can only be calculated for elements with a common ancestor");const s={a:Dm(Lm(n.a)),b:Dm(Lm(n.b))};if(s.a===s.b){const o=r.childNodes,i={a:n.a.at(-1),b:n.b.at(-1)};let a=o.length;for(;a--;){const l=o[a];if(l===i.a)return 1;if(l===i.b)return-1}}return Math.sign(s.a-s.b)}const kS=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function ES(e){var t;const n=getComputedStyle((t=nw(e))!==null&&t!==void 0?t:e).display;return n==="flex"||n==="inline-flex"}function NS(e){const t=getComputedStyle(e);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||ES(e))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||kS.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function Lm(e){let t=e.length;for(;t--;){const n=e[t];if(ue(n,"Missing node"),NS(n))return n}return null}function Dm(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Hm(e){const t=[];for(;e;)t.push(e),e=nw(e);return t}function nw(e){const{parentNode:t}=e;return t&&t instanceof ShadowRoot?t.host:t}const rw=1,sw=2,ow=4,iw=8,IS=bS()==="coarse";let an=[],Ys=!1,Lr=new Map,Uu=new Map;const Bi=new Set;function TS(e,t,n,r,s){var o;const{ownerDocument:i}=t,a={direction:n,element:t,hitAreaMargins:r,setResizeHandlerState:s},l=(o=Lr.get(i))!==null&&o!==void 0?o:0;return Lr.set(i,l+1),Bi.add(a),au(),function(){var c;Uu.delete(e),Bi.delete(a);const d=(c=Lr.get(i))!==null&&c!==void 0?c:1;if(Lr.set(i,d-1),au(),d===1&&Lr.delete(i),an.includes(a)){const h=an.indexOf(a);h>=0&&an.splice(h,1),Hh(),s("up",!0,null)}}}function jS(e){const{target:t}=e,{x:n,y:r}=Bu(e);Ys=!0,Dh({target:t,x:n,y:r}),au(),an.length>0&&(lu("down",e),e.preventDefault(),aw(t)||e.stopImmediatePropagation())}function Fc(e){const{x:t,y:n}=Bu(e);if(Ys&&e.buttons===0&&(Ys=!1,lu("up",e)),!Ys){const{target:r}=e;Dh({target:r,x:t,y:n})}lu("move",e),Hh(),an.length>0&&e.preventDefault()}function Oc(e){const{target:t}=e,{x:n,y:r}=Bu(e);Uu.clear(),Ys=!1,an.length>0&&(e.preventDefault(),aw(t)||e.stopImmediatePropagation()),lu("up",e),Dh({target:t,x:n,y:r}),Hh(),au()}function aw(e){let t=e;for(;t;){if(t.hasAttribute(Me.resizeHandle))return!0;t=t.parentElement}return!1}function Dh({target:e,x:t,y:n}){an.splice(0);let r=null;(e instanceof HTMLElement||e instanceof SVGElement)&&(r=e),Bi.forEach(s=>{const{element:o,hitAreaMargins:i}=s,a=o.getBoundingClientRect(),{bottom:l,left:u,right:c,top:d}=a,h=IS?i.coarse:i.fine;if(t>=u-h&&t<=c+h&&n>=d-h&&n<=l+h){if(r!==null&&document.contains(r)&&o!==r&&!o.contains(r)&&!r.contains(o)&&SS(r,o)>0){let y=r,g=!1;for(;y&&!y.contains(o);){if(_S(y.getBoundingClientRect(),a)){g=!0;break}y=y.parentElement}if(g)return}an.push(s)}})}function Lc(e,t){Uu.set(e,t)}function Hh(){let e=!1,t=!1;an.forEach(r=>{const{direction:s}=r;s==="horizontal"?e=!0:t=!0});let n=0;Uu.forEach(r=>{n|=r}),e&&t?zc("intersection",n):e?zc("horizontal",n):t?zc("vertical",n):xS()}let Dc=new AbortController;function au(){Dc.abort(),Dc=new AbortController;const e={capture:!0,signal:Dc.signal};Bi.size&&(Ys?(an.length>0&&Lr.forEach((t,n)=>{const{body:r}=n;t>0&&(r.addEventListener("contextmenu",Oc,e),r.addEventListener("pointerleave",Fc,e),r.addEventListener("pointermove",Fc,e))}),window.addEventListener("pointerup",Oc,e),window.addEventListener("pointercancel",Oc,e)):Lr.forEach((t,n)=>{const{body:r}=n;t>0&&(r.addEventListener("pointerdown",jS,e),r.addEventListener("pointermove",Fc,e))}))}function lu(e,t){Bi.forEach(n=>{const{setResizeHandlerState:r}=n,s=an.includes(n);r(e,s,t)})}function MS(){const[e,t]=k.useState(0);return k.useCallback(()=>t(n=>n+1),[])}function ue(e,t){if(!e)throw console.error(t),Error(t)}function rs(e,t,n=Oh){return e.toFixed(n)===t.toFixed(n)?0:e>t?1:-1}function Cn(e,t,n=Oh){return rs(e,t,n)===0}function Nt(e,t,n){return rs(e,t,n)===0}function CS(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){const s=e[r],o=t[r];if(!Nt(s,o,n))return!1}return!0}function Ds({panelConstraints:e,panelIndex:t,size:n}){const r=e[t];ue(r!=null,`Panel constraints not found for index ${t}`);let{collapsedSize:s=0,collapsible:o,maxSize:i=100,minSize:a=0}=r;if(rs(n,a)<0)if(o){const l=(s+a)/2;rs(n,l)<0?n=s:n=a}else n=a;return n=Math.min(i,n),n=parseFloat(n.toFixed(Oh)),n}function ri({delta:e,initialLayout:t,panelConstraints:n,pivotIndices:r,prevLayout:s,trigger:o}){if(Nt(e,0))return t;const i=[...t],[a,l]=r;ue(a!=null,"Invalid first pivot index"),ue(l!=null,"Invalid second pivot index");let u=0;if(o==="keyboard"){{const d=e<0?l:a,h=n[d];ue(h,`Panel constraints not found for index ${d}`);const{collapsedSize:f=0,collapsible:y,minSize:g=0}=h;if(y){const x=t[d];if(ue(x!=null,`Previous layout not found for panel index ${d}`),Nt(x,f)){const p=g-x;rs(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}{const d=e<0?a:l,h=n[d];ue(h,`No panel constraints found for index ${d}`);const{collapsedSize:f=0,collapsible:y,minSize:g=0}=h;if(y){const x=t[d];if(ue(x!=null,`Previous layout not found for panel index ${d}`),Nt(x,g)){const p=x-f;rs(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}}{const d=e<0?1:-1;let h=e<0?l:a,f=0;for(;;){const g=t[h];ue(g!=null,`Previous layout not found for panel index ${h}`);const p=Ds({panelConstraints:n,panelIndex:h,size:100})-g;if(f+=p,h+=d,h<0||h>=n.length)break}const y=Math.min(Math.abs(e),Math.abs(f));e=e<0?0-y:y}{let h=e<0?a:l;for(;h>=0&&h<n.length;){const f=Math.abs(e)-Math.abs(u),y=t[h];ue(y!=null,`Previous layout not found for panel index ${h}`);const g=y-f,x=Ds({panelConstraints:n,panelIndex:h,size:g});if(!Nt(y,x)&&(u+=y-x,i[h]=x,u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?h--:h++}}if(CS(s,i))return s;{const d=e<0?l:a,h=t[d];ue(h!=null,`Previous layout not found for panel index ${d}`);const f=h+u,y=Ds({panelConstraints:n,panelIndex:d,size:f});if(i[d]=y,!Nt(y,f)){let g=f-y,p=e<0?l:a;for(;p>=0&&p<n.length;){const m=i[p];ue(m!=null,`Previous layout not found for panel index ${p}`);const v=m+g,w=Ds({panelConstraints:n,panelIndex:p,size:v});if(Nt(m,w)||(g-=w-m,i[p]=w),Nt(g,0))break;e>0?p--:p++}}}const c=i.reduce((d,h)=>h+d,0);return Nt(c,100)?i:s}function PS({layout:e,panelsArray:t,pivotIndices:n}){let r=0,s=100,o=0,i=0;const a=n[0];ue(a!=null,"No pivot index found"),t.forEach((d,h)=>{const{constraints:f}=d,{maxSize:y=100,minSize:g=0}=f;h===a?(r=g,s=y):(o+=g,i+=y)});const l=Math.min(s,100-o),u=Math.max(r,100-i),c=e[a];return{valueMax:l,valueMin:u,valueNow:c}}function Ui(e,t=document){return Array.from(t.querySelectorAll(`[${Me.resizeHandleId}][data-panel-group-id="${e}"]`))}function lw(e,t,n=document){const s=Ui(e,n).findIndex(o=>o.getAttribute(Me.resizeHandleId)===t);return s??null}function uw(e,t,n){const r=lw(e,t,n);return r!=null?[r,r+1]:[-1,-1]}function cw(e,t=document){var n;if(t instanceof HTMLElement&&(t==null||(n=t.dataset)===null||n===void 0?void 0:n.panelGroupId)==e)return t;const r=t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return r||null}function Wu(e,t=document){const n=t.querySelector(`[${Me.resizeHandleId}="${e}"]`);return n||null}function AS(e,t,n,r=document){var s,o,i,a;const l=Wu(t,r),u=Ui(e,r),c=l?u.indexOf(l):-1,d=(s=(o=n[c])===null||o===void 0?void 0:o.id)!==null&&s!==void 0?s:null,h=(i=(a=n[c+1])===null||a===void 0?void 0:a.id)!==null&&i!==void 0?i:null;return[d,h]}function RS({committedValuesRef:e,eagerValuesRef:t,groupId:n,layout:r,panelDataArray:s,panelGroupElement:o,setLayout:i}){k.useRef({didWarnAboutMissingResizeHandle:!1}),qr(()=>{if(!o)return;const a=Ui(n,o);for(let l=0;l<s.length-1;l++){const{valueMax:u,valueMin:c,valueNow:d}=PS({layout:r,panelsArray:s,pivotIndices:[l,l+1]}),h=a[l];if(h!=null){const f=s[l];ue(f,`No panel data found for index "${l}"`),h.setAttribute("aria-controls",f.id),h.setAttribute("aria-valuemax",""+Math.round(u)),h.setAttribute("aria-valuemin",""+Math.round(c)),h.setAttribute("aria-valuenow",d!=null?""+Math.round(d):"")}}return()=>{a.forEach((l,u)=>{l.removeAttribute("aria-controls"),l.removeAttribute("aria-valuemax"),l.removeAttribute("aria-valuemin"),l.removeAttribute("aria-valuenow")})}},[n,r,s,o]),k.useEffect(()=>{if(!o)return;const a=t.current;ue(a,"Eager values not found");const{panelDataArray:l}=a,u=cw(n,o);ue(u!=null,`No group found for id "${n}"`);const c=Ui(n,o);ue(c,`No resize handles found for group id "${n}"`);const d=c.map(h=>{const f=h.getAttribute(Me.resizeHandleId);ue(f,"Resize handle element has no handle id attribute");const[y,g]=AS(n,f,l,o);if(y==null||g==null)return()=>{};const x=p=>{if(!p.defaultPrevented)switch(p.key){case"Enter":{p.preventDefault();const m=l.findIndex(v=>v.id===y);if(m>=0){const v=l[m];ue(v,`No panel data found for index ${m}`);const w=r[m],{collapsedSize:S=0,collapsible:N,minSize:I=0}=v.constraints;if(w!=null&&N){const C=ri({delta:Nt(w,S)?I-S:S-w,initialLayout:r,panelConstraints:l.map(R=>R.constraints),pivotIndices:uw(n,f,o),prevLayout:r,trigger:"keyboard"});r!==C&&i(C)}}break}}};return h.addEventListener("keydown",x),()=>{h.removeEventListener("keydown",x)}});return()=>{d.forEach(h=>h())}},[o,e,t,n,r,s,i])}function $m(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function dw(e,t){const n=e==="horizontal",{x:r,y:s}=Bu(t);return n?r:s}function zS(e,t,n,r,s){const o=n==="horizontal",i=Wu(t,s);ue(i,`No resize handle element found for id "${t}"`);const a=i.getAttribute(Me.groupId);ue(a,"Resize handle element has no group id attribute");let{initialCursorPosition:l}=r;const u=dw(n,e),c=cw(a,s);ue(c,`No group element found for id "${a}"`);const d=c.getBoundingClientRect(),h=o?d.width:d.height;return(u-l)/h*100}function FS(e,t,n,r,s,o){if(Zv(e)){const i=n==="horizontal";let a=0;e.shiftKey?a=100:s!=null?a=s:a=10;let l=0;switch(e.key){case"ArrowDown":l=i?0:a;break;case"ArrowLeft":l=i?-a:0;break;case"ArrowRight":l=i?a:0;break;case"ArrowUp":l=i?0:-a;break;case"End":l=100;break;case"Home":l=-100;break}return l}else return r==null?0:zS(e,t,n,r,o)}function OS({panelDataArray:e}){const t=Array(e.length),n=e.map(o=>o.constraints);let r=0,s=100;for(let o=0;o<e.length;o++){const i=n[o];ue(i,`Panel constraints not found for index ${o}`);const{defaultSize:a}=i;a!=null&&(r++,t[o]=a,s-=a)}for(let o=0;o<e.length;o++){const i=n[o];ue(i,`Panel constraints not found for index ${o}`);const{defaultSize:a}=i;if(a!=null)continue;const l=e.length-r,u=s/l;r++,t[o]=u,s-=u}return t}function fs(e,t,n){t.forEach((r,s)=>{const o=e[s];ue(o,`Panel data not found for index ${s}`);const{callbacks:i,constraints:a,id:l}=o,{collapsedSize:u=0,collapsible:c}=a,d=n[l];if(d==null||r!==d){n[l]=r;const{onCollapse:h,onExpand:f,onResize:y}=i;y&&y(r,d),c&&(h||f)&&(f&&(d==null||Cn(d,u))&&!Cn(r,u)&&f(),h&&(d==null||!Cn(d,u))&&Cn(r,u)&&h())}})}function Aa(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function LS({defaultSize:e,dragState:t,layout:n,panelData:r,panelIndex:s,precision:o=3}){const i=n[s];let a;return i==null?a=e!=null?e.toPrecision(o):"1":r.length===1?a="1":a=i.toPrecision(o),{flexBasis:0,flexGrow:a,flexShrink:1,overflow:"hidden",pointerEvents:t!==null?"none":void 0}}function DS(e,t=10){let n=null;return(...s)=>{n!==null&&clearTimeout(n),n=setTimeout(()=>{e(...s)},t)}}function Bm(e){try{if(typeof localStorage<"u")e.getItem=t=>localStorage.getItem(t),e.setItem=(t,n)=>{localStorage.setItem(t,n)};else throw new Error("localStorage not supported in this environment")}catch(t){console.error(t),e.getItem=()=>null,e.setItem=()=>{}}}function fw(e){return`react-resizable-panels:${e}`}function hw(e){return e.map(t=>{const{constraints:n,id:r,idIsFromProps:s,order:o}=t;return s?r:o?`${o}:${JSON.stringify(n)}`:JSON.stringify(n)}).sort((t,n)=>t.localeCompare(n)).join(",")}function pw(e,t){try{const n=fw(e),r=t.getItem(n);if(r){const s=JSON.parse(r);if(typeof s=="object"&&s!=null)return s}}catch{}return null}function HS(e,t,n){var r,s;const o=(r=pw(e,n))!==null&&r!==void 0?r:{},i=hw(t);return(s=o[i])!==null&&s!==void 0?s:null}function $S(e,t,n,r,s){var o;const i=fw(e),a=hw(t),l=(o=pw(e,s))!==null&&o!==void 0?o:{};l[a]={expandToSizes:Object.fromEntries(n.entries()),layout:r};try{s.setItem(i,JSON.stringify(l))}catch(u){console.error(u)}}function Um({layout:e,panelConstraints:t}){const n=[...e],r=n.reduce((o,i)=>o+i,0);if(n.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${n.map(o=>`${o}%`).join(", ")}`);if(!Nt(r,100)&&n.length>0)for(let o=0;o<t.length;o++){const i=n[o];ue(i!=null,`No layout data found for index ${o}`);const a=100/r*i;n[o]=a}let s=0;for(let o=0;o<t.length;o++){const i=n[o];ue(i!=null,`No layout data found for index ${o}`);const a=Ds({panelConstraints:t,panelIndex:o,size:i});i!=a&&(s+=i-a,n[o]=a)}if(!Nt(s,0))for(let o=0;o<t.length;o++){const i=n[o];ue(i!=null,`No layout data found for index ${o}`);const a=i+s,l=Ds({panelConstraints:t,panelIndex:o,size:a});if(i!==l&&(s-=l-i,n[o]=l,Nt(s,0)))break}return n}const BS=100,si={getItem:e=>(Bm(si),si.getItem(e)),setItem:(e,t)=>{Bm(si),si.setItem(e,t)}},Wm={};function mw({autoSaveId:e=null,children:t,className:n="",direction:r,forwardedRef:s,id:o=null,onLayout:i=null,keyboardResizeBy:a=null,storage:l=si,style:u,tagName:c="div",...d}){const h=Lh(o),f=k.useRef(null),[y,g]=k.useState(null),[x,p]=k.useState([]),m=MS(),v=k.useRef({}),w=k.useRef(new Map),S=k.useRef(0),N=k.useRef({autoSaveId:e,direction:r,dragState:y,id:h,keyboardResizeBy:a,onLayout:i,storage:l}),I=k.useRef({layout:x,panelDataArray:[],panelDataArrayChanged:!1});k.useRef({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),k.useImperativeHandle(s,()=>({getId:()=>N.current.id,getLayout:()=>{const{layout:D}=I.current;return D},setLayout:D=>{const{onLayout:W}=N.current,{layout:Y,panelDataArray:X}=I.current,G=Um({layout:D,panelConstraints:X.map(te=>te.constraints)});$m(Y,G)||(p(G),I.current.layout=G,W&&W(G),fs(X,G,v.current))}}),[]),qr(()=>{N.current.autoSaveId=e,N.current.direction=r,N.current.dragState=y,N.current.id=h,N.current.onLayout=i,N.current.storage=l}),RS({committedValuesRef:N,eagerValuesRef:I,groupId:h,layout:x,panelDataArray:I.current.panelDataArray,setLayout:p,panelGroupElement:f.current}),k.useEffect(()=>{const{panelDataArray:D}=I.current;if(e){if(x.length===0||x.length!==D.length)return;let W=Wm[e];W==null&&(W=DS($S,BS),Wm[e]=W);const Y=[...D],X=new Map(w.current);W(e,Y,X,x,l)}},[e,x,l]),k.useEffect(()=>{});const C=k.useCallback(D=>{const{onLayout:W}=N.current,{layout:Y,panelDataArray:X}=I.current;if(D.constraints.collapsible){const G=X.map(Z=>Z.constraints),{collapsedSize:te=0,panelSize:j,pivotIndices:q}=Cr(X,D,Y);if(ue(j!=null,`Panel size not found for panel "${D.id}"`),!Cn(j,te)){w.current.set(D.id,j);const oe=Ss(X,D)===X.length-1?j-te:te-j,le=ri({delta:oe,initialLayout:Y,panelConstraints:G,pivotIndices:q,prevLayout:Y,trigger:"imperative-api"});Aa(Y,le)||(p(le),I.current.layout=le,W&&W(le),fs(X,le,v.current))}}},[]),R=k.useCallback((D,W)=>{const{onLayout:Y}=N.current,{layout:X,panelDataArray:G}=I.current;if(D.constraints.collapsible){const te=G.map(pe=>pe.constraints),{collapsedSize:j=0,panelSize:q=0,minSize:Z=0,pivotIndices:oe}=Cr(G,D,X),le=W??Z;if(Cn(q,j)){const pe=w.current.get(D.id),ve=pe!=null&&pe>=le?pe:le,me=Ss(G,D)===G.length-1?q-ve:ve-q,re=ri({delta:me,initialLayout:X,panelConstraints:te,pivotIndices:oe,prevLayout:X,trigger:"imperative-api"});Aa(X,re)||(p(re),I.current.layout=re,Y&&Y(re),fs(G,re,v.current))}}},[]),P=k.useCallback(D=>{const{layout:W,panelDataArray:Y}=I.current,{panelSize:X}=Cr(Y,D,W);return ue(X!=null,`Panel size not found for panel "${D.id}"`),X},[]),O=k.useCallback((D,W)=>{const{panelDataArray:Y}=I.current,X=Ss(Y,D);return LS({defaultSize:W,dragState:y,layout:x,panelData:Y,panelIndex:X})},[y,x]),V=k.useCallback(D=>{const{layout:W,panelDataArray:Y}=I.current,{collapsedSize:X=0,collapsible:G,panelSize:te}=Cr(Y,D,W);return ue(te!=null,`Panel size not found for panel "${D.id}"`),G===!0&&Cn(te,X)},[]),K=k.useCallback(D=>{const{layout:W,panelDataArray:Y}=I.current,{collapsedSize:X=0,collapsible:G,panelSize:te}=Cr(Y,D,W);return ue(te!=null,`Panel size not found for panel "${D.id}"`),!G||rs(te,X)>0},[]),_=k.useCallback(D=>{const{panelDataArray:W}=I.current;W.push(D),W.sort((Y,X)=>{const G=Y.order,te=X.order;return G==null&&te==null?0:G==null?-1:te==null?1:G-te}),I.current.panelDataArrayChanged=!0,m()},[m]);qr(()=>{if(I.current.panelDataArrayChanged){I.current.panelDataArrayChanged=!1;const{autoSaveId:D,onLayout:W,storage:Y}=N.current,{layout:X,panelDataArray:G}=I.current;let te=null;if(D){const q=HS(D,G,Y);q&&(w.current=new Map(Object.entries(q.expandToSizes)),te=q.layout)}te==null&&(te=OS({panelDataArray:G}));const j=Um({layout:te,panelConstraints:G.map(q=>q.constraints)});$m(X,j)||(p(j),I.current.layout=j,W&&W(j),fs(G,j,v.current))}}),qr(()=>{const D=I.current;return()=>{D.layout=[]}},[]);const A=k.useCallback(D=>{let W=!1;const Y=f.current;return Y&&window.getComputedStyle(Y,null).getPropertyValue("direction")==="rtl"&&(W=!0),function(G){G.preventDefault();const te=f.current;if(!te)return()=>null;const{direction:j,dragState:q,id:Z,keyboardResizeBy:oe,onLayout:le}=N.current,{layout:pe,panelDataArray:ve}=I.current,{initialLayout:Ue}=q??{},me=uw(Z,D,te);let re=FS(G,D,j,q,oe,te);const We=j==="horizontal";We&&W&&(re=-re);const qt=ve.map(Vn=>Vn.constraints),Gt=ri({delta:re,initialLayout:Ue??pe,panelConstraints:qt,pivotIndices:me,prevLayout:pe,trigger:Zv(G)?"keyboard":"mouse-or-touch"}),kn=!Aa(pe,Gt);(ew(G)||tw(G))&&S.current!=re&&(S.current=re,!kn&&re!==0?We?Lc(D,re<0?rw:sw):Lc(D,re<0?ow:iw):Lc(D,0)),kn&&(p(Gt),I.current.layout=Gt,le&&le(Gt),fs(ve,Gt,v.current))}},[]),M=k.useCallback((D,W)=>{const{onLayout:Y}=N.current,{layout:X,panelDataArray:G}=I.current,te=G.map(pe=>pe.constraints),{panelSize:j,pivotIndices:q}=Cr(G,D,X);ue(j!=null,`Panel size not found for panel "${D.id}"`);const oe=Ss(G,D)===G.length-1?j-W:W-j,le=ri({delta:oe,initialLayout:X,panelConstraints:te,pivotIndices:q,prevLayout:X,trigger:"imperative-api"});Aa(X,le)||(p(le),I.current.layout=le,Y&&Y(le),fs(G,le,v.current))},[]),B=k.useCallback((D,W)=>{const{layout:Y,panelDataArray:X}=I.current,{collapsedSize:G=0,collapsible:te}=W,{collapsedSize:j=0,collapsible:q,maxSize:Z=100,minSize:oe=0}=D.constraints,{panelSize:le}=Cr(X,D,Y);le!=null&&(te&&q&&Cn(le,G)?Cn(G,j)||M(D,j):le<oe?M(D,oe):le>Z&&M(D,Z))},[M]),z=k.useCallback((D,W)=>{const{direction:Y}=N.current,{layout:X}=I.current;if(!f.current)return;const G=Wu(D,f.current);ue(G,`Drag handle element not found for id "${D}"`);const te=dw(Y,W);g({dragHandleId:D,dragHandleRect:G.getBoundingClientRect(),initialCursorPosition:te,initialLayout:X})},[]),T=k.useCallback(()=>{g(null)},[]),F=k.useCallback(D=>{const{panelDataArray:W}=I.current,Y=Ss(W,D);Y>=0&&(W.splice(Y,1),delete v.current[D.id],I.current.panelDataArrayChanged=!0,m())},[m]),$=k.useMemo(()=>({collapsePanel:C,direction:r,dragState:y,expandPanel:R,getPanelSize:P,getPanelStyle:O,groupId:h,isPanelCollapsed:V,isPanelExpanded:K,reevaluatePanelConstraints:B,registerPanel:_,registerResizeHandle:A,resizePanel:M,startDragging:z,stopDragging:T,unregisterPanel:F,panelGroupElement:f.current}),[C,y,r,R,P,O,h,V,K,B,_,A,M,z,T,F]),U={display:"flex",flexDirection:r==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return k.createElement($u.Provider,{value:$},k.createElement(c,{...d,children:t,className:n,id:o,ref:f,style:{...U,...u},[Me.group]:"",[Me.groupDirection]:r,[Me.groupId]:h}))}const pf=k.forwardRef((e,t)=>k.createElement(mw,{...e,forwardedRef:t}));mw.displayName="PanelGroup";pf.displayName="forwardRef(PanelGroup)";function Ss(e,t){return e.findIndex(n=>n===t||n.id===t.id)}function Cr(e,t,n){const r=Ss(e,t),o=r===e.length-1?[r-1,r]:[r,r+1],i=n[r];return{...t.constraints,panelSize:i,pivotIndices:o}}function US({disabled:e,handleId:t,resizeHandler:n,panelGroupElement:r}){k.useEffect(()=>{if(e||n==null||r==null)return;const s=Wu(t,r);if(s==null)return;const o=i=>{if(!i.defaultPrevented)switch(i.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{i.preventDefault(),n(i);break}case"F6":{i.preventDefault();const a=s.getAttribute(Me.groupId);ue(a,`No group element found for id "${a}"`);const l=Ui(a,r),u=lw(a,t,r);ue(u!==null,`No resize element found for id "${t}"`);const c=i.shiftKey?u>0?u-1:l.length-1:u+1<l.length?u+1:0;l[c].focus();break}}};return s.addEventListener("keydown",o),()=>{s.removeEventListener("keydown",o)}},[r,e,t,n])}function mf({children:e=null,className:t="",disabled:n=!1,hitAreaMargins:r,id:s,onBlur:o,onClick:i,onDragging:a,onFocus:l,onPointerDown:u,onPointerUp:c,style:d={},tabIndex:h=0,tagName:f="div",...y}){var g,x;const p=k.useRef(null),m=k.useRef({onClick:i,onDragging:a,onPointerDown:u,onPointerUp:c});k.useEffect(()=>{m.current.onClick=i,m.current.onDragging=a,m.current.onPointerDown=u,m.current.onPointerUp=c});const v=k.useContext($u);if(v===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:w,groupId:S,registerResizeHandle:N,startDragging:I,stopDragging:C,panelGroupElement:R}=v,P=Lh(s),[O,V]=k.useState("inactive"),[K,_]=k.useState(!1),[A,M]=k.useState(null),B=k.useRef({state:O});qr(()=>{B.current.state=O}),k.useEffect(()=>{if(n)M(null);else{const $=N(P);M(()=>$)}},[n,P,N]);const z=(g=r==null?void 0:r.coarse)!==null&&g!==void 0?g:15,T=(x=r==null?void 0:r.fine)!==null&&x!==void 0?x:5;k.useEffect(()=>{if(n||A==null)return;const $=p.current;ue($,"Element ref not attached");let U=!1;return TS(P,$,w,{coarse:z,fine:T},(W,Y,X)=>{if(!Y){V("inactive");return}switch(W){case"down":{V("drag"),U=!1,ue(X,'Expected event to be defined for "down" action'),I(P,X);const{onDragging:G,onPointerDown:te}=m.current;G==null||G(!0),te==null||te();break}case"move":{const{state:G}=B.current;U=!0,G!=="drag"&&V("hover"),ue(X,'Expected event to be defined for "move" action'),A(X);break}case"up":{V("hover"),C();const{onClick:G,onDragging:te,onPointerUp:j}=m.current;te==null||te(!1),j==null||j(),U||G==null||G();break}}})},[z,w,n,T,N,P,A,I,C]),US({disabled:n,handleId:P,resizeHandler:A,panelGroupElement:R});const F={touchAction:"none",userSelect:"none"};return k.createElement(f,{...y,children:e,className:t,id:s,onBlur:()=>{_(!1),o==null||o()},onFocus:()=>{_(!0),l==null||l()},ref:p,role:"separator",style:{...F,...d},tabIndex:h,[Me.groupDirection]:w,[Me.groupId]:S,[Me.resizeHandle]:"",[Me.resizeHandleActive]:O==="drag"?"pointer":K?"keyboard":void 0,[Me.resizeHandleEnabled]:!n,[Me.resizeHandleId]:P,[Me.resizeHandleState]:O})}mf.displayName="PanelResizeHandle";const WS={},Vm=e=>{let t;const n=new Set,r=(c,d)=>{const h=typeof c=="function"?c(t):c;if(!Object.is(h,t)){const f=t;t=d??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(y=>y(t,f))}},s=()=>t,l={setState:r,getState:s,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(WS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,s,l);return l},gw=e=>e?Vm(e):Vm;var yw={exports:{}},vw={},ww={exports:{}},xw={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=k;function VS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var KS=typeof Object.is=="function"?Object.is:VS,qS=lo.useState,GS=lo.useEffect,YS=lo.useLayoutEffect,XS=lo.useDebugValue;function QS(e,t){var n=t(),r=qS({inst:{value:n,getSnapshot:t}}),s=r[0].inst,o=r[1];return YS(function(){s.value=n,s.getSnapshot=t,Hc(s)&&o({inst:s})},[e,n,t]),GS(function(){return Hc(s)&&o({inst:s}),e(function(){Hc(s)&&o({inst:s})})},[e]),XS(n),n}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!KS(e,n)}catch{return!0}}function JS(e,t){return t()}var ZS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?JS:QS;xw.useSyncExternalStore=lo.useSyncExternalStore!==void 0?lo.useSyncExternalStore:ZS;ww.exports=xw;var ek=ww.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=k,tk=ek;function nk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rk=typeof Object.is=="function"?Object.is:nk,sk=tk.useSyncExternalStore,ok=Vu.useRef,ik=Vu.useEffect,ak=Vu.useMemo,lk=Vu.useDebugValue;vw.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var o=ok(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=ak(function(){function l(f){if(!u){if(u=!0,c=f,f=r(f),s!==void 0&&i.hasValue){var y=i.value;if(s(y,f))return d=y}return d=f}if(y=d,rk(c,f))return y;var g=r(f);return s!==void 0&&s(y,g)?(c=f,y):(c=f,d=g)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,s]);var a=sk(e,o[0],o[1]);return ik(function(){i.hasValue=!0,i.value=a},[a]),lk(a),a};yw.exports=vw;var uk=yw.exports;const bw=D0(uk),_w={},{useDebugValue:ck}=L,{useSyncExternalStoreWithSelector:dk}=bw;let Km=!1;const fk=e=>e;function hk(e,t=fk,n){(_w?"production":void 0)!=="production"&&n&&!Km&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Km=!0);const r=dk(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return ck(r),r}const qm=e=>{(_w?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?gw(e):e,n=(r,s)=>hk(t,r,s);return Object.assign(n,t),n},pk=e=>e?qm(e):qm,mk=`# Infinite Spatial IDE

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
`,gk=`<!doctype html>
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
`,yk=`{
  "name": "infinite-spatial-ide",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "infinite-spatial-ide",
      "version": "0.1.0",
      "dependencies": {
        "@anthropic-ai/sdk": "^0.106.0",
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
    "node_modules/@anthropic-ai/sdk": {
      "version": "0.106.0",
      "resolved": "https://registry.npmjs.org/@anthropic-ai/sdk/-/sdk-0.106.0.tgz",
      "integrity": "sha512-ufwVvYNDBj2dzOGupBCTaNzBLxqcTnGOzI4z8Wouxlt+mT3J3HuOmatgCy1VmwCHOUueqZ41ERhm0O99OUcbWA==",
      "license": "MIT",
      "dependencies": {
        "json-schema-to-ts": "^3.1.1",
        "standardwebhooks": "^1.0.0"
      },
      "bin": {
        "anthropic-ai-sdk": "bin/cli"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      },
      "peerDependenciesMeta": {
        "zod": {
          "optional": true
        }
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
    "node_modules/@babel/runtime": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.29.7.tgz",
      "integrity": "sha512-Nq8OhGWiZIZGV6hLHoyAKLLcJihP/xFeBMGJoUrxTX2psI8dCifzLhZISFb+VWS3wFMRDmCGw5R+dOySCqPLhw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
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
    "node_modules/@stablelib/base64": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@stablelib/base64/-/base64-1.0.1.tgz",
      "integrity": "sha512-1bnPQqSxSuc3Ii6MhBysoWCg58j97aUjuCSZrGSmDxNqtytIi0k8utUenAwTZN4V5mXXYGsVUI9zeBqy+jBOSQ==",
      "license": "MIT"
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
    "node_modules/fast-sha256": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/fast-sha256/-/fast-sha256-1.3.0.tgz",
      "integrity": "sha512-n11RGP/lrWEFI/bWdygLxhI+pVeo1ZYIVwvvPkW7azl/rOy+F3HYRZ2K5zeE9mmkhQppyv9sQFx0JM9UabnpPQ==",
      "license": "Unlicense"
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
    "node_modules/json-schema-to-ts": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/json-schema-to-ts/-/json-schema-to-ts-3.1.1.tgz",
      "integrity": "sha512-+DWg8jCJG2TEnpy7kOm/7/AxaYoaRbjVB4LFZLySZlWn8exGs3A4OLJR966cVvU26N7X9TWxl+Jsw7dzAqKT6g==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "ts-algebra": "^2.0.0"
      },
      "engines": {
        "node": ">=16"
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
    "node_modules/standardwebhooks": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/standardwebhooks/-/standardwebhooks-1.0.0.tgz",
      "integrity": "sha512-BbHGOQK9olHPMvQNHWul6MYlrRTAOKn03rOe4A8O3CLWhNf4YHBqq2HJKKC+sfqpxiBY52pNeesD6jIiLDz8jg==",
      "license": "MIT",
      "dependencies": {
        "@stablelib/base64": "^1.0.0",
        "fast-sha256": "^1.3.0"
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
    "node_modules/ts-algebra": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ts-algebra/-/ts-algebra-2.0.0.tgz",
      "integrity": "sha512-FPAhNPFMrkwz76P7cdjdmiShwMynZYN6SgOujD1urY4oNm80Ou9oMdmbR45LotcKOXoy7wSmHkRFE6Mxbrhefw==",
      "license": "MIT"
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
`,vk=`{
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
    "@anthropic-ai/sdk": "^0.106.0",
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
`,wk=`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`,xk=`import Layout from './components/Layout'

export default function App() {
  return <Layout />
}
`,bk=`import { useEffect, useRef, useState } from 'react'
import { useStore } from '../store'
import { streamFileSummary, AI_MODELS } from '../lib/ai'

/* AI "Explain this file" panel. Streams a Claude-generated summary of the
 * file's real source. Requires a user-supplied Anthropic API key (kept in
 * localStorage) since this prototype has no backend to hold one. */
export default function AiSummary({ file, content }) {
  const apiKey = useStore((s) => s.apiKey)
  const setApiKey = useStore((s) => s.setApiKey)
  const aiModel = useStore((s) => s.aiModel)
  const setAiModel = useStore((s) => s.setAiModel)
  const summaries = useStore((s) => s.summaries)
  const setSummary = useStore((s) => s.setSummary)

  const [text, setText] = useState('')
  const [status, setStatus] = useState('idle') // idle | thinking | streaming | done | error
  const [error, setError] = useState(null)
  const [keyDraft, setKeyDraft] = useState('')
  const abortRef = useRef(null)

  // Load any cached summary when the open file changes; cancel in-flight stream.
  useEffect(() => {
    abortRef.current?.abort()
    const cached = summaries[file.path]
    setText(cached || '')
    setStatus(cached ? 'done' : 'idle')
    setError(null)
  }, [file.path]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => abortRef.current?.abort(), [])

  const run = async () => {
    if (!apiKey) return
    setError(null)
    setText('')
    setStatus('thinking')
    const ctrl = new AbortController()
    abortRef.current = ctrl
    let first = true
    try {
      const full = await streamFileSummary({
        apiKey,
        path: file.path,
        content,
        model: aiModel,
        signal: ctrl.signal,
        onText: (delta) => {
          if (first) {
            first = false
            setStatus('streaming')
          }
          setText((t) => t + delta)
        },
      })
      setSummary(file.path, full)
      setStatus('done')
    } catch (e) {
      if (e?.name === 'AbortError') return
      setError(e?.message || String(e))
      setStatus('error')
    }
  }

  const busy = status === 'thinking' || status === 'streaming'

  /* ---------- no key yet: collect one ---------- */
  if (!apiKey) {
    return (
      <div className="flex-1 overflow-auto p-4 text-sm">
        <div className="mb-3 text-slate-300">Add an Anthropic API key to explain files with Claude.</div>
        <input
          type="password"
          value={keyDraft}
          onChange={(e) => setKeyDraft(e.target.value)}
          placeholder="sk-ant-..."
          className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-xs text-slate-100 outline-none focus:border-indigo-500"
        />
        <button
          onClick={() => keyDraft.trim() && setApiKey(keyDraft.trim())}
          className="mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Save key
        </button>
        <p className="mt-3 text-[11px] leading-relaxed text-amber-300/80">
          ⚠️ The key is stored in your browser and sent directly to Anthropic from this page. Fine for local
          prototyping — for production, proxy requests through a backend instead.
        </p>
      </div>
    )
  }

  /* ---------- main panel ---------- */
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center gap-2 border-b border-slate-800 px-3 py-2 text-xs">
        <select
          value={aiModel}
          onChange={(e) => setAiModel(e.target.value)}
          disabled={busy}
          className="rounded border border-slate-700 bg-slate-800 px-1.5 py-1 text-[11px] text-slate-200 outline-none"
        >
          {AI_MODELS.map((m) => (
            <option key={m.id} value={m.id}>{m.label}</option>
          ))}
        </select>
        <button
          onClick={busy ? () => abortRef.current?.abort() : run}
          className={[
            'rounded px-2.5 py-1 font-medium text-white',
            busy ? 'bg-rose-600 hover:bg-rose-500' : 'bg-indigo-600 hover:bg-indigo-500',
          ].join(' ')}
        >
          {busy ? 'Stop' : status === 'done' ? '↻ Regenerate' : '✨ Explain'}
        </button>
        <button onClick={() => setApiKey('')} className="ml-auto text-slate-500 hover:text-slate-300" title="Forget API key">
          key ✕
        </button>
      </div>

      <div className="thin-scroll flex-1 overflow-auto p-3 text-[13px] leading-relaxed">
        {status === 'idle' && (
          <div className="text-slate-500">Click <span className="text-indigo-300">✨ Explain</span> to summarise this file with Claude.</div>
        )}
        {status === 'thinking' && <div className="animate-pulse text-slate-400">Analyzing the file…</div>}
        {error && <div className="rounded-md border border-rose-700/60 bg-rose-900/30 p-2 text-rose-200">{error}</div>}
        {text && <Markdown text={text} />}
        {status === 'streaming' && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-indigo-400 align-middle" />}
      </div>
    </div>
  )
}

/* ---------- tiny, safe markdown renderer (headings, bullets, bold, code) ---------- */
function renderInline(line, keyPrefix) {
  const nodes = []
  const re = /(\\*\\*[^*]+\\*\\*|\`[^\`]+\`)/g
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) nodes.push(line.slice(last, m.index))
    const tok = m[0]
    if (tok.startsWith('**')) nodes.push(<strong key={\`\${keyPrefix}-b\${i}\`} className="text-slate-100">{tok.slice(2, -2)}</strong>)
    else nodes.push(<code key={\`\${keyPrefix}-c\${i}\`} className="rounded bg-slate-800 px-1 font-mono text-[12px] text-cyan-200">{tok.slice(1, -1)}</code>)
    last = m.index + tok.length
    i++
  }
  if (last < line.length) nodes.push(line.slice(last))
  return nodes
}

function Markdown({ text }) {
  const lines = text.split('\\n')
  return (
    <div className="space-y-1 text-slate-300">
      {lines.map((line, idx) => {
        const heading = line.match(/^\\*\\*(.+)\\*\\*\\s*$/)
        if (heading) {
          return <div key={idx} className="pt-2 text-[11px] font-semibold uppercase tracking-wider text-indigo-300">{heading[1]}</div>
        }
        if (/^\\s*[-*]\\s+/.test(line)) {
          return (
            <div key={idx} className="flex gap-2 pl-1">
              <span className="text-slate-600">•</span>
              <span>{renderInline(line.replace(/^\\s*[-*]\\s+/, ''), idx)}</span>
            </div>
          )
        }
        if (line.trim() === '') return <div key={idx} className="h-1" />
        return <p key={idx}>{renderInline(line, idx)}</p>
      })}
    </div>
  )
}
`,_k=`import { useStore } from '../store'
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
`,Sk=`import { useMemo } from 'react'
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
`,kk=`import { useEffect, useRef, useState } from 'react'
import { useStore, getFileContent } from '../store'
import AiSummary from './AiSummary'

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

  const [tab, setTab] = useState('code') // 'code' | 'ai' (text files only)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const drag = useRef(null)
  const audioRef = useRef(null)

  // Open near the top-right of the viewport each time a new file is opened.
  useEffect(() => {
    if (editorFileId) {
      setPos({ x: Math.max(24, window.innerWidth - 470), y: 96 })
      setTab('code')
    }
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
          {/* Code / AI tabs */}
          <div className="flex items-center gap-1 border-b border-slate-800 bg-slate-900/60 px-2 py-1 text-[11px]">
            <TabBtn active={tab === 'code'} onClick={() => setTab('code')}>{'</> Code'}</TabBtn>
            <TabBtn active={tab === 'ai'} onClick={() => setTab('ai')}>✨ AI Explain</TabBtn>
            <span className="ml-auto pr-1 text-[10px] text-slate-600">Claude</span>
          </div>

          {tab === 'code' ? (
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
          ) : (
            <AiSummary file={file} content={content} />
          )}
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

function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded px-2 py-1 font-medium transition-colors',
        active ? 'bg-slate-800 text-slate-100' : 'text-slate-400 hover:text-slate-200',
      ].join(' ')}
    >
      {children}
    </button>
  )
}
`,Ek=`import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
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
`,Nk=`import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
    focus.downstream.forEach((t, i) => E.push(makeEdge(focus.id, t, DOWNSTREAM_COLOR, { lane: i, bow: 'down' })))
    // things that affect selection → selection (arrow exits their RIGHT, enters selection's LEFT)
    focus.upstream.forEach((srcId, i) => E.push(makeEdge(srcId, focus.id, UPSTREAM_COLOR, { lane: i, bow: 'up' })))
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
`,Ik=`import { useEffect } from 'react'
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
`,Tk=`import { BaseEdge } from 'reactflow'

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
`,jk=`import { memo } from 'react'

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
`,Mk=`import { memo } from 'react'
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
`,Ck=`import { memo } from 'react'
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
`,Pk=`import { memo } from 'react'
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
`,Ak=`import { memo } from 'react'
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
`,Rk=`import { memo, useState } from 'react'
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
`,zk=`import { memo } from 'react'

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
`,Fk=`@tailwind base;
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
`,Ok=`import Anthropic from '@anthropic-ai/sdk'

/* =============================================================================
 *  CLAUDE INTEGRATION  (single LLM call: summarise + explain one file)
 *
 *  ⚠️ Browser-direct, no backend: this prototype calls the Anthropic API from
 *  the browser with a user-supplied key (\`dangerouslyAllowBrowser\`). That key
 *  is exposed client-side — fine for local prototyping, NOT for production.
 *  In production, proxy these requests through a small server that holds the key.
 * ========================================================================== */

export const DEFAULT_MODEL = 'claude-opus-4-8'

export const AI_MODELS = [
  { id: 'claude-opus-4-8', label: 'Opus 4.8 · most capable' },
  { id: 'claude-sonnet-4-6', label: 'Sonnet 4.6 · balanced' },
  { id: 'claude-haiku-4-5', label: 'Haiku 4.5 · fastest' },
]

const SYSTEM = \`You are a senior software engineer helping a developer understand an unfamiliar codebase one file at a time. Be accurate and concise — explain what is actually in the file, never invent APIs. Respond in GitHub-flavored Markdown using exactly these sections:

**Purpose** — one or two sentences on what this file is for.
**Key parts** — the main exports / functions / components and what each does (bullet list).
**Dependencies & data flow** — what it imports or relies on, and how data moves through it.
**Notes** — gotchas, side effects, or TODOs worth knowing. Omit this section entirely if there is nothing notable.

Do not restate the code verbatim or add a preamble. Start directly with the **Purpose** heading.\`

/* Stream a file summary from Claude.
 *   onText(delta)  — called with each text chunk as it streams in
 *   signal         — optional AbortSignal to cancel
 * Returns the full summary text. */
export async function streamFileSummary({ apiKey, path, content, model = DEFAULT_MODEL, onText, signal }) {
  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true })

  const params = {
    model,
    max_tokens: 8000, // streaming, so generous headroom; thinking shares this budget
    system: SYSTEM,
    messages: [
      {
        role: 'user',
        content: \`Summarise and explain this file.\\n\\nPath: \${path}\\n\\nSource:\\n\\n\\\`\\\`\\\`\\n\${content}\\n\\\`\\\`\\\`\`,
      },
    ],
  }
  // Adaptive thinking on the models that support it (4.6+). Haiku 4.5 doesn't —
  // omit the field there to avoid a 400.
  if (!model.startsWith('claude-haiku')) {
    params.thinking = { type: 'adaptive' }
  }

  const stream = client.messages.stream(params, { signal })
  stream.on('text', (delta) => onText?.(delta))

  const final = await stream.finalMessage()
  return final.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
}
`,Lk=`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`,Dk=`import { create } from 'zustand'
import { buildProjectGraph, FILE_SOURCE } from './projectGraph'

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

  // --- AI (Claude) file explanations ---
  apiKey: (typeof localStorage !== 'undefined' && localStorage.getItem('anthropic_api_key')) || '',
  aiModel: (typeof localStorage !== 'undefined' && localStorage.getItem('anthropic_model')) || 'claude-opus-4-8',
  summaries: {}, // { [path]: markdownSummary } — cached per session
  setApiKey: (key) => {
    try { localStorage.setItem('anthropic_api_key', key) } catch {}
    set({ apiKey: key })
  },
  setAiModel: (model) => {
    try { localStorage.setItem('anthropic_model', model) } catch {}
    set({ aiModel: model })
  },
  setSummary: (path, text) => set((s) => ({ summaries: { ...s.summaries, [path]: text } })),

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
  return FILE_SOURCE[path] ?? ''
}
`,Hk=`/** @type {import('tailwindcss').Config} */
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
`,$k=`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
`,Bk="/assets/chime-ChslVLjt.wav",Uk="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMTYwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE2MCI+CiAgPGRlZnM+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImciIGN4PSI1MCUiIGN5PSI0MCUiIHI9IjcwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMGIwZTE0Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2cpIi8+CiAgPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTViNGZjIiBzdHJva2Utd2lkdGg9IjIiPgogICAgPGNpcmNsZSBjeD0iNzAiIGN5PSI4MCIgcj0iMjIiLz4KICAgIDxjaXJjbGUgY3g9IjE3MCIgY3k9IjU1IiByPSIxNiIvPgogICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTE1IiByPSIxMyIvPgogICAgPHBhdGggZD0iTTkyIDgwIEwxNTQgNTgiIHN0cm9rZT0iIzM0ZDM5OSIvPgogICAgPHBhdGggZD0iTTkwIDg2IEwxNDggMTEyIiBzdHJva2U9IiNmNTllMGIiLz4KICA8L2c+CiAgPGcgZmlsbD0iI2U1ZTdlYiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMyI+CiAgICA8dGV4dCB4PSI1MCIgeT0iMTQ2Ij5zcGF0aWFsLWlkZTwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo=",gf=Object.assign({"/README.md":mk,"/index.html":gk,"/package-lock.json":yk,"/package.json":vk,"/postcss.config.js":wk,"/src/App.jsx":xk,"/src/components/AiSummary.jsx":bk,"/src/components/BookmarkManager.jsx":_k,"/src/components/FileExplorer.jsx":Sk,"/src/components/FloatingEditor.jsx":kk,"/src/components/Layout.jsx":Ek,"/src/components/MapView.jsx":Nk,"/src/components/TerminalModal.jsx":Ik,"/src/components/edges/AroundEdge.jsx":Tk,"/src/components/nodes/ClusterNode.jsx":jk,"/src/components/nodes/FileNode.jsx":Mk,"/src/components/nodes/FunctionNode.jsx":Ck,"/src/components/nodes/PortNode.jsx":Pk,"/src/components/nodes/ProjectFileNode.jsx":Ak,"/src/components/nodes/SubspaceNode.jsx":Rk,"/src/components/nodes/TunableNode.jsx":zk,"/src/index.css":Fk,"/src/lib/ai.js":Ok,"/src/main.jsx":Lk,"/src/store.js":Dk,"/tailwind.config.js":Hk,"/vite.config.js":$k}),Gm=Object.assign({"/src/assets/chime.wav":Bk,"/src/assets/logo.svg":Uk}),Wk=gf,Vk=new Set(["svg","png","jpg","jpeg","gif","webp","avif"]),Kk=new Set(["mp3","wav","ogg","m4a","flac","aac"]);function qk(e){const t=e.slice(e.lastIndexOf(".")+1).toLowerCase();return Vk.has(t)?"image":Kk.has(t)?"audio":"text"}function Sw(e){const t=e.lastIndexOf("/");return t<=0?"/":e.slice(0,t)}function Ym(e){return e.slice(e.lastIndexOf("/")+1)}function Gk(e,t){const n=`${e}/${t}`.split("/"),r=[];for(const s of n)s===""||s==="."||(s===".."?r.pop():r.push(s));return"/"+r.join("/")}const Yk=["",".js",".jsx",".ts",".tsx",".css","/index.js","/index.jsx","/index.ts","/index.tsx"];function Xk(e,t,n){if(!t.startsWith("."))return null;const r=Gk(Sw(e),t);for(const s of Yk){const o=r+s;if(n.has(o))return o}return null}const Qk=/(?:import\s+[^'"]*from\s*|import\s*|require\s*\(\s*|import\s*\(\s*)['"]([^'"]+)['"]/g;function Jk(e){const t=[];let n;for(;(n=Qk.exec(e))!==null;)t.push(n[1]);return t}const Xm=178,Qm=64,Ra=36,Zk=3,Jm=32,za=22,Zm=180,eE=3;function tE(){const e=Object.keys(gf),t=Object.keys(Gm),n=[...new Set([...e,...t])].sort(),r=new Set(n),s={},o={};for(const f of n){const y=Sw(f),g=qk(Ym(f));s[f]={id:f,name:Ym(f),folder:y,path:f,kind:g,url:Gm[f]||null,position:{x:0,y:0}},(o[y]||(o[y]=[])).push(f)}const i=new Set,a=[];for(const f of e){const y=gf[f];if(typeof y=="string")for(const g of Jk(y)){const x=Xk(f,g,r);if(!x||x===f)continue;const p=`${f}→${x}`;i.has(p)||(i.add(p),a.push({source:f,target:x}))}}const l={},u=Object.keys(o).sort();let c=0,d=0,h=0;return u.forEach((f,y)=>{const g=o[f].slice().sort(),x=Math.min(Zk,g.length),p=Math.ceil(g.length/x),m=x*Xm+(x-1)*Ra,v=p*Qm+(p-1)*Ra,w=m+2*za,S=Jm+v+2*za;l[f]={id:f,name:f==="/"?"project root":f,position:{x:c,y:d},size:{width:w,height:S}},g.forEach((N,I)=>{const C=I%x,R=Math.floor(I/x);s[N].position={x:c+za+C*(Xm+Ra),y:d+Jm+za+R*(Qm+Ra)}}),c+=w+Zm,h=Math.max(h,S),(y+1)%eE===0&&(c=0,d+=h+Zm,h=0)}),{files:s,folders:l,edges:a}}const nE={jsx:"#38bdf8",tsx:"#38bdf8",js:"#eab308",ts:"#eab308",json:"#f59e0b",css:"#ec4899",md:"#94a3b8",html:"#fb923c",svg:"#a78bfa",png:"#a78bfa",jpg:"#a78bfa",wav:"#22d3ee",mp3:"#22d3ee"},pt={W:168,H:38,GAP_Y:14},Qe={HEADER:34,PAD:18,MIN_W:220,MIN_H:110},It={W:16,GAP_Y:26},Fa={"file-auth":"#22d3ee","file-api":"#a78bfa","file-db":"#f472b6","file-ui":"#34d399"},rE={"file-auth":{id:"file-auth",name:"auth.service.ts",folderPath:"src/core/auth",position:{x:80,y:80}},"file-api":{id:"file-api",name:"api.client.ts",folderPath:"src/core/net",position:{x:620,y:60}},"file-db":{id:"file-db",name:"db.repository.ts",folderPath:"src/core/data",position:{x:360,y:520}},"file-ui":{id:"file-ui",name:"profile.view.tsx",folderPath:"src/ui/profile",position:{x:1040,y:380}}},sE={"fn-login":{id:"fn-login",name:"login()",fileId:"file-auth",position:{x:It.W,y:Qe.HEADER+8}},"fn-validate":{id:"fn-validate",name:"validateToken()",fileId:"file-auth",position:{x:It.W,y:Qe.HEADER+8+(pt.H+pt.GAP_Y)}},"fn-hash":{id:"fn-hash",name:"hashPassword()",fileId:"file-auth",position:{x:It.W,y:Qe.HEADER+8+2*(pt.H+pt.GAP_Y)}},"fn-fetchUser":{id:"fn-fetchUser",name:"fetchUser()",fileId:"file-api",position:{x:It.W,y:Qe.HEADER+8}},"fn-request":{id:"fn-request",name:"request()",fileId:"file-api",position:{x:It.W,y:Qe.HEADER+8+(pt.H+pt.GAP_Y)}},"fn-query":{id:"fn-query",name:"query()",fileId:"file-db",position:{x:It.W,y:Qe.HEADER+8}},"fn-connect":{id:"fn-connect",name:"connect()",fileId:"file-db",position:{x:It.W,y:Qe.HEADER+8+(pt.H+pt.GAP_Y)}},"fn-render":{id:"fn-render",name:"renderProfile()",fileId:"file-ui",position:{x:It.W,y:Qe.HEADER+8}}},oE=[{source:"fn-login",target:"fn-validate"},{source:"fn-login",target:"fn-hash"},{source:"fn-login",target:"fn-fetchUser"},{source:"fn-validate",target:"fn-query"},{source:"fn-fetchUser",target:"fn-request"},{source:"fn-fetchUser",target:"fn-query"},{source:"fn-request",target:"fn-validate"},{source:"fn-query",target:"fn-connect"},{source:"fn-render",target:"fn-fetchUser"},{source:"fn-render",target:"fn-login"}],iE={"sub-core":{id:"sub-core",name:"Core Domain",position:{x:20,y:20},size:{width:760,height:760},color:"#6366f1",description:"Authentication, networking and persistence live here."}},aE={"tune-cache":{id:"tune-cache",name:"CACHE_TTL",value:"300s",position:{x:1060,y:120}}},lE=[{id:"bm-auth",name:"Auth cluster",viewport:{x:40,y:20,zoom:1.1},focusObjectId:"fn-login",temporary:!1},{id:"bm-db",name:"Data layer",viewport:{x:-160,y:-360,zoom:1},focusObjectId:"fn-query",temporary:!1}],$c=tE(),ne=pk((e,t)=>({files:rE,functions:sE,calls:oE,subspaces:iE,tunables:aE,bookmarks:lE,viewMode:"project",projectFiles:$c.files,projectFolders:$c.folders,projectEdges:$c.edges,selectedProjectFileId:null,setViewMode:n=>e({viewMode:n,focusedNodeId:null,selectedProjectFileId:null}),selectProjectFile:n=>e({selectedProjectFileId:n}),clearProjectSelection:()=>e({selectedProjectFileId:null}),apiKey:typeof localStorage<"u"&&localStorage.getItem("anthropic_api_key")||"",aiModel:typeof localStorage<"u"&&localStorage.getItem("anthropic_model")||"claude-opus-4-8",summaries:{},setApiKey:n=>{try{localStorage.setItem("anthropic_api_key",n)}catch{}e({apiKey:n})},setAiModel:n=>{try{localStorage.setItem("anthropic_model",n)}catch{}e({aiModel:n})},setSummary:(n,r)=>e(s=>({summaries:{...s.summaries,[n]:r}})),editorFileId:null,fileEdits:{},openEditor:n=>e({editorFileId:n}),closeEditor:()=>e({editorFileId:null}),setFileEdit:(n,r)=>e(s=>({fileEdits:{...s.fileEdits,[n]:r}})),revertFileEdit:n=>e(r=>{const s={...r.fileEdits};return delete s[n],{fileEdits:s}}),focusedNodeId:null,focusedFileId:null,expandedSubspaceId:null,terminalFileId:null,searchQuery:"",pendingFocus:null,flowApi:null,setFlowApi:n=>e({flowApi:n}),setFocusedNode:n=>e({focusedNodeId:n}),clearFocus:()=>e({focusedNodeId:null,focusedFileId:null}),focusFile:n=>e({focusedFileId:n,pendingFocus:{id:n}}),requestFocus:n=>e({pendingFocus:{id:n}}),consumePendingFocus:()=>e({pendingFocus:null}),setExpandedSubspace:n=>e({expandedSubspaceId:n,pendingFocus:n?{id:n}:t().pendingFocus}),clearExpandedSubspace:()=>e({expandedSubspaceId:null}),openTerminal:n=>e({terminalFileId:n}),closeTerminal:()=>e({terminalFileId:null}),setSearchQuery:n=>e({searchQuery:n}),moveNode:(n,r)=>e(s=>s.functions[n]?{functions:{...s.functions,[n]:{...s.functions[n],position:r}}}:s.files[n]?{files:{...s.files,[n]:{...s.files[n],position:r}}}:s.subspaces[n]?{subspaces:{...s.subspaces,[n]:{...s.subspaces[n],position:r}}}:s.tunables[n]?{tunables:{...s.tunables,[n]:{...s.tunables[n],position:r}}}:s.projectFiles[n]?{projectFiles:{...s.projectFiles,[n]:{...s.projectFiles[n],position:r}}}:{}),setSubspaceColor:(n,r)=>e(s=>({subspaces:{...s.subspaces,[n]:{...s.subspaces[n],color:r}}})),setSubspaceDescription:(n,r)=>e(s=>({subspaces:{...s.subspaces,[n]:{...s.subspaces[n],description:r}}})),saveBookmark:(n,r)=>e(s=>({bookmarks:[...s.bookmarks,{id:`bm-${Date.now()}`,name:r||`View ${s.bookmarks.length+1}`,viewport:n,focusObjectId:s.focusedNodeId,temporary:!1}]})),pushTemporaryBookmark:n=>e(r=>({bookmarks:[...r.bookmarks,{id:`tmp-${Date.now()}`,name:"↩ Return point",viewport:n,focusObjectId:r.focusedNodeId,temporary:!0}]})),removeBookmark:n=>e(r=>({bookmarks:r.bookmarks.filter(s=>s.id!==n)})),createSubspace:n=>e(r=>{const s=`sub-${Date.now()}`;return{subspaces:{...r.subspaces,[s]:{id:s,name:"New Subspace",position:n,size:{width:360,height:280},color:"#10b981",description:""}}}}),createFile:(n,r)=>e(s=>{const o=`file-${Date.now()}`;return{files:{...s.files,[o]:{id:o,name:"untitled.ts",folderPath:r||"src",position:n}}}}),createFunction:(n,r)=>e(s=>{const o=`fn-${Date.now()}`,i=Object.values(s.functions).filter(l=>l.fileId===n),a=Qe.HEADER+8+i.length*(pt.H+pt.GAP_Y);return{functions:{...s.functions,[o]:{id:o,name:r||"newFn()",fileId:n,position:{x:It.W,y:a}}}}})}));function eg(e,t){const n=Object.values(e).filter(o=>o.fileId===t);if(n.length===0)return{width:Qe.MIN_W,height:Qe.MIN_H};let r=0,s=0;for(const o of n)r=Math.max(r,o.position.x+pt.W),s=Math.max(s,o.position.y+pt.H);return{width:Math.max(Qe.MIN_W,r+Qe.PAD+It.W),height:Math.max(Qe.MIN_H,s+Qe.PAD)}}function tg(e){const{focusedNodeId:t,functions:n,calls:r}=e,s=t&&n[t];if(!s)return null;const o=s.fileId,i=[],a=[],l=[],u=[];for(const c of r){if(c.target===t){const d=n[c.source];if(!d)continue;d.fileId===o?i.push(d.id):l.push({extFnId:d.id,extFileId:d.fileId})}if(c.source===t){const d=n[c.target];if(!d)continue;d.fileId===o?a.push(d.id):u.push({extFnId:d.id,extFileId:d.fileId})}}return{fileId:o,focusedNodeId:t,internalUpstream:i,internalDownstream:a,leftPorts:l,rightPorts:u}}function uE(e){const{selectedProjectFileId:t,projectEdges:n}=e;if(!t)return null;const r=[],s=[];for(const i of n)i.source===t&&r.push(i.target),i.target===t&&s.push(i.source);const o=new Set([t,...r,...s]);return{id:t,downstream:r,upstream:s,neighbors:o}}function cE(e,t){return t in e.fileEdits?e.fileEdits[t]:Wk[t]??""}function dE(){const t=ne(g=>g.viewMode)==="project",n=ne(g=>g.files),r=ne(g=>g.functions),s=ne(g=>g.focusedFileId),o=ne(g=>g.focusFile),i=ne(g=>g.openTerminal),a=ne(g=>g.projectFiles),l=ne(g=>g.selectedProjectFileId),u=ne(g=>g.selectProjectFile),c=ne(g=>g.requestFocus),d=t?a:n,h=k.useMemo(()=>{const g={};for(const x of Object.values(d)){const p=t?x.folder:x.folderPath;(g[p]||(g[p]=[])).push(x)}return Object.entries(g).sort(([x],[p])=>x.localeCompare(p))},[d,t]),f=g=>Object.values(r).filter(x=>x.fileId===g).length,y=g=>{t?(u(g.id),c(g.id)):o(g.id)};return E.jsxs("div",{className:"flex h-full flex-col bg-panel",children:[E.jsx(kw,{title:"File Explorer",badge:Object.keys(d).length}),E.jsx("div",{className:"thin-scroll flex-1 overflow-auto py-1",children:h.map(([g,x])=>E.jsxs("div",{className:"mb-1",children:[E.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 text-[11px] text-slate-500",children:[E.jsx("span",{children:"▾"}),E.jsx("span",{className:"truncate font-mono",children:g||"/"})]}),x.map(p=>{const m=t?l===p.id:s===p.id;return E.jsxs("button",{onClick:()=>y(p),onDoubleClick:()=>!t&&i(p.id),className:["group flex w-full items-center gap-2 py-1 pl-7 pr-3 text-left text-[13px] transition-colors",m?t?"bg-indigo-500/15 text-indigo-200":"bg-amber-500/15 text-amber-200":"text-slate-300 hover:bg-slate-800/60"].join(" "),children:[E.jsx("span",{className:m?t?"text-indigo-400":"text-amber-400":"text-slate-500",children:"▢"}),E.jsx("span",{className:"flex-1 truncate font-mono",children:p.name}),!t&&E.jsx("span",{className:"rounded bg-slate-800 px-1.5 text-[10px] text-slate-400 group-hover:bg-slate-700",children:f(p.id)})]},p.id)})]},g))})]})}function kw({title:e,badge:t,action:n}){return E.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 px-3 py-2",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("h2",{className:"text-[11px] font-semibold uppercase tracking-wider text-slate-400",children:e}),t!=null&&E.jsx("span",{className:"rounded-full bg-slate-800 px-1.5 text-[10px] text-slate-400",children:t})]}),n]})}function fE(){const e=ne(a=>a.bookmarks),t=ne(a=>a.functions),n=ne(a=>a.removeBookmark),r=ne(a=>a.setFocusedNode),s=ne(a=>a.requestFocus),o=ne(a=>a.pushTemporaryBookmark),i=a=>{const l=ne.getState().flowApi;l&&(o(l.getViewport()),l.setViewport(a.viewport,{duration:650})),a.focusObjectId&&(t[a.focusObjectId]&&r(a.focusObjectId),s(a.focusObjectId))};return E.jsxs("div",{className:"flex h-full flex-col bg-panel",children:[E.jsx(kw,{title:"Bookmark Manager",badge:e.length}),E.jsx("div",{className:"px-3 py-1.5 text-[10px] text-slate-500",children:"Double-click to fly to a saved view"}),E.jsxs("div",{className:"thin-scroll flex-1 overflow-auto pb-2",children:[e.length===0&&E.jsx("div",{className:"px-3 py-6 text-center text-xs text-slate-600",children:"No bookmarks yet — use “★ Save view”."}),e.map(a=>E.jsxs("div",{onDoubleClick:()=>i(a),className:["group mx-2 mb-1.5 cursor-pointer rounded-lg border px-3 py-2 transition-colors",a.temporary?"border-dashed border-slate-700 bg-slate-800/30":"border-slate-700 bg-slate-800/60 hover:border-indigo-500/70"].join(" "),children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:a.temporary?"text-slate-500":"text-indigo-400",children:a.temporary?"↩":"★"}),E.jsx("span",{className:"flex-1 truncate text-[13px] text-slate-200",children:a.name}),E.jsx("button",{onClick:l=>{l.stopPropagation(),n(a.id)},className:"text-slate-600 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100",title:"Delete bookmark",children:"✕"})]}),E.jsxs("div",{className:"mt-0.5 flex items-center gap-2 pl-6 text-[10px] text-slate-500",children:[E.jsxs("span",{className:"font-mono",children:["z ",a.viewport.zoom.toFixed(2)]}),a.focusObjectId&&t[a.focusObjectId]&&E.jsxs("span",{className:"truncate font-mono text-slate-400",children:["→ ",t[a.focusObjectId].name]})]})]},a.id))]})]})}function et(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,r;n<e.length;n++)(r=et(e[n]))!==""&&(t+=(t&&" ")+r);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}const{useDebugValue:hE}=L,{useSyncExternalStoreWithSelector:pE}=bw,mE=e=>e;function Ew(e,t=mE,n){const r=pE(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return hE(r),r}const ng=(e,t)=>{const n=gw(e),r=(s,o=t)=>Ew(n,s,o);return Object.assign(r,n),r},gE=(e,t)=>e?ng(e,t):ng;function qe(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,s]of e)if(!Object.is(s,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}var yE={value:()=>{}};function Ku(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Il(n)}function Il(e){this._=e}function vE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",s=n.indexOf(".");if(s>=0&&(r=n.slice(s+1),n=n.slice(0,s)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Il.prototype=Ku.prototype={constructor:Il,on:function(e,t){var n=this._,r=vE(e+"",n),s,o=-1,i=r.length;if(arguments.length<2){for(;++o<i;)if((s=(e=r[o]).type)&&(s=wE(n[s],e.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<i;)if(s=(e=r[o]).type)n[s]=rg(n[s],e.name,t);else if(t==null)for(s in n)n[s]=rg(n[s],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Il(e)},call:function(e,t){if((s=arguments.length-2)>0)for(var n=new Array(s),r=0,s,o;r<s;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,s=o.length;r<s;++r)o[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],s=0,o=r.length;s<o;++s)r[s].value.apply(t,n)}};function wE(e,t){for(var n=0,r=e.length,s;n<r;++n)if((s=e[n]).name===t)return s.value}function rg(e,t,n){for(var r=0,s=e.length;r<s;++r)if(e[r].name===t){e[r]=yE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var yf="http://www.w3.org/1999/xhtml";const sg={svg:"http://www.w3.org/2000/svg",xhtml:yf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function qu(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),sg.hasOwnProperty(t)?{space:sg[t],local:e}:e}function xE(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===yf&&t.documentElement.namespaceURI===yf?t.createElement(e):t.createElementNS(n,e)}}function bE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Nw(e){var t=qu(e);return(t.local?bE:xE)(t)}function _E(){}function $h(e){return e==null?_E:function(){return this.querySelector(e)}}function SE(e){typeof e!="function"&&(e=$h(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var o=t[s],i=o.length,a=r[s]=new Array(i),l,u,c=0;c<i;++c)(l=o[c])&&(u=e.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Ct(r,this._parents)}function kE(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function EE(){return[]}function Iw(e){return e==null?EE:function(){return this.querySelectorAll(e)}}function NE(e){return function(){return kE(e.apply(this,arguments))}}function IE(e){typeof e=="function"?e=NE(e):e=Iw(e);for(var t=this._groups,n=t.length,r=[],s=[],o=0;o<n;++o)for(var i=t[o],a=i.length,l,u=0;u<a;++u)(l=i[u])&&(r.push(e.call(l,l.__data__,u,i)),s.push(l));return new Ct(r,s)}function Tw(e){return function(){return this.matches(e)}}function jw(e){return function(t){return t.matches(e)}}var TE=Array.prototype.find;function jE(e){return function(){return TE.call(this.children,e)}}function ME(){return this.firstElementChild}function CE(e){return this.select(e==null?ME:jE(typeof e=="function"?e:jw(e)))}var PE=Array.prototype.filter;function AE(){return Array.from(this.children)}function RE(e){return function(){return PE.call(this.children,e)}}function zE(e){return this.selectAll(e==null?AE:RE(typeof e=="function"?e:jw(e)))}function FE(e){typeof e!="function"&&(e=Tw(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var o=t[s],i=o.length,a=r[s]=[],l,u=0;u<i;++u)(l=o[u])&&e.call(l,l.__data__,u,o)&&a.push(l);return new Ct(r,this._parents)}function Mw(e){return new Array(e.length)}function OE(){return new Ct(this._enter||this._groups.map(Mw),this._parents)}function uu(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}uu.prototype={constructor:uu,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function LE(e){return function(){return e}}function DE(e,t,n,r,s,o){for(var i=0,a,l=t.length,u=o.length;i<u;++i)(a=t[i])?(a.__data__=o[i],r[i]=a):n[i]=new uu(e,o[i]);for(;i<l;++i)(a=t[i])&&(s[i]=a)}function HE(e,t,n,r,s,o,i){var a,l,u=new Map,c=t.length,d=o.length,h=new Array(c),f;for(a=0;a<c;++a)(l=t[a])&&(h[a]=f=i.call(l,l.__data__,a,t)+"",u.has(f)?s[a]=l:u.set(f,l));for(a=0;a<d;++a)f=i.call(e,o[a],a,o)+"",(l=u.get(f))?(r[a]=l,l.__data__=o[a],u.delete(f)):n[a]=new uu(e,o[a]);for(a=0;a<c;++a)(l=t[a])&&u.get(h[a])===l&&(s[a]=l)}function $E(e){return e.__data__}function BE(e,t){if(!arguments.length)return Array.from(this,$E);var n=t?HE:DE,r=this._parents,s=this._groups;typeof e!="function"&&(e=LE(e));for(var o=s.length,i=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=r[u],d=s[u],h=d.length,f=UE(e.call(c,c&&c.__data__,u,r)),y=f.length,g=a[u]=new Array(y),x=i[u]=new Array(y),p=l[u]=new Array(h);n(c,d,g,x,p,f,t);for(var m=0,v=0,w,S;m<y;++m)if(w=g[m]){for(m>=v&&(v=m+1);!(S=x[v])&&++v<y;);w._next=S||null}}return i=new Ct(i,r),i._enter=a,i._exit=l,i}function UE(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function WE(){return new Ct(this._exit||this._groups.map(Mw),this._parents)}function VE(e,t,n){var r=this.enter(),s=this,o=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(s=t(s),s&&(s=s.selection())),n==null?o.remove():n(o),r&&s?r.merge(s).order():s}function KE(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,s=n.length,o=r.length,i=Math.min(s,o),a=new Array(s),l=0;l<i;++l)for(var u=n[l],c=r[l],d=u.length,h=a[l]=new Array(d),f,y=0;y<d;++y)(f=u[y]||c[y])&&(h[y]=f);for(;l<s;++l)a[l]=n[l];return new Ct(a,this._parents)}function qE(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],s=r.length-1,o=r[s],i;--s>=0;)(i=r[s])&&(o&&i.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(i,o),o=i);return this}function GE(e){e||(e=YE);function t(d,h){return d&&h?e(d.__data__,h.__data__):!d-!h}for(var n=this._groups,r=n.length,s=new Array(r),o=0;o<r;++o){for(var i=n[o],a=i.length,l=s[o]=new Array(a),u,c=0;c<a;++c)(u=i[c])&&(l[c]=u);l.sort(t)}return new Ct(s,this._parents).order()}function YE(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function XE(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function QE(){return Array.from(this)}function JE(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,o=r.length;s<o;++s){var i=r[s];if(i)return i}return null}function ZE(){let e=0;for(const t of this)++e;return e}function e3(){return!this.node()}function t3(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var s=t[n],o=0,i=s.length,a;o<i;++o)(a=s[o])&&e.call(a,a.__data__,o,s);return this}function n3(e){return function(){this.removeAttribute(e)}}function r3(e){return function(){this.removeAttributeNS(e.space,e.local)}}function s3(e,t){return function(){this.setAttribute(e,t)}}function o3(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function i3(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function a3(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function l3(e,t){var n=qu(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?r3:n3:typeof t=="function"?n.local?a3:i3:n.local?o3:s3)(n,t))}function Cw(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function u3(e){return function(){this.style.removeProperty(e)}}function c3(e,t,n){return function(){this.style.setProperty(e,t,n)}}function d3(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function f3(e,t,n){return arguments.length>1?this.each((t==null?u3:typeof t=="function"?d3:c3)(e,t,n??"")):uo(this.node(),e)}function uo(e,t){return e.style.getPropertyValue(t)||Cw(e).getComputedStyle(e,null).getPropertyValue(t)}function h3(e){return function(){delete this[e]}}function p3(e,t){return function(){this[e]=t}}function m3(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function g3(e,t){return arguments.length>1?this.each((t==null?h3:typeof t=="function"?m3:p3)(e,t)):this.node()[e]}function Pw(e){return e.trim().split(/^|\s+/)}function Bh(e){return e.classList||new Aw(e)}function Aw(e){this._node=e,this._names=Pw(e.getAttribute("class")||"")}Aw.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Rw(e,t){for(var n=Bh(e),r=-1,s=t.length;++r<s;)n.add(t[r])}function zw(e,t){for(var n=Bh(e),r=-1,s=t.length;++r<s;)n.remove(t[r])}function y3(e){return function(){Rw(this,e)}}function v3(e){return function(){zw(this,e)}}function w3(e,t){return function(){(t.apply(this,arguments)?Rw:zw)(this,e)}}function x3(e,t){var n=Pw(e+"");if(arguments.length<2){for(var r=Bh(this.node()),s=-1,o=n.length;++s<o;)if(!r.contains(n[s]))return!1;return!0}return this.each((typeof t=="function"?w3:t?y3:v3)(n,t))}function b3(){this.textContent=""}function _3(e){return function(){this.textContent=e}}function S3(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function k3(e){return arguments.length?this.each(e==null?b3:(typeof e=="function"?S3:_3)(e)):this.node().textContent}function E3(){this.innerHTML=""}function N3(e){return function(){this.innerHTML=e}}function I3(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function T3(e){return arguments.length?this.each(e==null?E3:(typeof e=="function"?I3:N3)(e)):this.node().innerHTML}function j3(){this.nextSibling&&this.parentNode.appendChild(this)}function M3(){return this.each(j3)}function C3(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function P3(){return this.each(C3)}function A3(e){var t=typeof e=="function"?e:Nw(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function R3(){return null}function z3(e,t){var n=typeof e=="function"?e:Nw(e),r=t==null?R3:typeof t=="function"?t:$h(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function F3(){var e=this.parentNode;e&&e.removeChild(this)}function O3(){return this.each(F3)}function L3(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function D3(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function H3(e){return this.select(e?D3:L3)}function $3(e){return arguments.length?this.property("__data__",e):this.node().__data__}function B3(e){return function(t){e.call(this,t,this.__data__)}}function U3(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function W3(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,s=t.length,o;n<s;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function V3(e,t,n){return function(){var r=this.__on,s,o=B3(t);if(r){for(var i=0,a=r.length;i<a;++i)if((s=r[i]).type===e.type&&s.name===e.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=o,s.options=n),s.value=t;return}}this.addEventListener(e.type,o,n),s={type:e.type,name:e.name,value:t,listener:o,options:n},r?r.push(s):this.__on=[s]}}function K3(e,t,n){var r=U3(e+""),s,o=r.length,i;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(s=0,c=a[l];s<o;++s)if((i=r[s]).type===c.type&&i.name===c.name)return c.value}return}for(a=t?V3:W3,s=0;s<o;++s)this.each(a(r[s],t,n));return this}function Fw(e,t,n){var r=Cw(e),s=r.CustomEvent;typeof s=="function"?s=new s(t,n):(s=r.document.createEvent("Event"),n?(s.initEvent(t,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(t,!1,!1)),e.dispatchEvent(s)}function q3(e,t){return function(){return Fw(this,e,t)}}function G3(e,t){return function(){return Fw(this,e,t.apply(this,arguments))}}function Y3(e,t){return this.each((typeof t=="function"?G3:q3)(e,t))}function*X3(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,o=r.length,i;s<o;++s)(i=r[s])&&(yield i)}var Ow=[null];function Ct(e,t){this._groups=e,this._parents=t}function ia(){return new Ct([[document.documentElement]],Ow)}function Q3(){return this}Ct.prototype=ia.prototype={constructor:Ct,select:SE,selectAll:IE,selectChild:CE,selectChildren:zE,filter:FE,data:BE,enter:OE,exit:WE,join:VE,merge:KE,selection:Q3,order:qE,sort:GE,call:XE,nodes:QE,node:JE,size:ZE,empty:e3,each:t3,attr:l3,style:f3,property:g3,classed:x3,text:k3,html:T3,raise:M3,lower:P3,append:A3,insert:z3,remove:O3,clone:H3,datum:$3,on:K3,dispatch:Y3,[Symbol.iterator]:X3};function Dt(e){return typeof e=="string"?new Ct([[document.querySelector(e)]],[document.documentElement]):new Ct([[e]],Ow)}function J3(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Zt(e,t){if(e=J3(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var s=t.getBoundingClientRect();return[e.clientX-s.left-t.clientLeft,e.clientY-s.top-t.clientTop]}}return[e.pageX,e.pageY]}const Z3={passive:!1},Wi={capture:!0,passive:!1};function Bc(e){e.stopImmediatePropagation()}function Xs(e){e.preventDefault(),e.stopImmediatePropagation()}function Lw(e){var t=e.document.documentElement,n=Dt(e).on("dragstart.drag",Xs,Wi);"onselectstart"in t?n.on("selectstart.drag",Xs,Wi):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Dw(e,t){var n=e.document.documentElement,r=Dt(e).on("dragstart.drag",null);t&&(r.on("click.drag",Xs,Wi),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Oa=e=>()=>e;function vf(e,{sourceEvent:t,subject:n,target:r,identifier:s,active:o,x:i,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}vf.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function eN(e){return!e.ctrlKey&&!e.button}function tN(){return this.parentNode}function nN(e,t){return t??{x:e.x,y:e.y}}function rN(){return navigator.maxTouchPoints||"ontouchstart"in this}function sN(){var e=eN,t=tN,n=nN,r=rN,s={},o=Ku("start","drag","end"),i=0,a,l,u,c,d=0;function h(w){w.on("mousedown.drag",f).filter(r).on("touchstart.drag",x).on("touchmove.drag",p,Z3).on("touchend.drag touchcancel.drag",m).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(w,S){if(!(c||!e.call(this,w,S))){var N=v(this,t.call(this,w,S),w,S,"mouse");N&&(Dt(w.view).on("mousemove.drag",y,Wi).on("mouseup.drag",g,Wi),Lw(w.view),Bc(w),u=!1,a=w.clientX,l=w.clientY,N("start",w))}}function y(w){if(Xs(w),!u){var S=w.clientX-a,N=w.clientY-l;u=S*S+N*N>d}s.mouse("drag",w)}function g(w){Dt(w.view).on("mousemove.drag mouseup.drag",null),Dw(w.view,u),Xs(w),s.mouse("end",w)}function x(w,S){if(e.call(this,w,S)){var N=w.changedTouches,I=t.call(this,w,S),C=N.length,R,P;for(R=0;R<C;++R)(P=v(this,I,w,S,N[R].identifier,N[R]))&&(Bc(w),P("start",w,N[R]))}}function p(w){var S=w.changedTouches,N=S.length,I,C;for(I=0;I<N;++I)(C=s[S[I].identifier])&&(Xs(w),C("drag",w,S[I]))}function m(w){var S=w.changedTouches,N=S.length,I,C;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),I=0;I<N;++I)(C=s[S[I].identifier])&&(Bc(w),C("end",w,S[I]))}function v(w,S,N,I,C,R){var P=o.copy(),O=Zt(R||N,S),V,K,_;if((_=n.call(w,new vf("beforestart",{sourceEvent:N,target:h,identifier:C,active:i,x:O[0],y:O[1],dx:0,dy:0,dispatch:P}),I))!=null)return V=_.x-O[0]||0,K=_.y-O[1]||0,function A(M,B,z){var T=O,F;switch(M){case"start":s[C]=A,F=i++;break;case"end":delete s[C],--i;case"drag":O=Zt(z||B,S),F=i;break}P.call(M,w,new vf(M,{sourceEvent:B,subject:_,target:h,identifier:C,active:F,x:O[0]+V,y:O[1]+K,dx:O[0]-T[0],dy:O[1]-T[1],dispatch:P}),I)}}return h.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Oa(!!w),h):e},h.container=function(w){return arguments.length?(t=typeof w=="function"?w:Oa(w),h):t},h.subject=function(w){return arguments.length?(n=typeof w=="function"?w:Oa(w),h):n},h.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:Oa(!!w),h):r},h.on=function(){var w=o.on.apply(o,arguments);return w===o?h:w},h.clickDistance=function(w){return arguments.length?(d=(w=+w)*w,h):Math.sqrt(d)},h}function Uh(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Hw(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function aa(){}var Vi=.7,cu=1/Vi,Qs="\\s*([+-]?\\d+)\\s*",Ki="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",bn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",oN=/^#([0-9a-f]{3,8})$/,iN=new RegExp(`^rgb\\(${Qs},${Qs},${Qs}\\)$`),aN=new RegExp(`^rgb\\(${bn},${bn},${bn}\\)$`),lN=new RegExp(`^rgba\\(${Qs},${Qs},${Qs},${Ki}\\)$`),uN=new RegExp(`^rgba\\(${bn},${bn},${bn},${Ki}\\)$`),cN=new RegExp(`^hsl\\(${Ki},${bn},${bn}\\)$`),dN=new RegExp(`^hsla\\(${Ki},${bn},${bn},${Ki}\\)$`),og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Uh(aa,qi,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:ig,formatHex:ig,formatHex8:fN,formatHsl:hN,formatRgb:ag,toString:ag});function ig(){return this.rgb().formatHex()}function fN(){return this.rgb().formatHex8()}function hN(){return $w(this).formatHsl()}function ag(){return this.rgb().formatRgb()}function qi(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=oN.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?lg(t):n===3?new vt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?La(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?La(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=iN.exec(e))?new vt(t[1],t[2],t[3],1):(t=aN.exec(e))?new vt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=lN.exec(e))?La(t[1],t[2],t[3],t[4]):(t=uN.exec(e))?La(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=cN.exec(e))?dg(t[1],t[2]/100,t[3]/100,1):(t=dN.exec(e))?dg(t[1],t[2]/100,t[3]/100,t[4]):og.hasOwnProperty(e)?lg(og[e]):e==="transparent"?new vt(NaN,NaN,NaN,0):null}function lg(e){return new vt(e>>16&255,e>>8&255,e&255,1)}function La(e,t,n,r){return r<=0&&(e=t=n=NaN),new vt(e,t,n,r)}function pN(e){return e instanceof aa||(e=qi(e)),e?(e=e.rgb(),new vt(e.r,e.g,e.b,e.opacity)):new vt}function wf(e,t,n,r){return arguments.length===1?pN(e):new vt(e,t,n,r??1)}function vt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Uh(vt,wf,Hw(aa,{brighter(e){return e=e==null?cu:Math.pow(cu,e),new vt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Vi:Math.pow(Vi,e),new vt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new vt(Gr(this.r),Gr(this.g),Gr(this.b),du(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ug,formatHex:ug,formatHex8:mN,formatRgb:cg,toString:cg}));function ug(){return`#${Ur(this.r)}${Ur(this.g)}${Ur(this.b)}`}function mN(){return`#${Ur(this.r)}${Ur(this.g)}${Ur(this.b)}${Ur((isNaN(this.opacity)?1:this.opacity)*255)}`}function cg(){const e=du(this.opacity);return`${e===1?"rgb(":"rgba("}${Gr(this.r)}, ${Gr(this.g)}, ${Gr(this.b)}${e===1?")":`, ${e})`}`}function du(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Gr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Ur(e){return e=Gr(e),(e<16?"0":"")+e.toString(16)}function dg(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new tn(e,t,n,r)}function $w(e){if(e instanceof tn)return new tn(e.h,e.s,e.l,e.opacity);if(e instanceof aa||(e=qi(e)),!e)return new tn;if(e instanceof tn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,s=Math.min(t,n,r),o=Math.max(t,n,r),i=NaN,a=o-s,l=(o+s)/2;return a?(t===o?i=(n-r)/a+(n<r)*6:n===o?i=(r-t)/a+2:i=(t-n)/a+4,a/=l<.5?o+s:2-o-s,i*=60):a=l>0&&l<1?0:i,new tn(i,a,l,e.opacity)}function gN(e,t,n,r){return arguments.length===1?$w(e):new tn(e,t,n,r??1)}function tn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Uh(tn,gN,Hw(aa,{brighter(e){return e=e==null?cu:Math.pow(cu,e),new tn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Vi:Math.pow(Vi,e),new tn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,s=2*n-r;return new vt(Uc(e>=240?e-240:e+120,s,r),Uc(e,s,r),Uc(e<120?e+240:e-120,s,r),this.opacity)},clamp(){return new tn(fg(this.h),Da(this.s),Da(this.l),du(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=du(this.opacity);return`${e===1?"hsl(":"hsla("}${fg(this.h)}, ${Da(this.s)*100}%, ${Da(this.l)*100}%${e===1?")":`, ${e})`}`}}));function fg(e){return e=(e||0)%360,e<0?e+360:e}function Da(e){return Math.max(0,Math.min(1,e||0))}function Uc(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Bw=e=>()=>e;function yN(e,t){return function(n){return e+n*t}}function vN(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function wN(e){return(e=+e)==1?Uw:function(t,n){return n-t?vN(t,n,e):Bw(isNaN(t)?n:t)}}function Uw(e,t){var n=t-e;return n?yN(e,n):Bw(isNaN(e)?t:e)}const hg=function e(t){var n=wN(t);function r(s,o){var i=n((s=wf(s)).r,(o=wf(o)).r),a=n(s.g,o.g),l=n(s.b,o.b),u=Uw(s.opacity,o.opacity);return function(c){return s.r=i(c),s.g=a(c),s.b=l(c),s.opacity=u(c),s+""}}return r.gamma=e,r}(1);function tr(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var xf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Wc=new RegExp(xf.source,"g");function xN(e){return function(){return e}}function bN(e){return function(t){return e(t)+""}}function _N(e,t){var n=xf.lastIndex=Wc.lastIndex=0,r,s,o,i=-1,a=[],l=[];for(e=e+"",t=t+"";(r=xf.exec(e))&&(s=Wc.exec(t));)(o=s.index)>n&&(o=t.slice(n,o),a[i]?a[i]+=o:a[++i]=o),(r=r[0])===(s=s[0])?a[i]?a[i]+=s:a[++i]=s:(a[++i]=null,l.push({i,x:tr(r,s)})),n=Wc.lastIndex;return n<t.length&&(o=t.slice(n),a[i]?a[i]+=o:a[++i]=o),a.length<2?l[0]?bN(l[0].x):xN(t):(t=l.length,function(u){for(var c=0,d;c<t;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}var pg=180/Math.PI,bf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ww(e,t,n,r,s,o){var i,a,l;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(a=Math.sqrt(n*n+r*r))&&(n/=a,r/=a,l/=a),e*r<t*n&&(e=-e,t=-t,l=-l,i=-i),{translateX:s,translateY:o,rotate:Math.atan2(t,e)*pg,skewX:Math.atan(l)*pg,scaleX:i,scaleY:a}}var Ha;function SN(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?bf:Ww(t.a,t.b,t.c,t.d,t.e,t.f)}function kN(e){return e==null||(Ha||(Ha=document.createElementNS("http://www.w3.org/2000/svg","g")),Ha.setAttribute("transform",e),!(e=Ha.transform.baseVal.consolidate()))?bf:(e=e.matrix,Ww(e.a,e.b,e.c,e.d,e.e,e.f))}function Vw(e,t,n,r){function s(u){return u.length?u.pop()+" ":""}function o(u,c,d,h,f,y){if(u!==d||c!==h){var g=f.push("translate(",null,t,null,n);y.push({i:g-4,x:tr(u,d)},{i:g-2,x:tr(c,h)})}else(d||h)&&f.push("translate("+d+t+h+n)}function i(u,c,d,h){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),h.push({i:d.push(s(d)+"rotate(",null,r)-2,x:tr(u,c)})):c&&d.push(s(d)+"rotate("+c+r)}function a(u,c,d,h){u!==c?h.push({i:d.push(s(d)+"skewX(",null,r)-2,x:tr(u,c)}):c&&d.push(s(d)+"skewX("+c+r)}function l(u,c,d,h,f,y){if(u!==d||c!==h){var g=f.push(s(f)+"scale(",null,",",null,")");y.push({i:g-4,x:tr(u,d)},{i:g-2,x:tr(c,h)})}else(d!==1||h!==1)&&f.push(s(f)+"scale("+d+","+h+")")}return function(u,c){var d=[],h=[];return u=e(u),c=e(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,h),i(u.rotate,c.rotate,d,h),a(u.skewX,c.skewX,d,h),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,h),u=c=null,function(f){for(var y=-1,g=h.length,x;++y<g;)d[(x=h[y]).i]=x.x(f);return d.join("")}}}var EN=Vw(SN,"px, ","px)","deg)"),NN=Vw(kN,", ",")",")"),IN=1e-12;function mg(e){return((e=Math.exp(e))+1/e)/2}function TN(e){return((e=Math.exp(e))-1/e)/2}function jN(e){return((e=Math.exp(2*e))-1)/(e+1)}const MN=function e(t,n,r){function s(o,i){var a=o[0],l=o[1],u=o[2],c=i[0],d=i[1],h=i[2],f=c-a,y=d-l,g=f*f+y*y,x,p;if(g<IN)p=Math.log(h/u)/t,x=function(I){return[a+I*f,l+I*y,u*Math.exp(t*I*p)]};else{var m=Math.sqrt(g),v=(h*h-u*u+r*g)/(2*u*n*m),w=(h*h-u*u-r*g)/(2*h*n*m),S=Math.log(Math.sqrt(v*v+1)-v),N=Math.log(Math.sqrt(w*w+1)-w);p=(N-S)/t,x=function(I){var C=I*p,R=mg(S),P=u/(n*m)*(R*jN(t*C+S)-TN(S));return[a+P*f,l+P*y,u*R/mg(t*C+S)]}}return x.duration=p*1e3*t/Math.SQRT2,x}return s.rho=function(o){var i=Math.max(.001,+o),a=i*i,l=a*a;return e(i,a,l)},s}(Math.SQRT2,2,4);var co=0,oi=0,jo=0,Kw=1e3,fu,ii,hu=0,ss=0,Gu=0,Gi=typeof performance=="object"&&performance.now?performance:Date,qw=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Wh(){return ss||(qw(CN),ss=Gi.now()+Gu)}function CN(){ss=0}function pu(){this._call=this._time=this._next=null}pu.prototype=Gw.prototype={constructor:pu,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Wh():+n)+(t==null?0:+t),!this._next&&ii!==this&&(ii?ii._next=this:fu=this,ii=this),this._call=e,this._time=n,_f()},stop:function(){this._call&&(this._call=null,this._time=1/0,_f())}};function Gw(e,t,n){var r=new pu;return r.restart(e,t,n),r}function PN(){Wh(),++co;for(var e=fu,t;e;)(t=ss-e._time)>=0&&e._call.call(void 0,t),e=e._next;--co}function gg(){ss=(hu=Gi.now())+Gu,co=oi=0;try{PN()}finally{co=0,RN(),ss=0}}function AN(){var e=Gi.now(),t=e-hu;t>Kw&&(Gu-=t,hu=e)}function RN(){for(var e,t=fu,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:fu=n);ii=e,_f(r)}function _f(e){if(!co){oi&&(oi=clearTimeout(oi));var t=e-ss;t>24?(e<1/0&&(oi=setTimeout(gg,e-Gi.now()-Gu)),jo&&(jo=clearInterval(jo))):(jo||(hu=Gi.now(),jo=setInterval(AN,Kw)),co=1,qw(gg))}}function yg(e,t,n){var r=new pu;return t=t==null?0:+t,r.restart(s=>{r.stop(),e(s+t)},t,n),r}var zN=Ku("start","end","cancel","interrupt"),FN=[],Yw=0,vg=1,Sf=2,Tl=3,wg=4,kf=5,jl=6;function Yu(e,t,n,r,s,o){var i=e.__transition;if(!i)e.__transition={};else if(n in i)return;ON(e,n,{name:t,index:r,group:s,on:zN,tween:FN,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Yw})}function Vh(e,t){var n=un(e,t);if(n.state>Yw)throw new Error("too late; already scheduled");return n}function Sn(e,t){var n=un(e,t);if(n.state>Tl)throw new Error("too late; already running");return n}function un(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function ON(e,t,n){var r=e.__transition,s;r[t]=n,n.timer=Gw(o,0,n.time);function o(u){n.state=vg,n.timer.restart(i,n.delay,n.time),n.delay<=u&&i(u-n.delay)}function i(u){var c,d,h,f;if(n.state!==vg)return l();for(c in r)if(f=r[c],f.name===n.name){if(f.state===Tl)return yg(i);f.state===wg?(f.state=jl,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete r[c]):+c<t&&(f.state=jl,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete r[c])}if(yg(function(){n.state===Tl&&(n.state=wg,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=Sf,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Sf){for(n.state=Tl,s=new Array(h=n.tween.length),c=0,d=-1;c<h;++c)(f=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(s[++d]=f);s.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=kf,1),d=-1,h=s.length;++d<h;)s[d].call(e,c);n.state===kf&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=jl,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function Ml(e,t){var n=e.__transition,r,s,o=!0,i;if(n){t=t==null?null:t+"";for(i in n){if((r=n[i]).name!==t){o=!1;continue}s=r.state>Sf&&r.state<kf,r.state=jl,r.timer.stop(),r.on.call(s?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[i]}o&&delete e.__transition}}function LN(e){return this.each(function(){Ml(this,e)})}function DN(e,t){var n,r;return function(){var s=Sn(this,e),o=s.tween;if(o!==n){r=n=o;for(var i=0,a=r.length;i<a;++i)if(r[i].name===t){r=r.slice(),r.splice(i,1);break}}s.tween=r}}function HN(e,t,n){var r,s;if(typeof n!="function")throw new Error;return function(){var o=Sn(this,e),i=o.tween;if(i!==r){s=(r=i).slice();for(var a={name:t,value:n},l=0,u=s.length;l<u;++l)if(s[l].name===t){s[l]=a;break}l===u&&s.push(a)}o.tween=s}}function $N(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=un(this.node(),n).tween,s=0,o=r.length,i;s<o;++s)if((i=r[s]).name===e)return i.value;return null}return this.each((t==null?DN:HN)(n,e,t))}function Kh(e,t,n){var r=e._id;return e.each(function(){var s=Sn(this,r);(s.value||(s.value={}))[t]=n.apply(this,arguments)}),function(s){return un(s,r).value[t]}}function Xw(e,t){var n;return(typeof t=="number"?tr:t instanceof qi?hg:(n=qi(t))?(t=n,hg):_N)(e,t)}function BN(e){return function(){this.removeAttribute(e)}}function UN(e){return function(){this.removeAttributeNS(e.space,e.local)}}function WN(e,t,n){var r,s=n+"",o;return function(){var i=this.getAttribute(e);return i===s?null:i===r?o:o=t(r=i,n)}}function VN(e,t,n){var r,s=n+"",o;return function(){var i=this.getAttributeNS(e.space,e.local);return i===s?null:i===r?o:o=t(r=i,n)}}function KN(e,t,n){var r,s,o;return function(){var i,a=n(this),l;return a==null?void this.removeAttribute(e):(i=this.getAttribute(e),l=a+"",i===l?null:i===r&&l===s?o:(s=l,o=t(r=i,a)))}}function qN(e,t,n){var r,s,o;return function(){var i,a=n(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),l=a+"",i===l?null:i===r&&l===s?o:(s=l,o=t(r=i,a)))}}function GN(e,t){var n=qu(e),r=n==="transform"?NN:Xw;return this.attrTween(e,typeof t=="function"?(n.local?qN:KN)(n,r,Kh(this,"attr."+e,t)):t==null?(n.local?UN:BN)(n):(n.local?VN:WN)(n,r,t))}function YN(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function XN(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function QN(e,t){var n,r;function s(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&XN(e,o)),n}return s._value=t,s}function JN(e,t){var n,r;function s(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&YN(e,o)),n}return s._value=t,s}function ZN(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=qu(e);return this.tween(n,(r.local?QN:JN)(r,t))}function eI(e,t){return function(){Vh(this,e).delay=+t.apply(this,arguments)}}function tI(e,t){return t=+t,function(){Vh(this,e).delay=t}}function nI(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?eI:tI)(t,e)):un(this.node(),t).delay}function rI(e,t){return function(){Sn(this,e).duration=+t.apply(this,arguments)}}function sI(e,t){return t=+t,function(){Sn(this,e).duration=t}}function oI(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?rI:sI)(t,e)):un(this.node(),t).duration}function iI(e,t){if(typeof t!="function")throw new Error;return function(){Sn(this,e).ease=t}}function aI(e){var t=this._id;return arguments.length?this.each(iI(t,e)):un(this.node(),t).ease}function lI(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Sn(this,e).ease=n}}function uI(e){if(typeof e!="function")throw new Error;return this.each(lI(this._id,e))}function cI(e){typeof e!="function"&&(e=Tw(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var o=t[s],i=o.length,a=r[s]=[],l,u=0;u<i;++u)(l=o[u])&&e.call(l,l.__data__,u,o)&&a.push(l);return new Bn(r,this._parents,this._name,this._id)}function dI(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,s=n.length,o=Math.min(r,s),i=new Array(r),a=0;a<o;++a)for(var l=t[a],u=n[a],c=l.length,d=i[a]=new Array(c),h,f=0;f<c;++f)(h=l[f]||u[f])&&(d[f]=h);for(;a<r;++a)i[a]=t[a];return new Bn(i,this._parents,this._name,this._id)}function fI(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function hI(e,t,n){var r,s,o=fI(t)?Vh:Sn;return function(){var i=o(this,e),a=i.on;a!==r&&(s=(r=a).copy()).on(t,n),i.on=s}}function pI(e,t){var n=this._id;return arguments.length<2?un(this.node(),n).on.on(e):this.each(hI(n,e,t))}function mI(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function gI(){return this.on("end.remove",mI(this._id))}function yI(e){var t=this._name,n=this._id;typeof e!="function"&&(e=$h(e));for(var r=this._groups,s=r.length,o=new Array(s),i=0;i<s;++i)for(var a=r[i],l=a.length,u=o[i]=new Array(l),c,d,h=0;h<l;++h)(c=a[h])&&(d=e.call(c,c.__data__,h,a))&&("__data__"in c&&(d.__data__=c.__data__),u[h]=d,Yu(u[h],t,n,h,u,un(c,n)));return new Bn(o,this._parents,t,n)}function vI(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Iw(e));for(var r=this._groups,s=r.length,o=[],i=[],a=0;a<s;++a)for(var l=r[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var h=e.call(c,c.__data__,d,l),f,y=un(c,n),g=0,x=h.length;g<x;++g)(f=h[g])&&Yu(f,t,n,g,h,y);o.push(h),i.push(c)}return new Bn(o,i,t,n)}var wI=ia.prototype.constructor;function xI(){return new wI(this._groups,this._parents)}function bI(e,t){var n,r,s;return function(){var o=uo(this,e),i=(this.style.removeProperty(e),uo(this,e));return o===i?null:o===n&&i===r?s:s=t(n=o,r=i)}}function Qw(e){return function(){this.style.removeProperty(e)}}function _I(e,t,n){var r,s=n+"",o;return function(){var i=uo(this,e);return i===s?null:i===r?o:o=t(r=i,n)}}function SI(e,t,n){var r,s,o;return function(){var i=uo(this,e),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),uo(this,e))),i===l?null:i===r&&l===s?o:(s=l,o=t(r=i,a))}}function kI(e,t){var n,r,s,o="style."+t,i="end."+o,a;return function(){var l=Sn(this,e),u=l.on,c=l.value[o]==null?a||(a=Qw(t)):void 0;(u!==n||s!==c)&&(r=(n=u).copy()).on(i,s=c),l.on=r}}function EI(e,t,n){var r=(e+="")=="transform"?EN:Xw;return t==null?this.styleTween(e,bI(e,r)).on("end.style."+e,Qw(e)):typeof t=="function"?this.styleTween(e,SI(e,r,Kh(this,"style."+e,t))).each(kI(this._id,e)):this.styleTween(e,_I(e,r,t),n).on("end.style."+e,null)}function NI(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function II(e,t,n){var r,s;function o(){var i=t.apply(this,arguments);return i!==s&&(r=(s=i)&&NI(e,i,n)),r}return o._value=t,o}function TI(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,II(e,t,n??""))}function jI(e){return function(){this.textContent=e}}function MI(e){return function(){var t=e(this);this.textContent=t??""}}function CI(e){return this.tween("text",typeof e=="function"?MI(Kh(this,"text",e)):jI(e==null?"":e+""))}function PI(e){return function(t){this.textContent=e.call(this,t)}}function AI(e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&PI(s)),t}return r._value=e,r}function RI(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,AI(e))}function zI(){for(var e=this._name,t=this._id,n=Jw(),r=this._groups,s=r.length,o=0;o<s;++o)for(var i=r[o],a=i.length,l,u=0;u<a;++u)if(l=i[u]){var c=un(l,t);Yu(l,e,n,u,i,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Bn(r,this._parents,e,n)}function FI(){var e,t,n=this,r=n._id,s=n.size();return new Promise(function(o,i){var a={value:i},l={value:function(){--s===0&&o()}};n.each(function(){var u=Sn(this,r),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),u.on=t}),s===0&&o()})}var OI=0;function Bn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Jw(){return++OI}var In=ia.prototype;Bn.prototype={constructor:Bn,select:yI,selectAll:vI,selectChild:In.selectChild,selectChildren:In.selectChildren,filter:cI,merge:dI,selection:xI,transition:zI,call:In.call,nodes:In.nodes,node:In.node,size:In.size,empty:In.empty,each:In.each,on:pI,attr:GN,attrTween:ZN,style:EI,styleTween:TI,text:CI,textTween:RI,remove:gI,tween:$N,delay:nI,duration:oI,ease:aI,easeVarying:uI,end:FI,[Symbol.iterator]:In[Symbol.iterator]};function LI(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var DI={time:null,delay:0,duration:250,ease:LI};function HI(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function $I(e){var t,n;e instanceof Bn?(t=e._id,e=e._name):(t=Jw(),(n=DI).time=Wh(),e=e==null?null:e+"");for(var r=this._groups,s=r.length,o=0;o<s;++o)for(var i=r[o],a=i.length,l,u=0;u<a;++u)(l=i[u])&&Yu(l,e,t,u,i,n||HI(l,t));return new Bn(r,this._parents,e,t)}ia.prototype.interrupt=LN;ia.prototype.transition=$I;const $a=e=>()=>e;function BI(e,{sourceEvent:t,target:n,transform:r,dispatch:s}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:s}})}function zn(e,t,n){this.k=e,this.x=t,this.y=n}zn.prototype={constructor:zn,scale:function(e){return e===1?this:new zn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new zn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var On=new zn(1,0,0);zn.prototype;function Vc(e){e.stopImmediatePropagation()}function Mo(e){e.preventDefault(),e.stopImmediatePropagation()}function UI(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function WI(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function xg(){return this.__zoom||On}function VI(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function KI(){return navigator.maxTouchPoints||"ontouchstart"in this}function qI(e,t,n){var r=e.invertX(t[0][0])-n[0][0],s=e.invertX(t[1][0])-n[1][0],o=e.invertY(t[0][1])-n[0][1],i=e.invertY(t[1][1])-n[1][1];return e.translate(s>r?(r+s)/2:Math.min(0,r)||Math.max(0,s),i>o?(o+i)/2:Math.min(0,o)||Math.max(0,i))}function Zw(){var e=UI,t=WI,n=qI,r=VI,s=KI,o=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],a=250,l=MN,u=Ku("start","zoom","end"),c,d,h,f=500,y=150,g=0,x=10;function p(_){_.property("__zoom",xg).on("wheel.zoom",C,{passive:!1}).on("mousedown.zoom",R).on("dblclick.zoom",P).filter(s).on("touchstart.zoom",O).on("touchmove.zoom",V).on("touchend.zoom touchcancel.zoom",K).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(_,A,M,B){var z=_.selection?_.selection():_;z.property("__zoom",xg),_!==z?S(_,A,M,B):z.interrupt().each(function(){N(this,arguments).event(B).start().zoom(null,typeof A=="function"?A.apply(this,arguments):A).end()})},p.scaleBy=function(_,A,M,B){p.scaleTo(_,function(){var z=this.__zoom.k,T=typeof A=="function"?A.apply(this,arguments):A;return z*T},M,B)},p.scaleTo=function(_,A,M,B){p.transform(_,function(){var z=t.apply(this,arguments),T=this.__zoom,F=M==null?w(z):typeof M=="function"?M.apply(this,arguments):M,$=T.invert(F),U=typeof A=="function"?A.apply(this,arguments):A;return n(v(m(T,U),F,$),z,i)},M,B)},p.translateBy=function(_,A,M,B){p.transform(_,function(){return n(this.__zoom.translate(typeof A=="function"?A.apply(this,arguments):A,typeof M=="function"?M.apply(this,arguments):M),t.apply(this,arguments),i)},null,B)},p.translateTo=function(_,A,M,B,z){p.transform(_,function(){var T=t.apply(this,arguments),F=this.__zoom,$=B==null?w(T):typeof B=="function"?B.apply(this,arguments):B;return n(On.translate($[0],$[1]).scale(F.k).translate(typeof A=="function"?-A.apply(this,arguments):-A,typeof M=="function"?-M.apply(this,arguments):-M),T,i)},B,z)};function m(_,A){return A=Math.max(o[0],Math.min(o[1],A)),A===_.k?_:new zn(A,_.x,_.y)}function v(_,A,M){var B=A[0]-M[0]*_.k,z=A[1]-M[1]*_.k;return B===_.x&&z===_.y?_:new zn(_.k,B,z)}function w(_){return[(+_[0][0]+ +_[1][0])/2,(+_[0][1]+ +_[1][1])/2]}function S(_,A,M,B){_.on("start.zoom",function(){N(this,arguments).event(B).start()}).on("interrupt.zoom end.zoom",function(){N(this,arguments).event(B).end()}).tween("zoom",function(){var z=this,T=arguments,F=N(z,T).event(B),$=t.apply(z,T),U=M==null?w($):typeof M=="function"?M.apply(z,T):M,D=Math.max($[1][0]-$[0][0],$[1][1]-$[0][1]),W=z.__zoom,Y=typeof A=="function"?A.apply(z,T):A,X=l(W.invert(U).concat(D/W.k),Y.invert(U).concat(D/Y.k));return function(G){if(G===1)G=Y;else{var te=X(G),j=D/te[2];G=new zn(j,U[0]-te[0]*j,U[1]-te[1]*j)}F.zoom(null,G)}})}function N(_,A,M){return!M&&_.__zooming||new I(_,A)}function I(_,A){this.that=_,this.args=A,this.active=0,this.sourceEvent=null,this.extent=t.apply(_,A),this.taps=0}I.prototype={event:function(_){return _&&(this.sourceEvent=_),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(_,A){return this.mouse&&_!=="mouse"&&(this.mouse[1]=A.invert(this.mouse[0])),this.touch0&&_!=="touch"&&(this.touch0[1]=A.invert(this.touch0[0])),this.touch1&&_!=="touch"&&(this.touch1[1]=A.invert(this.touch1[0])),this.that.__zoom=A,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(_){var A=Dt(this.that).datum();u.call(_,this.that,new BI(_,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),A)}};function C(_,...A){if(!e.apply(this,arguments))return;var M=N(this,A).event(_),B=this.__zoom,z=Math.max(o[0],Math.min(o[1],B.k*Math.pow(2,r.apply(this,arguments)))),T=Zt(_);if(M.wheel)(M.mouse[0][0]!==T[0]||M.mouse[0][1]!==T[1])&&(M.mouse[1]=B.invert(M.mouse[0]=T)),clearTimeout(M.wheel);else{if(B.k===z)return;M.mouse=[T,B.invert(T)],Ml(this),M.start()}Mo(_),M.wheel=setTimeout(F,y),M.zoom("mouse",n(v(m(B,z),M.mouse[0],M.mouse[1]),M.extent,i));function F(){M.wheel=null,M.end()}}function R(_,...A){if(h||!e.apply(this,arguments))return;var M=_.currentTarget,B=N(this,A,!0).event(_),z=Dt(_.view).on("mousemove.zoom",U,!0).on("mouseup.zoom",D,!0),T=Zt(_,M),F=_.clientX,$=_.clientY;Lw(_.view),Vc(_),B.mouse=[T,this.__zoom.invert(T)],Ml(this),B.start();function U(W){if(Mo(W),!B.moved){var Y=W.clientX-F,X=W.clientY-$;B.moved=Y*Y+X*X>g}B.event(W).zoom("mouse",n(v(B.that.__zoom,B.mouse[0]=Zt(W,M),B.mouse[1]),B.extent,i))}function D(W){z.on("mousemove.zoom mouseup.zoom",null),Dw(W.view,B.moved),Mo(W),B.event(W).end()}}function P(_,...A){if(e.apply(this,arguments)){var M=this.__zoom,B=Zt(_.changedTouches?_.changedTouches[0]:_,this),z=M.invert(B),T=M.k*(_.shiftKey?.5:2),F=n(v(m(M,T),B,z),t.apply(this,A),i);Mo(_),a>0?Dt(this).transition().duration(a).call(S,F,B,_):Dt(this).call(p.transform,F,B,_)}}function O(_,...A){if(e.apply(this,arguments)){var M=_.touches,B=M.length,z=N(this,A,_.changedTouches.length===B).event(_),T,F,$,U;for(Vc(_),F=0;F<B;++F)$=M[F],U=Zt($,this),U=[U,this.__zoom.invert(U),$.identifier],z.touch0?!z.touch1&&z.touch0[2]!==U[2]&&(z.touch1=U,z.taps=0):(z.touch0=U,T=!0,z.taps=1+!!c);c&&(c=clearTimeout(c)),T&&(z.taps<2&&(d=U[0],c=setTimeout(function(){c=null},f)),Ml(this),z.start())}}function V(_,...A){if(this.__zooming){var M=N(this,A).event(_),B=_.changedTouches,z=B.length,T,F,$,U;for(Mo(_),T=0;T<z;++T)F=B[T],$=Zt(F,this),M.touch0&&M.touch0[2]===F.identifier?M.touch0[0]=$:M.touch1&&M.touch1[2]===F.identifier&&(M.touch1[0]=$);if(F=M.that.__zoom,M.touch1){var D=M.touch0[0],W=M.touch0[1],Y=M.touch1[0],X=M.touch1[1],G=(G=Y[0]-D[0])*G+(G=Y[1]-D[1])*G,te=(te=X[0]-W[0])*te+(te=X[1]-W[1])*te;F=m(F,Math.sqrt(G/te)),$=[(D[0]+Y[0])/2,(D[1]+Y[1])/2],U=[(W[0]+X[0])/2,(W[1]+X[1])/2]}else if(M.touch0)$=M.touch0[0],U=M.touch0[1];else return;M.zoom("touch",n(v(F,$,U),M.extent,i))}}function K(_,...A){if(this.__zooming){var M=N(this,A).event(_),B=_.changedTouches,z=B.length,T,F;for(Vc(_),h&&clearTimeout(h),h=setTimeout(function(){h=null},f),T=0;T<z;++T)F=B[T],M.touch0&&M.touch0[2]===F.identifier?delete M.touch0:M.touch1&&M.touch1[2]===F.identifier&&delete M.touch1;if(M.touch1&&!M.touch0&&(M.touch0=M.touch1,delete M.touch1),M.touch0)M.touch0[1]=this.__zoom.invert(M.touch0[0]);else if(M.end(),M.taps===2&&(F=Zt(F,this),Math.hypot(d[0]-F[0],d[1]-F[1])<x)){var $=Dt(this).on("dblclick.zoom");$&&$.apply(this,arguments)}}}return p.wheelDelta=function(_){return arguments.length?(r=typeof _=="function"?_:$a(+_),p):r},p.filter=function(_){return arguments.length?(e=typeof _=="function"?_:$a(!!_),p):e},p.touchable=function(_){return arguments.length?(s=typeof _=="function"?_:$a(!!_),p):s},p.extent=function(_){return arguments.length?(t=typeof _=="function"?_:$a([[+_[0][0],+_[0][1]],[+_[1][0],+_[1][1]]]),p):t},p.scaleExtent=function(_){return arguments.length?(o[0]=+_[0],o[1]=+_[1],p):[o[0],o[1]]},p.translateExtent=function(_){return arguments.length?(i[0][0]=+_[0][0],i[1][0]=+_[1][0],i[0][1]=+_[0][1],i[1][1]=+_[1][1],p):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},p.constrain=function(_){return arguments.length?(n=_,p):n},p.duration=function(_){return arguments.length?(a=+_,p):a},p.interpolate=function(_){return arguments.length?(l=_,p):l},p.on=function(){var _=u.on.apply(u,arguments);return _===u?p:_},p.clickDistance=function(_){return arguments.length?(g=(_=+_)*_,p):Math.sqrt(g)},p.tapDistance=function(_){return arguments.length?(x=+_,p):x},p}const Xu=k.createContext(null),GI=Xu.Provider,Un={error001:()=>"[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The React Flow parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,t)=>`Couldn't create edge for ${e?"target":"source"} handle id: "${e?t.targetHandle:t.sourceHandle}", edge id: ${t.id}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`},e1=Un.error001();function xe(e,t){const n=k.useContext(Xu);if(n===null)throw new Error(e1);return Ew(n,e,t)}const $e=()=>{const e=k.useContext(Xu);if(e===null)throw new Error(e1);return k.useMemo(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe,destroy:e.destroy}),[e])},YI=e=>e.userSelectionActive?"none":"all";function qh({position:e,children:t,className:n,style:r,...s}){const o=xe(YI),i=`${e}`.split("-");return L.createElement("div",{className:et(["react-flow__panel",n,...i]),style:{...r,pointerEvents:o},...s},t)}function XI({proOptions:e,position:t="bottom-right"}){return e!=null&&e.hideAttribution?null:L.createElement(qh,{position:t,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro"},L.createElement("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution"},"React Flow"))}const QI=({x:e,y:t,label:n,labelStyle:r={},labelShowBg:s=!0,labelBgStyle:o={},labelBgPadding:i=[2,4],labelBgBorderRadius:a=2,children:l,className:u,...c})=>{const d=k.useRef(null),[h,f]=k.useState({x:0,y:0,width:0,height:0}),y=et(["react-flow__edge-textwrapper",u]);return k.useEffect(()=>{if(d.current){const g=d.current.getBBox();f({x:g.x,y:g.y,width:g.width,height:g.height})}},[n]),typeof n>"u"||!n?null:L.createElement("g",{transform:`translate(${e-h.width/2} ${t-h.height/2})`,className:y,visibility:h.width?"visible":"hidden",...c},s&&L.createElement("rect",{width:h.width+2*i[0],x:-i[0],y:-i[1],height:h.height+2*i[1],className:"react-flow__edge-textbg",style:o,rx:a,ry:a}),L.createElement("text",{className:"react-flow__edge-text",y:h.height/2,dy:"0.3em",ref:d,style:r},n),l)};var JI=k.memo(QI);const Gh=e=>({width:e.offsetWidth,height:e.offsetHeight}),fo=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),Yh=(e={x:0,y:0},t)=>({x:fo(e.x,t[0][0],t[1][0]),y:fo(e.y,t[0][1],t[1][1])}),bg=(e,t,n)=>e<t?fo(Math.abs(e-t),1,50)/50:e>n?-fo(Math.abs(e-n),1,50)/50:0,t1=(e,t)=>{const n=bg(e.x,35,t.width-35)*20,r=bg(e.y,35,t.height-35)*20;return[n,r]},n1=e=>{var t;return((t=e.getRootNode)==null?void 0:t.call(e))||(window==null?void 0:window.document)},r1=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Yi=({x:e,y:t,width:n,height:r})=>({x:e,y:t,x2:e+n,y2:t+r}),s1=({x:e,y:t,x2:n,y2:r})=>({x:e,y:t,width:n-e,height:r-t}),_g=e=>({...e.positionAbsolute||{x:0,y:0},width:e.width||0,height:e.height||0}),ZI=(e,t)=>s1(r1(Yi(e),Yi(t))),Ef=(e,t)=>{const n=Math.max(0,Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x)),r=Math.max(0,Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y));return Math.ceil(n*r)},e4=e=>$t(e.width)&&$t(e.height)&&$t(e.x)&&$t(e.y),$t=e=>!isNaN(e)&&isFinite(e),Ce=Symbol.for("internals"),o1=["Enter"," ","Escape"],t4=(e,t)=>{},n4=e=>"nativeEvent"in e;function Nf(e){var s,o;const t=n4(e)?e.nativeEvent:e,n=((o=(s=t.composedPath)==null?void 0:s.call(t))==null?void 0:o[0])||e.target;return["INPUT","SELECT","TEXTAREA"].includes(n==null?void 0:n.nodeName)||(n==null?void 0:n.hasAttribute("contenteditable"))||!!(n!=null&&n.closest(".nokey"))}const i1=e=>"clientX"in e,wr=(e,t)=>{var o,i;const n=i1(e),r=n?e.clientX:(o=e.touches)==null?void 0:o[0].clientX,s=n?e.clientY:(i=e.touches)==null?void 0:i[0].clientY;return{x:r-((t==null?void 0:t.left)??0),y:s-((t==null?void 0:t.top)??0)}},mu=()=>{var e;return typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)==null?void 0:e.indexOf("Mac"))>=0},yo=({id:e,path:t,labelX:n,labelY:r,label:s,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:l,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:h,interactionWidth:f=20})=>L.createElement(L.Fragment,null,L.createElement("path",{id:e,style:c,d:t,fill:"none",className:"react-flow__edge-path",markerEnd:d,markerStart:h}),f&&L.createElement("path",{d:t,fill:"none",strokeOpacity:0,strokeWidth:f,className:"react-flow__edge-interaction"}),s&&$t(n)&&$t(r)?L.createElement(JI,{x:n,y:r,label:s,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:l,labelBgBorderRadius:u}):null);yo.displayName="BaseEdge";function Co(e,t,n){return n===void 0?n:r=>{const s=t().edges.find(o=>o.id===e);s&&n(r,{...s})}}function a1({sourceX:e,sourceY:t,targetX:n,targetY:r}){const s=Math.abs(n-e)/2,o=n<e?n+s:n-s,i=Math.abs(r-t)/2,a=r<t?r+i:r-i;return[o,a,s,i]}function l1({sourceX:e,sourceY:t,targetX:n,targetY:r,sourceControlX:s,sourceControlY:o,targetControlX:i,targetControlY:a}){const l=e*.125+s*.375+i*.375+n*.125,u=t*.125+o*.375+a*.375+r*.125,c=Math.abs(l-e),d=Math.abs(u-t);return[l,u,c,d]}var os;(function(e){e.Strict="strict",e.Loose="loose"})(os||(os={}));var Wr;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Wr||(Wr={}));var Xi;(function(e){e.Partial="partial",e.Full="full"})(Xi||(Xi={}));var ir;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(ir||(ir={}));var Qi;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Qi||(Qi={}));var ae;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ae||(ae={}));function Sg({pos:e,x1:t,y1:n,x2:r,y2:s}){return e===ae.Left||e===ae.Right?[.5*(t+r),n]:[t,.5*(n+s)]}function u1({sourceX:e,sourceY:t,sourcePosition:n=ae.Bottom,targetX:r,targetY:s,targetPosition:o=ae.Top}){const[i,a]=Sg({pos:n,x1:e,y1:t,x2:r,y2:s}),[l,u]=Sg({pos:o,x1:r,y1:s,x2:e,y2:t}),[c,d,h,f]=l1({sourceX:e,sourceY:t,targetX:r,targetY:s,sourceControlX:i,sourceControlY:a,targetControlX:l,targetControlY:u});return[`M${e},${t} C${i},${a} ${l},${u} ${r},${s}`,c,d,h,f]}const Xh=k.memo(({sourceX:e,sourceY:t,targetX:n,targetY:r,sourcePosition:s=ae.Bottom,targetPosition:o=ae.Top,label:i,labelStyle:a,labelShowBg:l,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:h,markerEnd:f,markerStart:y,interactionWidth:g})=>{const[x,p,m]=u1({sourceX:e,sourceY:t,sourcePosition:s,targetX:n,targetY:r,targetPosition:o});return L.createElement(yo,{path:x,labelX:p,labelY:m,label:i,labelStyle:a,labelShowBg:l,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:h,markerEnd:f,markerStart:y,interactionWidth:g})});Xh.displayName="SimpleBezierEdge";const kg={[ae.Left]:{x:-1,y:0},[ae.Right]:{x:1,y:0},[ae.Top]:{x:0,y:-1},[ae.Bottom]:{x:0,y:1}},r4=({source:e,sourcePosition:t=ae.Bottom,target:n})=>t===ae.Left||t===ae.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Eg=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function s4({source:e,sourcePosition:t=ae.Bottom,target:n,targetPosition:r=ae.Top,center:s,offset:o}){const i=kg[t],a=kg[r],l={x:e.x+i.x*o,y:e.y+i.y*o},u={x:n.x+a.x*o,y:n.y+a.y*o},c=r4({source:l,sourcePosition:t,target:u}),d=c.x!==0?"x":"y",h=c[d];let f=[],y,g;const x={x:0,y:0},p={x:0,y:0},[m,v,w,S]=a1({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(i[d]*a[d]===-1){y=s.x??m,g=s.y??v;const I=[{x:y,y:l.y},{x:y,y:u.y}],C=[{x:l.x,y:g},{x:u.x,y:g}];i[d]===h?f=d==="x"?I:C:f=d==="x"?C:I}else{const I=[{x:l.x,y:u.y}],C=[{x:u.x,y:l.y}];if(d==="x"?f=i.x===h?C:I:f=i.y===h?I:C,t===r){const K=Math.abs(e[d]-n[d]);if(K<=o){const _=Math.min(o-1,o-K);i[d]===h?x[d]=(l[d]>e[d]?-1:1)*_:p[d]=(u[d]>n[d]?-1:1)*_}}if(t!==r){const K=d==="x"?"y":"x",_=i[d]===a[K],A=l[K]>u[K],M=l[K]<u[K];(i[d]===1&&(!_&&A||_&&M)||i[d]!==1&&(!_&&M||_&&A))&&(f=d==="x"?I:C)}const R={x:l.x+x.x,y:l.y+x.y},P={x:u.x+p.x,y:u.y+p.y},O=Math.max(Math.abs(R.x-f[0].x),Math.abs(P.x-f[0].x)),V=Math.max(Math.abs(R.y-f[0].y),Math.abs(P.y-f[0].y));O>=V?(y=(R.x+P.x)/2,g=f[0].y):(y=f[0].x,g=(R.y+P.y)/2)}return[[e,{x:l.x+x.x,y:l.y+x.y},...f,{x:u.x+p.x,y:u.y+p.y},n],y,g,w,S]}function o4(e,t,n,r){const s=Math.min(Eg(e,t)/2,Eg(t,n)/2,r),{x:o,y:i}=t;if(e.x===o&&o===n.x||e.y===i&&i===n.y)return`L${o} ${i}`;if(e.y===i){const u=e.x<n.x?-1:1,c=e.y<n.y?1:-1;return`L ${o+s*u},${i}Q ${o},${i} ${o},${i+s*c}`}const a=e.x<n.x?1:-1,l=e.y<n.y?-1:1;return`L ${o},${i+s*l}Q ${o},${i} ${o+s*a},${i}`}function If({sourceX:e,sourceY:t,sourcePosition:n=ae.Bottom,targetX:r,targetY:s,targetPosition:o=ae.Top,borderRadius:i=5,centerX:a,centerY:l,offset:u=20}){const[c,d,h,f,y]=s4({source:{x:e,y:t},sourcePosition:n,target:{x:r,y:s},targetPosition:o,center:{x:a,y:l},offset:u});return[c.reduce((x,p,m)=>{let v="";return m>0&&m<c.length-1?v=o4(c[m-1],p,c[m+1],i):v=`${m===0?"M":"L"}${p.x} ${p.y}`,x+=v,x},""),d,h,f,y]}const Qu=k.memo(({sourceX:e,sourceY:t,targetX:n,targetY:r,label:s,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:l,labelBgBorderRadius:u,style:c,sourcePosition:d=ae.Bottom,targetPosition:h=ae.Top,markerEnd:f,markerStart:y,pathOptions:g,interactionWidth:x})=>{const[p,m,v]=If({sourceX:e,sourceY:t,sourcePosition:d,targetX:n,targetY:r,targetPosition:h,borderRadius:g==null?void 0:g.borderRadius,offset:g==null?void 0:g.offset});return L.createElement(yo,{path:p,labelX:m,labelY:v,label:s,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:l,labelBgBorderRadius:u,style:c,markerEnd:f,markerStart:y,interactionWidth:x})});Qu.displayName="SmoothStepEdge";const Qh=k.memo(e=>{var t;return L.createElement(Qu,{...e,pathOptions:k.useMemo(()=>{var n;return{borderRadius:0,offset:(n=e.pathOptions)==null?void 0:n.offset}},[(t=e.pathOptions)==null?void 0:t.offset])})});Qh.displayName="StepEdge";function i4({sourceX:e,sourceY:t,targetX:n,targetY:r}){const[s,o,i,a]=a1({sourceX:e,sourceY:t,targetX:n,targetY:r});return[`M ${e},${t}L ${n},${r}`,s,o,i,a]}const Jh=k.memo(({sourceX:e,sourceY:t,targetX:n,targetY:r,label:s,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:l,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:h,interactionWidth:f})=>{const[y,g,x]=i4({sourceX:e,sourceY:t,targetX:n,targetY:r});return L.createElement(yo,{path:y,labelX:g,labelY:x,label:s,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:l,labelBgBorderRadius:u,style:c,markerEnd:d,markerStart:h,interactionWidth:f})});Jh.displayName="StraightEdge";function Ba(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Ng({pos:e,x1:t,y1:n,x2:r,y2:s,c:o}){switch(e){case ae.Left:return[t-Ba(t-r,o),n];case ae.Right:return[t+Ba(r-t,o),n];case ae.Top:return[t,n-Ba(n-s,o)];case ae.Bottom:return[t,n+Ba(s-n,o)]}}function c1({sourceX:e,sourceY:t,sourcePosition:n=ae.Bottom,targetX:r,targetY:s,targetPosition:o=ae.Top,curvature:i=.25}){const[a,l]=Ng({pos:n,x1:e,y1:t,x2:r,y2:s,c:i}),[u,c]=Ng({pos:o,x1:r,y1:s,x2:e,y2:t,c:i}),[d,h,f,y]=l1({sourceX:e,sourceY:t,targetX:r,targetY:s,sourceControlX:a,sourceControlY:l,targetControlX:u,targetControlY:c});return[`M${e},${t} C${a},${l} ${u},${c} ${r},${s}`,d,h,f,y]}const gu=k.memo(({sourceX:e,sourceY:t,targetX:n,targetY:r,sourcePosition:s=ae.Bottom,targetPosition:o=ae.Top,label:i,labelStyle:a,labelShowBg:l,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:h,markerEnd:f,markerStart:y,pathOptions:g,interactionWidth:x})=>{const[p,m,v]=c1({sourceX:e,sourceY:t,sourcePosition:s,targetX:n,targetY:r,targetPosition:o,curvature:g==null?void 0:g.curvature});return L.createElement(yo,{path:p,labelX:m,labelY:v,label:i,labelStyle:a,labelShowBg:l,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:h,markerEnd:f,markerStart:y,interactionWidth:x})});gu.displayName="BezierEdge";const Zh=k.createContext(null),a4=Zh.Provider;Zh.Consumer;const l4=()=>k.useContext(Zh),u4=e=>"id"in e&&"source"in e&&"target"in e,c4=({source:e,sourceHandle:t,target:n,targetHandle:r})=>`reactflow__edge-${e}${t||""}-${n}${r||""}`,Tf=(e,t)=>typeof e>"u"?"":typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(r=>`${r}=${e[r]}`).join("&")}`,d4=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),f4=(e,t)=>{if(!e.source||!e.target)return t;let n;return u4(e)?n={...e}:n={...e,id:c4(e)},d4(n,t)?t:t.concat(n)},jf=({x:e,y:t},[n,r,s],o,[i,a])=>{const l={x:(e-n)/s,y:(t-r)/s};return o?{x:i*Math.round(l.x/i),y:a*Math.round(l.y/a)}:l},d1=({x:e,y:t},[n,r,s])=>({x:e*s+n,y:t*s+r}),Yr=(e,t=[0,0])=>{if(!e)return{x:0,y:0,positionAbsolute:{x:0,y:0}};const n=(e.width??0)*t[0],r=(e.height??0)*t[1],s={x:e.position.x-n,y:e.position.y-r};return{...s,positionAbsolute:e.positionAbsolute?{x:e.positionAbsolute.x-n,y:e.positionAbsolute.y-r}:s}},Ju=(e,t=[0,0])=>{if(e.length===0)return{x:0,y:0,width:0,height:0};const n=e.reduce((r,s)=>{const{x:o,y:i}=Yr(s,t).positionAbsolute;return r1(r,Yi({x:o,y:i,width:s.width||0,height:s.height||0}))},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return s1(n)},f1=(e,t,[n,r,s]=[0,0,1],o=!1,i=!1,a=[0,0])=>{const l={x:(t.x-n)/s,y:(t.y-r)/s,width:t.width/s,height:t.height/s},u=[];return e.forEach(c=>{const{width:d,height:h,selectable:f=!0,hidden:y=!1}=c;if(i&&!f||y)return!1;const{positionAbsolute:g}=Yr(c,a),x={x:g.x,y:g.y,width:d||0,height:h||0},p=Ef(l,x),m=typeof d>"u"||typeof h>"u"||d===null||h===null,v=o&&p>0,w=(d||0)*(h||0);(m||v||p>=w||c.dragging)&&u.push(c)}),u},h1=(e,t)=>{const n=e.map(r=>r.id);return t.filter(r=>n.includes(r.source)||n.includes(r.target))},p1=(e,t,n,r,s,o=.1)=>{const i=t/(e.width*(1+o)),a=n/(e.height*(1+o)),l=Math.min(i,a),u=fo(l,r,s),c=e.x+e.width/2,d=e.y+e.height/2,h=t/2-c*u,f=n/2-d*u;return{x:h,y:f,zoom:u}},Or=(e,t=0)=>e.transition().duration(t);function Ig(e,t,n,r){return(t[n]||[]).reduce((s,o)=>{var i,a;return`${e.id}-${o.id}-${n}`!==r&&s.push({id:o.id||null,type:n,nodeId:e.id,x:(((i=e.positionAbsolute)==null?void 0:i.x)??0)+o.x+o.width/2,y:(((a=e.positionAbsolute)==null?void 0:a.y)??0)+o.y+o.height/2}),s},[])}function h4(e,t,n,r,s,o){const{x:i,y:a}=wr(e),u=t.elementsFromPoint(i,a).find(y=>y.classList.contains("react-flow__handle"));if(u){const y=u.getAttribute("data-nodeid");if(y){const g=ep(void 0,u),x=u.getAttribute("data-handleid"),p=o({nodeId:y,id:x,type:g});if(p){const m=s.find(v=>v.nodeId===y&&v.type===g&&v.id===x);return{handle:{id:x,type:g,nodeId:y,x:(m==null?void 0:m.x)||n.x,y:(m==null?void 0:m.y)||n.y},validHandleResult:p}}}}let c=[],d=1/0;if(s.forEach(y=>{const g=Math.sqrt((y.x-n.x)**2+(y.y-n.y)**2);if(g<=r){const x=o(y);g<=d&&(g<d?c=[{handle:y,validHandleResult:x}]:g===d&&c.push({handle:y,validHandleResult:x}),d=g)}}),!c.length)return{handle:null,validHandleResult:m1()};if(c.length===1)return c[0];const h=c.some(({validHandleResult:y})=>y.isValid),f=c.some(({handle:y})=>y.type==="target");return c.find(({handle:y,validHandleResult:g})=>f?y.type==="target":h?g.isValid:!0)||c[0]}const p4={source:null,target:null,sourceHandle:null,targetHandle:null},m1=()=>({handleDomNode:null,isValid:!1,connection:p4,endHandle:null});function g1(e,t,n,r,s,o,i){const a=s==="target",l=i.querySelector(`.react-flow__handle[data-id="${e==null?void 0:e.nodeId}-${e==null?void 0:e.id}-${e==null?void 0:e.type}"]`),u={...m1(),handleDomNode:l};if(l){const c=ep(void 0,l),d=l.getAttribute("data-nodeid"),h=l.getAttribute("data-handleid"),f=l.classList.contains("connectable"),y=l.classList.contains("connectableend"),g={source:a?d:n,sourceHandle:a?h:r,target:a?n:d,targetHandle:a?r:h};u.connection=g,f&&y&&(t===os.Strict?a&&c==="source"||!a&&c==="target":d!==n||h!==r)&&(u.endHandle={nodeId:d,handleId:h,type:c},u.isValid=o(g))}return u}function m4({nodes:e,nodeId:t,handleId:n,handleType:r}){return e.reduce((s,o)=>{if(o[Ce]){const{handleBounds:i}=o[Ce];let a=[],l=[];i&&(a=Ig(o,i,"source",`${t}-${n}-${r}`),l=Ig(o,i,"target",`${t}-${n}-${r}`)),s.push(...a,...l)}return s},[])}function ep(e,t){return e||(t!=null&&t.classList.contains("target")?"target":t!=null&&t.classList.contains("source")?"source":null)}function Kc(e){e==null||e.classList.remove("valid","connecting","react-flow__handle-valid","react-flow__handle-connecting")}function g4(e,t){let n=null;return t?n="valid":e&&!t&&(n="invalid"),n}function y1({event:e,handleId:t,nodeId:n,onConnect:r,isTarget:s,getState:o,setState:i,isValidConnection:a,edgeUpdaterType:l,onReconnectEnd:u}){const c=n1(e.target),{connectionMode:d,domNode:h,autoPanOnConnect:f,connectionRadius:y,onConnectStart:g,panBy:x,getNodes:p,cancelConnection:m}=o();let v=0,w;const{x:S,y:N}=wr(e),I=c==null?void 0:c.elementFromPoint(S,N),C=ep(l,I),R=h==null?void 0:h.getBoundingClientRect();if(!R||!C)return;let P,O=wr(e,R),V=!1,K=null,_=!1,A=null;const M=m4({nodes:p(),nodeId:n,handleId:t,handleType:C}),B=()=>{if(!f)return;const[F,$]=t1(O,R);x({x:F,y:$}),v=requestAnimationFrame(B)};i({connectionPosition:O,connectionStatus:null,connectionNodeId:n,connectionHandleId:t,connectionHandleType:C,connectionStartHandle:{nodeId:n,handleId:t,type:C},connectionEndHandle:null}),g==null||g(e,{nodeId:n,handleId:t,handleType:C});function z(F){const{transform:$}=o();O=wr(F,R);const{handle:U,validHandleResult:D}=h4(F,c,jf(O,$,!1,[1,1]),y,M,W=>g1(W,d,n,t,s?"target":"source",a,c));if(w=U,V||(B(),V=!0),A=D.handleDomNode,K=D.connection,_=D.isValid,i({connectionPosition:w&&_?d1({x:w.x,y:w.y},$):O,connectionStatus:g4(!!w,_),connectionEndHandle:D.endHandle}),!w&&!_&&!A)return Kc(P);K.source!==K.target&&A&&(Kc(P),P=A,A.classList.add("connecting","react-flow__handle-connecting"),A.classList.toggle("valid",_),A.classList.toggle("react-flow__handle-valid",_))}function T(F){var $,U;(w||A)&&K&&_&&(r==null||r(K)),(U=($=o()).onConnectEnd)==null||U.call($,F),l&&(u==null||u(F)),Kc(P),m(),cancelAnimationFrame(v),V=!1,_=!1,K=null,A=null,c.removeEventListener("mousemove",z),c.removeEventListener("mouseup",T),c.removeEventListener("touchmove",z),c.removeEventListener("touchend",T)}c.addEventListener("mousemove",z),c.addEventListener("mouseup",T),c.addEventListener("touchmove",z),c.addEventListener("touchend",T)}const Tg=()=>!0,y4=e=>({connectionStartHandle:e.connectionStartHandle,connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName}),v4=(e,t,n)=>r=>{const{connectionStartHandle:s,connectionEndHandle:o,connectionClickStartHandle:i}=r;return{connecting:(s==null?void 0:s.nodeId)===e&&(s==null?void 0:s.handleId)===t&&(s==null?void 0:s.type)===n||(o==null?void 0:o.nodeId)===e&&(o==null?void 0:o.handleId)===t&&(o==null?void 0:o.type)===n,clickConnecting:(i==null?void 0:i.nodeId)===e&&(i==null?void 0:i.handleId)===t&&(i==null?void 0:i.type)===n}},v1=k.forwardRef(({type:e="source",position:t=ae.Top,isValidConnection:n,isConnectable:r=!0,isConnectableStart:s=!0,isConnectableEnd:o=!0,id:i,onConnect:a,children:l,className:u,onMouseDown:c,onTouchStart:d,...h},f)=>{var R,P;const y=i||null,g=e==="target",x=$e(),p=l4(),{connectOnClick:m,noPanClassName:v}=xe(y4,qe),{connecting:w,clickConnecting:S}=xe(v4(p,y,e),qe);p||(P=(R=x.getState()).onError)==null||P.call(R,"010",Un.error010());const N=O=>{const{defaultEdgeOptions:V,onConnect:K,hasDefaultEdges:_}=x.getState(),A={...V,...O};if(_){const{edges:M,setEdges:B}=x.getState();B(f4(A,M))}K==null||K(A),a==null||a(A)},I=O=>{if(!p)return;const V=i1(O);s&&(V&&O.button===0||!V)&&y1({event:O,handleId:y,nodeId:p,onConnect:N,isTarget:g,getState:x.getState,setState:x.setState,isValidConnection:n||x.getState().isValidConnection||Tg}),V?c==null||c(O):d==null||d(O)},C=O=>{const{onClickConnectStart:V,onClickConnectEnd:K,connectionClickStartHandle:_,connectionMode:A,isValidConnection:M}=x.getState();if(!p||!_&&!s)return;if(!_){V==null||V(O,{nodeId:p,handleId:y,handleType:e}),x.setState({connectionClickStartHandle:{nodeId:p,type:e,handleId:y}});return}const B=n1(O.target),z=n||M||Tg,{connection:T,isValid:F}=g1({nodeId:p,id:y,type:e},A,_.nodeId,_.handleId||null,_.type,z,B);F&&N(T),K==null||K(O),x.setState({connectionClickStartHandle:null})};return L.createElement("div",{"data-handleid":y,"data-nodeid":p,"data-handlepos":t,"data-id":`${p}-${y}-${e}`,className:et(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",v,u,{source:!g,target:g,connectable:r,connectablestart:s,connectableend:o,connecting:S,connectionindicator:r&&(s&&!w||o&&w)}]),onMouseDown:I,onTouchStart:I,onClick:m?C:void 0,ref:f,...h},l)});v1.displayName="Handle";var _n=k.memo(v1);const w1=({data:e,isConnectable:t,targetPosition:n=ae.Top,sourcePosition:r=ae.Bottom})=>L.createElement(L.Fragment,null,L.createElement(_n,{type:"target",position:n,isConnectable:t}),e==null?void 0:e.label,L.createElement(_n,{type:"source",position:r,isConnectable:t}));w1.displayName="DefaultNode";var Mf=k.memo(w1);const x1=({data:e,isConnectable:t,sourcePosition:n=ae.Bottom})=>L.createElement(L.Fragment,null,e==null?void 0:e.label,L.createElement(_n,{type:"source",position:n,isConnectable:t}));x1.displayName="InputNode";var b1=k.memo(x1);const _1=({data:e,isConnectable:t,targetPosition:n=ae.Top})=>L.createElement(L.Fragment,null,L.createElement(_n,{type:"target",position:n,isConnectable:t}),e==null?void 0:e.label);_1.displayName="OutputNode";var S1=k.memo(_1);const tp=()=>null;tp.displayName="GroupNode";const w4=e=>({selectedNodes:e.getNodes().filter(t=>t.selected),selectedEdges:e.edges.filter(t=>t.selected).map(t=>({...t}))}),Ua=e=>e.id;function x4(e,t){return qe(e.selectedNodes.map(Ua),t.selectedNodes.map(Ua))&&qe(e.selectedEdges.map(Ua),t.selectedEdges.map(Ua))}const k1=k.memo(({onSelectionChange:e})=>{const t=$e(),{selectedNodes:n,selectedEdges:r}=xe(w4,x4);return k.useEffect(()=>{const s={nodes:n,edges:r};e==null||e(s),t.getState().onSelectionChange.forEach(o=>o(s))},[n,r,e]),null});k1.displayName="SelectionListener";const b4=e=>!!e.onSelectionChange;function _4({onSelectionChange:e}){const t=xe(b4);return e||t?L.createElement(k1,{onSelectionChange:e}):null}const S4=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset});function hs(e,t){k.useEffect(()=>{typeof e<"u"&&t(e)},[e])}function ce(e,t,n){k.useEffect(()=>{typeof t<"u"&&n({[e]:t})},[t])}const k4=({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,onConnect:s,onConnectStart:o,onConnectEnd:i,onClickConnectStart:a,onClickConnectEnd:l,nodesDraggable:u,nodesConnectable:c,nodesFocusable:d,edgesFocusable:h,edgesUpdatable:f,elevateNodesOnSelect:y,minZoom:g,maxZoom:x,nodeExtent:p,onNodesChange:m,onEdgesChange:v,elementsSelectable:w,connectionMode:S,snapGrid:N,snapToGrid:I,translateExtent:C,connectOnClick:R,defaultEdgeOptions:P,fitView:O,fitViewOptions:V,onNodesDelete:K,onEdgesDelete:_,onNodeDrag:A,onNodeDragStart:M,onNodeDragStop:B,onSelectionDrag:z,onSelectionDragStart:T,onSelectionDragStop:F,noPanClassName:$,nodeOrigin:U,rfId:D,autoPanOnConnect:W,autoPanOnNodeDrag:Y,onError:X,connectionRadius:G,isValidConnection:te,nodeDragThreshold:j})=>{const{setNodes:q,setEdges:Z,setDefaultNodesAndEdges:oe,setMinZoom:le,setMaxZoom:pe,setTranslateExtent:ve,setNodeExtent:Ue,reset:me}=xe(S4,qe),re=$e();return k.useEffect(()=>{const We=r==null?void 0:r.map(qt=>({...qt,...P}));return oe(n,We),()=>{me()}},[]),ce("defaultEdgeOptions",P,re.setState),ce("connectionMode",S,re.setState),ce("onConnect",s,re.setState),ce("onConnectStart",o,re.setState),ce("onConnectEnd",i,re.setState),ce("onClickConnectStart",a,re.setState),ce("onClickConnectEnd",l,re.setState),ce("nodesDraggable",u,re.setState),ce("nodesConnectable",c,re.setState),ce("nodesFocusable",d,re.setState),ce("edgesFocusable",h,re.setState),ce("edgesUpdatable",f,re.setState),ce("elementsSelectable",w,re.setState),ce("elevateNodesOnSelect",y,re.setState),ce("snapToGrid",I,re.setState),ce("snapGrid",N,re.setState),ce("onNodesChange",m,re.setState),ce("onEdgesChange",v,re.setState),ce("connectOnClick",R,re.setState),ce("fitViewOnInit",O,re.setState),ce("fitViewOnInitOptions",V,re.setState),ce("onNodesDelete",K,re.setState),ce("onEdgesDelete",_,re.setState),ce("onNodeDrag",A,re.setState),ce("onNodeDragStart",M,re.setState),ce("onNodeDragStop",B,re.setState),ce("onSelectionDrag",z,re.setState),ce("onSelectionDragStart",T,re.setState),ce("onSelectionDragStop",F,re.setState),ce("noPanClassName",$,re.setState),ce("nodeOrigin",U,re.setState),ce("rfId",D,re.setState),ce("autoPanOnConnect",W,re.setState),ce("autoPanOnNodeDrag",Y,re.setState),ce("onError",X,re.setState),ce("connectionRadius",G,re.setState),ce("isValidConnection",te,re.setState),ce("nodeDragThreshold",j,re.setState),hs(e,q),hs(t,Z),hs(g,le),hs(x,pe),hs(C,ve),hs(p,Ue),null},jg={display:"none"},E4={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},E1="react-flow__node-desc",N1="react-flow__edge-desc",N4="react-flow__aria-live",I4=e=>e.ariaLiveMessage;function T4({rfId:e}){const t=xe(I4);return L.createElement("div",{id:`${N4}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:E4},t)}function j4({rfId:e,disableKeyboardA11y:t}){return L.createElement(L.Fragment,null,L.createElement("div",{id:`${E1}-${e}`,style:jg},"Press enter or space to select a node.",!t&&"You can then use the arrow keys to move the node around."," Press delete to remove it and escape to cancel."," "),L.createElement("div",{id:`${N1}-${e}`,style:jg},"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."),!t&&L.createElement(T4,{rfId:e}))}var Ji=(e=null,t={actInsideInputWithModifier:!0})=>{const[n,r]=k.useState(!1),s=k.useRef(!1),o=k.useRef(new Set([])),[i,a]=k.useMemo(()=>{if(e!==null){const u=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.split("+")),c=u.reduce((d,h)=>d.concat(...h),[]);return[u,c]}return[[],[]]},[e]);return k.useEffect(()=>{const l=typeof document<"u"?document:null,u=(t==null?void 0:t.target)||l;if(e!==null){const c=f=>{if(s.current=f.ctrlKey||f.metaKey||f.shiftKey,(!s.current||s.current&&!t.actInsideInputWithModifier)&&Nf(f))return!1;const g=Cg(f.code,a);o.current.add(f[g]),Mg(i,o.current,!1)&&(f.preventDefault(),r(!0))},d=f=>{if((!s.current||s.current&&!t.actInsideInputWithModifier)&&Nf(f))return!1;const g=Cg(f.code,a);Mg(i,o.current,!0)?(r(!1),o.current.clear()):o.current.delete(f[g]),f.key==="Meta"&&o.current.clear(),s.current=!1},h=()=>{o.current.clear(),r(!1)};return u==null||u.addEventListener("keydown",c),u==null||u.addEventListener("keyup",d),window.addEventListener("blur",h),()=>{u==null||u.removeEventListener("keydown",c),u==null||u.removeEventListener("keyup",d),window.removeEventListener("blur",h)}}},[e,r]),n};function Mg(e,t,n){return e.filter(r=>n||r.length===t.size).some(r=>r.every(s=>t.has(s)))}function Cg(e,t){return t.includes(e)?"code":"key"}function I1(e,t,n,r){var a,l;const s=e.parentNode||e.parentId;if(!s)return n;const o=t.get(s),i=Yr(o,r);return I1(o,t,{x:(n.x??0)+i.x,y:(n.y??0)+i.y,z:(((a=o[Ce])==null?void 0:a.z)??0)>(n.z??0)?((l=o[Ce])==null?void 0:l.z)??0:n.z??0},r)}function T1(e,t,n){e.forEach(r=>{var o;const s=r.parentNode||r.parentId;if(s&&!e.has(s))throw new Error(`Parent node ${s} not found`);if(s||n!=null&&n[r.id]){const{x:i,y:a,z:l}=I1(r,e,{...r.position,z:((o=r[Ce])==null?void 0:o.z)??0},t);r.positionAbsolute={x:i,y:a},r[Ce].z=l,n!=null&&n[r.id]&&(r[Ce].isParent=!0)}})}function qc(e,t,n,r){const s=new Map,o={},i=r?1e3:0;return e.forEach(a=>{var f;const l=($t(a.zIndex)?a.zIndex:0)+(a.selected?i:0),u=t.get(a.id),c={...a,positionAbsolute:{x:a.position.x,y:a.position.y}},d=a.parentNode||a.parentId;d&&(o[d]=!0);const h=(u==null?void 0:u.type)&&(u==null?void 0:u.type)!==a.type;Object.defineProperty(c,Ce,{enumerable:!1,value:{handleBounds:h||(f=u==null?void 0:u[Ce])==null?void 0:f.handleBounds,z:l}}),s.set(a.id,c)}),T1(s,n,o),s}function j1(e,t={}){const{getNodes:n,width:r,height:s,minZoom:o,maxZoom:i,d3Zoom:a,d3Selection:l,fitViewOnInitDone:u,fitViewOnInit:c,nodeOrigin:d}=e(),h=t.initial&&!u&&c;if(a&&l&&(h||!t.initial)){const y=n().filter(x=>{var m;const p=t.includeHiddenNodes?x.width&&x.height:!x.hidden;return(m=t.nodes)!=null&&m.length?p&&t.nodes.some(v=>v.id===x.id):p}),g=y.every(x=>x.width&&x.height);if(y.length>0&&g){const x=Ju(y,d),{x:p,y:m,zoom:v}=p1(x,r,s,t.minZoom??o,t.maxZoom??i,t.padding??.1),w=On.translate(p,m).scale(v);return typeof t.duration=="number"&&t.duration>0?a.transform(Or(l,t.duration),w):a.transform(l,w),!0}}return!1}function M4(e,t){return e.forEach(n=>{const r=t.get(n.id);r&&t.set(r.id,{...r,[Ce]:r[Ce],selected:n.selected})}),new Map(t)}function C4(e,t){return t.map(n=>{const r=e.find(s=>s.id===n.id);return r&&(n.selected=r.selected),n})}function Wa({changedNodes:e,changedEdges:t,get:n,set:r}){const{nodeInternals:s,edges:o,onNodesChange:i,onEdgesChange:a,hasDefaultNodes:l,hasDefaultEdges:u}=n();e!=null&&e.length&&(l&&r({nodeInternals:M4(e,s)}),i==null||i(e)),t!=null&&t.length&&(u&&r({edges:C4(t,o)}),a==null||a(t))}const ps=()=>{},P4={zoomIn:ps,zoomOut:ps,zoomTo:ps,getZoom:()=>1,setViewport:ps,getViewport:()=>({x:0,y:0,zoom:1}),fitView:()=>!1,setCenter:ps,fitBounds:ps,project:e=>e,screenToFlowPosition:e=>e,flowToScreenPosition:e=>e,viewportInitialized:!1},A4=e=>({d3Zoom:e.d3Zoom,d3Selection:e.d3Selection}),R4=()=>{const e=$e(),{d3Zoom:t,d3Selection:n}=xe(A4,qe);return k.useMemo(()=>n&&t?{zoomIn:s=>t.scaleBy(Or(n,s==null?void 0:s.duration),1.2),zoomOut:s=>t.scaleBy(Or(n,s==null?void 0:s.duration),1/1.2),zoomTo:(s,o)=>t.scaleTo(Or(n,o==null?void 0:o.duration),s),getZoom:()=>e.getState().transform[2],setViewport:(s,o)=>{const[i,a,l]=e.getState().transform,u=On.translate(s.x??i,s.y??a).scale(s.zoom??l);t.transform(Or(n,o==null?void 0:o.duration),u)},getViewport:()=>{const[s,o,i]=e.getState().transform;return{x:s,y:o,zoom:i}},fitView:s=>j1(e.getState,s),setCenter:(s,o,i)=>{const{width:a,height:l,maxZoom:u}=e.getState(),c=typeof(i==null?void 0:i.zoom)<"u"?i.zoom:u,d=a/2-s*c,h=l/2-o*c,f=On.translate(d,h).scale(c);t.transform(Or(n,i==null?void 0:i.duration),f)},fitBounds:(s,o)=>{const{width:i,height:a,minZoom:l,maxZoom:u}=e.getState(),{x:c,y:d,zoom:h}=p1(s,i,a,l,u,(o==null?void 0:o.padding)??.1),f=On.translate(c,d).scale(h);t.transform(Or(n,o==null?void 0:o.duration),f)},project:s=>{const{transform:o,snapToGrid:i,snapGrid:a}=e.getState();return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"),jf(s,o,i,a)},screenToFlowPosition:s=>{const{transform:o,snapToGrid:i,snapGrid:a,domNode:l}=e.getState();if(!l)return s;const{x:u,y:c}=l.getBoundingClientRect(),d={x:s.x-u,y:s.y-c};return jf(d,o,i,a)},flowToScreenPosition:s=>{const{transform:o,domNode:i}=e.getState();if(!i)return s;const{x:a,y:l}=i.getBoundingClientRect(),u=d1(s,o);return{x:u.x+a,y:u.y+l}},viewportInitialized:!0}:P4,[t,n])};function Zu(){const e=R4(),t=$e(),n=k.useCallback(()=>t.getState().getNodes().map(g=>({...g})),[]),r=k.useCallback(g=>t.getState().nodeInternals.get(g),[]),s=k.useCallback(()=>{const{edges:g=[]}=t.getState();return g.map(x=>({...x}))},[]),o=k.useCallback(g=>{const{edges:x=[]}=t.getState();return x.find(p=>p.id===g)},[]),i=k.useCallback(g=>{const{getNodes:x,setNodes:p,hasDefaultNodes:m,onNodesChange:v}=t.getState(),w=x(),S=typeof g=="function"?g(w):g;if(m)p(S);else if(v){const N=S.length===0?w.map(I=>({type:"remove",id:I.id})):S.map(I=>({item:I,type:"reset"}));v(N)}},[]),a=k.useCallback(g=>{const{edges:x=[],setEdges:p,hasDefaultEdges:m,onEdgesChange:v}=t.getState(),w=typeof g=="function"?g(x):g;if(m)p(w);else if(v){const S=w.length===0?x.map(N=>({type:"remove",id:N.id})):w.map(N=>({item:N,type:"reset"}));v(S)}},[]),l=k.useCallback(g=>{const x=Array.isArray(g)?g:[g],{getNodes:p,setNodes:m,hasDefaultNodes:v,onNodesChange:w}=t.getState();if(v){const N=[...p(),...x];m(N)}else if(w){const S=x.map(N=>({item:N,type:"add"}));w(S)}},[]),u=k.useCallback(g=>{const x=Array.isArray(g)?g:[g],{edges:p=[],setEdges:m,hasDefaultEdges:v,onEdgesChange:w}=t.getState();if(v)m([...p,...x]);else if(w){const S=x.map(N=>({item:N,type:"add"}));w(S)}},[]),c=k.useCallback(()=>{const{getNodes:g,edges:x=[],transform:p}=t.getState(),[m,v,w]=p;return{nodes:g().map(S=>({...S})),edges:x.map(S=>({...S})),viewport:{x:m,y:v,zoom:w}}},[]),d=k.useCallback(({nodes:g,edges:x})=>{const{nodeInternals:p,getNodes:m,edges:v,hasDefaultNodes:w,hasDefaultEdges:S,onNodesDelete:N,onEdgesDelete:I,onNodesChange:C,onEdgesChange:R}=t.getState(),P=(g||[]).map(A=>A.id),O=(x||[]).map(A=>A.id),V=m().reduce((A,M)=>{const B=M.parentNode||M.parentId,z=!P.includes(M.id)&&B&&A.find(F=>F.id===B);return(typeof M.deletable=="boolean"?M.deletable:!0)&&(P.includes(M.id)||z)&&A.push(M),A},[]),K=v.filter(A=>typeof A.deletable=="boolean"?A.deletable:!0),_=K.filter(A=>O.includes(A.id));if(V||_){const A=h1(V,K),M=[..._,...A],B=M.reduce((z,T)=>(z.includes(T.id)||z.push(T.id),z),[]);if((S||w)&&(S&&t.setState({edges:v.filter(z=>!B.includes(z.id))}),w&&(V.forEach(z=>{p.delete(z.id)}),t.setState({nodeInternals:new Map(p)}))),B.length>0&&(I==null||I(M),R&&R(B.map(z=>({id:z,type:"remove"})))),V.length>0&&(N==null||N(V),C)){const z=V.map(T=>({id:T.id,type:"remove"}));C(z)}}},[]),h=k.useCallback(g=>{const x=e4(g),p=x?null:t.getState().nodeInternals.get(g.id);return!x&&!p?[null,null,x]:[x?g:_g(p),p,x]},[]),f=k.useCallback((g,x=!0,p)=>{const[m,v,w]=h(g);return m?(p||t.getState().getNodes()).filter(S=>{if(!w&&(S.id===v.id||!S.positionAbsolute))return!1;const N=_g(S),I=Ef(N,m);return x&&I>0||I>=m.width*m.height}):[]},[]),y=k.useCallback((g,x,p=!0)=>{const[m]=h(g);if(!m)return!1;const v=Ef(m,x);return p&&v>0||v>=m.width*m.height},[]);return k.useMemo(()=>({...e,getNodes:n,getNode:r,getEdges:s,getEdge:o,setNodes:i,setEdges:a,addNodes:l,addEdges:u,toObject:c,deleteElements:d,getIntersectingNodes:f,isNodeIntersecting:y}),[e,n,r,s,o,i,a,l,u,c,d,f,y])}const z4={actInsideInputWithModifier:!1};var F4=({deleteKeyCode:e,multiSelectionKeyCode:t})=>{const n=$e(),{deleteElements:r}=Zu(),s=Ji(e,z4),o=Ji(t);k.useEffect(()=>{if(s){const{edges:i,getNodes:a}=n.getState(),l=a().filter(c=>c.selected),u=i.filter(c=>c.selected);r({nodes:l,edges:u}),n.setState({nodesSelectionActive:!1})}},[s]),k.useEffect(()=>{n.setState({multiSelectionActive:o})},[o])};function O4(e){const t=$e();k.useEffect(()=>{let n;const r=()=>{var o,i;if(!e.current)return;const s=Gh(e.current);(s.height===0||s.width===0)&&((i=(o=t.getState()).onError)==null||i.call(o,"004",Un.error004())),t.setState({width:s.width||500,height:s.height||500})};return r(),window.addEventListener("resize",r),e.current&&(n=new ResizeObserver(()=>r()),n.observe(e.current)),()=>{window.removeEventListener("resize",r),n&&e.current&&n.unobserve(e.current)}},[])}const np={position:"absolute",width:"100%",height:"100%",top:0,left:0},L4=(e,t)=>e.x!==t.x||e.y!==t.y||e.zoom!==t.k,Va=e=>({x:e.x,y:e.y,zoom:e.k}),ms=(e,t)=>e.target.closest(`.${t}`),Pg=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Ag=e=>{const t=e.ctrlKey&&mu()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t},D4=e=>({d3Zoom:e.d3Zoom,d3Selection:e.d3Selection,d3ZoomHandler:e.d3ZoomHandler,userSelectionActive:e.userSelectionActive}),H4=({onMove:e,onMoveStart:t,onMoveEnd:n,onPaneContextMenu:r,zoomOnScroll:s=!0,zoomOnPinch:o=!0,panOnScroll:i=!1,panOnScrollSpeed:a=.5,panOnScrollMode:l=Wr.Free,zoomOnDoubleClick:u=!0,elementsSelectable:c,panOnDrag:d=!0,defaultViewport:h,translateExtent:f,minZoom:y,maxZoom:g,zoomActivationKeyCode:x,preventScrolling:p=!0,children:m,noWheelClassName:v,noPanClassName:w})=>{const S=k.useRef(),N=$e(),I=k.useRef(!1),C=k.useRef(!1),R=k.useRef(null),P=k.useRef({x:0,y:0,zoom:0}),{d3Zoom:O,d3Selection:V,d3ZoomHandler:K,userSelectionActive:_}=xe(D4,qe),A=Ji(x),M=k.useRef(0),B=k.useRef(!1),z=k.useRef();return O4(R),k.useEffect(()=>{if(R.current){const T=R.current.getBoundingClientRect(),F=Zw().scaleExtent([y,g]).translateExtent(f),$=Dt(R.current).call(F),U=On.translate(h.x,h.y).scale(fo(h.zoom,y,g)),D=[[0,0],[T.width,T.height]],W=F.constrain()(U,D,f);F.transform($,W),F.wheelDelta(Ag),N.setState({d3Zoom:F,d3Selection:$,d3ZoomHandler:$.on("wheel.zoom"),transform:[W.x,W.y,W.k],domNode:R.current.closest(".react-flow")})}},[]),k.useEffect(()=>{V&&O&&(i&&!A&&!_?V.on("wheel.zoom",T=>{if(ms(T,v))return!1;T.preventDefault(),T.stopImmediatePropagation();const F=V.property("__zoom").k||1;if(T.ctrlKey&&o){const te=Zt(T),j=Ag(T),q=F*Math.pow(2,j);O.scaleTo(V,q,te,T);return}const $=T.deltaMode===1?20:1;let U=l===Wr.Vertical?0:T.deltaX*$,D=l===Wr.Horizontal?0:T.deltaY*$;!mu()&&T.shiftKey&&l!==Wr.Vertical&&(U=T.deltaY*$,D=0),O.translateBy(V,-(U/F)*a,-(D/F)*a,{internal:!0});const W=Va(V.property("__zoom")),{onViewportChangeStart:Y,onViewportChange:X,onViewportChangeEnd:G}=N.getState();clearTimeout(z.current),B.current||(B.current=!0,t==null||t(T,W),Y==null||Y(W)),B.current&&(e==null||e(T,W),X==null||X(W),z.current=setTimeout(()=>{n==null||n(T,W),G==null||G(W),B.current=!1},150))},{passive:!1}):typeof K<"u"&&V.on("wheel.zoom",function(T,F){if(!p&&T.type==="wheel"&&!T.ctrlKey||ms(T,v))return null;T.preventDefault(),K.call(this,T,F)},{passive:!1}))},[_,i,l,V,O,K,A,o,p,v,t,e,n]),k.useEffect(()=>{O&&O.on("start",T=>{var U,D;if(!T.sourceEvent||T.sourceEvent.internal)return null;M.current=(U=T.sourceEvent)==null?void 0:U.button;const{onViewportChangeStart:F}=N.getState(),$=Va(T.transform);I.current=!0,P.current=$,((D=T.sourceEvent)==null?void 0:D.type)==="mousedown"&&N.setState({paneDragging:!0}),F==null||F($),t==null||t(T.sourceEvent,$)})},[O,t]),k.useEffect(()=>{O&&(_&&!I.current?O.on("zoom",null):_||O.on("zoom",T=>{var $;const{onViewportChange:F}=N.getState();if(N.setState({transform:[T.transform.x,T.transform.y,T.transform.k]}),C.current=!!(r&&Pg(d,M.current??0)),(e||F)&&!(($=T.sourceEvent)!=null&&$.internal)){const U=Va(T.transform);F==null||F(U),e==null||e(T.sourceEvent,U)}}))},[_,O,e,d,r]),k.useEffect(()=>{O&&O.on("end",T=>{if(!T.sourceEvent||T.sourceEvent.internal)return null;const{onViewportChangeEnd:F}=N.getState();if(I.current=!1,N.setState({paneDragging:!1}),r&&Pg(d,M.current??0)&&!C.current&&r(T.sourceEvent),C.current=!1,(n||F)&&L4(P.current,T.transform)){const $=Va(T.transform);P.current=$,clearTimeout(S.current),S.current=setTimeout(()=>{F==null||F($),n==null||n(T.sourceEvent,$)},i?150:0)}})},[O,i,d,n,r]),k.useEffect(()=>{O&&O.filter(T=>{const F=A||s,$=o&&T.ctrlKey;if((d===!0||Array.isArray(d)&&d.includes(1))&&T.button===1&&T.type==="mousedown"&&(ms(T,"react-flow__node")||ms(T,"react-flow__edge")))return!0;if(!d&&!F&&!i&&!u&&!o||_||!u&&T.type==="dblclick"||ms(T,v)&&T.type==="wheel"||ms(T,w)&&(T.type!=="wheel"||i&&T.type==="wheel"&&!A)||!o&&T.ctrlKey&&T.type==="wheel"||!F&&!i&&!$&&T.type==="wheel"||!d&&(T.type==="mousedown"||T.type==="touchstart")||Array.isArray(d)&&!d.includes(T.button)&&T.type==="mousedown")return!1;const U=Array.isArray(d)&&d.includes(T.button)||!T.button||T.button<=1;return(!T.ctrlKey||T.type==="wheel")&&U})},[_,O,s,o,i,u,d,c,A]),L.createElement("div",{className:"react-flow__renderer",ref:R,style:np},m)},$4=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function B4(){const{userSelectionActive:e,userSelectionRect:t}=xe($4,qe);return e&&t?L.createElement("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}function Rg(e,t){const n=t.parentNode||t.parentId,r=e.find(s=>s.id===n);if(r){const s=t.position.x+t.width-r.width,o=t.position.y+t.height-r.height;if(s>0||o>0||t.position.x<0||t.position.y<0){if(r.style={...r.style},r.style.width=r.style.width??r.width,r.style.height=r.style.height??r.height,s>0&&(r.style.width+=s),o>0&&(r.style.height+=o),t.position.x<0){const i=Math.abs(t.position.x);r.position.x=r.position.x-i,r.style.width+=i,t.position.x=0}if(t.position.y<0){const i=Math.abs(t.position.y);r.position.y=r.position.y-i,r.style.height+=i,t.position.y=0}r.width=r.style.width,r.height=r.style.height}}}function U4(e,t){if(e.some(r=>r.type==="reset"))return e.filter(r=>r.type==="reset").map(r=>r.item);const n=e.filter(r=>r.type==="add").map(r=>r.item);return t.reduce((r,s)=>{const o=e.filter(a=>a.id===s.id);if(o.length===0)return r.push(s),r;const i={...s};for(const a of o)if(a)switch(a.type){case"select":{i.selected=a.selected;break}case"position":{typeof a.position<"u"&&(i.position=a.position),typeof a.positionAbsolute<"u"&&(i.positionAbsolute=a.positionAbsolute),typeof a.dragging<"u"&&(i.dragging=a.dragging),i.expandParent&&Rg(r,i);break}case"dimensions":{typeof a.dimensions<"u"&&(i.width=a.dimensions.width,i.height=a.dimensions.height),typeof a.updateStyle<"u"&&(i.style={...i.style||{},...a.dimensions}),typeof a.resizing=="boolean"&&(i.resizing=a.resizing),i.expandParent&&Rg(r,i);break}case"remove":return r}return r.push(i),r},n)}function W4(e,t){return U4(e,t)}const nr=(e,t)=>({id:e,type:"select",selected:t});function Hs(e,t){return e.reduce((n,r)=>{const s=t.includes(r.id);return!r.selected&&s?(r.selected=!0,n.push(nr(r.id,!0))):r.selected&&!s&&(r.selected=!1,n.push(nr(r.id,!1))),n},[])}const Gc=(e,t)=>n=>{n.target===t.current&&(e==null||e(n))},V4=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging}),M1=k.memo(({isSelecting:e,selectionMode:t=Xi.Full,panOnDrag:n,onSelectionStart:r,onSelectionEnd:s,onPaneClick:o,onPaneContextMenu:i,onPaneScroll:a,onPaneMouseEnter:l,onPaneMouseMove:u,onPaneMouseLeave:c,children:d})=>{const h=k.useRef(null),f=$e(),y=k.useRef(0),g=k.useRef(0),x=k.useRef(),{userSelectionActive:p,elementsSelectable:m,dragging:v}=xe(V4,qe),w=()=>{f.setState({userSelectionActive:!1,userSelectionRect:null}),y.current=0,g.current=0},S=K=>{o==null||o(K),f.getState().resetSelectedElements(),f.setState({nodesSelectionActive:!1})},N=K=>{if(Array.isArray(n)&&(n!=null&&n.includes(2))){K.preventDefault();return}i==null||i(K)},I=a?K=>a(K):void 0,C=K=>{const{resetSelectedElements:_,domNode:A}=f.getState();if(x.current=A==null?void 0:A.getBoundingClientRect(),!m||!e||K.button!==0||K.target!==h.current||!x.current)return;const{x:M,y:B}=wr(K,x.current);_(),f.setState({userSelectionRect:{width:0,height:0,startX:M,startY:B,x:M,y:B}}),r==null||r(K)},R=K=>{const{userSelectionRect:_,nodeInternals:A,edges:M,transform:B,onNodesChange:z,onEdgesChange:T,nodeOrigin:F,getNodes:$}=f.getState();if(!e||!x.current||!_)return;f.setState({userSelectionActive:!0,nodesSelectionActive:!1});const U=wr(K,x.current),D=_.startX??0,W=_.startY??0,Y={..._,x:U.x<D?U.x:D,y:U.y<W?U.y:W,width:Math.abs(U.x-D),height:Math.abs(U.y-W)},X=$(),G=f1(A,Y,B,t===Xi.Partial,!0,F),te=h1(G,M).map(q=>q.id),j=G.map(q=>q.id);if(y.current!==j.length){y.current=j.length;const q=Hs(X,j);q.length&&(z==null||z(q))}if(g.current!==te.length){g.current=te.length;const q=Hs(M,te);q.length&&(T==null||T(q))}f.setState({userSelectionRect:Y})},P=K=>{if(K.button!==0)return;const{userSelectionRect:_}=f.getState();!p&&_&&K.target===h.current&&(S==null||S(K)),f.setState({nodesSelectionActive:y.current>0}),w(),s==null||s(K)},O=K=>{p&&(f.setState({nodesSelectionActive:y.current>0}),s==null||s(K)),w()},V=m&&(e||p);return L.createElement("div",{className:et(["react-flow__pane",{dragging:v,selection:e}]),onClick:V?void 0:Gc(S,h),onContextMenu:Gc(N,h),onWheel:Gc(I,h),onMouseEnter:V?void 0:l,onMouseDown:V?C:void 0,onMouseMove:V?R:u,onMouseUp:V?P:void 0,onMouseLeave:V?O:c,ref:h,style:np},d,L.createElement(B4,null))});M1.displayName="Pane";function C1(e,t){const n=e.parentNode||e.parentId;if(!n)return!1;const r=t.get(n);return r?r.selected?!0:C1(r,t):!1}function zg(e,t,n){let r=e;do{if(r!=null&&r.matches(t))return!0;if(r===n.current)return!1;r=r.parentElement}while(r);return!1}function K4(e,t,n,r){return Array.from(e.values()).filter(s=>(s.selected||s.id===r)&&(!s.parentNode||s.parentId||!C1(s,e))&&(s.draggable||t&&typeof s.draggable>"u")).map(s=>{var o,i;return{id:s.id,position:s.position||{x:0,y:0},positionAbsolute:s.positionAbsolute||{x:0,y:0},distance:{x:n.x-(((o=s.positionAbsolute)==null?void 0:o.x)??0),y:n.y-(((i=s.positionAbsolute)==null?void 0:i.y)??0)},delta:{x:0,y:0},extent:s.extent,parentNode:s.parentNode||s.parentId,parentId:s.parentNode||s.parentId,width:s.width,height:s.height,expandParent:s.expandParent}})}function q4(e,t){return!t||t==="parent"?t:[t[0],[t[1][0]-(e.width||0),t[1][1]-(e.height||0)]]}function P1(e,t,n,r,s=[0,0],o){const i=q4(e,e.extent||r);let a=i;const l=e.parentNode||e.parentId;if(e.extent==="parent"&&!e.expandParent)if(l&&e.width&&e.height){const d=n.get(l),{x:h,y:f}=Yr(d,s).positionAbsolute;a=d&&$t(h)&&$t(f)&&$t(d.width)&&$t(d.height)?[[h+e.width*s[0],f+e.height*s[1]],[h+d.width-e.width+e.width*s[0],f+d.height-e.height+e.height*s[1]]]:a}else o==null||o("005",Un.error005()),a=i;else if(e.extent&&l&&e.extent!=="parent"){const d=n.get(l),{x:h,y:f}=Yr(d,s).positionAbsolute;a=[[e.extent[0][0]+h,e.extent[0][1]+f],[e.extent[1][0]+h,e.extent[1][1]+f]]}let u={x:0,y:0};if(l){const d=n.get(l);u=Yr(d,s).positionAbsolute}const c=a&&a!=="parent"?Yh(t,a):t;return{position:{x:c.x-u.x,y:c.y-u.y},positionAbsolute:c}}function Yc({nodeId:e,dragItems:t,nodeInternals:n}){const r=t.map(s=>({...n.get(s.id),position:s.position,positionAbsolute:s.positionAbsolute}));return[e?r.find(s=>s.id===e):r[0],r]}const Fg=(e,t,n,r)=>{const s=t.querySelectorAll(e);if(!s||!s.length)return null;const o=Array.from(s),i=t.getBoundingClientRect(),a={x:i.width*r[0],y:i.height*r[1]};return o.map(l=>{const u=l.getBoundingClientRect();return{id:l.getAttribute("data-handleid"),position:l.getAttribute("data-handlepos"),x:(u.left-i.left-a.x)/n,y:(u.top-i.top-a.y)/n,...Gh(l)}})};function Po(e,t,n){return n===void 0?n:r=>{const s=t().nodeInternals.get(e);s&&n(r,{...s})}}function Cf({id:e,store:t,unselect:n=!1,nodeRef:r}){const{addSelectedNodes:s,unselectNodesAndEdges:o,multiSelectionActive:i,nodeInternals:a,onError:l}=t.getState(),u=a.get(e);if(!u){l==null||l("012",Un.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(n||u.selected&&i)&&(o({nodes:[u],edges:[]}),requestAnimationFrame(()=>{var c;return(c=r==null?void 0:r.current)==null?void 0:c.blur()})):s([e])}function G4(){const e=$e();return k.useCallback(({sourceEvent:n})=>{const{transform:r,snapGrid:s,snapToGrid:o}=e.getState(),i=n.touches?n.touches[0].clientX:n.clientX,a=n.touches?n.touches[0].clientY:n.clientY,l={x:(i-r[0])/r[2],y:(a-r[1])/r[2]};return{xSnapped:o?s[0]*Math.round(l.x/s[0]):l.x,ySnapped:o?s[1]*Math.round(l.y/s[1]):l.y,...l}},[])}function Xc(e){return(t,n,r)=>e==null?void 0:e(t,r)}function A1({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:r,nodeId:s,isSelectable:o,selectNodesOnDrag:i}){const a=$e(),[l,u]=k.useState(!1),c=k.useRef([]),d=k.useRef({x:null,y:null}),h=k.useRef(0),f=k.useRef(null),y=k.useRef({x:0,y:0}),g=k.useRef(null),x=k.useRef(!1),p=k.useRef(!1),m=k.useRef(!1),v=G4();return k.useEffect(()=>{if(e!=null&&e.current){const w=Dt(e.current),S=({x:C,y:R})=>{const{nodeInternals:P,onNodeDrag:O,onSelectionDrag:V,updateNodePositions:K,nodeExtent:_,snapGrid:A,snapToGrid:M,nodeOrigin:B,onError:z}=a.getState();d.current={x:C,y:R};let T=!1,F={x:0,y:0,x2:0,y2:0};if(c.current.length>1&&_){const U=Ju(c.current,B);F=Yi(U)}if(c.current=c.current.map(U=>{const D={x:C-U.distance.x,y:R-U.distance.y};M&&(D.x=A[0]*Math.round(D.x/A[0]),D.y=A[1]*Math.round(D.y/A[1]));const W=[[_[0][0],_[0][1]],[_[1][0],_[1][1]]];c.current.length>1&&_&&!U.extent&&(W[0][0]=U.positionAbsolute.x-F.x+_[0][0],W[1][0]=U.positionAbsolute.x+(U.width??0)-F.x2+_[1][0],W[0][1]=U.positionAbsolute.y-F.y+_[0][1],W[1][1]=U.positionAbsolute.y+(U.height??0)-F.y2+_[1][1]);const Y=P1(U,D,P,W,B,z);return T=T||U.position.x!==Y.position.x||U.position.y!==Y.position.y,U.position=Y.position,U.positionAbsolute=Y.positionAbsolute,U}),!T)return;K(c.current,!0,!0),u(!0);const $=s?O:Xc(V);if($&&g.current){const[U,D]=Yc({nodeId:s,dragItems:c.current,nodeInternals:P});$(g.current,U,D)}},N=()=>{if(!f.current)return;const[C,R]=t1(y.current,f.current);if(C!==0||R!==0){const{transform:P,panBy:O}=a.getState();d.current.x=(d.current.x??0)-C/P[2],d.current.y=(d.current.y??0)-R/P[2],O({x:C,y:R})&&S(d.current)}h.current=requestAnimationFrame(N)},I=C=>{var B;const{nodeInternals:R,multiSelectionActive:P,nodesDraggable:O,unselectNodesAndEdges:V,onNodeDragStart:K,onSelectionDragStart:_}=a.getState();p.current=!0;const A=s?K:Xc(_);(!i||!o)&&!P&&s&&((B=R.get(s))!=null&&B.selected||V()),s&&o&&i&&Cf({id:s,store:a,nodeRef:e});const M=v(C);if(d.current=M,c.current=K4(R,O,M,s),A&&c.current){const[z,T]=Yc({nodeId:s,dragItems:c.current,nodeInternals:R});A(C.sourceEvent,z,T)}};if(t)w.on(".drag",null);else{const C=sN().on("start",R=>{const{domNode:P,nodeDragThreshold:O}=a.getState();O===0&&I(R),m.current=!1;const V=v(R);d.current=V,f.current=(P==null?void 0:P.getBoundingClientRect())||null,y.current=wr(R.sourceEvent,f.current)}).on("drag",R=>{var K,_;const P=v(R),{autoPanOnNodeDrag:O,nodeDragThreshold:V}=a.getState();if(R.sourceEvent.type==="touchmove"&&R.sourceEvent.touches.length>1&&(m.current=!0),!m.current){if(!x.current&&p.current&&O&&(x.current=!0,N()),!p.current){const A=P.xSnapped-(((K=d==null?void 0:d.current)==null?void 0:K.x)??0),M=P.ySnapped-(((_=d==null?void 0:d.current)==null?void 0:_.y)??0);Math.sqrt(A*A+M*M)>V&&I(R)}(d.current.x!==P.xSnapped||d.current.y!==P.ySnapped)&&c.current&&p.current&&(g.current=R.sourceEvent,y.current=wr(R.sourceEvent,f.current),S(P))}}).on("end",R=>{if(!(!p.current||m.current)&&(u(!1),x.current=!1,p.current=!1,cancelAnimationFrame(h.current),c.current)){const{updateNodePositions:P,nodeInternals:O,onNodeDragStop:V,onSelectionDragStop:K}=a.getState(),_=s?V:Xc(K);if(P(c.current,!1,!1),_){const[A,M]=Yc({nodeId:s,dragItems:c.current,nodeInternals:O});_(R.sourceEvent,A,M)}}}).filter(R=>{const P=R.target;return!R.button&&(!n||!zg(P,`.${n}`,e))&&(!r||zg(P,r,e))});return w.call(C),()=>{w.on(".drag",null)}}}},[e,t,n,r,o,a,s,i,v]),l}function R1(){const e=$e();return k.useCallback(n=>{const{nodeInternals:r,nodeExtent:s,updateNodePositions:o,getNodes:i,snapToGrid:a,snapGrid:l,onError:u,nodesDraggable:c}=e.getState(),d=i().filter(m=>m.selected&&(m.draggable||c&&typeof m.draggable>"u")),h=a?l[0]:5,f=a?l[1]:5,y=n.isShiftPressed?4:1,g=n.x*h*y,x=n.y*f*y,p=d.map(m=>{if(m.positionAbsolute){const v={x:m.positionAbsolute.x+g,y:m.positionAbsolute.y+x};a&&(v.x=l[0]*Math.round(v.x/l[0]),v.y=l[1]*Math.round(v.y/l[1]));const{positionAbsolute:w,position:S}=P1(m,v,r,s,void 0,u);m.position=S,m.positionAbsolute=w}return m});o(p,!0,!1)},[])}const Js={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};var Ao=e=>{const t=({id:n,type:r,data:s,xPos:o,yPos:i,xPosOrigin:a,yPosOrigin:l,selected:u,onClick:c,onMouseEnter:d,onMouseMove:h,onMouseLeave:f,onContextMenu:y,onDoubleClick:g,style:x,className:p,isDraggable:m,isSelectable:v,isConnectable:w,isFocusable:S,selectNodesOnDrag:N,sourcePosition:I,targetPosition:C,hidden:R,resizeObserver:P,dragHandle:O,zIndex:V,isParent:K,noDragClassName:_,noPanClassName:A,initialized:M,disableKeyboardA11y:B,ariaLabel:z,rfId:T,hasHandleBounds:F})=>{const $=$e(),U=k.useRef(null),D=k.useRef(null),W=k.useRef(I),Y=k.useRef(C),X=k.useRef(r),G=v||m||c||d||h||f,te=R1(),j=Po(n,$.getState,d),q=Po(n,$.getState,h),Z=Po(n,$.getState,f),oe=Po(n,$.getState,y),le=Po(n,$.getState,g),pe=me=>{const{nodeDragThreshold:re}=$.getState();if(v&&(!N||!m||re>0)&&Cf({id:n,store:$,nodeRef:U}),c){const We=$.getState().nodeInternals.get(n);We&&c(me,{...We})}},ve=me=>{if(!Nf(me)&&!B)if(o1.includes(me.key)&&v){const re=me.key==="Escape";Cf({id:n,store:$,unselect:re,nodeRef:U})}else m&&u&&Object.prototype.hasOwnProperty.call(Js,me.key)&&($.setState({ariaLiveMessage:`Moved selected node ${me.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~o}, y: ${~~i}`}),te({x:Js[me.key].x,y:Js[me.key].y,isShiftPressed:me.shiftKey}))};k.useEffect(()=>()=>{D.current&&(P==null||P.unobserve(D.current),D.current=null)},[]),k.useEffect(()=>{if(U.current&&!R){const me=U.current;(!M||!F||D.current!==me)&&(D.current&&(P==null||P.unobserve(D.current)),P==null||P.observe(me),D.current=me)}},[R,M,F]),k.useEffect(()=>{const me=X.current!==r,re=W.current!==I,We=Y.current!==C;U.current&&(me||re||We)&&(me&&(X.current=r),re&&(W.current=I),We&&(Y.current=C),$.getState().updateNodeDimensions([{id:n,nodeElement:U.current,forceUpdate:!0}]))},[n,r,I,C]);const Ue=A1({nodeRef:U,disabled:R||!m,noDragClassName:_,handleSelector:O,nodeId:n,isSelectable:v,selectNodesOnDrag:N});return R?null:L.createElement("div",{className:et(["react-flow__node",`react-flow__node-${r}`,{[A]:m},p,{selected:u,selectable:v,parent:K,dragging:Ue}]),ref:U,style:{zIndex:V,transform:`translate(${a}px,${l}px)`,pointerEvents:G?"all":"none",visibility:M?"visible":"hidden",...x},"data-id":n,"data-testid":`rf__node-${n}`,onMouseEnter:j,onMouseMove:q,onMouseLeave:Z,onContextMenu:oe,onClick:pe,onDoubleClick:le,onKeyDown:S?ve:void 0,tabIndex:S?0:void 0,role:S?"button":void 0,"aria-describedby":B?void 0:`${E1}-${T}`,"aria-label":z},L.createElement(a4,{value:n},L.createElement(e,{id:n,data:s,type:r,xPos:o,yPos:i,selected:u,isConnectable:w,sourcePosition:I,targetPosition:C,dragging:Ue,dragHandle:O,zIndex:V})))};return t.displayName="NodeWrapper",k.memo(t)};const Y4=e=>{const t=e.getNodes().filter(n=>n.selected);return{...Ju(t,e.nodeOrigin),transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,userSelectionActive:e.userSelectionActive}};function X4({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){const r=$e(),{width:s,height:o,x:i,y:a,transformString:l,userSelectionActive:u}=xe(Y4,qe),c=R1(),d=k.useRef(null);if(k.useEffect(()=>{var y;n||(y=d.current)==null||y.focus({preventScroll:!0})},[n]),A1({nodeRef:d}),u||!s||!o)return null;const h=e?y=>{const g=r.getState().getNodes().filter(x=>x.selected);e(y,g)}:void 0,f=y=>{Object.prototype.hasOwnProperty.call(Js,y.key)&&c({x:Js[y.key].x,y:Js[y.key].y,isShiftPressed:y.shiftKey})};return L.createElement("div",{className:et(["react-flow__nodesselection","react-flow__container",t]),style:{transform:l}},L.createElement("div",{ref:d,className:"react-flow__nodesselection-rect",onContextMenu:h,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:s,height:o,top:a,left:i}}))}var Q4=k.memo(X4);const J4=e=>e.nodesSelectionActive,z1=({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:s,onPaneContextMenu:o,onPaneScroll:i,deleteKeyCode:a,onMove:l,onMoveStart:u,onMoveEnd:c,selectionKeyCode:d,selectionOnDrag:h,selectionMode:f,onSelectionStart:y,onSelectionEnd:g,multiSelectionKeyCode:x,panActivationKeyCode:p,zoomActivationKeyCode:m,elementsSelectable:v,zoomOnScroll:w,zoomOnPinch:S,panOnScroll:N,panOnScrollSpeed:I,panOnScrollMode:C,zoomOnDoubleClick:R,panOnDrag:P,defaultViewport:O,translateExtent:V,minZoom:K,maxZoom:_,preventScrolling:A,onSelectionContextMenu:M,noWheelClassName:B,noPanClassName:z,disableKeyboardA11y:T})=>{const F=xe(J4),$=Ji(d),U=Ji(p),D=U||P,W=U||N,Y=$||h&&D!==!0;return F4({deleteKeyCode:a,multiSelectionKeyCode:x}),L.createElement(H4,{onMove:l,onMoveStart:u,onMoveEnd:c,onPaneContextMenu:o,elementsSelectable:v,zoomOnScroll:w,zoomOnPinch:S,panOnScroll:W,panOnScrollSpeed:I,panOnScrollMode:C,zoomOnDoubleClick:R,panOnDrag:!$&&D,defaultViewport:O,translateExtent:V,minZoom:K,maxZoom:_,zoomActivationKeyCode:m,preventScrolling:A,noWheelClassName:B,noPanClassName:z},L.createElement(M1,{onSelectionStart:y,onSelectionEnd:g,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:s,onPaneContextMenu:o,onPaneScroll:i,panOnDrag:D,isSelecting:!!Y,selectionMode:f},e,F&&L.createElement(Q4,{onSelectionContextMenu:M,noPanClassName:z,disableKeyboardA11y:T})))};z1.displayName="FlowRenderer";var Z4=k.memo(z1);function e5(e){return xe(k.useCallback(n=>e?f1(n.nodeInternals,{x:0,y:0,width:n.width,height:n.height},n.transform,!0):n.getNodes(),[e]))}function t5(e){const t={input:Ao(e.input||b1),default:Ao(e.default||Mf),output:Ao(e.output||S1),group:Ao(e.group||tp)},n={},r=Object.keys(e).filter(s=>!["input","default","output","group"].includes(s)).reduce((s,o)=>(s[o]=Ao(e[o]||Mf),s),n);return{...t,...r}}const n5=({x:e,y:t,width:n,height:r,origin:s})=>!n||!r?{x:e,y:t}:s[0]<0||s[1]<0||s[0]>1||s[1]>1?{x:e,y:t}:{x:e-n*s[0],y:t-r*s[1]},r5=e=>({nodesDraggable:e.nodesDraggable,nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,updateNodeDimensions:e.updateNodeDimensions,onError:e.onError}),F1=e=>{const{nodesDraggable:t,nodesConnectable:n,nodesFocusable:r,elementsSelectable:s,updateNodeDimensions:o,onError:i}=xe(r5,qe),a=e5(e.onlyRenderVisibleElements),l=k.useRef(),u=k.useMemo(()=>{if(typeof ResizeObserver>"u")return null;const c=new ResizeObserver(d=>{const h=d.map(f=>({id:f.target.getAttribute("data-id"),nodeElement:f.target,forceUpdate:!0}));o(h)});return l.current=c,c},[]);return k.useEffect(()=>()=>{var c;(c=l==null?void 0:l.current)==null||c.disconnect()},[]),L.createElement("div",{className:"react-flow__nodes",style:np},a.map(c=>{var S,N,I;let d=c.type||"default";e.nodeTypes[d]||(i==null||i("003",Un.error003(d)),d="default");const h=e.nodeTypes[d]||e.nodeTypes.default,f=!!(c.draggable||t&&typeof c.draggable>"u"),y=!!(c.selectable||s&&typeof c.selectable>"u"),g=!!(c.connectable||n&&typeof c.connectable>"u"),x=!!(c.focusable||r&&typeof c.focusable>"u"),p=e.nodeExtent?Yh(c.positionAbsolute,e.nodeExtent):c.positionAbsolute,m=(p==null?void 0:p.x)??0,v=(p==null?void 0:p.y)??0,w=n5({x:m,y:v,width:c.width??0,height:c.height??0,origin:e.nodeOrigin});return L.createElement(h,{key:c.id,id:c.id,className:c.className,style:c.style,type:d,data:c.data,sourcePosition:c.sourcePosition||ae.Bottom,targetPosition:c.targetPosition||ae.Top,hidden:c.hidden,xPos:m,yPos:v,xPosOrigin:w.x,yPosOrigin:w.y,selectNodesOnDrag:e.selectNodesOnDrag,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,selected:!!c.selected,isDraggable:f,isSelectable:y,isConnectable:g,isFocusable:x,resizeObserver:u,dragHandle:c.dragHandle,zIndex:((S=c[Ce])==null?void 0:S.z)??0,isParent:!!((N=c[Ce])!=null&&N.isParent),noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,initialized:!!c.width&&!!c.height,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,ariaLabel:c.ariaLabel,hasHandleBounds:!!((I=c[Ce])!=null&&I.handleBounds)})}))};F1.displayName="NodeRenderer";var s5=k.memo(F1);const o5=(e,t,n)=>n===ae.Left?e-t:n===ae.Right?e+t:e,i5=(e,t,n)=>n===ae.Top?e-t:n===ae.Bottom?e+t:e,Og="react-flow__edgeupdater",Lg=({position:e,centerX:t,centerY:n,radius:r=10,onMouseDown:s,onMouseEnter:o,onMouseOut:i,type:a})=>L.createElement("circle",{onMouseDown:s,onMouseEnter:o,onMouseOut:i,className:et([Og,`${Og}-${a}`]),cx:o5(t,r,e),cy:i5(n,r,e),r,stroke:"transparent",fill:"transparent"}),a5=()=>!0;var gs=e=>{const t=({id:n,className:r,type:s,data:o,onClick:i,onEdgeDoubleClick:a,selected:l,animated:u,label:c,labelStyle:d,labelShowBg:h,labelBgStyle:f,labelBgPadding:y,labelBgBorderRadius:g,style:x,source:p,target:m,sourceX:v,sourceY:w,targetX:S,targetY:N,sourcePosition:I,targetPosition:C,elementsSelectable:R,hidden:P,sourceHandleId:O,targetHandleId:V,onContextMenu:K,onMouseEnter:_,onMouseMove:A,onMouseLeave:M,reconnectRadius:B,onReconnect:z,onReconnectStart:T,onReconnectEnd:F,markerEnd:$,markerStart:U,rfId:D,ariaLabel:W,isFocusable:Y,isReconnectable:X,pathOptions:G,interactionWidth:te,disableKeyboardA11y:j})=>{const q=k.useRef(null),[Z,oe]=k.useState(!1),[le,pe]=k.useState(!1),ve=$e(),Ue=k.useMemo(()=>`url('#${Tf(U,D)}')`,[U,D]),me=k.useMemo(()=>`url('#${Tf($,D)}')`,[$,D]);if(P)return null;const re=tt=>{var dn;const{edges:Yt,addSelectedEdges:Ir,unselectNodesAndEdges:Tr,multiSelectionActive:jr}=ve.getState(),Nn=Yt.find(wo=>wo.id===n);Nn&&(R&&(ve.setState({nodesSelectionActive:!1}),Nn.selected&&jr?(Tr({nodes:[],edges:[Nn]}),(dn=q.current)==null||dn.blur()):Ir([n])),i&&i(tt,Nn))},We=Co(n,ve.getState,a),qt=Co(n,ve.getState,K),Gt=Co(n,ve.getState,_),kn=Co(n,ve.getState,A),Vn=Co(n,ve.getState,M),En=(tt,Yt)=>{if(tt.button!==0)return;const{edges:Ir,isValidConnection:Tr}=ve.getState(),jr=Yt?m:p,Nn=(Yt?V:O)||null,dn=Yt?"target":"source",wo=Tr||a5,ic=Yt,xo=Ir.find(Mr=>Mr.id===n);pe(!0),T==null||T(tt,xo,dn);const ac=Mr=>{pe(!1),F==null||F(Mr,xo,dn)};y1({event:tt,handleId:Nn,nodeId:jr,onConnect:Mr=>z==null?void 0:z(xo,Mr),isTarget:ic,getState:ve.getState,setState:ve.setState,isValidConnection:wo,edgeUpdaterType:dn,onReconnectEnd:ac})},ls=tt=>En(tt,!0),Er=tt=>En(tt,!1),Nr=()=>oe(!0),us=()=>oe(!1),cs=!R&&!i,vo=tt=>{var Yt;if(!j&&o1.includes(tt.key)&&R){const{unselectNodesAndEdges:Ir,addSelectedEdges:Tr,edges:jr}=ve.getState();tt.key==="Escape"?((Yt=q.current)==null||Yt.blur(),Ir({edges:[jr.find(dn=>dn.id===n)]})):Tr([n])}};return L.createElement("g",{className:et(["react-flow__edge",`react-flow__edge-${s}`,r,{selected:l,animated:u,inactive:cs,updating:Z}]),onClick:re,onDoubleClick:We,onContextMenu:qt,onMouseEnter:Gt,onMouseMove:kn,onMouseLeave:Vn,onKeyDown:Y?vo:void 0,tabIndex:Y?0:void 0,role:Y?"button":"img","data-testid":`rf__edge-${n}`,"aria-label":W===null?void 0:W||`Edge from ${p} to ${m}`,"aria-describedby":Y?`${N1}-${D}`:void 0,ref:q},!le&&L.createElement(e,{id:n,source:p,target:m,selected:l,animated:u,label:c,labelStyle:d,labelShowBg:h,labelBgStyle:f,labelBgPadding:y,labelBgBorderRadius:g,data:o,style:x,sourceX:v,sourceY:w,targetX:S,targetY:N,sourcePosition:I,targetPosition:C,sourceHandleId:O,targetHandleId:V,markerStart:Ue,markerEnd:me,pathOptions:G,interactionWidth:te}),X&&L.createElement(L.Fragment,null,(X==="source"||X===!0)&&L.createElement(Lg,{position:I,centerX:v,centerY:w,radius:B,onMouseDown:ls,onMouseEnter:Nr,onMouseOut:us,type:"source"}),(X==="target"||X===!0)&&L.createElement(Lg,{position:C,centerX:S,centerY:N,radius:B,onMouseDown:Er,onMouseEnter:Nr,onMouseOut:us,type:"target"})))};return t.displayName="EdgeWrapper",k.memo(t)};function l5(e){const t={default:gs(e.default||gu),straight:gs(e.bezier||Jh),step:gs(e.step||Qh),smoothstep:gs(e.step||Qu),simplebezier:gs(e.simplebezier||Xh)},n={},r=Object.keys(e).filter(s=>!["default","bezier"].includes(s)).reduce((s,o)=>(s[o]=gs(e[o]||gu),s),n);return{...t,...r}}function Dg(e,t,n=null){const r=((n==null?void 0:n.x)||0)+t.x,s=((n==null?void 0:n.y)||0)+t.y,o=(n==null?void 0:n.width)||t.width,i=(n==null?void 0:n.height)||t.height;switch(e){case ae.Top:return{x:r+o/2,y:s};case ae.Right:return{x:r+o,y:s+i/2};case ae.Bottom:return{x:r+o/2,y:s+i};case ae.Left:return{x:r,y:s+i/2}}}function Hg(e,t){return e?e.length===1||!t?e[0]:t&&e.find(n=>n.id===t)||null:null}const u5=(e,t,n,r,s,o)=>{const i=Dg(n,e,t),a=Dg(o,r,s);return{sourceX:i.x,sourceY:i.y,targetX:a.x,targetY:a.y}};function c5({sourcePos:e,targetPos:t,sourceWidth:n,sourceHeight:r,targetWidth:s,targetHeight:o,width:i,height:a,transform:l}){const u={x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x+n,t.x+s),y2:Math.max(e.y+r,t.y+o)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=Yi({x:(0-l[0])/l[2],y:(0-l[1])/l[2],width:i/l[2],height:a/l[2]}),d=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),h=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(d*h)>0}function $g(e){var r,s,o,i,a;const t=((r=e==null?void 0:e[Ce])==null?void 0:r.handleBounds)||null,n=t&&(e==null?void 0:e.width)&&(e==null?void 0:e.height)&&typeof((s=e==null?void 0:e.positionAbsolute)==null?void 0:s.x)<"u"&&typeof((o=e==null?void 0:e.positionAbsolute)==null?void 0:o.y)<"u";return[{x:((i=e==null?void 0:e.positionAbsolute)==null?void 0:i.x)||0,y:((a=e==null?void 0:e.positionAbsolute)==null?void 0:a.y)||0,width:(e==null?void 0:e.width)||0,height:(e==null?void 0:e.height)||0},t,!!n]}const d5=[{level:0,isMaxLevel:!0,edges:[]}];function f5(e,t,n=!1){let r=-1;const s=e.reduce((i,a)=>{var c,d;const l=$t(a.zIndex);let u=l?a.zIndex:0;if(n){const h=t.get(a.target),f=t.get(a.source),y=a.selected||(h==null?void 0:h.selected)||(f==null?void 0:f.selected),g=Math.max(((c=f==null?void 0:f[Ce])==null?void 0:c.z)||0,((d=h==null?void 0:h[Ce])==null?void 0:d.z)||0,1e3);u=(l?a.zIndex:0)+(y?g:0)}return i[u]?i[u].push(a):i[u]=[a],r=u>r?u:r,i},{}),o=Object.entries(s).map(([i,a])=>{const l=+i;return{edges:a,level:l,isMaxLevel:l===r}});return o.length===0?d5:o}function h5(e,t,n){const r=xe(k.useCallback(s=>e?s.edges.filter(o=>{const i=t.get(o.source),a=t.get(o.target);return(i==null?void 0:i.width)&&(i==null?void 0:i.height)&&(a==null?void 0:a.width)&&(a==null?void 0:a.height)&&c5({sourcePos:i.positionAbsolute||{x:0,y:0},targetPos:a.positionAbsolute||{x:0,y:0},sourceWidth:i.width,sourceHeight:i.height,targetWidth:a.width,targetHeight:a.height,width:s.width,height:s.height,transform:s.transform})}):s.edges,[e,t]));return f5(r,t,n)}const p5=({color:e="none",strokeWidth:t=1})=>L.createElement("polyline",{style:{stroke:e,strokeWidth:t},strokeLinecap:"round",strokeLinejoin:"round",fill:"none",points:"-5,-4 0,0 -5,4"}),m5=({color:e="none",strokeWidth:t=1})=>L.createElement("polyline",{style:{stroke:e,fill:e,strokeWidth:t},strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"}),Bg={[Qi.Arrow]:p5,[Qi.ArrowClosed]:m5};function g5(e){const t=$e();return k.useMemo(()=>{var s,o;return Object.prototype.hasOwnProperty.call(Bg,e)?Bg[e]:((o=(s=t.getState()).onError)==null||o.call(s,"009",Un.error009(e)),null)},[e])}const y5=({id:e,type:t,color:n,width:r=12.5,height:s=12.5,markerUnits:o="strokeWidth",strokeWidth:i,orient:a="auto-start-reverse"})=>{const l=g5(t);return l?L.createElement("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${r}`,markerHeight:`${s}`,viewBox:"-10 -10 20 20",markerUnits:o,orient:a,refX:"0",refY:"0"},L.createElement(l,{color:n,strokeWidth:i})):null},v5=({defaultColor:e,rfId:t})=>n=>{const r=[];return n.edges.reduce((s,o)=>([o.markerStart,o.markerEnd].forEach(i=>{if(i&&typeof i=="object"){const a=Tf(i,t);r.includes(a)||(s.push({id:a,color:i.color||e,...i}),r.push(a))}}),s),[]).sort((s,o)=>s.id.localeCompare(o.id))},O1=({defaultColor:e,rfId:t})=>{const n=xe(k.useCallback(v5({defaultColor:e,rfId:t}),[e,t]),(r,s)=>!(r.length!==s.length||r.some((o,i)=>o.id!==s[i].id)));return L.createElement("defs",null,n.map(r=>L.createElement(y5,{id:r.id,key:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient})))};O1.displayName="MarkerDefinitions";var w5=k.memo(O1);const x5=e=>({nodesConnectable:e.nodesConnectable,edgesFocusable:e.edgesFocusable,edgesUpdatable:e.edgesUpdatable,elementsSelectable:e.elementsSelectable,width:e.width,height:e.height,connectionMode:e.connectionMode,nodeInternals:e.nodeInternals,onError:e.onError}),L1=({defaultMarkerColor:e,onlyRenderVisibleElements:t,elevateEdgesOnSelect:n,rfId:r,edgeTypes:s,noPanClassName:o,onEdgeContextMenu:i,onEdgeMouseEnter:a,onEdgeMouseMove:l,onEdgeMouseLeave:u,onEdgeClick:c,onEdgeDoubleClick:d,onReconnect:h,onReconnectStart:f,onReconnectEnd:y,reconnectRadius:g,children:x,disableKeyboardA11y:p})=>{const{edgesFocusable:m,edgesUpdatable:v,elementsSelectable:w,width:S,height:N,connectionMode:I,nodeInternals:C,onError:R}=xe(x5,qe),P=h5(t,C,n);return S?L.createElement(L.Fragment,null,P.map(({level:O,edges:V,isMaxLevel:K})=>L.createElement("svg",{key:O,style:{zIndex:O},width:S,height:N,className:"react-flow__edges react-flow__container"},K&&L.createElement(w5,{defaultColor:e,rfId:r}),L.createElement("g",null,V.map(_=>{const[A,M,B]=$g(C.get(_.source)),[z,T,F]=$g(C.get(_.target));if(!B||!F)return null;let $=_.type||"default";s[$]||(R==null||R("011",Un.error011($)),$="default");const U=s[$]||s.default,D=I===os.Strict?T.target:(T.target??[]).concat(T.source??[]),W=Hg(M.source,_.sourceHandle),Y=Hg(D,_.targetHandle),X=(W==null?void 0:W.position)||ae.Bottom,G=(Y==null?void 0:Y.position)||ae.Top,te=!!(_.focusable||m&&typeof _.focusable>"u"),j=_.reconnectable||_.updatable,q=typeof h<"u"&&(j||v&&typeof j>"u");if(!W||!Y)return R==null||R("008",Un.error008(W,_)),null;const{sourceX:Z,sourceY:oe,targetX:le,targetY:pe}=u5(A,W,X,z,Y,G);return L.createElement(U,{key:_.id,id:_.id,className:et([_.className,o]),type:$,data:_.data,selected:!!_.selected,animated:!!_.animated,hidden:!!_.hidden,label:_.label,labelStyle:_.labelStyle,labelShowBg:_.labelShowBg,labelBgStyle:_.labelBgStyle,labelBgPadding:_.labelBgPadding,labelBgBorderRadius:_.labelBgBorderRadius,style:_.style,source:_.source,target:_.target,sourceHandleId:_.sourceHandle,targetHandleId:_.targetHandle,markerEnd:_.markerEnd,markerStart:_.markerStart,sourceX:Z,sourceY:oe,targetX:le,targetY:pe,sourcePosition:X,targetPosition:G,elementsSelectable:w,onContextMenu:i,onMouseEnter:a,onMouseMove:l,onMouseLeave:u,onClick:c,onEdgeDoubleClick:d,onReconnect:h,onReconnectStart:f,onReconnectEnd:y,reconnectRadius:g,rfId:r,ariaLabel:_.ariaLabel,isFocusable:te,isReconnectable:q,pathOptions:"pathOptions"in _?_.pathOptions:void 0,interactionWidth:_.interactionWidth,disableKeyboardA11y:p})})))),x):null};L1.displayName="EdgeRenderer";var b5=k.memo(L1);const _5=e=>`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;function S5({children:e}){const t=xe(_5);return L.createElement("div",{className:"react-flow__viewport react-flow__container",style:{transform:t}},e)}function k5(e){const t=Zu(),n=k.useRef(!1);k.useEffect(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}const E5={[ae.Left]:ae.Right,[ae.Right]:ae.Left,[ae.Top]:ae.Bottom,[ae.Bottom]:ae.Top},D1=({nodeId:e,handleType:t,style:n,type:r=ir.Bezier,CustomComponent:s,connectionStatus:o})=>{var N,I,C;const{fromNode:i,handleId:a,toX:l,toY:u,connectionMode:c}=xe(k.useCallback(R=>({fromNode:R.nodeInternals.get(e),handleId:R.connectionHandleId,toX:(R.connectionPosition.x-R.transform[0])/R.transform[2],toY:(R.connectionPosition.y-R.transform[1])/R.transform[2],connectionMode:R.connectionMode}),[e]),qe),d=(N=i==null?void 0:i[Ce])==null?void 0:N.handleBounds;let h=d==null?void 0:d[t];if(c===os.Loose&&(h=h||(d==null?void 0:d[t==="source"?"target":"source"])),!i||!h)return null;const f=a?h.find(R=>R.id===a):h[0],y=f?f.x+f.width/2:(i.width??0)/2,g=f?f.y+f.height/2:i.height??0,x=(((I=i.positionAbsolute)==null?void 0:I.x)??0)+y,p=(((C=i.positionAbsolute)==null?void 0:C.y)??0)+g,m=f==null?void 0:f.position,v=m?E5[m]:null;if(!m||!v)return null;if(s)return L.createElement(s,{connectionLineType:r,connectionLineStyle:n,fromNode:i,fromHandle:f,fromX:x,fromY:p,toX:l,toY:u,fromPosition:m,toPosition:v,connectionStatus:o});let w="";const S={sourceX:x,sourceY:p,sourcePosition:m,targetX:l,targetY:u,targetPosition:v};return r===ir.Bezier?[w]=c1(S):r===ir.Step?[w]=If({...S,borderRadius:0}):r===ir.SmoothStep?[w]=If(S):r===ir.SimpleBezier?[w]=u1(S):w=`M${x},${p} ${l},${u}`,L.createElement("path",{d:w,fill:"none",className:"react-flow__connection-path",style:n})};D1.displayName="ConnectionLine";const N5=e=>({nodeId:e.connectionNodeId,handleType:e.connectionHandleType,nodesConnectable:e.nodesConnectable,connectionStatus:e.connectionStatus,width:e.width,height:e.height});function I5({containerStyle:e,style:t,type:n,component:r}){const{nodeId:s,handleType:o,nodesConnectable:i,width:a,height:l,connectionStatus:u}=xe(N5,qe);return!(s&&o&&a&&i)?null:L.createElement("svg",{style:e,width:a,height:l,className:"react-flow__edges react-flow__connectionline react-flow__container"},L.createElement("g",{className:et(["react-flow__connection",u])},L.createElement(D1,{nodeId:s,handleType:o,style:t,type:n,CustomComponent:r,connectionStatus:u})))}function Ug(e,t){return k.useRef(null),$e(),k.useMemo(()=>t(e),[e])}const H1=({nodeTypes:e,edgeTypes:t,onMove:n,onMoveStart:r,onMoveEnd:s,onInit:o,onNodeClick:i,onEdgeClick:a,onNodeDoubleClick:l,onEdgeDoubleClick:u,onNodeMouseEnter:c,onNodeMouseMove:d,onNodeMouseLeave:h,onNodeContextMenu:f,onSelectionContextMenu:y,onSelectionStart:g,onSelectionEnd:x,connectionLineType:p,connectionLineStyle:m,connectionLineComponent:v,connectionLineContainerStyle:w,selectionKeyCode:S,selectionOnDrag:N,selectionMode:I,multiSelectionKeyCode:C,panActivationKeyCode:R,zoomActivationKeyCode:P,deleteKeyCode:O,onlyRenderVisibleElements:V,elementsSelectable:K,selectNodesOnDrag:_,defaultViewport:A,translateExtent:M,minZoom:B,maxZoom:z,preventScrolling:T,defaultMarkerColor:F,zoomOnScroll:$,zoomOnPinch:U,panOnScroll:D,panOnScrollSpeed:W,panOnScrollMode:Y,zoomOnDoubleClick:X,panOnDrag:G,onPaneClick:te,onPaneMouseEnter:j,onPaneMouseMove:q,onPaneMouseLeave:Z,onPaneScroll:oe,onPaneContextMenu:le,onEdgeContextMenu:pe,onEdgeMouseEnter:ve,onEdgeMouseMove:Ue,onEdgeMouseLeave:me,onReconnect:re,onReconnectStart:We,onReconnectEnd:qt,reconnectRadius:Gt,noDragClassName:kn,noWheelClassName:Vn,noPanClassName:En,elevateEdgesOnSelect:ls,disableKeyboardA11y:Er,nodeOrigin:Nr,nodeExtent:us,rfId:cs})=>{const vo=Ug(e,t5),tt=Ug(t,l5);return k5(o),L.createElement(Z4,{onPaneClick:te,onPaneMouseEnter:j,onPaneMouseMove:q,onPaneMouseLeave:Z,onPaneContextMenu:le,onPaneScroll:oe,deleteKeyCode:O,selectionKeyCode:S,selectionOnDrag:N,selectionMode:I,onSelectionStart:g,onSelectionEnd:x,multiSelectionKeyCode:C,panActivationKeyCode:R,zoomActivationKeyCode:P,elementsSelectable:K,onMove:n,onMoveStart:r,onMoveEnd:s,zoomOnScroll:$,zoomOnPinch:U,zoomOnDoubleClick:X,panOnScroll:D,panOnScrollSpeed:W,panOnScrollMode:Y,panOnDrag:G,defaultViewport:A,translateExtent:M,minZoom:B,maxZoom:z,onSelectionContextMenu:y,preventScrolling:T,noDragClassName:kn,noWheelClassName:Vn,noPanClassName:En,disableKeyboardA11y:Er},L.createElement(S5,null,L.createElement(b5,{edgeTypes:tt,onEdgeClick:a,onEdgeDoubleClick:u,onlyRenderVisibleElements:V,onEdgeContextMenu:pe,onEdgeMouseEnter:ve,onEdgeMouseMove:Ue,onEdgeMouseLeave:me,onReconnect:re,onReconnectStart:We,onReconnectEnd:qt,reconnectRadius:Gt,defaultMarkerColor:F,noPanClassName:En,elevateEdgesOnSelect:!!ls,disableKeyboardA11y:Er,rfId:cs},L.createElement(I5,{style:m,type:p,component:v,containerStyle:w})),L.createElement("div",{className:"react-flow__edgelabel-renderer"}),L.createElement(s5,{nodeTypes:vo,onNodeClick:i,onNodeDoubleClick:l,onNodeMouseEnter:c,onNodeMouseMove:d,onNodeMouseLeave:h,onNodeContextMenu:f,selectNodesOnDrag:_,onlyRenderVisibleElements:V,noPanClassName:En,noDragClassName:kn,disableKeyboardA11y:Er,nodeOrigin:Nr,nodeExtent:us,rfId:cs})))};H1.displayName="GraphView";var T5=k.memo(H1);const Pf=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],qn={rfId:"1",width:0,height:0,transform:[0,0,1],nodeInternals:new Map,edges:[],onNodesChange:null,onEdgesChange:null,hasDefaultNodes:!1,hasDefaultEdges:!1,d3Zoom:null,d3Selection:null,d3ZoomHandler:void 0,minZoom:.5,maxZoom:2,translateExtent:Pf,nodeExtent:Pf,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionNodeId:null,connectionHandleId:null,connectionHandleType:"source",connectionPosition:{x:0,y:0},connectionStatus:null,connectionMode:os.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:[0,0],nodeDragThreshold:0,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesUpdatable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,fitViewOnInit:!1,fitViewOnInitDone:!1,fitViewOnInitOptions:void 0,onSelectionChange:[],multiSelectionActive:!1,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,connectionRadius:20,onError:t4,isValidConnection:void 0},j5=()=>gE((e,t)=>({...qn,setNodes:n=>{const{nodeInternals:r,nodeOrigin:s,elevateNodesOnSelect:o}=t();e({nodeInternals:qc(n,r,s,o)})},getNodes:()=>Array.from(t().nodeInternals.values()),setEdges:n=>{const{defaultEdgeOptions:r={}}=t();e({edges:n.map(s=>({...r,...s}))})},setDefaultNodesAndEdges:(n,r)=>{const s=typeof n<"u",o=typeof r<"u",i=s?qc(n,new Map,t().nodeOrigin,t().elevateNodesOnSelect):new Map;e({nodeInternals:i,edges:o?r:[],hasDefaultNodes:s,hasDefaultEdges:o})},updateNodeDimensions:n=>{const{onNodesChange:r,nodeInternals:s,fitViewOnInit:o,fitViewOnInitDone:i,fitViewOnInitOptions:a,domNode:l,nodeOrigin:u}=t(),c=l==null?void 0:l.querySelector(".react-flow__viewport");if(!c)return;const d=window.getComputedStyle(c),{m22:h}=new window.DOMMatrixReadOnly(d.transform),f=n.reduce((g,x)=>{const p=s.get(x.id);if(p!=null&&p.hidden)s.set(p.id,{...p,[Ce]:{...p[Ce],handleBounds:void 0}});else if(p){const m=Gh(x.nodeElement);!!(m.width&&m.height&&(p.width!==m.width||p.height!==m.height||x.forceUpdate))&&(s.set(p.id,{...p,[Ce]:{...p[Ce],handleBounds:{source:Fg(".source",x.nodeElement,h,u),target:Fg(".target",x.nodeElement,h,u)}},...m}),g.push({id:p.id,type:"dimensions",dimensions:m}))}return g},[]);T1(s,u);const y=i||o&&!i&&j1(t,{initial:!0,...a});e({nodeInternals:new Map(s),fitViewOnInitDone:y}),(f==null?void 0:f.length)>0&&(r==null||r(f))},updateNodePositions:(n,r=!0,s=!1)=>{const{triggerNodeChanges:o}=t(),i=n.map(a=>{const l={id:a.id,type:"position",dragging:s};return r&&(l.positionAbsolute=a.positionAbsolute,l.position=a.position),l});o(i)},triggerNodeChanges:n=>{const{onNodesChange:r,nodeInternals:s,hasDefaultNodes:o,nodeOrigin:i,getNodes:a,elevateNodesOnSelect:l}=t();if(n!=null&&n.length){if(o){const u=W4(n,a()),c=qc(u,s,i,l);e({nodeInternals:c})}r==null||r(n)}},addSelectedNodes:n=>{const{multiSelectionActive:r,edges:s,getNodes:o}=t();let i,a=null;r?i=n.map(l=>nr(l,!0)):(i=Hs(o(),n),a=Hs(s,[])),Wa({changedNodes:i,changedEdges:a,get:t,set:e})},addSelectedEdges:n=>{const{multiSelectionActive:r,edges:s,getNodes:o}=t();let i,a=null;r?i=n.map(l=>nr(l,!0)):(i=Hs(s,n),a=Hs(o(),[])),Wa({changedNodes:a,changedEdges:i,get:t,set:e})},unselectNodesAndEdges:({nodes:n,edges:r}={})=>{const{edges:s,getNodes:o}=t(),i=n||o(),a=r||s,l=i.map(c=>(c.selected=!1,nr(c.id,!1))),u=a.map(c=>nr(c.id,!1));Wa({changedNodes:l,changedEdges:u,get:t,set:e})},setMinZoom:n=>{const{d3Zoom:r,maxZoom:s}=t();r==null||r.scaleExtent([n,s]),e({minZoom:n})},setMaxZoom:n=>{const{d3Zoom:r,minZoom:s}=t();r==null||r.scaleExtent([s,n]),e({maxZoom:n})},setTranslateExtent:n=>{var r;(r=t().d3Zoom)==null||r.translateExtent(n),e({translateExtent:n})},resetSelectedElements:()=>{const{edges:n,getNodes:r}=t(),o=r().filter(a=>a.selected).map(a=>nr(a.id,!1)),i=n.filter(a=>a.selected).map(a=>nr(a.id,!1));Wa({changedNodes:o,changedEdges:i,get:t,set:e})},setNodeExtent:n=>{const{nodeInternals:r}=t();r.forEach(s=>{s.positionAbsolute=Yh(s.position,n)}),e({nodeExtent:n,nodeInternals:new Map(r)})},panBy:n=>{const{transform:r,width:s,height:o,d3Zoom:i,d3Selection:a,translateExtent:l}=t();if(!i||!a||!n.x&&!n.y)return!1;const u=On.translate(r[0]+n.x,r[1]+n.y).scale(r[2]),c=[[0,0],[s,o]],d=i==null?void 0:i.constrain()(u,c,l);return i.transform(a,d),r[0]!==d.x||r[1]!==d.y||r[2]!==d.k},cancelConnection:()=>e({connectionNodeId:qn.connectionNodeId,connectionHandleId:qn.connectionHandleId,connectionHandleType:qn.connectionHandleType,connectionStatus:qn.connectionStatus,connectionStartHandle:qn.connectionStartHandle,connectionEndHandle:qn.connectionEndHandle}),reset:()=>e({...qn})}),Object.is),rp=({children:e})=>{const t=k.useRef(null);return t.current||(t.current=j5()),L.createElement(GI,{value:t.current},e)};rp.displayName="ReactFlowProvider";const $1=({children:e})=>k.useContext(Xu)?L.createElement(L.Fragment,null,e):L.createElement(rp,null,e);$1.displayName="ReactFlowWrapper";const M5={input:b1,default:Mf,output:S1,group:tp},C5={default:gu,straight:Jh,step:Qh,smoothstep:Qu,simplebezier:Xh},P5=[0,0],A5=[15,15],R5={x:0,y:0,zoom:1},z5={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0},B1=k.forwardRef(({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,className:s,nodeTypes:o=M5,edgeTypes:i=C5,onNodeClick:a,onEdgeClick:l,onInit:u,onMove:c,onMoveStart:d,onMoveEnd:h,onConnect:f,onConnectStart:y,onConnectEnd:g,onClickConnectStart:x,onClickConnectEnd:p,onNodeMouseEnter:m,onNodeMouseMove:v,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:N,onNodeDragStart:I,onNodeDrag:C,onNodeDragStop:R,onNodesDelete:P,onEdgesDelete:O,onSelectionChange:V,onSelectionDragStart:K,onSelectionDrag:_,onSelectionDragStop:A,onSelectionContextMenu:M,onSelectionStart:B,onSelectionEnd:z,connectionMode:T=os.Strict,connectionLineType:F=ir.Bezier,connectionLineStyle:$,connectionLineComponent:U,connectionLineContainerStyle:D,deleteKeyCode:W="Backspace",selectionKeyCode:Y="Shift",selectionOnDrag:X=!1,selectionMode:G=Xi.Full,panActivationKeyCode:te="Space",multiSelectionKeyCode:j=mu()?"Meta":"Control",zoomActivationKeyCode:q=mu()?"Meta":"Control",snapToGrid:Z=!1,snapGrid:oe=A5,onlyRenderVisibleElements:le=!1,selectNodesOnDrag:pe=!0,nodesDraggable:ve,nodesConnectable:Ue,nodesFocusable:me,nodeOrigin:re=P5,edgesFocusable:We,edgesUpdatable:qt,elementsSelectable:Gt,defaultViewport:kn=R5,minZoom:Vn=.5,maxZoom:En=2,translateExtent:ls=Pf,preventScrolling:Er=!0,nodeExtent:Nr,defaultMarkerColor:us="#b1b1b7",zoomOnScroll:cs=!0,zoomOnPinch:vo=!0,panOnScroll:tt=!1,panOnScrollSpeed:Yt=.5,panOnScrollMode:Ir=Wr.Free,zoomOnDoubleClick:Tr=!0,panOnDrag:jr=!0,onPaneClick:Nn,onPaneMouseEnter:dn,onPaneMouseMove:wo,onPaneMouseLeave:ic,onPaneScroll:xo,onPaneContextMenu:ac,children:kp,onEdgeContextMenu:Mr,onEdgeDoubleClick:cb,onEdgeMouseEnter:db,onEdgeMouseMove:fb,onEdgeMouseLeave:hb,onEdgeUpdate:pb,onEdgeUpdateStart:mb,onEdgeUpdateEnd:gb,onReconnect:yb,onReconnectStart:vb,onReconnectEnd:wb,reconnectRadius:xb=10,edgeUpdaterRadius:bb=10,onNodesChange:_b,onEdgesChange:Sb,noDragClassName:kb="nodrag",noWheelClassName:Eb="nowheel",noPanClassName:Ep="nopan",fitView:Nb=!1,fitViewOptions:Ib,connectOnClick:Tb=!0,attributionPosition:jb,proOptions:Mb,defaultEdgeOptions:Cb,elevateNodesOnSelect:Pb=!0,elevateEdgesOnSelect:Ab=!1,disableKeyboardA11y:Np=!1,autoPanOnConnect:Rb=!0,autoPanOnNodeDrag:zb=!0,connectionRadius:Fb=20,isValidConnection:Ob,onError:Lb,style:Db,id:Ip,nodeDragThreshold:Hb,...$b},Bb)=>{const lc=Ip||"1";return L.createElement("div",{...$b,style:{...Db,...z5},ref:Bb,className:et(["react-flow",s]),"data-testid":"rf__wrapper",id:Ip},L.createElement($1,null,L.createElement(T5,{onInit:u,onMove:c,onMoveStart:d,onMoveEnd:h,onNodeClick:a,onEdgeClick:l,onNodeMouseEnter:m,onNodeMouseMove:v,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:N,nodeTypes:o,edgeTypes:i,connectionLineType:F,connectionLineStyle:$,connectionLineComponent:U,connectionLineContainerStyle:D,selectionKeyCode:Y,selectionOnDrag:X,selectionMode:G,deleteKeyCode:W,multiSelectionKeyCode:j,panActivationKeyCode:te,zoomActivationKeyCode:q,onlyRenderVisibleElements:le,selectNodesOnDrag:pe,defaultViewport:kn,translateExtent:ls,minZoom:Vn,maxZoom:En,preventScrolling:Er,zoomOnScroll:cs,zoomOnPinch:vo,zoomOnDoubleClick:Tr,panOnScroll:tt,panOnScrollSpeed:Yt,panOnScrollMode:Ir,panOnDrag:jr,onPaneClick:Nn,onPaneMouseEnter:dn,onPaneMouseMove:wo,onPaneMouseLeave:ic,onPaneScroll:xo,onPaneContextMenu:ac,onSelectionContextMenu:M,onSelectionStart:B,onSelectionEnd:z,onEdgeContextMenu:Mr,onEdgeDoubleClick:cb,onEdgeMouseEnter:db,onEdgeMouseMove:fb,onEdgeMouseLeave:hb,onReconnect:yb??pb,onReconnectStart:vb??mb,onReconnectEnd:wb??gb,reconnectRadius:xb??bb,defaultMarkerColor:us,noDragClassName:kb,noWheelClassName:Eb,noPanClassName:Ep,elevateEdgesOnSelect:Ab,rfId:lc,disableKeyboardA11y:Np,nodeOrigin:re,nodeExtent:Nr}),L.createElement(k4,{nodes:e,edges:t,defaultNodes:n,defaultEdges:r,onConnect:f,onConnectStart:y,onConnectEnd:g,onClickConnectStart:x,onClickConnectEnd:p,nodesDraggable:ve,nodesConnectable:Ue,nodesFocusable:me,edgesFocusable:We,edgesUpdatable:qt,elementsSelectable:Gt,elevateNodesOnSelect:Pb,minZoom:Vn,maxZoom:En,nodeExtent:Nr,onNodesChange:_b,onEdgesChange:Sb,snapToGrid:Z,snapGrid:oe,connectionMode:T,translateExtent:ls,connectOnClick:Tb,defaultEdgeOptions:Cb,fitView:Nb,fitViewOptions:Ib,onNodesDelete:P,onEdgesDelete:O,onNodeDragStart:I,onNodeDrag:C,onNodeDragStop:R,onSelectionDrag:_,onSelectionDragStart:K,onSelectionDragStop:A,noPanClassName:Ep,nodeOrigin:re,rfId:lc,autoPanOnConnect:Rb,autoPanOnNodeDrag:zb,onError:Lb,connectionRadius:Fb,isValidConnection:Ob,nodeDragThreshold:Hb}),L.createElement(_4,{onSelectionChange:V}),kp,L.createElement(XI,{proOptions:Mb,position:jb}),L.createElement(j4,{rfId:lc,disableKeyboardA11y:Np})))});B1.displayName="ReactFlow";const U1=({id:e,x:t,y:n,width:r,height:s,style:o,color:i,strokeColor:a,strokeWidth:l,className:u,borderRadius:c,shapeRendering:d,onClick:h,selected:f})=>{const{background:y,backgroundColor:g}=o||{},x=i||y||g;return L.createElement("rect",{className:et(["react-flow__minimap-node",{selected:f},u]),x:t,y:n,rx:c,ry:c,width:r,height:s,fill:x,stroke:a,strokeWidth:l,shapeRendering:d,onClick:h?p=>h(p,e):void 0})};U1.displayName="MiniMapNode";var F5=k.memo(U1);const O5=e=>e.nodeOrigin,L5=e=>e.getNodes().filter(t=>!t.hidden&&t.width&&t.height),Qc=e=>e instanceof Function?e:()=>e;function D5({nodeStrokeColor:e="transparent",nodeColor:t="#e2e2e2",nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:s=2,nodeComponent:o=F5,onClick:i}){const a=xe(L5,qe),l=xe(O5),u=Qc(t),c=Qc(e),d=Qc(n),h=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return L.createElement(L.Fragment,null,a.map(f=>{const{x:y,y:g}=Yr(f,l).positionAbsolute;return L.createElement(o,{key:f.id,x:y,y:g,width:f.width,height:f.height,style:f.style,selected:f.selected,className:d(f),color:u(f),borderRadius:r,strokeColor:c(f),strokeWidth:s,shapeRendering:h,onClick:i,id:f.id})}))}var H5=k.memo(D5);const $5=200,B5=150,U5=e=>{const t=e.getNodes(),n={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:n,boundingRect:t.length>0?ZI(Ju(t,e.nodeOrigin),n):n,rfId:e.rfId}},W5="react-flow__minimap-desc";function W1({style:e,className:t,nodeStrokeColor:n="transparent",nodeColor:r="#e2e2e2",nodeClassName:s="",nodeBorderRadius:o=5,nodeStrokeWidth:i=2,nodeComponent:a,maskColor:l="rgb(240, 240, 240, 0.6)",maskStrokeColor:u="none",maskStrokeWidth:c=1,position:d="bottom-right",onClick:h,onNodeClick:f,pannable:y=!1,zoomable:g=!1,ariaLabel:x="React Flow mini map",inversePan:p=!1,zoomStep:m=10,offsetScale:v=5}){const w=$e(),S=k.useRef(null),{boundingRect:N,viewBB:I,rfId:C}=xe(U5,qe),R=(e==null?void 0:e.width)??$5,P=(e==null?void 0:e.height)??B5,O=N.width/R,V=N.height/P,K=Math.max(O,V),_=K*R,A=K*P,M=v*K,B=N.x-(_-N.width)/2-M,z=N.y-(A-N.height)/2-M,T=_+M*2,F=A+M*2,$=`${W5}-${C}`,U=k.useRef(0);U.current=K,k.useEffect(()=>{if(S.current){const Y=Dt(S.current),X=j=>{const{transform:q,d3Selection:Z,d3Zoom:oe}=w.getState();if(j.sourceEvent.type!=="wheel"||!Z||!oe)return;const le=-j.sourceEvent.deltaY*(j.sourceEvent.deltaMode===1?.05:j.sourceEvent.deltaMode?1:.002)*m,pe=q[2]*Math.pow(2,le);oe.scaleTo(Z,pe)},G=j=>{const{transform:q,d3Selection:Z,d3Zoom:oe,translateExtent:le,width:pe,height:ve}=w.getState();if(j.sourceEvent.type!=="mousemove"||!Z||!oe)return;const Ue=U.current*Math.max(1,q[2])*(p?-1:1),me={x:q[0]-j.sourceEvent.movementX*Ue,y:q[1]-j.sourceEvent.movementY*Ue},re=[[0,0],[pe,ve]],We=On.translate(me.x,me.y).scale(q[2]),qt=oe.constrain()(We,re,le);oe.transform(Z,qt)},te=Zw().on("zoom",y?G:null).on("zoom.wheel",g?X:null);return Y.call(te),()=>{Y.on("zoom",null)}}},[y,g,p,m]);const D=h?Y=>{const X=Zt(Y);h(Y,{x:X[0],y:X[1]})}:void 0,W=f?(Y,X)=>{const G=w.getState().nodeInternals.get(X);f(Y,G)}:void 0;return L.createElement(qh,{position:d,style:e,className:et(["react-flow__minimap",t]),"data-testid":"rf__minimap"},L.createElement("svg",{width:R,height:P,viewBox:`${B} ${z} ${T} ${F}`,role:"img","aria-labelledby":$,ref:S,onClick:D},x&&L.createElement("title",{id:$},x),L.createElement(H5,{onClick:W,nodeColor:r,nodeStrokeColor:n,nodeBorderRadius:o,nodeClassName:s,nodeStrokeWidth:i,nodeComponent:a}),L.createElement("path",{className:"react-flow__minimap-mask",d:`M${B-M},${z-M}h${T+M*2}v${F+M*2}h${-T-M*2}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`,fill:l,fillRule:"evenodd",stroke:u,strokeWidth:c,pointerEvents:"none"})))}W1.displayName="MiniMap";var V5=k.memo(W1);function K5(){return L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},L.createElement("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"}))}function q5(){return L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5"},L.createElement("path",{d:"M0 0h32v4.2H0z"}))}function G5(){return L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30"},L.createElement("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"}))}function Y5(){return L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},L.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"}))}function X5(){return L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},L.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"}))}const ai=({children:e,className:t,...n})=>L.createElement("button",{type:"button",className:et(["react-flow__controls-button",t]),...n},e);ai.displayName="ControlButton";const Q5=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom}),V1=({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:r=!0,fitViewOptions:s,onZoomIn:o,onZoomOut:i,onFitView:a,onInteractiveChange:l,className:u,children:c,position:d="bottom-left"})=>{const h=$e(),[f,y]=k.useState(!1),{isInteractive:g,minZoomReached:x,maxZoomReached:p}=xe(Q5,qe),{zoomIn:m,zoomOut:v,fitView:w}=Zu();if(k.useEffect(()=>{y(!0)},[]),!f)return null;const S=()=>{m(),o==null||o()},N=()=>{v(),i==null||i()},I=()=>{w(s),a==null||a()},C=()=>{h.setState({nodesDraggable:!g,nodesConnectable:!g,elementsSelectable:!g}),l==null||l(!g)};return L.createElement(qh,{className:et(["react-flow__controls",u]),position:d,style:e,"data-testid":"rf__controls"},t&&L.createElement(L.Fragment,null,L.createElement(ai,{onClick:S,className:"react-flow__controls-zoomin",title:"zoom in","aria-label":"zoom in",disabled:p},L.createElement(K5,null)),L.createElement(ai,{onClick:N,className:"react-flow__controls-zoomout",title:"zoom out","aria-label":"zoom out",disabled:x},L.createElement(q5,null))),n&&L.createElement(ai,{className:"react-flow__controls-fitview",onClick:I,title:"fit view","aria-label":"fit view"},L.createElement(G5,null)),r&&L.createElement(ai,{className:"react-flow__controls-interactive",onClick:C,title:"toggle interactivity","aria-label":"toggle interactivity"},g?L.createElement(X5,null):L.createElement(Y5,null)),c)};V1.displayName="Controls";var J5=k.memo(V1),Wt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Wt||(Wt={}));function Z5({color:e,dimensions:t,lineWidth:n}){return L.createElement("path",{stroke:e,strokeWidth:n,d:`M${t[0]/2} 0 V${t[1]} M0 ${t[1]/2} H${t[0]}`})}function eT({color:e,radius:t}){return L.createElement("circle",{cx:t,cy:t,r:t,fill:e})}const tT={[Wt.Dots]:"#91919a",[Wt.Lines]:"#eee",[Wt.Cross]:"#e2e2e2"},nT={[Wt.Dots]:1,[Wt.Lines]:1,[Wt.Cross]:6},rT=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function K1({id:e,variant:t=Wt.Dots,gap:n=20,size:r,lineWidth:s=1,offset:o=2,color:i,style:a,className:l}){const u=k.useRef(null),{transform:c,patternId:d}=xe(rT,qe),h=i||tT[t],f=r||nT[t],y=t===Wt.Dots,g=t===Wt.Cross,x=Array.isArray(n)?n:[n,n],p=[x[0]*c[2]||1,x[1]*c[2]||1],m=f*c[2],v=g?[m,m]:p,w=y?[m/o,m/o]:[v[0]/o,v[1]/o];return L.createElement("svg",{className:et(["react-flow__background",l]),style:{...a,position:"absolute",width:"100%",height:"100%",top:0,left:0},ref:u,"data-testid":"rf__background"},L.createElement("pattern",{id:d+e,x:c[0]%p[0],y:c[1]%p[1],width:p[0],height:p[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${w[0]},-${w[1]})`},y?L.createElement(eT,{color:h,radius:m/o}):L.createElement(Z5,{dimensions:v,color:h,lineWidth:s})),L.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${d+e})`}))}K1.displayName="Background";var sT=k.memo(K1);const oT=["#6366f1","#10b981","#f59e0b","#ec4899","#06b6d4","#ef4444"];function iT({id:e,data:t}){const n=ne(u=>u.setSubspaceColor),r=ne(u=>u.setSubspaceDescription),s=ne(u=>u.setExpandedSubspace),[o,i]=k.useState(!1),[a,l]=k.useState(!1);return E.jsxs("div",{className:"relative h-full w-full rounded-2xl border-2 border-dashed",style:{width:t.width,height:t.height,borderColor:`${t.color}66`,background:`${t.color}10`,boxShadow:`inset 0 0 60px ${t.color}12`},children:[E.jsxs("div",{className:"absolute left-3 top-2 select-none text-[11px] font-semibold uppercase tracking-wider",style:{color:`${t.color}cc`},children:["◈ ",t.name]}),E.jsxs("div",{className:"absolute right-2 top-2 flex items-center gap-1 nodrag",children:[E.jsx(Jc,{label:"Description",onClick:()=>{i(u=>!u),l(!1)},children:"i"}),E.jsx(Jc,{label:"Colour",onClick:()=>{l(u=>!u),i(!1)},children:E.jsx("span",{className:"h-3 w-3 rounded-full",style:{background:t.color}})}),E.jsx(Jc,{label:"Expand",onClick:()=>s(e),children:"⛶"})]}),o&&E.jsx("div",{className:"absolute right-2 top-10 z-10 w-60 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag",children:E.jsx("textarea",{autoFocus:!0,defaultValue:t.description,onBlur:u=>r(e,u.target.value),placeholder:"Describe this subspace…",className:"h-20 w-full resize-none rounded bg-slate-800 p-2 text-[11px] text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500"})}),a&&E.jsx("div",{className:"absolute right-2 top-10 z-10 flex gap-1.5 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag",children:oT.map(u=>E.jsx("button",{onClick:()=>{n(e,u),l(!1)},className:"h-5 w-5 rounded-full ring-2 ring-transparent hover:ring-white/60",style:{background:u}},u))})]})}function Jc({children:e,label:t,onClick:n}){return E.jsx("button",{title:t,onClick:r=>{r.stopPropagation(),n()},className:"flex h-6 w-6 items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 text-[11px] text-slate-300 hover:bg-slate-800 hover:text-white",children:e})}const aT=k.memo(iT);function lT({id:e,data:t}){const n=ne(o=>o.focusedFileId),r=ne(o=>o.openTerminal),s=n===e;return E.jsx("div",{onDoubleClick:o=>{o.stopPropagation(),r(e)},className:["relative h-full w-full rounded-xl border bg-slate-900/80 backdrop-blur-sm transition-all",s?"border-amber-400 shadow-[0_0_0_1px_rgba(251,191,36,0.7),0_0_22px_rgba(251,191,36,0.35)]":"border-slate-700 shadow-lg shadow-black/40"].join(" "),style:{width:t.width,height:t.height},children:E.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 border-b border-slate-700/70",children:[E.jsxs("span",{className:"flex gap-1",children:[E.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-rose-400/80"}),E.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-400/80"}),E.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400/80"})]}),E.jsx("span",{className:"truncate text-[11px] font-mono text-slate-200",children:t.name}),E.jsx("span",{className:"ml-auto truncate text-[9px] text-slate-500",children:t.folderPath})]})})}const uT=k.memo(lT);function cT({id:e,data:t}){const n=ne(l=>l.focusedNodeId),r=ne(l=>l.functions),s=ne(l=>l.setFocusedNode),o=n===e,i=n?r[n]:null,a=i&&!o&&i.fileId===t.fileId;return E.jsxs("div",{onClick:l=>{l.stopPropagation(),s(o?null:e)},className:["group relative flex items-center gap-2 rounded-full border px-3 text-[12px] font-mono select-none cursor-pointer transition-all duration-150",o?"border-indigo-400 bg-indigo-500/25 text-indigo-100 shadow-[0_0_0_1px_rgba(99,102,241,0.6),0_0_18px_rgba(99,102,241,0.45)]":a?"border-slate-700/60 bg-transparent text-slate-500":"border-slate-600 bg-slate-700/70 text-slate-100 hover:border-slate-400"].join(" "),style:{width:t.width,height:t.height},children:[E.jsx(_n,{type:"target",position:ae.Left,className:"!bg-slate-400"}),E.jsx("span",{className:["h-2 w-2 shrink-0 rounded-full",o?"bg-indigo-300":a?"bg-slate-600":"bg-emerald-400"].join(" ")}),E.jsx("span",{className:"truncate",children:t.name}),E.jsx(_n,{type:"source",position:ae.Right,className:"!bg-slate-400"})]})}const dT=k.memo(cT);function fT({data:e}){return E.jsxs("div",{className:"flex h-[88px] w-[150px] flex-col rounded-xl border border-cyan-500/50 bg-gradient-to-br from-cyan-900/40 to-slate-900/80 p-2.5 shadow-lg shadow-cyan-900/30",children:[E.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-cyan-300/80",children:[E.jsx("span",{children:"⚙"}),E.jsx("span",{children:"tunable"})]}),E.jsx("div",{className:"mt-1 truncate font-mono text-[12px] text-slate-100",children:e.name}),E.jsx("div",{className:"mt-auto rounded-md bg-slate-950/60 px-2 py-1 text-center font-mono text-[13px] font-semibold text-cyan-200",children:e.value})]})}const hT=k.memo(fT);function pT({data:e}){const t=e.side==="left";return E.jsxs("div",{className:"group relative nodrag",style:{width:16,height:16},children:[E.jsx("div",{className:"h-4 w-4 rounded-full ring-2 ring-slate-950 transition-transform group-hover:scale-125",style:{background:e.color,boxShadow:`0 0 10px ${e.color}`}}),t?E.jsx(_n,{type:"source",position:ae.Right,style:{background:e.color}}):E.jsx(_n,{type:"target",position:ae.Left,style:{background:e.color}}),E.jsx("div",{className:["pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-0.5 text-[10px] font-mono text-slate-200 opacity-0 ring-1 ring-slate-700 transition-opacity group-hover:opacity-100",t?"right-6":"left-6"].join(" "),children:e.label})]})}const mT=k.memo(pT);function gT({data:e}){return E.jsx("div",{className:"h-full w-full rounded-2xl border border-dashed border-slate-700/70 bg-slate-800/15",style:{width:e.width,height:e.height},children:E.jsxs("div",{className:"px-3 py-1.5 text-[11px] font-mono tracking-tight text-slate-500",children:[E.jsx("span",{className:"text-slate-600",children:"📁"})," ",e.name]})})}const yT=k.memo(gT);function vT({id:e,data:t}){const n=ne(d=>d.selectedProjectFileId),r=ne(d=>d.projectEdges),s=ne(d=>d.selectProjectFile),o=ne(d=>d.openEditor);let i="idle";n&&(n===e?i="selected":r.some(d=>d.source===n&&d.target===e)?i="downstream":r.some(d=>d.target===n&&d.source===e)?i="upstream":i="dim");const a=t.name.split(".").pop(),l=nE[a]||"#64748b",u=t.kind==="image"?"🖼":t.kind==="audio"?"🔊":null,c=i==="selected"?"border-indigo-400 bg-indigo-500/20 shadow-[0_0_0_1px_rgba(99,102,241,0.7),0_0_20px_rgba(99,102,241,0.4)]":i==="downstream"?"border-emerald-400/80 bg-slate-800/90":i==="upstream"?"border-amber-400/80 bg-slate-800/90":"border-slate-700 bg-slate-800/80 hover:border-slate-500";return E.jsxs("div",{onClick:d=>{d.stopPropagation(),s(e)},onDoubleClick:d=>{d.stopPropagation(),o(e)},title:"Double-click to open",className:["flex cursor-pointer flex-col rounded-lg border px-3 py-2 transition-all duration-200",c,i==="dim"?"opacity-20 hover:opacity-50":"opacity-100"].join(" "),style:{width:178,height:64},children:[E.jsx(_n,{type:"target",position:ae.Left,className:"!h-2 !w-2 !bg-amber-400"}),E.jsxs("div",{className:"flex items-center gap-2",children:[u?E.jsx("span",{className:"text-[13px] leading-none",children:u}):E.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-sm",style:{background:l}}),E.jsx("span",{className:"truncate font-mono text-[12px] text-slate-100",children:t.name})]}),E.jsx("span",{className:"mt-1 truncate pl-[18px] text-[9px] text-slate-500",children:t.folder}),E.jsx(_n,{type:"source",position:ae.Right,className:"!h-2 !w-2 !bg-emerald-400"})]})}const wT=k.memo(vT);function xT({id:e,sourceX:t,sourceY:n,targetX:r,targetY:s,markerEnd:o,style:i,data:a}){const l=r-t,u=s-n,c=Math.hypot(l,u),d=(a==null?void 0:a.lane)??0,h=(a==null?void 0:a.bow)==="up"?-1:1,f=(Math.min(170,55+c*.16)+d*30)*h,y=t+l*.25,g=t+l*.75,x=(n+s)/2+f,p=`M ${t},${n} C ${y},${x} ${g},${x} ${r},${s}`;return E.jsx(yo,{id:e,path:p,markerEnd:o,style:i})}const bT={subspace:aT,file:uT,function:dT,tunable:hT,port:mT,cluster:yT,projectFile:wT},_T={around:xT},Wg="#34d399",Vg="#f59e0b";function ys(e,t,n,r={}){return{id:`e-${e}-${t}`,source:e,target:t,type:"around",animated:!0,className:"focus-edge",style:{stroke:n,strokeWidth:2},markerEnd:{type:Qi.ArrowClosed,color:n,width:16,height:16},data:{lane:r.lane??0,bow:r.bow??"down"}}}function ST(){const e=Zu(),t=k.useRef(null),n=ne(j=>j.viewMode),r=ne(j=>j.setViewMode),s=ne(j=>j.files),o=ne(j=>j.functions),i=ne(j=>j.subspaces),a=ne(j=>j.tunables),l=ne(j=>j.calls),u=ne(j=>j.focusedNodeId),c=ne(j=>j.projectFiles),d=ne(j=>j.projectFolders),h=ne(j=>j.projectEdges),f=ne(j=>j.selectedProjectFileId),y=ne(j=>j.selectProjectFile),g=ne(j=>j.clearProjectSelection),x=ne(j=>j.moveNode),p=ne(j=>j.clearFocus),m=ne(j=>j.setFocusedNode),v=ne(j=>j.requestFocus),w=ne(j=>j.setFlowApi),S=ne(j=>j.saveBookmark),N=ne(j=>j.createSubspace),I=ne(j=>j.createFile),C=ne(j=>j.createFunction),R=ne(j=>j.pendingFocus),P=ne(j=>j.consumePendingFocus),[O,V]=k.useState(null),[K,_]=k.useState(""),A=n==="project";k.useEffect(()=>{w({getViewport:()=>e.getViewport(),setViewport:(j,q)=>e.setViewport(j,q),fitTo:(j,q)=>e.fitView({nodes:[{id:j}],...q})})},[e,w]),k.useEffect(()=>{const j=setTimeout(()=>e.fitView({duration:500,padding:.18}),60);return()=>clearTimeout(j)},[n,e]),k.useEffect(()=>{if(!R)return;const j=R.id,q=!!i[j],oe=!!o[j]?o[j].fileId:j;e.fitView({nodes:[{id:oe}],duration:650,padding:q?.06:.4,maxZoom:q?1.6:1.5}),P()},[R,e,i,o,P]);const M=k.useMemo(()=>{const j=[],q=tg({focusedNodeId:u,functions:o,calls:l});for(const Z of Object.values(i))j.push({id:Z.id,type:"subspace",position:Z.position,data:{...Z,width:Z.size.width,height:Z.size.height},style:{width:Z.size.width,height:Z.size.height,zIndex:0},zIndex:0});for(const Z of Object.values(s)){const oe=eg(o,Z.id);j.push({id:Z.id,type:"file",position:Z.position,data:{...Z,width:oe.width,height:oe.height},style:{width:oe.width,height:oe.height},zIndex:1})}for(const Z of Object.values(o))j.push({id:Z.id,type:"function",position:Z.position,parentNode:Z.fileId,extent:"parent",data:{name:Z.name,fileId:Z.fileId,width:pt.W,height:pt.H},zIndex:2});if(q){const Z=eg(o,q.fileId);q.leftPorts.forEach((oe,le)=>{const pe=Fa[oe.extFileId]||"#94a3b8";j.push({id:`port-l-${oe.extFnId}`,type:"port",parentNode:q.fileId,position:{x:-16/2,y:Qe.HEADER+8+le*It.GAP_Y},data:{side:"left",color:pe,label:`${o[oe.extFnId].name} · ${s[oe.extFileId].name}`},draggable:!1,selectable:!1,zIndex:6})}),q.rightPorts.forEach((oe,le)=>{const pe=Fa[oe.extFileId]||"#94a3b8";j.push({id:`port-r-${oe.extFnId}`,type:"port",parentNode:q.fileId,position:{x:Z.width-It.W/2,y:Qe.HEADER+8+le*It.GAP_Y},data:{side:"right",color:pe,label:`${o[oe.extFnId].name} · ${s[oe.extFileId].name}`},draggable:!1,selectable:!1,zIndex:6})})}for(const Z of Object.values(a))j.push({id:Z.id,type:"tunable",position:Z.position,data:Z,zIndex:1});return j},[s,o,i,a,l,u]),B=k.useMemo(()=>{const j=tg({focusedNodeId:u,functions:o,calls:l});if(!j)return[];const q=j.focusedNodeId,Z=[];return j.internalUpstream.forEach((oe,le)=>Z.push(ys(oe,q,"#818cf8",{lane:le,bow:"up"}))),j.internalDownstream.forEach((oe,le)=>Z.push(ys(q,oe,"#818cf8",{lane:le,bow:"down"}))),j.leftPorts.forEach((oe,le)=>Z.push(ys(`port-l-${oe.extFnId}`,q,Fa[oe.extFileId]||"#94a3b8",{lane:le,bow:"up"}))),j.rightPorts.forEach((oe,le)=>Z.push(ys(q,`port-r-${oe.extFnId}`,Fa[oe.extFileId]||"#94a3b8",{lane:le,bow:"down"}))),Z},[u,o,l]),z=k.useMemo(()=>{const j=[];for(const q of Object.values(d))j.push({id:`${q.id}::cluster`,type:"cluster",position:q.position,data:{name:q.name,width:q.size.width,height:q.size.height},style:{width:q.size.width,height:q.size.height,zIndex:0},zIndex:0,selectable:!1,draggable:!1});for(const q of Object.values(c))j.push({id:q.id,type:"projectFile",position:q.position,data:q,zIndex:2});return j},[c,d]),T=k.useMemo(()=>{const j=uE({selectedProjectFileId:f,projectEdges:h});if(!j)return[];const q=[];return j.downstream.forEach((Z,oe)=>q.push(ys(j.id,Z,Wg,{lane:oe,bow:"down"}))),j.upstream.forEach((Z,oe)=>q.push(ys(Z,j.id,Vg,{lane:oe,bow:"up"}))),q},[f,h]),F=A?z:M,$=A?T:B,U=k.useCallback(j=>{for(const q of j)q.type==="position"&&q.position&&x(q.id,q.position)},[x]),D=k.useCallback(()=>{p(),g(),V(null)},[p,g]),W=k.useCallback(j=>{if(j.preventDefault(),A)return;const q=t.current.getBoundingClientRect(),Z=e.screenToFlowPosition({x:j.clientX,y:j.clientY});V({x:j.clientX-q.left,y:j.clientY-q.top,flowPos:Z})},[e,A]),Y=k.useCallback(()=>{const j=t.current.getBoundingClientRect(),q=j.width-240,Z=j.height-220,oe=e.screenToFlowPosition({x:j.left+q,y:j.top+Z});V({x:q,y:Z,flowPos:oe})},[e]),X=()=>{const j=window.prompt("Name this bookmark",`View ${Date.now()%1e3}`);j!==null&&S(e.getViewport(),j)},G=k.useMemo(()=>{const j=K.trim().toLowerCase();if(!j)return[];const q=[];if(A)for(const Z of Object.values(c))Z.name.toLowerCase().includes(j)&&q.push({id:Z.id,label:Z.name,kind:"file"});else{for(const Z of Object.values(o))Z.name.toLowerCase().includes(j)&&q.push({id:Z.id,label:Z.name,kind:"fn"});for(const Z of Object.values(s))Z.name.toLowerCase().includes(j)&&q.push({id:Z.id,label:Z.name,kind:"file"});for(const Z of Object.values(i))Z.name.toLowerCase().includes(j)&&q.push({id:Z.id,label:Z.name,kind:"sub"})}return q.slice(0,6)},[K,A,c,o,s,i]),te=j=>{A?y(j.id):j.kind==="fn"&&m(j.id),v(j.id),_("")};return E.jsxs("div",{ref:t,className:"relative h-full w-full",onClick:()=>V(null),children:[E.jsx("div",{className:"pointer-events-none absolute left-3 top-3 z-20",children:E.jsxs("div",{className:"pointer-events-auto inline-flex rounded-full border border-slate-700 bg-slate-900/90 p-0.5 text-xs shadow-lg backdrop-blur",children:[E.jsx(Kg,{active:A,onClick:()=>r("project"),children:"📁 Project Map"}),E.jsx(Kg,{active:!A,onClick:()=>r("functions"),children:"◯ Functions"})]})}),E.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center",children:E.jsxs("div",{className:"pointer-events-auto flex items-center gap-2",children:[E.jsxs("div",{className:"relative",children:[E.jsx("input",{value:K,onChange:j=>_(j.target.value),onKeyDown:j=>j.key==="Enter"&&G[0]&&te(G[0]),placeholder:A?"Search files…":"Search files & functions…",className:"w-80 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 shadow-lg outline-none backdrop-blur placeholder:text-slate-500 focus:border-indigo-500"}),E.jsx("span",{className:"pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500",children:"⌕"}),G.length>0&&E.jsx("div",{className:"absolute mt-2 w-80 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl backdrop-blur",children:G.map(j=>E.jsxs("button",{onClick:()=>te(j),className:"flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-200 hover:bg-slate-800",children:[E.jsx("span",{className:"text-[10px] uppercase text-slate-500",children:j.kind}),E.jsx("span",{className:"truncate font-mono",children:j.label})]},`${j.kind}-${j.id}`))})]}),E.jsxs("button",{onClick:X,className:"flex items-center gap-1.5 rounded-full border border-indigo-500/60 bg-indigo-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-indigo-500",children:[E.jsx("span",{children:"★"})," Save view"]})]})}),E.jsxs(B1,{nodes:F,edges:$,nodeTypes:bT,edgeTypes:_T,onNodesChange:U,onPaneClick:D,onPaneContextMenu:W,minZoom:.1,maxZoom:3,fitView:!0,proOptions:{hideAttribution:!0},className:"bg-canvas",children:[E.jsx(sT,{variant:Wt.Dots,gap:26,size:1.5,color:"#1e2533"}),E.jsx(J5,{className:"!bg-slate-900 !border-slate-700",showInteractive:!1}),E.jsx(V5,{pannable:!0,zoomable:!0,maskColor:"rgba(2,6,23,0.7)",className:"!bg-slate-900 !border !border-slate-700",nodeColor:j=>{var q;return j.type==="subspace"?`${((q=j.data)==null?void 0:q.color)||"#6366f1"}55`:j.type==="cluster"?"#1e293b":j.type==="projectFile"||j.type==="function"?"#475569":j.type==="tunable"?"#06b6d4":"#334155"}})]}),A&&E.jsxs("div",{className:"pointer-events-none absolute bottom-6 left-6 z-20 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-[11px] shadow-lg backdrop-blur",children:[E.jsx("div",{className:"mb-1 font-semibold text-slate-300",children:"Click to trace · double-click to open"}),E.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[E.jsx("span",{className:"inline-block h-0.5 w-5",style:{background:Wg}})," affects (imports) →"]}),E.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[E.jsx("span",{className:"inline-block h-0.5 w-5",style:{background:Vg}})," ← affected by (imported by)"]}),E.jsx("div",{className:"mt-1 text-slate-500",children:"🖼 image · 🔊 audio · ▢ text → editor/viewer"})]}),!A&&E.jsx("button",{onClick:Y,title:"Create…",className:"absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-xl shadow-indigo-900/50 transition hover:bg-indigo-500 active:scale-95",children:"+"}),O&&E.jsx(kT,{x:O.x,y:O.y,files:Object.values(s),onClose:()=>V(null),onCreateSubspace:()=>{N(O.flowPos),V(null)},onCreateFile:()=>{const j=window.prompt("Folder path for the new file","src/feature");j!==null&&(I(O.flowPos,j),V(null))},onCreateFunction:j=>{const q=window.prompt("Function name","newFn()");q!==null&&(C(j,q),V(null))}})]})}function Kg({active:e,onClick:t,children:n}){return E.jsx("button",{onClick:t,className:["rounded-full px-3 py-1.5 font-medium transition-colors",e?"bg-indigo-600 text-white":"text-slate-400 hover:text-slate-200"].join(" "),children:n})}function kT({x:e,y:t,files:n,onCreateSubspace:r,onCreateFile:s,onCreateFunction:o,onClose:i}){const[a,l]=k.useState(!1);return E.jsxs("div",{className:"absolute z-30 w-56 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 py-1 text-sm shadow-2xl backdrop-blur",style:{left:e,top:t},onClick:u=>u.stopPropagation(),onContextMenu:u=>u.preventDefault(),children:[E.jsx("div",{className:"px-3 py-1 text-[10px] uppercase tracking-wider text-slate-500",children:"Create"}),E.jsx(Ka,{icon:"◈",onClick:r,children:"New Subspace"}),E.jsx(Ka,{icon:"▢",onClick:s,children:"New File…"}),E.jsxs("div",{className:"relative",children:[E.jsx(Ka,{icon:"◯",chevron:!0,onClick:()=>l(u=>!u),children:"New Function"}),a&&E.jsxs("div",{className:"border-t border-slate-800 bg-slate-950/60",children:[n.length===0&&E.jsx("div",{className:"px-6 py-2 text-xs text-slate-500",children:"No files yet"}),n.map(u=>E.jsxs("button",{onClick:()=>o(u.id),className:"block w-full px-6 py-1.5 text-left text-xs text-slate-300 hover:bg-slate-800",children:["in ",E.jsx("span",{className:"font-mono text-slate-100",children:u.name})]},u.id))]})]}),E.jsx("div",{className:"my-1 border-t border-slate-800"}),E.jsx(Ka,{icon:"✕",onClick:i,children:"Close"})]})}function Ka({icon:e,children:t,onClick:n,chevron:r}){return E.jsxs("button",{onClick:n,className:"flex w-full items-center gap-3 px-3 py-1.5 text-left text-slate-200 hover:bg-slate-800",children:[E.jsx("span",{className:"w-4 text-center text-slate-400",children:e}),E.jsx("span",{className:"flex-1",children:t}),r&&E.jsx("span",{className:"text-slate-500",children:"▾"})]})}function ET(){return E.jsx(rp,{children:E.jsx(ST,{})})}function NT(){const e=ne(i=>i.terminalFileId),t=ne(i=>i.closeTerminal),n=ne(i=>i.files),r=ne(i=>i.functions);if(k.useEffect(()=>{const i=a=>a.key==="Escape"&&t();return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[t]),!e)return null;const s=n[e];if(!s)return null;const o=Object.values(r).filter(i=>i.fileId===e);return E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",onClick:t,children:E.jsxs("div",{className:"flex h-[70vh] w-[760px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl",onClick:i=>i.stopPropagation(),children:[E.jsxs("div",{className:"flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2",children:[E.jsxs("span",{className:"flex gap-1.5",children:[E.jsx("span",{className:"h-3 w-3 rounded-full bg-rose-500"}),E.jsx("span",{className:"h-3 w-3 rounded-full bg-amber-500"}),E.jsx("span",{className:"h-3 w-3 rounded-full bg-emerald-500"})]}),E.jsxs("span",{className:"ml-2 font-mono text-xs text-slate-300",children:[s.folderPath,"/",s.name]}),E.jsx("button",{onClick:t,className:"ml-auto text-slate-500 hover:text-white",children:"✕"})]}),E.jsxs("div",{className:"thin-scroll flex-1 overflow-auto bg-[#0b0e14] p-4 font-mono text-[13px] leading-relaxed",children:[E.jsx("div",{className:"text-slate-500",children:"// "+s.name+" — "+o.length+" functions"}),E.jsxs("div",{className:"mt-2",children:[E.jsx("span",{className:"text-fuchsia-400",children:"import"})," ",E.jsx("span",{className:"text-slate-300",children:"{ runtime }"})," ",E.jsx("span",{className:"text-fuchsia-400",children:"from"})," ",E.jsx("span",{className:"text-emerald-400",children:"'../runtime'"})]}),o.map(i=>E.jsxs("div",{className:"mt-4",children:[E.jsx("span",{className:"text-sky-400",children:"export function"})," ",E.jsx("span",{className:"text-amber-300",children:i.name.replace("()","")}),E.jsxs("span",{className:"text-slate-300",children:["(args) ","{"]}),E.jsxs("div",{className:"pl-6 text-slate-400",children:[E.jsx("span",{className:"text-fuchsia-400",children:"return"})," runtime.exec(",E.jsxs("span",{className:"text-emerald-400",children:["'",i.name,"'"]}),")"]}),E.jsx("span",{className:"text-slate-300",children:"}"})]},i.id)),o.length===0&&E.jsx("div",{className:"mt-4 text-slate-600",children:"// empty file — add a function from the canvas"})]}),E.jsxs("div",{className:"flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-4 py-2 font-mono text-xs",children:[E.jsx("span",{className:"text-emerald-400",children:"➜"}),E.jsx("span",{className:"text-sky-400",children:s.folderPath}),E.jsx("span",{className:"text-slate-300",children:"$ "}),E.jsxs("span",{className:"text-slate-500",children:["vim ",s.name]}),E.jsx("span",{className:"ml-1 inline-block h-3.5 w-2 animate-pulse bg-slate-400"})]})]})})}function Q(e,t,n,r,s){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,n),n}function b(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)}let yu=function(){const{crypto:e}=globalThis;if(e!=null&&e.randomUUID)return yu=e.randomUUID.bind(e),e.randomUUID();const t=new Uint8Array(1),n=e?()=>e.getRandomValues(t)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,r=>(+r^n()&15>>+r/4).toString(16))};function ho(e){return typeof e=="object"&&e!==null&&("name"in e&&e.name==="AbortError"||"message"in e&&String(e.message).includes("FetchRequestCanceledException"))}const vu=e=>{if(e instanceof Error)return e;if(typeof e=="object"&&e!==null){try{if(Object.prototype.toString.call(e)==="[object Error]"){const t=new Error(e.message,e.cause?{cause:e.cause}:{});return e.stack&&(t.stack=e.stack),e.cause&&!t.cause&&(t.cause=e.cause),e.name&&(t.name=e.name),t}}catch{}try{return new Error(JSON.stringify(e))}catch{}}return new Error(e)};class ie extends Error{}class Ge extends ie{constructor(t,n,r,s,o){super(`${Ge.makeMessage(t,n,r)}`),this.status=t,this.headers=s,this.requestID=s==null?void 0:s.get("request-id"),this.error=n,this.type=o??null}static makeMessage(t,n,r){const s=n!=null&&n.message?typeof n.message=="string"?n.message:JSON.stringify(n.message):n?JSON.stringify(n):r;return t&&s?`${t} ${s}`:t?`${t} status code (no body)`:s||"(no status code or body)"}static generate(t,n,r,s){var a;if(!t||!s)return new la({message:r,cause:vu(n)});const o=n,i=(a=o==null?void 0:o.error)==null?void 0:a.type;return t===400?new G1(t,o,r,s,i):t===401?new Y1(t,o,r,s,i):t===403?new X1(t,o,r,s,i):t===404?new Q1(t,o,r,s,i):t===409?new J1(t,o,r,s,i):t===422?new Z1(t,o,r,s,i):t===429?new ex(t,o,r,s,i):t>=500?new tx(t,o,r,s,i):new Ge(t,o,r,s,i)}}class nn extends Ge{constructor({message:t}={}){super(void 0,void 0,t||"Request was aborted.",void 0)}}class la extends Ge{constructor({message:t,cause:n}){super(void 0,void 0,t||"Connection error.",void 0),n&&(this.cause=n)}}class q1 extends la{constructor({message:t}={}){super({message:t??"Request timed out."})}}class IT extends ie{constructor(t,{cause:n}={}){super(t??"Retryable error."),n!==void 0&&(this.cause=n)}}class G1 extends Ge{}class Y1 extends Ge{}class X1 extends Ge{}class Q1 extends Ge{}class J1 extends Ge{}class Z1 extends Ge{}class ex extends Ge{}class tx extends Ge{}const TT=/^[a-z][a-z0-9+.-]*:/i,jT=e=>TT.test(e);let mt=e=>(mt=Array.isArray,mt(e)),qg=mt;function Af(e){return typeof e!="object"?{}:e??{}}function Gg(e){if(!e)return!0;for(const t in e)return!1;return!0}function MT(e,t){return Object.prototype.hasOwnProperty.call(e,t)}const CT=(e,t)=>{if(typeof t!="number"||!Number.isInteger(t))throw new ie(`${e} must be an integer`);if(t<0)throw new ie(`${e} must be a positive integer`);return t},nx=e=>{try{return JSON.parse(e)}catch{return}},Xr=(e,t)=>new Promise(n=>{if(t!=null&&t.aborted)return n();const r=()=>{clearTimeout(s),n()},s=setTimeout(()=>{t==null||t.removeEventListener("abort",r),n()},e);t==null||t.addEventListener("abort",r,{once:!0})}),ar="0.106.0",PT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";function AT(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}const RT=()=>{var n;const e=AT();if(e==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ar,"X-Stainless-OS":Xg(Deno.build.os),"X-Stainless-Arch":Yg(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:((n=Deno.version)==null?void 0:n.deno)??"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ar,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(e==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ar,"X-Stainless-OS":Xg(globalThis.process.platform??"unknown"),"X-Stainless-Arch":Yg(globalThis.process.arch??"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":globalThis.process.version??"unknown"};const t=zT();return t?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ar,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${t.browser}`,"X-Stainless-Runtime-Version":t.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ar,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function zT(){if(typeof navigator>"u"||!navigator)return null;const e=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:t,pattern:n}of e){const r=n.exec(navigator.userAgent);if(r){const s=r[1]||0,o=r[2]||0,i=r[3]||0;return{browser:t,version:`${s}.${o}.${i}`}}}return null}const Yg=e=>e==="x32"?"x32":e==="x86_64"||e==="x64"?"x64":e==="arm"?"arm":e==="aarch64"||e==="arm64"?"arm64":e?`other:${e}`:"unknown",Xg=e=>(e=e.toLowerCase(),e.includes("ios")?"iOS":e==="android"?"Android":e==="darwin"?"MacOS":e==="win32"?"Windows":e==="freebsd"?"FreeBSD":e==="openbsd"?"OpenBSD":e==="linux"?"Linux":e?`Other:${e}`:"Unknown");let Qg;const sp=()=>Qg??(Qg=RT());function FT(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function rx(...e){const t=globalThis.ReadableStream;if(typeof t>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...e)}function sx(e){let t=Symbol.asyncIterator in e?e[Symbol.asyncIterator]():e[Symbol.iterator]();return rx({start(){},async pull(n){const{done:r,value:s}=await t.next();r?n.close():n.enqueue(s)},async cancel(){var n;await((n=t.return)==null?void 0:n.call(t))}})}function op(e){if(e[Symbol.asyncIterator])return e;const t=e.getReader();return{async next(){try{const n=await t.read();return n!=null&&n.done&&t.releaseLock(),n}catch(n){throw t.releaseLock(),n}},async return(){const n=t.cancel();return t.releaseLock(),await n,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function OT(e){var r,s;if(e===null||typeof e!="object")return;if(e[Symbol.asyncIterator]){await((s=(r=e[Symbol.asyncIterator]()).return)==null?void 0:s.call(r));return}const t=e.getReader(),n=t.cancel();t.releaseLock(),await n}const LT=({headers:e,body:t})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(t)}),ox="RFC3986",ix=e=>String(e),Jg={RFC1738:e=>String(e).replace(/%20/g,"+"),RFC3986:ix},DT="RFC1738";let Rf=(e,t)=>(Rf=Object.hasOwn??Function.prototype.call.bind(Object.prototype.hasOwnProperty),Rf(e,t));const hn=(()=>{const e=[];for(let t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e})(),Zc=1024,HT=(e,t,n,r,s)=>{if(e.length===0)return e;let o=e;if(typeof e=="symbol"?o=Symbol.prototype.toString.call(e):typeof e!="string"&&(o=String(e)),n==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(a){return"%26%23"+parseInt(a.slice(2),16)+"%3B"});let i="";for(let a=0;a<o.length;a+=Zc){const l=o.length>=Zc?o.slice(a,a+Zc):o,u=[];for(let c=0;c<l.length;++c){let d=l.charCodeAt(c);if(d===45||d===46||d===95||d===126||d>=48&&d<=57||d>=65&&d<=90||d>=97&&d<=122||s===DT&&(d===40||d===41)){u[u.length]=l.charAt(c);continue}if(d<128){u[u.length]=hn[d];continue}if(d<2048){u[u.length]=hn[192|d>>6]+hn[128|d&63];continue}if(d<55296||d>=57344){u[u.length]=hn[224|d>>12]+hn[128|d>>6&63]+hn[128|d&63];continue}c+=1,d=65536+((d&1023)<<10|l.charCodeAt(c)&1023),u[u.length]=hn[240|d>>18]+hn[128|d>>12&63]+hn[128|d>>6&63]+hn[128|d&63]}i+=u.join("")}return i};function $T(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Zg(e,t){if(mt(e)){const n=[];for(let r=0;r<e.length;r+=1)n.push(t(e[r]));return n}return t(e)}const ax={brackets(e){return String(e)+"[]"},comma:"comma",indices(e,t){return String(e)+"["+t+"]"},repeat(e){return String(e)}},lx=function(e,t){Array.prototype.push.apply(e,mt(t)?t:[t])};let e0;const Oe={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:HT,encodeValuesOnly:!1,format:ox,formatter:ix,indices:!1,serializeDate(e){return(e0??(e0=Function.prototype.call.bind(Date.prototype.toISOString)))(e)},skipNulls:!1,strictNullHandling:!1};function BT(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"}const ed={};function ux(e,t,n,r,s,o,i,a,l,u,c,d,h,f,y,g,x,p){let m=e,v=p,w=0,S=!1;for(;(v=v.get(ed))!==void 0&&!S;){const P=v.get(e);if(w+=1,typeof P<"u"){if(P===w)throw new RangeError("Cyclic object value");S=!0}typeof v.get(ed)>"u"&&(w=0)}if(typeof u=="function"?m=u(t,m):m instanceof Date?m=h==null?void 0:h(m):n==="comma"&&mt(m)&&(m=Zg(m,function(P){return P instanceof Date?h==null?void 0:h(P):P})),m===null){if(o)return l&&!g?l(t,Oe.encoder,x,"key",f):t;m=""}if(BT(m)||$T(m)){if(l){const P=g?t:l(t,Oe.encoder,x,"key",f);return[(y==null?void 0:y(P))+"="+(y==null?void 0:y(l(m,Oe.encoder,x,"value",f)))]}return[(y==null?void 0:y(t))+"="+(y==null?void 0:y(String(m)))]}const N=[];if(typeof m>"u")return N;let I;if(n==="comma"&&mt(m))g&&l&&(m=Zg(m,l)),I=[{value:m.length>0?m.join(",")||null:void 0}];else if(mt(u))I=u;else{const P=Object.keys(m);I=c?P.sort(c):P}const C=a?String(t).replace(/\./g,"%2E"):String(t),R=r&&mt(m)&&m.length===1?C+"[]":C;if(s&&mt(m)&&m.length===0)return R+"[]";for(let P=0;P<I.length;++P){const O=I[P],V=typeof O=="object"&&typeof O.value<"u"?O.value:m[O];if(i&&V===null)continue;const K=d&&a?O.replace(/\./g,"%2E"):O,_=mt(m)?typeof n=="function"?n(R,K):R:R+(d?"."+K:"["+K+"]");p.set(e,w);const A=new WeakMap;A.set(ed,p),lx(N,ux(V,_,n,r,s,o,i,a,n==="comma"&&g&&mt(m)?null:l,u,c,d,h,f,y,g,x,A))}return N}function UT(e=Oe){if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");const t=e.charset||Oe.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");let n=ox;if(typeof e.format<"u"){if(!Rf(Jg,e.format))throw new TypeError("Unknown format option provided.");n=e.format}const r=Jg[n];let s=Oe.filter;(typeof e.filter=="function"||mt(e.filter))&&(s=e.filter);let o;if(e.arrayFormat&&e.arrayFormat in ax?o=e.arrayFormat:"indices"in e?o=e.indices?"indices":"repeat":o=Oe.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");const i=typeof e.allowDots>"u"?e.encodeDotInKeys?!0:Oe.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:Oe.addQueryPrefix,allowDots:i,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:Oe.allowEmptyArrays,arrayFormat:o,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:Oe.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?Oe.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:Oe.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:Oe.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:Oe.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:Oe.encodeValuesOnly,filter:s,format:n,formatter:r,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:Oe.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:Oe.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:Oe.strictNullHandling}}function WT(e,t={}){let n=e;const r=UT(t);let s,o;typeof r.filter=="function"?(o=r.filter,n=o("",n)):mt(r.filter)&&(o=r.filter,s=o);const i=[];if(typeof n!="object"||n===null)return"";const a=ax[r.arrayFormat],l=a==="comma"&&r.commaRoundTrip;s||(s=Object.keys(n)),r.sort&&s.sort(r.sort);const u=new WeakMap;for(let h=0;h<s.length;++h){const f=s[h];r.skipNulls&&n[f]===null||lx(i,ux(n[f],f,a,l,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,u))}const c=i.join(r.delimiter);let d=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),c.length>0?d+c:""}function VT(e){return WT(e,{arrayFormat:"brackets"})}const KT="modulepreload",qT=function(e){return"/"+e},t0={},Pt=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=qT(l),l in t0)return;t0[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":KT,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((h,f)=>{d.addEventListener("load",h),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},GT="urn:ietf:params:oauth:grant-type:jwt-bearer",YT="refresh_token",cx="/v1/oauth/token",wu="oauth-2025-04-20",XT="oidc-federation-2026-04-01",QT=120,ip=30,JT=5,n0=1<<20;function dx(e){if(!e)return;let t;try{t=new URL(e)}catch(r){throw new Se(`Invalid token endpoint base URL "${e}": ${r}`)}if(t.protocol==="https:")return;const n=t.hostname.toLowerCase().replace(/^\[|\]$/g,"");if(!(t.protocol==="http:"&&(n==="localhost"||n==="127.0.0.1"||n==="::1")))throw new Se(`Refusing to send credential over non-https token endpoint "${e}"`)}async function fx(e,t){const n=await ej(e);let r;try{r=JSON.parse(n)}catch{throw new Se(`Token endpoint returned non-JSON response (status ${e.status})`,e.status,Bt(n),t)}if(!r.access_token)throw new Se(`Token endpoint response missing access_token: ${JSON.stringify(Bt(r))}`,e.status,Bt(r),t);if(r.token_type&&r.token_type.toLowerCase()!=="bearer")throw new Se(`Token endpoint response: unsupported token_type "${r.token_type}" (want Bearer)`,e.status,Bt(r),t);return r}const td=2e3,ZT=new Set(["error","error_description","error_uri"]);function Bt(e){if(e==null)return e;if(typeof e=="string"){let t;try{t=JSON.parse(e)}catch{return e.length<=td?e:e.slice(0,td)+`... <${e.length-td} more chars>`}return JSON.stringify(Bt(t))}if(typeof e=="object"&&!Array.isArray(e)){const t={};for(const[n,r]of Object.entries(e))ZT.has(n)&&(t[n]=r);return t}return null}async function hx(e,t=n=>console.warn(`anthropic-sdk: ${n}`)){if(typeof process>"u"||process.platform==="win32")return;const n=await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);let r=e,s;try{r=await n.promises.realpath(e),s=await n.promises.stat(r)}catch{return}const o=s.mode&511;if(o&18)throw new Se(`Credentials file at ${r} is group/world-writable (mode 0o${o.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${r}\`.`);if(o&36)throw new Se(`Credentials file at ${r} is group/world-readable (mode 0o${o.toString(8)}); run \`chmod 600 ${r}\` before retrying.`);typeof process.getuid=="function"&&s.uid!==process.getuid()&&t(`credentials file at ${r} is owned by uid ${s.uid} (current process uid ${process.getuid()}); verify this is intentional.`)}async function px(e,t){const n=await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),s=(await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[])).dirname(e);await n.promises.mkdir(s,{recursive:!0,mode:448});const o=`${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;try{const i=await n.promises.open(o,"w",384);try{await i.writeFile(JSON.stringify(t,null,2)),await i.sync()}finally{await i.close()}await n.promises.rename(o,e)}catch(i){throw await n.promises.unlink(o).catch(()=>{}),i}try{const i=await n.promises.open(s,"r");try{await i.sync()}finally{await i.close()}}catch{}}async function ej(e){if(!e.body)return"";const t=e.body.getReader(),n=[];let r=0;for(;;){const{done:o,value:i}=await t.read();if(o)break;if(r+i.length>n0){const a=n0-r;a>0&&n.push(i.subarray(0,a)),await t.cancel();break}n.push(i),r+=i.length}let s;if(n.length===1)s=n[0];else{s=new Uint8Array(n.reduce((i,a)=>i+a.length,0));let o=0;for(const i of n)s.set(i,o),o+=i.length}return new TextDecoder("utf-8").decode(s)}class Se extends ie{constructor(t,n=null,r=null,s=null){super(t),this.statusCode=n,this.body=r,this.requestId=s}}function Qr(){return Math.floor(Date.now()/1e3)}class tj{constructor(t,n){this.cached=null,this.pendingRefresh=null,this.nextForce=!1,this.lastAdvisoryError=0,this.provider=t,this.onAdvisoryRefreshError=n}async getToken(){const t=this.nextForce;this.nextForce=!1;const n=this.cached;if(t||n==null)return(await this.refresh(t)).token;if(n.expiresAt==null)return n.token;const r=n.expiresAt-Qr();return r>QT?n.token:r>ip?(this.backgroundRefresh(),n.token):(await this.refresh()).token}invalidate(){this.cached=null,this.nextForce=!0}refresh(t=!1){return this.pendingRefresh&&!t?this.pendingRefresh:this.doRefresh(t)}backgroundRefresh(){this.pendingRefresh||Qr()-this.lastAdvisoryError<JT||this.doRefresh().catch(t=>{var n;this.lastAdvisoryError=Qr(),(n=this.onAdvisoryRefreshError)==null||n.call(this,t)})}doRefresh(t=!1){return this.pendingRefresh=this.provider(t?{forceRefresh:!0}:void 0).then(n=>(this.cached=n,this.pendingRefresh=null,n),n=>{throw this.pendingRefresh=null,n}),this.pendingRefresh}}var nd={};const fe=e=>{var t,n,r,s;if(typeof globalThis.process<"u")return((t=nd==null?void 0:nd[e])==null?void 0:t.trim())||void 0;if(typeof globalThis.Deno<"u")return((s=(r=(n=globalThis.Deno.env)==null?void 0:n.get)==null?void 0:r.call(n,e))==null?void 0:s.trim())||void 0};function nj(e){let t=0;for(const s of e)t+=s.length;const n=new Uint8Array(t);let r=0;for(const s of e)n.set(s,r),r+=s.length;return n}let r0;function ap(e){let t;return(r0??(t=new globalThis.TextEncoder,r0=t.encode.bind(t)))(e)}let s0;function o0(e){let t;return(s0??(t=new globalThis.TextDecoder,s0=t.decode.bind(t)))(e)}const xu="warn",bu={off:0,error:200,warn:300,info:400,debug:500},zf=(e,t,n)=>{if(e){if(MT(bu,e))return e;n.warn(`${t} was set to ${JSON.stringify(e)}, expected one of ${JSON.stringify(Object.keys(bu))}`)}};function li(){}function qa(e,t,n){return!t||bu[e]>bu[n]?li:t[e].bind(t)}const rj={error:li,warn:li,info:li,debug:li};let i0=new WeakMap;function Ff(e,t){const n=i0.get(e);if(n&&n[0]===t)return n[1];const r={error:qa("error",e,t),warn:qa("warn",e,t),info:qa("info",e,t),debug:qa("debug",e,t)};return i0.set(e,[t,r]),r}function _e(e){const t=e.logger,n=e.logLevel??"off";return t?Ff(t,n):rj}let a0,rd;function sj(){const e=fe("ANTHROPIC_LOG");return(!rd||e!==a0)&&(a0=e,rd=Ff(console,zf(e,"process.env['ANTHROPIC_LOG']",Ff(console,xu))??xu)),rd}const Qn=e=>(e.options&&(e.options={...e.options},delete e.options.headers),e.headers&&(e.headers=Object.fromEntries((e.headers instanceof Headers?[...e.headers]:Object.entries(e.headers)).map(([t,n])=>[t,t.toLowerCase()==="authorization"||t.toLowerCase()==="api-key"||t.toLowerCase()==="x-api-key"||t.toLowerCase()==="cookie"||t.toLowerCase()==="set-cookie"?"***":n]))),"retryOfRequestLogID"in e&&(e.retryOfRequestLogID&&(e.retryOf=e.retryOfRequestLogID),delete e.retryOfRequestLogID),e),mx="1.0",oj=/^[A-Za-z0-9_.-]+$/;function gx(e){if(!e)throw new Error("profile name is empty");if(e==="."||e==="..")throw new Error(`profile name "${e}" is not allowed`);if(e.includes("/")||e.includes("\\"))throw new Error(`profile name "${e}" must not contain path separators`);if(!oj.test(e))throw new Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`)}const ij=async e=>{var t,n;const r=await lp();if(r===null)return null;const s=e??await yx();if(s===null)return null;gx(s);const o=await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),a=(await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[])).join(r,"configs",`${s}.json`);let l;try{l=await o.promises.readFile(a,"utf-8")}catch(d){if((d==null?void 0:d.code)!=="ENOENT")throw new Error(`failed to read config file ${a}: ${d}`);l=null}if(l===null){const d=fe("ANTHROPIC_ORGANIZATION_ID"),h=fe("ANTHROPIC_IDENTITY_TOKEN_FILE"),f=fe("ANTHROPIC_FEDERATION_RULE_ID");return f&&d?{fromFile:!1,config:{organization_id:d,workspace_id:fe("ANTHROPIC_WORKSPACE_ID"),base_url:fe("ANTHROPIC_BASE_URL"),authentication:{type:"oidc_federation",federation_rule_id:f,service_account_id:fe("ANTHROPIC_SERVICE_ACCOUNT_ID"),identity_token:h?{source:"file",path:h}:void 0,scope:fe("ANTHROPIC_SCOPE")}}}:null}let u;try{u=JSON.parse(l)}catch(d){throw new Error(`failed to parse config file ${a}: ${d}`)}if(!u.authentication)throw new Error(`config file ${a} is missing "authentication"`);const c=u.authentication.type;if(c!=="oidc_federation"&&c!=="user_oauth")throw new Error(`authentication.type "${c}" is not a known authentication type`);if(u.organization_id??(u.organization_id=fe("ANTHROPIC_ORGANIZATION_ID")),u.workspace_id??(u.workspace_id=fe("ANTHROPIC_WORKSPACE_ID")),u.base_url??(u.base_url=fe("ANTHROPIC_BASE_URL")),(t=u.authentication).scope??(t.scope=fe("ANTHROPIC_SCOPE")),u.authentication.type==="oidc_federation"){if(!u.authentication.identity_token){const d=fe("ANTHROPIC_IDENTITY_TOKEN_FILE");d&&(u.authentication.identity_token={source:"file",path:d})}u.authentication.federation_rule_id||(u.authentication.federation_rule_id=fe("ANTHROPIC_FEDERATION_RULE_ID")??""),(n=u.authentication).service_account_id??(n.service_account_id=fe("ANTHROPIC_SERVICE_ACCOUNT_ID"))}return{config:u,fromFile:!0}},aj=async(e,t)=>{if(e!=null&&e.authentication.credentials_path)return e.authentication.credentials_path;const n=await lp();if(!n)return null;const r=t??await yx();return r?(gx(r),(await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[])).join(n,"credentials",`${r}.json`)):null},lp=async()=>{if(!lj())return null;const e=await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),t=fe("ANTHROPIC_CONFIG_DIR");if(t)return t;if(sp()["X-Stainless-OS"]==="Windows"){const o=fe("APPDATA");if(o)return e.join(o,"Anthropic");const i=fe("USERPROFILE");return i?e.join(i,"AppData","Roaming","Anthropic"):null}const r=fe("XDG_CONFIG_HOME");if(r)return e.join(r,"anthropic");const s=fe("HOME");return s?e.join(s,".config","anthropic"):null},lj=()=>{const e=sp()["X-Stainless-Runtime"];return e==="node"||e==="deno"},yx=async()=>{const e=await lp();if(!e)return null;const t=fe("ANTHROPIC_PROFILE");if(t)return t;const n=await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),s=(await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[])).join(e,"active_config");try{return(await n.promises.readFile(s,"utf-8")).trim()||"default"}catch(o){if((o==null?void 0:o.code)!=="ENOENT")throw new Error(`failed to read ${s}: ${o}`);return"default"}};function l0(e){if(!e)throw new ie("Identity token file path is empty");return async()=>{const t=await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);let n;try{n=await t.promises.readFile(e,"utf-8")}catch(s){throw new ie(`Failed to read identity token file at ${e}: ${s}`)}const r=n.trim();if(!r)throw new ie(`Identity token file at ${e} is empty`);return r}}function uj(e){if(!e)throw new ie("Identity token value is empty");return()=>e}function cj(e){return async()=>{dx(e.baseURL);const t=await e.identityTokenProvider();if(t.length>16*1024)throw new Se(`Identity token is ${Math.ceil(t.length/1024)} KiB, exceeds the 16 KiB assertion limit`);const n={grant_type:GT,assertion:t,federation_rule_id:e.federationRuleId,organization_id:e.organizationId};e.serviceAccountId&&(n.service_account_id=e.serviceAccountId),e.workspaceId&&(n.workspace_id=e.workspaceId);const r=`${e.baseURL}${cx}`;let s;try{s=await e.fetch(r,{method:"POST",headers:{"Content-Type":"application/json","anthropic-beta":`${wu},${XT}`,"User-Agent":e.userAgent||`anthropic-sdk-typescript/${ar} oidcFederationProvider`},body:JSON.stringify(n)})}catch(l){throw new Se(`Failed to reach token endpoint ${r}: ${l}`)}const o=s.headers.get("Request-Id");if(!s.ok){const l=await s.text().catch(()=>""),u=Bt(l);let c="";throw s.status===401&&(c=` Ensure your federation rule matches your identity token. ${e.workspaceId?"":"If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`),new Se(`Token exchange failed with status ${s.status}${o?` (request-id ${o})`:""}: ${u}${c}`,s.status,u,o)}const i=await fx(s,o),a=Number(i.expires_in);if(!Number.isFinite(a))throw new Se(`Token endpoint response missing required fields: ${JSON.stringify(Bt(i))}`,s.status,Bt(i),o);return{token:i.access_token,expiresAt:Qr()+a}}}function dj(e){return async t=>{const n=await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);await hx(e.credentialsPath,e.onSafetyWarning);let r;try{r=await n.promises.readFile(e.credentialsPath,"utf-8")}catch(x){throw new Se(`Credentials file not found at ${e.credentialsPath}: ${x}`)}let s;try{s=JSON.parse(r)}catch(x){throw new Se(`Credentials file at ${e.credentialsPath} is not valid JSON: ${x}`)}const o=s.access_token;if(!o)throw new Se(`Credentials file at ${e.credentialsPath} must include 'access_token'`);const i=s.expires_at;if(!(t!=null&&t.forceRefresh)&&(i==null||Qr()<i-ip))return{token:o,expiresAt:i??null};const a=s.refresh_token;if(!e.clientId||!a)throw new Se(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId?"set":"empty"}, refresh_token ${a?"set":"empty"})`);dx(e.baseURL);const l={grant_type:YT,refresh_token:a,client_id:e.clientId},u=`${e.baseURL}${cx}`;let c;try{c=await e.fetch(u,{method:"POST",headers:{"Content-Type":"application/json","anthropic-beta":wu,"User-Agent":e.userAgent||`anthropic-sdk-typescript/${ar} userOAuthProvider`},body:JSON.stringify(l)})}catch(x){throw new Se(`User OAuth refresh failed to reach token endpoint: ${x}`)}const d=c.headers.get("Request-Id");if(!c.ok){const x=await c.text().catch(()=>"");throw new Se(`User OAuth refresh failed (HTTP ${c.status}): ${Bt(x)}`,c.status,Bt(x),d)}const h=await fx(c,d),f=Number(h.expires_in);if(!Number.isFinite(f))throw new Se(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(Bt(h))}`,c.status,Bt(h),d);const y=Qr()+f,g=h.refresh_token||a;return await px(e.credentialsPath,{...s,version:mx,type:"oauth_token",access_token:h.access_token,expires_at:y,refresh_token:g}),{token:h.access_token,expiresAt:y}}}function vx(e,t){const n=e.authentication.credentials_path??null,r=(e.base_url||t.baseURL).replace(/\/+$/,""),s=hj(e,n,r,t),o={};return e.workspace_id&&e.authentication.type==="user_oauth"&&(o["anthropic-workspace-id"]=e.workspace_id),{provider:s,extraHeaders:o,baseURL:e.base_url||void 0}}async function fj(e,t){const n=await ij(t);if(!n)return null;const{config:r,fromFile:s}=n,o=r.authentication.credentials_path||!s?r:{...r,authentication:{...r.authentication,credentials_path:await aj(r,t)??void 0}};return vx(o,e)}function hj(e,t,n,r){switch(e.authentication.type){case"oidc_federation":{const s=e.authentication,o=pj(s);if(!o)throw new Se("oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)");if(!s.federation_rule_id)throw new Se("oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).");if(!e.organization_id)throw new Se("oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)");const i=cj({identityTokenProvider:o,federationRuleId:s.federation_rule_id,organizationId:e.organization_id,serviceAccountId:s.service_account_id,workspaceId:e.workspace_id,baseURL:n,fetch:r.fetch,userAgent:r.userAgent});return t?mj(i,t,r.onCacheWriteError,r.onSafetyWarning):i}case"user_oauth":{if(!t)throw new Se("user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)");return dj({credentialsPath:t,clientId:e.authentication.client_id,baseURL:n,fetch:r.fetch,userAgent:r.userAgent,onSafetyWarning:r.onSafetyWarning})}default:{const s=e.authentication.type;throw new Se(`authentication.type "${s}" is not a known authentication type`)}}}function pj(e){if(e.identity_token){const r=e.identity_token.source;if(r!=="file")throw new Se(`identity_token.source "${r}" is not supported by this SDK version (only "file")`);if(!e.identity_token.path)throw new Se('identity_token.source "file" requires a non-empty path');return l0(e.identity_token.path)}const t=fe("ANTHROPIC_IDENTITY_TOKEN_FILE");if(t)return l0(t);const n=fe("ANTHROPIC_IDENTITY_TOKEN");return n?uj(n):null}function mj(e,t,n,r){return async s=>{const o=await Pt(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);await hx(t,r);let i;try{const l=await o.promises.readFile(t,"utf-8");i=JSON.parse(l);const u=i==null?void 0:i.access_token;if(u&&!(s!=null&&s.forceRefresh)){const c=i==null?void 0:i.expires_at;if(c==null||Qr()<c-ip)return{token:u,expiresAt:c??null}}}catch(l){(l==null?void 0:l.code)!=="ENOENT"&&!(l instanceof SyntaxError)&&(n==null||n(l))}const a=await e(s);try{await px(t,{...i??{},version:mx,type:"oauth_token",access_token:a.token,expires_at:a.expiresAt})}catch(l){n==null||n(l)}return a}}var St,kt;class ua{constructor(){St.set(this,void 0),kt.set(this,void 0),Q(this,St,new Uint8Array),Q(this,kt,null)}decode(t){if(t==null)return[];const n=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?ap(t):t;Q(this,St,nj([b(this,St,"f"),n]));const r=[];let s;for(;(s=gj(b(this,St,"f"),b(this,kt,"f")))!=null;){if(s.carriage&&b(this,kt,"f")==null){Q(this,kt,s.index);continue}if(b(this,kt,"f")!=null&&(s.index!==b(this,kt,"f")+1||s.carriage)){r.push(o0(b(this,St,"f").subarray(0,b(this,kt,"f")-1))),Q(this,St,b(this,St,"f").subarray(b(this,kt,"f"))),Q(this,kt,null);continue}const o=b(this,kt,"f")!==null?s.preceding-1:s.preceding,i=o0(b(this,St,"f").subarray(0,o));r.push(i),Q(this,St,b(this,St,"f").subarray(s.index)),Q(this,kt,null)}return r}flush(){return b(this,St,"f").length?this.decode(`
`):[]}}St=new WeakMap,kt=new WeakMap;ua.NEWLINE_CHARS=new Set([`
`,"\r"]);ua.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function gj(e,t){for(let s=t??0;s<e.length;s++){if(e[s]===10)return{preceding:s,index:s+1,carriage:!1};if(e[s]===13)return{preceding:s,index:s+1,carriage:!0}}return null}function yj(e){for(let r=0;r<e.length-1;r++){if(e[r]===10&&e[r+1]===10||e[r]===13&&e[r+1]===13)return r+2;if(e[r]===13&&e[r+1]===10&&r+3<e.length&&e[r+2]===13&&e[r+3]===10)return r+4}return-1}var Ro;class rn{constructor(t,n,r){this.iterator=t,Ro.set(this,void 0),this.controller=n,Q(this,Ro,r)}static rawEvents(t,n=new AbortController){return u0(t,n)}static fromSSEResponse(t,n,r){let s=!1;const o=r?_e(r):console;async function*i(){var l;if(s)throw new ie("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");s=!0;let a=!1;try{for await(const u of u0(t,n)){if(u.event==="completion")try{yield JSON.parse(u.data)}catch(c){throw o.error("Could not parse message into JSON:",u.data),o.error("From chunk:",u.raw),c}if(u.event==="message_start"||u.event==="message_delta"||u.event==="message_stop"||u.event==="content_block_start"||u.event==="content_block_delta"||u.event==="content_block_stop"||u.event==="message"||u.event==="user.message"||u.event==="user.interrupt"||u.event==="user.tool_confirmation"||u.event==="user.custom_tool_result"||u.event==="user.tool_result"||u.event==="agent.message"||u.event==="agent.thinking"||u.event==="agent.tool_use"||u.event==="agent.tool_result"||u.event==="agent.mcp_tool_use"||u.event==="agent.mcp_tool_result"||u.event==="agent.custom_tool_use"||u.event==="agent.thread_context_compacted"||u.event==="session.status_running"||u.event==="session.status_idle"||u.event==="session.status_rescheduled"||u.event==="session.status_terminated"||u.event==="session.error"||u.event==="session.deleted"||u.event==="session.updated"||u.event==="span.model_request_start"||u.event==="span.model_request_end"||u.event==="span.outcome_evaluation_start"||u.event==="span.outcome_evaluation_ongoing"||u.event==="span.outcome_evaluation_end"||u.event==="user.define_outcome"||u.event==="agent.thread_message_received"||u.event==="agent.thread_message_sent"||u.event==="agent.session_thread_message_received"||u.event==="agent.session_thread_message_sent"||u.event==="session.thread_created"||u.event==="session.thread_status_created"||u.event==="session.thread_status_running"||u.event==="session.thread_status_idle"||u.event==="session.thread_status_rescheduled"||u.event==="session.thread_status_terminated"||u.event==="system.message")try{yield JSON.parse(u.data)}catch(c){throw o.error("Could not parse message into JSON:",u.data),o.error("From chunk:",u.raw),c}if(u.event!=="ping"&&u.event==="error"){const c=nx(u.data)??u.data,d=(l=c==null?void 0:c.error)==null?void 0:l.type;throw new Ge(void 0,c,void 0,t.headers,d)}}a=!0}catch(u){if(ho(u))return;throw u}finally{a||n.abort()}}return new rn(i,n,r)}static fromReadableStream(t,n,r){let s=!1;async function*o(){const a=new ua,l=op(t);for await(const u of l)for(const c of a.decode(u))yield c;for(const u of a.flush())yield u}async function*i(){if(s)throw new ie("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");s=!0;let a=!1;try{for await(const l of o())a||l&&(yield JSON.parse(l));a=!0}catch(l){if(ho(l))return;throw l}finally{a||n.abort()}}return new rn(i,n,r)}[(Ro=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){const t=[],n=[],r=this.iterator(),s=o=>({next:()=>{if(o.length===0){const i=r.next();t.push(i),n.push(i)}return o.shift()}});return[new rn(()=>s(t),this.controller,b(this,Ro,"f")),new rn(()=>s(n),this.controller,b(this,Ro,"f"))]}toReadableStream(){const t=this;let n;return rx({async start(){n=t[Symbol.asyncIterator]()},async pull(r){try{const{value:s,done:o}=await n.next();if(o)return r.close();const i=ap(JSON.stringify(s)+`
`);r.enqueue(i)}catch(s){r.error(s)}},async cancel(){var r;await((r=n.return)==null?void 0:r.call(n))}})}}async function*u0(e,t){if(!e.body)throw t.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new ie("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new ie("Attempted to iterate over a response with no body");const n=new wj,r=new ua,s=op(e.body);for await(const o of vj(s))for(const i of r.decode(o)){const a=n.decode(i);a&&(yield a)}for(const o of r.flush()){const i=n.decode(o);i&&(yield i)}}async function*vj(e){let t=new Uint8Array;for await(const n of e){if(n==null)continue;const r=n instanceof ArrayBuffer?new Uint8Array(n):typeof n=="string"?ap(n):n;let s=new Uint8Array(t.length+r.length);s.set(t),s.set(r,t.length),t=s;let o;for(;(o=yj(t))!==-1;)yield t.slice(0,o),t=t.slice(o)}t.length>0&&(yield t)}class wj{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(t){if(t.endsWith("\r")&&(t=t.substring(0,t.length-1)),!t){if(!this.event&&!this.data.length)return null;const o={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],o}if(this.chunks.push(t),t.startsWith(":"))return null;let[n,r,s]=xj(t,":");return s.startsWith(" ")&&(s=s.substring(1)),n==="event"?this.event=s:n==="data"&&this.data.push(s),null}}function xj(e,t){const n=e.indexOf(t);return n!==-1?[e.substring(0,n),t,e.substring(n+t.length)]:[e,"",""]}async function wx(e,t){const{response:n,requestLogID:r,retryOfRequestLogID:s,startTime:o}=t,i=await(async()=>{var d;if(t.options.stream)return _e(e).debug("response",n.status,n.url,n.headers,n.body),rn.fromSSEResponse(n,t.controller);if(n.status===204)return null;if(t.options.__binaryResponse)return n;const a=n.headers.get("content-type"),l=(d=a==null?void 0:a.split(";")[0])==null?void 0:d.trim();if((l==null?void 0:l.includes("application/json"))||(l==null?void 0:l.endsWith("+json"))){if(n.headers.get("content-length")==="0")return;const f=await n.json();return up(f,n)}return await n.text()})();return _e(e).debug(`[${r}] response parsed`,Qn({retryOfRequestLogID:s,url:n.url,status:n.status,body:i,durationMs:Date.now()-o})),i}function up(e,t){return!e||typeof e!="object"||Array.isArray(e)?e:Object.defineProperty(e,"_request_id",{value:t.headers.get("request-id"),enumerable:!1})}const xx=new WeakSet;function bx(e){return typeof e=="object"&&e!==null&&xx.has(e)}function bj(e){const t=new Set;for(;typeof e=="object"&&e!==null&&!t.has(e);){if(t.add(e),bx(e)||ho(e)||e instanceof la||e instanceof IT)return!0;e=e.cause}return!1}function c0(e,t,n,r){return async(s,o={})=>{var l;if(t.length===0)return e.call(void 0,s,o);const i=o.headers instanceof Headers?o.headers:new Headers(o.headers),a=await Sj(e,t,n,r)({...o,headers:i,url:typeof s=="string"?s:s instanceof URL?s.href:s.url});if(a.bodyUsed||(l=a.body)!=null&&l.locked)throw new ie("middleware consumed the response body; use response.clone() to inspect it, or return new Response(body, response) to consume and replace it");return a}}function _j(e,t){const n=new WeakMap;return{options:e,logger:t?_e(t):sj(),parse(r){if(e!=null&&e.stream&&r.ok)return d0(r,e);let s=n.get(r);return s||(s=d0(r,e),n.set(r,s)),s}}}async function d0(e,t){var o,i;if(e.bodyUsed||(o=e.body)!=null&&o.locked)throw new ie("cannot ctx.parse() a response whose body was already consumed; call ctx.parse() instead of reading the body, or read via response.clone()");if(t!=null&&t.stream&&e.ok)return rn.fromSSEResponse(e.clone(),new AbortController);if(e.status===204)return null;if(t!=null&&t.__binaryResponse)return e;const n=e.headers.get("content-type"),r=(i=n==null?void 0:n.split(";")[0])==null?void 0:i.trim();return(r==null?void 0:r.includes("application/json"))||(r==null?void 0:r.endsWith("+json"))?e.headers.get("content-length")==="0"?void 0:up(await e.clone().json(),e):await e.clone().text()}function Sj(e,t,n,r){let s=async({url:i,...a})=>{try{return await e.call(void 0,i,a)}catch(l){const u=vu(l);throw xx.add(u),u}};const o=_j(n,r);for(let i=t.length-1;i>=0;i--){const a=t[i],l=s;s=async u=>a(u,l,o)}return s}var ui;class ec extends Promise{constructor(t,n,r=wx){super(s=>{s(null)}),this.responsePromise=n,this.parseResponse=r,ui.set(this,void 0),Q(this,ui,t)}_thenUnwrap(t){return new ec(b(this,ui,"f"),this.responsePromise,async(n,r)=>up(t(await this.parseResponse(n,r),r),r.response))}asResponse(){return this.responsePromise.then(t=>t.response)}async withResponse(){const[t,n]=await Promise.all([this.parse(),this.asResponse()]);return{data:t,response:n,request_id:n.headers.get("request-id")}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(t=>this.parseResponse(b(this,ui,"f"),t))),this.parsedPromise}then(t,n){return this.parse().then(t,n)}catch(t){return this.parse().catch(t)}finally(t){return this.parse().finally(t)}}ui=new WeakMap;var Ga;class _x{constructor(t,n,r,s){Ga.set(this,void 0),Q(this,Ga,t),this.options=s,this.response=n,this.body=r}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){const t=this.nextPageRequestOptions();if(!t)throw new ie("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await b(this,Ga,"f").requestAPIList(this.constructor,t)}async*iterPages(){let t=this;for(yield t;t.hasNextPage();)t=await t.getNextPage(),yield t}async*[(Ga=new WeakMap,Symbol.asyncIterator)](){for await(const t of this.iterPages())for(const n of t.getPaginatedItems())yield n}}class kj extends ec{constructor(t,n,r){super(t,n,async(s,o)=>new r(s,o.response,await wx(s,o),o.options))}async*[Symbol.asyncIterator](){const t=await this;for await(const n of t)yield n}}class ca extends _x{constructor(t,n,r,s){super(t,n,r,s),this.data=r.data||[],this.has_more=r.has_more||!1,this.first_id=r.first_id||null,this.last_id=r.last_id||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){var n;if((n=this.options.query)!=null&&n.before_id){const r=this.first_id;return r?{...this.options,query:{...Af(this.options.query),before_id:r}}:null}const t=this.last_id;return t?{...this.options,query:{...Af(this.options.query),after_id:t}}:null}}class Be extends _x{constructor(t,n,r,s){super(t,n,r,s),this.data=r.data||[],this.next_page=r.next_page||null}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){const t=this.next_page;return t?{...this.options,query:{...Af(this.options.query),page:t}}:null}}const Sx=()=>{var e;if(typeof File>"u"){const{process:t}=globalThis,n=typeof((e=t==null?void 0:t.versions)==null?void 0:e.node)=="string"&&parseInt(t.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(n?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function Zs(e,t,n){return Sx(),new File(e,t??"unknown_file",n)}function Cl(e,t){const n=typeof e=="object"&&e!==null&&("name"in e&&e.name&&String(e.name)||"url"in e&&e.url&&String(e.url)||"filename"in e&&e.filename&&String(e.filename)||"path"in e&&e.path&&String(e.path))||"";return t?n.split(/[\\/]/).pop()||void 0:n}const kx=e=>e!=null&&typeof e=="object"&&typeof e[Symbol.asyncIterator]=="function",cp=async(e,t,n=!0)=>({...e,body:await Nj(e.body,t,n)}),f0=new WeakMap;function Ej(e){const t=typeof e=="function"?e:e.fetch,n=f0.get(t);if(n)return n;const r=(async()=>{try{const s="Response"in t?t.Response:(await t("data:,")).constructor,o=new FormData;return o.toString()!==await new s(o).text()}catch{return!0}})();return f0.set(t,r),r}const Nj=async(e,t,n=!0)=>{if(!await Ej(t))throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");const r=new FormData;return await Promise.all(Object.entries(e||{}).map(([s,o])=>Of(r,s,o,n))),r},Ij=e=>e instanceof Blob&&"name"in e,Of=async(e,t,n,r)=>{if(n!==void 0){if(n==null)throw new TypeError(`Received null for "${t}"; to pass null in FormData, you must use the string 'null'`);if(typeof n=="string"||typeof n=="number"||typeof n=="boolean")e.append(t,String(n));else if(n instanceof Response){let s={};const o=n.headers.get("Content-Type");o&&(s={type:o}),e.append(t,Zs([await n.blob()],Cl(n,r),s))}else if(kx(n))e.append(t,Zs([await new Response(sx(n)).blob()],Cl(n,r)));else if(Ij(n))e.append(t,Zs([n],Cl(n,r),{type:n.type}));else if(Array.isArray(n))await Promise.all(n.map(s=>Of(e,t+"[]",s,r)));else if(typeof n=="object")await Promise.all(Object.entries(n).map(([s,o])=>Of(e,`${t}[${s}]`,o,r)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`)}},Ex=e=>e!=null&&typeof e=="object"&&typeof e.size=="number"&&typeof e.type=="string"&&typeof e.text=="function"&&typeof e.slice=="function"&&typeof e.arrayBuffer=="function",Tj=e=>e!=null&&typeof e=="object"&&typeof e.name=="string"&&typeof e.lastModified=="number"&&Ex(e),jj=e=>e!=null&&typeof e=="object"&&typeof e.url=="string"&&typeof e.blob=="function";async function Mj(e,t,n){if(Sx(),e=await e,t||(t=Cl(e,!0)),Tj(e))return e instanceof File&&t==null&&n==null?e:Zs([await e.arrayBuffer()],t??e.name,{type:e.type,lastModified:e.lastModified,...n});if(jj(e)){const s=await e.blob();return t||(t=new URL(e.url).pathname.split(/[\\/]/).pop()),Zs(await Lf(s),t,n)}const r=await Lf(e);if(!(n!=null&&n.type)){const s=r.find(o=>typeof o=="object"&&"type"in o&&o.type);typeof s=="string"&&(n={...n,type:s})}return Zs(r,t,n)}async function Lf(e){var n;let t=[];if(typeof e=="string"||ArrayBuffer.isView(e)||e instanceof ArrayBuffer)t.push(e);else if(Ex(e))t.push(e instanceof Blob?e:await e.arrayBuffer());else if(kx(e))for await(const r of e)t.push(...await Lf(r));else{const r=(n=e==null?void 0:e.constructor)==null?void 0:n.name;throw new Error(`Unexpected data type: ${typeof e}${r?`; constructor: ${r}`:""}${Cj(e)}`)}return t}function Cj(e){return typeof e!="object"||e===null?"":`; props: [${Object.getOwnPropertyNames(e).map(n=>`"${n}"`).join(", ")}]`}class ye{constructor(t){this._client=t}}const Nx=Symbol.for("brand.privateNullableHeaders");function*Pj(e){if(!e)return;if(Nx in e){const{values:r,nulls:s}=e;yield*r.entries();for(const o of s)yield[o,null];return}let t=!1,n;e instanceof Headers?n=e.entries():qg(e)?n=e:(t=!0,n=Object.entries(e??{}));for(let r of n){const s=r[0];if(typeof s!="string")throw new TypeError("expected header name to be a string");const o=qg(r[1])?r[1]:[r[1]];let i=!1;for(const a of o)a!==void 0&&(t&&!i&&(i=!0,yield[s,Pl]),yield[s,a])}}const Pl=Symbol("clear"),Aj=new Set(["x-stainless-helper"]),Rj=(e,t)=>{const n=e?e.split(",").map(r=>r.trim()).filter(Boolean):[];for(const r of t.split(",").map(s=>s.trim()))r&&!n.includes(r)&&n.push(r);return n.join(", ")},H=e=>{const t=new Headers,n=new Set;for(const r of e){const s=new Set;for(const[o,i]of Pj(r)){const a=o.toLowerCase();if(Aj.has(a)){if(i===Pl)continue;i===null?(t.delete(o),n.add(a)):(t.set(o,Rj(t.get(o),i)),n.delete(a));continue}(i===Pl||!s.has(a))&&(t.delete(o),s.add(a),i===Pl)||(i===null?(t.delete(o),n.add(a)):(t.append(o,i),n.delete(a)))}}return{[Nx]:!0,values:t,nulls:n}};function Ix(e){return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const h0=Object.freeze(Object.create(null)),zj=(e=Ix)=>function(n,...r){if(n.length===1)return n[0];let s=!1;const o=[],i=n.reduce((c,d,h)=>{var g;/[?#]/.test(d)&&(s=!0);const f=r[h];let y=(s?encodeURIComponent:e)(""+f);return h!==r.length&&(f==null||typeof f=="object"&&f.toString===((g=Object.getPrototypeOf(Object.getPrototypeOf(f.hasOwnProperty??h0)??h0))==null?void 0:g.toString))&&(y=f+"",o.push({start:c.length+d.length,length:y.length,error:`Value of type ${Object.prototype.toString.call(f).slice(8,-1)} is not a valid path parameter`})),c+d+(h===r.length?"":y)},""),a=i.split(/[?#]/,1)[0],l=new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)","gi");let u;for(;(u=l.exec(a))!==null;)o.push({start:u.index,length:u[0].length,error:`Value "${u[0]}" can't be safely passed as a path parameter`});if(o.sort((c,d)=>c.start-d.start),o.length>0){let c=0;const d=o.reduce((h,f)=>{const y=" ".repeat(f.start-c),g="^".repeat(f.length);return c=f.start+f.length,h+y+g},"");throw new ie(`Path parameters result in path with invalid segments:
${o.map(h=>h.error).join(`
`)}
${i}
${d}`)}return i},ee=zj(Ix);class Tx extends ye{retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/deployment_runs/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/deployment_runs?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}}class jx extends ye{create(t,n){const{betas:r,...s}=t;return this._client.post("/v1/deployments?beta=true",{body:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/deployments/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/deployments/${t}?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/deployments?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}archive(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/deployments/${t}/archive?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}pause(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/deployments/${t}/pause?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}run(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/deployments/${t}/run?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}unpause(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/deployments/${t}/unpause?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}const da="x-stainless-helper",Mx="x-stainless-helper-method";function Df(e){return{[da]:e}}const bi=Symbol("anthropic.sdk.stainlessHelper");function Al(e){return typeof e=="object"&&e!==null&&bi in e}function Cx(e,t){const n=new Set;if(e)for(const r of e)Al(r)&&n.add(r[bi]);if(t)for(const r of t){Al(r)&&n.add(r[bi]);const s=r.content;if(Array.isArray(s))for(const o of s)Al(o)&&n.add(o[bi])}return Array.from(n)}function Px(e,t){const n=Cx(e,t);return n.length===0?{}:{[da]:n.join(", ")}}function Fj(e){return Al(e)?{[da]:e[bi]}:{}}class Ax extends ye{list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/files?beta=true",ca,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"files-api-2025-04-14"].toString()},n==null?void 0:n.headers])})}delete(t,n={},r){const{betas:s}=n??{};return this._client.delete(ee`/v1/files/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"files-api-2025-04-14"].toString()},r==null?void 0:r.headers])})}download(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/files/${t}/content?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"files-api-2025-04-14"].toString(),Accept:"application/binary"},r==null?void 0:r.headers]),__binaryResponse:!0})}retrieveMetadata(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/files/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"files-api-2025-04-14"].toString()},r==null?void 0:r.headers])})}upload(t,n){const{betas:r,...s}=t;return this._client.post("/v1/files?beta=true",cp({body:s,...n,headers:H([{"anthropic-beta":[...r??[],"files-api-2025-04-14"].toString()},Fj(s.file),n==null?void 0:n.headers])},this._client))}}let Rx=class extends ye{retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/models/${t}?beta=true`,{...r,headers:H([{...(s==null?void 0:s.toString())!=null?{"anthropic-beta":s==null?void 0:s.toString()}:void 0},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/models?beta=true",ca,{query:s,...n,headers:H([{...(r==null?void 0:r.toString())!=null?{"anthropic-beta":r==null?void 0:r.toString()}:void 0},n==null?void 0:n.headers])})}};class zx extends ye{create(t,n){const{betas:r,...s}=t;return this._client.post("/v1/user_profiles?beta=true",{body:s,...n,headers:H([{"anthropic-beta":[...r??[],"user-profiles-2026-03-24"].toString()},n==null?void 0:n.headers])})}retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/user_profiles/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"user-profiles-2026-03-24"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/user_profiles/${t}?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"user-profiles-2026-03-24"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/user_profiles?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"user-profiles-2026-03-24"].toString()},n==null?void 0:n.headers])})}createEnrollmentURL(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/user_profiles/${t}/enrollment_url?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"user-profiles-2026-03-24"].toString()},r==null?void 0:r.headers])})}}var Zi={},tc={};Object.defineProperty(tc,"__esModule",{value:!0});tc.timingSafeEqual=void 0;function p0(e,t=""){if(!e)throw new Error(t)}function Oj(e,t){if(e.byteLength!==t.byteLength)return!1;e instanceof DataView||(e=new DataView(ArrayBuffer.isView(e)?e.buffer:e)),t instanceof DataView||(t=new DataView(ArrayBuffer.isView(t)?t.buffer:t)),p0(e instanceof DataView),p0(t instanceof DataView);const n=e.byteLength;let r=0,s=-1;for(;++s<n;)r|=e.getUint8(s)^t.getUint8(s);return r===0}tc.timingSafeEqual=Oj;var cn={},Lj=vd&&vd.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,s){r.__proto__=s}||function(r,s){for(var o in s)s.hasOwnProperty(o)&&(r[o]=s[o])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(cn,"__esModule",{value:!0});var Ae=256,dp=function(){function e(t){t===void 0&&(t="="),this._paddingCharacter=t}return e.prototype.encodedLength=function(t){return this._paddingCharacter?(t+2)/3*4|0:(t*8+5)/6|0},e.prototype.encode=function(t){for(var n="",r=0;r<t.length-2;r+=3){var s=t[r]<<16|t[r+1]<<8|t[r+2];n+=this._encodeByte(s>>>3*6&63),n+=this._encodeByte(s>>>2*6&63),n+=this._encodeByte(s>>>1*6&63),n+=this._encodeByte(s>>>0*6&63)}var o=t.length-r;if(o>0){var s=t[r]<<16|(o===2?t[r+1]<<8:0);n+=this._encodeByte(s>>>3*6&63),n+=this._encodeByte(s>>>2*6&63),o===2?n+=this._encodeByte(s>>>1*6&63):n+=this._paddingCharacter||"",n+=this._paddingCharacter||""}return n},e.prototype.maxDecodedLength=function(t){return this._paddingCharacter?t/4*3|0:(t*6+7)/8|0},e.prototype.decodedLength=function(t){return this.maxDecodedLength(t.length-this._getPaddingLength(t))},e.prototype.decode=function(t){if(t.length===0)return new Uint8Array(0);for(var n=this._getPaddingLength(t),r=t.length-n,s=new Uint8Array(this.maxDecodedLength(r)),o=0,i=0,a=0,l=0,u=0,c=0,d=0;i<r-4;i+=4)l=this._decodeChar(t.charCodeAt(i+0)),u=this._decodeChar(t.charCodeAt(i+1)),c=this._decodeChar(t.charCodeAt(i+2)),d=this._decodeChar(t.charCodeAt(i+3)),s[o++]=l<<2|u>>>4,s[o++]=u<<4|c>>>2,s[o++]=c<<6|d,a|=l&Ae,a|=u&Ae,a|=c&Ae,a|=d&Ae;if(i<r-1&&(l=this._decodeChar(t.charCodeAt(i)),u=this._decodeChar(t.charCodeAt(i+1)),s[o++]=l<<2|u>>>4,a|=l&Ae,a|=u&Ae),i<r-2&&(c=this._decodeChar(t.charCodeAt(i+2)),s[o++]=u<<4|c>>>2,a|=c&Ae),i<r-3&&(d=this._decodeChar(t.charCodeAt(i+3)),s[o++]=c<<6|d,a|=d&Ae),a!==0)throw new Error("Base64Coder: incorrect characters for decoding");return s},e.prototype._encodeByte=function(t){var n=t;return n+=65,n+=25-t>>>8&6,n+=51-t>>>8&-75,n+=61-t>>>8&-15,n+=62-t>>>8&3,String.fromCharCode(n)},e.prototype._decodeChar=function(t){var n=Ae;return n+=(42-t&t-44)>>>8&-Ae+t-43+62,n+=(46-t&t-48)>>>8&-Ae+t-47+63,n+=(47-t&t-58)>>>8&-Ae+t-48+52,n+=(64-t&t-91)>>>8&-Ae+t-65+0,n+=(96-t&t-123)>>>8&-Ae+t-97+26,n},e.prototype._getPaddingLength=function(t){var n=0;if(this._paddingCharacter){for(var r=t.length-1;r>=0&&t[r]===this._paddingCharacter;r--)n++;if(t.length<4||n>2)throw new Error("Base64Coder: incorrect padding")}return n},e}();cn.Coder=dp;var fa=new dp;function Dj(e){return fa.encode(e)}cn.encode=Dj;function Hj(e){return fa.decode(e)}cn.decode=Hj;var Fx=function(e){Lj(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype._encodeByte=function(n){var r=n;return r+=65,r+=25-n>>>8&6,r+=51-n>>>8&-75,r+=61-n>>>8&-13,r+=62-n>>>8&49,String.fromCharCode(r)},t.prototype._decodeChar=function(n){var r=Ae;return r+=(44-n&n-46)>>>8&-Ae+n-45+62,r+=(94-n&n-96)>>>8&-Ae+n-95+63,r+=(47-n&n-58)>>>8&-Ae+n-48+52,r+=(64-n&n-91)>>>8&-Ae+n-65+0,r+=(96-n&n-123)>>>8&-Ae+n-97+26,r},t}(dp);cn.URLSafeCoder=Fx;var Ox=new Fx;function $j(e){return Ox.encode(e)}cn.encodeURLSafe=$j;function Bj(e){return Ox.decode(e)}cn.decodeURLSafe=Bj;cn.encodedLength=function(e){return fa.encodedLength(e)};cn.maxDecodedLength=function(e){return fa.maxDecodedLength(e)};cn.decodedLength=function(e){return fa.decodedLength(e)};var Lx={exports:{}};(function(e){(function(t,n){var r={};n(r);var s=r.default;for(var o in r)s[o]=r[o];e.exports=s})(vd,function(t){t.__esModule=!0,t.digestLength=32,t.blockSize=64;var n=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function r(h,f,y,g,x){for(var p,m,v,w,S,N,I,C,R,P,O,V,K;x>=64;){for(p=f[0],m=f[1],v=f[2],w=f[3],S=f[4],N=f[5],I=f[6],C=f[7],P=0;P<16;P++)O=g+P*4,h[P]=(y[O]&255)<<24|(y[O+1]&255)<<16|(y[O+2]&255)<<8|y[O+3]&255;for(P=16;P<64;P++)R=h[P-2],V=(R>>>17|R<<15)^(R>>>19|R<<13)^R>>>10,R=h[P-15],K=(R>>>7|R<<25)^(R>>>18|R<<14)^R>>>3,h[P]=(V+h[P-7]|0)+(K+h[P-16]|0);for(P=0;P<64;P++)V=(((S>>>6|S<<26)^(S>>>11|S<<21)^(S>>>25|S<<7))+(S&N^~S&I)|0)+(C+(n[P]+h[P]|0)|0)|0,K=((p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10))+(p&m^p&v^m&v)|0,C=I,I=N,N=S,S=w+V|0,w=v,v=m,m=p,p=V+K|0;f[0]+=p,f[1]+=m,f[2]+=v,f[3]+=w,f[4]+=S,f[5]+=N,f[6]+=I,f[7]+=C,g+=64,x-=64}return g}var s=function(){function h(){this.digestLength=t.digestLength,this.blockSize=t.blockSize,this.state=new Int32Array(8),this.temp=new Int32Array(64),this.buffer=new Uint8Array(128),this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this.reset()}return h.prototype.reset=function(){return this.state[0]=1779033703,this.state[1]=3144134277,this.state[2]=1013904242,this.state[3]=2773480762,this.state[4]=1359893119,this.state[5]=2600822924,this.state[6]=528734635,this.state[7]=1541459225,this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this},h.prototype.clean=function(){for(var f=0;f<this.buffer.length;f++)this.buffer[f]=0;for(var f=0;f<this.temp.length;f++)this.temp[f]=0;this.reset()},h.prototype.update=function(f,y){if(y===void 0&&(y=f.length),this.finished)throw new Error("SHA256: can't update because hash was finished.");var g=0;if(this.bytesHashed+=y,this.bufferLength>0){for(;this.bufferLength<64&&y>0;)this.buffer[this.bufferLength++]=f[g++],y--;this.bufferLength===64&&(r(this.temp,this.state,this.buffer,0,64),this.bufferLength=0)}for(y>=64&&(g=r(this.temp,this.state,f,g,y),y%=64);y>0;)this.buffer[this.bufferLength++]=f[g++],y--;return this},h.prototype.finish=function(f){if(!this.finished){var y=this.bytesHashed,g=this.bufferLength,x=y/536870912|0,p=y<<3,m=y%64<56?64:128;this.buffer[g]=128;for(var v=g+1;v<m-8;v++)this.buffer[v]=0;this.buffer[m-8]=x>>>24&255,this.buffer[m-7]=x>>>16&255,this.buffer[m-6]=x>>>8&255,this.buffer[m-5]=x>>>0&255,this.buffer[m-4]=p>>>24&255,this.buffer[m-3]=p>>>16&255,this.buffer[m-2]=p>>>8&255,this.buffer[m-1]=p>>>0&255,r(this.temp,this.state,this.buffer,0,m),this.finished=!0}for(var v=0;v<8;v++)f[v*4+0]=this.state[v]>>>24&255,f[v*4+1]=this.state[v]>>>16&255,f[v*4+2]=this.state[v]>>>8&255,f[v*4+3]=this.state[v]>>>0&255;return this},h.prototype.digest=function(){var f=new Uint8Array(this.digestLength);return this.finish(f),f},h.prototype._saveState=function(f){for(var y=0;y<this.state.length;y++)f[y]=this.state[y]},h.prototype._restoreState=function(f,y){for(var g=0;g<this.state.length;g++)this.state[g]=f[g];this.bytesHashed=y,this.finished=!1,this.bufferLength=0},h}();t.Hash=s;var o=function(){function h(f){this.inner=new s,this.outer=new s,this.blockSize=this.inner.blockSize,this.digestLength=this.inner.digestLength;var y=new Uint8Array(this.blockSize);if(f.length>this.blockSize)new s().update(f).finish(y).clean();else for(var g=0;g<f.length;g++)y[g]=f[g];for(var g=0;g<y.length;g++)y[g]^=54;this.inner.update(y);for(var g=0;g<y.length;g++)y[g]^=106;this.outer.update(y),this.istate=new Uint32Array(8),this.ostate=new Uint32Array(8),this.inner._saveState(this.istate),this.outer._saveState(this.ostate);for(var g=0;g<y.length;g++)y[g]=0}return h.prototype.reset=function(){return this.inner._restoreState(this.istate,this.inner.blockSize),this.outer._restoreState(this.ostate,this.outer.blockSize),this},h.prototype.clean=function(){for(var f=0;f<this.istate.length;f++)this.ostate[f]=this.istate[f]=0;this.inner.clean(),this.outer.clean()},h.prototype.update=function(f){return this.inner.update(f),this},h.prototype.finish=function(f){return this.outer.finished?this.outer.finish(f):(this.inner.finish(f),this.outer.update(f,this.digestLength).finish(f)),this},h.prototype.digest=function(){var f=new Uint8Array(this.digestLength);return this.finish(f),f},h}();t.HMAC=o;function i(h){var f=new s().update(h),y=f.digest();return f.clean(),y}t.hash=i,t.default=i;function a(h,f){var y=new o(h).update(f),g=y.digest();return y.clean(),g}t.hmac=a;function l(h,f,y,g){var x=g[0];if(x===0)throw new Error("hkdf: cannot expand more");f.reset(),x>1&&f.update(h),y&&f.update(y),f.update(g),f.finish(h),g[0]++}var u=new Uint8Array(t.digestLength);function c(h,f,y,g){f===void 0&&(f=u),g===void 0&&(g=32);for(var x=new Uint8Array([1]),p=a(f,h),m=new o(p),v=new Uint8Array(m.digestLength),w=v.length,S=new Uint8Array(g),N=0;N<g;N++)w===v.length&&(l(v,m,y,x),w=0),S[N]=v[w++];return m.clean(),v.fill(0),x.fill(0),S}t.hkdf=c;function d(h,f,y,g){for(var x=new o(h),p=x.digestLength,m=new Uint8Array(4),v=new Uint8Array(p),w=new Uint8Array(p),S=new Uint8Array(g),N=0;N*p<g;N++){var I=N+1;m[0]=I>>>24&255,m[1]=I>>>16&255,m[2]=I>>>8&255,m[3]=I>>>0&255,x.reset(),x.update(f),x.update(m),x.finish(w);for(var C=0;C<p;C++)v[C]=w[C];for(var C=2;C<=y;C++){x.reset(),x.update(w).finish(w);for(var R=0;R<p;R++)v[R]^=w[R]}for(var C=0;C<p&&N*p+C<g;C++)S[N*p+C]=v[C]}for(var N=0;N<p;N++)v[N]=w[N]=0;for(var N=0;N<4;N++)m[N]=0;return x.clean(),S}t.pbkdf2=d})})(Lx);var Uj=Lx.exports;Object.defineProperty(Zi,"__esModule",{value:!0});var Dx=Zi.Webhook=Zi.WebhookVerificationError=void 0;const Wj=tc,m0=cn,Vj=Uj,g0=5*60;class fp extends Error{constructor(t){super(t),Object.setPrototypeOf(this,fp.prototype),this.name="ExtendableError",this.stack=new Error(t).stack}}class lr extends fp{constructor(t){super(t),Object.setPrototypeOf(this,lr.prototype),this.name="WebhookVerificationError"}}Zi.WebhookVerificationError=lr;class ea{constructor(t,n){if(!t)throw new Error("Secret can't be empty.");if((n==null?void 0:n.format)==="raw")t instanceof Uint8Array?this.key=t:this.key=Uint8Array.from(t,r=>r.charCodeAt(0));else{if(typeof t!="string")throw new Error("Expected secret to be of type string");t.startsWith(ea.prefix)&&(t=t.substring(ea.prefix.length)),this.key=m0.decode(t)}}verify(t,n){const r={};for(const h of Object.keys(n))r[h.toLowerCase()]=n[h];const s=r["webhook-id"],o=r["webhook-signature"],i=r["webhook-timestamp"];if(!o||!s||!i)throw new lr("Missing required headers");const a=this.verifyTimestamp(i),u=this.sign(s,a,t).split(",")[1],c=o.split(" "),d=new globalThis.TextEncoder;for(const h of c){const[f,y]=h.split(",");if(f==="v1"&&(0,Wj.timingSafeEqual)(d.encode(y),d.encode(u)))return JSON.parse(t.toString())}throw new lr("No matching signature found")}sign(t,n,r){if(typeof r!="string")if(r.constructor.name==="Buffer")r=r.toString();else throw new Error("Expected payload to be of type string or Buffer.");const s=new TextEncoder,o=Math.floor(n.getTime()/1e3),i=s.encode(`${t}.${o}.${r}`);return`v1,${m0.encode(Vj.hmac(this.key,i))}`}verifyTimestamp(t){const n=Math.floor(Date.now()/1e3),r=parseInt(t,10);if(isNaN(r))throw new lr("Invalid Signature Headers");if(n-r>g0)throw new lr("Message timestamp too old");if(r>n+g0)throw new lr("Message timestamp too new");return new Date(r*1e3)}}Dx=Zi.Webhook=ea;ea.prefix="whsec_";class Hx extends ye{unwrap(t,{headers:n,key:r}){if(n!==void 0){const s=r===void 0?this._client.webhookKey:r;if(s===null)throw new Error("Webhook key must not be null in order to unwrap");new Dx(s).verify(t,n)}return JSON.parse(t)}}let $x=class extends ye{list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/agents/${t}/versions?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}};class hp extends ye{constructor(){super(...arguments),this.versions=new $x(this._client)}create(t,n){const{betas:r,...s}=t;return this._client.post("/v1/agents?beta=true",{body:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}retrieve(t,n={},r){const{betas:s,...o}=n??{};return this._client.get(ee`/v1/agents/${t}?beta=true`,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/agents/${t}?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/agents?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}archive(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/agents/${t}/archive?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}hp.Versions=$x;function nc(e,t){if(!e)return()=>{};if(e.aborted)return t.abort(),()=>{};const n=()=>t.abort();return e.addEventListener("abort",n),()=>e.removeEventListener("abort",n)}function _i(e,t){return e instanceof Ge&&e.status===t}function Kj(e){return e instanceof Ge&&typeof e.status=="number"&&e.status>=400&&e.status<500}function _u(e){return Kj(e)&&!_i(e,408)&&!_i(e,409)&&!_i(e,429)}function qj(e,t,n){return Math.min(t*2**e,n)}function Gj(e,t){return e+Math.random()*(t-e)}function Yj(e){return e*(1-Math.random()*.25)}function Bx(e,{authToken:t,helper:n}){var l;if(!t)throw new ie(`copyClientForHelper: expected a non-empty authToken but received ${JSON.stringify(t)}`);const r=e,s=r._options.defaultHeaders,o=(l=r._authState)==null?void 0:l.extraHeaders,i=o?Object.fromEntries(Object.entries(o).filter(([u])=>{const c=u.toLowerCase();return c!=="authorization"&&c!=="x-api-key"})):void 0,a=H([i,s,{[da]:n}]);return e.withOptions({apiKey:null,authToken:t,baseURL:e.baseURL,credentials:void 0,defaultHeaders:a})}var vs,Ya,zt,Xa,Qa,Ja,zo,Fo,ws;const Xj=999,Qj=1e3,Jj=6e4;class pp{constructor(t){vs.set(this,void 0),Ya.set(this,!1),zt.set(this,void 0),Xa.set(this,void 0),Qa.set(this,void 0),Ja.set(this,void 0),zo.set(this,void 0),Fo.set(this,void 0),ws.set(this,void 0),this.client=t.client,this.environmentId=t.environmentId,this.environmentKey=t.environmentKey,this.workerId=t.workerId??eM(),Q(this,vs,Bx(t.client,{authToken:t.environmentKey,helper:"environments-work-poller"})),Q(this,Qa,t.autoStop??!0),Q(this,Ja,t.drain??!1),Q(this,zo,t.blockMs===void 0?Xj:t.blockMs),Q(this,Fo,t.reclaimOlderThanMs??null),Q(this,ws,t.requestOptions),Q(this,zt,new AbortController),Q(this,Xa,nc(t.signal,b(this,zt,"f")))}get signal(){return b(this,zt,"f").signal}abort(){b(this,zt,"f").abort()}async*[(vs=new WeakMap,Ya=new WeakMap,zt=new WeakMap,Xa=new WeakMap,Qa=new WeakMap,Ja=new WeakMap,zo=new WeakMap,Fo=new WeakMap,ws=new WeakMap,Symbol.asyncIterator)](){var n,r,s;if(b(this,Ya,"f"))throw new ie("Cannot iterate over a consumed WorkPoller");Q(this,Ya,!0);const t=_e(this.client);t.info("poller starting",{component:"work-poller",environment_id:this.environmentId});try{let o=0;for(;!b(this,zt,"f").signal.aborted;){let i;try{i=await b(this,vs,"f").beta.environments.work.poll(this.environmentId,{"Anthropic-Worker-ID":this.workerId,...b(this,zo,"f")!==null?{block_ms:b(this,zo,"f")}:{},...b(this,Fo,"f")!==null?{reclaim_older_than_ms:b(this,Fo,"f")}:{}},{headers:H([(n=b(this,ws,"f"))==null?void 0:n.headers]),signal:b(this,zt,"f").signal})}catch(a){if(b(this,zt,"f").signal.aborted)return;if(_u(a))throw t.error("poll failed permanently, stopping poller",{error:String(a)}),a;const l=Yj(Zj(o));t.warn("poll failed, backing off",{error:String(a),backoff_ms:l}),o++,await Xr(l,b(this,zt,"f").signal);continue}if(o=0,i==null){if(b(this,Ja,"f"))return;await Xr(Gj(1e3,3e3),b(this,zt,"f").signal);continue}t.info("claimed work",{component:"work-poller",environment_id:this.environmentId,work_id:i.id,work_type:i.data.type});try{await b(this,vs,"f").beta.environments.work.ack(i.id,{environment_id:i.environment_id},{headers:H([(r=b(this,ws,"f"))==null?void 0:r.headers]),signal:b(this,zt,"f").signal})}catch(a){t.error("ack failed",{work_id:i.id,error:String(a)});continue}try{yield i}finally{if(b(this,Qa,"f"))try{await b(this,vs,"f").beta.environments.work.stop(i.id,{environment_id:i.environment_id},{headers:H([(s=b(this,ws,"f"))==null?void 0:s.headers])})}catch(a){_i(a,409)||t.warn("stop failed",{work_id:i.id,error:String(a)})}}}}finally{b(this,Xa,"f").call(this)}}}function Zj(e){return qj(e,Qj,Jj)}function eM(){var n;const e=(n=globalThis.process)==null?void 0:n.env,t=e==null?void 0:e.HOSTNAME;return t?`${t}-${yu()}`:yu()}var ks,Jn,Es;class tM{constructor(){ks.set(this,[]),Jn.set(this,[]),Es.set(this,!1)}push(t){if(b(this,Es,"f"))return!1;const n=b(this,Jn,"f").shift();return n?n({done:!1,value:t}):b(this,ks,"f").push(t),!0}close(){if(!b(this,Es,"f"))for(Q(this,Es,!0);b(this,Jn,"f").length>0;)b(this,Jn,"f").shift()({done:!0,value:void 0})}next(t){return b(this,ks,"f").length>0?Promise.resolve({done:!1,value:b(this,ks,"f").shift()}):b(this,Es,"f")||t!=null&&t.aborted?Promise.resolve({done:!0,value:void 0}):new Promise(n=>{const r=o=>{t==null||t.removeEventListener("abort",s),n(o)},s=()=>{const o=b(this,Jn,"f").indexOf(r);o>=0&&b(this,Jn,"f").splice(o,1),n({done:!0,value:void 0})};b(this,Jn,"f").push(r),t==null||t.addEventListener("abort",s,{once:!0})})}tryShift(){return b(this,ks,"f").shift()}}ks=new WeakMap,Jn=new WeakMap,Es=new WeakMap;class mp extends Error{constructor(t){const n=typeof t=="string"?t:t.map(r=>r.type==="text"?r.text:`[${r.type}]`).join(" ");super(n),this.name="ToolError",this.content=t}}function y0(e){return"name"in e?e.name:e.mcp_server_name}function nM(e){return e instanceof mp?e.content:`Error: ${e instanceof Error?e.message:String(e)}`}async function rM(e,t,n){try{const r=e.parse?e.parse(t):t;return{content:await e.run(r,n),isError:!1}}catch(r){return{content:nM(r),isError:!0}}}var Le,Za,Xe,el,Si,Rl,st,$s,yn,Dr,jn,ki,Bs,tl,Ux,v0,w0,x0,sd,ci,od,b0,Wx;const _0=500,sM=1e4,oM=12e4,iM=3e4,S0=3,aM=6e4;function k0(e){var t;return e.type==="session.status_idle"&&((t=e.stop_reason)==null?void 0:t.type)==="end_turn"}class gp{constructor(t,n){Le.add(this),Za.set(this,!1),Xe.set(this,void 0),el.set(this,void 0),Si.set(this,void 0),Rl.set(this,void 0),st.set(this,void 0),$s.set(this,new Set),yn.set(this,new Set),Dr.set(this,new tM),jn.set(this,0),ki.set(this,null),Bs.set(this,void 0),this.client=n.client,this.sessionId=t,this.tools=n.tools,this.maxIdleMs=n.maxIdleMs??aM,Q(this,st,_e(n.client)),Q(this,Rl,new Map(n.tools.map(r=>[y0(r),r]))),Q(this,Xe,new AbortController),Q(this,el,nc(n.signal,b(this,Xe,"f"))),Q(this,Si,n.requestOptions)}get signal(){return b(this,Xe,"f").signal}abort(){b(this,Xe,"f").abort()}async*[(Za=new WeakMap,Xe=new WeakMap,el=new WeakMap,Si=new WeakMap,Rl=new WeakMap,st=new WeakMap,$s=new WeakMap,yn=new WeakMap,Dr=new WeakMap,jn=new WeakMap,ki=new WeakMap,Bs=new WeakMap,Le=new WeakSet,Symbol.asyncIterator)](){var n;if(b(this,Za,"f"))throw new ie("Cannot iterate over a consumed SessionToolRunner");Q(this,Za,!0),b(this,st,"f").info("session tool runner starting",{component:"session-tool-runner",session_id:this.sessionId});const t=b(this,Le,"m",Ux).call(this).catch(r=>{b(this,Xe,"f").signal.aborted||b(this,st,"f").error("stream loop failed",{error:String(r)}),b(this,Xe,"f").abort()});try{for(;;){const s=await b(this,Dr,"f").next(b(this,Xe,"f").signal);if(s.done)break;yield s.value}await t;let r;for(;(r=b(this,Dr,"f").tryShift())!==void 0;)yield r}finally{b(this,Xe,"f").abort(),b(this,Le,"m",ci).call(this),await t;try{await b(this,Le,"m",Wx).call(this)}catch(r){b(this,st,"f").warn("drain failed",{error:String(r)})}b(this,Dr,"f").close();for(const r of this.tools)try{await((n=r.close)==null?void 0:n.call(r))}catch(s){b(this,st,"f").warn("tool.close failed",{tool:y0(r),error:String(s)})}b(this,el,"f").call(this)}}}tl=function(){var t;return{...b(this,Si,"f"),headers:H([Df("session-tool-runner"),(t=b(this,Si,"f"))==null?void 0:t.headers]),signal:b(this,Xe,"f").signal}},Ux=async function(){const t=b(this,Xe,"f");let n=_0;for(;!t.signal.aborted;){try{const r=await this.client.beta.sessions.events.stream(this.sessionId,{},b(this,Le,"m",tl).call(this));await b(this,Le,"m",v0).call(this);for await(const s of r)if(n=_0,await b(this,Le,"m",x0).call(this,s))return}catch(r){if(t.signal.throwIfAborted(),_u(r))throw b(this,st,"f").error("permanent stream failure, shutting down",{error:String(r)}),t.abort(),r;b(this,st,"f").warn("stream disconnected, reconnecting",{error:String(r),backoff_ms:n})}t.signal.throwIfAborted(),await Xr(n,t.signal),n=Math.min(n*2,sM)}},v0=async function(){const t=b(this,Xe,"f"),n=[];let r=!1;try{for await(const o of this.client.beta.sessions.events.list(this.sessionId,{limit:1e3},b(this,Le,"m",tl).call(this)))b(this,Le,"m",w0).call(this,o,n),r=k0(o)}catch(o){t.signal.throwIfAborted(),b(this,st,"f").warn("reconcile list failed",{error:String(o)});for(const i of n)b(this,$s,"f").delete(i.id);return}const s=n.filter(o=>!b(this,yn,"f").has(o.id));r&&s.length===0?b(this,Le,"m",sd).call(this):b(this,Le,"m",ci).call(this);for(const o of s)await b(this,Le,"m",od).call(this,o)},w0=function(t,n){t.type==="agent.tool_use"||t.type==="agent.custom_tool_use"?(b(this,$s,"f").add(t.id),b(this,yn,"f").has(t.id)||n.push(t)):t.type==="user.tool_result"?b(this,yn,"f").add(t.tool_use_id):t.type==="user.custom_tool_result"&&b(this,yn,"f").add(t.custom_tool_use_id)},x0=async function(t){switch(k0(t)?b(this,Le,"m",sd).call(this):b(this,Le,"m",ci).call(this),t.type){case"agent.tool_use":case"agent.custom_tool_use":return b(this,$s,"f").has(t.id)||(b(this,$s,"f").add(t.id),await b(this,Le,"m",od).call(this,t)),!1;case"user.tool_result":return b(this,yn,"f").add(t.tool_use_id),!1;case"user.custom_tool_result":return b(this,yn,"f").add(t.custom_tool_use_id),!1;case"session.status_terminated":case"session.deleted":return b(this,st,"f").info("session terminated",{component:"session-tool-runner",session_id:this.sessionId}),b(this,Xe,"f").abort(),!0;default:return!1}},sd=function(){b(this,Le,"m",ci).call(this),!(this.maxIdleMs<=0)&&Q(this,Bs,setTimeout(()=>{b(this,st,"f").info("session idle after end_turn; stopping",{component:"session-tool-runner",session_id:this.sessionId,max_idle_ms:this.maxIdleMs}),b(this,Xe,"f").abort()},this.maxIdleMs))},ci=function(){b(this,Bs,"f")!==void 0&&(clearTimeout(b(this,Bs,"f")),Q(this,Bs,void 0))},od=async function(t){var s;var n,r;if(!b(this,yn,"f").has(t.id)){b(this,st,"f").info("executing tool",{component:"session-tool-runner",session_id:this.sessionId,tool:t.name,tool_use_id:t.id}),Q(this,jn,(n=b(this,jn,"f"),n++,n));try{const o=b(this,Rl,"f").get(t.name);if(!o){b(this,st,"f").info("tool not owned by this runner; leaving the tool_use_id pending for its owner",{component:"session-tool-runner",session_id:this.sessionId,tool:t.name,tool_use_id:t.id}),b(this,Dr,"f").push({event:t,toolUseId:t.id,name:t.name,isError:!1,posted:!1});return}let i,a;const l=new AbortController,u=nc(b(this,Xe,"f").signal,l),c=setTimeout(()=>l.abort(),oM);try{const f=await rM(o,t.input,{toolUse:t,toolUseBlock:t,signal:l.signal});i=f.content,a=f.isError}finally{clearTimeout(c),u()}const d=lM(t,a,uM(i)),h=await b(this,Le,"m",b0).call(this,d,t.id);b(this,Dr,"f").push({event:t,result:d,toolUseId:t.id,name:t.name,isError:a,posted:h})}finally{Q(this,jn,(r=b(this,jn,"f"),r--,r)),b(this,jn,"f")===0&&((s=b(this,ki,"f"))==null||s.call(this))}}},b0=async function(t,n){const r=b(this,Xe,"f");let s;for(let o=0;o<S0;o++){r.signal.throwIfAborted();try{return await this.client.beta.sessions.events.send(this.sessionId,{events:[t]},b(this,Le,"m",tl).call(this)),b(this,yn,"f").add(n),!0}catch(i){if(s=i,_u(i))break;o<S0-1&&await Xr((o+1)*1e3,r.signal)}}return b(this,st,"f").error("failed to send tool result",{tool_use_id:n,error:String(s)}),!1},Wx=async function(){b(this,jn,"f")!==0&&(await Promise.race([new Promise(t=>Q(this,ki,t)),Xr(iM)]),Q(this,ki,null),b(this,jn,"f")>0&&b(this,st,"f").warn("drain timeout exceeded"))};function lM(e,t,n){return e.type==="agent.custom_tool_use"?{type:"user.custom_tool_result",custom_tool_use_id:e.id,is_error:t,content:n}:{type:"user.tool_result",tool_use_id:e.id,is_error:t,content:n}}function uM(e){if(typeof e=="string")return[{type:"text",text:e||"(no output)"}];const t=e.map(n=>{var r;return n.type==="text"?{type:"text",text:n.text||"(no output)"}:n.type==="image"||n.type==="document"?n:n.type==="search_result"?{type:"search_result",source:n.source,title:n.title,content:n.content.map(s=>({type:"text",text:s.text})),citations:{enabled:((r=n.citations)==null?void 0:r.enabled)??!1}}:{type:"text",text:JSON.stringify(n)}});return t.length>0?t:[{type:"text",text:"(no output)"}]}var zl,di,Hf;const E0=3e4,cM="NO_HEARTBEAT";class Vx{constructor(t){zl.add(this),di.set(this,void 0),this.client=t.client,this.environmentId=t.environmentId,this.environmentKey=t.environmentKey,this.tools=t.tools,this.workdir=t.workdir??process.cwd(),this.unrestrictedPaths=t.unrestrictedPaths,this.maxFileBytes=t.maxFileBytes,this.maxIdleMs=t.maxIdleMs,this.workerId=t.workerId,this.requestOptions=t.requestOptions,Q(this,di,t.signal)}async run(t){const{environmentId:n,environmentKey:r}=this;if(n===void 0||r===void 0)throw new ie("EnvironmentWorker.run: environmentId and environmentKey are required to poll for work");const s=t??b(this,di,"f"),o=new pp({client:this.client,environmentId:n,environmentKey:r,...this.workerId!==void 0?{workerId:this.workerId}:{},...s?{signal:s}:{},...this.requestOptions!==void 0?{requestOptions:this.requestOptions}:{},autoStop:!1});for await(const i of o)await b(this,zl,"m",Hf).call(this,i,r,o.signal)}async handleItem(t){const n=(t==null?void 0:t.workId)??fe("ANTHROPIC_WORK_ID"),r=(t==null?void 0:t.environmentId)??fe("ANTHROPIC_ENVIRONMENT_ID"),s=(t==null?void 0:t.sessionId)??fe("ANTHROPIC_SESSION_ID"),o=(t==null?void 0:t.environmentKey)??this.environmentKey??fe("ANTHROPIC_ENVIRONMENT_KEY");if(!n)throw new ie("handleItem: workId is required — pass it or set ANTHROPIC_WORK_ID");if(!r)throw new ie("handleItem: environmentId is required — pass it or set ANTHROPIC_ENVIRONMENT_ID");if(!s)throw new ie("handleItem: sessionId is required — pass it or set ANTHROPIC_SESSION_ID");if(!o)throw new ie("handleItem: environmentKey is required — pass it, construct the worker with it, or set ANTHROPIC_ENVIRONMENT_KEY");const i={id:n,environment_id:r,data:{type:"session",id:s}};await b(this,zl,"m",Hf).call(this,i,o,(t==null?void 0:t.signal)??b(this,di,"f"))}}di=new WeakMap,zl=new WeakSet,Hf=async function(t,n,r){const s=_e(this.client),o=Bx(this.client,{authToken:n,helper:"environments-worker"}),i=t.data.id,a={workdir:this.workdir,client:this.client,sessionId:i,...this.unrestrictedPaths!==void 0?{unrestrictedPaths:this.unrestrictedPaths}:{},...this.maxFileBytes!==void 0?{maxFileBytes:this.maxFileBytes}:{}},l=await Pt(()=>import("./node.browser-_l9UdT3m.js"),[]);let u=async()=>{};try{u=await l.setupSkills(a)}catch(y){s.warn("skill setup failed",{session_id:i,work_id:t.id,error:String(y)})}const c=typeof this.tools=="function"?this.tools(a):this.tools??l.betaAgentToolset20260401(a),d=new AbortController,h=nc(r,d),f=fM(o,t,d,s,this.requestOptions).catch(y=>{d.signal.aborted||s.error("heartbeat loop failed",{work_id:t.id,error:String(y)}),d.abort()});try{const y=new gp(i,{client:o,tools:c,...this.maxIdleMs!==void 0?{maxIdleMs:this.maxIdleMs}:{},...this.requestOptions!==void 0?{requestOptions:this.requestOptions}:{},signal:d.signal});for await(const g of y);}finally{d.abort(),h(),await f,await u().catch(y=>{s.warn("skill cleanup failed",{session_id:i,work_id:t.id,error:String(y)})}),await dM(o,t,s,this.requestOptions)}};async function dM(e,t,n,r){try{await e.beta.environments.work.stop(t.id,{environment_id:t.environment_id,force:!0},{...r,headers:H([r==null?void 0:r.headers])})}catch(s){_i(s,409)||n.error("force-stop on exit failed",{work_id:t.id,error:String(s)})}}async function fM(e,t,n,r,s){let o=E0,i=cM;const a=async()=>{try{const l=await e.beta.environments.work.heartbeat(t.id,{environment_id:t.environment_id,expected_last_heartbeat:i},{...s,headers:H([s==null?void 0:s.headers]),signal:n.signal});i=l.last_heartbeat,l.ttl_seconds>0&&(o=Math.max(1e3,Math.min(l.ttl_seconds*1e3/2,E0))),(l.state==="stopping"||l.state==="stopped")&&(r.info("heartbeat signals shutdown",{work_id:t.id,state:l.state}),n.abort()),l.lease_extended||(r.warn("lease not extended, shutting down",{work_id:t.id}),n.abort())}catch(l){if(n.signal.throwIfAborted(),_u(l))throw r.error("permanent heartbeat failure",{work_id:t.id,error:String(l)}),n.abort(),l;r.warn("transient heartbeat failure",{work_id:t.id,error:String(l)})}};for(await a();!n.signal.aborted;)await Xr(o,n.signal),n.signal.throwIfAborted(),await a()}class rc extends ye{retrieve(t,n,r){const{environment_id:s,betas:o}=n;return this._client.get(ee`/v1/environments/${s}/work/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{environment_id:s,betas:o,...i}=n;return this._client.post(ee`/v1/environments/${s}/work/${t}?beta=true`,{body:i,...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/environments/${t}/work?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}ack(t,n,r){const{environment_id:s,betas:o}=n;return this._client.post(ee`/v1/environments/${s}/work/${t}/ack?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}heartbeat(t,n,r){const{environment_id:s,desired_ttl_seconds:o,expected_last_heartbeat:i,betas:a}=n;return this._client.post(ee`/v1/environments/${s}/work/${t}/heartbeat?beta=true`,{query:{desired_ttl_seconds:o,expected_last_heartbeat:i},...r,headers:H([{"anthropic-beta":[...a??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}poll(t,n={},r){const{betas:s,"Anthropic-Worker-ID":o,...i}=n??{};return this._client.get(ee`/v1/environments/${t}/work/poll?beta=true`,{query:i,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString(),...o!=null?{"Anthropic-Worker-ID":o}:void 0},r==null?void 0:r.headers])})}stats(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/environments/${t}/work/stats?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}stop(t,n,r){const{environment_id:s,betas:o,...i}=n;return this._client.post(ee`/v1/environments/${s}/work/${t}/stop?beta=true`,{body:i,...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}poller(t){return new pp({...t,client:this._client})}worker(t){return new Vx({...t,client:this._client})}}rc.WorkPoller=pp;rc.EnvironmentWorker=Vx;class yp extends ye{constructor(){super(...arguments),this.work=new rc(this._client)}create(t,n){const{betas:r,...s}=t;return this._client.post("/v1/environments?beta=true",{body:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/environments/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/environments/${t}?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/environments?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}delete(t,n={},r){const{betas:s}=n??{};return this._client.delete(ee`/v1/environments/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}archive(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/environments/${t}/archive?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}yp.Work=rc;class Kx extends ye{create(t,n,r){const{view:s,betas:o,...i}=n;return this._client.post(ee`/v1/memory_stores/${t}/memories?beta=true`,{query:{view:s},body:i,...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}retrieve(t,n,r){const{memory_store_id:s,betas:o,...i}=n;return this._client.get(ee`/v1/memory_stores/${s}/memories/${t}?beta=true`,{query:i,...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{memory_store_id:s,view:o,betas:i,...a}=n;return this._client.post(ee`/v1/memory_stores/${s}/memories/${t}?beta=true`,{query:{view:o},body:a,...r,headers:H([{"anthropic-beta":[...i??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/memory_stores/${t}/memories?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}delete(t,n,r){const{memory_store_id:s,expected_content_sha256:o,betas:i}=n;return this._client.delete(ee`/v1/memory_stores/${s}/memories/${t}?beta=true`,{query:{expected_content_sha256:o},...r,headers:H([{"anthropic-beta":[...i??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}class qx extends ye{retrieve(t,n,r){const{memory_store_id:s,betas:o,...i}=n;return this._client.get(ee`/v1/memory_stores/${s}/memory_versions/${t}?beta=true`,{query:i,...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/memory_stores/${t}/memory_versions?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}redact(t,n,r){const{memory_store_id:s,betas:o}=n;return this._client.post(ee`/v1/memory_stores/${s}/memory_versions/${t}/redact?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}class sc extends ye{constructor(){super(...arguments),this.memories=new Kx(this._client),this.memoryVersions=new qx(this._client)}create(t,n){const{betas:r,...s}=t;return this._client.post("/v1/memory_stores?beta=true",{body:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/memory_stores/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/memory_stores/${t}?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/memory_stores?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}delete(t,n={},r){const{betas:s}=n??{};return this._client.delete(ee`/v1/memory_stores/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}archive(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/memory_stores/${t}/archive?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}sc.Memories=Kx;sc.MemoryVersions=qx;class oc{constructor(t,n){this.iterator=t,this.controller=n}async*decoder(){const t=new ua;for await(const n of this.iterator)for(const r of t.decode(n))yield JSON.parse(r);for(const n of t.flush())yield JSON.parse(n)}[Symbol.asyncIterator](){return this.decoder()}static fromResponse(t,n){if(!t.body)throw n.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new ie("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new ie("Attempted to iterate over a response with no body");return new oc(op(t.body),n)}}let Gx=class extends ye{create(t,n){const{betas:r,user_profile_id:s,...o}=t;return this._client.post("/v1/messages/batches?beta=true",{body:o,...n,headers:H([{"anthropic-beta":[...r??[],"message-batches-2024-09-24"].toString(),...s!=null?{"anthropic-user-profile-id":s}:void 0},n==null?void 0:n.headers])})}retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/messages/batches/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"message-batches-2024-09-24"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/messages/batches?beta=true",ca,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"message-batches-2024-09-24"].toString()},n==null?void 0:n.headers])})}delete(t,n={},r){const{betas:s}=n??{};return this._client.delete(ee`/v1/messages/batches/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"message-batches-2024-09-24"].toString()},r==null?void 0:r.headers])})}cancel(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/messages/batches/${t}/cancel?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"message-batches-2024-09-24"].toString()},r==null?void 0:r.headers])})}async results(t,n={},r){const s=await this.retrieve(t);if(!s.results_url)throw new ie(`No batch \`results_url\`; Has it finished processing? ${s.processing_status} - ${s.id}`);const{betas:o}=n??{};return this._client.get(s.results_url,{...r,headers:H([{"anthropic-beta":[...o??[],"message-batches-2024-09-24"].toString(),Accept:"application/binary"},r==null?void 0:r.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((i,a)=>oc.fromResponse(a.response,a.controller))}};const Yx={"claude-opus-4-20250514":8192,"claude-opus-4-0":8192,"claude-4-opus-20250514":8192,"anthropic.claude-opus-4-20250514-v1:0":8192,"claude-opus-4@20250514":8192,"claude-opus-4-1-20250805":8192,"anthropic.claude-opus-4-1-20250805-v1:0":8192,"claude-opus-4-1@20250805":8192};function Xx(e){var t;return(e==null?void 0:e.output_format)??((t=e==null?void 0:e.output_config)==null?void 0:t.format)}function N0(e,t,n){const r=Xx(t);return!t||!("parse"in(r??{}))?{...e,content:e.content.map(s=>{if(s.type==="text"){const o=Object.defineProperty({...s},"parsed_output",{value:null,enumerable:!1});return Object.defineProperty(o,"parsed",{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),null},enumerable:!1})}return s}),parsed_output:null}:Qx(e,t,n)}function Qx(e,t,n){let r=null;const s=e.content.map(o=>{if(o.type==="text"){const i=hM(t,o.text);r===null&&(r=i);const a=Object.defineProperty({...o},"parsed_output",{value:i,enumerable:!1});return Object.defineProperty(a,"parsed",{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),i},enumerable:!1})}return o});return{...e,content:s,parsed_output:r}}function hM(e,t){const n=Xx(e);if((n==null?void 0:n.type)!=="json_schema")return null;try{return"parse"in n?n.parse(t):JSON.parse(t)}catch(r){throw new ie(`Failed to parse structured output: ${r}`)}}const pM=e=>{let t=0,n=[];for(;t<e.length;){let r=e[t];if(r==="\\"){t++;continue}if(r==="{"){n.push({type:"brace",value:"{"}),t++;continue}if(r==="}"){n.push({type:"brace",value:"}"}),t++;continue}if(r==="["){n.push({type:"paren",value:"["}),t++;continue}if(r==="]"){n.push({type:"paren",value:"]"}),t++;continue}if(r===":"){n.push({type:"separator",value:":"}),t++;continue}if(r===","){n.push({type:"delimiter",value:","}),t++;continue}if(r==='"'){let a="",l=!1;for(r=e[++t];r!=='"';){if(t===e.length){l=!0;break}if(r==="\\"){if(t++,t===e.length){l=!0;break}a+=r+e[t],r=e[++t]}else a+=r,r=e[++t]}r=e[++t],l||n.push({type:"string",value:a});continue}if(r&&/\s/.test(r)){t++;continue}let o=/[0-9]/;if(r&&o.test(r)||r==="-"||r==="."){let a="";for(r==="-"&&(a+=r,r=e[++t]);r&&(o.test(r)||r==="."||r==="e"||r==="E"||(r==="-"||r==="+")&&(a[a.length-1]==="e"||a[a.length-1]==="E"));)a+=r,r=e[++t];n.push({type:"number",value:a});continue}let i=/[a-z]/i;if(r&&i.test(r)){let a="";for(;r&&i.test(r)&&t!==e.length;)a+=r,r=e[++t];if(a=="true"||a=="false"||a==="null")n.push({type:"name",value:a});else{t++;continue}continue}t++}return n},Ns=e=>{if(e.length===0)return e;let t=e[e.length-1];switch(t.type){case"separator":return e=e.slice(0,e.length-1),Ns(e);case"number":let n=t.value[t.value.length-1];if(n==="."||n==="-"||n==="+"||n==="e"||n==="E")return e=e.slice(0,e.length-1),Ns(e);case"string":let r=e[e.length-2];if((r==null?void 0:r.type)==="delimiter")return e=e.slice(0,e.length-1),Ns(e);if((r==null?void 0:r.type)==="brace"&&r.value==="{")return e=e.slice(0,e.length-1),Ns(e);break;case"delimiter":return e=e.slice(0,e.length-1),Ns(e)}return e},mM=e=>{let t=[];return e.map(n=>{n.type==="brace"&&(n.value==="{"?t.push("}"):t.splice(t.lastIndexOf("}"),1)),n.type==="paren"&&(n.value==="["?t.push("]"):t.splice(t.lastIndexOf("]"),1))}),t.length>0&&t.reverse().map(n=>{n==="}"?e.push({type:"brace",value:"}"}):n==="]"&&e.push({type:"paren",value:"]"})}),e},gM=e=>{let t="";return e.map(n=>{switch(n.type){case"string":t+='"'+n.value+'"';break;default:t+=n.value;break}}),t},yM=e=>JSON.parse(gM(mM(Ns(pM(e))))),eo="__json_buf";function Jx(e,t){const n={};for(const o of Object.keys(e))o!=="input"&&(n[o]=e[o]);Object.defineProperty(n,eo,{value:t,enumerable:!1,writable:!0});let r,s=!1;return Object.defineProperty(n,"input",{enumerable:!0,configurable:!0,get(){return s||(r=t?yM(t):{},s=!0),r}}),n}var ft,Gn,xs,Oo,nl,Lo,Do,rl,Ho,pn,$o,sl,ol,Pr,il,al,Bo,id,I0,Uo,ad,ld,ud,T0,cd;function dd(e){return e.type==="tool_use"||e.type==="server_tool_use"||e.type==="mcp_tool_use"}class Su{constructor(t,n){ft.add(this),this.messages=[],this.receivedMessages=[],Gn.set(this,void 0),xs.set(this,null),this.controller=new AbortController,Oo.set(this,void 0),nl.set(this,()=>{}),Lo.set(this,()=>{}),Do.set(this,void 0),rl.set(this,()=>{}),Ho.set(this,()=>{}),pn.set(this,{}),$o.set(this,!1),sl.set(this,!1),ol.set(this,!1),Pr.set(this,!1),il.set(this,void 0),al.set(this,void 0),Bo.set(this,void 0),Uo.set(this,r=>{if(Q(this,sl,!0),ho(r)&&(r=new nn),r instanceof nn)return Q(this,ol,!0),this._emit("abort",r);if(r instanceof ie)return this._emit("error",r);if(r instanceof Error){const s=new ie(r.message);return s.cause=r,this._emit("error",s)}return this._emit("error",new ie(String(r)))}),Q(this,Oo,new Promise((r,s)=>{Q(this,nl,r,"f"),Q(this,Lo,s,"f")})),Q(this,Do,new Promise((r,s)=>{Q(this,rl,r,"f"),Q(this,Ho,s,"f")})),b(this,Oo,"f").catch(()=>{}),b(this,Do,"f").catch(()=>{}),Q(this,xs,t),Q(this,Bo,(n==null?void 0:n.logger)??console)}get response(){return b(this,il,"f")}get request_id(){return b(this,al,"f")}async withResponse(){Q(this,Pr,!0);const t=await b(this,Oo,"f");if(!t)throw new Error("Could not resolve a `Response` object");return{data:this,response:t,request_id:t.headers.get("request-id")}}static fromReadableStream(t){const n=new Su(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,n,r,{logger:s}={}){const o=new Su(n,{logger:s});for(const i of n.messages)o._addMessageParam(i);return Q(o,xs,{...n,stream:!0}),o._run(()=>o._createMessage(t,{...n,stream:!0},{...r,headers:{...r==null?void 0:r.headers,[Mx]:"stream"}})),o}_run(t){t().then(()=>{this._emitFinal(),this._emit("end")},b(this,Uo,"f"))}_addMessageParam(t){this.messages.push(t)}_addMessage(t,n=!0){this.receivedMessages.push(t),n&&this._emit("message",t)}async _createMessage(t,n,r){var i;const s=r==null?void 0:r.signal;let o;s&&(s.aborted&&this.controller.abort(),o=this.controller.abort.bind(this.controller),s.addEventListener("abort",o));try{b(this,ft,"m",ad).call(this);const{response:a,data:l}=await t.create({...n,stream:!0},{...r,signal:this.controller.signal}).withResponse();this._connected(a);for await(const u of l)b(this,ft,"m",ld).call(this,u);if((i=l.controller.signal)!=null&&i.aborted)throw new nn;b(this,ft,"m",ud).call(this)}finally{s&&o&&s.removeEventListener("abort",o)}}_connected(t){this.ended||(Q(this,il,t),Q(this,al,t==null?void 0:t.headers.get("request-id")),b(this,nl,"f").call(this,t),this._emit("connect"))}get ended(){return b(this,$o,"f")}get errored(){return b(this,sl,"f")}get aborted(){return b(this,ol,"f")}abort(){this.controller.abort()}on(t,n){return(b(this,pn,"f")[t]||(b(this,pn,"f")[t]=[])).push({listener:n}),this}off(t,n){const r=b(this,pn,"f")[t];if(!r)return this;const s=r.findIndex(o=>o.listener===n);return s>=0&&r.splice(s,1),this}once(t,n){return(b(this,pn,"f")[t]||(b(this,pn,"f")[t]=[])).push({listener:n,once:!0}),this}emitted(t){return new Promise((n,r)=>{Q(this,Pr,!0),t!=="error"&&this.once("error",r),this.once(t,n)})}async done(){Q(this,Pr,!0),await b(this,Do,"f")}get currentMessage(){return b(this,Gn,"f")}async finalMessage(){return await this.done(),b(this,ft,"m",id).call(this)}async finalText(){return await this.done(),b(this,ft,"m",I0).call(this)}_emit(t,...n){if(b(this,$o,"f"))return;t==="end"&&(Q(this,$o,!0),b(this,rl,"f").call(this));const r=b(this,pn,"f")[t];if(r&&(b(this,pn,"f")[t]=r.filter(s=>!s.once),r.forEach(({listener:s})=>s(...n))),t==="abort"){const s=n[0];!b(this,Pr,"f")&&!(r!=null&&r.length)&&Promise.reject(s),b(this,Lo,"f").call(this,s),b(this,Ho,"f").call(this,s),this._emit("end");return}if(t==="error"){const s=n[0];!b(this,Pr,"f")&&!(r!=null&&r.length)&&Promise.reject(s),b(this,Lo,"f").call(this,s),b(this,Ho,"f").call(this,s),this._emit("end")}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit("finalMessage",b(this,ft,"m",id).call(this))}async _fromReadableStream(t,n){var o;const r=n==null?void 0:n.signal;let s;r&&(r.aborted&&this.controller.abort(),s=this.controller.abort.bind(this.controller),r.addEventListener("abort",s));try{b(this,ft,"m",ad).call(this),this._connected(null);const i=rn.fromReadableStream(t,this.controller);for await(const a of i)b(this,ft,"m",ld).call(this,a);if((o=i.controller.signal)!=null&&o.aborted)throw new nn;b(this,ft,"m",ud).call(this)}finally{r&&s&&r.removeEventListener("abort",s)}}[(Gn=new WeakMap,xs=new WeakMap,Oo=new WeakMap,nl=new WeakMap,Lo=new WeakMap,Do=new WeakMap,rl=new WeakMap,Ho=new WeakMap,pn=new WeakMap,$o=new WeakMap,sl=new WeakMap,ol=new WeakMap,Pr=new WeakMap,il=new WeakMap,al=new WeakMap,Bo=new WeakMap,Uo=new WeakMap,ft=new WeakSet,id=function(){if(this.receivedMessages.length===0)throw new ie("stream ended without producing a Message with role=assistant");return this.receivedMessages.at(-1)},I0=function(){if(this.receivedMessages.length===0)throw new ie("stream ended without producing a Message with role=assistant");const n=this.receivedMessages.at(-1).content.filter(r=>r.type==="text").map(r=>r.text);if(n.length===0)throw new ie("stream ended without producing a content block with type=text");return n.join(" ")},ad=function(){this.ended||Q(this,Gn,void 0)},ld=function(n){var s;if(this.ended)return;const r=b(this,ft,"m",T0).call(this,n);switch(this._emit("streamEvent",n,r),n.type){case"content_block_delta":{const o=r.content.at(-1);switch(n.delta.type){case"text_delta":{o.type==="text"&&this._emit("text",n.delta.text,o.text||"");break}case"citations_delta":{o.type==="text"&&this._emit("citation",n.delta.citation,o.citations??[]);break}case"input_json_delta":{if(dd(o)&&((s=b(this,pn,"f").inputJson)!=null&&s.length)){let i;try{i=o.input}catch(a){b(this,Uo,"f").call(this,b(this,ft,"m",cd).call(this,o,a));break}this._emit("inputJson",n.delta.partial_json,i)}break}case"thinking_delta":{o.type==="thinking"&&this._emit("thinking",n.delta.thinking,o.thinking);break}case"signature_delta":{o.type==="thinking"&&this._emit("signature",o.signature);break}case"compaction_delta":{o.type==="compaction"&&o.content&&this._emit("compaction",o.content);break}default:n.delta}break}case"message_stop":{this._addMessageParam(r),this._addMessage(N0(r,b(this,xs,"f"),{logger:b(this,Bo,"f")}),!0);break}case"content_block_stop":{this._emit("contentBlock",r.content.at(-1));break}case"message_start":{Q(this,Gn,r);break}}},ud=function(){if(this.ended)throw new ie("stream has ended, this shouldn't happen");const n=b(this,Gn,"f");if(!n)throw new ie("request ended without sending any chunks");return Q(this,Gn,void 0),N0(n,b(this,xs,"f"),{logger:b(this,Bo,"f")})},T0=function(n){let r=b(this,Gn,"f");if(n.type==="message_start"){if(r)throw new ie(`Unexpected event order, got ${n.type} before receiving "message_stop"`);return n.message}if(!r)throw new ie(`Unexpected event order, got ${n.type} before "message_start"`);switch(n.type){case"message_stop":return r;case"message_delta":return r.container=n.delta.container,r.stop_reason=n.delta.stop_reason,r.stop_sequence=n.delta.stop_sequence,n.delta.stop_details!=null&&(r.stop_details=n.delta.stop_details),r.usage.output_tokens=n.usage.output_tokens,r.context_management=n.context_management,n.usage.input_tokens!=null&&(r.usage.input_tokens=n.usage.input_tokens),n.usage.cache_creation_input_tokens!=null&&(r.usage.cache_creation_input_tokens=n.usage.cache_creation_input_tokens),n.usage.cache_read_input_tokens!=null&&(r.usage.cache_read_input_tokens=n.usage.cache_read_input_tokens),n.usage.server_tool_use!=null&&(r.usage.server_tool_use=n.usage.server_tool_use),n.usage.iterations!=null&&(r.usage.iterations=n.usage.iterations),r;case"content_block_start":return r.content.push(n.content_block),n.content_block.type==="fallback"&&(r.model=n.content_block.to.model),r;case"content_block_delta":{const s=r.content.at(n.index);switch(n.delta.type){case"text_delta":{(s==null?void 0:s.type)==="text"&&(r.content[n.index]={...s,text:(s.text||"")+n.delta.text});break}case"citations_delta":{(s==null?void 0:s.type)==="text"&&(r.content[n.index]={...s,citations:[...s.citations??[],n.delta.citation]});break}case"input_json_delta":{if(s&&dd(s)){const o=(s[eo]||"")+n.delta.partial_json;r.content[n.index]=Jx(s,o)}break}case"thinking_delta":{(s==null?void 0:s.type)==="thinking"&&(r.content[n.index]={...s,thinking:s.thinking+n.delta.thinking});break}case"signature_delta":{(s==null?void 0:s.type)==="thinking"&&(r.content[n.index]={...s,signature:n.delta.signature});break}case"compaction_delta":{(s==null?void 0:s.type)==="compaction"&&(r.content[n.index]={...s,content:(s.content||"")+n.delta.content,encrypted_content:n.delta.encrypted_content});break}default:n.delta}return r}case"content_block_stop":{const s=r.content.at(n.index);if(s&&dd(s)&&eo in s){let o;try{o=s.input}catch(i){o={},b(this,Uo,"f").call(this,b(this,ft,"m",cd).call(this,s,i))}Object.defineProperty(s,"input",{value:o,enumerable:!0,configurable:!0,writable:!0})}return r}}},cd=function(n,r){const s=n[eo];return new ie(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${r}. JSON: ${s}`)},Symbol.asyncIterator)](){const t=[],n=[];let r=!1;return this.on("streamEvent",s=>{const o=n.shift();o?o.resolve(s):t.push(s)}),this.on("end",()=>{r=!0;for(const s of n)s.resolve(void 0);n.length=0}),this.on("abort",s=>{r=!0;for(const o of n)o.reject(s);n.length=0}),this.on("error",s=>{r=!0;for(const o of n)o.reject(s);n.length=0}),{next:async()=>t.length?{value:t.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,i)=>n.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new rn(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}function j0(){let e,t;return{promise:new Promise((r,s)=>{e=r,t=s}),resolve:e,reject:t}}const vM=1e5,wM=`You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
1. Task Overview
The user's core request and success criteria
Any clarifications or constraints they specified
2. Current State
What has been completed so far
Files created, modified, or analyzed (with paths if relevant)
Key outputs or artifacts produced
3. Important Discoveries
Technical constraints or requirements uncovered
Decisions made and their rationale
Errors encountered and how they were resolved
What approaches were tried that didn't work (and why)
4. Next Steps
Specific actions needed to complete the task
Any blockers or open questions to resolve
Priority order if multiple steps remain
5. Context to Preserve
User preferences or style requirements
Domain-specific details that aren't obvious
Any promises made to the user
Be concise but complete—err on the side of including information that would prevent duplicate work or repeated mistakes. Write in a way that enables immediate resumption of the task.
Wrap your summary in <summary></summary> tags.`;var Wo,bs,Ar,Fe,ht,_t,Pn,Yn,Vo,M0,$f;class Zx{constructor(t,n,r){var o;Wo.add(this),this.client=t,bs.set(this,!1),Ar.set(this,!1),Fe.set(this,void 0),ht.set(this,void 0),_t.set(this,void 0),Pn.set(this,void 0),Yn.set(this,void 0),Vo.set(this,0),Q(this,Fe,{params:{...n,messages:structuredClone(n.messages)}});const s=Cx(n.tools,n.messages);Q(this,ht,{...r,headers:H([Df("BetaToolRunner"),s.length?{[da]:s.join(", ")}:void 0,r==null?void 0:r.headers])}),Q(this,Yn,j0()),(o=n.compactionControl)!=null&&o.enabled&&console.warn('Anthropic: The `compactionControl` parameter is deprecated and will be removed in a future version. Use server-side compaction instead by passing `edits: [{ type: "compact_20260112" }]` in the params passed to `toolRunner()`. See https://platform.claude.com/docs/en/build-with-claude/compaction')}async*[(bs=new WeakMap,Ar=new WeakMap,Fe=new WeakMap,ht=new WeakMap,_t=new WeakMap,Pn=new WeakMap,Yn=new WeakMap,Vo=new WeakMap,Wo=new WeakSet,M0=async function(){var u;const n=b(this,Fe,"f").params.compactionControl;if(!n||!n.enabled)return!1;let r=0;if(b(this,_t,"f")!==void 0)try{const c=await b(this,_t,"f");r=c.usage.input_tokens+(c.usage.cache_creation_input_tokens??0)+(c.usage.cache_read_input_tokens??0)+c.usage.output_tokens}catch{return!1}const s=n.contextTokenThreshold??vM;if(r<s)return!1;const o=n.model??b(this,Fe,"f").params.model,i=n.summaryPrompt??wM,a=b(this,Fe,"f").params.messages;if(a[a.length-1].role==="assistant"){const c=a[a.length-1];if(Array.isArray(c.content)){const d=c.content.filter(h=>h.type!=="tool_use");d.length===0?a.pop():c.content=d}}const l=await this.client.beta.messages.create({model:o,messages:[...a,{role:"user",content:[{type:"text",text:i}]}],max_tokens:b(this,Fe,"f").params.max_tokens},{signal:b(this,ht,"f").signal,headers:H([b(this,ht,"f").headers,Df("compaction")])});if(((u=l.content[0])==null?void 0:u.type)!=="text")throw new ie("Expected text response for compaction");return b(this,Fe,"f").params.messages=[{role:"user",content:l.content}],!0},Symbol.asyncIterator)](){var t;if(b(this,bs,"f"))throw new ie("Cannot iterate over a consumed stream");Q(this,bs,!0),Q(this,Ar,!0),Q(this,Pn,void 0);try{for(;;){let n;try{if(b(this,Fe,"f").params.max_iterations&&b(this,Vo,"f")>=b(this,Fe,"f").params.max_iterations)break;Q(this,Ar,!1,"f"),Q(this,Pn,void 0,"f"),Q(this,Vo,(t=b(this,Vo,"f"),t++,t),"f"),Q(this,_t,void 0,"f");const{max_iterations:r,compactionControl:s,...o}=b(this,Fe,"f").params;if(o.stream?(n=this.client.beta.messages.stream({...o},b(this,ht,"f")),Q(this,_t,n.finalMessage(),"f"),b(this,_t,"f").catch(()=>{}),yield n):(Q(this,_t,this.client.beta.messages.create({...o,stream:!1},b(this,ht,"f")),"f"),yield b(this,_t,"f")),!await b(this,Wo,"m",M0).call(this)){if(!b(this,Ar,"f")){const l=await b(this,_t,"f");if(b(this,Fe,"f").params.messages.push({role:l.role,content:l.content}),l.stop_reason==="refusal")break}const a=await b(this,Wo,"m",$f).call(this,b(this,Fe,"f").params.messages.at(-1));if(a)b(this,Fe,"f").params.messages.push(a);else if(!b(this,Ar,"f"))break}}finally{n&&n.abort()}}if(!b(this,_t,"f"))throw new ie("ToolRunner concluded without a message from the server");b(this,Yn,"f").resolve(await b(this,_t,"f"))}catch(n){throw Q(this,bs,!1),b(this,Yn,"f").promise.catch(()=>{}),b(this,Yn,"f").reject(n),Q(this,Yn,j0()),n}}setMessagesParams(t){typeof t=="function"?b(this,Fe,"f").params=t(b(this,Fe,"f").params):b(this,Fe,"f").params=t,Q(this,Ar,!0),Q(this,Pn,void 0)}setRequestOptions(t){typeof t=="function"?Q(this,ht,t(b(this,ht,"f"))):Q(this,ht,{...b(this,ht,"f"),...t})}async generateToolResponse(t=b(this,ht,"f").signal){const n=await b(this,_t,"f")??this.params.messages.at(-1);return n?b(this,Wo,"m",$f).call(this,n,t):null}done(){return b(this,Yn,"f").promise}async runUntilDone(){if(!b(this,bs,"f"))for await(const t of this);return this.done()}get params(){return b(this,Fe,"f").params}pushMessages(...t){this.setMessagesParams(n=>({...n,messages:[...n.messages,...t]}))}then(t,n){return this.runUntilDone().then(t,n)}}$f=async function(t,n=b(this,ht,"f").signal){return b(this,Pn,"f")!==void 0?b(this,Pn,"f"):(Q(this,Pn,xM(b(this,Fe,"f").params,t,{...b(this,ht,"f"),signal:n})),b(this,Pn,"f"))};async function xM(e,t=e.messages.at(-1),n){if(!t||t.role!=="assistant"||!t.content||typeof t.content=="string")return null;const r=t.content.filter(o=>o.type==="tool_use");return r.length===0?null:{role:"user",content:await Promise.all(r.map(async o=>{const i=e.tools.find(a=>("name"in a?a.name:a.mcp_server_name)===o.name);if(!i||!("run"in i))return{type:"tool_result",tool_use_id:o.id,content:`Error: Tool '${o.name}' not found`,is_error:!0};try{let a=o.input;"parse"in i&&i.parse&&(a=i.parse(a));const l=await i.run(a,{toolUse:o,toolUseBlock:o,signal:n==null?void 0:n.signal});return{type:"tool_result",tool_use_id:o.id,content:l}}catch(a){return{type:"tool_result",tool_use_id:o.id,content:a instanceof mp?a.content:`Error: ${a instanceof Error?a.message:String(a)}`,is_error:!0}}}))}}const C0={"claude-1.3":"November 6th, 2024","claude-1.3-100k":"November 6th, 2024","claude-instant-1.1":"November 6th, 2024","claude-instant-1.1-100k":"November 6th, 2024","claude-instant-1.2":"November 6th, 2024","claude-3-sonnet-20240229":"July 21st, 2025","claude-3-opus-20240229":"January 5th, 2026","claude-2.1":"July 21st, 2025","claude-2.0":"July 21st, 2025","claude-3-7-sonnet-latest":"February 19th, 2026","claude-3-7-sonnet-20250219":"February 19th, 2026","claude-3-5-haiku-latest":"February 19th, 2026","claude-3-5-haiku-20241022":"February 19th, 2026","claude-opus-4-0":"June 15th, 2026","claude-opus-4-20250514":"June 15th, 2026","claude-sonnet-4-0":"June 15th, 2026","claude-sonnet-4-20250514":"June 15th, 2026","claude-opus-4-1":"August 5th, 2026","claude-opus-4-1-20250805":"August 5th, 2026","claude-mythos-preview":"June 30th, 2026"},bM=["claude-mythos-preview","claude-opus-4-6"];let ha=class extends ye{constructor(){super(...arguments),this.batches=new Gx(this._client)}create(t,n){const r=P0(t),{betas:s,user_profile_id:o,...i}=r;i.model in C0&&console.warn(`The model '${i.model}' is deprecated and will reach end-of-life on ${C0[i.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),bM.includes(i.model)&&i.thinking&&i.thinking.type==="enabled"&&console.warn(`Using Claude with ${i.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let a=this._client._options.timeout;if(!i.stream&&a==null){const u=Yx[i.model]??void 0;a=this._client.calculateNonstreamingTimeout(i.max_tokens,u)}const l=Px(i.tools,i.messages);return this._client.post("/v1/messages?beta=true",{body:i,timeout:a??6e5,...n,headers:H([{...(s==null?void 0:s.toString())!=null?{"anthropic-beta":s==null?void 0:s.toString()}:void 0,...o!=null?{"anthropic-user-profile-id":o}:void 0},l,n==null?void 0:n.headers]),stream:r.stream??!1})}parse(t,n){return n={...n,headers:H([{"anthropic-beta":[...t.betas??[],"structured-outputs-2025-12-15"].toString()},n==null?void 0:n.headers])},this.create(t,n).then(r=>Qx(r,t,{logger:this._client.logger??console}))}stream(t,n){return Su.createMessage(this,t,n)}countTokens(t,n){const r=P0(t),{betas:s,...o}=r;return this._client.post("/v1/messages/count_tokens?beta=true",{body:o,...n,headers:H([{"anthropic-beta":[...s??[],"token-counting-2024-11-01"].toString()},n==null?void 0:n.headers])})}toolRunner(t,n){return new Zx(this._client,t,n)}};function P0(e){var r;if(!e.output_format)return e;if((r=e.output_config)!=null&&r.format)throw new ie("Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).");const{output_format:t,...n}=e;return{...n,output_config:{...e.output_config,format:t}}}ha.Batches=Gx;ha.BetaToolRunner=Zx;ha.ToolError=mp;let vp=class extends ye{list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/sessions/${t}/events?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}send(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/sessions/${t}/events?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}stream(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/sessions/${t}/events/stream?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers]),stream:!0})}toolRunner(t,n){return new gp(t,{...n,client:this._client})}};vp.SessionToolRunner=gp;class eb extends ye{retrieve(t,n,r){const{session_id:s,betas:o}=n;return this._client.get(ee`/v1/sessions/${s}/resources/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{session_id:s,betas:o,...i}=n;return this._client.post(ee`/v1/sessions/${s}/resources/${t}?beta=true`,{body:i,...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/sessions/${t}/resources?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}delete(t,n,r){const{session_id:s,betas:o}=n;return this._client.delete(ee`/v1/sessions/${s}/resources/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}add(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/sessions/${t}/resources?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}class tb extends ye{list(t,n,r){const{session_id:s,betas:o,...i}=n;return this._client.getAPIList(ee`/v1/sessions/${s}/threads/${t}/events?beta=true`,Be,{query:i,...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}stream(t,n,r){const{session_id:s,betas:o}=n;return this._client.get(ee`/v1/sessions/${s}/threads/${t}/stream?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers]),stream:!0})}}class wp extends ye{constructor(){super(...arguments),this.events=new tb(this._client)}retrieve(t,n,r){const{session_id:s,betas:o}=n;return this._client.get(ee`/v1/sessions/${s}/threads/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/sessions/${t}/threads?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}archive(t,n,r){const{session_id:s,betas:o}=n;return this._client.post(ee`/v1/sessions/${s}/threads/${t}/archive?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}wp.Events=tb;class pa extends ye{constructor(){super(...arguments),this.events=new vp(this._client),this.resources=new eb(this._client),this.threads=new wp(this._client)}create(t,n){const{betas:r,...s}=t;return this._client.post("/v1/sessions?beta=true",{body:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/sessions/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/sessions/${t}?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/sessions?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}delete(t,n={},r){const{betas:s}=n??{};return this._client.delete(ee`/v1/sessions/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}archive(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/sessions/${t}/archive?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}pa.Events=vp;pa.Resources=eb;pa.Threads=wp;class nb extends ye{create(t,n={},r){const{betas:s,...o}=n??{};return this._client.post(ee`/v1/skills/${t}/versions?beta=true`,cp({body:o,...r,headers:H([{"anthropic-beta":[...s??[],"skills-2025-10-02"].toString()},r==null?void 0:r.headers])},this._client,!1))}retrieve(t,n,r){const{skill_id:s,betas:o}=n;return this._client.get(ee`/v1/skills/${s}/versions/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"skills-2025-10-02"].toString()},r==null?void 0:r.headers])})}list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/skills/${t}/versions?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"skills-2025-10-02"].toString()},r==null?void 0:r.headers])})}delete(t,n,r){const{skill_id:s,betas:o}=n;return this._client.delete(ee`/v1/skills/${s}/versions/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"skills-2025-10-02"].toString()},r==null?void 0:r.headers])})}download(t,n,r){const{skill_id:s,betas:o}=n;return this._client.get(ee`/v1/skills/${s}/versions/${t}/content?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"skills-2025-10-02"].toString(),Accept:"application/binary"},r==null?void 0:r.headers]),__binaryResponse:!0})}}class xp extends ye{constructor(){super(...arguments),this.versions=new nb(this._client)}create(t={},n){const{betas:r,...s}=t??{};return this._client.post("/v1/skills?beta=true",cp({body:s,...n,headers:H([{"anthropic-beta":[...r??[],"skills-2025-10-02"].toString()},n==null?void 0:n.headers])},this._client,!1))}retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/skills/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"skills-2025-10-02"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/skills?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"skills-2025-10-02"].toString()},n==null?void 0:n.headers])})}delete(t,n={},r){const{betas:s}=n??{};return this._client.delete(ee`/v1/skills/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"skills-2025-10-02"].toString()},r==null?void 0:r.headers])})}}xp.Versions=nb;class rb extends ye{create(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/vaults/${t}/credentials?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}retrieve(t,n,r){const{vault_id:s,betas:o}=n;return this._client.get(ee`/v1/vaults/${s}/credentials/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{vault_id:s,betas:o,...i}=n;return this._client.post(ee`/v1/vaults/${s}/credentials/${t}?beta=true`,{body:i,...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t,n={},r){const{betas:s,...o}=n??{};return this._client.getAPIList(ee`/v1/vaults/${t}/credentials?beta=true`,Be,{query:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}delete(t,n,r){const{vault_id:s,betas:o}=n;return this._client.delete(ee`/v1/vaults/${s}/credentials/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}archive(t,n,r){const{vault_id:s,betas:o}=n;return this._client.post(ee`/v1/vaults/${s}/credentials/${t}/archive?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}mcpOAuthValidate(t,n,r){const{vault_id:s,betas:o}=n;return this._client.post(ee`/v1/vaults/${s}/credentials/${t}/mcp_oauth_validate?beta=true`,{...r,headers:H([{"anthropic-beta":[...o??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}class bp extends ye{constructor(){super(...arguments),this.credentials=new rb(this._client)}create(t,n){const{betas:r,...s}=t;return this._client.post("/v1/vaults?beta=true",{body:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/vaults/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}update(t,n,r){const{betas:s,...o}=n;return this._client.post(ee`/v1/vaults/${t}?beta=true`,{body:o,...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/vaults?beta=true",Be,{query:s,...n,headers:H([{"anthropic-beta":[...r??[],"managed-agents-2026-04-01"].toString()},n==null?void 0:n.headers])})}delete(t,n={},r){const{betas:s}=n??{};return this._client.delete(ee`/v1/vaults/${t}?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}archive(t,n={},r){const{betas:s}=n??{};return this._client.post(ee`/v1/vaults/${t}/archive?beta=true`,{...r,headers:H([{"anthropic-beta":[...s??[],"managed-agents-2026-04-01"].toString()},r==null?void 0:r.headers])})}}bp.Credentials=rb;class dt extends ye{constructor(){super(...arguments),this.models=new Rx(this._client),this.messages=new ha(this._client),this.agents=new hp(this._client),this.environments=new yp(this._client),this.sessions=new pa(this._client),this.deployments=new jx(this._client),this.deploymentRuns=new Tx(this._client),this.vaults=new bp(this._client),this.memoryStores=new sc(this._client),this.files=new Ax(this._client),this.skills=new xp(this._client),this.webhooks=new Hx(this._client),this.userProfiles=new zx(this._client)}}dt.Models=Rx;dt.Messages=ha;dt.Agents=hp;dt.Environments=yp;dt.Sessions=pa;dt.Deployments=jx;dt.DeploymentRuns=Tx;dt.Vaults=bp;dt.MemoryStores=sc;dt.Files=Ax;dt.Skills=xp;dt.Webhooks=Hx;dt.UserProfiles=zx;class sb extends ye{create(t,n){const{betas:r,...s}=t;return this._client.post("/v1/complete",{body:s,timeout:this._client._options.timeout??6e5,...n,headers:H([{...(r==null?void 0:r.toString())!=null?{"anthropic-beta":r==null?void 0:r.toString()}:void 0},n==null?void 0:n.headers]),stream:t.stream??!1})}}function ob(e){var t;return(t=e==null?void 0:e.output_config)==null?void 0:t.format}function A0(e,t,n){const r=ob(t);return!t||!("parse"in(r??{}))?{...e,content:e.content.map(s=>s.type==="text"?Object.defineProperty({...s},"parsed_output",{value:null,enumerable:!1}):s),parsed_output:null}:ib(e,t)}function ib(e,t,n){let r=null;const s=e.content.map(o=>{if(o.type==="text"){const i=_M(t,o.text);return r===null&&(r=i),Object.defineProperty({...o},"parsed_output",{value:i,enumerable:!1})}return o});return{...e,content:s,parsed_output:r}}function _M(e,t){const n=ob(e);if((n==null?void 0:n.type)!=="json_schema")return null;try{return"parse"in n?n.parse(t):JSON.parse(t)}catch(r){throw new ie(`Failed to parse structured output: ${r}`)}}var Ft,Xn,_s,Ko,ll,qo,Go,ul,Yo,mn,Xo,cl,dl,Rr,fl,hl,Qo,fd,R0,hd,pd,md,gd,z0;function yd(e){return e.type==="tool_use"||e.type==="server_tool_use"}class ku{constructor(t,n){Ft.add(this),this.messages=[],this.receivedMessages=[],Xn.set(this,void 0),_s.set(this,null),this.controller=new AbortController,Ko.set(this,void 0),ll.set(this,()=>{}),qo.set(this,()=>{}),Go.set(this,void 0),ul.set(this,()=>{}),Yo.set(this,()=>{}),mn.set(this,{}),Xo.set(this,!1),cl.set(this,!1),dl.set(this,!1),Rr.set(this,!1),fl.set(this,void 0),hl.set(this,void 0),Qo.set(this,void 0),hd.set(this,r=>{if(Q(this,cl,!0),ho(r)&&(r=new nn),r instanceof nn)return Q(this,dl,!0),this._emit("abort",r);if(r instanceof ie)return this._emit("error",r);if(r instanceof Error){const s=new ie(r.message);return s.cause=r,this._emit("error",s)}return this._emit("error",new ie(String(r)))}),Q(this,Ko,new Promise((r,s)=>{Q(this,ll,r,"f"),Q(this,qo,s,"f")})),Q(this,Go,new Promise((r,s)=>{Q(this,ul,r,"f"),Q(this,Yo,s,"f")})),b(this,Ko,"f").catch(()=>{}),b(this,Go,"f").catch(()=>{}),Q(this,_s,t),Q(this,Qo,(n==null?void 0:n.logger)??console)}get response(){return b(this,fl,"f")}get request_id(){return b(this,hl,"f")}async withResponse(){Q(this,Rr,!0);const t=await b(this,Ko,"f");if(!t)throw new Error("Could not resolve a `Response` object");return{data:this,response:t,request_id:t.headers.get("request-id")}}static fromReadableStream(t){const n=new ku(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,n,r,{logger:s}={}){const o=new ku(n,{logger:s});for(const i of n.messages)o._addMessageParam(i);return Q(o,_s,{...n,stream:!0}),o._run(()=>o._createMessage(t,{...n,stream:!0},{...r,headers:{...r==null?void 0:r.headers,[Mx]:"stream"}})),o}_run(t){t().then(()=>{this._emitFinal(),this._emit("end")},b(this,hd,"f"))}_addMessageParam(t){this.messages.push(t)}_addMessage(t,n=!0){this.receivedMessages.push(t),n&&this._emit("message",t)}async _createMessage(t,n,r){var i;const s=r==null?void 0:r.signal;let o;s&&(s.aborted&&this.controller.abort(),o=this.controller.abort.bind(this.controller),s.addEventListener("abort",o));try{b(this,Ft,"m",pd).call(this);const{response:a,data:l}=await t.create({...n,stream:!0},{...r,signal:this.controller.signal}).withResponse();this._connected(a);for await(const u of l)b(this,Ft,"m",md).call(this,u);if((i=l.controller.signal)!=null&&i.aborted)throw new nn;b(this,Ft,"m",gd).call(this)}finally{s&&o&&s.removeEventListener("abort",o)}}_connected(t){this.ended||(Q(this,fl,t),Q(this,hl,t==null?void 0:t.headers.get("request-id")),b(this,ll,"f").call(this,t),this._emit("connect"))}get ended(){return b(this,Xo,"f")}get errored(){return b(this,cl,"f")}get aborted(){return b(this,dl,"f")}abort(){this.controller.abort()}on(t,n){return(b(this,mn,"f")[t]||(b(this,mn,"f")[t]=[])).push({listener:n}),this}off(t,n){const r=b(this,mn,"f")[t];if(!r)return this;const s=r.findIndex(o=>o.listener===n);return s>=0&&r.splice(s,1),this}once(t,n){return(b(this,mn,"f")[t]||(b(this,mn,"f")[t]=[])).push({listener:n,once:!0}),this}emitted(t){return new Promise((n,r)=>{Q(this,Rr,!0),t!=="error"&&this.once("error",r),this.once(t,n)})}async done(){Q(this,Rr,!0),await b(this,Go,"f")}get currentMessage(){return b(this,Xn,"f")}async finalMessage(){return await this.done(),b(this,Ft,"m",fd).call(this)}async finalText(){return await this.done(),b(this,Ft,"m",R0).call(this)}_emit(t,...n){if(b(this,Xo,"f"))return;t==="end"&&(Q(this,Xo,!0),b(this,ul,"f").call(this));const r=b(this,mn,"f")[t];if(r&&(b(this,mn,"f")[t]=r.filter(s=>!s.once),r.forEach(({listener:s})=>s(...n))),t==="abort"){const s=n[0];!b(this,Rr,"f")&&!(r!=null&&r.length)&&Promise.reject(s),b(this,qo,"f").call(this,s),b(this,Yo,"f").call(this,s),this._emit("end");return}if(t==="error"){const s=n[0];!b(this,Rr,"f")&&!(r!=null&&r.length)&&Promise.reject(s),b(this,qo,"f").call(this,s),b(this,Yo,"f").call(this,s),this._emit("end")}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit("finalMessage",b(this,Ft,"m",fd).call(this))}async _fromReadableStream(t,n){var o;const r=n==null?void 0:n.signal;let s;r&&(r.aborted&&this.controller.abort(),s=this.controller.abort.bind(this.controller),r.addEventListener("abort",s));try{b(this,Ft,"m",pd).call(this),this._connected(null);const i=rn.fromReadableStream(t,this.controller);for await(const a of i)b(this,Ft,"m",md).call(this,a);if((o=i.controller.signal)!=null&&o.aborted)throw new nn;b(this,Ft,"m",gd).call(this)}finally{r&&s&&r.removeEventListener("abort",s)}}[(Xn=new WeakMap,_s=new WeakMap,Ko=new WeakMap,ll=new WeakMap,qo=new WeakMap,Go=new WeakMap,ul=new WeakMap,Yo=new WeakMap,mn=new WeakMap,Xo=new WeakMap,cl=new WeakMap,dl=new WeakMap,Rr=new WeakMap,fl=new WeakMap,hl=new WeakMap,Qo=new WeakMap,hd=new WeakMap,Ft=new WeakSet,fd=function(){if(this.receivedMessages.length===0)throw new ie("stream ended without producing a Message with role=assistant");return this.receivedMessages.at(-1)},R0=function(){if(this.receivedMessages.length===0)throw new ie("stream ended without producing a Message with role=assistant");const n=this.receivedMessages.at(-1).content.filter(r=>r.type==="text").map(r=>r.text);if(n.length===0)throw new ie("stream ended without producing a content block with type=text");return n.join(" ")},pd=function(){this.ended||Q(this,Xn,void 0)},md=function(n){var s;if(this.ended)return;const r=b(this,Ft,"m",z0).call(this,n);switch(this._emit("streamEvent",n,r),n.type){case"content_block_delta":{const o=r.content.at(-1);switch(n.delta.type){case"text_delta":{o.type==="text"&&this._emit("text",n.delta.text,o.text||"");break}case"citations_delta":{o.type==="text"&&this._emit("citation",n.delta.citation,o.citations??[]);break}case"input_json_delta":{yd(o)&&((s=b(this,mn,"f").inputJson)!=null&&s.length)&&this._emit("inputJson",n.delta.partial_json,o.input);break}case"thinking_delta":{o.type==="thinking"&&this._emit("thinking",n.delta.thinking,o.thinking);break}case"signature_delta":{o.type==="thinking"&&this._emit("signature",o.signature);break}default:n.delta}break}case"message_stop":{this._addMessageParam(r),this._addMessage(A0(r,b(this,_s,"f"),{logger:b(this,Qo,"f")}),!0);break}case"content_block_stop":{this._emit("contentBlock",r.content.at(-1));break}case"message_start":{Q(this,Xn,r);break}}},gd=function(){if(this.ended)throw new ie("stream has ended, this shouldn't happen");const n=b(this,Xn,"f");if(!n)throw new ie("request ended without sending any chunks");return Q(this,Xn,void 0),A0(n,b(this,_s,"f"),{logger:b(this,Qo,"f")})},z0=function(n){let r=b(this,Xn,"f");if(n.type==="message_start"){if(r)throw new ie(`Unexpected event order, got ${n.type} before receiving "message_stop"`);return n.message}if(!r)throw new ie(`Unexpected event order, got ${n.type} before "message_start"`);switch(n.type){case"message_stop":return r;case"message_delta":return r.stop_reason=n.delta.stop_reason,r.stop_sequence=n.delta.stop_sequence,n.delta.stop_details!=null&&(r.stop_details=n.delta.stop_details),r.usage.output_tokens=n.usage.output_tokens,n.usage.input_tokens!=null&&(r.usage.input_tokens=n.usage.input_tokens),n.usage.cache_creation_input_tokens!=null&&(r.usage.cache_creation_input_tokens=n.usage.cache_creation_input_tokens),n.usage.cache_read_input_tokens!=null&&(r.usage.cache_read_input_tokens=n.usage.cache_read_input_tokens),n.usage.server_tool_use!=null&&(r.usage.server_tool_use=n.usage.server_tool_use),r;case"content_block_start":return r.content.push({...n.content_block}),r;case"content_block_delta":{const s=r.content.at(n.index);switch(n.delta.type){case"text_delta":{(s==null?void 0:s.type)==="text"&&(r.content[n.index]={...s,text:(s.text||"")+n.delta.text});break}case"citations_delta":{(s==null?void 0:s.type)==="text"&&(r.content[n.index]={...s,citations:[...s.citations??[],n.delta.citation]});break}case"input_json_delta":{if(s&&yd(s)){const o=(s[eo]||"")+n.delta.partial_json;r.content[n.index]=Jx(s,o)}break}case"thinking_delta":{(s==null?void 0:s.type)==="thinking"&&(r.content[n.index]={...s,thinking:s.thinking+n.delta.thinking});break}case"signature_delta":{(s==null?void 0:s.type)==="thinking"&&(r.content[n.index]={...s,signature:n.delta.signature});break}default:n.delta}return r}case"content_block_stop":{const s=r.content.at(n.index);return s&&yd(s)&&eo in s&&Object.defineProperty(s,"input",{value:s.input,enumerable:!0,configurable:!0,writable:!0}),r}}},Symbol.asyncIterator)](){const t=[],n=[];let r=!1;return this.on("streamEvent",s=>{const o=n.shift();o?o.resolve(s):t.push(s)}),this.on("end",()=>{r=!0;for(const s of n)s.resolve(void 0);n.length=0}),this.on("abort",s=>{r=!0;for(const o of n)o.reject(s);n.length=0}),this.on("error",s=>{r=!0;for(const o of n)o.reject(s);n.length=0}),{next:async()=>t.length?{value:t.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((o,i)=>n.push({resolve:o,reject:i})).then(o=>o?{value:o,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new rn(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}class ab extends ye{create(t,n){const{user_profile_id:r,...s}=t;return this._client.post("/v1/messages/batches",{body:s,...n,headers:H([{...r!=null?{"anthropic-user-profile-id":r}:void 0},n==null?void 0:n.headers])})}retrieve(t,n){return this._client.get(ee`/v1/messages/batches/${t}`,n)}list(t={},n){return this._client.getAPIList("/v1/messages/batches",ca,{query:t,...n})}delete(t,n){return this._client.delete(ee`/v1/messages/batches/${t}`,n)}cancel(t,n){return this._client.post(ee`/v1/messages/batches/${t}/cancel`,n)}async results(t,n){const r=await this.retrieve(t);if(!r.results_url)throw new ie(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);return this._client.get(r.results_url,{...n,headers:H([{Accept:"application/binary"},n==null?void 0:n.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((s,o)=>oc.fromResponse(o.response,o.controller))}}class _p extends ye{constructor(){super(...arguments),this.batches=new ab(this._client)}create(t,n){const{user_profile_id:r,...s}=t;s.model in F0&&console.warn(`The model '${s.model}' is deprecated and will reach end-of-life on ${F0[s.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),SM.includes(s.model)&&s.thinking&&s.thinking.type==="enabled"&&console.warn(`Using Claude with ${s.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let o=this._client._options.timeout;if(!s.stream&&o==null){const a=Yx[s.model]??void 0;o=this._client.calculateNonstreamingTimeout(s.max_tokens,a)}const i=Px(s.tools,s.messages);return this._client.post("/v1/messages",{body:s,timeout:o??6e5,...n,headers:H([{...r!=null?{"anthropic-user-profile-id":r}:void 0},i,n==null?void 0:n.headers]),stream:t.stream??!1})}parse(t,n){return this.create(t,n).then(r=>ib(r,t,{logger:this._client.logger??console}))}stream(t,n){return ku.createMessage(this,t,n,{logger:this._client.logger??console})}countTokens(t,n){return this._client.post("/v1/messages/count_tokens",{body:t,...n})}}const F0={"claude-1.3":"November 6th, 2024","claude-1.3-100k":"November 6th, 2024","claude-instant-1.1":"November 6th, 2024","claude-instant-1.1-100k":"November 6th, 2024","claude-instant-1.2":"November 6th, 2024","claude-3-sonnet-20240229":"July 21st, 2025","claude-3-opus-20240229":"January 5th, 2026","claude-2.1":"July 21st, 2025","claude-2.0":"July 21st, 2025","claude-3-7-sonnet-latest":"February 19th, 2026","claude-3-7-sonnet-20250219":"February 19th, 2026","claude-3-5-haiku-latest":"February 19th, 2026","claude-3-5-haiku-20241022":"February 19th, 2026","claude-opus-4-0":"June 15th, 2026","claude-opus-4-20250514":"June 15th, 2026","claude-sonnet-4-0":"June 15th, 2026","claude-sonnet-4-20250514":"June 15th, 2026","claude-opus-4-1":"August 5th, 2026","claude-opus-4-1-20250805":"August 5th, 2026","claude-mythos-preview":"June 30th, 2026"},SM=["claude-mythos-preview","claude-opus-4-6"];_p.Batches=ab;class lb extends ye{retrieve(t,n={},r){const{betas:s}=n??{};return this._client.get(ee`/v1/models/${t}`,{...r,headers:H([{...(s==null?void 0:s.toString())!=null?{"anthropic-beta":s==null?void 0:s.toString()}:void 0},r==null?void 0:r.headers])})}list(t={},n){const{betas:r,...s}=t??{};return this._client.getAPIList("/v1/models",ca,{query:s,...n,headers:H([{...(r==null?void 0:r.toString())!=null?{"anthropic-beta":r==null?void 0:r.toString()}:void 0},n==null?void 0:n.headers])})}}var Bf,Sp,Fl,ub;const kM="\\n\\nHuman:",EM="\\n\\nAssistant:";class ze{get credentials(){return this._authState.provider}constructor({baseURL:t=fe("ANTHROPIC_BASE_URL"),apiKey:n,authToken:r,webhookKey:s=fe("ANTHROPIC_WEBHOOK_SIGNING_KEY")??null,...o}={}){if(Bf.add(this),this._requestAuthFlags=new WeakMap,Fl.set(this,void 0),n===void 0&&(n=o.profile!=null?null:fe("ANTHROPIC_API_KEY")??null),r===void 0&&(r=o.profile!=null?null:fe("ANTHROPIC_AUTH_TOKEN")??null),o.profile!=null&&(o.credentials!=null||o.config!=null))throw new TypeError("Pass at most one of `profile`, `credentials`, or `config`.");const i={apiKey:n,authToken:r,webhookKey:s,...o,baseURL:t||"https://api.anthropic.com"};if(!i.dangerouslyAllowBrowser&&PT())throw new ie(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);this.baseURL=i.baseURL,this._baseURLIsExplicit=o.__baseURLIsExplicit??!!t,this.timeout=i.timeout??Sp.DEFAULT_TIMEOUT,this.logger=i.logger??console,this.logLevel=xu,this.logLevel=zf(i.logLevel,"ClientOptions.logLevel",_e(this))??zf(fe("ANTHROPIC_LOG"),"process.env['ANTHROPIC_LOG']",_e(this))??xu,this.fetchOptions=i.fetchOptions,this.maxRetries=i.maxRetries??2,this.fetch=i.fetch??FT(),Q(this,Fl,LT),this.middleware=[...i.middleware??[]];const a=fe("ANTHROPIC_CUSTOM_HEADERS");if(a){const u={};for(const c of a.split(`
`)){const d=c.indexOf(":");d>=0&&(u[c.substring(0,d).trim()]=c.substring(d+1).trim())}i.defaultHeaders={...u,...i.defaultHeaders}}const l=o.__auth;if(delete i.__auth,delete i.__baseURLIsExplicit,this._options=i,this.apiKey=typeof n=="string"?n:null,this.authToken=r,this.webhookKey=s,l)this._authState=l,!this._baseURLIsExplicit&&l.baseURL&&(this.baseURL=l.baseURL);else if(this._authState={provider:null,tokenCache:null,resolution:null,error:null,extraHeaders:{}},this.apiKey==null&&this.authToken==null){const u=i.credentials??null;if(u)this._authState.provider=u,this._authState.tokenCache=this._makeTokenCache(u);else if(i.config!=null){const c=vx(i.config,this._credentialResolverOptions());this._authState.provider=c.provider,this._authState.tokenCache=this._makeTokenCache(c.provider),this._authState.extraHeaders=c.extraHeaders,this._applyCredentialBaseURL(c.baseURL)}else i.profile!=null?this._authState.resolution=this._resolveDefaultCredentials(i.profile):this._authState.resolution=this._resolveDefaultCredentials()}}_applyCredentialBaseURL(t){if(!t)return;const n=t.replace(/\/+$/,"");this._authState.baseURL=n,this._baseURLIsExplicit||(this.baseURL=n)}_credentialResolverOptions(){return{baseURL:this.baseURL,fetch:this._credentialsFetch(),userAgent:this.getUserAgent(),onCacheWriteError:t=>{_e(this).debug("credential cache write failed (best-effort)",t)},onSafetyWarning:t=>{_e(this).warn(t)}}}_credentialsFetch(){return c0(this.fetch,this.middleware,void 0,this)}_makeTokenCache(t){return new tj(t,n=>{_e(this).debug("advisory token refresh failed; serving cached token",n)})}withOptions(t){const n="credentials"in t||"config"in t||"profile"in t,r="apiKey"in t||"authToken"in t||n,s={...this._options,...this._baseURLIsExplicit?{baseURL:this.baseURL}:{},maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,middleware:this.middleware,apiKey:this.apiKey,authToken:this.authToken,webhookKey:this.webhookKey,credentials:this.credentials,...n?{credentials:void 0,config:void 0,profile:void 0}:{},...t,__auth:r?void 0:this._authState,__baseURLIsExplicit:"baseURL"in t?!0:this._baseURLIsExplicit};return new this.constructor(s)}async _resolveDefaultCredentials(t){try{const n=await fj(this._credentialResolverOptions(),t);if(n)this._authState.provider=n.provider,this._authState.tokenCache=this._makeTokenCache(n.provider),this._authState.extraHeaders=n.extraHeaders,this._applyCredentialBaseURL(n.baseURL);else if(t!=null)throw new ie(`Profile "${t}" could not be resolved (no <config_dir>/configs/${t}.json found).`)}catch(n){this._authState.error=n}finally{this._authState.resolution=null}}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:t,nulls:n}){if(!(t.get("x-api-key")||t.get("authorization"))){if(this._authState.error)throw this._authState.error;if(!(this._authState.tokenCache||this._authState.resolution)&&!(this.apiKey&&t.get("x-api-key"))&&!n.has("x-api-key")&&!(this.authToken&&t.get("authorization"))&&!n.has("authorization"))throw new Error('Could not resolve authentication method. Expected one of apiKey, authToken, credentials, config, or profile to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted')}}_authFlags(t){let n=this._requestAuthFlags.get(t);return n||(n={usedTokenCache:!1,didRefreshFor401:!1},this._requestAuthFlags.set(t,n)),n}async authHeaders(t){if(this._authState.resolution&&await this._authState.resolution,!this._authState.error){if(this._authState.tokenCache&&this.apiKey==null){const n=await this._authState.tokenCache.getToken();return this._authFlags(t).usedTokenCache=!0,H([{Authorization:`Bearer ${n}`}])}return H([await this.apiKeyAuth(t),await this.bearerAuth(t)])}}async apiKeyAuth(t){if(this.apiKey!=null)return H([{"X-Api-Key":this.apiKey}])}async bearerAuth(t){if(this.authToken!=null)return H([{Authorization:`Bearer ${this.authToken}`}])}stringifyQuery(t){return VT(t)}getUserAgent(){return`${this.constructor.name}/JS ${ar}`}defaultIdempotencyKey(){return`stainless-node-retry-${yu()}`}makeStatusError(t,n,r,s){return Ge.generate(t,n,r,s)}buildURL(t,n,r){const s=!b(this,Bf,"m",ub).call(this)&&r||this.baseURL,o=jT(t)?new URL(t):new URL(s+(s.endsWith("/")&&t.startsWith("/")?t.slice(1):t)),i=this.defaultQuery(),a=Object.fromEntries(o.searchParams);return(!Gg(i)||!Gg(a))&&(n={...a,...i,...n}),typeof n=="object"&&n&&!Array.isArray(n)&&(o.search=this.stringifyQuery(n)),o.toString()}_calculateNonstreamingTimeout(t){if(3600*t/128e3>600)throw new ie("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details");return 600*1e3}async prepareOptions(t){}async prepareRequest(t,{url:n,options:r}){var s;if(this._authState.tokenCache&&this.apiKey==null){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,l]of Object.entries(this._authState.extraHeaders))o.has(a)||o.set(a,l);const i=(s=o.get("anthropic-beta"))==null?void 0:s.split(",").map(a=>a.trim());i!=null&&i.includes(wu)||o.append("anthropic-beta",wu),t.headers=o}}backendMiddleware(){return[]}get(t,n){return this.methodRequest("get",t,n)}post(t,n){return this.methodRequest("post",t,n)}patch(t,n){return this.methodRequest("patch",t,n)}put(t,n){return this.methodRequest("put",t,n)}delete(t,n){return this.methodRequest("delete",t,n)}methodRequest(t,n,r){return this.request(Promise.resolve(r).then(s=>({method:t,path:n,...s})))}request(t,n=null){return new ec(this,this.makeRequest(t,n,void 0))}async makeRequest(t,n,r){var p,m,v;const s=await t,o=s.maxRetries??this.maxRetries;n==null&&(n=o,this._requestAuthFlags.delete(s)),await this.prepareOptions(s);const{req:i,url:a,timeout:l}=await this.buildRequest(s,{retryCount:o-n}),u="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),c=r===void 0?"":`, retryOf: ${r}`,d=Date.now();if((p=s.signal)!=null&&p.aborted)throw new nn;const h=new AbortController,f=await this.fetchWithTimeout(a,i,l,h,s,{requestLogID:u,retryOfRequestLogID:r}).catch(vu),y=Date.now();if(f instanceof globalThis.Error){const w=`retrying, ${n} attempts remaining`;if((m=s.signal)!=null&&m.aborted)throw new nn;const S=ho(f)||/timed? ?out/i.test(String(f)+("cause"in f?String(f.cause):"")),N=this.middleware.length>0||!!((v=s.middleware)!=null&&v.length)||this.backendMiddleware().length>0;if(N&&!S&&!bj(f))throw _e(this).info(`[${u}] middleware error (not retryable)`),_e(this).debug(`[${u}] middleware error (not retryable)`,Qn({retryOfRequestLogID:r,url:a,durationMs:y-d,message:f.message})),f;if(n)return _e(this).info(`[${u}] connection ${S?"timed out":"failed"} - ${w}`),_e(this).debug(`[${u}] connection ${S?"timed out":"failed"} (${w})`,Qn({retryOfRequestLogID:r,url:a,durationMs:y-d,message:f.message})),this.retryRequest(s,n,r??u);throw _e(this).info(`[${u}] connection ${S?"timed out":"failed"} - error; no more retries left`),_e(this).debug(`[${u}] connection ${S?"timed out":"failed"} (error; no more retries left)`,Qn({retryOfRequestLogID:r,url:a,durationMs:y-d,message:f.message})),S?new q1:N&&!bx(f)?f:new la({cause:f})}const g=[...f.headers.entries()].filter(([w])=>w==="request-id").map(([w,S])=>", "+w+": "+JSON.stringify(S)).join(""),x=`[${u}${c}${g}] ${i.method} ${a} ${f.ok?"succeeded":"failed"} with status ${f.status} in ${y-d}ms`;if(!f.ok){const w=await this.shouldRetry(f,s);if(n&&w){const P=`retrying, ${n} attempts remaining`;return await OT(f.body),_e(this).info(`${x} - ${P}`),_e(this).debug(`[${u}] response error (${P})`,Qn({retryOfRequestLogID:r,url:f.url,status:f.status,headers:f.headers,durationMs:y-d})),this.retryRequest(s,n,r??u,f.headers)}const S=w?"error; no more retries left":"error; not retryable";_e(this).info(`${x} - ${S}`);const N=await f.text().catch(P=>vu(P).message),I=nx(N),C=I?void 0:N;throw _e(this).debug(`[${u}] response error (${S})`,Qn({retryOfRequestLogID:r,url:f.url,status:f.status,headers:f.headers,message:C,durationMs:Date.now()-d})),this.makeStatusError(f.status,I,C,f.headers)}return _e(this).info(x),_e(this).debug(`[${u}] response start`,Qn({retryOfRequestLogID:r,url:f.url,status:f.status,headers:f.headers,durationMs:y-d})),{response:f,options:s,controller:h,requestLogID:u,retryOfRequestLogID:r,startTime:d}}getAPIList(t,n,r){return this.requestAPIList(n,r&&"then"in r?r.then(s=>({method:"get",path:t,...s})):{method:"get",path:t,...r})}requestAPIList(t,n){const r=this.makeRequest(n,null,void 0);return new kj(this,r,t)}async fetchWithTimeout(t,n,r,s,o,i){const{signal:a,method:l,...u}=n||{},c=this._makeAbort(s);a&&a.addEventListener("abort",c,{once:!0});const d=globalThis.ReadableStream&&u.body instanceof globalThis.ReadableStream||typeof u.body=="object"&&u.body!==null&&Symbol.asyncIterator in u.body,h={signal:s.signal,...d?{duplex:"half"}:{},method:"GET",...u};l&&(h.method=l.toUpperCase());const f=this.fetch,y=async(v,w)=>{const S=setTimeout(c,r);try{return await f.call(void 0,v,w)}finally{clearTimeout(S)}},g=o===void 0?y:async(v,w={})=>{const S=typeof v=="string"?v:v instanceof URL?v.href:v.url;return w.headers=w.headers instanceof Headers?w.headers:new Headers(w.headers),await this.prepareRequest(w,{url:S,options:o}),i&&_e(this).debug(`[${i.requestLogID}] sending request`,Qn({retryOfRequestLogID:i.retryOfRequestLogID,method:w.method,url:S,options:o,headers:w.headers})),y(v,w)},x=o==null?void 0:o.middleware,p=this.backendMiddleware(),m=x!=null&&x.length||p.length?[...this.middleware,...x??[],...p]:this.middleware;return await c0(g,m,o,this)(t,h)}async shouldRetry(t,n){const r=this._authFlags(n);if(t.status===401&&this._authState.tokenCache&&r.usedTokenCache&&!r.didRefreshFor401)return r.didRefreshFor401=!0,this._authState.tokenCache.invalidate(),!0;const s=t.headers.get("x-should-retry");return s==="true"?!0:s==="false"?!1:t.status===408||t.status===409||t.status===429||t.status>=500}async retryRequest(t,n,r,s){let o;const i=s==null?void 0:s.get("retry-after-ms");if(i){const l=parseFloat(i);Number.isNaN(l)||(o=l)}const a=s==null?void 0:s.get("retry-after");if(a&&!o){const l=parseFloat(a);Number.isNaN(l)?o=Date.parse(a)-Date.now():o=l*1e3}if(o===void 0){const l=t.maxRetries??this.maxRetries;o=this.calculateDefaultRetryTimeoutMillis(n,l)}return await Xr(o),this.makeRequest(t,n-1,r)}calculateDefaultRetryTimeoutMillis(t,n){const o=n-t,i=Math.min(.5*Math.pow(2,o),8),a=1-Math.random()*.25;return i*a*1e3}calculateNonstreamingTimeout(t,n){if(36e5*t/128e3>6e5||n!=null&&t>n)throw new ie("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details");return 6e5}async buildRequest(t,{retryCount:n=0}={}){const r={...t},{method:s,path:o,query:i,defaultBaseURL:a}=r;this._authState.resolution&&await this._authState.resolution,!this._baseURLIsExplicit&&this._authState.baseURL&&this.baseURL!==this._authState.baseURL&&(this.baseURL=this._authState.baseURL);const l=this.buildURL(o,i,a);"timeout"in r&&CT("timeout",r.timeout),r.timeout=r.timeout??this.timeout;const{bodyHeaders:u,body:c}=this.buildBody({options:r}),d=await this.buildHeaders({options:t,method:s,bodyHeaders:u,retryCount:n});return{req:{method:s,headers:d,...r.signal&&{signal:r.signal},...globalThis.ReadableStream&&c instanceof globalThis.ReadableStream&&{duplex:"half"},...c&&{body:c},...this.fetchOptions??{},...r.fetchOptions??{}},url:l,timeout:r.timeout}}async buildHeaders({options:t,method:n,bodyHeaders:r,retryCount:s}){let o={};this.idempotencyHeader&&n!=="get"&&(t.idempotencyKey||(t.idempotencyKey=this.defaultIdempotencyKey()),o[this.idempotencyHeader]=t.idempotencyKey);const i=H([o,{Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(s),...t.timeout?{"X-Stainless-Timeout":String(Math.trunc(t.timeout/1e3))}:{},...sp(),...this._options.dangerouslyAllowBrowser?{"anthropic-dangerous-direct-browser-access":"true"}:void 0,"anthropic-version":"2023-06-01"},await this.authHeaders(t),this._options.defaultHeaders,r,t.headers]);return this.validateHeaders(i),i.values}_makeAbort(t){return()=>t.abort()}buildBody({options:{body:t,headers:n}}){if(!t)return{bodyHeaders:void 0,body:void 0};const r=H([n]);return ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof DataView||typeof t=="string"&&r.values.has("content-type")||globalThis.Blob&&t instanceof globalThis.Blob||t instanceof FormData||t instanceof URLSearchParams||globalThis.ReadableStream&&t instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:t}:typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t&&"next"in t&&typeof t.next=="function")?{bodyHeaders:void 0,body:sx(t)}:typeof t=="object"&&r.values.get("content-type")==="application/x-www-form-urlencoded"?{bodyHeaders:{"content-type":"application/x-www-form-urlencoded"},body:this.stringifyQuery(t)}:b(this,Fl,"f").call(this,{body:t,headers:r})}}Sp=ze,Fl=new WeakMap,Bf=new WeakSet,ub=function(){return this.baseURL!=="https://api.anthropic.com"};ze.Anthropic=Sp;ze.HUMAN_PROMPT=kM;ze.AI_PROMPT=EM;ze.DEFAULT_TIMEOUT=6e5;ze.AnthropicError=ie;ze.APIError=Ge;ze.APIConnectionError=la;ze.APIConnectionTimeoutError=q1;ze.APIUserAbortError=nn;ze.NotFoundError=Q1;ze.ConflictError=J1;ze.RateLimitError=ex;ze.BadRequestError=G1;ze.AuthenticationError=Y1;ze.InternalServerError=tx;ze.PermissionDeniedError=X1;ze.UnprocessableEntityError=Z1;ze.toFile=Mj;class ma extends ze{constructor(){super(...arguments),this.completions=new sb(this),this.messages=new _p(this),this.models=new lb(this),this.beta=new dt(this)}}ma.Completions=sb;ma.Messages=_p;ma.Models=lb;ma.Beta=dt;new TextEncoder;const NM="claude-opus-4-8",IM=[{id:"claude-opus-4-8",label:"Opus 4.8 · most capable"},{id:"claude-sonnet-4-6",label:"Sonnet 4.6 · balanced"},{id:"claude-haiku-4-5",label:"Haiku 4.5 · fastest"}],TM=`You are a senior software engineer helping a developer understand an unfamiliar codebase one file at a time. Be accurate and concise — explain what is actually in the file, never invent APIs. Respond in GitHub-flavored Markdown using exactly these sections:

**Purpose** — one or two sentences on what this file is for.
**Key parts** — the main exports / functions / components and what each does (bullet list).
**Dependencies & data flow** — what it imports or relies on, and how data moves through it.
**Notes** — gotchas, side effects, or TODOs worth knowing. Omit this section entirely if there is nothing notable.

Do not restate the code verbatim or add a preamble. Start directly with the **Purpose** heading.`;async function jM({apiKey:e,path:t,content:n,model:r=NM,onText:s,signal:o}){const i=new ma({apiKey:e,dangerouslyAllowBrowser:!0}),a={model:r,max_tokens:8e3,system:TM,messages:[{role:"user",content:`Summarise and explain this file.

Path: ${t}

Source:

\`\`\`
${n}
\`\`\``}]};r.startsWith("claude-haiku")||(a.thinking={type:"adaptive"});const l=i.messages.stream(a,{signal:o});return l.on("text",c=>s==null?void 0:s(c)),(await l.finalMessage()).content.filter(c=>c.type==="text").map(c=>c.text).join("")}function MM({file:e,content:t}){const n=ne(v=>v.apiKey),r=ne(v=>v.setApiKey),s=ne(v=>v.aiModel),o=ne(v=>v.setAiModel),i=ne(v=>v.summaries),a=ne(v=>v.setSummary),[l,u]=k.useState(""),[c,d]=k.useState("idle"),[h,f]=k.useState(null),[y,g]=k.useState(""),x=k.useRef(null);k.useEffect(()=>{var w;(w=x.current)==null||w.abort();const v=i[e.path];u(v||""),d(v?"done":"idle"),f(null)},[e.path]),k.useEffect(()=>()=>{var v;return(v=x.current)==null?void 0:v.abort()},[]);const p=async()=>{if(!n)return;f(null),u(""),d("thinking");const v=new AbortController;x.current=v;let w=!0;try{const S=await jM({apiKey:n,path:e.path,content:t,model:s,signal:v.signal,onText:N=>{w&&(w=!1,d("streaming")),u(I=>I+N)}});a(e.path,S),d("done")}catch(S){if((S==null?void 0:S.name)==="AbortError")return;f((S==null?void 0:S.message)||String(S)),d("error")}},m=c==="thinking"||c==="streaming";return n?E.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[E.jsxs("div",{className:"flex items-center gap-2 border-b border-slate-800 px-3 py-2 text-xs",children:[E.jsx("select",{value:s,onChange:v=>o(v.target.value),disabled:m,className:"rounded border border-slate-700 bg-slate-800 px-1.5 py-1 text-[11px] text-slate-200 outline-none",children:IM.map(v=>E.jsx("option",{value:v.id,children:v.label},v.id))}),E.jsx("button",{onClick:m?()=>{var v;return(v=x.current)==null?void 0:v.abort()}:p,className:["rounded px-2.5 py-1 font-medium text-white",m?"bg-rose-600 hover:bg-rose-500":"bg-indigo-600 hover:bg-indigo-500"].join(" "),children:m?"Stop":c==="done"?"↻ Regenerate":"✨ Explain"}),E.jsx("button",{onClick:()=>r(""),className:"ml-auto text-slate-500 hover:text-slate-300",title:"Forget API key",children:"key ✕"})]}),E.jsxs("div",{className:"thin-scroll flex-1 overflow-auto p-3 text-[13px] leading-relaxed",children:[c==="idle"&&E.jsxs("div",{className:"text-slate-500",children:["Click ",E.jsx("span",{className:"text-indigo-300",children:"✨ Explain"})," to summarise this file with Claude."]}),c==="thinking"&&E.jsx("div",{className:"animate-pulse text-slate-400",children:"Analyzing the file…"}),h&&E.jsx("div",{className:"rounded-md border border-rose-700/60 bg-rose-900/30 p-2 text-rose-200",children:h}),l&&E.jsx(CM,{text:l}),c==="streaming"&&E.jsx("span",{className:"ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-indigo-400 align-middle"})]})]}):E.jsxs("div",{className:"flex-1 overflow-auto p-4 text-sm",children:[E.jsx("div",{className:"mb-3 text-slate-300",children:"Add an Anthropic API key to explain files with Claude."}),E.jsx("input",{type:"password",value:y,onChange:v=>g(v.target.value),placeholder:"sk-ant-...",className:"w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-xs text-slate-100 outline-none focus:border-indigo-500"}),E.jsx("button",{onClick:()=>y.trim()&&r(y.trim()),className:"mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-500",children:"Save key"}),E.jsx("p",{className:"mt-3 text-[11px] leading-relaxed text-amber-300/80",children:"⚠️ The key is stored in your browser and sent directly to Anthropic from this page. Fine for local prototyping — for production, proxy requests through a backend instead."})]})}function O0(e,t){const n=[],r=/(\*\*[^*]+\*\*|`[^`]+`)/g;let s=0,o,i=0;for(;(o=r.exec(e))!==null;){o.index>s&&n.push(e.slice(s,o.index));const a=o[0];a.startsWith("**")?n.push(E.jsx("strong",{className:"text-slate-100",children:a.slice(2,-2)},`${t}-b${i}`)):n.push(E.jsx("code",{className:"rounded bg-slate-800 px-1 font-mono text-[12px] text-cyan-200",children:a.slice(1,-1)},`${t}-c${i}`)),s=o.index+a.length,i++}return s<e.length&&n.push(e.slice(s)),n}function CM({text:e}){const t=e.split(`
`);return E.jsx("div",{className:"space-y-1 text-slate-300",children:t.map((n,r)=>{const s=n.match(/^\*\*(.+)\*\*\s*$/);return s?E.jsx("div",{className:"pt-2 text-[11px] font-semibold uppercase tracking-wider text-indigo-300",children:s[1]},r):/^\s*[-*]\s+/.test(n)?E.jsxs("div",{className:"flex gap-2 pl-1",children:[E.jsx("span",{className:"text-slate-600",children:"•"}),E.jsx("span",{children:O0(n.replace(/^\s*[-*]\s+/,""),r)})]},r):n.trim()===""?E.jsx("div",{className:"h-1"},r):E.jsx("p",{children:O0(n,r)},r)})})}function PM(){const e=ne(x=>x.editorFileId),t=ne(x=>x.projectFiles),n=ne(x=>x.closeEditor),r=ne(x=>x.setFileEdit),s=ne(x=>x.revertFileEdit),o=ne(x=>x.fileEdits),i=ne(x=>e?cE(x,e):""),[a,l]=k.useState("code"),[u,c]=k.useState({x:0,y:0}),d=k.useRef(null),h=k.useRef(null);if(k.useEffect(()=>{e&&(c({x:Math.max(24,window.innerWidth-470),y:96}),l("code"))},[e]),k.useEffect(()=>{const x=m=>{d.current&&c({x:m.clientX-d.current.dx,y:m.clientY-d.current.dy})},p=()=>d.current=null;return window.addEventListener("mousemove",x),window.addEventListener("mouseup",p),()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",p)}},[]),k.useEffect(()=>{const x=p=>p.key==="Escape"&&n();return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[n]),!e)return null;const f=t[e];if(!f)return null;const y=f.path in o,g=x=>{d.current={dx:x.clientX-u.x,dy:x.clientY-u.y}};return E.jsxs("div",{className:"fixed z-50 flex w-[440px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl",style:{left:u.x,top:u.y,height:f.kind==="text"?420:"auto"},children:[E.jsxs("div",{onMouseDown:g,className:"flex cursor-grab items-center gap-2 border-b border-slate-800 bg-slate-900 px-3 py-2 active:cursor-grabbing",children:[E.jsxs("span",{className:"flex gap-1.5",children:[E.jsx("span",{className:"h-3 w-3 rounded-full bg-rose-500"}),E.jsx("span",{className:"h-3 w-3 rounded-full bg-amber-500"}),E.jsx("span",{className:"h-3 w-3 rounded-full bg-emerald-500"})]}),E.jsx("span",{className:"ml-1 truncate font-mono text-xs text-slate-300",children:f.path}),y&&E.jsx("span",{className:"rounded bg-amber-500/20 px-1.5 text-[10px] text-amber-300",children:"● edited"}),E.jsx("span",{className:"ml-auto rounded bg-slate-800 px-1.5 text-[10px] uppercase text-slate-400",children:f.kind}),E.jsx("button",{onClick:n,className:"text-slate-500 hover:text-white",children:"✕"})]}),f.kind==="text"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"flex items-center gap-1 border-b border-slate-800 bg-slate-900/60 px-2 py-1 text-[11px]",children:[E.jsx(L0,{active:a==="code",onClick:()=>l("code"),children:"</> Code"}),E.jsx(L0,{active:a==="ai",onClick:()=>l("ai"),children:"✨ AI Explain"}),E.jsx("span",{className:"ml-auto pr-1 text-[10px] text-slate-600",children:"Claude"})]}),a==="code"?E.jsxs(E.Fragment,{children:[E.jsx("textarea",{spellCheck:!1,value:i,onChange:x=>r(f.path,x.target.value),className:"thin-scroll flex-1 resize-none bg-[#0b0e14] p-3 font-mono text-[12.5px] leading-relaxed text-slate-200 outline-none"}),E.jsxs("div",{className:"flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-3 py-1.5 text-[11px]",children:[E.jsxs("span",{className:"text-slate-500",children:[i.split(`
`).length," lines · in-memory only"]}),E.jsx("button",{disabled:!y,onClick:()=>s(f.path),className:"ml-auto rounded px-2 py-1 text-slate-300 enabled:hover:bg-slate-800 disabled:opacity-40",children:"Revert"})]})]}):E.jsx(MM,{file:f,content:i})]}),f.kind==="image"&&E.jsx("div",{className:"flex items-center justify-center bg-[repeating-conic-gradient(#1e2533_0%_25%,#11151f_0%_50%)] bg-[length:24px_24px] p-4",children:E.jsx("img",{src:f.url,alt:f.name,className:"max-h-[320px] max-w-full rounded-lg object-contain"})}),f.kind==="audio"&&E.jsxs("div",{className:"flex flex-col items-center gap-3 p-5",children:[E.jsx("button",{onClick:()=>{var x;return(x=h.current)==null?void 0:x.play()},className:"flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-lg transition hover:bg-indigo-500 active:scale-95",title:"Play",children:"▶"}),E.jsx("audio",{ref:h,src:f.url,controls:!0,className:"w-full"}),E.jsx("span",{className:"text-[11px] text-slate-500",children:f.name})]})]})}function L0({active:e,onClick:t,children:n}){return E.jsx("button",{onClick:t,className:["rounded px-2 py-1 font-medium transition-colors",e?"bg-slate-800 text-slate-100":"text-slate-400 hover:text-slate-200"].join(" "),children:n})}function AM(){return E.jsxs("div",{className:"h-screen w-screen overflow-hidden bg-canvas text-slate-200",children:[E.jsxs(pf,{direction:"horizontal",children:[E.jsx(ni,{defaultSize:30,minSize:18,className:"border-r border-slate-800",children:E.jsxs(pf,{direction:"vertical",children:[E.jsx(ni,{defaultSize:50,minSize:15,children:E.jsx(dE,{})}),E.jsx(mf,{className:"group relative h-[3px] bg-slate-800 transition-colors hover:bg-indigo-500",children:E.jsx("div",{className:"absolute inset-x-0 -top-1 -bottom-1"})}),E.jsx(ni,{defaultSize:50,minSize:15,children:E.jsx(fE,{})})]})}),E.jsx(mf,{className:"relative w-[3px] bg-slate-800 transition-colors hover:bg-indigo-500",children:E.jsx("div",{className:"absolute inset-y-0 -left-1 -right-1"})}),E.jsx(ni,{defaultSize:70,minSize:40,children:E.jsx(ET,{})})]}),E.jsx(NT,{}),E.jsx(PM,{})]})}function RM(){return E.jsx(AM,{})}wd.createRoot(document.getElementById("root")).render(E.jsx(L.StrictMode,{children:E.jsx(RM,{})}));export{ie as A};
