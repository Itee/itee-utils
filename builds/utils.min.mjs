import{statSync as t,existsSync as e,readFileSync as n,readdirSync as r}from"node:fs";import o from"node:path";
/**
 * ┳      ┓┏  ┓• ┓            ━┓ ┏┓ ┏┓      ┏┓ ┳┳┓   ┓  ┓  
 * ┃╋┏┓┏┓ ┃┃┏┓┃┓┏┫┏┓╋┏┓┏┓┏  ┓┏ ┃ ┃┫ ┃┫  ━━  ┣ ┏┃┃┃┏┓┏┫┓┏┃┏┓
 * ┻┗┗ ┗ •┗┛┗┻┗┗┗┻┗┻┗┗┛┛ ┛  ┗┛ ╹•┗┛•┗┛      ┗┛┛┛ ┗┗┛┗┻┗┻┗┗ 
 *                                                         
 * @desc    A library of validation functions use in various Itee projects
 * @author  [Itee (Tristan Valcke)]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses}
 * 
 */
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArray
 * @desc Export functions to validate if a value is an array or not
 * @example {@lang javascript}
 *
 * import { isArray } from 'itee-validators'
 *
 * if( isArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function s(t){return Array.isArray(t)}function i(t){return!Array.isArray(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isEmptyArray
 * @desc Export function to validate if a value is an array of null length or not
 * @example
 *
 * import { isEmptyArray } from 'itee-validators'
 *
 * if( isEmptyArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function a(t){return!i(t)&&0===t.length}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isNull
 * @desc Export function to validate if a value is null or not
 * @example
 *
 * import { isNull } from 'itee-validators'
 *
 * if( isNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isDefined
 * @desc Export function to validate if a value is a defined or not
 * @example
 *
 * import { isDefined } from 'itee-validators'
 *
 * if( isDefined( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */
function u(t){return null!=t}function l(t){return null==t}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isNumber
 * @desc Export function to validate if a value is a number, or with special sign
 * @example
 *
 * import { isNumber } from 'itee-validators'
 *
 * if( isNumber( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function c(t){return!l(t)&&t.constructor===Number}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/objects/isObject
 * @desc Export function to validate if a value is an object
 * @example
 *
 * import { isObject } from 'itee-validators'
 *
 * if( isObject( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function f(t){return!l(t)&&t.constructor===Object}function b(t){return!f(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isString
 * @desc Export function to validate if a value is a string
 * @example
 *
 * import { isString } from 'itee-validators'
 *
 * if( isString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function h(t){return!function(t){return"string"==typeof t||t instanceof String}(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isUndefined
 * @desc Export function to validate if a value is a void
 * @example
 *
 * import { isNull } from 'itee-validators'
 *
 * if( isNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function p(t){return void 0===t}function g(t){return void 0!==t}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfUndefined
 * @desc Export function to validate if a value is an array of undefined values or not
 * @example
 *
 * import { isArrayOfUndefined } from 'itee-validators'
 *
 * if( isArrayOfUndefined( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isEmptyString
 * @desc Export function to validate if a value is a empty string
 * @example
 *
 * import { isEmptyString } from 'itee-validators'
 *
 * if( isEmptyString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */
function d(t){return!h(t)&&0===t.length}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isEmpty
 * @desc Export function to validate if a value could be considered as empty
 * @example
 *
 * import { isEmpty } from 'itee-validators'
 *
 * if( isEmpty( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function y(t){return!l(t)&&(!!d(t)||(!!a(t)||!!
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/objects/isEmptyObject
 * @desc Export function to validate if a value is an empty object
 * @example
 *
 * import { isEmptyObject } from 'itee-validators'
 *
 * if( isEmptyObject( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */
function(t){if(b(t))return!1;if(0===t.length)return!0;for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)))}function v(t){return!y(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/constants
 * @desc Export constants about temperatures
 *
 */function m(t){return!
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @desc Export function to validate if a value is a Celsius temperature
 * @example
 *
 * import { isCelsius } from 'itee-validators'
 *
 * if( isCelsius( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */
function(t){return c(t)&&t>=-273.14999999955}(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @desc Export function to validate if a value is a Fahrenheit temperature
 * @example
 *
 * import { isFahrenheit } from 'itee-validators'
 *
 * if( isFahrenheit( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function A(t){return!function(t){return c(t)&&t>=-459.67}(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @desc Export function to validate if a value is a kelvin temperature
 * @example
 *
 * import { isKelvin } from 'itee-validators'
 *
 * if( isKelvin( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function O(t){return!function(t){return c(t)&&t>=4.5e-10}(t)}function w(t){return O(t)&&m(t)&&A(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays
 * @description Export the utilities methods about Arrays
 *
 */function M(t,e="asc"){const n=t;let r;if("asc"===e)r=(t,e)=>t[n]<e[n]?-1:t[n]>e[n]?1:0;else{if("desc"!==e)throw RangeError(`Got invalid ascending [${e}], but expect one of ['asc','desc']!`);r=(t,e)=>t[n]>e[n]?-1:t[n]<e[n]?1:0}return r}function j(t,e={keepArray:!1,keepNull:!1}){let n;return n=s(t)?e.keepArray?[t]:t:e.keepNull||"object"==typeof t||f(t)?[t]:[],n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 *
 */function I(t){let e="";for(let n=128;n>=1;n/=2)e+=t&n?"1":"0";return e}function N(t){if(h(t))return;let e=0;for(let n=7,r=0;n>=0;n--,r++)"1"===t[n]&&(e+=2**r);return e}function E(t){let e=new ArrayBuffer(8),n=new DataView(e);n.setFloat64(0,t);let r="";for(let t=0;t<8;t++)r+=I(n.getUint8(t));return r=`${r.substring(0,1)} ${r.substring(1,12)} ${r.substring(12)}`,r}function $(t){if(l(t))return;if(h(t))return;const e=t.replace(/ /g,"").match(/.{8}/g);if(null===e)return;const n=e.map(t=>N(t));if(function(t){if(i(t))return!1;if(a(t))return!1;for(let e=0,n=t.length;e<n;e++)if(g(t[e]))return!1;return!0}(n))return;let r=new ArrayBuffer(8),o=new DataView(r);for(let t=0;t<8;t++)o.setUint8(t,n[t]);return o.getFloat64(0)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers
 * @description Export the utilities methods about numbers
 *
 */function S(){return Math.random()}function x(t=0,e=1){return Math.random()*(e-t)+t}function F(t=0,e=1){return Math.random()*(e-t+1)+t}function D(t=0,e=1){const n=Math.ceil(t),r=Math.floor(e);return Math.floor(Math.random()*(r-n))+n}function P(t=0,e=1){const n=Math.ceil(t),r=Math.floor(e);return Math.floor(Math.random()*(r-n+1))+n}function V(t){const e=String(t);if(!/\d+\.?\d*e[-+]*\d+/i.test(e))return e;const n=e.split("e"),r=n[0],o=0===r.indexOf("-"),s=(o?r.slice(1):r).split("."),i=s[0].length,a=s[1]?s[1].length:0,u=s.join(""),l=n[1],c=0===l.indexOf("-"),f=parseInt(l.slice(1));let b=o?"-":"";return c?(b+="0.",b+="0".repeat(f-i),b+=u):(b+=u,b+="0".repeat(f-a),b+=".0"),b}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/objects
 * @description Export the utilities methods about objects
 */function z(t){if(i(t))return;const e={};return t.filter(t=>!Object.prototype.hasOwnProperty.call(e,t)&&(e[t]=!0))}function L(t,e){let n;if(f(t)&&l(e))n=Object.assign({},t);else if(l(t)&&f(e))n=Object.assign({},e);else if(f(t)&&f(e)){n=Object.assign({},t);const r=Object.keys(e);for(let o=0,s=r.length;o<s;++o){let s=r[o];f(e[s])?s in t?n[s]=L(t[s],e[s]):Object.assign(n,{[s]:e[s]}):Object.assign(n,{[s]:e[s]})}}else n=null;return n}function R(){}function U(t,e){if(!p(t)&&!p(e)){if(t.constructor===Function&&e.constructor===Function)t.prototype=new e,t.prototype.parent=e.prototype,t.prototype.constructor=t;else if(t.constructor===Function&&e.constructor===Object)t.prototype=e,t.prototype.parent=e,t.prototype.constructor=t;else if(t.constructor===Object&&e.constructor===Object)for(let n in e)Object.prototype.hasOwnProperty.call(t,n)&&(e[n].constructor===Object||e[n].constructor===Array)?t[n]=U(t[n],e[n]):t[n]=e[n];else{if(t.constructor!==Array||e.constructor!==Array)throw t.constructor===Object&&e.constructor===Array||t.constructor===Array&&e.constructor===Object?new Error("Cannot perform extend of object with an array"):new Error("Cannot perform extend given parameters...");t=t.concat(e)}return t}}function _(t,e,n){if(!t)return;if(!e)return;if(!n)return;let r=0;setInterval(function(){r>=1?r=0:r+.1>1?r=1:r+=.1;const n=e.getLength();let o,s,i,a=r;for(let r=0,u=t.children.length;r<u;r++)s=t.children[r],o=a/n,o>1&&(o=0),i=e.getPointAt(o),i.y+=.1,s.position.copy(i),a+=1},n)}function k(t){if(!b(t)){if(u(t.toString)){const e=Object.getOwnPropertyDescriptor(t,"toString");if(u(e)&&!1===e.configurable)return}return Object.freeze(Object.defineProperties(t,{toString:{configurable:!1,enumerable:!1,writable:!1,value(){const t=Object.keys(this);let e="";for(let n=0,r=t.length;n<r;n++)e+=`${t[n]}, `;return e=e.slice(0,-2),e}},includes:{configurable:!1,enumerable:!1,writable:!1,value(t){return Object.values(this).includes(t)}},keys:{configurable:!1,enumerable:!1,writable:!1,value(){return Object.keys(this)}},values:{configurable:!1,enumerable:!1,writable:!1,value(){return Object.values(this)}},entries:{configurable:!1,enumerable:!1,writable:!1,value(){return Object.entries(this)}}}))}}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings
 * @description Export the utilities methods about strings
 *
 */function T(t){if(!h(t)&&!d(t))return t.charAt(0).toUpperCase()+t.slice(1)}const B=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹÐ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"OE",letters:"Œ"},{base:"oe",letters:"œ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}];let C={};for(let t=0;t<B.length;t++){const e=B[t].letters,n=B[t].base;for(let t=0;t<e.length;t++)C[e[t]]=n}function G(t){return h(t)?null:t.replace(/[^\u0000-\u007E]/g,t=>C[t]||t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/geomathics/trigonometries
 */const Y=Math.PI,Z=Math.PI/2,q=Math.PI/4,H=Y/180,X=180/Y;function J(t){return t*H}function Q(t){return t*X}function W(t){return t*X}function K(t){return t*H}function tt(t){if(!l(t)&&!b(t))return-Math.atan2(t.x,t.z)}function et(t){if(!l(t)&&!b(t))return Math.asin(t.y)}function nt(t){if(l(t))return;if(b(t))return;const e=t;return{yaw:-(W((n=e,Math.atan2(n.y,n.x)))-90),pitch:W(function(t){return Math.asin(t.z)}(e))};var n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @see [IFC Standard]{@link http://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/}
 *
 */function rt(t){if(i(t))return!1;let e=t.length;if(e<4)return!1;let n=0,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];for(;++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r>=0}function ot(t,e){if(i(t))return!1;if(i(e))return!1;let n=0,r=e.length;do{if(st(t,e[n])>0)return!0}while(++n<r);return!1}function st(t,e){if(i(t))return!1;if(i(e))return!1;let n=e[0],r=e[1],o=-1;for(let s=0,i=t.length,a=i-1;s<i;a=s++){const i=t[s],u=i[0],l=i[1],c=t[a],f=c[0],b=c[1];it(i,c,e)?o=0:l>r!=b>r&&n<(f-u)*(r-l)/(b-l)+u&&(o=-o)}return o}function it(t,e,n){if(i(t))return!1;if(i(e))return!1;if(i(n))return!1;const r=n[0]-t[0],o=n[1]-t[1];if(0===r&&0===o)return!0;const s=e[0]-t[0],a=e[1]-t[1];if(0===s&&0===a)return!1;const u=(r*s+o*a)/(s*s+a*a);return!(u<0||u>1)&&(0===u||1===u||u*s===r&&u*a===o)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @description Export the utilities methods about temperatures
 * @requires {@link module:sources/cores/numbers}
 */const at=1.8,ut=32,lt=273.14999999955;function ct(t,e){if(w(t))return;const n=v(e)&&c(e)?e:2;return(t+lt).toFixed(n)}function ft(t,e){if(w(t))return;const n=v(e)&&c(e)?e:2;return(t*at+32).toFixed(n)}function bt(t,e){if(w(t))return;const n=v(e)&&c(e)?e:2;return((t-32)/at).toFixed(n)}function ht(t,e){if(w(t))return;const n=v(e)&&c(e)?e:2;return((t-32)/at+lt).toFixed(n)}function pt(t,e){if(w(t))return;const n=v(e)&&c(e)?e:2;return(t-lt).toFixed(n)}function gt(t,e){if(w(t))return;const n=v(e)&&c(e)?e:2;return((t-lt)*at+32).toFixed(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */const dt={null:null,undefined:void 0,void:void 0},yt={true:!0,false:!1},vt={negativeInfinity:Number.NEGATIVE_INFINITY,negativeMaxValue:-Number.MAX_VALUE,negativeMinSafeInteger:Number.MIN_SAFE_INTEGER,negativeMinValue:-Number.MIN_VALUE,negativeHexa:-1193046,negativePow:-200,negativePowWithDecimals:-123.45,negativeFloat:-1.01,negativeInt:-1,negativeZero:-0,negativeNan:-Number.NaN,positiveNan:Number.NaN,positiveZero:0,positiveInt:1,positiveFloat:1.01,positivePowWithDecimals:123.45,positivePow:200,positiveHexa:1193046,epsilon:Number.EPSILON,positiveMinValue:Number.MIN_VALUE,positiveMaxSafeInteger:Number.MAX_SAFE_INTEGER,positiveMaxValue:Number.MAX_VALUE,positiveInfinity:Number.POSITIVE_INFINITY,e:Math.E,ln10:Math.LN10,ln2:Math.LN2,log10e:Math.LOG10E,log2e:Math.LOG2E,pi:Math.PI,sqrt1_2:Math.SQRT1_2,sqrt2:Math.SQRT2},mt=(()=>{const t={empty:"",blank:"      ",stringNull:String(),stringEmpty:String(""),stringBlank:String("    "),foobar:"foobar",stringHexa:"#123456",stringOcta:"00101010"},e=dt;for(let n=0,r=e.length;n<r;n++)t[e[n]]=`${e[n]}`;const n=yt;for(let e=0,r=n.length;e<r;e++)t[n[e]]=`${n[e]}`;const r=vt;for(let e=0,n=r.length;e<n;e++)t[r[e]]=`${r[e]}`;return t})(),At={anonymousFunction:function(){},namedFunction:function(){},arrowFunction:()=>{}},Ot={emptyArray:[],emptyArrayObject:new Array,singleValued:[0],multiValued:[0,1,2],null:[null,null,null],undefined:[void 0,void 0,void 0],void:[void 0,void 0,void 0],voids:Object.values(dt),booleans:Object.values(yt),numbers:Object.values(vt),strings:Object.values(mt),functions:Object.values(At),objects:[{foo:"bar"},{baz:"qux"}],arrays:[[1,2,3],[4,5,6],[7,8,9]]},wt={int8Array:new Int8Array([1,2,3]),uInt8Array:new Uint8Array([1,2,3]),int16Array:new Int16Array([1,2,3]),uInt16Array:new Uint16Array([1,2,3]),int32Array:new Int32Array([1,2,3]),uInt32Array:new Uint32Array([1,2,3]),float32Array:new Float32Array([1,2,3]),float64Array:new Float64Array([1,2,3])},Mt={empty:{},instance:new Object,null:{null:null},undefined:{undefined:void 0},foo:{foo:"bar"}};var jt=Object.freeze({__proto__:null,arrays:Ot,booleans:yt,functions:At,numbers:vt,objects:Mt,strings:mt,typedArrays:wt,voids:dt});
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */const It={DataMap:void 0,createDataMap:function(t){void 0===t&&(t={voids:[],booleans:[],numbers:[],strings:[],functions:[],arrays:[],typedArrays:[],objects:[]});let e={};for(let n in t){const r=jt[n];if(void 0===r)throw ReferenceError(`The global data map does not contain element for key: ${n}`);const o=t[n];if(e[n]={},0===o.length)for(let t in r)e[n][t]=r[t];else for(let t=0,s=o.length;t<s;t++)e[n][o[t]]=r[o[t]]}return e},createBenchmarkOptions:function(t){return It.DataMap=It.createDataMap(t),{onStart:function(){this.benchDataMap=It.DataMap},onCycle:function(){},onAbort:function(){console.log(`${this.constructor.name} [${this.name}] onAbort`)},onError:function(t){console.log(`${this.constructor.name} [${this.name}] onError`),console.error(t.message)},onReset:function(){console.log(`${this.constructor.name} [${this.name}] onReset`)},onComplete:function(){delete this.benchDataMap},setup:function(){},teardown:function(){}}},createSuiteOptions:function(){let t;return t={onStart:function(){console.log(`Running ${this.constructor.name}: ${this.name}`),this.results=[]},onCycle:function(t){console.log(`Running Bench: ${t.target.name}`),this.results.push(t.target)},onAbort:function(){},onError:function(){},onReset:function(){},onComplete:function(){this.results.sort((t,e)=>t.hz<e.hz?1:t.hz>e.hz?-1:0);for(let t=0,e=this.results.length;t<e;t++)console.log(`${t}: ${String(this.results[t])}`);const t=this.results[0],e=this.results[this.results.length-1],n=(t.hz-e.hz)/e.hz*100;console.log(`\n${t.name} is ${Math.round(n)}% fastest than ${e.name}`),delete this.results}},t={},t},iterateOverDataMap:function(t){return function(){if(void 0===t)throw new ReferenceError("the method param is null or undefined!");const e=this.benchDataMap;for(let n in e){const r=e[n];if(Array.isArray(r))for(let e of r)try{t(e)}catch(n){const r=null===e?"null":void 0===e?"undefined":e.toString();console.error(`method [${t.name} fail with [${r}] => ${n.message}`)}else for(let e in r){const n=r[e];try{t(n)}catch(e){const r=null===n?"null":void 0===n?"undefined":n.toString();console.error(`method [${t.name} fail with [${r}] => ${e.message}`)}}}}},createDataSet:function(t){void 0===t&&(t={voids:[],booleans:[],numbers:[],strings:[],functions:[],arrays:[],typedArrays:[],objects:[]});let e=[];for(let n in t){const r=jt[n],o=t[n];if(0===o.length)for(let t in r)e.push(r[t]);else for(let t=0,n=o.length;t<n;t++)e.push(r[o[t]])}return e},createDataSetBenchmarkOptions:function(t){return{setup:function(){this.dataset=It.createDataSet()[t]},teardown:function(){delete this.dataset}}},iterateOverDataSet:function(t){return function(){const e=this.dataset;for(let n=0,r=e.length;n<r;n++)t(e[n])}}};
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isString
 * @desc Export function to validate if a value is a string
 * @example
 *
 * import { isString } from 'itee-validators'
 *
 * if( isString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Nt(t){return!function(t){return"string"==typeof t||t instanceof String}(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isDefined
 * @desc Export function to validate if a value is a defined or not
 * @example
 *
 * import { isDefined } from 'itee-validators'
 *
 * if( isDefined( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Et(t){return null!=t}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/directories/isDirectoryPath
 * @description Export function to validate if a value is a directories path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isDirectoryPath } from 'itee-validators'
 *
 * if( isDirectoryPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function $t(e){if(Nt(e)&&!(e instanceof Buffer)&&!(e instanceof URL))return!1;const n=t(e,{throwIfNoEntry:!1});return Et(n)&&n.isDirectory()}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files/isFilePath
 * @description Export function to validate if a value is a file path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isFilePath } from 'itee-validators'
 *
 * if( isFilePath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function St(e){if(Nt(e)&&!(e instanceof Buffer)&&!(e instanceof URL))return!1;const n=t(e,{throwIfNoEntry:!1});return Et(n)&&n.isFile()}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/paths/isValidPath
 * @description Export function to validate if a value is a valid path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isValidPath } from 'itee-validators'
 *
 * if( isValidPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function xt(t){return!function(t){return e(t)}(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files
 * @description This is the files main export entry point.
 * It exposes all exports of the files validators.
 *
 */function Ft(t){return r(t)}function Dt(t){const e=s(t)?t:[t];let n=[];for(let t=0,r=e.length;t<r;t++){const r=e[t];if(xt(r))throw new Error(`The path "${r}" is not valid !`);if(St(r))n.push(r);else if($t(r)){const t=Ft(r).map(t=>Dt(o.resolve(r,t)));t&&(n=[].concat(...t))}}return n}function Pt(e){let n=[];if(Array.isArray(e)){let t;for(let n=0,r=e.length;n<r;n++)t=e[n],s(t)}else s(e);return n;function s(e){if(!Vt(e))return void console.error('ES6Converter: Invalid file path "'+e+'"');const i=t(e);var a;i.isFile()?n.push(e):i.isDirectory()?Array.prototype.push.apply(n,void r(a=e).forEach(t=>{s(o.resolve(a,t))})):console.error("Invalid stat object !")}}function Vt(t){return e(t)}function zt(t){if(!Vt(t))throw new Error(`Invalid file path "${t}" file does not exist !`);return n(t,"utf8")}function Lt(t){return zt(t).replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g,"$1")}function Rt(t,e){let n,r=[];for(let e=0,s=t.length;e<s;e++)n=t[e],o(n)||r.push(n);return r;function o(t){let n,r=!1;for(let o=0,s=e.length;o<s;o++)if(n=e[o],n.indexOf(".")>-1){t.replace(/^.*(\\|\/|\\:)/,"")===n&&(r=!0)}else t.contains(n)&&(r=!0);return r}}function Ut(t,e){let n,r=[];for(let s=0,i=t.length;s<i;s++)if(n=t[s],!e||e(n)){{const t=o.extname(n);if(n.indexOf("glsl")>-1||".js"!==t)continue}r.push(n)}return r}export{H as DEG_TO_RAD,at as FAHRENHEIT_CELSIUS_COEFFICIENT,ut as FAHRENHEIT_CELSIUS_CONSTANTE,lt as KELVIN_CELSIUS_CONSTANTE,Y as PI,Z as PI_2,q as PI_4,X as RAD_TO_DEG,It as Testing,Ot as arrays,N as bitsToByte,yt as booleans,I as byteToBits,ft as celsiusToFahrenheit,ct as celsiusToKelvin,T as classNameify,nt as convertWebGLRotationToTopogicalYawPitch,_ as createInterval,Q as degreesFromRadians,J as degreesToRadians,Rt as excludesFilesPaths,L as extend,U as extendObject,bt as fahrenheitToCelsius,ht as fahrenheitToKelvin,Vt as fileExistForPath,Ut as filterJavascriptFiles,At as functions,zt as getFileForPath,Dt as getFilesPathsUnder,Pt as getFilesPathsUnder_1,Ft as getPathsUnder,et as getPitch,S as getRandom,x as getRandomFloatExclusive,F as getRandomFloatInclusive,D as getRandomIntExclusive,P as getRandomIntInclusive,Lt as getUncommentedFileForPath,tt as getYaw,$ as internalRepresentationToNumber,pt as kelvinToCelsius,gt as kelvinToFahrenheit,E as numberToInternalRepresentation,V as numberToPlainString,vt as numbers,Mt as objects,K as radiansFromDegrees,W as radiansToDegrees,G as removeDiacritics,rt as ringClockwise,st as ringContains,ot as ringContainsSome,it as segmentContains,R as serializeObject,M as sortBy,mt as strings,j as toArray,k as toEnum,wt as typedArrays,z as uniq,dt as voids};
