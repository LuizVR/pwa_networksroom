(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Xr(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const X={},Pt=[],Se=()=>{},tc=()=>!1,nc=/^on[^a-z]/,$n=e=>nc.test(e),Zr=e=>e.startsWith("onUpdate:"),se=Object.assign,es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rc=Object.prototype.hasOwnProperty,H=(e,t)=>rc.call(e,t),N=Array.isArray,Mt=e=>Nn(e)==="[object Map]",ri=e=>Nn(e)==="[object Set]",F=e=>typeof e=="function",ne=e=>typeof e=="string",ts=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",si=e=>Z(e)&&F(e.then)&&F(e.catch),oi=Object.prototype.toString,Nn=e=>oi.call(e),sc=e=>Nn(e).slice(8,-1),ii=e=>Nn(e)==="[object Object]",ns=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},oc=/-(\w)/g,Ne=Bn(e=>e.replace(oc,(t,n)=>n?n.toUpperCase():"")),ic=/\B([A-Z])/g,Ht=Bn(e=>e.replace(ic,"-$1").toLowerCase()),Ln=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),er=Bn(e=>e?`on${Ln(e)}`:""),nn=(e,t)=>!Object.is(e,t),vn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Tn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Sr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Fs;const Cr=()=>Fs||(Fs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rs(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ne(r)?uc(r):rs(r);if(s)for(const o in s)t[o]=s[o]}return t}else{if(ne(e))return e;if(Z(e))return e}}const ac=/;(?![^(]*\))/g,cc=/:([^]+)/,lc=/\/\*[^]*?\*\//g;function uc(e){const t={};return e.replace(lc,"").split(ac).forEach(n=>{if(n){const r=n.split(cc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Fn(e){let t="";if(ne(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=Fn(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const fc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dc=Xr(fc);function ai(e){return!!e||e===""}const Cg=e=>ne(e)?e:e==null?"":N(e)||Z(e)&&(e.toString===oi||!F(e.toString))?JSON.stringify(e,ci,2):String(e),ci=(e,t)=>t&&t.__v_isRef?ci(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ri(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!N(t)&&!ii(t)?String(t):t;let we;class hc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pc(e,t=we){t&&t.active&&t.effects.push(e)}function gc(){return we}const ss=e=>{const t=new Set(e);return t.w=0,t.n=0,t},li=e=>(e.w&st)>0,ui=e=>(e.n&st)>0,mc=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},bc=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];li(s)&&!ui(s)?s.delete(e):t[n++]=s,s.w&=~st,s.n&=~st}t.length=n}},Ar=new WeakMap;let Jt=0,st=1;const Tr=30;let ve;const pt=Symbol(""),Or=Symbol("");class os{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pc(this,r)}run(){if(!this.active)return this.fn();let t=ve,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ve,ve=this,Xe=!0,st=1<<++Jt,Jt<=Tr?mc(this):js(this),this.fn()}finally{Jt<=Tr&&bc(this),st=1<<--Jt,ve=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ve===this?this.deferStop=!0:this.active&&(js(this),this.onStop&&this.onStop(),this.active=!1)}}function js(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const fi=[];function Kt(){fi.push(Xe),Xe=!1}function Ut(){const e=fi.pop();Xe=e===void 0?!0:e}function ge(e,t,n){if(Xe&&ve){let r=Ar.get(e);r||Ar.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=ss()),di(s)}}function di(e,t){let n=!1;Jt<=Tr?ui(e)||(e.n|=st,n=!li(e)):n=!e.has(ve),n&&(e.add(ve),ve.deps.push(e))}function We(e,t,n,r,s,o){const i=Ar.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&N(e)){const c=Number(r);i.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":N(e)?ns(n)&&a.push(i.get("length")):(a.push(i.get(pt)),Mt(e)&&a.push(i.get(Or)));break;case"delete":N(e)||(a.push(i.get(pt)),Mt(e)&&a.push(i.get(Or)));break;case"set":Mt(e)&&a.push(i.get(pt));break}if(a.length===1)a[0]&&xr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);xr(ss(c))}}function xr(e,t){const n=N(e)?e:[...e];for(const r of n)r.computed&&Hs(r);for(const r of n)r.computed||Hs(r)}function Hs(e,t){(e!==ve||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const _c=Xr("__proto__,__v_isRef,__isVue"),hi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ts)),yc=is(),wc=is(!1,!0),vc=is(!0),Ks=Ec();function Ec(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let o=0,i=this.length;o<i;o++)ge(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(U)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kt();const r=U(this)[t].apply(this,n);return Ut(),r}}),e}function Ic(e){const t=U(this);return ge(t,"has",e),t.hasOwnProperty(e)}function is(e=!1,t=!1){return function(r,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&o===(e?t?Fc:_i:t?bi:mi).get(r))return r;const i=N(r);if(!e){if(i&&H(Ks,s))return Reflect.get(Ks,s,o);if(s==="hasOwnProperty")return Ic}const a=Reflect.get(r,s,o);return(ts(s)?hi.has(s):_c(s))||(e||ge(r,"get",s),t)?a:le(a)?i&&ns(s)?a:a.value:Z(a)?e?wi(a):Hn(a):a}}const Sc=pi(),Cc=pi(!0);function pi(e=!1){return function(n,r,s,o){let i=n[r];if(Nt(i)&&le(i)&&!le(s))return!1;if(!e&&(!On(s)&&!Nt(s)&&(i=U(i),s=U(s)),!N(n)&&le(i)&&!le(s)))return i.value=s,!0;const a=N(n)&&ns(r)?Number(r)<n.length:H(n,r),c=Reflect.set(n,r,s,o);return n===U(o)&&(a?nn(s,i)&&We(n,"set",r,s):We(n,"add",r,s)),c}}function Ac(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&We(e,"delete",t,void 0),r}function Tc(e,t){const n=Reflect.has(e,t);return(!ts(t)||!hi.has(t))&&ge(e,"has",t),n}function Oc(e){return ge(e,"iterate",N(e)?"length":pt),Reflect.ownKeys(e)}const gi={get:yc,set:Sc,deleteProperty:Ac,has:Tc,ownKeys:Oc},xc={get:vc,set(e,t){return!0},deleteProperty(e,t){return!0}},Rc=se({},gi,{get:wc,set:Cc}),as=e=>e,jn=e=>Reflect.getPrototypeOf(e);function pn(e,t,n=!1,r=!1){e=e.__v_raw;const s=U(e),o=U(t);n||(t!==o&&ge(s,"get",t),ge(s,"get",o));const{has:i}=jn(s),a=r?as:n?us:rn;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function gn(e,t=!1){const n=this.__v_raw,r=U(n),s=U(e);return t||(e!==s&&ge(r,"has",e),ge(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function mn(e,t=!1){return e=e.__v_raw,!t&&ge(U(e),"iterate",pt),Reflect.get(e,"size",e)}function Us(e){e=U(e);const t=U(this);return jn(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function Ws(e,t){t=U(t);const n=U(this),{has:r,get:s}=jn(n);let o=r.call(n,e);o||(e=U(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?nn(t,i)&&We(n,"set",e,t):We(n,"add",e,t),this}function Vs(e){const t=U(this),{has:n,get:r}=jn(t);let s=n.call(t,e);s||(e=U(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&We(t,"delete",e,void 0),o}function qs(){const e=U(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function bn(e,t){return function(r,s){const o=this,i=o.__v_raw,a=U(i),c=t?as:e?us:rn;return!e&&ge(a,"iterate",pt),i.forEach((l,u)=>r.call(s,c(l),c(u),o))}}function _n(e,t,n){return function(...r){const s=this.__v_raw,o=U(s),i=Mt(o),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=s[e](...r),u=n?as:t?us:rn;return!t&&ge(o,"iterate",c?Or:pt),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:a?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:this}}function Dc(){const e={get(o){return pn(this,o)},get size(){return mn(this)},has:gn,add:Us,set:Ws,delete:Vs,clear:qs,forEach:bn(!1,!1)},t={get(o){return pn(this,o,!1,!0)},get size(){return mn(this)},has:gn,add:Us,set:Ws,delete:Vs,clear:qs,forEach:bn(!1,!0)},n={get(o){return pn(this,o,!0)},get size(){return mn(this,!0)},has(o){return gn.call(this,o,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:bn(!0,!1)},r={get(o){return pn(this,o,!0,!0)},get size(){return mn(this,!0)},has(o){return gn.call(this,o,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=_n(o,!1,!1),n[o]=_n(o,!0,!1),t[o]=_n(o,!1,!0),r[o]=_n(o,!0,!0)}),[e,n,t,r]}const[Pc,Mc,kc,$c]=Dc();function cs(e,t){const n=t?e?$c:kc:e?Mc:Pc;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(H(n,s)&&s in r?n:r,s,o)}const Nc={get:cs(!1,!1)},Bc={get:cs(!1,!0)},Lc={get:cs(!0,!1)},mi=new WeakMap,bi=new WeakMap,_i=new WeakMap,Fc=new WeakMap;function jc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hc(e){return e.__v_skip||!Object.isExtensible(e)?0:jc(sc(e))}function Hn(e){return Nt(e)?e:ls(e,!1,gi,Nc,mi)}function yi(e){return ls(e,!1,Rc,Bc,bi)}function wi(e){return ls(e,!0,xc,Lc,_i)}function ls(e,t,n,r,s){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=Hc(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function kt(e){return Nt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function On(e){return!!(e&&e.__v_isShallow)}function vi(e){return kt(e)||Nt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ei(e){return Tn(e,"__v_skip",!0),e}const rn=e=>Z(e)?Hn(e):e,us=e=>Z(e)?wi(e):e;function Ii(e){Xe&&ve&&(e=U(e),di(e.dep||(e.dep=ss())))}function Si(e,t){e=U(e);const n=e.dep;n&&xr(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function Ci(e){return Ai(e,!1)}function Kc(e){return Ai(e,!0)}function Ai(e,t){return le(e)?e:new Uc(e,t)}class Uc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:rn(t)}get value(){return Ii(this),this._value}set value(t){const n=this.__v_isShallow||On(t)||Nt(t);t=n?t:U(t),nn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:rn(t),Si(this))}}function gt(e){return le(e)?e.value:e}const Wc={get:(e,t,n)=>gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ti(e){return kt(e)?e:new Proxy(e,Wc)}class Vc{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new os(t,()=>{this._dirty||(this._dirty=!0,Si(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=U(this);return Ii(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qc(e,t,n=!1){let r,s;const o=F(e);return o?(r=e,s=Se):(r=e.get,s=e.set),new Vc(r,s,o||!s,n)}function Ze(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){Kn(o,t,n)}return s}function Ce(e,t,n,r){if(F(e)){const o=Ze(e,t,n,r);return o&&si(o)&&o.catch(i=>{Kn(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(Ce(e[o],t,n,r));return s}function Kn(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=n;for(;o;){const l=o.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,i,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Ze(c,null,10,[e,i,a]);return}}zc(e,n,s,r)}function zc(e,t,n,r=!0){console.error(e)}let sn=!1,Rr=!1;const ce=[];let ke=0;const $t=[];let je=null,ut=0;const Oi=Promise.resolve();let fs=null;function xi(e){const t=fs||Oi;return e?t.then(this?e.bind(this):e):t}function Gc(e){let t=ke+1,n=ce.length;for(;t<n;){const r=t+n>>>1;on(ce[r])<e?t=r+1:n=r}return t}function ds(e){(!ce.length||!ce.includes(e,sn&&e.allowRecurse?ke+1:ke))&&(e.id==null?ce.push(e):ce.splice(Gc(e.id),0,e),Ri())}function Ri(){!sn&&!Rr&&(Rr=!0,fs=Oi.then(Pi))}function Yc(e){const t=ce.indexOf(e);t>ke&&ce.splice(t,1)}function Jc(e){N(e)?$t.push(...e):(!je||!je.includes(e,e.allowRecurse?ut+1:ut))&&$t.push(e),Ri()}function zs(e,t=sn?ke+1:0){for(;t<ce.length;t++){const n=ce[t];n&&n.pre&&(ce.splice(t,1),t--,n())}}function Di(e){if($t.length){const t=[...new Set($t)];if($t.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>on(n)-on(r)),ut=0;ut<je.length;ut++)je[ut]();je=null,ut=0}}const on=e=>e.id==null?1/0:e.id,Qc=(e,t)=>{const n=on(e)-on(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Pi(e){Rr=!1,sn=!0,ce.sort(Qc);const t=Se;try{for(ke=0;ke<ce.length;ke++){const n=ce[ke];n&&n.active!==!1&&Ze(n,null,14)}}finally{ke=0,ce.length=0,Di(),sn=!1,fs=null,(ce.length||$t.length)&&Pi()}}function Xc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:g}=r[u]||X;g&&(s=n.map(y=>ne(y)?y.trim():y)),h&&(s=n.map(Sr))}let a,c=r[a=er(t)]||r[a=er(Ne(t))];!c&&o&&(c=r[a=er(Ht(t))]),c&&Ce(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ce(l,e,6,s)}}function Mi(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!F(e)){const c=l=>{const u=Mi(l,t,!0);u&&(a=!0,se(i,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(Z(e)&&r.set(e,null),null):(N(o)?o.forEach(c=>i[c]=null):se(i,o),Z(e)&&r.set(e,i),i)}function Un(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Ht(t))||H(e,t))}let _e=null,Wn=null;function xn(e){const t=_e;return _e=e,Wn=e&&e.type.__scopeId||null,t}function ki(e){Wn=e}function $i(){Wn=null}function xt(e,t=_e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&so(-1);const o=xn(t);let i;try{i=e(...s)}finally{xn(o),r._d&&so(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function tr(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:g,setupState:y,ctx:O,inheritAttrs:R}=e;let L,M;const k=xn(e);try{if(n.shapeFlag&4){const $=s||r;L=Me(u.call($,$,h,o,y,g,O)),M=c}else{const $=t;L=Me($.length>1?$(o,{attrs:c,slots:a,emit:l}):$(o,null)),M=t.props?c:Zc(c)}}catch($){Zt.length=0,Kn($,e,1),L=te(an)}let K=L;if(M&&R!==!1){const $=Object.keys(M),{shapeFlag:ie}=K;$.length&&ie&7&&(i&&$.some(Zr)&&(M=el(M,i)),K=Bt(K,M))}return n.dirs&&(K=Bt(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),L=K,xn(k),L}const Zc=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},el=(e,t)=>{const n={};for(const r in e)(!Zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tl(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Gs(r,i,l):!!i;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(i[g]!==r[g]&&!Un(l,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Gs(r,i,l):!0:!!i;return!1}function Gs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!Un(n,o))return!0}return!1}function nl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const rl=e=>e.__isSuspense;function sl(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):Jc(e)}const yn={};function En(e,t,n){return Ni(e,t,n)}function Ni(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=X){var a;const c=gc()===((a=oe)==null?void 0:a.scope)?oe:null;let l,u=!1,h=!1;if(le(e)?(l=()=>e.value,u=On(e)):kt(e)?(l=()=>e,r=!0):N(e)?(h=!0,u=e.some($=>kt($)||On($)),l=()=>e.map($=>{if(le($))return $.value;if(kt($))return dt($);if(F($))return Ze($,c,2)})):F(e)?t?l=()=>Ze(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return g&&g(),Ce(e,c,3,[y])}:l=Se,t&&r){const $=l;l=()=>dt($())}let g,y=$=>{g=k.onStop=()=>{Ze($,c,4)}},O;if(ln)if(y=Se,t?n&&Ce(t,c,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const $=Zl();O=$.__watcherHandles||($.__watcherHandles=[])}else return Se;let R=h?new Array(e.length).fill(yn):yn;const L=()=>{if(k.active)if(t){const $=k.run();(r||u||(h?$.some((ie,fe)=>nn(ie,R[fe])):nn($,R)))&&(g&&g(),Ce(t,c,3,[$,R===yn?void 0:h&&R[0]===yn?[]:R,y]),R=$)}else k.run()};L.allowRecurse=!!t;let M;s==="sync"?M=L:s==="post"?M=()=>pe(L,c&&c.suspense):(L.pre=!0,c&&(L.id=c.uid),M=()=>ds(L));const k=new os(l,M);t?n?L():R=k.run():s==="post"?pe(k.run.bind(k),c&&c.suspense):k.run();const K=()=>{k.stop(),c&&c.scope&&es(c.scope.effects,k)};return O&&O.push(K),K}function ol(e,t,n){const r=this.proxy,s=ne(e)?e.includes(".")?Bi(r,e):()=>r[e]:e.bind(r,r);let o;F(t)?o=t:(o=t.handler,n=t);const i=oe;Lt(this);const a=Ni(s,o.bind(r),n);return i?Lt(i):mt(),a}function Bi(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function dt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))dt(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)dt(e[n],t);else if(ri(e)||Mt(e))e.forEach(n=>{dt(n,t)});else if(ii(e))for(const n in e)dt(e[n],t);return e}function Ag(e,t){const n=_e;if(n===null)return e;const r=Gn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,c,l=X]=t[o];i&&(F(i)&&(i={mounted:i,updated:i}),i.deep&&dt(a),s.push({dir:i,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function at(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(Kt(),Ce(c,n,8,[e.el,a,e,t]),Ut())}}function Li(e,t){return F(e)?(()=>se({name:e.name},t,{setup:e}))():e}const In=e=>!!e.type.__asyncLoader,Fi=e=>e.type.__isKeepAlive;function il(e,t){ji(e,"a",t)}function al(e,t){ji(e,"da",t)}function ji(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Vn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Fi(s.parent.vnode)&&cl(r,t,n,s),s=s.parent}}function cl(e,t,n,r){const s=Vn(t,e,r,!0);Hi(()=>{es(r[t],s)},n)}function Vn(e,t,n=oe,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Kt(),Lt(n);const a=Ce(t,n,e,i);return mt(),Ut(),a});return r?s.unshift(o):s.push(o),o}}const Ve=e=>(t,n=oe)=>(!ln||e==="sp")&&Vn(e,(...r)=>t(...r),n),ll=Ve("bm"),ul=Ve("m"),fl=Ve("bu"),dl=Ve("u"),hl=Ve("bum"),Hi=Ve("um"),pl=Ve("sp"),gl=Ve("rtg"),ml=Ve("rtc");function bl(e,t=oe){Vn("ec",e,t)}const Ki="components";function Ui(e,t){return yl(Ki,e,!0,t)||e}const _l=Symbol.for("v-ndc");function yl(e,t,n=!0,r=!1){const s=_e||oe;if(s){const o=s.type;if(e===Ki){const a=Jl(o,!1);if(a&&(a===t||a===Ne(t)||a===Ln(Ne(t))))return o}const i=Ys(s[e]||o[e],t)||Ys(s.appContext[e],t);return!i&&r?o:i}}function Ys(e,t){return e&&(e[t]||e[Ne(t)]||e[Ln(Ne(t))])}function Tg(e,t,n,r){let s;const o=n&&n[r];if(N(e)||ne(e)){s=new Array(e.length);for(let i=0,a=e.length;i<a;i++)s[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,o&&o[i])}else if(Z(e))if(e[Symbol.iterator])s=Array.from(e,(i,a)=>t(i,a,void 0,o&&o[a]));else{const i=Object.keys(e);s=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const l=i[a];s[a]=t(e[l],l,a,o&&o[a])}}else s=[];return n&&(n[r]=s),s}const Dr=e=>e?Zi(e)?Gn(e)||e.proxy:Dr(e.parent):null,Xt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dr(e.parent),$root:e=>Dr(e.root),$emit:e=>e.emit,$options:e=>hs(e),$forceUpdate:e=>e.f||(e.f=()=>ds(e.update)),$nextTick:e=>e.n||(e.n=xi.bind(e.proxy)),$watch:e=>ol.bind(e)}),nr=(e,t)=>e!==X&&!e.__isScriptSetup&&H(e,t),wl={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(nr(r,t))return i[t]=1,r[t];if(s!==X&&H(s,t))return i[t]=2,s[t];if((l=e.propsOptions[0])&&H(l,t))return i[t]=3,o[t];if(n!==X&&H(n,t))return i[t]=4,n[t];Pr&&(i[t]=0)}}const u=Xt[t];let h,g;if(u)return t==="$attrs"&&ge(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==X&&H(n,t))return i[t]=4,n[t];if(g=c.config.globalProperties,H(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return nr(s,t)?(s[t]=n,!0):r!==X&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==X&&H(e,i)||nr(t,i)||(a=o[0])&&H(a,i)||H(r,i)||H(Xt,i)||H(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Js(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Pr=!0;function vl(e){const t=hs(e),n=e.proxy,r=e.ctx;Pr=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:y,updated:O,activated:R,deactivated:L,beforeDestroy:M,beforeUnmount:k,destroyed:K,unmounted:$,render:ie,renderTracked:fe,renderTriggered:Te,errorCaptured:Be,serverPrefetch:Et,expose:Oe,inheritAttrs:qe,components:it,directives:xe,filters:Vt}=t;if(l&&El(l,r,null),i)for(const G in i){const W=i[G];F(W)&&(r[G]=W.bind(n))}if(s){const G=s.call(n,n);Z(G)&&(e.data=Hn(G))}if(Pr=!0,o)for(const G in o){const W=o[G],Le=F(W)?W.bind(n,n):F(W.get)?W.get.bind(n,n):Se,ze=!F(W)&&F(W.set)?W.set.bind(n):Se,Re=Ee({get:Le,set:ze});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Re.value,set:he=>Re.value=he})}if(a)for(const G in a)Wi(a[G],r,n,G);if(c){const G=F(c)?c.call(n):c;Reflect.ownKeys(G).forEach(W=>{Sn(W,G[W])})}u&&Qs(u,e,"c");function re(G,W){N(W)?W.forEach(Le=>G(Le.bind(n))):W&&G(W.bind(n))}if(re(ll,h),re(ul,g),re(fl,y),re(dl,O),re(il,R),re(al,L),re(bl,Be),re(ml,fe),re(gl,Te),re(hl,k),re(Hi,$),re(pl,Et),N(Oe))if(Oe.length){const G=e.exposed||(e.exposed={});Oe.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:Le=>n[W]=Le})})}else e.exposed||(e.exposed={});ie&&e.render===Se&&(e.render=ie),qe!=null&&(e.inheritAttrs=qe),it&&(e.components=it),xe&&(e.directives=xe)}function El(e,t,n=Se){N(e)&&(e=Mr(e));for(const r in e){const s=e[r];let o;Z(s)?"default"in s?o=$e(s.from||r,s.default,!0):o=$e(s.from||r):o=$e(s),le(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function Qs(e,t,n){Ce(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wi(e,t,n,r){const s=r.includes(".")?Bi(n,r):()=>n[r];if(ne(e)){const o=t[e];F(o)&&En(s,o)}else if(F(e))En(s,e.bind(n));else if(Z(e))if(N(e))e.forEach(o=>Wi(o,t,n,r));else{const o=F(e.handler)?e.handler.bind(n):t[e.handler];F(o)&&En(s,o,e)}}function hs(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Rn(c,l,i,!0)),Rn(c,t,i)),Z(t)&&o.set(t,c),c}function Rn(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Rn(e,o,n,!0),s&&s.forEach(i=>Rn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Il[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Il={data:Xs,props:Zs,emits:Zs,methods:Qt,computed:Qt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:Qt,directives:Qt,watch:Cl,provide:Xs,inject:Sl};function Xs(e,t){return t?e?function(){return se(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function Sl(e,t){return Qt(Mr(e),Mr(t))}function Mr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?se(Object.create(null),e,t):t}function Zs(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:se(Object.create(null),Js(e),Js(t??{})):t}function Cl(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function Vi(){return{app:null,config:{isNativeTag:tc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Al=0;function Tl(e,t){return function(r,s=null){F(r)||(r=se({},r)),s!=null&&!Z(s)&&(s=null);const o=Vi(),i=new Set;let a=!1;const c=o.app={_uid:Al++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:eu,get config(){return o.config},set config(l){},use(l,...u){return i.has(l)||(l&&F(l.install)?(i.add(l),l.install(c,...u)):F(l)&&(i.add(l),l(c,...u))),c},mixin(l){return o.mixins.includes(l)||o.mixins.push(l),c},component(l,u){return u?(o.components[l]=u,c):o.components[l]},directive(l,u){return u?(o.directives[l]=u,c):o.directives[l]},mount(l,u,h){if(!a){const g=te(r,s);return g.appContext=o,u&&t?t(g,l):e(g,l,h),a=!0,c._container=l,l.__vue_app__=c,Gn(g.component)||g.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return o.provides[l]=u,c},runWithContext(l){Dn=c;try{return l()}finally{Dn=null}}};return c}}let Dn=null;function Sn(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function $e(e,t,n=!1){const r=oe||_e;if(r||Dn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&F(t)?t.call(r&&r.proxy):t}}function Ol(e,t,n,r=!1){const s={},o={};Tn(o,zn,1),e.propsDefaults=Object.create(null),qi(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:yi(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function xl(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=U(s),[c]=e.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(Un(e.emitsOptions,g))continue;const y=t[g];if(c)if(H(o,g))y!==o[g]&&(o[g]=y,l=!0);else{const O=Ne(g);s[O]=kr(c,a,O,y,e,!1)}else y!==o[g]&&(o[g]=y,l=!0)}}}else{qi(e,t,s,o)&&(l=!0);let u;for(const h in a)(!t||!H(t,h)&&((u=Ht(h))===h||!H(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=kr(c,a,h,void 0,e,!0)):delete s[h]);if(o!==a)for(const h in o)(!t||!H(t,h))&&(delete o[h],l=!0)}l&&We(e,"set","$attrs")}function qi(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(wn(c))continue;const l=t[c];let u;s&&H(s,u=Ne(c))?!o||!o.includes(u)?n[u]=l:(a||(a={}))[u]=l:Un(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,i=!0)}if(o){const c=U(n),l=a||X;for(let u=0;u<o.length;u++){const h=o[u];n[h]=kr(s,c,h,l[h],e,!H(l,h))}}return i}function kr(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=H(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&F(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Lt(s),r=l[n]=c.call(null,t),mt())}else r=c}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function zi(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let c=!1;if(!F(e)){const u=h=>{c=!0;const[g,y]=zi(h,t,!0);se(i,g),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!c)return Z(e)&&r.set(e,Pt),Pt;if(N(o))for(let u=0;u<o.length;u++){const h=Ne(o[u]);eo(h)&&(i[h]=X)}else if(o)for(const u in o){const h=Ne(u);if(eo(h)){const g=o[u],y=i[h]=N(g)||F(g)?{type:g}:se({},g);if(y){const O=ro(Boolean,y.type),R=ro(String,y.type);y[0]=O>-1,y[1]=R<0||O<R,(O>-1||H(y,"default"))&&a.push(h)}}}const l=[i,a];return Z(e)&&r.set(e,l),l}function eo(e){return e[0]!=="$"}function to(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function no(e,t){return to(e)===to(t)}function ro(e,t){return N(t)?t.findIndex(n=>no(n,e)):F(t)&&no(t,e)?0:-1}const Gi=e=>e[0]==="_"||e==="$stable",ps=e=>N(e)?e.map(Me):[Me(e)],Rl=(e,t,n)=>{if(t._n)return t;const r=xt((...s)=>ps(t(...s)),n);return r._c=!1,r},Yi=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Gi(s))continue;const o=e[s];if(F(o))t[s]=Rl(s,o,r);else if(o!=null){const i=ps(o);t[s]=()=>i}}},Ji=(e,t)=>{const n=ps(t);e.slots.default=()=>n},Dl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Tn(t,"_",n)):Yi(t,e.slots={})}else e.slots={},t&&Ji(e,t);Tn(e.slots,zn,1)},Pl=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=X;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(se(s,t),!n&&a===1&&delete s._):(o=!t.$stable,Yi(t,s)),i=t}else t&&(Ji(e,t),i={default:1});if(o)for(const a in s)!Gi(a)&&!(a in i)&&delete s[a]};function $r(e,t,n,r,s=!1){if(N(e)){e.forEach((g,y)=>$r(g,t&&(N(t)?t[y]:t),n,r,s));return}if(In(r)&&!s)return;const o=r.shapeFlag&4?Gn(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:c}=e,l=t&&t.r,u=a.refs===X?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ne(l)?(u[l]=null,H(h,l)&&(h[l]=null)):le(l)&&(l.value=null)),F(c))Ze(c,a,12,[i,u]);else{const g=ne(c),y=le(c);if(g||y){const O=()=>{if(e.f){const R=g?H(h,c)?h[c]:u[c]:c.value;s?N(R)&&es(R,o):N(R)?R.includes(o)||R.push(o):g?(u[c]=[o],H(h,c)&&(h[c]=u[c])):(c.value=[o],e.k&&(u[e.k]=c.value))}else g?(u[c]=i,H(h,c)&&(h[c]=i)):y&&(c.value=i,e.k&&(u[e.k]=i))};i?(O.id=-1,pe(O,n)):O()}}}const pe=sl;function Ml(e){return kl(e)}function kl(e,t){const n=Cr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:y=Se,insertStaticContent:O}=e,R=(f,d,p,m=null,_=null,w=null,C=!1,E=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!zt(f,d)&&(m=b(f),he(f,_,w,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:v,ref:D,shapeFlag:T}=d;switch(v){case qn:L(f,d,p,m);break;case an:M(f,d,p,m);break;case Cn:f==null&&k(d,p,m,C);break;case Ke:it(f,d,p,m,_,w,C,E,I);break;default:T&1?ie(f,d,p,m,_,w,C,E,I):T&6?xe(f,d,p,m,_,w,C,E,I):(T&64||T&128)&&v.process(f,d,p,m,_,w,C,E,I,S)}D!=null&&_&&$r(D,f&&f.ref,w,d||f,!d)},L=(f,d,p,m)=>{if(f==null)r(d.el=a(d.children),p,m);else{const _=d.el=f.el;d.children!==f.children&&l(_,d.children)}},M=(f,d,p,m)=>{f==null?r(d.el=c(d.children||""),p,m):d.el=f.el},k=(f,d,p,m)=>{[f.el,f.anchor]=O(f.children,d,p,m,f.el,f.anchor)},K=({el:f,anchor:d},p,m)=>{let _;for(;f&&f!==d;)_=g(f),r(f,p,m),f=_;r(d,p,m)},$=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},ie=(f,d,p,m,_,w,C,E,I)=>{C=C||d.type==="svg",f==null?fe(d,p,m,_,w,C,E,I):Et(f,d,_,w,C,E,I)},fe=(f,d,p,m,_,w,C,E)=>{let I,v;const{type:D,props:T,shapeFlag:P,transition:B,dirs:j}=f;if(I=f.el=i(f.type,w,T&&T.is,T),P&8?u(I,f.children):P&16&&Be(f.children,I,null,m,_,w&&D!=="foreignObject",C,E),j&&at(f,null,m,"created"),Te(I,f,f.scopeId,C,m),T){for(const z in T)z!=="value"&&!wn(z)&&o(I,z,null,T[z],w,f.children,m,_,ae);"value"in T&&o(I,"value",null,T.value),(v=T.onVnodeBeforeMount)&&Pe(v,m,f)}j&&at(f,null,m,"beforeMount");const J=(!_||_&&!_.pendingBranch)&&B&&!B.persisted;J&&B.beforeEnter(I),r(I,d,p),((v=T&&T.onVnodeMounted)||J||j)&&pe(()=>{v&&Pe(v,m,f),J&&B.enter(I),j&&at(f,null,m,"mounted")},_)},Te=(f,d,p,m,_)=>{if(p&&y(f,p),m)for(let w=0;w<m.length;w++)y(f,m[w]);if(_){let w=_.subTree;if(d===w){const C=_.vnode;Te(f,C,C.scopeId,C.slotScopeIds,_.parent)}}},Be=(f,d,p,m,_,w,C,E,I=0)=>{for(let v=I;v<f.length;v++){const D=f[v]=E?Je(f[v]):Me(f[v]);R(null,D,d,p,m,_,w,C,E)}},Et=(f,d,p,m,_,w,C)=>{const E=d.el=f.el;let{patchFlag:I,dynamicChildren:v,dirs:D}=d;I|=f.patchFlag&16;const T=f.props||X,P=d.props||X;let B;p&&ct(p,!1),(B=P.onVnodeBeforeUpdate)&&Pe(B,p,d,f),D&&at(d,f,p,"beforeUpdate"),p&&ct(p,!0);const j=_&&d.type!=="foreignObject";if(v?Oe(f.dynamicChildren,v,E,p,m,j,w):C||W(f,d,E,null,p,m,j,w,!1),I>0){if(I&16)qe(E,d,T,P,p,m,_);else if(I&2&&T.class!==P.class&&o(E,"class",null,P.class,_),I&4&&o(E,"style",T.style,P.style,_),I&8){const J=d.dynamicProps;for(let z=0;z<J.length;z++){const ee=J[z],ye=T[ee],At=P[ee];(At!==ye||ee==="value")&&o(E,ee,ye,At,_,f.children,p,m,ae)}}I&1&&f.children!==d.children&&u(E,d.children)}else!C&&v==null&&qe(E,d,T,P,p,m,_);((B=P.onVnodeUpdated)||D)&&pe(()=>{B&&Pe(B,p,d,f),D&&at(d,f,p,"updated")},m)},Oe=(f,d,p,m,_,w,C)=>{for(let E=0;E<d.length;E++){const I=f[E],v=d[E],D=I.el&&(I.type===Ke||!zt(I,v)||I.shapeFlag&70)?h(I.el):p;R(I,v,D,null,m,_,w,C,!0)}},qe=(f,d,p,m,_,w,C)=>{if(p!==m){if(p!==X)for(const E in p)!wn(E)&&!(E in m)&&o(f,E,p[E],null,C,d.children,_,w,ae);for(const E in m){if(wn(E))continue;const I=m[E],v=p[E];I!==v&&E!=="value"&&o(f,E,v,I,C,d.children,_,w,ae)}"value"in m&&o(f,"value",p.value,m.value)}},it=(f,d,p,m,_,w,C,E,I)=>{const v=d.el=f?f.el:a(""),D=d.anchor=f?f.anchor:a("");let{patchFlag:T,dynamicChildren:P,slotScopeIds:B}=d;B&&(E=E?E.concat(B):B),f==null?(r(v,p,m),r(D,p,m),Be(d.children,p,D,_,w,C,E,I)):T>0&&T&64&&P&&f.dynamicChildren?(Oe(f.dynamicChildren,P,p,_,w,C,E),(d.key!=null||_&&d===_.subTree)&&Qi(f,d,!0)):W(f,d,p,D,_,w,C,E,I)},xe=(f,d,p,m,_,w,C,E,I)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?_.ctx.activate(d,p,m,C,I):Vt(d,p,m,_,w,C,I):It(f,d,I)},Vt=(f,d,p,m,_,w,C)=>{const E=f.component=Vl(f,m,_);if(Fi(f)&&(E.ctx.renderer=S),ql(E),E.asyncDep){if(_&&_.registerDep(E,re),!f.el){const I=E.subTree=te(an);M(null,I,d,p)}return}re(E,f,d,p,_,w,C)},It=(f,d,p)=>{const m=d.component=f.component;if(tl(f,d,p))if(m.asyncDep&&!m.asyncResolved){G(m,d,p);return}else m.next=d,Yc(m.update),m.update();else d.el=f.el,m.vnode=d},re=(f,d,p,m,_,w,C)=>{const E=()=>{if(f.isMounted){let{next:D,bu:T,u:P,parent:B,vnode:j}=f,J=D,z;ct(f,!1),D?(D.el=j.el,G(f,D,C)):D=j,T&&vn(T),(z=D.props&&D.props.onVnodeBeforeUpdate)&&Pe(z,B,D,j),ct(f,!0);const ee=tr(f),ye=f.subTree;f.subTree=ee,R(ye,ee,h(ye.el),b(ye),f,_,w),D.el=ee.el,J===null&&nl(f,ee.el),P&&pe(P,_),(z=D.props&&D.props.onVnodeUpdated)&&pe(()=>Pe(z,B,D,j),_)}else{let D;const{el:T,props:P}=d,{bm:B,m:j,parent:J}=f,z=In(d);if(ct(f,!1),B&&vn(B),!z&&(D=P&&P.onVnodeBeforeMount)&&Pe(D,J,d),ct(f,!0),T&&V){const ee=()=>{f.subTree=tr(f),V(T,f.subTree,f,_,null)};z?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=tr(f);R(null,ee,p,m,f,_,w),d.el=ee.el}if(j&&pe(j,_),!z&&(D=P&&P.onVnodeMounted)){const ee=d;pe(()=>Pe(D,J,ee),_)}(d.shapeFlag&256||J&&In(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&pe(f.a,_),f.isMounted=!0,d=p=m=null}},I=f.effect=new os(E,()=>ds(v),f.scope),v=f.update=()=>I.run();v.id=f.uid,ct(f,!0),v()},G=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,xl(f,d.props,m,p),Pl(f,d.children,p),Kt(),zs(),Ut()},W=(f,d,p,m,_,w,C,E,I=!1)=>{const v=f&&f.children,D=f?f.shapeFlag:0,T=d.children,{patchFlag:P,shapeFlag:B}=d;if(P>0){if(P&128){ze(v,T,p,m,_,w,C,E,I);return}else if(P&256){Le(v,T,p,m,_,w,C,E,I);return}}B&8?(D&16&&ae(v,_,w),T!==v&&u(p,T)):D&16?B&16?ze(v,T,p,m,_,w,C,E,I):ae(v,_,w,!0):(D&8&&u(p,""),B&16&&Be(T,p,m,_,w,C,E,I))},Le=(f,d,p,m,_,w,C,E,I)=>{f=f||Pt,d=d||Pt;const v=f.length,D=d.length,T=Math.min(v,D);let P;for(P=0;P<T;P++){const B=d[P]=I?Je(d[P]):Me(d[P]);R(f[P],B,p,null,_,w,C,E,I)}v>D?ae(f,_,w,!0,!1,T):Be(d,p,m,_,w,C,E,I,T)},ze=(f,d,p,m,_,w,C,E,I)=>{let v=0;const D=d.length;let T=f.length-1,P=D-1;for(;v<=T&&v<=P;){const B=f[v],j=d[v]=I?Je(d[v]):Me(d[v]);if(zt(B,j))R(B,j,p,null,_,w,C,E,I);else break;v++}for(;v<=T&&v<=P;){const B=f[T],j=d[P]=I?Je(d[P]):Me(d[P]);if(zt(B,j))R(B,j,p,null,_,w,C,E,I);else break;T--,P--}if(v>T){if(v<=P){const B=P+1,j=B<D?d[B].el:m;for(;v<=P;)R(null,d[v]=I?Je(d[v]):Me(d[v]),p,j,_,w,C,E,I),v++}}else if(v>P)for(;v<=T;)he(f[v],_,w,!0),v++;else{const B=v,j=v,J=new Map;for(v=j;v<=P;v++){const be=d[v]=I?Je(d[v]):Me(d[v]);be.key!=null&&J.set(be.key,v)}let z,ee=0;const ye=P-j+1;let At=!1,Ns=0;const qt=new Array(ye);for(v=0;v<ye;v++)qt[v]=0;for(v=B;v<=T;v++){const be=f[v];if(ee>=ye){he(be,_,w,!0);continue}let De;if(be.key!=null)De=J.get(be.key);else for(z=j;z<=P;z++)if(qt[z-j]===0&&zt(be,d[z])){De=z;break}De===void 0?he(be,_,w,!0):(qt[De-j]=v+1,De>=Ns?Ns=De:At=!0,R(be,d[De],p,null,_,w,C,E,I),ee++)}const Bs=At?$l(qt):Pt;for(z=Bs.length-1,v=ye-1;v>=0;v--){const be=j+v,De=d[be],Ls=be+1<D?d[be+1].el:m;qt[v]===0?R(null,De,p,Ls,_,w,C,E,I):At&&(z<0||v!==Bs[z]?Re(De,p,Ls,2):z--)}}},Re=(f,d,p,m,_=null)=>{const{el:w,type:C,transition:E,children:I,shapeFlag:v}=f;if(v&6){Re(f.component.subTree,d,p,m);return}if(v&128){f.suspense.move(d,p,m);return}if(v&64){C.move(f,d,p,S);return}if(C===Ke){r(w,d,p);for(let T=0;T<I.length;T++)Re(I[T],d,p,m);r(f.anchor,d,p);return}if(C===Cn){K(f,d,p);return}if(m!==2&&v&1&&E)if(m===0)E.beforeEnter(w),r(w,d,p),pe(()=>E.enter(w),_);else{const{leave:T,delayLeave:P,afterLeave:B}=E,j=()=>r(w,d,p),J=()=>{T(w,()=>{j(),B&&B()})};P?P(w,j,J):J()}else r(w,d,p)},he=(f,d,p,m=!1,_=!1)=>{const{type:w,props:C,ref:E,children:I,dynamicChildren:v,shapeFlag:D,patchFlag:T,dirs:P}=f;if(E!=null&&$r(E,null,p,f,!0),D&256){d.ctx.deactivate(f);return}const B=D&1&&P,j=!In(f);let J;if(j&&(J=C&&C.onVnodeBeforeUnmount)&&Pe(J,d,f),D&6)hn(f.component,p,m);else{if(D&128){f.suspense.unmount(p,m);return}B&&at(f,null,d,"beforeUnmount"),D&64?f.type.remove(f,d,p,_,S,m):v&&(w!==Ke||T>0&&T&64)?ae(v,d,p,!1,!0):(w===Ke&&T&384||!_&&D&16)&&ae(I,d,p),m&&St(f)}(j&&(J=C&&C.onVnodeUnmounted)||B)&&pe(()=>{J&&Pe(J,d,f),B&&at(f,null,d,"unmounted")},p)},St=f=>{const{type:d,el:p,anchor:m,transition:_}=f;if(d===Ke){Ct(p,m);return}if(d===Cn){$(f);return}const w=()=>{s(p),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:E}=_,I=()=>C(p,w);E?E(f.el,w,I):I()}else w()},Ct=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},hn=(f,d,p)=>{const{bum:m,scope:_,update:w,subTree:C,um:E}=f;m&&vn(m),_.stop(),w&&(w.active=!1,he(C,f,d,p)),E&&pe(E,d),pe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ae=(f,d,p,m=!1,_=!1,w=0)=>{for(let C=w;C<f.length;C++)he(f[C],d,p,m,_)},b=f=>f.shapeFlag&6?b(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),A=(f,d,p)=>{f==null?d._vnode&&he(d._vnode,null,null,!0):R(d._vnode||null,f,d,null,null,null,p),zs(),Di(),d._vnode=f},S={p:R,um:he,m:Re,r:St,mt:Vt,mc:Be,pc:W,pbc:Oe,n:b,o:e};let x,V;return t&&([x,V]=t(S)),{render:A,hydrate:x,createApp:Tl(A,x)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Qi(e,t,n=!1){const r=e.children,s=t.children;if(N(r)&&N(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Je(s[o]),a.el=i.el),n||Qi(i,a)),a.type===qn&&(a.el=i.el)}}function $l(e){const t=e.slice(),n=[0];let r,s,o,i,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<l?o=a+1:i=a;l<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Nl=e=>e.__isTeleport,Ke=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),Cn=Symbol.for("v-stc"),Zt=[];let Ie=null;function gs(e=!1){Zt.push(Ie=e?null:[])}function Bl(){Zt.pop(),Ie=Zt[Zt.length-1]||null}let cn=1;function so(e){cn+=e}function Ll(e){return e.dynamicChildren=cn>0?Ie||Pt:null,Bl(),cn>0&&Ie&&Ie.push(e),e}function ms(e,t,n,r,s,o){return Ll(Y(e,t,n,r,s,o,!0))}function Nr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const zn="__vInternal",Xi=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||le(e)||F(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,r=0,s=null,o=e===Ke?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xi(t),ref:t&&An(t),scopeId:Wn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return a?(bs(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=ne(n)?8:16),cn>0&&!i&&Ie&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ie.push(c),c}const te=Fl;function Fl(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===_l)&&(e=an),Nr(e)){const a=Bt(e,t,!0);return n&&bs(a,n),cn>0&&!o&&Ie&&(a.shapeFlag&6?Ie[Ie.indexOf(e)]=a:Ie.push(a)),a.patchFlag|=-2,a}if(Ql(e)&&(e=e.__vccOpts),t){t=jl(t);let{class:a,style:c}=t;a&&!ne(a)&&(t.class=Fn(a)),Z(c)&&(vi(c)&&!N(c)&&(c=se({},c)),t.style=rs(c))}const i=ne(e)?1:rl(e)?128:Nl(e)?64:Z(e)?4:F(e)?2:0;return Y(e,t,n,r,s,i,o,!0)}function jl(e){return e?vi(e)||zn in e?se({},e):e:null}function Bt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?Kl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Xi(a),ref:t&&t.ref?n&&s?N(s)?s.concat(An(t)):[s,An(t)]:An(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ke?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Hl(e=" ",t=0){return te(qn,null,e,t)}function Og(e,t){const n=te(Cn,null,e);return n.staticCount=t,n}function Me(e){return e==null||typeof e=="boolean"?te(an):N(e)?te(Ke,null,e.slice()):typeof e=="object"?Je(e):te(qn,null,String(e))}function Je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function bs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),bs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(zn in t)?t._ctx=_e:s===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[Hl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Fn([t.class,r.class]));else if(s==="style")t.style=rs([t.style,r.style]);else if($n(s)){const o=t[s],i=r[s];i&&o!==i&&!(N(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Pe(e,t,n,r=null){Ce(e,t,7,[n,r])}const Ul=Vi();let Wl=0;function Vl(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ul,o={uid:Wl++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new hc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zi(r,s),emitsOptions:Mi(r,s),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Xc.bind(null,o),e.ce&&e.ce(o),o}let oe=null,_s,Tt,oo="__VUE_INSTANCE_SETTERS__";(Tt=Cr()[oo])||(Tt=Cr()[oo]=[]),Tt.push(e=>oe=e),_s=e=>{Tt.length>1?Tt.forEach(t=>t(e)):Tt[0](e)};const Lt=e=>{_s(e),e.scope.on()},mt=()=>{oe&&oe.scope.off(),_s(null)};function Zi(e){return e.vnode.shapeFlag&4}let ln=!1;function ql(e,t=!1){ln=t;const{props:n,children:r}=e.vnode,s=Zi(e);Ol(e,n,s,t),Dl(e,r);const o=s?zl(e,t):void 0;return ln=!1,o}function zl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ei(new Proxy(e.ctx,wl));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Yl(e):null;Lt(e),Kt();const o=Ze(r,e,0,[e.props,s]);if(Ut(),mt(),si(o)){if(o.then(mt,mt),t)return o.then(i=>{io(e,i,t)}).catch(i=>{Kn(i,e,0)});e.asyncDep=o}else io(e,o,t)}else ea(e,t)}function io(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Ti(t)),ea(e,n)}let ao;function ea(e,t,n){const r=e.type;if(!e.render){if(!t&&ao&&!r.render){const s=r.template||hs(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=se(se({isCustomElement:o,delimiters:a},i),c);r.render=ao(s,l)}}e.render=r.render||Se}Lt(e),Kt(),vl(e),Ut(),mt()}function Gl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}}))}function Yl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Gl(e)},slots:e.slots,emit:e.emit,expose:t}}function Gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ti(Ei(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Xt)return Xt[n](e)},has(t,n){return n in t||n in Xt}}))}function Jl(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function Ql(e){return F(e)&&"__vccOpts"in e}const Ee=(e,t)=>qc(e,t,ln);function ta(e,t,n){const r=arguments.length;return r===2?Z(t)&&!N(t)?Nr(t)?te(e,null,[t]):te(e,t):te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nr(n)&&(n=[n]),te(e,t,n))}const Xl=Symbol.for("v-scx"),Zl=()=>$e(Xl),eu="3.3.4",tu="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,co=ft&&ft.createElement("template"),nu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?ft.createElementNS(tu,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{co.innerHTML=r?`<svg>${e}</svg>`:e;const a=co.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ru(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function su(e,t,n){const r=e.style,s=ne(n);if(n&&!s){if(t&&!ne(t))for(const o in t)n[o]==null&&Br(r,o,"");for(const o in n)Br(r,o,n[o])}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const lo=/\s*!important$/;function Br(e,t,n){if(N(n))n.forEach(r=>Br(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ou(e,t);lo.test(n)?e.setProperty(Ht(r),n.replace(lo,""),"important"):e[r]=n}}const uo=["Webkit","Moz","ms"],rr={};function ou(e,t){const n=rr[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return rr[t]=r;r=Ln(r);for(let s=0;s<uo.length;s++){const o=uo[s]+r;if(o in e)return rr[t]=o}return t}const fo="http://www.w3.org/1999/xlink";function iu(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fo,t.slice(6,t.length)):e.setAttributeNS(fo,t,n);else{const o=dc(t);n==null||o&&!ai(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function au(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ai(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Rt(e,t,n,r){e.addEventListener(t,n,r)}function cu(e,t,n,r){e.removeEventListener(t,n,r)}function lu(e,t,n,r,s=null){const o=e._vei||(e._vei={}),i=o[t];if(r&&i)i.value=r;else{const[a,c]=uu(t);if(r){const l=o[t]=hu(r,s);Rt(e,a,l,c)}else i&&(cu(e,a,i,c),o[t]=void 0)}}const ho=/(?:Once|Passive|Capture)$/;function uu(e){let t;if(ho.test(e)){t={};let r;for(;r=e.match(ho);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let sr=0;const fu=Promise.resolve(),du=()=>sr||(fu.then(()=>sr=0),sr=Date.now());function hu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(pu(r,n.value),t,5,[r])};return n.value=e,n.attached=du(),n}function pu(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const po=/^on[a-z]/,gu=(e,t,n,r,s=!1,o,i,a,c)=>{t==="class"?ru(e,r,s):t==="style"?su(e,n,r):$n(t)?Zr(t)||lu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mu(e,t,r,s))?au(e,t,r,o,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),iu(e,t,r,s))};function mu(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&po.test(t)&&F(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||po.test(t)&&ne(n)?!1:t in e}const go=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>vn(t,n):t};function bu(e){e.target.composing=!0}function mo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const xg={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=go(s);const o=r||s.props&&s.props.type==="number";Rt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=Sr(a)),e._assign(a)}),n&&Rt(e,"change",()=>{e.value=e.value.trim()}),t||(Rt(e,"compositionstart",bu),Rt(e,"compositionend",mo),Rt(e,"change",mo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=go(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&Sr(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},_u=["ctrl","shift","alt","meta"],yu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>_u.some(n=>e[`${n}Key`]&&!t.includes(n))},Rg=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const o=yu[t[s]];if(o&&o(n,t))return}return e(n,...r)},Dg={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Gt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Gt(e,!0),r.enter(e)):r.leave(e,()=>{Gt(e,!1)}):Gt(e,t))},beforeUnmount(e,{value:t}){Gt(e,t)}};function Gt(e,t){e.style.display=t?e._vod:"none"}const wu=se({patchProp:gu},nu);let bo;function vu(){return bo||(bo=Ml(wu))}const Eu=(...e)=>{const t=vu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Iu(r);if(!s)return;const o=t._component;!F(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Iu(e){return ne(e)?document.querySelector(e):e}const Su="/network-rooms/assets/vue-5532db34.svg";const na=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},me=e=>(ki("data-v-04e5588b"),e=e(),$i(),e),Cu={class:"logo"},Au=["src"],Tu=me(()=>Y("span",{class:"material-icons"},"keyboard_double_arrow_right",-1)),Ou=[Tu],xu=me(()=>Y("h3",null,"Menu",-1)),Ru={class:"menu"},Du=me(()=>Y("span",{class:"material-icons"},"home",-1)),Pu=me(()=>Y("span",{class:"text"},"Home",-1)),Mu=me(()=>Y("span",{class:"material-icons"},"house",-1)),ku=me(()=>Y("span",{class:"text"},"Habitaciones",-1)),$u=me(()=>Y("span",{class:"material-icons"},"group",-1)),Nu=me(()=>Y("span",{class:"text"},"Personas",-1)),Bu=me(()=>Y("span",{class:"material-icons"},"camera",-1)),Lu=me(()=>Y("span",{class:"text"},"Camara",-1)),Fu=me(()=>Y("span",{class:"material-icons"},"email",-1)),ju=me(()=>Y("span",{class:"text"},"Login",-1)),Hu=me(()=>Y("div",{class:"flex"},null,-1)),Ku=me(()=>Y("div",{class:"menu"},null,-1)),Uu={__name:"Sidebar",setup(e){const t=Ci(localStorage.getItem("is_expanded")==="true"),n=()=>{t.value=!t.value,localStorage.setItem("is_expanded",t.value)};return(r,s)=>{const o=Ui("router-link");return gs(),ms("aside",{class:Fn(`${t.value?"is-expanded":""}`)},[Y("div",Cu,[Y("img",{src:gt(Su),alt:"Vue"},null,8,Au)]),Y("div",{class:"menu-toggle-wrap"},[Y("button",{class:"menu-toggle",onClick:n},Ou)]),xu,Y("div",Ru,[te(o,{to:"/",class:"button"},{default:xt(()=>[Du,Pu]),_:1}),te(o,{to:"/about",class:"button"},{default:xt(()=>[Mu,ku]),_:1}),te(o,{to:"/personas",class:"button"},{default:xt(()=>[$u,Nu]),_:1}),te(o,{to:"/camarita",class:"button"},{default:xt(()=>[Bu,Lu]),_:1}),te(o,{to:"/login",class:"button"},{default:xt(()=>[Fu,ju]),_:1})]),Hu,Ku],2)}}},Wu=na(Uu,[["__scopeId","data-v-04e5588b"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Vu=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},sa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=o>>2,h=(o&3)<<4|a>>4;let g=(a&15)<<2|l>>6,y=l&63;c||(y=64,i||(g=64)),r.push(n[u],n[h],n[g],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ra(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Vu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||l==null||h==null)throw new qu;const g=o<<2|a>>4;if(r.push(g),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const O=l<<6&192|h;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zu=function(e){const t=ra(e);return sa.encodeByteArray(t,!0)},oa=function(e){return zu(e).replace(/\./g,"")},Gu=function(e){try{return sa.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=()=>Yu().__FIREBASE_DEFAULTS__,Qu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Xu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Gu(e[1]);return t&&JSON.parse(t)},Zu=()=>{try{return Ju()||Qu()||Xu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ia=()=>{var e;return(e=Zu())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function aa(){try{return typeof indexedDB=="object"}catch{return!1}}function ca(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function tf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="FirebaseError";class Wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=nf,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?rf(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new Wt(s,a,r)}}function rf(e,t){return e.replace(sf,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const sf=/\{\$([^}]+)}/g;function Lr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(_o(o)&&_o(i)){if(!Lr(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _o(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(e){return e&&e._delegate?e._delegate:e}class ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ef;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cf(t))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=lt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=lt){return this.instances.has(t)}getOptions(t=lt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:af(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=lt){return this.component?this.component.multipleInstances?t:lt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function af(e){return e===lt?void 0:e}function cf(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new of(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Q||(Q={}));const uf={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ff=Q.INFO,df={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},hf=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=df[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pf{constructor(t){this.name=t,this._logLevel=ff,this._logHandler=hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const gf=(e,t)=>t.some(n=>e instanceof n);let yo,wo;function mf(){return yo||(yo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bf(){return wo||(wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const la=new WeakMap,Fr=new WeakMap,ua=new WeakMap,or=new WeakMap,ws=new WeakMap;function _f(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(et(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&la.set(n,e)}).catch(()=>{}),ws.set(t,e),t}function yf(e){if(Fr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Fr.set(e,t)}let jr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ua.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return et(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wf(e){jr=e(jr)}function vf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ir(this),t,...n);return ua.set(r,t.sort?t.sort():[t]),et(r)}:bf().includes(e)?function(...t){return e.apply(ir(this),t),et(la.get(this))}:function(...t){return et(e.apply(ir(this),t))}}function Ef(e){return typeof e=="function"?vf(e):(e instanceof IDBTransaction&&yf(e),gf(e,mf())?new Proxy(e,jr):e)}function et(e){if(e instanceof IDBRequest)return _f(e);if(or.has(e))return or.get(e);const t=Ef(e);return t!==e&&(or.set(e,t),ws.set(t,e)),t}const ir=e=>ws.get(e);function If(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=et(i);return r&&i.addEventListener("upgradeneeded",c=>{r(et(i.result),c.oldVersion,c.newVersion,et(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Sf=["get","getKey","getAll","getAllKeys","count"],Cf=["put","add","delete","clear"],ar=new Map;function vo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ar.get(t))return ar.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Cf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sf.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ar.set(t,o),o}wf(e=>({...e,get:(t,n,r)=>vo(t,n)||e.get(t,n,r),has:(t,n)=>!!vo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tf(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hr="@firebase/app",Eo="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new pf("@firebase/app"),Of="@firebase/app-compat",xf="@firebase/analytics-compat",Rf="@firebase/analytics",Df="@firebase/app-check-compat",Pf="@firebase/app-check",Mf="@firebase/auth",kf="@firebase/auth-compat",$f="@firebase/database",Nf="@firebase/database-compat",Bf="@firebase/functions",Lf="@firebase/functions-compat",Ff="@firebase/installations",jf="@firebase/installations-compat",Hf="@firebase/messaging",Kf="@firebase/messaging-compat",Uf="@firebase/performance",Wf="@firebase/performance-compat",Vf="@firebase/remote-config",qf="@firebase/remote-config-compat",zf="@firebase/storage",Gf="@firebase/storage-compat",Yf="@firebase/firestore",Jf="@firebase/firestore-compat",Qf="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]",Xf={[Hr]:"fire-core",[Of]:"fire-core-compat",[Rf]:"fire-analytics",[xf]:"fire-analytics-compat",[Pf]:"fire-app-check",[Df]:"fire-app-check-compat",[Mf]:"fire-auth",[kf]:"fire-auth-compat",[$f]:"fire-rtdb",[Nf]:"fire-rtdb-compat",[Bf]:"fire-fn",[Lf]:"fire-fn-compat",[Ff]:"fire-iid",[jf]:"fire-iid-compat",[Hf]:"fire-fcm",[Kf]:"fire-fcm-compat",[Uf]:"fire-perf",[Wf]:"fire-perf-compat",[Vf]:"fire-rc",[qf]:"fire-rc-compat",[zf]:"fire-gcs",[Gf]:"fire-gcs-compat",[Yf]:"fire-fst",[Jf]:"fire-fst-compat","fire-js":"fire-js",[Qf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Map,Ur=new Map;function Zf(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _t(e){const t=e.name;if(Ur.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;Ur.set(t,e);for(const n of Pn.values())Zf(n,e);return!0}function vs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tt=new Yn("app","Firebase",ed);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}function fa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw tt.create("bad-app-name",{appName:String(s)});if(n||(n=ia()),!n)throw tt.create("no-options");const o=Pn.get(s);if(o){if(Lr(n,o.options)&&Lr(r,o.config))return o;throw tt.create("duplicate-app",{appName:s})}const i=new lf(s);for(const c of Ur.values())i.addComponent(c);const a=new td(n,r,i);return Pn.set(s,a),a}function nd(e=Kr){const t=Pn.get(e);if(!t&&e===Kr&&ia())return fa();if(!t)throw tt.create("no-app",{appName:e});return t}function nt(e,t,n){var r;let s=(r=Xf[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}_t(new ot(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="firebase-heartbeat-database",sd=1,un="firebase-heartbeat-store";let cr=null;function da(){return cr||(cr=If(rd,sd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(un)}}}).catch(e=>{throw tt.create("idb-open",{originalErrorMessage:e.message})})),cr}async function od(e){try{return await(await da()).transaction(un).objectStore(un).get(ha(e))}catch(t){if(t instanceof Wt)bt.warn(t.message);else{const n=tt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bt.warn(n.message)}}}async function Io(e,t){try{const r=(await da()).transaction(un,"readwrite");await r.objectStore(un).put(t,ha(e)),await r.done}catch(n){if(n instanceof Wt)bt.warn(n.message);else{const r=tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(r.message)}}}function ha(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=1024,ad=30*24*60*60*1e3;class cd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ud(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=So();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const i=new Date(o.date).valueOf();return Date.now()-i<=ad}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=So(),{heartbeatsToSend:r,unsentEntries:s}=ld(this._heartbeatsCache.heartbeats),o=oa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function So(){return new Date().toISOString().substring(0,10)}function ld(e,t=id){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Co(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Co(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ud{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aa()?ca().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await od(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Co(e){return oa(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(e){_t(new ot("platform-logger",t=>new Af(t),"PRIVATE")),_t(new ot("heartbeat",t=>new cd(t),"PRIVATE")),nt(Hr,Eo,e),nt(Hr,Eo,"esm2017"),nt("fire-js","")}fd("");var dd="firebase",hd="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(dd,hd,"app");const pd=(e,t)=>t.some(n=>e instanceof n);let Ao,To;function gd(){return Ao||(Ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function md(){return To||(To=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pa=new WeakMap,Wr=new WeakMap,ga=new WeakMap,lr=new WeakMap,Es=new WeakMap;function bd(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(rt(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&pa.set(n,e)}).catch(()=>{}),Es.set(t,e),t}function _d(e){if(Wr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Wr.set(e,t)}let Vr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ga.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function yd(e){Vr=e(Vr)}function wd(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ur(this),t,...n);return ga.set(r,t.sort?t.sort():[t]),rt(r)}:md().includes(e)?function(...t){return e.apply(ur(this),t),rt(pa.get(this))}:function(...t){return rt(e.apply(ur(this),t))}}function vd(e){return typeof e=="function"?wd(e):(e instanceof IDBTransaction&&_d(e),pd(e,gd())?new Proxy(e,Vr):e)}function rt(e){if(e instanceof IDBRequest)return bd(e);if(lr.has(e))return lr.get(e);const t=vd(e);return t!==e&&(lr.set(e,t),Es.set(t,e)),t}const ur=e=>Es.get(e);function Ed(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=rt(i);return r&&i.addEventListener("upgradeneeded",c=>{r(rt(i.result),c.oldVersion,c.newVersion,rt(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Id=["get","getKey","getAll","getAllKeys","count"],Sd=["put","add","delete","clear"],fr=new Map;function Oo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fr.get(t))return fr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Sd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Id.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fr.set(t,o),o}yd(e=>({...e,get:(t,n,r)=>Oo(t,n)||e.get(t,n,r),has:(t,n)=>!!Oo(t,n)||e.has(t,n)}));const ma="@firebase/installations",Is="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=1e4,_a=`w:${Is}`,ya="FIS_v2",Cd="https://firebaseinstallations.googleapis.com/v1",Ad=60*60*1e3,Td="installations",Od="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yt=new Yn(Td,Od,xd);function wa(e){return e instanceof Wt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va({projectId:e}){return`${Cd}/projects/${e}/installations`}function Ea(e){return{token:e.token,requestStatus:2,expiresIn:Dd(e.expiresIn),creationTime:Date.now()}}async function Ia(e,t){const r=(await t.json()).error;return yt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Sa({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Rd(e,{refreshToken:t}){const n=Sa(e);return n.append("Authorization",Pd(t)),n}async function Ca(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Dd(e){return Number(e.replace("s","000"))}function Pd(e){return`${ya} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=va(e),s=Sa(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:ya,appId:e.appId,sdkVersion:_a},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Ca(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ea(l.authToken)}}else throw await Ia("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=/^[cdef][\w-]{21}$/,qr="";function Nd(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Bd(e);return $d.test(n)?n:qr}catch{return qr}}function Bd(e){return kd(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Map;function Oa(e,t){const n=Jn(e);xa(n,t),Ld(n,t)}function xa(e,t){const n=Ta.get(e);if(n)for(const r of n)r(t)}function Ld(e,t){const n=Fd();n&&n.postMessage({key:e,fid:t}),jd()}let ht=null;function Fd(){return!ht&&"BroadcastChannel"in self&&(ht=new BroadcastChannel("[Firebase] FID Change"),ht.onmessage=e=>{xa(e.data.key,e.data.fid)}),ht}function jd(){Ta.size===0&&ht&&(ht.close(),ht=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="firebase-installations-database",Kd=1,wt="firebase-installations-store";let dr=null;function Ss(){return dr||(dr=Ed(Hd,Kd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wt)}}})),dr}async function Mn(e,t){const n=Jn(e),s=(await Ss()).transaction(wt,"readwrite"),o=s.objectStore(wt),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&Oa(e,t.fid),t}async function Ra(e){const t=Jn(e),r=(await Ss()).transaction(wt,"readwrite");await r.objectStore(wt).delete(t),await r.done}async function Qn(e,t){const n=Jn(e),s=(await Ss()).transaction(wt,"readwrite"),o=s.objectStore(wt),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Oa(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e){let t;const n=await Qn(e.appConfig,r=>{const s=Ud(r),o=Wd(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===qr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ud(e){const t=e||{fid:Nd(),registrationStatus:0};return Da(t)}function Wd(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(yt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Vd(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:qd(e)}:{installationEntry:t}}async function Vd(e,t){try{const n=await Md(e,t);return Mn(e.appConfig,n)}catch(n){throw wa(n)&&n.customData.serverCode===409?await Ra(e.appConfig):await Mn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function qd(e){let t=await xo(e.appConfig);for(;t.registrationStatus===1;)await Aa(100),t=await xo(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cs(e);return r||n}return t}function xo(e){return Qn(e,t=>{if(!t)throw yt.create("installation-not-found");return Da(t)})}function Da(e){return zd(e)?{fid:e.fid,registrationStatus:0}:e}function zd(e){return e.registrationStatus===1&&e.registrationTime+ba<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd({appConfig:e,heartbeatServiceProvider:t},n){const r=Yd(e,n),s=Rd(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:_a,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Ca(()=>fetch(r,a));if(c.ok){const l=await c.json();return Ea(l)}else throw await Ia("Generate Auth Token",c)}function Yd(e,{fid:t}){return`${va(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(e,t=!1){let n;const r=await Qn(e.appConfig,o=>{if(!Pa(o))throw yt.create("not-registered");const i=o.authToken;if(!t&&Xd(i))return o;if(i.requestStatus===1)return n=Jd(e,t),o;{if(!navigator.onLine)throw yt.create("app-offline");const a=eh(o);return n=Qd(e,a),a}});return n?await n:r.authToken}async function Jd(e,t){let n=await Ro(e.appConfig);for(;n.authToken.requestStatus===1;)await Aa(100),n=await Ro(e.appConfig);const r=n.authToken;return r.requestStatus===0?As(e,t):r}function Ro(e){return Qn(e,t=>{if(!Pa(t))throw yt.create("not-registered");const n=t.authToken;return th(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Qd(e,t){try{const n=await Gd(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Mn(e.appConfig,r),n}catch(n){if(wa(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ra(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Mn(e.appConfig,r)}throw n}}function Pa(e){return e!==void 0&&e.registrationStatus===2}function Xd(e){return e.requestStatus===2&&!Zd(e)}function Zd(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ad}function eh(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function th(e){return e.requestStatus===1&&e.requestTime+ba<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(e){const t=e,{installationEntry:n,registrationPromise:r}=await Cs(t);return r?r.catch(console.error):As(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(e,t=!1){const n=e;return await sh(n),(await As(n,t)).token}async function sh(e){const{registrationPromise:t}=await Cs(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e){if(!e||!e.options)throw hr("App Configuration");if(!e.name)throw hr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw hr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function hr(e){return yt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="installations",ih="installations-internal",ah=e=>{const t=e.getProvider("app").getImmediate(),n=oh(t),r=vs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ch=e=>{const t=e.getProvider("app").getImmediate(),n=vs(t,Ma).getImmediate();return{getId:()=>nh(n),getToken:s=>rh(n,s)}};function lh(){_t(new ot(Ma,ah,"PUBLIC")),_t(new ot(ih,ch,"PRIVATE"))}lh();nt(ma,Is);nt(ma,Is,"esm2017");const uh=(e,t)=>t.some(n=>e instanceof n);let Do,Po;function fh(){return Do||(Do=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dh(){return Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ka=new WeakMap,zr=new WeakMap,$a=new WeakMap,pr=new WeakMap,Ts=new WeakMap;function hh(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Ue(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ka.set(n,e)}).catch(()=>{}),Ts.set(t,e),t}function ph(e){if(zr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});zr.set(e,t)}let Gr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$a.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ue(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gh(e){Gr=e(Gr)}function mh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(gr(this),t,...n);return $a.set(r,t.sort?t.sort():[t]),Ue(r)}:dh().includes(e)?function(...t){return e.apply(gr(this),t),Ue(ka.get(this))}:function(...t){return Ue(e.apply(gr(this),t))}}function bh(e){return typeof e=="function"?mh(e):(e instanceof IDBTransaction&&ph(e),uh(e,fh())?new Proxy(e,Gr):e)}function Ue(e){if(e instanceof IDBRequest)return hh(e);if(pr.has(e))return pr.get(e);const t=bh(e);return t!==e&&(pr.set(e,t),Ts.set(t,e)),t}const gr=e=>Ts.get(e);function Na(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Ue(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Ue(i.result),c.oldVersion,c.newVersion,Ue(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}function mr(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),Ue(n).then(()=>{})}const _h=["get","getKey","getAll","getAllKeys","count"],yh=["put","add","delete","clear"],br=new Map;function Mo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(br.get(t))return br.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=yh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_h.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return br.set(t,o),o}gh(e=>({...e,get:(t,n,r)=>Mo(t,n)||e.get(t,n,r),has:(t,n)=>!!Mo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="/firebase-messaging-sw.js",vh="/firebase-cloud-messaging-push-scope",Ba="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Eh="https://fcmregistrations.googleapis.com/v1",La="google.c.a.c_id",Ih="google.c.a.c_l",Sh="google.c.a.ts",Ch="google.c.a.e";var ko;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ko||(ko={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var fn;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(fn||(fn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ah(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="fcm_token_details_db",Th=5,$o="fcm_token_object_Store";async function Oh(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(_r))return null;let t=null;return(await Na(_r,Th,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains($o))return;const c=i.objectStore($o),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(s===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:He(u.vapidKey)}}}else if(s===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:He(u.auth),p256dh:He(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:He(u.vapidKey)}}}else if(s===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:He(u.auth),p256dh:He(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:He(u.vapidKey)}}}}}})).close(),await mr(_r),await mr("fcm_vapid_details_db"),await mr("undefined"),xh(t)?t:null}function xh(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="firebase-messaging-database",Dh=1,vt="firebase-messaging-store";let yr=null;function Os(){return yr||(yr=Na(Rh,Dh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vt)}}})),yr}async function Fa(e){const t=Rs(e),r=await(await Os()).transaction(vt).objectStore(vt).get(t);if(r)return r;{const s=await Oh(e.appConfig.senderId);if(s)return await xs(e,s),s}}async function xs(e,t){const n=Rs(e),s=(await Os()).transaction(vt,"readwrite");return await s.objectStore(vt).put(t,n),await s.done,t}async function Ph(e){const t=Rs(e),r=(await Os()).transaction(vt,"readwrite");await r.objectStore(vt).delete(t),await r.done}function Rs({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ue=new Yn("messaging","Messaging",Mh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(e,t){const n=await Ps(e),r=Ha(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Ds(e.appConfig),s)).json()}catch(i){throw ue.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ue.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw ue.create("token-subscribe-no-token");return o.token}async function $h(e,t){const n=await Ps(e),r=Ha(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Ds(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw ue.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ue.create("token-update-failed",{errorInfo:i})}if(!o.token)throw ue.create("token-update-no-token");return o.token}async function ja(e,t){const r={method:"DELETE",headers:await Ps(e)};try{const o=await(await fetch(`${Ds(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw ue.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw ue.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Ds({projectId:e}){return`${Eh}/projects/${e}/registrations`}async function Ps({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ha({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==Ba&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=7*24*60*60*1e3;async function Bh(e){const t=await jh(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:He(t.getKey("auth")),p256dh:He(t.getKey("p256dh"))},r=await Fa(e.firebaseDependencies);if(r){if(Hh(r.subscriptionOptions,n))return Date.now()>=r.createTime+Nh?Fh(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ja(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return No(e.firebaseDependencies,n)}else return No(e.firebaseDependencies,n)}async function Lh(e){const t=await Fa(e.firebaseDependencies);t&&(await ja(e.firebaseDependencies,t.token),await Ph(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Fh(e,t){try{const n=await $h(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await xs(e.firebaseDependencies,r),n}catch(n){throw await Lh(e),n}}async function No(e,t){const r={token:await kh(e,t),createTime:Date.now(),subscriptionOptions:t};return await xs(e,r),r.token}async function jh(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ah(t)})}function Hh(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Kh(t,e),Uh(t,e),Wh(t,e),t}function Kh(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function Uh(e,t){t.data&&(e.data=t.data)}function Wh(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const c=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e){return typeof e=="object"&&!!e&&La in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ka("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ka(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(e){if(!e||!e.options)throw wr("App Configuration Object");if(!e.name)throw wr("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw wr(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wr(e){return ue.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=qh(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(e){try{e.swRegistration=await navigator.serviceWorker.register(wh,{scope:vh}),e.swRegistration.update().catch(()=>{})}catch(t){throw ue.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(e,t){if(!t&&!e.swRegistration&&await Gh(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ue.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Ba)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(e,t){if(!navigator)throw ue.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ue.create("permission-blocked");return await Jh(e,t==null?void 0:t.vapidKey),await Yh(e,t==null?void 0:t.serviceWorkerRegistration),Bh(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(e,t,n){const r=Xh(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[La],message_name:n[Ih],message_time:n[Sh],message_device_time:Math.floor(Date.now()/1e3)})}function Xh(e){switch(e){case fn.NOTIFICATION_CLICKED:return"notification_open";case fn.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===fn.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Bo(n)):e.onMessageHandler.next(Bo(n)));const r=n.data;Vh(r)&&r[Ch]==="1"&&await Qh(e,n.messageType,r)}const Lo="@firebase/messaging",Fo="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=e=>{const t=new zh(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Zh(t,n)),t},tp=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Ua(t,r)}};function np(){_t(new ot("messaging",ep,"PUBLIC")),_t(new ot("messaging-internal",tp,"PRIVATE")),nt(Lo,Fo),nt(Lo,Fo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(){try{await ca()}catch{return!1}return typeof window<"u"&&aa()&&tf()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(e,t){if(!navigator)throw ue.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(e=nd()){return rp().then(t=>{if(!t)throw ue.create("unsupported-browser")},t=>{throw ue.create("indexed-db-unsupported")}),vs(ys(e),"messaging").getImmediate()}async function ip(e,t){return e=ys(e),Ua(e,t)}function ap(e,t){return e=ys(e),sp(e,t)}np();const cp={class:"app"},lp={__name:"App",setup(e){fa({apiKey:"AIzaSyBlF2Zdg-ltkI-KTltKQhH1iNxmnU3bxRU",authDomain:"pwabackend-f0c5e.firebaseapp.com",databaseURL:"https://pwabackend-f0c5e-default-rtdb.firebaseio.com",projectId:"pwabackend-f0c5e",storageBucket:"pwabackend-f0c5e.appspot.com",messagingSenderId:"150054104750",appId:"1:150054104750:web:d43128b49980caf641073f",measurementId:"G-WR49335BG8"});const n=op();return ap(n,r=>{var a,c,l,u;console.log("Message received. ",r);const s=((a=r.notification)==null?void 0:a.title)||((c=r.data)==null?void 0:c.title)||"Default Title",i={body:((l=r.notification)==null?void 0:l.body)||((u=r.data)==null?void 0:u.body)||"Default Body"};console.log("Showing notification in foreground:",s,i),new Notification(s,i)}),ip(n,{vapidKey:"BGs2FR3cK3c35c1fn2wjElg1bd3d6fwqxnY06KcqNDkGfK_RGdQBViFXeyf2z7lRR-0oW-LYIvRiARXWgHT6G-s"}).then(r=>{r?console.log("Token:",r):console.log("No registration token available. Request permission to generate one.")}).catch(r=>{console.log("An error occurred while retrieving token. ",r)}),(r,s)=>{const o=Ui("router-view");return gs(),ms("div",cp,[te(Wu),te(o)])}}};"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(e=>{console.log("Service Worker registrado con exito",e),Notification.requestPermission().then(t=>{console.log(t==="granted"?"Notification permission granted.":"Notification permission denied.")})}).catch(e=>{console.error("Error al regitrar Service Worker:",e)})});const Ms="my-cache";self.addEventListener("install",function(e){e.waitUntil(caches.open(Ms).then(function(t){return t.addAll(["/index.html","src/main.js","src/js/app.js"])}))});self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(t){return Promise.all(t.map(function(n){if(n!==Ms)return caches.delete(n)}))}))});self.addEventListener("fetch",function(e){if(e.request.method==="POST")return fetch(e.request);e.respondWith(caches.open(Ms).then(function(t){return t.match(e.request).then(function(n){const r=fetch(e.request).then(function(s){return t.put(e.request,s.clone()),s});return n||r})}))});const up="modulepreload",fp=function(e){return"/network-rooms/"+e},jo={},Ot=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=fp(o),o in jo)return;jo[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===o&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":up,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Dt=typeof window<"u";function dp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const q=Object.assign;function vr(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ae(s)?s.map(e):e(s)}return n}const en=()=>{},Ae=Array.isArray,hp=/\/$/,pp=e=>e.replace(hp,"");function Er(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=e(o)),a>-1&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=_p(r??t,n),{fullPath:r+(o&&"?")+o+i,path:r,query:s,hash:i}}function gp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ho(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mp(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ft(t.matched[r],n.matched[s])&&Wa(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ft(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Wa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!bp(e[n],t[n]))return!1;return!0}function bp(e,t){return Ae(e)?Ko(e,t):Ae(t)?Ko(t,e):e===t}function Ko(e,t){return Ae(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function _p(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var dn;(function(e){e.pop="pop",e.push="push"})(dn||(dn={}));var tn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(tn||(tn={}));function yp(e){if(!e)if(Dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pp(e)}const wp=/^[^#]+#/;function vp(e,t){return e.replace(wp,"#")+t}function Ep(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Xn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ip(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Ep(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Uo(e,t){return(history.state?history.state.position-t:-1)+e}const Yr=new Map;function Sp(e,t){Yr.set(e,t)}function Cp(e){const t=Yr.get(e);return Yr.delete(e),t}let Ap=()=>location.protocol+"//"+location.host;function Va(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let a=s.includes(e.slice(o))?e.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ho(c,"")}return Ho(n,e)+r+s}function Tp(e,t,n,r){let s=[],o=[],i=null;const a=({state:g})=>{const y=Va(e,location),O=n.value,R=t.value;let L=0;if(g){if(n.value=y,t.value=g,i&&i===O){i=null;return}L=R?g.position-R.position:0}else r(y);s.forEach(M=>{M(n.value,O,{delta:L,type:dn.pop,direction:L?L>0?tn.forward:tn.back:tn.unknown})})};function c(){i=n.value}function l(g){s.push(g);const y=()=>{const O=s.indexOf(g);O>-1&&s.splice(O,1)};return o.push(y),y}function u(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:Xn()}),"")}function h(){for(const g of o)g();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Wo(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Xn():null}}function Op(e){const{history:t,location:n}=window,r={value:Va(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,u){const h=e.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:Ap()+e+c;try{t[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[u?"replace":"assign"](g)}}function i(c,l){const u=q({},t.state,Wo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,u,!0),r.value=c}function a(c,l){const u=q({},s.value,t.state,{forward:c,scroll:Xn()});o(u.current,u,!0);const h=q({},Wo(r.value,c,null),{position:u.position+1},l);o(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:i}}function xp(e){e=yp(e);const t=Op(e),n=Tp(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=q({location:"",base:e,go:r,createHref:vp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Rp(e){return typeof e=="string"||e&&typeof e=="object"}function qa(e){return typeof e=="string"||typeof e=="symbol"}const Ye={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},za=Symbol("");var Vo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Vo||(Vo={}));function jt(e,t){return q(new Error,{type:e,[za]:!0},t)}function Fe(e,t){return e instanceof Error&&za in e&&(t==null||!!(e.type&t))}const qo="[^/]+?",Dp={sensitive:!1,strict:!1,start:!0,end:!0},Pp=/[.+*?^${}()[\]/\\]/g;function Mp(e,t){const n=q({},Dp,t),r=[];let s=n.start?"^":"";const o=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(Pp,"\\$&"),y+=40;else if(g.type===1){const{value:O,repeatable:R,optional:L,regexp:M}=g;o.push({name:O,repeatable:R,optional:L});const k=M||qo;if(k!==qo){y+=10;try{new RegExp(`(${k})`)}catch($){throw new Error(`Invalid custom RegExp for param "${O}" (${k}): `+$.message)}}let K=R?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(K=L&&l.length<2?`(?:/${K})`:"/"+K),L&&(K+="?"),s+=K,y+=20,L&&(y+=-8),R&&(y+=-20),k===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(i),h={};if(!u)return null;for(let g=1;g<u.length;g++){const y=u[g]||"",O=o[g-1];h[O.name]=y&&O.repeatable?y.split("/"):y}return h}function c(l){let u="",h=!1;for(const g of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of g)if(y.type===0)u+=y.value;else if(y.type===1){const{value:O,repeatable:R,optional:L}=y,M=O in l?l[O]:"";if(Ae(M)&&!R)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const k=Ae(M)?M.join("/"):M;if(!k)if(L)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${O}"`);u+=k}}return u||"/"}return{re:i,score:r,keys:o,parse:a,stringify:c}}function kp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function $p(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=kp(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(zo(r))return 1;if(zo(s))return-1}return s.length-r.length}function zo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Np={type:0,value:""},Bp=/[a-zA-Z0-9_]/;function Lp(e){if(!e)return[[]];if(e==="/")return[[Np]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,c,l="",u="";function h(){l&&(n===0?o.push({type:0,value:l}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function g(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),i()):c===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:Bp.test(c)?g():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),i(),s}function Fp(e,t,n){const r=Mp(Lp(e.path),n),s=q(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function jp(e,t){const n=[],r=new Map;t=Jo({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function o(u,h,g){const y=!g,O=Hp(u);O.aliasOf=g&&g.record;const R=Jo(t,u),L=[O];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of K)L.push(q({},O,{components:g?g.record.components:O.components,path:$,aliasOf:g?g.record:O}))}let M,k;for(const K of L){const{path:$}=K;if(h&&$[0]!=="/"){const ie=h.record.path,fe=ie[ie.length-1]==="/"?"":"/";K.path=h.record.path+($&&fe+$)}if(M=Fp(K,h,R),g?g.alias.push(M):(k=k||M,k!==M&&k.alias.push(M),y&&u.name&&!Yo(M)&&i(u.name)),O.children){const ie=O.children;for(let fe=0;fe<ie.length;fe++)o(ie[fe],M,g&&g.children[fe])}g=g||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&c(M)}return k?()=>{i(k)}:en}function i(u){if(qa(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&$p(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ga(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Yo(u)&&r.set(u.record.name,u)}function l(u,h){let g,y={},O,R;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw jt(1,{location:u});R=g.record.name,y=q(Go(h.params,g.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Go(u.params,g.keys.map(k=>k.name))),O=g.stringify(y)}else if("path"in u)O=u.path,g=n.find(k=>k.re.test(O)),g&&(y=g.parse(O),R=g.record.name);else{if(g=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!g)throw jt(1,{location:u,currentLocation:h});R=g.record.name,y=q({},h.params,u.params),O=g.stringify(y)}const L=[];let M=g;for(;M;)L.unshift(M.record),M=M.parent;return{name:R,path:O,params:y,matched:L,meta:Up(L)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:s}}function Go(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Hp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Kp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Kp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Yo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Up(e){return e.reduce((t,n)=>q(t,n.meta),{})}function Jo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ga(e,t){return t.children.some(n=>n===e||Ga(e,n))}const Ya=/#/g,Wp=/&/g,Vp=/\//g,qp=/=/g,zp=/\?/g,Ja=/\+/g,Gp=/%5B/g,Yp=/%5D/g,Qa=/%5E/g,Jp=/%60/g,Xa=/%7B/g,Qp=/%7C/g,Za=/%7D/g,Xp=/%20/g;function ks(e){return encodeURI(""+e).replace(Qp,"|").replace(Gp,"[").replace(Yp,"]")}function Zp(e){return ks(e).replace(Xa,"{").replace(Za,"}").replace(Qa,"^")}function Jr(e){return ks(e).replace(Ja,"%2B").replace(Xp,"+").replace(Ya,"%23").replace(Wp,"%26").replace(Jp,"`").replace(Xa,"{").replace(Za,"}").replace(Qa,"^")}function eg(e){return Jr(e).replace(qp,"%3D")}function tg(e){return ks(e).replace(Ya,"%23").replace(zp,"%3F")}function ng(e){return e==null?"":tg(e).replace(Vp,"%2F")}function kn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function rg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Ja," "),i=o.indexOf("="),a=kn(i<0?o:o.slice(0,i)),c=i<0?null:kn(o.slice(i+1));if(a in t){let l=t[a];Ae(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Qo(e){let t="";for(let n in e){const r=e[n];if(n=eg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ae(r)?r.map(o=>o&&Jr(o)):[r&&Jr(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function sg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ae(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const og=Symbol(""),Xo=Symbol(""),Zn=Symbol(""),ec=Symbol(""),Qr=Symbol("");function Yt(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Qe(e,t,n,r,s){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,a)=>{const c=h=>{h===!1?a(jt(4,{from:n,to:t})):h instanceof Error?a(h):Rp(h)?a(jt(2,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),i())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ir(e,t,n,r){const s=[];for(const o of e)for(const i in o.components){let a=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(ig(a)){const l=(a.__vccOpts||a)[t];l&&s.push(Qe(l,n,r,o,i))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const u=dp(l)?l.default:l;o.components[i]=u;const g=(u.__vccOpts||u)[t];return g&&Qe(g,n,r,o,i)()}))}}return s}function ig(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zo(e){const t=$e(Zn),n=$e(ec),r=Ee(()=>t.resolve(gt(e.to))),s=Ee(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Ft.bind(null,u));if(g>-1)return g;const y=ei(c[l-2]);return l>1&&ei(u)===y&&h[h.length-1].path!==y?h.findIndex(Ft.bind(null,c[l-2])):g}),o=Ee(()=>s.value>-1&&ug(n.params,r.value.params)),i=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&Wa(n.params,r.value.params));function a(c={}){return lg(c)?t[gt(e.replace)?"replace":"push"](gt(e.to)).catch(en):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}const ag=Li({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zo,setup(e,{slots:t}){const n=Hn(Zo(e)),{options:r}=$e(Zn),s=Ee(()=>({[ti(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ti(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:ta("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),cg=ag;function lg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ug(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ae(s)||s.length!==r.length||r.some((o,i)=>o!==s[i]))return!1}return!0}function ei(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ti=(e,t,n)=>e??t??n,fg=Li({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=$e(Qr),s=Ee(()=>e.route||r.value),o=$e(Xo,0),i=Ee(()=>{let l=gt(o);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ee(()=>s.value.matched[i.value]);Sn(Xo,Ee(()=>i.value+1)),Sn(og,a),Sn(Qr,s);const c=Ci();return En(()=>[c.value,a.value,e.name],([l,u,h],[g,y,O])=>{u&&(u.instances[h]=l,y&&y!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),l&&u&&(!y||!Ft(u,y)||!g)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,g=h&&h.components[u];if(!g)return ni(n.default,{Component:g,route:l});const y=h.props[u],O=y?y===!0?l.params:typeof y=="function"?y(l):y:null,L=ta(g,q({},O,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ni(n.default,{Component:L,route:l})||L}}});function ni(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const dg=fg;function hg(e){const t=jp(e.routes,e),n=e.parseQuery||rg,r=e.stringifyQuery||Qo,s=e.history,o=Yt(),i=Yt(),a=Yt(),c=Kc(Ye);let l=Ye;Dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vr.bind(null,b=>""+b),h=vr.bind(null,ng),g=vr.bind(null,kn);function y(b,A){let S,x;return qa(b)?(S=t.getRecordMatcher(b),x=A):x=b,t.addRoute(x,S)}function O(b){const A=t.getRecordMatcher(b);A&&t.removeRoute(A)}function R(){return t.getRoutes().map(b=>b.record)}function L(b){return!!t.getRecordMatcher(b)}function M(b,A){if(A=q({},A||c.value),typeof b=="string"){const p=Er(n,b,A.path),m=t.resolve({path:p.path},A),_=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:kn(p.hash),redirectedFrom:void 0,href:_})}let S;if("path"in b)S=q({},b,{path:Er(n,b.path,A.path).path});else{const p=q({},b.params);for(const m in p)p[m]==null&&delete p[m];S=q({},b,{params:h(p)}),A.params=h(A.params)}const x=t.resolve(S,A),V=b.hash||"";x.params=u(g(x.params));const f=gp(r,q({},b,{hash:Zp(V),path:x.path})),d=s.createHref(f);return q({fullPath:f,hash:V,query:r===Qo?sg(b.query):b.query||{}},x,{redirectedFrom:void 0,href:d})}function k(b){return typeof b=="string"?Er(n,b,c.value.path):q({},b)}function K(b,A){if(l!==b)return jt(8,{from:A,to:b})}function $(b){return Te(b)}function ie(b){return $(q(k(b),{replace:!0}))}function fe(b){const A=b.matched[b.matched.length-1];if(A&&A.redirect){const{redirect:S}=A;let x=typeof S=="function"?S(b):S;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=k(x):{path:x},x.params={}),q({query:b.query,hash:b.hash,params:"path"in x?{}:b.params},x)}}function Te(b,A){const S=l=M(b),x=c.value,V=b.state,f=b.force,d=b.replace===!0,p=fe(S);if(p)return Te(q(k(p),{state:typeof p=="object"?q({},V,p.state):V,force:f,replace:d}),A||S);const m=S;m.redirectedFrom=A;let _;return!f&&mp(r,x,S)&&(_=jt(16,{to:m,from:x}),Re(x,x,!0,!1)),(_?Promise.resolve(_):Oe(m,x)).catch(w=>Fe(w)?Fe(w,2)?w:ze(w):W(w,m,x)).then(w=>{if(w){if(Fe(w,2))return Te(q({replace:d},k(w.to),{state:typeof w.to=="object"?q({},V,w.to.state):V,force:f}),A||m)}else w=it(m,x,!0,d,V);return qe(m,x,w),w})}function Be(b,A){const S=K(b,A);return S?Promise.reject(S):Promise.resolve()}function Et(b){const A=Ct.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(b):b()}function Oe(b,A){let S;const[x,V,f]=pg(b,A);S=Ir(x.reverse(),"beforeRouteLeave",b,A);for(const p of x)p.leaveGuards.forEach(m=>{S.push(Qe(m,b,A))});const d=Be.bind(null,b,A);return S.push(d),ae(S).then(()=>{S=[];for(const p of o.list())S.push(Qe(p,b,A));return S.push(d),ae(S)}).then(()=>{S=Ir(V,"beforeRouteUpdate",b,A);for(const p of V)p.updateGuards.forEach(m=>{S.push(Qe(m,b,A))});return S.push(d),ae(S)}).then(()=>{S=[];for(const p of f)if(p.beforeEnter)if(Ae(p.beforeEnter))for(const m of p.beforeEnter)S.push(Qe(m,b,A));else S.push(Qe(p.beforeEnter,b,A));return S.push(d),ae(S)}).then(()=>(b.matched.forEach(p=>p.enterCallbacks={}),S=Ir(f,"beforeRouteEnter",b,A),S.push(d),ae(S))).then(()=>{S=[];for(const p of i.list())S.push(Qe(p,b,A));return S.push(d),ae(S)}).catch(p=>Fe(p,8)?p:Promise.reject(p))}function qe(b,A,S){a.list().forEach(x=>Et(()=>x(b,A,S)))}function it(b,A,S,x,V){const f=K(b,A);if(f)return f;const d=A===Ye,p=Dt?history.state:{};S&&(x||d?s.replace(b.fullPath,q({scroll:d&&p&&p.scroll},V)):s.push(b.fullPath,V)),c.value=b,Re(b,A,S,d),ze()}let xe;function Vt(){xe||(xe=s.listen((b,A,S)=>{if(!hn.listening)return;const x=M(b),V=fe(x);if(V){Te(q(V,{replace:!0}),x).catch(en);return}l=x;const f=c.value;Dt&&Sp(Uo(f.fullPath,S.delta),Xn()),Oe(x,f).catch(d=>Fe(d,12)?d:Fe(d,2)?(Te(d.to,x).then(p=>{Fe(p,20)&&!S.delta&&S.type===dn.pop&&s.go(-1,!1)}).catch(en),Promise.reject()):(S.delta&&s.go(-S.delta,!1),W(d,x,f))).then(d=>{d=d||it(x,f,!1),d&&(S.delta&&!Fe(d,8)?s.go(-S.delta,!1):S.type===dn.pop&&Fe(d,20)&&s.go(-1,!1)),qe(x,f,d)}).catch(en)}))}let It=Yt(),re=Yt(),G;function W(b,A,S){ze(b);const x=re.list();return x.length?x.forEach(V=>V(b,A,S)):console.error(b),Promise.reject(b)}function Le(){return G&&c.value!==Ye?Promise.resolve():new Promise((b,A)=>{It.add([b,A])})}function ze(b){return G||(G=!b,Vt(),It.list().forEach(([A,S])=>b?S(b):A()),It.reset()),b}function Re(b,A,S,x){const{scrollBehavior:V}=e;if(!Dt||!V)return Promise.resolve();const f=!S&&Cp(Uo(b.fullPath,0))||(x||!S)&&history.state&&history.state.scroll||null;return xi().then(()=>V(b,A,f)).then(d=>d&&Ip(d)).catch(d=>W(d,b,A))}const he=b=>s.go(b);let St;const Ct=new Set,hn={currentRoute:c,listening:!0,addRoute:y,removeRoute:O,hasRoute:L,getRoutes:R,resolve:M,options:e,push:$,replace:ie,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:re.add,isReady:Le,install(b){const A=this;b.component("RouterLink",cg),b.component("RouterView",dg),b.config.globalProperties.$router=A,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(c)}),Dt&&!St&&c.value===Ye&&(St=!0,$(s.location).catch(V=>{}));const S={};for(const V in Ye)Object.defineProperty(S,V,{get:()=>c.value[V],enumerable:!0});b.provide(Zn,A),b.provide(ec,yi(S)),b.provide(Qr,c);const x=b.unmount;Ct.add(b),b.unmount=function(){Ct.delete(b),Ct.size<1&&(l=Ye,xe&&xe(),xe=null,c.value=Ye,St=!1,G=!1),x()}}};function ae(b){return b.reduce((A,S)=>A.then(()=>Et(S)),Promise.resolve())}return hn}function pg(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(l=>Ft(l,a))?r.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(l=>Ft(l,c))||s.push(c))}return[n,r,s]}function Pg(){return $e(Zn)}const gg={methods:{toggleCamera(){this.stopCamera()}}},$s=e=>(ki("data-v-08f39deb"),e=e(),$i(),e),mg={class:"header"},bg=$s(()=>Y("div",{class:"sidebar"},null,-1)),_g={class:"content"},yg={class:"banner-text"},wg=$s(()=>Y("h1",null,"Network Rooms",-1)),vg=$s(()=>Y("p",null,' "Tu Éxito, Tu Comodidad: Encuentra Tu Hogar Cerca de la Universidad." ',-1));function Eg(e,t,n,r,s,o){return gs(),ms("div",mg,[bg,Y("div",_g,[Y("div",yg,[wg,vg,Y("button",{onClick:t[0]||(t[0]=(...i)=>e.learnMore&&e.learnMore(...i))},"Ver mas")])])])}const Ig=na(gg,[["render",Eg],["__scopeId","data-v-08f39deb"]]),Sg=hg({history:xp(),routes:[{path:"/",component:Ig},{path:"/about",component:()=>Ot(()=>import("./About-72231c11.js"),["assets/About-72231c11.js","assets/axios-21b846bc.js","assets/About-a2f93a6d.css"])},{path:"/login",component:()=>Ot(()=>import("./Login-30cbdedb.js"),["assets/Login-30cbdedb.js","assets/Login-a66ca9f8.css"])},{path:"/personas",component:()=>Ot(()=>import("./Users-bb20a958.js"),["assets/Users-bb20a958.js","assets/axios-21b846bc.js","assets/About-a2f93a6d.css"])},{path:"/register",component:()=>Ot(()=>import("./Register-e5a04c22.js"),["assets/Register-e5a04c22.js","assets/axios-21b846bc.js","assets/Register-8b4a7733.css"])},{path:"/registerRoom",component:()=>Ot(()=>import("./RegisterRoom-6617d488.js"),["assets/RegisterRoom-6617d488.js","assets/axios-21b846bc.js","assets/RegisterRoom-d5c0fcc5.css"])},{path:"/camarita",component:()=>Ot(()=>import("./Camara-fbe34ed7.js"),["assets/Camara-fbe34ed7.js","assets/Camara-3e4fce0c.css"])}]});Eu(lp).use(Sg).mount("#app");export{Ke as F,na as _,gs as a,Y as b,ms as c,Tg as d,Og as e,$i as f,Ui as g,Ag as h,te as i,xt as j,Hl as k,Dg as l,ul as o,ki as p,Ci as r,Cg as t,Pg as u,xg as v,Rg as w};
