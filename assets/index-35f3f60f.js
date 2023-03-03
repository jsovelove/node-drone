(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
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
 */const Kw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(n,e){if(!n)throw Vo(e)},Vo=function(n){return new Error("Firebase Database ("+Kw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Qw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hk=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Yw=function(n){const e=Qw(n);return Xp.encodeByteArray(e,!0)},fu=function(n){return Yw(n).replace(/\./g,"")},pu=function(n){try{return Xp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dk(n){return Ka(void 0,n)}function Ka(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!fk(t)||(n[t]=Ka(n[t],e[t]));return n}function fk(n){return n!=="__proto__"}/**
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
 */function pk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mk=()=>pk().__FIREBASE_DEFAULTS__,gk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_k=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pu(n[1]);return e&&JSON.parse(e)},Jp=()=>{try{return mk()||gk()||_k()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yk=()=>{var n;return(n=Jp())===null||n===void 0?void 0:n.config},vk=n=>{var e;return(e=Jp())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Zt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Xw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[fu(JSON.stringify(t)),fu(JSON.stringify(o)),a].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function em(){var n;const e=(n=Jp())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wk(){return typeof self=="object"&&self.self===self}function Jw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zw(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function eT(){return Kw.NODE_ADMIN===!0}function Tk(){return!em()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ik(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const bk="FirebaseError";class zt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=bk,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ek(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zt(i,a,s)}}function Ek(n,e){return n.replace(Sk,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Sk=/\{\$([^}]+)}/g;/**
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
 */function Ya(n){return JSON.parse(n)}function at(n){return JSON.stringify(n)}/**
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
 */const tT=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ya(pu(r[0])||""),t=Ya(pu(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Ck=function(n){const e=tT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},kk=function(n){const e=tT(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function mn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function sr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function mu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gu(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Af(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Q_(r)&&Q_(o)){if(!Af(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Q_(n){return n!==null&&typeof n=="object"}/**
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
 */function Nr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Sa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Ak{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function nT(n,e){const t=new Nk(n,e);return t.subscribe.bind(t)}class Nk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");xk(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Yd),i.error===void 0&&(i.error=Yd),i.complete===void 0&&(i.complete=Yd);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yd(){}/**
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
 */const X=function(n,e,t,s){let i;if(s<e?i="at least "+e:s>t&&(i=t===0?"none":"no more than "+t),i){const r=n+" failed: Was called with "+s+(s===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(r)}};function rn(n,e){return`${n} failed: ${e} argument `}function pt(n,e,t,s){if(!(s&&!t)&&typeof t!="function")throw new Error(rn(n,e)+"must be a valid function.")}function Y_(n,e,t,s){if(!(s&&!t)&&(typeof t!="object"||t===null))throw new Error(rn(n,e)+"must be a valid context object.")}/**
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
 */const Dk=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Eh=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function B(n){return n&&n._delegate?n._delegate:n}class gn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pi="[DEFAULT]";/**
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
 */class sT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Zt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ok(e))try{this.getOrInitializeService({instanceIdentifier:Pi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pi){return this.instances.has(e)}getOptions(e=Pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rk(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pi){return this.component?this.component.multipleInstances?e:Pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rk(n){return n===Pi?void 0:n}function Ok(n){return n.instantiationMode==="EAGER"}/**
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
 */class iT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const tm=[];var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const rT={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Pk=me.INFO,Mk={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Lk=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Mk[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uo{constructor(e){this.name=e,this._logLevel=Pk,this._logHandler=Lk,this._userLogHandler=null,tm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}function Fk(n){tm.forEach(e=>{e.setLogLevel(n)})}function Vk(n,e){for(const t of tm){let s=null;e&&e.level&&(s=rT[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,r,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");r>=(s??i.logLevel)&&n({level:me[r].toLowerCase(),message:a,args:o,type:i.name})}}}const Uk=(n,e)=>e.some(t=>n instanceof t);let X_,J_;function qk(){return X_||(X_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bk(){return J_||(J_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oT=new WeakMap,Nf=new WeakMap,aT=new WeakMap,Xd=new WeakMap,nm=new WeakMap;function Wk(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Js(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&oT.set(t,n)}).catch(()=>{}),nm.set(e,n),e}function $k(n){if(Nf.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Nf.set(n,e)}let xf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Nf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||aT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Js(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jk(n){xf=n(xf)}function Gk(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Jd(this),e,...t);return aT.set(s,e.sort?e.sort():[e]),Js(s)}:Bk().includes(n)?function(...e){return n.apply(Jd(this),e),Js(oT.get(this))}:function(...e){return Js(n.apply(Jd(this),e))}}function zk(n){return typeof n=="function"?Gk(n):(n instanceof IDBTransaction&&$k(n),Uk(n,qk())?new Proxy(n,xf):n)}function Js(n){if(n instanceof IDBRequest)return Wk(n);if(Xd.has(n))return Xd.get(n);const e=zk(n);return e!==n&&(Xd.set(n,e),nm.set(e,n)),e}const Jd=n=>nm.get(n);function Hk(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Js(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Js(o.result),c.oldVersion,c.newVersion,Js(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Kk=["get","getKey","getAll","getAllKeys","count"],Qk=["put","add","delete","clear"],Zd=new Map;function Z_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zd.get(e))return Zd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Qk.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Kk.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Zd.set(e,r),r}jk(n=>({...n,get:(e,t,s)=>Z_(e,t)||n.get(e,t,s),has:(e,t)=>!!Z_(e,t)||n.has(e,t)}));/**
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
 */class Yk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xk(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Xk(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Df="@firebase/app",ey="0.9.3";/**
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
 */const ir=new Uo("@firebase/app"),Jk="@firebase/app-compat",Zk="@firebase/analytics-compat",eA="@firebase/analytics",tA="@firebase/app-check-compat",nA="@firebase/app-check",sA="@firebase/auth",iA="@firebase/auth-compat",rA="@firebase/database",oA="@firebase/database-compat",aA="@firebase/functions",cA="@firebase/functions-compat",lA="@firebase/installations",uA="@firebase/installations-compat",hA="@firebase/messaging",dA="@firebase/messaging-compat",fA="@firebase/performance",pA="@firebase/performance-compat",mA="@firebase/remote-config",gA="@firebase/remote-config-compat",_A="@firebase/storage",yA="@firebase/storage-compat",vA="@firebase/firestore",wA="@firebase/firestore-compat",TA="firebase",IA="9.17.1";/**
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
 */const ii="[DEFAULT]",bA={[Df]:"fire-core",[Jk]:"fire-core-compat",[eA]:"fire-analytics",[Zk]:"fire-analytics-compat",[nA]:"fire-app-check",[tA]:"fire-app-check-compat",[sA]:"fire-auth",[iA]:"fire-auth-compat",[rA]:"fire-rtdb",[oA]:"fire-rtdb-compat",[aA]:"fire-fn",[cA]:"fire-fn-compat",[lA]:"fire-iid",[uA]:"fire-iid-compat",[hA]:"fire-fcm",[dA]:"fire-fcm-compat",[fA]:"fire-perf",[pA]:"fire-perf-compat",[mA]:"fire-rc",[gA]:"fire-rc-compat",[_A]:"fire-gcs",[yA]:"fire-gcs-compat",[vA]:"fire-fst",[wA]:"fire-fst-compat","fire-js":"fire-js",[TA]:"fire-js-all"};/**
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
 */const ri=new Map,Xa=new Map;function _u(n,e){try{n.container.addComponent(e)}catch(t){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cT(n,e){n.container.addOrOverwriteComponent(e)}function Es(n){const e=n.name;if(Xa.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,n);for(const t of ri.values())_u(t,n);return!0}function lT(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function EA(n,e,t=ii){lT(n,e).clearInstance(t)}function SA(){Xa.clear()}/**
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
 */const CA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ws=new Ar("app","Firebase",CA);/**
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
 */let kA=class{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}};/**
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
 */const wi=IA;function sm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ii,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ws.create("bad-app-name",{appName:String(i)});if(t||(t=yk()),!t)throw ws.create("no-options");const r=ri.get(i);if(r){if(Af(t,r.options)&&Af(s,r.config))return r;throw ws.create("duplicate-app",{appName:i})}const o=new iT(i);for(const c of Xa.values())o.addComponent(c);const a=new kA(t,s,o);return ri.set(i,a),a}function AA(n=ii){const e=ri.get(n);if(!e&&n===ii)return sm();if(!e)throw ws.create("no-app",{appName:n});return e}function NA(){return Array.from(ri.values())}async function uT(n){const e=n.name;ri.has(e)&&(ri.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function kn(n,e,t){var s;let i=(s=bA[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Es(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function hT(n,e){if(n!==null&&typeof n!="function")throw ws.create("invalid-log-argument");Vk(n,e)}function dT(n){Fk(n)}/**
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
 */const xA="firebase-heartbeat-database",DA=1,Ja="firebase-heartbeat-store";let ef=null;function fT(){return ef||(ef=Hk(xA,DA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ja)}}}).catch(n=>{throw ws.create("idb-open",{originalErrorMessage:n.message})})),ef}async function RA(n){try{return(await fT()).transaction(Ja).objectStore(Ja).get(pT(n))}catch(e){if(e instanceof zt)ir.warn(e.message);else{const t=ws.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(t.message)}}}async function ty(n,e){try{const s=(await fT()).transaction(Ja,"readwrite");return await s.objectStore(Ja).put(e,pT(n)),s.done}catch(t){if(t instanceof zt)ir.warn(t.message);else{const s=ws.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ir.warn(s.message)}}}function pT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const OA=1024,PA=30*24*60*60*1e3;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FA(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ny();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=PA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ny(),{heartbeatsToSend:t,unsentEntries:s}=LA(this._heartbeatsCache.heartbeats),i=fu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ny(){return new Date().toISOString().substring(0,10)}function LA(n,e=OA){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sy(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),sy(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qa()?Ik().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ty(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ty(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sy(n){return fu(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function VA(n){Es(new gn("platform-logger",e=>new Yk(e),"PRIVATE")),Es(new gn("heartbeat",e=>new MA(e),"PRIVATE")),kn(Df,ey,n),kn(Df,ey,"esm2017"),kn("fire-js","")}VA("");const UA=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:zt,SDK_VERSION:wi,_DEFAULT_ENTRY_NAME:ii,_addComponent:_u,_addOrOverwriteComponent:cT,_apps:ri,_clearComponents:SA,_components:Xa,_getProvider:lT,_registerComponent:Es,_removeServiceInstance:EA,deleteApp:uT,getApp:AA,getApps:NA,initializeApp:sm,onLog:hT,registerVersion:kn,setLogLevel:dT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class qA{constructor(e,t){this._delegate=e,this.firebase=t,_u(e,new gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),uT(this._delegate)))}_getService(e,t=ii){var s;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((s=i.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=ii){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){_u(this._delegate,e)}_addOrOverwriteComponent(e){cT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const BA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},iy=new Ar("app-compat","Firebase",BA);/**
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
 */function WA(n){const e={},t={__esModule:!0,initializeApp:r,app:i,registerVersion:kn,setLogLevel:dT,onLog:hT,apps:null,SDK_VERSION:wi,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:UA}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(l){delete e[l]}function i(l){if(l=l||ii,!mn(e,l))throw iy.create("no-app",{appName:l});return e[l]}i.App=n;function r(l,u={}){const h=sm(l,u);if(mn(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Es(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw iy.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Ka(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
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
 */function mT(){const n=WA(qA);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:mT,extendNamespace:e,createSubscribe:nT,ErrorFactory:Ar,deepExtend:Ka});function e(t){Ka(n,t)}return n}const $A=mT();/**
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
 */const ry=new Uo("@firebase/app-compat"),jA="@firebase/app-compat",GA="0.2.3";/**
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
 */function zA(n){kn(jA,GA,n)}/**
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
 */if(wk()&&self.firebase!==void 0){ry.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&ry.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ht=$A;zA();var HA="firebase",KA="9.17.1";/**
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
 */Ht.registerVersion(HA,KA,"app-compat");var QA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,im=im||{},ee=QA||self;function yu(){}function Sh(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Hc(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function YA(n){return Object.prototype.hasOwnProperty.call(n,tf)&&n[tf]||(n[tf]=++XA)}var tf="closure_uid_"+(1e9*Math.random()>>>0),XA=0;function JA(n,e,t){return n.call.apply(n.bind,arguments)}function ZA(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Mt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Mt=JA:Mt=ZA,Mt.apply(null,arguments)}function Ul(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function Ot(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ti(){this.s=this.s,this.o=this.o}var eN=0;Ti.prototype.s=!1;Ti.prototype.na=function(){!this.s&&(this.s=!0,this.M(),eN!=0)&&YA(this)};Ti.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gT=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function rm(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function oy(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Sh(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function Lt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var tN=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ee.addEventListener("test",yu,e),ee.removeEventListener("test",yu,e)}catch{}return n}();function vu(n){return/^[\s\xa0]*$/.test(n)}var ay=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function nf(n,e){return n<e?-1:n>e?1:0}function Ch(){var n=ee.navigator;return n&&(n=n.userAgent)?n:""}function zn(n){return Ch().indexOf(n)!=-1}function om(n){return om[" "](n),n}om[" "]=yu;function nN(n){var e=rN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var sN=zn("Opera"),fo=zn("Trident")||zn("MSIE"),_T=zn("Edge"),Rf=_T||fo,yT=zn("Gecko")&&!(Ch().toLowerCase().indexOf("webkit")!=-1&&!zn("Edge"))&&!(zn("Trident")||zn("MSIE"))&&!zn("Edge"),iN=Ch().toLowerCase().indexOf("webkit")!=-1&&!zn("Edge");function vT(){var n=ee.document;return n?n.documentMode:void 0}var wu;e:{var sf="",rf=function(){var n=Ch();if(yT)return/rv:([^\);]+)(\)|;)/.exec(n);if(_T)return/Edge\/([\d\.]+)/.exec(n);if(fo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(iN)return/WebKit\/(\S+)/.exec(n);if(sN)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(rf&&(sf=rf?rf[1]:""),fo){var of=vT();if(of!=null&&of>parseFloat(sf)){wu=String(of);break e}}wu=sf}var rN={};function oN(){return nN(function(){let n=0;const e=ay(String(wu)).split("."),t=ay("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=nf(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||nf(i[2].length==0,r[2].length==0)||nf(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Of;if(ee.document&&fo){var cy=vT();Of=cy||parseInt(wu,10)||void 0}else Of=void 0;var aN=Of;function Za(n,e){if(Lt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(yT){e:{try{om(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:cN[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Za.X.h.call(this)}}Ot(Za,Lt);var cN={2:"touch",3:"pen",4:"mouse"};Za.prototype.h=function(){Za.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Kc="closure_listenable_"+(1e6*Math.random()|0),lN=0;function uN(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++lN,this.ba=this.ea=!1}function kh(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function am(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function wT(n){const e={};for(const t in n)e[t]=n[t];return e}const ly="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function TT(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<ly.length;r++)t=ly[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Ah(n){this.src=n,this.g={},this.h=0}Ah.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Mf(n,e,s,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new uN(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function Pf(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=gT(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(kh(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Mf(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var cm="closure_lm_"+(1e6*Math.random()|0),af={};function IT(n,e,t,s,i){if(s&&s.once)return ET(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)IT(n,e[r],t,s,i);return null}return t=hm(t),n&&n[Kc]?n.N(e,t,Hc(s)?!!s.capture:!!s,i):bT(n,e,t,!1,s,i)}function bT(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=Hc(i)?!!i.capture:!!i,a=um(n);if(a||(n[cm]=a=new Ah(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=hN(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)tN||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(CT(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function hN(){function n(t){return e.call(n.src,n.listener,t)}const e=dN;return n}function ET(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ET(n,e[r],t,s,i);return null}return t=hm(t),n&&n[Kc]?n.O(e,t,Hc(s)?!!s.capture:!!s,i):bT(n,e,t,!0,s,i)}function ST(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ST(n,e[r],t,s,i);else s=Hc(s)?!!s.capture:!!s,t=hm(t),n&&n[Kc]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Mf(r,t,s,i),-1<t&&(kh(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=um(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Mf(e,t,s,i)),(t=-1<n?e[n]:null)&&lm(t))}function lm(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Kc])Pf(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(CT(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=um(e))?(Pf(t,n),t.h==0&&(t.src=null,e[cm]=null)):kh(n)}}}function CT(n){return n in af?af[n]:af[n]="on"+n}function dN(n,e){if(n.ba)n=!0;else{e=new Za(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&lm(n),n=t.call(s,e)}return n}function um(n){return n=n[cm],n instanceof Ah?n:null}var cf="__closure_events_fn_"+(1e9*Math.random()>>>0);function hm(n){return typeof n=="function"?n:(n[cf]||(n[cf]=function(e){return n.handleEvent(e)}),n[cf])}function wt(){Ti.call(this),this.i=new Ah(this),this.P=this,this.I=null}Ot(wt,Ti);wt.prototype[Kc]=!0;wt.prototype.removeEventListener=function(n,e,t,s){ST(this,n,e,t,s)};function Nt(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Lt(e,n);else if(e instanceof Lt)e.target=e.target||n;else{var i=e;e=new Lt(s,n),TT(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=ql(o,s,!0,e)&&i}if(o=e.g=n,i=ql(o,s,!0,e)&&i,i=ql(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=ql(o,s,!1,e)&&i}wt.prototype.M=function(){if(wt.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)kh(t[s]);delete n.g[e],n.h--}}this.I=null};wt.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};wt.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function ql(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Pf(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var dm=ee.JSON.stringify;function fN(){var n=NT;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class pN{constructor(){this.h=this.g=null}add(e,t){const s=kT.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var kT=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new mN,n=>n.reset());class mN{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function gN(n){ee.setTimeout(()=>{throw n},0)}function AT(n,e){Lf||_N(),Ff||(Lf(),Ff=!0),NT.add(n,e)}var Lf;function _N(){var n=ee.Promise.resolve(void 0);Lf=function(){n.then(yN)}}var Ff=!1,NT=new pN;function yN(){for(var n;n=fN();){try{n.h.call(n.g)}catch(t){gN(t)}var e=kT;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ff=!1}function Nh(n,e){wt.call(this),this.h=n||1,this.g=e||ee,this.j=Mt(this.lb,this),this.l=Date.now()}Ot(Nh,wt);j=Nh.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Nt(this,"tick"),this.ca&&(fm(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fm(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}j.M=function(){Nh.X.M.call(this),fm(this),delete this.g};function pm(n,e,t){if(typeof n=="function")t&&(n=Mt(n,t));else if(n&&typeof n.handleEvent=="function")n=Mt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(n,e||0)}function xT(n){n.g=pm(()=>{n.g=null,n.i&&(n.i=!1,xT(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class vN extends Ti{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xT(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(n){Ti.call(this),this.h=n,this.g={}}Ot(ec,Ti);var uy=[];function DT(n,e,t,s){Array.isArray(t)||(t&&(uy[0]=t.toString()),t=uy);for(var i=0;i<t.length;i++){var r=IT(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function RT(n){am(n.g,function(e,t){this.g.hasOwnProperty(t)&&lm(e)},n),n.g={}}ec.prototype.M=function(){ec.X.M.call(this),RT(this)};ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xh(){this.g=!0}xh.prototype.Aa=function(){this.g=!1};function wN(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function TN(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function eo(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+bN(n,t)+(s?" "+s:"")})}function IN(n,e){n.info(function(){return"TIMEOUT: "+e})}xh.prototype.info=function(){};function bN(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return dm(t)}catch{return e}}var xr={},hy=null;function Dh(){return hy=hy||new wt}xr.Pa="serverreachability";function OT(n){Lt.call(this,xr.Pa,n)}Ot(OT,Lt);function tc(n){const e=Dh();Nt(e,new OT(e))}xr.STAT_EVENT="statevent";function PT(n,e){Lt.call(this,xr.STAT_EVENT,n),this.stat=e}Ot(PT,Lt);function $t(n){const e=Dh();Nt(e,new PT(e,n))}xr.Qa="timingevent";function MT(n,e){Lt.call(this,xr.Qa,n),this.size=e}Ot(MT,Lt);function Qc(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){n()},e)}var Rh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},LT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function mm(){}mm.prototype.h=null;function dy(n){return n.h||(n.h=n.i())}function FT(){}var Yc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function gm(){Lt.call(this,"d")}Ot(gm,Lt);function _m(){Lt.call(this,"c")}Ot(_m,Lt);var Vf;function Oh(){}Ot(Oh,mm);Oh.prototype.g=function(){return new XMLHttpRequest};Oh.prototype.i=function(){return{}};Vf=new Oh;function Xc(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new ec(this),this.O=EN,n=Rf?125:void 0,this.T=new Nh(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new VT}function VT(){this.i=null,this.g="",this.h=!1}var EN=45e3,Uf={},Tu={};j=Xc.prototype;j.setTimeout=function(n){this.O=n};function qf(n,e,t){n.K=1,n.v=Mh(Ss(e)),n.s=t,n.P=!0,UT(n,null)}function UT(n,e){n.F=Date.now(),Jc(n),n.A=Ss(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),HT(t.i,"t",s),n.C=0,t=n.l.H,n.h=new VT,n.g=pI(n.l,t?e:null,!n.s),0<n.N&&(n.L=new vN(Mt(n.La,n,n.g),n.N)),DT(n.S,n.g,"readystatechange",n.ib),e=n.H?wT(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),tc(),wN(n.j,n.u,n.A,n.m,n.U,n.s)}j.ib=function(n){n=n.target;const e=this.L;e&&gs(n)==3?e.l():this.La(n)};j.La=function(n){try{if(n==this.g)e:{const u=gs(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Rf||this.g&&(this.h.h||this.g.fa()||gy(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?tc(3):tc(2)),Ph(this);var t=this.g.aa();this.Y=t;t:if(qT(this)){var s=gy(this.g);n="";var i=s.length,r=gs(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$i(this),Oa(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,TN(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vu(a)){var l=a;break t}}l=null}if(t=l)eo(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Bf(this,t);else{this.i=!1,this.o=3,$t(12),$i(this),Oa(this);break e}}this.P?(BT(this,u,o),Rf&&this.i&&u==3&&(DT(this.S,this.T,"tick",this.hb),this.T.start())):(eo(this.j,this.m,o,null),Bf(this,o)),u==4&&$i(this),this.i&&!this.I&&(u==4?uI(this.l,this):(this.i=!1,Jc(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,$t(12)):(this.o=0,$t(13)),$i(this),Oa(this)}}}catch{}finally{}};function qT(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function BT(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=SN(n,t),i==Tu){e==4&&(n.o=4,$t(14),s=!1),eo(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Uf){n.o=4,$t(15),eo(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else eo(n.j,n.m,i,null),Bf(n,i);qT(n)&&i!=Tu&&i!=Uf&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,$t(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Em(e),e.K=!0,$t(11))):(eo(n.j,n.m,t,"[Invalid Chunked Response]"),$i(n),Oa(n))}j.hb=function(){if(this.g){var n=gs(this.g),e=this.g.fa();this.C<e.length&&(Ph(this),BT(this,n,e),this.i&&n!=4&&Jc(this))}};function SN(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Tu:(t=Number(e.substring(t,s)),isNaN(t)?Uf:(s+=1,s+t>e.length?Tu:(e=e.substr(s,t),n.C=s+t,e)))}j.cancel=function(){this.I=!0,$i(this)};function Jc(n){n.V=Date.now()+n.O,WT(n,n.O)}function WT(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Qc(Mt(n.gb,n),e)}function Ph(n){n.B&&(ee.clearTimeout(n.B),n.B=null)}j.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(IN(this.j,this.A),this.K!=2&&(tc(),$t(17)),$i(this),this.o=2,Oa(this)):WT(this,this.V-n)};function Oa(n){n.l.G==0||n.I||uI(n.l,n)}function $i(n){Ph(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,fm(n.T),RT(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Bf(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Wf(t.h,n))){if(!n.J&&Wf(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Eu(t),Vh(t);else break e;bm(t),$t(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=Qc(Mt(t.cb,t),6e3));if(1>=YT(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else ji(t,11)}else if((n.J||t.g==n)&&Eu(t),!vu(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ym(r,r.h),r.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,Fe(s.F,s.D,m))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=fI(s,s.H?s.ka:null,s.V),o.J){XT(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ph(a),Jc(a)),s.g=o}else cI(s);0<t.i.length&&Uh(t)}else l[0]!="stop"&&l[0]!="close"||ji(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ji(t,7):Im(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}tc(4)}catch{}}function CN(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Sh(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function kN(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Sh(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function $T(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Sh(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=kN(n),s=CN(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var jT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AN(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qi(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Qi){this.h=e!==void 0?e:n.h,Iu(this,n.j),this.s=n.s,this.g=n.g,bu(this,n.m),this.l=n.l,e=n.i;var t=new nc;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),fy(this,t),this.o=n.o}else n&&(t=String(n).match(jT))?(this.h=!!e,Iu(this,t[1]||"",!0),this.s=Ca(t[2]||""),this.g=Ca(t[3]||"",!0),bu(this,t[4]),this.l=Ca(t[5]||"",!0),fy(this,t[6]||"",!0),this.o=Ca(t[7]||"")):(this.h=!!e,this.i=new nc(null,this.h))}Qi.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ka(e,py,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ka(e,py,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ka(t,t.charAt(0)=="/"?DN:xN,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ka(t,ON)),n.join("")};function Ss(n){return new Qi(n)}function Iu(n,e,t){n.j=t?Ca(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function bu(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function fy(n,e,t){e instanceof nc?(n.i=e,PN(n.i,n.h)):(t||(e=ka(e,RN)),n.i=new nc(e,n.h))}function Fe(n,e,t){n.i.set(e,t)}function Mh(n){return Fe(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ca(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ka(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,NN),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function NN(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var py=/[#\/\?@]/g,xN=/[#\?:]/g,DN=/[#\?]/g,RN=/[#\?@]/g,ON=/#/g;function nc(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ii(n){n.g||(n.g=new Map,n.h=0,n.i&&AN(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}j=nc.prototype;j.add=function(n,e){Ii(this),this.i=null,n=qo(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function GT(n,e){Ii(n),e=qo(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function zT(n,e){return Ii(n),e=qo(n,e),n.g.has(e)}j.forEach=function(n,e){Ii(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};j.oa=function(){Ii(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};j.W=function(n){Ii(this);let e=[];if(typeof n=="string")zT(this,n)&&(e=e.concat(this.g.get(qo(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};j.set=function(n,e){return Ii(this),this.i=null,n=qo(this,n),zT(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};j.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function HT(n,e,t){GT(n,e),0<t.length&&(n.i=null,n.g.set(qo(n,e),rm(t)),n.h+=t.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function qo(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function PN(n,e){e&&!n.j&&(Ii(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(GT(this,s),HT(this,i,t))},n)),n.j=e}var MN=class{constructor(e,t){this.h=e,this.g=t}};function KT(n){this.l=n||LN,ee.PerformanceNavigationTiming?(n=ee.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ee.g&&ee.g.Ga&&ee.g.Ga()&&ee.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LN=10;function QT(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function YT(n){return n.h?1:n.g?n.g.size:0}function Wf(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ym(n,e){n.g?n.g.add(e):n.h=e}function XT(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}KT.prototype.cancel=function(){if(this.i=JT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function JT(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return rm(n.i)}function vm(){}vm.prototype.stringify=function(n){return ee.JSON.stringify(n,void 0)};vm.prototype.parse=function(n){return ee.JSON.parse(n,void 0)};function FN(){this.g=new vm}function VN(n,e,t){const s=t||"";try{$T(n,function(i,r){let o=i;Hc(i)&&(o=dm(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function UN(n,e){const t=new xh;if(ee.Image){const s=new Image;s.onload=Ul(Bl,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Ul(Bl,t,s,"TestLoadImage: error",!1,e),s.onabort=Ul(Bl,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ul(Bl,t,s,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Bl(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Zc(n){this.l=n.ac||null,this.j=n.jb||!1}Ot(Zc,mm);Zc.prototype.g=function(){return new Lh(this.l,this.j)};Zc.prototype.i=function(n){return function(){return n}}({});function Lh(n,e){wt.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=wm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ot(Lh,wt);var wm=0;j=Lh.prototype;j.open=function(n,e){if(this.readyState!=wm)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,sc(this)};j.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,el(this)),this.readyState=wm};j.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,sc(this)),this.g&&(this.readyState=3,sc(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ZT(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function ZT(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}j.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?el(this):sc(this),this.readyState==3&&ZT(this)}};j.Va=function(n){this.g&&(this.response=this.responseText=n,el(this))};j.Ua=function(n){this.g&&(this.response=n,el(this))};j.ga=function(){this.g&&el(this)};function el(n){n.readyState=4,n.l=null,n.j=null,n.A=null,sc(n)}j.setRequestHeader=function(n,e){this.v.append(n,e)};j.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function sc(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Lh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var qN=ee.JSON.parse;function Ke(n){wt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=eI,this.K=this.L=!1}Ot(Ke,wt);var eI="",BN=/^https?$/i,WN=["POST","PUT"];j=Ke.prototype;j.Ka=function(n){this.L=n};j.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vf.g(),this.C=this.u?dy(this.u):dy(Vf),this.g.onreadystatechange=Mt(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){my(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=ee.FormData&&n instanceof ee.FormData,!(0<=gT(WN,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sI(this),0<this.B&&((this.K=$N(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mt(this.qa,this)):this.A=pm(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){my(this,r)}};function $N(n){return fo&&oN()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}j.qa=function(){typeof im<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))};function my(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,tI(n),Fh(n)}function tI(n){n.D||(n.D=!0,Nt(n,"complete"),Nt(n,"error"))}j.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Nt(this,"complete"),Nt(this,"abort"),Fh(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fh(this,!0)),Ke.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?nI(this):this.fb())};j.fb=function(){nI(this)};function nI(n){if(n.h&&typeof im<"u"&&(!n.C[1]||gs(n)!=4||n.aa()!=2)){if(n.v&&gs(n)==4)pm(n.Ha,0,n);else if(Nt(n,"readystatechange"),gs(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(jT)[1]||null;if(!i&&ee.self&&ee.self.location){var r=ee.self.location.protocol;i=r.substr(0,r.length-1)}s=!BN.test(i?i.toLowerCase():"")}t=s}if(t)Nt(n,"complete"),Nt(n,"success");else{n.m=6;try{var o=2<gs(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",tI(n)}}finally{Fh(n)}}}}function Fh(n,e){if(n.g){sI(n);const t=n.g,s=n.C[0]?yu:null;n.g=null,n.C=null,e||Nt(n,"ready");try{t.onreadystatechange=s}catch{}}}function sI(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(ee.clearTimeout(n.A),n.A=null)}function gs(n){return n.g?n.g.readyState:0}j.aa=function(){try{return 2<gs(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),qN(e)}};function gy(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case eI:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iI(n){let e="";return am(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Tm(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=iI(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Fe(n,e,t))}function ha(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function rI(n){this.Ca=0,this.i=[],this.j=new xh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ha("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ha("baseRetryDelayMs",5e3,n),this.bb=ha("retryDelaySeedMs",1e4,n),this.$a=ha("forwardChannelMaxRetries",2,n),this.ta=ha("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new KT(n&&n.concurrentRequestLimit),this.Fa=new FN,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=rI.prototype;j.ma=8;j.G=1;function Im(n){if(oI(n),n.G==3){var e=n.U++,t=Ss(n.F);Fe(t,"SID",n.I),Fe(t,"RID",e),Fe(t,"TYPE","terminate"),tl(n,t),e=new Xc(n,n.j,e,void 0),e.K=2,e.v=Mh(Ss(t)),t=!1,ee.navigator&&ee.navigator.sendBeacon&&(t=ee.navigator.sendBeacon(e.v.toString(),"")),!t&&ee.Image&&(new Image().src=e.v,t=!0),t||(e.g=pI(e.l,null),e.g.da(e.v)),e.F=Date.now(),Jc(e)}dI(n)}function Vh(n){n.g&&(Em(n),n.g.cancel(),n.g=null)}function oI(n){Vh(n),n.u&&(ee.clearTimeout(n.u),n.u=null),Eu(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&ee.clearTimeout(n.m),n.m=null)}function Uh(n){QT(n.h)||n.m||(n.m=!0,AT(n.Ja,n),n.C=0)}function jN(n,e){return YT(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Qc(Mt(n.Ja,n,e),hI(n,n.C)),n.C++,!0)}j.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Xc(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=wT(r),TT(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=aI(this,i,e),t=Ss(this.F),Fe(t,"RID",n),Fe(t,"CVER",22),this.D&&Fe(t,"X-HTTP-Session-Id",this.D),tl(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(iI(r)))+"&"+e:this.o&&Tm(t,this.o,r)),ym(this.h,i),this.Ya&&Fe(t,"TYPE","init"),this.O?(Fe(t,"$req",e),Fe(t,"SID","null"),i.Z=!0,qf(i,t,null)):qf(i,t,e),this.G=2}}else this.G==3&&(n?_y(this,n):this.i.length==0||QT(this.h)||_y(this))};function _y(n,e){var t;e?t=e.m:t=n.U++;const s=Ss(n.F);Fe(s,"SID",n.I),Fe(s,"RID",t),Fe(s,"AID",n.T),tl(n,s),n.o&&n.s&&Tm(s,n.o,n.s),t=new Xc(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=aI(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),ym(n.h,t),qf(t,s,e)}function tl(n,e){n.ia&&am(n.ia,function(t,s){Fe(e,s,t)}),n.l&&$T({},function(t,s){Fe(e,s,t)})}function aI(n,e,t){t=Math.min(n.i.length,t);var s=n.l?Mt(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{VN(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function cI(n){n.g||n.u||(n.Z=1,AT(n.Ia,n),n.A=0)}function bm(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Qc(Mt(n.Ia,n),hI(n,n.A)),n.A++,!0)}j.Ia=function(){if(this.u=null,lI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Qc(Mt(this.eb,this),n)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$t(10),Vh(this),lI(this))};function Em(n){n.B!=null&&(ee.clearTimeout(n.B),n.B=null)}function lI(n){n.g=new Xc(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Ss(n.sa);Fe(e,"RID","rpc"),Fe(e,"SID",n.I),Fe(e,"CI",n.L?"0":"1"),Fe(e,"AID",n.T),Fe(e,"TYPE","xmlhttp"),tl(n,e),n.o&&n.s&&Tm(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Mh(Ss(e)),t.s=null,t.P=!0,UT(t,n)}j.cb=function(){this.v!=null&&(this.v=null,Vh(this),bm(this),$t(19))};function Eu(n){n.v!=null&&(ee.clearTimeout(n.v),n.v=null)}function uI(n,e){var t=null;if(n.g==e){Eu(n),Em(n),n.g=null;var s=2}else if(Wf(n.h,e))t=e.D,XT(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=Dh(),Nt(s,new MT(s,t)),Uh(n)}else cI(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&jN(n,e)||s==2&&bm(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:ji(n,5);break;case 4:ji(n,10);break;case 3:ji(n,6);break;default:ji(n,2)}}}function hI(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function ji(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=Mt(n.kb,n);t||(t=new Qi("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Iu(t,"https"),Mh(t)),UN(t.toString(),s)}else $t(2);n.G=0,n.l&&n.l.va(e),dI(n),oI(n)}j.kb=function(n){n?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function dI(n){if(n.G=0,n.la=[],n.l){const e=JT(n.h);(e.length!=0||n.i.length!=0)&&(oy(n.la,e),oy(n.la,n.i),n.h.i.length=0,rm(n.i),n.i.length=0),n.l.ua()}}function fI(n,e,t){var s=t instanceof Qi?Ss(t):new Qi(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),bu(s,s.m);else{var i=ee.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Qi(null,void 0);s&&Iu(r,s),e&&(r.g=e),i&&bu(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&Fe(s,t,e),Fe(s,"VER",n.ma),tl(n,s),s}function pI(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Ke(new Zc({jb:!0})):new Ke(n.ra),e.Ka(n.H),e}function mI(){}j=mI.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function Su(){if(fo&&!(10<=Number(aN)))throw Error("Environmental error: no available transport.")}Su.prototype.g=function(n,e){return new _n(n,e)};function _n(n,e){wt.call(this),this.g=new rI(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!vu(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vu(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Bo(this)}Ot(_n,wt);_n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;$t(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=fI(n,null,n.V),Uh(n)};_n.prototype.close=function(){Im(this.g)};_n.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=dm(n),n=t);e.i.push(new MN(e.ab++,n)),e.G==3&&Uh(e)};_n.prototype.M=function(){this.g.l=null,delete this.j,Im(this.g),delete this.g,_n.X.M.call(this)};function gI(n){gm.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ot(gI,gm);function _I(){_m.call(this),this.status=1}Ot(_I,_m);function Bo(n){this.g=n}Ot(Bo,mI);Bo.prototype.xa=function(){Nt(this.g,"a")};Bo.prototype.wa=function(n){Nt(this.g,new gI(n))};Bo.prototype.va=function(n){Nt(this.g,new _I)};Bo.prototype.ua=function(){Nt(this.g,"b")};Su.prototype.createWebChannel=Su.prototype.g;_n.prototype.send=_n.prototype.u;_n.prototype.open=_n.prototype.m;_n.prototype.close=_n.prototype.close;Rh.NO_ERROR=0;Rh.TIMEOUT=8;Rh.HTTP_ERROR=6;LT.COMPLETE="complete";FT.EventType=Yc;Yc.OPEN="a";Yc.CLOSE="b";Yc.ERROR="c";Yc.MESSAGE="d";wt.prototype.listen=wt.prototype.N;Ke.prototype.listenOnce=Ke.prototype.O;Ke.prototype.getLastError=Ke.prototype.Oa;Ke.prototype.getLastErrorCode=Ke.prototype.Ea;Ke.prototype.getStatus=Ke.prototype.aa;Ke.prototype.getResponseJson=Ke.prototype.Sa;Ke.prototype.getResponseText=Ke.prototype.fa;Ke.prototype.send=Ke.prototype.da;Ke.prototype.setWithCredentials=Ke.prototype.Ka;var GN=function(){return new Su},zN=function(){return Dh()},lf=Rh,HN=LT,KN=xr,yy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},QN=Zc,Wl=FT,YN=Ke;const vy="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Wo="9.17.1";/**
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
 */const oi=new Uo("@firebase/firestore");function $f(){return oi.logLevel}function XN(n){oi.setLogLevel(n)}function N(n,...e){if(oi.logLevel<=me.DEBUG){const t=e.map(Sm);oi.debug(`Firestore (${Wo}): ${n}`,...t)}}function Ze(n,...e){if(oi.logLevel<=me.ERROR){const t=e.map(Sm);oi.error(`Firestore (${Wo}): ${n}`,...t)}}function po(n,...e){if(oi.logLevel<=me.WARN){const t=e.map(Sm);oi.warn(`Firestore (${Wo}): ${n}`,...t)}}function Sm(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function q(n="Unexpected state"){const e=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: `+n;throw Ze(e),new Error(e)}function G(n,e){n||q()}function JN(n,e){n||q()}function F(n,e){return n}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class yI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(mt.UNAUTHENTICATED))}shutdown(){}}class ex{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tx{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new yt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(G(typeof s.accessToken=="string"),new yI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new mt(e)}}class nx{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(G(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sx{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i}getToken(){return Promise.resolve(new nx(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ix{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rx{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=r=>{r.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.A=t.token,new ix(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ox(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class vI{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=ox(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function ne(n,e){return n<e?-1:n>e?1:0}function mo(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}function wI(n){return n+"\0"}/**
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
 */class qe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new qe(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new qe(0,0))}static max(){return new H(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ic{constructor(e,t,s){t===void 0?t=0:t>e.length&&q(),s===void 0?s=e.length-t:s>e.length-t&&q(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ic.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ic?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ge extends ic{construct(e,t,s){return new ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const ax=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends ic{construct(e,t,s){return new et(e,t,s)}static isValidIdentifier(e){return ax.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ge.fromString(e))}static fromName(e){return new M(ge.fromString(e).popFirst(5))}static empty(){return new M(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ge(e.slice()))}}/**
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
 */class TI{constructor(e,t,s,i){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=i}}function jf(n){return n.fields.find(e=>e.kind===2)}function Mi(n){return n.fields.filter(e=>e.kind!==2)}TI.UNKNOWN_ID=-1;class cx{constructor(e,t){this.fieldPath=e,this.kind=t}}class Cu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Cu(0,yn.min())}}function II(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(s===1e9?new qe(t+1,0):new qe(t,s));return new yn(i,M.empty(),e)}function bI(n){return new yn(n.readTime,n.key,-1)}class yn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new yn(H.min(),M.empty(),-1)}static max(){return new yn(H.max(),M.empty(),-1)}}function Cm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const EI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bi(n){if(n.code!==E.FAILED_PRECONDITION||n.message!==EI)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new T((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof T?t:T.resolve(t)}catch(t){return T.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):T.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):T.reject(t)}static resolve(e){return new T((t,s)=>{t(e)})}static reject(e){return new T((t,s)=>{s(e)})}static waitFor(e){return new T((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=T.resolve(!1);for(const s of e)t=t.next(i=>i?T.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new T((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,t){return new T((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}/**
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
 */class qh{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new yt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Pa(e,t.error)):this.P.resolve()},this.transaction.onerror=s=>{const i=km(s.target.error);this.P.reject(new Pa(e,i))}}static open(e,t,s,i){try{return new qh(t,e.transaction(i,s))}catch(r){throw new Pa(t,r)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ux(t)}}class On{constructor(e,t,s){this.name=e,this.version=t,this.S=s,On.D($e())===12.2&&Ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Fi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Qa())return!1;if(On.N())return!0;const e=$e(),t=On.D(e),s=0<t&&t<10,i=On.k(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;t(o)},i.onblocked=()=>{s(new Pa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new A(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new A(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Pa(e,o))},i.onupgradeneeded=r=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.S.$(o,i.transaction,r.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,i){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=qh.open(this.db,e,r?"readonly":"readwrite",s),c=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),T.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class lx{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return Fi(this.q.delete())}}class Pa extends A{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ei(n){return n.name==="IndexedDbTransactionError"}class ux{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(N("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),Fi(s)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Fi(this.store.add(e))}get(e){return Fi(this.store.get(e)).next(t=>(t===void 0&&(t=null),N("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Fi(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Fi(this.store.count())}W(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const i=this.cursor(s),r=[];return this.H(i,(o,a)=>{r.push(a)}).next(()=>r)}{const i=this.store.getAll(s.range);return new T((r,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{r(a.target.result)}})}}J(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new T((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}Y(e,t){N("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.X=!1;const i=this.cursor(s);return this.H(i,(r,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const i=this.cursor(s);return this.H(i,t)}tt(e){const t=this.cursor({});return new T((s,i)=>{t.onerror=r=>{const o=km(r.target.error);i(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,t){const s=[];return new T((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new lx(a),l=t(a.primaryKey,a.value,c);if(l instanceof T){const u=l.catch(h=>(c.done(),T.reject(h)));s.push(u)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>T.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Fi(n){return new T((e,t)=>{n.onsuccess=s=>{const i=s.target.result;e(i)},n.onerror=s=>{const i=km(s.target.error);t(i)}})}let wy=!1;function km(n){const e=On.D($e());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return wy||(wy=!0,setTimeout(()=>{throw s},0)),s}}return n}class hx{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){Ei(t)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await bi(t)}await this.nt(6e4)})}}class dx{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const s=new Set;let i=t,r=!0;return T.doWhile(()=>r===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return N("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,s.add(o)});r=!1})).next(()=>t-i)}rt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,s).next(r=>{const o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,r)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let s=e;return t.changes.forEach((i,r)=>{const o=bI(r);Cm(o,s)>0&&(s=o)}),new yn(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class en{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}en.at=-1;/**
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
 */class fx{constructor(e,t,s,i,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ai{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Ty(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function CI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */function nl(n){return n==null}function rc(n){return n===0&&1/n==-1/0}function kI(n){return typeof n=="number"&&Number.isInteger(n)&&!rc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function px(){return typeof atob<"u"}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ct(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const mx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(n){if(G(!!n),typeof n=="string"){let e=0;const t=mx.exec(n);if(G(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ge(n.seconds),nanos:Ge(n.nanos)}}function Ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rr(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
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
 */function Am(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function AI(n){const e=n.mapValue.fields.__previous_value__;return Am(e)?AI(e):e}function oc(n){const e=ci(n.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */const Ks={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tu={nullValue:"NULL_VALUE"};function or(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Am(n)?4:NI(n)?9007199254740991:10:q()}function ss(n,e){if(n===e)return!0;const t=or(n);if(t!==or(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return oc(n).isEqual(oc(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ci(s.timestampValue),o=ci(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return rr(s.bytesValue).isEqual(rr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Ge(s.doubleValue),o=Ge(i.doubleValue);return r===o?rc(r)===rc(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return mo(n.arrayValue.values||[],e.arrayValue.values||[],ss);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ty(r)!==Ty(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ss(r[a],o[a])))return!1;return!0}(n,e);default:return q()}}function ac(n,e){return(n.values||[]).find(t=>ss(t,e))!==void 0}function li(n,e){if(n===e)return 0;const t=or(n),s=or(e);if(t!==s)return ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Ge(i.integerValue||i.doubleValue),a=Ge(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Iy(n.timestampValue,e.timestampValue);case 4:return Iy(oc(n),oc(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(i,r){const o=rr(i),a=rr(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ne(Ge(i.latitude),Ge(r.latitude));return o!==0?o:ne(Ge(i.longitude),Ge(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=li(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ks.mapValue&&r===Ks.mapValue)return 0;if(i===Ks.mapValue)return 1;if(r===Ks.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const d=li(o[a[u]],c[l[u]]);if(d!==0)return d}return ne(a.length,l.length)}(n.mapValue,e.mapValue);default:throw q()}}function Iy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=ci(n),s=ci(e),i=ne(t.seconds,s.seconds);return i!==0?i:ne(t.nanos,s.nanos)}function go(n){return Gf(n)}function Gf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=ci(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?rr(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,M.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Gf(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Gf(s.fields[a])}`;return r+"}"}(n.mapValue):q();var e,t}function ar(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function zf(n){return!!n&&"integerValue"in n}function cc(n){return!!n&&"arrayValue"in n}function by(n){return!!n&&"nullValue"in n}function Ey(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nu(n){return!!n&&"mapValue"in n}function Ma(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Dr(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ma(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ma(n.arrayValue.values[t]);return e}return Object.assign({},n)}function NI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function gx(n){return"nullValue"in n?tu:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ar(ai.empty(),M.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:q()}function _x(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ar(ai.empty(),M.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Ks:q()}function Sy(n,e){const t=li(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Cy(n,e){const t=li(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ui{constructor(e,t){this.position=e,this.inclusive=t}}function ky(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),t.key):s=li(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ay(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ss(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xI{}class fe extends xI{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new yx(e,t,s):t==="array-contains"?new Tx(e,s):t==="in"?new LI(e,s):t==="not-in"?new Ix(e,s):t==="array-contains-any"?new bx(e,s):new fe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new vx(e,s):new wx(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(li(t,this.value)):t!==null&&or(this.value)===or(t)&&this.matchesComparison(li(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Te extends xI{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Te(e,t)}matches(e){return _o(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function _o(n){return n.op==="and"}function Hf(n){return n.op==="or"}function Nm(n){return DI(n)&&_o(n)}function DI(n){for(const e of n.filters)if(e instanceof Te)return!1;return!0}function Kf(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+go(n.value);if(Nm(n))return n.filters.map(e=>Kf(e)).join(",");{const e=n.filters.map(t=>Kf(t)).join(",");return`${n.op}(${e})`}}function RI(n,e){return n instanceof fe?function(t,s){return s instanceof fe&&t.op===s.op&&t.field.isEqual(s.field)&&ss(t.value,s.value)}(n,e):n instanceof Te?function(t,s){return s instanceof Te&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&RI(r,s.filters[o]),!0):!1}(n,e):void q()}function OI(n,e){const t=n.filters.concat(e);return Te.create(t,n.op)}function PI(n){return n instanceof fe?function(e){return`${e.field.canonicalString()} ${e.op} ${go(e.value)}`}(n):n instanceof Te?function(e){return e.op.toString()+" {"+e.getFilters().map(PI).join(" ,")+"}"}(n):"Filter"}class yx extends fe{constructor(e,t,s){super(e,t,s),this.key=M.fromName(s.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class vx extends fe{constructor(e,t){super(e,"in",t),this.keys=MI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wx extends fe{constructor(e,t){super(e,"not-in",t),this.keys=MI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function MI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>M.fromName(s.referenceValue))}class Tx extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cc(t)&&ac(t.arrayValue,this.value)}}class LI extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ac(this.value.arrayValue,t)}}class Ix extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ac(this.value.arrayValue,t)}}class bx extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ac(this.value.arrayValue,s))}}/**
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
 */class no{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ex(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Qe{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new Qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $l(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $l(this.root,e,this.comparator,!1)}getReverseIterator(){return new $l(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $l(this.root,e,this.comparator,!0)}}class $l{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??kt.RED,this.left=i??kt.EMPTY,this.right=r??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new kt(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return kt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(n,e,t,s,i){return this}insert(n,e,t){return new kt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class tn{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new tn([])}unionWith(e){let t=new be(et.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new tn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!nu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(t)}setAll(e){let t=et.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=Ma(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());nu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ss(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];nu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Dr(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new At(Ma(this.value))}}function FI(n){const e=[];return Dr(n.fields,(t,s)=>{const i=new et([t]);if(nu(s)){const r=FI(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
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
 */class De{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new De(e,0,H.min(),H.min(),H.min(),At.empty(),0)}static newFoundDocument(e,t,s,i){return new De(e,1,t,H.min(),s,i,0)}static newNoDocument(e,t){return new De(e,2,t,H.min(),H.min(),At.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,H.min(),H.min(),At.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sx{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Qf(n,e=null,t=[],s=[],i=null,r=null,o=null){return new Sx(n,e,t,s,i,r,o)}function cr(n){const e=F(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Kf(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),nl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>go(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>go(s)).join(",")),e.ft=t}return e.ft}function sl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ex(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!RI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ay(n.startAt,e.startAt)&&Ay(n.endAt,e.endAt)}function ku(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Au(n,e){return n.filters.filter(t=>t instanceof fe&&t.field.isEqual(e))}function xy(n,e,t){let s=tu,i=!0;for(const r of Au(n,e)){let o=tu,a=!0;switch(r.op){case"<":case"<=":o=gx(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,a=!1;break;case"!=":case"not-in":o=tu}Sy({value:s,inclusive:i},{value:o,inclusive:a})<0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];Sy({value:s,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}function Dy(n,e,t){let s=Ks,i=!0;for(const r of Au(n,e)){let o=Ks,a=!0;switch(r.op){case">=":case">":o=_x(r.value),a=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,a=!1;break;case"!=":case"not-in":o=Ks}Cy({value:s,inclusive:i},{value:o,inclusive:a})>0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];Cy({value:s,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}/**
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
 */class Ds{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function VI(n,e,t,s,i,r,o,a){return new Ds(n,e,t,s,i,r,o,a)}function $o(n){return new Ds(n)}function Ry(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xm(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Bh(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Dm(n){return n.collectionGroup!==null}function Yi(n){const e=F(n);if(e.dt===null){e.dt=[];const t=Bh(e),s=xm(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new no(t)),e.dt.push(new no(et.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new no(et.keyField(),r))}}}return e.dt}function an(n){const e=F(n);if(!e._t)if(e.limitType==="F")e._t=Qf(e.path,e.collectionGroup,Yi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Yi(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new no(r.field,o))}const s=e.endAt?new ui(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ui(e.startAt.position,e.startAt.inclusive):null;e._t=Qf(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e._t}function Yf(n,e){e.getFirstInequalityField(),Bh(n);const t=n.filters.concat([e]);return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Nu(n,e,t){return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function il(n,e){return sl(an(n),an(e))&&n.limitType===e.limitType}function UI(n){return`${cr(an(n))}|lt:${n.limitType}`}function Xf(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>PI(s)).join(", ")}]`),nl(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>go(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>go(s)).join(",")),`Target(${t})`}(an(n))}; limitType=${n.limitType})`}function rl(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):M.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of Yi(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=ky(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,Yi(t),s)||t.endAt&&!function(i,r,o){const a=ky(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,Yi(t),s))}(n,e)}function qI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function BI(n){return(e,t)=>{let s=!1;for(const i of Yi(n)){const r=Cx(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Cx(n,e,t){const s=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?li(a,c):q()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
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
 */function WI(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(e)?"-0":e}}function $I(n){return{integerValue:""+n}}function jI(n,e){return kI(e)?$I(e):WI(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Wh{constructor(){this._=void 0}}function kx(n,e,t){return n instanceof yo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof lr?zI(n,e):n instanceof ur?HI(n,e):function(s,i){const r=GI(s,i),o=Oy(r)+Oy(s.gt);return zf(r)&&zf(s.gt)?$I(o):WI(s.yt,o)}(n,e)}function Ax(n,e,t){return n instanceof lr?zI(n,e):n instanceof ur?HI(n,e):t}function GI(n,e){return n instanceof vo?zf(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class yo extends Wh{}class lr extends Wh{constructor(e){super(),this.elements=e}}function zI(n,e){const t=KI(e);for(const s of n.elements)t.some(i=>ss(i,s))||t.push(s);return{arrayValue:{values:t}}}class ur extends Wh{constructor(e){super(),this.elements=e}}function HI(n,e){let t=KI(e);for(const s of n.elements)t=t.filter(i=>!ss(i,s));return{arrayValue:{values:t}}}class vo extends Wh{constructor(e,t){super(),this.yt=e,this.gt=t}}function Oy(n){return Ge(n.integerValue||n.doubleValue)}function KI(n){return cc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ol{constructor(e,t){this.field=e,this.transform=t}}function Nx(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof lr&&s instanceof lr||t instanceof ur&&s instanceof ur?mo(t.elements,s.elements,ss):t instanceof vo&&s instanceof vo?ss(t.gt,s.gt):t instanceof yo&&s instanceof yo}(n.transform,e.transform)}class xx{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function su(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $h{}function QI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Go(n.key,Ve.none()):new jo(n.key,n.data,Ve.none());{const t=n.data,s=At.empty();let i=new be(et.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Rs(n.key,s,new tn(i.toArray()),Ve.none())}}function Dx(n,e,t){n instanceof jo?function(s,i,r){const o=s.value.clone(),a=My(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Rs?function(s,i,r){if(!su(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=My(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(YI(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function La(n,e,t,s){return n instanceof jo?function(i,r,o,a){if(!su(i.precondition,r))return o;const c=i.value.clone(),l=Ly(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof Rs?function(i,r,o,a){if(!su(i.precondition,r))return o;const c=Ly(i.fieldTransforms,a,r),l=r.data;return l.setAll(YI(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,o){return su(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function Rx(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=GI(s.transform,i||null);r!=null&&(t===null&&(t=At.empty()),t.set(s.field,r))}return t||null}function Py(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&mo(t,s,(i,r)=>Nx(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class jo extends $h{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rs extends $h{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function YI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function My(n,e,t){const s=new Map;G(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Ax(o,a,t[i]))}return s}function Ly(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,kx(r,o,e))}return s}class Go extends $h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rm extends $h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ox{constructor(e){this.count=e}}/**
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
 */var st,pe;function XI(n){switch(n){default:return q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function JI(n){if(n===void 0)return Ze("GRPC error has no .code"),E.UNKNOWN;switch(n){case st.OK:return E.OK;case st.CANCELLED:return E.CANCELLED;case st.UNKNOWN:return E.UNKNOWN;case st.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case st.INTERNAL:return E.INTERNAL;case st.UNAVAILABLE:return E.UNAVAILABLE;case st.UNAUTHENTICATED:return E.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case st.NOT_FOUND:return E.NOT_FOUND;case st.ALREADY_EXISTS:return E.ALREADY_EXISTS;case st.PERMISSION_DENIED:return E.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case st.ABORTED:return E.ABORTED;case st.OUT_OF_RANGE:return E.OUT_OF_RANGE;case st.UNIMPLEMENTED:return E.UNIMPLEMENTED;case st.DATA_LOSS:return E.DATA_LOSS;default:return q()}}(pe=st||(st={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Si{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return CI(this.inner)}size(){return this.innerSize}}/**
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
 */const Px=new Qe(M.comparator);function nn(){return Px}const ZI=new Qe(M.comparator);function Aa(...n){let e=ZI;for(const t of n)e=e.insert(t.key,t);return e}function eb(n){let e=ZI;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Xn(){return Fa()}function tb(){return Fa()}function Fa(){return new Si(n=>n.toString(),(n,e)=>n.isEqual(e))}const Mx=new Qe(M.comparator),Lx=new be(M.comparator);function se(...n){let e=Lx;for(const t of n)e=e.add(t);return e}const Fx=new be(ne);function jh(){return Fx}/**
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
 */class al{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,cl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new al(H.min(),i,jh(),nn(),se())}}class cl{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new cl(s,t,se(),se(),se())}}/**
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
 */class iu{constructor(e,t,s,i){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=i}}class nb{constructor(e,t){this.targetId=e,this.Et=t}}class sb{constructor(e,t,s=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Fy{constructor(){this.At=0,this.Rt=Uy(),this.bt=ct.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=se(),t=se(),s=se();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:q()}}),new cl(this.bt,this.Pt,e,t,s)}xt(){this.vt=!1,this.Rt=Uy()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Vx{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=nn(),this.qt=Vy(),this.Ut=new be(ne)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const s=this.Wt(t);switch(e.state){case 0:this.zt(t)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,i)=>{this.zt(i)&&t(i)})}Jt(e){const t=e.targetId,s=e.Et.count,i=this.Yt(t);if(i){const r=i.target;if(ku(r))if(s===0){const o=new M(r.path);this.Qt(t,o,De.newNoDocument(o,H.min()))}else G(s===1);else this.Xt(t)!==s&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&ku(a.target)){const c=new M(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,De.newNoDocument(c,e))}r.St&&(t.set(o,r.Ct()),r.xt())}});let s=se();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new al(e,t,this.Ut,this.Lt,s);return this.Lt=nn(),this.qt=Vy(),this.Ut=new be(ne),i}Gt(e,t){if(!this.zt(e))return;const s=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Fy,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new be(ne),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Fy),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Vy(){return new Qe(M.comparator)}function Uy(){return new Qe(M.comparator)}/**
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
 */const Ux=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Bx=(()=>({and:"AND",or:"OR"}))();class Wx{constructor(e,t){this.databaseId=e,this.wt=t}}function wo(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ib(n,e){return n.wt?e.toBase64():e.toUint8Array()}function $x(n,e){return wo(n,e.toTimestamp())}function tt(n){return G(!!n),H.fromTimestamp(function(e){const t=ci(e);return new qe(t.seconds,t.nanos)}(n))}function Om(n,e){return function(t){return new ge(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function rb(n){const e=ge.fromString(n);return G(pb(e)),e}function lc(n,e){return Om(n.databaseId,e.path)}function es(n,e){const t=rb(e);if(t.get(1)!==n.databaseId.projectId)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(ab(t))}function Jf(n,e){return Om(n.databaseId,e)}function ob(n){const e=rb(n);return e.length===4?ge.emptyPath():ab(e)}function uc(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ab(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qy(n,e,t){return{name:lc(n,e),fields:t.value.mapValue.fields}}function cb(n,e,t){const s=es(n,e.name),i=tt(e.updateTime),r=e.createTime?tt(e.createTime):H.min(),o=new At({mapValue:{fields:e.fields}}),a=De.newFoundDocument(s,i,r,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function jx(n,e){return"found"in e?function(t,s){G(!!s.found),s.found.name,s.found.updateTime;const i=es(t,s.found.name),r=tt(s.found.updateTime),o=s.found.createTime?tt(s.found.createTime):H.min(),a=new At({mapValue:{fields:s.found.fields}});return De.newFoundDocument(i,r,o,a)}(n,e):"missing"in e?function(t,s){G(!!s.missing),G(!!s.readTime);const i=es(t,s.missing),r=tt(s.readTime);return De.newNoDocument(i,r)}(n,e):q()}function Gx(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.wt?(G(l===void 0||typeof l=="string"),ct.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),ct.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:JI(c.code);return new A(l,c.message||"")}(o);t=new sb(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=es(n,s.document.name),r=tt(s.document.updateTime),o=s.document.createTime?tt(s.document.createTime):H.min(),a=new At({mapValue:{fields:s.document.fields}}),c=De.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];t=new iu(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=es(n,s.document),r=s.readTime?tt(s.readTime):H.min(),o=De.newNoDocument(i,r),a=s.removedTargetIds||[];t=new iu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=es(n,s.document),r=s.removedTargetIds||[];t=new iu([],r,i,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Ox(i),o=s.targetId;t=new nb(o,r)}}return t}function hc(n,e){let t;if(e instanceof jo)t={update:qy(n,e.key,e.value)};else if(e instanceof Go)t={delete:lc(n,e.key)};else if(e instanceof Rs)t={update:qy(n,e.key,e.data),updateMask:Xx(e.fieldMask)};else{if(!(e instanceof Rm))return q();t={verify:lc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof yo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof lr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ur)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof vo)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw q()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$x(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(n,e.precondition)),t}function Zf(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Ve.updateTime(tt(i.updateTime)):i.exists!==void 0?Ve.exists(i.exists):Ve.none()}(e.currentDocument):Ve.none(),s=e.updateTransforms?e.updateTransforms.map(i=>function(r,o){let a=null;if("setToServerValue"in o)G(o.setToServerValue==="REQUEST_TIME"),a=new yo;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new lr(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new ur(l)}else"increment"in o?a=new vo(r,o.increment):q();const c=et.fromServerFormat(o.fieldPath);return new ol(c,a)}(n,i)):[];if(e.update){e.update.name;const i=es(n,e.update.name),r=new At({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new tn(c.map(l=>et.fromServerFormat(l)))}(e.updateMask);return new Rs(i,r,o,t,s)}return new jo(i,r,t,s)}if(e.delete){const i=es(n,e.delete);return new Go(i,t)}if(e.verify){const i=es(n,e.verify);return new Rm(i,t)}return q()}function zx(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?tt(s.updateTime):tt(i);return r.isEqual(H.min())&&(r=tt(i)),new xx(r,s.transformResults||[])}(t,e))):[]}function lb(n,e){return{documents:[Jf(n,e.path)]}}function ub(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Jf(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Jf(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return fb(Te.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Qr(u.field),direction:Kx(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(c,l){return c.wt||nl(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function hb(n){let e=ob(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){G(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=db(u);return h instanceof Te&&Nm(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new no(Yr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,nl(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ui(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ui(d,h)}(t.endAt)),VI(e,i,o,r,a,"F",c,l)}function Hx(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function db(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yr(e.unaryFilter.field);return fe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=Yr(e.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(e.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Yr(e.unaryFilter.field);return fe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return fe.create(Yr(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Te.create(e.compositeFilter.filters.map(t=>db(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function Kx(n){return Ux[n]}function Qx(n){return qx[n]}function Yx(n){return Bx[n]}function Qr(n){return{fieldPath:n.canonicalString()}}function Yr(n){return et.fromServerFormat(n.fieldPath)}function fb(n){return n instanceof fe?function(e){if(e.op==="=="){if(Ey(e.value))return{unaryFilter:{field:Qr(e.field),op:"IS_NAN"}};if(by(e.value))return{unaryFilter:{field:Qr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ey(e.value))return{unaryFilter:{field:Qr(e.field),op:"IS_NOT_NAN"}};if(by(e.value))return{unaryFilter:{field:Qr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(e.field),op:Qx(e.op),value:e.value}}}(n):n instanceof Te?function(e){const t=e.getFilters().map(s=>fb(s));return t.length===1?t[0]:{compositeFilter:{op:Yx(e.op),filters:t}}}(n):q()}function Xx(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Kt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=By(e)),e=Jx(n.get(t),e);return By(e)}function Jx(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function By(n){return n+""}function Jn(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),ge.emptyPath();const t=e-2,s=[];let i="";for(let r=0;r<e;){const o=n.indexOf("",r);switch((o<0||o>t)&&q(),n.charAt(o+1)){case"":const a=n.substring(r,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),s.push(c);break;case"":i+=n.substring(r,o),i+="\0";break;case"":i+=n.substring(r,o+1);break;default:q()}r=o+2}return new ge(s)}/**
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
 */const Wy=["userId","batchId"];/**
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
 */function ru(n,e){return[n,Kt(e)]}function mb(n,e,t){return[n,Kt(e),t]}const Zx={},eD=["prefixPath","collectionGroup","readTime","documentId"],tD=["prefixPath","collectionGroup","documentId"],nD=["collectionGroup","readTime","prefixPath","documentId"],sD=["canonicalId","targetId"],iD=["targetId","path"],rD=["path","targetId"],oD=["collectionId","parent"],aD=["indexId","uid"],cD=["uid","sequenceNumber"],lD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],uD=["indexId","uid","orderedDocumentKey"],hD=["userId","collectionPath","documentId"],dD=["userId","collectionPath","largestBatchId"],fD=["userId","collectionGroup","largestBatchId"],gb=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],pD=[...gb,"documentOverlays"],_b=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yb=_b,mD=[...yb,"indexConfiguration","indexState","indexEntries"];/**
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
 */class ep extends SI{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function bt(n,e){const t=F(n);return On.M(t.se,e)}/**
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
 */class Pm{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Dx(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=tb();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=QI(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,(t,s)=>Py(t,s))&&mo(this.baseMutations,e.baseMutations,(t,s)=>Py(t,s))}}class Mm{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){G(e.mutations.length===s.length);let i=Mx;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Mm(e,t,s,i)}}/**
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
 */class Lm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Zs{constructor(e,t,s,i,r=H.min(),o=H.min(),a=ct.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Zs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Zs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Zs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class vb{constructor(e){this.ie=e}}function gD(n,e){let t;if(e.document)t=cb(n.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=M.fromSegments(e.noDocument.path),i=dr(e.noDocument.readTime);t=De.newNoDocument(s,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const s=M.fromSegments(e.unknownDocument.path),i=dr(e.unknownDocument.version);t=De.newUnknownDocument(s,i)}}return e.readTime&&t.setReadTime(function(s){const i=new qe(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function $y(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:xu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(i,r){return{name:lc(i,r.key),fields:r.data.value.mapValue.fields,updateTime:wo(i,r.version.toTimestamp()),createTime:wo(i,r.createTime.toTimestamp())}}(n.ie,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:hr(e.version)};else{if(!e.isUnknownDocument())return q();s.unknownDocument={path:t.path.toArray(),version:hr(e.version)}}return s}function xu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function hr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function dr(n){const e=new qe(n.seconds,n.nanoseconds);return H.fromTimestamp(e)}function Vi(n,e){const t=(e.baseMutations||[]).map(r=>Zf(n.ie,r));for(let r=0;r<e.mutations.length-1;++r){const o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const a=e.mutations[r+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const s=e.mutations.map(r=>Zf(n.ie,r)),i=qe.fromMillis(e.localWriteTimeMs);return new Pm(e.batchId,i,t,s)}function Na(n){const e=dr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?dr(n.lastLimboFreeSnapshotVersion):H.min();let s;var i;return n.query.documents!==void 0?(G((i=n.query).documents.length===1),s=an($o(ob(i.documents[0])))):s=function(r){return an(hb(r))}(n.query),new Zs(s,n.targetId,0,n.lastListenSequenceNumber,e,t,ct.fromBase64String(n.resumeToken))}function wb(n,e){const t=hr(e.snapshotVersion),s=hr(e.lastLimboFreeSnapshotVersion);let i;i=ku(e.target)?lb(n.ie,e.target):ub(n.ie,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:cr(e.target),readTime:t,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:i}}function Fm(n){const e=hb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Nu(e,e.limit,"L"):e}function uf(n,e){return new Lm(e.largestBatchId,Zf(n.ie,e.overlayMutation))}function jy(n,e){const t=e.path.lastSegment();return[n,Kt(e.path.popLast()),t]}function Gy(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:hr(s.readTime),documentKey:Kt(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class _D{getBundleMetadata(e,t){return zy(e).get(t).next(s=>{if(s)return{id:(i=s).bundleId,createTime:dr(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return zy(e).put({bundleId:(s=t).id,createTime:hr(tt(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return Hy(e).get(t).next(s=>{if(s)return{name:(i=s).name,query:Fm(i.bundledQuery),readTime:dr(i.readTime)};var i})}saveNamedQuery(e,t){return Hy(e).put(function(s){return{name:s.name,readTime:hr(tt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function zy(n){return bt(n,"bundles")}function Hy(n){return bt(n,"namedQueries")}/**
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
 */class Gh{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const s=t.uid||"";return new Gh(e,s)}getOverlay(e,t){return da(e).get(jy(this.userId,t)).next(s=>s?uf(this.yt,s):null)}getOverlays(e,t){const s=Xn();return T.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){const i=[];return s.forEach((r,o)=>{const a=new Lm(t,o);i.push(this.oe(e,a))}),T.waitFor(i)}removeOverlaysForBatchId(e,t,s){const i=new Set;t.forEach(o=>i.add(Kt(o.getCollectionPath())));const r=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);r.push(da(e).Y("collectionPathOverlayIndex",a))}),T.waitFor(r)}getOverlaysForCollection(e,t,s){const i=Xn(),r=Kt(t),o=IDBKeyRange.bound([this.userId,r,s],[this.userId,r,Number.POSITIVE_INFINITY],!0);return da(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=uf(this.yt,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,s,i){const r=Xn();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return da(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=uf(this.yt,l);r.size()<i||h.largestBatchId===o?(r.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>r)}oe(e,t){return da(e).put(function(s,i,r){const[o,a,c]=jy(i,r.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:hc(s.ie,r.mutation)}}(this.yt,this.userId,t))}}function da(n){return bt(n,"documentOverlays")}/**
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
 */class Ui{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Ge(e.integerValue));else if("doubleValue"in e){const s=Ge(e.doubleValue);isNaN(s)?this.he(t,13):(this.he(t,15),rc(s)?t.le(0):t.le(s))}else if("timestampValue"in e){const s=e.timestampValue;this.he(t,20),typeof s=="string"?t.fe(s):(t.fe(`${s.seconds||""}`),t.le(s.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(rr(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.he(t,45),t.le(s.latitude||0),t.le(s.longitude||0)}else"mapValue"in e?NI(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):q()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const s=e.fields||{};this.he(t,55);for(const i of Object.keys(s))this.de(i,t),this.ce(s[i],t)}ye(e,t){const s=e.values||[];this.he(t,50);for(const i of s)this.ce(i,t)}me(e,t){this.he(t,37),M.fromName(e).path.forEach(s=>{this.he(t,60),this.pe(s,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}Ui.Ie=new Ui;function yD(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Ky(n){const e=64-function(t){let s=0;for(let i=0;i<8;++i){const r=yD(255&t[i]);if(s+=r,r!==8)break}return s}(n);return Math.ceil(e/8)}class vD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ee(s.value),s=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.be(s.value),s=t.next();this.Pe()}ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ee(s);else if(s<2048)this.Ee(960|s>>>6),this.Ee(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ee(480|s>>>12),this.Ee(128|63&s>>>6),this.Ee(128|63&s);else{const i=t.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.be(s);else if(s<2048)this.be(960|s>>>6),this.be(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.be(480|s>>>12),this.be(128|63&s>>>6),this.be(128|63&s);else{const i=t.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const t=this.De(e),s=Ky(t);this.Ce(1+s),this.buffer[this.position++]=255&s;for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=255&t[i]}xe(e){const t=this.De(e),s=Ky(t);this.Ce(1+s),this.buffer[this.position++]=~(255&s);for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(i){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,i,!1),new Uint8Array(r.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let i=1;i<t.length;++i)t[i]^=s?255:0;return t}Ee(e){const t=255&e;t===0?(this.ke(0),this.ke(255)):t===255?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;t===0?(this.Me(0),this.Me(255)):t===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const i=new Uint8Array(s);i.set(this.buffer),this.buffer=i}}class wD{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class TD{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class fa{constructor(){this.$e=new vD,this.Be=new wD(this.$e),this.Le=new TD(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
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
 */class qi{constructor(e,t,s,i){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=i}Ue(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new qi(this.indexId,this.documentKey,this.arrayValue,s)}}function qs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Qy(n.arrayValue,e.arrayValue),t!==0?t:(t=Qy(n.directionalValue,e.directionalValue),t!==0?t:M.comparator(n.documentKey,e.documentKey)))}function Qy(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class ID{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const s=t;s.isInequality()?this.Qe=s:this.Ge.push(s)}}je(e){G(e.collectionGroup===this.collectionId);const t=jf(e);if(t!==void 0&&!this.We(t))return!1;const s=Mi(e);let i=0,r=0;for(;i<s.length&&this.We(s[i]);++i);if(i===s.length)return!0;if(this.Qe!==void 0){const o=s[i];if(!this.ze(this.Qe,o)||!this.He(this.Ke[r++],o))return!1;++i}for(;i<s.length;++i){const o=s[i];if(r>=this.Ke.length||!this.He(this.Ke[r++],o))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Tb(n){var e,t;if(G(n instanceof fe||n instanceof Te),n instanceof fe){if(n instanceof LI){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(r=>fe.create(n.field,"==",r)))||[];return Te.create(i,"or")}return n}const s=n.filters.map(i=>Tb(i));return Te.create(s,n.op)}function bD(n){if(n.getFilters().length===0)return[];const e=sp(Tb(n));return G(Ib(e)),tp(e)||np(e)?[e]:e.getFilters()}function tp(n){return n instanceof fe}function np(n){return n instanceof Te&&Nm(n)}function Ib(n){return tp(n)||np(n)||function(e){if(e instanceof Te&&Hf(e)){for(const t of e.getFilters())if(!tp(t)&&!np(t))return!1;return!0}return!1}(n)}function sp(n){if(G(n instanceof fe||n instanceof Te),n instanceof fe)return n;if(n.filters.length===1)return sp(n.filters[0]);const e=n.filters.map(s=>sp(s));let t=Te.create(e,n.op);return t=Du(t),Ib(t)?t:(G(t instanceof Te),G(_o(t)),G(t.filters.length>1),t.filters.reduce((s,i)=>Vm(s,i)))}function Vm(n,e){let t;return G(n instanceof fe||n instanceof Te),G(e instanceof fe||e instanceof Te),t=n instanceof fe?e instanceof fe?function(s,i){return Te.create([s,i],"and")}(n,e):Yy(n,e):e instanceof fe?Yy(e,n):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),_o(s)&&_o(i))return OI(s,i.getFilters());const r=Hf(s)?s:i,o=Hf(s)?i:s,a=r.filters.map(c=>Vm(c,o));return Te.create(a,"or")}(n,e),Du(t)}function Yy(n,e){if(_o(e))return OI(e,n.getFilters());{const t=e.filters.map(s=>Vm(n,s));return Te.create(t,"or")}}function Du(n){if(G(n instanceof fe||n instanceof Te),n instanceof fe)return n;const e=n.getFilters();if(e.length===1)return Du(e[0]);if(DI(n))return n;const t=e.map(i=>Du(i)),s=[];return t.forEach(i=>{i instanceof fe?s.push(i):i instanceof Te&&(i.op===n.op?s.push(...i.filters):s.push(i))}),s.length===1?s[0]:Te.create(s,n.op)}/**
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
 */class ED{constructor(){this.Je=new Um}addToCollectionParentIndex(e,t){return this.Je.add(t),T.resolve()}getCollectionParents(e,t){return T.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return T.resolve()}deleteFieldIndex(e,t){return T.resolve()}getDocumentsMatchingTarget(e,t){return T.resolve(null)}getIndexType(e,t){return T.resolve(0)}getFieldIndexes(e,t){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,t){return T.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,t){return T.resolve(yn.min())}updateCollectionGroup(e,t,s){return T.resolve()}updateIndexEntries(e,t){return T.resolve()}}class Um{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new be(ge.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new be(ge.comparator)).toArray()}}/**
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
 */const jl=new Uint8Array(0);class SD{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new Um,this.Xe=new Si(s=>cr(s),(s,i)=>sl(s,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const s=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Ye.add(t)});const r={collectionId:s,parent:Kt(i)};return Xy(e).put(r)}return T.resolve()}getCollectionParents(e,t){const s=[],i=IDBKeyRange.bound([t,""],[wI(t),""],!1,!0);return Xy(e).W(i).next(r=>{for(const o of r){if(o.collectionId!==t)break;s.push(Jn(o.parent))}return s})}addFieldIndex(e,t){const s=Gl(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const r=s.add(i);if(t.indexState){const o=ma(e);return r.next(a=>{o.put(Gy(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){const s=Gl(e),i=ma(e),r=pa(e);return s.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=pa(e);let i=!0;const r=new Map;return T.forEach(this.Ze(t),o=>this.tn(e,o).next(a=>{i&&(i=!!a),r.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return T.forEach(r,(c,l)=>{var u;N("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(S=>`${S.fieldPath}:${S.kind}`).join(",")}`} to execute ${cr(t)}`);const h=function(S,C){const _=jf(C);if(_===void 0)return null;for(const v of Au(S,_.fieldPath))switch(v.op){case"array-contains-any":return v.value.arrayValue.values||[];case"array-contains":return[v.value]}return null}(l,c),d=function(S,C){const _=new Map;for(const v of Mi(C))for(const I of Au(S,v.fieldPath))switch(I.op){case"==":case"in":_.set(v.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return _.set(v.fieldPath.canonicalString(),I.value),Array.from(_.values())}return null}(l,c),f=function(S,C){const _=[];let v=!0;for(const I of Mi(C)){const b=I.kind===0?xy(S,I.fieldPath,S.startAt):Dy(S,I.fieldPath,S.startAt);_.push(b.value),v&&(v=b.inclusive)}return new ui(_,v)}(l,c),p=function(S,C){const _=[];let v=!0;for(const I of Mi(C)){const b=I.kind===0?Dy(S,I.fieldPath,S.endAt):xy(S,I.fieldPath,S.endAt);_.push(b.value),v&&(v=b.inclusive)}return new ui(_,v)}(l,c),m=this.en(c,l,f),g=this.en(c,l,p),y=this.nn(c,l,d),w=this.sn(c.indexId,h,m,f.inclusive,g,p.inclusive,y);return T.forEach(w,S=>s.J(S,t.limit).next(C=>{C.forEach(_=>{const v=M.fromSegments(_.documentKey);o.has(v)||(o=o.add(v),a.push(v))})}))}).next(()=>a)}return T.resolve(null)})}Ze(e){let t=this.Xe.get(e);return t||(e.filters.length===0?t=[e]:t=bD(Te.create(e.filters,"and")).map(s=>Qf(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,t),t)}sn(e,t,s,i,r,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,r.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.rn(t[h/l]):jl,f=this.on(e,d,s[h%l],i),p=this.un(e,d,r[h%l],o),m=a.map(g=>this.on(e,d,g,!0));u.push(...this.createRange(f,p,m))}return u}on(e,t,s,i){const r=new qi(e,M.empty(),t,s);return i?r:r.Ue()}un(e,t,s,i){const r=new qi(e,M.empty(),t,s);return i?r.Ue():r}tn(e,t){const s=new ID(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(r=>{let o=null;for(const a of r)s.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;const i=this.Ze(t);return T.forEach(i,r=>this.tn(e,r).next(o=>{o?s!==0&&o.fields.length<function(a){let c=new be(et.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(r)&&(s=1):s=0})).next(()=>function(r){return r.limit!==null}(t)&&i.length>1&&s===2?1:s)}cn(e,t){const s=new fa;for(const i of Mi(e)){const r=t.data.field(i.fieldPath);if(r==null)return null;const o=s.qe(i.kind);Ui.Ie.ue(r,o)}return s.Fe()}rn(e){const t=new fa;return Ui.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const s=new fa;return Ui.Ie.ue(ar(this.databaseId,t),s.qe(function(i){const r=Mi(i);return r.length===0?0:r[r.length-1].kind}(e))),s.Fe()}nn(e,t,s){if(s===null)return[];let i=[];i.push(new fa);let r=0;for(const o of Mi(e)){const a=s[r++];for(const c of i)if(this.hn(t,o.fieldPath)&&cc(a))i=this.ln(i,o,a);else{const l=c.qe(o.kind);Ui.Ie.ue(a,l)}}return this.fn(i)}en(e,t,s){return this.nn(e,t,s.position)}fn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Fe();return t}ln(e,t,s){const i=[...e],r=[];for(const o of s.arrayValue.values||[])for(const a of i){const c=new fa;c.seed(a.Fe()),Ui.Ie.ue(o,c.qe(t.kind)),r.push(c)}return r}hn(e,t){return!!e.filters.find(s=>s instanceof fe&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Gl(e),i=ma(e);return(t?s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.W()).next(r=>{const o=[];return T.forEach(r,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Cu(u.sequenceNumber,new yn(dr(u.readTime),new M(Jn(u.documentKey)),u.largestBatchId)):Cu.empty(),d=l.fields.map(([f,p])=>new cx(et.fromServerFormat(f),p));return new TI(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,i)=>{const r=s.indexState.sequenceNumber-i.indexState.sequenceNumber;return r!==0?r:ne(s.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const i=Gl(e),r=ma(e);return this.dn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>T.forEach(a,c=>r.put(Gy(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return T.forEach(t,(i,r)=>{const o=s.get(i.collectionGroup);return(o?T.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(s.set(i.collectionGroup,a),T.forEach(a,c=>this._n(e,i,c).next(l=>{const u=this.wn(r,c);return l.isEqual(u)?T.resolve():this.mn(e,r,c,l,u)}))))})}gn(e,t,s,i){return pa(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(s,t.key),documentKey:t.key.path.toArray()})}yn(e,t,s,i){return pa(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(s,t.key),t.key.path.toArray()])}_n(e,t,s){const i=pa(e);let r=new be(qs);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.an(s,t)])},(o,a)=>{r=r.add(new qi(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>r)}wn(e,t){let s=new be(qs);const i=this.cn(t,e);if(i==null)return s;const r=jf(t);if(r!=null){const o=e.data.field(r.fieldPath);if(cc(o))for(const a of o.arrayValue.values||[])s=s.add(new qi(t.indexId,e.key,this.rn(a),i))}else s=s.add(new qi(t.indexId,e.key,jl,i));return s}mn(e,t,s,i,r){N("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let p=Gr(d),m=Gr(f);for(;p||m;){let g=!1,y=!1;if(p&&m){const w=l(p,m);w<0?y=!0:w>0&&(g=!0)}else p!=null?y=!0:g=!0;g?(u(m),m=Gr(f)):y?(h(p),p=Gr(d)):(p=Gr(d),m=Gr(f))}}(i,r,qs,a=>{o.push(this.gn(e,t,s,a))},a=>{o.push(this.yn(e,t,s,a))}),T.waitFor(o)}dn(e){let t=1;return ma(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,i,r)=>{r.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>qs(o,a)).filter((o,a,c)=>!a||qs(o,c[a-1])!==0);const i=[];i.push(e);for(const o of s){const a=qs(o,e),c=qs(o,t);if(a===0)i[0]=e.Ue();else if(a>0&&c<0)i.push(o),i.push(o.Ue());else if(c>0)break}i.push(t);const r=[];for(let o=0;o<i.length;o+=2){if(this.pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,jl,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,jl,[]];r.push(IDBKeyRange.bound(a,c))}return r}pn(e,t){return qs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Jy)}getMinOffset(e,t){return T.mapArray(this.Ze(t),s=>this.tn(e,s).next(i=>i||q())).next(Jy)}}function Xy(n){return bt(n,"collectionParents")}function pa(n){return bt(n,"indexEntries")}function Gl(n){return bt(n,"indexConfiguration")}function ma(n){return bt(n,"indexState")}function Jy(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const i=n[s].indexState.offset;Cm(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new yn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Zy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function bb(n,e,t){const s=n.store("mutations"),i=n.store("documentMutations"),r=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Z({range:o},(u,h,d)=>(a++,d.delete()));r.push(c.next(()=>{G(a===1)}));const l=[];for(const u of t.mutations){const h=mb(e,u.key.path,t.batchId);r.push(i.delete(h)),l.push(u.key)}return T.waitFor(r).next(()=>l)}function Ru(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw q();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(41943040,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);class zh{constructor(e,t,s,i){this.userId=e,this.yt=t,this.indexManager=s,this.referenceDelegate=i,this.In={}}static re(e,t,s,i){G(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new zh(r,t,s,i)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bs(e).Z({index:"userMutationsIndex",range:s},(i,r,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,i){const r=Xr(e),o=Bs(e);return o.add({}).next(a=>{G(typeof a=="number");const c=new Pm(a,t,s,i),l=function(d,f,p){const m=p.baseMutations.map(y=>hc(d.ie,y)),g=p.mutations.map(y=>hc(d.ie,y));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:m,mutations:g}}(this.yt,this.userId,c),u=[];let h=new be((d,f)=>ne(d.canonicalString(),f.canonicalString()));for(const d of i){const f=mb(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(r.put(f,Zx))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),T.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Bs(e).get(t).next(s=>s?(G(s.userId===this.userId),Vi(this.yt,s)):null)}Tn(e,t){return this.In[t]?T.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const i=s.keys();return this.In[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=IDBKeyRange.lowerBound([this.userId,s]);let r=null;return Bs(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(G(a.batchId>=s),r=Vi(this.yt,a)),c.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Bs(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,r,o)=>{s=r.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Bs(e).W("userMutationsIndex",t).next(s=>s.map(i=>Vi(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=ru(this.userId,t.path),i=IDBKeyRange.lowerBound(s),r=[];return Xr(e).Z({range:i},(o,a,c)=>{const[l,u,h]=o,d=Jn(u);if(l===this.userId&&t.path.isEqual(d))return Bs(e).get(h).next(f=>{if(!f)throw q();G(f.userId===this.userId),r.push(Vi(this.yt,f))});c.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new be(ne);const i=[];return t.forEach(r=>{const o=ru(this.userId,r.path),a=IDBKeyRange.lowerBound(o),c=Xr(e).Z({range:a},(l,u,h)=>{const[d,f,p]=l,m=Jn(f);d===this.userId&&r.path.isEqual(m)?s=s.add(p):h.done()});i.push(c)}),T.waitFor(i).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1,r=ru(this.userId,s),o=IDBKeyRange.lowerBound(r);let a=new be(ne);return Xr(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,p=Jn(d);h===this.userId&&s.isPrefixOf(p)?p.length===i&&(a=a.add(f)):u.done()}).next(()=>this.En(e,a))}En(e,t){const s=[],i=[];return t.forEach(r=>{i.push(Bs(e).get(r).next(o=>{if(o===null)throw q();G(o.userId===this.userId),s.push(Vi(this.yt,o))}))}),T.waitFor(i).next(()=>s)}removeMutationBatch(e,t){return bb(e.se,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),T.forEach(s,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return T.resolve();const s=IDBKeyRange.lowerBound([this.userId]),i=[];return Xr(e).Z({range:s},(r,o,a)=>{if(r[0]===this.userId){const c=Jn(r[1]);i.push(c)}else a.done()}).next(()=>{G(i.length===0)})})}containsKey(e,t){return Eb(e,this.userId,t)}Rn(e){return Sb(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Eb(n,e,t){const s=ru(e,t.path),i=s[1],r=IDBKeyRange.lowerBound(s);let o=!1;return Xr(n).Z({range:r,X:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Bs(n){return bt(n,"mutations")}function Xr(n){return bt(n,"documentMutations")}function Sb(n){return bt(n,"mutationQueues")}/**
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
 */class fr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new fr(0)}static vn(){return new fr(-1)}}/**
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
 */class CD{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next(t=>{const s=new fr(t.highestTargetId);return t.highestTargetId=s.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>H.fromTimestamp(new qe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=t,s&&(i.lastRemoteSnapshotVersion=s.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Sn(e,i)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(t,s),this.Sn(e,s))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>zr(e).delete(t.targetId)).next(()=>this.Vn(e)).next(s=>(G(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,t,s){let i=0;const r=[];return zr(e).Z((o,a)=>{const c=Na(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(i++,r.push(this.removeTargetData(e,c)))}).next(()=>T.waitFor(r)).next(()=>i)}forEachTarget(e,t){return zr(e).Z((s,i)=>{const r=Na(i);t(r)})}Vn(e){return ev(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Sn(e,t){return ev(e).put("targetGlobalKey",t)}Dn(e,t){return zr(e).put(wb(this.yt,t))}Cn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=cr(t),i=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let r=null;return zr(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=Na(a);sl(t,l.target)&&(r=l,c.done())}).next(()=>r)}addMatchingKeys(e,t,s){const i=[],r=zs(e);return t.forEach(o=>{const a=Kt(o.path);i.push(r.put({targetId:s,path:a})),i.push(this.referenceDelegate.addReference(e,s,o))}),T.waitFor(i)}removeMatchingKeys(e,t,s){const i=zs(e);return T.forEach(t,r=>{const o=Kt(r.path);return T.waitFor([i.delete([s,o]),this.referenceDelegate.removeReference(e,s,r)])})}removeMatchingKeysForTargetId(e,t){const s=zs(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(i)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),i=zs(e);let r=se();return i.Z({range:s,X:!0},(o,a,c)=>{const l=Jn(o[1]),u=new M(l);r=r.add(u)}).next(()=>r)}containsKey(e,t){const s=Kt(t.path),i=IDBKeyRange.bound([s],[wI(s)],!1,!0);let r=0;return zs(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,l)=>{o!==0&&(r++,l.done())}).next(()=>r>0)}ne(e,t){return zr(e).get(t).next(s=>s?Na(s):null)}}function zr(n){return bt(n,"targets")}function ev(n){return bt(n,"targetGlobal")}function zs(n){return bt(n,"targetDocuments")}/**
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
 */function tv([n,e],[t,s]){const i=ne(n,t);return i===0?ne(e,s):i}class kD{constructor(e){this.xn=e,this.buffer=new be(tv),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();tv(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AD{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ei(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await bi(t)}await this.Fn(3e5)})}}class ND{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return T.resolve(en.at);const s=new kD(t);return this.$n.forEachTarget(e,i=>s.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>s.On(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.$n.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),T.resolve(Zy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zy):this.qn(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let s,i,r,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),$f()<=me.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),T.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:h})))}}/**
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
 */class xD{constructor(e,t){this.db=e,this.garbageCollector=function(s,i){return new ND(s,i)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}Un(e){let t=0;return this.Ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(s,i)=>t(i))}addReference(e,t,s){return zl(e,s)}removeReference(e,t,s){return zl(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return zl(e,t)}Gn(e,t){return function(s,i){let r=!1;return Sb(s).tt(o=>Eb(s,o,i).next(a=>(a&&(r=!0),T.resolve(!a)))).next(()=>r)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(l=>{if(!l)return r++,s.getEntry(e,o).next(()=>(s.removeEntry(o,H.min()),zs(e).delete([0,Kt(o.path)])))});i.push(c)}}).next(()=>T.waitFor(i)).next(()=>s.apply(e)).next(()=>r)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return zl(e,t)}Kn(e,t){const s=zs(e);let i,r=en.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(r!==en.at&&t(new M(Jn(i)),r),r=l,i=c):r=en.at}).next(()=>{r!==en.at&&t(new M(Jn(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function zl(n,e){return zs(n).put(function(t,s){return{targetId:0,path:Kt(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class Cb{constructor(){this.changes=new Si(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?T.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class DD{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return Oi(e).put(s)}removeEntry(e,t,s){return Oi(e).delete(function(i,r){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],xu(r),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Qn(e,s)))}getEntry(e,t){let s=De.newInvalidDocument(t);return Oi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ga(t))},(i,r)=>{s=this.jn(t,r)}).next(()=>s)}Wn(e,t){let s={size:0,document:De.newInvalidDocument(t)};return Oi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ga(t))},(i,r)=>{s={document:this.jn(t,r),size:Ru(r)}}).next(()=>s)}getEntries(e,t){let s=nn();return this.zn(e,t,(i,r)=>{const o=this.jn(i,r);s=s.insert(i,o)}).next(()=>s)}Hn(e,t){let s=nn(),i=new Qe(M.comparator);return this.zn(e,t,(r,o)=>{const a=this.jn(r,o);s=s.insert(r,a),i=i.insert(r,Ru(o))}).next(()=>({documents:s,Jn:i}))}zn(e,t,s){if(t.isEmpty())return T.resolve();let i=new be(iv);t.forEach(c=>i=i.add(c));const r=IDBKeyRange.bound(ga(i.first()),ga(i.last())),o=i.getIterator();let a=o.getNext();return Oi(e).Z({index:"documentKeyIndex",range:r},(c,l,u)=>{const h=M.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&iv(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.j(ga(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,s,i){const r=t.path,o=[r.popLast().toArray(),r.lastSegment(),xu(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],a=[r.popLast().toArray(),r.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Oi(e).W(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=nn();for(const u of c){const h=this.jn(M.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(rl(t,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,t,s,i){let r=nn();const o=sv(t,s),a=sv(t,yn.max());return Oi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.jn(M.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);r=r.insert(h.key,h),r.size===i&&u.done()}).next(()=>r)}newChangeBuffer(e){return new RD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return nv(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}Qn(e,t){return nv(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const s=gD(this.yt,t);if(!(s.isNoDocument()&&s.version.isEqual(H.min())))return s}return De.newInvalidDocument(e)}}function kb(n){return new DD(n)}class RD extends Cb{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new Si(s=>s.toString(),(s,i)=>s.isEqual(i))}applyChanges(e){const t=[];let s=0,i=new be((r,o)=>ne(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{const a=this.Xn.get(r);if(t.push(this.Yn.removeEntry(e,r,a.readTime)),o.isValidDocument()){const c=$y(this.Yn.yt,o);i=i.add(r.path.popLast());const l=Ru(c);s+=l-a.size,t.push(this.Yn.addEntry(e,r,c))}else if(s-=a.size,this.trackRemovals){const c=$y(this.Yn.yt,o.convertToNoDocument(H.min()));t.push(this.Yn.addEntry(e,r,c))}}),i.forEach(r=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.Yn.updateMetadata(e,s)),T.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(s=>(this.Xn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:s,Jn:i})=>(i.forEach((r,o)=>{this.Xn.set(r,{size:o,readTime:s.get(r).readTime})}),s))}}function nv(n){return bt(n,"remoteDocumentGlobal")}function Oi(n){return bt(n,"remoteDocumentsV14")}function ga(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function sv(n,e){const t=e.documentKey.path.toArray();return[n,xu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function iv(n,e){const t=n.path.toArray(),s=e.path.toArray();let i=0;for(let r=0;r<t.length-2&&r<s.length-2;++r)if(i=ne(t[r],s[r]),i)return i;return i=ne(t.length,s.length),i||(i=ne(t[t.length-2],s[s.length-2]),i||ne(t[t.length-1],s[s.length-1]))}/**
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
 */class OD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ab{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&La(s.mutation,i,tn.empty(),qe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,t,s=se()){const i=Xn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Aa();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Xn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,se()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=nn();const o=Fa(),a=Fa();return t.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Rs)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),La(u.mutation,l,u.mutation.getFieldMask(),qe.now())):o.set(l.key,tn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new OD(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Fa();let i=new Qe((o,a)=>o-a),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||tn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||se()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=tb();u.forEach(d=>{if(!r.has(d)){const f=QI(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):T.resolve(Xn());let a=-1,c=r;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:eb(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(s=>{let i=Aa();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=Aa();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Ds(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,De.newInvalidDocument(l)))});let o=Aa();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&La(l.mutation,c,tn.empty(),qe.now()),rl(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class PD{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return T.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:tt(s.createTime)}),T.resolve()}getNamedQuery(e,t){return T.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:Fm(s.bundledQuery),readTime:tt(s.readTime)}}(t)),T.resolve()}}/**
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
 */class MD{constructor(){this.overlays=new Qe(M.comparator),this.es=new Map}getOverlay(e,t){return T.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Xn();return T.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.oe(e,t,r)}),T.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,t,s){const i=Xn(),r=t.length+1,o=new M(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return T.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Xn(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Xn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return T.resolve(a)}oe(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Lm(t,s));let r=this.es.get(t);r===void 0&&(r=se(),this.es.set(t,r)),this.es.set(t,r.add(s.key))}}/**
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
 */class qm{constructor(){this.ns=new be(ft.ss),this.rs=new be(ft.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new ft(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new ft(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new M(new ge([])),s=new ft(t,e),i=new ft(t,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new M(new ge([])),s=new ft(t,e),i=new ft(t,e+1);let r=se();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new ft(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ft{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return M.comparator(e.key,t.key)||ne(e._s,t._s)}static os(e,t){return ne(e._s,t._s)||M.comparator(e.key,t.key)}}/**
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
 */class LD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new be(ft.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pm(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ft(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,t){return T.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ps(s),r=i<0?0:i;return T.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ft(t,0),i=new ft(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),T.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new be(ne);return t.forEach(i=>{const r=new ft(i,0),o=new ft(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;M.isDocumentKey(r)||(r=r.child(""));const o=new ft(new M(r),0);let a=new be(ne);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(t.mutations,i=>{const r=new ft(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new ft(t,0),i=this.gs.firstAfterOrEqual(s);return T.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class FD{constructor(e){this.Es=e,this.docs=new Qe(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return T.resolve(s?s.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let s=nn();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():De.newInvalidDocument(i))}),T.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=nn();const o=t.path,a=new M(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Cm(bI(u),s)<=0||(i.has(u.key)||rl(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,t,s,i){q()}As(e,t){return T.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new VD(this)}getSize(e){return T.resolve(this.size)}}class VD extends Cb{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),T.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */class UD{constructor(e){this.persistence=e,this.Rs=new Si(t=>cr(t),sl),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Ps=new qm,this.targetCount=0,this.vs=fr.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,i)=>t(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),T.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new fr(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,T.resolve()}updateTargetData(e,t){return this.Dn(t),T.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(r).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return T.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),T.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),T.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return T.resolve(s)}containsKey(e,t){return T.resolve(this.Ps.containsKey(t))}}/**
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
 */class Nb{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new en(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new UD(this),this.indexManager=new ED,this.remoteDocumentCache=function(s){return new FD(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new vb(t),this.Ns=new PD(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new LD(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){N("MemoryPersistence","Starting transaction:",e);const i=new qD(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,t){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class qD extends SI{constructor(e){super(),this.currentSequenceNumber=e}}class Hh{constructor(e){this.persistence=e,this.Fs=new qm,this.$s=null}static Bs(e){return new Hh(e)}get Ls(){if(this.$s)return this.$s;throw q()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),T.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const i=M.fromPath(s);return this.qs(e,i).next(r=>{r||t.removeEntry(i,H.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return T.or([()=>T.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */class BD{constructor(e){this.yt=e}$(e,t,s,i){const r=new qh("createOrUpgrade",t);s<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Wy,{unique:!0}),a.createObjectStore("documentMutations")}(e),rv(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=T.resolve();return s<3&&i>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),rv(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(r))),s<4&&i>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Wy,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return T.waitFor(h)})}(e,r))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&i>=5&&(o=o.next(()=>this.Us(r))),s<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(r)))),s<7&&i>=7&&(o=o.next(()=>this.Gs(r))),s<8&&i>=8&&(o=o.next(()=>this.Qs(e,r))),s<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&i>=10&&(o=o.next(()=>this.js(r))),s<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:hD});c.createIndex("collectionPathOverlayIndex",dD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",fD,{unique:!1})})(e)})),s<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:eD});c.createIndex("documentKeyIndex",tD),c.createIndex("collectionGroupIndex",nD)}(e)).next(()=>this.Ws(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&i>=14&&(o=o.next(()=>this.zs(e,r))),s<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:aD}).createIndex("sequenceNumberIndex",cD,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:lD}).createIndex("documentKeyIndex",uD,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((s,i)=>{t+=Ru(i)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Us(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.W().next(i=>T.forEach(i,r=>{const o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>T.forEach(a,c=>{G(c.userId===r.userId);const l=Vi(this.yt,c);return bb(e,r.userId,l).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const r=[];return s.Z((o,a)=>{const c=new ge(o),l=function(u){return[0,Kt(u)]}(c);r.push(t.get(l).next(u=>u?T.resolve():(h=>t.put({targetId:0,path:Kt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>T.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:oD});const s=t.store("collectionParents"),i=new Um,r=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:Kt(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new ge(o);return r(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],l)=>{const u=Jn(a);return r(u.popLast())}))}js(e){const t=e.store("targets");return t.Z((s,i)=>{const r=Na(i),o=wb(this.yt,r);return t.put(o)})}Ws(e,t){const s=t.store("remoteDocuments"),i=[];return s.Z((r,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new M(ge.fromString(l.document.name).popFirst(5)):l.noDocument?M.fromSegments(l.noDocument.path):l.unknownDocument?M.fromSegments(l.unknownDocument.path):q()).path.toArray();var l;/**
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
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>T.waitFor(i))}zs(e,t){const s=t.store("mutations"),i=kb(this.yt),r=new Nb(Hh.Bs,this.yt.ie);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:se();Vi(this.yt,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),T.forEach(a,(c,l)=>{const u=new mt(l),h=Gh.re(this.yt,u),d=r.getIndexManager(u),f=zh.re(u,this.yt,d,r.referenceDelegate);return new Ab(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ep(t,en.at),c).next()})})}}function rv(n){n.createObjectStore("targetDocuments",{keyPath:iD}).createIndex("documentTargetsIndex",rD,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",sD,{unique:!0}),n.createObjectStore("targetGlobal")}const hf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Bm{constructor(e,t,s,i,r,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Hs=r,this.window=o,this.document=a,this.Js=l,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Bm.C())throw new A(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new xD(this,i),this.ii=t+"main",this.yt=new vb(c),this.ri=new On(this.ii,this.Xs,new BD(this.yt)),this.Cs=new CD(this.referenceDelegate,this.yt),this.remoteDocumentCache=kb(this.yt),this.Ns=new _D,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&Ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(E.FAILED_PRECONDITION,hf);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new en(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Ei(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return _a(e).get("owner").next(t=>T.resolve(this.mi(t)))}gi(e){return Hl(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=bt(t,"clientMetadata");return s.W().next(i=>{const r=this.Ii(i,18e5),o=i.filter(a=>r.indexOf(a)===-1);return T.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?T.resolve(!0):_a(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new A(E.FAILED_PRECONDITION,hf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hl(e).W().next(s=>this.Ii(s,5e3).find(i=>{if(this.clientId!==i.clientId){const r=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(r||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ep(e,en.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(s=>this.pi(s.updateTimeMs,t)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Hl(e).W().next(t=>this.Ii(t,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return zh.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new SD(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Gh.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,s){N("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",r=(o=this.Xs)===15?mD:o===14?yb:o===13?_b:o===12?pD:o===11?gb:void q();var o;let a;return this.ri.runTransaction(e,i,r,c=>(a=new ep(c,this.Ss?this.Ss.next():en.at),t==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw Ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new A(E.FAILED_PRECONDITION,EI);return s(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return _a(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new A(E.FAILED_PRECONDITION,hf)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _a(e).put("owner",t)}static C(){return On.C()}_i(e){const t=_a(e);return t.get("owner").next(s=>this.mi(s)?(N("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):T.resolve())}pi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(Ze(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),Tk()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const s=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return Ze("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ze("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _a(n){return bt(n,"owner")}function Hl(n){return bt(n,"clientMetadata")}function Wm(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class $m{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=i}static Ci(e,t){let s=se(),i=se();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new $m(e,t.fromCache,s,i)}}/**
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
 */class xb{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,i){return this.ki(e,t).next(r=>r||this.Oi(e,t,i,s)).next(r=>r||this.Mi(e,t))}ki(e,t){if(Ry(t))return T.resolve(null);let s=an(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Nu(t,null,"F"),s=an(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=se(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(t,a);return this.$i(t,l,o,c.readTime)?this.ki(e,Nu(t,null,"F")):this.Bi(e,l,t,c)}))})))}Oi(e,t,s,i){return Ry(t)||i.isEqual(H.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(t,r);return this.$i(t,o,s,i)?this.Mi(e,t):($f()<=me.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xf(t)),this.Bi(e,o,t,II(i,-1)))})}Fi(e,t){let s=new be(BI(e));return t.forEach((i,r)=>{rl(e,r)&&(s=s.add(r))}),s}$i(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return $f()<=me.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Xf(t)),this.Ni.getDocumentsMatchingQuery(e,t,yn.min())}Bi(e,t,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class WD{constructor(e,t,s,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new Qe(ne),this.Ui=new Si(r=>cr(r),sl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ab(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function Db(n,e,t,s){return new WD(n,e,t,s)}async function Rb(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=se();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function $D(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(p=>{const m=c.docVersions.get(f);G(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Ob(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function jD(n,e){const t=F(n),s=e.snapshotVersion;let i=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});i=t.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ct.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,m,g){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,u)&&a.push(t.Cs.updateTargetData(r,f))});let c=nn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Pb(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(H.min())){const u=t.Cs.getLastRemoteSnapshotVersion(r).next(h=>t.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.qi=i,r))}function Pb(n,e,t){let s=se(),i=se();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=nn();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function GD(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function To(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Cs.getTargetData(s,e).next(r=>r?(i=r,T.resolve(i)):t.Cs.allocateTargetId(s).next(o=>(i=new Zs(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.qi=t.qi.insert(s.targetId,s),t.Ui.set(e,s.targetId)),s})}async function Io(n,e,t){const s=F(n),i=s.qi.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ei(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Ou(n,e,t){const s=F(n);let i=H.min(),r=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=F(a),h=u.Ui.get(l);return h!==void 0?T.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,an(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?i:H.min(),t?r:se())).next(a=>(Fb(s,qI(e),a),{documents:a,Hi:r})))}function Mb(n,e){const t=F(n),s=F(t.Cs),i=t.qi.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",r=>s.ne(r,e).next(o=>o?o.target:null))}function Lb(n,e){const t=F(n),s=t.Ki.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Gi.getAllFromCollectionGroup(i,e,II(s,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Fb(t,e,i),i))}function Fb(n,e,t){let s=n.Ki.get(e)||H.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ki.set(e,s)}async function zD(n,e,t,s){const i=F(n);let r=se(),o=nn();for(const l of t){const u=e.Ji(l.metadata.name);l.document&&(r=r.add(u));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await To(i,function(l){return an($o(ge.fromString(`__bundle__/docs/${l}`)))}(s));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>Pb(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Cs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Cs.addMatchingKeys(l,r,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.Wi,u.zi)).next(()=>u.Wi)))}async function HD(n,e,t=se()){const s=await To(n,an(Fm(e.bundledQuery))),i=F(n);return i.persistence.runTransaction("Save named query","readwrite",r=>{const o=tt(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(r,e);const a=s.withResumeToken(ct.EMPTY_BYTE_STRING,o);return i.qi=i.qi.insert(a.targetId,a),i.Cs.updateTargetData(r,a).next(()=>i.Cs.removeMatchingKeysForTargetId(r,s.targetId)).next(()=>i.Cs.addMatchingKeys(r,t,s.targetId)).next(()=>i.Ns.saveNamedQuery(r,e))})}function ov(n,e){return`firestore_clients_${n}_${e}`}function av(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function df(n,e){return`firestore_targets_${n}_${e}`}class Pu{constructor(e,t,s,i){this.user=e,this.batchId=t,this.state=s,this.error=i}static Zi(e,t,s){const i=JSON.parse(s);let r,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(r=new A(i.error.code,i.error.message))),o?new Pu(e,t,i.state,r):(Ze("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Va{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let i,r=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return r&&s.error&&(r=typeof s.error.message=="string"&&typeof s.error.code=="string",r&&(i=new A(s.error.code,s.error.message))),r?new Va(e,s.state,i):(Ze("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let i=typeof s=="object"&&s.activeTargetIds instanceof Array,r=jh();for(let o=0;i&&o<s.activeTargetIds.length;++o)i=kI(s.activeTargetIds[o]),r=r.add(s.activeTargetIds[o]);return i?new Mu(e,r):(Ze("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class jm{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new jm(t.clientId,t.onlineState):(Ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ip{constructor(){this.activeTargetIds=jh()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ff{constructor(e,t,s,i,r){this.window=e,this.Hs=t,this.persistenceKey=s,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Qe(ne),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.ar=ov(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new ip),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const s of e){if(s===this.sr)continue;const i=this.getItem(ov(this.persistenceKey,s));if(i){const r=Mu.Zi(s,i);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const s=this.yr(t);s&&this.pr(s)}for(const s of this.cr)this.rr(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((s,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,s){this.Tr(e,t,s),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(df(this.persistenceKey,e));if(s){const i=Va.Zi(e,s);i&&(t=i.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(df(this.persistenceKey,e))}updateQueryState(e,t,s){this.Rr(e,t,s)}handleUserChange(e,t,s){t.forEach(i=>{this.Er(i)}),this.currentUser=e,s.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N("SharedClientState","READ",e,t),t}setItem(e,t){N("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(N("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void Ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Vr(s,null)}{const s=this.Sr(t.key,t.newValue);if(s)return this.Vr(s.clientId,s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Dr(t.key,t.newValue);if(s)return this.Cr(s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Nr(t.key,t.newValue);if(s)return this.kr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.yr(t.newValue);if(s)return this.pr(s)}}else if(t.key===this.hr){const s=function(i){let r=en.at;if(i!=null)try{const o=JSON.parse(i);G(typeof o=="number"),r=o}catch(o){Ze("SharedClientState","Failed to read sequence number from WebStorage",o)}return r}(t.newValue);s!==en.at&&this.sequenceNumberHandler(s)}else if(t.key===this.mr){const s=this.Or(t.newValue);await Promise.all(s.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,s){const i=new Pu(this.currentUser,e,t,s),r=av(this.persistenceKey,this.currentUser,e);this.setItem(r,i.tr())}Er(e){const t=av(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,s){const i=df(this.persistenceKey,e),r=new Va(e,t,s);this.setItem(i,r.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const s=this.vr(e);return Mu.Zi(s,t)}Dr(e,t){const s=this.dr.exec(e),i=Number(s[1]),r=s[2]!==void 0?s[2]:null;return Pu.Zi(new mt(r),i,t)}Nr(e,t){const s=this._r.exec(e),i=Number(s[1]);return Va.Zi(i,t)}yr(e){return jm.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const s=t?this.ur.insert(e,t):this.ur.remove(e),i=this.Ir(this.ur),r=this.Ir(s),o=[],a=[];return r.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{r.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=s})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=jh();return e.forEach((s,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Vb{constructor(){this.Lr=new ip,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,s){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ip,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KD{Ur(e){}shutdown(){}}/**
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
 */class cv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const QD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YD{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class XD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,i,r){const o=this.ho(e,t);N("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>(N("RestConnection","Received: ",c),c),c=>{throw po("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,i,r,o){return this.ao(e,t,s,i,r)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,t){const s=QD[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,i){return new Promise((r,o)=>{const a=new YN;a.setWithCredentials(!0),a.listenOnce(HN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case lf.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),r(l);break;case lf.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new A(E.DEADLINE_EXCEEDED,"Request time out"));break;case lf.HTTP_ERROR:const u=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(d.status);o(new A(f,d.message))}else o(new A(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(E.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,s,15)})}wo(e,t,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=GN(),o=zN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new QN({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=i.join("");N("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new YD({Hr:p=>{h?N("Connection","Not sending because WebChannel is closed:",p):(u||(N("Connection","Opening WebChannel transport."),l.open(),u=!0),N("Connection","WebChannel sending:",p),l.send(p))},Jr:()=>l.close()}),f=(p,m,g)=>{p.listen(m,y=>{try{g(y)}catch(w){setTimeout(()=>{throw w},0)}})};return f(l,Wl.EventType.OPEN,()=>{h||N("Connection","WebChannel transport opened.")}),f(l,Wl.EventType.CLOSE,()=>{h||(h=!0,N("Connection","WebChannel transport closed"),d.io())}),f(l,Wl.EventType.ERROR,p=>{h||(h=!0,po("Connection","WebChannel transport errored:",p),d.io(new A(E.UNAVAILABLE,"The operation could not be completed")))}),f(l,Wl.EventType.MESSAGE,p=>{var m;if(!h){const g=p.data[0];G(!!g);const y=g,w=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(w){N("Connection","WebChannel received error:",w);const S=w.status;let C=function(v){const I=st[v];if(I!==void 0)return JI(I)}(S),_=w.message;C===void 0&&(C=E.INTERNAL,_="Unknown error status: "+S+" with message "+w.message),h=!0,d.io(new A(C,_)),l.close()}else N("Connection","WebChannel received:",g),d.ro(g)}}),f(o,KN.STAT_EVENT,p=>{p.stat===yy.PROXY?N("Connection","Detected buffering proxy"):p.stat===yy.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 *//**
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
 */function Ub(){return typeof window<"u"?window:null}function ou(){return typeof document<"u"?document:null}/**
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
 */function ll(n){return new Wx(n,!0)}class Gm{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-s);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class qb{constructor(e,t,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Gm(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(Ze(t.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===t&&this.Go(s,i)},s=>{e(()=>{const i=new A(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JD extends qb{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.yt=r}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=Gx(this.yt,e),s=function(i){if(!("targetChange"in i))return H.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?H.min():r.readTime?tt(r.readTime):H.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=uc(this.yt),t.addTarget=function(i,r){let o;const a=r.target;return o=ku(a)?{documents:lb(i,a)}:{query:ub(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ib(i,r.resumeToken):r.snapshotVersion.compareTo(H.min())>0&&(o.readTime=wo(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Hx(this.yt,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=uc(this.yt),t.removeTarget=e,this.Bo(t)}}class ZD extends qb{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=zx(e.writeResults,e.commitTime),s=tt(e.commitTime);return this.listener.Zo(s,t)}return G(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=uc(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>hc(this.yt,s))};this.Bo(t)}}/**
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
 */class eR extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(E.UNKNOWN,i.toString())})}_o(e,t,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(E.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class tR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ze(t),this.ou=!1):N("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class nR{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Ci(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=F(a);c._u.add(4),await zo(c),c.gu.set("Unknown"),c._u.delete(4),await ul(c)}(this))})}),this.gu=new tR(s,i)}}async function ul(n){if(Ci(n))for(const e of n.wu)await e(!0)}async function zo(n){for(const e of n.wu)await e(!1)}function Kh(n,e){const t=F(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),Km(t)?Hm(t):Ko(t).ko()&&zm(t,e))}function dc(n,e){const t=F(n),s=Ko(t);t.du.delete(e),s.ko()&&Bb(t,e),t.du.size===0&&(s.ko()?s.Fo():Ci(t)&&t.gu.set("Unknown"))}function zm(n,e){n.yu.Ot(e.targetId),Ko(n).zo(e)}function Bb(n,e){n.yu.Ot(e),Ko(n).Ho(e)}function Hm(n){n.yu=new Vx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),Ko(n).start(),n.gu.uu()}function Km(n){return Ci(n)&&!Ko(n).No()&&n.du.size>0}function Ci(n){return F(n)._u.size===0}function Wb(n){n.yu=void 0}async function sR(n){n.du.forEach((e,t)=>{zm(n,e)})}async function iR(n,e){Wb(n),Km(n)?(n.gu.hu(e),Hm(n)):n.gu.set("Unknown")}async function rR(n,e,t){if(n.gu.set("Online"),e instanceof sb&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Lu(n,s)}else if(e instanceof iu?n.yu.Kt(e):e instanceof nb?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(H.min()))try{const s=await Ob(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(ct.EMPTY_BYTE_STRING,c.snapshotVersion)),Bb(i,a);const l=new Zs(c.target,a,1,c.sequenceNumber);zm(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){N("RemoteStore","Failed to raise snapshot:",s),await Lu(n,s)}}async function Lu(n,e,t){if(!Ei(e))throw e;n._u.add(1),await zo(n),n.gu.set("Offline"),t||(t=()=>Ob(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await ul(n)})}function $b(n,e){return e().catch(t=>Lu(n,t,e))}async function Ho(n){const e=F(n),t=hi(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;oR(e);)try{const i=await GD(e.localStore,s);if(i===null){e.fu.length===0&&t.Fo();break}s=i.batchId,aR(e,i)}catch(i){await Lu(e,i)}jb(e)&&Gb(e)}function oR(n){return Ci(n)&&n.fu.length<10}function aR(n,e){n.fu.push(e);const t=hi(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function jb(n){return Ci(n)&&!hi(n).No()&&n.fu.length>0}function Gb(n){hi(n).start()}async function cR(n){hi(n).eu()}async function lR(n){const e=hi(n);for(const t of n.fu)e.Xo(t.mutations)}async function uR(n,e,t){const s=n.fu.shift(),i=Mm.from(s,e,t);await $b(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ho(n)}async function hR(n,e){e&&hi(n).Yo&&await async function(t,s){if(i=s.code,XI(i)&&i!==E.ABORTED){const r=t.fu.shift();hi(t).Mo(),await $b(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ho(t)}var i}(n,e),jb(n)&&Gb(n)}async function lv(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const s=Ci(t);t._u.add(3),await zo(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await ul(t)}async function rp(n,e){const t=F(n);e?(t._u.delete(2),await ul(t)):e||(t._u.add(2),await zo(t),t.gu.set("Unknown"))}function Ko(n){return n.pu||(n.pu=function(e,t,s){const i=F(e);return i.su(),new JD(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(n.datastore,n.asyncQueue,{Yr:sR.bind(null,n),Zr:iR.bind(null,n),Wo:rR.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),Km(n)?Hm(n):n.gu.set("Unknown")):(await n.pu.stop(),Wb(n))})),n.pu}function hi(n){return n.Iu||(n.Iu=function(e,t,s){const i=F(e);return i.su(),new ZD(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(n.datastore,n.asyncQueue,{Yr:cR.bind(null,n),Zr:hR.bind(null,n),tu:lR.bind(null,n),Zo:uR.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Ho(n)):(await n.Iu.stop(),n.fu.length>0&&(N("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
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
 */class Qm{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Qm(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(n,e){if(Ze("AsyncQueue",`${e}: ${n}`),Ei(n))return new A(E.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class so{constructor(e){this.comparator=e?(t,s)=>e(t,s)||M.comparator(t.key,s.key):(t,s)=>M.comparator(t.key,s.key),this.keyedMap=Aa(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new so(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new so;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class uv{constructor(){this.Tu=new Qe(M.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):q():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class bo{constructor(e,t,s,i,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new bo(e,t,so.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class dR{constructor(){this.Au=void 0,this.listeners=[]}}class fR{constructor(){this.queries=new Si(e=>UI(e),il),this.onlineState="Unknown",this.Ru=new Set}}async function Ym(n,e){const t=F(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new dR),i)try{r.Au=await t.onListen(s)}catch(o){const a=Qo(o,`Initialization of query '${Xf(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.bu(t.onlineState),r.Au&&e.Pu(r.Au)&&Jm(t)}async function Xm(n,e){const t=F(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function pR(n,e){const t=F(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Jm(t)}function mR(n,e,t){const s=F(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function Jm(n){n.Ru.forEach(e=>{e.next()})}class Zm{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new bo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class gR{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
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
 */class hv{constructor(e){this.yt=e}Ji(e){return es(this.yt,e)}Yi(e){return e.metadata.exists?cb(this.yt,e.document,!1):De.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return tt(e)}}class _R{constructor(e,t,s){this.Mu=e,this.localStore=t,this.yt=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=zb(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const s=ge.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new hv(this.yt);for(const i of e)if(i.metadata.queries){const r=s.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||se()).add(r);t.set(o,a)}}return t}async complete(){const e=await zD(this.localStore,new hv(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const s of this.queries)await HD(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function zb(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Hb{constructor(e){this.key=e}}class Kb{constructor(e){this.key=e}}class Qb{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=se(),this.mutatedKeys=se(),this.Gu=BI(e),this.Qu=new so(this.Gu)}get ju(){return this.qu}Wu(e,t){const s=t?t.zu:new uv,i=t?t.Qu:this.Qu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=rl(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(s.track({type:3,doc:f}),g=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),g=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),g=!0):d&&!f&&(s.track({type:1,doc:d}),g=!0,(c||l)&&(a=!0)),g&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new bo(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new uv,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=se(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new Kb(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new Hb(s))}),t}tc(e){this.qu=e.Hi,this.Ku=se();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return bo.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class yR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class vR{constructor(e){this.key=e,this.nc=!1}}class wR{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Si(a=>UI(a),il),this.rc=new Map,this.oc=new Set,this.uc=new Qe(M.comparator),this.cc=new Map,this.ac=new qm,this.hc={},this.lc=new Map,this.fc=fr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function TR(n,e){const t=ig(n);let s,i;const r=t.ic.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await To(t.localStore,an(e));t.isPrimaryClient&&Kh(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await eg(t,e,s,a==="current",o.resumeToken)}return i}async function eg(n,e,t,s,i){n._c=(h,d,f)=>async function(p,m,g,y){let w=m.view.Wu(g);w.$i&&(w=await Ou(p.localStore,m.query,!1).then(({documents:_})=>m.view.Wu(_,w)));const S=y&&y.targetChanges.get(m.targetId),C=m.view.applyChanges(w,p.isPrimaryClient,S);return op(p,m.targetId,C.Xu),C.snapshot}(n,h,d,f);const r=await Ou(n.localStore,e,!0),o=new Qb(e,r.Hi),a=o.Wu(r.documents),c=cl.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);op(n,t,l.Xu);const u=new yR(e,t,o);return n.ic.set(e,u),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),l.snapshot}async function IR(n,e){const t=F(n),s=t.ic.get(e),i=t.rc.get(s.targetId);if(i.length>1)return t.rc.set(s.targetId,i.filter(r=>!il(r,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Io(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),dc(t.remoteStore,s.targetId),Eo(t,s.targetId)}).catch(bi)):(Eo(t,s.targetId),await Io(t.localStore,s.targetId,!0))}async function bR(n,e,t){const s=rg(n);try{const i=await function(r,o){const a=F(r),c=qe.now(),l=o.reduce((d,f)=>d.add(f.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=nn(),p=se();return a.Gi.getEntries(d,l).next(m=>{f=m,f.forEach((g,y)=>{y.isValidDocument()||(p=p.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const g=[];for(const y of o){const w=Rx(y,u.get(y.key).overlayedDocument);w!=null&&g.push(new Rs(y.key,w,FI(w.value.mapValue),Ve.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,g,o)}).next(m=>{h=m;const g=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,m.batchId,g)})}).then(()=>({batchId:h.batchId,changes:eb(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new Qe(ne)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,t),await Os(s,i.changes),await Ho(s.remoteStore)}catch(i){const r=Qo(i,"Failed to persist write");t.reject(r)}}async function Yb(n,e){const t=F(n);try{const s=await jD(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.cc.get(r);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?G(o.nc):i.removedDocuments.size>0&&(G(o.nc),o.nc=!1))}),await Os(t,s,e)}catch(s){await bi(s)}}function dv(n,e,t){const s=F(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=F(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Jm(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ER(n,e,t){const s=F(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Qe(M.comparator);o=o.insert(r,De.newNoDocument(r,H.min()));const a=se().add(r),c=new al(H.min(),new Map,new be(ne),o,a);await Yb(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),sg(s)}else await Io(s.localStore,e,!1).then(()=>Eo(s,e,t)).catch(bi)}async function SR(n,e){const t=F(n),s=e.batch.batchId;try{const i=await $D(t.localStore,e);ng(t,s,null),tg(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Os(t,i)}catch(i){await bi(i)}}async function CR(n,e,t){const s=F(n);try{const i=await function(r,o){const a=F(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(G(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);ng(s,e,t),tg(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Os(s,i)}catch(i){await bi(i)}}async function kR(n,e){const t=F(n);Ci(t.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(r){const o=F(r);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const i=t.lc.get(s)||[];i.push(e),t.lc.set(s,i)}catch(s){const i=Qo(s,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function tg(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function ng(n,e,t){const s=F(n);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Eo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||Xb(n,s)})}function Xb(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(dc(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),sg(n))}function op(n,e,t){for(const s of t)s instanceof Hb?(n.ac.addReference(s.key,e),AR(n,s)):s instanceof Kb?(N("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||Xb(n,s.key)):q()}function AR(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(N("SyncEngine","New document in limbo: "+t),n.oc.add(s),sg(n))}function sg(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new M(ge.fromString(e)),s=n.fc.next();n.cc.set(s,new vR(t)),n.uc=n.uc.insert(t,s),Kh(n.remoteStore,new Zs(an($o(t.path)),s,2,en.at))}}async function Os(n,e,t){const s=F(n),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=$m.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=F(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ei(u))throw u;N("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.qi=l.qi.insert(h,p)}}}(s.localStore,r))}async function NR(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const s=await Rb(t.localStore,e);t.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new A(E.CANCELLED,r))})}),i.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Os(t,s.ji)}}function xR(n,e){const t=F(n),s=t.cc.get(e);if(s&&s.nc)return se().add(s.key);{let i=se();const r=t.rc.get(e);if(!r)return i;for(const o of r){const a=t.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function DR(n,e){const t=F(n),s=await Ou(t.localStore,e.query,!0),i=e.view.tc(s);return t.isPrimaryClient&&op(t,e.targetId,i.Xu),i}async function RR(n,e){const t=F(n);return Lb(t.localStore,e).then(s=>Os(t,s))}async function OR(n,e,t,s){const i=F(n),r=await function(o,a){const c=F(o),l=F(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Tn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):T.resolve(null)))}(i.localStore,e);r!==null?(t==="pending"?await Ho(i.remoteStore):t==="acknowledged"||t==="rejected"?(ng(i,e,s||null),tg(i,e),function(o,a){F(F(o).mutationQueue).An(a)}(i.localStore,e)):q(),await Os(i,r)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function PR(n,e){const t=F(n);if(ig(t),rg(t),e===!0&&t.dc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),i=await fv(t,s.toArray());t.dc=!0,await rp(t.remoteStore,!0);for(const r of i)Kh(t.remoteStore,r)}else if(e===!1&&t.dc!==!1){const s=[];let i=Promise.resolve();t.rc.forEach((r,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):i=i.then(()=>(Eo(t,o),Io(t.localStore,o,!0))),dc(t.remoteStore,o)}),await i,await fv(t,s),function(r){const o=F(r);o.cc.forEach((a,c)=>{dc(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new Qe(M.comparator)}(t),t.dc=!1,await rp(t.remoteStore,!1)}}async function fv(n,e,t){const s=F(n),i=[],r=[];for(const o of e){let a;const c=s.rc.get(o);if(c&&c.length!==0){a=await To(s.localStore,an(c[0]));for(const l of c){const u=s.ic.get(l),h=await DR(s,u);h.snapshot&&r.push(h.snapshot)}}else{const l=await Mb(s.localStore,o);a=await To(s.localStore,l),await eg(s,Jb(l),o,!1,a.resumeToken)}i.push(a)}return s.sc.Wo(r),i}function Jb(n){return VI(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function MR(n){const e=F(n);return F(F(e.localStore).persistence).vi()}async function LR(n,e,t,s){const i=F(n);if(i.dc)return void N("SyncEngine","Ignoring unexpected query state notification.");const r=i.rc.get(e);if(r&&r.length>0)switch(t){case"current":case"not-current":{const o=await Lb(i.localStore,qI(r[0])),a=al.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ct.EMPTY_BYTE_STRING);await Os(i,o,a);break}case"rejected":await Io(i.localStore,e,!0),Eo(i,e,s);break;default:q()}}async function FR(n,e,t){const s=ig(n);if(s.dc){for(const i of e){if(s.rc.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const r=await Mb(s.localStore,i),o=await To(s.localStore,r);await eg(s,Jb(r),o.targetId,!1,o.resumeToken),Kh(s.remoteStore,o)}for(const i of t)s.rc.has(i)&&await Io(s.localStore,i,!1).then(()=>{dc(s.remoteStore,i),Eo(s,i)}).catch(bi)}}function ig(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ER.bind(null,e),e.sc.Wo=pR.bind(null,e.eventManager),e.sc.wc=mR.bind(null,e.eventManager),e}function rg(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CR.bind(null,e),e}function VR(n,e,t){const s=F(n);(async function(i,r,o){try{const a=await r.getMetadata();if(await function(h,d){const f=F(h),p=tt(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",m=>f.Ns.getBundleMetadata(m,d.id)).then(m=>!!m&&m.createTime.compareTo(p)>=0)}(i.localStore,a))return await r.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(zb(a));const c=new _R(a,i.localStore,r.yt);let l=await r.mc();for(;l;){const h=await c.Fu(l);h&&o._updateProgress(h),l=await r.mc()}const u=await c.complete();return await Os(i,u.Lu,void 0),await function(h,d){const f=F(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ns.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Bu)}catch(a){return po("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(i=>{s.sharedClientState.notifyBundleLoaded(i)})}class Zb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ll(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Db(this.persistence,new xb,e.initialUser,this.yt)}yc(e){return new Nb(Hh.Bs,this.yt)}gc(e){return new Vb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eE extends Zb{constructor(e,t,s){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await rg(this.Ac.syncEngine),await Ho(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return Db(this.persistence,new xb,e.initialUser,this.yt)}Tc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new AD(s,e.asyncQueue,t)}Ec(e,t){const s=new dx(t,this.persistence);return new hx(e.asyncQueue,s)}yc(e){const t=Wm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Bm(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,Ub(),ou(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Vb}}class UR extends eE{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof ff&&(this.sharedClientState.syncEngine={Fr:OR.bind(null,t),$r:LR.bind(null,t),Br:FR.bind(null,t),vi:MR.bind(null,t),Mr:RR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async s=>{await PR(this.Ac.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}gc(e){const t=Ub();if(!ff.C(t))throw new A(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Wm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ff(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class og{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>dv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=NR.bind(null,this.syncEngine),await rp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fR}createDatastore(e){const t=ll(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new XD(i));var i;return function(r,o,a,c){return new eR(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>dv(this.syncEngine,a,0),o=cv.C()?new cv:new KD,new nR(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,l){const u=new wR(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=F(e);N("RemoteStore","RemoteStore shutting down."),t._u.add(5),await zo(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function ag(n,e,t){if(!t)throw new A(E.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tE(n,e,t,s){if(e===!0&&s===!0)throw new A(E.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pv(n){if(!M.isDocumentKey(n))throw new A(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mv(n){if(M.isDocumentKey(n))throw new A(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function _e(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new A(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qh(n);throw new A(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function nE(n,e){if(e<=0)throw new A(E.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const gv=new Map;class _v{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new A(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,tE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class hl{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _v({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _v(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new ZN;switch(t.type){case"gapi":const s=t.client;return new sx(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new A(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=gv.get(e);t&&(N("ComponentProvider","Removing Datastore"),gv.delete(e),t.terminate())}(this),Promise.resolve()}}function qR(n,e,t,s={}){var i;const r=(n=_e(n,hl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&po("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=mt.MOCK_USER;else{o=Xw(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new A(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new mt(c)}n._authCredentials=new ex(new yI(o,a))}}/**
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
 */class Re{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class Dt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dt(this.firestore,e,this._query)}}class ts extends Dt{constructor(e,t,s){super(e,t,$o(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new M(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function sE(n,e,...t){if(n=B(n),ag("collection","path",e),n instanceof hl){const s=ge.fromString(e,...t);return mv(s),new ts(n,null,s)}{if(!(n instanceof Re||n instanceof ts))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return mv(s),new ts(n.firestore,null,s)}}function BR(n,e){if(n=_e(n,hl),ag("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Dt(n,null,function(t){return new Ds(ge.emptyPath(),t)}(e))}function Fu(n,e,...t){if(n=B(n),arguments.length===1&&(e=vI.R()),ag("doc","path",e),n instanceof hl){const s=ge.fromString(e,...t);return pv(s),new Re(n,null,new M(s))}{if(!(n instanceof Re||n instanceof ts))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return pv(s),new Re(n.firestore,n instanceof ts?n.converter:null,new M(s))}}function iE(n,e){return n=B(n),e=B(e),(n instanceof Re||n instanceof ts)&&(e instanceof Re||e instanceof ts)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function rE(n,e){return n=B(n),e=B(e),n instanceof Dt&&e instanceof Dt&&n.firestore===e.firestore&&il(n._query,e._query)&&n.converter===e.converter}/**
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
 */function yv(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Yh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ze("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class WR{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new yt,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(s=>{s&&s.Ou()?this.metadata.resolve(s.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ku)}`))},s=>this.metadata.reject(s))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),s=Number(t);isNaN(s)&&this.Dc(`length string (${t}) is not valid number`);const i=await this.Cc(s);return new gR(JSON.parse(i),e.length+s)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class $R{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,i){const r=F(s),o=uc(r.yt)+"/documents",a={documents:i.map(h=>lc(r.yt,h))},c=await r._o("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=jx(r.yt,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());G(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Go(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const i=M.fromPath(s);this.mutations.push(new Rm(i,this.precondition(i)))}),await async function(t,s){const i=F(t),r=uc(i.yt)+"/documents",o={writes:s.map(a=>hc(i.yt,a))};await i.ao("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw q();t=H.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new A(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(H.min())?Ve.exists(!1):Ve.updateTime(t):Ve.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(H.min()))throw new A(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(t)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class jR{constructor(e,t,s,i,r){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=i,this.deferred=r,this.kc=s.maxAttempts,this.xo=new Gm(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new $R(this.datastore),t=this.Mc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Fc(i)}))}).catch(s=>{this.Fc(s)})})}Mc(e){try{const t=this.updateFunction(e);return!nl(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!XI(t)}return!1}}/**
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
 */class GR{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=vI.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{N("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(N("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Qo(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function oE(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Rb(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function aE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cg(n);N("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>lv(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>lv(e.remoteStore,r)),n.onlineComponents=e}async function cg(n){return n.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await oE(n,new Zb)),n.offlineComponents}async function Xh(n){return n.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await aE(n,new og)),n.onlineComponents}function cE(n){return cg(n).then(e=>e.persistence)}function lg(n){return cg(n).then(e=>e.localStore)}function lE(n){return Xh(n).then(e=>e.remoteStore)}function ug(n){return Xh(n).then(e=>e.syncEngine)}function zR(n){return Xh(n).then(e=>e.datastore)}async function So(n){const e=await Xh(n),t=e.eventManager;return t.onListen=TR.bind(null,e.syncEngine),t.onUnlisten=IR.bind(null,e.syncEngine),t}function HR(n){return n.asyncQueue.enqueue(async()=>{const e=await cE(n),t=await lE(n);return e.setNetworkEnabled(!0),function(s){const i=F(s);return i._u.delete(0),ul(i)}(t)})}function KR(n){return n.asyncQueue.enqueue(async()=>{const e=await cE(n),t=await lE(n);return e.setNetworkEnabled(!1),async function(s){const i=F(s);i._u.add(0),await zo(i),i.gu.set("Offline")}(t)})}function QR(n,e){const t=new yt;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await function(a,c){const l=F(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(s,i);o.isFoundDocument()?r.resolve(o):o.isNoDocument()?r.resolve(null):r.reject(new A(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Qo(o,`Failed to get document '${i} from cache`);r.reject(a)}}(await lg(n),e,t)),t.promise}function uE(n,e,t={}){const s=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Yh({next:h=>{r.enqueueAndForget(()=>Xm(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new A(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new A(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Zm($o(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Ym(i,u)}(await So(n),n.asyncQueue,e,t,s)),s.promise}function YR(n,e){const t=new yt;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await Ou(s,i,!0),a=new Qb(i,o.Hi),c=a.Wu(o.documents),l=a.applyChanges(c,!1);r.resolve(l.snapshot)}catch(o){const a=Qo(o,`Failed to execute query '${i} against cache`);r.reject(a)}}(await lg(n),e,t)),t.promise}function hE(n,e,t={}){const s=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Yh({next:h=>{r.enqueueAndForget(()=>Xm(i,u)),h.fromCache&&a.source==="server"?c.reject(new A(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Zm(o,l,{includeMetadataChanges:!0,Nu:!0});return Ym(i,u)}(await So(n),n.asyncQueue,e,t,s)),s.promise}function XR(n,e){const t=new Yh(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){F(s).Ru.add(i),i.next()}(await So(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){F(s).Ru.delete(i)}(await So(n),t))}}function JR(n,e,t,s){const i=function(r,o){let a;return a=typeof r=="string"?new TextEncoder().encode(r):r,function(c,l){return new WR(c,l)}(function(c,l){if(c instanceof Uint8Array)return yv(c,l);if(c instanceof ArrayBuffer)return yv(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ll(e));n.asyncQueue.enqueueAndForget(async()=>{VR(await ug(n),i,s)})}function ZR(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const i=F(t);return i.persistence.runTransaction("Get named query","readonly",r=>i.Ns.getNamedQuery(r,s))}(await lg(n),e))}class eO{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Gm(this,"async_queue_retry"),this.Wc=()=>{const t=ou();t&&N("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=ou();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=ou();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new yt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ei(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ze("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=Qm.createAndSchedule(this,e,t,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function ap(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class tO{constructor(){this._progressObserver={},this._taskCompletionResolver=new yt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const nO=-1;class Ye extends hl{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new eO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dE(this),this._firestoreClient.terminate()}}function Et(n){return n._firestoreClient||dE(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function dE(n){var e;const t=n._freezeSettings(),s=function(i,r,o,a){return new fx(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new GR(n._authCredentials,n._appCheckCredentials,n._queue,s)}function sO(n,e){pE(n=_e(n,Ye));const t=Et(n),s=n._freezeSettings(),i=new og;return fE(t,i,new eE(i,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function iO(n){pE(n=_e(n,Ye));const e=Et(n),t=n._freezeSettings(),s=new og;return fE(e,s,new UR(s,t.cacheSizeBytes))}function fE(n,e,t){const s=new yt;return n.asyncQueue.enqueue(async()=>{try{await oE(n,t),await aE(n,e),s.resolve()}catch(i){const r=i;if(!function(o){return o.name==="FirebaseError"?o.code===E.FAILED_PRECONDITION||o.code===E.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(r))throw r;po("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function rO(n){if(n._initialized&&!n._terminated)throw new A(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!On.C())return Promise.resolve();const s=t+"main";await On.delete(s)}(Wm(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function oO(n){return function(e){const t=new yt;return e.asyncQueue.enqueueAndForget(async()=>kR(await ug(e),t)),t.promise}(Et(n=_e(n,Ye)))}function aO(n){return HR(Et(n=_e(n,Ye)))}function cO(n){return KR(Et(n=_e(n,Ye)))}function lO(n,e){const t=Et(n=_e(n,Ye)),s=new tO;return JR(t,n._databaseId,e,s),s}function uO(n,e){return ZR(Et(n=_e(n,Ye)),e).then(t=>t?new Dt(n,null,t.query):null)}function pE(n){if(n._initialized||n._terminated)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 *//**
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
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(ct.fromBase64String(e))}catch(t){throw new A(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new is(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class di{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new A(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rr{constructor(e){this._methodName=e}}/**
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
 */class Jh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new A(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new A(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */const hO=/^__.*__$/;class dO{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,t,this.fieldTransforms):new jo(e,this.data,t,this.fieldTransforms)}}class mE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Rs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Zh{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Vu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(gE(this.sa)&&hO.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class fO{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=s||ll(e)}da(e,t,s,i=!1){return new Zh({sa:e,methodName:t,fa:s,path:et.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Or(n){const e=n._freezeSettings(),t=ll(n._databaseId);return new fO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ed(n,e,t,s,i,r={}){const o=n.da(r.merge||r.mergeFields?2:0,e,t,i);pg("Data must be an object, but it was:",o,s);const a=vE(s,o);let c,l;if(r.merge)c=new tn(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=cp(e,h,t);if(!o.contains(d))throw new A(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);TE(u,d)||u.push(d)}c=new tn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new dO(new At(a),c,l)}class dl extends Rr{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dl}}function _E(n,e,t){return new Zh({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class hg extends Rr{_toFieldTransform(e){return new ol(e.path,new yo)}isEqual(e){return e instanceof hg}}class pO extends Rr{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=_E(this,e,!0),s=this._a.map(r=>Pr(r,t)),i=new lr(s);return new ol(e.path,i)}isEqual(e){return this===e}}class mO extends Rr{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=_E(this,e,!0),s=this._a.map(r=>Pr(r,t)),i=new ur(s);return new ol(e.path,i)}isEqual(e){return this===e}}class gO extends Rr{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new vo(e.yt,jI(e.yt,this.wa));return new ol(e.path,t)}isEqual(e){return this===e}}function dg(n,e,t,s){const i=n.da(1,e,t);pg("Data must be an object, but it was:",i,s);const r=[],o=At.empty();Dr(s,(c,l)=>{const u=mg(e,c,t);l=B(l);const h=i.ca(u);if(l instanceof dl)r.push(u);else{const d=Pr(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new tn(r);return new mE(o,a,i.fieldTransforms)}function fg(n,e,t,s,i,r){const o=n.da(1,e,t),a=[cp(e,s,t)],c=[i];if(r.length%2!=0)throw new A(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(cp(e,r[d])),c.push(r[d+1]);const l=[],u=At.empty();for(let d=a.length-1;d>=0;--d)if(!TE(l,a[d])){const f=a[d];let p=c[d];p=B(p);const m=o.ca(f);if(p instanceof dl)l.push(f);else{const g=Pr(p,m);g!=null&&(l.push(f),u.set(f,g))}}const h=new tn(l);return new mE(u,h,o.fieldTransforms)}function yE(n,e,t,s=!1){return Pr(t,n.da(s?4:3,e))}function Pr(n,e){if(wE(n=B(n)))return pg("Unsupported field value:",e,n),vE(n,e);if(n instanceof Rr)return function(t,s){if(!gE(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=Pr(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=B(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return jI(s.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=qe.fromDate(t);return{timestampValue:wo(s.yt,i)}}if(t instanceof qe){const i=new qe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:wo(s.yt,i)}}if(t instanceof Jh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof is)return{bytesValue:ib(s.yt,t._byteString)};if(t instanceof Re){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Om(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${Qh(t)}`)}(n,e)}function vE(n,e){const t={};return CI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(n,(s,i)=>{const r=Pr(i,e.ra(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function wE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof qe||n instanceof Jh||n instanceof is||n instanceof Re||n instanceof Rr)}function pg(n,e,t){if(!wE(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Qh(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function cp(n,e,t){if((e=B(e))instanceof di)return e._internalPath;if(typeof e=="string")return mg(n,e);throw Vu("Field path arguments must be of type string or ",n,!1,void 0,t)}const _O=new RegExp("[~\\*/\\[\\]]");function mg(n,e,t){if(e.search(_O)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new di(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vu(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new A(E.INVALID_ARGUMENT,a+n+c)}function TE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class fc{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(td("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yO extends fc{data(){return super.data()}}function td(n,e){return typeof e=="string"?mg(n,e):e instanceof di?e._internalPath:e._delegate._internalPath}/**
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
 */function IE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new A(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gg{}class fl extends gg{}function Ws(n,e,...t){let s=[];e instanceof gg&&s.push(e),s=s.concat(t),function(i){const r=i.filter(a=>a instanceof _g).length,o=i.filter(a=>a instanceof nd).length;if(r>1||r>0&&o>0)throw new A(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class nd extends fl{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new nd(e,t,s)}_apply(e){const t=this._parse(e);return EE(e._query,t),new Dt(e.firestore,e.converter,Yf(e._query,t))}_parse(e){const t=Or(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new A(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){wv(u,l);const d=[];for(const f of u)d.push(vv(a,i,f));h={arrayValue:{values:d}}}else h=vv(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||wv(u,l),h=yE(o,r,u,l==="in"||l==="not-in");return fe.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vO(n,e,t){const s=e,i=td("where",n);return nd._create(i,s,t)}class _g extends gg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _g(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)EE(r,a),r=Yf(r,a)}(e._query,t),new Dt(e.firestore,e.converter,Yf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yg extends fl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new yg(e,t)}_apply(e){const t=function(s,i,r){if(s.startAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new no(i,r);return function(a,c){if(xm(a)===null){const l=Bh(a);l!==null&&SE(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Dt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Ds(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function wO(n,e="asc"){const t=e,s=td("orderBy",n);return yg._create(s,t)}class sd extends fl{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new sd(e,t,s)}_apply(e){return new Dt(e.firestore,e.converter,Nu(e._query,this._limit,this._limitType))}}function TO(n){return nE("limit",n),sd._create("limit",n,"F")}function IO(n){return nE("limitToLast",n),sd._create("limitToLast",n,"L")}class id extends fl{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new id(e,t,s)}_apply(e){const t=bE(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(s,i){return new Ds(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function bO(...n){return id._create("startAt",n,!0)}function EO(...n){return id._create("startAfter",n,!1)}class rd extends fl{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new rd(e,t,s)}_apply(e){const t=bE(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(s,i){return new Ds(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function SO(...n){return rd._create("endBefore",n,!1)}function CO(...n){return rd._create("endAt",n,!0)}function bE(n,e,t,s){if(t[0]=B(t[0]),t[0]instanceof fc)return function(i,r,o,a,c){if(!a)throw new A(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Yi(i))if(u.field.isKeyField())l.push(ar(r,a.key));else{const h=a.data.field(u.field);if(Am(h))throw new A(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new A(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ui(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const i=Or(n.firestore);return function(r,o,a,c,l,u){const h=r.explicitOrderBy;if(l.length>h.length)throw new A(E.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const p=l[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new A(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Dm(r)&&p.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const m=r.path.child(ge.fromString(p));if(!M.isDocumentKey(m))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const g=new M(m);d.push(ar(o,g))}else{const m=yE(a,c,p);d.push(m)}}return new ui(d,u)}(n._query,n.firestore._databaseId,i,e,t,s)}}function vv(n,e,t){if(typeof(t=B(t))=="string"){if(t==="")throw new A(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(e)&&t.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ge.fromString(t));if(!M.isDocumentKey(s))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ar(n,new M(s))}if(t instanceof Re)return ar(n,t._key);throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qh(t)}.`)}function wv(n,e){if(!Array.isArray(n)||n.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new A(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function EE(n,e){if(e.isInequality()){const s=Bh(n),i=e.field;if(s!==null&&!s.isEqual(i))throw new A(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=xm(n);r!==null&&SE(n,i,r)}const t=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function SE(n,e,t){if(!t.isEqual(e))throw new A(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class vg{convertValue(e,t="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw q()}}convertObject(e,t){const s={};return Dr(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new Jh(Ge(e.latitude),Ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=AI(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(oc(e));default:return null}}convertTimestamp(e){const t=ci(e);return new qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ge.fromString(e);G(pb(s));const i=new ai(s.get(1),s.get(3)),r=new M(s.popFirst(5));return i.isEqual(t)||Ze(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function od(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class kO extends vg{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}/**
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
 */class Gi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends fc{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(td("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Ua extends Cs{data(e={}){return super.data(e)}}class fi{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Gi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ua(this._firestore,this._userDataWriter,s.key,s,new Gi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new A(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ua(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ua(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:AO(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function AO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function CE(n,e){return n instanceof Cs&&e instanceof Cs?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof fi&&e instanceof fi&&n._firestore===e._firestore&&rE(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function NO(n){n=_e(n,Re);const e=_e(n.firestore,Ye);return uE(Et(e),n._key).then(t=>wg(e,n,t))}class Mr extends vg{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function xO(n){n=_e(n,Re);const e=_e(n.firestore,Ye),t=Et(e),s=new Mr(e);return QR(t,n._key).then(i=>new Cs(e,s,n._key,i,new Gi(i!==null&&i.hasLocalMutations,!0),n.converter))}function DO(n){n=_e(n,Re);const e=_e(n.firestore,Ye);return uE(Et(e),n._key,{source:"server"}).then(t=>wg(e,n,t))}function RO(n){n=_e(n,Dt);const e=_e(n.firestore,Ye),t=Et(e),s=new Mr(e);return IE(n._query),hE(t,n._query).then(i=>new fi(e,s,n,i))}function OO(n){n=_e(n,Dt);const e=_e(n.firestore,Ye),t=Et(e),s=new Mr(e);return YR(t,n._query).then(i=>new fi(e,s,n,i))}function PO(n){n=_e(n,Dt);const e=_e(n.firestore,Ye),t=Et(e),s=new Mr(e);return hE(t,n._query,{source:"server"}).then(i=>new fi(e,s,n,i))}function Tv(n,e,t){n=_e(n,Re);const s=_e(n.firestore,Ye),i=od(n.converter,e,t);return pl(s,[ed(Or(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ve.none())])}function Iv(n,e,t,...s){n=_e(n,Re);const i=_e(n.firestore,Ye),r=Or(i);let o;return o=typeof(e=B(e))=="string"||e instanceof di?fg(r,"updateDoc",n._key,e,t,s):dg(r,"updateDoc",n._key,e),pl(i,[o.toMutation(n._key,Ve.exists(!0))])}function MO(n){return pl(_e(n.firestore,Ye),[new Go(n._key,Ve.none())])}function LO(n,e){const t=_e(n.firestore,Ye),s=Fu(n),i=od(n.converter,e);return pl(t,[ed(Or(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Ve.exists(!1))]).then(()=>s)}function kE(n,...e){var t,s,i;n=B(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ap(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ap(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof Re)l=_e(n.firestore,Ye),u=$o(n._key.path),c={next:h=>{e[o]&&e[o](wg(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=_e(n,Dt);l=_e(h.firestore,Ye),u=h._query;const d=new Mr(l);c={next:f=>{e[o]&&e[o](new fi(l,d,h,f))},error:e[o+1],complete:e[o+2]},IE(n._query)}return function(h,d,f,p){const m=new Yh(p),g=new Zm(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>Ym(await So(h),g)),()=>{m.bc(),h.asyncQueue.enqueueAndForget(async()=>Xm(await So(h),g))}}(Et(l),u,a,c)}function FO(n,e){return XR(Et(n=_e(n,Ye)),ap(e)?e:{next:e})}function pl(n,e){return function(t,s){const i=new yt;return t.asyncQueue.enqueueAndForget(async()=>bR(await ug(t),s,i)),i.promise}(Et(n),e)}function wg(n,e,t){const s=t.docs.get(e._key),i=new Mr(n);return new Cs(n,i,e._key,s,new Gi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const VO={maxAttempts:5};/**
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
 */class UO{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Or(e)}set(e,t,s){this._verifyNotCommitted();const i=Hs(e,this._firestore),r=od(i.converter,t,s),o=ed(this._dataReader,"WriteBatch.set",i._key,r,i.converter!==null,s);return this._mutations.push(o.toMutation(i._key,Ve.none())),this}update(e,t,s,...i){this._verifyNotCommitted();const r=Hs(e,this._firestore);let o;return o=typeof(t=B(t))=="string"||t instanceof di?fg(this._dataReader,"WriteBatch.update",r._key,t,s,i):dg(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Hs(e,this._firestore);return this._mutations=this._mutations.concat(new Go(t._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Hs(n,e){if((n=B(n)).firestore!==e)throw new A(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 *//**
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
 */class qO extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Or(e)}get(e){const t=Hs(e,this._firestore),s=new kO(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return q();const r=i[0];if(r.isFoundDocument())return new fc(this._firestore,s,r.key,r,t.converter);if(r.isNoDocument())return new fc(this._firestore,s,t._key,null,t.converter);throw q()})}set(e,t,s){const i=Hs(e,this._firestore),r=od(i.converter,t,s),o=ed(this._dataReader,"Transaction.set",i._key,r,i.converter!==null,s);return this._transaction.set(i._key,o),this}update(e,t,s,...i){const r=Hs(e,this._firestore);let o;return o=typeof(t=B(t))=="string"||t instanceof di?fg(this._dataReader,"Transaction.update",r._key,t,s,i):dg(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,o),this}delete(e){const t=Hs(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Hs(e,this._firestore),s=new Mr(this._firestore);return super.get(e).then(i=>new Cs(this._firestore,s,t._key,i._document,new Gi(!1,!1),t.converter))}}function BO(n,e,t){n=_e(n,Ye);const s=Object.assign(Object.assign({},VO),t);return function(i){if(i.maxAttempts<1)throw new A(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(i,r,o){const a=new yt;return i.asyncQueue.enqueueAndForget(async()=>{const c=await zR(i);new jR(i.asyncQueue,c,o,r,a).run()}),a.promise}(Et(n),i=>e(new qO(n,i)),s)}/**
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
 */function WO(){return new dl("deleteField")}function $O(){return new hg("serverTimestamp")}function jO(...n){return new pO("arrayUnion",n)}function GO(...n){return new mO("arrayRemove",n)}function zO(n){return new gO("increment",n)}(function(n,e=!0){(function(t){Wo=t})(wi),Es(new gn("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Ye(new tx(t.getProvider("auth-internal")),new rx(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),kn(vy,"3.8.3",n),kn(vy,"3.8.3","esm2017")})();const HO="@firebase/firestore-compat",KO="0.3.3";/**
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
 */function Tg(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function bv(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function Ev(){if(!px())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}let AE=class lp{constructor(e){this._delegate=e}static fromBase64String(e){return Ev(),new lp(is.fromBase64String(e))}static fromUint8Array(e){return bv(),new lp(is.fromUint8Array(e))}toBase64(){return Ev(),this._delegate.toBase64()}toUint8Array(){return bv(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function up(n){return QO(n,["next","error","complete"])}function QO(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
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
 */class YO{enableIndexedDbPersistence(e,t){return sO(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return iO(e._delegate)}clearIndexedDbPersistence(e){return rO(e._delegate)}}class NE{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof ai||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&po("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){qR(this._delegate,e,t,s)}enableNetwork(){return aO(this._delegate)}disableNetwork(){return cO(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,tE("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return oO(this._delegate)}onSnapshotsInSync(e){return FO(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Co(this,sE(this._delegate,e))}catch(t){throw Bt(t,"collection()","Firestore.collection()")}}doc(e){try{return new bn(this,Fu(this._delegate,e))}catch(t){throw Bt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new gc(this,BR(this._delegate,e))}catch(t){throw Bt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return BO(this._delegate,t=>e(new xE(this,t)))}batch(){return Et(this._delegate),new DE(new UO(this._delegate,e=>pl(this._delegate,e)))}loadBundle(e){return lO(this._delegate,e)}namedQuery(e){return uO(this._delegate,e).then(t=>t?new gc(this,t):null)}}class ad extends vg{constructor(e){super(),this.firestore=e}convertBytes(e){return new AE(new is(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return bn.forKey(t,this.firestore,null)}}function XO(n){XN(n)}class xE{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ad(e)}get(e){const t=zi(e);return this._delegate.get(t).then(s=>new pc(this._firestore,new Cs(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const i=zi(e);return s?(Tg("Transaction.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=zi(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=zi(e);return this._delegate.delete(t),this}}class DE{constructor(e){this._delegate=e}set(e,t,s){const i=zi(e);return s?(Tg("WriteBatch.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=zi(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=zi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class pr{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new Ua(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new mc(this._firestore,s),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=pr.INSTANCES;let i=s.get(e);i||(i=new WeakMap,s.set(e,i));let r=i.get(t);return r||(r=new pr(e,new ad(e),t),i.set(t,r)),r}}pr.INSTANCES=new WeakMap;class bn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ad(e)}static forPath(e,t,s){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new bn(t,new Re(t._delegate,s,new M(e)))}static forKey(e,t,s){return new bn(t,new Re(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Co(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Co(this.firestore,sE(this._delegate,e))}catch(t){throw Bt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof Re?iE(this._delegate,e):!1}set(e,t){t=Tg("DocumentReference.set",t);try{return t?Tv(this._delegate,e,t):Tv(this._delegate,e)}catch(s){throw Bt(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?Iv(this._delegate,e):Iv(this._delegate,e,t,...s)}catch(i){throw Bt(i,"updateDoc()","DocumentReference.update()")}}delete(){return MO(this._delegate)}onSnapshot(...e){const t=RE(e),s=OE(e,i=>new pc(this.firestore,new Cs(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return kE(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=xO(this._delegate):(e==null?void 0:e.source)==="server"?t=DO(this._delegate):t=NO(this._delegate),t.then(s=>new pc(this.firestore,new Cs(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(pr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bt(n,e,t){return n.message=n.message.replace(e,t),n}function RE(n){for(const e of n)if(typeof e=="object"&&!up(e))return e;return{}}function OE(n,e){var t,s;let i;return up(n[0])?i=n[0]:up(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:r=>{i.next&&i.next(e(r))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(s=i.complete)===null||s===void 0?void 0:s.bind(i)}}class pc{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new bn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return CE(this._delegate,e._delegate)}}class mc extends pc{data(e){const t=this._delegate.data(e);return JN(t!==void 0),t}}let gc=class Gn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ad(e)}where(e,t,s){try{return new Gn(this.firestore,Ws(this._delegate,vO(e,t,s)))}catch(i){throw Bt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Gn(this.firestore,Ws(this._delegate,wO(e,t)))}catch(s){throw Bt(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Gn(this.firestore,Ws(this._delegate,TO(e)))}catch(t){throw Bt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Gn(this.firestore,Ws(this._delegate,IO(e)))}catch(t){throw Bt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Gn(this.firestore,Ws(this._delegate,bO(...e)))}catch(t){throw Bt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Gn(this.firestore,Ws(this._delegate,EO(...e)))}catch(t){throw Bt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Gn(this.firestore,Ws(this._delegate,SO(...e)))}catch(t){throw Bt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Gn(this.firestore,Ws(this._delegate,CO(...e)))}catch(t){throw Bt(t,"endAt()","Query.endAt()")}}isEqual(e){return rE(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=OO(this._delegate):(e==null?void 0:e.source)==="server"?t=PO(this._delegate):t=RO(this._delegate),t.then(s=>new hp(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=RE(e),s=OE(e,i=>new hp(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return kE(this._delegate,t,s)}withConverter(e){return new Gn(this.firestore,e?this._delegate.withConverter(pr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}};class JO{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new mc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class hp{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new gc(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new mc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new JO(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new mc(this._firestore,s))})}isEqual(e){return CE(this._delegate,e._delegate)}}class Co extends gc{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new bn(this.firestore,e):null}doc(e){try{return e===void 0?new bn(this.firestore,Fu(this._delegate)):new bn(this.firestore,Fu(this._delegate,e))}catch(t){throw Bt(t,"doc()","CollectionReference.doc()")}}add(e){return LO(this._delegate,e).then(t=>new bn(this.firestore,t))}isEqual(e){return iE(this._delegate,e._delegate)}withConverter(e){return new Co(this.firestore,e?this._delegate.withConverter(pr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zi(n){return _e(n,Re)}/**
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
 */class Ig{constructor(...e){this._delegate=new di(...e)}static documentId(){return new Ig(et.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof di?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Bi{constructor(e){this._delegate=e}static serverTimestamp(){const e=$O();return e._methodName="FieldValue.serverTimestamp",new Bi(e)}static delete(){const e=WO();return e._methodName="FieldValue.delete",new Bi(e)}static arrayUnion(...e){const t=jO(...e);return t._methodName="FieldValue.arrayUnion",new Bi(t)}static arrayRemove(...e){const t=GO(...e);return t._methodName="FieldValue.arrayRemove",new Bi(t)}static increment(e){const t=zO(e);return t._methodName="FieldValue.increment",new Bi(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const ZO={Firestore:NE,GeoPoint:Jh,Timestamp:qe,Blob:AE,Transaction:xE,WriteBatch:DE,DocumentReference:bn,DocumentSnapshot:pc,Query:gc,QueryDocumentSnapshot:mc,QuerySnapshot:hp,CollectionReference:Co,FieldPath:Ig,FieldValue:Bi,setLogLevel:XO,CACHE_SIZE_UNLIMITED:nO};function e1(n,e){n.INTERNAL.registerComponent(new gn("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(s,i)},"PUBLIC").setServiceProps(Object.assign({},ZO)))}/**
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
 */function t1(n){e1(n,(e,t)=>new NE(e,t,new YO)),n.registerVersion(HO,KO)}t1(Ht);function bg(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Bn(n,e,t,s){var i=arguments.length,r=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,s);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function it(n,e,t,s){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(s.next(u))}catch(h){o(h)}}function c(u){try{l(s.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((s=s.apply(n,e||[])).next())})}const ya={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Hr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function n1(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function PE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s1=n1,i1=PE,ME=new Ar("auth","Firebase",PE());/**
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
 */const Sv=new Uo("@firebase/auth");function au(n,...e){Sv.logLevel<=me.ERROR&&Sv.error(`Auth (${wi}): ${n}`,...e)}/**
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
 */function Rt(n,...e){throw Eg(n,...e)}function xt(n,...e){return Eg(n,...e)}function LE(n,e,t){const s=Object.assign(Object.assign({},i1()),{[e]:t});return new Ar("auth","Firebase",s).create(e,{appName:n.name})}function Yo(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Rt(n,"argument-error"),LE(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eg(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ME.create(n,...e)}function R(n,e,...t){if(!n)throw Eg(e,...t)}function Zn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw au(e),new Error(e)}function Un(n,e){n||Zn(e)}/**
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
 */const Cv=new Map;function pn(n){Un(n instanceof Function,"Expected a class definition");let e=Cv.get(n);return e?(Un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Cv.set(n,e),e)}function r1(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(pn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function _c(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Sg(){return kv()==="http:"||kv()==="https:"}function kv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function o1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sg()||Jw()||"connection"in navigator)?navigator.onLine:!0}function a1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,Un(t>e,"Short delay should be less than long delay!"),this.isMobile=Zp()||bh()}get(){return o1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cg(n,e){Un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class FE{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const c1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const l1=new ml(3e4,6e4);function ht(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function St(n,e,t,s,i={}){return VE(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Nr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),FE.fetch()(UE(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function VE(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},c1),e);try{const i=new u1(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xa(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw xa(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw LE(n,u,l);Rt(n,u)}}catch(i){if(i instanceof zt)throw i;Rt(n,"network-request-failed")}}async function Ps(n,e,t,s,i={}){const r=await St(n,e,t,s,i);return"mfaPendingCredential"in r&&Rt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function UE(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Cg(n.config,i):`${n.config.apiScheme}://${i}`}class u1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xt(this.auth,"network-request-failed")),l1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=xt(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function h1(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function d1(n,e){return St(n,"POST","/v1/accounts:update",e)}async function f1(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function p1(n,e=!1){const t=B(n),s=await t.getIdToken(e),i=cd(s);R(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qa(pf(i.auth_time)),issuedAtTime:qa(pf(i.iat)),expirationTime:qa(pf(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function pf(n){return Number(n)*1e3}function cd(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return au("JWT malformed, contained fewer than 3 sections"),null;try{const i=pu(t);return i?JSON.parse(i):(au("Failed to decode base64 JWT payload"),null)}catch(i){return au("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function m1(n){const e=cd(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ks(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof zt&&g1(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function g1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class _1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qE{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yc(n){var e;const t=n.auth,s=await n.getIdToken(),i=await ks(n,f1(t,{idToken:s}));R(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?w1(r.providerUserInfo):[],a=v1(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function y1(n){const e=B(n);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v1(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function w1(n){return n.map(e=>{var{providerId:t}=e,s=bg(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function T1(n,e){const t=await VE(n,{},async()=>{const s=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=UE(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",FE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class vc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):m1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await T1(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new vc;return s&&(R(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(R(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vc,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
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
 */function $s(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xi{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=bg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ks(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return p1(this,e)}reload(){return y1(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await yc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ks(this,h1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=t.createdAt)!==null&&l!==void 0?l:void 0,w=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:C,isAnonymous:_,providerData:v,stsTokenManager:I}=t;R(S&&I,e,"internal-error");const b=vc.fromJSON(this.name,I);R(typeof S=="string",e,"internal-error"),$s(h,e.name),$s(d,e.name),R(typeof C=="boolean",e,"internal-error"),R(typeof _=="boolean",e,"internal-error"),$s(f,e.name),$s(p,e.name),$s(m,e.name),$s(g,e.name),$s(y,e.name),$s(w,e.name);const P=new Xi({uid:S,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:_,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:b,createdAt:y,lastLoginAt:w});return v&&Array.isArray(v)&&(P.providerData=v.map(x=>Object.assign({},x))),g&&(P._redirectEventId=g),P}static async _fromIdTokenResponse(e,t,s=!1){const i=new vc;i.updateFromServerResponse(t);const r=new Xi({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await yc(r),r}}/**
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
 */class BE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}BE.type="NONE";const ko=BE;/**
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
 */function Ji(n,e,t){return`firebase:${n}:${e}:${t}`}class io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ji(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ji("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new io(pn(ko),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||pn(ko);const o=Ji(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=Xi._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new io(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new io(r,e,s))}}/**
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
 */function Av(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(GE(e))return"Blackberry";if(zE(e))return"Webos";if(kg(e))return"Safari";if((e.includes("chrome/")||$E(e))&&!e.includes("edge/"))return"Chrome";if(gl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function WE(n=$e()){return/firefox\//i.test(n)}function kg(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $E(n=$e()){return/crios\//i.test(n)}function jE(n=$e()){return/iemobile/i.test(n)}function gl(n=$e()){return/android/i.test(n)}function GE(n=$e()){return/blackberry/i.test(n)}function zE(n=$e()){return/webos/i.test(n)}function Xo(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function I1(n=$e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function b1(n=$e()){var e;return Xo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E1(){return Zw()&&document.documentMode===10}function HE(n=$e()){return Xo(n)||gl(n)||zE(n)||GE(n)||/windows phone/i.test(n)||jE(n)}function S1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function KE(n,e=[]){let t;switch(n){case"Browser":t=Av($e());break;case"Worker":t=`${Av($e())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wi}/${s}`}/**
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
 */class C1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class k1{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nv(this),this.idTokenSubscription=new Nv(this),this.beforeStateQueue=new C1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ME,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pn(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=a1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?B(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pn(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function Tt(n){return B(n)}class Nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=nT(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function A1(n,e,t){const s=Tt(n);R(s._canInitEmulator,s,"emulator-config-failed"),R(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=QE(e),{host:o,port:a}=N1(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||x1()}function QE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function N1(n){const e=QE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:xv(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:xv(o)}}}function xv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function x1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Jo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,t){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
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
 */async function YE(n,e){return St(n,"POST","/v1/accounts:resetPassword",ht(n,e))}async function XE(n,e){return St(n,"POST","/v1/accounts:update",e)}async function D1(n,e){return St(n,"POST","/v1/accounts:update",ht(n,e))}/**
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
 */async function R1(n,e){return Ps(n,"POST","/v1/accounts:signInWithPassword",ht(n,e))}async function ld(n,e){return St(n,"POST","/v1/accounts:sendOobCode",ht(n,e))}async function O1(n,e){return ld(n,e)}async function P1(n,e){return ld(n,e)}async function M1(n,e){return ld(n,e)}async function L1(n,e){return ld(n,e)}/**
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
 */async function F1(n,e){return Ps(n,"POST","/v1/accounts:signInWithEmailLink",ht(n,e))}async function V1(n,e){return Ps(n,"POST","/v1/accounts:signInWithEmailLink",ht(n,e))}/**
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
 */class wc extends Jo{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new wc(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new wc(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return R1(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return F1(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return XE(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return V1(e,{idToken:t,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ts(n,e){return Ps(n,"POST","/v1/accounts:signInWithIdp",ht(n,e))}/**
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
 */const U1="http://localhost";class rs extends Jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=bg(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new rs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ts(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ts(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ts(e,t)}buildRequest(){const e={requestUri:U1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nr(t)}return e}}/**
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
 */async function q1(n,e){return St(n,"POST","/v1/accounts:sendVerificationCode",ht(n,e))}async function B1(n,e){return Ps(n,"POST","/v1/accounts:signInWithPhoneNumber",ht(n,e))}async function W1(n,e){const t=await Ps(n,"POST","/v1/accounts:signInWithPhoneNumber",ht(n,e));if(t.temporaryProof)throw xa(n,"account-exists-with-different-credential",t);return t}const $1={USER_NOT_FOUND:"user-not-found"};async function j1(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ps(n,"POST","/v1/accounts:signInWithPhoneNumber",ht(n,t),$1)}/**
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
 */class Zi extends Jo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Zi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Zi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return B1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return W1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return j1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:i,temporaryProof:r}=e;return!s&&!t&&!i&&!r?null:new Zi({verificationId:t,verificationCode:s,phoneNumber:i,temporaryProof:r})}}/**
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
 */function G1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z1(n){const e=Zr(Sa(n)).link,t=e?Zr(Sa(e)).deep_link_id:null,s=Zr(Sa(n)).deep_link_id;return(s?Zr(Sa(s)).link:null)||s||t||e||n}class ud{constructor(e){var t,s,i,r,o,a;const c=Zr(Sa(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=G1((i=c.mode)!==null&&i!==void 0?i:null);R(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=z1(e);try{return new ud(t)}catch{return null}}}/**
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
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,t){return wc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ud.parseLink(t);return R(s,"argument-error"),wc._fromEmailAndCode(e,s.code,s.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ms{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends Ms{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ro extends Zo{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return R("providerId"in t&&"signInMethod"in t,"argument-error"),rs._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return R(e.idToken||e.accessToken,"argument-error"),rs._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ro.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ro.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:a}=e;if(!s&&!i&&!t&&!r||!a)return null;try{return new ro(a)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
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
 */class Hn extends Zo{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class Kn extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Kn.credential(t,s)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
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
 */class Qn extends Zo{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */const H1="http://localhost";class Ao extends Jo{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ts(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ts(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ts(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,pendingToken:r}=t;return!s||!i||!r||s!==i?null:new Ao(s,r)}static _create(e,t){return new Ao(e,t)}buildRequest(){return{requestUri:H1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const K1="saml.";class Uu extends Ms{constructor(e){R(e.startsWith(K1),"argument-error"),super(e)}static credentialFromResult(e){return Uu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Uu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ao.fromJSON(e);return R(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return Ao._create(s,t)}catch{return null}}}/**
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
 */class Yn extends Zo{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Yn.credential(t,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function JE(n,e){return Ps(n,"POST","/v1/accounts:signUp",ht(n,e))}/**
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
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Xi._fromIdTokenResponse(e,s,i),o=Dv(s);return new Nn({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Dv(s);return new Nn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Dv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Q1(n){var e;const t=Tt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nn({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await JE(t,{returnSecureToken:!0}),i=await Nn._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class qu extends zt{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new qu(e,t,s,i)}}function ZE(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(n,r,e,s):r})}/**
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
 */function e0(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Y1(n,e){const t=B(n);await hd(!0,t,e);const{providerUserInfo:s}=await d1(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=e0(s||[]);return t.providerData=t.providerData.filter(r=>i.has(r.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ag(n,e,t=!1){const s=await ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Nn._forOperation(n,"link",s)}async function hd(n,e,t){await yc(e);const s=e0(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";R(s.has(t)===n,e.auth,i)}/**
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
 */async function t0(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await ks(n,ZE(s,i,e,n),t);R(r.idToken,s,"internal-error");const o=cd(r.idToken);R(o,s,"internal-error");const{sub:a}=o;return R(n.uid===a,s,"user-mismatch"),Nn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Rt(s,"user-mismatch"),r}}/**
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
 */async function n0(n,e,t=!1){const s="signIn",i=await ZE(n,s,e),r=await Nn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function dd(n,e){return n0(Tt(n),e)}async function s0(n,e){const t=B(n);return await hd(!1,t,e.providerId),Ag(t,e)}async function i0(n,e){return t0(B(n),e)}/**
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
 */async function X1(n,e){return Ps(n,"POST","/v1/accounts:signInWithCustomToken",ht(n,e))}/**
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
 */async function J1(n,e){const t=Tt(n),s=await X1(t,{token:e,returnSecureToken:!0}),i=await Nn._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(i.user),i}/**
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
 */class fd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ng._fromServerResponse(e,t):Rt(e,"internal-error")}}class Ng extends fd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ng(t)}}/**
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
 */function pd(n,e,t){var s;R(((s=t.url)===null||s===void 0?void 0:s.length)>0,n,"invalid-continue-uri"),R(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(R(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(R(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Z1(n,e,t){const s=B(n),i={requestType:"PASSWORD_RESET",email:e};t&&pd(s,i,t),await P1(s,i)}async function eP(n,e,t){await YE(B(n),{oobCode:e,newPassword:t})}async function tP(n,e){await D1(B(n),{oobCode:e})}async function r0(n,e){const t=B(n),s=await YE(t,{oobCode:e}),i=s.requestType;switch(R(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":R(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":R(s.mfaInfo,t,"internal-error");default:R(s.email,t,"internal-error")}let r=null;return s.mfaInfo&&(r=fd._fromServerResponse(Tt(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:r},operation:i}}async function nP(n,e){const{data:t}=await r0(B(n),e);return t.email}async function sP(n,e,t){const s=Tt(n),i=await JE(s,{returnSecureToken:!0,email:e,password:t}),r=await Nn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function iP(n,e,t){return dd(B(n),ki.credential(e,t))}/**
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
 */async function rP(n,e,t){const s=B(n),i={requestType:"EMAIL_SIGNIN",email:e};R(t.handleCodeInApp,s,"argument-error"),t&&pd(s,i,t),await M1(s,i)}function oP(n,e){const t=ud.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function aP(n,e,t){const s=B(n),i=ki.credentialWithLink(e,t||_c());return R(i._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),dd(s,i)}/**
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
 */async function cP(n,e){return St(n,"POST","/v1/accounts:createAuthUri",ht(n,e))}/**
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
 */async function lP(n,e){const t=Sg()?_c():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:i}=await cP(B(n),s);return i||[]}async function uP(n,e){const t=B(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&pd(t.auth,i,e);const{email:r}=await O1(t.auth,i);r!==n.email&&await n.reload()}async function hP(n,e,t){const s=B(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&pd(s.auth,r,t);const{email:o}=await L1(s.auth,r);o!==n.email&&await n.reload()}/**
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
 */async function dP(n,e){return St(n,"POST","/v1/accounts:update",e)}/**
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
 */async function fP(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=B(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ks(s,dP(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function pP(n,e){return o0(B(n),e,null)}function mP(n,e){return o0(B(n),null,e)}async function o0(n,e,t){const{auth:s}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const o=await ks(n,XE(s,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function gP(n){var e,t;if(!n)return null;const{providerId:s}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(n!=null&&n.idToken)){const o=(t=(e=cd(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new oo(r,a)}}if(!s)return null;switch(s){case"facebook.com":return new _P(r,i);case"github.com":return new yP(r,i);case"google.com":return new vP(r,i);case"twitter.com":return new wP(r,i,n.screenName||null);case"custom":case"anonymous":return new oo(r,null);default:return new oo(r,s,i)}}class oo{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class a0 extends oo{constructor(e,t,s,i){super(e,t,s),this.username=i}}class _P extends oo{constructor(e,t){super(e,"facebook.com",t)}}class yP extends a0{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class vP extends oo{constructor(e,t){super(e,"google.com",t)}}class wP extends a0{constructor(e,t,s){super(e,"twitter.com",t,s)}}function TP(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:gP(t)}class Hi{constructor(e,t,s){this.type=e,this.credential=t,this.auth=s}static _fromIdtoken(e,t){return new Hi("enroll",e,t)}static _fromMfaPendingCredential(e){return new Hi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Hi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return Hi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class xg{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=Tt(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map(a=>fd._fromServerResponse(s,a));R(i.mfaPendingCredential,s,"internal-error");const o=Hi._fromMfaPendingCredential(i.mfaPendingCredential);return new xg(o,r,async a=>{const c=await a._process(s,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await Nn._fromIdTokenResponse(s,t.operationType,l);return await s._updateCurrentUser(u.user),u;case"reauthenticate":return R(t.user,s,"internal-error"),Nn._forOperation(t.user,t.operationType,l);default:Rt(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function IP(n,e){var t;const s=B(n),i=e;return R(e.customData.operationType,s,"argument-error"),R((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,s,"argument-error"),xg._fromError(s,i)}/**
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
 */function bP(n,e){return St(n,"POST","/v2/accounts/mfaEnrollment:start",ht(n,e))}function EP(n,e){return St(n,"POST","/v2/accounts/mfaEnrollment:finalize",ht(n,e))}function SP(n,e){return St(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ht(n,e))}class Dg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>fd._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Dg(e)}async getSession(){return Hi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const s=e,i=await this.getSession(),r=await ks(this.user,s._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const i=await ks(this.user,SP(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:r})=>r!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const mf=new WeakMap;function CP(n){const e=B(n);return mf.has(e)||mf.set(e,Dg._fromUser(e)),mf.get(e)}const Bu="__sak";/**
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
 */class c0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function kP(){const n=$e();return kg(n)||Xo(n)}const AP=1e3,NP=10;class l0 extends c0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kP()&&S1(),this.fallbackToPolling=HE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);E1()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NP):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},AP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}l0.type="LOCAL";const Rg=l0;/**
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
 */class u0 extends c0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}u0.type="SESSION";const mr=u0;/**
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
 */function xP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new md(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await xP(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
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
 */function _l(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class DP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=_l("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ot(){return window}function RP(n){ot().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Og(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function MP(){return Og()?self:null}/**
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
 */const h0="firebaseLocalStorageDb",LP=1,Wu="firebaseLocalStorage",d0="fbase_key";class yl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gd(n,e){return n.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function FP(){const n=indexedDB.deleteDatabase(h0);return new yl(n).toPromise()}function dp(){const n=indexedDB.open(h0,LP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Wu,{keyPath:d0})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Wu)?e(s):(s.close(),await FP(),e(await dp()))})})}async function Rv(n,e,t){const s=gd(n,!0).put({[d0]:e,value:t});return new yl(s).toPromise()}async function VP(n,e){const t=gd(n,!1).get(e),s=await new yl(t).toPromise();return s===void 0?null:s.value}function Ov(n,e){const t=gd(n,!0).delete(e);return new yl(t).toPromise()}const UP=800,qP=3;class f0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>qP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(MP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new DP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await Rv(e,Bu,"1"),await Ov(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rv(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>VP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ov(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=gd(i,!1).getAll();return new yl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f0.type="LOCAL";const Tc=f0;/**
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
 */function BP(n,e){return St(n,"POST","/v2/accounts/mfaSignIn:start",ht(n,e))}function WP(n,e){return St(n,"POST","/v2/accounts/mfaSignIn:finalize",ht(n,e))}/**
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
 */async function $P(n){return(await St(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function jP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function p0(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=xt("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",jP().appendChild(s)})}function m0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const GP=500,zP=6e4,Kl=1e12;class HP{constructor(e){this.auth=e,this.counter=Kl,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new KP(e,this.auth.name,t||{})),this.counter++,s}reset(e){var t;const s=e||Kl;(t=this._widgets.get(s))===null||t===void 0||t.delete(),this._widgets.delete(s)}getResponse(e){var t;const s=e||Kl;return((t=this._widgets.get(s))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const s=e||Kl;return(t=this._widgets.get(s))===null||t===void 0||t.execute(),""}}class KP{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;R(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},zP)},GP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QP(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const gf=m0("rcb"),YP=new ml(3e4,6e4),XP="https://www.google.com/recaptcha/api.js?";class JP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ot().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return R(ZP(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(ot().grecaptcha):new Promise((s,i)=>{const r=ot().setTimeout(()=>{i(xt(e,"network-request-failed"))},YP.get());ot()[gf]=()=>{ot().clearTimeout(r),delete ot()[gf];const a=ot().grecaptcha;if(!a){i(xt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,s(a)};const o=`${XP}?${Nr({onload:gf,render:"explicit",hl:t})}`;p0(o).catch(()=>{clearTimeout(r),i(xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ot().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZP(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class eM{async load(e){return new HP(e)}clearedOneInstance(){}}/**
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
 */const g0="recaptcha",tM={theme:"light",type:"image"};let nM=class{constructor(e,t=Object.assign({},tM),s){this.parameters=t,this.type=g0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Tt(s),this.isInvisible=this.parameters.size==="invisible",R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;R(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new eM:new JP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(i=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),i(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=ot()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){R(Sg()&&!Og(),this.auth,"internal-error"),await sM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await $P(this.auth);R(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function sM(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Pg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Zi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function iM(n,e,t){const s=Tt(n),i=await _d(s,e,B(t));return new Pg(i,r=>dd(s,r))}async function rM(n,e,t){const s=B(n);await hd(!1,s,"phone");const i=await _d(s.auth,e,B(t));return new Pg(i,r=>s0(s,r))}async function oM(n,e,t){const s=B(n),i=await _d(s.auth,e,B(t));return new Pg(i,r=>i0(s,r))}async function _d(n,e,t){var s;const i=await t.verify();try{R(typeof i=="string",n,"argument-error"),R(t.type===g0,n,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return R(o.type==="enroll",n,"internal-error"),(await bP(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{R(o.type==="signin",n,"internal-error");const a=((s=r.multiFactorHint)===null||s===void 0?void 0:s.uid)||r.multiFactorUid;return R(a,n,"missing-multi-factor-info"),(await BP(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await q1(n,{phoneNumber:r.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function aM(n,e){await Ag(B(n),e)}/**
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
 */let gr=class cu{constructor(e){this.providerId=cu.PROVIDER_ID,this.auth=Tt(e)}verifyPhoneNumber(e,t){return _d(this.auth,e,B(t))}static credential(e,t){return Zi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return cu.credentialFromTaggedObject(t)}static credentialFromError(e){return cu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?Zi._fromTokenResponse(t,s):null}};gr.PROVIDER_ID="phone";gr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Lr(n,e){return e?pn(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Mg extends Jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ts(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cM(n){return n0(n.auth,new Mg(n),n.bypassAuthState)}function lM(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),t0(t,new Mg(n),n.bypassAuthState)}async function uM(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Ag(t,new Mg(n),n.bypassAuthState)}/**
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
 */class _0{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cM;case"linkViaPopup":case"linkViaRedirect":return uM;case"reauthViaPopup":case"reauthViaRedirect":return lM;default:Rt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hM=new ml(2e3,1e4);async function dM(n,e,t){const s=Tt(n);Yo(n,e,Ms);const i=Lr(s,t);return new _s(s,"signInViaPopup",e,i).executeNotNull()}async function fM(n,e,t){const s=B(n);Yo(s.auth,e,Ms);const i=Lr(s.auth,t);return new _s(s.auth,"reauthViaPopup",e,i,s).executeNotNull()}async function pM(n,e,t){const s=B(n);Yo(s.auth,e,Ms);const i=Lr(s.auth,t);return new _s(s.auth,"linkViaPopup",e,i,s).executeNotNull()}class _s extends _0{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=_l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hM.get())};e()}}_s.currentPopupAction=null;/**
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
 */const mM="pendingRedirect",Ba=new Map;class gM extends _0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const s=await _M(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _M(n,e){const t=v0(e),s=y0(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function Lg(n,e){return y0(n)._set(v0(e),"true")}function yM(){Ba.clear()}function Fg(n,e){Ba.set(n._key(),e)}function y0(n){return pn(n._redirectPersistence)}function v0(n){return Ji(mM,n.config.apiKey,n.name)}/**
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
 */function vM(n,e,t){return wM(n,e,t)}async function wM(n,e,t){const s=Tt(n);Yo(n,e,Ms),await s._initializationPromise;const i=Lr(s,t);return await Lg(i,s),i._openRedirect(s,e,"signInViaRedirect")}function TM(n,e,t){return IM(n,e,t)}async function IM(n,e,t){const s=B(n);Yo(s.auth,e,Ms),await s.auth._initializationPromise;const i=Lr(s.auth,t);await Lg(i,s.auth);const r=await w0(s);return i._openRedirect(s.auth,e,"reauthViaRedirect",r)}function bM(n,e,t){return EM(n,e,t)}async function EM(n,e,t){const s=B(n);Yo(s.auth,e,Ms),await s.auth._initializationPromise;const i=Lr(s.auth,t);await hd(!1,s,e.providerId),await Lg(i,s.auth);const r=await w0(s);return i._openRedirect(s.auth,e,"linkViaRedirect",r)}async function SM(n,e){return await Tt(n)._initializationPromise,yd(n,e,!1)}async function yd(n,e,t=!1){const s=Tt(n),i=Lr(s,e),o=await new gM(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}async function w0(n){const e=_l(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const CM=10*60*1e3;class T0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!I0(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pv(e))}saveEventToCache(e){this.cachedEventUids.add(Pv(e)),this.lastProcessedEventTime=Date.now()}}function Pv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function I0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I0(n);default:return!1}}/**
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
 */async function b0(n,e={}){return St(n,"GET","/v1/projects",e)}/**
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
 */const AM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NM=/^https?/;async function xM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await b0(n);for(const t of e)try{if(DM(t))return}catch{}Rt(n,"unauthorized-domain")}function DM(n){const e=_c(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!NM.test(t))return!1;if(AM.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const RM=new ml(3e4,6e4);function Mv(){const n=ot().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function OM(n){return new Promise((e,t)=>{var s,i,r;function o(){Mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mv(),t(xt(n,"network-request-failed"))},timeout:RM.get()})}if(!((i=(s=ot().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ot().gapi)===null||r===void 0)&&r.load)o();else{const a=m0("iframefcb");return ot()[a]=()=>{gapi.load?o():t(xt(n,"network-request-failed"))},p0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw lu=null,e})}let lu=null;function PM(n){return lu=lu||OM(n),lu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const MM=new ml(5e3,15e3),LM="__/auth/iframe",FM="emulator/auth/iframe",VM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qM(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cg(e,FM):`https://${n.config.authDomain}/${LM}`,s={apiKey:e.apiKey,appName:n.name,v:wi},i=UM.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Nr(s).slice(1)}`}async function BM(n){const e=await PM(n),t=ot().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:qM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VM,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=xt(n,"network-request-failed"),a=ot().setTimeout(()=>{r(o)},MM.get());function c(){ot().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const WM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$M=500,jM=600,GM="_blank",zM="http://localhost";class Lv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HM(n,e,t,s=$M,i=jM){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WM),{width:s.toString(),height:i.toString(),top:r,left:o}),l=$e().toLowerCase();t&&(a=$E(l)?GM:t),WE(l)&&(e=e||zM,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(b1(l)&&a!=="_self")return KM(e||"",a),new Lv(null);const h=window.open(e||"",a,u);R(h,n,"popup-blocked");try{h.focus()}catch{}return new Lv(h)}function KM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const QM="__/auth/handler",YM="emulator/auth/handler";function fp(n,e,t,s,i,r){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:wi,eventId:i};if(e instanceof Ms){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",mu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof Zo){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${XM(n)}?${Nr(a).slice(1)}`}function XM({config:n}){return n.emulator?Cg(n,YM):`https://${n.authDomain}/${QM}`}/**
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
 */const _f="webStorageSupport";class JM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mr,this._completeRedirectFn=yd,this._overrideRedirectResult=Fg}async _openPopup(e,t,s,i){var r;Un((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=fp(e,t,s,_c(),i);return HM(e,o,_l())}async _openRedirect(e,t,s,i){return await this._originValidation(e),RP(fp(e,t,s,_c(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Un(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await BM(e),s=new T0(e);return t.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_f,{type:_f},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_f];o!==void 0&&t(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return HE()||kg()||Xo()}}const ZM=JM;class eL{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Zn("unexpected MultiFactorSessionType")}}}class Vg extends eL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Vg(e)}_finalizeEnroll(e,t,s){return EP(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return WP(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class E0{constructor(){}static assertion(e){return Vg._fromCredential(e)}}E0.FACTOR_ID="phone";var Fv="@firebase/auth",Vv="0.21.3";/**
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
 */class tL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nL(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sL(n){Es(new gn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{R(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KE(n)},u=new k1(a,c,l);return r1(u,t),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Es(new gn("auth-internal",e=>{const t=Tt(e.getProvider("auth").getImmediate());return(s=>new tL(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Fv,Vv,nL(n)),kn(Fv,Vv,"esm2017")}/**
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
 */const iL=5*60;vk("authIdTokenMaxAge");sL("Browser");/**
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
 */function _r(){return window}/**
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
 */const rL=2e3;async function oL(n,e,t){var s;const{BuildInfo:i}=_r();Un(e.sessionId,"AuthEvent did not contain a session ID");const r=await hL(e.sessionId),o={};return Xo()?o.ibi=i.packageName:gl()?o.apn=i.packageName:Rt(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=r,fp(n,t,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,o)}async function aL(n){const{BuildInfo:e}=_r(),t={};Xo()?t.iosBundleId=e.packageName:gl()?t.androidPackageName=e.packageName:Rt(n,"operation-not-supported-in-this-environment"),await b0(n,t)}function cL(n){const{cordova:e}=_r();return new Promise(t=>{e.plugins.browsertab.isAvailable(s=>{let i=null;s?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,I1()?"_blank":"_system","location=yes"),t(i)})})}async function lL(n,e,t){const{cordova:s}=_r();let i=()=>{};try{await new Promise((r,o)=>{let a=null;function c(){var h;r();const d=(h=s.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(xt(n,"redirect-cancelled-by-user"))},rL))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),gl()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function uL(n){var e,t,s,i,r,o,a,c,l,u;const h=_r();R(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),R(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),R(typeof((r=(i=(s=h==null?void 0:h.cordova)===null||s===void 0?void 0:s.plugins)===null||i===void 0?void 0:i.browsertab)===null||r===void 0?void 0:r.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function hL(n){const e=dL(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function dL(n){if(Un(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let s=0;s<n.length;s++)t[s]=n.charCodeAt(s);return t}/**
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
 */const fL=20;class pL extends T0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function mL(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:yL(),postBody:null,tenantId:n.tenantId,error:xt(n,"no-auth-event")}}function gL(n,e){return pp()._set(mp(n),e)}async function Uv(n){const e=await pp()._get(mp(n));return e&&await pp()._remove(mp(n)),e}function _L(n,e){var t,s;const i=wL(e);if(i.includes("/__/auth/callback")){const r=uu(i),o=r.firebaseError?vL(decodeURIComponent(r.firebaseError)):null,a=(s=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||s===void 0?void 0:s[1],c=a?xt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function yL(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<fL;t++){const s=Math.floor(Math.random()*e.length);n.push(e.charAt(s))}return n.join("")}function pp(){return pn(Rg)}function mp(n){return Ji("authEvent",n.config.apiKey,n.name)}function vL(n){try{return JSON.parse(n)}catch{return null}}function wL(n){const e=uu(n),t=e.link?decodeURIComponent(e.link):void 0,s=uu(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return uu(i).link||i||s||t||n}function uu(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Zr(t.join("?"))}/**
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
 */const TL=500;class IL{constructor(){this._redirectPersistence=mr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=yd,this._overrideRedirectResult=Fg}async _initialize(e){const t=e._key();let s=this.eventManagers.get(t);return s||(s=new pL(e),this.eventManagers.set(t,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){Rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,s,i){uL(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),yM(),await this._originValidation(e);const o=mL(e,s,i);await gL(e,o);const a=await oL(e,o,t),c=await cL(a);return lL(e,r,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aL(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:s,handleOpenURL:i,BuildInfo:r}=_r(),o=setTimeout(async()=>{await Uv(e),t.onEvent(qv())},TL),a=async u=>{clearTimeout(o);const h=await Uv(e);let d=null;h&&(u!=null&&u.url)&&(d=_L(h,u.url)),t.onEvent(d||qv())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,a);const c=i,l=`${r.packageName.toLowerCase()}://`;_r().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const bL=IL;function qv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:xt("no-auth-event")}}/**
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
 */function EL(n,e){Tt(n)._logFramework(e)}var SL="@firebase/auth-compat",CL="0.3.3";/**
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
 */const kL=1e3;function Wa(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function AL(){return Wa()==="http:"||Wa()==="https:"}function S0(n=$e()){return!!((Wa()==="file:"||Wa()==="ionic:"||Wa()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function NL(){return bh()||em()}function xL(){return Zw()&&(document==null?void 0:document.documentMode)===11}function DL(n=$e()){return/Edge\/\d+/.test(n)}function RL(n=$e()){return xL()||DL(n)}function C0(){try{const n=self.localStorage,e=_l();if(n)return n.setItem(e,"1"),n.removeItem(e),RL()?Qa():!0}catch{return Ug()&&Qa()}return!1}function Ug(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function yf(){return(AL()||Jw()||S0())&&!NL()&&C0()&&!Ug()}function k0(){return S0()&&typeof document<"u"}async function OL(){return k0()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},kL);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function PL(){return typeof window<"u"?window:null}/**
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
 */const dn={LOCAL:"local",NONE:"none",SESSION:"session"},va=R,A0="persistence";function ML(n,e){if(va(Object.values(dn).includes(e),n,"invalid-persistence-type"),bh()){va(e!==dn.SESSION,n,"unsupported-persistence-type");return}if(em()){va(e===dn.NONE,n,"unsupported-persistence-type");return}if(Ug()){va(e===dn.NONE||e===dn.LOCAL&&Qa(),n,"unsupported-persistence-type");return}va(e===dn.NONE||C0(),n,"unsupported-persistence-type")}async function gp(n){await n._initializationPromise;const e=N0(),t=Ji(A0,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function LL(n,e){const t=N0();if(!t)return[];const s=Ji(A0,n,e);switch(t.getItem(s)){case dn.NONE:return[ko];case dn.LOCAL:return[Tc,mr];case dn.SESSION:return[mr];default:return[]}}function N0(){var n;try{return((n=PL())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const FL=R;class Qs{constructor(){this.browserResolver=pn(ZM),this.cordovaResolver=pn(bL),this.underlyingResolver=null,this._redirectPersistence=mr,this._completeRedirectFn=yd,this._overrideRedirectResult=Fg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,s,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,s,i)}async _openRedirect(e,t,s,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,s,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return k0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return FL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await OL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function x0(n){return n.unwrap()}function VL(n){return n.wrapped()}/**
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
 */function UL(n){return D0(n)}function qL(n,e){var t;const s=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new BL(n,IP(n,e))}else if(s){const i=D0(e),r=e;i&&(r.credential=i,r.tenantId=s.tenantId||void 0,r.email=s.email||void 0,r.phoneNumber=s.phoneNumber||void 0)}}function D0(n){const{_tokenResponse:e}=n instanceof zt?n.customData:n;if(!e)return null;if(!(n instanceof zt)&&"temporaryProof"in e&&"phoneNumber"in e)return gr.credentialFromResult(n);const t=e.providerId;if(!t||t===ya.PASSWORD)return null;let s;switch(t){case ya.GOOGLE:s=Kn;break;case ya.FACEBOOK:s=Hn;break;case ya.GITHUB:s=Qn;break;case ya.TWITTER:s=Yn;break;default:const{oauthIdToken:i,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!r&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Ao._create(t,a):rs._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:r}):new ro(t).credential({idToken:i,accessToken:r,rawNonce:c})}return n instanceof zt?s.credentialFromError(n):s.credentialFromResult(n)}function Xt(n,e){return e.catch(t=>{throw t instanceof zt&&qL(n,t),t}).then(t=>{const s=t.operationType,i=t.user;return{operationType:s,credential:UL(t),additionalUserInfo:TP(t),user:ys.getOrCreate(i)}})}async function _p(n,e){const t=await e;return{verificationId:t.verificationId,confirm:s=>Xt(n,t.confirm(s))}}class BL{constructor(e,t){this.resolver=t,this.auth=VL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Xt(x0(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class ys{constructor(e){this._delegate=e,this.multiFactor=CP(e)}static getOrCreate(e){return ys.USER_MAP.has(e)||ys.USER_MAP.set(e,new ys(e)),ys.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Xt(this.auth,s0(this._delegate,e))}async linkWithPhoneNumber(e,t){return _p(this.auth,rM(this._delegate,e,t))}async linkWithPopup(e){return Xt(this.auth,pM(this._delegate,e,Qs))}async linkWithRedirect(e){return await gp(Tt(this.auth)),bM(this._delegate,e,Qs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Xt(this.auth,i0(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return _p(this.auth,oM(this._delegate,e,t))}reauthenticateWithPopup(e){return Xt(this.auth,fM(this._delegate,e,Qs))}async reauthenticateWithRedirect(e){return await gp(Tt(this.auth)),TM(this._delegate,e,Qs)}sendEmailVerification(e){return uP(this._delegate,e)}async unlink(e){return await Y1(this._delegate,e),this}updateEmail(e){return pP(this._delegate,e)}updatePassword(e){return mP(this._delegate,e)}updatePhoneNumber(e){return aM(this._delegate,e)}updateProfile(e){return fP(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return hP(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ys.USER_MAP=new WeakMap;/**
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
 */const wa=R;class yp{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;wa(s,"invalid-api-key",{appName:e.name}),wa(s,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Qs:void 0;this._delegate=t.initialize({options:{persistence:WL(s,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(s1),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ys.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){A1(this._delegate,e,t)}applyActionCode(e){return tP(this._delegate,e)}checkActionCode(e){return r0(this._delegate,e)}confirmPasswordReset(e,t){return eP(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Xt(this._delegate,sP(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return lP(this._delegate,e)}isSignInWithEmailLink(e){return oP(this._delegate,e)}async getRedirectResult(){wa(yf(),this._delegate,"operation-not-supported-in-this-environment");const e=await SM(this._delegate,Qs);return e?Xt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){EL(this._delegate,e)}onAuthStateChanged(e,t,s){const{next:i,error:r,complete:o}=Bv(e,t,s);return this._delegate.onAuthStateChanged(i,r,o)}onIdTokenChanged(e,t,s){const{next:i,error:r,complete:o}=Bv(e,t,s);return this._delegate.onIdTokenChanged(i,r,o)}sendSignInLinkToEmail(e,t){return rP(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Z1(this._delegate,e,t||void 0)}async setPersistence(e){ML(this._delegate,e);let t;switch(e){case dn.SESSION:t=mr;break;case dn.LOCAL:t=await pn(Tc)._isAvailable()?Tc:Rg;break;case dn.NONE:t=ko;break;default:return Rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Xt(this._delegate,Q1(this._delegate))}signInWithCredential(e){return Xt(this._delegate,dd(this._delegate,e))}signInWithCustomToken(e){return Xt(this._delegate,J1(this._delegate,e))}signInWithEmailAndPassword(e,t){return Xt(this._delegate,iP(this._delegate,e,t))}signInWithEmailLink(e,t){return Xt(this._delegate,aP(this._delegate,e,t))}signInWithPhoneNumber(e,t){return _p(this._delegate,iM(this._delegate,e,t))}async signInWithPopup(e){return wa(yf(),this._delegate,"operation-not-supported-in-this-environment"),Xt(this._delegate,dM(this._delegate,e,Qs))}async signInWithRedirect(e){return wa(yf(),this._delegate,"operation-not-supported-in-this-environment"),await gp(this._delegate),vM(this._delegate,e,Qs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return nP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}yp.Persistence=dn;function Bv(n,e,t){let s=n;typeof n!="function"&&({next:s,error:e,complete:t}=n);const i=s;return{next:o=>i(o&&ys.getOrCreate(o)),error:e,complete:t}}function WL(n,e){const t=LL(n,e);if(typeof self<"u"&&!t.includes(Tc)&&t.push(Tc),typeof window<"u")for(const s of[Rg,mr])t.includes(s)||t.push(s);return t.includes(ko)||t.push(ko),t}/**
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
 */class qg{constructor(){this.providerId="phone",this._delegate=new gr(x0(Ht.auth()))}static credential(e,t){return gr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}qg.PHONE_SIGN_IN_METHOD=gr.PHONE_SIGN_IN_METHOD;qg.PROVIDER_ID=gr.PROVIDER_ID;/**
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
 */const $L=R;class jL{constructor(e,t,s=Ht.app()){var i;$L((i=s.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new nM(e,t,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const GL="auth-compat";function zL(n){n.INTERNAL.registerComponent(new gn(GL,e=>{const t=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new yp(t,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hr.EMAIL_SIGNIN,PASSWORD_RESET:Hr.PASSWORD_RESET,RECOVER_EMAIL:Hr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hr.VERIFY_EMAIL}},EmailAuthProvider:ki,FacebookAuthProvider:Hn,GithubAuthProvider:Qn,GoogleAuthProvider:Kn,OAuthProvider:ro,SAMLAuthProvider:Uu,PhoneAuthProvider:qg,PhoneMultiFactorGenerator:E0,RecaptchaVerifier:jL,TwitterAuthProvider:Yn,Auth:yp,AuthCredential:Jo,Error:zt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(SL,CL)}zL(Ht);const Wv="@firebase/database",$v="0.14.3";/**
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
 */let R0="";function O0(n){R0=n}/**
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
 */class HL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ya(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class KL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const P0=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HL(e)}}catch{}return new KL},Ki=P0("localStorage"),vp=P0("sessionStorage");/**
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
 */const ao=new Uo("@firebase/database"),M0=function(){let n=1;return function(){return n++}}(),L0=function(n){const e=Dk(n),t=new Ak;t.update(e);const s=t.digest();return Xp.encodeByteArray(s)},vl=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=vl.apply(null,s):typeof s=="object"?e+=at(s):e+=s,e+=" "}return e};let er=null,jv=!0;const F0=function(n,e){O(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ao.logLevel=me.VERBOSE,er=ao.log.bind(ao),e&&vp.set("logging_enabled",!0)):typeof n=="function"?er=n:(er=null,vp.remove("logging_enabled"))},_t=function(...n){if(jv===!0&&(jv=!1,er===null&&vp.get("logging_enabled")===!0&&F0(!0)),er){const e=vl.apply(null,n);er(e)}},wl=function(n){return function(...e){_t(n,...e)}},wp=function(...n){const e="FIREBASE INTERNAL ERROR: "+vl(...n);ao.error(e)},os=function(...n){const e=`FIREBASE FATAL ERROR: ${vl(...n)}`;throw ao.error(e),new Error(e)},Ft=function(...n){const e="FIREBASE WARNING: "+vl(...n);ao.warn(e)},QL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ft("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},YL=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},pi="[MIN_NAME]",As="[MAX_NAME]",Fr=function(n,e){if(n===e)return 0;if(n===pi||e===As)return-1;if(e===pi||n===As)return 1;{const t=Gv(n),s=Gv(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},XL=function(n,e){return n===e?0:n<e?-1:1},Ta=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+at(e))},Bg=function(n){if(typeof n!="object"||n===null)return at(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=at(e[s]),t+=":",t+=Bg(n[e[s]]);return t+="}",t},V0=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function It(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const U0=function(n){O(!vd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},JL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eF(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const tF=new RegExp("^-?(0*)\\d{1,10}$"),nF=-2147483648,sF=2147483647,Gv=function(n){if(tF.test(n)){const e=Number(n);if(e>=nF&&e<=sF)return e}return null},ea=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ft("Exception was thrown by user callback.",t),e},Math.floor(0))}},iF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$a=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class rF{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ft(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class oF{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ft(e)}}class co{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}co.OWNER="owner";/**
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
 */const Wg="5",q0="v",B0="s",W0="r",$0="f",j0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,G0="ls",z0="p",Tp="ac",H0="websocket",K0="long_polling";/**
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
 */class Q0{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ki.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ki.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function aF(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Y0(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let s;if(e===H0)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===K0)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aF(n)&&(t.ns=n.namespace);const i=[];return It(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class cF{constructor(){this.counters_={}}incrementCounter(e,t=1){mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return dk(this.counters_)}}/**
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
 */const vf={},wf={};function $g(n){const e=n.toString();return vf[e]||(vf[e]=new cF),vf[e]}function lF(n,e){const t=n.toString();return wf[t]||(wf[t]=e()),wf[t]}/**
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
 */class uF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ea(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const zv="start",hF="close",dF="pLPCommand",fF="pRTLPCB",X0="id",J0="pw",Z0="ser",pF="cb",mF="seg",gF="ts",_F="d",yF="dframe",eS=1870,tS=30,vF=eS-tS,wF=25e3,TF=3e4;class Ys{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wl(e),this.stats_=$g(t),this.urlFn=c=>(this.appCheckToken&&(c[Tp]=this.appCheckToken),Y0(t,K0,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TF)),YL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jg((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zv)this.id=a,this.password=c;else if(o===hF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[zv]="t",s[Z0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[pF]=this.scriptTagHolder.uniqueCallbackIdentifier),s[q0]=Wg,this.transportSessionId&&(s[B0]=this.transportSessionId),this.lastSessionId&&(s[G0]=this.lastSessionId),this.applicationId&&(s[z0]=this.applicationId),this.appCheckToken&&(s[Tp]=this.appCheckToken),typeof location<"u"&&location.hostname&&j0.test(location.hostname)&&(s[W0]=$0);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ys.forceAllow_=!0}static forceDisallow(){Ys.forceDisallow_=!0}static isAvailable(){return Ys.forceAllow_?!0:!Ys.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JL()&&!ZL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=at(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Yw(t),i=V0(s,vF);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[yF]="t",s[X0]=e,s[J0]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=at(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jg{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=M0(),window[dF+this.uniqueCallbackIdentifier]=e,window[fF+this.uniqueCallbackIdentifier]=t,this.myIFrame=jg.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[X0]=this.myID,e[J0]=this.myPW,e[Z0]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tS+s.length<=eS;){const o=this.pendingSegs.shift();s=s+"&"+mF+i+"="+o.seg+"&"+gF+i+"="+o.ts+"&"+_F+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(wF)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const IF=16384,bF=45e3;let $u=null;typeof MozWebSocket<"u"?$u=MozWebSocket:typeof WebSocket<"u"&&($u=WebSocket);class In{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wl(this.connId),this.stats_=$g(t),this.connURL=In.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[q0]=Wg,typeof location<"u"&&location.hostname&&j0.test(location.hostname)&&(o[W0]=$0),t&&(o[B0]=t),s&&(o[G0]=s),i&&(o[Tp]=i),r&&(o[z0]=r),Y0(e,H0,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ki.set("previous_websocket_failure",!0);try{let s;eT(),this.mySock=new $u(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$u!==null&&!In.forceDisallow_}static previouslyFailed(){return Ki.isInMemoryStorage||Ki.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ki.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ya(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=at(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=V0(t,IF);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bF))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}In.responsesRequiredToBeHealthy=2;In.healthyTimeout=3e4;/**
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
 */class No{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ys,In]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=In&&In.isAvailable();let s=t&&!In.previouslyFailed();if(e.webSocketOnly&&(t||Ft("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[In];else{const i=this.transports_=[];for(const r of No.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);No.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}No.globalTransportInitialized_=!1;/**
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
 */const EF=6e4,SF=5e3,CF=10*1024,kF=100*1024,Tf="t",Hv="d",AF="s",Kv="r",NF="e",Qv="o",Yv="a",Xv="n",Jv="p",xF="h";class DF{constructor(e,t,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wl("c:"+this.id+":"),this.transportManager_=new No(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$a(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tf in e){const t=e[Tf];t===Yv?this.upgradeIfSecondaryHealthy_():t===Kv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ta("t",e),s=Ta("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ta("t",e),s=Ta("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ta(Tf,e);if(Hv in e){const s=e[Hv];if(t===xF){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Xv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===AF?this.onConnectionShutdown_(s):t===Kv?this.onReset_(s):t===NF?wp("Server Error: "+s):t===Qv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Wg!==s&&Ft("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),$a(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$a(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class nS{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class sS{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ju extends sS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ju}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zv=32,ew=768;class we{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ye(){return new we("")}function ae(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function mi(n){return n.pieces_.length-n.pieceNum_}function Se(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new we(n.pieces_,e)}function Gg(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function RF(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ic(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function iS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new we(e,0)}function Ue(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new we(t,0)}function ce(n){return n.pieceNum_>=n.pieces_.length}function jt(n,e){const t=ae(n),s=ae(e);if(t===null)return e;if(t===s)return jt(Se(n),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function OF(n,e){const t=Ic(n,0),s=Ic(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Fr(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function zg(n,e){if(mi(n)!==mi(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function En(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(mi(n)>mi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class PF{constructor(e,t){this.errorPrefix_=t,this.parts_=Ic(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Eh(this.parts_[s]);rS(this)}}function MF(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Eh(e),rS(n)}function LF(n){const e=n.parts_.pop();n.byteLength_-=Eh(e),n.parts_.length>0&&(n.byteLength_-=1)}function rS(n){if(n.byteLength_>ew)throw new Error(n.errorPrefix_+"has a key path longer than "+ew+" bytes ("+n.byteLength_+").");if(n.parts_.length>Zv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zv+") or object contains a cycle "+Li(n))}function Li(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Hg extends sS{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Hg}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ia=1e3,FF=60*5*1e3,tw=30*1e3,VF=1.3,UF=3e4,qF="server_kill",nw=3;class Is extends nS{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Is.nextPersistentConnectionId_++,this.log_=wl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ia,this.maxReconnectDelay_=FF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!eT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ju.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(at(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Zt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Is.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&mn(e,"w")){const s=sr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ft(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ck(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):wp("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UF&&(this.reconnectDelay_=Ia),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Is.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new DF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Ft(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(qF)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ft(h),c())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mu(this.interruptReasons_)&&(this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Bg(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new we(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){_t("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nw&&(this.reconnectDelay_=tw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_t("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+R0.replace(/\./g,"-")]=1,Zp()?e["framework.cordova"]=1:bh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ju.getInstance().currentlyOnline();return mu(this.interruptReasons_)&&e}}Is.nextPersistentConnectionId_=0;Is.nextConnectionId_=0;/**
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
 */class ue{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ue(e,t)}}/**
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
 */class wd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ue(pi,e),i=new ue(pi,t);return this.compare(s,i)!==0}minPost(){return ue.MIN}}/**
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
 */let Ql;class oS extends wd{static get __EMPTY_NODE(){return Ql}static set __EMPTY_NODE(e){Ql=e}compare(e,t){return Fr(e.name,t.name)}isDefinedOn(e){throw Vo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ue.MIN}maxPost(){return new ue(As,Ql)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Ql)}toString(){return".key"}}const ns=new oS;/**
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
 */class Yl{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class gt{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??gt.RED,this.left=i??sn.EMPTY_NODE,this.right=r??sn.EMPTY_NODE}copy(e,t,s,i,r){return new gt(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return sn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return sn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}gt.RED=!0;gt.BLACK=!1;class BF{copy(e,t,s,i,r){return this}insert(e,t,s){return new gt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class sn{constructor(e,t=sn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new sn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,gt.BLACK,null,null))}remove(e){return new sn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,gt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Yl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Yl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Yl(this.root_,null,this.comparator_,!0,e)}}sn.EMPTY_NODE=new BF;/**
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
 */function WF(n,e){return Fr(n.name,e.name)}function Kg(n,e){return Fr(n,e)}/**
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
 */let Ip;function $F(n){Ip=n}const aS=function(n){return typeof n=="number"?"number:"+U0(n):"string:"+n},cS=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mn(e,".sv"),"Priority must be a string or number.")}else O(n===Ip||n.isEmpty(),"priority of unexpected type.");O(n===Ip||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sw;class dt{constructor(e,t=dt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cS(this.priorityNode_)}static set __childrenNodeConstructor(e){sw=e}static get __childrenNodeConstructor(){return sw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new dt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:ae(e)===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:dt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ae(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||mi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,dt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+aS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=U0(this.value_):e+=this.value_,this.lazyHash_=L0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===dt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof dt.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=dt.VALUE_TYPE_ORDER.indexOf(t),r=dt.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+t),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}dt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let lS,uS;function jF(n){lS=n}function GF(n){uS=n}class zF extends wd{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Fr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(As,new dt("[PRIORITY-POST]",uS))}makePost(e,t){const s=lS(e);return new ue(t,new dt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ne=new zF;/**
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
 */const HF=Math.log(2);class KF{constructor(e){const t=r=>parseInt(Math.log(r)/HF,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gu=function(n,e,t,s){n.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new gt(d,h.node,gt.BLACK,null,null);{const f=parseInt(u/2,10)+c,p=i(c,f),m=i(f+1,l);return h=n[f],d=t?t(h):h,new gt(d,h.node,gt.BLACK,p,m)}},r=function(c){let l=null,u=null,h=n.length;const d=function(p,m){const g=h-p,y=h;h-=p;const w=i(g+1,y),S=n[g],C=t?t(S):S;f(new gt(C,S.node,m,null,w))},f=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const m=c.nextBitIsOne(),g=Math.pow(2,c.count-(p+1));m?d(g,gt.BLACK):(d(g,gt.BLACK),d(g,gt.RED))}return u},o=new KF(n.length),a=r(o);return new sn(s||e,a)};/**
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
 */let If;const Kr={};class vs{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return O(Kr&&Ne,"ChildrenNode.ts has not been loaded"),If=If||new vs({".priority":Kr},{".priority":Ne}),If}get(e){const t=sr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof sn?t:null}hasIndex(e){return mn(this.indexSet_,e.toString())}addIndex(e,t){O(e!==ns,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ue.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Gu(s,e.getCompare()):a=Kr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new vs(u,l)}addToIndexes(e,t){const s=gu(this.indexes_,(i,r)=>{const o=sr(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===Kr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(ue.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Gu(a,o.getCompare())}else return Kr;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new ue(e.name,a))),c.insert(e,e.node)}});return new vs(s,this.indexSet_)}removeFromIndexes(e,t){const s=gu(this.indexes_,i=>{if(i===Kr)return i;{const r=t.get(e.name);return r?i.remove(new ue(e.name,r)):i}});return new vs(s,this.indexSet_)}}/**
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
 */let ba;class Q{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&cS(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ba||(ba=new Q(new sn(Kg),null,vs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ba}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ba:t}}getChild(e){const t=ae(e);return t===null?this:this.getImmediateChild(t).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ue(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ba:this.priorityNode_;return new Q(i,o,r)}}updateChild(e,t){const s=ae(e);if(s===null)return t;{O(ae(e)!==".priority"||mi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Se(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Ne,(o,a)=>{t[o]=a.val(e),s++,r&&Q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+aS(this.getPriority().val())+":"),this.forEachChild(Ne,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":L0(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ue(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ue(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Tl?-1:0}withIndex(e){if(e===ns||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ns||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Ne),i=t.getIterator(Ne);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ns?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QF extends Q{constructor(){super(new sn(Kg),Q.EMPTY_NODE,vs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const Tl=new QF;Object.defineProperties(ue,{MIN:{value:new ue(pi,Q.EMPTY_NODE)},MAX:{value:new ue(As,Tl)}});oS.__EMPTY_NODE=Q.EMPTY_NODE;dt.__childrenNodeConstructor=Q;$F(Tl);GF(Tl);/**
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
 */const YF=!0;function We(n,e=null){if(n===null)return Q.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new dt(t,We(e))}if(!(n instanceof Array)&&YF){const t=[];let s=!1;if(It(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=We(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new ue(o,c)))}}),t.length===0)return Q.EMPTY_NODE;const r=Gu(t,WF,o=>o.name,Kg);if(s){const o=Gu(t,Ne.getCompare());return new Q(r,We(e),new vs({".priority":o},{".priority":Ne}))}else return new Q(r,We(e),vs.Default)}else{let t=Q.EMPTY_NODE;return It(n,(s,i)=>{if(mn(n,s)&&s.substring(0,1)!=="."){const r=We(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(We(e))}}jF(We);/**
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
 */class Qg extends wd{constructor(e){super(),this.indexPath_=e,O(!ce(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Fr(e.name,t.name):r}makePost(e,t){const s=We(e),i=Q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(t,i)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,Tl);return new ue(As,e)}toString(){return Ic(this.indexPath_,0).join("/")}}/**
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
 */class XF extends wd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Fr(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,t){const s=We(e);return new ue(t,s)}toString(){return".value"}}const Yg=new XF;/**
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
 */function hS(n){return{type:"value",snapshotNode:n}}function xo(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function bc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ec(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function JF(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Xg{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(bc(t,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(xo(t,s)):o.trackChildChange(Ec(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ne,(i,r)=>{t.hasChild(i)||s.trackChildChange(bc(i,r))}),t.isLeafNode()||t.forEachChild(Ne,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ec(i,r,o))}else s.trackChildChange(xo(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Sc{constructor(e){this.indexedFilter_=new Xg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sc.getStartPost_(e),this.endPost_=Sc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new ue(t,s))||(s=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Q.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Q.EMPTY_NODE);const r=this;return t.forEachChild(Ne,(o,a)=>{r.matches(new ue(o,a))||(i=i.updateImmediateChild(o,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class ZF{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Sc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new ue(t,s))||(s=Q.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const c=new ue(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ec(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(bc(t,h));const m=a.updateImmediateChild(t,Q.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(xo(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(bc(l.name,l.node)),r.trackChildChange(xo(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,Q.EMPTY_NODE)):e}}/**
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
 */class Td{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pi}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:As}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ne}copy(){const e=new Td;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eV(n){return n.loadsAllData()?new Xg(n.getIndex()):n.hasLimit()?new ZF(n):new Sc(n)}function tV(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function nV(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function bp(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function sV(n,e,t){let s;return n.index_===ns||t?s=bp(n,e,t):s=bp(n,e,As),s.startAfterSet_=!0,s}function Ep(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function iV(n,e,t){let s;return n.index_===ns||t?s=Ep(n,e,t):s=Ep(n,e,pi),s.endBeforeSet_=!0,s}function Id(n,e){const t=n.copy();return t.index_=e,t}function iw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ne?t="$priority":n.index_===Yg?t="$value":n.index_===ns?t="$key":(O(n.index_ instanceof Qg,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=at(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=at(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+at(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=at(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+at(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function rw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ne&&(e.i=n.index_.toString()),e}/**
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
 */class zu extends nS{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=wl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=zu.getListenId_(e,s),a={};this.listens_[o]=a;const c=iw(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),sr(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const s=zu.getListenId_(e,t);delete this.listens_[s]}get(e){const t=iw(e._queryParams),s=e._path.toString(),i=new Zt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Nr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ya(a.responseText)}catch{Ft("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Ft("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class rV{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Hu(){return{value:null,children:new Map}}function ta(n,e,t){if(ce(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ae(e);n.children.has(s)||n.children.set(s,Hu());const i=n.children.get(s);e=Se(e),ta(i,e,t)}}function Sp(n,e){if(ce(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Ne,(s,i)=>{ta(n,new we(s),i)}),Sp(n,e)}}else if(n.children.size>0){const t=ae(e);return e=Se(e),n.children.has(t)&&Sp(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Cp(n,e,t){n.value!==null?t(e,n.value):oV(n,(s,i)=>{const r=new we(e.toString()+"/"+s);Cp(i,r,t)})}function oV(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class aV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&It(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const ow=10*1e3,cV=30*1e3,lV=5*60*1e3;class uV{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new aV(e);const s=ow+(cV-ow)*Math.random();$a(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;It(e,(i,r)=>{r>0&&mn(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),$a(this.reportStats_.bind(this),Math.floor(Math.random()*2*lV))}}/**
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
 */var Pn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pn||(Pn={}));function Jg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function e_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ku{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Pn.ACK_USER_WRITE,this.source=Jg()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new we(e));return new Ku(ye(),t,this.revert)}}else return O(ae(this.path)===e,"operationForChild called for unrelated child."),new Ku(Se(this.path),this.affectedTree,this.revert)}}/**
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
 */class Cc{constructor(e,t){this.source=e,this.path=t,this.type=Pn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Cc(this.source,ye()):new Cc(this.source,Se(this.path))}}/**
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
 */class yr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Pn.OVERWRITE}operationForChild(e){return ce(this.path)?new yr(this.source,ye(),this.snap.getImmediateChild(e)):new yr(this.source,Se(this.path),this.snap)}}/**
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
 */class Do{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Pn.MERGE}operationForChild(e){if(ce(this.path)){const t=this.children.subtree(new we(e));return t.isEmpty()?null:t.value?new yr(this.source,ye(),t.value):new Do(this.source,ye(),t)}else return O(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Do(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class gi{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=ae(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class hV{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dV(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(JF(o.childName,o.snapshotNode))}),Ea(n,i,"child_removed",e,s,t),Ea(n,i,"child_added",e,s,t),Ea(n,i,"child_moved",r,s,t),Ea(n,i,"child_changed",e,s,t),Ea(n,i,"value",e,s,t),i}function Ea(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>pV(n,a,c)),o.forEach(a=>{const c=fV(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function fV(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function pV(n,e,t){if(e.childName==null||t.childName==null)throw Vo("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),i=new ue(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function bd(n,e){return{eventCache:n,serverCache:e}}function ja(n,e,t,s){return bd(new gi(e,t,s),n.serverCache)}function dS(n,e,t,s){return bd(n.eventCache,new gi(e,t,s))}function Qu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function vr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let bf;const mV=()=>(bf||(bf=new sn(XL)),bf);class Ae{constructor(e,t=mV()){this.value=e,this.children=t}static fromObject(e){let t=new Ae(null);return It(e,(s,i)=>{t=t.set(new we(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ye(),value:this.value};if(ce(e))return null;{const s=ae(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Se(e),t);return r!=null?{path:Ue(new we(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const t=ae(e),s=this.children.get(t);return s!==null?s.subtree(Se(e)):new Ae(null)}}set(e,t){if(ce(e))return new Ae(t,this.children);{const s=ae(e),r=(this.children.get(s)||new Ae(null)).set(Se(e),t),o=this.children.insert(s,r);return new Ae(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const t=ae(e),s=this.children.get(t);if(s){const i=s.remove(Se(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Ae(null):new Ae(this.value,r)}else return this}}get(e){if(ce(e))return this.value;{const t=ae(e),s=this.children.get(t);return s?s.get(Se(e)):null}}setTree(e,t){if(ce(e))return t;{const s=ae(e),r=(this.children.get(s)||new Ae(null)).setTree(Se(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ae(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ue(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ye(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(ce(e))return null;{const r=ae(e),o=this.children.get(r);return o?o.findOnPath_(Se(e),Ue(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ye(),t)}foreachOnPath_(e,t,s){if(ce(e))return this;{this.value&&s(t,this.value);const i=ae(e),r=this.children.get(i);return r?r.foreachOnPath_(Se(e),Ue(t,i),s):new Ae(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Ue(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Fn{constructor(e){this.writeTree_=e}static empty(){return new Fn(new Ae(null))}}function Ga(n,e,t){if(ce(e))return new Fn(new Ae(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=jt(i,e);return r=r.updateChild(o,t),new Fn(n.writeTree_.set(i,r))}else{const i=new Ae(t),r=n.writeTree_.setTree(e,i);return new Fn(r)}}}function kp(n,e,t){let s=n;return It(t,(i,r)=>{s=Ga(s,Ue(e,i),r)}),s}function aw(n,e){if(ce(e))return Fn.empty();{const t=n.writeTree_.setTree(e,new Ae(null));return new Fn(t)}}function Ap(n,e){return Vr(n,e)!=null}function Vr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(jt(t.path,e)):null}function cw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ne,(s,i)=>{e.push(new ue(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ue(s,i.value))}),e}function ei(n,e){if(ce(e))return n;{const t=Vr(n,e);return t!=null?new Fn(new Ae(t)):new Fn(n.writeTree_.subtree(e))}}function Np(n){return n.writeTree_.isEmpty()}function Ro(n,e){return fS(ye(),n.writeTree_,e)}function fS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=fS(Ue(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ue(n,".priority"),s)),t}}/**
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
 */function Ed(n,e){return _S(e,n)}function gV(n,e,t,s,i){O(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Ga(n.visibleWrites,e,t)),n.lastWriteId=s}function _V(n,e,t,s){O(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=kp(n.visibleWrites,e,t),n.lastWriteId=s}function yV(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function vV(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&wV(a,s.path)?i=!1:En(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return TV(n),!0;if(s.snap)n.visibleWrites=aw(n.visibleWrites,s.path);else{const a=s.children;It(a,c=>{n.visibleWrites=aw(n.visibleWrites,Ue(s.path,c))})}return!0}else return!1}function wV(n,e){if(n.snap)return En(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&En(Ue(n.path,t),e))return!0;return!1}function TV(n){n.visibleWrites=pS(n.allWrites,IV,ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function IV(n){return n.visible}function pS(n,e,t){let s=Fn.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)En(t,o)?(a=jt(t,o),s=Ga(s,a,r.snap)):En(o,t)&&(a=jt(o,t),s=Ga(s,ye(),r.snap.getChild(a)));else if(r.children){if(En(t,o))a=jt(t,o),s=kp(s,a,r.children);else if(En(o,t))if(a=jt(o,t),ce(a))s=kp(s,ye(),r.children);else{const c=sr(r.children,ae(a));if(c){const l=c.getChild(Se(a));s=Ga(s,ye(),l)}}}else throw Vo("WriteRecord should have .snap or .children")}}return s}function mS(n,e,t,s,i){if(!s&&!i){const r=Vr(n.visibleWrites,e);if(r!=null)return r;{const o=ei(n.visibleWrites,e);if(Np(o))return t;if(t==null&&!Ap(o,ye()))return null;{const a=t||Q.EMPTY_NODE;return Ro(o,a)}}}else{const r=ei(n.visibleWrites,e);if(!i&&Np(r))return t;if(!i&&t==null&&!Ap(r,ye()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(En(l.path,e)||En(e,l.path))},a=pS(n.allWrites,o,e),c=t||Q.EMPTY_NODE;return Ro(a,c)}}}function bV(n,e,t){let s=Q.EMPTY_NODE;const i=Vr(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ne,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ei(n.visibleWrites,e);return t.forEachChild(Ne,(o,a)=>{const c=Ro(ei(r,new we(o)),a);s=s.updateImmediateChild(o,c)}),cw(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ei(n.visibleWrites,e);return cw(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function EV(n,e,t,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ue(e,t);if(Ap(n.visibleWrites,r))return null;{const o=ei(n.visibleWrites,r);return Np(o)?i.getChild(t):Ro(o,i.getChild(t))}}function SV(n,e,t,s){const i=Ue(e,t),r=Vr(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ei(n.visibleWrites,i);return Ro(o,s.getNode().getImmediateChild(t))}else return null}function CV(n,e){return Vr(n.visibleWrites,e)}function kV(n,e,t,s,i,r,o){let a;const c=ei(n.visibleWrites,e),l=Vr(c,ye());if(l!=null)a=l;else if(t!=null)a=Ro(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function AV(){return{visibleWrites:Fn.empty(),allWrites:[],lastWriteId:-1}}function Yu(n,e,t,s){return mS(n.writeTree,n.treePath,e,t,s)}function t_(n,e){return bV(n.writeTree,n.treePath,e)}function lw(n,e,t,s){return EV(n.writeTree,n.treePath,e,t,s)}function Xu(n,e){return CV(n.writeTree,Ue(n.treePath,e))}function NV(n,e,t,s,i,r){return kV(n.writeTree,n.treePath,e,t,s,i,r)}function n_(n,e,t){return SV(n.writeTree,n.treePath,e,t)}function gS(n,e){return _S(Ue(n.treePath,e),n.writeTree)}function _S(n,e){return{treePath:n,writeTree:e}}/**
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
 */class xV{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ec(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,bc(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,xo(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ec(s,e.snapshotNode,i.oldSnap));else throw Vo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class DV{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const yS=new DV;class s_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new gi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return n_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vr(this.viewCache_),r=NV(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function RV(n){return{filter:n}}function OV(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function PV(n,e,t,s,i){const r=new xV;let o,a;if(t.type===Pn.OVERWRITE){const l=t;l.source.fromUser?o=xp(n,e,l.path,l.snap,s,i,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ce(l.path),o=Ju(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===Pn.MERGE){const l=t;l.source.fromUser?o=LV(n,e,l.path,l.children,s,i,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Dp(n,e,l.path,l.children,s,i,a,r))}else if(t.type===Pn.ACK_USER_WRITE){const l=t;l.revert?o=UV(n,e,l.path,s,i,r):o=FV(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===Pn.LISTEN_COMPLETE)o=VV(n,e,t.path,s,r);else throw Vo("Unknown operation type: "+t.type);const c=r.getChanges();return MV(e,o,c),{viewCache:o,changes:c}}function MV(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Qu(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(hS(Qu(e)))}}function vS(n,e,t,s,i,r){const o=e.eventCache;if(Xu(s,t)!=null)return e;{let a,c;if(ce(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=vr(e),u=l instanceof Q?l:Q.EMPTY_NODE,h=t_(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Yu(s,vr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ae(t);if(l===".priority"){O(mi(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=lw(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=Se(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=lw(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=n_(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return ja(e,a,o.isFullyInitialized()||ce(t),n.filter.filtersNodes())}}function Ju(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(ce(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=ae(t);if(!c.isCompleteForPath(t)&&mi(t)>1)return e;const p=Se(t),g=c.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?l=u.updatePriority(c.getNode(),g):l=u.updateChild(c.getNode(),f,g,p,yS,null)}const h=dS(e,l,c.isFullyInitialized()||ce(t),u.filtersNodes()),d=new s_(i,h,r);return vS(n,h,t,i,d,a)}function xp(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const u=new s_(i,e,r);if(ce(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ja(e,l,!0,n.filter.filtersNodes());else{const h=ae(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=ja(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Se(t),f=a.getNode().getImmediateChild(h);let p;if(ce(d))p=s;else{const m=u.getCompleteChild(h);m!=null?Gg(d)===".priority"&&m.getChild(iS(d)).isEmpty()?p=m:p=m.updateChild(d,s):p=Q.EMPTY_NODE}if(f.equals(p))c=e;else{const m=n.filter.updateChild(a.getNode(),h,p,d,u,o);c=ja(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function uw(n,e){return n.eventCache.isCompleteForChild(e)}function LV(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Ue(t,c);uw(e,ae(u))&&(a=xp(n,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Ue(t,c);uw(e,ae(u))||(a=xp(n,a,u,l,i,r,o))}),a}function hw(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Dp(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ce(t)?l=s:l=new Ae(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=hw(n,f,d);c=Ju(n,c,new we(h),p,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=hw(n,p,d);c=Ju(n,c,new we(h),m,i,r,o,a)}}),c}function FV(n,e,t,s,i,r,o){if(Xu(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ce(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ju(n,e,t,c.getNode().getChild(t),i,r,a,o);if(ce(t)){let l=new Ae(null);return c.getNode().forEachChild(ns,(u,h)=>{l=l.set(new we(u),h)}),Dp(n,e,t,l,i,r,a,o)}else return e}else{let l=new Ae(null);return s.foreach((u,h)=>{const d=Ue(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Dp(n,e,t,l,i,r,a,o)}}function VV(n,e,t,s,i){const r=e.serverCache,o=dS(e,r.getNode(),r.isFullyInitialized()||ce(t),r.isFiltered());return vS(n,o,t,s,yS,i)}function UV(n,e,t,s,i,r){let o;if(Xu(s,t)!=null)return e;{const a=new s_(s,e,i),c=e.eventCache.getNode();let l;if(ce(t)||ae(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Yu(s,vr(e));else{const h=e.serverCache.getNode();O(h instanceof Q,"serverChildren would be complete if leaf node"),u=t_(s,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=ae(t);let h=n_(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,Se(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,Q.EMPTY_NODE,Se(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yu(s,vr(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Xu(s,ye())!=null,ja(e,l,o,n.filter.filtersNodes())}}/**
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
 */class qV{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Xg(s.getIndex()),r=eV(s);this.processor_=RV(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),u=new gi(c,o.isFullyInitialized(),i.filtersNodes()),h=new gi(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=bd(h,u),this.eventGenerator_=new hV(this.query_)}get query(){return this.query_}}function BV(n){return n.viewCache_.serverCache.getNode()}function WV(n){return Qu(n.viewCache_)}function $V(n,e){const t=vr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ce(e)&&!t.getImmediateChild(ae(e)).isEmpty())?t.getChild(e):null}function dw(n){return n.eventRegistrations_.length===0}function jV(n,e){n.eventRegistrations_.push(e)}function fw(n,e,t){const s=[];if(t){O(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function pw(n,e,t,s){e.type===Pn.MERGE&&e.source.queryId!==null&&(O(vr(n.viewCache_),"We should always have a full cache before handling merges"),O(Qu(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=PV(n.processor_,i,e,t,s);return OV(n.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,wS(n,r.changes,r.viewCache.eventCache.getNode(),null)}function GV(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ne,(r,o)=>{s.push(xo(r,o))}),t.isFullyInitialized()&&s.push(hS(t.getNode())),wS(n,s,t.getNode(),e)}function wS(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return dV(n.eventGenerator_,e,t,i)}/**
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
 */let Zu;class TS{constructor(){this.views=new Map}}function zV(n){O(!Zu,"__referenceConstructor has already been defined"),Zu=n}function HV(){return O(Zu,"Reference.ts has not been loaded"),Zu}function KV(n){return n.views.size===0}function i_(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),pw(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(pw(o,e,t,s));return r}}function IS(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Yu(t,i?s:null),c=!1;a?c=!0:s instanceof Q?(a=t_(t,s),c=!1):(a=Q.EMPTY_NODE,c=!1);const l=bd(new gi(a,c,!1),new gi(s,i,!1));return new qV(e,l)}return o}function QV(n,e,t,s,i,r){const o=IS(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),jV(o,t),GV(o,t)}function YV(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=_i(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(fw(l,t,s)),dw(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(fw(c,t,s)),dw(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!_i(n)&&r.push(new(HV())(e._repo,e._path)),{removed:r,events:o}}function bS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ti(n,e){let t=null;for(const s of n.views.values())t=t||$V(s,e);return t}function ES(n,e){if(e._queryParams.loadsAllData())return Sd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function SS(n,e){return ES(n,e)!=null}function _i(n){return Sd(n)!=null}function Sd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let eh;function XV(n){O(!eh,"__referenceConstructor has already been defined"),eh=n}function JV(){return O(eh,"Reference.ts has not been loaded"),eh}let ZV=1;class mw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=AV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function r_(n,e,t,s,i){return gV(n.pendingWriteTree_,e,t,s,i),i?na(n,new yr(Jg(),e,t)):[]}function eU(n,e,t,s){_V(n.pendingWriteTree_,e,t,s);const i=Ae.fromObject(t);return na(n,new Do(Jg(),e,i))}function Xs(n,e,t=!1){const s=yV(n.pendingWriteTree_,e);if(vV(n.pendingWriteTree_,e)){let r=new Ae(null);return s.snap!=null?r=r.set(ye(),!0):It(s.children,o=>{r=r.set(new we(o),!0)}),na(n,new Ku(s.path,r,t))}else return[]}function Il(n,e,t){return na(n,new yr(Zg(),e,t))}function tU(n,e,t){const s=Ae.fromObject(t);return na(n,new Do(Zg(),e,s))}function nU(n,e){return na(n,new Cc(Zg(),e))}function sU(n,e,t){const s=o_(n,t);if(s){const i=a_(s),r=i.path,o=i.queryId,a=jt(r,e),c=new Cc(e_(o),a);return c_(n,r,c)}else return[]}function th(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||SS(o,e))){const c=YV(o,e,t,s);KV(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>_i(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=oU(d);for(let p=0;p<f.length;++p){const m=f[p],g=m.query,y=NS(n,m);n.listenProvider_.startListening(za(g),kc(n,g),y.hashFn,y.onComplete)}}}!h&&l.length>0&&!s&&(u?n.listenProvider_.stopListening(za(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(kd(d));n.listenProvider_.stopListening(za(d),f)}))}aU(n,l)}return a}function CS(n,e,t,s){const i=o_(n,s);if(i!=null){const r=a_(i),o=r.path,a=r.queryId,c=jt(o,e),l=new yr(e_(a),c,t);return c_(n,o,l)}else return[]}function iU(n,e,t,s){const i=o_(n,s);if(i){const r=a_(i),o=r.path,a=r.queryId,c=jt(o,e),l=Ae.fromObject(t),u=new Do(e_(a),c,l);return c_(n,o,u)}else return[]}function Rp(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=jt(d,i);r=r||ti(f,p),o=o||_i(f)});let a=n.syncPointTree_.get(i);a?(o=o||_i(a),r=r||ti(a,ye())):(a=new TS,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=Q.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const m=ti(p,ye());m&&(r=r.updateImmediateChild(f,m))}));const l=SS(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=kd(e);O(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=cU();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Ed(n.pendingWriteTree_,i);let h=QV(a,e,t,u,r,c);if(!l&&!o&&!s){const d=ES(a,e);h=h.concat(lU(n,e,d))}return h}function Cd(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=jt(o,e),l=ti(a,c);if(l)return l});return mS(i,e,r,t,!0)}function rU(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=jt(l,t);s=s||ti(u,h)});let i=n.syncPointTree_.get(t);i?s=s||ti(i,ye()):(i=new TS,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new gi(s,!0,!1):null,a=Ed(n.pendingWriteTree_,e._path),c=IS(i,e,a,r?o.getNode():Q.EMPTY_NODE,r);return WV(c)}function na(n,e){return kS(e,n.syncPointTree_,null,Ed(n.pendingWriteTree_,ye()))}function kS(n,e,t,s){if(ce(n.path))return AS(n,e,t,s);{const i=e.get(ye());t==null&&i!=null&&(t=ti(i,ye()));let r=[];const o=ae(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=gS(s,o);r=r.concat(kS(a,c,l,u))}return i&&(r=r.concat(i_(i,n,s,t))),r}}function AS(n,e,t,s){const i=e.get(ye());t==null&&i!=null&&(t=ti(i,ye()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=gS(s,o),u=n.operationForChild(o);u&&(r=r.concat(AS(u,a,c,l)))}),i&&(r=r.concat(i_(i,n,s,t))),r}function NS(n,e){const t=e.query,s=kc(n,t);return{hashFn:()=>(BV(e)||Q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?sU(n,t._path,s):nU(n,t._path);{const r=eF(i,t);return th(n,t,null,r)}}}}function kc(n,e){const t=kd(e);return n.queryToTagMap.get(t)}function kd(n){return n._path.toString()+"$"+n._queryIdentifier}function o_(n,e){return n.tagToQueryMap.get(e)}function a_(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new we(n.substr(0,e))}}function c_(n,e,t){const s=n.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=Ed(n.pendingWriteTree_,e);return i_(s,t,i,null)}function oU(n){return n.fold((e,t,s)=>{if(t&&_i(t))return[Sd(t)];{let i=[];return t&&(i=bS(t)),It(s,(r,o)=>{i=i.concat(o)}),i}})}function za(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(JV())(n._repo,n._path):n}function aU(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=kd(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function cU(){return ZV++}function lU(n,e,t){const s=e._path,i=kc(n,e),r=NS(n,t),o=n.listenProvider_.startListening(za(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)O(!_i(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!ce(l)&&u&&_i(u))return[Sd(u).query];{let d=[];return u&&(d=d.concat(bS(u).map(f=>f.query))),It(h,(f,p)=>{d=d.concat(p)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(za(u),kc(n,u))}}return o}/**
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
 */class l_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new l_(t)}node(){return this.node_}}class u_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ue(this.path_,e);return new u_(this.syncTree_,t)}node(){return Cd(this.syncTree_,this.path_)}}const uU=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},gw=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return hU(n[".sv"],e,t);if(typeof n[".sv"]=="object")return dU(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},hU=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},dU=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},xS=function(n,e,t,s){return d_(e,new u_(t,n),s)},h_=function(n,e,t){return d_(n,new l_(e),t)};function d_(n,e,t){const s=n.getPriority().val(),i=gw(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=gw(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new dt(a,We(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new dt(i))),o.forEachChild(Ne,(a,c)=>{const l=d_(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class f_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ad(n,e){let t=e instanceof we?e:new we(e),s=n,i=ae(t);for(;i!==null;){const r=sr(s.node.children,i)||{children:{},childCount:0};s=new f_(i,s,r),t=Se(t),i=ae(t)}return s}function Ur(n){return n.node.value}function p_(n,e){n.node.value=e,Op(n)}function DS(n){return n.node.childCount>0}function fU(n){return Ur(n)===void 0&&!DS(n)}function Nd(n,e){It(n.node.children,(t,s)=>{e(new f_(t,n,s))})}function RS(n,e,t,s){t&&!s&&e(n),Nd(n,i=>{RS(i,e,!0,s)}),t&&s&&e(n)}function pU(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bl(n){return new we(n.parent===null?n.name:bl(n.parent)+"/"+n.name)}function Op(n){n.parent!==null&&mU(n.parent,n.name,n)}function mU(n,e,t){const s=fU(t),i=mn(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Op(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Op(n))}/**
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
 */const gU=/[\[\].#$\/\u0000-\u001F\u007F]/,_U=/[\[\].#$\u0000-\u001F\u007F]/,Ef=10*1024*1024,xd=function(n){return typeof n=="string"&&n.length!==0&&!gU.test(n)},OS=function(n){return typeof n=="string"&&n.length!==0&&!_U.test(n)},yU=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OS(n)},Ac=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!vd(n)||n&&typeof n=="object"&&mn(n,".sv")},as=function(n,e,t,s){s&&e===void 0||El(rn(n,"value"),e,t)},El=function(n,e,t){const s=t instanceof we?new PF(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Li(s));if(typeof e=="function")throw new Error(n+"contains a function "+Li(s)+" with contents = "+e.toString());if(vd(e))throw new Error(n+"contains "+e.toString()+" "+Li(s));if(typeof e=="string"&&e.length>Ef/3&&Eh(e)>Ef)throw new Error(n+"contains a string greater than "+Ef+" utf8 bytes "+Li(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(It(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!xd(o)))throw new Error(n+" contains an invalid key ("+o+") "+Li(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MF(s,o),El(n,a,s),LF(s)}),i&&r)throw new Error(n+' contains ".value" child '+Li(s)+" in addition to actual children.")}},vU=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Ic(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!xd(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(OF);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&En(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},PS=function(n,e,t,s){if(s&&e===void 0)return;const i=rn(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];It(e,(o,a)=>{const c=new we(o);if(El(i,a,Ue(t,c)),Gg(c)===".priority"&&!Ac(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),vU(i,r)},m_=function(n,e,t){if(!(t&&e===void 0)){if(vd(e))throw new Error(rn(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ac(e))throw new Error(rn(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Sl=function(n,e,t,s){if(!(s&&t===void 0)&&!xd(t))throw new Error(rn(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Nc=function(n,e,t,s){if(!(s&&t===void 0)&&!OS(t))throw new Error(rn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wU=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Nc(n,e,t,s)},Sn=function(n,e){if(ae(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},MS=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!yU(t))throw new Error(rn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class TU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!zg(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function LS(n,e,t){Dd(n,t),FS(n,s=>zg(s,e))}function vn(n,e,t){Dd(n,t),FS(n,s=>En(s,e)||En(e,s))}function FS(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(IU(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function IU(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();er&&_t("event: "+t.toString()),ea(s)}}}/**
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
 */const VS="repo_interrupt",bU=25;class EU{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hu(),this.transactionQueueTree_=new f_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SU(n,e,t){if(n.stats_=$g(n.repoInfo_),n.forceRestClient_||iF())n.server_=new zu(n.repoInfo_,(s,i,r,o)=>{_w(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>yw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Is(n.repoInfo_,e,(s,i,r,o)=>{_w(n,s,i,r,o)},s=>{yw(n,s)},s=>{CU(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=lF(n.repoInfo_,()=>new uV(n.stats_,n.server_)),n.infoData_=new rV,n.infoSyncTree_=new mw({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Il(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),g_(n,"connected",!1),n.serverSyncTree_=new mw({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);vn(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function US(n){const t=n.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Cl(n){return uU({timestamp:US(n)})}function _w(n,e,t,s,i){n.dataUpdateCount++;const r=new we(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=gu(t,l=>We(l));o=iU(n.serverSyncTree_,r,c,i)}else{const c=We(t);o=CS(n.serverSyncTree_,r,c,i)}else if(s){const c=gu(t,l=>We(l));o=tU(n.serverSyncTree_,r,c)}else{const c=We(t);o=Il(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Oo(n,r)),vn(n.eventQueue_,a,o)}function yw(n,e){g_(n,"connected",e),e===!1&&NU(n)}function CU(n,e){It(e,(t,s)=>{g_(n,t,s)})}function g_(n,e,t){const s=new we("/.info/"+e),i=We(t);n.infoData_.updateSnapshot(s,i);const r=Il(n.infoSyncTree_,s,i);vn(n.eventQueue_,s,r)}function Rd(n){return n.nextWriteId_++}function kU(n,e,t){const s=rU(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=We(i).withIndex(e._queryParams.getIndex());Rp(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Il(n.serverSyncTree_,e._path,r);else{const a=kc(n.serverSyncTree_,e);o=CS(n.serverSyncTree_,e._path,r,a)}return vn(n.eventQueue_,e._path,o),th(n.serverSyncTree_,e,t,null,!0),r},i=>(sa(n,"get for query "+at(e)+" failed: "+i),Promise.reject(new Error(i))))}function __(n,e,t,s,i){sa(n,"set",{path:e.toString(),value:t,priority:s});const r=Cl(n),o=We(t,s),a=Cd(n.serverSyncTree_,e),c=h_(o,a,r),l=Rd(n),u=r_(n.serverSyncTree_,e,c,l,!0);Dd(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Ft("set at "+e+" failed: "+d);const m=Xs(n.serverSyncTree_,l,!p);vn(n.eventQueue_,e,m),yi(n,i,d,f)});const h=v_(n,e);Oo(n,h),vn(n.eventQueue_,h,[])}function AU(n,e,t,s){sa(n,"update",{path:e.toString(),value:t});let i=!0;const r=Cl(n),o={};if(It(t,(a,c)=>{i=!1,o[a]=xS(Ue(e,a),We(c),n.serverSyncTree_,r)}),i)_t("update() called with empty data.  Don't do anything."),yi(n,s,"ok",void 0);else{const a=Rd(n),c=eU(n.serverSyncTree_,e,o,a);Dd(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||Ft("update at "+e+" failed: "+l);const d=Xs(n.serverSyncTree_,a,!h),f=d.length>0?Oo(n,e):e;vn(n.eventQueue_,f,d),yi(n,s,l,u)}),It(t,l=>{const u=v_(n,Ue(e,l));Oo(n,u)}),vn(n.eventQueue_,e,[])}}function NU(n){sa(n,"onDisconnectEvents");const e=Cl(n),t=Hu();Cp(n.onDisconnect_,ye(),(i,r)=>{const o=xS(i,r,n.serverSyncTree_,e);ta(t,i,o)});let s=[];Cp(t,ye(),(i,r)=>{s=s.concat(Il(n.serverSyncTree_,i,r));const o=v_(n,i);Oo(n,o)}),n.onDisconnect_=Hu(),vn(n.eventQueue_,ye(),s)}function xU(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Sp(n.onDisconnect_,e),yi(n,t,s,i)})}function vw(n,e,t,s){const i=We(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&ta(n.onDisconnect_,e,i),yi(n,s,r,o)})}function DU(n,e,t,s,i){const r=We(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&ta(n.onDisconnect_,e,r),yi(n,i,o,a)})}function RU(n,e,t,s){if(mu(t)){_t("onDisconnect().update() called with empty data.  Don't do anything."),yi(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&It(t,(o,a)=>{const c=We(a);ta(n.onDisconnect_,Ue(e,o),c)}),yi(n,s,i,r)})}function OU(n,e,t){let s;ae(e._path)===".info"?s=Rp(n.infoSyncTree_,e,t):s=Rp(n.serverSyncTree_,e,t),LS(n.eventQueue_,e._path,s)}function Pp(n,e,t){let s;ae(e._path)===".info"?s=th(n.infoSyncTree_,e,t):s=th(n.serverSyncTree_,e,t),LS(n.eventQueue_,e._path,s)}function qS(n){n.persistentConnection_&&n.persistentConnection_.interrupt(VS)}function PU(n){n.persistentConnection_&&n.persistentConnection_.resume(VS)}function sa(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),_t(t,...e)}function yi(n,e,t,s){e&&ea(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function MU(n,e,t,s,i,r){sa(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:M0(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=y_(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{El("transaction failed: Data returned ",c,o.path),o.status=0;const l=Ad(n.transactionQueueTree_,e),u=Ur(l)||[];u.push(o),p_(l,u);let h;typeof c=="object"&&c!==null&&mn(c,".priority")?(h=sr(c,".priority"),O(Ac(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(Cd(n.serverSyncTree_,e)||Q.EMPTY_NODE).getPriority().val();const d=Cl(n),f=We(c,h),p=h_(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=p,o.currentWriteId=Rd(n);const m=r_(n.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);vn(n.eventQueue_,e,m),Od(n,n.transactionQueueTree_)}}function y_(n,e,t){return Cd(n.serverSyncTree_,e,t)||Q.EMPTY_NODE}function Od(n,e=n.transactionQueueTree_){if(e||Pd(n,e),Ur(e)){const t=WS(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&LU(n,bl(e),t)}else DS(e)&&Nd(e,t=>{Od(n,t)})}function LU(n,e,t){const s=t.map(l=>l.currentWriteId),i=y_(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=jt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{sa(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Xs(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Pd(n,Ad(n.transactionQueueTree_,e)),Od(n,n.transactionQueueTree_),vn(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)ea(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ft("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Oo(n,e)}},o)}function Oo(n,e){const t=BS(n,e),s=bl(t),i=WS(n,t);return FU(n,i,s),s}function FU(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=jt(t,c.path);let u=!1,h;if(O(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Xs(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=bU)u=!0,h="maxretry",i=i.concat(Xs(n.serverSyncTree_,c.currentWriteId,!0));else{const d=y_(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){El("transaction failed: Data returned ",f,c.path);let p=We(f);typeof f=="object"&&f!=null&&mn(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=c.currentWriteId,y=Cl(n),w=h_(p,d,y);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=w,c.currentWriteId=Rd(n),o.splice(o.indexOf(g),1),i=i.concat(r_(n.serverSyncTree_,c.path,w,c.currentWriteId,c.applyLocally)),i=i.concat(Xs(n.serverSyncTree_,g,!0))}else u=!0,h="nodata",i=i.concat(Xs(n.serverSyncTree_,c.currentWriteId,!0))}vn(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Pd(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)ea(s[a]);Od(n,n.transactionQueueTree_)}function BS(n,e){let t,s=n.transactionQueueTree_;for(t=ae(e);t!==null&&Ur(s)===void 0;)s=Ad(s,t),e=Se(e),t=ae(e);return s}function WS(n,e){const t=[];return $S(n,e,t),t.sort((s,i)=>s.order-i.order),t}function $S(n,e,t){const s=Ur(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Nd(e,i=>{$S(n,i,t)})}function Pd(n,e){const t=Ur(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,p_(e,t.length>0?t:void 0)}Nd(e,s=>{Pd(n,s)})}function v_(n,e){const t=bl(BS(n,e)),s=Ad(n.transactionQueueTree_,e);return pU(s,i=>{Sf(n,i)}),Sf(n,s),RS(s,i=>{Sf(n,i)}),t}function Sf(n,e){const t=Ur(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(O(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Xs(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?p_(e,void 0):t.length=r+1,vn(n.eventQueue_,bl(e),i);for(let o=0;o<s.length;o++)ea(s[o])}}/**
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
 */function VU(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function UU(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ft(`Invalid query segment '${t}' in query '${n}'`)}return e}const Mp=function(n,e){const t=qU(n),s=t.namespace;t.domain==="firebase.com"&&os(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&os("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||QL();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Q0(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new we(t.pathString)}},qU=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=VU(n.substring(u,h)));const d=UU(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const ww="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",BU=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ww.charAt(t%64),t=Math.floor(t/64);O(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ww.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class jS{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+at(this.snapshot.exportVal())}}class GS{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class w_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let WU=class{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Zt;return xU(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Sn("OnDisconnect.remove",this._path);const e=new Zt;return vw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Sn("OnDisconnect.set",this._path),as("OnDisconnect.set",e,this._path,!1);const t=new Zt;return vw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Sn("OnDisconnect.setWithPriority",this._path),as("OnDisconnect.setWithPriority",e,this._path,!1),m_("OnDisconnect.setWithPriority",t,!1);const s=new Zt;return DU(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Sn("OnDisconnect.update",this._path),PS("OnDisconnect.update",e,this._path,!1);const t=new Zt;return RU(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
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
 */class ln{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return ce(this._path)?null:Gg(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=rw(this._queryParams),t=Bg(e);return t==="{}"?"default":t}get _queryObject(){return rw(this._queryParams)}isEqual(e){if(e=B(e),!(e instanceof ln))return!1;const t=this._repo===e._repo,s=zg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+RF(this._path)}}function Md(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Ai(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===ns){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==pi)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==As)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===Ne){if(e!=null&&!Ac(e)||t!=null&&!Ac(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(n.getIndex()instanceof Qg||n.getIndex()===Yg,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ld(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class xn extends ln{constructor(e,t){super(e,t,new Td,!1)}get parent(){const e=iS(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Fd=class Lp{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new we(e),s=wr(this.ref,e);return new Lp(this._node.getChild(t),s,Ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Lp(i,wr(this.ref,s),Ne)))}hasChild(e){const t=new we(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function zS(n,e){return n=B(n),n._checkNotDeleted("ref"),e!==void 0?wr(n._root,e):n._root}function Tw(n,e){n=B(n),n._checkNotDeleted("refFromURL");const t=Mp(e,n._repo.repoInfo_.nodeAdmin);MS("refFromURL",t);const s=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&s.host!==n._repo.repoInfo_.host&&os("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+n._repo.repoInfo_.host+")"),zS(n,t.path.toString())}function wr(n,e){return n=B(n),ae(n._path)===null?wU("child","path",e,!1):Nc("child","path",e,!1),new xn(n._repo,Ue(n._path,e))}function $U(n,e){n=B(n),Sn("push",n._path),as("push",e,n._path,!0);const t=US(n._repo),s=BU(t),i=wr(n,s),r=wr(n,s);let o;return e!=null?o=T_(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function jU(n){return Sn("remove",n._path),T_(n,null)}function T_(n,e){n=B(n),Sn("set",n._path),as("set",e,n._path,!1);const t=new Zt;return __(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function GU(n,e){n=B(n),Sn("setPriority",n._path),m_("setPriority",e,!1);const t=new Zt;return __(n._repo,Ue(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function zU(n,e,t){if(Sn("setWithPriority",n._path),as("setWithPriority",e,n._path,!1),m_("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const s=new Zt;return __(n._repo,n._path,e,t,s.wrapCallback(()=>{})),s.promise}function HU(n,e){PS("update",e,n._path,!1);const t=new Zt;return AU(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function KU(n){n=B(n);const e=new w_(()=>{}),t=new kl(e);return kU(n._repo,n,t).then(s=>new Fd(s,new xn(n._repo,n._path),n._queryParams.getIndex()))}class kl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new jS("value",this,new Fd(e.snapshotNode,new xn(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new GS(this,e,t):null}matches(e){return e instanceof kl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Vd{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new GS(this,e,t):null}createEvent(e,t){O(e.childName!=null,"Child events should have a childName.");const s=wr(new xn(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new jS(e.type,this,new Fd(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Al(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(u,h)=>{Pp(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new w_(t,r||void 0),a=e==="value"?new kl(o):new Vd(e,o);return OU(n._repo,n,a),()=>Pp(n._repo,n,a)}function Fp(n,e,t,s){return Al(n,"value",e,t,s)}function Iw(n,e,t,s){return Al(n,"child_added",e,t,s)}function bw(n,e,t,s){return Al(n,"child_changed",e,t,s)}function Ew(n,e,t,s){return Al(n,"child_moved",e,t,s)}function Sw(n,e,t,s){return Al(n,"child_removed",e,t,s)}function Cw(n,e,t){let s=null;const i=t?new w_(t):null;e==="value"?s=new kl(i):e&&(s=new Vd(e,i)),Pp(n._repo,n,s)}class Wn{}class HS extends Wn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("endAt",this._value,e._path,!0);const t=Ep(e._queryParams,this._value,this._key);if(Ld(t),Ai(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ln(e._repo,e._path,t,e._orderByCalled)}}function QU(n,e){return Sl("endAt","key",e,!0),new HS(n,e)}class YU extends Wn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("endBefore",this._value,e._path,!1);const t=iV(e._queryParams,this._value,this._key);if(Ld(t),Ai(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ln(e._repo,e._path,t,e._orderByCalled)}}function XU(n,e){return Sl("endBefore","key",e,!0),new YU(n,e)}class KS extends Wn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("startAt",this._value,e._path,!0);const t=bp(e._queryParams,this._value,this._key);if(Ld(t),Ai(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ln(e._repo,e._path,t,e._orderByCalled)}}function JU(n=null,e){return Sl("startAt","key",e,!0),new KS(n,e)}class ZU extends Wn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){as("startAfter",this._value,e._path,!1);const t=sV(e._queryParams,this._value,this._key);if(Ld(t),Ai(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ln(e._repo,e._path,t,e._orderByCalled)}}function eq(n,e){return Sl("startAfter","key",e,!0),new ZU(n,e)}class tq extends Wn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ln(e._repo,e._path,tV(e._queryParams,this._limit),e._orderByCalled)}}function nq(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new tq(n)}class sq extends Wn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ln(e._repo,e._path,nV(e._queryParams,this._limit),e._orderByCalled)}}function iq(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new sq(n)}class rq extends Wn{constructor(e){super(),this._path=e}_apply(e){Md(e,"orderByChild");const t=new we(this._path);if(ce(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Qg(t),i=Id(e._queryParams,s);return Ai(i),new ln(e._repo,e._path,i,!0)}}function oq(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Nc("orderByChild","path",n,!1),new rq(n)}class aq extends Wn{_apply(e){Md(e,"orderByKey");const t=Id(e._queryParams,ns);return Ai(t),new ln(e._repo,e._path,t,!0)}}function cq(){return new aq}class lq extends Wn{_apply(e){Md(e,"orderByPriority");const t=Id(e._queryParams,Ne);return Ai(t),new ln(e._repo,e._path,t,!0)}}function uq(){return new lq}class hq extends Wn{_apply(e){Md(e,"orderByValue");const t=Id(e._queryParams,Yg);return Ai(t),new ln(e._repo,e._path,t,!0)}}function dq(){return new hq}class fq extends Wn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(as("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new HS(this._value,this._key)._apply(new KS(this._value,this._key)._apply(e))}}function pq(n,e){return Sl("equalTo","key",e,!0),new fq(n,e)}function Dn(n,...e){let t=B(n);for(const s of e)t=s._apply(t);return t}zV(xn);XV(xn);/**
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
 */const mq="FIREBASE_DATABASE_EMULATOR_HOST",Vp={};let gq=!1;function _q(n,e,t,s){n.repoInfo_=new Q0(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function QS(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||os("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Mp(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[mq]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Mp(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new co(co.OWNER):new oF(n.name,n.options,e);MS("Invalid Firebase Database URL",o),ce(o.path)||os("Database URL must point to the root of a Firebase Database (not including a child path).");const h=vq(a,n,u,new rF(n.name,t));return new wq(h,n)}function yq(n,e){const t=Vp[e];(!t||t[n.key]!==n)&&os(`Database ${e}(${n.repoInfo_}) has already been deleted.`),qS(n),delete t[n.key]}function vq(n,e,t,s){let i=Vp[e.name];i||(i={},Vp[e.name]=i);let r=i[n.toURLString()];return r&&os("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new EU(n,gq,t,s),i[n.toURLString()]=r,r}let wq=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yq(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&os("Cannot call "+e+" on a deleted database.")}};function YS(){No.IS_TRANSPORT_INITIALIZED&&Ft("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function Tq(){YS(),Ys.forceDisallow()}function Iq(){YS(),In.forceDisallow(),Ys.forceAllow()}function bq(n,e,t,s={}){n=B(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&os("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&os('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new co(co.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Xw(s.mockUserToken,n.app.options.projectId);r=new co(o)}_q(i,e,t,r)}function Eq(n){n=B(n),n._checkNotDeleted("goOffline"),qS(n._repo)}function Sq(n){n=B(n),n._checkNotDeleted("goOnline"),PU(n._repo)}function Cq(n,e){F0(n,e)}/**
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
 */function kq(n){O0(wi),Es(new gn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return QS(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),kn(Wv,$v,n),kn(Wv,$v,"esm2017")}/**
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
 */const Aq={".sv":"timestamp"};function Nq(){return Aq}function xq(n){return{".sv":{increment:n}}}/**
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
 */let Dq=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function Rq(n,e,t){var s;if(n=B(n),Sn("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=t==null?void 0:t.applyLocally)!==null&&s!==void 0?s:!0,r=new Zt,o=(c,l,u)=>{let h=null;c?r.reject(c):(h=new Fd(u,new xn(n._repo,n._path),Ne),r.resolve(new Dq(l,h)))},a=Fp(n,()=>{});return MU(n._repo,n._path,e,o,a,i),r.promise}Is.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Is.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};kq();const Oq="@firebase/database-compat",Pq="0.3.3";/**
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
 */const Mq=new Uo("@firebase/database-compat"),XS=function(n){const e="FIREBASE WARNING: "+n;Mq.warn(e)};/**
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
 */const Lq=function(n,e,t,s){if(!(s&&t===void 0)&&typeof t!="boolean")throw new Error(rn(n,e)+"must be a boolean.")},Fq=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(rn(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class Vq{constructor(e){this._delegate=e}cancel(e){X("OnDisconnect.cancel",0,1,arguments.length),pt("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),s=>e(s)),t}remove(e){X("OnDisconnect.remove",0,1,arguments.length),pt("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),s=>e(s)),t}set(e,t){X("OnDisconnect.set",1,2,arguments.length),pt("OnDisconnect.set","onComplete",t,!0);const s=this._delegate.set(e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){X("OnDisconnect.setWithPriority",2,3,arguments.length),pt("OnDisconnect.setWithPriority","onComplete",s,!0);const i=this._delegate.setWithPriority(e,t);return s&&i.then(()=>s(null),r=>s(r)),i}update(e,t){if(X("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,XS("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}pt("OnDisconnect.update","onComplete",t,!0);const s=this._delegate.update(e);return t&&s.then(()=>t(null),i=>t(i)),s}}/**
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
 */class Uq{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return X("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class ni{constructor(e,t){this._database=e,this._delegate=t}val(){return X("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return X("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return X("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return X("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return X("DataSnapshot.child",0,1,arguments.length),e=String(e),Nc("DataSnapshot.child","path",e,!1),new ni(this._database,this._delegate.child(e))}hasChild(e){return X("DataSnapshot.hasChild",1,1,arguments.length),Nc("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return X("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return X("DataSnapshot.forEach",1,1,arguments.length),pt("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new ni(this._database,t)))}hasChildren(){return X("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return X("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return X("DataSnapshot.ref",0,0,arguments.length),new fn(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ct{constructor(e,t){this.database=e,this._delegate=t}on(e,t,s,i){var r;X("Query.on",2,4,arguments.length),pt("Query.on","callback",t,!1);const o=Ct.getCancelAndContextArgs_("Query.on",s,i),a=(l,u)=>{t.call(o.context,new ni(this.database,l),u)};a.userCallback=t,a.context=o.context;const c=(r=o.cancel)===null||r===void 0?void 0:r.bind(o.context);switch(e){case"value":return Fp(this._delegate,a,c),t;case"child_added":return Iw(this._delegate,a,c),t;case"child_removed":return Sw(this._delegate,a,c),t;case"child_changed":return bw(this._delegate,a,c),t;case"child_moved":return Ew(this._delegate,a,c),t;default:throw new Error(rn("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,s){if(X("Query.off",0,3,arguments.length),Fq("Query.off",e,!0),pt("Query.off","callback",t,!0),Y_("Query.off","context",s,!0),t){const i=()=>{};i.userCallback=t,i.context=s,Cw(this._delegate,e,i)}else Cw(this._delegate,e)}get(){return KU(this._delegate).then(e=>new ni(this.database,e))}once(e,t,s,i){X("Query.once",1,4,arguments.length),pt("Query.once","callback",t,!0);const r=Ct.getCancelAndContextArgs_("Query.once",s,i),o=new Zt,a=(l,u)=>{const h=new ni(this.database,l);t&&t.call(r.context,h,u),o.resolve(h)};a.userCallback=t,a.context=r.context;const c=l=>{r.cancel&&r.cancel.call(r.context,l),o.reject(l)};switch(e){case"value":Fp(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Iw(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":Sw(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":bw(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":Ew(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(rn("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return X("Query.limitToFirst",1,1,arguments.length),new Ct(this.database,Dn(this._delegate,nq(e)))}limitToLast(e){return X("Query.limitToLast",1,1,arguments.length),new Ct(this.database,Dn(this._delegate,iq(e)))}orderByChild(e){return X("Query.orderByChild",1,1,arguments.length),new Ct(this.database,Dn(this._delegate,oq(e)))}orderByKey(){return X("Query.orderByKey",0,0,arguments.length),new Ct(this.database,Dn(this._delegate,cq()))}orderByPriority(){return X("Query.orderByPriority",0,0,arguments.length),new Ct(this.database,Dn(this._delegate,uq()))}orderByValue(){return X("Query.orderByValue",0,0,arguments.length),new Ct(this.database,Dn(this._delegate,dq()))}startAt(e=null,t){return X("Query.startAt",0,2,arguments.length),new Ct(this.database,Dn(this._delegate,JU(e,t)))}startAfter(e=null,t){return X("Query.startAfter",0,2,arguments.length),new Ct(this.database,Dn(this._delegate,eq(e,t)))}endAt(e=null,t){return X("Query.endAt",0,2,arguments.length),new Ct(this.database,Dn(this._delegate,QU(e,t)))}endBefore(e=null,t){return X("Query.endBefore",0,2,arguments.length),new Ct(this.database,Dn(this._delegate,XU(e,t)))}equalTo(e,t){return X("Query.equalTo",1,2,arguments.length),new Ct(this.database,Dn(this._delegate,pq(e,t)))}toString(){return X("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return X("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(X("Query.isEqual",1,1,arguments.length),!(e instanceof Ct)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,s){const i={cancel:void 0,context:void 0};if(t&&s)i.cancel=t,pt(e,"cancel",i.cancel,!0),i.context=s,Y_(e,"context",i.context,!0);else if(t)if(typeof t=="object"&&t!==null)i.context=t;else if(typeof t=="function")i.cancel=t;else throw new Error(rn(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new fn(this.database,new xn(this._delegate._repo,this._delegate._path))}}class fn extends Ct{constructor(e,t){super(e,new ln(t._repo,t._path,new Td,!1)),this.database=e,this._delegate=t}getKey(){return X("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return X("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new fn(this.database,wr(this._delegate,e))}getParent(){X("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new fn(this.database,e):null}getRoot(){return X("Reference.root",0,0,arguments.length),new fn(this.database,this._delegate.root)}set(e,t){X("Reference.set",1,2,arguments.length),pt("Reference.set","onComplete",t,!0);const s=T_(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}update(e,t){if(X("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,XS("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Sn("Reference.update",this._delegate._path),pt("Reference.update","onComplete",t,!0);const s=HU(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){X("Reference.setWithPriority",2,3,arguments.length),pt("Reference.setWithPriority","onComplete",s,!0);const i=zU(this._delegate,e,t);return s&&i.then(()=>s(null),r=>s(r)),i}remove(e){X("Reference.remove",0,1,arguments.length),pt("Reference.remove","onComplete",e,!0);const t=jU(this._delegate);return e&&t.then(()=>e(null),s=>e(s)),t}transaction(e,t,s){X("Reference.transaction",1,3,arguments.length),pt("Reference.transaction","transactionUpdate",e,!1),pt("Reference.transaction","onComplete",t,!0),Lq("Reference.transaction","applyLocally",s,!0);const i=Rq(this._delegate,e,{applyLocally:s}).then(r=>new Uq(r.committed,new ni(this.database,r.snapshot)));return t&&i.then(r=>t(null,r.committed,r.snapshot),r=>t(r,!1,null)),i}setPriority(e,t){X("Reference.setPriority",1,2,arguments.length),pt("Reference.setPriority","onComplete",t,!0);const s=GU(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}push(e,t){X("Reference.push",0,2,arguments.length),pt("Reference.push","onComplete",t,!0);const s=$U(this._delegate,e),i=s.then(o=>new fn(this.database,o));t&&i.then(()=>t(null),o=>t(o));const r=new fn(this.database,s);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return Sn("Reference.onDisconnect",this._delegate._path),new Vq(new WU(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class xc{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:Tq,forceLongPolling:Iq}}useEmulator(e,t,s={}){bq(this._delegate,e,t,s)}ref(e){if(X("database.ref",0,1,arguments.length),e instanceof fn){const t=Tw(this._delegate,e.toString());return new fn(this,t)}else{const t=zS(this._delegate,e);return new fn(this,t)}}refFromURL(e){X("database.refFromURL",1,1,arguments.length);const s=Tw(this._delegate,e);return new fn(this,s)}goOffline(){return X("database.goOffline",0,0,arguments.length),Eq(this._delegate)}goOnline(){return X("database.goOnline",0,0,arguments.length),Sq(this._delegate)}}xc.ServerValue={TIMESTAMP:Nq(),increment:n=>xq(n)};/**
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
 */function qq({app:n,url:e,version:t,customAuthImpl:s,namespace:i,nodeAdmin:r=!1}){O0(t);const o=new sT("auth-internal",new iT("database-standalone"));return o.setComponent(new gn("auth-internal",()=>s,"PRIVATE")),{instance:new xc(QS(n,o,void 0,e,r),n),namespace:i}}var Bq=Object.freeze({__proto__:null,initStandalone:qq});/**
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
 */const Wq=xc.ServerValue;function $q(n){n.INTERNAL.registerComponent(new gn("database-compat",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new xc(i,s)},"PUBLIC").setServiceProps({Reference:fn,Query:Ct,Database:xc,DataSnapshot:ni,enableLogging:Cq,INTERNAL:Bq,ServerValue:Wq}).setMultipleInstances(!0)),n.registerVersion(Oq,Pq)}$q(Ht);const JS="14.7.77",kw=(n,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:n}),Aw=(n,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:n}),Up=(n,e)=>({startTime:e,type:"setValue",value:n}),ZS=(n,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:n}),eC=(n,e,{startTime:t,target:s,timeConstant:i})=>s+(e-s)*Math.exp((t-n)/i),to=n=>n.type==="exponentialRampToValue",nh=n=>n.type==="linearRampToValue",Gs=n=>to(n)||nh(n),I_=n=>n.type==="setValue",ps=n=>n.type==="setValueCurve",sh=(n,e,t,s)=>{const i=n[e];return i===void 0?s:Gs(i)||I_(i)?i.value:ps(i)?i.values[i.values.length-1]:eC(t,sh(n,e-1,i.startTime,s),i)},Nw=(n,e,t,s,i)=>t===void 0?[s.insertTime,i]:Gs(t)?[t.endTime,t.value]:I_(t)?[t.startTime,t.value]:ps(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,sh(n,e-1,t.startTime,i)],qp=n=>n.type==="cancelAndHold",Bp=n=>n.type==="cancelScheduledValues",js=n=>qp(n)||Bp(n)?n.cancelTime:to(n)||nh(n)?n.endTime:n.startTime,xw=(n,e,t,{endTime:s,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((n-e)/(s-e)):0,Dw=(n,e,t,{endTime:s,value:i})=>t+(n-e)/(s-e)*(i-t),jq=(n,e)=>{const t=Math.floor(e),s=Math.ceil(e);return t===s?n[t]:(1-(e-t))*n[t]+(1-(s-e))*n[s]},Gq=(n,{duration:e,startTime:t,values:s})=>{const i=(n-t)/e*(s.length-1);return jq(s,i)},Xl=n=>n.type==="setTarget";class zq{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=js(e);if(qp(e)||Bp(e)){const s=this._automationEvents.findIndex(r=>Bp(e)&&ps(r)?r.startTime+r.duration>=t:js(r)>=t),i=this._automationEvents[s];if(s!==-1&&(this._automationEvents=this._automationEvents.slice(0,s)),qp(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&Gs(i)){if(Xl(r))throw new Error("The internal list is malformed.");const o=ps(r)?r.startTime+r.duration:js(r),a=ps(r)?r.values[r.values.length-1]:r.value,c=to(i)?xw(t,o,a,i):Dw(t,o,a,i),l=to(i)?kw(c,t,this._currenTime):Aw(c,t,this._currenTime);this._automationEvents.push(l)}r!==void 0&&Xl(r)&&this._automationEvents.push(Up(this.getValue(t),t)),r!==void 0&&ps(r)&&r.startTime+r.duration>t&&(this._automationEvents[this._automationEvents.length-1]=ZS(new Float32Array([6,7]),r.startTime,t-r.startTime))}}else{const s=this._automationEvents.findIndex(o=>js(o)>t),i=s===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[s-1];if(i!==void 0&&ps(i)&&js(i)+i.duration>t)return!1;const r=to(e)?kw(e.value,e.endTime,this._currenTime):nh(e)?Aw(e.value,t,this._currenTime):e;if(s===-1)this._automationEvents.push(r);else{if(ps(e)&&t+e.duration>js(this._automationEvents[s]))return!1;this._automationEvents.splice(s,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(s=>js(s)>e);if(t>1){const s=this._automationEvents.slice(t-1),i=s[0];Xl(i)&&s.unshift(Up(sh(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=s}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>js(o)>e),s=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&Xl(r)&&(s===void 0||!Gs(s)||s.insertTime>e))return eC(e,sh(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&I_(r)&&(s===void 0||!Gs(s)))return r.value;if(r!==void 0&&ps(r)&&(s===void 0||!Gs(s)||r.startTime+r.duration>e))return e<r.startTime+r.duration?Gq(e,r):r.values[r.values.length-1];if(r!==void 0&&Gs(r)&&(s===void 0||!Gs(s)))return r.value;if(s!==void 0&&to(s)){const[o,a]=Nw(this._automationEvents,i,r,s,this._defaultValue);return xw(e,o,a,s)}if(s!==void 0&&nh(s)){const[o,a]=Nw(this._automationEvents,i,r,s,this._defaultValue);return Dw(e,o,a,s)}return this._defaultValue}}const Hq=n=>({cancelTime:n,type:"cancelAndHold"}),Kq=n=>({cancelTime:n,type:"cancelScheduledValues"}),Qq=(n,e)=>({endTime:e,type:"exponentialRampToValue",value:n}),Yq=(n,e)=>({endTime:e,type:"linearRampToValue",value:n}),Xq=(n,e,t)=>({startTime:e,target:n,timeConstant:t,type:"setTarget"}),Jq=()=>new DOMException("","AbortError"),Zq=n=>(e,t,[s,i,r],o)=>{n(e[i],[t,s,r],a=>a[0]===t&&a[1]===s,o)},eB=n=>(e,t,s)=>{const i=[];for(let r=0;r<s.numberOfInputs;r+=1)i.push(new Set);n.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},tB=n=>(e,t)=>{n.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},Po=new WeakSet,tC=new WeakMap,b_=new WeakMap,nC=new WeakMap,E_=new WeakMap,Ud=new WeakMap,sC=new WeakMap,Wp=new WeakMap,$p=new WeakMap,jp=new WeakMap,iC={construct(){return iC}},nB=n=>{try{const e=new Proxy(n,iC);new e}catch{return!1}return!0},Rw=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Ow=(n,e)=>{const t=[];let s=n.replace(/^[\s]+/,""),i=s.match(Rw);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),s=s.slice(i[0].length).replace(/^[\s]+/,""),i=s.match(Rw)}return[t.join(";"),s]},Pw=n=>{if(n!==void 0&&!Array.isArray(n))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Mw=n=>{if(!nB(n))throw new TypeError("The given value for processorCtor should be a constructor.");if(n.prototype===null||typeof n.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},sB=(n,e,t,s,i,r,o,a,c,l,u,h,d)=>{let f=0;return(p,m,g={credentials:"omit"})=>{const y=u.get(p);if(y!==void 0&&y.has(m))return Promise.resolve();const w=l.get(p);if(w!==void 0){const _=w.get(m);if(_!==void 0)return _}const S=r(p),C=S.audioWorklet===void 0?i(m).then(([_,v])=>{const[I,b]=Ow(_,v),P=`${I};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${b}
})})(window,'_AWGS')`;return t(P)}).then(()=>{const _=d._AWGS.pop();if(_===void 0)throw new SyntaxError;s(S.currentTime,S.sampleRate,()=>_(class{},void 0,(v,I)=>{if(v.trim()==="")throw e();const b=$p.get(S);if(b!==void 0){if(b.has(v))throw e();Mw(I),Pw(I.parameterDescriptors),b.set(v,I)}else Mw(I),Pw(I.parameterDescriptors),$p.set(S,new Map([[v,I]]))},S.sampleRate,void 0,void 0))}):Promise.all([i(m),Promise.resolve(n(h,h))]).then(([[_,v],I])=>{const b=f+1;f=b;const[P,x]=Ow(_,v),V=`${P};((AudioWorkletProcessor,registerProcessor)=>{${x}
})(${I?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${I?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${I?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${b}',class extends AudioWorkletProcessor{process(){return !1}})`,J=new Blob([V],{type:"application/javascript; charset=utf-8"}),$=URL.createObjectURL(J);return S.audioWorklet.addModule($,g).then(()=>{if(a(S))return S;const z=o(S);return z.audioWorklet.addModule($,g).then(()=>z)}).then(z=>{if(c===null)throw new SyntaxError;try{new c(z,`__sac${b}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL($))});return w===void 0?l.set(p,new Map([[m,C]])):w.set(m,C),C.then(()=>{const _=u.get(p);_===void 0?u.set(p,new Set([m])):_.add(m)}).finally(()=>{const _=l.get(p);_!==void 0&&_.delete(m)}),C}},qn=(n,e)=>{const t=n.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},qd=(n,e)=>{const t=Array.from(n).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[s]=t;return n.delete(s),s},rC=(n,e,t,s)=>{const i=qn(n,e),r=qd(i,o=>o[0]===t&&o[1]===s);return i.size===0&&n.delete(e),r},Nl=n=>qn(sC,n),Mo=n=>{if(Po.has(n))throw new Error("The AudioNode is already stored.");Po.add(n),Nl(n).forEach(e=>e(!0))},oC=n=>"port"in n,xl=n=>{if(!Po.has(n))throw new Error("The AudioNode is not stored.");Po.delete(n),Nl(n).forEach(e=>e(!1))},Gp=(n,e)=>{!oC(n)&&e.every(t=>t.size===0)&&xl(n)},iB=(n,e,t,s,i,r,o,a,c,l,u,h,d)=>{const f=new WeakMap;return(p,m,g,y,w)=>{const{activeInputs:S,passiveInputs:C}=r(m),{outputs:_}=r(p),v=a(p),I=b=>{const P=c(m),x=c(p);if(b){const D=rC(C,p,g,y);n(S,p,D,!1),!w&&!h(p)&&t(x,P,g,y),d(m)&&Mo(m)}else{const D=s(S,p,g,y);e(C,y,D,!1),!w&&!h(p)&&i(x,P,g,y);const k=o(m);if(k===0)u(m)&&Gp(m,S);else{const W=f.get(m);W!==void 0&&clearTimeout(W),f.set(m,setTimeout(()=>{u(m)&&Gp(m,S)},k*1e3))}}};return l(_,[m,g,y],b=>b[0]===m&&b[1]===g&&b[2]===y,!0)?(v.add(I),u(p)?n(S,p,[g,y,I],!0):e(C,y,[p,g,I],!0),!0):!1}},rB=n=>(e,t,[s,i,r],o)=>{const a=e.get(s);a===void 0?e.set(s,new Set([[i,t,r]])):n(a,[i,t,r],c=>c[0]===i&&c[1]===t,o)},oB=n=>(e,t)=>{const s=n(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(s).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(s),s.disconnect()};t.addEventListener("ended",i)},aB=n=>(e,t)=>{n(e).add(t)},cB={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},lB=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),u={...cB,...c},h=s(l,u),d=r(l)?e():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},Ut=(n,e)=>n.context===e,uB=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Ut(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},ih=n=>{try{n.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},us=()=>new DOMException("","IndexSizeError"),S_=n=>{n.getChannelData=(e=>t=>{try{return e.call(n,t)}catch(s){throw s.code===12?us():s}})(n.getChannelData)},hB={numberOfChannels:1},dB=(n,e,t,s,i,r,o,a)=>{let c=null;return class aC{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:f}={...hB,...u};c===null&&(c=new i(1,1,44100));const p=s!==null&&e(r,r)?new s({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(p.numberOfChannels===0)throw t();return typeof p.copyFromChannel!="function"?(o(p),S_(p)):e(ih,()=>ih(p))||a(p),n.add(p),p}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===aC.prototype||n.has(u)}}},Jt=-34028234663852886e22,Wt=-Jt,bs=n=>Po.has(n),fB={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},pB=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,u){const h=r(l),d={...fB,...u},f=i(h,d),p=o(h),m=p?e():null;super(l,!1,f,m),this._audioBufferSourceNodeRenderer=m,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,p,f.playbackRate,Wt,Jt)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw s();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){Mo(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),bs(this)&&xl(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},mB=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Ut(h,u);if(!d){const f={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,f),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await n(u,l.playbackRate,h.playbackRate):await s(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},gB=n=>"playbackRate"in n,_B=n=>"frequency"in n&&"gain"in n,yB=n=>"offset"in n,vB=n=>!("frequency"in n)&&"gain"in n,wB=n=>"detune"in n&&"frequency"in n,TB=n=>"pan"in n,Gt=n=>qn(tC,n),Dl=n=>qn(nC,n),zp=(n,e)=>{const{activeInputs:t}=Gt(n);t.forEach(i=>i.forEach(([r])=>{e.includes(n)||zp(r,[...e,n])}));const s=gB(n)?[n.playbackRate]:oC(n)?Array.from(n.parameters.values()):_B(n)?[n.Q,n.detune,n.frequency,n.gain]:yB(n)?[n.offset]:vB(n)?[n.gain]:wB(n)?[n.detune,n.frequency]:TB(n)?[n.pan]:[];for(const i of s){const r=Dl(i);r!==void 0&&r.activeInputs.forEach(([o])=>zp(o,e))}bs(n)&&xl(n)},cC=n=>{zp(n.destination,[])},IB=n=>n===void 0||typeof n=="number"||typeof n=="string"&&(n==="balanced"||n==="interactive"||n==="playback"),bB=(n,e,t,s,i,r,o,a,c)=>class extends n{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(p){throw p.code===12&&p.message==="sampleRate is not in range"?t():p}if(h===null)throw s();if(!IB(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const p=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",p)};h.addEventListener("statechange",p)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),cC(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},EB=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,u){const h=r(l),d=o(h),f=i(h,u,d),p=d?e(a):null;super(l,!1,f,p),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw s();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw s();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},SB=n=>{const e=new WeakMap,t=async(s,i)=>{const r=i.destination;return e.set(i,r),await n(s,i,r),r};return{render(s,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(s,i)}}},CB=(n,e,t,s,i,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const _=new Float32Array(1),v=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),I=o(l);let b=!1,P=[0,0,-1,0,1,0],x=[0,0,0];const D=()=>{if(b)return;b=!0;const J=s(l,256,9,0);J.onaudioprocess=({inputBuffer:$})=>{const z=[r($,_,0),r($,_,1),r($,_,2),r($,_,3),r($,_,4),r($,_,5)];z.some((Y,oe)=>Y!==P[oe])&&(u.setOrientation(...z),P=z);const le=[r($,_,6),r($,_,7),r($,_,8)];le.some((Y,oe)=>Y!==x[oe])&&(u.setPosition(...le),x=le)},v.connect(J)},k=J=>$=>{$!==P[J]&&(P[J]=$,u.setOrientation(...P))},W=J=>$=>{$!==x[J]&&(x[J]=$,u.setPosition(...x))},V=(J,$,z)=>{const le=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:$});le.connect(v,0,J),le.start(),Object.defineProperty(le.offset,"defaultValue",{get(){return $}});const Y=n({context:c},I,le.offset,Wt,Jt);return a(Y,"value",oe=>()=>oe.call(Y),oe=>te=>{try{oe.call(Y,te)}catch(Ie){if(Ie.code!==9)throw Ie}D(),I&&z(te)}),Y.cancelAndHoldAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.cancelAndHoldAtTime),Y.cancelScheduledValues=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.cancelScheduledValues),Y.exponentialRampToValueAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.exponentialRampToValueAtTime),Y.linearRampToValueAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.linearRampToValueAtTime),Y.setTargetAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.setTargetAtTime),Y.setValueAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.setValueAtTime),Y.setValueCurveAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.setValueCurveAtTime),Y};return{forwardX:V(0,0,k(0)),forwardY:V(1,0,k(1)),forwardZ:V(2,-1,k(2)),positionX:V(6,0,W(0)),positionY:V(7,0,W(1)),positionZ:V(8,0,W(2)),upX:V(3,0,k(3)),upY:V(4,1,k(4)),upZ:V(5,0,k(5))}},{forwardX:d,forwardY:f,forwardZ:p,positionX:m,positionY:g,positionZ:y,upX:w,upY:S,upZ:C}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return p},get positionX(){return m},get positionY(){return g},get positionZ(){return y},get upX(){return w},get upY(){return S},get upZ(){return C}}},rh=n=>"context"in n,Rl=n=>rh(n[0]),qr=(n,e,t,s)=>{for(const i of n)if(t(i)){if(s)return!1;throw Error("The set contains at least one similar element.")}return n.add(e),!0},Lw=(n,e,[t,s],i)=>{qr(n,[e,t,s],r=>r[0]===e&&r[1]===t,i)},Fw=(n,[e,t,s],i)=>{const r=n.get(e);r===void 0?n.set(e,new Set([[t,s]])):qr(r,[t,s],o=>o[0]===t,i)},ia=n=>"inputs"in n,oh=(n,e,t,s)=>{if(ia(e)){const i=e.inputs[s];return n.connect(i,t,0),[i,t,0]}return n.connect(e,t,s),[e,t,s]},lC=(n,e,t)=>{for(const s of n)if(s[0]===e&&s[1]===t)return n.delete(s),s;return null},kB=(n,e,t)=>qd(n,s=>s[0]===e&&s[1]===t),uC=(n,e)=>{if(!Nl(n).delete(e))throw new Error("Missing the expected event listener.")},hC=(n,e,t)=>{const s=qn(n,e),i=qd(s,r=>r[0]===t);return s.size===0&&n.delete(e),i},ah=(n,e,t,s)=>{ia(e)?n.disconnect(e.inputs[s],t,0):n.disconnect(e,t,s)},Oe=n=>qn(b_,n),Dc=n=>qn(E_,n),Tr=n=>Wp.has(n),hu=n=>!Po.has(n),Vw=(n,e)=>new Promise(t=>{if(e!==null)t(!0);else{const s=n.createScriptProcessor(256,1,1),i=n.createGain(),r=n.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=n.createBufferSource();a.buffer=r,a.loop=!0,a.connect(s).connect(n.destination),a.connect(i),a.disconnect(i),s.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),a.stop(),s.onaudioprocess=null,a.disconnect(s),s.disconnect(n.destination)},a.start()}}),Cf=(n,e)=>{const t=new Map;for(const s of n)for(const i of s){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((s,i)=>e(i,s))},ch=n=>"context"in n,AB=n=>{const e=new Map;n.connect=(t=>(s,i=0,r=0)=>{const o=ch(s)?t(s,i,r):t(s,i),a=e.get(s);return a===void 0?e.set(s,[{input:r,output:i}]):a.every(c=>c.input!==r||c.output!==i)&&a.push({input:r,output:i}),o})(n.connect.bind(n)),n.disconnect=(t=>(s,i,r)=>{if(t.apply(n),s===void 0)e.clear();else if(typeof s=="number")for(const[o,a]of e){const c=a.filter(l=>l.output!==s);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(s))if(i===void 0)e.delete(s);else{const o=e.get(s);if(o!==void 0){const a=o.filter(c=>c.output!==i&&(c.input!==r||r===void 0));a.length===0?e.delete(s):e.set(s,a)}}for(const[o,a]of e)a.forEach(c=>{ch(o)?n.connect(o,c.output,c.input):n.connect(o,c.output)})})(n.disconnect)},NB=(n,e,t,s)=>{const{activeInputs:i,passiveInputs:r}=Dl(e),{outputs:o}=Gt(n),a=Nl(n),c=l=>{const u=Oe(n),h=Dc(e);if(l){const d=hC(r,n,t);Lw(i,n,d,!1),!s&&!Tr(n)&&u.connect(h,t)}else{const d=kB(i,n,t);Fw(r,d,!1),!s&&!Tr(n)&&u.disconnect(h,t)}};return qr(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),bs(n)?Lw(i,n,[t,c],!0):Fw(r,[n,t,c],!0),!0):!1},xB=(n,e,t,s)=>{const{activeInputs:i,passiveInputs:r}=Gt(e),o=lC(i[s],n,t);return o===null?[rC(r,n,t,s)[2],!1]:[o[2],!0]},DB=(n,e,t)=>{const{activeInputs:s,passiveInputs:i}=Dl(e),r=lC(s,n,t);return r===null?[hC(i,n,t)[1],!1]:[r[2],!0]},C_=(n,e,t,s,i)=>{const[r,o]=xB(n,t,s,i);if(r!==null&&(uC(n,r),o&&!e&&!Tr(n)&&ah(Oe(n),Oe(t),s,i)),bs(t)){const{activeInputs:a}=Gt(t);Gp(t,a)}},k_=(n,e,t,s)=>{const[i,r]=DB(n,t,s);i!==null&&(uC(n,i),r&&!e&&!Tr(n)&&Oe(n).disconnect(Dc(t),s))},RB=(n,e)=>{const t=Gt(n),s=[];for(const i of t.outputs)Rl(i)?C_(n,e,...i):k_(n,e,...i),s.push(i[0]);return t.outputs.clear(),s},OB=(n,e,t)=>{const s=Gt(n),i=[];for(const r of s.outputs)r[1]===t&&(Rl(r)?C_(n,e,...r):k_(n,e,...r),i.push(r[0]),s.outputs.delete(r));return i},PB=(n,e,t,s,i)=>{const r=Gt(n);return Array.from(r.outputs).filter(o=>o[0]===t&&(s===void 0||o[1]===s)&&(i===void 0||o[2]===i)).map(o=>(Rl(o)?C_(n,e,...o):k_(n,e,...o),r.outputs.delete(o),o[0]))},MB=(n,e,t,s,i,r,o,a,c,l,u,h,d,f,p,m)=>class extends l{constructor(y,w,S,C){super(S),this._context=y,this._nativeAudioNode=S;const _=u(y);h(_)&&t(Vw,()=>Vw(_,m))!==!0&&AB(S),b_.set(this,S),sC.set(this,new Set),y.state!=="closed"&&w&&Mo(this),n(this,C,S)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(y){this._nativeAudioNode.channelCount=y}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(y){this._nativeAudioNode.channelCountMode=y}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(y){this._nativeAudioNode.channelInterpretation=y}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(y,w=0,S=0){if(w<0||w>=this._nativeAudioNode.numberOfOutputs)throw i();const C=u(this._context),_=p(C);if(d(y)||f(y))throw r();if(rh(y)){const b=Oe(y);try{const x=oh(this._nativeAudioNode,b,w,S),D=hu(this);(_||D)&&this._nativeAudioNode.disconnect(...x),this.context.state!=="closed"&&!D&&hu(y)&&Mo(y)}catch(x){throw x.code===12?r():x}if(e(this,y,w,S,_)){const x=c([this],y);Cf(x,s(_))}return y}const v=Dc(y);if(v.name==="playbackRate"&&v.maxValue===1024)throw o();try{this._nativeAudioNode.connect(v,w),(_||hu(this))&&this._nativeAudioNode.disconnect(v,w)}catch(b){throw b.code===12?r():b}if(NB(this,y,w,_)){const b=c([this],y);Cf(b,s(_))}}disconnect(y,w,S){let C;const _=u(this._context),v=p(_);if(y===void 0)C=RB(this,v);else if(typeof y=="number"){if(y<0||y>=this.numberOfOutputs)throw i();C=OB(this,v,y)}else{if(w!==void 0&&(w<0||w>=this.numberOfOutputs)||rh(y)&&S!==void 0&&(S<0||S>=y.numberOfInputs))throw i();if(C=PB(this,v,y,w,S),C.length===0)throw r()}for(const I of C){const b=c([this],I);Cf(b,a)}}},LB=(n,e,t,s,i,r,o,a,c,l,u,h,d)=>(f,p,m,g=null,y=null)=>{const w=new zq(m.defaultValue),S=p?s(w):null,C={get defaultValue(){return m.defaultValue},get maxValue(){return g===null?m.maxValue:g},get minValue(){return y===null?m.minValue:y},get value(){return m.value},set value(_){m.value=_,C.setValueAtTime(_,f.context.currentTime)},cancelAndHoldAtTime(_){if(typeof m.cancelAndHoldAtTime=="function")S===null&&w.flush(f.context.currentTime),w.add(i(_)),m.cancelAndHoldAtTime(_);else{const v=Array.from(w).pop();S===null&&w.flush(f.context.currentTime),w.add(i(_));const I=Array.from(w).pop();m.cancelScheduledValues(_),v!==I&&I!==void 0&&(I.type==="exponentialRampToValue"?m.exponentialRampToValueAtTime(I.value,I.endTime):I.type==="linearRampToValue"?m.linearRampToValueAtTime(I.value,I.endTime):I.type==="setValue"?m.setValueAtTime(I.value,I.startTime):I.type==="setValueCurve"&&m.setValueCurveAtTime(I.values,I.startTime,I.duration))}return C},cancelScheduledValues(_){return S===null&&w.flush(f.context.currentTime),w.add(r(_)),m.cancelScheduledValues(_),C},exponentialRampToValueAtTime(_,v){if(_===0)throw new RangeError;if(!Number.isFinite(v)||v<0)throw new RangeError;return S===null&&w.flush(f.context.currentTime),w.add(o(_,v)),m.exponentialRampToValueAtTime(_,v),C},linearRampToValueAtTime(_,v){return S===null&&w.flush(f.context.currentTime),w.add(a(_,v)),m.linearRampToValueAtTime(_,v),C},setTargetAtTime(_,v,I){return S===null&&w.flush(f.context.currentTime),w.add(c(_,v,I)),m.setTargetAtTime(_,v,I),C},setValueAtTime(_,v){return S===null&&w.flush(f.context.currentTime),w.add(l(_,v)),m.setValueAtTime(_,v),C},setValueCurveAtTime(_,v,I){const b=_ instanceof Float32Array?_:new Float32Array(_);if(h!==null&&h.name==="webkitAudioContext"){const P=v+I,x=f.context.sampleRate,D=Math.ceil(v*x),k=Math.floor(P*x),W=k-D,V=new Float32Array(W);for(let $=0;$<W;$+=1){const z=(b.length-1)/I*((D+$)/x-v),le=Math.floor(z),Y=Math.ceil(z);V[$]=le===Y?b[le]:(1-(z-le))*b[le]+(1-(Y-z))*b[Y]}S===null&&w.flush(f.context.currentTime),w.add(u(V,v,I)),m.setValueCurveAtTime(V,v,I);const J=k/x;J<P&&d(C,V[V.length-1],J),d(C,b[b.length-1],P)}else S===null&&w.flush(f.context.currentTime),w.add(u(b,v,I)),m.setValueCurveAtTime(b,v,I);return C}};return t.set(C,m),e.set(C,f),n(C,S),C},FB=n=>({replay(e){for(const t of n)if(t.type==="exponentialRampToValue"){const{endTime:s,value:i}=t;e.exponentialRampToValueAtTime(i,s)}else if(t.type==="linearRampToValue"){const{endTime:s,value:i}=t;e.linearRampToValueAtTime(i,s)}else if(t.type==="setTarget"){const{startTime:s,target:i,timeConstant:r}=t;e.setTargetAtTime(i,s,r)}else if(t.type==="setValue"){const{startTime:s,value:i}=t;e.setValueAtTime(i,s)}else if(t.type==="setValueCurve"){const{duration:s,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,s)}else throw new Error("Can't apply an unknown automation.")}});class dC{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((s,i)=>e.call(t,s,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const VB={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},UB=(n,e,t,s,i,r,o,a,c,l,u,h,d,f)=>class extends e{constructor(m,g,y){var w;const S=a(m),C=c(S),_=u({...VB,...y});d(_);const v=$p.get(S),I=v==null?void 0:v.get(g),b=C||S.state!=="closed"?S:(w=o(S))!==null&&w!==void 0?w:S,P=i(b,C?null:m.baseLatency,l,g,I,_),x=C?s(g,_,I):null;super(m,!0,P,x);const D=[];P.parameters.forEach((W,V)=>{const J=t(this,C,W);D.push([V,J])}),this._nativeAudioWorkletNode=P,this._onprocessorerror=null,this._parameters=new dC(D),C&&n(S,this);const{activeInputs:k}=r(this);h(P,k)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(m){const g=typeof m=="function"?f(this,m):null;this._nativeAudioWorkletNode.onprocessorerror=g;const y=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=y!==null&&y===g?m:y}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function lh(n,e,t,s,i){if(typeof n.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),n.copyFromChannel(e[t],s,i);else{const r=n.getChannelData(s);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const fC=(n,e,t,s,i)=>{typeof n.copyToChannel=="function"?e[t].byteLength!==0&&n.copyToChannel(e[t],s,i):e[t].byteLength!==0&&n.getChannelData(s).set(e[t],i)},uh=(n,e)=>{const t=[];for(let s=0;s<n;s+=1){const i=[],r=typeof e=="number"?e:e[s];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},qB=(n,e)=>{const t=qn(jp,n),s=Oe(e);return qn(t,s)},BB=async(n,e,t,s,i,r,o)=>{const a=e===null?Math.ceil(n.context.length/128)*128:e.length,c=s.channelCount*s.numberOfInputs,l=i.reduce((g,y)=>g+y,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=Gt(n),d=await qB(t,n),f=uh(s.numberOfInputs,s.channelCount),p=uh(s.numberOfOutputs,i),m=Array.from(n.parameters.keys()).reduce((g,y)=>({...g,[y]:new Float32Array(128)}),{});for(let g=0;g<a;g+=128){if(s.numberOfInputs>0&&e!==null)for(let y=0;y<s.numberOfInputs;y+=1)for(let w=0;w<s.channelCount;w+=1)lh(e,f[y],w,w,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:y},w)=>{lh(e,m,y,c+w,g)});for(let y=0;y<s.numberOfInputs;y+=1)for(let w=0;w<i[y];w+=1)p[y][w].byteLength===0&&(p[y][w]=new Float32Array(128));try{const y=f.map((S,C)=>h.activeInputs[C].size===0?[]:S),w=o(g/t.sampleRate,t.sampleRate,()=>d.process(y,p,m));if(u!==null)for(let S=0,C=0;S<s.numberOfOutputs;S+=1){for(let _=0;_<i[S];_+=1)fC(u,p[S],_,C+_,g);C+=i[S]}if(!w)break}catch(y){n.dispatchEvent(new ErrorEvent("processorerror",{colno:y.colno,filename:y.filename,lineno:y.lineno,message:y.message}));break}}return u},WB=(n,e,t,s,i,r,o,a,c,l,u,h,d,f,p,m)=>(g,y,w)=>{const S=new WeakMap;let C=null;const _=async(v,I)=>{let b=u(v),P=null;const x=Ut(b,I),D=Array.isArray(y.outputChannelCount)?y.outputChannelCount:Array.from(y.outputChannelCount);if(h===null){const k=D.reduce(($,z)=>$+z,0),W=i(I,{channelCount:Math.max(1,k),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,k)}),V=[];for(let $=0;$<v.numberOfOutputs;$+=1)V.push(s(I,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:D[$]}));const J=o(I,{channelCount:y.channelCount,channelCountMode:y.channelCountMode,channelInterpretation:y.channelInterpretation,gain:1});J.connect=e.bind(null,V),J.disconnect=c.bind(null,V),P=[W,V,J]}else x||(b=new h(I,g));if(S.set(I,P===null?b:P[2]),P!==null){if(C===null){if(w===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const z=v.channelCount*v.numberOfInputs,le=w.parameterDescriptors===void 0?0:w.parameterDescriptors.length,Y=z+le;C=BB(v,Y===0?null:await(async()=>{const te=new d(Y,Math.ceil(v.context.length/128)*128,I.sampleRate),Ie=[],un=[];for(let Pe=0;Pe<y.numberOfInputs;Pe+=1)Ie.push(o(te,{channelCount:y.channelCount,channelCountMode:y.channelCountMode,channelInterpretation:y.channelInterpretation,gain:1})),un.push(i(te,{channelCount:y.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:y.channelCount}));const hn=await Promise.all(Array.from(v.parameters.values()).map(async Pe=>{const qt=r(te,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:Pe.value});return await f(te,Pe,qt.offset),qt})),he=s(te,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,z+le)});for(let Pe=0;Pe<y.numberOfInputs;Pe+=1){Ie[Pe].connect(un[Pe]);for(let qt=0;qt<y.channelCount;qt+=1)un[Pe].connect(he,qt,Pe*y.channelCount+qt)}for(const[Pe,qt]of hn.entries())qt.connect(he,0,z+Pe),qt.start(0);return he.connect(te.destination),await Promise.all(Ie.map(Pe=>p(v,te,Pe))),m(te)})(),I,y,D,w,l)}const k=await C,W=t(I,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[V,J,$]=P;k!==null&&(W.buffer=k,W.start(0)),W.connect(V);for(let z=0,le=0;z<v.numberOfOutputs;z+=1){const Y=J[z];for(let oe=0;oe<D[z];oe+=1)V.connect(Y,le+oe,oe);le+=D[z]}return $}if(x)for(const[k,W]of v.parameters.entries())await n(I,W,b.parameters.get(k));else for(const[k,W]of v.parameters.entries())await f(I,W,b.parameters.get(k));return await p(v,I,b),b};return{render(v,I){a(I,v);const b=S.get(I);return b!==void 0?Promise.resolve(b):_(v,I)}}},$B=(n,e,t,s,i,r,o,a,c,l,u,h,d,f,p,m,g,y,w,S)=>class extends p{constructor(_,v){super(_,v),this._nativeContext=_,this._audioWorklet=n===void 0?void 0:{addModule:(I,b)=>n(this,I,b)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(_,v,I){return new t({length:v,numberOfChannels:_,sampleRate:I})}createBufferSource(){return new s(this)}createChannelMerger(_=6){return new r(this,{numberOfInputs:_})}createChannelSplitter(_=6){return new o(this,{numberOfOutputs:_})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(_=1){return new u(this,{maxDelayTime:_})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(_,v){return new f(this,{feedback:v,feedforward:_})}createOscillator(){return new m(this)}createPanner(){return new g(this)}createPeriodicWave(_,v,I={disableNormalization:!1}){return new y(this,{...I,imag:v,real:_})}createStereoPanner(){return new w(this)}createWaveShaper(){return new S(this)}decodeAudioData(_,v,I){return l(this._nativeContext,_).then(b=>(typeof v=="function"&&v(b),b),b=>{throw typeof I=="function"&&I(b),b})}},jB={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},GB=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,u){const h=r(l),d={...jB,...u},f=i(h,d),p=o(h),m=p?t():null;super(l,!1,f,m),this._Q=e(this,p,f.Q,Wt,Jt),this._detune=e(this,p,f.detune,1200*Math.log2(Wt),-1200*Math.log2(Wt)),this._frequency=e(this,p,f.frequency,l.sampleRate/2,0),this._gain=e(this,p,f.gain,40*Math.log10(Wt),Jt),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?s():d}if(l.length!==u.length||u.length!==h.length)throw s()}},zB=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Ut(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)):(await s(c,a.Q,l.Q),await s(c,a.detune,l.detune),await s(c,a.frequency,l.frequency),await s(c,a.gain,l.gain)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},HB=(n,e)=>(t,s)=>{const i=e.get(t);if(i!==void 0)return i;const r=n.get(t);if(r!==void 0)return r;try{const o=s();return o instanceof Promise?(n.set(t,o),o.catch(()=>!1).then(a=>(n.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},KB={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},QB=(n,e,t,s,i)=>class extends n{constructor(o,a){const c=s(o),l={...KB,...a},u=t(c,l),h=i(c)?e():null;super(o,!1,u,h)}},YB=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Ut(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},XB={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},JB=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),u=r({...XB,...c}),h=t(l,u),d=i(l)?e():null;super(a,!1,h,d)}},ZB=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Ut(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},eW=n=>(e,t,s)=>n(t,e,s),tW=n=>(e,t,s=0,i=0)=>{const r=e[s];if(r===void 0)throw n();return ch(t)?r.connect(t,0,i):r.connect(t,0)},nW=n=>(e,t)=>{const s=n(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return s.buffer=i,s.loop=!0,s.connect(t),s.start(),()=>{s.stop(),s.disconnect(t)}},sW={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},iW=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...sW,...l},d=s(u,h),f=r(u),p=f?t():null;super(c,!1,d,p),this._constantSourceNodeRenderer=p,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,Wt,Jt),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Mo(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),bs(this)&&xl(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},rW=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Ut(h,u);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,f),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await n(u,l.offset,h.offset):await s(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},oW=n=>e=>(n[0]=e,n[0]),aW={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},cW=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),u={...aW,...c},h=t(l,u),f=i(l)?e():null;super(a,!1,h,f),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},lW=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Ut(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=n(o,l)}return s.set(o,a),ia(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},uW=(n,e)=>(t,s,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,s,i)}catch(r){throw r.name==="SyntaxError"?n():r}},hW=()=>new DOMException("","DataCloneError"),Uw=n=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(s=>{const i=()=>{t.onmessage=null,e.close(),t.close(),s()};t.onmessage=()=>i();try{e.postMessage(n,[n])}catch{}finally{i()}})},dW=(n,e,t,s,i,r,o,a,c,l,u)=>(h,d)=>{const f=o(h)?h:r(h);if(i.has(d)){const p=t();return Promise.reject(p)}try{i.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(p=>(Uw(d).catch(()=>{}),e(a,()=>a(p))||u(p),n.add(p),p)):new Promise((p,m)=>{const g=async()=>{try{await Uw(d)}catch{}},y=w=>{m(w),g()};try{f.decodeAudioData(d,w=>{typeof w.copyFromChannel!="function"&&(l(w),S_(w)),n.add(w),g().then(()=>p(w))},w=>{y(w===null?s():w)})}catch(w){y(w)}})},fW=(n,e,t,s,i,r,o,a)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){const f=s(c),{outputs:p}=t(c);for(const m of p)if(Rl(m)){const g=s(m[0]);n(f,g,m[1],m[2])}else{const g=i(m[0]);f.connect(g,m[1])}}}else e.set(c,u-l)},pW={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},mW=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...pW,...l},d=s(u,h),f=r(u),p=f?t(h.maxDelayTime):null;super(c,!1,d,p),this._delayTime=e(this,f,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},gW=(n,e,t,s,i)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=t(c);const h=Ut(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return o.set(l,u),h?await n(l,c.delayTime,u.delayTime):await s(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},_W=n=>(e,t,s,i)=>n(e[i],r=>r[0]===t&&r[1]===s),yW=n=>(e,t)=>{n(e).delete(t)},vW=n=>"delayTime"in n,wW=(n,e,t)=>function s(i,r){const o=rh(r)?r:t(n,r);if(vW(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:a}=e(o);return Array.from(a).map(c=>s([...i,o],c[0])).reduce((c,l)=>c.concat(l),[])},Jl=(n,e,t)=>{const s=e[t];if(s===void 0)throw n();return s},TW=n=>(e,t=void 0,s=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?Jl(n,e,t).disconnect():ch(t)?s===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?Jl(n,e,s).disconnect(t,0):Jl(n,e,s).disconnect(t,0,i):s===void 0?e.forEach(r=>r.disconnect(t)):Jl(n,e,s).disconnect(t,0),IW={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},bW=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,u){const h=r(l),d={...IW,...u},f=s(h,d),p=o(h),m=p?t():null;super(l,!1,f,m),this._attack=e(this,p,f.attack),this._knee=e(this,p,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,p,f.ratio),this._release=e(this,p,f.release),this._threshold=e(this,p,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},EW=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Ut(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)):(await s(c,a.attack,l.attack),await s(c,a.knee,l.knee),await s(c,a.ratio,l.ratio),await s(c,a.release,l.release),await s(c,a.threshold,l.threshold)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},SW=()=>new DOMException("","EncodingError"),CW=n=>e=>new Promise((t,s)=>{if(n===null){s(new SyntaxError);return}const i=n.document.head;if(i===null)s(new SyntaxError);else{const r=n.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=n.onerror,l=()=>{n.onerror=c,URL.revokeObjectURL(a)};n.onerror=(u,h,d,f,p)=>{if(h===a||h===n.location.href&&d===1&&f===1)return l(),s(p),!1;if(c!==null)return c(u,h,d,f,p)},r.onerror=()=>{l(),s(new SyntaxError)},r.onload=()=>{l(),t()},r.src=a,r.type="module",i.appendChild(r)}}),kW=n=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,s,i){if(s!==null){let r=this._listeners.get(s);r===void 0&&(r=n(this,s),typeof s=="function"&&this._listeners.set(s,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,s,i){const r=s===null?void 0:this._listeners.get(s);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},AW=n=>(e,t,s)=>{Object.defineProperties(n,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return s()}finally{n!==null&&(delete n.currentFrame,delete n.currentTime)}},NW=n=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw n()},xW={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},DW=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),u={...xW,...c},h=s(l,u),d=r(l),f=d?t():null;super(a,!1,h,f),this._gain=e(this,d,h.gain,Wt,Jt)}get gain(){return this._gain}},RW=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Ut(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await n(c,a.gain,l.gain):await s(c,a.gain,l.gain),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},OW=(n,e)=>t=>e(n,t),PW=n=>e=>{const t=n(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},MW=n=>e=>{var t;return(t=n.get(e))!==null&&t!==void 0?t:0},LW=n=>e=>{const t=n(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},FW=n=>e=>n.get(e),vt=()=>new DOMException("","InvalidStateError"),VW=n=>e=>{const t=n.get(e);if(t===void 0)throw vt();return t},UW=(n,e)=>t=>{let s=n.get(t);if(s!==void 0)return s;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return s=new e(1,1,44100),n.set(t,s),s},qW=n=>e=>{const t=n.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Bd=()=>new DOMException("","InvalidAccessError"),BW=n=>{n.getFrequencyResponse=(e=>(t,s,i)=>{if(t.length!==s.length||s.length!==i.length)throw Bd();return e.call(n,t,s,i)})(n.getFrequencyResponse)},WW={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},$W=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),u=i(l),h={...WW,...c},d=e(l,u?null:a.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(a,!1,d,f),BW(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},pC=(n,e,t,s,i,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let f=0;f<h;f+=1){let p=t[0]*l[f];for(let m=1;m<i;m+=1){const g=d-m&c-1;p+=t[m]*r[g],p-=n[m]*o[g]}for(let m=i;m<s;m+=1)p+=t[m]*r[d-m&c-1];for(let m=i;m<e;m+=1)p-=n[m]*o[d-m&c-1];r[d]=l[f],o[d]=p,d=d+1&c-1,u[f]=p}return d},jW=(n,e,t,s)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=s instanceof Float64Array?s:new Float64Array(s),o=i.length,a=r.length,c=Math.min(o,a);if(i[0]!==1){for(let p=0;p<o;p+=1)r[p]/=i[0];for(let p=1;p<a;p+=1)i[p]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(n.numberOfChannels,n.length,n.sampleRate),f=n.numberOfChannels;for(let p=0;p<f;p+=1){const m=n.getChannelData(p),g=d.getChannelData(p);u.fill(0),h.fill(0),pC(i,o,r,a,c,u,h,0,l,m,g)}return d},GW=(n,e,t,s,i)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,f=e(u);const p=Ut(f,h);if(h.createIIRFilter===void 0?d=n(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):p||(f=h.createIIRFilter(o,r)),a.set(h,d===null?f:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await s(u,g,g.destination);const y=await i(g);return jW(y,h,r,o)})()}const m=await c;return d.buffer=m,d.start(0),d}return await s(u,h,f),f};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},zW=(n,e,t,s,i,r)=>o=>(a,c)=>{const l=n.get(a);if(l===void 0){if(!o&&r(a)){const u=s(a),{outputs:h}=t(a);for(const d of h)if(Rl(d)){const f=s(d[0]);e(u,f,d[1],d[2])}else{const f=i(d[0]);u.disconnect(f,d[1])}}n.set(a,c)}else n.set(a,l+c)},HW=(n,e)=>t=>{const s=n.get(t);return e(s)||e(t)},KW=(n,e)=>t=>n.has(t)||e(t),QW=(n,e)=>t=>n.has(t)||e(t),YW=(n,e)=>t=>{const s=n.get(t);return e(s)||e(t)},XW=n=>e=>n!==null&&e instanceof n,JW=n=>e=>n!==null&&typeof n.AudioNode=="function"&&e instanceof n.AudioNode,ZW=n=>e=>n!==null&&typeof n.AudioParam=="function"&&e instanceof n.AudioParam,e2=(n,e)=>t=>n(t)||e(t),t2=n=>e=>n!==null&&e instanceof n,n2=n=>n!==null&&n.isSecureContext,s2=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r),c=e(a,o);if(s(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},i2={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},r2=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r);if(s(a))throw new TypeError;const c={...i2,...o},l=e(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},o2=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r),c=e(a,o);if(s(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},a2=(n,e,t)=>class extends n{constructor(i,r){const o=t(i),a=e(o,r);super(i,!0,a,null)}},c2=(n,e,t,s,i,r)=>class extends t{constructor(a,c){super(a),this._nativeContext=a,Ud.set(this,a),s(a)&&i.set(a,new Set),this._destination=new n(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Rc=n=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=n.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},l2=(n,e)=>(t,s,i)=>{const r=new Set;return t.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(e(a))return o.call(t,a,c,l),n(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&s(),a;o.call(t,a,c),n(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&s()})(t.connect),t.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(t),r.clear();else if(typeof a=="number"){o.call(t,a);for(const d of r)d[1]===a&&r.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(t.disconnect),t},Le=(n,e,t)=>{const s=e[t];s!==void 0&&s!==n[t]&&(n[t]=s)},lt=(n,e)=>{Le(n,e,"channelCount"),Le(n,e,"channelCountMode"),Le(n,e,"channelInterpretation")},qw=n=>typeof n.getFloatTimeDomainData=="function",u2=n=>{n.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);n.getByteTimeDomainData(t);const s=Math.max(t.length,n.fftSize);for(let i=0;i<s;i+=1)e[i]=(t[i]-128)*.0078125;return e}},h2=(n,e)=>(t,s)=>{const i=t.createAnalyser();if(lt(i,s),!(s.maxDecibels>s.minDecibels))throw e();return Le(i,s,"fftSize"),Le(i,s,"maxDecibels"),Le(i,s,"minDecibels"),Le(i,s,"smoothingTimeConstant"),n(qw,()=>qw(i))||u2(i),i},d2=n=>n===null?null:n.hasOwnProperty("AudioBuffer")?n.AudioBuffer:null,He=(n,e,t)=>{const s=e[t];s!==void 0&&s!==n[t].value&&(n[t].value=s)},f2=n=>{n.start=(e=>{let t=!1;return(s=0,i=0,r)=>{if(t)throw vt();e.call(n,s,i,r),t=!0}})(n.start)},A_=n=>{n.start=(e=>(t=0,s=0,i)=>{if(typeof i=="number"&&i<0||s<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(n,t,s,i)})(n.start)},N_=n=>{n.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(n,t)})(n.stop)},p2=(n,e,t,s,i,r,o,a,c,l,u)=>(h,d)=>{const f=h.createBufferSource();return lt(f,d),He(f,d,"playbackRate"),Le(f,d,"buffer"),Le(f,d,"loop"),Le(f,d,"loopEnd"),Le(f,d,"loopStart"),e(t,()=>t(h))||f2(f),e(s,()=>s(h))||c(f),e(i,()=>i(h))||l(f,h),e(r,()=>r(h))||A_(f),e(o,()=>o(h))||u(f,h),e(a,()=>a(h))||N_(f),n(h,f),f},m2=n=>n===null?null:n.hasOwnProperty("AudioContext")?n.AudioContext:n.hasOwnProperty("webkitAudioContext")?n.webkitAudioContext:null,g2=(n,e)=>(t,s,i)=>{const r=t.destination;if(r.channelCount!==s)try{r.channelCount=s}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:s});const o=n(t,{channelCount:s,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},_2=n=>n===null?null:n.hasOwnProperty("AudioWorkletNode")?n.AudioWorkletNode:null,y2=n=>{const{port1:e}=new MessageChannel;try{e.postMessage(n)}finally{e.close()}},v2=(n,e,t,s,i)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw n()}},channelCountMode:{get:()=>"explicit",set:()=>{throw n()}},onprocessorerror:{get:()=>f,set:p=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof p=="function"?p:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=typeof m[1]=="function"?m[1]:typeof m[1]=="object"&&m[1]!==null&&typeof m[1].handleEvent=="function"?m[1].handleEvent:null;if(g!==null){const y=d.get(m[1]);y!==void 0?m[1]=y:(m[1]=w=>{w.type==="error"?(Object.defineProperties(w,{type:{value:"processorerror"}}),g(w)):g(new ErrorEvent(m[0],{...w}))},d.set(g,m[1]))}}return p.call(h,"error",m[1],m[2]),p.call(h,...m)})(h.addEventListener),h.removeEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=d.get(m[1]);g!==void 0&&(d.delete(m[1]),m[1]=g)}return p.call(h,"error",m[1],m[2]),p.call(h,m[0],m[1],m[2])})(h.removeEventListener),u.numberOfOutputs!==0){const p=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(p).connect(r.destination),i(h,()=>p.disconnect(),()=>p.connect(r.destination))}return h}catch(h){throw h.code===11?s():h}if(l===void 0)throw s();return y2(u),e(r,o,l,u)},mC=(n,e)=>n===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(n*e))))),w2=n=>new Promise((e,t)=>{const{port1:s,port2:i}=new MessageChannel;s.onmessage=({data:r})=>{s.close(),i.close(),e(r)},s.onmessageerror=({data:r})=>{s.close(),i.close(),t(r)},i.postMessage(n)}),T2=async(n,e)=>{const t=await w2(e);return new n(t)},I2=(n,e,t,s)=>{let i=jp.get(n);i===void 0&&(i=new WeakMap,jp.set(n,i));const r=T2(t,s);return i.set(e,r),r},b2=(n,e,t,s,i,r,o,a,c,l,u,h,d)=>(f,p,m,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const y=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(y.some(U=>U<1))throw c();if(y.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw c();const w=g.channelCount*g.numberOfInputs,S=y.reduce((U,Z)=>U+Z,0),C=m.parameterDescriptors===void 0?0:m.parameterDescriptors.length;if(w+C>6||S>6)throw c();const _=new MessageChannel,v=[],I=[];for(let U=0;U<g.numberOfInputs;U+=1)v.push(o(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),I.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const b=[];if(m.parameterDescriptors!==void 0)for(const{defaultValue:U,maxValue:Z,minValue:rt,name:Be}of m.parameterDescriptors){const ve=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[Be]!==void 0?g.parameterData[Be]:U===void 0?0:U});Object.defineProperties(ve.offset,{defaultValue:{get:()=>U===void 0?0:U},maxValue:{get:()=>Z===void 0?Wt:Z},minValue:{get:()=>rt===void 0?Jt:rt}}),b.push(ve)}const P=s(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,w+C)}),x=mC(p,f.sampleRate),D=a(f,x,w+C,Math.max(1,S)),k=i(f,{channelCount:Math.max(1,S),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,S)}),W=[];for(let U=0;U<g.numberOfOutputs;U+=1)W.push(s(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:y[U]}));for(let U=0;U<g.numberOfInputs;U+=1){v[U].connect(I[U]);for(let Z=0;Z<g.channelCount;Z+=1)I[U].connect(P,Z,U*g.channelCount+Z)}const V=new dC(m.parameterDescriptors===void 0?[]:m.parameterDescriptors.map(({name:U},Z)=>{const rt=b[Z];return rt.connect(P,0,w+Z),rt.start(0),[U,rt.offset]}));P.connect(D);let J=g.channelInterpretation,$=null;const z=g.numberOfOutputs===0?[D]:W,le={get bufferSize(){return x},get channelCount(){return g.channelCount},set channelCount(U){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(U){throw t()},get channelInterpretation(){return J},set channelInterpretation(U){for(const Z of v)Z.channelInterpretation=U;J=U},get context(){return D.context},get inputs(){return v},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return $},set onprocessorerror(U){typeof $=="function"&&le.removeEventListener("processorerror",$),$=typeof U=="function"?U:null,typeof $=="function"&&le.addEventListener("processorerror",$)},get parameters(){return V},get port(){return _.port2},addEventListener(...U){return D.addEventListener(U[0],U[1],U[2])},connect:n.bind(null,z),disconnect:l.bind(null,z),dispatchEvent(...U){return D.dispatchEvent(U[0])},removeEventListener(...U){return D.removeEventListener(U[0],U[1],U[2])}},Y=new Map;_.port1.addEventListener=(U=>(...Z)=>{if(Z[0]==="message"){const rt=typeof Z[1]=="function"?Z[1]:typeof Z[1]=="object"&&Z[1]!==null&&typeof Z[1].handleEvent=="function"?Z[1].handleEvent:null;if(rt!==null){const Be=Y.get(Z[1]);Be!==void 0?Z[1]=Be:(Z[1]=ve=>{u(f.currentTime,f.sampleRate,()=>rt(ve))},Y.set(rt,Z[1]))}}return U.call(_.port1,Z[0],Z[1],Z[2])})(_.port1.addEventListener),_.port1.removeEventListener=(U=>(...Z)=>{if(Z[0]==="message"){const rt=Y.get(Z[1]);rt!==void 0&&(Y.delete(Z[1]),Z[1]=rt)}return U.call(_.port1,Z[0],Z[1],Z[2])})(_.port1.removeEventListener);let oe=null;Object.defineProperty(_.port1,"onmessage",{get:()=>oe,set:U=>{typeof oe=="function"&&_.port1.removeEventListener("message",oe),oe=typeof U=="function"?U:null,typeof oe=="function"&&(_.port1.addEventListener("message",oe),_.port1.start())}}),m.prototype.port=_.port1;let te=null;I2(f,le,m,g).then(U=>te=U);const un=uh(g.numberOfInputs,g.channelCount),hn=uh(g.numberOfOutputs,y),he=m.parameterDescriptors===void 0?[]:m.parameterDescriptors.reduce((U,{name:Z})=>({...U,[Z]:new Float32Array(128)}),{});let Pe=!0;const qt=()=>{g.numberOfOutputs>0&&D.disconnect(k);for(let U=0,Z=0;U<g.numberOfOutputs;U+=1){const rt=W[U];for(let Be=0;Be<y[U];Be+=1)k.disconnect(rt,Z+Be,Be);Z+=y[U]}},K=new Map;D.onaudioprocess=({inputBuffer:U,outputBuffer:Z})=>{if(te!==null){const rt=h(le);for(let Be=0;Be<x;Be+=128){for(let ve=0;ve<g.numberOfInputs;ve+=1)for(let je=0;je<g.channelCount;je+=1)lh(U,un[ve],je,je,Be);m.parameterDescriptors!==void 0&&m.parameterDescriptors.forEach(({name:ve},je)=>{lh(U,he,ve,w+je,Be)});for(let ve=0;ve<g.numberOfInputs;ve+=1)for(let je=0;je<y[ve];je+=1)hn[ve][je].byteLength===0&&(hn[ve][je]=new Float32Array(128));try{const ve=un.map((Tn,Us)=>{if(rt[Us].size>0)return K.set(Us,x/128),Tn;const Qd=K.get(Us);return Qd===void 0?[]:(Tn.every(lk=>lk.every(uk=>uk===0))&&(Qd===1?K.delete(Us):K.set(Us,Qd-1)),Tn)});Pe=u(f.currentTime+Be/f.sampleRate,f.sampleRate,()=>te.process(ve,hn,he));for(let Tn=0,Us=0;Tn<g.numberOfOutputs;Tn+=1){for(let ua=0;ua<y[Tn];ua+=1)fC(Z,hn[Tn],ua,Us+ua,Be);Us+=y[Tn]}}catch(ve){Pe=!1,le.dispatchEvent(new ErrorEvent("processorerror",{colno:ve.colno,filename:ve.filename,lineno:ve.lineno,message:ve.message}))}if(!Pe){for(let ve=0;ve<g.numberOfInputs;ve+=1){v[ve].disconnect(I[ve]);for(let je=0;je<g.channelCount;je+=1)I[Be].disconnect(P,je,ve*g.channelCount+je)}if(m.parameterDescriptors!==void 0){const ve=m.parameterDescriptors.length;for(let je=0;je<ve;je+=1){const Tn=b[je];Tn.disconnect(P,0,w+je),Tn.stop()}}P.disconnect(D),D.onaudioprocess=null,Di?qt():jr();break}}}};let Di=!1;const Ri=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),$r=()=>D.connect(Ri).connect(f.destination),jr=()=>{D.disconnect(Ri),Ri.disconnect()},ak=()=>{if(Pe){jr(),g.numberOfOutputs>0&&D.connect(k);for(let U=0,Z=0;U<g.numberOfOutputs;U+=1){const rt=W[U];for(let Be=0;Be<y[U];Be+=1)k.connect(rt,Z+Be,Be);Z+=y[U]}}Di=!0},ck=()=>{Pe&&($r(),qt()),Di=!1};return $r(),d(le,ak,ck)},gC=(n,e)=>{const t=n.createBiquadFilter();return lt(t,e),He(t,e,"Q"),He(t,e,"detune"),He(t,e,"frequency"),He(t,e,"gain"),Le(t,e,"type"),t},E2=(n,e)=>(t,s)=>{const i=t.createChannelMerger(s.numberOfInputs);return n!==null&&n.name==="webkitAudioContext"&&e(t,i),lt(i,s),i},S2=n=>{const e=n.numberOfOutputs;Object.defineProperty(n,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw vt()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw vt()}}),Object.defineProperty(n,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw vt()}})},Ol=(n,e)=>{const t=n.createChannelSplitter(e.numberOfOutputs);return lt(t,e),S2(t),t},C2=(n,e,t,s,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const a=r.createConstantSource();return lt(a,o),He(a,o,"offset"),e(s,()=>s(r))||A_(a),e(i,()=>i(r))||N_(a),n(r,a),a},ra=(n,e)=>(n.connect=e.connect.bind(e),n.disconnect=e.disconnect.bind(e),n),k2=(n,e,t,s)=>(i,{offset:r,...o})=>{const a=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(p){l.channelCount=p},get channelCountMode(){return l.channelCountMode},set channelCountMode(p){l.channelCountMode=p},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(p){l.channelInterpretation=p},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(p){c.onended=p},addEventListener(...p){return c.addEventListener(p[0],p[1],p[2])},dispatchEvent(...p){return c.dispatchEvent(p[0])},removeEventListener(...p){return c.removeEventListener(p[0],p[1],p[2])},start(p=0){c.start.call(c,p)},stop(p=0){c.stop.call(c,p)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return n(i,c),s(ra(h,l),d,f)},A2=(n,e)=>(t,s)=>{const i=t.createConvolver();if(lt(i,s),s.disableNormalization===i.normalize&&(i.normalize=!s.disableNormalization),Le(i,s,"buffer"),s.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw n();return r.call(i,o)}),s.channelCountMode==="max"))throw n();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw n();return r.call(i,o)}),i},_C=(n,e)=>{const t=n.createDelay(e.maxDelayTime);return lt(t,e),He(t,e,"delayTime"),t},N2=n=>(e,t)=>{const s=e.createDynamicsCompressor();if(lt(s,t),t.channelCount>2||t.channelCountMode==="max")throw n();return He(s,t,"attack"),He(s,t,"knee"),He(s,t,"ratio"),He(s,t,"release"),He(s,t,"threshold"),s},cn=(n,e)=>{const t=n.createGain();return lt(t,e),He(t,e,"gain"),t},x2=n=>(e,t,s)=>{if(e.createIIRFilter===void 0)return n(e,t,s);const i=e.createIIRFilter(s.feedforward,s.feedback);return lt(i,s),i};function D2(n,e){const t=e[0]*e[0]+e[1]*e[1];return[(n[0]*e[0]+n[1]*e[1])/t,(n[1]*e[0]-n[0]*e[1])/t]}function R2(n,e){return[n[0]*e[0]-n[1]*e[1],n[0]*e[1]+n[1]*e[0]]}function Bw(n,e){let t=[0,0];for(let s=n.length-1;s>=0;s-=1)t=R2(t,e),t[0]+=n[s];return t}const O2=(n,e,t,s)=>(i,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=mC(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),p=d.length,m=f.length,g=Math.min(p,m);if(p===0||p>20)throw s();if(d[0]===0)throw e();if(m===0||m>20)throw s();if(f[0]===0)throw e();if(d[0]!==1){for(let b=0;b<m;b+=1)f[b]/=d[0];for(let b=1;b<p;b+=1)d[b]/=d[0]}const y=t(i,h,o,o);y.channelCount=o,y.channelCountMode=a,y.channelInterpretation=c;const w=32,S=[],C=[],_=[];for(let b=0;b<o;b+=1){S.push(0);const P=new Float32Array(w),x=new Float32Array(w);P.fill(0),x.fill(0),C.push(P),_.push(x)}y.onaudioprocess=b=>{const P=b.inputBuffer,x=b.outputBuffer,D=P.numberOfChannels;for(let k=0;k<D;k+=1){const W=P.getChannelData(k),V=x.getChannelData(k);S[k]=pC(d,p,f,m,g,C[k],_[k],S[k],w,W,V)}};const v=i.sampleRate/2;return ra({get bufferSize(){return h},get channelCount(){return y.channelCount},set channelCount(b){y.channelCount=b},get channelCountMode(){return y.channelCountMode},set channelCountMode(b){y.channelCountMode=b},get channelInterpretation(){return y.channelInterpretation},set channelInterpretation(b){y.channelInterpretation=b},get context(){return y.context},get inputs(){return[y]},get numberOfInputs(){return y.numberOfInputs},get numberOfOutputs(){return y.numberOfOutputs},addEventListener(...b){return y.addEventListener(b[0],b[1],b[2])},dispatchEvent(...b){return y.dispatchEvent(b[0])},getFrequencyResponse(b,P,x){if(b.length!==P.length||P.length!==x.length)throw n();const D=b.length;for(let k=0;k<D;k+=1){const W=-Math.PI*(b[k]/v),V=[Math.cos(W),Math.sin(W)],J=Bw(f,V),$=Bw(d,V),z=D2(J,$);P[k]=Math.sqrt(z[0]*z[0]+z[1]*z[1]),x[k]=Math.atan2(z[1],z[0])}},removeEventListener(...b){return y.removeEventListener(b[0],b[1],b[2])}},y)},P2=(n,e)=>n.createMediaElementSource(e.mediaElement),M2=(n,e)=>{const t=n.createMediaStreamDestination();return lt(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},L2=(n,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const s=t.slice(0,1),i=n.createMediaStreamSource(new MediaStream(s));return Object.defineProperty(i,"mediaStream",{value:e}),i},F2=(n,e)=>(t,{mediaStreamTrack:s})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(s);const i=new MediaStream([s]),r=t.createMediaStreamSource(i);if(s.kind!=="audio")throw n();if(e(t))throw new TypeError;return r},V2=n=>n===null?null:n.hasOwnProperty("OfflineAudioContext")?n.OfflineAudioContext:n.hasOwnProperty("webkitOfflineAudioContext")?n.webkitOfflineAudioContext:null,U2=(n,e,t,s,i,r)=>(o,a)=>{const c=o.createOscillator();return lt(c,a),He(c,a,"detune"),He(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):Le(c,a,"type"),e(t,()=>t(o))||A_(c),e(s,()=>s(o))||r(c,o),e(i,()=>i(o))||N_(c),n(o,c),c},q2=n=>(e,t)=>{const s=e.createPanner();return s.orientationX===void 0?n(e,t):(lt(s,t),He(s,t,"orientationX"),He(s,t,"orientationY"),He(s,t,"orientationZ"),He(s,t,"positionX"),He(s,t,"positionY"),He(s,t,"positionZ"),Le(s,t,"coneInnerAngle"),Le(s,t,"coneOuterAngle"),Le(s,t,"coneOuterGain"),Le(s,t,"distanceModel"),Le(s,t,"maxDistance"),Le(s,t,"panningModel"),Le(s,t,"refDistance"),Le(s,t,"rolloffFactor"),s)},B2=(n,e,t,s,i,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:f,distanceModel:p,maxDistance:m,orientationX:g,orientationY:y,orientationZ:w,panningModel:S,positionX:C,positionY:_,positionZ:v,refDistance:I,rolloffFactor:b,...P})=>{const x=u.createPanner();if(P.channelCount>2||P.channelCountMode==="max")throw o();lt(x,P);const D={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},k=t(u,{...D,channelInterpretation:"speakers",numberOfInputs:6}),W=s(u,{...P,gain:1}),V=s(u,{...D,gain:1}),J=s(u,{...D,gain:0}),$=s(u,{...D,gain:0}),z=s(u,{...D,gain:0}),le=s(u,{...D,gain:0}),Y=s(u,{...D,gain:0}),oe=i(u,256,6,1),te=r(u,{...D,curve:new Float32Array([1,1]),oversample:"none"});let Ie=[g,y,w],un=[C,_,v];const hn=new Float32Array(1);oe.onaudioprocess=({inputBuffer:K})=>{const Di=[c(K,hn,0),c(K,hn,1),c(K,hn,2)];Di.some(($r,jr)=>$r!==Ie[jr])&&(x.setOrientation(...Di),Ie=Di);const Ri=[c(K,hn,3),c(K,hn,4),c(K,hn,5)];Ri.some(($r,jr)=>$r!==un[jr])&&(x.setPosition(...Ri),un=Ri)},Object.defineProperty(J.gain,"defaultValue",{get:()=>0}),Object.defineProperty($.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(le.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Y.gain,"defaultValue",{get:()=>0});const he={get bufferSize(){},get channelCount(){return x.channelCount},set channelCount(K){if(K>2)throw o();W.channelCount=K,x.channelCount=K},get channelCountMode(){return x.channelCountMode},set channelCountMode(K){if(K==="max")throw o();W.channelCountMode=K,x.channelCountMode=K},get channelInterpretation(){return x.channelInterpretation},set channelInterpretation(K){W.channelInterpretation=K,x.channelInterpretation=K},get coneInnerAngle(){return x.coneInnerAngle},set coneInnerAngle(K){x.coneInnerAngle=K},get coneOuterAngle(){return x.coneOuterAngle},set coneOuterAngle(K){x.coneOuterAngle=K},get coneOuterGain(){return x.coneOuterGain},set coneOuterGain(K){if(K<0||K>1)throw e();x.coneOuterGain=K},get context(){return x.context},get distanceModel(){return x.distanceModel},set distanceModel(K){x.distanceModel=K},get inputs(){return[W]},get maxDistance(){return x.maxDistance},set maxDistance(K){if(K<0)throw new RangeError;x.maxDistance=K},get numberOfInputs(){return x.numberOfInputs},get numberOfOutputs(){return x.numberOfOutputs},get orientationX(){return V.gain},get orientationY(){return J.gain},get orientationZ(){return $.gain},get panningModel(){return x.panningModel},set panningModel(K){x.panningModel=K},get positionX(){return z.gain},get positionY(){return le.gain},get positionZ(){return Y.gain},get refDistance(){return x.refDistance},set refDistance(K){if(K<0)throw new RangeError;x.refDistance=K},get rolloffFactor(){return x.rolloffFactor},set rolloffFactor(K){if(K<0)throw new RangeError;x.rolloffFactor=K},addEventListener(...K){return W.addEventListener(K[0],K[1],K[2])},dispatchEvent(...K){return W.dispatchEvent(K[0])},removeEventListener(...K){return W.removeEventListener(K[0],K[1],K[2])}};h!==he.coneInnerAngle&&(he.coneInnerAngle=h),d!==he.coneOuterAngle&&(he.coneOuterAngle=d),f!==he.coneOuterGain&&(he.coneOuterGain=f),p!==he.distanceModel&&(he.distanceModel=p),m!==he.maxDistance&&(he.maxDistance=m),g!==he.orientationX.value&&(he.orientationX.value=g),y!==he.orientationY.value&&(he.orientationY.value=y),w!==he.orientationZ.value&&(he.orientationZ.value=w),S!==he.panningModel&&(he.panningModel=S),C!==he.positionX.value&&(he.positionX.value=C),_!==he.positionY.value&&(he.positionY.value=_),v!==he.positionZ.value&&(he.positionZ.value=v),I!==he.refDistance&&(he.refDistance=I),b!==he.rolloffFactor&&(he.rolloffFactor=b),(Ie[0]!==1||Ie[1]!==0||Ie[2]!==0)&&x.setOrientation(...Ie),(un[0]!==0||un[1]!==0||un[2]!==0)&&x.setPosition(...un);const Pe=()=>{W.connect(x),n(W,te,0,0),te.connect(V).connect(k,0,0),te.connect(J).connect(k,0,1),te.connect($).connect(k,0,2),te.connect(z).connect(k,0,3),te.connect(le).connect(k,0,4),te.connect(Y).connect(k,0,5),k.connect(oe).connect(u.destination)},qt=()=>{W.disconnect(x),a(W,te,0,0),te.disconnect(V),V.disconnect(k),te.disconnect(J),J.disconnect(k),te.disconnect($),$.disconnect(k),te.disconnect(z),z.disconnect(k),te.disconnect(le),le.disconnect(k),te.disconnect(Y),Y.disconnect(k),k.disconnect(oe),oe.disconnect(u.destination)};return l(ra(he,x),Pe,qt)},W2=n=>(e,{disableNormalization:t,imag:s,real:i})=>{const r=s instanceof Float32Array?s:new Float32Array(s),o=i instanceof Float32Array?i:new Float32Array(i),a=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(s).length<2)throw n();return a},Pl=(n,e,t,s)=>n.createScriptProcessor(e,t,s),$2=(n,e)=>(t,s)=>{const i=s.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return n(t,s);const r=t.createStereoPanner();return lt(r,s),He(r,s,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},j2=(n,e,t,s,i,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(p,m,g,y)=>{const w=new Float32Array(16385),S=new Float32Array(16385);for(let P=0;P<16385;P+=1){const x=P/16384*c;w[P]=Math.cos(x),S[P]=Math.sin(x)}const C=t(p,{...l,gain:0}),_=s(p,{...u,curve:w}),v=s(p,{...u,curve:a}),I=t(p,{...l,gain:0}),b=s(p,{...u,curve:S});return{connectGraph(){m.connect(C),m.connect(v.inputs===void 0?v:v.inputs[0]),m.connect(I),v.connect(g),g.connect(_.inputs===void 0?_:_.inputs[0]),g.connect(b.inputs===void 0?b:b.inputs[0]),_.connect(C.gain),b.connect(I.gain),C.connect(y,0,0),I.connect(y,0,1)},disconnectGraph(){m.disconnect(C),m.disconnect(v.inputs===void 0?v:v.inputs[0]),m.disconnect(I),v.disconnect(g),g.disconnect(_.inputs===void 0?_:_.inputs[0]),g.disconnect(b.inputs===void 0?b:b.inputs[0]),_.disconnect(C.gain),b.disconnect(I.gain),C.disconnect(y,0,0),I.disconnect(y,0,1)}}},d=(p,m,g,y)=>{const w=new Float32Array(16385),S=new Float32Array(16385),C=new Float32Array(16385),_=new Float32Array(16385),v=Math.floor(16385/2);for(let z=0;z<16385;z+=1)if(z>v){const le=(z-v)/(16384-v)*c;w[z]=Math.cos(le),S[z]=Math.sin(le),C[z]=0,_[z]=1}else{const le=z/(16384-v)*c;w[z]=1,S[z]=0,C[z]=Math.cos(le),_[z]=Math.sin(le)}const I=e(p,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),b=t(p,{...l,gain:0}),P=s(p,{...u,curve:w}),x=t(p,{...l,gain:0}),D=s(p,{...u,curve:S}),k=s(p,{...u,curve:a}),W=t(p,{...l,gain:0}),V=s(p,{...u,curve:C}),J=t(p,{...l,gain:0}),$=s(p,{...u,curve:_});return{connectGraph(){m.connect(I),m.connect(k.inputs===void 0?k:k.inputs[0]),I.connect(b,0),I.connect(x,0),I.connect(W,1),I.connect(J,1),k.connect(g),g.connect(P.inputs===void 0?P:P.inputs[0]),g.connect(D.inputs===void 0?D:D.inputs[0]),g.connect(V.inputs===void 0?V:V.inputs[0]),g.connect($.inputs===void 0?$:$.inputs[0]),P.connect(b.gain),D.connect(x.gain),V.connect(W.gain),$.connect(J.gain),b.connect(y,0,0),W.connect(y,0,0),x.connect(y,0,1),J.connect(y,0,1)},disconnectGraph(){m.disconnect(I),m.disconnect(k.inputs===void 0?k:k.inputs[0]),I.disconnect(b,0),I.disconnect(x,0),I.disconnect(W,1),I.disconnect(J,1),k.disconnect(g),g.disconnect(P.inputs===void 0?P:P.inputs[0]),g.disconnect(D.inputs===void 0?D:D.inputs[0]),g.disconnect(V.inputs===void 0?V:V.inputs[0]),g.disconnect($.inputs===void 0?$:$.inputs[0]),P.disconnect(b.gain),D.disconnect(x.gain),V.disconnect(W.gain),$.disconnect(J.gain),b.disconnect(y,0,0),W.disconnect(y,0,0),x.disconnect(y,0,1),J.disconnect(y,0,1)}}},f=(p,m,g,y,w)=>{if(m===1)return h(p,g,y,w);if(m===2)return d(p,g,y,w);throw i()};return(p,{channelCount:m,channelCountMode:g,pan:y,...w})=>{if(g==="max")throw i();const S=n(p,{...w,channelCount:1,channelCountMode:g,numberOfInputs:2}),C=t(p,{...w,channelCount:m,channelCountMode:g,gain:1}),_=t(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:y});let{connectGraph:v,disconnectGraph:I}=f(p,m,C,_,S);Object.defineProperty(_.gain,"defaultValue",{get:()=>0}),Object.defineProperty(_.gain,"maxValue",{get:()=>1}),Object.defineProperty(_.gain,"minValue",{get:()=>-1});const b={get bufferSize(){},get channelCount(){return C.channelCount},set channelCount(k){C.channelCount!==k&&(P&&I(),{connectGraph:v,disconnectGraph:I}=f(p,k,C,_,S),P&&v()),C.channelCount=k},get channelCountMode(){return C.channelCountMode},set channelCountMode(k){if(k==="clamped-max"||k==="max")throw i();C.channelCountMode=k},get channelInterpretation(){return C.channelInterpretation},set channelInterpretation(k){C.channelInterpretation=k},get context(){return C.context},get inputs(){return[C]},get numberOfInputs(){return C.numberOfInputs},get numberOfOutputs(){return C.numberOfOutputs},get pan(){return _.gain},addEventListener(...k){return C.addEventListener(k[0],k[1],k[2])},dispatchEvent(...k){return C.dispatchEvent(k[0])},removeEventListener(...k){return C.removeEventListener(k[0],k[1],k[2])}};let P=!1;const x=()=>{v(),P=!0},D=()=>{I(),P=!1};return r(ra(b,S),x,D)}},G2=(n,e,t,s,i,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);lt(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();Le(l,{curve:u},"curve"),Le(l,c,"oversample");let h=null,d=!1;return o(l,"curve",m=>()=>m.call(l),m=>g=>(m.call(l,g),d&&(s(g)&&h===null?h=n(a,l):!s(g)&&h!==null&&(h(),h=null)),g)),i(l,()=>{d=!0,s(l.curve)&&(h=n(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},z2=(n,e,t,s,i)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();lt(l,c),lt(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),f=t(r,{...c,gain:1}),p=t(r,{...c,gain:-1});let m=null,g=!1,y=null;const w={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(_){h.channelCount=_,d.channelCount=_,l.channelCount=_,f.channelCount=_,u.channelCount=_,p.channelCount=_},get channelCountMode(){return l.channelCountMode},set channelCountMode(_){h.channelCountMode=_,d.channelCountMode=_,l.channelCountMode=_,f.channelCountMode=_,u.channelCountMode=_,p.channelCountMode=_},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(_){h.channelInterpretation=_,d.channelInterpretation=_,l.channelInterpretation=_,f.channelInterpretation=_,u.channelInterpretation=_,p.channelInterpretation=_},get context(){return l.context},get curve(){return y},set curve(_){if(_!==null&&_.length<2)throw e();if(_===null)l.curve=_,u.curve=_;else{const v=_.length,I=new Float32Array(v+2-v%2),b=new Float32Array(v+2-v%2);I[0]=_[0],b[0]=-_[v-1];const P=Math.ceil((v+1)/2),x=(v+1)/2-1;for(let D=1;D<P;D+=1){const k=D/P*x,W=Math.floor(k),V=Math.ceil(k);I[D]=W===V?_[W]:(1-(k-W))*_[W]+(1-(V-k))*_[V],b[D]=W===V?-_[v-1-W]:-((1-(k-W))*_[v-1-W])-(1-(V-k))*_[v-1-V]}I[P]=v%2===1?_[P-1]:(_[P-2]+_[P-1])/2,l.curve=I,u.curve=b}y=_,g&&(s(y)&&m===null?m=n(r,h):m!==null&&(m(),m=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(_){l.oversample=_,u.oversample=_},addEventListener(..._){return h.addEventListener(_[0],_[1],_[2])},dispatchEvent(..._){return h.dispatchEvent(_[0])},removeEventListener(..._){return h.removeEventListener(_[0],_[1],_[2])}};o!==null&&(w.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==w.oversample&&(w.oversample=a);const S=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(p).connect(f),g=!0,s(y)&&(m=n(r,h))},C=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(p),p.disconnect(f),g=!1,m!==null&&(m(),m=null)};return i(ra(w,f),S,C)},Qt=()=>new DOMException("","NotSupportedError"),H2={numberOfChannels:1},K2=(n,e,t,s,i)=>class extends n{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...H2,...l},f=s(h,u,d);e(Rc,()=>Rc(f))||f.addEventListener("statechange",(()=>{let p=0;const m=g=>{this._state==="running"&&(p>0?(f.removeEventListener("statechange",m),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):p+=1)};return m})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,cC(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},Q2={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},Y2=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...Q2,...l},d=t(u,h),f=r(u),p=f?s():null,m=c.sampleRate/2;super(c,!1,d,p),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,m,-m),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=p,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Mo(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),bs(this)&&xl(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},X2=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=t(u);const f=Ut(d,h);if(!f){const p={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(h,p),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),f?(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)):(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},J2={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},Z2=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...J2,...l},d=t(u,h),f=r(u),p=f?s():null;super(c,!1,d,p),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,Wt,Jt),this._orientationY=e(this,f,d.orientationY,Wt,Jt),this._orientationZ=e(this,f,d.orientationZ,Wt,Jt),this._positionX=e(this,f,d.positionX,Wt,Jt),this._positionY=e(this,f,d.positionY,Wt,Jt),this._positionZ=e(this,f,d.positionZ,Wt,Jt),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},e$=(n,e,t,s,i,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(f,p)=>{let m=null,g=r(f);const y={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},w={...y,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},S=Ut(g,p);if("bufferSize"in g)m=s(p,{...y,gain:1});else if(!S){const C={...w,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(p,C)}if(u.set(p,m===null?g:m),m!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const D=new o(6,f.context.length,p.sampleRate),k=e(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});k.connect(D.destination),h=(async()=>{const W=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(V,J)=>{const $=t(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:J===0?1:0});return await a(D,V,$.offset),$}));for(let V=0;V<6;V+=1)W[V].connect(k,0,V),W[V].start(0);return l(D)})()}const C=await h,_=s(p,{...y,gain:1});await c(f,p,_);const v=[];for(let D=0;D<C.numberOfChannels;D+=1)v.push(C.getChannelData(D));let I=[v[0][0],v[1][0],v[2][0]],b=[v[3][0],v[4][0],v[5][0]],P=s(p,{...y,gain:1}),x=i(p,{...w,orientationX:I[0],orientationY:I[1],orientationZ:I[2],positionX:b[0],positionY:b[1],positionZ:b[2]});_.connect(P).connect(x.inputs[0]),x.connect(m);for(let D=128;D<C.length;D+=128){const k=[v[0][D],v[1][D],v[2][D]],W=[v[3][D],v[4][D],v[5][D]];if(k.some((V,J)=>V!==I[J])||W.some((V,J)=>V!==b[J])){I=k,b=W;const V=D/p.sampleRate;P.gain.setValueAtTime(0,V),P=s(p,{...y,gain:0}),x=i(p,{...w,orientationX:I[0],orientationY:I[1],orientationZ:I[2],positionX:b[0],positionY:b[1],positionZ:b[2]}),P.gain.setValueAtTime(1,V),_.connect(P).connect(x.inputs[0]),x.connect(m)}}return m}return S?(await n(p,f.orientationX,g.orientationX),await n(p,f.orientationY,g.orientationY),await n(p,f.orientationZ,g.orientationZ),await n(p,f.positionX,g.positionX),await n(p,f.positionY,g.positionY),await n(p,f.positionZ,g.positionZ)):(await a(p,f.orientationX,g.orientationX),await a(p,f.orientationY,g.orientationY),await a(p,f.orientationZ,g.orientationZ),await a(p,f.positionX,g.positionX),await a(p,f.positionY,g.positionY),await a(p,f.positionZ,g.positionZ)),ia(g)?await c(f,p,g.inputs[0]):await c(f,p,g),g};return{render(f,p){const m=u.get(p);return m!==void 0?Promise.resolve(m):d(f,p)}}},t$={disableNormalization:!1},n$=(n,e,t,s)=>class yC{constructor(r,o){const a=e(r),c=s({...t$,...o}),l=n(a,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===yC.prototype||t.has(r)}},s$=(n,e)=>(t,s,i)=>(n(s).replay(i),e(s,t,i)),i$=(n,e,t)=>async(s,i,r)=>{const o=n(s);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await e(l).render(l,i),f=s.context.destination;!t(l)&&(s!==f||!t(s))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},r$=(n,e,t)=>async(s,i,r)=>{const o=e(s);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await n(a).render(a,i);t(a)||u.connect(r,c)}))},o$=(n,e,t,s)=>i=>n(Rc,()=>Rc(i))?Promise.resolve(n(s,s)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(i.destination),i.startRendering()}),a$=n=>(e,t)=>{n.set(e,t)},c$=n=>(e,t)=>n.set(e,t),l$=(n,e,t,s,i,r,o,a)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(s(l)).map(u=>t(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),S_(u)):e(r,()=>r(u))||a(u),n.add(u),u)),u$={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},h$=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),u={...u$,...c},h=t(l,u),d=r(l),f=d?s():null;super(a,!1,h,f),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},d$=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Ut(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await n(c,a.pan,l.pan):await s(c,a.pan,l.pan),ia(l)?await i(a,c,l.inputs[0]):await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},f$=n=>()=>{if(n===null)return!1;try{new n({length:1,sampleRate:44100})}catch{return!1}return!0},p$=(n,e)=>async()=>{if(n===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),s=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await s.audioWorklet.addModule(i);const a=new n(s,"a",{numberOfOutputs:0}),c=s.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await s.startRendering()}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},m$=(n,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),s=n(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{s.disconnect(),i(t.currentTime!==0)},t.startRendering()})},g$=()=>new DOMException("","UnknownError"),_$={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},y$=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={..._$,...l},d=t(u,h),p=r(u)?s():null;super(c,!0,d,p),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},v$=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Ut(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=n(o,l)}return s.set(o,a),ia(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},w$=()=>typeof window>"u"?null:window,T$=(n,e)=>t=>{t.copyFromChannel=(s,i,r=0)=>{const o=n(r),a=n(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=s.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)s[h]=l[h+o]},t.copyToChannel=(s,i,r=0)=>{const o=n(r),a=n(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=s.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=s[h]}},I$=n=>e=>{e.copyFromChannel=(t=>(s,i,r=0)=>{const o=n(r),a=n(i);if(o<e.length)return t.call(e,s,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(s,i,r=0)=>{const o=n(r),a=n(i);if(o<e.length)return t.call(e,s,a,o)})(e.copyToChannel)},b$=n=>(e,t)=>{const s=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=s),n(e,"buffer",i=>()=>{const r=i.call(e);return r===s?null:r},i=>r=>i.call(e,r===null?s:r))},E$=(n,e)=>(t,s)=>{s.channelCount=1,s.channelCountMode="explicit",Object.defineProperty(s,"channelCount",{get:()=>1,set:()=>{throw n()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:()=>{throw n()}});const i=t.createBufferSource();e(s,()=>{const a=s.numberOfInputs;for(let c=0;c<a;c+=1)i.connect(s,0,c)},()=>i.disconnect(s))},vC=(n,e,t)=>n.copyFromChannel===void 0?n.getChannelData(t)[0]:(n.copyFromChannel(e,t),e[0]),wC=n=>{if(n===null)return!1;const e=n.length;return e%2!==0?n[Math.floor(e/2)]!==0:n[e/2-1]+n[e/2]!==0},Ml=(n,e,t,s)=>{let i=n;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(n,e,{get:t(r),set:s(o)})},S$=n=>({...n,outputChannelCount:n.outputChannelCount!==void 0?n.outputChannelCount:n.numberOfInputs===1&&n.numberOfOutputs===1?[n.channelCount]:Array.from({length:n.numberOfOutputs},()=>1)}),C$=n=>({...n,channelCount:n.numberOfOutputs}),k$=n=>{const{imag:e,real:t}=n;return e===void 0?t===void 0?{...n,imag:[0,0],real:[0,0]}:{...n,imag:Array.from(t,()=>0),real:t}:t===void 0?{...n,imag:e,real:Array.from(e,()=>0)}:{...n,imag:e,real:t}},TC=(n,e,t)=>{try{n.setValueAtTime(e,t)}catch(s){if(s.code!==9)throw s;TC(n,e,t+1e-7)}},A$=n=>{const e=n.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},N$=n=>{const e=n.createBufferSource(),t=n.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},x$=n=>{const e=n.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},x_=n=>{const e=n.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},IC=n=>{const e=n.createBuffer(1,1,44100),t=n.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},D_=n=>{const e=n.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},D$=n=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(n)}finally{e.close(),t.close()}},R$=n=>{n.start=(e=>(t=0,s=0,i)=>{const r=n.buffer,o=r===null?s:Math.min(r.duration,s);r!==null&&o>r.duration-.5/n.context.sampleRate?e.call(n,t,0,0):e.call(n,t,o,i)})(n.start)},bC=(n,e)=>{const t=e.createGain();n.connect(t);const s=(i=>()=>{i.call(n,t),n.removeEventListener("ended",s)})(n.disconnect);n.addEventListener("ended",s),ra(n,t),n.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(n,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(n,o),r=!0}})(n.stop)},oa=(n,e)=>t=>{const s={value:n};return Object.defineProperties(t,{currentTarget:s,target:s}),typeof e=="function"?e.call(n,t):e.handleEvent.call(n,t)},O$=Zq(qr),P$=rB(qr),M$=_W(qd),EC=new WeakMap,L$=MW(EC),$n=HB(new Map,new WeakMap),cs=w$(),SC=h2($n,us),R_=PW(Gt),Pt=i$(Gt,R_,Tr),F$=uB(SC,Oe,Pt),xe=VW(Ud),Ls=V2(cs),Ee=t2(Ls),CC=new WeakMap,kC=kW(oa),Ll=m2(cs),O_=XW(Ll),P_=JW(cs),AC=ZW(cs),Oc=_2(cs),nt=MB(eB(tC),iB(O$,P$,oh,M$,ah,Gt,L$,Nl,Oe,qr,bs,Tr,hu),$n,zW(Wp,ah,Gt,Oe,Dc,bs),us,Bd,Qt,fW(oh,Wp,Gt,Oe,Dc,xe,bs,Ee),wW(CC,Gt,qn),kC,xe,O_,P_,AC,Ee,Oc),V$=lB(nt,F$,us,SC,xe,Ee),M_=new WeakSet,Ww=d2(cs),NC=oW(new Uint32Array(1)),L_=T$(NC,us),F_=I$(NC),U$=dB(M_,$n,Qt,Ww,Ls,f$(Ww),L_,F_),Wd=oB(cn),xC=r$(R_,Dl,Tr),hs=eW(xC),aa=p2(Wd,$n,A$,N$,x$,x_,IC,D_,R$,b$(Ml),bC),ds=s$(LW(Dl),xC),q$=mB(hs,aa,Oe,ds,Pt),jn=LB(tB(nC),CC,E_,FB,Hq,Kq,Qq,Yq,Xq,Up,ZS,Ll,TC),B$=pB(nt,q$,jn,vt,aa,xe,Ee,oa),W$=EB(nt,SB,us,vt,g2(cn,Ml),xe,Ee,Pt),$$=zB(hs,gC,Oe,ds,Pt),Br=c$(EC),j$=GB(nt,jn,$$,Bd,gC,xe,Ee,Br),Ni=l2(qr,P_),G$=E$(vt,Ni),xi=E2(Ll,G$),z$=YB(xi,Oe,Pt),H$=QB(nt,z$,xi,xe,Ee),K$=ZB(Ol,Oe,Pt),Q$=JB(nt,K$,Ol,xe,Ee,C$),Y$=k2(Wd,aa,cn,Ni),ca=C2(Wd,$n,Y$,x_,D_),X$=rW(hs,ca,Oe,ds,Pt),J$=iW(nt,jn,X$,ca,xe,Ee,oa),DC=A2(Qt,Ml),Z$=lW(DC,Oe,Pt),ej=cW(nt,Z$,DC,xe,Ee,Br),tj=gW(hs,_C,Oe,ds,Pt),nj=mW(nt,jn,tj,_C,xe,Ee,Br),RC=N2(Qt),sj=EW(hs,RC,Oe,ds,Pt),ij=bW(nt,jn,sj,RC,Qt,xe,Ee,Br),rj=RW(hs,cn,Oe,ds,Pt),oj=DW(nt,jn,rj,cn,xe,Ee),aj=O2(Bd,vt,Pl,Qt),$d=o$($n,cn,Pl,m$(cn,Ls)),cj=GW(aa,Oe,Ls,Pt,$d),lj=x2(aj),uj=$W(nt,lj,cj,xe,Ee,Br),hj=CB(jn,xi,ca,Pl,Qt,vC,Ee,Ml),OC=new WeakMap,dj=c2(W$,hj,kC,Ee,OC,oa),PC=U2(Wd,$n,x_,IC,D_,bC),fj=X2(hs,PC,Oe,ds,Pt),pj=Y2(nt,jn,PC,fj,xe,Ee,oa),MC=nW(aa),mj=z2(MC,vt,cn,wC,Ni),jd=G2(MC,vt,mj,wC,Ni,Ll,Ml),gj=B2(oh,vt,xi,cn,Pl,jd,Qt,ah,vC,Ni),LC=q2(gj),_j=e$(hs,xi,ca,cn,LC,Oe,Ls,ds,Pt,$d),yj=Z2(nt,jn,LC,_j,xe,Ee,Br),vj=W2(us),wj=n$(vj,xe,new WeakSet,k$),Tj=j2(xi,Ol,cn,jd,Qt,Ni),FC=$2(Tj,Qt),Ij=d$(hs,FC,Oe,ds,Pt),bj=h$(nt,jn,FC,Ij,xe,Ee),Ej=v$(jd,Oe,Pt),Sj=y$(nt,vt,jd,Ej,xe,Ee,Br),VC=n2(cs),V_=AW(cs),UC=new WeakMap,Cj=UW(UC,Ls),kj=VC?sB($n,Qt,CW(cs),V_,NW(Jq),xe,Cj,Ee,Oc,new WeakMap,new WeakMap,p$(Oc,Ls),cs):void 0,Aj=e2(O_,Ee),Nj=dW(M_,$n,hW,SW,new WeakSet,xe,Aj,ih,Rc,L_,F_),qC=$B(kj,V$,U$,B$,j$,H$,Q$,J$,ej,Nj,nj,ij,oj,uj,dj,pj,yj,wj,bj,Sj),xj=s2(nt,P2,xe,Ee),Dj=r2(nt,M2,xe,Ee),Rj=o2(nt,L2,xe,Ee),Oj=F2(vt,Ee),Pj=a2(nt,Oj,xe),Mj=bB(qC,vt,Qt,g$,xj,Dj,Rj,Pj,Ll),U_=qW(OC),Lj=aB(U_),BC=tW(us),Fj=yW(U_),WC=TW(us),$C=new WeakMap,Vj=OW($C,qn),Uj=b2(BC,us,vt,xi,Ol,ca,cn,Pl,Qt,WC,V_,Vj,Ni),qj=v2(vt,Uj,cn,Qt,Ni),Bj=WB(hs,BC,aa,xi,Ol,ca,cn,Fj,WC,V_,Oe,Oc,Ls,ds,Pt,$d),Wj=FW(UC),$j=a$($C),$w=VC?UB(Lj,nt,jn,Bj,qj,Gt,Wj,xe,Ee,Oc,S$,$j,D$,oa):void 0,jj=uW(Qt,Ls),Gj=l$(M_,$n,R_,U_,$d,ih,L_,F_),zj=K2(qC,$n,vt,jj,Gj),Hj=HW(Ud,O_),Kj=KW(b_,P_),Qj=QW(E_,AC),Yj=YW(Ud,Ee);function ie(n,e){if(!n)throw new Error(e)}function Ns(n,e,t=1/0){if(!(e<=n&&n<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${n}`)}function jC(n){!n.isOffline&&n.state!=="running"&&zC('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let GC=console;function Xj(...n){GC.log(...n)}function zC(...n){GC.warn(...n)}function An(n){return typeof n>"u"}function de(n){return!An(n)}function Jj(n){return typeof n=="function"}function Ir(n){return typeof n=="number"}function tr(n){return Object.prototype.toString.call(n)==="[object Object]"&&n.constructor===Object}function Zj(n){return typeof n=="boolean"}function Vn(n){return Array.isArray(n)}function ls(n){return typeof n=="string"}function Zl(n){return ls(n)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(n)}function eG(n){return new Mj(n)}function tG(n,e,t){return new zj(n,e,t)}const nr=typeof self=="object"?self:null,nG=nr&&(nr.hasOwnProperty("AudioContext")||nr.hasOwnProperty("webkitAudioContext"));function sG(n,e,t){return ie(de($w),"This node only works in a secure context (https or localhost)"),new $w(n,e,t)}class iG{constructor(e,t,s){this._callback=e,this._type=t,this._updateInterval=s,this._createClock()}_createWorker(){const e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),s=new Worker(t);s.onmessage=this._callback.bind(this),this._worker=s}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){this._updateInterval=Math.max(e,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(e*1e3,1))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function br(n){return Qj(n)}function si(n){return Kj(n)}function du(n){return Yj(n)}function Jr(n){return Hj(n)}function HC(n){return n instanceof AudioBuffer}function rG(n,e){return n==="value"||br(e)||si(e)||HC(e)}function lo(n,...e){if(!e.length)return n;const t=e.shift();if(tr(n)&&tr(t))for(const s in t)rG(s,t[s])?n[s]=t[s]:tr(t[s])?(n[s]||Object.assign(n,{[s]:{}}),lo(n[s],t[s])):Object.assign(n,{[s]:t[s]});return lo(n,...e)}function oG(n,e){return n.length===e.length&&n.every((t,s)=>e[s]===t)}function L(n,e,t=[],s){const i={},r=Array.from(e);if(tr(r[0])&&s&&!Reflect.has(r[0],s)&&(Object.keys(r[0]).some(a=>Reflect.has(n,a))||(lo(i,{[s]:r[0]}),t.splice(t.indexOf(s),1),r.shift())),r.length===1&&tr(r[0]))lo(i,r[0]);else for(let o=0;o<t.length;o++)de(r[o])&&(i[t[o]]=r[o]);return lo(n,i)}function aG(n){return n.constructor.getDefaults()}function uo(n,e){return An(n)?e:n}function jw(n,e){return e.forEach(t=>{Reflect.has(n,t)&&delete n[t]}),n}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;K_(CG);const kG=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;K_(kG);const AG=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;K_(AG);const NG="feedback-comb-filter",xG=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;rk(NG,xG);class zc extends Cr{constructor(){super(L(zc.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const e=L(zc.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),t={};Object.keys(e.urls).forEach(s=>{const i=parseInt(s,10);if(ie(Zl(s)||Ir(i)&&isFinite(i),`url key is neither a note or midi pitch: ${s}`),Zl(s)){const r=new Cn(this.context,s).toMidi();t[r]=e.urls[s]}else Ir(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new G_({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(Cr.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:Ce,onerror:Ce,release:.1,urls:{}})}_findClosest(e){let s=0;for(;s<96;){if(this._buffers.has(e+s))return-s;if(this._buffers.has(e-s))return s;s++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,s=1){return this.log("triggerAttack",e,t,s),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=nk(new Cn(this.context,i).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=tk(c+a),d=new Lc({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,s),Vn(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),p=f.indexOf(d);p!==-1&&f.splice(p,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(s=>{const i=new Cn(this.context,s).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(s=>{for(;s.length;)s.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,s,i=1){const r=this.toSeconds(s);return this.triggerAttack(e,r,i),Vn(t)?(ie(Vn(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{const c=t[Math.min(a,t.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,s){if(ie(Zl(e)||isFinite(e),`note must be a pitch or midi: ${e}`),Zl(e)){const i=new Cn(this.context,e).toMidi();this._buffers.add(i,t,s)}else this._buffers.add(e,t,s);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}Bn([Vs(0)],zc.prototype,"attack",void 0);Bn([Vs(0)],zc.prototype,"release",void 0);class yh extends re{constructor(){super(Object.assign(L(yh.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const e=L(yh.getDefaults(),arguments,["pan"]);this.pan=new Me({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",Xe(this,"pan")}static getDefaults(){return Object.assign(re.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const DG="bit-crusher",RG=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;rk(DG,RG);class vh extends re{constructor(){super(L(vh.getDefaults(),arguments,["channels"])),this.name="Split";const e=L(vh.getDefaults(),arguments,["channels"]);this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(re.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class wh extends re{constructor(){super(L(wh.getDefaults(),arguments,["type","size"])),this.name="Analyser",this._analysers=[],this._buffers=[];const e=L(wh.getDefaults(),arguments,["type","size"]);this.input=this.output=this._gain=new Vt({context:this.context}),this._split=new vh({context:this.context,channels:e.channels}),this.input.connect(this._split),Ns(e.channels,1);for(let t=0;t<e.channels;t++)this._analysers[t]=this.context.createAnalyser(),this._split.connect(this._analysers[t],t,0);this.size=e.size,this.type=e.type}static getDefaults(){return Object.assign(re.getDefaults(),{size:1024,smoothing:.8,type:"fft",channels:1})}getValue(){return this._analysers.forEach((e,t)=>{const s=this._buffers[t];this._type==="fft"?e.getFloatFrequencyData(s):this._type==="waveform"&&e.getFloatTimeDomainData(s)}),this.channels===1?this._buffers[0]:this._buffers}get size(){return this._analysers[0].frequencyBinCount}set size(e){this._analysers.forEach((t,s)=>{t.fftSize=e*2,this._buffers[s]=new Float32Array(e)})}get channels(){return this._analysers.length}get type(){return this._type}set type(e){ie(e==="waveform"||e==="fft",`Analyser: invalid type: ${e}`),this._type=e}get smoothing(){return this._analysers[0].smoothingTimeConstant}set smoothing(e){this._analysers.forEach(t=>t.smoothingTimeConstant=e)}dispose(){return super.dispose(),this._analysers.forEach(e=>e.disconnect()),this._split.dispose(),this._gain.dispose(),this}}class Je extends re{constructor(){super(L(Je.getDefaults(),arguments,["solo"])),this.name="Solo";const e=L(Je.getDefaults(),arguments,["solo"]);this.input=this.output=new Vt({context:this.context}),Je._allSolos.has(this.context)||Je._allSolos.set(this.context,new Set),Je._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(re.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),Je._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){Je._soloed.has(this.context)||Je._soloed.set(this.context,new Set),Je._soloed.get(this.context).add(this)}_removeSolo(){Je._soloed.has(this.context)&&Je._soloed.get(this.context).delete(this)}_isSoloed(){return Je._soloed.has(this.context)&&Je._soloed.get(this.context).has(this)}_noSolos(){return!Je._soloed.has(this.context)||Je._soloed.has(this.context)&&Je._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),Je._allSolos.get(this.context).delete(this),this._removeSolo(),this}}Je._allSolos=new Map;Je._soloed=new Map;class Th extends re{constructor(){super(L(Th.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const e=L(Th.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new yh({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new Er({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,Xe(this,["pan","volume"])}static getDefaults(){return Object.assign(re.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Wi extends re{constructor(){super(L(Wi.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const e=L(Wi.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new Je({solo:e.solo,context:this.context}),this._panVol=this.output=new Th({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Xe(this,["pan","volume"])}static getDefaults(){return Object.assign(re.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Wi.buses.has(e)||Wi.buses.set(e,new Vt({context:this.context})),Wi.buses.get(e)}send(e,t=0){const s=this._getBus(e),i=new Vt({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(s),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Wi.buses=new Map;class OG extends re{constructor(){super(...arguments),this.name="Listener",this.positionX=new Me({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Me({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Me({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Me({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Me({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Me({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Me({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Me({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Me({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(re.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Gd(n=>{n.listener=new OG({context:n})});zd(n=>{n.listener.dispose()});Mn().transport;Mn().destination;Mn().destination;Mn().listener;Mn().draw;Mn();Ht.initializeApp({apiKey:"AIzaSyDYf0BlW0pNhi1e8RYjxMhAov6ngDGJakE",authDomain:"node-drone-c94f1.firebaseapp.com",projectId:"node-drone-c94f1",storageBucket:"node-drone-c94f1.appspot.com",messagingSenderId:"741839883014",appId:"1:741839883014:web:09aec33b0f7b002f822c87"});const PG=[{name:"C",frequency:523.25},{name:"Cs",frequency:554.37},{name:"D",frequency:587.33},{name:"Ds",frequency:622.25},{name:"E",frequency:659.25},{name:"F",frequency:698.46},{name:"Fs",frequency:739.99},{name:"G",frequency:783.99},{name:"Gs",frequency:830.61},{name:"A",frequency:880},{name:"As",frequency:932.33},{name:"B",frequency:987.77}],zw=["fierce","gentle","elegant","funky","quirky"],Hw=["elephant","giraffe","zebra","lion","tiger"],MG=zw[Math.floor(Math.random()*zw.length)],LG=Hw[Math.floor(Math.random()*Hw.length)],FG=`${MG} ${LG}`;Ht.database();const Da=new ze().toDestination();let kf,Ra;Ht.auth().onAuthStateChanged(n=>{console.log(n),n&&(kf=n.uid,Ra=Ht.database().ref(`players/${kf}`),Ra.set({id:kf,name:FG,type:"sine",freq:440,vol:-12,isPlaying:!1,hasClickedPlayerButton:!1}),Ra.on("value",e=>{const t=e.val();console.log("player updated:",t),t.isPlaying?(Da.type=t.type,Da.frequency.value=t.freq,Da.start()):Da.stop()}),Ra.onDisconnect().remove())});Ht.auth().signInAnonymously().catch(n=>{var e=n.code,t=n.message;console.log(e,t)});let Ih=[];const Yp=document.getElementById("playerList"),VG=document.getElementById("visualizer-container");document.getElementById("hostStartBtn").addEventListener("click",()=>{document.getElementById("overlay").style.display="none",VG.style.display="none",Yp.style.display="flex",ek(),ok()});document.getElementById("startBtn").addEventListener("click",()=>{document.getElementById("overlay").style.display="none",ek(),Ra.update({hasClickedPlayerButton:!0}),qG()});function ok(){Yp.innerHTML="";for(const n in Ih){const e=Ih[n];if(!e.hasClickedPlayerButton)continue;const t=document.createElement("div");t.classList.add("player"),t.setAttribute("id","playerDiv");const s=document.createElement("div");s.textContent=e.name,s.classList.add("playerName"),t.appendChild(s);const i=document.createElement("div");i.textContent=`Type: ${e.type}`,i.classList.add("playerType"),t.appendChild(i);const r=document.createElement("div");r.textContent=`Freq: ${e.freq}`,r.classList.add("playerFreq"),t.appendChild(r);const o=document.createElement("div");o.textContent=`Is Playing: ${e.isPlaying}`,o.classList.add("playerIsPlaying"),t.appendChild(o);const a=document.createElement("div");a.classList.add("playerControls");const c=document.createElement("button");c.textContent="Play",c.addEventListener("click",()=>{Ht.database().ref(`players/${n}`).child("isPlaying").set(!0)}),a.appendChild(c);const l=document.createElement("button");l.textContent="Pause",l.addEventListener("click",()=>{Ht.database().ref(`players/${n}`).child("isPlaying").set(!1)}),a.appendChild(l);const u=document.createElement("select");PG.forEach(h=>{const d=document.createElement("option");d.value=h.frequency,d.textContent=h.name,u.appendChild(d)}),u.addEventListener("change",h=>{Ht.database().ref(`players/${n}`).child("freq").set(h.target.value)}),a.appendChild(u),t.appendChild(a),Yp.appendChild(t)}}const UG=Ht.database().ref("players");UG.on("value",n=>{Ih=n.val(),console.log("player list updated:",Ih),ok()});function qG(){const n=new wh("waveform",256),e=document.getElementById("canvas"),t=e.getContext("2d");Da.connect(n);function s(){requestAnimationFrame(s);const i=n.getValue();t.clearRect(0,0,e.width,e.height),t.beginPath();const r=e.width/i.length;let o=0;for(const a of i){const c=(a+1)/2*e.height;o===0?t.moveTo(o,c):t.lineTo(o,c),o+=r}t.stroke()}s()}