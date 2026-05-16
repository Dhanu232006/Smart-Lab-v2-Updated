(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var hs={exports:{}},ml={},vs={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Rd=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Fd=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Ad=Symbol.for("react.suspense"),Bd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),ia=Symbol.iterator;function Wd(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ys=Object.assign,ks={};function kn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||xs}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ws(){}ws.prototype=kn.prototype;function qo(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||xs}var ei=qo.prototype=new ws;ei.constructor=qo;ys(ei,kn.prototype);ei.isPureReactComponent=!0;var aa=Array.isArray,Ss=Object.prototype.hasOwnProperty,ti={current:null},bs={key:!0,ref:!0,__self:!0,__source:!0};function js(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ss.call(t,r)&&!bs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:sr,type:e,key:o,ref:a,props:l,_owner:ti.current}}function Hd(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Vd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sa=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vd(""+e.key):t.toString(36)}function Ir(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case sr:case Td:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Il(a,0):r,aa(l)?(n="",e!=null&&(n=e.replace(sa,"$&/")+"/"),Ir(l,t,n,"",function(d){return d})):l!=null&&(ni(l)&&(l=Hd(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(sa,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",aa(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Il(o,s);a+=Ir(o,t,n,u,l)}else if(u=Wd(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Il(o,s++),a+=Ir(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function mr(e,t,n){if(e==null)return e;var r=[],l=0;return Ir(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Tr={transition:null},Yd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:ti};function Ns(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=kn;O.Fragment=Rd;O.Profiler=Od;O.PureComponent=qo;O.StrictMode=Md;O.Suspense=Ad;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;O.act=Ns;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ys({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ti.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ss.call(t,u)&&!bs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:sr,type:e.type,key:l,ref:o,props:r,_owner:a}};O.createContext=function(e){return e={$$typeof:Dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fd,_context:e},e.Consumer=e};O.createElement=js;O.createFactory=function(e){var t=js.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:$d,render:e}};O.isValidElement=ni;O.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Qd}};O.memo=function(e,t){return{$$typeof:Bd,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};O.unstable_act=Ns;O.useCallback=function(e,t){return he.current.useCallback(e,t)};O.useContext=function(e){return he.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return he.current.useDeferredValue(e)};O.useEffect=function(e,t){return he.current.useEffect(e,t)};O.useId=function(){return he.current.useId()};O.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return he.current.useMemo(e,t)};O.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};O.useRef=function(e){return he.current.useRef(e)};O.useState=function(e){return he.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return he.current.useTransition()};O.version="18.3.1";vs.exports=O;var w=vs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd=w,Gd=Symbol.for("react.element"),Xd=Symbol.for("react.fragment"),Zd=Object.prototype.hasOwnProperty,Jd=Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qd={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Zd.call(t,r)&&!qd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Gd,type:e,key:o,ref:a,props:l,_owner:Jd.current}}ml.Fragment=Xd;ml.jsx=Cs;ml.jsxs=Cs;hs.exports=ml;var i=hs.exports,Es={exports:{}},Pe={},zs={exports:{}},Ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,I){var _=C.length;C.push(I);e:for(;0<_;){var $=_-1>>>1,W=C[$];if(0<l(W,I))C[$]=I,C[_]=W,_=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var I=C[0],_=C.pop();if(_!==I){C[0]=_;e:for(var $=0,W=C.length,N=W>>>1;$<N;){var H=2*($+1)-1,V=C[H],ee=H+1,It=C[ee];if(0>l(V,_))ee<W&&0>l(It,V)?(C[$]=It,C[ee]=_,$=ee):(C[$]=V,C[H]=_,$=H);else if(ee<W&&0>l(It,_))C[$]=It,C[ee]=_,$=ee;else break e}}return I}function l(C,I){var _=C.sortIndex-I.sortIndex;return _!==0?_:C.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],g=1,h=null,m=3,k=!1,S=!1,j=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var I=n(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=C)r(d),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(d)}}function x(C){if(j=!1,f(C),!S)if(n(u)!==null)S=!0,Je(E);else{var I=n(d);I!==null&&dt(x,I.startTime-C)}}function E(C,I){S=!1,j&&(j=!1,p(L),L=-1),k=!0;var _=m;try{for(f(I),h=n(u);h!==null&&(!(h.expirationTime>I)||C&&!ue());){var $=h.callback;if(typeof $=="function"){h.callback=null,m=h.priorityLevel;var W=$(h.expirationTime<=I);I=e.unstable_now(),typeof W=="function"?h.callback=W:h===n(u)&&r(u),f(I)}else r(u);h=n(u)}if(h!==null)var N=!0;else{var H=n(d);H!==null&&dt(x,H.startTime-I),N=!1}return N}finally{h=null,m=_,k=!1}}var b=!1,P=null,L=-1,T=5,R=-1;function ue(){return!(e.unstable_now()-R<T)}function Ve(){if(P!==null){var C=e.unstable_now();R=C;var I=!0;try{I=P(!0,C)}finally{I?be():(b=!1,P=null)}}else b=!1}var be;if(typeof c=="function")be=function(){c(Ve)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,ut=je.port2;je.port1.onmessage=Ve,be=function(){ut.postMessage(null)}}else be=function(){D(Ve,0)};function Je(C){P=C,b||(b=!0,be())}function dt(C,I){L=D(function(){C(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,Je(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var _=m;m=I;try{return C()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,I){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var _=m;m=C;try{return I()}finally{m=_}},e.unstable_scheduleCallback=function(C,I,_){var $=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?$+_:$):_=$,C){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=_+W,C={id:g++,callback:I,priorityLevel:C,startTime:_,expirationTime:W,sortIndex:-1},_>$?(C.sortIndex=_,t(d,C),n(u)===null&&C===n(d)&&(j?(p(L),L=-1):j=!0,dt(x,_-$))):(C.sortIndex=W,t(u,C),S||k||(S=!0,Je(E))),C},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(C){var I=m;return function(){var _=m;m=I;try{return C.apply(this,arguments)}finally{m=_}}}})(Ps);zs.exports=Ps;var ec=zs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc=w,ze=ec;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ls=new Set,Vn={};function Vt(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)Ls.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=Object.prototype.hasOwnProperty,nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ua={},da={};function rc(e){return oo.call(da,e)?!0:oo.call(ua,e)?!1:nc.test(e)?da[e]=!0:(ua[e]=!0,!1)}function lc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oc(e,t,n,r){if(t===null||typeof t>"u"||lc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ri=/[\-:]([a-z])/g;function li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ri,li);se[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ri,li);se[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ri,li);se[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function oi(e,t,n,r){var l=se.hasOwnProperty(t)?se[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(oc(t,n,l,r)&&(n=null),r||l===null?rc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),ii=Symbol.for("react.strict_mode"),io=Symbol.for("react.profiler"),_s=Symbol.for("react.provider"),Is=Symbol.for("react.context"),ai=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),so=Symbol.for("react.suspense_list"),si=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Ts=Symbol.for("react.offscreen"),ca=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=ca&&e[ca]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Tl;function In(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Rl=!1;function Ml(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,s=o.length-1;1<=a&&0<=s&&l[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==o[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function ic(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function uo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Kt:return"Portal";case io:return"Profiler";case ii:return"StrictMode";case ao:return"Suspense";case so:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Is:return(e.displayName||"Context")+".Consumer";case _s:return(e._context.displayName||"Context")+".Provider";case ai:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case si:return t=e.displayName||null,t!==null?t:uo(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return uo(e(t))}catch{}}return null}function ac(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(t);case 8:return t===ii?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sc(e){var t=Rs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=sc(e))}function Ms(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function co(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Os(e,t){t=t.checked,t!=null&&oi(e,"checked",t,!1)}function fo(e,t){Os(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?po(e,t.type,n):t.hasOwnProperty("defaultValue")&&po(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function po(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Tn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function Fs(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,$s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uc=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){uc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function As(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=As(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var dc=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(dc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function vo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yo=null,sn=null,un=null;function ha(e){if(e=cr(e)){if(typeof yo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=yl(t),yo(e.stateNode,e.type,t))}}function Us(e){sn?un?un.push(e):un=[e]:sn=e}function Ws(){if(sn){var e=sn,t=un;if(un=sn=null,ha(e),t)for(e=0;e<t.length;e++)ha(t[e])}}function Hs(e,t){return e(t)}function Vs(){}var Ol=!1;function Qs(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Hs(e,t,n)}finally{Ol=!1,(sn!==null||un!==null)&&(Vs(),Ws())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ko=!1;if(lt)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){ko=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{ko=!1}function cc(e,t,n,r,l,o,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Fn=!1,Vr=null,Qr=!1,wo=null,fc={onError:function(e){Fn=!0,Vr=e}};function pc(e,t,n,r,l,o,a,s,u){Fn=!1,Vr=null,cc.apply(fc,arguments)}function mc(e,t,n,r,l,o,a,s,u){if(pc.apply(this,arguments),Fn){if(Fn){var d=Vr;Fn=!1,Vr=null}else throw Error(y(198));Qr||(Qr=!0,wo=d)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ys(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function va(e){if(Qt(e)!==e)throw Error(y(188))}function gc(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return va(l),e;if(o===r)return va(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ks(e){return e=gc(e),e!==null?Gs(e):null}function Gs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gs(e);if(t!==null)return t;e=e.sibling}return null}var Xs=ze.unstable_scheduleCallback,xa=ze.unstable_cancelCallback,hc=ze.unstable_shouldYield,vc=ze.unstable_requestPaint,q=ze.unstable_now,xc=ze.unstable_getCurrentPriorityLevel,di=ze.unstable_ImmediatePriority,Zs=ze.unstable_UserBlockingPriority,Yr=ze.unstable_NormalPriority,yc=ze.unstable_LowPriority,Js=ze.unstable_IdlePriority,gl=null,Ge=null;function kc(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:bc,wc=Math.log,Sc=Math.LN2;function bc(e){return e>>>=0,e===0?32:31-(wc(e)/Sc|0)|0}var xr=64,yr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Rn(s):(o&=a,o!==0&&(r=Rn(o)))}else a=n&~l,a!==0?r=Rn(a):o!==0&&(r=Rn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function jc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ue(o),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=jc(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qs(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function Cc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ci(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var B=0;function eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tu,fi,nu,ru,lu,bo=!1,kr=[],xt=null,yt=null,kt=null,Kn=new Map,Gn=new Map,mt=[],Ec="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ya(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Nn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=cr(t),t!==null&&fi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function zc(e,t,n,r,l){switch(t){case"focusin":return xt=Nn(xt,e,t,n,r,l),!0;case"dragenter":return yt=Nn(yt,e,t,n,r,l),!0;case"mouseover":return kt=Nn(kt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Kn.set(o,Nn(Kn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Gn.set(o,Nn(Gn.get(o)||null,e,t,n,r,l)),!0}return!1}function ou(e){var t=Mt(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ys(n),t!==null){e.blockedOn=t,lu(e.priority,function(){nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xo=r,n.target.dispatchEvent(r),xo=null}else return t=cr(n),t!==null&&fi(t),e.blockedOn=n,!1;t.shift()}return!0}function ka(e,t,n){Rr(e)&&n.delete(t)}function Pc(){bo=!1,xt!==null&&Rr(xt)&&(xt=null),yt!==null&&Rr(yt)&&(yt=null),kt!==null&&Rr(kt)&&(kt=null),Kn.forEach(ka),Gn.forEach(ka)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Pc)))}function Xn(e){function t(l){return Cn(l,e)}if(0<kr.length){Cn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&Cn(xt,e),yt!==null&&Cn(yt,e),kt!==null&&Cn(kt,e),Kn.forEach(t),Gn.forEach(t),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)ou(n),n.blockedOn===null&&mt.shift()}var dn=st.ReactCurrentBatchConfig,Gr=!0;function Lc(e,t,n,r){var l=B,o=dn.transition;dn.transition=null;try{B=1,pi(e,t,n,r)}finally{B=l,dn.transition=o}}function _c(e,t,n,r){var l=B,o=dn.transition;dn.transition=null;try{B=4,pi(e,t,n,r)}finally{B=l,dn.transition=o}}function pi(e,t,n,r){if(Gr){var l=jo(e,t,n,r);if(l===null)Yl(e,t,r,Xr,n),ya(e,r);else if(zc(l,e,t,n,r))r.stopPropagation();else if(ya(e,r),t&4&&-1<Ec.indexOf(e)){for(;l!==null;){var o=cr(l);if(o!==null&&tu(o),o=jo(e,t,n,r),o===null&&Yl(e,t,r,Xr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var Xr=null;function jo(e,t,n,r){if(Xr=null,e=ui(r),e=Mt(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ys(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xc()){case di:return 1;case Zs:return 4;case Yr:case yc:return 16;case Js:return 536870912;default:return 16}default:return 16}}var ht=null,mi=null,Mr=null;function au(){if(Mr)return Mr;var e,t=mi,n=t.length,r,l="value"in ht?ht.value:ht.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Mr=l.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function wa(){return!1}function Le(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wr:wa,this.isPropagationStopped=wa,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=Le(wn),dr=Z({},wn,{view:0,detail:0}),Ic=Le(dr),Dl,$l,En,hl=Z({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Dl=e.screenX-En.screenX,$l=e.screenY-En.screenY):$l=Dl=0,En=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Sa=Le(hl),Tc=Z({},hl,{dataTransfer:0}),Rc=Le(Tc),Mc=Z({},dr,{relatedTarget:0}),Al=Le(Mc),Oc=Z({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fc=Le(Oc),Dc=Z({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$c=Le(Dc),Ac=Z({},wn,{data:0}),ba=Le(Ac),Bc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wc[e])?!!t[e]:!1}function hi(){return Hc}var Vc=Z({},dr,{key:function(e){if(e.key){var t=Bc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qc=Le(Vc),Yc=Z({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=Le(Yc),Kc=Z({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),Gc=Le(Kc),Xc=Z({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zc=Le(Xc),Jc=Z({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qc=Le(Jc),ef=[9,13,27,32],vi=lt&&"CompositionEvent"in window,Dn=null;lt&&"documentMode"in document&&(Dn=document.documentMode);var tf=lt&&"TextEvent"in window&&!Dn,su=lt&&(!vi||Dn&&8<Dn&&11>=Dn),Na=" ",Ca=!1;function uu(e,t){switch(e){case"keyup":return ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function nf(e,t){switch(e){case"compositionend":return du(t);case"keypress":return t.which!==32?null:(Ca=!0,Na);case"textInput":return e=t.data,e===Na&&Ca?null:e;default:return null}}function rf(e,t){if(Xt)return e==="compositionend"||!vi&&uu(e,t)?(e=au(),Mr=mi=ht=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return su&&t.locale!=="ko"?null:t.data;default:return null}}var lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lf[e.type]:t==="textarea"}function cu(e,t,n,r){Us(r),t=Zr(t,"onChange"),0<t.length&&(n=new gi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,Zn=null;function of(e){Su(e,0)}function vl(e){var t=qt(e);if(Ms(t))return e}function af(e,t){if(e==="change")return t}var fu=!1;if(lt){var Bl;if(lt){var Ul="oninput"in document;if(!Ul){var za=document.createElement("div");za.setAttribute("oninput","return;"),Ul=typeof za.oninput=="function"}Bl=Ul}else Bl=!1;fu=Bl&&(!document.documentMode||9<document.documentMode)}function Pa(){$n&&($n.detachEvent("onpropertychange",pu),Zn=$n=null)}function pu(e){if(e.propertyName==="value"&&vl(Zn)){var t=[];cu(t,Zn,e,ui(e)),Qs(of,t)}}function sf(e,t,n){e==="focusin"?(Pa(),$n=t,Zn=n,$n.attachEvent("onpropertychange",pu)):e==="focusout"&&Pa()}function uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Zn)}function df(e,t){if(e==="click")return vl(t)}function cf(e,t){if(e==="input"||e==="change")return vl(t)}function ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:ff;function Jn(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!oo.call(t,l)||!He(e[l],t[l]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _a(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gu(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pf(e){var t=gu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mu(n.ownerDocument.documentElement,n)){if(r!==null&&xi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=_a(n,o);var a=_a(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mf=lt&&"documentMode"in document&&11>=document.documentMode,Zt=null,No=null,An=null,Co=!1;function Ia(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Co||Zt==null||Zt!==Hr(r)||(r=Zt,"selectionStart"in r&&xi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Jn(An,r)||(An=r,r=Zr(No,"onSelect"),0<r.length&&(t=new gi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Wl={},hu={};lt&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function xl(e){if(Wl[e])return Wl[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hu)return Wl[e]=t[n];return e}var vu=xl("animationend"),xu=xl("animationiteration"),yu=xl("animationstart"),ku=xl("transitionend"),wu=new Map,Ta="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){wu.set(e,t),Vt(t,[e])}for(var Hl=0;Hl<Ta.length;Hl++){var Vl=Ta[Hl],gf=Vl.toLowerCase(),hf=Vl[0].toUpperCase()+Vl.slice(1);zt(gf,"on"+hf)}zt(vu,"onAnimationEnd");zt(xu,"onAnimationIteration");zt(yu,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(ku,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function Ra(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mc(r,t,void 0,e),e.currentTarget=null}function Su(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;Ra(l,s,d),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;Ra(l,s,d),o=u}}}if(Qr)throw e=wo,Qr=!1,wo=null,e}function Q(e,t){var n=t[_o];n===void 0&&(n=t[_o]=new Set);var r=e+"__bubble";n.has(r)||(bu(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),bu(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[br]){e[br]=!0,Ls.forEach(function(n){n!=="selectionchange"&&(vf.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,Ql("selectionchange",!1,t))}}function bu(e,t,n,r){switch(iu(t)){case 1:var l=Lc;break;case 4:l=_c;break;default:l=pi}n=l.bind(null,t,n,e),l=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Mt(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Qs(function(){var d=o,g=ui(n),h=[];e:{var m=wu.get(e);if(m!==void 0){var k=gi,S=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":k=Qc;break;case"focusin":S="focus",k=Al;break;case"focusout":S="blur",k=Al;break;case"beforeblur":case"afterblur":k=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Gc;break;case vu:case xu:case yu:k=Fc;break;case ku:k=Zc;break;case"scroll":k=Ic;break;case"wheel":k=qc;break;case"copy":case"cut":case"paste":k=$c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ja}var j=(t&4)!==0,D=!j&&e==="scroll",p=j?m!==null?m+"Capture":null:m;j=[];for(var c=d,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Yn(c,p),x!=null&&j.push(er(c,x,f)))),D)break;c=c.return}0<j.length&&(m=new k(m,S,null,n,g),h.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==xo&&(S=n.relatedTarget||n.fromElement)&&(Mt(S)||S[ot]))break e;if((k||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=d,S=S?Mt(S):null,S!==null&&(D=Qt(S),S!==D||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=d),k!==S)){if(j=Sa,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=ja,x="onPointerLeave",p="onPointerEnter",c="pointer"),D=k==null?m:qt(k),f=S==null?m:qt(S),m=new j(x,c+"leave",k,n,g),m.target=D,m.relatedTarget=f,x=null,Mt(g)===d&&(j=new j(p,c+"enter",S,n,g),j.target=f,j.relatedTarget=D,x=j),D=x,k&&S)t:{for(j=k,p=S,c=0,f=j;f;f=Yt(f))c++;for(f=0,x=p;x;x=Yt(x))f++;for(;0<c-f;)j=Yt(j),c--;for(;0<f-c;)p=Yt(p),f--;for(;c--;){if(j===p||p!==null&&j===p.alternate)break t;j=Yt(j),p=Yt(p)}j=null}else j=null;k!==null&&Ma(h,m,k,j,!1),S!==null&&D!==null&&Ma(h,D,S,j,!0)}}e:{if(m=d?qt(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var E=af;else if(Ea(m))if(fu)E=cf;else{E=uf;var b=sf}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=df);if(E&&(E=E(e,d))){cu(h,E,n,g);break e}b&&b(e,m,d),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&po(m,"number",m.value)}switch(b=d?qt(d):window,e){case"focusin":(Ea(b)||b.contentEditable==="true")&&(Zt=b,No=d,An=null);break;case"focusout":An=No=Zt=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,Ia(h,n,g);break;case"selectionchange":if(mf)break;case"keydown":case"keyup":Ia(h,n,g)}var P;if(vi)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Xt?uu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(su&&n.locale!=="ko"&&(Xt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Xt&&(P=au()):(ht=g,mi="value"in ht?ht.value:ht.textContent,Xt=!0)),b=Zr(d,L),0<b.length&&(L=new ba(L,e,null,n,g),h.push({event:L,listeners:b}),P?L.data=P:(P=du(n),P!==null&&(L.data=P)))),(P=tf?nf(e,n):rf(e,n))&&(d=Zr(d,"onBeforeInput"),0<d.length&&(g=new ba("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=P))}Su(h,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Yn(e,n),o!=null&&r.unshift(er(e,o,l)),o=Yn(e,t),o!=null&&r.push(er(e,o,l))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ma(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Yn(n,o),u!=null&&a.unshift(er(n,u,s))):l||(u=Yn(n,o),u!=null&&a.push(er(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function Oa(e){return(typeof e=="string"?e:""+e).replace(xf,`
`).replace(yf,"")}function jr(e,t,n){if(t=Oa(t),Oa(e)!==t&&n)throw Error(y(425))}function Jr(){}var Eo=null,zo=null;function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,kf=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,wf=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(Sf)}:Lo;function Sf(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Sn,tr="__reactProps$"+Sn,ot="__reactContainer$"+Sn,_o="__reactEvents$"+Sn,bf="__reactListeners$"+Sn,jf="__reactHandles$"+Sn;function Mt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Da(e);e!==null;){if(n=e[Ke])return n;e=Da(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[Ke]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function yl(e){return e[tr]||null}var Io=[],en=-1;function Pt(e){return{current:e}}function Y(e){0>en||(e.current=Io[en],Io[en]=null,en--)}function U(e,t){en++,Io[en]=e.current,e.current=t}var Et={},pe=Pt(Et),ke=Pt(!1),At=Et;function mn(e,t){var n=e.type.contextTypes;if(!n)return Et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function qr(){Y(ke),Y(pe)}function $a(e,t,n){if(pe.current!==Et)throw Error(y(168));U(pe,t),U(ke,n)}function ju(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,ac(e)||"Unknown",l));return Z({},n,r)}function el(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,At=pe.current,U(pe,e),U(ke,ke.current),!0}function Aa(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ju(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,Y(ke),Y(pe),U(pe,e)):Y(ke),U(ke,n)}var et=null,kl=!1,Gl=!1;function Nu(e){et===null?et=[e]:et.push(e)}function Nf(e){kl=!0,Nu(e)}function Lt(){if(!Gl&&et!==null){Gl=!0;var e=0,t=B;try{var n=et;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,kl=!1}catch(l){throw et!==null&&(et=et.slice(e+1)),Xs(di,Lt),l}finally{B=t,Gl=!1}}return null}var tn=[],nn=0,tl=null,nl=0,_e=[],Ie=0,Bt=null,tt=1,nt="";function Tt(e,t){tn[nn++]=nl,tn[nn++]=tl,tl=e,nl=t}function Cu(e,t,n){_e[Ie++]=tt,_e[Ie++]=nt,_e[Ie++]=Bt,Bt=e;var r=tt;e=nt;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var o=32-Ue(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,tt=1<<32-Ue(t)+l|n<<l|r,nt=o+e}else tt=1<<o|n<<l|r,nt=e}function yi(e){e.return!==null&&(Tt(e,1),Cu(e,1,0))}function ki(e){for(;e===tl;)tl=tn[--nn],tn[nn]=null,nl=tn[--nn],tn[nn]=null;for(;e===Bt;)Bt=_e[--Ie],_e[Ie]=null,nt=_e[--Ie],_e[Ie]=null,tt=_e[--Ie],_e[Ie]=null}var Ee=null,Ce=null,K=!1,Be=null;function Eu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Ce=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Ce=null,!0):!1;default:return!1}}function To(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ro(e){if(K){var t=Ce;if(t){var n=t;if(!Ba(e,t)){if(To(e))throw Error(y(418));t=wt(n.nextSibling);var r=Ee;t&&Ba(e,t)?Eu(r,n):(e.flags=e.flags&-4097|2,K=!1,Ee=e)}}else{if(To(e))throw Error(y(418));e.flags=e.flags&-4097|2,K=!1,Ee=e}}}function Ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Nr(e){if(e!==Ee)return!1;if(!K)return Ua(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Po(e.type,e.memoizedProps)),t&&(t=Ce)){if(To(e))throw zu(),Error(y(418));for(;t;)Eu(e,t),t=wt(t.nextSibling)}if(Ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ee?wt(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=Ce;e;)e=wt(e.nextSibling)}function gn(){Ce=Ee=null,K=!1}function wi(e){Be===null?Be=[e]:Be.push(e)}var Cf=st.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=l.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wa(e){var t=e._init;return t(e._payload)}function Pu(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Nt(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,x){return c===null||c.tag!==6?(c=no(f,p.mode,x),c.return=p,c):(c=l(c,f),c.return=p,c)}function u(p,c,f,x){var E=f.type;return E===Gt?g(p,c,f.props.children,x,f.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ft&&Wa(E)===c.type)?(x=l(c,f.props),x.ref=zn(p,c,f),x.return=p,x):(x=Wr(f.type,f.key,f.props,null,p.mode,x),x.ref=zn(p,c,f),x.return=p,x)}function d(p,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ro(f,p.mode,x),c.return=p,c):(c=l(c,f.children||[]),c.return=p,c)}function g(p,c,f,x,E){return c===null||c.tag!==7?(c=$t(f,p.mode,x,E),c.return=p,c):(c=l(c,f),c.return=p,c)}function h(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=no(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return f=Wr(c.type,c.key,c.props,null,p.mode,f),f.ref=zn(p,null,c),f.return=p,f;case Kt:return c=ro(c,p.mode,f),c.return=p,c;case ft:var x=c._init;return h(p,x(c._payload),f)}if(Tn(c)||bn(c))return c=$t(c,p.mode,f,null),c.return=p,c;Cr(p,c)}return null}function m(p,c,f,x){var E=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(p,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:return f.key===E?u(p,c,f,x):null;case Kt:return f.key===E?d(p,c,f,x):null;case ft:return E=f._init,m(p,c,E(f._payload),x)}if(Tn(f)||bn(f))return E!==null?null:g(p,c,f,x,null);Cr(p,f)}return null}function k(p,c,f,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,s(c,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gr:return p=p.get(x.key===null?f:x.key)||null,u(c,p,x,E);case Kt:return p=p.get(x.key===null?f:x.key)||null,d(c,p,x,E);case ft:var b=x._init;return k(p,c,f,b(x._payload),E)}if(Tn(x)||bn(x))return p=p.get(f)||null,g(c,p,x,E,null);Cr(c,x)}return null}function S(p,c,f,x){for(var E=null,b=null,P=c,L=c=0,T=null;P!==null&&L<f.length;L++){P.index>L?(T=P,P=null):T=P.sibling;var R=m(p,P,f[L],x);if(R===null){P===null&&(P=T);break}e&&P&&R.alternate===null&&t(p,P),c=o(R,c,L),b===null?E=R:b.sibling=R,b=R,P=T}if(L===f.length)return n(p,P),K&&Tt(p,L),E;if(P===null){for(;L<f.length;L++)P=h(p,f[L],x),P!==null&&(c=o(P,c,L),b===null?E=P:b.sibling=P,b=P);return K&&Tt(p,L),E}for(P=r(p,P);L<f.length;L++)T=k(P,p,L,f[L],x),T!==null&&(e&&T.alternate!==null&&P.delete(T.key===null?L:T.key),c=o(T,c,L),b===null?E=T:b.sibling=T,b=T);return e&&P.forEach(function(ue){return t(p,ue)}),K&&Tt(p,L),E}function j(p,c,f,x){var E=bn(f);if(typeof E!="function")throw Error(y(150));if(f=E.call(f),f==null)throw Error(y(151));for(var b=E=null,P=c,L=c=0,T=null,R=f.next();P!==null&&!R.done;L++,R=f.next()){P.index>L?(T=P,P=null):T=P.sibling;var ue=m(p,P,R.value,x);if(ue===null){P===null&&(P=T);break}e&&P&&ue.alternate===null&&t(p,P),c=o(ue,c,L),b===null?E=ue:b.sibling=ue,b=ue,P=T}if(R.done)return n(p,P),K&&Tt(p,L),E;if(P===null){for(;!R.done;L++,R=f.next())R=h(p,R.value,x),R!==null&&(c=o(R,c,L),b===null?E=R:b.sibling=R,b=R);return K&&Tt(p,L),E}for(P=r(p,P);!R.done;L++,R=f.next())R=k(P,p,L,R.value,x),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?L:R.key),c=o(R,c,L),b===null?E=R:b.sibling=R,b=R);return e&&P.forEach(function(Ve){return t(p,Ve)}),K&&Tt(p,L),E}function D(p,c,f,x){if(typeof f=="object"&&f!==null&&f.type===Gt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:e:{for(var E=f.key,b=c;b!==null;){if(b.key===E){if(E=f.type,E===Gt){if(b.tag===7){n(p,b.sibling),c=l(b,f.props.children),c.return=p,p=c;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ft&&Wa(E)===b.type){n(p,b.sibling),c=l(b,f.props),c.ref=zn(p,b,f),c.return=p,p=c;break e}n(p,b);break}else t(p,b);b=b.sibling}f.type===Gt?(c=$t(f.props.children,p.mode,x,f.key),c.return=p,p=c):(x=Wr(f.type,f.key,f.props,null,p.mode,x),x.ref=zn(p,c,f),x.return=p,p=x)}return a(p);case Kt:e:{for(b=f.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=l(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ro(f,p.mode,x),c.return=p,p=c}return a(p);case ft:return b=f._init,D(p,c,b(f._payload),x)}if(Tn(f))return S(p,c,f,x);if(bn(f))return j(p,c,f,x);Cr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,f),c.return=p,p=c):(n(p,c),c=no(f,p.mode,x),c.return=p,p=c),a(p)):n(p,c)}return D}var hn=Pu(!0),Lu=Pu(!1),rl=Pt(null),ll=null,rn=null,Si=null;function bi(){Si=rn=ll=null}function ji(e){var t=rl.current;Y(rl),e._currentValue=t}function Mo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){ll=e,Si=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Si!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(ll===null)throw Error(y(308));rn=e,ll.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Ot=null;function Ni(e){Ot===null?Ot=[e]:Ot.push(e)}function _u(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ni(t)):(n.next=l.next,l.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pt=!1;function Ci(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,it(e,n)}return l=r.interleaved,l===null?(t.next=t,Ni(r)):(t.next=l.next,l.next=t),r.interleaved=t,it(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ci(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,r){var l=e.updateQueue;pt=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;a=0,g=d=u=null,s=o;do{var m=s.lane,k=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,j=s;switch(m=t,k=n,j.tag){case 1:if(S=j.payload,typeof S=="function"){h=S.call(k,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=j.payload,m=typeof S=="function"?S.call(k,h,m):S,m==null)break e;h=Z({},h,m);break e;case 2:pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else k={eventTime:k,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=k,u=h):g=g.next=k,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=h}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var fr={},Xe=Pt(fr),nr=Pt(fr),rr=Pt(fr);function Ft(e){if(e===fr)throw Error(y(174));return e}function Ei(e,t){switch(U(rr,t),U(nr,e),U(Xe,fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}Y(Xe),U(Xe,t)}function vn(){Y(Xe),Y(nr),Y(rr)}function Tu(e){Ft(rr.current);var t=Ft(Xe.current),n=go(t,e.type);t!==n&&(U(nr,e),U(Xe,n))}function zi(e){nr.current===e&&(Y(Xe),Y(nr))}var G=Pt(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Pi(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var Dr=st.ReactCurrentDispatcher,Zl=st.ReactCurrentBatchConfig,Ut=0,X=null,ne=null,le=null,al=!1,Bn=!1,lr=0,Ef=0;function de(){throw Error(y(321))}function Li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function _i(e,t,n,r,l,o){if(Ut=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dr.current=e===null||e.memoizedState===null?_f:If,e=n(r,l),Bn){o=0;do{if(Bn=!1,lr=0,25<=o)throw Error(y(301));o+=1,le=ne=null,t.updateQueue=null,Dr.current=Tf,e=n(r,l)}while(Bn)}if(Dr.current=sl,t=ne!==null&&ne.next!==null,Ut=0,le=ne=X=null,al=!1,t)throw Error(y(300));return e}function Ii(){var e=lr!==0;return lr=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Oe(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(y(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function or(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=a=null,u=null,d=o;do{var g=d.lane;if((Ut&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,a=r):u=u.next=h,X.lanes|=g,Wt|=g}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=s,He(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,X.lanes|=o,Wt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=Oe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);He(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ru(){}function Mu(e,t){var n=X,r=Oe(),l=t(),o=!He(r.memoizedState,l);if(o&&(r.memoizedState=l,ye=!0),r=r.queue,Ti(Du.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ir(9,Fu.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(y(349));Ut&30||Ou(n,t,l)}return l}function Ou(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fu(e,t,n,r){t.value=n,t.getSnapshot=r,$u(t)&&Au(e)}function Du(e,t,n){return n(function(){$u(t)&&Au(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Au(e){var t=it(e,1);t!==null&&We(t,e,1,-1)}function Qa(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=Lf.bind(null,X,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bu(){return Oe().memoizedState}function $r(e,t,n,r){var l=Ye();X.flags|=e,l.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var l=Oe();r=r===void 0?null:r;var o=void 0;if(ne!==null){var a=ne.memoizedState;if(o=a.destroy,r!==null&&Li(r,a.deps)){l.memoizedState=ir(t,n,o,r);return}}X.flags|=e,l.memoizedState=ir(1|t,n,o,r)}function Ya(e,t){return $r(8390656,8,e,t)}function Ti(e,t){return wl(2048,8,e,t)}function Uu(e,t){return wl(4,2,e,t)}function Wu(e,t){return wl(4,4,e,t)}function Hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vu(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,Hu.bind(null,t,e),n)}function Ri(){}function Qu(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yu(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Li(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ku(e,t,n){return Ut&21?(He(n,t)||(n=qs(),X.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function zf(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Zl.transition;Zl.transition={};try{e(!1),t()}finally{B=n,Zl.transition=r}}function Gu(){return Oe().memoizedState}function Pf(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xu(e))Zu(t,n);else if(n=_u(e,t,n,r),n!==null){var l=ge();We(n,e,r,l),Ju(n,t,r)}}function Lf(e,t,n){var r=jt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xu(e))Zu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(l.hasEagerState=!0,l.eagerState=s,He(s,a)){var u=t.interleaved;u===null?(l.next=l,Ni(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=_u(e,t,l,r),n!==null&&(l=ge(),We(n,e,r,l),Ju(n,t,r))}}function Xu(e){var t=e.alternate;return e===X||t!==null&&t===X}function Zu(e,t){Bn=al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ju(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ci(e,n)}}var sl={readContext:Me,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},_f={readContext:Me,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Ya,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pf.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:Qa,useDebugValue:Ri,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=Qa(!1),t=e[0];return e=zf.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=Ye();if(K){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),oe===null)throw Error(y(349));Ut&30||Ou(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ya(Du.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,Fu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ye(),t=oe.identifierPrefix;if(K){var n=nt,r=tt;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ef++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},If={readContext:Me,useCallback:Qu,useContext:Me,useEffect:Ti,useImperativeHandle:Vu,useInsertionEffect:Uu,useLayoutEffect:Wu,useMemo:Yu,useReducer:Jl,useRef:Bu,useState:function(){return Jl(or)},useDebugValue:Ri,useDeferredValue:function(e){var t=Oe();return Ku(t,ne.memoizedState,e)},useTransition:function(){var e=Jl(or)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Ru,useSyncExternalStore:Mu,useId:Gu,unstable_isNewReconciler:!1},Tf={readContext:Me,useCallback:Qu,useContext:Me,useEffect:Ti,useImperativeHandle:Vu,useInsertionEffect:Uu,useLayoutEffect:Wu,useMemo:Yu,useReducer:ql,useRef:Bu,useState:function(){return ql(or)},useDebugValue:Ri,useDeferredValue:function(e){var t=Oe();return ne===null?t.memoizedState=e:Ku(t,ne.memoizedState,e)},useTransition:function(){var e=ql(or)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Ru,useSyncExternalStore:Mu,useId:Gu,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=jt(e),o=rt(r,l);o.payload=t,n!=null&&(o.callback=n),t=St(e,o,l),t!==null&&(We(t,e,l,r),Fr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=jt(e),o=rt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=St(e,o,l),t!==null&&(We(t,e,l,r),Fr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=jt(e),l=rt(n,r);l.tag=2,t!=null&&(l.callback=t),t=St(e,l,r),t!==null&&(We(t,e,r,n),Fr(t,e,r))}};function Ka(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(l,o):!0}function qu(e,t,n){var r=!1,l=Et,o=t.contextType;return typeof o=="object"&&o!==null?o=Me(o):(l=we(t)?At:pe.current,r=t.contextTypes,o=(r=r!=null)?mn(e,l):Et),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Fo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ci(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Me(o):(o=we(t)?At:pe.current,l.context=mn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Oo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Sl.enqueueReplaceState(l,l.state,null),ol(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=ic(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Do(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function ed(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){dl||(dl=!0,Ko=r),Do(e,t)},n}function td(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Do(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Do(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Xa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Kf.bind(null,e,t,n),t.then(e,e))}function Za(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ja(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rt(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var Mf=st.ReactCurrentOwner,ye=!1;function me(e,t,n,r){t.child=e===null?Lu(t,null,n,r):hn(t,e.child,n,r)}function qa(e,t,n,r,l){n=n.render;var o=t.ref;return cn(t,l),r=_i(e,t,n,r,o,l),n=Ii(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,at(e,t,l)):(K&&n&&yi(t),t.flags|=1,me(e,t,r,l),t.child)}function es(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ui(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,nd(e,t,o,r,l)):(e=Wr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(a,r)&&e.ref===t.ref)return at(e,t,l)}return t.flags|=1,e=Nt(o,r),e.ref=t.ref,e.return=t,t.child=e}function nd(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Jn(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,at(e,t,l)}return $o(e,t,n,r,l)}function rd(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(on,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(on,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(on,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(on,Ne),Ne|=r;return me(e,t,l,n),t.child}function ld(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $o(e,t,n,r,l){var o=we(n)?At:pe.current;return o=mn(t,o),cn(t,l),n=_i(e,t,n,r,o,l),r=Ii(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,at(e,t,l)):(K&&r&&yi(t),t.flags|=1,me(e,t,n,l),t.child)}function ts(e,t,n,r,l){if(we(n)){var o=!0;el(t)}else o=!1;if(cn(t,l),t.stateNode===null)Ar(e,t),qu(t,n,r),Fo(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=we(n)?At:pe.current,d=mn(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ga(t,a,r,d),pt=!1;var m=t.memoizedState;a.state=m,ol(t,r,a,l),u=t.memoizedState,s!==r||m!==u||ke.current||pt?(typeof g=="function"&&(Oo(t,n,g,r),u=t.memoizedState),(s=pt||Ka(t,n,s,r,m,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Iu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:$e(t.type,s),a.props=d,h=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=we(n)?At:pe.current,u=mn(t,u));var k=n.getDerivedStateFromProps;(g=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Ga(t,a,r,u),pt=!1,m=t.memoizedState,a.state=m,ol(t,r,a,l);var S=t.memoizedState;s!==h||m!==S||ke.current||pt?(typeof k=="function"&&(Oo(t,n,k,r),S=t.memoizedState),(d=pt||Ka(t,n,d,r,m,S,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ao(e,t,n,r,o,l)}function Ao(e,t,n,r,l,o){ld(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Aa(t,n,!1),at(e,t,o);r=t.stateNode,Mf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=hn(t,e.child,null,o),t.child=hn(t,null,s,o)):me(e,t,s,o),t.memoizedState=r.state,l&&Aa(t,n,!0),t.child}function od(e){var t=e.stateNode;t.pendingContext?$a(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$a(e,t.context,!1),Ei(e,t.containerInfo)}function ns(e,t,n,r,l){return gn(),wi(l),t.flags|=256,me(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,t,n){var r=t.pendingProps,l=G.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(G,l&1),e===null)return Ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Nl(a,r,0,null),e=$t(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Uo(n),t.memoizedState=Bo,e):Mi(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Of(e,t,a,r,s,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Nt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Nt(s,o):(o=$t(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Uo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=Nt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mi(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&wi(r),hn(t,e.child,null,n),e=Mi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Of(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(y(422))),Er(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),o=$t(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hn(t,e.child,null,a),t.child.memoizedState=Uo(a),t.memoizedState=Bo,o);if(!(t.mode&1))return Er(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(y(419)),r=eo(o,r,void 0),Er(e,t,a,r)}if(s=(a&e.childLanes)!==0,ye||s){if(r=oe,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,it(e,l),We(r,e,l,-1))}return Bi(),r=eo(Error(y(421))),Er(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Gf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ce=wt(l.nextSibling),Ee=t,K=!0,Be=null,e!==null&&(_e[Ie++]=tt,_e[Ie++]=nt,_e[Ie++]=Bt,tt=e.id,nt=e.overflow,Bt=t),t=Mi(t,r.children),t.flags|=4096,t)}function rs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mo(e.return,t,n)}function to(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function ad(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rs(e,n,t);else if(e.tag===19)rs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),to(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}to(t,!0,n,null,o);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Nt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ff(e,t,n){switch(t.tag){case 3:od(t),gn();break;case 5:Tu(t);break;case 1:we(t.type)&&el(t);break;case 4:Ei(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(rl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?id(e,t,n):(U(G,G.current&1),e=at(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ad(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,rd(e,t,n)}return at(e,t,n)}var sd,Wo,ud,dd;sd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};ud=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ft(Xe.current);var o=null;switch(n){case"input":l=co(e,l),r=co(e,r),o=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":l=mo(e,l),r=mo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}ho(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Q("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Df(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return we(t.type)&&qr(),ce(t),null;case 3:return r=t.stateNode,vn(),Y(ke),Y(pe),Pi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(Zo(Be),Be=null))),Wo(e,t),ce(t),null;case 5:zi(t);var l=Ft(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)ud(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ce(t),null}if(e=Ft(Xe.current),Nr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ke]=t,r[tr]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(l=0;l<Mn.length;l++)Q(Mn[l],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":fa(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":ma(r,o),Q("invalid",r)}ho(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",""+s]):Vn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Q("scroll",r)}switch(n){case"input":hr(r),pa(r,o,!0);break;case"textarea":hr(r),ga(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ds(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ke]=t,e[tr]=r,sd(e,t,!1,!1),t.stateNode=e;e:{switch(a=vo(n,r),n){case"dialog":Q("cancel",e),Q("close",e),l=r;break;case"iframe":case"object":case"embed":Q("load",e),l=r;break;case"video":case"audio":for(l=0;l<Mn.length;l++)Q(Mn[l],e);l=r;break;case"source":Q("error",e),l=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),l=r;break;case"details":Q("toggle",e),l=r;break;case"input":fa(e,r),l=co(e,r),Q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),Q("invalid",e);break;case"textarea":ma(e,r),l=mo(e,r),Q("invalid",e);break;default:l=r}ho(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Bs(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$s(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qn(e,u):typeof u=="number"&&Qn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Q("scroll",e):u!=null&&oi(e,o,u,a))}switch(n){case"input":hr(e),pa(e,r,!1);break;case"textarea":hr(e),ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?an(e,!!r.multiple,o,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ft(rr.current),Ft(Xe.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return ce(t),null;case 13:if(Y(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ce!==null&&t.mode&1&&!(t.flags&128))zu(),gn(),t.flags|=98560,o=!1;else if(o=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Ke]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Be!==null&&(Zo(Be),Be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?re===0&&(re=3):Bi())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return vn(),Wo(e,t),e===null&&qn(t.stateNode.containerInfo),ce(t),null;case 10:return ji(t.type._context),ce(t),null;case 17:return we(t.type)&&qr(),ce(t),null;case 19:if(Y(G),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Pn(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=il(e),a!==null){for(t.flags|=128,Pn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>yn&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304)}else{if(!r)if(e=il(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!K)return ce(t),null}else 2*q()-o.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Ai(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function $f(e,t){switch(ki(t),t.tag){case 1:return we(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),Y(ke),Y(pe),Pi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zi(t),null;case 13:if(Y(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(G),null;case 4:return vn(),null;case 10:return ji(t.type._context),null;case 22:case 23:return Ai(),null;case 24:return null;default:return null}}var zr=!1,fe=!1,Af=typeof WeakSet=="function"?WeakSet:Set,z=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){J(e,t,r)}}var ls=!1;function Bf(e,t){if(Eo=Gr,e=gu(),xi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var k;h!==n||l!==0&&h.nodeType!==3||(s=a+l),h!==o||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=a),m===o&&++g===r&&(u=a),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:e,selectionRange:n},Gr=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var j=S.memoizedProps,D=S.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?j:$e(t.type,j),D);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(x){J(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return S=ls,ls=!1,S}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ho(t,n,o)}l=l.next}while(l!==r)}}function bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cd(e){var t=e.alternate;t!==null&&(e.alternate=null,cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[tr],delete t[_o],delete t[bf],delete t[jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fd(e){return e.tag===5||e.tag===3||e.tag===4}function os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}var ie=null,Ae=!1;function ct(e,t,n){for(n=n.child;n!==null;)pd(e,t,n),n=n.sibling}function pd(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:fe||ln(n,t);case 6:var r=ie,l=Ae;ie=null,ct(e,t,n),ie=r,Ae=l,ie!==null&&(Ae?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Ae?(e=ie,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),Xn(e)):Kl(ie,n.stateNode));break;case 4:r=ie,l=Ae,ie=n.stateNode.containerInfo,Ae=!0,ct(e,t,n),ie=r,Ae=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ho(n,t,a),l=l.next}while(l!==r)}ct(e,t,n);break;case 1:if(!fe&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ct(e,t,n),fe=r):ct(e,t,n);break;default:ct(e,t,n)}}function is(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Af),t.forEach(function(r){var l=Xf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Ae=!1;break e;case 3:ie=s.stateNode.containerInfo,Ae=!0;break e;case 4:ie=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(ie===null)throw Error(y(160));pd(o,a,l),ie=null,Ae=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){J(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)md(t,e),t=t.sibling}function md(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Qe(e),r&4){try{Un(3,e,e.return),bl(3,e)}catch(j){J(e,e.return,j)}try{Un(5,e,e.return)}catch(j){J(e,e.return,j)}}break;case 1:De(t,e),Qe(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(De(t,e),Qe(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var l=e.stateNode;try{Qn(l,"")}catch(j){J(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Os(l,o),vo(s,a);var d=vo(s,o);for(a=0;a<u.length;a+=2){var g=u[a],h=u[a+1];g==="style"?Bs(l,h):g==="dangerouslySetInnerHTML"?$s(l,h):g==="children"?Qn(l,h):oi(l,g,h,d)}switch(s){case"input":fo(l,o);break;case"textarea":Fs(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?an(l,!!o.multiple,k,!1):m!==!!o.multiple&&(o.defaultValue!=null?an(l,!!o.multiple,o.defaultValue,!0):an(l,!!o.multiple,o.multiple?[]:"",!1))}l[tr]=o}catch(j){J(e,e.return,j)}}break;case 6:if(De(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(j){J(e,e.return,j)}}break;case 3:if(De(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(j){J(e,e.return,j)}break;case 4:De(t,e),Qe(e);break;case 13:De(t,e),Qe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Di=q())),r&4&&is(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(d=fe)||g,De(t,e),fe=d):De(t,e),Qe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(h=z=g;z!==null;){switch(m=z,k=m.child,m.tag){case 0:case 11:case 14:case 15:Un(4,m,m.return);break;case 1:ln(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(j){J(r,n,j)}}break;case 5:ln(m,m.return);break;case 22:if(m.memoizedState!==null){ss(h);continue}}k!==null?(k.return=m,z=k):ss(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=As("display",a))}catch(j){J(e,e.return,j)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(j){J(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:De(t,e),Qe(e),r&4&&is(e);break;case 21:break;default:De(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fd(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Qn(l,""),r.flags&=-33);var o=os(e);Yo(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=os(e);Qo(e,s,a);break;default:throw Error(y(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uf(e,t,n){z=e,gd(e)}function gd(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var l=z,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||zr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||fe;s=zr;var d=fe;if(zr=a,(fe=u)&&!d)for(z=l;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?us(l):u!==null?(u.return=a,z=u):us(l);for(;o!==null;)z=o,gd(o),o=o.sibling;z=l,zr=s,fe=d}as(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,z=o):as(e)}}function as(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Va(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Xn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}fe||t.flags&512&&Vo(t)}catch(m){J(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function ss(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function us(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bl(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){J(t,l,u)}}var o=t.return;try{Vo(t)}catch(u){J(t,o,u)}break;case 5:var a=t.return;try{Vo(t)}catch(u){J(t,a,u)}}}catch(u){J(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Wf=Math.ceil,ul=st.ReactCurrentDispatcher,Oi=st.ReactCurrentOwner,Re=st.ReactCurrentBatchConfig,F=0,oe=null,te=null,ae=0,Ne=0,on=Pt(0),re=0,ar=null,Wt=0,jl=0,Fi=0,Wn=null,xe=null,Di=0,yn=1/0,qe=null,dl=!1,Ko=null,bt=null,Pr=!1,vt=null,cl=0,Hn=0,Go=null,Br=-1,Ur=0;function ge(){return F&6?q():Br!==-1?Br:Br=q()}function jt(e){return e.mode&1?F&2&&ae!==0?ae&-ae:Cf.transition!==null?(Ur===0&&(Ur=qs()),Ur):(e=B,e!==0||(e=window.event,e=e===void 0?16:iu(e.type)),e):1}function We(e,t,n,r){if(50<Hn)throw Hn=0,Go=null,Error(y(185));ur(e,n,r),(!(F&2)||e!==oe)&&(e===oe&&(!(F&2)&&(jl|=n),re===4&&gt(e,ae)),Se(e,r),n===1&&F===0&&!(t.mode&1)&&(yn=q()+500,kl&&Lt()))}function Se(e,t){var n=e.callbackNode;Nc(e,t);var r=Kr(e,e===oe?ae:0);if(r===0)n!==null&&xa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xa(n),t===1)e.tag===0?Nf(ds.bind(null,e)):Nu(ds.bind(null,e)),wf(function(){!(F&6)&&Lt()}),n=null;else{switch(eu(r)){case 1:n=di;break;case 4:n=Zs;break;case 16:n=Yr;break;case 536870912:n=Js;break;default:n=Yr}n=bd(n,hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hd(e,t){if(Br=-1,Ur=0,F&6)throw Error(y(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=Kr(e,e===oe?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fl(e,r);else{t=r;var l=F;F|=2;var o=xd();(oe!==e||ae!==t)&&(qe=null,yn=q()+500,Dt(e,t));do try{Qf();break}catch(s){vd(e,s)}while(!0);bi(),ul.current=o,F=l,te!==null?t=0:(oe=null,ae=0,t=re)}if(t!==0){if(t===2&&(l=So(e),l!==0&&(r=l,t=Xo(e,l))),t===1)throw n=ar,Dt(e,0),gt(e,r),Se(e,q()),n;if(t===6)gt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Hf(l)&&(t=fl(e,r),t===2&&(o=So(e),o!==0&&(r=o,t=Xo(e,o))),t===1))throw n=ar,Dt(e,0),gt(e,r),Se(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Rt(e,xe,qe);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=Di+500-q(),10<t)){if(Kr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Lo(Rt.bind(null,e,xe,qe),t);break}Rt(e,xe,qe);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ue(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wf(r/1960))-r,10<r){e.timeoutHandle=Lo(Rt.bind(null,e,xe,qe),r);break}Rt(e,xe,qe);break;case 5:Rt(e,xe,qe);break;default:throw Error(y(329))}}}return Se(e,q()),e.callbackNode===n?hd.bind(null,e):null}function Xo(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=fl(e,t),e!==2&&(t=xe,xe=n,t!==null&&Zo(t)),e}function Zo(e){xe===null?xe=e:xe.push.apply(xe,e)}function Hf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!He(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~Fi,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function ds(e){if(F&6)throw Error(y(327));fn();var t=Kr(e,0);if(!(t&1))return Se(e,q()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=So(e);r!==0&&(t=r,n=Xo(e,r))}if(n===1)throw n=ar,Dt(e,0),gt(e,t),Se(e,q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,xe,qe),Se(e,q()),null}function $i(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(yn=q()+500,kl&&Lt())}}function Ht(e){vt!==null&&vt.tag===0&&!(F&6)&&fn();var t=F;F|=1;var n=Re.transition,r=B;try{if(Re.transition=null,B=1,e)return e()}finally{B=r,Re.transition=n,F=t,!(F&6)&&Lt()}}function Ai(){Ne=on.current,Y(on)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kf(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ki(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:vn(),Y(ke),Y(pe),Pi();break;case 5:zi(r);break;case 4:vn();break;case 13:Y(G);break;case 19:Y(G);break;case 10:ji(r.type._context);break;case 22:case 23:Ai()}n=n.return}if(oe=e,te=e=Nt(e.current,null),ae=Ne=t,re=0,ar=null,Fi=jl=Wt=0,xe=Wn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}Ot=null}return e}function vd(e,t){do{var n=te;try{if(bi(),Dr.current=sl,al){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}al=!1}if(Ut=0,le=ne=X=null,Bn=!1,lr=0,Oi.current=null,n===null||n.return===null){re=1,ar=t,te=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=Za(a);if(k!==null){k.flags&=-257,Ja(k,a,s,o,t),k.mode&1&&Xa(o,d,t),t=k,u=d;var S=t.updateQueue;if(S===null){var j=new Set;j.add(u),t.updateQueue=j}else S.add(u);break e}else{if(!(t&1)){Xa(o,d,t),Bi();break e}u=Error(y(426))}}else if(K&&s.mode&1){var D=Za(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ja(D,a,s,o,t),wi(xn(u,s));break e}}o=u=xn(u,s),re!==4&&(re=2),Wn===null?Wn=[o]:Wn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ed(o,u,t);Ha(o,p);break e;case 1:s=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(bt===null||!bt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=td(o,s,t);Ha(o,x);break e}}o=o.return}while(o!==null)}kd(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function xd(){var e=ul.current;return ul.current=sl,e===null?sl:e}function Bi(){(re===0||re===3||re===2)&&(re=4),oe===null||!(Wt&268435455)&&!(jl&268435455)||gt(oe,ae)}function fl(e,t){var n=F;F|=2;var r=xd();(oe!==e||ae!==t)&&(qe=null,Dt(e,t));do try{Vf();break}catch(l){vd(e,l)}while(!0);if(bi(),F=n,ul.current=r,te!==null)throw Error(y(261));return oe=null,ae=0,re}function Vf(){for(;te!==null;)yd(te)}function Qf(){for(;te!==null&&!hc();)yd(te)}function yd(e){var t=Sd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?kd(e):te=t,Oi.current=null}function kd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$f(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Df(n,t,Ne),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Rt(e,t,n){var r=B,l=Re.transition;try{Re.transition=null,B=1,Yf(e,t,n,r)}finally{Re.transition=l,B=r}return null}function Yf(e,t,n,r){do fn();while(vt!==null);if(F&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cc(e,o),e===oe&&(te=oe=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,bd(Yr,function(){return fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var a=B;B=1;var s=F;F|=4,Oi.current=null,Bf(e,n),md(n,e),pf(zo),Gr=!!Eo,zo=Eo=null,e.current=n,Uf(n),vc(),F=s,B=a,Re.transition=o}else e.current=n;if(Pr&&(Pr=!1,vt=e,cl=l),o=e.pendingLanes,o===0&&(bt=null),kc(n.stateNode),Se(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(dl)throw dl=!1,e=Ko,Ko=null,e;return cl&1&&e.tag!==0&&fn(),o=e.pendingLanes,o&1?e===Go?Hn++:(Hn=0,Go=e):Hn=0,Lt(),null}function fn(){if(vt!==null){var e=eu(cl),t=Re.transition,n=B;try{if(Re.transition=null,B=16>e?16:e,vt===null)var r=!1;else{if(e=vt,vt=null,cl=0,F&6)throw Error(y(331));var l=F;for(F|=4,z=e.current;z!==null;){var o=z,a=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(z=d;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Un(8,g,o)}var h=g.child;if(h!==null)h.return=g,z=h;else for(;z!==null;){g=z;var m=g.sibling,k=g.return;if(cd(g),g===d){z=null;break}if(m!==null){m.return=k,z=m;break}z=k}}}var S=o.alternate;if(S!==null){var j=S.child;if(j!==null){S.child=null;do{var D=j.sibling;j.sibling=null,j=D}while(j!==null)}}z=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,z=a;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Un(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,z=p;break e}z=o.return}}var c=e.current;for(z=c;z!==null;){a=z;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,z=f;else e:for(a=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:bl(9,s)}}catch(E){J(s,s.return,E)}if(s===a){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(F=l,Lt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(gl,e)}catch{}r=!0}return r}finally{B=n,Re.transition=t}}return!1}function cs(e,t,n){t=xn(n,t),t=ed(e,t,1),e=St(e,t,1),t=ge(),e!==null&&(ur(e,1,t),Se(e,t))}function J(e,t,n){if(e.tag===3)cs(e,e,n);else for(;t!==null;){if(t.tag===3){cs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=xn(n,e),e=td(t,e,1),t=St(t,e,1),e=ge(),t!==null&&(ur(t,1,e),Se(t,e));break}}t=t.return}}function Kf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ae&n)===n&&(re===4||re===3&&(ae&130023424)===ae&&500>q()-Di?Dt(e,0):Fi|=n),Se(e,t)}function wd(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=ge();e=it(e,t),e!==null&&(ur(e,t,n),Se(e,n))}function Gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wd(e,n)}function Xf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),wd(e,n)}var Sd;Sd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Ff(e,t,n);ye=!!(e.flags&131072)}else ye=!1,K&&t.flags&1048576&&Cu(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=mn(t,pe.current);cn(t,n),l=_i(null,t,r,e,l,n);var o=Ii();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,el(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ci(t),l.updater=Sl,t.stateNode=l,l._reactInternals=t,Fo(t,r,e,n),t=Ao(null,t,r,!0,o,n)):(t.tag=0,K&&o&&yi(t),me(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Jf(r),e=$e(r,e),l){case 0:t=$o(null,t,r,e,n);break e;case 1:t=ts(null,t,r,e,n);break e;case 11:t=qa(null,t,r,e,n);break e;case 14:t=es(null,t,r,$e(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:$e(r,l),$o(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:$e(r,l),ts(e,t,r,l,n);case 3:e:{if(od(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Iu(e,t),ol(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=xn(Error(y(423)),t),t=ns(e,t,r,n,l);break e}else if(r!==l){l=xn(Error(y(424)),t),t=ns(e,t,r,n,l);break e}else for(Ce=wt(t.stateNode.containerInfo.firstChild),Ee=t,K=!0,Be=null,n=Lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===l){t=at(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Tu(t),e===null&&Ro(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Po(r,l)?a=null:o!==null&&Po(r,o)&&(t.flags|=32),ld(e,t),me(e,t,a,n),t.child;case 6:return e===null&&Ro(t),null;case 13:return id(e,t,n);case 4:return Ei(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:$e(r,l),qa(e,t,r,l,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,U(rl,r._currentValue),r._currentValue=a,o!==null)if(He(o.value,a)){if(o.children===l.children&&!ke.current){t=at(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=rt(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Mo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(y(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Mo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,cn(t,n),l=Me(l),r=r(l),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,l=$e(r,t.pendingProps),l=$e(r.type,l),es(e,t,r,l,n);case 15:return nd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:$e(r,l),Ar(e,t),t.tag=1,we(r)?(e=!0,el(t)):e=!1,cn(t,n),qu(t,r,l),Fo(t,r,l,n),Ao(null,t,r,!0,e,n);case 19:return ad(e,t,n);case 22:return rd(e,t,n)}throw Error(y(156,t.tag))};function bd(e,t){return Xs(e,t)}function Zf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Zf(e,t,n,r)}function Ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jf(e){if(typeof e=="function")return Ui(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ai)return 11;if(e===si)return 14}return 2}function Nt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")Ui(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Gt:return $t(n.children,l,o,t);case ii:a=8,l|=8;break;case io:return e=Te(12,n,t,l|2),e.elementType=io,e.lanes=o,e;case ao:return e=Te(13,n,t,l),e.elementType=ao,e.lanes=o,e;case so:return e=Te(19,n,t,l),e.elementType=so,e.lanes=o,e;case Ts:return Nl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _s:a=10;break e;case Is:a=9;break e;case ai:a=11;break e;case si:a=14;break e;case ft:a=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Te(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function $t(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Ts,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Wi(e,t,n,r,l,o,a,s,u){return e=new qf(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ci(o),e}function ep(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jd(e){if(!e)return Et;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(we(n))return ju(e,n,t)}return t}function Nd(e,t,n,r,l,o,a,s,u){return e=Wi(n,r,!0,e,l,o,a,s,u),e.context=jd(null),n=e.current,r=ge(),l=jt(n),o=rt(r,l),o.callback=t??null,St(n,o,l),e.current.lanes=l,ur(e,l,r),Se(e,r),e}function Cl(e,t,n,r){var l=t.current,o=ge(),a=jt(l);return n=jd(n),t.context===null?t.context=n:t.pendingContext=n,t=rt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(l,t,a),e!==null&&(We(e,l,a,o),Fr(e,l,a)),a}function pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hi(e,t){fs(e,t),(e=e.alternate)&&fs(e,t)}function tp(){return null}var Cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vi(e){this._internalRoot=e}El.prototype.render=Vi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Cl(e,t,null,null)};El.prototype.unmount=Vi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Cl(null,e,null,null)}),t[ot]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=ru();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mt.length&&t!==0&&t<mt[n].priority;n++);mt.splice(n,0,e),n===0&&ou(e)}};function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ps(){}function np(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=pl(a);o.call(d)}}var a=Nd(t,r,e,0,null,!1,!1,"",ps);return e._reactRootContainer=a,e[ot]=a.current,qn(e.nodeType===8?e.parentNode:e),Ht(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=pl(u);s.call(d)}}var u=Wi(e,0,!1,null,null,!1,!1,"",ps);return e._reactRootContainer=u,e[ot]=u.current,qn(e.nodeType===8?e.parentNode:e),Ht(function(){Cl(t,u,n,r)}),u}function Pl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var s=l;l=function(){var u=pl(a);s.call(u)}}Cl(t,a,e,l)}else a=np(n,t,e,l,r);return pl(a)}tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(ci(t,n|1),Se(t,q()),!(F&6)&&(yn=q()+500,Lt()))}break;case 13:Ht(function(){var r=it(e,1);if(r!==null){var l=ge();We(r,e,1,l)}}),Hi(e,1)}};fi=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=ge();We(t,e,134217728,n)}Hi(e,134217728)}};nu=function(e){if(e.tag===13){var t=jt(e),n=it(e,t);if(n!==null){var r=ge();We(n,e,t,r)}Hi(e,t)}};ru=function(){return B};lu=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};yo=function(e,t,n){switch(t){case"input":if(fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=yl(r);if(!l)throw Error(y(90));Ms(r),fo(r,l)}}}break;case"textarea":Fs(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Hs=$i;Vs=Ht;var rp={usingClientEntryPoint:!1,Events:[cr,qt,yl,Us,Ws,$i]},Ln={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lp={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ks(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||tp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{gl=Lr.inject(lp),Ge=Lr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rp;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qi(t))throw Error(y(200));return ep(e,t,null,n)};Pe.createRoot=function(e,t){if(!Qi(e))throw Error(y(299));var n=!1,r="",l=Cd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Wi(e,1,!1,null,null,n,!1,r,l),e[ot]=t.current,qn(e.nodeType===8?e.parentNode:e),new Vi(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ks(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Ht(e)};Pe.hydrate=function(e,t,n){if(!zl(t))throw Error(y(200));return Pl(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Qi(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=Cd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Nd(t,null,e,1,n??null,l,!1,o,a),e[ot]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)};Pe.render=function(e,t,n){if(!zl(t))throw Error(y(200));return Pl(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!zl(e))throw Error(y(40));return e._reactRootContainer?(Ht(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Pe.unstable_batchedUpdates=$i;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Pl(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)}catch(e){console.error(e)}}Ed(),Es.exports=Pe;var op=Es.exports,zd,ms=op;zd=ms.createRoot,ms.hydrateRoot;const ip="http://localhost:8081/api",_t=1;async function Ze(e,t={}){const n=await fetch(`${ip}${e}`,{headers:{"Content-Type":"application/json",...t.headers},...t});if(!n.ok){const r=await n.json().catch(()=>({message:"Network error"}));throw new Error(r.message||`Request failed: ${n.status}`)}return n.status===204?null:n.json()}async function ap(e=_t){return Ze(`/computers?labId=${e}`)}async function sp(e=_t){return Ze(`/computers/stats?labId=${e}`)}async function up(e,t,n="Admin"){return Ze(`/computers/${e}/status`,{method:"PATCH",body:JSON.stringify({status:t,adminName:n})})}async function dp(e){return Ze("/issues",{method:"POST",body:JSON.stringify(e)})}async function cp(e=_t,t=null){const n=t?`/issues?labId=${e}&status=${t}`:`/issues?labId=${e}`;return Ze(n)}async function fp(e){return Ze(`/issues/computer/${e}`)}async function pp(e,t,n="",r="Admin"){return Ze(`/issues/${e}/status`,{method:"PATCH",body:JSON.stringify({status:t,notes:n,resolvedBy:r})})}async function mp(){return Ze("/issues/activity")}async function gp(e){return Ze(`/issues/by-roll?roll=${encodeURIComponent(e)}`)}async function hp(e=_t){return Ze(`/analytics/problematic-pcs?labId=${e}`)}function vp(e){return{WORKING:"ok",MINOR:"minor",FAULTY:"faulty",OFFLINE:"offline"}[e]??"ok"}function Pd(e){return{ok:"WORKING",minor:"MINOR",faulty:"FAULTY",offline:"OFFLINE"}[e]??"WORKING"}function Yi(e){return{OPEN:"open",IN_PROGRESS:"prog",FIXED:"fixed",CLOSED:"closed"}[e]??"open"}function xp(e){return{open:"OPEN",prog:"IN_PROGRESS",fixed:"FIXED",closed:"CLOSED"}[e]??"OPEN"}function _r(e){return e?new Date(e).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",hour12:!0}):""}function _n(e){if(!e)return"";const t=new Date(e),n=Math.floor((Date.now()-t)/864e5);return n===0?"Today":n===1?"Yesterday":t.toLocaleDateString("en-IN",{day:"2-digit",month:"short"})}function Ld(e=_t){const[t,n]=w.useState({}),[r,l]=w.useState(!0),[o,a]=w.useState(null),s=w.useRef(null),u=w.useCallback(async()=>{try{const g=await ap(e),h={};g.forEach(m=>{h[m.pcNumber]={...m,frontendStatus:vp(m.status)}}),n(h),a(null)}catch(g){a(g.message)}finally{l(!1)}},[e]);w.useEffect(()=>(u(),s.current=setInterval(u,3e4),()=>clearInterval(s.current)),[u]);const d=w.useCallback((g,h)=>{n(m=>({...m,[g]:{...m[g],frontendStatus:h,status:Pd(h)}}))},[]);return{computers:t,loading:r,error:o,refresh:u,optimisticUpdate:d}}function _d(e=_t,t=null){const[n,r]=w.useState([]),[l,o]=w.useState(!0),[a,s]=w.useState(null),u=w.useCallback(async()=>{try{o(!0);const d=await cp(e,t);r(d.map(g=>({...g,frontendStatus:Yi(g.status)}))),s(null)}catch(d){s(d.message)}finally{o(!1)}},[e,t]);return w.useEffect(()=>{u()},[u]),{issues:n,setIssues:r,loading:l,error:a,refresh:u}}function yp(e=_t){const[t,n]=w.useState(null),[r,l]=w.useState(!0),[o,a]=w.useState(null),s=w.useCallback(async()=>{try{const u=await sp(e);n(u),a(null)}catch(u){a(u.message)}finally{l(!1)}},[e]);return w.useEffect(()=>{s();const u=setInterval(s,6e4);return()=>clearInterval(u)},[s]),{stats:t,loading:r,error:o,refresh:s}}function kp(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),l=w.useCallback(async()=>{try{const o=await mp();t(o)}catch{}finally{r(!1)}},[]);return w.useEffect(()=>{l();const o=setInterval(l,3e4);return()=>clearInterval(o)},[l]),{log:e,loading:n,refresh:l}}function wp(e){const[t,n]=w.useState(!1),[r,l]=w.useState(!1),[o,a]=w.useState(null),s=w.useCallback(async d=>{n(!0),a(null);try{const g=await dp(d);return l(!0),e&&e(g),g}catch(g){throw a(g.message),g}finally{n(!1)}},[e]),u=w.useCallback(()=>{l(!1),a(null)},[]);return{submit:s,submitting:t,success:r,error:o,reset:u}}function Sp(e){const[t,n]=w.useState({}),[r,l]=w.useState(null),o=(u,d)=>n(g=>({...g,[u]:d})),a=w.useCallback(async(u,d,g="",h="Admin")=>{const m=`issue-${u}`;o(m,!0),l(null);try{await pp(u,xp(d),g,h),e&&e()}catch(k){l(k.message)}finally{o(m,!1)}},[e]),s=w.useCallback(async(u,d,g="Admin")=>{const h=`pc-${u}`;o(h,!0),l(null);try{await up(u,Pd(d),g),e&&e()}catch(m){l(m.message)}finally{o(h,!1)}},[e]);return{updateIssue:a,updatePC:s,actionLoading:t,error:r}}function bp(e){const[t,n]=w.useState([]),[r,l]=w.useState(!1),[o,a]=w.useState(null),s=w.useCallback(async()=>{if(e){l(!0),a(null);try{const u=await fp(e);n(u.map(d=>({...d,frontendStatus:Yi(d.status)})))}catch(u){a(u.message)}finally{l(!1)}}},[e]);return w.useEffect(()=>{s()},[s]),{history:t,loading:r,error:o,refresh:s}}function jp(){const[e,t]=w.useState([]),[n,r]=w.useState(!1),[l,o]=w.useState(null),[a,s]=w.useState(!1),u=w.useCallback(async g=>{if(g!=null&&g.trim()){r(!0),o(null),s(!0);try{const h=await gp(g.trim());t(h.map(m=>({...m,frontendStatus:Yi(m.status)})))}catch(h){o(h.message)}finally{r(!1)}}},[]),d=w.useCallback(()=>{t([]),o(null),s(!1)},[]);return{issues:e,loading:n,error:l,searched:a,search:u,reset:d}}function Np(e=_t){const[t,n]=w.useState([]),[r,l]=w.useState(!0),[o,a]=w.useState(null),s=w.useCallback(async()=>{try{const u=await hp(e);n(u),a(null)}catch(u){a(u.message)}finally{l(!1)}},[e]);return w.useEffect(()=>{s();const u=setInterval(s,3e5);return()=>clearInterval(u)},[s]),{pcs:t,loading:r,error:o,refresh:s}}const Cp=e=>({open:{label:"Open",color:"#ff3860",bg:"rgba(255,56,96,0.12)"},prog:{label:"In Progress",color:"#ffdd57",bg:"rgba(255,221,87,0.12)"},fixed:{label:"Fixed",color:"#00ff87",bg:"rgba(0,255,135,0.12)"},closed:{label:"Closed",color:"#8896b3",bg:"rgba(136,150,179,0.1)"}})[e]??{label:e,color:"#8896b3",bg:"transparent"},Ep=e=>({CRITICAL:"#ff3860",HIGH:"#ff6b35",MEDIUM:"#ffdd57",MINOR:"#00ff87"})[e]??"#8896b3";function zp({frontendStatus:e}){const t=["open","prog","fixed"],n=t.indexOf(e),r=e==="fixed"||e==="closed"?100:n<0?0:Math.round(n/(t.length-1)*100);return i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4,fontSize:"0.65rem",color:"#3e4f6e",fontFamily:"'IBM Plex Mono',monospace"},children:[i.jsx("span",{children:"Reported"}),i.jsx("span",{children:"In Progress"}),i.jsx("span",{children:"Resolved"})]}),i.jsx("div",{style:{height:4,background:"#1f2a3f",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{style:{height:"100%",borderRadius:4,width:`${r}%`,background:r===100?"#00ff87":"linear-gradient(90deg,#00d4ff,#a855f7)",transition:"width .4s ease"}})})]})}function Pp(){const[e,t]=w.useState(""),[n,r]=w.useState(!1),{issues:l,loading:o,error:a,searched:s,search:u,reset:d}=jp(),g=()=>{e.trim()&&u(e)},h=m=>{m.key==="Enter"&&g()};return i.jsxs("div",{style:{margin:"24px 0",background:"#0d1117",border:"1px solid #1f2a3f",borderRadius:16,overflow:"hidden"},children:[i.jsxs("button",{onClick:()=>r(m=>!m),style:{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"14px 20px",display:"flex",alignItems:"center",gap:10,color:"#e8edf8"},children:[i.jsx("span",{style:{fontSize:"1rem"},children:"🎓"}),i.jsx("span",{style:{fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.85rem",fontWeight:600,color:"#00d4ff"},children:"Track My Issues"}),i.jsx("span",{style:{marginLeft:"auto",color:"#3e4f6e",transition:"transform .2s",transform:n?"rotate(180deg)":"none"},children:"▼"})]}),n&&i.jsxs("div",{style:{padding:"0 20px 20px"},children:[i.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[i.jsx("input",{value:e,onChange:m=>{t(m.target.value),s&&d()},onKeyDown:h,placeholder:"Enter your Roll Number e.g. 22CS047",style:{flex:1,padding:"10px 14px",background:"#111520",border:"1px solid #1f2a3f",borderRadius:10,color:"#e8edf8",fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.82rem",outline:"none"}}),i.jsx("button",{onClick:g,disabled:o||!e.trim(),style:{padding:"10px 20px",borderRadius:10,cursor:"pointer",background:o?"#1f2a3f":"rgba(0,212,255,0.15)",border:"1px solid rgba(0,212,255,0.3)",color:"#00d4ff",fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.82rem",fontWeight:600,transition:"background .2s"},children:o?"…":"Search"})]}),a&&i.jsx("div",{style:{color:"#ff3860",fontSize:"0.8rem",marginBottom:12},children:a}),s&&!o&&l.length===0&&i.jsxs("div",{style:{color:"#8896b3",fontSize:"0.82rem",textAlign:"center",padding:"24px 0"},children:["No issues found for roll number ",i.jsx("strong",{style:{color:"#e8edf8"},children:e})]}),l.map(m=>{const k=Cp(m.frontendStatus);return i.jsxs("div",{style:{background:"#111520",border:"1px solid #1f2a3f",borderRadius:12,padding:"14px 16px",marginBottom:10},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:10},children:[i.jsxs("div",{children:[i.jsx("div",{style:{fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.8rem",color:"#00d4ff",fontWeight:600},children:m.pcLabel}),i.jsx("div",{style:{color:"#e8edf8",fontSize:"0.85rem",fontWeight:500,marginTop:2},children:m.issueType}),m.description&&i.jsx("div",{style:{color:"#8896b3",fontSize:"0.75rem",marginTop:4},children:m.description})]}),i.jsxs("div",{style:{marginLeft:"auto",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},children:[i.jsx("span",{style:{padding:"3px 10px",borderRadius:20,background:k.bg,color:k.color,fontSize:"0.65rem",fontWeight:700,fontFamily:"'IBM Plex Mono',monospace"},children:k.label}),i.jsx("span",{style:{fontSize:"0.65rem",color:Ep(m.severity),fontFamily:"'IBM Plex Mono',monospace"},children:m.severity}),m.escalated&&i.jsx("span",{style:{fontSize:"0.6rem",padding:"2px 7px",borderRadius:20,background:"rgba(255,107,53,0.2)",color:"#ff6b35",fontFamily:"'IBM Plex Mono',monospace",fontWeight:700},children:"⚡ ESCALATED"})]})]}),i.jsx(zp,{frontendStatus:m.frontendStatus}),i.jsxs("div",{style:{marginTop:8,display:"flex",gap:16,flexWrap:"wrap",fontSize:"0.7rem",color:"#3e4f6e",fontFamily:"'IBM Plex Mono',monospace"},children:[i.jsxs("span",{children:["📅 ",new Date(m.reportedAt).toLocaleDateString("en-IN",{day:"2-digit",month:"short"})]}),m.resolutionLabel&&i.jsxs("span",{style:{color:"#00ff87"},children:["⏱ Resolved in ",m.resolutionLabel]}),m.resolvedBy&&i.jsxs("span",{children:["🔧 by ",m.resolvedBy]})]}),m.notes&&i.jsxs("div",{style:{marginTop:8,padding:"6px 10px",background:"rgba(0,212,255,0.05)",borderRadius:6,fontSize:"0.72rem",color:"#8896b3"},children:["📝 ",m.notes]})]},m.id)})]})]})}const Lp="@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap');",_p=[{left:[1,2,3,4],right:[5,6,7,8]},{left:[9,10,11,12],right:[13,14,15,16]},{left:[17,18,19,20],right:[21,22,23,24]},{left:[25,26,27,28],right:[29]}],Ip=["Not Booting","Keyboard","Mouse","No Internet","Display","Audio","Software","Very Slow","No Power"],Jo=e=>({ok:"Operational",faulty:"Critical",minor:"Degraded",offline:"Offline"})[e]??"",Tp=`
${Lp}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:      #080a0f;
  --surface: #0d1117;
  --panel:   #111520;
  --card:    #161c2a;
  --rim:     #1f2a3f;
  --rim2:    #2a3752;
  --rim3:    #354363;

  --cyan:    #00d4ff;
  --cyan2:   #00a3c4;
  --green:   #00ff87;
  --amber:   #ffdd57;
  --red:     #ff3860;
  --purple:  #a855f7;

  --c-cyan:  rgba(0,212,255,0.08);
  --c-green: rgba(0,255,135,0.08);
  --c-amber: rgba(255,221,87,0.08);
  --c-red:   rgba(255,56,96,0.08);

  --text:    #e8edf8;
  --text2:   #8896b3;
  --text3:   #3e4f6e;

  --mono:    'IBM Plex Mono', monospace;
  --body:    'Space Grotesk', sans-serif;

  --rad:     12px;
  --rad-lg:  18px;
  --transition: 0.2s cubic-bezier(0.4,0,0.2,1);
}

/* ── Root ── */
.sl-root {
  font-family: var(--body);
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
}

/* subtle grid overlay */
.sl-root::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* corner glow accents */
.sl-root::after {
  content: '';
  position: fixed;
  top: -200px; left: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* ── Nav ── */
.sl-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 60px;
  background: rgba(8,10,15,0.92);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--rim);
  display: flex;
  align-items: center;
  padding: 0 1.75rem;
  gap: 1rem;
  position: relative;
  z-index: 50;
}

.sl-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.sl-logo-icon {
  width: 34px; height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--cyan) 0%, #6c63ff 100%);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px;
  box-shadow: 0 0 20px rgba(0,212,255,0.35), 0 0 40px rgba(0,212,255,0.1);
  flex-shrink: 0;
}

.sl-logo-text { color: var(--text); }
.sl-logo-text span { color: var(--cyan); }

.sl-spacer { flex: 1; }

.sl-nav-pills {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sl-pill {
  background: var(--card);
  border: 1px solid var(--rim);
  border-radius: 8px;
  padding: 5px 13px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text2);
  display: flex;
  align-items: center;
  gap: 6px;
}
.sl-pill-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 6px var(--red);
  animation: pulse-dot 2s ease-in-out infinite;
}
.sl-pill b { color: var(--amber); font-weight: 600; }

@keyframes pulse-dot {
  0%,100% { opacity:1; transform: scale(1); }
  50%      { opacity:0.5; transform: scale(0.85); }
}

.sl-admin-btn {
  background: transparent;
  border: 1px solid var(--rim2);
  border-radius: 8px;
  padding: 7px 16px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text2);
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.04em;
}
.sl-admin-btn:hover {
  border-color: var(--cyan);
  color: var(--cyan);
  background: var(--c-cyan);
  box-shadow: 0 0 12px rgba(0,212,255,0.1);
}

/* ── Info Strip ── */
.sl-strip {
  background: var(--surface);
  border-bottom: 1px solid var(--rim);
  padding: 10px 1.75rem;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 0.78rem;
  color: var(--text2);
  position: relative;
  z-index: 1;
}

.sl-strip-live {
  display: flex; align-items: center; gap: 6px;
  padding: 3px 10px;
  background: rgba(0,255,135,0.07);
  border: 1px solid rgba(0,255,135,0.2);
  border-radius: 6px;
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--green);
  font-weight: 600;
  letter-spacing: 0.08em;
}
.sl-strip-live-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  animation: pulse-dot 1.5s ease-in-out infinite;
}

.sl-strip-sep { color: var(--rim2); }
.sl-strip strong { color: var(--text); font-weight: 600; }

.sl-strip-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 9px;
  background: var(--card);
  border: 1px solid var(--rim);
  border-radius: 5px;
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text2);
}

/* ── Body ── */
.sl-body {
  flex: 1;
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* ── Canvas (Lab Map) ── */
.sl-canvas {
  flex: 1;
  padding: 28px 44px 28px 44px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sl-map-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.sl-map-title {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text3);
  display: flex;
  align-items: center;
  gap: 10px;
}
.sl-map-title::after {
  content: '';
  display: block;
  width: 60px; height: 1px;
  background: linear-gradient(90deg, var(--rim2), transparent);
}

/* ── Projector ── */
.sl-proj-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
}

.sl-proj {
  width: min(480px, 90%);
  height: 42px;
  background: var(--panel);
  border: 1px solid var(--rim2);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
}

.sl-proj-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(0,212,255,0.04) 30%,
    rgba(0,212,255,0.12) 50%,
    rgba(0,212,255,0.04) 70%,
    transparent 100%
  );
  animation: proj-sweep 5s ease-in-out infinite;
}
@keyframes proj-sweep {
  0%,100% { opacity: 0.5; }
  50%      { opacity: 1; }
}

.sl-proj-icon {
  font-size: 14px;
  position: relative;
  z-index: 1;
}
.sl-proj-lbl {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--cyan);
  position: relative;
  z-index: 1;
  opacity: 0.8;
}

.sl-proj-base {
  width: min(520px, 98%);
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--cyan2), var(--cyan2), transparent);
  border-radius: 0 0 3px 3px;
  box-shadow: 0 2px 12px rgba(0,212,255,0.2);
}

.sl-proj-sub {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text3);
  margin-top: 8px;
}

/* ── Grid Layout ── */
.sl-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.sl-row {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.sl-cluster { display: flex; gap: 10px; }
.sl-cluster-left  { flex: 1; justify-content: flex-end; }
.sl-cluster-right { flex: 1; justify-content: flex-start; }

.sl-aisle {
  width: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sl-aisle-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.sl-aisle-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(180deg, transparent, var(--rim2), transparent);
}
.sl-aisle-label {
  font-family: var(--mono);
  font-size: 0.48rem;
  letter-spacing: 0.15em;
  color: var(--text3);
  transform: rotate(90deg);
  white-space: nowrap;
}

/* ── PC Tile ── */
.sl-pc {
  width: 62px; height: 60px;
  border-radius: var(--rad);
  border: 1.5px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 5px;
  position: relative;
  transition: transform 0.18s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s, border-color 0.2s, background 0.2s;
  user-select: none;
  flex-shrink: 0;
  overflow: hidden;
}

/* inner glow strip at bottom */
.sl-pc::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity 0.2s;
}
.sl-pc:hover::before { opacity: 1; }

/* status dot */
.sl-pc::after {
  content: '';
  position: absolute;
  bottom: 7px; right: 8px;
  width: 5px; height: 5px;
  border-radius: 50%;
}

.sl-pc-icon { font-size: 18px; line-height: 1; }
.sl-pc-num {
  font-family: var(--mono);
  font-size: 0.5rem;
  font-weight: 500;
  opacity: 0.6;
  letter-spacing: 0.06em;
}

/* States */
.sl-pc.ok {
  background: rgba(0,255,135,0.04);
  border-color: rgba(0,255,135,0.18);
  color: var(--green);
}
.sl-pc.ok::before  { background: var(--green); box-shadow: 0 0 8px var(--green); }
.sl-pc.ok::after   { background: var(--green); box-shadow: 0 0 6px var(--green); }
.sl-pc.ok:hover    { transform: translateY(-5px) scale(1.08); border-color: var(--green); box-shadow: 0 10px 28px rgba(0,255,135,0.22); background: rgba(0,255,135,0.08); }

.sl-pc.minor {
  background: rgba(255,221,87,0.04);
  border-color: rgba(255,221,87,0.2);
  color: var(--amber);
}
.sl-pc.minor::before { background: var(--amber); box-shadow: 0 0 8px var(--amber); }
.sl-pc.minor::after  { background: var(--amber); box-shadow: 0 0 6px var(--amber); }
.sl-pc.minor:hover   { transform: translateY(-5px) scale(1.08); border-color: var(--amber); box-shadow: 0 10px 28px rgba(255,221,87,0.22); background: rgba(255,221,87,0.08); }

.sl-pc.faulty {
  background: rgba(255,56,96,0.05);
  border-color: rgba(255,56,96,0.22);
  color: var(--red);
  animation: faulty-pulse 2.5s ease-in-out infinite;
}
.sl-pc.faulty::before { background: var(--red); box-shadow: 0 0 8px var(--red); }
.sl-pc.faulty::after  { background: var(--red); box-shadow: 0 0 6px var(--red); }
.sl-pc.faulty:hover   { transform: translateY(-5px) scale(1.08); border-color: var(--red); box-shadow: 0 10px 32px rgba(255,56,96,0.32); background: rgba(255,56,96,0.1); animation: none; }

@keyframes faulty-pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(255,56,96,0); }
  50%      { box-shadow: 0 0 0 6px rgba(255,56,96,0.12); }
}

.sl-pc.offline {
  background: transparent;
  border-color: var(--rim);
  color: var(--text3);
  cursor: default;
  opacity: 0.35;
}

.sl-pc.selected {
  border-color: var(--cyan) !important;
  box-shadow: 0 0 0 3px rgba(0,212,255,0.2), 0 10px 30px rgba(0,212,255,0.3) !important;
  transform: translateY(-6px) scale(1.12) !important;
  background: rgba(0,212,255,0.1) !important;
  color: var(--cyan) !important;
  animation: none !important;
}
.sl-pc.selected::after { background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }

/* ── Legend ── */
.sl-legend {
  display: flex;
  gap: 6px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.sl-legend-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: 8px;
  font-size: 0.72rem;
  color: var(--text2);
  font-family: var(--mono);
  transition: border-color var(--transition);
}
.sl-legend-item:hover { border-color: var(--rim2); }

.sl-legend-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
}
.sl-legend-dot.ok      { background: var(--green); box-shadow: 0 0 5px var(--green); }
.sl-legend-dot.minor   { background: var(--amber); box-shadow: 0 0 5px var(--amber); }
.sl-legend-dot.faulty  { background: var(--red);   box-shadow: 0 0 5px var(--red);   }
.sl-legend-dot.offline { background: var(--rim2); }

/* ── Sidebar ── */
.sl-sidebar {
  width: 300px;
  flex-shrink: 0;
  background: var(--surface);
  border-left: 1px solid var(--rim);
  padding: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sl-sidebar::-webkit-scrollbar { width: 3px; }
.sl-sidebar::-webkit-scrollbar-thumb { background: var(--rim2); border-radius: 2px; }

.sl-sb-section {
  padding: 20px 20px;
  border-bottom: 1px solid var(--rim);
}

.sl-sec-title {
  font-family: var(--mono);
  font-size: 0.58rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text3);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sl-sec-title::before {
  content: '';
  display: block;
  width: 3px; height: 12px;
  background: var(--cyan);
  border-radius: 2px;
  box-shadow: 0 0 6px var(--cyan);
}

/* ── Stat Cards ── */
.sl-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.sl-stat {
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  padding: 12px 14px;
  position: relative;
  overflow: hidden;
  transition: border-color var(--transition);
}
.sl-stat:hover { border-color: var(--rim2); }

.sl-stat::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  border-radius: 2px 2px 0 0;
}
.sl-stat.ok::before    { background: var(--green); box-shadow: 0 0 8px var(--green); }
.sl-stat.minor::before { background: var(--amber); box-shadow: 0 0 8px var(--amber); }
.sl-stat.fault::before { background: var(--red);   box-shadow: 0 0 8px var(--red);   }
.sl-stat.off::before   { background: var(--rim2); }

.sl-stat-num {
  font-family: var(--mono);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 4px;
}
.sl-stat.ok .sl-stat-num    { color: var(--green); }
.sl-stat.minor .sl-stat-num { color: var(--amber); }
.sl-stat.fault .sl-stat-num { color: var(--red);   }
.sl-stat.off .sl-stat-num   { color: var(--text3); }

.sl-stat-lbl {
  font-size: 0.65rem;
  color: var(--text2);
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* ── Health Bar ── */
.sl-health-bar-wrap {
  margin-top: 14px;
}
.sl-health-bar-label {
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--text3);
  margin-bottom: 6px;
}
.sl-health-bar-track {
  height: 5px;
  background: var(--panel);
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  gap: 2px;
}
.sl-health-segment {
  height: 100%;
  border-radius: 2px;
  transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
}

/* ── Selected Panel ── */
.sl-sel-box {
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  padding: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sl-sel-box.active {
  border-color: rgba(0,212,255,0.35);
  box-shadow: 0 0 0 1px rgba(0,212,255,0.1), inset 0 0 24px rgba(0,212,255,0.03);
}

.sl-sel-placeholder {
  text-align: center;
  color: var(--text3);
  font-family: var(--mono);
  font-size: 0.7rem;
  line-height: 2;
}
.sl-sel-arrow { font-size: 1.1rem; display: block; margin-bottom: 4px; }

.sl-sel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.sl-sel-name {
  font-family: var(--mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cyan);
}
.sl-sel-spec {
  font-size: 0.65rem;
  color: var(--text3);
  font-family: var(--mono);
  margin-bottom: 12px;
  line-height: 1.8;
}

.sl-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: var(--mono);
  font-size: 0.62rem;
  font-weight: 600;
  border: 1px solid;
}
.sl-badge-dot { width: 5px; height: 5px; border-radius: 50%; }
.sl-badge.ok     { background: rgba(0,255,135,0.08); color: var(--green); border-color: rgba(0,255,135,0.25); }
.sl-badge.ok .sl-badge-dot { background: var(--green); box-shadow: 0 0 5px var(--green); }
.sl-badge.minor  { background: rgba(255,221,87,0.08); color: var(--amber); border-color: rgba(255,221,87,0.25); }
.sl-badge.minor .sl-badge-dot { background: var(--amber); box-shadow: 0 0 5px var(--amber); }
.sl-badge.faulty { background: rgba(255,56,96,0.08);  color: var(--red);   border-color: rgba(255,56,96,0.25); }
.sl-badge.faulty .sl-badge-dot { background: var(--red); box-shadow: 0 0 5px var(--red); }

.sl-report-btn {
  width: 100%;
  margin-top: 12px;
  padding: 11px 0;
  background: linear-gradient(135deg, rgba(255,56,96,0.12), rgba(255,56,96,0.06));
  border: 1px solid rgba(255,56,96,0.35);
  border-radius: var(--rad);
  color: var(--red);
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
.sl-report-btn:hover {
  background: rgba(255,56,96,0.18);
  border-color: var(--red);
  box-shadow: 0 4px 18px rgba(255,56,96,0.22);
  transform: translateY(-1px);
}

/* ── Issues List ── */
.sl-issues {
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-height: 320px;
  overflow-y: auto;
}
.sl-issues::-webkit-scrollbar { width: 3px; }
.sl-issues::-webkit-scrollbar-thumb { background: var(--rim2); border-radius: 2px; }

.sl-issue {
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  padding: 11px 13px;
  cursor: default;
  transition: border-color var(--transition);
  animation: slide-in 0.35s ease-out both;
  position: relative;
  overflow: hidden;
}
.sl-issue::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
}
.sl-issue.open::before   { background: var(--red); }
.sl-issue.prog::before   { background: var(--amber); }
.sl-issue.fixed::before  { background: var(--green); }
.sl-issue:hover { border-color: var(--rim2); }

@keyframes slide-in {
  from { opacity: 0; transform: translateX(10px); }
  to   { opacity: 1; transform: translateX(0); }
}

.sl-issue-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.sl-issue-id {
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--cyan);
}
.sl-issue-time {
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--text3);
}
.sl-issue-desc {
  font-size: 0.75rem;
  color: var(--text2);
  margin-bottom: 7px;
  line-height: 1.4;
}

.sl-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.sl-tag.open  { background: rgba(255,56,96,0.1);   color: var(--red);   }
.sl-tag.prog  { background: rgba(255,221,87,0.1);  color: var(--amber); }
.sl-tag.fixed { background: rgba(0,255,135,0.08);  color: var(--green); }

/* ── Misc ── */
.sl-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  gap: 10px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text3);
  letter-spacing: 0.1em;
}
.sl-loading-spin {
  width: 18px; height: 18px;
  border: 2px solid var(--rim);
  border-top-color: var(--cyan);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.sl-err-banner {
  background: rgba(255,56,96,0.06);
  border: 1px solid rgba(255,56,96,0.25);
  border-radius: var(--rad);
  padding: 10px 14px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--red);
  margin-bottom: 1rem;
}

.sl-empty {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text3);
  text-align: center;
  padding: 1.5rem;
  letter-spacing: 0.08em;
}

/* ── Modal Overlay ── */
.sl-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s;
}
.sl-overlay.open {
  opacity: 1;
  pointer-events: all;
}

/* ── Modal ── */
.sl-modal {
  background: var(--surface);
  border: 1px solid var(--rim2);
  border-radius: var(--rad-lg);
  width: min(480px, 94vw);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,212,255,0.06);
  transform: translateY(20px) scale(0.97);
  transition: transform 0.3s cubic-bezier(.34,1.2,.64,1);
}
.sl-overlay.open .sl-modal {
  transform: translateY(0) scale(1);
}

.sl-m-head {
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--rim);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--panel);
}

.sl-m-title-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}
.sl-m-icon {
  width: 32px; height: 32px;
  background: rgba(255,56,96,0.1);
  border: 1px solid rgba(255,56,96,0.25);
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
}
.sl-m-title {
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text);
}
.sl-m-subtitle {
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--text3);
  margin-top: 2px;
}

.sl-m-head-right {
  display: flex;
  align-items: center;
  gap: 9px;
}
.sl-m-pcbadge {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--c-cyan);
  color: var(--cyan);
  padding: 5px 12px;
  border-radius: 7px;
  border: 1px solid rgba(0,212,255,0.2);
}
.sl-m-close {
  background: none;
  border: 1px solid var(--rim);
  color: var(--text2);
  font-size: 1rem;
  cursor: pointer;
  padding: 5px 9px;
  border-radius: 7px;
  transition: all var(--transition);
  line-height: 1;
  font-family: var(--mono);
}
.sl-m-close:hover {
  background: var(--card);
  border-color: var(--rim2);
  color: var(--text);
}

.sl-m-body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
}
.sl-m-body::-webkit-scrollbar { width: 3px; }
.sl-m-body::-webkit-scrollbar-thumb { background: var(--rim2); border-radius: 2px; }

.sl-fg label {
  display: block;
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--text3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 7px;
}

.sl-input, .sl-select, .sl-textarea {
  width: 100%;
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  padding: 10px 13px;
  color: var(--text);
  font-family: var(--body);
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: vertical;
}
.sl-input:focus, .sl-select:focus, .sl-textarea:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px rgba(0,212,255,0.1);
}
.sl-input::placeholder, .sl-textarea::placeholder { color: var(--text3); }
.sl-input.err, .sl-select.err { border-color: var(--red); box-shadow: 0 0 0 2px rgba(255,56,96,0.1); }
.sl-select option { background: var(--panel); }

.sl-chips { display: flex; flex-wrap: wrap; gap: 7px; }
.sl-chip {
  padding: 6px 12px;
  border-radius: 7px;
  border: 1px solid var(--rim);
  background: var(--panel);
  color: var(--text2);
  font-family: var(--mono);
  font-size: 0.65rem;
  cursor: pointer;
  transition: all 0.18s;
  user-select: none;
  font-weight: 500;
}
.sl-chip:hover { border-color: var(--rim2); color: var(--text); }
.sl-chip.on {
  border-color: rgba(255,56,96,0.4);
  background: rgba(255,56,96,0.1);
  color: var(--red);
}

.sl-m-foot {
  padding: 14px 24px 20px;
  border-top: 1px solid var(--rim);
  display: flex;
  gap: 9px;
  justify-content: flex-end;
  align-items: center;
  background: var(--panel);
}
.sl-err-msg {
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--red);
  flex: 1;
}

.sl-btn-cancel {
  padding: 9px 18px;
  background: transparent;
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  color: var(--text2);
  font-family: var(--mono);
  font-size: 0.72rem;
  cursor: pointer;
  transition: all var(--transition);
}
.sl-btn-cancel:hover { border-color: var(--rim2); color: var(--text); }

.sl-btn-submit {
  padding: 9px 22px;
  background: linear-gradient(135deg, rgba(255,56,96,0.2), rgba(255,56,96,0.1));
  border: 1px solid rgba(255,56,96,0.4);
  border-radius: var(--rad);
  color: var(--red);
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.04em;
}
.sl-btn-submit:hover:not(:disabled) {
  background: rgba(255,56,96,0.25);
  border-color: var(--red);
  box-shadow: 0 4px 18px rgba(255,56,96,0.25);
  transform: translateY(-1px);
}
.sl-btn-submit:disabled { opacity: 0.45; cursor: not-allowed; }

/* ── Toast ── */
.sl-toast {
  position: fixed;
  bottom: 24px; right: 24px;
  z-index: 300;
  background: rgba(0,10,5,0.95);
  border: 1px solid rgba(0,255,135,0.35);
  border-radius: var(--rad);
  padding: 13px 18px;
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--green);
  box-shadow: 0 8px 32px rgba(0,255,135,0.15);
  display: flex;
  align-items: center;
  gap: 9px;
  transform: translateY(80px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(.34,1.2,.64,1);
  pointer-events: none;
}
.sl-toast-check {
  width: 22px; height: 22px;
  background: rgba(0,255,135,0.1);
  border: 1px solid rgba(0,255,135,0.3);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px;
}
.sl-toast.show { transform: translateY(0); opacity: 1; }

/* ── Responsive ── */
@media (max-width: 720px) {
  .sl-body { flex-direction: column; }
  .sl-canvas { width: 100%; padding: 16px; }
  .sl-sidebar { width: 100%; border-left: none; border-top: 1px solid var(--rim); }
  .sl-pc { width: 50px; height: 48px; }
  .sl-cluster { gap: 7px; }
}
`,Rp=e=>({ok:"🖥️",faulty:"⚠️",minor:"🖥️",offline:"✕"})[e]??"🖥️";function gs({num:e,frontendStatus:t,selected:n,onClick:r}){const l=["sl-pc",t,n?"selected":""].filter(Boolean).join(" ");return i.jsxs("div",{className:l,onClick:()=>r(e),title:`PC-${String(e).padStart(2,"0")} · ${Jo(t)}`,children:[i.jsx("span",{className:"sl-pc-icon",children:Rp(t)}),i.jsx("span",{className:"sl-pc-num",children:String(e).padStart(2,"0")})]})}function Mp({onAdmin:e}){const{computers:t,loading:n,error:r,optimisticUpdate:l}=Ld(),{issues:o,loading:a,refresh:s}=_d(),[u,d]=w.useState(null),[g,h]=w.useState(!1),[m,k]=w.useState(!1),[S,j]=w.useState([]),[D,p]=w.useState(""),[c,f]=w.useState(""),[x,E]=w.useState(""),[b,P]=w.useState(""),[L,T]=w.useState("");w.useEffect(()=>{const H=new URLSearchParams(window.location.search).get("pc");if(H){const V=parseInt(H,10);!isNaN(V)&&V>=1&&V<=29&&(d(V),h(!0))}},[]);const{submit:R,submitting:ue,error:Ve}=wp(()=>{l(u,x==="HIGH"||x==="CRITICAL"?"faulty":"minor"),s(),$(),k(!0),setTimeout(()=>k(!1),3500)}),be=Object.values(t),je={ok:be.filter(N=>N.frontendStatus==="ok").length,minor:be.filter(N=>N.frontendStatus==="minor").length,faulty:be.filter(N=>N.frontendStatus==="faulty").length,offline:be.filter(N=>N.frontendStatus==="offline").length},ut=be.length||29,Je=Math.round(je.ok/ut*100),dt=o.filter(N=>N.frontendStatus==="open").length,C=u?t[u]:null,I=u?`PC-${String(u).padStart(2,"0")}`:"",_=w.useCallback(N=>{var H;((H=t[N])==null?void 0:H.frontendStatus)!=="offline"&&d(N)},[t]),$=()=>{h(!1),j([]),p(""),f(""),E(""),P(""),T("")},W=async()=>{if(!D.trim()){T("Name is required");return}if(!c.trim()){T("Roll number is required");return}if(!S.length){T("Select at least one issue type");return}if(!x){T("Select severity");return}T(""),await R({computerId:C.id,studentName:D.trim(),rollNumber:c.trim(),issueType:S[0].replace(/[^\w\s]/g,"").trim(),severity:x,description:b.trim()})};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Tp}),i.jsxs("div",{className:"sl-root",children:[i.jsxs("nav",{className:"sl-nav",children:[i.jsxs("div",{className:"sl-logo",children:[i.jsx("div",{className:"sl-logo-icon",children:"💻"}),i.jsxs("div",{className:"sl-logo-text",children:["Smart",i.jsx("span",{children:"Lab"})]})]}),i.jsx("div",{className:"sl-spacer"}),i.jsxs("div",{className:"sl-nav-pills",children:[dt>0&&i.jsxs("div",{className:"sl-pill",children:[i.jsx("div",{className:"sl-pill-dot"}),i.jsx("b",{children:dt})," open"]}),i.jsxs("div",{className:"sl-pill",style:{color:"var(--green)"},children:["↑ ",Je,"% healthy"]}),e&&i.jsx("button",{className:"sl-admin-btn",onClick:e,children:"Admin →"})]})]}),i.jsxs("div",{className:"sl-strip",children:[i.jsxs("div",{className:"sl-strip-live",children:[i.jsx("div",{className:"sl-strip-live-dot"}),"LIVE"]}),i.jsx("strong",{children:"Lab 3 — Block B"}),i.jsx("span",{className:"sl-strip-sep",children:"·"}),i.jsx("span",{className:"sl-strip-tag",children:"🏫 Computer Science"}),i.jsx("span",{className:"sl-strip-sep",children:"·"}),i.jsx("span",{className:"sl-strip-tag",children:"🖥️ 29 Systems"}),i.jsx("span",{className:"sl-strip-sep",children:"·"}),i.jsx("span",{className:"sl-strip-tag",children:"🕐 08:00 – 14:30"}),i.jsx("span",{className:"sl-strip-sep",children:"·"}),i.jsx("span",{className:"sl-strip-tag",children:"CS-3A"})]}),i.jsxs("div",{className:"sl-body",children:[i.jsxs("div",{className:"sl-canvas",children:[i.jsx("div",{className:"sl-map-header",children:i.jsx("div",{className:"sl-map-title",children:"Lab Floor Map — Click a system to report"})}),r&&i.jsxs("div",{className:"sl-err-banner",children:["⚠ ",r]}),i.jsxs("div",{className:"sl-proj-wrap",children:[i.jsxs("div",{className:"sl-proj",children:[i.jsx("div",{className:"sl-proj-glow"}),i.jsx("span",{className:"sl-proj-icon",children:"📽️"}),i.jsx("span",{className:"sl-proj-lbl",children:"Projector / Board"})]}),i.jsx("div",{className:"sl-proj-base"}),i.jsx("div",{className:"sl-proj-sub",children:"All Eyes This Way"})]}),n?i.jsxs("div",{className:"sl-loading",children:[i.jsx("div",{className:"sl-loading-spin"}),"Loading lab map…"]}):i.jsx("div",{className:"sl-grid",children:_p.map((N,H)=>i.jsxs("div",{className:"sl-row",children:[i.jsx("div",{className:"sl-cluster sl-cluster-left",children:N.left.map(V=>{var ee;return i.jsx(gs,{num:V,frontendStatus:((ee=t[V])==null?void 0:ee.frontendStatus)??"ok",selected:u===V,onClick:_},V)})}),i.jsx("div",{className:"sl-aisle",children:i.jsx("div",{className:"sl-aisle-inner",children:i.jsx("div",{className:"sl-aisle-line"})})}),i.jsx("div",{className:"sl-cluster sl-cluster-right",children:N.right.map(V=>{var ee;return i.jsx(gs,{num:V,frontendStatus:((ee=t[V])==null?void 0:ee.frontendStatus)??"ok",selected:u===V,onClick:_},V)})})]},H))}),i.jsx("div",{className:"sl-legend",children:["ok","minor","faulty","offline"].map(N=>i.jsxs("div",{className:"sl-legend-item",children:[i.jsx("div",{className:`sl-legend-dot ${N}`}),Jo(N)]},N))})]}),i.jsxs("div",{className:"sl-sidebar",children:[i.jsxs("div",{className:"sl-sb-section",children:[i.jsx("div",{className:"sl-sec-title",children:"System Stats"}),i.jsxs("div",{className:"sl-stat-grid",children:[i.jsxs("div",{className:"sl-stat ok",children:[i.jsx("div",{className:"sl-stat-num",children:je.ok}),i.jsx("div",{className:"sl-stat-lbl",children:"Operational"})]}),i.jsxs("div",{className:"sl-stat minor",children:[i.jsx("div",{className:"sl-stat-num",children:je.minor}),i.jsx("div",{className:"sl-stat-lbl",children:"Degraded"})]}),i.jsxs("div",{className:"sl-stat fault",children:[i.jsx("div",{className:"sl-stat-num",children:je.faulty}),i.jsx("div",{className:"sl-stat-lbl",children:"Critical"})]}),i.jsxs("div",{className:"sl-stat off",children:[i.jsx("div",{className:"sl-stat-num",children:je.offline}),i.jsx("div",{className:"sl-stat-lbl",children:"Offline"})]})]}),i.jsxs("div",{className:"sl-health-bar-wrap",children:[i.jsxs("div",{className:"sl-health-bar-label",children:[i.jsx("span",{children:"Lab Health"}),i.jsxs("span",{style:{color:"var(--green)"},children:[Je,"%"]})]}),i.jsxs("div",{className:"sl-health-bar-track",children:[i.jsx("div",{className:"sl-health-segment",style:{width:`${je.ok/ut*100}%`,background:"var(--green)"}}),i.jsx("div",{className:"sl-health-segment",style:{width:`${je.minor/ut*100}%`,background:"var(--amber)"}}),i.jsx("div",{className:"sl-health-segment",style:{width:`${je.faulty/ut*100}%`,background:"var(--red)"}})]})]})]}),i.jsxs("div",{className:"sl-sb-section",children:[i.jsx("div",{className:"sl-sec-title",children:"Selected System"}),i.jsx("div",{className:`sl-sel-box ${u?"active":""}`,children:u?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"sl-sel-header",children:[i.jsx("div",{className:"sl-sel-name",children:I}),i.jsxs("div",{className:`sl-badge ${C==null?void 0:C.frontendStatus}`,children:[i.jsx("div",{className:"sl-badge-dot"}),Jo(C==null?void 0:C.frontendStatus)]})]}),i.jsxs("div",{className:"sl-sel-spec",children:["Row ",Math.ceil(u/8)," · Seat ",u,i.jsx("br",{}),"Lab 3 — Block B"]}),i.jsxs("button",{className:"sl-report-btn",onClick:()=>h(!0),children:["⚠ Report Issue for ",I]})]}):i.jsxs("div",{className:"sl-sel-placeholder",children:[i.jsx("span",{className:"sl-sel-arrow",children:"←"}),"Click a system on the map"]})})]}),i.jsxs("div",{className:"sl-sb-section",style:{flex:1,borderBottom:"none"},children:[i.jsx("div",{className:"sl-sec-title",children:"Recent Issues"}),i.jsx("div",{className:"sl-issues",children:a?i.jsx("div",{className:"sl-empty",children:"Loading…"}):o.length===0?i.jsx("div",{className:"sl-empty",children:"No issues reported"}):o.slice(0,8).map((N,H)=>{var V;return i.jsxs("div",{className:`sl-issue ${N.frontendStatus}`,style:{animationDelay:`${H*40}ms`},children:[i.jsxs("div",{className:"sl-issue-top",children:[i.jsx("span",{className:"sl-issue-id",children:N.pcLabel}),i.jsx("span",{className:"sl-issue-time",children:(V=N.reportedAt)==null?void 0:V.slice(11,16)})]}),i.jsx("div",{className:"sl-issue-desc",children:N.issueType}),i.jsx("span",{className:`sl-tag ${N.frontendStatus}`,children:N.frontendStatus==="open"?"Open":N.frontendStatus==="prog"?"In Progress":"Fixed"})]},N.id??H)})})]})]})]}),i.jsx("div",{style:{padding:"0 24px",maxWidth:1200,margin:"0 auto",width:"100%"},children:i.jsx(Pp,{})}),i.jsx("div",{className:`sl-overlay ${g?"open":""}`,onClick:N=>N.target===N.currentTarget&&$(),children:i.jsxs("div",{className:"sl-modal",children:[i.jsxs("div",{className:"sl-m-head",children:[i.jsxs("div",{className:"sl-m-title-wrap",children:[i.jsx("div",{className:"sl-m-icon",children:"⚠"}),i.jsxs("div",{children:[i.jsx("div",{className:"sl-m-title",children:"Report Issue"}),i.jsx("div",{className:"sl-m-subtitle",children:"Notify the lab administrator"})]})]}),i.jsxs("div",{className:"sl-m-head-right",children:[i.jsx("span",{className:"sl-m-pcbadge",children:I}),i.jsx("button",{className:"sl-m-close",onClick:$,children:"✕"})]})]}),i.jsxs("div",{className:"sl-m-body",children:[i.jsxs("div",{className:"sl-fg",children:[i.jsx("label",{children:"Your Name"}),i.jsx("input",{className:`sl-input ${L&&!D?"err":""}`,placeholder:"e.g. Ravi Kumar",value:D,onChange:N=>{p(N.target.value),T("")}})]}),i.jsxs("div",{className:"sl-fg",children:[i.jsx("label",{children:"Roll Number"}),i.jsx("input",{className:`sl-input ${L&&!c?"err":""}`,placeholder:"e.g. 22CS047",value:c,onChange:N=>{f(N.target.value),T("")}})]}),i.jsxs("div",{className:"sl-fg",children:[i.jsx("label",{children:"Issue Type — select all that apply"}),i.jsx("div",{className:"sl-chips",children:Ip.map(N=>i.jsx("div",{className:`sl-chip ${S.includes(N)?"on":""}`,onClick:()=>j(H=>H.includes(N)?H.filter(V=>V!==N):[...H,N]),children:N},N))})]}),i.jsxs("div",{className:"sl-fg",children:[i.jsx("label",{children:"Severity"}),i.jsxs("select",{className:`sl-select ${L&&!x?"err":""}`,value:x,onChange:N=>{E(N.target.value),T("")},children:[i.jsx("option",{value:"",children:"Select severity…"}),i.jsx("option",{value:"MINOR",children:"Minor — small inconvenience"}),i.jsx("option",{value:"MEDIUM",children:"Medium — affects work"}),i.jsx("option",{value:"HIGH",children:"High — cannot use system"}),i.jsx("option",{value:"CRITICAL",children:"Critical — safety concern"})]})]}),i.jsxs("div",{className:"sl-fg",children:[i.jsx("label",{children:"Additional Details (optional)"}),i.jsx("textarea",{className:"sl-textarea",rows:2,placeholder:"Any extra info for the admin…",value:b,onChange:N=>P(N.target.value)})]})]}),i.jsxs("div",{className:"sl-m-foot",children:[(L||Ve)&&i.jsx("span",{className:"sl-err-msg",children:L||Ve}),i.jsx("button",{className:"sl-btn-cancel",onClick:$,children:"Cancel"}),i.jsx("button",{className:"sl-btn-submit",disabled:ue,onClick:W,children:ue?"Submitting…":"Submit Report →"})]})]})}),i.jsxs("div",{className:`sl-toast ${m?"show":""}`,children:[i.jsx("div",{className:"sl-toast-check",children:"✓"}),"Reported — admin notified!"]})]})]})}const Op=e=>({CRITICAL:"#ff3860",HIGH:"#ff6b35",MEDIUM:"#ffdd57",MINOR:"#00ff87"})[e]??"#8896b3",Fp=e=>({OPEN:{label:"Open",bg:"#ff386020",color:"#ff3860"},IN_PROGRESS:{label:"In Progress",bg:"#ffdd5720",color:"#ffdd57"},FIXED:{label:"Fixed",bg:"#00ff8720",color:"#00ff87"},CLOSED:{label:"Closed",bg:"#58596d20",color:"#8896b3"}})[e]??{label:e,bg:"#161c2a",color:"#8896b3"};function Dp(e){return e?new Date(e).toLocaleString("en-IN",{day:"2-digit",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}):"—"}function $p({computerId:e,pcLabel:t,onClose:n}){const{history:r,loading:l,error:o}=bp(e);return i.jsxs(i.Fragment,{children:[i.jsx("div",{onClick:n,style:{position:"fixed",inset:0,zIndex:999,background:"rgba(0,0,0,0.7)",backdropFilter:"blur(4px)"}}),i.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",zIndex:1e3,transform:"translate(-50%,-50%)",width:"min(720px, 95vw)",maxHeight:"80vh",background:"#0d1117",border:"1px solid #1f2a3f",borderRadius:"18px",display:"flex",flexDirection:"column",boxShadow:"0 24px 80px rgba(0,212,255,0.12)"},children:[i.jsxs("div",{style:{padding:"20px 24px 16px",borderBottom:"1px solid #1f2a3f",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"rgba(0,212,255,0.12)",border:"1px solid rgba(0,212,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18},children:"🖥️"}),i.jsxs("div",{children:[i.jsxs("div",{style:{fontFamily:"'IBM Plex Mono',monospace",color:"#00d4ff",fontWeight:600,fontSize:"1rem"},children:[t," — Maintenance History"]}),i.jsx("div",{style:{color:"#8896b3",fontSize:"0.75rem",marginTop:2},children:l?"Loading…":`${r.length} issue${r.length!==1?"s":""} on record`})]}),i.jsx("button",{onClick:n,style:{marginLeft:"auto",background:"none",border:"none",color:"#8896b3",cursor:"pointer",fontSize:"1.2rem",lineHeight:1,padding:"4px 8px",borderRadius:6,transition:"color .2s"},onMouseEnter:a=>a.target.style.color="#e8edf8",onMouseLeave:a=>a.target.style.color="#8896b3",children:"✕"})]}),i.jsxs("div",{style:{overflowY:"auto",padding:"16px 24px 24px"},children:[l&&i.jsx("div",{style:{color:"#8896b3",textAlign:"center",padding:"40px 0"},children:"Loading history…"}),o&&i.jsx("div",{style:{color:"#ff3860",textAlign:"center",padding:"40px 0"},children:o}),!l&&!o&&r.length===0&&i.jsxs("div",{style:{color:"#8896b3",textAlign:"center",padding:"48px 0"},children:[i.jsx("div",{style:{fontSize:"2rem",marginBottom:8},children:"✅"}),"No issues reported on this PC yet."]}),!l&&r.length>0&&i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:{position:"absolute",left:15,top:8,bottom:8,width:2,background:"#1f2a3f"}}),r.map((a,s)=>{var g;const u=Fp(a.status),d=Op(a.severity);return i.jsxs("div",{style:{display:"flex",gap:16,marginBottom:s<r.length-1?20:0},children:[i.jsx("div",{style:{flexShrink:0,width:32,height:32,borderRadius:"50%",background:"#0d1117",border:`2px solid ${d}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:d,fontWeight:700,zIndex:1},children:((g=a.severity)==null?void 0:g[0])??"?"}),i.jsxs("div",{style:{flex:1,background:"#111520",border:"1px solid #1f2a3f",borderRadius:12,padding:"12px 16px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[i.jsx("span",{style:{fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.8rem",fontWeight:600,color:"#e8edf8"},children:a.issueType}),i.jsx("span",{style:{marginLeft:"auto",fontSize:"0.65rem",fontWeight:600,padding:"2px 8px",borderRadius:20,background:u.bg,color:u.color,fontFamily:"'IBM Plex Mono',monospace"},children:u.label}),a.escalated&&i.jsx("span",{style:{fontSize:"0.6rem",fontWeight:700,padding:"2px 7px",borderRadius:20,background:"rgba(255,107,53,0.2)",color:"#ff6b35",fontFamily:"'IBM Plex Mono',monospace"},children:"⚡ ESCALATED"})]}),a.description&&i.jsx("div",{style:{color:"#8896b3",fontSize:"0.78rem",marginBottom:8},children:a.description}),i.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",fontSize:"0.7rem",color:"#3e4f6e",fontFamily:"'IBM Plex Mono',monospace"},children:[i.jsxs("span",{children:["👤 ",a.studentName," · ",a.rollNumber]}),i.jsxs("span",{children:["📅 ",Dp(a.reportedAt)]}),a.resolutionLabel&&i.jsxs("span",{style:{color:"#00ff87"},children:["⏱ Resolved in ",a.resolutionLabel]}),a.resolvedBy&&i.jsxs("span",{children:["🔧 ",a.resolvedBy]})]}),a.notes&&i.jsx("div",{style:{marginTop:8,padding:"6px 10px",background:"rgba(0,212,255,0.05)",borderRadius:6,fontSize:"0.72rem",color:"#8896b3",borderLeft:"2px solid #1f2a3f"},children:a.notes})]})]},a.id)})]})]})]})]})}function Ap(e,t=240){return`https://api.qrserver.com/v1/create-qr-code/?size=${t}x${t}&data=${encodeURIComponent(e)}&bgcolor=0d1117&color=00d4ff&margin=10`}function Bp({pcNumber:e,pcLabel:t,baseUrl:n,onClose:r}){const o=`${n||window.location.origin}/?pc=${e}`,a=Ap(o,240),[s,u]=w.useState(!1),d=()=>{navigator.clipboard.writeText(o).then(()=>{u(!0),setTimeout(()=>u(!1),2e3)})};return i.jsxs(i.Fragment,{children:[i.jsx("div",{onClick:r,style:{position:"fixed",inset:0,zIndex:999,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(4px)"}}),i.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",zIndex:1e3,transform:"translate(-50%,-50%)",width:"min(380px, 92vw)",background:"#0d1117",border:"1px solid #1f2a3f",borderRadius:18,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,212,255,0.15)"},children:[i.jsxs("div",{style:{padding:"18px 20px 14px",borderBottom:"1px solid #1f2a3f",display:"flex",alignItems:"center",gap:10},children:[i.jsx("span",{style:{fontSize:"1.2rem"},children:"📱"}),i.jsxs("div",{children:[i.jsxs("div",{style:{fontFamily:"'IBM Plex Mono',monospace",color:"#00d4ff",fontWeight:600,fontSize:"0.9rem"},children:["QR Code — ",t]}),i.jsx("div",{style:{color:"#8896b3",fontSize:"0.7rem",marginTop:2},children:"Students scan to report an issue directly"})]}),i.jsx("button",{onClick:r,style:{marginLeft:"auto",background:"none",border:"none",color:"#8896b3",cursor:"pointer",fontSize:"1.1rem",padding:"4px 8px"},children:"✕"})]}),i.jsx("div",{style:{padding:"28px 0 16px",display:"flex",justifyContent:"center"},children:i.jsx("div",{style:{padding:12,background:"#111520",border:"1px solid #1f2a3f",borderRadius:14},children:i.jsx("img",{src:a,alt:`QR for ${t}`,width:200,height:200,style:{display:"block",borderRadius:6}})})}),i.jsx("div",{style:{padding:"0 20px"},children:i.jsx("div",{style:{background:"#111520",border:"1px solid #1f2a3f",borderRadius:10,padding:"8px 12px",fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.7rem",color:"#8896b3",wordBreak:"break-all"},children:o})}),i.jsxs("div",{style:{padding:"14px 20px 22px",display:"flex",gap:10},children:[i.jsx("button",{onClick:d,style:{flex:1,padding:"10px 0",borderRadius:10,cursor:"pointer",background:s?"rgba(0,255,135,0.15)":"rgba(0,212,255,0.12)",border:`1px solid ${s?"rgba(0,255,135,0.3)":"rgba(0,212,255,0.25)"}`,color:s?"#00ff87":"#00d4ff",fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.8rem",fontWeight:600,transition:"all .2s"},children:s?"✓ Copied!":"📋 Copy Link"}),i.jsx("a",{href:a,download:`${t}-qr.png`,style:{flex:1,padding:"10px 0",borderRadius:10,cursor:"pointer",background:"rgba(168,85,247,0.12)",border:"1px solid rgba(168,85,247,0.25)",color:"#a855f7",textDecoration:"none",fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.8rem",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s"},children:"⬇ Download"})]}),i.jsxs("div",{style:{textAlign:"center",paddingBottom:16,fontSize:"0.68rem",color:"#3e4f6e"},children:["Print and place on ",t," for quick reporting"]})]})]})}function Up({labId:e}){const{pcs:t,loading:n,error:r}=Np(e),l=t.length>0?t[0].totalIssues:1;return i.jsxs("div",{style:{background:"#0d1117",border:"1px solid #1f2a3f",borderRadius:16,padding:"18px 20px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[i.jsx("span",{style:{fontSize:"1rem"},children:"🔥"}),i.jsx("span",{style:{fontFamily:"'IBM Plex Mono',monospace",color:"#00d4ff",fontWeight:600,fontSize:"0.85rem"},children:"Most Problematic PCs"}),!n&&t.length>0&&i.jsxs("span",{style:{marginLeft:"auto",fontSize:"0.65rem",color:"#8896b3",fontFamily:"'IBM Plex Mono',monospace"},children:["top ",t.length]})]}),n&&i.jsx("div",{style:{color:"#3e4f6e",fontSize:"0.8rem",textAlign:"center",padding:"24px 0"},children:"Loading analytics…"}),r&&i.jsx("div",{style:{color:"#ff3860",fontSize:"0.8rem"},children:r}),!n&&t.length===0&&!r&&i.jsx("div",{style:{color:"#8896b3",fontSize:"0.8rem",textAlign:"center",padding:"24px 0"},children:"No issue data yet."}),t.map((o,a)=>{const s=Math.round(o.totalIssues/l*100),u=o.openIssues>0,d=a===0?"#ff3860":a===1?"#ff6b35":a===2?"#ffdd57":"#8896b3";return i.jsxs("div",{style:{marginBottom:a<t.length-1?14:0},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:5},children:[i.jsx("span",{style:{fontFamily:"'IBM Plex Mono',monospace",fontWeight:700,fontSize:"0.7rem",color:d,width:16,textAlign:"right"},children:a+1}),i.jsx("span",{style:{fontFamily:"'IBM Plex Mono',monospace",fontWeight:600,fontSize:"0.78rem",color:"#e8edf8",minWidth:52},children:o.pcLabel}),u&&i.jsxs("span",{style:{fontSize:"0.6rem",fontWeight:700,padding:"1px 6px",borderRadius:20,background:"rgba(255,56,96,0.15)",color:"#ff3860",fontFamily:"'IBM Plex Mono',monospace"},children:[o.openIssues," open"]}),i.jsxs("span",{style:{marginLeft:"auto",fontFamily:"'IBM Plex Mono',monospace",fontSize:"0.72rem",color:"#8896b3"},children:[o.totalIssues," issue",o.totalIssues!==1?"s":""]})]}),i.jsx("div",{style:{height:5,background:"#161c2a",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{style:{height:"100%",borderRadius:4,width:`${s}%`,background:a===0?"linear-gradient(90deg,#ff3860,#ff6b35)":a===1?"linear-gradient(90deg,#ff6b35,#ffdd57)":"linear-gradient(90deg,#00d4ff80,#a855f780)",transition:"width .5s cubic-bezier(.4,0,.2,1)"}})})]},o.pcNumber)})]})}const Wp=`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Outfit:wght@300;400;500;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

.ad-root{
  --bg:#070910;--bg2:#0d1018;--bg3:#121520;--bg4:#181c2a;
  --rim:#1e2438;--rim2:#28304a;
  --cyan:#00d4ff;--cdim:rgba(0,212,255,0.08);--cglow:rgba(0,212,255,0.25);
  --green:#00e676;--gdim:rgba(0,230,118,0.08);--gglow:rgba(0,230,118,0.25);
  --amber:#ffab00;--adim:rgba(255,171,0,0.08);--aglow:rgba(255,171,0,0.25);
  --red:#ff3d57;--rdim:rgba(255,61,87,0.08);--rglow:rgba(255,61,87,0.25);
  --purple:#a855f7;--pdim:rgba(168,85,247,0.1);
  --text:#e8edf8;--text2:#6b7fa3;--text3:#3d4d6a;
  --mono:'JetBrains Mono',monospace;--body:'Outfit',sans-serif;
  font-family:var(--body);
  background:var(--bg);
  color:var(--text);
  min-height:100vh;
  display:flex;flex-direction:column;
  position:relative;overflow-x:hidden;
}

.ad-root::before{
  content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
  background:
    radial-gradient(ellipse 80% 50% at 15% 0%,rgba(0,212,255,0.04) 0%,transparent 60%),
    radial-gradient(ellipse 60% 40% at 85% 100%,rgba(168,85,247,0.04) 0%,transparent 60%),
    repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.012) 40px,rgba(255,255,255,0.012) 41px),
    repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.012) 40px,rgba(255,255,255,0.012) 41px);
}

/* ── NAV ── */
.ad-nav{
  position:sticky;top:0;z-index:50;height:58px;
  background:rgba(7,9,16,0.96);backdrop-filter:blur(24px);
  border-bottom:1px solid var(--rim);
  display:flex;align-items:center;padding:0 1.8rem;gap:12px;
  box-shadow:0 1px 0 rgba(0,212,255,0.06);
}
.ad-logo{display:flex;align-items:center;gap:10px;font-family:var(--mono);font-size:0.88rem;font-weight:700;letter-spacing:0.1em;}
.ad-logo-icon{
  width:32px;height:32px;border-radius:9px;
  background:linear-gradient(135deg,var(--cyan),var(--purple));
  display:flex;align-items:center;justify-content:center;font-size:15px;
  box-shadow:0 0 20px rgba(0,212,255,0.35),0 0 40px rgba(168,85,247,0.15);
}
.ad-logo span{
  background:linear-gradient(90deg,var(--cyan),var(--purple));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.ad-logo-sub{
  font-family:var(--mono);font-size:0.58rem;color:var(--text3);
  letter-spacing:0.25em;text-transform:uppercase;
  background:var(--bg3);border:1px solid var(--rim2);
  border-radius:4px;padding:2px 8px;
}
.ad-spacer{flex:1;}
.ad-clock{font-family:var(--mono);font-size:0.68rem;color:var(--text3);letter-spacing:0.05em;}
.ad-btn{
  background:transparent;border:1px solid var(--rim2);
  border-radius:8px;padding:6px 14px;
  font-family:var(--mono);font-size:0.7rem;
  color:var(--text2);cursor:pointer;transition:all 0.2s;
}
.ad-btn:hover{border-color:var(--cyan);color:var(--cyan);background:var(--cdim);box-shadow:0 0 12px rgba(0,212,255,0.1);}

/* ── TABS ── */
.ad-tabs{
  background:rgba(13,16,24,0.98);
  border-bottom:1px solid var(--rim);
  padding:0 1.8rem;
  display:flex;gap:0;align-items:flex-end;
  position:relative;z-index:9;
}
.ad-tab{
  font-family:var(--mono);font-size:0.68rem;letter-spacing:0.1em;
  padding:13px 18px;color:var(--text3);cursor:pointer;
  border-bottom:2px solid transparent;transition:all 0.2s;
  white-space:nowrap;text-transform:uppercase;
}
.ad-tab:hover{color:var(--text2);}
.ad-tab.active{color:var(--cyan);border-bottom-color:var(--cyan);text-shadow:0 0 12px rgba(0,212,255,0.4);}

/* ── PAGE ── */
.ad-page{flex:1;padding:1.8rem 1.8rem;position:relative;z-index:1;}

/* ── KPI CARDS ── */
.ad-kpi-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:1.6rem;}
.ad-kpi{
  background:var(--bg2);
  border:1px solid var(--rim);
  border-radius:12px;
  padding:18px 16px 15px;
  transition:border-color 0.2s,transform 0.18s,box-shadow 0.2s;
  position:relative;overflow:hidden;
}
.ad-kpi::before{
  content:'';position:absolute;
  top:0;left:0;right:0;height:2px;border-radius:12px 12px 0 0;
}
.ad-kpi::after{
  content:'';position:absolute;
  inset:0;border-radius:12px;opacity:0;
  transition:opacity 0.2s;pointer-events:none;
}
.ad-kpi:hover{transform:translateY(-3px);}
.ad-kpi:hover::after{opacity:1;}
.ad-kpi.c-green::before{background:linear-gradient(90deg,var(--green),transparent);box-shadow:0 0 10px var(--green);}
.ad-kpi.c-amber::before{background:linear-gradient(90deg,var(--amber),transparent);box-shadow:0 0 10px var(--amber);}
.ad-kpi.c-red::before{background:linear-gradient(90deg,var(--red),transparent);box-shadow:0 0 10px var(--red);}
.ad-kpi.c-cyan::before{background:linear-gradient(90deg,var(--cyan),transparent);box-shadow:0 0 10px var(--cyan);}
.ad-kpi.c-green:hover{border-color:rgba(0,230,118,0.3);box-shadow:0 8px 24px rgba(0,0,0,0.3),0 0 0 1px rgba(0,230,118,0.1);}
.ad-kpi.c-amber:hover{border-color:rgba(255,171,0,0.3);box-shadow:0 8px 24px rgba(0,0,0,0.3),0 0 0 1px rgba(255,171,0,0.1);}
.ad-kpi.c-red:hover{border-color:rgba(255,61,87,0.3);box-shadow:0 8px 24px rgba(0,0,0,0.3),0 0 0 1px rgba(255,61,87,0.1);}
.ad-kpi.c-cyan:hover{border-color:rgba(0,212,255,0.3);box-shadow:0 8px 24px rgba(0,0,0,0.3),0 0 0 1px rgba(0,212,255,0.1);}
.ad-kpi-val{font-family:var(--mono);font-size:1.9rem;font-weight:700;line-height:1;margin-bottom:5px;}
.ad-kpi.c-green .ad-kpi-val{color:var(--green);}
.ad-kpi.c-amber .ad-kpi-val{color:var(--amber);}
.ad-kpi.c-red .ad-kpi-val{color:var(--red);}
.ad-kpi.c-cyan .ad-kpi-val{color:var(--cyan);}
.ad-kpi-lbl{font-size:0.72rem;color:var(--text2);}
.ad-kpi-sub{font-family:var(--mono);font-size:0.58rem;color:var(--text3);margin-top:5px;letter-spacing:0.05em;}

/* ── CARDS ── */
.ad-grid2{display:grid;grid-template-columns:1fr 340px;gap:14px;}
.ad-card{
  background:var(--bg2);
  border:1px solid var(--rim);
  border-radius:14px;overflow:hidden;margin-bottom:14px;
  transition:border-color 0.2s;
}
.ad-card:hover{border-color:var(--rim2);}
.ad-card-head{
  padding:13px 16px;
  border-bottom:1px solid var(--rim);
  display:flex;align-items:center;justify-content:space-between;gap:10px;
  background:linear-gradient(90deg,var(--bg3),var(--bg2));
}
.ad-card-title{
  font-family:var(--mono);font-size:0.65rem;
  color:var(--text3);letter-spacing:0.18em;text-transform:uppercase;
  display:flex;align-items:center;gap:6px;
}
.ad-card-title::before{content:'//';color:var(--cyan);opacity:0.5;font-size:0.55rem;}
.ad-card-body{padding:14px 16px;}

/* ── TABLE ── */
.ad-tbl{width:100%;border-collapse:collapse;}
.ad-tbl th{
  font-family:var(--mono);font-size:0.58rem;color:var(--text3);
  text-transform:uppercase;letter-spacing:0.16em;
  padding:0 10px 10px;text-align:left;
  border-bottom:1px solid var(--rim);white-space:nowrap;
}
.ad-tbl td{padding:10px;border-bottom:1px solid var(--rim);font-size:0.8rem;vertical-align:middle;}
.ad-tbl tr:last-child td{border-bottom:none;}
.ad-tbl tr{transition:background 0.15s;cursor:pointer;}
.ad-tbl tr:hover td{background:var(--bg3);}
.ad-tbl-id{font-family:var(--mono);font-size:0.72rem;font-weight:700;color:var(--cyan);}
.ad-tbl-desc{color:var(--text2);max-width:200px;}
.ad-tbl-student{font-family:var(--mono);font-size:0.65rem;color:var(--text3);}
.ad-tbl-time{font-family:var(--mono);font-size:0.62rem;color:var(--text3);white-space:nowrap;}

/* STATUS TAGS */
.ad-tag{
  display:inline-flex;align-items:center;padding:3px 10px;
  border-radius:20px;font-family:var(--mono);font-size:0.58rem;
  font-weight:700;border:1px solid;white-space:nowrap;
}
.ad-tag.open{background:var(--rdim);color:var(--red);border-color:rgba(255,61,87,0.25);}
.ad-tag.prog{background:var(--adim);color:var(--amber);border-color:rgba(255,171,0,0.25);}
.ad-tag.fixed{background:var(--gdim);color:var(--green);border-color:rgba(0,230,118,0.25);}

/* SEVERITY BADGES */
.ad-sev{display:inline-block;padding:2px 8px;border-radius:4px;font-family:var(--mono);font-size:0.56rem;font-weight:700;}
.ad-sev.CRITICAL{background:rgba(255,61,87,0.15);color:var(--red);border:1px solid rgba(255,61,87,0.2);}
.ad-sev.HIGH{background:rgba(255,171,0,0.12);color:var(--amber);border:1px solid rgba(255,171,0,0.2);}
.ad-sev.MEDIUM{background:rgba(0,212,255,0.08);color:var(--cyan);border:1px solid rgba(0,212,255,0.15);}
.ad-sev.MINOR{background:var(--bg4);color:var(--text3);border:1px solid var(--rim);}

/* ACTION BUTTONS */
.ad-action-row{display:flex;gap:5px;}
.ad-btn-sm{
  padding:4px 10px;border-radius:6px;
  border:1px solid var(--rim);background:transparent;
  color:var(--text2);font-family:var(--mono);font-size:0.58rem;
  cursor:pointer;transition:all 0.18s;white-space:nowrap;
}
.ad-btn-sm:disabled{opacity:0.35;cursor:not-allowed;}
.ad-btn-sm.green:hover:not(:disabled){border-color:var(--green);color:var(--green);background:var(--gdim);box-shadow:0 0 8px rgba(0,230,118,0.15);}
.ad-btn-sm.amber:hover:not(:disabled){border-color:var(--amber);color:var(--amber);background:var(--adim);box-shadow:0 0 8px rgba(255,171,0,0.15);}
.ad-btn-sm.red:hover:not(:disabled){border-color:var(--red);color:var(--red);background:var(--rdim);box-shadow:0 0 8px rgba(255,61,87,0.15);}

/* FILTER BAR */
.ad-filter-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
.ad-filter-chip{
  padding:5px 13px;border-radius:20px;
  border:1px solid var(--rim);background:var(--bg3);
  color:var(--text2);font-family:var(--mono);font-size:0.62rem;
  cursor:pointer;transition:all 0.18s;letter-spacing:0.05em;
}
.ad-filter-chip:hover{border-color:var(--rim2);color:var(--text);background:var(--bg4);}
.ad-filter-chip.on{border-color:var(--cyan);color:var(--cyan);background:var(--cdim);box-shadow:0 0 10px rgba(0,212,255,0.1);}
.ad-search{
  flex:1;min-width:160px;background:var(--bg3);
  border:1px solid var(--rim);border-radius:9px;
  padding:7px 13px;color:var(--text);
  font-family:var(--mono);font-size:0.7rem;outline:none;transition:border-color 0.2s,box-shadow 0.2s;
}
.ad-search:focus{border-color:var(--cyan);box-shadow:0 0 0 3px rgba(0,212,255,0.08);}
.ad-search::placeholder{color:var(--text3);}

/* BAR CHART */
.ad-chart{display:flex;flex-direction:column;gap:9px;}
.ad-bar-row{display:flex;align-items:center;gap:10px;}
.ad-bar-lbl{font-family:var(--mono);font-size:0.6rem;color:var(--text3);width:96px;flex-shrink:0;text-align:right;letter-spacing:0.04em;}
.ad-bar-track{flex:1;height:7px;background:var(--bg4);border-radius:4px;overflow:hidden;}
.ad-bar-fill{height:100%;border-radius:4px;transition:width 0.7s cubic-bezier(.4,0,.2,1);}
.ad-bar-count{font-family:var(--mono);font-size:0.58rem;color:var(--text3);width:22px;text-align:right;flex-shrink:0;}

/* MINI MAP */
.ad-minimap{display:flex;flex-direction:column;gap:8px;}
.ad-minimap-row{display:flex;align-items:center;gap:6px;}
.ad-minimap-lbl{font-family:var(--mono);font-size:0.56rem;color:var(--text3);width:14px;text-align:right;flex-shrink:0;}
.ad-minimap-pcs{display:flex;gap:5px;flex-wrap:wrap;}
.ad-mpc{
  width:28px;height:26px;border-radius:5px;border:1px solid;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-size:0.46rem;
  cursor:pointer;transition:transform 0.15s,box-shadow 0.15s;flex-shrink:0;
  font-weight:600;
}
.ad-mpc.ok{background:linear-gradient(145deg,#081812,#061510);border-color:#143322;color:var(--green);}
.ad-mpc.minor{background:linear-gradient(145deg,#1a1200,#140e00);border-color:#3a2800;color:var(--amber);}
.ad-mpc.faulty{background:linear-gradient(145deg,#160407,#110306);border-color:#3a0d14;color:var(--red);}
.ad-mpc.offline{background:var(--bg3);border-color:var(--rim);color:var(--text3);opacity:0.35;cursor:default;}
.ad-mpc:not(.offline):hover{transform:scale(1.2);box-shadow:0 4px 12px rgba(0,0,0,0.5);}

/* ACTIVITY FEED */
.ad-activity{display:flex;flex-direction:column;}
.ad-act-item{
  display:flex;gap:12px;align-items:flex-start;
  padding:10px 0;border-bottom:1px solid var(--rim);
  transition:opacity 0.2s;
}
.ad-act-item:last-child{border-bottom:none;}
.ad-act-item:hover{opacity:0.85;}
.ad-act-dot{width:8px;height:8px;border-radius:50%;margin-top:5px;flex-shrink:0;}
.ad-act-dot.fixed{background:var(--green);box-shadow:0 0 6px var(--green);}
.ad-act-dot.prog{background:var(--amber);box-shadow:0 0 6px var(--amber);}
.ad-act-dot.open{background:var(--red);box-shadow:0 0 6px var(--red);}
.ad-act-main{flex:1;}
.ad-act-line1{font-size:0.76rem;color:var(--text);margin-bottom:2px;line-height:1.4;}
.ad-act-line2{font-family:var(--mono);font-size:0.6rem;color:var(--text3);}

/* DETAIL PANEL */
.ad-detail{
  background:var(--bg2);
  border:1px solid var(--rim);
  border-radius:14px;padding:18px;
  box-shadow:0 4px 20px rgba(0,0,0,0.3);
}
.ad-detail-id{
  font-family:var(--mono);font-size:1.1rem;font-weight:700;
  background:linear-gradient(90deg,var(--cyan),var(--purple));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  margin-bottom:8px;letter-spacing:0.06em;
}
.ad-detail-row{
  display:flex;justify-content:space-between;align-items:center;
  padding:7px 0;border-bottom:1px solid var(--rim);font-size:0.78rem;
}
.ad-detail-row:last-child{border-bottom:none;}
.ad-detail-key{color:var(--text3);font-family:var(--mono);font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;}
.ad-detail-val{color:var(--text);}
.ad-detail-actions{display:flex;flex-direction:column;gap:7px;margin-top:14px;}
.ad-btn-full{
  width:100%;padding:10px 0;border-radius:9px;border:1px solid;
  font-family:var(--mono);font-size:0.7rem;font-weight:700;
  cursor:pointer;transition:all 0.2s;letter-spacing:0.06em;
}
.ad-btn-full.amber{background:var(--adim);border-color:rgba(255,171,0,0.3);color:var(--amber);}
.ad-btn-full.amber:hover{background:rgba(255,171,0,0.15);border-color:var(--amber);box-shadow:0 4px 16px rgba(255,171,0,0.15);transform:translateY(-1px);}
.ad-btn-full.green{background:var(--gdim);border-color:rgba(0,230,118,0.3);color:var(--green);}
.ad-btn-full.green:hover{background:rgba(0,230,118,0.15);border-color:var(--green);box-shadow:0 4px 16px rgba(0,230,118,0.15);transform:translateY(-1px);}
.ad-btn-full.red{background:var(--rdim);border-color:rgba(255,61,87,0.3);color:var(--red);}
.ad-btn-full.red:hover{background:rgba(255,61,87,0.15);border-color:var(--red);box-shadow:0 4px 16px rgba(255,61,87,0.15);transform:translateY(-1px);}

/* DONUT */
.ad-donut-wrap{display:flex;align-items:center;gap:20px;}
.ad-donut{width:84px;height:84px;border-radius:50%;flex-shrink:0;position:relative;display:flex;align-items:center;justify-content:center;}
.ad-donut-inner{position:absolute;width:56px;height:56px;border-radius:50%;background:var(--bg2);display:flex;flex-direction:column;align-items:center;justify-content:center;}
.ad-donut-pct{font-family:var(--mono);font-size:0.95rem;font-weight:700;color:var(--green);line-height:1;}
.ad-donut-sub{font-family:var(--mono);font-size:0.46rem;color:var(--text3);letter-spacing:0.06em;}
.ad-donut-legend{display:flex;flex-direction:column;gap:6px;}
.ad-donut-item{display:flex;align-items:center;gap:7px;font-size:0.72rem;color:var(--text2);}
.ad-donut-swatch{width:8px;height:8px;border-radius:2px;flex-shrink:0;}

/* TOAST */
.ad-toast{
  position:fixed;bottom:24px;right:24px;z-index:200;
  background:linear-gradient(135deg,#071a10,#051410);
  border:1px solid rgba(0,230,118,0.35);
  border-radius:11px;padding:13px 20px;
  font-family:var(--mono);font-size:0.7rem;color:var(--green);
  box-shadow:0 12px 32px rgba(0,0,0,0.5),0 0 20px rgba(0,230,118,0.08);
  transform:translateX(calc(100% + 30px));opacity:0;
  transition:all 0.38s cubic-bezier(.34,1.2,.64,1);pointer-events:none;
  display:flex;align-items:center;gap:8px;
}
.ad-toast::before{content:'✓';font-size:1rem;}
.ad-toast.show{transform:translateX(0);opacity:1;}

/* SCROLL */
.ad-scroll{overflow-y:auto;max-height:360px;}
.ad-scroll::-webkit-scrollbar{width:3px;}
.ad-scroll::-webkit-scrollbar-thumb{background:var(--rim2);border-radius:2px;}

/* LOADING */
.ad-loading{
  display:flex;align-items:center;justify-content:center;
  height:180px;gap:12px;
  font-family:var(--mono);font-size:0.68rem;color:var(--text3);letter-spacing:0.12em;
}
.ad-loading::before{
  content:'';width:18px;height:18px;
  border:2px solid var(--rim2);border-top-color:var(--cyan);
  border-radius:50%;animation:adminspin 0.8s linear infinite;
}
@keyframes adminspin{to{transform:rotate(360deg)}}

@media(max-width:760px){
  .ad-grid2{grid-template-columns:1fr;}
  .ad-kpi-row{grid-template-columns:repeat(2,1fr);}
}`,Hp=[{left:[1,2,3,4],right:[5,6,7,8]},{left:[9,10,11,12],right:[13,14,15,16]},{left:[17,18,19,20],right:[21,22,23,24]},{left:[25,26,27,28],right:[29]}],lo=e=>({ok:"Working",faulty:"Not Working",minor:"Minor Issue",offline:"Offline"})[e]??"";function Vp(){const[e,t]=w.useState(new Date);return w.useState(()=>{const n=setInterval(()=>t(new Date),1e3);return()=>clearInterval(n)},[]),i.jsx("span",{className:"ad-clock",children:e.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})})}function Qp({onBack:e}){var Xi,Zi,Ji,qi,ea,ta,na,ra,la;const[t,n]=w.useState("overview"),[r,l]=w.useState("all"),[o,a]=w.useState(""),[s,u]=w.useState(null),[d,g]=w.useState(null),[h,m]=w.useState(null),[k,S]=w.useState(""),[j,D]=w.useState(null),[p,c]=w.useState(null),{stats:f,loading:x,refresh:E}=yp(),{issues:b,loading:P,refresh:L}=_d(),{computers:T,loading:R,refresh:ue,optimisticUpdate:Ve}=Ld(),{log:be,refresh:je}=kp(),ut=()=>{E(),L(),ue(),je()},Je=v=>{S(v),setTimeout(()=>S(""),3e3)},{updateIssue:dt,updatePC:C,actionLoading:I}=Sp(ut),_=async(v,M)=>{await dt(v,M),Je(`Issue → ${M==="prog"?"In Progress":M==="fixed"?"Fixed":"Reopened"}`),u(null)},$=async(v,M)=>{const A=T[v];A&&(Ve(v,M),await C(A.id,M),Je(`${A.pcLabel} → ${lo(M)}`))},W=w.useMemo(()=>b.filter(v=>{var A,Fe,oa;if(r!=="all"&&v.frontendStatus!==r)return!1;const M=o.toLowerCase();return!(M&&!((A=v.pcLabel)!=null&&A.toLowerCase().includes(M))&&!((Fe=v.studentName)!=null&&Fe.toLowerCase().includes(M))&&!((oa=v.issueType)!=null&&oa.toLowerCase().includes(M)))}),[b,r,o]),N=b.find(v=>v.id===s),H=w.useMemo(()=>{const v={};return b.forEach(M=>{v[M.issueType]=(v[M.issueType]||0)+1}),Object.entries(v).sort((M,A)=>A[1]-M[1]).slice(0,6)},[b]),V=Math.max(1,...H.map(([,v])=>v)),ee=(f==null?void 0:f.healthPercent)??0,It=(f==null?void 0:f.working)??0,Ll=(f==null?void 0:f.minor)??0,Ki=(f==null?void 0:f.faulty)??0,_l=(f==null?void 0:f.totalPcs)??29,Id=`conic-gradient(var(--green) 0% ${ee}%, var(--amber) ${ee}% ${ee+Math.round(Ll/_l*100)}%, var(--red) ${ee+Math.round(Ll/_l*100)}% 100%)`,pr=v=>v==="open"?"Open":v==="prog"?"In Progress":"Fixed",Gi=["var(--cyan)","var(--green)","var(--amber)","var(--red)","var(--purple)","var(--text2)"];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Wp}),i.jsxs("div",{className:"ad-root",children:[i.jsxs("nav",{className:"ad-nav",children:[i.jsxs("div",{className:"ad-logo",children:[i.jsx("div",{className:"ad-logo-icon",children:"💻"}),"Smart",i.jsx("span",{children:"Lab"})]}),i.jsx("div",{className:"ad-logo-sub",children:"ADMIN"}),i.jsx("div",{className:"ad-spacer"}),i.jsx(Vp,{}),e&&i.jsx("button",{className:"ad-btn",onClick:e,children:"← Student View"})]}),i.jsx("div",{className:"ad-tabs",children:[["overview","Overview"],["issues","Issues"],["map","Lab Map"],["log","Activity Log"]].map(([v,M])=>i.jsx("div",{className:`ad-tab ${t===v?"active":""}`,onClick:()=>n(v),children:M},v))}),t==="overview"&&i.jsxs("div",{className:"ad-page",children:[i.jsxs("div",{className:"ad-kpi-row",children:[i.jsxs("div",{className:"ad-kpi c-red",children:[i.jsx("div",{className:"ad-kpi-val",children:x?"…":(f==null?void 0:f.openIssues)??0}),i.jsx("div",{className:"ad-kpi-lbl",children:"Open Issues"}),i.jsx("div",{className:"ad-kpi-sub",children:"needs attention"})]}),i.jsxs("div",{className:"ad-kpi c-amber",children:[i.jsx("div",{className:"ad-kpi-val",children:x?"…":(f==null?void 0:f.inProgress)??0}),i.jsx("div",{className:"ad-kpi-lbl",children:"In Progress"}),i.jsx("div",{className:"ad-kpi-sub",children:"being resolved"})]}),i.jsxs("div",{className:"ad-kpi c-green",children:[i.jsx("div",{className:"ad-kpi-val",children:x?"…":(f==null?void 0:f.fixedToday)??0}),i.jsx("div",{className:"ad-kpi-lbl",children:"Fixed Today"}),i.jsx("div",{className:"ad-kpi-sub",children:"resolved issues"})]}),i.jsxs("div",{className:"ad-kpi c-cyan",children:[i.jsx("div",{className:"ad-kpi-val",children:x?"…":Ki}),i.jsx("div",{className:"ad-kpi-lbl",children:"Faulty PCs"}),i.jsx("div",{className:"ad-kpi-sub",children:"not working"})]}),i.jsxs("div",{className:"ad-kpi c-green",children:[i.jsx("div",{className:"ad-kpi-val",children:x?"…":`${ee}%`}),i.jsx("div",{className:"ad-kpi-lbl",children:"Lab Health"}),i.jsxs("div",{className:"ad-kpi-sub",children:[It,"/",_l," working"]})]})]}),i.jsxs("div",{className:"ad-grid2",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"ad-card",children:[i.jsx("div",{className:"ad-card-head",children:i.jsx("span",{className:"ad-card-title",children:"Issues by Type"})}),i.jsx("div",{className:"ad-card-body",children:P?i.jsx("div",{className:"ad-loading",children:"Loading…"}):i.jsx("div",{className:"ad-chart",children:H.map(([v,M],A)=>i.jsxs("div",{className:"ad-bar-row",children:[i.jsx("div",{className:"ad-bar-lbl",children:v}),i.jsx("div",{className:"ad-bar-track",children:i.jsx("div",{className:"ad-bar-fill",style:{width:`${Math.round(M/V*100)}%`,background:Gi[A%Gi.length]}})}),i.jsx("div",{className:"ad-bar-count",children:M})]},v))})})]}),i.jsxs("div",{className:"ad-card",children:[i.jsxs("div",{className:"ad-card-head",children:[i.jsx("span",{className:"ad-card-title",children:"Latest Reports"}),i.jsx("button",{className:"ad-filter-chip on",onClick:()=>n("issues"),children:"View All →"})]}),i.jsx("div",{style:{padding:0},children:i.jsxs("table",{className:"ad-tbl",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"PC"}),i.jsx("th",{children:"Issue"}),i.jsx("th",{children:"Sev"}),i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Actions"})]})}),i.jsx("tbody",{children:b.filter(v=>v.frontendStatus!=="fixed").slice(0,5).map(v=>i.jsxs("tr",{onClick:()=>{u(v.id),n("issues")},children:[i.jsx("td",{className:"ad-tbl-id",children:v.pcLabel}),i.jsx("td",{className:"ad-tbl-desc",children:v.issueType}),i.jsx("td",{children:i.jsx("span",{className:`ad-sev ${v.severity}`,children:v.severity})}),i.jsx("td",{children:i.jsx("span",{className:`ad-tag ${v.frontendStatus}`,children:pr(v.frontendStatus)})}),i.jsx("td",{children:i.jsxs("div",{className:"ad-action-row",onClick:M=>M.stopPropagation(),children:[v.frontendStatus==="open"&&i.jsx("button",{className:"ad-btn-sm amber",disabled:!!I[`issue-${v.id}`],onClick:()=>_(v.id,"prog"),children:"Start"}),v.frontendStatus==="prog"&&i.jsx("button",{className:"ad-btn-sm green",disabled:!!I[`issue-${v.id}`],onClick:()=>_(v.id,"fixed"),children:"Fix ✓"})]})})]},v.id))})]})})]})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"ad-card",style:{marginBottom:14},children:[i.jsx("div",{className:"ad-card-head",children:i.jsx("span",{className:"ad-card-title",children:"PC Health"})}),i.jsx("div",{className:"ad-card-body",children:i.jsxs("div",{className:"ad-donut-wrap",children:[i.jsx("div",{className:"ad-donut",style:{background:Id},children:i.jsxs("div",{className:"ad-donut-inner",children:[i.jsxs("div",{className:"ad-donut-pct",children:[ee,"%"]}),i.jsx("div",{className:"ad-donut-sub",children:"healthy"})]})}),i.jsxs("div",{className:"ad-donut-legend",children:[i.jsxs("div",{className:"ad-donut-item",children:[i.jsx("div",{className:"ad-donut-swatch",style:{background:"var(--green)"}}),"Working (",It,")"]}),i.jsxs("div",{className:"ad-donut-item",children:[i.jsx("div",{className:"ad-donut-swatch",style:{background:"var(--amber)"}}),"Minor (",Ll,")"]}),i.jsxs("div",{className:"ad-donut-item",children:[i.jsx("div",{className:"ad-donut-swatch",style:{background:"var(--red)"}}),"Faulty (",Ki,")"]})]})]})})]}),i.jsxs("div",{className:"ad-card",children:[i.jsx("div",{className:"ad-card-head",children:i.jsx("span",{className:"ad-card-title",children:"Recent Activity"})}),i.jsx("div",{className:"ad-card-body",style:{paddingTop:8},children:i.jsx("div",{className:"ad-activity",children:be.slice(0,6).map((v,M)=>{var A,Fe;return i.jsxs("div",{className:"ad-act-item",children:[i.jsx("div",{className:`ad-act-dot ${(A=v.action)!=null&&A.includes("FIXED")?"fixed":(Fe=v.action)!=null&&Fe.includes("PROGRESS")?"prog":"open"}`}),i.jsxs("div",{className:"ad-act-main",children:[i.jsx("div",{className:"ad-act-line1",children:v.action}),i.jsxs("div",{className:"ad-act-line2",children:[v.performedBy," · ",_n(v.performedAt)," ",_r(v.performedAt)]})]})]},v.id??M)})})})]})]})]}),i.jsx(Up,{})]}),t==="issues"&&i.jsxs("div",{className:"ad-page",children:[i.jsx("div",{className:"ad-card",style:{marginBottom:14},children:i.jsx("div",{className:"ad-card-body",style:{paddingTop:12,paddingBottom:12},children:i.jsxs("div",{className:"ad-filter-bar",children:[i.jsx("input",{className:"ad-search",placeholder:"Search PC, student, issue…",value:o,onChange:v=>a(v.target.value)}),["all","open","prog","fixed"].map(v=>i.jsxs("div",{className:`ad-filter-chip ${r===v?"on":""}`,onClick:()=>l(v),children:[v==="all"?"All":v==="prog"?"In Progress":v.charAt(0).toUpperCase()+v.slice(1),v!=="all"&&i.jsxs(i.Fragment,{children:[" (",b.filter(M=>M.frontendStatus===v).length,")"]})]},v))]})})}),i.jsxs("div",{className:"ad-grid2",children:[i.jsxs("div",{className:"ad-card",children:[i.jsx("div",{className:"ad-card-head",children:i.jsxs("span",{className:"ad-card-title",children:[W.length," Issue",W.length!==1?"s":""]})}),P?i.jsx("div",{className:"ad-loading",children:"Loading…"}):i.jsxs("div",{className:"ad-scroll",children:[i.jsxs("table",{className:"ad-tbl",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"PC"}),i.jsx("th",{children:"Student"}),i.jsx("th",{children:"Issue"}),i.jsx("th",{children:"Sev"}),i.jsx("th",{children:"Date"}),i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Actions"})]})}),i.jsx("tbody",{children:W.map(v=>{var M;return i.jsxs("tr",{onClick:()=>u(v.id),style:{background:s===v.id?"var(--bg4)":void 0},children:[i.jsx("td",{className:"ad-tbl-id",children:v.pcLabel}),i.jsx("td",{className:"ad-tbl-student",children:(M=v.studentName)==null?void 0:M.split(" ")[0]}),i.jsx("td",{className:"ad-tbl-desc",style:{fontSize:"0.75rem"},children:v.issueType}),i.jsx("td",{children:i.jsxs("span",{className:`ad-sev ${v.severity}`,children:[v.severity,v.escalated&&i.jsx("span",{style:{display:"block",fontSize:"0.55rem",color:"#ff6b35",fontFamily:"var(--mono)",marginTop:2},children:"⚡ ESC"})]})}),i.jsxs("td",{className:"ad-tbl-time",children:[_n(v.reportedAt),v.resolutionLabel&&i.jsxs("div",{style:{fontSize:"0.6rem",color:"#00ff87",fontFamily:"var(--mono)",marginTop:2},children:["⏱ ",v.resolutionLabel]})]}),i.jsx("td",{children:i.jsx("span",{className:`ad-tag ${v.frontendStatus}`,children:pr(v.frontendStatus)})}),i.jsx("td",{children:i.jsxs("div",{className:"ad-action-row",onClick:A=>A.stopPropagation(),children:[v.frontendStatus==="open"&&i.jsx("button",{className:"ad-btn-sm amber",disabled:!!I[`issue-${v.id}`],onClick:()=>_(v.id,"prog"),children:"Start"}),v.frontendStatus==="prog"&&i.jsx("button",{className:"ad-btn-sm green",disabled:!!I[`issue-${v.id}`],onClick:()=>_(v.id,"fixed"),children:"Fix ✓"}),v.frontendStatus==="fixed"&&i.jsx("button",{className:"ad-btn-sm red",disabled:!!I[`issue-${v.id}`],onClick:()=>_(v.id,"open"),children:"Reopen"}),i.jsx("button",{title:"PC History",onClick:()=>D({computerId:v.computerId,pcLabel:v.pcLabel}),style:{padding:"3px 7px",borderRadius:6,cursor:"pointer",background:"rgba(168,85,247,0.12)",border:"1px solid rgba(168,85,247,0.25)",color:"#a855f7",fontSize:"0.68rem",fontFamily:"var(--mono)"},children:"📋"}),i.jsx("button",{title:"QR Code",onClick:()=>c({pcNumber:parseInt(v.pcLabel.replace("PC-",""),10),pcLabel:v.pcLabel}),style:{padding:"3px 7px",borderRadius:6,cursor:"pointer",background:"rgba(0,212,255,0.08)",border:"1px solid rgba(0,212,255,0.2)",color:"#00d4ff",fontSize:"0.68rem",fontFamily:"var(--mono)"},children:"📱"})]})})]},v.id)})})]}),!W.length&&i.jsx("div",{style:{textAlign:"center",padding:"2rem",fontFamily:"var(--mono)",fontSize:"0.68rem",color:"var(--text3)",letterSpacing:"0.1em"},children:"no issues match filters"})]})]}),i.jsx("div",{children:N?i.jsxs("div",{className:"ad-detail",children:[i.jsx("div",{className:"ad-detail-id",children:N.pcLabel}),i.jsx("div",{style:{marginBottom:10},children:i.jsx("span",{className:`ad-tag ${N.frontendStatus}`,children:pr(N.frontendStatus)})}),[["Type",N.issueType],["Severity",i.jsx("span",{className:`ad-sev ${N.severity}`,children:N.severity})],["Reported By",N.studentName],["Roll No.",N.rollNumber],["Description",N.description||"—"],["Reported",`${_n(N.reportedAt)} ${_r(N.reportedAt)}`],...N.resolvedAt?[["Resolved",`${_n(N.resolvedAt)} ${_r(N.resolvedAt)}`]]:[]].map(([v,M])=>i.jsxs("div",{className:"ad-detail-row",children:[i.jsx("span",{className:"ad-detail-key",children:v}),i.jsx("span",{className:"ad-detail-val",style:{textAlign:"right",maxWidth:180,fontSize:"0.75rem"},children:M})]},v)),i.jsxs("div",{className:"ad-detail-actions",children:[N.frontendStatus==="open"&&i.jsx("button",{className:"ad-btn-full amber",onClick:()=>_(N.id,"prog"),children:"⚙ Mark In Progress"}),N.frontendStatus==="prog"&&i.jsx("button",{className:"ad-btn-full green",onClick:()=>_(N.id,"fixed"),children:"✓ Mark as Fixed"}),N.frontendStatus==="fixed"&&i.jsx("button",{className:"ad-btn-full red",onClick:()=>_(N.id,"open"),children:"↩ Reopen Issue"})]})]}):i.jsx("div",{className:"ad-card",children:i.jsxs("div",{className:"ad-card-body",style:{textAlign:"center",padding:"2.5rem 1rem",fontFamily:"var(--mono)",fontSize:"0.68rem",color:"var(--text3)",lineHeight:2,letterSpacing:"0.06em"},children:["← select an issue",i.jsx("br",{}),"to see details"]})})})]})]}),t==="map"&&i.jsx("div",{className:"ad-page",children:i.jsxs("div",{className:"ad-grid2",children:[i.jsx("div",{children:i.jsxs("div",{className:"ad-card",children:[i.jsxs("div",{className:"ad-card-head",children:[i.jsx("span",{className:"ad-card-title",children:"Lab 3 — Floor Map"}),i.jsxs("div",{style:{display:"flex",gap:12,fontSize:"0.62rem",fontFamily:"var(--mono)",alignItems:"center"},children:[i.jsx("span",{style:{color:"var(--green)"},children:"● Working"}),i.jsx("span",{style:{color:"var(--amber)"},children:"● Minor"}),i.jsx("span",{style:{color:"var(--red)"},children:"● Faulty"})]})]}),i.jsxs("div",{className:"ad-card-body",children:[i.jsx("div",{style:{textAlign:"center",marginBottom:14,fontFamily:"var(--mono)",fontSize:.58+"rem",color:"var(--cyan)",letterSpacing:"0.2em",opacity:.6},children:"── PROJECTOR / BOARD ──"}),R?i.jsx("div",{className:"ad-loading",children:"Loading…"}):i.jsx("div",{className:"ad-minimap",children:Hp.map((v,M)=>i.jsxs("div",{className:"ad-minimap-row",children:[i.jsx("div",{className:"ad-minimap-lbl",children:M+1}),i.jsxs("div",{className:"ad-minimap-pcs",children:[v.left.map(A=>{var Fe;return i.jsx("div",{className:`ad-mpc ${((Fe=T[A])==null?void 0:Fe.frontendStatus)??"ok"}`,onClick:()=>{g(A),m(T[A])},style:d===A?{outline:"2px solid var(--cyan)",outlineOffset:"2px"}:{},children:String(A).padStart(2,"0")},A)}),i.jsx("div",{style:{width:20,flexShrink:0}}),v.right.map(A=>{var Fe;return i.jsx("div",{className:`ad-mpc ${((Fe=T[A])==null?void 0:Fe.frontendStatus)??"ok"}`,onClick:()=>{g(A),m(T[A])},style:d===A?{outline:"2px solid var(--cyan)",outlineOffset:"2px"}:{},children:String(A).padStart(2,"0")},A)})]})]},M))})]})]})}),i.jsx("div",{children:d?i.jsxs("div",{className:"ad-detail",children:[i.jsx("div",{className:"ad-detail-id",children:h==null?void 0:h.pcLabel}),i.jsx("div",{style:{marginBottom:10},children:i.jsx("span",{className:`ad-tag ${((Xi=T[d])==null?void 0:Xi.frontendStatus)==="ok"?"fixed":((Zi=T[d])==null?void 0:Zi.frontendStatus)==="faulty"?"open":"prog"}`,children:lo((Ji=T[d])==null?void 0:Ji.frontendStatus)})}),[["Status",lo((qi=T[d])==null?void 0:qi.frontendStatus)],["Row",((ea=T[d])==null?void 0:ea.rowName)??"—"],["Side",((ta=T[d])==null?void 0:ta.side)??"—"],["Issues",b.filter(v=>v.computerId===d).length+" total"]].map(([v,M])=>i.jsxs("div",{className:"ad-detail-row",children:[i.jsx("span",{className:"ad-detail-key",children:v}),i.jsx("span",{className:"ad-detail-val",style:{fontSize:"0.75rem"},children:M})]},v)),i.jsxs("div",{className:"ad-detail-actions",children:[((na=T[d])==null?void 0:na.frontendStatus)!=="ok"&&i.jsx("button",{className:"ad-btn-full green",onClick:()=>$(d,"ok"),children:"✓ Mark as Working"}),((ra=T[d])==null?void 0:ra.frontendStatus)!=="faulty"&&i.jsx("button",{className:"ad-btn-full red",onClick:()=>$(d,"faulty"),children:"✕ Mark as Faulty"}),((la=T[d])==null?void 0:la.frontendStatus)!=="offline"&&i.jsx("button",{className:"ad-btn-full red",style:{opacity:.6},onClick:()=>$(d,"offline"),children:"⏻ Set Offline"})]})]}):i.jsx("div",{className:"ad-card",children:i.jsxs("div",{className:"ad-card-body",style:{textAlign:"center",padding:"2.5rem 1rem",fontFamily:"var(--mono)",fontSize:"0.68rem",color:"var(--text3)",lineHeight:2,letterSpacing:"0.06em"},children:["← click any PC",i.jsx("br",{}),"to manage its status"]})})})]})}),t==="log"&&i.jsxs("div",{className:"ad-page",children:[i.jsxs("div",{className:"ad-kpi-row",style:{marginBottom:14},children:[i.jsxs("div",{className:"ad-kpi c-red",children:["  ",i.jsx("div",{className:"ad-kpi-val",children:b.length}),i.jsx("div",{className:"ad-kpi-lbl",children:"Total Reports"})]}),i.jsxs("div",{className:"ad-kpi c-amber",children:[" ",i.jsx("div",{className:"ad-kpi-val",children:b.filter(v=>v.frontendStatus==="open").length}),i.jsx("div",{className:"ad-kpi-lbl",children:"Still Open"})]}),i.jsxs("div",{className:"ad-kpi c-green",children:[" ",i.jsx("div",{className:"ad-kpi-val",children:b.filter(v=>v.frontendStatus==="fixed").length}),i.jsx("div",{className:"ad-kpi-lbl",children:"Resolved"})]}),i.jsxs("div",{className:"ad-kpi c-cyan",children:["  ",i.jsxs("div",{className:"ad-kpi-val",children:[b.length?Math.round(b.filter(v=>v.frontendStatus==="fixed").length/b.length*100):0,"%"]}),i.jsx("div",{className:"ad-kpi-lbl",children:"Resolution Rate"})]})]}),i.jsxs("div",{className:"ad-card",children:[i.jsx("div",{className:"ad-card-head",children:i.jsx("span",{className:"ad-card-title",children:"Full Issue Log"})}),P?i.jsx("div",{className:"ad-loading",children:"Loading…"}):i.jsx("div",{className:"ad-scroll",children:i.jsxs("table",{className:"ad-tbl",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"PC"}),i.jsx("th",{children:"Type"}),i.jsx("th",{children:"Student"}),i.jsx("th",{children:"Roll No."}),i.jsx("th",{children:"Sev"}),i.jsx("th",{children:"Reported"}),i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Actions"})]})}),i.jsx("tbody",{children:b.map(v=>i.jsxs("tr",{children:[i.jsx("td",{className:"ad-tbl-id",children:v.pcLabel}),i.jsx("td",{style:{fontSize:"0.72rem",color:"var(--text2)"},children:v.issueType}),i.jsx("td",{className:"ad-tbl-student",children:v.studentName}),i.jsx("td",{className:"ad-tbl-student",children:v.rollNumber}),i.jsx("td",{children:i.jsx("span",{className:`ad-sev ${v.severity}`,children:v.severity})}),i.jsxs("td",{className:"ad-tbl-time",children:[_n(v.reportedAt)," ",_r(v.reportedAt)]}),i.jsx("td",{children:i.jsx("span",{className:`ad-tag ${v.frontendStatus}`,children:pr(v.frontendStatus)})}),i.jsx("td",{children:i.jsxs("div",{className:"ad-action-row",children:[v.frontendStatus==="open"&&i.jsx("button",{className:"ad-btn-sm amber",onClick:()=>_(v.id,"prog"),children:"Start"}),v.frontendStatus==="prog"&&i.jsx("button",{className:"ad-btn-sm green",onClick:()=>_(v.id,"fixed"),children:"Fix ✓"}),v.frontendStatus==="fixed"&&i.jsx("button",{className:"ad-btn-sm red",onClick:()=>_(v.id,"open"),children:"Reopen"})]})})]},v.id))})]})})]})]}),i.jsx("div",{className:`ad-toast ${k?"show":""}`,children:k}),j&&i.jsx($p,{computerId:j.computerId,pcLabel:j.pcLabel,onClose:()=>D(null)}),p&&i.jsx(Bp,{pcNumber:p.pcNumber,pcLabel:p.pcLabel,onClose:()=>c(null)})]})]})}function Yp(){const[e,t]=w.useState("student"),[n,r]=w.useState("student"),[l,o]=w.useState(!1),[a,s]=w.useState("");return i.jsxs("div",{className:"main-layout",children:[e==="student"?i.jsx(Mp,{onAdmin:()=>o(!0)}):i.jsx(Qp,{onBack:()=>t("student")}),l&&i.jsx("div",{className:"sl-overlay open",children:i.jsxs("div",{className:"sl-modal",children:[i.jsxs("div",{className:"sl-m-head",children:[i.jsx("div",{className:"sl-m-title",children:"Admin Login"}),i.jsx("button",{className:"sl-m-close",onClick:()=>o(!1),children:"×"})]}),i.jsx("div",{className:"sl-m-body",children:i.jsx("input",{className:"sl-input",type:"password",placeholder:"Enter password",value:a,onChange:u=>s(u.target.value)})}),i.jsxs("div",{className:"sl-m-foot",children:[i.jsx("button",{className:"sl-btn-cancel",onClick:()=>o(!1),children:"Cancel"}),i.jsx("button",{className:"sl-btn-submit",onClick:()=>{a==="admin123"?(t("admin"),o(!1),s("")):alert("Wrong password")},children:"Login"})]})]})})]})}zd(document.getElementById("root")).render(i.jsx(w.StrictMode,{children:i.jsx(Yp,{})}));
