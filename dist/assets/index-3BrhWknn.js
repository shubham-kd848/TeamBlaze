(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function m_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Eg={exports:{}},uc={},wg={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),g_=Symbol.for("react.portal"),v_=Symbol.for("react.fragment"),x_=Symbol.for("react.strict_mode"),__=Symbol.for("react.profiler"),y_=Symbol.for("react.provider"),S_=Symbol.for("react.context"),M_=Symbol.for("react.forward_ref"),E_=Symbol.for("react.suspense"),w_=Symbol.for("react.memo"),T_=Symbol.for("react.lazy"),xf=Symbol.iterator;function A_(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var Tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,bg={};function Js(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Tg}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cg(){}Cg.prototype=Js.prototype;function ch(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Tg}var uh=ch.prototype=new Cg;uh.constructor=ch;Ag(uh,Js.prototype);uh.isPureReactComponent=!0;var _f=Array.isArray,Rg=Object.prototype.hasOwnProperty,dh={current:null},Pg={key:!0,ref:!0,__self:!0,__source:!0};function Lg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Rg.call(e,i)&&!Pg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:oo,type:t,key:s,ref:a,props:r,_owner:dh.current}}function b_(t,e){return{$$typeof:oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===oo}function C_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yf=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C_(""+t.key):e.toString(36)}function pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case oo:case g_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+zc(a,0):i,_f(r)?(n="",t!=null&&(n=t.replace(yf,"$&/")+"/"),pl(r,e,n,"",function(c){return c})):r!=null&&(hh(r)&&(r=b_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(yf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_f(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+zc(s,o);a+=pl(s,e,n,l,r)}else if(l=A_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+zc(s,o++),a+=pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function _o(t,e,n){if(t==null)return t;var i=[],r=0;return pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function R_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},ml={transition:null},P_={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:ml,ReactCurrentOwner:dh};function Ng(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:_o,forEach:function(t,e,n){_o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _o(t,function(){e++}),e},toArray:function(t){return _o(t,function(e){return e})||[]},only:function(t){if(!hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=Js;rt.Fragment=v_;rt.Profiler=__;rt.PureComponent=ch;rt.StrictMode=x_;rt.Suspense=E_;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_;rt.act=Ng;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ag({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=dh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Rg.call(e,l)&&!Pg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:oo,type:t.type,key:r,ref:s,props:i,_owner:a}};rt.createContext=function(t){return t={$$typeof:S_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y_,_context:t},t.Consumer=t};rt.createElement=Lg;rt.createFactory=function(t){var e=Lg.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:M_,render:t}};rt.isValidElement=hh;rt.lazy=function(t){return{$$typeof:T_,_payload:{_status:-1,_result:t},_init:R_}};rt.memo=function(t,e){return{$$typeof:w_,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};rt.unstable_act=Ng;rt.useCallback=function(t,e){return on.current.useCallback(t,e)};rt.useContext=function(t){return on.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return on.current.useDeferredValue(t)};rt.useEffect=function(t,e){return on.current.useEffect(t,e)};rt.useId=function(){return on.current.useId()};rt.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return on.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};rt.useRef=function(t){return on.current.useRef(t)};rt.useState=function(t){return on.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return on.current.useTransition()};rt.version="18.3.1";wg.exports=rt;var me=wg.exports;const L_=m_(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_=me,D_=Symbol.for("react.element"),I_=Symbol.for("react.fragment"),U_=Object.prototype.hasOwnProperty,F_=N_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O_={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)U_.call(e,i)&&!O_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:D_,type:t,key:s,ref:a,props:r,_owner:F_.current}}uc.Fragment=I_;uc.jsx=Dg;uc.jsxs=Dg;Eg.exports=uc;var u=Eg.exports,ed={},Ig={exports:{}},Tn={},Ug={exports:{}},Fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,H){var R=z.length;z.push(H);e:for(;0<R;){var C=R-1>>>1,Y=z[C];if(0<r(Y,H))z[C]=H,z[R]=Y,R=C;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var H=z[0],R=z.pop();if(R!==H){z[0]=R;e:for(var C=0,Y=z.length,D=Y>>>1;C<D;){var j=2*(C+1)-1,se=z[j],ue=j+1,ie=z[ue];if(0>r(se,R))ue<Y&&0>r(ie,se)?(z[C]=ie,z[ue]=R,C=ue):(z[C]=se,z[j]=R,C=j);else if(ue<Y&&0>r(ie,R))z[C]=ie,z[ue]=R,C=ue;else break e}}return H}function r(z,H){var R=z.sortIndex-H.sortIndex;return R!==0?R:z.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,f=3,m=!1,x=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=z)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function S(z){if(y=!1,v(z),!x)if(n(l)!==null)x=!0,X(L);else{var H=n(c);H!==null&&ne(S,H.startTime-z)}}function L(z,H){x=!1,y&&(y=!1,d(F),F=-1),m=!0;var R=f;try{for(v(H),p=n(l);p!==null&&(!(p.expirationTime>H)||z&&!q());){var C=p.callback;if(typeof C=="function"){p.callback=null,f=p.priorityLevel;var Y=C(p.expirationTime<=H);H=t.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(l)&&i(l),v(H)}else i(l);p=n(l)}if(p!==null)var D=!0;else{var j=n(c);j!==null&&ne(S,j.startTime-H),D=!1}return D}finally{p=null,f=R,m=!1}}var b=!1,T=null,F=-1,w=5,A=-1;function q(){return!(t.unstable_now()-A<w)}function Z(){if(T!==null){var z=t.unstable_now();A=z;var H=!0;try{H=T(!0,z)}finally{H?le():(b=!1,T=null)}}else b=!1}var le;if(typeof _=="function")le=function(){_(Z)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,V=O.port2;O.port1.onmessage=Z,le=function(){V.postMessage(null)}}else le=function(){g(Z,0)};function X(z){T=z,b||(b=!0,le())}function ne(z,H){F=g(function(){z(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,X(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var R=f;f=H;try{return z()}finally{f=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=f;f=z;try{return H()}finally{f=R}},t.unstable_scheduleCallback=function(z,H,R){var C=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?C+R:C):R=C,z){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,z={id:h++,callback:H,priorityLevel:z,startTime:R,expirationTime:Y,sortIndex:-1},R>C?(z.sortIndex=R,e(c,z),n(l)===null&&z===n(c)&&(y?(d(F),F=-1):y=!0,ne(S,R-C))):(z.sortIndex=Y,e(l,z),x||m||(x=!0,X(L))),z},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(z){var H=f;return function(){var R=f;f=H;try{return z.apply(this,arguments)}finally{f=R}}}})(Fg);Ug.exports=Fg;var k_=Ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=me,wn=k_;function ye(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Og=new Set,ka={};function jr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(ka[t]=e,t=0;t<e.length;t++)Og.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),td=Object.prototype.hasOwnProperty,B_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sf={},Mf={};function G_(t){return td.call(Mf,t)?!0:td.call(Sf,t)?!1:B_.test(t)?Mf[t]=!0:(Sf[t]=!0,!1)}function j_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function H_(t,e,n,i){if(e===null||typeof e>"u"||j_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fh,ph);Xt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fh,ph);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fh,ph);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function mh(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(H_(e,n,r,i)&&(n=null),i||r===null?G_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),xh=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),Bg=Symbol.for("react.offscreen"),Ef=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=Ef&&t[Ef]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Bc;function _a(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var Gc=!1;function jc(t,e){if(!t||Gc)return"";Gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function V_(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=jc(t.type,!1),t;case 11:return t=jc(t.type.render,!1),t;case 1:return t=jc(t.type,!0),t;default:return""}}function sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case nd:return"Profiler";case gh:return"StrictMode";case id:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zg:return(t.displayName||"Context")+".Consumer";case kg:return(t._context.displayName||"Context")+".Provider";case vh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xh:return e=t.displayName||null,e!==null?e:sd(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return sd(t(e))}catch{}}return null}function W_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(e);case 8:return e===gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X_(t){var e=Gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function So(t){t._valueTracker||(t._valueTracker=X_(t))}function jg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hg(t,e){e=e.checked,e!=null&&mh(t,"checked",e,!1)}function od(t,e){Hg(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&ld(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ld(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ye(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ye(92));if(ya(n)){if(1<n.length)throw Error(ye(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function Vg(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mo,Xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q_=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){q_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Y_=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(t,e){if(e){if(Y_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ye(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ye(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ye(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function _h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pd=null,Ds=null,Is=null;function Cf(t){if(t=uo(t)){if(typeof pd!="function")throw Error(ye(280));var e=t.stateNode;e&&(e=mc(e),pd(t.stateNode,t.type,e))}}function $g(t){Ds?Is?Is.push(t):Is=[t]:Ds=t}function Kg(){if(Ds){var t=Ds,e=Is;if(Is=Ds=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function Zg(t,e){return t(e)}function Jg(){}var Hc=!1;function Qg(t,e,n){if(Hc)return t(e,n);Hc=!0;try{return Zg(t,e,n)}finally{Hc=!1,(Ds!==null||Is!==null)&&(Jg(),Kg())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var i=mc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ye(231,e,typeof n));return n}var md=!1;if(Ti)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){md=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{md=!1}function $_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ta=!1,Pl=null,Ll=!1,gd=null,K_={onError:function(t){Ta=!0,Pl=t}};function Z_(t,e,n,i,r,s,a,o,l){Ta=!1,Pl=null,$_.apply(K_,arguments)}function J_(t,e,n,i,r,s,a,o,l){if(Z_.apply(this,arguments),Ta){if(Ta){var c=Pl;Ta=!1,Pl=null}else throw Error(ye(198));Ll||(Ll=!0,gd=c)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(Hr(t)!==t)throw Error(ye(188))}function Q_(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(ye(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rf(r),t;if(s===i)return Rf(r),e;s=s.sibling}throw Error(ye(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ye(189))}}if(n.alternate!==i)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?t:e}function t0(t){return t=Q_(t),t!==null?n0(t):null}function n0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n0(t);if(e!==null)return e;t=t.sibling}return null}var i0=wn.unstable_scheduleCallback,Pf=wn.unstable_cancelCallback,ey=wn.unstable_shouldYield,ty=wn.unstable_requestPaint,Pt=wn.unstable_now,ny=wn.unstable_getCurrentPriorityLevel,yh=wn.unstable_ImmediatePriority,r0=wn.unstable_UserBlockingPriority,Nl=wn.unstable_NormalPriority,iy=wn.unstable_LowPriority,s0=wn.unstable_IdlePriority,dc=null,ri=null;function ry(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:oy,sy=Math.log,ay=Math.LN2;function oy(t){return t>>>=0,t===0?32:31-(sy(t)/ay|0)|0}var Eo=64,wo=4194304;function Sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Sa(o):(s&=a,s!==0&&(i=Sa(s)))}else a=n&~r,a!==0?i=Sa(a):s!==0&&(i=Sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function ly(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=ly(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a0(){var t=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function uy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function o0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l0,Mh,c0,u0,d0,xd=!1,To=[],qi=null,Yi=null,$i=null,Ga=new Map,ja=new Map,Gi=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function sa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=uo(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function hy(t,e,n,i,r){switch(e){case"focusin":return qi=sa(qi,t,e,n,i,r),!0;case"dragenter":return Yi=sa(Yi,t,e,n,i,r),!0;case"mouseover":return $i=sa($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ga.set(s,sa(Ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ja.set(s,sa(ja.get(s)||null,t,e,n,i,r)),!0}return!1}function h0(t){var e=Er(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=e0(n),e!==null){t.blockedOn=e,d0(t.priority,function(){c0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);fd=i,n.target.dispatchEvent(i),fd=null}else return e=uo(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Nf(t,e,n){gl(t)&&n.delete(e)}function fy(){xd=!1,qi!==null&&gl(qi)&&(qi=null),Yi!==null&&gl(Yi)&&(Yi=null),$i!==null&&gl($i)&&($i=null),Ga.forEach(Nf),ja.forEach(Nf)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,xd||(xd=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,fy)))}function Ha(t){function e(r){return aa(r,t)}if(0<To.length){aa(To[0],t);for(var n=1;n<To.length;n++){var i=To[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&aa(qi,t),Yi!==null&&aa(Yi,t),$i!==null&&aa($i,t),Ga.forEach(e),ja.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&Gi.shift()}var Us=Pi.ReactCurrentBatchConfig,Il=!0;function py(t,e,n,i){var r=ot,s=Us.transition;Us.transition=null;try{ot=1,Eh(t,e,n,i)}finally{ot=r,Us.transition=s}}function my(t,e,n,i){var r=ot,s=Us.transition;Us.transition=null;try{ot=4,Eh(t,e,n,i)}finally{ot=r,Us.transition=s}}function Eh(t,e,n,i){if(Il){var r=_d(t,e,n,i);if(r===null)eu(t,e,i,Ul,n),Lf(t,i);else if(hy(r,t,e,n,i))i.stopPropagation();else if(Lf(t,i),e&4&&-1<dy.indexOf(t)){for(;r!==null;){var s=uo(r);if(s!==null&&l0(s),s=_d(t,e,n,i),s===null&&eu(t,e,i,Ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else eu(t,e,i,null,n)}}var Ul=null;function _d(t,e,n,i){if(Ul=null,t=_h(i),t=Er(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function f0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ny()){case yh:return 1;case r0:return 4;case Nl:case iy:return 16;case s0:return 536870912;default:return 16}default:return 16}}var Hi=null,wh=null,vl=null;function p0(){if(vl)return vl;var t,e=wh,n=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return vl=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function Df(){return!1}function An(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ao:Df,this.isPropagationStopped=Df,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=An(Qs),co=Tt({},Qs,{view:0,detail:0}),gy=An(co),Wc,Xc,oa,hc=Tt({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ah,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Wc=t.screenX-oa.screenX,Xc=t.screenY-oa.screenY):Xc=Wc=0,oa=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),If=An(hc),vy=Tt({},hc,{dataTransfer:0}),xy=An(vy),_y=Tt({},co,{relatedTarget:0}),qc=An(_y),yy=Tt({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Sy=An(yy),My=Tt({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ey=An(My),wy=Tt({},Qs,{data:0}),Uf=An(wy),Ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=by[t])?!!e[t]:!1}function Ah(){return Cy}var Ry=Tt({},co,{key:function(t){if(t.key){var e=Ty[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ah,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Py=An(Ry),Ly=Tt({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=An(Ly),Ny=Tt({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ah}),Dy=An(Ny),Iy=Tt({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=An(Iy),Fy=Tt({},hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=An(Fy),ky=[9,13,27,32],bh=Ti&&"CompositionEvent"in window,Aa=null;Ti&&"documentMode"in document&&(Aa=document.documentMode);var zy=Ti&&"TextEvent"in window&&!Aa,m0=Ti&&(!bh||Aa&&8<Aa&&11>=Aa),Of=" ",kf=!1;function g0(t,e){switch(t){case"keyup":return ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function By(t,e){switch(t){case"compositionend":return v0(e);case"keypress":return e.which!==32?null:(kf=!0,Of);case"textInput":return t=e.data,t===Of&&kf?null:t;default:return null}}function Gy(t,e){if(xs)return t==="compositionend"||!bh&&g0(t,e)?(t=p0(),vl=wh=Hi=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m0&&e.locale!=="ko"?null:e.data;default:return null}}var jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jy[t.type]:e==="textarea"}function x0(t,e,n,i){$g(i),e=Fl(e,"onChange"),0<e.length&&(n=new Th("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ba=null,Va=null;function Hy(t){R0(t,0)}function fc(t){var e=Ss(t);if(jg(e))return t}function Vy(t,e){if(t==="change")return e}var _0=!1;if(Ti){var Yc;if(Ti){var $c="oninput"in document;if(!$c){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),$c=typeof Bf.oninput=="function"}Yc=$c}else Yc=!1;_0=Yc&&(!document.documentMode||9<document.documentMode)}function Gf(){ba&&(ba.detachEvent("onpropertychange",y0),Va=ba=null)}function y0(t){if(t.propertyName==="value"&&fc(Va)){var e=[];x0(e,Va,t,_h(t)),Qg(Hy,e)}}function Wy(t,e,n){t==="focusin"?(Gf(),ba=e,Va=n,ba.attachEvent("onpropertychange",y0)):t==="focusout"&&Gf()}function Xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(Va)}function qy(t,e){if(t==="click")return fc(e)}function Yy(t,e){if(t==="input"||t==="change")return fc(e)}function $y(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:$y;function Wa(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!td.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,e){var n=jf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function S0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function M0(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ky(t){var e=M0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S0(n.ownerDocument.documentElement,n)){if(i!==null&&Ch(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hf(n,s);var a=Hf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zy=Ti&&"documentMode"in document&&11>=document.documentMode,_s=null,yd=null,Ca=null,Sd=!1;function Vf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||_s==null||_s!==Rl(i)||(i=_s,"selectionStart"in i&&Ch(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ca&&Wa(Ca,i)||(Ca=i,i=Fl(yd,"onSelect"),0<i.length&&(e=new Th("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Kc={},E0={};Ti&&(E0=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function pc(t){if(Kc[t])return Kc[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E0)return Kc[t]=e[n];return t}var w0=pc("animationend"),T0=pc("animationiteration"),A0=pc("animationstart"),b0=pc("transitionend"),C0=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){C0.set(t,e),jr(e,[t])}for(var Zc=0;Zc<Wf.length;Zc++){var Jc=Wf[Zc],Jy=Jc.toLowerCase(),Qy=Jc[0].toUpperCase()+Jc.slice(1);or(Jy,"on"+Qy)}or(w0,"onAnimationEnd");or(T0,"onAnimationIteration");or(A0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(b0,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Xf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,J_(i,e,void 0,t),t.currentTarget=null}function R0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Xf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Xf(r,o,c),s=l}}}if(Ll)throw t=gd,Ll=!1,gd=null,t}function pt(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var i=t+"__bubble";n.has(i)||(P0(e,t,2,!1),n.add(i))}function Qc(t,e,n){var i=0;e&&(i|=4),P0(n,t,i,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Co]){t[Co]=!0,Og.forEach(function(n){n!=="selectionchange"&&(eS.has(n)||Qc(n,!1,t),Qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,Qc("selectionchange",!1,e))}}function P0(t,e,n,i){switch(f0(e)){case 1:var r=py;break;case 4:r=my;break;default:r=Eh}n=r.bind(null,e,n,t),r=void 0,!md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Qg(function(){var c=s,h=_h(n),p=[];e:{var f=C0.get(t);if(f!==void 0){var m=Th,x=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":m=Py;break;case"focusin":x="focus",m=qc;break;case"focusout":x="blur",m=qc;break;case"beforeblur":case"afterblur":m=qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Dy;break;case w0:case T0:case A0:m=Sy;break;case b0:m=Uy;break;case"scroll":m=gy;break;case"wheel":m=Oy;break;case"copy":case"cut":case"paste":m=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ff}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=Ba(_,d),S!=null&&y.push(qa(_,S,v)))),g)break;_=_.return}0<y.length&&(f=new m(f,x,null,n,h),p.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==fd&&(x=n.relatedTarget||n.fromElement)&&(Er(x)||x[Ai]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Er(x):null,x!==null&&(g=Hr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=If,S="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ff,S="onPointerLeave",d="onPointerEnter",_="pointer"),g=m==null?f:Ss(m),v=x==null?f:Ss(x),f=new y(S,_+"leave",m,n,h),f.target=g,f.relatedTarget=v,S=null,Er(h)===c&&(y=new y(d,_+"enter",x,n,h),y.target=v,y.relatedTarget=g,S=y),g=S,m&&x)t:{for(y=m,d=x,_=0,v=y;v;v=qr(v))_++;for(v=0,S=d;S;S=qr(S))v++;for(;0<_-v;)y=qr(y),_--;for(;0<v-_;)d=qr(d),v--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=qr(y),d=qr(d)}y=null}else y=null;m!==null&&qf(p,f,m,y,!1),x!==null&&g!==null&&qf(p,g,x,y,!0)}}e:{if(f=c?Ss(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var L=Vy;else if(zf(f))if(_0)L=Yy;else{L=Xy;var b=Wy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=qy);if(L&&(L=L(t,c))){x0(p,L,n,h);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&ld(f,"number",f.value)}switch(b=c?Ss(c):window,t){case"focusin":(zf(b)||b.contentEditable==="true")&&(_s=b,yd=c,Ca=null);break;case"focusout":Ca=yd=_s=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,Vf(p,n,h);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Vf(p,n,h)}var T;if(bh)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else xs?g0(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(m0&&n.locale!=="ko"&&(xs||F!=="onCompositionStart"?F==="onCompositionEnd"&&xs&&(T=p0()):(Hi=h,wh="value"in Hi?Hi.value:Hi.textContent,xs=!0)),b=Fl(c,F),0<b.length&&(F=new Uf(F,t,null,n,h),p.push({event:F,listeners:b}),T?F.data=T:(T=v0(n),T!==null&&(F.data=T)))),(T=zy?By(t,n):Gy(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(h=new Uf("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=T))}R0(p,e)})}function qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(t,n),s!=null&&i.unshift(qa(t,s,r)),s=Ba(t,e),s!=null&&i.push(qa(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ba(n,s),l!=null&&a.unshift(qa(n,l,o))):r||(l=Ba(n,s),l!=null&&a.push(qa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var tS=/\r\n?/g,nS=/\u0000|\uFFFD/g;function Yf(t){return(typeof t=="string"?t:""+t).replace(tS,`
`).replace(nS,"")}function Ro(t,e,n){if(e=Yf(e),Yf(t)!==e&&n)throw Error(ye(425))}function Ol(){}var Md=null,Ed=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Td=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(sS)}:Td;function sS(t){setTimeout(function(){throw t})}function tu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ha(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),ni="__reactFiber$"+ea,Ya="__reactProps$"+ea,Ai="__reactContainer$"+ea,Ad="__reactEvents$"+ea,aS="__reactListeners$"+ea,oS="__reactHandles$"+ea;function Er(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kf(t);t!==null;){if(n=t[ni])return n;t=Kf(t)}return e}t=n,n=t.parentNode}return null}function uo(t){return t=t[ni]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function mc(t){return t[Ya]||null}var bd=[],Ms=-1;function lr(t){return{current:t}}function gt(t){0>Ms||(t.current=bd[Ms],bd[Ms]=null,Ms--)}function ft(t,e){Ms++,bd[Ms]=t.current,t.current=e}var sr={},Qt=lr(sr),fn=lr(!1),Nr=sr;function js(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function kl(){gt(fn),gt(Qt)}function Zf(t,e,n){if(Qt.current!==sr)throw Error(ye(168));ft(Qt,e),ft(fn,n)}function L0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ye(108,W_(t)||"Unknown",r));return Tt({},n,i)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Nr=Qt.current,ft(Qt,t),ft(fn,fn.current),!0}function Jf(t,e,n){var i=t.stateNode;if(!i)throw Error(ye(169));n?(t=L0(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,gt(fn),gt(Qt),ft(Qt,t)):gt(fn),ft(fn,n)}var gi=null,gc=!1,nu=!1;function N0(t){gi===null?gi=[t]:gi.push(t)}function lS(t){gc=!0,N0(t)}function cr(){if(!nu&&gi!==null){nu=!0;var t=0,e=ot;try{var n=gi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,gc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),i0(yh,cr),r}finally{ot=e,nu=!1}}return null}var Es=[],ws=0,Bl=null,Gl=0,Rn=[],Pn=0,Dr=null,yi=1,Si="";function xr(t,e){Es[ws++]=Gl,Es[ws++]=Bl,Bl=t,Gl=e}function D0(t,e,n){Rn[Pn++]=yi,Rn[Pn++]=Si,Rn[Pn++]=Dr,Dr=t;var i=yi;t=Si;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,yi=1<<32-Kn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function Rh(t){t.return!==null&&(xr(t,1),D0(t,1,0))}function Ph(t){for(;t===Bl;)Bl=Es[--ws],Es[ws]=null,Gl=Es[--ws],Es[ws]=null;for(;t===Dr;)Dr=Rn[--Pn],Rn[Pn]=null,Si=Rn[--Pn],Rn[Pn]=null,yi=Rn[--Pn],Rn[Pn]=null}var En=null,Mn=null,vt=!1,Xn=null;function I0(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function Cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rd(t){if(vt){var e=Mn;if(e){var n=e;if(!Qf(t,e)){if(Cd(t))throw Error(ye(418));e=Ki(n.nextSibling);var i=En;e&&Qf(t,e)?I0(i,n):(t.flags=t.flags&-4097|2,vt=!1,En=t)}}else{if(Cd(t))throw Error(ye(418));t.flags=t.flags&-4097|2,vt=!1,En=t}}}function ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Po(t){if(t!==En)return!1;if(!vt)return ep(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=Mn)){if(Cd(t))throw U0(),Error(ye(418));for(;e;)I0(t,e),e=Ki(e.nextSibling)}if(ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?Ki(t.stateNode.nextSibling):null;return!0}function U0(){for(var t=Mn;t;)t=Ki(t.nextSibling)}function Hs(){Mn=En=null,vt=!1}function Lh(t){Xn===null?Xn=[t]:Xn.push(t)}var cS=Pi.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var i=n.stateNode}if(!i)throw Error(ye(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,t))}return t}function Lo(t,e){throw t=Object.prototype.toString.call(e),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function F0(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=er(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,v,S){return _===null||_.tag!==6?(_=cu(v,d.mode,S),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,S){var L=v.type;return L===vs?h(d,_,v.props.children,S,v.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===zi&&tp(L)===_.type)?(S=r(_,v.props),S.ref=la(d,_,v),S.return=d,S):(S=Tl(v.type,v.key,v.props,null,d.mode,S),S.ref=la(d,_,v),S.return=d,S)}function c(d,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=uu(v,d.mode,S),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function h(d,_,v,S,L){return _===null||_.tag!==7?(_=br(v,d.mode,S,L),_.return=d,_):(_=r(_,v),_.return=d,_)}function p(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=cu(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yo:return v=Tl(_.type,_.key,_.props,null,d.mode,v),v.ref=la(d,null,_),v.return=d,v;case gs:return _=uu(_,d.mode,v),_.return=d,_;case zi:var S=_._init;return p(d,S(_._payload),v)}if(ya(_)||ia(_))return _=br(_,d.mode,v,null),_.return=d,_;Lo(d,_)}return null}function f(d,_,v,S){var L=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:o(d,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yo:return v.key===L?l(d,_,v,S):null;case gs:return v.key===L?c(d,_,v,S):null;case zi:return L=v._init,f(d,_,L(v._payload),S)}if(ya(v)||ia(v))return L!==null?null:h(d,_,v,S,null);Lo(d,v)}return null}function m(d,_,v,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,o(_,d,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case yo:return d=d.get(S.key===null?v:S.key)||null,l(_,d,S,L);case gs:return d=d.get(S.key===null?v:S.key)||null,c(_,d,S,L);case zi:var b=S._init;return m(d,_,v,b(S._payload),L)}if(ya(S)||ia(S))return d=d.get(v)||null,h(_,d,S,L,null);Lo(_,S)}return null}function x(d,_,v,S){for(var L=null,b=null,T=_,F=_=0,w=null;T!==null&&F<v.length;F++){T.index>F?(w=T,T=null):w=T.sibling;var A=f(d,T,v[F],S);if(A===null){T===null&&(T=w);break}t&&T&&A.alternate===null&&e(d,T),_=s(A,_,F),b===null?L=A:b.sibling=A,b=A,T=w}if(F===v.length)return n(d,T),vt&&xr(d,F),L;if(T===null){for(;F<v.length;F++)T=p(d,v[F],S),T!==null&&(_=s(T,_,F),b===null?L=T:b.sibling=T,b=T);return vt&&xr(d,F),L}for(T=i(d,T);F<v.length;F++)w=m(T,d,F,v[F],S),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?F:w.key),_=s(w,_,F),b===null?L=w:b.sibling=w,b=w);return t&&T.forEach(function(q){return e(d,q)}),vt&&xr(d,F),L}function y(d,_,v,S){var L=ia(v);if(typeof L!="function")throw Error(ye(150));if(v=L.call(v),v==null)throw Error(ye(151));for(var b=L=null,T=_,F=_=0,w=null,A=v.next();T!==null&&!A.done;F++,A=v.next()){T.index>F?(w=T,T=null):w=T.sibling;var q=f(d,T,A.value,S);if(q===null){T===null&&(T=w);break}t&&T&&q.alternate===null&&e(d,T),_=s(q,_,F),b===null?L=q:b.sibling=q,b=q,T=w}if(A.done)return n(d,T),vt&&xr(d,F),L;if(T===null){for(;!A.done;F++,A=v.next())A=p(d,A.value,S),A!==null&&(_=s(A,_,F),b===null?L=A:b.sibling=A,b=A);return vt&&xr(d,F),L}for(T=i(d,T);!A.done;F++,A=v.next())A=m(T,d,F,A.value,S),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?F:A.key),_=s(A,_,F),b===null?L=A:b.sibling=A,b=A);return t&&T.forEach(function(Z){return e(d,Z)}),vt&&xr(d,F),L}function g(d,_,v,S){if(typeof v=="object"&&v!==null&&v.type===vs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case yo:e:{for(var L=v.key,b=_;b!==null;){if(b.key===L){if(L=v.type,L===vs){if(b.tag===7){n(d,b.sibling),_=r(b,v.props.children),_.return=d,d=_;break e}}else if(b.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===zi&&tp(L)===b.type){n(d,b.sibling),_=r(b,v.props),_.ref=la(d,b,v),_.return=d,d=_;break e}n(d,b);break}else e(d,b);b=b.sibling}v.type===vs?(_=br(v.props.children,d.mode,S,v.key),_.return=d,d=_):(S=Tl(v.type,v.key,v.props,null,d.mode,S),S.ref=la(d,_,v),S.return=d,d=S)}return a(d);case gs:e:{for(b=v.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=uu(v,d.mode,S),_.return=d,d=_}return a(d);case zi:return b=v._init,g(d,_,b(v._payload),S)}if(ya(v))return x(d,_,v,S);if(ia(v))return y(d,_,v,S);Lo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=cu(v,d.mode,S),_.return=d,d=_),a(d)):n(d,_)}return g}var Vs=F0(!0),O0=F0(!1),jl=lr(null),Hl=null,Ts=null,Nh=null;function Dh(){Nh=Ts=Hl=null}function Ih(t){var e=jl.current;gt(jl),t._currentValue=e}function Pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Hl=t,Nh=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Nh!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Hl===null)throw Error(ye(308));Ts=t,Hl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var wr=null;function Uh(t){wr===null?wr=[t]:wr.push(t)}function k0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Uh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function Fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Uh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}function np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,i){var r=t.updateQueue;Bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,y=o;switch(f=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(m,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(m,p,f):x,f==null)break e;p=Tt({},p,f);break e;case 2:Bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=p}}function ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ye(191,r));r.call(i)}}}var ho={},si=lr(ho),$a=lr(ho),Ka=lr(ho);function Tr(t){if(t===ho)throw Error(ye(174));return t}function Oh(t,e){switch(ft(Ka,e),ft($a,t),ft(si,ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}gt(si),ft(si,e)}function Ws(){gt(si),gt($a),gt(Ka)}function B0(t){Tr(Ka.current);var e=Tr(si.current),n=ud(e,t.type);e!==n&&(ft($a,t),ft(si,n))}function kh(t){$a.current===t&&(gt(si),gt($a))}var yt=lr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var iu=[];function zh(){for(var t=0;t<iu.length;t++)iu[t]._workInProgressVersionPrimary=null;iu.length=0}var yl=Pi.ReactCurrentDispatcher,ru=Pi.ReactCurrentBatchConfig,Ir=0,Mt=null,Dt=null,Bt=null,Xl=!1,Ra=!1,Za=0,uS=0;function Yt(){throw Error(ye(321))}function Bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Gh(t,e,n,i,r,s){if(Ir=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?pS:mS,t=n(i,r),Ra){s=0;do{if(Ra=!1,Za=0,25<=s)throw Error(ye(301));s+=1,Bt=Dt=null,e.updateQueue=null,yl.current=gS,t=n(i,r)}while(Ra)}if(yl.current=ql,e=Dt!==null&&Dt.next!==null,Ir=0,Bt=Dt=Mt=null,Xl=!1,e)throw Error(ye(300));return t}function jh(){var t=Za!==0;return Za=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Mt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function kn(){if(Dt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Bt===null?Mt.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=t;else{if(t===null)throw Error(ye(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?Mt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ja(t,e){return typeof e=="function"?e(t):e}function su(t){var e=kn(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Ir&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,Mt.lanes|=h,Ur|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Jn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function au(t){var e=kn(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Jn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function G0(){}function j0(t,e){var n=Mt,i=kn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Hh(W0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Qa(9,V0.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(ye(349));Ir&30||H0(n,e,r)}return r}function H0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V0(t,e,n,i){e.value=n,e.getSnapshot=i,X0(e)&&q0(t)}function W0(t,e,n){return n(function(){X0(e)&&q0(t)})}function X0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function q0(t){var e=bi(t,1);e!==null&&Zn(e,t,1,-1)}function rp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=fS.bind(null,Mt,t),[e.memoizedState,t]}function Qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Y0(){return kn().memoizedState}function Sl(t,e,n,i){var r=ei();Mt.flags|=t,r.memoizedState=Qa(1|e,n,void 0,i===void 0?null:i)}function vc(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Bh(i,a.deps)){r.memoizedState=Qa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Qa(1|e,n,s,i)}function sp(t,e){return Sl(8390656,8,t,e)}function Hh(t,e){return vc(2048,8,t,e)}function $0(t,e){return vc(4,2,t,e)}function K0(t,e){return vc(4,4,t,e)}function Z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J0(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,Z0.bind(null,e,t),n)}function Vh(){}function Q0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ev(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function tv(t,e,n){return Ir&21?(Jn(n,e)||(n=a0(),Mt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function dS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=ru.transition;ru.transition={};try{t(!1),e()}finally{ot=n,ru.transition=i}}function nv(){return kn().memoizedState}function hS(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},iv(t))rv(e,n);else if(n=k0(t,e,n,i),n!==null){var r=an();Zn(n,t,i,r),sv(n,e,i)}}function fS(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(iv(t))rv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Jn(o,a)){var l=e.interleaved;l===null?(r.next=r,Uh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=k0(t,e,r,i),n!==null&&(r=an(),Zn(n,t,i,r),sv(n,e,i))}}function iv(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function rv(t,e){Ra=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}var ql={readContext:On,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},pS={readContext:On,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,Z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hS.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Vh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=dS.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ei();if(vt){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=e(),Gt===null)throw Error(ye(349));Ir&30||H0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sp(W0.bind(null,i,s,t),[t]),i.flags|=2048,Qa(9,V0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Gt.identifierPrefix;if(vt){var n=Si,i=yi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mS={readContext:On,useCallback:Q0,useContext:On,useEffect:Hh,useImperativeHandle:J0,useInsertionEffect:$0,useLayoutEffect:K0,useMemo:ev,useReducer:su,useRef:Y0,useState:function(){return su(Ja)},useDebugValue:Vh,useDeferredValue:function(t){var e=kn();return tv(e,Dt.memoizedState,t)},useTransition:function(){var t=su(Ja)[0],e=kn().memoizedState;return[t,e]},useMutableSource:G0,useSyncExternalStore:j0,useId:nv,unstable_isNewReconciler:!1},gS={readContext:On,useCallback:Q0,useContext:On,useEffect:Hh,useImperativeHandle:J0,useInsertionEffect:$0,useLayoutEffect:K0,useMemo:ev,useReducer:au,useRef:Y0,useState:function(){return au(Ja)},useDebugValue:Vh,useDeferredValue:function(t){var e=kn();return Dt===null?e.memoizedState=t:tv(e,Dt.memoizedState,t)},useTransition:function(){var t=au(Ja)[0],e=kn().memoizedState;return[t,e]},useMutableSource:G0,useSyncExternalStore:j0,useId:nv,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=Qi(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Zn(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=Qi(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Zn(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=Qi(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Zn(e,t,i,n),_l(e,t,i))}};function ap(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function av(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=pn(e)?Nr:Qt.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function Nd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=pn(e)?Nr:Qt.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xc.enqueueReplaceState(r,r.state,null),Vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",i=e;do n+=V_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vS=typeof WeakMap=="function"?WeakMap:Map;function ov(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,Hd=i),Dd(t,e)},n}function lv(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dd(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=LS.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var xS=Pi.ReactCurrentOwner,hn=!1;function rn(t,e,n,i){e.child=t===null?O0(e,null,n,i):Vs(e,t.child,n,i)}function dp(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=Gh(t,e,n,i,s,r),n=jh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(vt&&n&&Rh(e),e.flags|=1,rn(t,e,i,r),e.child)}function hp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cv(t,e,s,i,r)):(t=Tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(a,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function cv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return Id(t,e,n,i,r)}function uv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(bs,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(bs,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(bs,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(bs,Sn),Sn|=i;return rn(t,e,r,n),e.child}function dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,i,r){var s=pn(n)?Nr:Qt.current;return s=js(e,s),Fs(e,r),n=Gh(t,e,n,i,s,r),i=jh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(vt&&i&&Rh(e),e.flags|=1,rn(t,e,n,r),e.child)}function fp(t,e,n,i,r){if(pn(n)){var s=!0;zl(e)}else s=!1;if(Fs(e,r),e.stateNode===null)Ml(t,e),av(e,n,i),Nd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=pn(n)?Nr:Qt.current,c=js(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&op(e,a,i,c),Bi=!1;var f=e.memoizedState;a.state=f,Vl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||fn.current||Bi?(typeof h=="function"&&(Ld(e,n,h,i),l=e.memoizedState),(o=Bi||ap(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,z0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Hn(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=pn(n)?Nr:Qt.current,l=js(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&op(e,a,i,l),Bi=!1,f=e.memoizedState,a.state=f,Vl(e,i,a,r);var x=e.memoizedState;o!==p||f!==x||fn.current||Bi?(typeof m=="function"&&(Ld(e,n,m,i),x=e.memoizedState),(c=Bi||ap(e,n,c,i,f,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ud(t,e,n,i,s,r)}function Ud(t,e,n,i,r,s){dv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Jf(e,n,!1),Ci(t,e,s);i=e.stateNode,xS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&Jf(e,n,!0),e.child}function hv(t){var e=t.stateNode;e.pendingContext?Zf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zf(t,e.context,!1),Oh(t,e.containerInfo)}function pp(t,e,n,i,r){return Hs(),Lh(r),e.flags|=256,rn(t,e,n,i),e.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function Od(t){return{baseLanes:t,cachePool:null,transitions:null}}function fv(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(yt,r&1),t===null)return Rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Sc(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Od(n),e.memoizedState=Fd,t):Wh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return _S(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=er(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Od(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Fd,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wh(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function No(t,e,n,i){return i!==null&&Lh(i),Vs(e,t.child,null,n),t=Wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _S(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ou(Error(ye(422))),No(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sc({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,a),e.child.memoizedState=Od(a),e.memoizedState=Fd,s);if(!(e.mode&1))return No(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ye(419)),i=ou(s,i,void 0),No(t,e,a,i)}if(o=(a&t.childLanes)!==0,hn||o){if(i=Gt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Zn(i,t,r,-1))}return Zh(),i=ou(Error(ye(421))),No(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=NS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=Ki(r.nextSibling),En=e,vt=!0,Xn=null,t!==null&&(Rn[Pn++]=yi,Rn[Pn++]=Si,Rn[Pn++]=Dr,yi=t.id,Si=t.overflow,Dr=e),e=Wh(e,i.children),e.flags|=4096,e)}function mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pd(t.return,e,n)}function lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function pv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,n,e);else if(t.tag===19)mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}lu(e,!0,n,null,s);break;case"together":lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ye(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yS(t,e,n){switch(e.tag){case 3:hv(e),Hs();break;case 5:B0(e);break;case 1:pn(e.type)&&zl(e);break;case 4:Oh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?fv(t,e,n):(ft(yt,yt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return pv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,uv(t,e,n)}return Ci(t,e,n)}var mv,kd,gv,vv;mv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};gv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(si.current);var s=null;switch(n){case"input":r=ad(t,r),i=ad(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=cd(t,r),i=cd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}dd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ka.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ka.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};vv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ca(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function SS(t,e,n){var i=e.pendingProps;switch(Ph(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return pn(e.type)&&kl(),$t(e),null;case 3:return i=e.stateNode,Ws(),gt(fn),gt(Qt),zh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(Xd(Xn),Xn=null))),kd(t,e),$t(e),null;case 5:kh(e);var r=Tr(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)gv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ye(166));return $t(e),null}if(t=Tr(si.current),Po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Ma.length;r++)pt(Ma[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":wf(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Af(i,s),pt("invalid",i)}dd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),r=["children",""+o]):ka.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(n){case"input":So(i),Tf(i,s,!0);break;case"textarea":So(i),bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ni]=e,t[Ya]=i,mv(t,e,!1,!1),e.stateNode=t;e:{switch(a=hd(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ma.length;r++)pt(Ma[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":wf(t,i),r=ad(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Af(t,i),r=cd(t,i),pt("invalid",t);break;default:r=i}dd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Yg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&za(t,l):typeof l=="number"&&za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&mh(t,s,l,a))}switch(n){case"input":So(t),Tf(t,i,!1);break;case"textarea":So(t),bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)vv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ye(166));if(n=Tr(Ka.current),Tr(si.current),Po(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return $t(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Mn!==null&&e.mode&1&&!(e.flags&128))U0(),Hs(),e.flags|=98560,s=!1;else if(s=Po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ye(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ye(317));s[ni]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Xn!==null&&(Xd(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?It===0&&(It=3):Zh())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Ws(),kd(t,e),t===null&&Xa(e.stateNode.containerInfo),$t(e),null;case 10:return Ih(e.type._context),$t(e),null;case 17:return pn(e.type)&&kl(),$t(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ca(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Wl(t),a!==null){for(e.flags|=128,ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>qs&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!vt)return $t(e),null}else 2*Pt()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=yt.current,ft(yt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ye(156,e.tag))}function MS(t,e){switch(Ph(e),e.tag){case 1:return pn(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),gt(fn),gt(Qt),zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kh(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ye(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return Ws(),null;case 10:return Ih(e.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var Do=!1,Jt=!1,ES=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function zd(t,e,n){try{n()}catch(i){bt(t,e,i)}}var gp=!1;function wS(t,e){if(Md=Il,t=M0(),Ch(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ed={focusedElem:t,selectionRange:n},Il=!1,Ne=e;Ne!==null;)if(e=Ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ne=t;else for(;Ne!==null;){e=Ne;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,g=x.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Hn(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}return x=gp,gp=!1,x}function Pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zd(e,n,s)}r=r.next}while(r!==i)}}function _c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xv(t){var e=t.alternate;e!==null&&(t.alternate=null,xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Ya],delete e[Ad],delete e[aS],delete e[oS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _v(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}function jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}var jt=null,Vn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)yv(t,e,n),n=n.sibling}function yv(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:Jt||As(n,e);case 6:var i=jt,r=Vn;jt=null,Ni(t,e,n),jt=i,Vn=r,jt!==null&&(Vn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Vn?(t=jt,n=n.stateNode,t.nodeType===8?tu(t.parentNode,n):t.nodeType===1&&tu(t,n),Ha(t)):tu(jt,n.stateNode));break;case 4:i=jt,r=Vn,jt=n.stateNode.containerInfo,Vn=!0,Ni(t,e,n),jt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zd(n,e,a),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Jt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Ni(t,e,n),Jt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ES),e.forEach(function(i){var r=DS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,Vn=!1;break e;case 3:jt=o.stateNode.containerInfo,Vn=!0;break e;case 4:jt=o.stateNode.containerInfo,Vn=!0;break e}o=o.return}if(jt===null)throw Error(ye(160));yv(s,a,r),jt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sv(e,t),e=e.sibling}function Sv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),Qn(t),i&4){try{Pa(3,t,t.return),_c(3,t)}catch(y){bt(t,t.return,y)}try{Pa(5,t,t.return)}catch(y){bt(t,t.return,y)}}break;case 1:zn(e,t),Qn(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(zn(e,t),Qn(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{za(r,"")}catch(y){bt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Hg(r,s),hd(o,a);var c=hd(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?Yg(r,p):h==="dangerouslySetInnerHTML"?Xg(r,p):h==="children"?za(r,p):mh(r,h,p,c)}switch(o){case"input":od(r,s);break;case"textarea":Vg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ns(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ya]=s}catch(y){bt(t,t.return,y)}}break;case 6:if(zn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ye(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){bt(t,t.return,y)}}break;case 3:if(zn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(y){bt(t,t.return,y)}break;case 4:zn(e,t),Qn(t);break;case 13:zn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yh=Pt())),i&4&&xp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||h,zn(e,t),Jt=c):zn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ne=t,h=t.child;h!==null;){for(p=Ne=h;Ne!==null;){switch(f=Ne,m=f.child,f.tag){case 0:case 11:case 14:case 15:Pa(4,f,f.return);break;case 1:As(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){bt(i,n,y)}}break;case 5:As(f,f.return);break;case 22:if(f.memoizedState!==null){yp(p);continue}}m!==null?(m.return=f,Ne=m):yp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=qg("display",a))}catch(y){bt(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){bt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zn(e,t),Qn(t),i&4&&xp(t);break;case 21:break;default:zn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_v(n)){var i=n;break e}n=n.return}throw Error(ye(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(za(r,""),i.flags&=-33);var s=vp(t);jd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=vp(t);Gd(t,o,a);break;default:throw Error(ye(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TS(t,e,n){Ne=t,Mv(t)}function Mv(t,e,n){for(var i=(t.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Do;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=Do;var c=Jt;if(Do=a,(Jt=l)&&!c)for(Ne=r;Ne!==null;)a=Ne,l=a.child,a.tag===22&&a.memoizedState!==null?Sp(r):l!==null?(l.return=a,Ne=l):Sp(r);for(;s!==null;)Ne=s,Mv(s),s=s.sibling;Ne=r,Do=o,Jt=c}_p(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):_p(t)}}function _p(t){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||_c(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ip(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ip(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ha(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}Jt||e.flags&512&&Bd(e)}catch(f){bt(e,e.return,f)}}if(e===t){Ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function yp(t){for(;Ne!==null;){var e=Ne;if(e===t){Ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function Sp(t){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_c(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Bd(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{Bd(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ne=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ne=o;break}Ne=e.return}}var AS=Math.ceil,Yl=Pi.ReactCurrentDispatcher,Xh=Pi.ReactCurrentOwner,Un=Pi.ReactCurrentBatchConfig,st=0,Gt=null,Nt=null,Wt=0,Sn=0,bs=lr(0),It=0,eo=null,Ur=0,yc=0,qh=0,La=null,un=null,Yh=0,qs=1/0,mi=null,$l=!1,Hd=null,Ji=null,Io=!1,Vi=null,Kl=0,Na=0,Vd=null,El=-1,wl=0;function an(){return st&6?Pt():El!==-1?El:El=Pt()}function Qi(t){return t.mode&1?st&2&&Wt!==0?Wt&-Wt:cS.transition!==null?(wl===0&&(wl=a0()),wl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:f0(t.type)),t):1}function Zn(t,e,n,i){if(50<Na)throw Na=0,Vd=null,Error(ye(185));lo(t,n,i),(!(st&2)||t!==Gt)&&(t===Gt&&(!(st&2)&&(yc|=n),It===4&&ji(t,Wt)),mn(t,i),n===1&&st===0&&!(e.mode&1)&&(qs=Pt()+500,gc&&cr()))}function mn(t,e){var n=t.callbackNode;cy(t,e);var i=Dl(t,t===Gt?Wt:0);if(i===0)n!==null&&Pf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Pf(n),e===1)t.tag===0?lS(Mp.bind(null,t)):N0(Mp.bind(null,t)),rS(function(){!(st&6)&&cr()}),n=null;else{switch(o0(i)){case 1:n=yh;break;case 4:n=r0;break;case 16:n=Nl;break;case 536870912:n=s0;break;default:n=Nl}n=Pv(n,Ev.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ev(t,e){if(El=-1,wl=0,st&6)throw Error(ye(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=Dl(t,t===Gt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=st;st|=2;var s=Tv();(Gt!==t||Wt!==e)&&(mi=null,qs=Pt()+500,Ar(t,e));do try{RS();break}catch(o){wv(t,o)}while(!0);Dh(),Yl.current=s,st=r,Nt!==null?e=0:(Gt=null,Wt=0,e=It)}if(e!==0){if(e===2&&(r=vd(t),r!==0&&(i=r,e=Wd(t,r))),e===1)throw n=eo,Ar(t,0),ji(t,i),mn(t,Pt()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!bS(r)&&(e=Zl(t,i),e===2&&(s=vd(t),s!==0&&(i=s,e=Wd(t,s))),e===1))throw n=eo,Ar(t,0),ji(t,i),mn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ye(345));case 2:_r(t,un,mi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=Yh+500-Pt(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Td(_r.bind(null,t,un,mi),e);break}_r(t,un,mi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*AS(i/1960))-i,10<i){t.timeoutHandle=Td(_r.bind(null,t,un,mi),i);break}_r(t,un,mi);break;case 5:_r(t,un,mi);break;default:throw Error(ye(329))}}}return mn(t,Pt()),t.callbackNode===n?Ev.bind(null,t):null}function Wd(t,e){var n=La;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=un,un=n,e!==null&&Xd(e)),t}function Xd(t){un===null?un=t:un.push.apply(un,t)}function bS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~qh,e&=~yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if(st&6)throw Error(ye(327));Os();var e=Dl(t,0);if(!(e&1))return mn(t,Pt()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=vd(t);i!==0&&(e=i,n=Wd(t,i))}if(n===1)throw n=eo,Ar(t,0),ji(t,e),mn(t,Pt()),n;if(n===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,un,mi),mn(t,Pt()),null}function $h(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(qs=Pt()+500,gc&&cr())}}function Fr(t){Vi!==null&&Vi.tag===0&&!(st&6)&&Os();var e=st;st|=1;var n=Un.transition,i=ot;try{if(Un.transition=null,ot=1,t)return t()}finally{ot=i,Un.transition=n,st=e,!(st&6)&&cr()}}function Kh(){Sn=bs.current,gt(bs)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iS(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Ph(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:Ws(),gt(fn),gt(Qt),zh();break;case 5:kh(i);break;case 4:Ws();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:Ih(i.type._context);break;case 22:case 23:Kh()}n=n.return}if(Gt=t,Nt=t=er(t.current,null),Wt=Sn=e,It=0,eo=null,qh=yc=Ur=0,un=La=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}wr=null}return t}function wv(t,e){do{var n=Nt;try{if(Dh(),yl.current=ql,Xl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(Ir=0,Bt=Dt=Mt=null,Ra=!1,Za=0,Xh.current=null,n===null||n.return===null){It=1,eo=e,Nt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=cp(a);if(m!==null){m.flags&=-257,up(m,a,o,s,e),m.mode&1&&lp(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){lp(s,c,e),Zh();break e}l=Error(ye(426))}}else if(vt&&o.mode&1){var g=cp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),up(g,a,o,s,e),Lh(Xs(l,o));break e}}s=l=Xs(l,o),It!==4&&(It=2),La===null?La=[s]:La.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=ov(s,l,e);np(s,d);break e;case 1:o=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ji===null||!Ji.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=lv(s,o,e);np(s,S);break e}}s=s.return}while(s!==null)}bv(n)}catch(L){e=L,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function Tv(){var t=Yl.current;return Yl.current=ql,t===null?ql:t}function Zh(){(It===0||It===3||It===2)&&(It=4),Gt===null||!(Ur&268435455)&&!(yc&268435455)||ji(Gt,Wt)}function Zl(t,e){var n=st;st|=2;var i=Tv();(Gt!==t||Wt!==e)&&(mi=null,Ar(t,e));do try{CS();break}catch(r){wv(t,r)}while(!0);if(Dh(),st=n,Yl.current=i,Nt!==null)throw Error(ye(261));return Gt=null,Wt=0,It}function CS(){for(;Nt!==null;)Av(Nt)}function RS(){for(;Nt!==null&&!ey();)Av(Nt)}function Av(t){var e=Rv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?bv(t):Nt=e,Xh.current=null}function bv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MS(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Nt=null;return}}else if(n=SS(n,e,Sn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);It===0&&(It=5)}function _r(t,e,n){var i=ot,r=Un.transition;try{Un.transition=null,ot=1,PS(t,e,n,i)}finally{Un.transition=r,ot=i}return null}function PS(t,e,n,i){do Os();while(Vi!==null);if(st&6)throw Error(ye(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uy(t,s),t===Gt&&(Nt=Gt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Io||(Io=!0,Pv(Nl,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=ot;ot=1;var o=st;st|=4,Xh.current=null,wS(t,n),Sv(n,t),Ky(Ed),Il=!!Md,Ed=Md=null,t.current=n,TS(n),ty(),st=o,ot=a,Un.transition=s}else t.current=n;if(Io&&(Io=!1,Vi=t,Kl=r),s=t.pendingLanes,s===0&&(Ji=null),ry(n.stateNode),mn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=Hd,Hd=null,t;return Kl&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Vd?Na++:(Na=0,Vd=t):Na=0,cr(),null}function Os(){if(Vi!==null){var t=o0(Kl),e=Un.transition,n=ot;try{if(Un.transition=null,ot=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Kl=0,st&6)throw Error(ye(331));var r=st;for(st|=4,Ne=t.current;Ne!==null;){var s=Ne,a=s.child;if(Ne.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ne=c;Ne!==null;){var h=Ne;switch(h.tag){case 0:case 11:case 15:Pa(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ne=p;else for(;Ne!==null;){h=Ne;var f=h.sibling,m=h.return;if(xv(h),h===c){Ne=null;break}if(f!==null){f.return=m,Ne=f;break}Ne=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ne=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ne=a;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ne=d;break e}Ne=s.return}}var _=t.current;for(Ne=_;Ne!==null;){a=Ne;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Ne=v;else e:for(a=_;Ne!==null;){if(o=Ne,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:_c(9,o)}}catch(L){bt(o,o.return,L)}if(o===a){Ne=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ne=S;break e}Ne=o.return}}if(st=r,cr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(dc,t)}catch{}i=!0}return i}finally{ot=n,Un.transition=e}}return!1}function Ep(t,e,n){e=Xs(n,e),e=ov(t,e,1),t=Zi(t,e,1),e=an(),t!==null&&(lo(t,1,e),mn(t,e))}function bt(t,e,n){if(t.tag===3)Ep(t,t,n);else for(;e!==null;){if(e.tag===3){Ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=Xs(n,t),t=lv(e,t,1),e=Zi(e,t,1),t=an(),e!==null&&(lo(e,1,t),mn(e,t));break}}e=e.return}}function LS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Wt&n)===n&&(It===4||It===3&&(Wt&130023424)===Wt&&500>Pt()-Yh?Ar(t,0):qh|=n),mn(t,e)}function Cv(t,e){e===0&&(t.mode&1?(e=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):e=1);var n=an();t=bi(t,e),t!==null&&(lo(t,e,n),mn(t,n))}function NS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cv(t,n)}function DS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ye(314))}i!==null&&i.delete(e),Cv(t,n)}var Rv;Rv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,yS(t,e,n);hn=!!(t.flags&131072)}else hn=!1,vt&&e.flags&1048576&&D0(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ml(t,e),t=e.pendingProps;var r=js(e,Qt.current);Fs(e,n),r=Gh(null,e,i,t,r,n);var s=jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,zl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fh(e),r.updater=xc,e.stateNode=r,r._reactInternals=e,Nd(e,i,t,n),e=Ud(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Rh(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=US(i),t=Hn(i,t),r){case 0:e=Id(null,e,i,t,n);break e;case 1:e=fp(null,e,i,t,n);break e;case 11:e=dp(null,e,i,t,n);break e;case 14:e=hp(null,e,i,Hn(i.type,t),n);break e}throw Error(ye(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),fp(t,e,i,r,n);case 3:e:{if(hv(e),t===null)throw Error(ye(387));i=e.pendingProps,s=e.memoizedState,r=s.element,z0(t,e),Vl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xs(Error(ye(423)),e),e=pp(t,e,i,n,r);break e}else if(i!==r){r=Xs(Error(ye(424)),e),e=pp(t,e,i,n,r);break e}else for(Mn=Ki(e.stateNode.containerInfo.firstChild),En=e,vt=!0,Xn=null,n=O0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Ci(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return B0(e),t===null&&Rd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,wd(i,r)?a=null:s!==null&&wd(i,s)&&(e.flags|=32),dv(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&Rd(e),null;case 13:return fv(t,e,n);case 4:return Oh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),dp(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ft(jl,i._currentValue),i._currentValue=a,s!==null)if(Jn(s.value,a)){if(s.children===r.children&&!fn.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ye(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Pd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=On(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),hp(t,e,i,r,n);case 15:return cv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ml(t,e),e.tag=1,pn(i)?(t=!0,zl(e)):t=!1,Fs(e,n),av(e,i,r),Nd(e,i,r,n),Ud(null,e,i,!0,t,n);case 19:return pv(t,e,n);case 22:return uv(t,e,n)}throw Error(ye(156,e.tag))};function Pv(t,e){return i0(t,e)}function IS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new IS(t,e,n,i)}function Jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function US(t){if(typeof t=="function")return Jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vh)return 11;if(t===xh)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Jh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case vs:return br(n.children,r,s,e);case gh:a=8,r|=8;break;case nd:return t=In(12,n,e,r|2),t.elementType=nd,t.lanes=s,t;case id:return t=In(13,n,e,r),t.elementType=id,t.lanes=s,t;case rd:return t=In(19,n,e,r),t.elementType=rd,t.lanes=s,t;case Bg:return Sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kg:a=10;break e;case zg:a=9;break e;case vh:a=11;break e;case xh:a=14;break e;case zi:a=16,i=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return e=In(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function Sc(t,e,n,i){return t=In(22,t,i,e),t.elementType=Bg,t.lanes=n,t.stateNode={isHidden:!1},t}function cu(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function uu(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qh(t,e,n,i,r,s,a,o,l){return t=new FS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(s),t}function OS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lv(t){if(!t)return sr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(ye(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ye(171))}if(t.tag===1){var n=t.type;if(pn(n))return L0(t,n,e)}return e}function Nv(t,e,n,i,r,s,a,o,l){return t=Qh(n,i,!0,t,r,s,a,o,l),t.context=Lv(null),n=t.current,i=an(),r=Qi(n),s=Ei(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,lo(t,r,i),mn(t,i),t}function Mc(t,e,n,i){var r=e.current,s=an(),a=Qi(r);return n=Lv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,a),t!==null&&(Zn(t,r,a,s),_l(t,r,a)),a}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ef(t,e){wp(t,e),(t=t.alternate)&&wp(t,e)}function kS(){return null}var Dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function tf(t){this._internalRoot=t}Ec.prototype.render=tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ye(409));Mc(t,e,null,null)};Ec.prototype.unmount=tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){Mc(null,t,null,null)}),e[Ai]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=u0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&h0(t)}};function nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function zS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(a);s.call(c)}}var a=Nv(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=a,t[Ai]=a.current,Xa(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Jl(l);o.call(c)}}var l=Qh(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[Ai]=l.current,Xa(t.nodeType===8?t.parentNode:t),Fr(function(){Mc(e,l,n,i)}),l}function Tc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Jl(a);o.call(l)}}Mc(e,a,t,r)}else a=zS(n,e,t,r,i);return Jl(a)}l0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Sa(e.pendingLanes);n!==0&&(Sh(e,n|1),mn(e,Pt()),!(st&6)&&(qs=Pt()+500,cr()))}break;case 13:Fr(function(){var i=bi(t,1);if(i!==null){var r=an();Zn(i,t,1,r)}}),ef(t,1)}};Mh=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=an();Zn(e,t,134217728,n)}ef(t,134217728)}};c0=function(t){if(t.tag===13){var e=Qi(t),n=bi(t,e);if(n!==null){var i=an();Zn(n,t,e,i)}ef(t,e)}};u0=function(){return ot};d0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};pd=function(t,e,n){switch(e){case"input":if(od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mc(i);if(!r)throw Error(ye(90));jg(i),od(i,r)}}}break;case"textarea":Vg(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};Zg=$h;Jg=Fr;var BS={usingClientEntryPoint:!1,Events:[uo,Ss,mc,$g,Kg,$h]},ua={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GS={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t0(t),t===null?null:t.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||kS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{dc=Uo.inject(GS),ri=Uo}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(e))throw Error(ye(200));return OS(t,e,null,n)};Tn.createRoot=function(t,e){if(!nf(t))throw Error(ye(299));var n=!1,i="",r=Dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qh(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Xa(t.nodeType===8?t.parentNode:t),new tf(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=t0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Fr(t)};Tn.hydrate=function(t,e,n){if(!wc(e))throw Error(ye(200));return Tc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!nf(t))throw Error(ye(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Dv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,r,!1,s,a),t[Ai]=e.current,Xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ec(e)};Tn.render=function(t,e,n){if(!wc(e))throw Error(ye(200));return Tc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!wc(t))throw Error(ye(40));return t._reactRootContainer?(Fr(function(){Tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Tn.unstable_batchedUpdates=$h;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wc(n))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return Tc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Iv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iv)}catch(t){console.error(t)}}Iv(),Ig.exports=Tn;var jS=Ig.exports,Ap=jS;ed.createRoot=Ap.createRoot,ed.hydrateRoot=Ap.hydrateRoot;/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function VS(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:HS(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=t=>{const e=WS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function du(t){return t!=null}function qS(t,e={}){var f,m;const n=e.attributeNames??{},i=x=>n[x]??x,r=t.size??t.width??fr.width,s=t.size??t.height??fr.height,a=((f=t.aliases)==null?void 0:f.filter(x=>typeof x=="string"&&x.trim()!=="").map(x=>`lucide-${x}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?qd(...l):qd("lucide",...o,...l),h=e.absoluteStrokeWidth?Number(e.strokeWidth??fr["stroke-width"])*Number(t.size??t.width??fr.width)/Number(e.size??e.width??fr.width):e.strokeWidth??fr["stroke-width"];return["svg",{...Object.entries(fr).reduce((x,[y,g])=>(x[i(y)]=g,x),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&du(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&du(e.width)&&{[i("width")]:e.width},..."height"in e&&du(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(x=>{const[y,g,d]=x,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...g}:g;return d?[y,_,d]:[y,_]})]}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function YS(t,e={}){return qS(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},KS=me.createContext({}),ZS=()=>me.useContext(KS),JS=me.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:h={node:c,aliases:[],size:24},...p},f)=>{const{size:m=24,strokeWidth:x=2,absoluteStrokeWidth:y=!1,nonScalingStroke:g=!1,color:d="currentColor",className:_=""}=ZS()??{},v=!!l||$S(p),[S,L,b=[]]=YS(h,{color:t??d,width:n??e??m,height:i??e??m,strokeWidth:r??x,absoluteStrokeWidth:s??y,nonScalingStroke:a??g,className:qd(_,o),hasA11yProp:v,attributes:p});return me.createElement(S,{ref:f,...L},[...b.map(([T,F])=>me.createElement(T,F)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ke(t,e=[],n=[]){const i=typeof t=="string"?VS(t,e,n):t,r=me.forwardRef(({className:s,...a},o)=>me.createElement(JS,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=XS(i.name)),r}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Uv.node;const Fv=Ke(Uv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};Ov.node;const QS=Ke(Ov);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv={name:"chart-line",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],aliases:["line-chart"]};kv.node;const zv=Ke(kv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Bv.node;const Fo=Ke(Bv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Gv.node;const eM=Ke(Gv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};jv.node;const tM=Ke(jv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Hv.node;const nM=Ke(Hv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};Vv.node;const iM=Ke(Vv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Wv.node;const Ql=Ke(Wv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Xv.node;const Di=Ke(Xv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv={name:"circle-plus",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-circle"]};qv.node;const rM=Ke(qv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Yv.node;const sM=Ke(Yv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};$v.node;const aM=Ke($v);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};Kv.node;const oM=Ke(Kv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Zv.node;const lM=Ke(Zv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Jv.node;const Qv=Ke(Jv);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};ex.node;const cM=Ke(ex);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};tx.node;const uM=Ke(tx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"medal",size:24,node:[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]};nx.node;const hu=Ke(nx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};ix.node;const dM=Ke(ix);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};rx.node;const hM=Ke(rx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};sx.node;const bp=Ke(sx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};ax.node;const fM=Ke(ax);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};ox.node;const Cp=Ke(ox);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx={name:"ruler",size:24,node:[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]};lx.node;const Ea=Ke(lx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx={name:"scale",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]};cx.node;const pM=Ke(cx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};ux.node;const mM=Ke(ux);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};dx.node;const gM=Ke(dx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};hx.node;const vM=Ke(hx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};fx.node;const xM=Ke(fx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};px.node;const _M=Ke(px);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};mx.node;const yM=Ke(mx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};gx.node;const Rp=Ke(gx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};vx.node;const Pp=Ke(vx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};xx.node;const Lp=Ke(xx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};_x.node;const yx=Ke(_x);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Sx.node;const SM=Ke(Sx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Mx.node;const MM=Ke(Mx);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ex.node;const Ac=Ke(Ex);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};wx.node;const Np=Ke(wx);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="160",Yr={ROTATE:0,DOLLY:1,PAN:2},$r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},EM=0,Dp=1,wM=2,Tx=1,Ax=2,pi=3,ar=0,gn=1,qn=2,tr=0,ks=1,Ip=2,Up=3,Fp=4,TM=5,Sr=100,AM=101,bM=102,Op=103,kp=104,CM=200,RM=201,PM=202,LM=203,Yd=204,$d=205,NM=206,DM=207,IM=208,UM=209,FM=210,OM=211,kM=212,zM=213,BM=214,GM=0,jM=1,HM=2,ec=3,VM=4,WM=5,XM=6,qM=7,bx=0,YM=1,$M=2,nr=0,KM=1,ZM=2,JM=3,Cx=4,QM=5,e1=6,Rx=300,Ys=301,$s=302,Kd=303,Zd=304,bc=306,Jd=1e3,Yn=1001,Qd=1002,sn=1003,zp=1004,fu=1005,Ln=1006,t1=1007,to=1008,ir=1009,n1=1010,i1=1011,sf=1012,Px=1013,Wi=1014,Xi=1015,no=1016,Lx=1017,Nx=1018,Cr=1020,r1=1021,$n=1023,s1=1024,a1=1025,Rr=1026,Ks=1027,o1=1028,Dx=1029,l1=1030,Ix=1031,Ux=1033,pu=33776,mu=33777,gu=33778,vu=33779,Bp=35840,Gp=35841,jp=35842,Hp=35843,Fx=36196,Vp=37492,Wp=37496,Xp=37808,qp=37809,Yp=37810,$p=37811,Kp=37812,Zp=37813,Jp=37814,Qp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,xu=36492,am=36494,om=36495,c1=36283,lm=36284,cm=36285,um=36286,Ox=3e3,Pr=3001,u1=3200,d1=3201,kx=0,h1=1,Dn="",Ht="srgb",Ri="srgb-linear",af="display-p3",Cc="display-p3-linear",tc="linear",mt="srgb",nc="rec709",ic="p3",Kr=7680,dm=519,f1=512,p1=513,m1=514,zx=515,g1=516,v1=517,x1=518,_1=519,eh=35044,hm="300 es",th=1035,Mi=2e3,rc=2001;class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=Math.PI/180,sc=180/Math.PI;function wi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function y1(t,e){return(t%e+e)%e}function _u(t,e,n){return(1-n)*t+n*e}function fm(t){return(t&t-1)===0&&t!==0}function nh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _i(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const S1={DEG2RAD:Al};class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,n,i,r,s,a,o,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],x=i[8],y=r[0],g=r[3],d=r[6],_=r[1],v=r[4],S=r[7],L=r[2],b=r[5],T=r[8];return s[0]=a*y+o*_+l*L,s[3]=a*g+o*v+l*b,s[6]=a*d+o*S+l*T,s[1]=c*y+h*_+p*L,s[4]=c*g+h*v+p*b,s[7]=c*d+h*S+p*T,s[2]=f*y+m*_+x*L,s[5]=f*g+m*v+x*b,s[8]=f*d+m*S+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,m=c*s-a*l,x=n*p+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=p*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new nt;function Bx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ac(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function M1(){const t=ac("canvas");return t.style.display="block",t}const pm={};function Da(t){t in pm||(pm[t]=!0,console.warn(t))}const mm=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gm=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[Ri]:{transfer:tc,primaries:nc,toReference:t=>t,fromReference:t=>t},[Ht]:{transfer:mt,primaries:nc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Cc]:{transfer:tc,primaries:ic,toReference:t=>t.applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm)},[af]:{transfer:mt,primaries:ic,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm).convertLinearToSRGB()}},E1=new Set([Ri,Cc]),ut={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!E1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Oo[e].toReference,r=Oo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Oo[t].primaries},getTransfer:function(t){return t===Dn?tc:Oo[t].transfer}};function zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Su(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zr;class Gx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zr===void 0&&(Zr=ac("canvas")),Zr.width=e.width,Zr.height=e.height;const i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ac("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w1=0;class jx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Mu(r[a].image)):s.push(Mu(r[a]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T1=0;class vn extends Vr{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Yn,r=Yn,s=Ln,a=to,o=$n,l=ir,c=vn.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=wi(),this.name="",this.source=new jx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Pr?Ht:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?Pr:Ox}set encoding(e){Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?Ht:Dn}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Rx;vn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],x=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,L=(d+1)/2,b=(h+f)/4,T=(p+y)/4,F=(x+g)/4;return v>S&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=T/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=T/s,r=F/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-x)*(g-x)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(p-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A1 extends Vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Da("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?Ht:Dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new jx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends A1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Hx extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class b1 extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],x=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(p!==y||l!==f||c!==m||h!==x){let g=1-o;const d=l*f+c*m+h*x+p*y,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const L=Math.sqrt(v),b=Math.atan2(L,d*_);g=Math.sin(g*b)/L,o=Math.sin(o*b)/L}const S=o*_;if(l=l*g+f*S,c=c*g+m*S,h=h*g+x*S,p=p*g+y*S,g===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=L,c*=L,h*=L,p*=L}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*p+l*m-c*f,e[n+1]=l*x+h*f+c*p-o*m,e[n+2]=c*x+h*m+o*f-l*p,e[n+3]=h*x-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*m*x,this._y=c*m*p-f*h*x,this._z=c*h*x+f*m*p,this._w=c*h*p-f*m*x;break;case"YXZ":this._x=f*h*p+c*m*x,this._y=c*m*p-f*h*x,this._z=c*h*x-f*m*p,this._w=c*h*p+f*m*x;break;case"ZXY":this._x=f*h*p-c*m*x,this._y=c*m*p+f*h*x,this._z=c*h*x+f*m*p,this._w=c*h*p-f*m*x;break;case"ZYX":this._x=f*h*p-c*m*x,this._y=c*m*p+f*h*x,this._z=c*h*x-f*m*p,this._w=c*h*p+f*m*x;break;case"YZX":this._x=f*h*p+c*m*x,this._y=c*m*p+f*h*x,this._z=c*h*x-f*m*p,this._w=c*h*p-f*m*x;break;case"XZY":this._x=f*h*p-c*m*x,this._y=c*m*p-f*h*x,this._z=c*h*x+f*m*p,this._w=c*h*p+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new U,vm=new kr;class fo{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ko.copy(i.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),zo.subVectors(this.max,da),Jr.subVectors(e.a,da),Qr.subVectors(e.b,da),es.subVectors(e.c,da),Ii.subVectors(Qr,Jr),Ui.subVectors(es,Qr),pr.subVectors(Jr,es);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-pr.z,pr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,pr.z,0,-pr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-pr.y,pr.x,0];return!wu(n,Jr,Qr,es,zo)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,Jr,Qr,es,zo))?!1:(Bo.crossVectors(Ii,Ui),n=[Bo.x,Bo.y,Bo.z],wu(n,Jr,Qr,es,zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,ko=new fo,Jr=new U,Qr=new U,es=new U,Ii=new U,Ui=new U,pr=new U,da=new U,zo=new U,Bo=new U,mr=new U;function wu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),h=i.dot(mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const C1=new fo,ha=new U,Tu=new U;class Rc{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):C1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const n=ha.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Tu)),this.expandByPoint(ha.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new U,Au=new U,Go=new U,Fi=new U,bu=new U,jo=new U,Cu=new U;class Pc{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Au.copy(e).add(n).multiplyScalar(.5),Go.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(Au);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Go),o=Fi.dot(this.direction),l=-Fi.dot(Go),c=Fi.lengthSq(),h=Math.abs(1-a*a);let p,f,m,x;if(h>0)if(p=a*l-o,f=a*o-l,x=s*h,p>=0)if(f>=-x)if(f<=x){const y=1/h;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-x?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=x?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Au).addScaledVector(Go,f),m}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){bu.subVectors(n,e),jo.subVectors(i,e),Cu.crossVectors(bu,jo);let a=this.direction.dot(Cu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);const l=o*this.direction.dot(jo.crossVectors(Fi,jo));if(l<0)return null;const c=o*this.direction.dot(bu.cross(Fi));if(c<0||l+c>a)return null;const h=-o*Fi.dot(Cu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,h,p,f,m,x,y,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,f,m,x,y,g)}set(e,n,i,r,s,a,o,l,c,h,p,f,m,x,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=x,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,x=o*h,y=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+x*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,x=c*h,y=c*p;n[0]=f+y*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,x=c*h,y=c*p;n[0]=f-y*o,n[4]=-a*p,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,x=o*h,y=o*p;n[0]=l*h,n[4]=x*c-m,n[8]=f*c+y,n[1]=l*p,n[5]=y*c+f,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,x=o*l,y=o*c;n[0]=l*h,n[4]=y-f*p,n[8]=x*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*p+x,n[10]=f-y*p}else if(e.order==="XZY"){const f=a*l,m=a*c,x=o*l,y=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+y,n[5]=a*h,n[9]=m*p-x,n[2]=x*p-m,n[6]=o*h,n[10]=y*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R1,e,P1)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Oi.crossVectors(i,_n),Oi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Oi.crossVectors(i,_n)),Oi.normalize(),Ho.crossVectors(_n,Oi),r[0]=Oi.x,r[4]=Ho.x,r[8]=_n.x,r[1]=Oi.y,r[5]=Ho.y,r[9]=_n.y,r[2]=Oi.z,r[6]=Ho.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],x=i[2],y=i[6],g=i[10],d=i[14],_=i[3],v=i[7],S=i[11],L=i[15],b=r[0],T=r[4],F=r[8],w=r[12],A=r[1],q=r[5],Z=r[9],le=r[13],O=r[2],V=r[6],X=r[10],ne=r[14],z=r[3],H=r[7],R=r[11],C=r[15];return s[0]=a*b+o*A+l*O+c*z,s[4]=a*T+o*q+l*V+c*H,s[8]=a*F+o*Z+l*X+c*R,s[12]=a*w+o*le+l*ne+c*C,s[1]=h*b+p*A+f*O+m*z,s[5]=h*T+p*q+f*V+m*H,s[9]=h*F+p*Z+f*X+m*R,s[13]=h*w+p*le+f*ne+m*C,s[2]=x*b+y*A+g*O+d*z,s[6]=x*T+y*q+g*V+d*H,s[10]=x*F+y*Z+g*X+d*R,s[14]=x*w+y*le+g*ne+d*C,s[3]=_*b+v*A+S*O+L*z,s[7]=_*T+v*q+S*V+L*H,s[11]=_*F+v*Z+S*X+L*R,s[15]=_*w+v*le+S*ne+L*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],x=e[3],y=e[7],g=e[11],d=e[15];return x*(+s*l*p-r*c*p-s*o*f+i*c*f+r*o*m-i*l*m)+y*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+g*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*h-i*c*h)+d*(-r*o*h-n*l*p+n*o*f+r*a*p-i*a*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],x=e[12],y=e[13],g=e[14],d=e[15],_=p*g*c-y*f*c+y*l*m-o*g*m-p*l*d+o*f*d,v=x*f*c-h*g*c-x*l*m+a*g*m+h*l*d-a*f*d,S=h*y*c-x*p*c+x*o*m-a*y*m-h*o*d+a*p*d,L=x*p*l-h*y*l-x*o*f+a*y*f+h*o*g-a*p*g,b=n*_+i*v+r*S+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=_*T,e[1]=(y*f*s-p*g*s-y*r*m+i*g*m+p*r*d-i*f*d)*T,e[2]=(o*g*s-y*l*s+y*r*c-i*g*c-o*r*d+i*l*d)*T,e[3]=(p*l*s-o*f*s-p*r*c+i*f*c+o*r*m-i*l*m)*T,e[4]=v*T,e[5]=(h*g*s-x*f*s+x*r*m-n*g*m-h*r*d+n*f*d)*T,e[6]=(x*l*s-a*g*s-x*r*c+n*g*c+a*r*d-n*l*d)*T,e[7]=(a*f*s-h*l*s+h*r*c-n*f*c-a*r*m+n*l*m)*T,e[8]=S*T,e[9]=(x*p*s-h*y*s-x*i*m+n*y*m+h*i*d-n*p*d)*T,e[10]=(a*y*s-x*o*s+x*i*c-n*y*c-a*i*d+n*o*d)*T,e[11]=(h*o*s-a*p*s-h*i*c+n*p*c+a*i*m-n*o*m)*T,e[12]=L*T,e[13]=(h*y*r-x*p*r+x*i*f-n*y*f-h*i*g+n*p*g)*T,e[14]=(x*o*r-a*y*r-x*i*l+n*y*l+a*i*g-n*o*g)*T,e[15]=(a*p*r-h*o*r+h*i*l-n*p*l-a*i*f+n*o*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,f=s*c,m=s*h,x=s*p,y=a*h,g=a*p,d=o*p,_=l*c,v=l*h,S=l*p,L=i.x,b=i.y,T=i.z;return r[0]=(1-(y+d))*L,r[1]=(m+S)*L,r[2]=(x-v)*L,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(f+d))*b,r[6]=(g+_)*b,r[7]=0,r[8]=(x+v)*T,r[9]=(g-_)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const a=ts.set(r[4],r[5],r[6]).length(),o=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,h=1/a,p=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=p,Gn.elements[9]*=p,Gn.elements[10]*=p,n.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Mi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,x;if(o===Mi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===rc)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Mi){const l=this.elements,c=1/(n-e),h=1/(i-r),p=1/(a-s),f=(n+e)*c,m=(i+r)*h;let x,y;if(o===Mi)x=(a+s)*p,y=-2*p;else if(o===rc)x=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ts=new U,Gn=new Et,R1=new U(0,0,0),P1=new U(1,1,1),Oi=new U,Ho=new U,_n=new U,xm=new Et,_m=new kr;class Lc{constructor(e=0,n=0,i=0,r=Lc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lc.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L1=0;const ym=new U,ns=new kr,di=new Et,Vo=new U,fa=new U,N1=new U,D1=new kr,Sm=new U(1,0,0),Mm=new U(0,1,0),Em=new U(0,0,1),I1={type:"added"},U1={type:"removed"};class Ct extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new U,n=new Lc,i=new kr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new nt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vo.copy(e):Vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(fa,Vo,this.up):di.lookAt(Vo,fa,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(di),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(I1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(U1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,N1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,D1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new U(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new U,hi=new U,Ru=new U,fi=new U,is=new U,rs=new U,wm=new U,Pu=new U,Lu=new U,Nu=new U;let Wo=!1;class Nn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),hi.subVectors(i,n),Ru.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(hi),l=jn.dot(Ru),c=hi.dot(hi),h=hi.dot(Ru),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Wo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),hi.subVectors(e,n),jn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),jn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Wo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wo=!0),Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),Pu.subVectors(e,i);const l=is.dot(Pu),c=rs.dot(Pu);if(l<=0&&c<=0)return n.copy(i);Lu.subVectors(e,r);const h=is.dot(Lu),p=rs.dot(Lu);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(is,a);Nu.subVectors(e,s);const m=is.dot(Nu),x=rs.dot(Nu);if(x>=0&&m<=x)return n.copy(s);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(rs,o);const g=h*x-m*p;if(g<=0&&p-h>=0&&m-x>=0)return wm.subVectors(s,r),o=(p-h)/(p-h+(m-x)),n.copy(r).addScaledVector(wm,o);const d=1/(g+y+f);return a=y*d,o=f*d,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=y1(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Du(a,s,e+1/3),this.g=Du(a,s,e),this.b=Du(a,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,n=Ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ht){const i=Vx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ut.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Vt(Zt.r*255,0,255))*65536+Math.round(Vt(Zt.g*255,0,255))*256+Math.round(Vt(Zt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ut.workingColorSpace){return ut.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ht){ut.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Ht?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(Xo);const i=_u(ki.h,Xo.h,n),r=_u(ki.s,Xo.s,n),s=_u(ki.l,Xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new et;et.NAMES=Vx;let F1=0;class Wr extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ks,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=$d,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ec&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bs extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new U,qo=new _e;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qo.fromBufferAttribute(this,n),qo.applyMatrix3(e),this.setXY(n,qo.x,qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_i(n,this.array)),n}setX(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_i(n,this.array)),n}setY(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_i(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_i(n,this.array)),n}setW(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}}class Wx extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Xx extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let O1=0;const Cn=new Et,Iu=new Ct,ss=new U,yn=new fo,pa=new fo,zt=new U;class Ut extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bx(e)?Xx:Wx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(yn.min,pa.min),yn.expandByPoint(zt),zt.addVectors(yn.max,pa.max),yn.expandByPoint(zt)):(yn.expandByPoint(pa.min),yn.expandByPoint(pa.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),zt.add(ss)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new U,h[A]=new U;const p=new U,f=new U,m=new U,x=new _e,y=new _e,g=new _e,d=new U,_=new U;function v(A,q,Z){p.fromArray(r,A*3),f.fromArray(r,q*3),m.fromArray(r,Z*3),x.fromArray(a,A*2),y.fromArray(a,q*2),g.fromArray(a,Z*2),f.sub(p),m.sub(p),y.sub(x),g.sub(x);const le=1/(y.x*g.y-g.x*y.y);isFinite(le)&&(d.copy(f).multiplyScalar(g.y).addScaledVector(m,-y.y).multiplyScalar(le),_.copy(m).multiplyScalar(y.x).addScaledVector(f,-g.x).multiplyScalar(le),c[A].add(d),c[q].add(d),c[Z].add(d),h[A].add(_),h[q].add(_),h[Z].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,q=S.length;A<q;++A){const Z=S[A],le=Z.start,O=Z.count;for(let V=le,X=le+O;V<X;V+=3)v(i[V+0],i[V+1],i[V+2])}const L=new U,b=new U,T=new U,F=new U;function w(A){T.fromArray(s,A*3),F.copy(T);const q=c[A];L.copy(q),L.sub(T.multiplyScalar(T.dot(q))).normalize(),b.crossVectors(F,q);const le=b.dot(h[A])<0?-1:1;l[A*4]=L.x,l[A*4+1]=L.y,l[A*4+2]=L.z,l[A*4+3]=le}for(let A=0,q=S.length;A<q;++A){const Z=S[A],le=Z.start,O=Z.count;for(let V=le,X=le+O;V<X;V+=3)w(i[V+0]),w(i[V+1]),w(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,x=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let d=0;d<h;d++)f[x++]=c[m++]}return new Fn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ut,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new Et,gr=new Pc,Yo=new Rc,Am=new U,as=new U,os=new U,ls=new U,Uu=new U,$o=new U,Ko=new _e,Zo=new _e,Jo=new _e,bm=new U,Cm=new U,Rm=new U,Qo=new U,el=new U;class at extends Ct{constructor(e=new Ut,n=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){$o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Uu.fromBufferAttribute(p,e),a?$o.addScaledVector(Uu,h):$o.addScaledVector(Uu.sub(n),h))}n.add($o)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Yo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Yo,Am)===null||gr.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Tm),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const g=f[x],d=a[g.materialIndex],_=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=_,L=v;S<L;S+=3){const b=o.getX(S),T=o.getX(S+1),F=o.getX(S+2);r=tl(this,d,e,i,c,h,p,b,T,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=x,d=y;g<d;g+=3){const _=o.getX(g),v=o.getX(g+1),S=o.getX(g+2);r=tl(this,a,e,i,c,h,p,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const g=f[x],d=a[g.materialIndex],_=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=_,L=v;S<L;S+=3){const b=S,T=S+1,F=S+2;r=tl(this,d,e,i,c,h,p,b,T,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=x,d=y;g<d;g+=3){const _=g,v=g+1,S=g+2;r=tl(this,a,e,i,c,h,p,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function k1(t,e,n,i,r,s,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ar,o),l===null)return null;el.copy(o),el.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(el);return c<n.near||c>n.far?null:{distance:c,point:el.clone(),object:t}}function tl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,as),t.getVertexPosition(l,os),t.getVertexPosition(c,ls);const h=k1(t,e,n,i,as,os,ls,Qo);if(h){r&&(Ko.fromBufferAttribute(r,o),Zo.fromBufferAttribute(r,l),Jo.fromBufferAttribute(r,c),h.uv=Nn.getInterpolation(Qo,as,os,ls,Ko,Zo,Jo,new _e)),s&&(Ko.fromBufferAttribute(s,o),Zo.fromBufferAttribute(s,l),Jo.fromBufferAttribute(s,c),h.uv1=Nn.getInterpolation(Qo,as,os,ls,Ko,Zo,Jo,new _e),h.uv2=h.uv1),a&&(bm.fromBufferAttribute(a,o),Cm.fromBufferAttribute(a,l),Rm.fromBufferAttribute(a,c),h.normal=Nn.getInterpolation(Qo,as,os,ls,bm,Cm,Rm,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new U,materialIndex:0};Nn.getNormal(as,os,ls,p.normal),h.face=p}return h}class ii extends Ut{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(p,2));function x(y,g,d,_,v,S,L,b,T,F,w){const A=S/T,q=L/F,Z=S/2,le=L/2,O=b/2,V=T+1,X=F+1;let ne=0,z=0;const H=new U;for(let R=0;R<X;R++){const C=R*q-le;for(let Y=0;Y<V;Y++){const D=Y*A-Z;H[y]=D*_,H[g]=C*v,H[d]=O,c.push(H.x,H.y,H.z),H[y]=0,H[g]=0,H[d]=b>0?1:-1,h.push(H.x,H.y,H.z),p.push(Y/T),p.push(1-R/F),ne+=1}}for(let R=0;R<F;R++)for(let C=0;C<T;C++){const Y=f+C+V*R,D=f+C+V*(R+1),j=f+(C+1)+V*(R+1),se=f+(C+1)+V*R;l.push(Y,D,se),l.push(D,j,se),z+=6}o.addGroup(m,z,w),m+=z,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function z1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function qx(t){return t.getRenderTarget()===null?t.outputColorSpace:ut.workingColorSpace}const B1={clone:Zs,merge:nn};var G1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G1,this.fragmentShader=j1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=z1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Yx extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends Yx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Al*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class H1 extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new dn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new dn(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new dn(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new dn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new dn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class $x extends vn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Ys,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V1 extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Da("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pr?Ht:Dn),this.texture=new $x(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ii(5,5,5),s=new zr({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:tr});s.uniforms.tEquirect.value=n;const a=new at(r,s),o=n.minFilter;return n.minFilter===to&&(n.minFilter=Ln),new H1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Fu=new U,W1=new U,X1=new nt;class vi{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fu.subVectors(i,n).cross(W1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||X1.getNormalMatrix(e),r=this.coplanarPoint(Fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Rc,nl=new U;class lf{constructor(e=new vi,n=new vi,i=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],p=r[6],f=r[7],m=r[8],x=r[9],y=r[10],g=r[11],d=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-m,S-d).normalize(),i[1].setComponents(l+s,f+c,g+m,S+d).normalize(),i[2].setComponents(l+a,f+h,g+x,S+_).normalize(),i[3].setComponents(l-a,f-h,g-x,S-_).normalize(),i[4].setComponents(l-o,f-p,g-y,S-v).normalize(),n===Mi)i[5].setComponents(l+o,f+p,g+y,S+v).normalize();else if(n===rc)i[5].setComponents(o,p,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function q1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const p=c.array,f=c.usage,m=p.byteLength,x=t.createBuffer();t.bindBuffer(h,x),t.bufferData(h,p,f),c.onUploadCallback();let y;if(p instanceof Float32Array)y=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=t.SHORT;else if(p instanceof Uint32Array)y=t.UNSIGNED_INT;else if(p instanceof Int32Array)y=t.INT;else if(p instanceof Int8Array)y=t.BYTE;else if(p instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,p){const f=h.array,m=h._updateRange,x=h.updateRanges;if(t.bindBuffer(p,c),m.count===-1&&x.length===0&&t.bufferSubData(p,0,f),x.length!==0){for(let y=0,g=x.length;y<g;y++){const d=x[y];n?t.bufferSubData(p,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):t.bufferSubData(p,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,r(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,h),p.version=c.version}}return{get:a,remove:o,update:l}}class io extends Ut{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=n/l,m=[],x=[],y=[],g=[];for(let d=0;d<h;d++){const _=d*f-a;for(let v=0;v<c;v++){const S=v*p-s;x.push(S,-_,0),y.push(0,0,1),g.push(v/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const v=_+c*d,S=_+c*(d+1),L=_+1+c*(d+1),b=_+1+c*d;m.push(v,S,b),m.push(S,L,b)}this.setIndex(m),this.setAttribute("position",new wt(x,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_E=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wE="gl_FragColor = linearToOutputTexel( gl_FragColor );",TE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ew=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ow=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Y1,alphahash_pars_fragment:$1,alphamap_fragment:K1,alphamap_pars_fragment:Z1,alphatest_fragment:J1,alphatest_pars_fragment:Q1,aomap_fragment:eE,aomap_pars_fragment:tE,batching_pars_vertex:nE,batching_vertex:iE,begin_vertex:rE,beginnormal_vertex:sE,bsdfs:aE,iridescence_fragment:oE,bumpmap_pars_fragment:lE,clipping_planes_fragment:cE,clipping_planes_pars_fragment:uE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:hE,color_fragment:fE,color_pars_fragment:pE,color_pars_vertex:mE,color_vertex:gE,common:vE,cube_uv_reflection_fragment:xE,defaultnormal_vertex:_E,displacementmap_pars_vertex:yE,displacementmap_vertex:SE,emissivemap_fragment:ME,emissivemap_pars_fragment:EE,colorspace_fragment:wE,colorspace_pars_fragment:TE,envmap_fragment:AE,envmap_common_pars_fragment:bE,envmap_pars_fragment:CE,envmap_pars_vertex:RE,envmap_physical_pars_fragment:GE,envmap_vertex:PE,fog_vertex:LE,fog_pars_vertex:NE,fog_fragment:DE,fog_pars_fragment:IE,gradientmap_pars_fragment:UE,lightmap_fragment:FE,lightmap_pars_fragment:OE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:zE,lights_pars_begin:BE,lights_toon_fragment:jE,lights_toon_pars_fragment:HE,lights_phong_fragment:VE,lights_phong_pars_fragment:WE,lights_physical_fragment:XE,lights_physical_pars_fragment:qE,lights_fragment_begin:YE,lights_fragment_maps:$E,lights_fragment_end:KE,logdepthbuf_fragment:ZE,logdepthbuf_pars_fragment:JE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:ew,map_fragment:tw,map_pars_fragment:nw,map_particle_fragment:iw,map_particle_pars_fragment:rw,metalnessmap_fragment:sw,metalnessmap_pars_fragment:aw,morphcolor_vertex:ow,morphnormal_vertex:lw,morphtarget_pars_vertex:cw,morphtarget_vertex:uw,normal_fragment_begin:dw,normal_fragment_maps:hw,normal_pars_fragment:fw,normal_pars_vertex:pw,normal_vertex:mw,normalmap_pars_fragment:gw,clearcoat_normal_fragment_begin:vw,clearcoat_normal_fragment_maps:xw,clearcoat_pars_fragment:_w,iridescence_pars_fragment:yw,opaque_fragment:Sw,packing:Mw,premultiplied_alpha_fragment:Ew,project_vertex:ww,dithering_fragment:Tw,dithering_pars_fragment:Aw,roughnessmap_fragment:bw,roughnessmap_pars_fragment:Cw,shadowmap_pars_fragment:Rw,shadowmap_pars_vertex:Pw,shadowmap_vertex:Lw,shadowmask_pars_fragment:Nw,skinbase_vertex:Dw,skinning_pars_vertex:Iw,skinning_vertex:Uw,skinnormal_vertex:Fw,specularmap_fragment:Ow,specularmap_pars_fragment:kw,tonemapping_fragment:zw,tonemapping_pars_fragment:Bw,transmission_fragment:Gw,transmission_pars_fragment:jw,uv_pars_fragment:Hw,uv_pars_vertex:Vw,uv_vertex:Ww,worldpos_vertex:Xw,background_vert:qw,background_frag:Yw,backgroundCube_vert:$w,backgroundCube_frag:Kw,cube_vert:Zw,cube_frag:Jw,depth_vert:Qw,depth_frag:eT,distanceRGBA_vert:tT,distanceRGBA_frag:nT,equirect_vert:iT,equirect_frag:rT,linedashed_vert:sT,linedashed_frag:aT,meshbasic_vert:oT,meshbasic_frag:lT,meshlambert_vert:cT,meshlambert_frag:uT,meshmatcap_vert:dT,meshmatcap_frag:hT,meshnormal_vert:fT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:vT,meshphysical_frag:xT,meshtoon_vert:_T,meshtoon_frag:yT,points_vert:ST,points_frag:MT,shadow_vert:ET,shadow_frag:wT,sprite_vert:TT,sprite_frag:AT},Ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ti={basic:{uniforms:nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:nn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:nn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:nn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:nn([Ae.points,Ae.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:nn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:nn([Ae.common,Ae.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:nn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:nn([Ae.sprite,Ae.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:nn([Ae.common,Ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:nn([Ae.lights,Ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ti.physical={uniforms:nn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const il={r:0,b:0,g:0};function bT(t,e,n,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,h,p=null,f=0,m=null;function x(g,d){let _=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===bc)?(h===void 0&&(h=new at(new ii(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Zs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ut.getTransfer(v.colorSpace)!==mt,(p!==v||f!==v.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=v,f=v.version,m=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new at(new io(2,2),new zr({name:"BackgroundMaterial",uniforms:Zs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||f!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=v,f=v.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,d){g.getRGB(il,qx(t)),i.buffers.color.setClear(il.r,il.g,il.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(g,d=1){o.set(g),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(o,l)},render:x}}function CT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l,h=!1;function p(O,V,X,ne,z){let H=!1;if(a){const R=y(ne,X,V);c!==R&&(c=R,m(c.object)),H=d(O,ne,X,z),H&&_(O,ne,X,z)}else{const R=V.wireframe===!0;(c.geometry!==ne.id||c.program!==X.id||c.wireframe!==R)&&(c.geometry=ne.id,c.program=X.id,c.wireframe=R,H=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,F(O,V,X,ne),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function x(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function y(O,V,X){const ne=X.wireframe===!0;let z=o[O.id];z===void 0&&(z={},o[O.id]=z);let H=z[V.id];H===void 0&&(H={},z[V.id]=H);let R=H[ne];return R===void 0&&(R=g(f()),H[ne]=R),R}function g(O){const V=[],X=[],ne=[];for(let z=0;z<r;z++)V[z]=0,X[z]=0,ne[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:ne,object:O,attributes:{},index:null}}function d(O,V,X,ne){const z=c.attributes,H=V.attributes;let R=0;const C=X.getAttributes();for(const Y in C)if(C[Y].location>=0){const j=z[Y];let se=H[Y];if(se===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;R++}return c.attributesNum!==R||c.index!==ne}function _(O,V,X,ne){const z={},H=V.attributes;let R=0;const C=X.getAttributes();for(const Y in C)if(C[Y].location>=0){let j=H[Y];j===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));const se={};se.attribute=j,j&&j.data&&(se.data=j.data),z[Y]=se,R++}c.attributes=z,c.attributesNum=R,c.index=ne}function v(){const O=c.newAttributes;for(let V=0,X=O.length;V<X;V++)O[V]=0}function S(O){L(O,0)}function L(O,V){const X=c.newAttributes,ne=c.enabledAttributes,z=c.attributeDivisors;X[O]=1,ne[O]===0&&(t.enableVertexAttribArray(O),ne[O]=1),z[O]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,V),z[O]=V)}function b(){const O=c.newAttributes,V=c.enabledAttributes;for(let X=0,ne=V.length;X<ne;X++)V[X]!==O[X]&&(t.disableVertexAttribArray(X),V[X]=0)}function T(O,V,X,ne,z,H,R){R===!0?t.vertexAttribIPointer(O,V,X,z,H):t.vertexAttribPointer(O,V,X,ne,z,H)}function F(O,V,X,ne){if(i.isWebGL2===!1&&(O.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const z=ne.attributes,H=X.getAttributes(),R=V.defaultAttributeValues;for(const C in H){const Y=H[C];if(Y.location>=0){let D=z[C];if(D===void 0&&(C==="instanceMatrix"&&O.instanceMatrix&&(D=O.instanceMatrix),C==="instanceColor"&&O.instanceColor&&(D=O.instanceColor)),D!==void 0){const j=D.normalized,se=D.itemSize,ue=n.get(D);if(ue===void 0)continue;const ie=ue.buffer,de=ue.type,Te=ue.bytesPerElement,Me=i.isWebGL2===!0&&(de===t.INT||de===t.UNSIGNED_INT||D.gpuType===Px);if(D.isInterleavedBufferAttribute){const we=D.data,I=we.stride,fe=D.offset;if(we.isInstancedInterleavedBuffer){for(let K=0;K<Y.locationSize;K++)L(Y.location+K,we.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let K=0;K<Y.locationSize;K++)S(Y.location+K);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let K=0;K<Y.locationSize;K++)T(Y.location+K,se/Y.locationSize,de,j,I*Te,(fe+se/Y.locationSize*K)*Te,Me)}else{if(D.isInstancedBufferAttribute){for(let we=0;we<Y.locationSize;we++)L(Y.location+we,D.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let we=0;we<Y.locationSize;we++)S(Y.location+we);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let we=0;we<Y.locationSize;we++)T(Y.location+we,se/Y.locationSize,de,j,se*Te,se/Y.locationSize*we*Te,Me)}}else if(R!==void 0){const j=R[C];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(Y.location,j);break;case 3:t.vertexAttrib3fv(Y.location,j);break;case 4:t.vertexAttrib4fv(Y.location,j);break;default:t.vertexAttrib1fv(Y.location,j)}}}}b()}function w(){Z();for(const O in o){const V=o[O];for(const X in V){const ne=V[X];for(const z in ne)x(ne[z].object),delete ne[z];delete V[X]}delete o[O]}}function A(O){if(o[O.id]===void 0)return;const V=o[O.id];for(const X in V){const ne=V[X];for(const z in ne)x(ne[z].object),delete ne[z];delete V[X]}delete o[O.id]}function q(O){for(const V in o){const X=o[V];if(X[O.id]===void 0)continue;const ne=X[O.id];for(const z in ne)x(ne[z].object),delete ne[z];delete X[O.id]}}function Z(){le(),h=!0,c!==l&&(c=l,m(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:le,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function RT(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,p){t.drawArrays(s,h,p),n.update(p,s,1)}function l(h,p,f){if(f===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,h,p,f),n.update(p,s,f)}function c(h,p,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(h[x],p[x]);else{m.multiDrawArraysWEBGL(s,h,0,p,0,f);let x=0;for(let y=0;y<f;y++)x+=p[y];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function PT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||e.has("OES_texture_float"),L=v&&S,b=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:b}}function LT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new vi,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const x=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||x===null||x.length===0||s&&!g)s?h(null):c();else{const _=s?0:i,v=_*4;let S=d.clippingState||null;l.value=S,S=h(x,f,v,m);for(let L=0;L!==v;++L)S[L]=n[L];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,x){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const d=m+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,S=m;v!==y;++v,S+=4)a.copy(p[v]).applyMatrix4(_,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function NT(t){let e=new WeakMap;function n(a,o){return o===Kd?a.mapping=Ys:o===Zd&&(a.mapping=$s),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Kd||o===Zd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new V1(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Zx extends Yx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cs=4,Pm=[.125,.215,.35,.446,.526,.582],Mr=20,Ou=new Zx,Lm=new et;let ku=null,zu=0,Bu=0;const yr=(1+Math.sqrt(5))/2,ds=1/yr,Nm=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,yr,ds),new U(0,yr,-ds),new U(ds,0,yr),new U(-ds,0,yr),new U(yr,ds,0),new U(-yr,ds,0)];class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ku=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,zu,Bu),e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:no,format:$n,colorSpace:Ri,depthBuffer:!1},r=Im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DT(s)),this._blurMaterial=IT(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,Ou)}_sceneToCubeUV(e,n,i,r){const o=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Lm),h.toneMapping=nr,h.autoClear=!1;const m=new Bs({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),x=new at(new ii,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(Lm),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;rl(r,_*v,d>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ys||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nm[(r-1)%Nm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new at(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mr-1),y=s/x,g=isFinite(s)?1+Math.floor(h*y):Mr;g>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);const d=[];let _=0;for(let T=0;T<Mr;++T){const F=T/y,w=Math.exp(-F*F/2);d.push(w),T===0?_+=w:T<g&&(_+=2*w)}for(let T=0;T<d.length;T++)d[T]=d[T]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const S=this._sizeLods[r],L=3*S*(r>v-Cs?r-v+Cs:0),b=4*(this._cubeSize-S);rl(n,L,b,3*S,2*S),l.setRenderTarget(n),l.render(p,Ou)}}function DT(t){const e=[],n=[],i=[];let r=t;const s=t-Cs+1+Pm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Cs?l=Pm[a-t+Cs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,x=6,y=3,g=2,d=1,_=new Float32Array(y*x*m),v=new Float32Array(g*x*m),S=new Float32Array(d*x*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,F=b>2?0:-1,w=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];_.set(w,y*x*b),v.set(f,g*x*b);const A=[b,b,b,b,b,b];S.set(A,d*x*b)}const L=new Ut;L.setAttribute("position",new Fn(_,y)),L.setAttribute("uv",new Fn(v,g)),L.setAttribute("faceIndex",new Fn(S,d)),e.push(L),r>Cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Im(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function IT(t,e,n){const i=new Float32Array(Mr),r=new U(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Um(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Fm(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Kd||l===Zd,h=l===Ys||l===$s;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return n===null&&(n=new Dm(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(c&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new Dm(t));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function FT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function OT(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const x in m){const y=m[x];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,x=p.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let v=0,S=_.length;v<S;v+=3){const L=_[v+0],b=_[v+1],T=_[v+2];f.push(L,b,b,T,T,L)}}else if(x!==void 0){const _=x.array;y=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const L=v+0,b=v+1,T=v+2;f.push(L,b,b,T,T,L)}}else return;const g=new(Bx(f)?Xx:Wx)(f,1);g.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function kT(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,x){t.drawElements(s,x,o,m*l),n.update(x,s,1)}function p(m,x,y){if(y===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,x,o,m*l,y),n.update(x,s,y)}function f(m,x,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<y;d++)this.render(m[d]/l,x[d]);else{g.multiDrawElementsWEBGL(s,x,0,o,m,0,y);let d=0;for(let _=0;_<y;_++)d+=x[_];n.update(d,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=f}function zT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function BT(t,e){return t[0]-e[0]}function GT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function jT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,p){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0;let g=s.get(h);if(g===void 0||g.count!==y){let V=function(){le.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var m=V;g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let w=0;v===!0&&(w=1),S===!0&&(w=2),L===!0&&(w=3);let A=h.attributes.position.count*w,q=1;A>e.maxTextureSize&&(q=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Z=new Float32Array(A*q*4*y),le=new Hx(Z,A,q,y);le.type=Xi,le.needsUpdate=!0;const O=w*4;for(let X=0;X<y;X++){const ne=b[X],z=T[X],H=F[X],R=A*q*4*X;for(let C=0;C<ne.count;C++){const Y=C*O;v===!0&&(a.fromBufferAttribute(ne,C),Z[R+Y+0]=a.x,Z[R+Y+1]=a.y,Z[R+Y+2]=a.z,Z[R+Y+3]=0),S===!0&&(a.fromBufferAttribute(z,C),Z[R+Y+4]=a.x,Z[R+Y+5]=a.y,Z[R+Y+6]=a.z,Z[R+Y+7]=0),L===!0&&(a.fromBufferAttribute(H,C),Z[R+Y+8]=a.x,Z[R+Y+9]=a.y,Z[R+Y+10]=a.z,Z[R+Y+11]=H.itemSize===4?a.w:1)}}g={count:y,texture:le,size:new _e(A,q)},s.set(h,g),h.addEventListener("dispose",V)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const _=h.morphTargetsRelative?1:1-d;p.getUniforms().setValue(t,"morphTargetBaseInfluence",_),p.getUniforms().setValue(t,"morphTargetInfluences",f),p.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const x=f===void 0?0:f.length;let y=i[h.id];if(y===void 0||y.length!==x){y=[];for(let S=0;S<x;S++)y[S]=[S,0];i[h.id]=y}for(let S=0;S<x;S++){const L=y[S];L[0]=S,L[1]=f[S]}y.sort(GT);for(let S=0;S<8;S++)S<x&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(BT);const g=h.morphAttributes.position,d=h.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const L=o[S],b=L[0],T=L[1];b!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+S)!==g[b]&&h.setAttribute("morphTarget"+S,g[b]),d&&h.getAttribute("morphNormal"+S)!==d[b]&&h.setAttribute("morphNormal"+S,d[b]),r[S]=T,_+=T):(g&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const v=h.morphTargetsRelative?1:1-_;p.getUniforms().setValue(t,"morphTargetBaseInfluence",v),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function HT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Jx extends vn{constructor(e,n,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:Rr,h!==Rr&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Rr&&(i=Wi),i===void 0&&h===Ks&&(i=Cr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Qx=new vn,e_=new Jx(1,1);e_.compareFunction=zx;const t_=new Hx,n_=new b1,i_=new $x,Om=[],km=[],zm=new Float32Array(16),Bm=new Float32Array(9),Gm=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Om[r];if(s===void 0&&(s=new Float32Array(r),Om[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nc(t,e){let n=km[e];n===void 0&&(n=new Int32Array(e),km[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function VT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function YT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Ot(n,i)}}function $T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Bm.set(i),t.uniformMatrix3fv(this.addr,!1,Bm),Ot(n,i)}}function KT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;zm.set(i),t.uniformMatrix4fv(this.addr,!1,zm),Ot(n,i)}}function ZT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function tA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?e_:Qx;n.setTexture2D(e||s,r)}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||n_,r)}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||i_,r)}function lA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||t_,r)}function cA(t){switch(t){case 5126:return VT;case 35664:return WT;case 35665:return XT;case 35666:return qT;case 35674:return YT;case 35675:return $T;case 35676:return KT;case 5124:case 35670:return ZT;case 35667:case 35671:return JT;case 35668:case 35672:return QT;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}function uA(t,e){t.uniform1fv(this.addr,e)}function dA(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function hA(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function fA(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function pA(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mA(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gA(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vA(t,e){t.uniform1iv(this.addr,e)}function xA(t,e){t.uniform2iv(this.addr,e)}function _A(t,e){t.uniform3iv(this.addr,e)}function yA(t,e){t.uniform4iv(this.addr,e)}function SA(t,e){t.uniform1uiv(this.addr,e)}function MA(t,e){t.uniform2uiv(this.addr,e)}function EA(t,e){t.uniform3uiv(this.addr,e)}function wA(t,e){t.uniform4uiv(this.addr,e)}function TA(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Qx,s[a])}function AA(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||n_,s[a])}function bA(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||i_,s[a])}function CA(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||t_,s[a])}function RA(t){switch(t){case 5126:return uA;case 35664:return dA;case 35665:return hA;case 35666:return fA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return vA;case 35667:case 35671:return xA;case 35668:case 35672:return _A;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return MA;case 36295:return EA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return CA}}class PA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cA(n.type)}}class LA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RA(n.type)}}class NA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function jm(t,e){t.seq.push(e),t.map[e.id]=e}function DA(t,e,n){const i=t.name,r=i.length;for(Gu.lastIndex=0;;){const s=Gu.exec(i),a=Gu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){jm(n,c===void 0?new PA(o,t,e):new LA(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new NA(o),jm(n,p)),n=p}}}class bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);DA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Hm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IA=37297;let UA=0;function FA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function OA(t){const e=ut.getPrimaries(ut.workingColorSpace),n=ut.getPrimaries(t);let i;switch(e===n?i="":e===ic&&n===nc?i="LinearDisplayP3ToLinearSRGB":e===nc&&n===ic&&(i="LinearSRGBToLinearDisplayP3"),t){case Ri:case Cc:return[i,"LinearTransferOETF"];case Ht:case af:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+FA(t.getShaderSource(e),a)}else return r}function kA(t,e){const n=OA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function zA(t,e){let n;switch(e){case KM:n="Linear";break;case ZM:n="Reinhard";break;case JM:n="OptimizedCineon";break;case Cx:n="ACESFilmic";break;case e1:n="AgX";break;case QM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function BA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function GA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rs).join(`
`)}function jA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function HA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Rs(t){return t!==""}function Wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(t){return t.replace(VA,XA)}const WA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XA(t,e){let n=$e[e];if(n===void 0){const i=WA.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ih(n)}const qA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(t){return t.replace(qA,YA)}function YA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ym(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $A(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Tx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ax?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function KA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function JA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bx:e="ENVMAP_BLENDING_MULTIPLY";break;case YM:e="ENVMAP_BLENDING_MIX";break;case $M:e="ENVMAP_BLENDING_ADD";break}return e}function QA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function e2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=$A(n),c=KA(n),h=ZA(n),p=JA(n),f=QA(n),m=n.isWebGL2?"":BA(n),x=GA(n),y=jA(s),g=r.createProgram();let d,_,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Rs).join(`
`),d.length>0&&(d+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Rs).join(`
`),_.length>0&&(_+=`
`)):(d=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),_=[m,Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?$e.tonemapping_pars_fragment:"",n.toneMapping!==nr?zA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,kA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),a=ih(a),a=Wm(a,n),a=Xm(a,n),o=ih(o),o=Wm(o,n),o=Xm(o,n),a=qm(a),o=qm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=v+d+a,L=v+_+o,b=Hm(r,r.VERTEX_SHADER,S),T=Hm(r,r.FRAGMENT_SHADER,L);r.attachShader(g,b),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function F(Z){if(t.debug.checkShaderErrors){const le=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(b).trim(),V=r.getShaderInfoLog(T).trim();let X=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,T);else{const z=Vm(r,b,"vertex"),H=Vm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+z+`
`+H)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(O===""||V==="")&&(ne=!1);ne&&(Z.diagnostics={runnable:X,programLog:le,vertexShader:{log:O,prefix:d},fragmentShader:{log:V,prefix:_}})}r.deleteShader(b),r.deleteShader(T),w=new bl(r,g),A=HA(r,g)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(g,IA)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}let t2=0;class n2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new i2(e),n.set(e,i)),i}}class i2{constructor(e){this.id=t2++,this.code=e,this.usedTimes=0}}function r2(t,e,n,i,r,s,a){const o=new of,l=new n2,c=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return w===0?"uv":`uv${w}`}function g(w,A,q,Z,le){const O=Z.fog,V=le.geometry,X=w.isMeshStandardMaterial?Z.environment:null,ne=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),z=ne&&ne.mapping===bc?ne.image.height:null,H=x[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const R=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,C=R!==void 0?R.length:0;let Y=0;V.morphAttributes.position!==void 0&&(Y=1),V.morphAttributes.normal!==void 0&&(Y=2),V.morphAttributes.color!==void 0&&(Y=3);let D,j,se,ue;if(H){const lt=ti[H];D=lt.vertexShader,j=lt.fragmentShader}else D=w.vertexShader,j=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),ue=l.getFragmentShaderID(w);const ie=t.getRenderTarget(),de=le.isInstancedMesh===!0,Te=le.isBatchedMesh===!0,Me=!!w.map,we=!!w.matcap,I=!!ne,fe=!!w.aoMap,K=!!w.lightMap,$=!!w.bumpMap,G=!!w.normalMap,he=!!w.displacementMap,te=!!w.emissiveMap,E=!!w.metalnessMap,M=!!w.roughnessMap,B=w.anisotropy>0,oe=w.clearcoat>0,ae=w.iridescence>0,re=w.sheen>0,be=w.transmission>0,pe=B&&!!w.anisotropyMap,Ee=oe&&!!w.clearcoatMap,Le=oe&&!!w.clearcoatNormalMap,Oe=oe&&!!w.clearcoatRoughnessMap,ce=ae&&!!w.iridescenceMap,Ge=ae&&!!w.iridescenceThicknessMap,je=re&&!!w.sheenColorMap,Ue=re&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,Re=!!w.specularColorMap,N=!!w.specularIntensityMap,xe=be&&!!w.transmissionMap,De=be&&!!w.thicknessMap,Ce=!!w.gradientMap,ge=!!w.alphaMap,k=w.alphaTest>0,Se=!!w.alphaHash,ve=!!w.extensions,ze=!!V.attributes.uv1,ke=!!V.attributes.uv2,We=!!V.attributes.uv3;let qe=nr;return w.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(qe=t.toneMapping),{isWebGL2:h,shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:D,fragmentShader:j,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Te,instancing:de,instancingColor:de&&le.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ri,map:Me,matcap:we,envMap:I,envMapMode:I&&ne.mapping,envMapCubeUVHeight:z,aoMap:fe,lightMap:K,bumpMap:$,normalMap:G,displacementMap:f&&he,emissiveMap:te,normalMapObjectSpace:G&&w.normalMapType===h1,normalMapTangentSpace:G&&w.normalMapType===kx,metalnessMap:E,roughnessMap:M,anisotropy:B,anisotropyMap:pe,clearcoat:oe,clearcoatMap:Ee,clearcoatNormalMap:Le,clearcoatRoughnessMap:Oe,iridescence:ae,iridescenceMap:ce,iridescenceThicknessMap:Ge,sheen:re,sheenColorMap:je,sheenRoughnessMap:Ue,specularMap:Fe,specularColorMap:Re,specularIntensityMap:N,transmission:be,transmissionMap:xe,thicknessMap:De,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===ks,alphaMap:ge,alphaTest:k,alphaHash:Se,combine:w.combine,mapUv:Me&&y(w.map.channel),aoMapUv:fe&&y(w.aoMap.channel),lightMapUv:K&&y(w.lightMap.channel),bumpMapUv:$&&y(w.bumpMap.channel),normalMapUv:G&&y(w.normalMap.channel),displacementMapUv:he&&y(w.displacementMap.channel),emissiveMapUv:te&&y(w.emissiveMap.channel),metalnessMapUv:E&&y(w.metalnessMap.channel),roughnessMapUv:M&&y(w.roughnessMap.channel),anisotropyMapUv:pe&&y(w.anisotropyMap.channel),clearcoatMapUv:Ee&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:je&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&y(w.sheenRoughnessMap.channel),specularMapUv:Fe&&y(w.specularMap.channel),specularColorMapUv:Re&&y(w.specularColorMap.channel),specularIntensityMapUv:N&&y(w.specularIntensityMap.channel),transmissionMapUv:xe&&y(w.transmissionMap.channel),thicknessMapUv:De&&y(w.thicknessMap.channel),alphaMapUv:ge&&y(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(G||B),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:ke,vertexUv3s:We,pointsUvs:le.isPoints===!0&&!!V.attributes.uv&&(Me||ge),fog:!!O,useFog:w.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:le.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:Y,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:qe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Me&&w.map.isVideoTexture===!0&&ut.getTransfer(w.map.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qn,flipSided:w.side===gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:ve&&w.extensions.derivatives===!0,extensionFragDepth:ve&&w.extensions.fragDepth===!0,extensionDrawBuffers:ve&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const q in w.defines)A.push(q),A.push(w.defines[q]);return w.isRawShaderMaterial===!1&&(_(A,w),v(A,w),A.push(t.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function _(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function v(w,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),w.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function S(w){const A=x[w.type];let q;if(A){const Z=ti[A];q=B1.clone(Z.uniforms)}else q=w.uniforms;return q}function L(w,A){let q;for(let Z=0,le=c.length;Z<le;Z++){const O=c[Z];if(O.cacheKey===A){q=O,++q.usedTimes;break}}return q===void 0&&(q=new e2(t,A,w,s),c.push(q)),q}function b(w){if(--w.usedTimes===0){const A=c.indexOf(w);c[A]=c[c.length-1],c.pop(),w.destroy()}}function T(w){l.remove(w)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:L,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:F}}function s2(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function a2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Km(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,m,x,y,g){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:m,groupOrder:x,renderOrder:p.renderOrder,z:y,group:g},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=m,d.groupOrder=x,d.renderOrder=p.renderOrder,d.z=y,d.group=g),e++,d}function o(p,f,m,x,y,g){const d=a(p,f,m,x,y,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(p,f,m,x,y,g){const d=a(p,f,m,x,y,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,f){n.length>1&&n.sort(p||a2),i.length>1&&i.sort(f||$m),r.length>1&&r.sort(f||$m)}function h(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function o2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Km,t.set(i,[a])):r>=s.length?(a=new Km,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function l2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new et};break;case"SpotLight":n={position:new U,direction:new U,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function c2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let u2=0;function d2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function h2(t,e){const n=new l2,i=c2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);const s=new U,a=new Et,o=new Et;function l(h,p){let f=0,m=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let y=0,g=0,d=0,_=0,v=0,S=0,L=0,b=0,T=0,F=0,w=0;h.sort(d2);const A=p===!0?Math.PI:1;for(let Z=0,le=h.length;Z<le;Z++){const O=h[Z],V=O.color,X=O.intensity,ne=O.distance,z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=V.r*X*A,m+=V.g*X*A,x+=V.b*X*A;else if(O.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(O.sh.coefficients[H],X);w++}else if(O.isDirectionalLight){const H=n.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity*A),O.castShadow){const R=O.shadow,C=i.get(O);C.shadowBias=R.bias,C.shadowNormalBias=R.normalBias,C.shadowRadius=R.radius,C.shadowMapSize=R.mapSize,r.directionalShadow[y]=C,r.directionalShadowMap[y]=z,r.directionalShadowMatrix[y]=O.shadow.matrix,S++}r.directional[y]=H,y++}else if(O.isSpotLight){const H=n.get(O);H.position.setFromMatrixPosition(O.matrixWorld),H.color.copy(V).multiplyScalar(X*A),H.distance=ne,H.coneCos=Math.cos(O.angle),H.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),H.decay=O.decay,r.spot[d]=H;const R=O.shadow;if(O.map&&(r.spotLightMap[T]=O.map,T++,R.updateMatrices(O),O.castShadow&&F++),r.spotLightMatrix[d]=R.matrix,O.castShadow){const C=i.get(O);C.shadowBias=R.bias,C.shadowNormalBias=R.normalBias,C.shadowRadius=R.radius,C.shadowMapSize=R.mapSize,r.spotShadow[d]=C,r.spotShadowMap[d]=z,b++}d++}else if(O.isRectAreaLight){const H=n.get(O);H.color.copy(V).multiplyScalar(X),H.halfWidth.set(O.width*.5,0,0),H.halfHeight.set(0,O.height*.5,0),r.rectArea[_]=H,_++}else if(O.isPointLight){const H=n.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity*A),H.distance=O.distance,H.decay=O.decay,O.castShadow){const R=O.shadow,C=i.get(O);C.shadowBias=R.bias,C.shadowNormalBias=R.normalBias,C.shadowRadius=R.radius,C.shadowMapSize=R.mapSize,C.shadowCameraNear=R.camera.near,C.shadowCameraFar=R.camera.far,r.pointShadow[g]=C,r.pointShadowMap[g]=z,r.pointShadowMatrix[g]=O.shadow.matrix,L++}r.point[g]=H,g++}else if(O.isHemisphereLight){const H=n.get(O);H.skyColor.copy(O.color).multiplyScalar(X*A),H.groundColor.copy(O.groundColor).multiplyScalar(X*A),r.hemi[v]=H,v++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==y||q.pointLength!==g||q.spotLength!==d||q.rectAreaLength!==_||q.hemiLength!==v||q.numDirectionalShadows!==S||q.numPointShadows!==L||q.numSpotShadows!==b||q.numSpotMaps!==T||q.numLightProbes!==w)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=_,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+T-F,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=w,q.directionalLength=y,q.pointLength=g,q.spotLength=d,q.rectAreaLength=_,q.hemiLength=v,q.numDirectionalShadows=S,q.numPointShadows=L,q.numSpotShadows=b,q.numSpotMaps=T,q.numLightProbes=w,r.version=u2++)}function c(h,p){let f=0,m=0,x=0,y=0,g=0;const d=p.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){const S=h[_];if(S.isDirectionalLight){const L=r.directional[f];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),f++}else if(S.isSpotLight){const L=r.spot[x];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),x++}else if(S.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const L=r.hemi[g];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function Zm(t,e){const n=new h2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(p){i.push(p)}function o(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function f2(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Zm(t,e),n.set(s,[l])):a>=o.length?(l=new Zm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class p2 extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m2 extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x2(t,e,n){let i=new lf;const r=new _e,s=new _e,a=new xt,o=new p2({depthPacking:d1}),l=new m2,c={},h=n.maxTextureSize,p={[ar]:gn,[gn]:ar,[qn]:qn},f=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:g2,fragmentShader:v2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ut;x.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tx;let d=this.type;this.render=function(b,T,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const w=t.getRenderTarget(),A=t.getActiveCubeFace(),q=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(tr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const le=d!==pi&&this.type===pi,O=d===pi&&this.type!==pi;for(let V=0,X=b.length;V<X;V++){const ne=b[V],z=ne.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const H=z.getFrameExtents();if(r.multiply(H),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,z.mapSize.y=s.y)),z.map===null||le===!0||O===!0){const C=this.type!==pi?{minFilter:sn,magFilter:sn}:{};z.map!==null&&z.map.dispose(),z.map=new Or(r.x,r.y,C),z.map.texture.name=ne.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const R=z.getViewportCount();for(let C=0;C<R;C++){const Y=z.getViewport(C);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),Z.viewport(a),z.updateMatrices(ne,C),i=z.getFrustum(),S(T,F,z.camera,ne,this.type)}z.isPointLightShadow!==!0&&this.type===pi&&_(z,F),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(w,A,q)};function _(b,T){const F=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Or(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,F,f,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,F,m,y,null)}function v(b,T,F,w){let A=null;const q=F.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(q!==void 0)A=q;else if(A=F.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Z=A.uuid,le=T.uuid;let O=c[Z];O===void 0&&(O={},c[Z]=O);let V=O[le];V===void 0&&(V=A.clone(),O[le]=V,T.addEventListener("dispose",L)),A=V}if(A.visible=T.visible,A.wireframe=T.wireframe,w===pi?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:p[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Z=t.properties.get(A);Z.light=F}return A}function S(b,T,F,w,A){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===pi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld);const le=e.update(b),O=b.material;if(Array.isArray(O)){const V=le.groups;for(let X=0,ne=V.length;X<ne;X++){const z=V[X],H=O[z.materialIndex];if(H&&H.visible){const R=v(b,H,w,A);b.onBeforeShadow(t,b,T,F,le,R,z),t.renderBufferDirect(F,null,le,R,b,z),b.onAfterShadow(t,b,T,F,le,R,z)}}}else if(O.visible){const V=v(b,O,w,A);b.onBeforeShadow(t,b,T,F,le,V,null),t.renderBufferDirect(F,null,le,V,b,null),b.onAfterShadow(t,b,T,F,le,V,null)}}const Z=b.children;for(let le=0,O=Z.length;le<O;le++)S(Z[le],T,F,w,A)}function L(b){b.target.removeEventListener("dispose",L);for(const F in c){const w=c[F],A=b.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function _2(t,e,n){const i=n.isWebGL2;function r(){let k=!1;const Se=new xt;let ve=null;const ze=new xt(0,0,0,0);return{setMask:function(ke){ve!==ke&&!k&&(t.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){k=ke},setClear:function(ke,We,qe,ht,lt){lt===!0&&(ke*=ht,We*=ht,qe*=ht),Se.set(ke,We,qe,ht),ze.equals(Se)===!1&&(t.clearColor(ke,We,qe,ht),ze.copy(Se))},reset:function(){k=!1,ve=null,ze.set(-1,0,0,0)}}}function s(){let k=!1,Se=null,ve=null,ze=null;return{setTest:function(ke){ke?Te(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(ke){Se!==ke&&!k&&(t.depthMask(ke),Se=ke)},setFunc:function(ke){if(ve!==ke){switch(ke){case GM:t.depthFunc(t.NEVER);break;case jM:t.depthFunc(t.ALWAYS);break;case HM:t.depthFunc(t.LESS);break;case ec:t.depthFunc(t.LEQUAL);break;case VM:t.depthFunc(t.EQUAL);break;case WM:t.depthFunc(t.GEQUAL);break;case XM:t.depthFunc(t.GREATER);break;case qM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=ke}},setLocked:function(ke){k=ke},setClear:function(ke){ze!==ke&&(t.clearDepth(ke),ze=ke)},reset:function(){k=!1,Se=null,ve=null,ze=null}}}function a(){let k=!1,Se=null,ve=null,ze=null,ke=null,We=null,qe=null,ht=null,lt=null;return{setTest:function(Ze){k||(Ze?Te(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(Ze){Se!==Ze&&!k&&(t.stencilMask(Ze),Se=Ze)},setFunc:function(Ze,ct,cn){(ve!==Ze||ze!==ct||ke!==cn)&&(t.stencilFunc(Ze,ct,cn),ve=Ze,ze=ct,ke=cn)},setOp:function(Ze,ct,cn){(We!==Ze||qe!==ct||ht!==cn)&&(t.stencilOp(Ze,ct,cn),We=Ze,qe=ct,ht=cn)},setLocked:function(Ze){k=Ze},setClear:function(Ze){lt!==Ze&&(t.clearStencil(Ze),lt=Ze)},reset:function(){k=!1,Se=null,ve=null,ze=null,ke=null,We=null,qe=null,ht=null,lt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,p=new WeakMap;let f={},m={},x=new WeakMap,y=[],g=null,d=!1,_=null,v=null,S=null,L=null,b=null,T=null,F=null,w=new et(0,0,0),A=0,q=!1,Z=null,le=null,O=null,V=null,X=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const R=t.getParameter(t.VERSION);R.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(R)[1]),z=H>=1):R.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),z=H>=2);let C=null,Y={};const D=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),se=new xt().fromArray(D),ue=new xt().fromArray(j);function ie(k,Se,ve,ze){const ke=new Uint8Array(4),We=t.createTexture();t.bindTexture(k,We),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<ve;qe++)i&&(k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,ke):t.texImage2D(Se+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ke);return We}const de={};de[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(de[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(t.DEPTH_TEST),l.setFunc(ec),te(!1),E(Dp),Te(t.CULL_FACE),G(tr);function Te(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function Me(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function we(k,Se){return m[k]!==Se?(t.bindFramebuffer(k,Se),m[k]=Se,i&&(k===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=Se),k===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function I(k,Se){let ve=y,ze=!1;if(k)if(ve=x.get(Se),ve===void 0&&(ve=[],x.set(Se,ve)),k.isWebGLMultipleRenderTargets){const ke=k.texture;if(ve.length!==ke.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let We=0,qe=ke.length;We<qe;We++)ve[We]=t.COLOR_ATTACHMENT0+We;ve.length=ke.length,ze=!0}}else ve[0]!==t.COLOR_ATTACHMENT0&&(ve[0]=t.COLOR_ATTACHMENT0,ze=!0);else ve[0]!==t.BACK&&(ve[0]=t.BACK,ze=!0);ze&&(n.isWebGL2?t.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function fe(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const K={[Sr]:t.FUNC_ADD,[AM]:t.FUNC_SUBTRACT,[bM]:t.FUNC_REVERSE_SUBTRACT};if(i)K[Op]=t.MIN,K[kp]=t.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(K[Op]=k.MIN_EXT,K[kp]=k.MAX_EXT)}const $={[CM]:t.ZERO,[RM]:t.ONE,[PM]:t.SRC_COLOR,[Yd]:t.SRC_ALPHA,[FM]:t.SRC_ALPHA_SATURATE,[IM]:t.DST_COLOR,[NM]:t.DST_ALPHA,[LM]:t.ONE_MINUS_SRC_COLOR,[$d]:t.ONE_MINUS_SRC_ALPHA,[UM]:t.ONE_MINUS_DST_COLOR,[DM]:t.ONE_MINUS_DST_ALPHA,[OM]:t.CONSTANT_COLOR,[kM]:t.ONE_MINUS_CONSTANT_COLOR,[zM]:t.CONSTANT_ALPHA,[BM]:t.ONE_MINUS_CONSTANT_ALPHA};function G(k,Se,ve,ze,ke,We,qe,ht,lt,Ze){if(k===tr){d===!0&&(Me(t.BLEND),d=!1);return}if(d===!1&&(Te(t.BLEND),d=!0),k!==TM){if(k!==_||Ze!==q){if((v!==Sr||b!==Sr)&&(t.blendEquation(t.FUNC_ADD),v=Sr,b=Sr),Ze)switch(k){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ip:t.blendFunc(t.ONE,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ip:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,L=null,T=null,F=null,w.set(0,0,0),A=0,_=k,q=Ze}return}ke=ke||Se,We=We||ve,qe=qe||ze,(Se!==v||ke!==b)&&(t.blendEquationSeparate(K[Se],K[ke]),v=Se,b=ke),(ve!==S||ze!==L||We!==T||qe!==F)&&(t.blendFuncSeparate($[ve],$[ze],$[We],$[qe]),S=ve,L=ze,T=We,F=qe),(ht.equals(w)===!1||lt!==A)&&(t.blendColor(ht.r,ht.g,ht.b,lt),w.copy(ht),A=lt),_=k,q=!1}function he(k,Se){k.side===qn?Me(t.CULL_FACE):Te(t.CULL_FACE);let ve=k.side===gn;Se&&(ve=!ve),te(ve),k.blending===ks&&k.transparent===!1?G(tr):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const ze=k.stencilWrite;c.setTest(ze),ze&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),B(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){Z!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),Z=k)}function E(k){k!==EM?(Te(t.CULL_FACE),k!==le&&(k===Dp?t.cullFace(t.BACK):k===wM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),le=k}function M(k){k!==O&&(z&&t.lineWidth(k),O=k)}function B(k,Se,ve){k?(Te(t.POLYGON_OFFSET_FILL),(V!==Se||X!==ve)&&(t.polygonOffset(Se,ve),V=Se,X=ve)):Me(t.POLYGON_OFFSET_FILL)}function oe(k){k?Te(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function ae(k){k===void 0&&(k=t.TEXTURE0+ne-1),C!==k&&(t.activeTexture(k),C=k)}function re(k,Se,ve){ve===void 0&&(C===null?ve=t.TEXTURE0+ne-1:ve=C);let ze=Y[ve];ze===void 0&&(ze={type:void 0,texture:void 0},Y[ve]=ze),(ze.type!==k||ze.texture!==Se)&&(C!==ve&&(t.activeTexture(ve),C=ve),t.bindTexture(k,Se||de[k]),ze.type=k,ze.texture=Se)}function be(){const k=Y[C];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(k){se.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),se.copy(k))}function xe(k){ue.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),ue.copy(k))}function De(k,Se){let ve=p.get(Se);ve===void 0&&(ve=new WeakMap,p.set(Se,ve));let ze=ve.get(k);ze===void 0&&(ze=t.getUniformBlockIndex(Se,k.name),ve.set(k,ze))}function Ce(k,Se){const ze=p.get(Se).get(k);h.get(Se)!==ze&&(t.uniformBlockBinding(Se,ze,k.__bindingPointIndex),h.set(Se,ze))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},C=null,Y={},m={},x=new WeakMap,y=[],g=null,d=!1,_=null,v=null,S=null,L=null,b=null,T=null,F=null,w=new et(0,0,0),A=0,q=!1,Z=null,le=null,O=null,V=null,X=null,se.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:Me,bindFramebuffer:we,drawBuffers:I,useProgram:fe,setBlending:G,setMaterial:he,setFlipSided:te,setCullFace:E,setLineWidth:M,setPolygonOffset:B,setScissorTest:oe,activeTexture:ae,bindTexture:re,unbindTexture:be,compressedTexImage2D:pe,compressedTexImage3D:Ee,texImage2D:Fe,texImage3D:Re,updateUBOMapping:De,uniformBlockBinding:Ce,texStorage2D:je,texStorage3D:Ue,texSubImage2D:Le,texSubImage3D:Oe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ge,scissor:N,viewport:xe,reset:ge}}function y2(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,M){return m?new OffscreenCanvas(E,M):ac("canvas")}function y(E,M,B,oe){let ae=1;if((E.width>oe||E.height>oe)&&(ae=oe/Math.max(E.width,E.height)),ae<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const re=M?nh:Math.floor,be=re(ae*E.width),pe=re(ae*E.height);p===void 0&&(p=x(be,pe));const Ee=B?x(be,pe):p;return Ee.width=be,Ee.height=pe,Ee.getContext("2d").drawImage(E,0,0,be,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+pe+")."),Ee}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return fm(E.width)&&fm(E.height)}function d(E){return o?!1:E.wrapS!==Yn||E.wrapT!==Yn||E.minFilter!==sn&&E.minFilter!==Ln}function _(E,M){return E.generateMipmaps&&M&&E.minFilter!==sn&&E.minFilter!==Ln}function v(E){t.generateMipmap(E)}function S(E,M,B,oe,ae=!1){if(o===!1)return M;if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re=M;if(M===t.RED&&(B===t.FLOAT&&(re=t.R32F),B===t.HALF_FLOAT&&(re=t.R16F),B===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.R8UI),B===t.UNSIGNED_SHORT&&(re=t.R16UI),B===t.UNSIGNED_INT&&(re=t.R32UI),B===t.BYTE&&(re=t.R8I),B===t.SHORT&&(re=t.R16I),B===t.INT&&(re=t.R32I)),M===t.RG&&(B===t.FLOAT&&(re=t.RG32F),B===t.HALF_FLOAT&&(re=t.RG16F),B===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RGBA){const be=ae?tc:ut.getTransfer(oe);B===t.FLOAT&&(re=t.RGBA32F),B===t.HALF_FLOAT&&(re=t.RGBA16F),B===t.UNSIGNED_BYTE&&(re=be===mt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function L(E,M,B){return _(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==sn&&E.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function b(E){return E===sn||E===zp||E===fu?t.NEAREST:t.LINEAR}function T(E){const M=E.target;M.removeEventListener("dispose",T),w(M),M.isVideoTexture&&h.delete(M)}function F(E){const M=E.target;M.removeEventListener("dispose",F),q(M)}function w(E){const M=i.get(E);if(M.__webglInit===void 0)return;const B=E.source,oe=f.get(B);if(oe){const ae=oe[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(E),Object.keys(oe).length===0&&f.delete(B)}i.remove(E)}function A(E){const M=i.get(E);t.deleteTexture(M.__webglTexture);const B=E.source,oe=f.get(B);delete oe[M.__cacheKey],a.memory.textures--}function q(E){const M=E.texture,B=i.get(E),oe=i.get(M);if(oe.__webglTexture!==void 0&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(B.__webglFramebuffer[ae]))for(let re=0;re<B.__webglFramebuffer[ae].length;re++)t.deleteFramebuffer(B.__webglFramebuffer[ae][re]);else t.deleteFramebuffer(B.__webglFramebuffer[ae]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ae])}else{if(Array.isArray(B.__webglFramebuffer))for(let ae=0;ae<B.__webglFramebuffer.length;ae++)t.deleteFramebuffer(B.__webglFramebuffer[ae]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ae=0;ae<B.__webglColorRenderbuffer.length;ae++)B.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ae]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ae=0,re=M.length;ae<re;ae++){const be=i.get(M[ae]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),a.memory.textures--),i.remove(M[ae])}i.remove(M),i.remove(E)}let Z=0;function le(){Z=0}function O(){const E=Z;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),Z+=1,E}function V(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function X(E,M){const B=i.get(E);if(E.isVideoTexture&&he(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const oe=E.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(B,E,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function ne(E,M){const B=i.get(E);if(E.version>0&&B.__version!==E.version){se(B,E,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function z(E,M){const B=i.get(E);if(E.version>0&&B.__version!==E.version){se(B,E,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function H(E,M){const B=i.get(E);if(E.version>0&&B.__version!==E.version){ue(B,E,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const R={[Jd]:t.REPEAT,[Yn]:t.CLAMP_TO_EDGE,[Qd]:t.MIRRORED_REPEAT},C={[sn]:t.NEAREST,[zp]:t.NEAREST_MIPMAP_NEAREST,[fu]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[t1]:t.LINEAR_MIPMAP_NEAREST,[to]:t.LINEAR_MIPMAP_LINEAR},Y={[f1]:t.NEVER,[_1]:t.ALWAYS,[p1]:t.LESS,[zx]:t.LEQUAL,[m1]:t.EQUAL,[x1]:t.GEQUAL,[g1]:t.GREATER,[v1]:t.NOTEQUAL};function D(E,M,B){if(B?(t.texParameteri(E,t.TEXTURE_WRAP_S,R[M.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,R[M.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,R[M.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,C[M.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,C[M.minFilter])):(t.texParameteri(E,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(E,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Yn||M.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(E,t.TEXTURE_MAG_FILTER,b(M.magFilter)),t.texParameteri(E,t.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==sn&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===sn||M.minFilter!==fu&&M.minFilter!==to||M.type===Xi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===no&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(E,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function j(E,M){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",T));const oe=M.source;let ae=f.get(oe);ae===void 0&&(ae={},f.set(oe,ae));const re=V(M);if(re!==E.__cacheKey){ae[re]===void 0&&(ae[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ae[re].usedTimes++;const be=ae[E.__cacheKey];be!==void 0&&(ae[E.__cacheKey].usedTimes--,be.usedTimes===0&&A(M)),E.__cacheKey=re,E.__webglTexture=ae[re].texture}return B}function se(E,M,B){let oe=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=t.TEXTURE_3D);const ae=j(E,M),re=M.source;n.bindTexture(oe,E.__webglTexture,t.TEXTURE0+B);const be=i.get(re);if(re.version!==be.__version||ae===!0){n.activeTexture(t.TEXTURE0+B);const pe=ut.getPrimaries(ut.workingColorSpace),Ee=M.colorSpace===Dn?null:ut.getPrimaries(M.colorSpace),Le=M.colorSpace===Dn||pe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Oe=d(M)&&g(M.image)===!1;let ce=y(M.image,Oe,!1,r.maxTextureSize);ce=te(M,ce);const Ge=g(ce)||o,je=s.convert(M.format,M.colorSpace);let Ue=s.convert(M.type),Fe=S(M.internalFormat,je,Ue,M.colorSpace,M.isVideoTexture);D(oe,M,Ge);let Re;const N=M.mipmaps,xe=o&&M.isVideoTexture!==!0&&Fe!==Fx,De=be.__version===void 0||ae===!0,Ce=L(M,ce,Ge);if(M.isDepthTexture)Fe=t.DEPTH_COMPONENT,o?M.type===Xi?Fe=t.DEPTH_COMPONENT32F:M.type===Wi?Fe=t.DEPTH_COMPONENT24:M.type===Cr?Fe=t.DEPTH24_STENCIL8:Fe=t.DEPTH_COMPONENT16:M.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Rr&&Fe===t.DEPTH_COMPONENT&&M.type!==sf&&M.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Wi,Ue=s.convert(M.type)),M.format===Ks&&Fe===t.DEPTH_COMPONENT&&(Fe=t.DEPTH_STENCIL,M.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Cr,Ue=s.convert(M.type))),De&&(xe?n.texStorage2D(t.TEXTURE_2D,1,Fe,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Fe,ce.width,ce.height,0,je,Ue,null));else if(M.isDataTexture)if(N.length>0&&Ge){xe&&De&&n.texStorage2D(t.TEXTURE_2D,Ce,Fe,N[0].width,N[0].height);for(let ge=0,k=N.length;ge<k;ge++)Re=N[ge],xe?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,je,Ue,Re.data):n.texImage2D(t.TEXTURE_2D,ge,Fe,Re.width,Re.height,0,je,Ue,Re.data);M.generateMipmaps=!1}else xe?(De&&n.texStorage2D(t.TEXTURE_2D,Ce,Fe,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,je,Ue,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,ce.width,ce.height,0,je,Ue,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){xe&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,Fe,N[0].width,N[0].height,ce.depth);for(let ge=0,k=N.length;ge<k;ge++)Re=N[ge],M.format!==$n?je!==null?xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,ce.depth,je,Re.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Fe,Re.width,Re.height,ce.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,ce.depth,je,Ue,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Fe,Re.width,Re.height,ce.depth,0,je,Ue,Re.data)}else{xe&&De&&n.texStorage2D(t.TEXTURE_2D,Ce,Fe,N[0].width,N[0].height);for(let ge=0,k=N.length;ge<k;ge++)Re=N[ge],M.format!==$n?je!==null?xe?n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,je,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Fe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,je,Ue,Re.data):n.texImage2D(t.TEXTURE_2D,ge,Fe,Re.width,Re.height,0,je,Ue,Re.data)}else if(M.isDataArrayTexture)xe?(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,Fe,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,je,Ue,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,ce.width,ce.height,ce.depth,0,je,Ue,ce.data);else if(M.isData3DTexture)xe?(De&&n.texStorage3D(t.TEXTURE_3D,Ce,Fe,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,je,Ue,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,ce.width,ce.height,ce.depth,0,je,Ue,ce.data);else if(M.isFramebufferTexture){if(De)if(xe)n.texStorage2D(t.TEXTURE_2D,Ce,Fe,ce.width,ce.height);else{let ge=ce.width,k=ce.height;for(let Se=0;Se<Ce;Se++)n.texImage2D(t.TEXTURE_2D,Se,Fe,ge,k,0,je,Ue,null),ge>>=1,k>>=1}}else if(N.length>0&&Ge){xe&&De&&n.texStorage2D(t.TEXTURE_2D,Ce,Fe,N[0].width,N[0].height);for(let ge=0,k=N.length;ge<k;ge++)Re=N[ge],xe?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,je,Ue,Re):n.texImage2D(t.TEXTURE_2D,ge,Fe,je,Ue,Re);M.generateMipmaps=!1}else xe?(De&&n.texStorage2D(t.TEXTURE_2D,Ce,Fe,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,Ue,ce)):n.texImage2D(t.TEXTURE_2D,0,Fe,je,Ue,ce);_(M,Ge)&&v(oe),be.__version=re.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ue(E,M,B){if(M.image.length!==6)return;const oe=j(E,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+B);const re=i.get(ae);if(ae.version!==re.__version||oe===!0){n.activeTexture(t.TEXTURE0+B);const be=ut.getPrimaries(ut.workingColorSpace),pe=M.colorSpace===Dn?null:ut.getPrimaries(M.colorSpace),Ee=M.colorSpace===Dn||be===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let ge=0;ge<6;ge++)!Le&&!Oe?ce[ge]=y(M.image[ge],!1,!0,r.maxCubemapSize):ce[ge]=Oe?M.image[ge].image:M.image[ge],ce[ge]=te(M,ce[ge]);const Ge=ce[0],je=g(Ge)||o,Ue=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type),Re=S(M.internalFormat,Ue,Fe,M.colorSpace),N=o&&M.isVideoTexture!==!0,xe=re.__version===void 0||oe===!0;let De=L(M,Ge,je);D(t.TEXTURE_CUBE_MAP,M,je);let Ce;if(Le){N&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Re,Ge.width,Ge.height);for(let ge=0;ge<6;ge++){Ce=ce[ge].mipmaps;for(let k=0;k<Ce.length;k++){const Se=Ce[k];M.format!==$n?Ue!==null?N?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k,0,0,Se.width,Se.height,Ue,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k,0,0,Se.width,Se.height,Ue,Fe,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k,Re,Se.width,Se.height,0,Ue,Fe,Se.data)}}}else{Ce=M.mipmaps,N&&xe&&(Ce.length>0&&De++,n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Re,ce[0].width,ce[0].height));for(let ge=0;ge<6;ge++)if(Oe){N?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ce[ge].width,ce[ge].height,Ue,Fe,ce[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,ce[ge].width,ce[ge].height,0,Ue,Fe,ce[ge].data);for(let k=0;k<Ce.length;k++){const ve=Ce[k].image[ge].image;N?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k+1,0,0,ve.width,ve.height,Ue,Fe,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k+1,Re,ve.width,ve.height,0,Ue,Fe,ve.data)}}else{N?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ue,Fe,ce[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,Ue,Fe,ce[ge]);for(let k=0;k<Ce.length;k++){const Se=Ce[k];N?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k+1,0,0,Ue,Fe,Se.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k+1,Re,Ue,Fe,Se.image[ge])}}}_(M,je)&&v(t.TEXTURE_CUBE_MAP),re.__version=ae.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ie(E,M,B,oe,ae,re){const be=s.convert(B.format,B.colorSpace),pe=s.convert(B.type),Ee=S(B.internalFormat,be,pe,B.colorSpace);if(!i.get(M).__hasExternalTextures){const Oe=Math.max(1,M.width>>re),ce=Math.max(1,M.height>>re);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,re,Ee,Oe,ce,M.depth,0,be,pe,null):n.texImage2D(ae,re,Ee,Oe,ce,0,be,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),G(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ae,i.get(B).__webglTexture,0,$(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,ae,i.get(B).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(E,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let oe=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||G(M)){const ae=M.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Xi?oe=t.DEPTH_COMPONENT32F:ae.type===Wi&&(oe=t.DEPTH_COMPONENT24));const re=$(M);G(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,oe,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,oe,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,oe,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const oe=$(M);B&&G(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,M.width,M.height):G(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,E)}else{const oe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ae=0;ae<oe.length;ae++){const re=oe[ae],be=s.convert(re.format,re.colorSpace),pe=s.convert(re.type),Ee=S(re.internalFormat,be,pe,re.colorSpace),Le=$(M);B&&G(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Ee,M.width,M.height):G(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,Ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const oe=i.get(M.depthTexture).__webglTexture,ae=$(M);if(M.depthTexture.format===Rr)G(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Ks)G(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Me(E){const M=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,E)}else if(B){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=t.createRenderbuffer(),de(M.__webglDepthbuffer[oe],E,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,E,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(E,M,B){const oe=i.get(E);M!==void 0&&ie(oe.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Me(E)}function I(E){const M=E.texture,B=i.get(E),oe=i.get(M);E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=M.version,a.memory.textures++);const ae=E.isWebGLCubeRenderTarget===!0,re=E.isWebGLMultipleRenderTargets===!0,be=g(E)||o;if(ae){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)B.__webglFramebuffer[pe][Ee]=t.createFramebuffer()}else B.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)B.__webglFramebuffer[pe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const pe=E.texture;for(let Ee=0,Le=pe.length;Ee<Le;Ee++){const Oe=i.get(pe[Ee]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&G(E)===!1){const pe=re?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const Le=pe[Ee];B.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Ee]);const Oe=s.convert(Le.format,Le.colorSpace),ce=s.convert(Le.type),Ge=S(Le.internalFormat,Oe,ce,Le.colorSpace,E.isXRRenderTarget===!0),je=$(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Ge,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,B.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),de(B.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),D(t.TEXTURE_CUBE_MAP,M,be);for(let pe=0;pe<6;pe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ie(B.__webglFramebuffer[pe][Ee],E,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee);else ie(B.__webglFramebuffer[pe],E,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(M,be)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const pe=E.texture;for(let Ee=0,Le=pe.length;Ee<Le;Ee++){const Oe=pe[Ee],ce=i.get(Oe);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),D(t.TEXTURE_2D,Oe,be),ie(B.__webglFramebuffer,E,Oe,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,0),_(Oe,be)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?pe=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,oe.__webglTexture),D(pe,M,be),o&&M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ie(B.__webglFramebuffer[Ee],E,M,t.COLOR_ATTACHMENT0,pe,Ee);else ie(B.__webglFramebuffer,E,M,t.COLOR_ATTACHMENT0,pe,0);_(M,be)&&v(pe),n.unbindTexture()}E.depthBuffer&&Me(E)}function fe(E){const M=g(E)||o,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0,ae=B.length;oe<ae;oe++){const re=B[oe];if(_(re,M)){const be=E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(re).__webglTexture;n.bindTexture(be,pe),v(be),n.unbindTexture()}}}function K(E){if(o&&E.samples>0&&G(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,oe=E.height;let ae=t.COLOR_BUFFER_BIT;const re=[],be=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(E),Ee=E.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Le=0;Le<M.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){re.push(t.COLOR_ATTACHMENT0+Le),E.depthBuffer&&re.push(be);const Oe=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Oe===!1&&(E.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Ee&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]),Oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),Ee){const ce=i.get(M[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,B,oe,0,0,B,oe,ae,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let Le=0;Le<M.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]);const Oe=i.get(M[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function $(E){return Math.min(r.maxSamples,E.samples)}function G(E){const M=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function te(E,M){const B=E.colorSpace,oe=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===th||B!==Ri&&B!==Dn&&(ut.getTransfer(B)===mt?o===!1?e.has("EXT_sRGB")===!0&&oe===$n?(E.format=th,E.minFilter=Ln,E.generateMipmaps=!1):M=Gx.sRGBToLinear(M):(oe!==$n||ae!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=O,this.resetTextureUnits=le,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=we,this.setupRenderTarget=I,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=G}function S2(t,e,n){const i=n.isWebGL2;function r(s,a=Dn){let o;const l=ut.getTransfer(a);if(s===ir)return t.UNSIGNED_BYTE;if(s===Lx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Nx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===n1)return t.BYTE;if(s===i1)return t.SHORT;if(s===sf)return t.UNSIGNED_SHORT;if(s===Px)return t.INT;if(s===Wi)return t.UNSIGNED_INT;if(s===Xi)return t.FLOAT;if(s===no)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===r1)return t.ALPHA;if(s===$n)return t.RGBA;if(s===s1)return t.LUMINANCE;if(s===a1)return t.LUMINANCE_ALPHA;if(s===Rr)return t.DEPTH_COMPONENT;if(s===Ks)return t.DEPTH_STENCIL;if(s===th)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===o1)return t.RED;if(s===Dx)return t.RED_INTEGER;if(s===l1)return t.RG;if(s===Ix)return t.RG_INTEGER;if(s===Ux)return t.RGBA_INTEGER;if(s===pu||s===mu||s===gu||s===vu)if(l===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bp||s===Gp||s===jp||s===Hp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Bp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vp||s===Wp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Vp)return l===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xp||s===qp||s===Yp||s===$p||s===Kp||s===Zp||s===Jp||s===Qp||s===em||s===tm||s===nm||s===im||s===rm||s===sm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Xp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$p)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tm)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nm)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===im)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rm)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sm)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xu||s===am||s===om)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===xu)return l===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===am)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===om)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===c1||s===lm||s===cm||s===um)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===xu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===lm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===um)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class M2 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E2={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(c,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class w2 extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,x=null;const y=n.getContextAttributes();let g=null,d=null;const _=[],v=[],S=new _e;let L=null;const b=new dn;b.layers.enable(1),b.viewport=new xt;const T=new dn;T.layers.enable(2),T.viewport=new xt;const F=[b,T],w=new M2;w.layers.enable(1),w.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let j=_[D];return j===void 0&&(j=new ju,_[D]=j),j.getTargetRaySpace()},this.getControllerGrip=function(D){let j=_[D];return j===void 0&&(j=new ju,_[D]=j),j.getGripSpace()},this.getHand=function(D){let j=_[D];return j===void 0&&(j=new ju,_[D]=j),j.getHandSpace()};function Z(D){const j=v.indexOf(D.inputSource);if(j===-1)return;const se=_[j];se!==void 0&&(se.update(D.inputSource,D.frame,c||a),se.dispatchEvent({type:D.type,data:D.inputSource}))}function le(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",O);for(let D=0;D<_.length;D++){const j=v[D];j!==null&&(v[D]=null,_[D].disconnect(j))}A=null,q=null,e.setRenderTarget(g),m=null,f=null,p=null,r=null,d=null,Y.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",le),r.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Or(m.framebufferWidth,m.framebufferHeight,{format:$n,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,se=null,ue=null;y.depth&&(ue=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=y.stencil?Ks:Rr,se=y.stencil?Cr:Wi);const ie={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Or(f.textureWidth,f.textureHeight,{format:$n,type:ir,depthTexture:new Jx(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const de=e.properties.get(d);de.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(D){for(let j=0;j<D.removed.length;j++){const se=D.removed[j],ue=v.indexOf(se);ue>=0&&(v[ue]=null,_[ue].disconnect(se))}for(let j=0;j<D.added.length;j++){const se=D.added[j];let ue=v.indexOf(se);if(ue===-1){for(let de=0;de<_.length;de++)if(de>=v.length){v.push(se),ue=de;break}else if(v[de]===null){v[de]=se,ue=de;break}if(ue===-1)break}const ie=_[ue];ie&&ie.connect(se)}}const V=new U,X=new U;function ne(D,j,se){V.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const ue=V.distanceTo(X),ie=j.projectionMatrix.elements,de=se.projectionMatrix.elements,Te=ie[14]/(ie[10]-1),Me=ie[14]/(ie[10]+1),we=(ie[9]+1)/ie[5],I=(ie[9]-1)/ie[5],fe=(ie[8]-1)/ie[0],K=(de[8]+1)/de[0],$=Te*fe,G=Te*K,he=ue/(-fe+K),te=he*-fe;j.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(te),D.translateZ(he),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const E=Te+he,M=Me+he,B=$-te,oe=G+(ue-te),ae=we*Me/M*E,re=I*Me/M*E;D.projectionMatrix.makePerspective(B,oe,ae,re,E,M),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function z(D,j){j===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(j.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;w.near=T.near=b.near=D.near,w.far=T.far=b.far=D.far,(A!==w.near||q!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,q=w.far);const j=D.parent,se=w.cameras;z(w,j);for(let ue=0;ue<se.length;ue++)z(se[ue],j);se.length===2?ne(w,b,T):w.projectionMatrix.copy(b.projectionMatrix),H(D,w,j)};function H(D,j,se){se===null?D.matrix.copy(j.matrixWorld):(D.matrix.copy(se.matrixWorld),D.matrix.invert(),D.matrix.multiply(j.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(j.projectionMatrix),D.projectionMatrixInverse.copy(j.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=sc*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)};let R=null;function C(D,j){if(h=j.getViewerPose(c||a),x=j,h!==null){const se=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ue=!1;se.length!==w.cameras.length&&(w.cameras.length=0,ue=!0);for(let ie=0;ie<se.length;ie++){const de=se[ie];let Te=null;if(m!==null)Te=m.getViewport(de);else{const we=p.getViewSubImage(f,de);Te=we.viewport,ie===0&&(e.setRenderTargetTextures(d,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(d))}let Me=F[ie];Me===void 0&&(Me=new dn,Me.layers.enable(ie),Me.viewport=new xt,F[ie]=Me),Me.matrix.fromArray(de.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(de.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Te.x,Te.y,Te.width,Te.height),ie===0&&(w.matrix.copy(Me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ue===!0&&w.cameras.push(Me)}}for(let se=0;se<_.length;se++){const ue=v[se],ie=_[se];ue!==null&&ie!==void 0&&ie.update(ue,j,c||a)}R&&R(D,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),x=null}const Y=new Kx;Y.setAnimationLoop(C),this.setAnimationLoop=function(D){R=D},this.dispose=function(){}}}function T2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,qx(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,_,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,_,v):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===gn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===gn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const _=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A2(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(x(_),S=h(_),r[_.id]=S,_.addEventListener("dispose",g));const L=v.program;i.updateUBOMapping(_,L);const b=e.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function h(_){const v=p();_.__bindingPointIndex=v;const S=t.createBuffer(),L=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,L=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,T=S.length;b<T;b++){const F=Array.isArray(S[b])?S[b]:[S[b]];for(let w=0,A=F.length;w<A;w++){const q=F[w];if(m(q,b,w,L)===!0){const Z=q.__offset,le=Array.isArray(q.value)?q.value:[q.value];let O=0;for(let V=0;V<le.length;V++){const X=le[V],ne=y(X);typeof X=="number"||typeof X=="boolean"?(q.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,Z+O,q.__data)):X.isMatrix3?(q.__data[0]=X.elements[0],q.__data[1]=X.elements[1],q.__data[2]=X.elements[2],q.__data[3]=0,q.__data[4]=X.elements[3],q.__data[5]=X.elements[4],q.__data[6]=X.elements[5],q.__data[7]=0,q.__data[8]=X.elements[6],q.__data[9]=X.elements[7],q.__data[10]=X.elements[8],q.__data[11]=0):(X.toArray(q.__data,O),O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,q.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,S,L){const b=_.value,T=v+"_"+S;if(L[T]===void 0)return typeof b=="number"||typeof b=="boolean"?L[T]=b:L[T]=b.clone(),!0;{const F=L[T];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return L[T]=b,!0}else if(F.equals(b)===!1)return F.copy(b),!0}return!1}function x(_){const v=_.uniforms;let S=0;const L=16;for(let T=0,F=v.length;T<F;T++){const w=Array.isArray(v[T])?v[T]:[v[T]];for(let A=0,q=w.length;A<q;A++){const Z=w[A],le=Array.isArray(Z.value)?Z.value:[Z.value];for(let O=0,V=le.length;O<V;O++){const X=le[O],ne=y(X),z=S%L;z!==0&&L-z<ne.boundary&&(S+=L-z),Z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=ne.storage}}}const b=S%L;return b>0&&(S+=L-b),_.__size=S,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class r_{constructor(e={}){const{canvas:n=M1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const v=this;let S=!1,L=0,b=0,T=null,F=-1,w=null;const A=new xt,q=new xt;let Z=null;const le=new et(0);let O=0,V=n.width,X=n.height,ne=1,z=null,H=null;const R=new xt(0,0,V,X),C=new xt(0,0,V,X);let Y=!1;const D=new lf;let j=!1,se=!1,ue=null;const ie=new Et,de=new _e,Te=new U,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return T===null?ne:1}let I=i;function fe(P,W){for(let J=0;J<P.length;J++){const ee=P[J],Q=n.getContext(ee,W);if(Q!==null)return Q}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",Se,!1),I===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),I=fe(W,P),I===null)throw fe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let K,$,G,he,te,E,M,B,oe,ae,re,be,pe,Ee,Le,Oe,ce,Ge,je,Ue,Fe,Re,N,xe;function De(){K=new FT(I),$=new PT(I,K,e),K.init($),Re=new S2(I,K,$),G=new _2(I,K,$),he=new zT(I),te=new s2,E=new y2(I,K,G,te,$,Re,he),M=new NT(v),B=new UT(v),oe=new q1(I,$),N=new CT(I,K,oe,$),ae=new OT(I,oe,he,N),re=new HT(I,ae,oe,he),je=new jT(I,$,E),Oe=new LT(te),be=new r2(v,M,B,K,$,N,Oe),pe=new T2(v,te),Ee=new o2,Le=new f2(K,$),Ge=new bT(v,M,B,G,re,f,l),ce=new x2(v,re,$),xe=new A2(I,he,$,G),Ue=new RT(I,K,he,$),Fe=new kT(I,K,he,$),he.programs=be.programs,v.capabilities=$,v.extensions=K,v.properties=te,v.renderLists=Ee,v.shadowMap=ce,v.state=G,v.info=he}De();const Ce=new w2(v,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=K.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=K.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(P){P!==void 0&&(ne=P,this.setSize(V,X,!1))},this.getSize=function(P){return P.set(V,X)},this.setSize=function(P,W,J=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,X=W,n.width=Math.floor(P*ne),n.height=Math.floor(W*ne),J===!0&&(n.style.width=P+"px",n.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(V*ne,X*ne).floor()},this.setDrawingBufferSize=function(P,W,J){V=P,X=W,ne=J,n.width=Math.floor(P*J),n.height=Math.floor(W*J),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(R)},this.setViewport=function(P,W,J,ee){P.isVector4?R.set(P.x,P.y,P.z,P.w):R.set(P,W,J,ee),G.viewport(A.copy(R).multiplyScalar(ne).floor())},this.getScissor=function(P){return P.copy(C)},this.setScissor=function(P,W,J,ee){P.isVector4?C.set(P.x,P.y,P.z,P.w):C.set(P,W,J,ee),G.scissor(q.copy(C).multiplyScalar(ne).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(P){G.setScissorTest(Y=P)},this.setOpaqueSort=function(P){z=P},this.setTransparentSort=function(P){H=P},this.getClearColor=function(P){return P.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(P=!0,W=!0,J=!0){let ee=0;if(P){let Q=!1;if(T!==null){const Pe=T.texture.format;Q=Pe===Ux||Pe===Ix||Pe===Dx}if(Q){const Pe=T.texture.type,Be=Pe===ir||Pe===Wi||Pe===sf||Pe===Cr||Pe===Lx||Pe===Nx,He=Ge.getClearColor(),Ve=Ge.getClearAlpha(),Qe=He.r,Xe=He.g,Ye=He.b;Be?(m[0]=Qe,m[1]=Xe,m[2]=Ye,m[3]=Ve,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Qe,x[1]=Xe,x[2]=Ye,x[3]=Ve,I.clearBufferiv(I.COLOR,0,x))}else ee|=I.COLOR_BUFFER_BIT}W&&(ee|=I.DEPTH_BUFFER_BIT),J&&(ee|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Ee.dispose(),Le.dispose(),te.dispose(),M.dispose(),B.dispose(),re.dispose(),N.dispose(),xe.dispose(),be.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",lt),Ce.removeEventListener("sessionend",Ze),ue&&(ue.dispose(),ue=null),ct.stop()};function ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=he.autoReset,W=ce.enabled,J=ce.autoUpdate,ee=ce.needsUpdate,Q=ce.type;De(),he.autoReset=P,ce.enabled=W,ce.autoUpdate=J,ce.needsUpdate=ee,ce.type=Q}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ve(P){const W=P.target;W.removeEventListener("dispose",ve),ze(W)}function ze(P){ke(P),te.remove(P)}function ke(P){const W=te.get(P).programs;W!==void 0&&(W.forEach(function(J){be.releaseProgram(J)}),P.isShaderMaterial&&be.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,J,ee,Q,Pe){W===null&&(W=Me);const Be=Q.isMesh&&Q.matrixWorld.determinant()<0,He=xo(P,W,J,ee,Q);G.setMaterial(ee,Be);let Ve=J.index,Qe=1;if(ee.wireframe===!0){if(Ve=ae.getWireframeAttribute(J),Ve===void 0)return;Qe=2}const Xe=J.drawRange,Ye=J.attributes.position;let Rt=Xe.start*Qe,xn=(Xe.start+Xe.count)*Qe;Pe!==null&&(Rt=Math.max(Rt,Pe.start*Qe),xn=Math.min(xn,(Pe.start+Pe.count)*Qe)),Ve!==null?(Rt=Math.max(Rt,0),xn=Math.min(xn,Ve.count)):Ye!=null&&(Rt=Math.max(Rt,0),xn=Math.min(xn,Ye.count));const kt=xn-Rt;if(kt<0||kt===1/0)return;N.setup(Q,ee,He,J,Ve);let li,_t=Ue;if(Ve!==null&&(li=oe.get(Ve),_t=Fe,_t.setIndex(li)),Q.isMesh)ee.wireframe===!0?(G.setLineWidth(ee.wireframeLinewidth*we()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(Q.isLine){let tt=ee.linewidth;tt===void 0&&(tt=1),G.setLineWidth(tt*we()),Q.isLineSegments?_t.setMode(I.LINES):Q.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else Q.isPoints?_t.setMode(I.POINTS):Q.isSprite&&_t.setMode(I.TRIANGLES);if(Q.isBatchedMesh)_t.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)_t.renderInstances(Rt,kt,Q.count);else if(J.isInstancedBufferGeometry){const tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Uc=Math.min(J.instanceCount,tt);_t.renderInstances(Rt,kt,Uc)}else _t.render(Rt,kt)};function We(P,W,J){P.transparent===!0&&P.side===qn&&P.forceSinglePass===!1?(P.side=gn,P.needsUpdate=!0,oi(P,W,J),P.side=ar,P.needsUpdate=!0,oi(P,W,J),P.side=qn):oi(P,W,J)}this.compile=function(P,W,J=null){J===null&&(J=P),g=Le.get(J),g.init(),_.push(g),J.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),P!==J&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights(v._useLegacyLights);const ee=new Set;return P.traverse(function(Q){const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let Be=0;Be<Pe.length;Be++){const He=Pe[Be];We(He,J,Q),ee.add(He)}else We(Pe,J,Q),ee.add(Pe)}),_.pop(),g=null,ee},this.compileAsync=function(P,W,J=null){const ee=this.compile(P,W,J);return new Promise(Q=>{function Pe(){if(ee.forEach(function(Be){te.get(Be).currentProgram.isReady()&&ee.delete(Be)}),ee.size===0){Q(P);return}setTimeout(Pe,10)}K.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let qe=null;function ht(P){qe&&qe(P)}function lt(){ct.stop()}function Ze(){ct.start()}const ct=new Kx;ct.setAnimationLoop(ht),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(P){qe=P,Ce.setAnimationLoop(P),P===null?ct.stop():ct.start()},Ce.addEventListener("sessionstart",lt),Ce.addEventListener("sessionend",Ze),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(W),W=Ce.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,W,T),g=Le.get(P,_.length),g.init(),_.push(g),ie.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),D.setFromProjectionMatrix(ie),se=this.localClippingEnabled,j=Oe.init(this.clippingPlanes,se),y=Ee.get(P,d.length),y.init(),d.push(y),cn(P,W,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(z,H),this.info.render.frame++,j===!0&&Oe.beginShadows();const J=g.state.shadowsArray;if(ce.render(J,P,W),j===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(y,P),g.setupLights(v._useLegacyLights),W.isArrayCamera){const ee=W.cameras;for(let Q=0,Pe=ee.length;Q<Pe;Q++){const Be=ee[Q];Xr(y,P,Be,Be.viewport)}}else Xr(y,P,W);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(v,P,W),N.resetDefaultState(),F=-1,w=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function cn(P,W,J,ee){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||D.intersectsSprite(P)){ee&&Te.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ie);const Be=re.update(P),He=P.material;He.visible&&y.push(P,Be,He,J,Te.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||D.intersectsObject(P))){const Be=re.update(P),He=P.material;if(ee&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Te.copy(P.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Te.copy(Be.boundingSphere.center)),Te.applyMatrix4(P.matrixWorld).applyMatrix4(ie)),Array.isArray(He)){const Ve=Be.groups;for(let Qe=0,Xe=Ve.length;Qe<Xe;Qe++){const Ye=Ve[Qe],Rt=He[Ye.materialIndex];Rt&&Rt.visible&&y.push(P,Be,Rt,J,Te.z,Ye)}}else He.visible&&y.push(P,Be,He,J,Te.z,null)}}const Pe=P.children;for(let Be=0,He=Pe.length;Be<He;Be++)cn(Pe[Be],W,J,ee)}function Xr(P,W,J,ee){const Q=P.opaque,Pe=P.transmissive,Be=P.transparent;g.setupLightsView(J),j===!0&&Oe.setGlobalState(v.clippingPlanes,J),Pe.length>0&&ur(Q,Pe,W,J),ee&&G.viewport(A.copy(ee)),Q.length>0&&Li(Q,W,J),Pe.length>0&&Li(Pe,W,J),Be.length>0&&Li(Be,W,J),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function ur(P,W,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Pe=$.isWebGL2;ue===null&&(ue=new Or(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?no:ir,minFilter:to,samples:Pe?4:0})),v.getDrawingBufferSize(de),Pe?ue.setSize(de.x,de.y):ue.setSize(nh(de.x),nh(de.y));const Be=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(le),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const He=v.toneMapping;v.toneMapping=nr,Li(P,J,ee),E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue);let Ve=!1;for(let Qe=0,Xe=W.length;Qe<Xe;Qe++){const Ye=W[Qe],Rt=Ye.object,xn=Ye.geometry,kt=Ye.material,li=Ye.group;if(kt.side===qn&&Rt.layers.test(ee.layers)){const _t=kt.side;kt.side=gn,kt.needsUpdate=!0,mo(Rt,J,ee,xn,kt,li),kt.side=_t,kt.needsUpdate=!0,Ve=!0}}Ve===!0&&(E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue)),v.setRenderTarget(Be),v.setClearColor(le,O),v.toneMapping=He}function Li(P,W,J){const ee=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Pe=P.length;Q<Pe;Q++){const Be=P[Q],He=Be.object,Ve=Be.geometry,Qe=ee===null?Be.material:ee,Xe=Be.group;He.layers.test(J.layers)&&mo(He,W,J,Ve,Qe,Xe)}}function mo(P,W,J,ee,Q,Pe){P.onBeforeRender(v,W,J,ee,Q,Pe),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(v,W,J,ee,P,Pe),Q.transparent===!0&&Q.side===qn&&Q.forceSinglePass===!1?(Q.side=gn,Q.needsUpdate=!0,v.renderBufferDirect(J,W,ee,Q,P,Pe),Q.side=ar,Q.needsUpdate=!0,v.renderBufferDirect(J,W,ee,Q,P,Pe),Q.side=qn):v.renderBufferDirect(J,W,ee,Q,P,Pe),P.onAfterRender(v,W,J,ee,Q,Pe)}function oi(P,W,J){W.isScene!==!0&&(W=Me);const ee=te.get(P),Q=g.state.lights,Pe=g.state.shadowsArray,Be=Q.state.version,He=be.getParameters(P,Q.state,Pe,W,J),Ve=be.getProgramCacheKey(He);let Qe=ee.programs;ee.environment=P.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(P.isMeshStandardMaterial?B:M).get(P.envMap||ee.environment),Qe===void 0&&(P.addEventListener("dispose",ve),Qe=new Map,ee.programs=Qe);let Xe=Qe.get(Ve);if(Xe!==void 0){if(ee.currentProgram===Xe&&ee.lightsStateVersion===Be)return vo(P,He),Xe}else He.uniforms=be.getUniforms(P),P.onBuild(J,He,v),P.onBeforeCompile(He,v),Xe=be.acquireProgram(He,Ve),Qe.set(Ve,Xe),ee.uniforms=He.uniforms;const Ye=ee.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ye.clippingPlanes=Oe.uniform),vo(P,He),ee.needsLights=Je(P),ee.lightsStateVersion=Be,ee.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.directionalShadowMap.value=Q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotShadowMap.value=Q.state.spotShadowMap,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMap.value=Q.state.pointShadowMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),ee.currentProgram=Xe,ee.uniformsList=null,Xe}function go(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=bl.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function vo(P,W){const J=te.get(P);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function xo(P,W,J,ee,Q){W.isScene!==!0&&(W=Me),E.resetTextureUnits();const Pe=W.fog,Be=ee.isMeshStandardMaterial?W.environment:null,He=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ri,Ve=(ee.isMeshStandardMaterial?B:M).get(ee.envMap||Be),Qe=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ye=!!J.morphAttributes.position,Rt=!!J.morphAttributes.normal,xn=!!J.morphAttributes.color;let kt=nr;ee.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(kt=v.toneMapping);const li=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=li!==void 0?li.length:0,tt=te.get(ee),Uc=g.state.lights;if(j===!0&&(se===!0||P!==w)){const bn=P===w&&ee.id===F;Oe.setState(ee,P,bn)}let At=!1;ee.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Uc.state.version||tt.outputColorSpace!==He||Q.isBatchedMesh&&tt.batching===!1||!Q.isBatchedMesh&&tt.batching===!0||Q.isInstancedMesh&&tt.instancing===!1||!Q.isInstancedMesh&&tt.instancing===!0||Q.isSkinnedMesh&&tt.skinning===!1||!Q.isSkinnedMesh&&tt.skinning===!0||Q.isInstancedMesh&&tt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&tt.instancingColor===!1&&Q.instanceColor!==null||tt.envMap!==Ve||ee.fog===!0&&tt.fog!==Pe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Oe.numPlanes||tt.numIntersection!==Oe.numIntersection)||tt.vertexAlphas!==Qe||tt.vertexTangents!==Xe||tt.morphTargets!==Ye||tt.morphNormals!==Rt||tt.morphColors!==xn||tt.toneMapping!==kt||$.isWebGL2===!0&&tt.morphTargetsCount!==_t)&&(At=!0):(At=!0,tt.__version=ee.version);let dr=tt.currentProgram;At===!0&&(dr=oi(ee,W,Q));let gf=!1,na=!1,Fc=!1;const qt=dr.getUniforms(),hr=tt.uniforms;if(G.useProgram(dr.program)&&(gf=!0,na=!0,Fc=!0),ee.id!==F&&(F=ee.id,na=!0),gf||w!==P){qt.setValue(I,"projectionMatrix",P.projectionMatrix),qt.setValue(I,"viewMatrix",P.matrixWorldInverse);const bn=qt.map.cameraPosition;bn!==void 0&&bn.setValue(I,Te.setFromMatrixPosition(P.matrixWorld)),$.logarithmicDepthBuffer&&qt.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&qt.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,na=!0,Fc=!0)}if(Q.isSkinnedMesh){qt.setOptional(I,Q,"bindMatrix"),qt.setOptional(I,Q,"bindMatrixInverse");const bn=Q.skeleton;bn&&($.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),qt.setValue(I,"boneTexture",bn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(qt.setOptional(I,Q,"batchingTexture"),qt.setValue(I,"batchingTexture",Q._matricesTexture,E));const Oc=J.morphAttributes;if((Oc.position!==void 0||Oc.normal!==void 0||Oc.color!==void 0&&$.isWebGL2===!0)&&je.update(Q,J,dr),(na||tt.receiveShadow!==Q.receiveShadow)&&(tt.receiveShadow=Q.receiveShadow,qt.setValue(I,"receiveShadow",Q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(hr.envMap.value=Ve,hr.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),na&&(qt.setValue(I,"toneMappingExposure",v.toneMappingExposure),tt.needsLights&&Ie(hr,Fc),Pe&&ee.fog===!0&&pe.refreshFogUniforms(hr,Pe),pe.refreshMaterialUniforms(hr,ee,ne,X,ue),bl.upload(I,go(tt),hr,E)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(bl.upload(I,go(tt),hr,E),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&qt.setValue(I,"center",Q.center),qt.setValue(I,"modelViewMatrix",Q.modelViewMatrix),qt.setValue(I,"normalMatrix",Q.normalMatrix),qt.setValue(I,"modelMatrix",Q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const bn=ee.uniformsGroups;for(let kc=0,p_=bn.length;kc<p_;kc++)if($.isWebGL2){const vf=bn[kc];xe.update(vf,dr),xe.bind(vf,dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dr}function Ie(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Je(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,W,J){te.get(P.texture).__webglTexture=W,te.get(P.depthTexture).__webglTexture=J;const ee=te.get(P);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){const J=te.get(P);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,J=0){T=P,L=W,b=J;let ee=!0,Q=null,Pe=!1,Be=!1;if(P){const Ve=te.get(P);Ve.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(I.FRAMEBUFFER,null),ee=!1):Ve.__webglFramebuffer===void 0?E.setupRenderTarget(P):Ve.__hasExternalTextures&&E.rebindTextures(P,te.get(P.texture).__webglTexture,te.get(P.depthTexture).__webglTexture);const Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Be=!0);const Xe=te.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?Q=Xe[W][J]:Q=Xe[W],Pe=!0):$.isWebGL2&&P.samples>0&&E.useMultisampledRTT(P)===!1?Q=te.get(P).__webglMultisampledFramebuffer:Array.isArray(Xe)?Q=Xe[J]:Q=Xe,A.copy(P.viewport),q.copy(P.scissor),Z=P.scissorTest}else A.copy(R).multiplyScalar(ne).floor(),q.copy(C).multiplyScalar(ne).floor(),Z=Y;if(G.bindFramebuffer(I.FRAMEBUFFER,Q)&&$.drawBuffers&&ee&&G.drawBuffers(P,Q),G.viewport(A),G.scissor(q),G.setScissorTest(Z),Pe){const Ve=te.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ve.__webglTexture,J)}else if(Be){const Ve=te.get(P.texture),Qe=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ve.__webglTexture,J||0,Qe)}F=-1},this.readRenderTargetPixels=function(P,W,J,ee,Q,Pe,Be){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He){G.bindFramebuffer(I.FRAMEBUFFER,He);try{const Ve=P.texture,Qe=Ve.format,Xe=Ve.type;if(Qe!==$n&&Re.convert(Qe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Xe===no&&(K.has("EXT_color_buffer_half_float")||$.isWebGL2&&K.has("EXT_color_buffer_float"));if(Xe!==ir&&Re.convert(Xe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Xi&&($.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-ee&&J>=0&&J<=P.height-Q&&I.readPixels(W,J,ee,Q,Re.convert(Qe),Re.convert(Xe),Pe)}finally{const Ve=T!==null?te.get(T).__webglFramebuffer:null;G.bindFramebuffer(I.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(P,W,J=0){const ee=Math.pow(2,-J),Q=Math.floor(W.image.width*ee),Pe=Math.floor(W.image.height*ee);E.setTexture2D(W,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,P.x,P.y,Q,Pe),G.unbindTexture()},this.copyTextureToTexture=function(P,W,J,ee=0){const Q=W.image.width,Pe=W.image.height,Be=Re.convert(J.format),He=Re.convert(J.type);E.setTexture2D(J,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,J.unpackAlignment),W.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ee,P.x,P.y,Q,Pe,Be,He,W.image.data):W.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ee,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Be,W.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,ee,P.x,P.y,Be,He,W.image),ee===0&&J.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(P,W,J,ee,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=P.max.x-P.min.x+1,Be=P.max.y-P.min.y+1,He=P.max.z-P.min.z+1,Ve=Re.convert(ee.format),Qe=Re.convert(ee.type);let Xe;if(ee.isData3DTexture)E.setTexture3D(ee,0),Xe=I.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)E.setTexture2DArray(ee,0),Xe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ee.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ee.unpackAlignment);const Ye=I.getParameter(I.UNPACK_ROW_LENGTH),Rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xn=I.getParameter(I.UNPACK_SKIP_PIXELS),kt=I.getParameter(I.UNPACK_SKIP_ROWS),li=I.getParameter(I.UNPACK_SKIP_IMAGES),_t=J.isCompressedTexture?J.mipmaps[Q]:J.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,P.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,P.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,P.min.z),J.isDataTexture||J.isData3DTexture?I.texSubImage3D(Xe,Q,W.x,W.y,W.z,Pe,Be,He,Ve,Qe,_t.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Xe,Q,W.x,W.y,W.z,Pe,Be,He,Ve,_t.data)):I.texSubImage3D(Xe,Q,W.x,W.y,W.z,Pe,Be,He,Ve,Qe,_t),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xn),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,li),Q===0&&ee.generateMipmaps&&I.generateMipmap(Xe),G.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?E.setTextureCube(P,0):P.isData3DTexture?E.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?E.setTexture2DArray(P,0):E.setTexture2D(P,0),G.unbindTexture()},this.resetState=function(){L=0,b=0,T=null,G.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===af?"display-p3":"srgb",n.unpackColorSpace=ut.workingColorSpace===Cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?Pr:Ox}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?Ht:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class b2 extends r_{}b2.prototype.isWebGL1Renderer=!0;class uf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=n}clone(){return new uf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class C2 extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class R2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new U;class oc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}setX(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=_i(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=_i(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=_i(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=_i(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Fn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cl extends Wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const ma=new U,fs=new U,ps=new U,ms=new _e,ga=new _e,s_=new Et,sl=new U,va=new U,al=new U,Jm=new _e,Hu=new _e,Qm=new _e;class Vu extends Ct{constructor(e=new Cl){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Ut;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new R2(n,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new oc(i,3,0,!1)),hs.setAttribute("uv",new oc(i,2,3,!1))}this.geometry=hs,this.material=e,this.center=new _e(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),s_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ol(sl.set(-.5,-.5,0),ps,a,fs,r,s),ol(va.set(.5,-.5,0),ps,a,fs,r,s),ol(al.set(.5,.5,0),ps,a,fs,r,s),Jm.set(0,0),Hu.set(1,0),Qm.set(1,1);let o=e.ray.intersectTriangle(sl,va,al,!1,ma);if(o===null&&(ol(va.set(-.5,.5,0),ps,a,fs,r,s),Hu.set(0,1),o=e.ray.intersectTriangle(sl,al,va,!1,ma),o===null))return;const l=e.ray.origin.distanceTo(ma);l<e.near||l>e.far||n.push({distance:l,point:ma.clone(),uv:Nn.getInterpolation(ma,sl,va,al,Jm,Hu,Qm,new _e),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ol(t,e,n,i,r,s){ms.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ga.x=s*ms.x-r*ms.y,ga.y=r*ms.x+s*ms.y):ga.copy(ms),t.copy(e),t.x+=ga.x,t.y+=ga.y,t.applyMatrix4(s_)}class Lr extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eg=new U,tg=new U,ng=new Et,Wu=new Pc,ll=new Rc;class Ps extends Ct{constructor(e=new Ut,n=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)eg.fromBufferAttribute(n,r-1),tg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=eg.distanceTo(tg);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;ng.copy(r).invert(),Wu.copy(e.ray).applyMatrix4(ng);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,p=new U,f=new U,m=this.isLineSegments?2:1,x=i.index,g=i.attributes.position;if(x!==null){const d=Math.max(0,a.start),_=Math.min(x.count,a.start+a.count);for(let v=d,S=_-1;v<S;v+=m){const L=x.getX(v),b=x.getX(v+1);if(c.fromBufferAttribute(g,L),h.fromBufferAttribute(g,b),Wu.distanceSqToSegment(c,h,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(f);F<e.near||F>e.far||n.push({distance:F,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let v=d,S=_-1;v<S;v+=m){if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Wu.distanceSqToSegment(c,h,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||n.push({distance:b,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ig=new U,rg=new U;class P2 extends Ps{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ig.fromBufferAttribute(n,r),rg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ig.distanceTo(rg);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xu extends vn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,m=(a-h)/f;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new _e:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new U,r=[],s=[],a=[],o=new U,l=new Et;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Vt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Vt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class df extends ai{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n){const i=n||new _e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*p+this.aX,c=f*p+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class L2 extends df{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function hf(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,p){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;f*=h,m*=h,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const cl=new U,qu=new hf,Yu=new hf,$u=new hf;class N2 extends ai{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(cl.subVectors(r[0],r[1]).add(r[0]),c=cl);const p=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(cl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=cl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(p),m),y=Math.pow(p.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(h),m);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),qu.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,x,y,g),Yu.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,x,y,g),$u.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,x,y,g)}else this.curveType==="catmullrom"&&(qu.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),Yu.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),$u.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return i.set(qu.calc(l),Yu.calc(l),$u.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sg(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function D2(t,e){const n=1-t;return n*n*e}function I2(t,e){return 2*(1-t)*t*e}function U2(t,e){return t*t*e}function Ia(t,e,n,i){return D2(t,e)+I2(t,n)+U2(t,i)}function F2(t,e){const n=1-t;return n*n*n*e}function O2(t,e){const n=1-t;return 3*n*n*t*e}function k2(t,e){return 3*(1-t)*t*t*e}function z2(t,e){return t*t*t*e}function Ua(t,e,n,i,r){return F2(t,e)+O2(t,n)+k2(t,i)+z2(t,r)}class a_ extends ai{constructor(e=new _e,n=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ua(e,r.x,s.x,a.x,o.x),Ua(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B2 extends ai{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ua(e,r.x,s.x,a.x,o.x),Ua(e,r.y,s.y,a.y,o.y),Ua(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class o_ extends ai{constructor(e=new _e,n=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new _e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new _e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G2 extends ai{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class l_ extends ai{constructor(e=new _e,n=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Ia(e,r.x,s.x,a.x),Ia(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j2 extends ai{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Ia(e,r.x,s.x,a.x),Ia(e,r.y,s.y,a.y),Ia(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c_ extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new _e){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(sg(o,l.x,c.x,h.x,p.x),sg(o,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new _e().fromArray(r))}return this}}var rh=Object.freeze({__proto__:null,ArcCurve:L2,CatmullRomCurve3:N2,CubicBezierCurve:a_,CubicBezierCurve3:B2,EllipseCurve:df,LineCurve:o_,LineCurve3:G2,QuadraticBezierCurve:l_,QuadraticBezierCurve3:j2,SplineCurve:c_});class H2 extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new rh[r.type]().fromJSON(r))}return this}}class ag extends H2{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new o_(this.currentPoint.clone(),new _e(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new l_(this.currentPoint.clone(),new _e(e,n),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,a){const o=new a_(this.currentPoint.clone(),new _e(e,n),new _e(i,r),new _e(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new c_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,n+l,i,r,s,a),this}absarc(e,n,i,r,s,a){return this.absellipse(e,n,i,i,r,s,a),this}ellipse(e,n,i,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,r,s,a,o,l),this}absellipse(e,n,i,r,s,a,o,l){const c=new df(e,n,i,r,s,a,o,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xi extends Ut{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let x=0;const y=[],g=i/2;let d=0;_(),a===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(m,2));function _(){const S=new U,L=new U;let b=0;const T=(n-e)/i;for(let F=0;F<=s;F++){const w=[],A=F/s,q=A*(n-e)+e;for(let Z=0;Z<=r;Z++){const le=Z/r,O=le*l+o,V=Math.sin(O),X=Math.cos(O);L.x=q*V,L.y=-A*i+g,L.z=q*X,p.push(L.x,L.y,L.z),S.set(V,T,X).normalize(),f.push(S.x,S.y,S.z),m.push(le,1-A),w.push(x++)}y.push(w)}for(let F=0;F<r;F++)for(let w=0;w<s;w++){const A=y[w][F],q=y[w+1][F],Z=y[w+1][F+1],le=y[w][F+1];h.push(A,q,le),h.push(q,Z,le),b+=6}c.addGroup(d,b,0),d+=b}function v(S){const L=x,b=new _e,T=new U;let F=0;const w=S===!0?e:n,A=S===!0?1:-1;for(let Z=1;Z<=r;Z++)p.push(0,g*A,0),f.push(0,A,0),m.push(.5,.5),x++;const q=x;for(let Z=0;Z<=r;Z++){const O=Z/r*l+o,V=Math.cos(O),X=Math.sin(O);T.x=w*X,T.y=g*A,T.z=w*V,p.push(T.x,T.y,T.z),f.push(0,A,0),b.x=V*.5+.5,b.y=X*.5*A+.5,m.push(b.x,b.y),x++}for(let Z=0;Z<r;Z++){const le=L+Z,O=q+Z;S===!0?h.push(O,O+1,le):h.push(O+1,O,le),F+=3}c.addGroup(d,F,S===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class u_ extends ag{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new ag().fromJSON(r))}return this}}const V2={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=d_(t,0,r,n,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,p,f,m;if(i&&(s=$2(t,e,s,n)),t.length>80*n){o=c=t[0],l=h=t[1];for(let x=n;x<r;x+=n)p=t[x],f=t[x+1],p<o&&(o=p),f<l&&(l=f),p>c&&(c=p),f>h&&(h=f);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return ro(s,a,n,o,l,m,0),a}};function d_(t,e,n,i,r){let s,a;if(r===ab(t,e,n,i)>0)for(s=e;s<n;s+=i)a=og(s,t[s],t[s+1],a);else for(s=n-i;s>=e;s-=i)a=og(s,t[s],t[s+1],a);return a&&Dc(a,a.next)&&(ao(a),a=a.next),a}function Br(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Dc(n,n.next)||St(n.prev,n,n.next)===0)){if(ao(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ro(t,e,n,i,r,s,a){if(!t)return;!a&&s&&eb(t,i,r,s);let o=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?X2(t,i,r,s):W2(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ao(t),t=c.next,o=c.next;continue}if(t=c,t===o){a?a===1?(t=q2(Br(t),e,n),ro(t,e,n,i,r,s,2)):a===2&&Y2(t,e,n,i,r,s):ro(Br(t),e,n,i,r,s,1);break}}}function W2(t){const e=t.prev,n=t,i=t.next;if(St(e,n,i)>=0)return!1;const r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,p=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=p&&x.y<=m&&Ls(r,o,s,l,a,c,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function X2(t,e,n,i){const r=t.prev,s=t,a=t.next;if(St(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,p=s.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,x=h<p?h<f?h:f:p<f?p:f,y=o>l?o>c?o:c:l>c?l:c,g=h>p?h>f?h:f:p>f?p:f,d=sh(m,x,e,n,i),_=sh(y,g,e,n,i);let v=t.prevZ,S=t.nextZ;for(;v&&v.z>=d&&S&&S.z<=_;){if(v.x>=m&&v.x<=y&&v.y>=x&&v.y<=g&&v!==r&&v!==a&&Ls(o,h,l,p,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=m&&S.x<=y&&S.y>=x&&S.y<=g&&S!==r&&S!==a&&Ls(o,h,l,p,c,f,S.x,S.y)&&St(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=d;){if(v.x>=m&&v.x<=y&&v.y>=x&&v.y<=g&&v!==r&&v!==a&&Ls(o,h,l,p,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=_;){if(S.x>=m&&S.x<=y&&S.y>=x&&S.y<=g&&S!==r&&S!==a&&Ls(o,h,l,p,c,f,S.x,S.y)&&St(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function q2(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Dc(r,s)&&h_(r,i,i.next,s)&&so(r,s)&&so(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ao(i),ao(i.next),i=t=s),i=i.next}while(i!==t);return Br(i)}function Y2(t,e,n,i,r,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ib(a,o)){let l=f_(a,o);a=Br(a,a.next),l=Br(l,l.next),ro(a,e,n,i,r,s,0),ro(l,e,n,i,r,s,0);return}o=o.next}a=a.next}while(a!==t)}function $2(t,e,n,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:t.length,c=d_(t,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(nb(c));for(r.sort(K2),s=0;s<r.length;s++)n=Z2(r[s],n);return n}function K2(t,e){return t.x-e.x}function Z2(t,e){const n=J2(t,e);if(!n)return e;const i=f_(n,t);return Br(i,i.next),Br(n,n.next)}function J2(t,e){let n=e,i=-1/0,r;const s=t.x,a=t.y;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){const f=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,p;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ls(a<c?s:i,a,l,c,a<c?i:s,a,n.x,n.y)&&(p=Math.abs(a-n.y)/(s-n.x),so(n,t)&&(p<h||p===h&&(n.x>r.x||n.x===r.x&&Q2(r,n)))&&(r=n,h=p)),n=n.next;while(n!==o);return r}function Q2(t,e){return St(t.prev,t,e.prev)<0&&St(e.next,t,t.next)<0}function eb(t,e,n,i){let r=t;do r.z===0&&(r.z=sh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,tb(r)}function tb(t){let e,n,i,r,s,a,o,l,c=1;do{for(n=t,t=null,s=null,a=0;n;){for(a++,i=n,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(a>1);return t}function sh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function nb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ls(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function ib(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!rb(t,e)&&(so(t,e)&&so(e,t)&&sb(t,e)&&(St(t.prev,t,e.prev)||St(t,e.prev,e))||Dc(t,e)&&St(t.prev,t,t.next)>0&&St(e.prev,e,e.next)>0)}function St(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Dc(t,e){return t.x===e.x&&t.y===e.y}function h_(t,e,n,i){const r=dl(St(t,e,n)),s=dl(St(t,e,i)),a=dl(St(n,i,t)),o=dl(St(n,i,e));return!!(r!==s&&a!==o||r===0&&ul(t,n,e)||s===0&&ul(t,i,e)||a===0&&ul(n,t,i)||o===0&&ul(n,e,i))}function ul(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function dl(t){return t>0?1:t<0?-1:0}function rb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&h_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function so(t,e){return St(t.prev,t,t.next)<0?St(t,e,t.next)>=0&&St(t,t.prev,e)>=0:St(t,e,t.prev)<0||St(t,t.next,e)<0}function sb(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function f_(t,e){const n=new ah(t.i,t.x,t.y),i=new ah(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function og(t,e,n,i){const r=new ah(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ao(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ah(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ab(t,e,n,i){let r=0;for(let s=e,a=n-i;s<n;s+=i)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return r}class Fa{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Fa.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];lg(e),cg(i,e);let a=e.length;n.forEach(lg);for(let l=0;l<n.length;l++)r.push(a),a+=n[l].length,cg(i,n[l]);const o=V2.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function lg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function cg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class ff extends Ut{constructor(e=new u_([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new wt(r,3)),this.setAttribute("uv",new wt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,m=n.bevelThickness!==void 0?n.bevelThickness:.2,x=n.bevelSize!==void 0?n.bevelSize:m-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:ob;let v,S=!1,L,b,T,F;d&&(v=d.getSpacedPoints(h),S=!0,f=!1,L=d.computeFrenetFrames(h,!1),b=new U,T=new U,F=new U),f||(g=0,m=0,x=0,y=0);const w=o.extractPoints(c);let A=w.shape;const q=w.holes;if(!Fa.isClockWise(A)){A=A.reverse();for(let I=0,fe=q.length;I<fe;I++){const K=q[I];Fa.isClockWise(K)&&(q[I]=K.reverse())}}const le=Fa.triangulateShape(A,q),O=A;for(let I=0,fe=q.length;I<fe;I++){const K=q[I];A=A.concat(K)}function V(I,fe,K){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(fe,K)}const X=A.length,ne=le.length;function z(I,fe,K){let $,G,he;const te=I.x-fe.x,E=I.y-fe.y,M=K.x-I.x,B=K.y-I.y,oe=te*te+E*E,ae=te*B-E*M;if(Math.abs(ae)>Number.EPSILON){const re=Math.sqrt(oe),be=Math.sqrt(M*M+B*B),pe=fe.x-E/re,Ee=fe.y+te/re,Le=K.x-B/be,Oe=K.y+M/be,ce=((Le-pe)*B-(Oe-Ee)*M)/(te*B-E*M);$=pe+te*ce-I.x,G=Ee+E*ce-I.y;const Ge=$*$+G*G;if(Ge<=2)return new _e($,G);he=Math.sqrt(Ge/2)}else{let re=!1;te>Number.EPSILON?M>Number.EPSILON&&(re=!0):te<-Number.EPSILON?M<-Number.EPSILON&&(re=!0):Math.sign(E)===Math.sign(B)&&(re=!0),re?($=-E,G=te,he=Math.sqrt(oe)):($=te,G=E,he=Math.sqrt(oe/2))}return new _e($/he,G/he)}const H=[];for(let I=0,fe=O.length,K=fe-1,$=I+1;I<fe;I++,K++,$++)K===fe&&(K=0),$===fe&&($=0),H[I]=z(O[I],O[K],O[$]);const R=[];let C,Y=H.concat();for(let I=0,fe=q.length;I<fe;I++){const K=q[I];C=[];for(let $=0,G=K.length,he=G-1,te=$+1;$<G;$++,he++,te++)he===G&&(he=0),te===G&&(te=0),C[$]=z(K[$],K[he],K[te]);R.push(C),Y=Y.concat(C)}for(let I=0;I<g;I++){const fe=I/g,K=m*Math.cos(fe*Math.PI/2),$=x*Math.sin(fe*Math.PI/2)+y;for(let G=0,he=O.length;G<he;G++){const te=V(O[G],H[G],$);ie(te.x,te.y,-K)}for(let G=0,he=q.length;G<he;G++){const te=q[G];C=R[G];for(let E=0,M=te.length;E<M;E++){const B=V(te[E],C[E],$);ie(B.x,B.y,-K)}}}const D=x+y;for(let I=0;I<X;I++){const fe=f?V(A[I],Y[I],D):A[I];S?(T.copy(L.normals[0]).multiplyScalar(fe.x),b.copy(L.binormals[0]).multiplyScalar(fe.y),F.copy(v[0]).add(T).add(b),ie(F.x,F.y,F.z)):ie(fe.x,fe.y,0)}for(let I=1;I<=h;I++)for(let fe=0;fe<X;fe++){const K=f?V(A[fe],Y[fe],D):A[fe];S?(T.copy(L.normals[I]).multiplyScalar(K.x),b.copy(L.binormals[I]).multiplyScalar(K.y),F.copy(v[I]).add(T).add(b),ie(F.x,F.y,F.z)):ie(K.x,K.y,p/h*I)}for(let I=g-1;I>=0;I--){const fe=I/g,K=m*Math.cos(fe*Math.PI/2),$=x*Math.sin(fe*Math.PI/2)+y;for(let G=0,he=O.length;G<he;G++){const te=V(O[G],H[G],$);ie(te.x,te.y,p+K)}for(let G=0,he=q.length;G<he;G++){const te=q[G];C=R[G];for(let E=0,M=te.length;E<M;E++){const B=V(te[E],C[E],$);S?ie(B.x,B.y+v[h-1].y,v[h-1].x+K):ie(B.x,B.y,p+K)}}}j(),se();function j(){const I=r.length/3;if(f){let fe=0,K=X*fe;for(let $=0;$<ne;$++){const G=le[$];de(G[2]+K,G[1]+K,G[0]+K)}fe=h+g*2,K=X*fe;for(let $=0;$<ne;$++){const G=le[$];de(G[0]+K,G[1]+K,G[2]+K)}}else{for(let fe=0;fe<ne;fe++){const K=le[fe];de(K[2],K[1],K[0])}for(let fe=0;fe<ne;fe++){const K=le[fe];de(K[0]+X*h,K[1]+X*h,K[2]+X*h)}}i.addGroup(I,r.length/3-I,0)}function se(){const I=r.length/3;let fe=0;ue(O,fe),fe+=O.length;for(let K=0,$=q.length;K<$;K++){const G=q[K];ue(G,fe),fe+=G.length}i.addGroup(I,r.length/3-I,1)}function ue(I,fe){let K=I.length;for(;--K>=0;){const $=K;let G=K-1;G<0&&(G=I.length-1);for(let he=0,te=h+g*2;he<te;he++){const E=X*he,M=X*(he+1),B=fe+$+E,oe=fe+G+E,ae=fe+G+M,re=fe+$+M;Te(B,oe,ae,re)}}}function ie(I,fe,K){l.push(I),l.push(fe),l.push(K)}function de(I,fe,K){Me(I),Me(fe),Me(K);const $=r.length/3,G=_.generateTopUV(i,r,$-3,$-2,$-1);we(G[0]),we(G[1]),we(G[2])}function Te(I,fe,K,$){Me(I),Me(fe),Me($),Me(fe),Me(K),Me($);const G=r.length/3,he=_.generateSideWallUV(i,r,G-6,G-3,G-2,G-1);we(he[0]),we(he[1]),we(he[3]),we(he[1]),we(he[2]),we(he[3])}function Me(I){r.push(l[I*3+0]),r.push(l[I*3+1]),r.push(l[I*3+2])}function we(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return lb(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=n[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new rh[r.type]().fromJSON(r)),new ff(i,e.options)}}const ob={generateTopUV:function(t,e,n,i,r){const s=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new _e(s,a),new _e(o,l),new _e(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){const a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],p=e[i*3+2],f=e[r*3],m=e[r*3+1],x=e[r*3+2],y=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-p),new _e(f,1-x),new _e(y,1-d)]:[new _e(o,1-l),new _e(h,1-p),new _e(m,1-x),new _e(g,1-d)]}};function lb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class lc extends Ut{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let p=e;const f=(n-e)/r,m=new U,x=new _e;for(let y=0;y<=r;y++){for(let g=0;g<=i;g++){const d=s+g/i*a;m.x=p*Math.cos(d),m.y=p*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/n+1)/2,x.y=(m.y/n+1)/2,h.push(x.x,x.y)}p+=f}for(let y=0;y<r;y++){const g=y*(i+1);for(let d=0;d<i;d++){const _=d+g,v=_,S=_+i+1,L=_+i+2,b=_+1;o.push(v,S,b),o.push(S,L,b)}}this.setIndex(o),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oa extends Ut{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],p=new U,f=new U,m=[],x=[],y=[],g=[];for(let d=0;d<=i;d++){const _=[],v=d/i;let S=0;d===0&&a===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let L=0;L<=n;L++){const b=L/n;p.x=-e*Math.cos(r+b*s)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(r+b*s)*Math.sin(a+v*o),x.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),g.push(b+S,1-v),_.push(c++)}h.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const v=h[d][_+1],S=h[d][_],L=h[d+1][_],b=h[d+1][_+1];(d!==0||a>0)&&m.push(v,S,b),(d!==i-1||l<Math.PI)&&m.push(S,L,b)}this.setIndex(m),this.setAttribute("position",new wt(x,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tn extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kx,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cb extends Lr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class po extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class ub extends po{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ku=new Et,ug=new U,dg=new U;class pf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lf,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ug.setFromMatrixPosition(e.matrixWorld),n.position.copy(ug),dg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dg),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class db extends pf{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=sc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hb extends po{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new db}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hg=new Et,xa=new U,Zu=new U;class fb extends pf{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xa.setFromMatrixPosition(e.matrixWorld),i.position.copy(xa),Zu.copy(i.position),Zu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zu),i.updateMatrixWorld(),r.makeTranslation(-xa.x,-xa.y,-xa.z),hg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hg)}}class pb extends po{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mb extends pf{constructor(){super(new Zx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gb extends po{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new mb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vb extends po{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class xb{constructor(e,n,i=0,r=1/0){this.ray=new Pc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return oh(e,this,i,n),i.sort(fg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)oh(e[r],this,i,n);return i.sort(fg),i}}function fg(t,e){return t.distance-e.distance}function oh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)oh(r[s],e,n,!0)}}class pg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _b extends P2{constructor(e=10,n=10,i=4473924,r=8947848){i=new et(i),r=new et(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let f=0,m=0,x=-o;f<=n;f++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const y=f===s?i:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const h=new Ut;h.setAttribute("position",new wt(l,3)),h.setAttribute("color",new wt(c,3));const p=new Lr({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const mg=new U;let hl,Ju;class gg extends Ct{constructor(e=new U(0,0,1),n=new U(0,0,0),i=1,r=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",hl===void 0&&(hl=new Ut,hl.setAttribute("position",new wt([0,0,0,0,1,0],3)),Ju=new xi(0,.5,1,5,1),Ju.translate(0,-.5,0)),this.position.copy(n),this.line=new Ps(hl,new Lr({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new at(Ju,new Bs({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{mg.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(mg,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);const vg={type:"change"},Qu={type:"start"},xg={type:"end"},fl=new Pc,_g=new vi,yb=Math.cos(70*S1.DEG2RAD);class Sb extends Vr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:$r.ROTATE,TWO:$r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Le),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(vg),i.update(),s=r.NONE},this.update=function(){const N=new U,xe=new kr().setFromUnitVectors(e.up,new U(0,1,0)),De=xe.clone().invert(),Ce=new U,ge=new kr,k=new U,Se=2*Math.PI;return function(ze=null){const ke=i.object.position;N.copy(ke).sub(i.target),N.applyQuaternion(xe),o.setFromVector3(N),i.autoRotate&&s===r.NONE&&Z(A(ze)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let We=i.minAzimuthAngle,qe=i.maxAzimuthAngle;isFinite(We)&&isFinite(qe)&&(We<-Math.PI?We+=Se:We>Math.PI&&(We-=Se),qe<-Math.PI?qe+=Se:qe>Math.PI&&(qe-=Se),We<=qe?o.theta=Math.max(We,Math.min(qe,o.theta)):o.theta=o.theta>(We+qe)/2?Math.max(We,o.theta):Math.min(qe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&b||i.object.isOrthographicCamera?o.radius=R(o.radius):o.radius=R(o.radius*c),N.setFromSpherical(o),N.applyQuaternion(De),ke.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ht=!1;if(i.zoomToCursor&&b){let lt=null;if(i.object.isPerspectiveCamera){const Ze=N.length();lt=R(Ze*c);const ct=Ze-lt;i.object.position.addScaledVector(S,ct),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ze=new U(L.x,L.y,0);Ze.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ht=!0;const ct=new U(L.x,L.y,0);ct.unproject(i.object),i.object.position.sub(ct).add(Ze),i.object.updateMatrixWorld(),lt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(lt).add(i.object.position):(fl.origin.copy(i.object.position),fl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(fl.direction))<yb?e.lookAt(i.target):(_g.setFromNormalAndCoplanarPoint(i.object.up,i.target),fl.intersectPlane(_g,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ht=!0);return c=1,b=!1,ht||Ce.distanceToSquared(i.object.position)>a||8*(1-ge.dot(i.object.quaternion))>a||k.distanceToSquared(i.target)>0?(i.dispatchEvent(vg),Ce.copy(i.object.position),ge.copy(i.object.quaternion),k.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ge),i.domElement.removeEventListener("pointerdown",E),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Le),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new pg,l=new pg;let c=1;const h=new U,p=new _e,f=new _e,m=new _e,x=new _e,y=new _e,g=new _e,d=new _e,_=new _e,v=new _e,S=new U,L=new _e;let b=!1;const T=[],F={};let w=!1;function A(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function q(N){const xe=Math.abs(N*.01);return Math.pow(.95,i.zoomSpeed*xe)}function Z(N){l.theta-=N}function le(N){l.phi-=N}const O=function(){const N=new U;return function(De,Ce){N.setFromMatrixColumn(Ce,0),N.multiplyScalar(-De),h.add(N)}}(),V=function(){const N=new U;return function(De,Ce){i.screenSpacePanning===!0?N.setFromMatrixColumn(Ce,1):(N.setFromMatrixColumn(Ce,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(De),h.add(N)}}(),X=function(){const N=new U;return function(De,Ce){const ge=i.domElement;if(i.object.isPerspectiveCamera){const k=i.object.position;N.copy(k).sub(i.target);let Se=N.length();Se*=Math.tan(i.object.fov/2*Math.PI/180),O(2*De*Se/ge.clientHeight,i.object.matrix),V(2*Ce*Se/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(De*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),V(Ce*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(N,xe){if(!i.zoomToCursor)return;b=!0;const De=i.domElement.getBoundingClientRect(),Ce=N-De.left,ge=xe-De.top,k=De.width,Se=De.height;L.x=Ce/k*2-1,L.y=-(ge/Se)*2+1,S.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function R(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function C(N){p.set(N.clientX,N.clientY)}function Y(N){H(N.clientX,N.clientX),d.set(N.clientX,N.clientY)}function D(N){x.set(N.clientX,N.clientY)}function j(N){f.set(N.clientX,N.clientY),m.subVectors(f,p).multiplyScalar(i.rotateSpeed);const xe=i.domElement;Z(2*Math.PI*m.x/xe.clientHeight),le(2*Math.PI*m.y/xe.clientHeight),p.copy(f),i.update()}function se(N){_.set(N.clientX,N.clientY),v.subVectors(_,d),v.y>0?ne(q(v.y)):v.y<0&&z(q(v.y)),d.copy(_),i.update()}function ue(N){y.set(N.clientX,N.clientY),g.subVectors(y,x).multiplyScalar(i.panSpeed),X(g.x,g.y),x.copy(y),i.update()}function ie(N){H(N.clientX,N.clientY),N.deltaY<0?z(q(N.deltaY)):N.deltaY>0&&ne(q(N.deltaY)),i.update()}function de(N){let xe=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?le(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?le(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),xe=!0;break}xe&&(N.preventDefault(),i.update())}function Te(N){if(T.length===1)p.set(N.pageX,N.pageY);else{const xe=Re(N),De=.5*(N.pageX+xe.x),Ce=.5*(N.pageY+xe.y);p.set(De,Ce)}}function Me(N){if(T.length===1)x.set(N.pageX,N.pageY);else{const xe=Re(N),De=.5*(N.pageX+xe.x),Ce=.5*(N.pageY+xe.y);x.set(De,Ce)}}function we(N){const xe=Re(N),De=N.pageX-xe.x,Ce=N.pageY-xe.y,ge=Math.sqrt(De*De+Ce*Ce);d.set(0,ge)}function I(N){i.enableZoom&&we(N),i.enablePan&&Me(N)}function fe(N){i.enableZoom&&we(N),i.enableRotate&&Te(N)}function K(N){if(T.length==1)f.set(N.pageX,N.pageY);else{const De=Re(N),Ce=.5*(N.pageX+De.x),ge=.5*(N.pageY+De.y);f.set(Ce,ge)}m.subVectors(f,p).multiplyScalar(i.rotateSpeed);const xe=i.domElement;Z(2*Math.PI*m.x/xe.clientHeight),le(2*Math.PI*m.y/xe.clientHeight),p.copy(f)}function $(N){if(T.length===1)y.set(N.pageX,N.pageY);else{const xe=Re(N),De=.5*(N.pageX+xe.x),Ce=.5*(N.pageY+xe.y);y.set(De,Ce)}g.subVectors(y,x).multiplyScalar(i.panSpeed),X(g.x,g.y),x.copy(y)}function G(N){const xe=Re(N),De=N.pageX-xe.x,Ce=N.pageY-xe.y,ge=Math.sqrt(De*De+Ce*Ce);_.set(0,ge),v.set(0,Math.pow(_.y/d.y,i.zoomSpeed)),ne(v.y),d.copy(_);const k=(N.pageX+xe.x)*.5,Se=(N.pageY+xe.y)*.5;H(k,Se)}function he(N){i.enableZoom&&G(N),i.enablePan&&$(N)}function te(N){i.enableZoom&&G(N),i.enableRotate&&K(N)}function E(N){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",B)),je(N),N.pointerType==="touch"?Oe(N):oe(N))}function M(N){i.enabled!==!1&&(N.pointerType==="touch"?ce(N):ae(N))}function B(N){Ue(N),T.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(xg),s=r.NONE}function oe(N){let xe;switch(N.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Yr.DOLLY:if(i.enableZoom===!1)return;Y(N),s=r.DOLLY;break;case Yr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;D(N),s=r.PAN}else{if(i.enableRotate===!1)return;C(N),s=r.ROTATE}break;case Yr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;C(N),s=r.ROTATE}else{if(i.enablePan===!1)return;D(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qu)}function ae(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(N);break;case r.DOLLY:if(i.enableZoom===!1)return;se(N);break;case r.PAN:if(i.enablePan===!1)return;ue(N);break}}function re(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(Qu),ie(be(N)),i.dispatchEvent(xg))}function be(N){const xe=N.deltaMode,De={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(xe){case 1:De.deltaY*=16;break;case 2:De.deltaY*=100;break}return N.ctrlKey&&!w&&(De.deltaY*=10),De}function pe(N){N.key==="Control"&&(w=!0,document.addEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Ee(N){N.key==="Control"&&(w=!1,document.removeEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Le(N){i.enabled===!1||i.enablePan===!1||de(N)}function Oe(N){switch(Fe(N),T.length){case 1:switch(i.touches.ONE){case $r.ROTATE:if(i.enableRotate===!1)return;Te(N),s=r.TOUCH_ROTATE;break;case $r.PAN:if(i.enablePan===!1)return;Me(N),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case $r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;I(N),s=r.TOUCH_DOLLY_PAN;break;case $r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;fe(N),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qu)}function ce(N){switch(Fe(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;K(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;$(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(N),i.update();break;default:s=r.NONE}}function Ge(N){i.enabled!==!1&&N.preventDefault()}function je(N){T.push(N.pointerId)}function Ue(N){delete F[N.pointerId];for(let xe=0;xe<T.length;xe++)if(T[xe]==N.pointerId){T.splice(xe,1);return}}function Fe(N){let xe=F[N.pointerId];xe===void 0&&(xe=new _e,F[N.pointerId]=xe),xe.set(N.pageX,N.pageY)}function Re(N){const xe=N.pointerId===T[0]?T[1]:T[0];return F[xe]}i.domElement.addEventListener("contextmenu",Ge),i.domElement.addEventListener("pointerdown",E),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}const yg={earth:{name:"Earth",g:9.81,icon:"🌍"},moon:{name:"Moon",g:1.62,icon:"🌑"},mars:{name:"Mars",g:3.71,icon:"🪐"},jupiter:{name:"Jupiter",g:24.79,icon:"⚡"}},Gr={steel:{name:"Structural Steel",density:7850,color:"#94a3b8",metalness:.85,roughness:.25,description:"Standard dynamics lab bar pendulum with high stiffness and uniform density."},brass:{name:"Polished Brass",density:8500,color:"#eab308",metalness:.8,roughness:.2,description:"High-density copper-zinc alloy providing pronounced rotational inertia."},aluminum:{name:"Aircraft Aluminum",density:2700,color:"#cbd5e1",metalness:.7,roughness:.35,description:"Lightweight alloy with rapid damping response and high strength-to-weight ratio."},titanium:{name:"Titanium Grade 5",density:4500,color:"#64748b",metalness:.9,roughness:.3,description:"Aerospace structural metal with exceptional corrosion resistance."},hardwood:{name:"Dense Hardwood (Oak)",density:750,color:"#854d0e",metalness:.05,roughness:.75,description:"Non-metallic compound pendulum bar for damping and mass comparison studies."}},Mb={length:1,width:.03,thickness:.01,holeRadius:.0035,holeDistancesFromCG:[-.4,-.3,-.2,-.1,0,.1,.2,.3,.4]};function Eb(t,e,n,i){const r=Gr[i]||Gr.steel;return+(t*e*n*r.density).toFixed(3)}function Ic(t,e){return Math.sqrt((t*t+e*e)/12)}function cc(t,e,n){const i=Ic(e,n);return t*i*i}function Sg(t,e,n,i){return cc(t,e,n)+t*i*i}function lh(t,e,n=9.81){const i=Math.abs(t);return i<.001?1/0:2*Math.PI*Math.sqrt((e*e+i*i)/(n*i))}function wb(t,e=9.81){return 2*Math.PI*Math.sqrt(2*t/e)}function Tb(t){const e=t*t,n=e*e,i=1+1/16*e+11/3072*n,r=(i-1)*100;return{factor:i,percentIncrease:r}}function Ab(t,e,n,i){const{mass:r,l:s,kG:a,g:o=9.81,damping:l=.003}=i,c=Math.abs(s);if(c<.001){const F=-(l/(r*a*a))*e;return{theta:t+e*n,omega:e+F*n,torque:0,alpha:F}}const h=r*(a*a+c*c),p=(F,w)=>{const A=-r*o*c*Math.sin(F),q=-l*w;return(A+q)/h},f=e,m=p(t,e),x=e+.5*n*m,y=p(t+.5*n*f,x),g=e+.5*n*y,d=p(t+.5*n*x,g),_=e+n*d,v=p(t+n*g,_),S=t+n/6*(f+2*x+2*g+_),L=e+n/6*(m+2*y+2*d+v),b=p(S,L),T=-r*o*c*Math.sin(S);return{theta:S,omega:L,torque:T,alpha:b}}function bb(t,e,n,i,r,s=9.81){const a=Math.abs(i),l=.5*(n*(r*r+a*a))*e*e,c=n*s*a*(1-Math.cos(t));return{kineticEnergy:l,potentialEnergy:c,totalEnergy:l+c}}function Cb({currentHoleIndex:t,onSelectHole:e,angleRad:n,angularVelocity:i,barConfig:r,materialKey:s,showCG:a,showCenterOfOscillation:o,showEquivalentPendulum:l,showTraceTrail:c,showVectors:h,isDisplacing:p,onDisplaceAngle:f,photogateBeamActive:m,cameraViewPreset:x}){const y=me.useRef(null),g=me.useRef(null),d=me.useRef(null),_=me.useRef(null),v=me.useRef(null),S=me.useRef(null),L=me.useRef(null),b=me.useRef(null),T=me.useRef(null),F=me.useRef(null),w=me.useRef(null),A=me.useRef(null),q=me.useRef([]),Z=me.useRef(null),le=me.useRef([]),O=me.useRef(null),V=me.useRef(null),X=me.useRef(!1),ne=me.useRef(new vi(new U(0,0,1),0)),z=me.useRef(new xb),H=me.useRef(new _e),R=3.6,C=r.length*R,Y=.16,D=.06,j=Gr[s]||Gr.steel;me.useEffect(()=>{const $=y.current;if(!$)return;const G=$.clientWidth,he=$.clientHeight,te=new C2;te.background=new et(15266046),te.fog=new uf(15266046,.02),g.current=te;const E=new dn(45,G/he,.1,100);E.position.set(0,.5,4.8),_.current=E;const M=new r_({antialias:!0,alpha:!1,powerPreference:"high-performance"});M.setSize(G,he),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=Ax,M.toneMapping=Cx,M.toneMappingExposure=1.35,$.appendChild(M.domElement),d.current=M;const B=new Sb(E,M.domElement);B.enableDamping=!0,B.dampingFactor=.05,B.maxPolarAngle=Math.PI/2+.05,B.minDistance=1.2,B.maxDistance=10,B.target.set(0,.6,0),v.current=B;const oe=new vb(16777215,1.4);te.add(oe);const ae=new hb(16775399,3.5);ae.position.set(2,5,4),ae.angle=Math.PI/4,ae.penumbra=.6,ae.castShadow=!0,ae.shadow.mapSize.width=2048,ae.shadow.mapSize.height=2048,ae.shadow.bias=-1e-4,te.add(ae);const re=new gb(14412542,1.2);re.position.set(-4,3,-2),te.add(re);const be=new pb(16710888,.8,10);be.position.set(0,2,2.5),te.add(be);const pe=new ub(14412542,15790320,.6);te.add(pe),se(te),ue(te);const Ee=ie(te);Z.current=Ee;const Le=new Wn;Le.position.set(0,2.3,0),te.add(Le),S.current=Le,de(Le),Te(Le),Me(te),we(te);let Oe;const ce=()=>{if(Oe=requestAnimationFrame(ce),B.update(),b.current){const je=performance.now()*.003,Ue=1+.1*Math.sin(je);b.current.scale.set(Ue,Ue,Ue)}M.render(te,E)};ce();const Ge=()=>{if(!$||!M||!E)return;const je=$.clientWidth,Ue=$.clientHeight;E.aspect=je/Ue,E.updateProjectionMatrix(),M.setSize(je,Ue)};return window.addEventListener("resize",Ge),()=>{window.removeEventListener("resize",Ge),cancelAnimationFrame(Oe),M.domElement&&$.contains(M.domElement)&&$.removeChild(M.domElement),M.dispose()}},[]);const se=$=>{const G=new io(24,24),he=new tn({color:13949152,roughness:.85,metalness:.05}),te=new at(G,he);te.rotation.x=-Math.PI/2,te.position.y=-1.6,te.receiveShadow=!0,$.add(te);const E=new _b(24,48,12573694,13358561);E.position.y=-1.599,$.add(E);const M=new ii(4.2,.15,2.4),B=new tn({color:7893356,roughness:.55,metalness:.15}),oe=new at(M,B);oe.position.set(0,-1.2,0),oe.receiveShadow=!0,oe.castShadow=!0,$.add(oe);const ae=new xi(.06,.06,.8,16),re=new tn({color:5722958,metalness:.7,roughness:.3});[[-1.9,-1],[1.9,-1],[-1.9,1],[1.9,1]].forEach(([Le,Oe])=>{const ce=new at(ae,re);ce.position.set(Le,-1.6,Oe),$.add(ce)});const be=new io(2.8,1.2),pe=new tn({color:9684477,roughness:.6,metalness:.1,transparent:!0,opacity:.15}),Ee=new at(be,pe);Ee.rotation.x=-Math.PI/2,Ee.position.set(0,-1.12,0),$.add(Ee)},ue=$=>{const G=new Wn,he=new ii(1.2,.12,.8),te=new tn({color:2963272,metalness:.85,roughness:.35}),E=new at(he,te);E.position.set(0,-1.06,0),E.castShadow=!0,E.receiveShadow=!0,G.add(E);const M=new xi(.04,.04,.08,12),B=new tn({color:14251782,metalness:.9,roughness:.2});[[-.5,-.3],[.5,-.3],[-.5,.3],[.5,.3]].forEach(([Re,N])=>{const xe=new at(M,B);xe.position.set(Re,-1.12,N),G.add(xe)});const oe=new xi(.05,.06,3.5,32),ae=new tn({color:9741240,metalness:.95,roughness:.12}),re=new at(oe,ae);re.position.set(-.35,.6,0),re.castShadow=!0,G.add(re);const be=new ii(.48,.08,.12),pe=new at(be,te);pe.position.set(-.14,2.3,0),pe.castShadow=!0,G.add(pe);const Ee=new u_;Ee.moveTo(-.03,-.06),Ee.lineTo(.03,-.06),Ee.lineTo(0,0),Ee.closePath();const Le={depth:.24,bevelEnabled:!1},Oe=new ff(Ee,Le);Oe.center(),Oe.translate(0,-.03,0);const ce=new tn({color:14870768,metalness:.98,roughness:.08}),Ge=new at(Oe,ce);Ge.position.set(0,2.3,0),Ge.castShadow=!0,G.add(Ge);const je=new Ut().setFromPoints([new U(0,2.3,-.13),new U(0,2.3,.13)]),Ue=new Lr({color:3900150,linewidth:2}),Fe=new Ps(je,Ue);G.add(Fe),$.add(G)},ie=$=>{const G=new Wn;G.position.set(0,-.5,0);const he=new ii(.12,.15,.35),te=new tn({color:1976635,metalness:.8,roughness:.3}),E=new at(he,te);E.position.set(-.25,0,0),G.add(E);const M=new xi(.02,.02,.08,16),B=new tn({color:15680580,emissive:15680580,emissiveIntensity:.6}),oe=new at(M,B);oe.rotation.x=Math.PI/2,oe.position.set(0,0,-.15),G.add(oe);const ae=new at(M,B);ae.rotation.x=Math.PI/2,ae.position.set(0,0,.15),G.add(ae);const re=new xi(.004,.004,.3,8),be=new Bs({color:15680580,transparent:!0,opacity:.75}),pe=new at(re,be);return pe.rotation.x=Math.PI/2,G.add(pe),$.add(G),pe},de=$=>{const G=new Wn;S.current.barContainer=G;const he=new ii(Y,C,D),te=new tn({color:new et(j.color),metalness:j.metalness,roughness:j.roughness}),E=new at(he,te);E.castShadow=!0,E.receiveShadow=!0,G.add(E),L.current=E;const M=[],B=.024,oe=D+.01,ae=new xi(B,B,oe,24);ae.rotateX(Math.PI/2),r.holeDistancesFromCG.forEach((ke,We)=>{const qe=-ke*R,ht=new tn({color:We===4?16096779:988970,metalness:.9,roughness:.1}),lt=new at(ae,ht);lt.position.set(0,qe,0),lt.userData={holeIndex:We,distFromCG:ke},G.add(lt),M.push(lt);const Ze=document.createElement("canvas");Ze.width=64,Ze.height=64;const ct=Ze.getContext("2d");ct.fillStyle=We===4?"#f59e0b":"#38bdf8",ct.font="bold 36px monospace",ct.textAlign="center",ct.textBaseline="middle",ct.fillText(We===4?"CG":`H${We+1}`,32,32);const cn=new Xu(Ze),Xr=new Cl({map:cn,transparent:!0}),ur=new Vu(Xr);ur.scale.set(.12,.12,1),ur.position.set(.13,qe,0),G.add(ur)}),le.current=M;const re=new Wn;re.position.set(0,0,0);const be=new Oa(.045,24,24),pe=new tn({color:16096779,emissive:14251782,emissiveIntensity:.8,metalness:.5,roughness:.2}),Ee=new at(be,pe);re.add(Ee);const Le=new lc(.065,.08,32),Oe=new Bs({color:16498468,side:qn}),ce=new at(Le,Oe);re.add(ce),G.add(re),b.current=re;const Ge=new Wn,je=new Oa(.04,24,24),Ue=new tn({color:1096065,emissive:1096065,emissiveIntensity:.8,metalness:.3,roughness:.2}),Fe=new at(je,Ue);Ge.add(Fe);const Re=new lc(.06,.075,32),N=new Bs({color:3462041,side:qn}),xe=new at(Re,N);Ge.add(xe);const De=document.createElement("canvas");De.width=128,De.height=64;const Ce=De.getContext("2d");Ce.fillStyle="#10b981",Ce.font="bold 32px monospace",Ce.textAlign="center",Ce.textBaseline="middle",Ce.fillText("O (C.O.)",64,32);const ge=new Xu(De),k=new Vu(new Cl({map:ge,transparent:!0}));k.scale.set(.18,.09,1),k.position.set(-.16,0,0),Ge.add(k),G.add(Ge),T.current=Ge;const Se=new Ut().setFromPoints([new U(0,0,.05),new U(0,-1,.05)]),ve=new cb({color:3718648,dashSize:.04,gapSize:.02,linewidth:2}),ze=new Ps(Se,ve);ze.computeLineDistances(),$.add(ze),F.current=ze,$.add(G)},Te=$=>{const G=new Wn;G.position.set(.24,0,0);const he=new Ut().setFromPoints([new U(0,0,0),new U(0,-1.5,0)]),te=new Lr({color:11032055,linewidth:2}),E=new Ps(he,te);G.add(E),G.stringLine=E;const M=new Oa(.06,24,24),B=new tn({color:11032055,emissive:9647082,emissiveIntensity:.7,metalness:.8,roughness:.2}),oe=new at(M,B);oe.position.set(0,-1.5,0),G.add(oe),G.bob=oe;const ae=document.createElement("canvas");ae.width=160,ae.height=48;const re=ae.getContext("2d");re.fillStyle="#c084fc",re.font="bold 24px monospace",re.textAlign="center",re.textBaseline="middle",re.fillText("Equiv. Pendulum",80,24);const be=new Xu(ae),pe=new Vu(new Cl({map:be,transparent:!0}));pe.scale.set(.28,.08,1),pe.position.set(.18,-1.5,0),G.add(pe),G.labelSprite=pe,$.add(G),w.current=G},Me=$=>{const he=new Float32Array(240),te=new Ut;te.setAttribute("position",new Fn(he,3));const E=new Lr({color:440020,transparent:!0,opacity:.8,linewidth:2}),M=new Ps(te,E);$.add(M),A.current=M},we=$=>{const G=new gg(new U(1,0,0),new U(0,0,0),.3,15680580,.08,.05);$.add(G),O.current=G;const he=new gg(new U(1,0,0),new U(0,0,0),.3,3718648,.08,.05);$.add(he),V.current=he};me.useEffect(()=>{var he;if(!((he=S.current)!=null&&he.barContainer))return;const $=r.holeDistancesFromCG[t],G=$*R;if(S.current.barContainer.position.set(0,G,0),F.current){const te=[new U(-.1,0,.04),new U(-.1,G,.04)];F.current.geometry.setFromPoints(te),F.current.computeLineDistances()}if(T.current){const te=Math.sqrt((r.length*r.length+r.width*r.width)/12),E=Math.abs($);if(E>.001){const M=te*te/E,B=$<0?-1:1;T.current.position.set(0,B*M*R,0)}else T.current.position.set(0,0,0)}if(w.current){const te=Math.sqrt((r.length*r.length+r.width*r.width)/12),E=Math.abs($),M=E>.001?(E+te*te/E)*R:0;w.current.bob.position.set(0,-M,0),w.current.labelSprite.position.set(.2,-M,0),w.current.stringLine.geometry.setFromPoints([new U(0,0,0),new U(0,-M,0)])}q.current=[]},[t,r,R]),me.useEffect(()=>{L.current&&(L.current.material.color.set(j.color),L.current.material.metalness=j.metalness,L.current.material.roughness=j.roughness)},[j]),me.useEffect(()=>{if(S.current){if(S.current.rotation.z=n,w.current&&(w.current.rotation.z=0),c&&A.current&&S.current.barContainer){new U,r.holeDistancesFromCG[t];const $=-C/2,G=new U(0,$,0);S.current.barContainer.localToWorld(G);const he=q.current;he.unshift(G),he.length>70&&he.pop();const te=A.current.geometry.attributes.position.array;for(let E=0;E<he.length;E++)te[E*3]=he[E].x,te[E*3+1]=he[E].y,te[E*3+2]=he[E].z;A.current.geometry.setDrawRange(0,he.length),A.current.geometry.attributes.position.needsUpdate=!0}if(h&&O.current&&V.current&&b.current){const $=new U;b.current.getWorldPosition($);const G=new U(-Math.cos(n),Math.sin(n),0).multiplyScalar(Math.sign(n)),he=Math.min(Math.abs(Math.sin(n))*1.5,1.2);O.current.position.copy($),O.current.setDirection(G.normalize()),O.current.setLength(Math.max(he,.05),.08,.04),O.current.visible=!0;const te=new U(Math.cos(n),-Math.sin(n),0).multiplyScalar(Math.sign(i)),E=Math.min(Math.abs(i)*.4,1.2);V.current.position.copy($),V.current.setDirection(te.normalize()),V.current.setLength(Math.max(E,.05),.08,.04),V.current.visible=!0}else O.current&&(O.current.visible=!1),V.current&&(V.current.visible=!1)}},[n,i,c,h,C,t,r]),me.useEffect(()=>{b.current&&(b.current.visible=a),T.current&&(T.current.visible=o),F.current&&(F.current.visible=a),w.current&&(w.current.visible=l),A.current&&(A.current.visible=c)},[a,o,l,c]),me.useEffect(()=>{Z.current&&(Z.current.material.color.set(m?2278750:15680580),Z.current.material.opacity=m?1:.6)},[m]),me.useEffect(()=>{if(!_.current||!v.current)return;const $=_.current,G=v.current;switch(x){case"front":$.position.set(0,.6,5.5),G.target.set(0,.6,0);break;case"knifeEdge":$.position.set(.4,2.4,1.4),G.target.set(0,2.3,0);break;case"side":$.position.set(5,.6,0),G.target.set(0,.6,0);break;case"isometric":default:$.position.set(2.2,1.4,5),G.target.set(0,.6,0);break}},[x]);const I=me.useCallback($=>{const G=y.current;if(!G||!d.current||!_.current)return;const he=G.getBoundingClientRect();H.current.x=($.clientX-he.left)/he.width*2-1,H.current.y=-(($.clientY-he.top)/he.height)*2+1,z.current.setFromCamera(H.current,_.current);const te=z.current.intersectObjects(le.current);if(te.length>0){const E=te[0].object.userData.holeIndex;if(E!==void 0){e(E);return}}L.current&&z.current.intersectObject(L.current).length>0&&(X.current=!0,v.current.enabled=!1)},[e]),fe=me.useCallback($=>{if(!X.current||!_.current)return;const G=y.current;if(!G)return;const he=G.getBoundingClientRect();H.current.x=($.clientX-he.left)/he.width*2-1,H.current.y=-(($.clientY-he.top)/he.height)*2+1,z.current.setFromCamera(H.current,_.current);const te=new U;z.current.ray.intersectPlane(ne.current,te);const E=new U(0,2.3,0),M=te.clone().sub(E);let B=Math.atan2(M.x,-M.y);const oe=30*Math.PI/180;B=Math.max(-oe,Math.min(oe,B)),f(B)},[f]),K=me.useCallback(()=>{X.current&&(X.current=!1,v.current&&(v.current.enabled=!0))},[]);return u.jsxs("div",{ref:y,className:"lab-3d-canvas-container",onPointerDown:I,onPointerMove:fe,onPointerUp:K,style:{width:"100%",height:"100%",position:"relative",cursor:p?"grab":"default"},children:[u.jsx("div",{className:"viewport-overlay-controls",children:u.jsxs("div",{className:"camera-pill-group",children:[u.jsx("span",{className:"camera-label",children:"Camera Angle:"}),["isometric","front","knifeEdge","side"].map($=>u.jsxs("button",{id:`cam-btn-${$}`,className:`camera-btn ${x===$?"active":""}`,onClick:()=>{const G=new CustomEvent("change-camera-view",{detail:$});window.dispatchEvent(G)},children:[$==="isometric"&&"Perspective",$==="front"&&"Front SHM",$==="knifeEdge"&&"Knife-Edge",$==="side"&&"Profile"]},$))]})}),u.jsxs("div",{className:"viewport-3d-legend",children:[u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"legend-dot cg"})," C.G. Center of Gravity (l)"]}),o&&u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"legend-dot co"})," Center of Oscillation (O)"]}),l&&u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"legend-dot eq"})," Equivalent Simple Pendulum (Leq)"]}),h&&u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"legend-dot vec"})," Torque & Velocity Vectors"]})]})]})}class Rb{constructor(){this.ctx=null,this.enabled=!0}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(200,this.ctx.currentTime+.04),n.gain.setValueAtTime(.15,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playPhotogateChime(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1046.5,this.ctx.currentTime),n.gain.setValueAtTime(.12,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}playWarningBeep(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(320,this.ctx.currentTime),n.gain.setValueAtTime(.18,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.15),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.15)}catch{}}playSuccessJingle(){if(this.enabled)try{if(this.init(),!this.ctx)return;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,this.ctx.currentTime+i*.08),s.gain.setValueAtTime(.1,this.ctx.currentTime+i*.08),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+i*.08+.15),r.connect(s),s.connect(this.ctx.destination),r.start(this.ctx.currentTime+i*.08),r.stop(this.ctx.currentTime+i*.08+.15)})}catch{}}}const it=new Rb;function Pb({barConfig:t,materialKey:e,onUpdateMeasuredDimensions:n,isOpen:i,onClose:r}){const s=Gr[e]||Gr.steel,a=t.length,o=t.width,l=t.thickness,c=+(a*o*l*s.density).toFixed(3),[h,p]=me.useState(100),[f,m]=me.useState(30),[x,y]=me.useState(10),[g,d]=me.useState(a),[_,v]=me.useState(o),[S,L]=me.useState(l),[b,T]=me.useState(c),[F,w]=me.useState(!1),[A,q]=me.useState(!1),[Z,le]=me.useState(!1),[O,V]=me.useState(!1),[X,ne]=me.useState(!1),z=+(h/100).toFixed(3),H=+(f/1e3).toFixed(4),R=+(x/1e3).toFixed(4),C=Math.floor(f),Y=Math.round((f-C)*10),D=Math.floor(x),j=Math.round((x-D)*10),se=A&&Z&&O&&X,ue=()=>{it.playSuccessJingle(),n({length:g,width:_,thickness:S,mass:b}),w(!0),setTimeout(()=>w(!1),2500)},ie=()=>{it.playSuccessJingle(),p(100),m(30),y(10),d(a),v(o),L(l),T(c),q(!0),le(!0),V(!0),ne(!0)};return i?u.jsx("div",{className:"measurement-modal-overlay",children:u.jsxs("div",{className:"measurement-modal-card",style:{maxWidth:900},children:[u.jsxs("div",{className:"measurement-modal-header",children:[u.jsxs("div",{className:"modal-title-wrap",children:[u.jsx(Ea,{className:"text-cyan",size:22}),u.jsxs("div",{children:[u.jsx("h2",{className:"modal-title",children:"Measurement Station"}),u.jsx("p",{className:"modal-subtitle",children:"Measure all bar dimensions using virtual precision instruments"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("button",{className:"btn-apply-measurement",onClick:ie,style:{fontSize:10,padding:"4px 10px",background:"#7c3aed"},title:"Auto-align all instruments to correct readings",children:"⚡ Quick Measure All"}),u.jsx("button",{className:"btn-close-modal",onClick:r,children:u.jsx(Ac,{size:20})})]})]}),u.jsxs("div",{className:"tool-workbench-panel",style:{padding:"16px 20px"},children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[u.jsxs("div",{className:"meas-card",children:[u.jsxs("div",{className:"meas-card-header",children:[u.jsxs("div",{className:"meas-card-title-row",children:[u.jsx(Ea,{size:14,className:"text-sky"}),u.jsx("span",{className:"meas-card-title",children:"Bar Length (L)"}),A&&u.jsx(Di,{size:14,className:"text-emerald"})]}),u.jsx("span",{className:"meas-card-instrument",children:"Meter Scale"})]}),u.jsx("div",{className:"meas-ruler-mini",children:u.jsxs("svg",{width:"100%",height:"44",viewBox:"0 0 400 44",children:[u.jsx("rect",{x:"0",y:"10",width:"400",height:"28",fill:"#fef9c3",stroke:"#ca8a04",strokeWidth:"1",rx:"3"}),Array.from({length:21}).map((de,Te)=>{const Me=Te*20,we=Te%10===0,I=Te%5===0&&!we;return u.jsxs("g",{children:[u.jsx("line",{x1:Me,y1:10,x2:Me,y2:10+(we?18:I?12:7),stroke:"#854d0e",strokeWidth:we?1.5:.5}),we&&u.jsxs("text",{x:Me,y:42,fontSize:"8",fill:"#713f12",textAnchor:"middle",fontFamily:"monospace",children:[Te*5,"cm"]})]},Te)}),u.jsx("line",{x1:h*3.88,y1:6,x2:h*3.88,y2:40,stroke:"#ef4444",strokeWidth:"2"})]})}),u.jsxs("div",{className:"meas-slider-row",children:[u.jsx("input",{type:"range",min:"0",max:"105",step:"0.1",value:h,onChange:de=>p(parseFloat(de.target.value)),className:"meas-slider"}),u.jsx("button",{className:"meas-snap-btn",onClick:()=>{p(100),it.playClick()},children:"Snap"})]}),u.jsxs("div",{className:"meas-readout-row",children:[u.jsxs("div",{className:"meas-readout",children:[u.jsx("span",{className:"meas-readout-val font-mono text-sky",children:z}),u.jsx("span",{className:"meas-readout-unit",children:"m"}),u.jsxs("span",{className:"meas-readout-alt",children:["(",h.toFixed(1)," cm)"]})]}),u.jsx("button",{className:`meas-record-btn ${A?"meas-confirmed":""}`,onClick:()=>{d(z),q(!0),it.playClick()},children:A?u.jsxs(u.Fragment,{children:[u.jsx(Di,{size:12})," Recorded"]}):u.jsxs(u.Fragment,{children:[u.jsx(Fo,{size:12})," Record"]})})]})]}),u.jsxs("div",{className:"meas-card",children:[u.jsxs("div",{className:"meas-card-header",children:[u.jsxs("div",{className:"meas-card-title-row",children:[u.jsx(Ea,{size:14,className:"text-emerald",style:{transform:"rotate(90deg)"}}),u.jsx("span",{className:"meas-card-title",children:"Bar Width (b)"}),Z&&u.jsx(Di,{size:14,className:"text-emerald"})]}),u.jsx("span",{className:"meas-card-instrument",children:"Vernier Caliper (LC: 0.1mm)"})]}),u.jsxs("div",{className:"meas-caliper-mini",children:[u.jsx("div",{className:"meas-caliper-jaw-fixed"}),u.jsx("div",{className:"meas-caliper-specimen",style:{width:`${Math.min(f*3.5,150)}px`},children:"b"}),u.jsx("div",{className:"meas-caliper-jaw-slide"})]}),u.jsxs("div",{className:"meas-slider-row",children:[u.jsx("input",{type:"range",min:"0",max:"45",step:"0.1",value:f,onChange:de=>m(parseFloat(de.target.value)),className:"meas-slider"}),u.jsx("button",{className:"meas-snap-btn",onClick:()=>{m(30),it.playClick()},children:"Snap"})]}),u.jsxs("div",{className:"meas-caliper-reading font-mono",children:["MSR: ",C,"mm | VSR: ",Y," × 0.1mm | = ",u.jsxs("strong",{children:[f.toFixed(1),"mm"]})]}),u.jsxs("div",{className:"meas-readout-row",children:[u.jsxs("div",{className:"meas-readout",children:[u.jsx("span",{className:"meas-readout-val font-mono text-emerald",children:H}),u.jsx("span",{className:"meas-readout-unit",children:"m"}),u.jsxs("span",{className:"meas-readout-alt",children:["(",f.toFixed(1)," mm)"]})]}),u.jsx("button",{className:`meas-record-btn ${Z?"meas-confirmed":""}`,onClick:()=>{v(H),le(!0),it.playClick()},children:Z?u.jsxs(u.Fragment,{children:[u.jsx(Di,{size:12})," Recorded"]}):u.jsxs(u.Fragment,{children:[u.jsx(Fo,{size:12})," Record"]})})]})]}),u.jsxs("div",{className:"meas-card",children:[u.jsxs("div",{className:"meas-card-header",children:[u.jsxs("div",{className:"meas-card-title-row",children:[u.jsx(Ea,{size:14,className:"text-amber",style:{transform:"rotate(90deg)"}}),u.jsx("span",{className:"meas-card-title",children:"Bar Thickness (t)"}),O&&u.jsx(Di,{size:14,className:"text-emerald"})]}),u.jsx("span",{className:"meas-card-instrument",children:"Vernier Caliper (LC: 0.1mm)"})]}),u.jsxs("div",{className:"meas-caliper-mini",children:[u.jsx("div",{className:"meas-caliper-jaw-fixed"}),u.jsx("div",{className:"meas-caliper-specimen meas-specimen-thin",style:{width:`${Math.min(x*6,120)}px`},children:"t"}),u.jsx("div",{className:"meas-caliper-jaw-slide"})]}),u.jsxs("div",{className:"meas-slider-row",children:[u.jsx("input",{type:"range",min:"0",max:"25",step:"0.1",value:x,onChange:de=>y(parseFloat(de.target.value)),className:"meas-slider"}),u.jsx("button",{className:"meas-snap-btn",onClick:()=>{y(10),it.playClick()},children:"Snap"})]}),u.jsxs("div",{className:"meas-caliper-reading font-mono",children:["MSR: ",D,"mm | VSR: ",j," × 0.1mm | = ",u.jsxs("strong",{children:[x.toFixed(1),"mm"]})]}),u.jsxs("div",{className:"meas-readout-row",children:[u.jsxs("div",{className:"meas-readout",children:[u.jsx("span",{className:"meas-readout-val font-mono text-amber",children:R}),u.jsx("span",{className:"meas-readout-unit",children:"m"}),u.jsxs("span",{className:"meas-readout-alt",children:["(",x.toFixed(1)," mm)"]})]}),u.jsx("button",{className:`meas-record-btn ${O?"meas-confirmed":""}`,onClick:()=>{L(R),V(!0),it.playClick()},children:O?u.jsxs(u.Fragment,{children:[u.jsx(Di,{size:12})," Recorded"]}):u.jsxs(u.Fragment,{children:[u.jsx(Fo,{size:12})," Record"]})})]})]}),u.jsxs("div",{className:"meas-card",children:[u.jsxs("div",{className:"meas-card-header",children:[u.jsxs("div",{className:"meas-card-title-row",children:[u.jsx(pM,{size:14,className:"text-purple"}),u.jsx("span",{className:"meas-card-title",children:"Bar Mass (M)"}),X&&u.jsx(Di,{size:14,className:"text-emerald"})]}),u.jsx("span",{className:"meas-card-instrument",children:"Digital Lab Balance"})]}),u.jsxs("div",{className:"meas-balance-mini",children:[u.jsx("div",{className:"meas-balance-pan",children:u.jsx("div",{className:"meas-balance-bar",style:{backgroundColor:s.color},children:s.name})}),u.jsxs("div",{className:"meas-balance-lcd font-mono",children:[u.jsx("span",{className:"meas-balance-val",children:c.toFixed(3)}),u.jsx("span",{className:"meas-balance-unit",children:"kg"})]}),u.jsxs("div",{className:"meas-balance-sub font-mono",children:["= ",(c*1e3).toFixed(1)," g  |  ρ = ",s.density," kg/m³"]})]}),u.jsxs("div",{className:"meas-readout-row",children:[u.jsxs("div",{className:"meas-readout",children:[u.jsx("span",{className:"meas-readout-val font-mono text-purple",children:c.toFixed(3)}),u.jsx("span",{className:"meas-readout-unit",children:"kg"})]}),u.jsx("button",{className:`meas-record-btn ${X?"meas-confirmed":""}`,onClick:()=>{T(c),ne(!0),it.playClick()},children:X?u.jsxs(u.Fragment,{children:[u.jsx(Di,{size:12})," Recorded"]}):u.jsxs(u.Fragment,{children:[u.jsx(Fo,{size:12})," Record"]})})]})]})]}),u.jsxs("div",{className:"meas-specimen-info",children:[u.jsx(uM,{size:13}),u.jsxs("span",{children:[u.jsx("strong",{children:s.name})," compound pendulum bar with ",u.jsx("strong",{children:"9 equidistant holes"})," (10 cm apart). Hole pitch verified: 0.100 m. C.G. at center hole (#5)."]})]})]}),u.jsxs("div",{className:"notebook-summary-bar",children:[u.jsx("div",{className:"notebook-title",children:u.jsx("strong",{children:"Lab Notebook:"})}),u.jsxs("div",{className:"notebook-values-grid font-mono",children:[u.jsxs("span",{style:{color:A?"#059669":"inherit"},children:["L = ",u.jsxs("strong",{children:[g.toFixed(3)," m"]})]}),u.jsxs("span",{style:{color:Z?"#059669":"inherit"},children:["b = ",u.jsxs("strong",{children:[_.toFixed(4)," m"]})]}),u.jsxs("span",{style:{color:O?"#059669":"inherit"},children:["t = ",u.jsxs("strong",{children:[S.toFixed(4)," m"]})]}),u.jsxs("span",{style:{color:X?"#059669":"inherit"},children:["M = ",u.jsxs("strong",{children:[b.toFixed(3)," kg"]})]})]}),u.jsx("button",{className:"btn-sync-all-notebook",onClick:ue,style:{opacity:se?1:.7},children:F?"✓ Applied!":"Apply All to Simulation"})]})]})}):null}function Lb({trials:t,onClearTrials:e,onDeleteTrial:n,barConfig:i,currentHoleIndex:r,onSelectHole:s}){const[a,o]=me.useState("t_vs_l"),[l,c]=me.useState(1.65),[h,p]=me.useState(!0),f=Ic(i.length,i.width),m=wb(f,9.81),x=680,y=340,g={top:30,right:30,bottom:45,left:60},d=x-g.left-g.right,_=y-g.top-g.bottom,v=-.5,S=.5,L=1.3,b=2.8,T=D=>g.left+(D-v)/(S-v)*d,F=D=>g.top+_-(D-L)/(b-L)*_,w=[],A=[];for(let D=-.48;D<=-.05;D+=.005){const j=lh(D,f,9.81);j<=b&&w.push(`${T(D).toFixed(1)},${F(j).toFixed(1)}`)}for(let D=.05;D<=.48;D+=.005){const j=lh(D,f,9.81);j<=b&&A.push(`${T(D).toFixed(1)},${F(j).toFixed(1)}`)}const q=w.length>0?`M ${w.join(" L ")}`:"",Z=A.length>0?`M ${A.join(" L ")}`:"",le=Math.pow(l/(2*Math.PI),2)*9.81,O=le*le-4*(f*f);let V=null,X=null;O>=0&&(V=(le-Math.sqrt(O))/2,X=(le+Math.sqrt(O))/2);const ne=X?-X:null,z=V?-V:null,H=V||null,R=X||null,C=[...t].sort((D,j)=>Math.abs(D.l)-Math.abs(j.l));C.length>0&&C.reduce((D,j)=>j.period<D.period?j:D,C[0]);const Y=()=>{if(it.playClick(),t.length===0)return;const D=`HoleIndex,HoleName,Side,Distance_From_CG_m,Angle_deg,Cycles,TotalTime_s,PeriodicTime_T_s,T_squared_s2,l_squared_m2,Inertia_Pivot_kgm2,Inertia_CG_kgm2
`,j=t.map(de=>`${de.holeIndex+1},Hole ${de.holeIndex+1},${de.l<0?"Side A":de.l>0?"Side B":"CG"},${de.l},${de.angleDeg},${de.cycles},${de.totalTime},${de.period},${(de.period*de.period).toFixed(4)},${(de.l*de.l).toFixed(4)},${de.I_pivot},${de.I_G}`).join(`
`),se=new Blob([D+j],{type:"text/csv;charset=utf-8;"}),ue=URL.createObjectURL(se),ie=document.createElement("a");ie.setAttribute("href",ue),ie.setAttribute("download","Compound_Pendulum_Lab_Trials.csv"),document.body.appendChild(ie),ie.click(),document.body.removeChild(ie)};return u.jsxs("div",{className:"graph-analytics-card",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsxs("div",{className:"analytics-title-wrap",children:[u.jsx(Pp,{className:"text-cyan",size:20}),u.jsxs("div",{children:[u.jsx("h3",{className:"analytics-title",children:"Live Experimental Data Plotting"}),u.jsx("span",{className:"analytics-subtitle",children:"Time Period (T) vs Pivot-to-C.G. Distance (l)"})]})]}),u.jsxs("div",{className:"analytics-header-actions",children:[u.jsxs("div",{className:"tab-pill-group",children:[u.jsxs("button",{className:`tab-pill ${a==="t_vs_l"?"active":""}`,onClick:()=>{o("t_vs_l"),it.playClick()},children:[u.jsx(zv,{size:15})," T vs l Curve"]}),u.jsxs("button",{className:`tab-pill ${a==="linearized"?"active":""}`,onClick:()=>{o("linearized"),it.playClick()},children:[u.jsx(QS,{size:15})," T²l vs l² (Linear)"]}),u.jsxs("button",{className:`tab-pill ${a==="table"?"active":""}`,onClick:()=>{o("table"),it.playClick()},children:["Data Table (",t.length,")"]})]}),t.length>0&&u.jsxs("button",{className:"btn-export-csv",onClick:Y,title:"Export CSV Data",children:[u.jsx(aM,{size:14})," Export CSV"]}),t.length>0&&u.jsxs("button",{className:"btn-clear-trials",onClick:e,title:"Clear All Trials",children:[u.jsx(Rp,{size:14})," Clear"]})]})]}),a==="t_vs_l"&&u.jsxs("div",{className:"plot-container",children:[u.jsx("div",{className:"plot-svg-wrapper",children:u.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${x} ${y}`,className:"analytics-svg",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"plotGridGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#0f172a"}),u.jsx("stop",{offset:"100%",stopColor:"#020617"})]})}),u.jsx("rect",{x:"0",y:"0",width:x,height:y,fill:"url(#plotGridGrad)",rx:"8"}),[-.4,-.3,-.2,-.1,0,.1,.2,.3,.4].map(D=>{const j=T(D);return u.jsxs("g",{children:[u.jsx("line",{x1:j,y1:g.top,x2:j,y2:g.top+_,stroke:D===0?"#f59e0b":"#1e293b",strokeWidth:D===0?1.5:1,strokeDasharray:D===0?"4 2":"none"}),u.jsx("text",{x:j,y:g.top+_+18,fontSize:"11",fill:"#94a3b8",textAnchor:"middle",fontFamily:"monospace",children:D===0?"C.G. (0)":`${(D*100).toFixed(0)}`})]},`x-${D}`)}),[1.4,1.6,1.8,2,2.2,2.4,2.6].map(D=>{const j=F(D);return u.jsxs("g",{children:[u.jsx("line",{x1:g.left,y1:j,x2:g.left+d,y2:j,stroke:"#1e293b",strokeWidth:"1"}),u.jsxs("text",{x:g.left-10,y:j+4,fontSize:"11",fill:"#94a3b8",textAnchor:"end",fontFamily:"monospace",children:[D.toFixed(1),"s"]})]},`y-${D}`)}),u.jsx("text",{x:g.left+d/2,y:y-8,fontSize:"12",fill:"#38bdf8",textAnchor:"middle",fontWeight:"bold",children:"Distance from Center of Gravity (l) [cm] — (Side A: Left, Side B: Right)"}),u.jsx("text",{x:18,y:g.top+_/2,fontSize:"12",fill:"#38bdf8",textAnchor:"middle",fontWeight:"bold",transform:`rotate(-90 18 ${g.top+_/2})`,children:"Periodic Time T (seconds)"}),q&&u.jsx("path",{d:q,fill:"none",stroke:"#38bdf8",strokeWidth:"2.5",strokeOpacity:"0.85"}),Z&&u.jsx("path",{d:Z,fill:"none",stroke:"#38bdf8",strokeWidth:"2.5",strokeOpacity:"0.85"}),u.jsx("circle",{cx:T(-f),cy:F(m),r:"4.5",fill:"#f59e0b",stroke:"#fff",strokeWidth:"1.5"}),u.jsx("circle",{cx:T(f),cy:F(m),r:"4.5",fill:"#f59e0b",stroke:"#fff",strokeWidth:"1.5"}),u.jsx("line",{x1:T(-f),y1:F(m),x2:T(f),y2:F(m),stroke:"#f59e0b",strokeWidth:"1.5",strokeDasharray:"4 3"}),u.jsxs("text",{x:T(0),y:F(m)-6,fontSize:"10",fill:"#f59e0b",textAnchor:"middle",fontFamily:"monospace",children:["T_min = ",m.toFixed(3),"s (l = ±k = ",(f*100).toFixed(1),"cm)"]}),h&&u.jsxs("g",{className:"secant-group",children:[u.jsx("line",{x1:g.left,y1:F(l),x2:g.left+d,y2:F(l),stroke:"#a855f7",strokeWidth:"2",strokeDasharray:"5 3"}),u.jsxs("text",{x:g.left+d-5,y:F(l)-6,fontSize:"11",fill:"#c084fc",textAnchor:"end",fontFamily:"monospace",children:["T = ",l.toFixed(2),"s (Secant Method)"]}),ne&&z&&H&&R&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:T(ne),cy:F(l),r:"5",fill:"#a855f7",stroke:"#fff",strokeWidth:"1.5"}),u.jsx("text",{x:T(ne),y:F(l)-8,fontSize:"10",fill:"#e9d5ff",textAnchor:"middle",fontWeight:"bold",children:"A"}),u.jsx("circle",{cx:T(z),cy:F(l),r:"5",fill:"#a855f7",stroke:"#fff",strokeWidth:"1.5"}),u.jsx("text",{x:T(z),y:F(l)-8,fontSize:"10",fill:"#e9d5ff",textAnchor:"middle",fontWeight:"bold",children:"B"}),u.jsx("circle",{cx:T(H),cy:F(l),r:"5",fill:"#a855f7",stroke:"#fff",strokeWidth:"1.5"}),u.jsx("text",{x:T(H),y:F(l)-8,fontSize:"10",fill:"#e9d5ff",textAnchor:"middle",fontWeight:"bold",children:"C"}),u.jsx("circle",{cx:T(R),cy:F(l),r:"5",fill:"#a855f7",stroke:"#fff",strokeWidth:"1.5"}),u.jsx("text",{x:T(R),y:F(l)-8,fontSize:"10",fill:"#e9d5ff",textAnchor:"middle",fontWeight:"bold",children:"D"})]})]}),t.map((D,j)=>{const se=T(D.l),ue=F(D.period),ie=D.holeIndex===r;return u.jsxs("g",{className:"trial-scatter-point cursor-pointer",onClick:()=>s(D.holeIndex),children:[u.jsx("circle",{cx:se,cy:ue,r:ie?"8":"6",fill:D.l<0?"#10b981":"#06b6d4",stroke:"#ffffff",strokeWidth:ie?"3":"1.5"}),u.jsxs("text",{x:se,y:ue-9,fontSize:"10",fill:"#ffffff",textAnchor:"middle",fontFamily:"monospace",fontWeight:"bold",children:["H",D.holeIndex+1]})]},j)})]})}),u.jsxs("div",{className:"secant-tool-controls",children:[u.jsxs("div",{className:"secant-slider-row",children:[u.jsx("label",{className:"text-sm font-semibold text-slate-200",children:"Interactive Secant Line (T = const):"}),u.jsx("input",{type:"range",min:"1.52",max:"2.10",step:"0.01",value:l,onChange:D=>c(parseFloat(D.target.value)),className:"secant-slider"}),u.jsxs("span",{className:"font-mono text-purple-300 font-bold",children:[l.toFixed(2)," s"]})]}),ne&&z&&H&&R?u.jsxs("div",{className:"secant-calc-grid font-mono",children:[u.jsxs("div",{className:"calc-pill",children:[u.jsx("span",{className:"calc-name",children:"AC (L₁):"}),u.jsxs("span",{className:"calc-val text-cyan",children:[Math.abs(H-ne).toFixed(3)," m"]})]}),u.jsxs("div",{className:"calc-pill",children:[u.jsx("span",{className:"calc-name",children:"BD (L₂):"}),u.jsxs("span",{className:"calc-val text-cyan",children:[Math.abs(R-z).toFixed(3)," m"]})]}),u.jsxs("div",{className:"calc-pill",children:[u.jsx("span",{className:"calc-name",children:"L_eq = (AC+BD)/2:"}),u.jsxs("span",{className:"calc-val text-emerald",children:[((Math.abs(H-ne)+Math.abs(R-z))/2).toFixed(3)," m"]})]}),u.jsxs("div",{className:"calc-pill",children:[u.jsx("span",{className:"calc-name",children:"k = (AB+CD)/4:"}),u.jsxs("span",{className:"calc-val text-amber",children:[((Math.abs(z-ne)+Math.abs(R-H))/4).toFixed(3)," m"]})]}),u.jsxs("div",{className:"calc-pill",children:[u.jsx("span",{className:"calc-name",children:"g = 4π² L_eq / T²:"}),u.jsxs("span",{className:"calc-val text-sky",children:[(4*Math.PI*Math.PI*((Math.abs(H-ne)+Math.abs(R-z))/2)/(l*l)).toFixed(2)," m/s²"]})]})]}):u.jsxs("div",{className:"text-xs text-amber mt-1",children:["Secant line does not cut curve (T < T_min = ",m.toFixed(3),"s). Raise T slider above T_min."]})]})]}),a==="linearized"&&u.jsxs("div",{className:"linearized-plot-card",children:[u.jsxs("div",{className:"plot-instructions",children:[u.jsx(Pp,{size:16,className:"text-cyan"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Linearized Analysis:"})," Multiplying T = 2π√((k² + l²)/(gl)) gives ",u.jsx("strong",{children:"T²·l = (4π²/g)·l² + (4π²k²/g)"}),". A plot of Y = T²·l against X = l² yields a straight line with ",u.jsx("strong",{children:"Slope = 4π²/g"})," and ",u.jsx("strong",{children:"Intercept = 4π²k²/g"}),"!"]})]}),u.jsxs("div",{className:"linearized-stats-grid",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("span",{className:"stat-title",children:"Theoretical Slope (4π²/g)"}),u.jsx("span",{className:"stat-num font-mono text-cyan",children:"4.024 s²/m"}),u.jsx("span",{className:"stat-sub",children:"Yields experimental g"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("span",{className:"stat-title",children:"Theoretical Intercept (4π²k²/g)"}),u.jsx("span",{className:"stat-num font-mono text-amber",children:"0.336 m·s²"}),u.jsx("span",{className:"stat-sub",children:"Yields experimental k = √(Intercept/Slope)"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("span",{className:"stat-title",children:"Recorded Points"}),u.jsxs("span",{className:"stat-num font-mono text-emerald",children:[t.length," trials"]}),u.jsx("span",{className:"stat-sub",children:t.length>=4?"Valid for linear regression":"Add at least 4 trials"})]})]})]}),a==="table"&&u.jsx("div",{className:"data-table-container",children:t.length===0?u.jsx("div",{className:"no-trials-empty",children:u.jsx("span",{children:"No trials recorded yet. Mount a hole on the knife-edge, displace by <5°, and record 20 oscillations!"})}):u.jsxs("table",{className:"trials-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Hole"}),u.jsx("th",{children:"Side"}),u.jsx("th",{children:"Distance l (m)"}),u.jsx("th",{children:"Angle (°)"}),u.jsx("th",{children:"Cycles (N)"}),u.jsx("th",{children:"Total Time (s)"}),u.jsx("th",{children:"Period T (s)"}),u.jsx("th",{children:"T² (s²)"}),u.jsx("th",{children:"I_pivot (kg·m²)"}),u.jsx("th",{children:"Actions"})]})}),u.jsx("tbody",{children:t.map((D,j)=>u.jsxs("tr",{className:D.holeIndex===r?"active-row":"",children:[u.jsxs("td",{className:"font-mono font-bold",children:["Hole ",D.holeIndex+1]}),u.jsx("td",{children:u.jsx("span",{className:`side-badge ${D.l<0?"badge-side-a":D.l>0?"badge-side-b":"badge-cg"}`,children:D.l<0?"Side A":D.l>0?"Side B":"C.G."})}),u.jsx("td",{className:"font-mono",children:D.l.toFixed(3)}),u.jsxs("td",{className:"font-mono",children:[D.angleDeg.toFixed(1),"°"]}),u.jsx("td",{className:"font-mono",children:D.cycles}),u.jsx("td",{className:"font-mono",children:D.totalTime.toFixed(3)}),u.jsx("td",{className:"font-mono text-emerald font-bold",children:D.period.toFixed(3)}),u.jsx("td",{className:"font-mono",children:(D.period*D.period).toFixed(3)}),u.jsx("td",{className:"font-mono text-cyan",children:D.I_pivot.toFixed(4)}),u.jsx("td",{children:u.jsx("button",{className:"btn-table-del",onClick:()=>n(j),title:"Delete trial",children:u.jsx(Rp,{size:13})})})]},j))})]})})]})}var mf={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),C=R.getContext("2d");C.fillRect(0,0,1,1);var Y=R.transferToImageBitmap();C.createPattern(Y,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var C=n.exports.Promise,Y=C!==void 0?C:e.Promise;return typeof Y=="function"?new Y(R):(R(l,l),null)}var h=function(R,C){return{transform:function(Y){if(R)return Y;if(C.has(Y))return C.get(Y);var D=new OffscreenCanvas(Y.width,Y.height),j=D.getContext("2d");return j.drawImage(Y,0,0),C.set(Y,D),D},clear:function(){C.clear()}}}(o,new Map),p=function(){var R=Math.floor(16.666666666666668),C,Y,D={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(se){var ue=Math.random();return D[ue]=requestAnimationFrame(function ie(de){j===de||j+R-1<de?(j=de,delete D[ue],se()):D[ue]=requestAnimationFrame(ie)}),ue},Y=function(se){D[se]&&cancelAnimationFrame(D[se])}):(C=function(se){return setTimeout(se,R)},Y=function(se){return clearTimeout(se)}),{frame:C,cancel:Y}}(),f=function(){var R,C,Y={};function D(j){function se(ue,ie){j.postMessage({options:ue||{},callback:ie})}j.init=function(ie){var de=ie.transferControlToOffscreen();j.postMessage({canvas:de},[de])},j.fire=function(ie,de,Te){if(C)return se(ie,null),C;var Me=Math.random().toString(36).slice(2);return C=c(function(we){function I(fe){fe.data.callback===Me&&(delete Y[Me],j.removeEventListener("message",I),C=null,h.clear(),Te(),we())}j.addEventListener("message",I),se(ie,Me),Y[Me]=I.bind(null,{data:{callback:Me}})}),C},j.reset=function(){j.postMessage({reset:!0});for(var ie in Y)Y[ie](),delete Y[ie]}}return function(){if(R)return R;if(!i&&s){var j=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([j])))}catch(se){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",se),null}D(R)}return R}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(R,C){return C?C(R):R}function y(R){return R!=null}function g(R,C,Y){return x(R&&y(R[C])?R[C]:m[C],Y)}function d(R){return R<0?0:Math.floor(R)}function _(R,C){return Math.floor(Math.random()*(C-R))+R}function v(R){return parseInt(R,16)}function S(R){return R.map(L)}function L(R){var C=String(R).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:v(C.substring(0,2)),g:v(C.substring(2,4)),b:v(C.substring(4,6))}}function b(R){var C=g(R,"origin",Object);return C.x=g(C,"x",Number),C.y=g(C,"y",Number),C}function T(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function F(R){var C=R.getBoundingClientRect();R.width=C.width,R.height=C.height}function w(R){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=R,C}function A(R,C,Y,D,j,se,ue,ie,de){R.save(),R.translate(C,Y),R.rotate(se),R.scale(D,j),R.arc(0,0,1,ue,ie,de),R.restore()}function q(R){var C=R.angle*(Math.PI/180),Y=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-C+(.5*Y-Math.random()*Y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function Z(R,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var Y=C.tick++/C.totalTicks,D=C.x+C.random*C.tiltCos,j=C.y+C.random*C.tiltSin,se=C.wobbleX+C.random*C.tiltCos,ue=C.wobbleY+C.random*C.tiltSin;if(R.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-Y)+")",R.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))R.fill(ne(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(se-D)*.1,Math.abs(ue-j)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var ie=Math.PI/10*C.wobble,de=Math.abs(se-D)*.1,Te=Math.abs(ue-j)*.1,Me=C.shape.bitmap.width*C.scalar,we=C.shape.bitmap.height*C.scalar,I=new DOMMatrix([Math.cos(ie)*de,Math.sin(ie)*de,-Math.sin(ie)*Te,Math.cos(ie)*Te,C.x,C.y]);I.multiplySelf(new DOMMatrix(C.shape.matrix));var fe=R.createPattern(h.transform(C.shape.bitmap),"no-repeat");fe.setTransform(I),R.globalAlpha=1-Y,R.fillStyle=fe,R.fillRect(C.x-Me/2,C.y-we/2,Me,we),R.globalAlpha=1}else if(C.shape==="circle")R.ellipse?R.ellipse(C.x,C.y,Math.abs(se-D)*C.ovalScalar,Math.abs(ue-j)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):A(R,C.x,C.y,Math.abs(se-D)*C.ovalScalar,Math.abs(ue-j)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var K=Math.PI/2*3,$=4*C.scalar,G=8*C.scalar,he=C.x,te=C.y,E=5,M=Math.PI/E;E--;)he=C.x+Math.cos(K)*G,te=C.y+Math.sin(K)*G,R.lineTo(he,te),K+=M,he=C.x+Math.cos(K)*$,te=C.y+Math.sin(K)*$,R.lineTo(he,te),K+=M;else R.moveTo(Math.floor(C.x),Math.floor(C.y)),R.lineTo(Math.floor(C.wobbleX),Math.floor(j)),R.lineTo(Math.floor(se),Math.floor(ue)),R.lineTo(Math.floor(D),Math.floor(C.wobbleY));return R.closePath(),R.fill(),C.tick<C.totalTicks}function le(R,C,Y,D,j){var se=C.slice(),ue=R.getContext("2d"),ie,de,Te=c(function(Me){function we(){ie=de=null,ue.clearRect(0,0,D.width,D.height),h.clear(),j(),Me()}function I(){i&&!(D.width===r.width&&D.height===r.height)&&(D.width=R.width=r.width,D.height=R.height=r.height),!D.width&&!D.height&&(Y(R),D.width=R.width,D.height=R.height),ue.clearRect(0,0,D.width,D.height),se=se.filter(function(fe){return Z(ue,fe)}),se.length?ie=p.frame(I):we()}ie=p.frame(I),de=we});return{addFettis:function(Me){return se=se.concat(Me),Te},canvas:R,promise:Te,reset:function(){ie&&p.cancel(ie),de&&de()}}}function O(R,C){var Y=!R,D=!!g(C||{},"resize"),j=!1,se=g(C,"disableForReducedMotion",Boolean),ue=s&&!!g(C||{},"useWorker"),ie=ue?f():null,de=Y?T:F,Te=R&&ie?!!R.__confetti_initialized:!1,Me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,we;function I(K,$,G){for(var he=g(K,"particleCount",d),te=g(K,"angle",Number),E=g(K,"spread",Number),M=g(K,"startVelocity",Number),B=g(K,"decay",Number),oe=g(K,"gravity",Number),ae=g(K,"drift",Number),re=g(K,"colors",S),be=g(K,"ticks",Number),pe=g(K,"shapes"),Ee=g(K,"scalar"),Le=!!g(K,"flat"),Oe=b(K),ce=he,Ge=[],je=R.width*Oe.x,Ue=R.height*Oe.y;ce--;)Ge.push(q({x:je,y:Ue,angle:te,spread:E,startVelocity:M,color:re[ce%re.length],shape:pe[_(0,pe.length)],ticks:be,decay:B,gravity:oe,drift:ae,scalar:Ee,flat:Le}));return we?we.addFettis(Ge):(we=le(R,Ge,de,$,G),we.promise)}function fe(K){var $=se||g(K,"disableForReducedMotion",Boolean),G=g(K,"zIndex",Number);if($&&Me)return c(function(M){M()});Y&&we?R=we.canvas:Y&&!R&&(R=w(G),document.body.appendChild(R)),D&&!Te&&de(R);var he={width:R.width,height:R.height};ie&&!Te&&ie.init(R),Te=!0,ie&&(R.__confetti_initialized=!0);function te(){if(ie){var M={getBoundingClientRect:function(){if(!Y)return R.getBoundingClientRect()}};de(M),ie.postMessage({resize:{width:M.width,height:M.height}});return}he.width=he.height=null}function E(){we=null,D&&(j=!1,e.removeEventListener("resize",te)),Y&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,Te=!1)}return D&&!j&&(j=!0,e.addEventListener("resize",te,!1)),ie?ie.fire(K,he,E):I(K,he,E)}return fe.reset=function(){ie&&ie.reset(),we&&we.reset()},fe}var V;function X(){return V||(V=O(null,{useWorker:!0,resize:!0})),V}function ne(R,C,Y,D,j,se,ue){var ie=new Path2D(R),de=new Path2D;de.addPath(ie,new DOMMatrix(C));var Te=new Path2D;return Te.addPath(de,new DOMMatrix([Math.cos(ue)*j,Math.sin(ue)*j,-Math.sin(ue)*se,Math.cos(ue)*se,Y,D])),Te}function z(R){if(!a)throw new Error("path confetti are not supported in this browser");var C,Y;typeof R=="string"?C=R:(C=R.path,Y=R.matrix);var D=new Path2D(C),j=document.createElement("canvas"),se=j.getContext("2d");if(!Y){for(var ue=1e3,ie=ue,de=ue,Te=0,Me=0,we,I,fe=0;fe<ue;fe+=2)for(var K=0;K<ue;K+=2)se.isPointInPath(D,fe,K,"nonzero")&&(ie=Math.min(ie,fe),de=Math.min(de,K),Te=Math.max(Te,fe),Me=Math.max(Me,K));we=Te-ie,I=Me-de;var $=10,G=Math.min($/we,$/I);Y=[G,0,0,G,-Math.round(we/2+ie)*G,-Math.round(I/2+de)*G]}return{type:"path",path:C,matrix:Y}}function H(R){var C,Y=1,D="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?C=R:(C=R.text,Y="scalar"in R?R.scalar:Y,j="fontFamily"in R?R.fontFamily:j,D="color"in R?R.color:D);var se=10*Y,ue=""+se+"px "+j,ie=new OffscreenCanvas(se,se),de=ie.getContext("2d");de.font=ue;var Te=de.measureText(C),Me=Math.ceil(Te.actualBoundingBoxRight+Te.actualBoundingBoxLeft),we=Math.ceil(Te.actualBoundingBoxAscent+Te.actualBoundingBoxDescent),I=2,fe=Te.actualBoundingBoxLeft+I,K=Te.actualBoundingBoxAscent+I;Me+=I+I,we+=I+I,ie=new OffscreenCanvas(Me,we),de=ie.getContext("2d"),de.font=ue,de.fillStyle=D,de.fillText(C,fe,K);var $=1/Y;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[$,0,0,$,-Me*$/2,-we*$/2]}}n.exports=function(){return X().apply(this,arguments)},n.exports.reset=function(){X().reset()},n.exports.create=O,n.exports.shapeFromPath=z,n.exports.shapeFromText=H})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),mf,!1);const Nb=mf.exports;mf.exports.create;function Db({isOpen:t,onClose:e,trials:n,barConfig:i,barMass:r,materialKey:s,onSubmitToLeaderboard:a}){const[o,l]=me.useState("Engineering Student"),[c,h]=me.useState("ME-2026-042"),[p,f]=me.useState(!1);if(me.useEffect(()=>{if(t&&n.length>=3){it.playSuccessJingle();try{Nb({particleCount:80,spread:70,origin:{y:.6}})}catch{}}},[t,n.length]),!t)return null;const m=Ic(i.length,i.width),x=cc(r,i.length,i.width),y=n.filter(b=>Math.abs(b.l)>.05);let g=m,d=x,_=0;if(y.length>0){const b=y.map(T=>{const F=9.81*Math.abs(T.l)*T.period*T.period/(4*Math.PI*Math.PI)-T.l*T.l;return F>0?Math.sqrt(F):null}).filter(T=>T!==null);b.length>0&&(g=b.reduce((T,F)=>T+F,0)/b.length,d=r*g*g,_=Math.abs((g-m)/m*100))}const v=Math.max(70,Math.min(100,Math.round(100-_*2.5))),S=()=>{it.playClick(),window.print()},L=()=>{p||(it.playSuccessJingle(),a({name:o,studentId:c,material:s,trialsCount:n.length,kExp:g,kTheo:m,IGExp:d,IGTheo:x,errorPct:_,grade:v,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),f(!0))};return u.jsx("div",{className:"report-modal-overlay",children:u.jsxs("div",{className:"report-modal-container",children:[u.jsxs("div",{className:"report-header-toolbar no-print",children:[u.jsxs("div",{className:"toolbar-title-wrap",children:[u.jsx(Qv,{className:"text-cyan",size:22}),u.jsx("span",{className:"toolbar-title",children:"Verified Laboratory Report & Assessment"})]}),u.jsxs("div",{className:"toolbar-actions",children:[u.jsxs("button",{className:"btn-print-report",onClick:S,children:[u.jsx(fM,{size:16})," Print / Save PDF"]}),u.jsx("button",{className:"btn-close-modal",onClick:e,children:u.jsx(Ac,{size:20})})]})]}),u.jsxs("div",{className:"printable-report-paper",id:"printable-lab-report",children:[u.jsxs("div",{className:"report-doc-header",children:[u.jsx("div",{className:"univ-seal",children:"🏛️"}),u.jsxs("div",{className:"univ-info",children:[u.jsx("h1",{className:"doc-main-title",children:"DEPARTMENT OF MECHANICAL & DYNAMICS ENGINEERING"}),u.jsx("h2",{className:"doc-lab-title",children:"ENGINEERING DYNAMICS LABORATORY • EXP #04"}),u.jsx("h3",{className:"doc-experiment-title",children:"DETERMINATION OF MASS MOMENT OF INERTIA & RADIUS OF GYRATION OF A COMPOUND PENDULUM"})]}),u.jsxs("div",{className:"doc-badge-score",children:[u.jsx("span",{className:"grade-badge-title",children:"LAB GRADE"}),u.jsxs("span",{className:"grade-badge-value",children:[v," / 100"]}),u.jsx("span",{className:"grade-badge-letter",children:v>=90?"Grade A+":v>=80?"Grade A":"Grade B"})]})]}),u.jsx("hr",{className:"doc-divider"}),u.jsxs("div",{className:"report-meta-grid",children:[u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{className:"meta-label",children:"Investigator Name:"}),u.jsx("input",{type:"text",value:o,onChange:b=>l(b.target.value),className:"meta-input font-bold"})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{className:"meta-label",children:"Student ID:"}),u.jsx("input",{type:"text",value:c,onChange:b=>h(b.target.value),className:"meta-input"})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{className:"meta-label",children:"Date & Time:"}),u.jsxs("span",{className:"meta-value font-mono",children:[new Date().toLocaleDateString()," ",new Date().toLocaleTimeString()]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{className:"meta-label",children:"Test Specimen Material:"}),u.jsx("span",{className:"meta-value font-bold text-sky",children:s.toUpperCase()})]})]}),u.jsxs("div",{className:"doc-section",children:[u.jsx("h4",{className:"doc-section-title",children:"1. Governing Equations & Theory"}),u.jsxs("div",{className:"formula-boxes-row",children:[u.jsxs("div",{className:"formula-box",children:[u.jsx("span",{className:"f-title",children:"Time Period (T):"}),u.jsx("span",{className:"f-math",children:"T = 2π √[(k_G² + l²) / (g · l)] = 2π √(L_eq / g)"})]}),u.jsxs("div",{className:"formula-box",children:[u.jsx("span",{className:"f-title",children:"Parallel Axis Theorem:"}),u.jsx("span",{className:"f-math",children:"I_pivot = I_G + M · l² = M(k_G² + l²)"})]}),u.jsxs("div",{className:"formula-box",children:[u.jsx("span",{className:"f-title",children:"Theoretical Gyration Radius:"}),u.jsx("span",{className:"f-math",children:"k_G,theo = √[(L² + b²) / 12]"})]})]})]}),u.jsxs("div",{className:"doc-section",children:[u.jsx("h4",{className:"doc-section-title",children:"2. Apparatus Measured Dimensions"}),u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Parameter"}),u.jsx("th",{children:"Symbol"}),u.jsx("th",{children:"Measurement Instrument"}),u.jsx("th",{children:"Measured Value"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:"Total Bar Length"}),u.jsx("td",{children:"L"}),u.jsx("td",{children:"Precision Virtual Meter Scale"}),u.jsxs("td",{className:"font-mono",children:[i.length.toFixed(3)," m"]})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"Bar Cross-Section Width"}),u.jsx("td",{children:"b"}),u.jsx("td",{children:"Vernier Caliper (0.1 mm LC)"}),u.jsxs("td",{className:"font-mono",children:[i.width.toFixed(4)," m"]})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"Bar Thickness"}),u.jsx("td",{children:"t"}),u.jsx("td",{children:"Vernier Caliper (0.1 mm LC)"}),u.jsxs("td",{className:"font-mono",children:[i.thickness.toFixed(4)," m"]})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"Total Specimen Mass"}),u.jsx("td",{children:"M"}),u.jsx("td",{children:"Digital Electronic Balance"}),u.jsxs("td",{className:"font-mono font-bold",children:[r.toFixed(3)," kg"]})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"Hole Pitch (Spacing)"}),u.jsx("td",{children:"Δl"}),u.jsx("td",{children:"Direct Metric Division"}),u.jsx("td",{className:"font-mono",children:"0.100 m (10.0 cm)"})]})]})]})]}),u.jsxs("div",{className:"doc-section",children:[u.jsx("h4",{className:"doc-section-title",children:"3. Experimental Oscillation Trials (N = 20 Oscillations)"}),n.length===0?u.jsx("p",{className:"text-sm text-slate-500 italic",children:"No experimental trials recorded yet."}):u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Trial"}),u.jsx("th",{children:"Hole #"}),u.jsx("th",{children:"Side"}),u.jsx("th",{children:"Distance from C.G. l (m)"}),u.jsx("th",{children:"Angle θ₀ (°)"}),u.jsx("th",{children:"Time for 20 Osc. (s)"}),u.jsx("th",{children:"Period T (s)"}),u.jsx("th",{children:"I_pivot (kg·m²)"}),u.jsx("th",{children:"k_exp (m)"})]})}),u.jsx("tbody",{children:n.map((b,T)=>{const F=Math.abs(b.l)>.05?Math.sqrt(Math.max(0,9.81*Math.abs(b.l)*b.period*b.period/(4*Math.PI*Math.PI)-b.l*b.l)):0;return u.jsxs("tr",{children:[u.jsx("td",{children:T+1}),u.jsxs("td",{className:"font-bold",children:["Hole ",b.holeIndex+1]}),u.jsx("td",{children:b.l<0?"Side A":b.l>0?"Side B":"C.G."}),u.jsx("td",{className:"font-mono",children:b.l.toFixed(3)}),u.jsxs("td",{className:"font-mono",children:[b.angleDeg.toFixed(1),"°"]}),u.jsx("td",{className:"font-mono",children:b.totalTime.toFixed(3)}),u.jsx("td",{className:"font-mono font-bold",children:b.period.toFixed(3)}),u.jsx("td",{className:"font-mono",children:b.I_pivot.toFixed(4)}),u.jsx("td",{className:"font-mono",children:F>0?F.toFixed(4):"N/A"})]},T)})})]})]}),u.jsxs("div",{className:"doc-section",children:[u.jsx("h4",{className:"doc-section-title",children:"4. Experimental vs. Theoretical Verification"}),u.jsxs("table",{className:"doc-table results-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Physical Quantity"}),u.jsx("th",{children:"Theoretical Value"}),u.jsx("th",{children:"Experimental Mean Value"}),u.jsx("th",{children:"Absolute Error"}),u.jsx("th",{children:"Percentage Error (%)"}),u.jsx("th",{children:"Verification Status"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("strong",{children:"Radius of Gyration (k_G)"})}),u.jsxs("td",{className:"font-mono",children:[m.toFixed(4)," m"]}),u.jsxs("td",{className:"font-mono font-bold text-cyan",children:[g.toFixed(4)," m"]}),u.jsxs("td",{className:"font-mono",children:[Math.abs(g-m).toFixed(4)," m"]}),u.jsxs("td",{className:"font-mono font-bold text-amber",children:[_.toFixed(2),"%"]}),u.jsx("td",{children:u.jsxs("span",{className:"status-tag verified",children:[u.jsx(Ql,{size:14})," VERIFIED"]})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("strong",{children:"Mass Moment of Inertia about C.G. (I_G)"})}),u.jsxs("td",{className:"font-mono",children:[x.toFixed(5)," kg·m²"]}),u.jsxs("td",{className:"font-mono font-bold text-cyan",children:[d.toFixed(5)," kg·m²"]}),u.jsxs("td",{className:"font-mono",children:[Math.abs(d-x).toFixed(5)," kg·m²"]}),u.jsxs("td",{className:"font-mono font-bold text-amber",children:[_.toFixed(2),"%"]}),u.jsx("td",{children:u.jsxs("span",{className:"status-tag verified",children:[u.jsx(Ql,{size:14})," VERIFIED"]})})]})]})]})]}),u.jsxs("div",{className:"doc-section",children:[u.jsx("h4",{className:"doc-section-title",children:"5. Scientific Conclusion"}),u.jsxs("div",{className:"conclusion-box",children:[u.jsxs("p",{children:["1. ",u.jsx("strong",{children:"Verification of Parallel Axis Theorem:"})," The experimental data definitively confirms the theoretical formulation ",u.jsx("em",{children:"I_pivot = M(k_G² + l²)"})," within an experimental accuracy of"," ",u.jsxs("strong",{children:[(100-_).toFixed(2),"%"]}),"."]}),u.jsxs("p",{children:["2. ",u.jsx("strong",{children:"Minimum Time Period & Harmonic Resonance:"})," The characteristic U-shaped curves on both Side A and Side B reach an empirical minimum periodic time at distance ",u.jsx("em",{children:"l ≈ k_G"})," (",m.toFixed(3)," m), confirming the derivative condition ",u.jsx("em",{children:"dT/dl = 0"}),"."]}),u.jsxs("p",{children:["3. ",u.jsx("strong",{children:"Small-Angle Approximations:"})," Maintaining initial displacement angles under 5° ensured sinusoidal restorative motion and eliminated non-linear period dilation."]})]})]}),u.jsxs("div",{className:"signatures-row",children:[u.jsxs("div",{className:"sig-box",children:[u.jsx("div",{className:"sig-line"}),u.jsx("span",{children:"Student Signature"})]}),u.jsxs("div",{className:"sig-box",children:[u.jsx("div",{className:"sig-line"}),u.jsx("span",{children:"Laboratory Instructor / Evaluator"})]})]})]}),u.jsx("div",{className:"report-footer-actions no-print",children:u.jsxs("button",{className:`btn-submit-leaderboard ${p?"submitted":""}`,onClick:L,disabled:p||n.length===0,children:[u.jsx(mM,{size:16}),p?"✓ Submitted to Session Leaderboard":"Submit Score to Leaderboard"]})})]})})}const Mg=[{id:1,name:"TeamBlaze Lead (You)",studentId:"TB-01",institution:"TeamBlaze Dynamics",material:"steel",trialsCount:8,kExp:.2887,kTheo:.2889,errorPct:.07,grade:100,timestamp:"Just now"},{id:2,name:"Rohan Sharma",studentId:"ME-IITB-104",institution:"IIT Bombay MechE",material:"brass",trialsCount:8,kExp:.2891,kTheo:.2889,errorPct:.07,grade:100,timestamp:"12m ago"},{id:3,name:"Elena Rostova",studentId:"MIT-DYN-88",institution:"MIT Rotordynamics Lab",material:"aluminum",trialsCount:7,kExp:.2882,kTheo:.2889,errorPct:.24,grade:99,timestamp:"28m ago"},{id:4,name:"David Chen",studentId:"STAN-ME-12",institution:"Stanford Robotics Lab",material:"steel",trialsCount:6,kExp:.2879,kTheo:.2889,errorPct:.35,grade:98,timestamp:"1h ago"},{id:5,name:"Klaus Weber",studentId:"TUM-ME-409",institution:"TU Munich Dynamics",material:"titanium",trialsCount:8,kExp:.2902,kTheo:.2889,errorPct:.45,grade:97,timestamp:"2h ago"},{id:6,name:"Priya Patel",studentId:"BITS-P-202",institution:"BITS Pilani Dynamics Lab",material:"hardwood",trialsCount:5,kExp:.2868,kTheo:.2889,errorPct:.73,grade:95,timestamp:"3h ago"}];function Ib({isOpen:t,onClose:e,currentSubmission:n}){const[i,r]=me.useState(()=>{try{const l=localStorage.getItem("teamblaze_leaderboard");return l?JSON.parse(l):Mg}catch{return Mg}}),[s,a]=me.useState("all");if(me.useEffect(()=>{n&&r(l=>{const c={id:Date.now(),institution:"Local Lab Session",...n},h=[c,...l.filter(p=>p.name!==c.name)];h.sort((p,f)=>p.errorPct-f.errorPct);try{localStorage.setItem("teamblaze_leaderboard",JSON.stringify(h))}catch{}return h})},[n]),!t)return null;const o=s==="all"?i:i.filter(l=>l.material===s);return u.jsx("div",{className:"leaderboard-modal-overlay",children:u.jsxs("div",{className:"leaderboard-modal-card",children:[u.jsxs("div",{className:"leaderboard-header",children:[u.jsxs("div",{className:"leaderboard-title-wrap",children:[u.jsx(yx,{className:"text-amber animate-pulse",size:24}),u.jsxs("div",{children:[u.jsx("h2",{className:"leaderboard-title",children:"Collaborative Session Leaderboard"}),u.jsx("p",{className:"leaderboard-subtitle",children:"Global Benchmarking: Radius of Gyration (k) Accuracy Across Materials"})]})]}),u.jsx("button",{className:"btn-close-modal",onClick:e,title:"Close Leaderboard",children:u.jsx(Ac,{size:20})})]}),u.jsxs("div",{className:"leaderboard-toolbar",children:[u.jsxs("div",{className:"filter-label-group",children:[u.jsx(cM,{size:15,className:"text-slate-400"}),u.jsx("span",{className:"text-xs text-slate-300",children:"Filter Material:"})]}),u.jsx("div",{className:"material-filter-pills",children:["all","steel","brass","aluminum","titanium","hardwood"].map(l=>u.jsx("button",{className:`mat-pill ${s===l?"active":""}`,onClick:()=>{a(l),it.playClick()},children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),u.jsx("div",{className:"leaderboard-table-wrap",children:u.jsxs("table",{className:"leaderboard-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Rank"}),u.jsx("th",{children:"Investigator"}),u.jsx("th",{children:"Institution"}),u.jsx("th",{children:"Material"}),u.jsx("th",{children:"Trials"}),u.jsx("th",{children:"Measured k (m)"}),u.jsx("th",{children:"Theoretical k (m)"}),u.jsx("th",{children:"Accuracy Error (%)"}),u.jsx("th",{children:"Grade"})]})}),u.jsx("tbody",{children:o.map((l,c)=>{const h=c+1;return u.jsxs("tr",{className:h<=3?"top-three-row":"",children:[u.jsx("td",{children:u.jsxs("div",{className:"rank-cell",children:[h===1&&u.jsx(hu,{size:18,className:"text-amber"}),h===2&&u.jsx(hu,{size:18,className:"text-slate-300"}),h===3&&u.jsx(hu,{size:18,className:"text-amber-700"}),u.jsxs("span",{className:"rank-num font-mono",children:["#",h]})]})}),u.jsx("td",{children:u.jsxs("div",{className:"investigator-cell",children:[u.jsx("span",{className:"inv-name font-bold",children:l.name}),u.jsx("span",{className:"inv-id font-mono text-xs text-slate-400",children:l.studentId})]})}),u.jsx("td",{className:"text-slate-300 text-xs",children:l.institution}),u.jsx("td",{children:u.jsx("span",{className:"mat-badge",children:l.material.toUpperCase()})}),u.jsx("td",{className:"font-mono text-center",children:l.trialsCount}),u.jsxs("td",{className:"font-mono text-cyan font-bold",children:[l.kExp.toFixed(4)," m"]}),u.jsxs("td",{className:"font-mono text-slate-400",children:[l.kTheo.toFixed(4)," m"]}),u.jsx("td",{children:u.jsxs("span",{className:`error-badge font-mono ${l.errorPct<.5?"error-low":l.errorPct<1.5?"error-mid":"error-high"}`,children:[l.errorPct.toFixed(2),"%"]})}),u.jsx("td",{children:u.jsxs("span",{className:"grade-pill font-mono",children:[l.grade," / 100"]})})]},l.id)})})]})}),u.jsxs("div",{className:"leaderboard-footer",children:[u.jsx("span",{className:"text-xs text-slate-400",children:"Submit your completed Lab Report to rank on the collaborative session benchmark."}),u.jsx("button",{className:"btn-done",onClick:e,children:"Back to Simulation"})]})]})})}function Ub({isOpen:t,onClose:e}){return t?u.jsx("div",{className:"theory-modal-overlay",children:u.jsxs("div",{className:"theory-modal-card",children:[u.jsxs("div",{className:"theory-modal-header",children:[u.jsxs("div",{className:"modal-title-wrap",children:[u.jsx(Fv,{className:"text-cyan",size:24}),u.jsxs("div",{children:[u.jsx("h2",{className:"modal-title",children:"Theoretical Foundation & Physics Manual"}),u.jsx("p",{className:"modal-subtitle",children:"Mass Moment of Inertia, Radius of Gyration & Compound Pendulum Dynamics"})]})]}),u.jsx("button",{className:"btn-close-modal",onClick:e,title:"Close Theory Guide",children:u.jsx(Ac,{size:20})})]}),u.jsxs("div",{className:"theory-content-body",children:[u.jsxs("div",{className:"theory-section",children:[u.jsx("h3",{className:"section-title",children:"1. Introduction & Engineering Significance"}),u.jsxs("p",{children:["In rigid body mechanics, the ",u.jsx("strong",{children:"Mass Moment of Inertia (I)"})," defines an object's resistance to angular acceleration when a torque is applied:"]}),u.jsx("div",{className:"equation-callout",children:"τ = I · α = I · d²θ/dt²"}),u.jsxs("p",{children:["Unlike point masses in simple pendulums, real mechanical systems (connecting rods, turbine blades, robot manipulators, satellite gyroscopes) have continuous spatial mass distributions. The ",u.jsx("strong",{children:"compound pendulum"})," (a rigid body oscillating about a fixed horizontal axis under gravity) serves as the universal benchmark to experimentally determine the moment of inertia and radius of gyration."]})]}),u.jsxs("div",{className:"theory-section",children:[u.jsx("h3",{className:"section-title",children:"2. Mathematical Derivation of Equation of Motion"}),u.jsxs("p",{children:["Consider a uniform rigid bar of mass ",u.jsx("em",{children:"M"})," suspended from a knife-edge pivot at distance ",u.jsx("em",{children:"l"})," from its Center of Gravity (C.G.). When displaced by angle ",u.jsx("em",{children:"θ"}),", the restoring gravitational torque about the suspension axis is:"]}),u.jsx("div",{className:"equation-callout",children:"τ_restoring = - M · g · l · sin(θ)"}),u.jsx("p",{children:"Applying Newton's Second Law for rotational motion about the pivot axis:"}),u.jsx("div",{className:"equation-callout",children:"I_pivot · d²θ/dt² + M · g · l · sin(θ) = 0"}),u.jsxs("p",{children:["Under the ",u.jsx("strong",{children:"Small-Angle Approximation (θ < 5° ≈ 0.087 rad)"}),", we have ",u.jsx("em",{children:"sin(θ) ≈ θ"}),". The differential equation reduces to standard Simple Harmonic Motion (SHM):"]}),u.jsx("div",{className:"equation-callout",children:"d²θ/dt² + ωₙ² · θ = 0,    where   ωₙ = √[ (M · g · l) / I_pivot ]"}),u.jsxs("p",{children:["Therefore, the natural periodic time of oscillation ",u.jsx("em",{children:"T"})," is:"]}),u.jsx("div",{className:"equation-callout highlight-box",children:"T = 2π / ωₙ = 2π √[ I_pivot / (M · g · l) ]"})]}),u.jsxs("div",{className:"theory-section",children:[u.jsx("h3",{className:"section-title",children:"3. Parallel Axis Theorem & Radius of Gyration (k)"}),u.jsxs("p",{children:["According to the ",u.jsx("strong",{children:"Parallel Axis Theorem"})," (Steiner's theorem), the moment of inertia about the suspension pivot is:"]}),u.jsx("div",{className:"equation-callout",children:"I_pivot = I_G + M · l² = M · k_G² + M · l² = M · (k_G² + l²)"}),u.jsxs("p",{children:["where ",u.jsx("em",{children:"k_G"})," is the ",u.jsx("strong",{children:"Radius of Gyration"})," about the centroidal axis parallel to the knife edge. Substituting ",u.jsx("em",{children:"I_pivot"})," into the period formula yields the fundamental compound pendulum equation:"]}),u.jsx("div",{className:"equation-callout highlight-box text-emerald",children:"T = 2π √[ (k_G² + l²) / (g · l) ] = 2π √[ L_eq / g ]"}),u.jsxs("p",{children:["where ",u.jsx("strong",{children:"L_eq = l + k_G² / l"})," is the length of the ",u.jsx("em",{children:"Equivalent Simple Pendulum"})," that has the identical period of oscillation!"]})]}),u.jsxs("div",{className:"theory-section",children:[u.jsx("h3",{className:"section-title",children:"4. Condition for Minimum Periodic Time (T_min)"}),u.jsxs("p",{children:["Squaring both sides gives: ",u.jsx("em",{children:"T² = (4π²/g) · [ (k_G² / l) + l ]"}),". To find the value of ",u.jsx("em",{children:"l"})," where the period is minimized, we differentiate with respect to ",u.jsx("em",{children:"l"})," and set the derivative to zero:"]}),u.jsxs("div",{className:"equation-callout",children:["d(T²)/dl = (4π²/g) · [ - (k_G² / l²) + 1 ] = 0  ⟹  l² = k_G²  ⟹  ",u.jsx("strong",{children:"l = k_G"})]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Profound Physical Discovery:"})," The time period of oscillation is at its absolute minimum when the distance from the pivot to the C.G. equals the radius of gyration!"]}),u.jsx("div",{className:"equation-callout highlight-box text-amber",children:"T_min = 2π √[ (2 · k_G) / g ]"})]}),u.jsxs("div",{className:"theory-section",children:[u.jsx("h3",{className:"section-title",children:"5. Graphical Determination via Dual-Branch Curves"}),u.jsxs("p",{children:["When ",u.jsx("em",{children:"T"})," is plotted against distance from C.G. (",u.jsx("em",{children:"l"}),") for suspension points on both Side A and Side B, two symmetrical U-shaped branches appear. Drawing any horizontal line ",u.jsx("em",{children:"T = const"})," intersects the curves at 4 points (",u.jsx("em",{children:"A, B, C, D"}),"):"]}),u.jsxs("ul",{className:"theory-bullet-list",children:[u.jsx("li",{children:"Points A and D are conjugate points of suspension and oscillation."}),u.jsxs("li",{children:["Equivalent Simple Pendulum Length: ",u.jsx("strong",{children:"L_eq = (AC + BD) / 2"})]}),u.jsxs("li",{children:["Radius of Gyration: ",u.jsx("strong",{children:"k_G = (AB + CD) / 4"})]}),u.jsxs("li",{children:["Local Acceleration due to Gravity: ",u.jsx("strong",{children:"g = 4π² · L_eq / T²"})]})]})]})]}),u.jsxs("div",{className:"theory-footer",children:[u.jsx("span",{className:"text-xs text-slate-400",children:"Source: Virtual Labs (MoE Govt. of India) & Classical Rigid Body Dynamics"}),u.jsx("button",{className:"btn-done",onClick:()=>{it.playClick(),e()},children:"Close Guide"})]})]})}):null}function Fb(){var xo;const[t,e]=me.useState("light");me.useEffect(()=>{document.documentElement.setAttribute("data-theme","light")},[]);const n=()=>{const Ie=t==="light"?"dark":"light";e(Ie),document.documentElement.setAttribute("data-theme",Ie)},[i,r]=me.useState(!0),[s,a]=me.useState(!1),[o,l]=me.useState(!0),[c,h]=me.useState(Mb),[p,f]=me.useState("steel"),[m,x]=me.useState("earth"),y=Eb(c.length,c.width,c.thickness,p),g=((xo=yg[m])==null?void 0:xo.g)||9.81,[d,_]=me.useState(0),v=c.holeDistancesFromCG[d],S=Ic(c.length,c.width),[L,b]=me.useState(4),[T,F]=me.useState(4),[w,A]=me.useState(0),[q,Z]=me.useState(0),[le,O]=me.useState(0),[V,X]=me.useState(!1),[ne,z]=me.useState(0),[H,R]=me.useState(!1),[C,Y]=me.useState(0),[D,j]=me.useState(20),[se,ue]=me.useState("photogate"),[ie,de]=me.useState(!1),[Te,Me]=me.useState(!0),[we,I]=me.useState([{holeIndex:0,l:-.4,angleDeg:4,cycles:20,totalTime:33.16,period:1.658,I_pivot:.3663,I_G:.1263},{holeIndex:1,l:-.3,angleDeg:4,cycles:20,totalTime:30.82,period:1.541,I_pivot:.2613,I_G:.1263},{holeIndex:2,l:-.2,angleDeg:4,cycles:20,totalTime:31.48,period:1.574,I_pivot:.1863,I_G:.1263},{holeIndex:3,l:-.1,angleDeg:4,cycles:20,totalTime:39.84,period:1.992,I_pivot:.1413,I_G:.1263}]),[fe,K]=me.useState(!0),[$,G]=me.useState(!0),[he,te]=me.useState(!1),[E,M]=me.useState(!0),[B,oe]=me.useState(!1),[ae,re]=me.useState("isometric"),[be,pe]=me.useState(!1),[Ee,Le]=me.useState(!1),[Oe,ce]=me.useState(!1),[Ge,je]=me.useState(!1),[Ue,Fe]=me.useState(null),Re=T*Math.PI/180,N=bb(Re,w,y,v,S,g),xe=L*Math.PI/180,{percentIncrease:De}=Tb(xe),Ce=Math.abs(L),ge=Ce<=5,k=Ce>5&&Ce<=10,Se=Ce>10;me.useEffect(()=>{const Ie=Je=>re(Je.detail);return window.addEventListener("change-camera-view",Ie),()=>window.removeEventListener("change-camera-view",Ie)},[]);const ve=me.useRef({theta:L*Math.PI/180,omega:0,prevTheta:L*Math.PI/180,prevSign:0,halfCycles:0,lastCrossingTime:0});me.useEffect(()=>{V||(ve.current.theta=L*Math.PI/180,ve.current.omega=0,ve.current.halfCycles=0)},[L,V]),me.useEffect(()=>{let Ie,Je=performance.now();const P=W=>{Ie=requestAnimationFrame(P);const J=Math.min((W-Je)/1e3,.05);if(Je=W,V&&Math.abs(v)>.001){const ee=Ab(ve.current.theta,ve.current.omega,J,{mass:y,l:v,kG:S,g,damping:.0025}),Q=ve.current.theta,Pe=ee.theta;if(ve.current.theta=Pe,ve.current.omega=ee.omega,F(Pe*180/Math.PI),A(ee.omega),Z(ee.alpha),O(ee.torque),Q<=0&&Pe>0||Q>=0&&Pe<0){de(!0),setTimeout(()=>de(!1),80),ve.current.halfCycles+=1;const He=Math.floor(ve.current.halfCycles/2);H&&(Y(He),He>0&&ve.current.halfCycles%2===0&&it.playPhotogateChime(),se==="photogate"&&He>=D&&(R(!1),it.playSuccessJingle()))}}H&&z(ee=>ee+J)};return Ie=requestAnimationFrame(P),()=>cancelAnimationFrame(Ie)},[V,H,v,y,S,g,se,D]);const ze=Ie=>{_(Ie),X(!1),F(L),A(0),z(0),Y(0),R(!1),ve.current.halfCycles=0},ke=Ie=>{const Je=Ie*180/Math.PI;b(Je),F(Je),X(!1),A(0),ve.current.theta=Ie,ve.current.omega=0},We=()=>{Math.abs(v)<.001||(X(!0),se==="photogate"&&(R(!0),z(0),Y(0),ve.current.halfCycles=0))},qe=()=>{X(!1),A(0)},ht=()=>{X(!1),b(0),F(0),A(0),R(!1),z(0),Y(0)},lt=()=>{R(Ie=>!Ie)},Ze=()=>{R(!1),z(0),Y(0),ve.current.halfCycles=0},ct=()=>{if(C===0)return;const Ie=+(ne/C).toFixed(3),Je=Sg(y,c.length,c.width,v),P=cc(y,c.length,c.width),W={holeIndex:d,l:v,angleDeg:L,cycles:C,totalTime:+ne.toFixed(3),period:Ie,I_pivot:+Je.toFixed(4),I_G:+P.toFixed(4)};I(J=>[...J,W])},cn=()=>{it.playClick(),I([])},Xr=Ie=>{it.playClick(),I(Je=>Je.filter((P,W)=>W!==Ie))},ur=Ie=>{const Je=Math.floor(Ie/60),P=Math.floor(Ie%60),W=Math.floor(Ie%1*1e3);return`${Je.toString().padStart(2,"0")}:${P.toString().padStart(2,"0")}.${W.toString().padStart(3,"0")}`},Li=C>0?(ne/C).toFixed(3):"0.000",mo=Math.min(100,Math.round(C/D*100)),oi=Math.abs(v)>.001?lh(v,S,g):1/0,go=cc(y,c.length,c.width),vo=Sg(y,c.length,c.width,v);return u.jsxs("div",{className:"teamblaze-app-root",children:[u.jsx("div",{className:"fullscreen-3d-canvas",children:u.jsx(Cb,{currentHoleIndex:d,onSelectHole:ze,angleRad:Re,angularVelocity:w,barConfig:c,materialKey:p,showCG:fe,showCenterOfOscillation:$,showEquivalentPendulum:he,showTraceTrail:E,showVectors:B,isDisplacing:!V,onDisplaceAngle:ke,photogateBeamActive:ie,cameraViewPreset:ae})}),u.jsxs("header",{className:"floating-top-bar",children:[u.jsx("div",{className:"ftb-left",children:u.jsxs("div",{className:"ftb-brand",children:[u.jsx("span",{className:"ftb-logo-icon",children:"🔬"}),u.jsxs("div",{children:[u.jsxs("h1",{className:"ftb-title",children:["DynamicsLab ",u.jsx("span",{className:"ftb-accent",children:"3D"})]}),u.jsx("span",{className:"ftb-subtitle",children:"Compound Pendulum — Mass Moment of Inertia"})]})]})}),u.jsxs("div",{className:"ftb-center",children:[u.jsxs("div",{className:"ftb-config-pill",children:[u.jsx("span",{className:"ftb-config-label",children:"Specimen"}),u.jsx("select",{value:p,onChange:Ie=>{f(Ie.target.value),it.playClick()},className:"ftb-config-select",children:Object.entries(Gr).map(([Ie,Je])=>u.jsx("option",{value:Ie,children:Je.name},Ie))})]}),u.jsxs("div",{className:"ftb-config-pill",children:[u.jsx("span",{className:"ftb-config-label",children:"Gravity"}),u.jsx("select",{value:m,onChange:Ie=>{x(Ie.target.value),it.playClick()},className:"ftb-config-select font-mono",children:Object.entries(yg).map(([Ie,Je])=>u.jsxs("option",{value:Ie,children:[Je.icon," ",Je.name," (",Je.g," m/s²)"]},Ie))})]})]}),u.jsxs("div",{className:"ftb-right",children:[u.jsxs("button",{className:"ftb-btn",onClick:()=>{pe(!0),it.playClick()},title:"Virtual Measurement Tools",children:[u.jsx(Ea,{size:15})," ",u.jsx("span",{className:"ftb-btn-text",children:"Measure"})]}),u.jsxs("button",{className:"ftb-btn",onClick:()=>{Le(!0),it.playClick()},title:"Lab Report",children:[u.jsx(Qv,{size:15})," ",u.jsx("span",{className:"ftb-btn-text",children:"Report"})]}),u.jsx("button",{className:"ftb-btn",onClick:()=>{ce(!0),it.playClick()},title:"Session Leaderboard",children:u.jsx(yx,{size:15})}),u.jsx("button",{className:"ftb-btn",onClick:()=>{je(!0),it.playClick()},title:"Theory & Derivations",children:u.jsx(Fv,{size:15})}),u.jsx("div",{className:"ftb-divider"}),u.jsx("button",{className:"ftb-theme-btn",onClick:n,title:t==="light"?"Dark mode":"Light mode",children:t==="light"?u.jsx(dM,{size:14}):u.jsx(_M,{size:14})})]})]}),u.jsxs("div",{className:"floating-hole-selector",children:[u.jsxs("div",{className:"fhs-label-row",children:[u.jsx(yM,{size:13}),u.jsx("span",{className:"fhs-title",children:"Knife-Edge Suspension Point"}),u.jsx("span",{className:"fhs-side-a",children:"◂ Side A"}),u.jsx("span",{className:"fhs-cg",children:"C.G."}),u.jsx("span",{className:"fhs-side-b",children:"Side B ▸"})]}),u.jsx("div",{className:"fhs-holes-row",children:c.holeDistancesFromCG.map((Ie,Je)=>{const P=Je===d,W=Je===4,J=we.some(Q=>Q.holeIndex===Je),ee=(Ie*100).toFixed(0);return u.jsxs("button",{className:`fhs-hole-btn ${P?"fhs-active":""} ${W?"fhs-cg-hole":""}`,onClick:()=>{it.playClick(),ze(Je)},title:W?"C.G. — No oscillation (T → ∞)":`Hole #${Je+1}, l = ${Math.abs(Ie).toFixed(2)}m`,children:[u.jsx("div",{className:`fhs-hole-circle ${P?"fhs-hole-selected":""} ${W?"fhs-hole-cg-style":""}`,children:J&&!W&&u.jsx(Ql,{size:8,className:"fhs-check"})}),u.jsx("span",{className:"fhs-hole-label font-mono",children:W?"CG":`H${Je+1}`}),u.jsxs("span",{className:"fhs-hole-dist font-mono",children:[W?"0":`${Ie>0?"+":""}${ee}`,"cm"]})]},Je)})}),d===4&&u.jsxs("div",{className:"fhs-cg-warning",children:[u.jsx(Lp,{size:13})," C.G. selected — No restoring torque. Select another hole."]})]}),u.jsxs("div",{className:`floating-left-panel ${i?"panel-open":"panel-collapsed"}`,children:[u.jsx("button",{className:"panel-toggle-btn left-toggle",onClick:()=>r(!i),children:i?u.jsx(tM,{size:14}):u.jsx(vM,{size:14})}),i&&u.jsxs("div",{className:"flp-content",children:[u.jsxs("div",{className:"flp-section",children:[u.jsxs("div",{className:"flp-section-header",children:[u.jsxs("div",{className:"flp-section-title-row",children:[u.jsx("div",{className:`flp-live-dot ${H?"dot-running":""}`}),u.jsx("span",{className:"flp-section-title",children:"Precision Stopwatch"})]}),u.jsx("button",{className:"flp-icon-btn",onClick:()=>{const Ie=!Te;Me(Ie),it.enabled=Ie},children:Te?u.jsx(SM,{size:13}):u.jsx(MM,{size:13})})]}),u.jsxs("div",{className:"flp-digital-display",children:[u.jsx("span",{className:"flp-time-readout font-mono",children:ur(ne)}),u.jsx("span",{className:"flp-time-label",children:"ELAPSED TIME"})]}),u.jsxs("div",{className:"flp-cycle-bar",children:[u.jsxs("div",{className:"flp-cycle-info",children:[u.jsx("span",{children:"Oscillations"}),u.jsxs("span",{className:"font-mono",children:[u.jsx("strong",{className:"flp-cycle-count",children:C})," / ",D]})]}),u.jsx("div",{className:"flp-progress-track",children:u.jsx("div",{className:"flp-progress-fill",style:{width:`${mo}%`,background:C>=D?"#10b981":"#2563eb"}})})]}),u.jsxs("div",{className:"flp-metrics-row",children:[u.jsxs("div",{className:"flp-metric",children:[u.jsx("span",{className:"flp-metric-label",children:"Period (T)"}),u.jsxs("span",{className:"flp-metric-value font-mono text-emerald",children:[Li,"s"]})]}),u.jsxs("div",{className:"flp-metric",children:[u.jsx("span",{className:"flp-metric-label",children:"Freq (f)"}),u.jsxs("span",{className:"flp-metric-value font-mono text-amber",children:[parseFloat(Li)>0?(1/parseFloat(Li)).toFixed(3):"0.000","Hz"]})]}),u.jsxs("div",{className:"flp-metric",children:[u.jsx("span",{className:"flp-metric-label",children:"Theo. T"}),u.jsxs("span",{className:"flp-metric-value font-mono text-sky",children:[oi<100?oi.toFixed(3):"∞","s"]})]})]}),u.jsxs("div",{className:"flp-controls-row",children:[u.jsx("button",{className:`flp-btn-primary ${H?"btn-stop":"btn-start"}`,onClick:()=>{it.playClick(),lt()},children:H?u.jsxs(u.Fragment,{children:[u.jsx(hM,{size:14})," Stop"]}):u.jsxs(u.Fragment,{children:[u.jsx(bp,{size:14})," Start"]})}),u.jsxs("button",{className:"flp-btn-secondary",onClick:()=>{it.playClick(),Ze()},disabled:ne===0,children:[u.jsx(Cp,{size:13})," Reset"]}),u.jsxs("button",{className:"flp-btn-record",onClick:()=>{it.playSuccessJingle(),ct()},disabled:C===0||H,children:[u.jsx(rM,{size:14})," Record"]})]}),C>=D&&!H&&u.jsxs("div",{className:"flp-trial-ready",children:[u.jsx(xM,{size:13})," 20 oscillations done! Click ",u.jsx("strong",{children:"Record"})," to save trial."]})]}),u.jsxs("div",{className:"flp-section",children:[u.jsxs("div",{className:"flp-section-header",children:[u.jsxs("div",{className:"flp-section-title-row",children:[u.jsx(sM,{size:14,className:"text-cyan"}),u.jsx("span",{className:"flp-section-title",children:"Displacement Control"})]}),u.jsxs("span",{className:"flp-current-angle font-mono",children:[T.toFixed(1),"°"]})]}),ge&&u.jsxs("div",{className:"flp-status-banner flp-safe",children:[u.jsx(Ql,{size:13})," ",u.jsx("span",{children:"Harmonic regime (θ₀ ≤ 5°) — Valid SHM"})]}),k&&u.jsxs("div",{className:"flp-status-banner flp-warning",children:[u.jsx(Lp,{size:13})," ",u.jsxs("span",{children:["Near non-linear (+",De.toFixed(2),"% dilation)"]})]}),Se&&u.jsxs("div",{className:"flp-status-banner flp-danger",children:[u.jsx(gM,{size:13})," ",u.jsxs("span",{children:["NON-LINEAR! (+",De.toFixed(2),"% error)"]})]}),u.jsxs("div",{className:"flp-slider-wrap",children:[u.jsx("input",{type:"range",min:"-25",max:"25",step:"0.5",value:L,onChange:Ie=>{const Je=parseFloat(Ie.target.value);b(Je),F(Je),X(!1),A(0),ve.current.theta=Je*Math.PI/180,ve.current.omega=0},className:`flp-slider ${Se?"slider-danger":k?"slider-warning":"slider-safe"}`}),u.jsxs("div",{className:"flp-slider-labels",children:[u.jsx("span",{children:"-25°"})," ",u.jsx("span",{className:"text-emerald",children:"±5° SHM"})," ",u.jsx("span",{children:"+25°"})]})]}),u.jsx("div",{className:"flp-preset-row",children:[2,4,8,15].map(Ie=>u.jsxs("button",{className:`flp-preset-btn ${Math.abs(L)===Ie?"preset-active":""}`,onClick:()=>{b(Ie),F(Ie),X(!1),A(0),ve.current.theta=Ie*Math.PI/180,ve.current.omega=0,it.playClick()},children:[Ie,"°",Ie===4?" ★":""]},Ie))}),u.jsxs("div",{className:"flp-action-row",children:[u.jsxs("button",{className:"flp-btn-primary btn-start",onClick:()=>{it.playClick(),We()},children:[u.jsx(bp,{size:14})," Release"]}),u.jsx("button",{className:"flp-btn-secondary",onClick:()=>{it.playClick(),qe()},children:"Hold"}),u.jsxs("button",{className:"flp-btn-secondary",onClick:()=>{it.playClick(),ht()},children:[u.jsx(Cp,{size:12})," Zero"]})]})]}),u.jsxs("div",{className:"flp-section flp-section-compact",children:[u.jsx("span",{className:"flp-section-title",style:{fontSize:"10px",marginBottom:"6px"},children:"3D Visual Layers"}),u.jsx("div",{className:"flp-toggle-grid",children:[{label:"Center of Gravity",value:fe,setter:K},{label:"Center of Oscillation",value:$,setter:G},{label:"Equiv. Pendulum",value:he,setter:te},{label:"Motion Trail",value:E,setter:M},{label:"Force Vectors",value:B,setter:oe}].map(({label:Ie,value:Je,setter:P})=>u.jsxs("button",{className:`flp-layer-btn ${Je?"layer-active":""}`,onClick:()=>P(!Je),children:[Je?u.jsx(lM,{size:11}):u.jsx(oM,{size:11})," ",Ie]},Ie))})]})]})]}),u.jsxs("div",{className:`floating-right-panel ${o?"panel-open":"panel-collapsed"}`,children:[u.jsx("button",{className:"panel-toggle-btn right-toggle",onClick:()=>l(!o),children:o?u.jsx(nM,{size:14}):u.jsx(Np,{size:14})}),o&&u.jsxs("div",{className:"frp-content",children:[u.jsxs("div",{className:"frp-section",children:[u.jsx("span",{className:"frp-section-title",children:"Current Configuration"}),u.jsxs("div",{className:"frp-info-grid",children:[u.jsxs("div",{className:"frp-info-item",children:[u.jsx("span",{className:"frp-info-label",children:"Hole"}),u.jsxs("span",{className:"frp-info-value font-mono",children:["#",d+1," ",d===4?"(CG)":v<0?"(A)":"(B)"]})]}),u.jsxs("div",{className:"frp-info-item",children:[u.jsx("span",{className:"frp-info-label",children:"l (dist)"}),u.jsxs("span",{className:"frp-info-value font-mono",children:[Math.abs(v).toFixed(2)," m"]})]}),u.jsxs("div",{className:"frp-info-item",children:[u.jsx("span",{className:"frp-info-label",children:"Mass"}),u.jsxs("span",{className:"frp-info-value font-mono",children:[y.toFixed(3)," kg"]})]}),u.jsxs("div",{className:"frp-info-item",children:[u.jsx("span",{className:"frp-info-label",children:"Length"}),u.jsxs("span",{className:"frp-info-value font-mono",children:[c.length," m"]})]})]})]}),u.jsxs("div",{className:"frp-section",children:[u.jsx("span",{className:"frp-section-title",children:"Calculated Quantities"}),u.jsxs("div",{className:"frp-calc-grid",children:[u.jsxs("div",{className:"frp-calc-item frp-calc-highlight",children:[u.jsx("span",{className:"frp-calc-label",children:"Radius of Gyration (k_G)"}),u.jsxs("span",{className:"frp-calc-value font-mono text-sky",children:[S.toFixed(4)," ",u.jsx("small",{children:"m"})]}),u.jsx("span",{className:"frp-calc-formula",children:"k = √((L²+b²)/12)"})]}),u.jsxs("div",{className:"frp-calc-item frp-calc-highlight",children:[u.jsx("span",{className:"frp-calc-label",children:"I about C.G. (I_G)"}),u.jsxs("span",{className:"frp-calc-value font-mono text-emerald",children:[go.toFixed(4)," ",u.jsx("small",{children:"kg·m²"})]}),u.jsx("span",{className:"frp-calc-formula",children:"I_G = M·k²"})]}),u.jsxs("div",{className:"frp-calc-item frp-calc-highlight",children:[u.jsx("span",{className:"frp-calc-label",children:"I about Pivot (I_P)"}),u.jsxs("span",{className:"frp-calc-value font-mono text-amber",children:[vo.toFixed(4)," ",u.jsx("small",{children:"kg·m²"})]}),u.jsx("span",{className:"frp-calc-formula",children:"I_P = I_G + M·l²"})]}),u.jsxs("div",{className:"frp-calc-item",children:[u.jsx("span",{className:"frp-calc-label",children:"Theoretical Period (T)"}),u.jsxs("span",{className:"frp-calc-value font-mono text-purple",children:[oi<100?oi.toFixed(4):"∞"," ",u.jsx("small",{children:"s"})]}),u.jsx("span",{className:"frp-calc-formula",children:"T = 2π√((k²+l²)/(g·l))"})]})]})]}),u.jsxs("div",{className:"frp-section",children:[u.jsxs("span",{className:"frp-section-title",children:[u.jsx(Np,{size:12})," Energy & Kinematics"]}),u.jsxs("div",{className:"frp-energy-bar",children:[u.jsxs("div",{className:"frp-energy-labels",children:[u.jsxs("span",{className:"text-sky",children:["KE: ",N.kineticEnergy.toFixed(4),"J"]}),u.jsxs("span",{className:"text-emerald",children:["PE: ",N.potentialEnergy.toFixed(4),"J"]})]}),u.jsxs("div",{className:"frp-energy-track",children:[u.jsx("div",{className:"frp-fill-ke",style:{width:`${Math.round(N.kineticEnergy/Math.max(.001,N.totalEnergy)*100)}%`}}),u.jsx("div",{className:"frp-fill-pe",style:{width:`${Math.round(N.potentialEnergy/Math.max(.001,N.totalEnergy)*100)}%`}})]}),u.jsxs("div",{className:"frp-energy-total font-mono",children:["E_total: ",N.totalEnergy.toFixed(4)," J"]})]}),u.jsxs("div",{className:"frp-kin-grid font-mono",children:[u.jsxs("div",{className:"frp-kin-item",children:[u.jsx("span",{children:"ω"}),u.jsxs("span",{className:"text-sky",children:[w.toFixed(2)," rad/s"]})]}),u.jsxs("div",{className:"frp-kin-item",children:[u.jsx("span",{children:"τ"}),u.jsxs("span",{className:"text-rose",children:[le.toFixed(3)," N·m"]})]}),u.jsxs("div",{className:"frp-kin-item",children:[u.jsx("span",{children:"α"}),u.jsxs("span",{className:"text-amber",children:[q.toFixed(2)," rad/s²"]})]})]})]})]})]}),u.jsxs("button",{className:`floating-data-toggle ${s?"data-toggle-active":""}`,onClick:()=>a(!s),children:[u.jsx(zv,{size:16}),u.jsx("span",{children:"T vs l Graph & Data"}),u.jsx("span",{className:"fdt-badge",children:we.length}),s?u.jsx(eM,{size:14}):u.jsx(iM,{size:14})]}),s&&u.jsx("div",{className:"floating-data-panel",children:u.jsx(Lb,{trials:we,onClearTrials:cn,onDeleteTrial:Xr,barConfig:c,currentHoleIndex:d,onSelectHole:ze})}),u.jsx(Pb,{barConfig:c,materialKey:p,onUpdateMeasuredDimensions:Ie=>{h(Je=>({...Je,length:Ie.length,width:Ie.width,thickness:Ie.thickness}))},isOpen:be,onClose:()=>pe(!1)}),u.jsx(Db,{isOpen:Ee,onClose:()=>Le(!1),trials:we,barConfig:c,barMass:y,materialKey:p,onSubmitToLeaderboard:Ie=>{Fe(Ie),ce(!0)}}),u.jsx(Ib,{isOpen:Oe,onClose:()=>ce(!1),currentSubmission:Ue}),u.jsx(Ub,{isOpen:Ge,onClose:()=>je(!1)})]})}document.documentElement.setAttribute("data-theme","light");const Ob=ed.createRoot(document.getElementById("root"));Ob.render(u.jsx(L_.StrictMode,{children:u.jsx(Fb,{})}));
