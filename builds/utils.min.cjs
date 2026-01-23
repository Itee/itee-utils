"use strict";var e=require("node:fs");function t(e){return e&&e.__esModule?e:{default:e}}var r=t(require("node:path"));
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
 */function n(e){return Array.isArray(e)}function o(e){return!Array.isArray(e)}
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
 */function s(e){return!o(e)&&0===e.length}
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
function i(e){return null!=e}function a(e){return null==e}
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
 */function l(e){return!a(e)&&e.constructor===Number}
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
 */function u(e){return!a(e)&&e.constructor===Object}function c(e){return!u(e)}
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
 */function f(e){return!function(e){return"string"==typeof e||e instanceof String}(e)}
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
 */function b(e){return void 0===e}function p(e){return void 0!==e}
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
function h(e){return!f(e)&&0===e.length}
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
 */function g(e){return!a(e)&&(!!h(e)||(!!s(e)||!!
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
function(e){if(c(e))return!1;if(0===e.length)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)))}function d(e){return!g(e)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/constants
 * @desc Export constants about temperatures
 *
 */function y(e){return!
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
function(e){return l(e)&&e>=-273.14999999955}(e)}
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
 */function v(e){return!function(e){return l(e)&&e>=-459.67}(e)}
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
 */function x(e){return!function(e){return l(e)&&e>=4.5e-10}(e)}function m(e){return x(e)&&y(e)&&v(e)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays
 * @description Export the utilities methods about Arrays
 *
 */
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 *
 */
function A(e){let t="";for(let r=128;r>=1;r/=2)t+=e&r?"1":"0";return t}function O(e){if(f(e))return;let t=0;for(let r=7,n=0;r>=0;r--,n++)"1"===e[r]&&(t+=2**n);return t}const I=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹÐ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"OE",letters:"Œ"},{base:"oe",letters:"œ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}];let w={};for(let e=0;e<I.length;e++){const t=I[e].letters,r=I[e].base;for(let e=0;e<t.length;e++)w[t[e]]=r}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/geomathics/trigonometries
 */
const E=Math.PI,M=Math.PI/2,j=Math.PI/4,N=E/180,S=180/E;function F(e){return e*S}function T(e,t){if(o(e))return!1;if(o(t))return!1;let r=t[0],n=t[1],s=-1;for(let o=0,i=e.length,a=i-1;o<i;a=o++){const i=e[o],l=i[0],u=i[1],c=e[a],f=c[0],b=c[1];$(i,c,t)?s=0:u>n!=b>n&&r<(f-l)*(n-u)/(b-u)+l&&(s=-s)}return s}function $(e,t,r){if(o(e))return!1;if(o(t))return!1;if(o(r))return!1;const n=r[0]-e[0],s=r[1]-e[1];if(0===n&&0===s)return!0;const i=t[0]-e[0],a=t[1]-e[1];if(0===i&&0===a)return!1;const l=(n*i+s*a)/(i*i+a*a);return!(l<0||l>1)&&(0===l||1===l||l*i===n&&l*a===s)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @description Export the utilities methods about temperatures
 * @requires {@link module:sources/cores/numbers}
 */const D=1.8,P=273.14999999955;
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */
const _={null:null,undefined:void 0,void:void 0},R={true:!0,false:!1},C={negativeInfinity:Number.NEGATIVE_INFINITY,negativeMaxValue:-Number.MAX_VALUE,negativeMinSafeInteger:Number.MIN_SAFE_INTEGER,negativeMinValue:-Number.MIN_VALUE,negativeHexa:-1193046,negativePow:-200,negativePowWithDecimals:-123.45,negativeFloat:-1.01,negativeInt:-1,negativeZero:-0,negativeNan:-Number.NaN,positiveNan:Number.NaN,positiveZero:0,positiveInt:1,positiveFloat:1.01,positivePowWithDecimals:123.45,positivePow:200,positiveHexa:1193046,epsilon:Number.EPSILON,positiveMinValue:Number.MIN_VALUE,positiveMaxSafeInteger:Number.MAX_SAFE_INTEGER,positiveMaxValue:Number.MAX_VALUE,positiveInfinity:Number.POSITIVE_INFINITY,e:Math.E,ln10:Math.LN10,ln2:Math.LN2,log10e:Math.LOG10E,log2e:Math.LOG2E,pi:Math.PI,sqrt1_2:Math.SQRT1_2,sqrt2:Math.SQRT2},U=(()=>{const e={empty:"",blank:"      ",stringNull:String(),stringEmpty:String(""),stringBlank:String("    "),foobar:"foobar",stringHexa:"#123456",stringOcta:"00101010"},t=_;for(let r=0,n=t.length;r<n;r++)e[t[r]]=`${t[r]}`;const r=R;for(let t=0,n=r.length;t<n;t++)e[r[t]]=`${r[t]}`;const n=C;for(let t=0,r=n.length;t<r;t++)e[n[t]]=`${n[t]}`;return e})(),L={anonymousFunction:function(){},namedFunction:function(){},arrowFunction:()=>{}},V={emptyArray:[],emptyArrayObject:new Array,singleValued:[0],multiValued:[0,1,2],null:[null,null,null],undefined:[void 0,void 0,void 0],void:[void 0,void 0,void 0],voids:Object.values(_),booleans:Object.values(R),numbers:Object.values(C),strings:Object.values(U),functions:Object.values(L),objects:[{foo:"bar"},{baz:"qux"}],arrays:[[1,2,3],[4,5,6],[7,8,9]]},k={int8Array:new Int8Array([1,2,3]),uInt8Array:new Uint8Array([1,2,3]),int16Array:new Int16Array([1,2,3]),uInt16Array:new Uint16Array([1,2,3]),int32Array:new Int32Array([1,2,3]),uInt32Array:new Uint32Array([1,2,3]),float32Array:new Float32Array([1,2,3]),float64Array:new Float64Array([1,2,3])},z={empty:{},instance:new Object,null:{null:null},undefined:{undefined:void 0},foo:{foo:"bar"}};var B=Object.freeze({__proto__:null,arrays:V,booleans:R,functions:L,numbers:C,objects:z,strings:U,typedArrays:k,voids:_});
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */const G={DataMap:void 0,createDataMap:function(e){void 0===e&&(e={voids:[],booleans:[],numbers:[],strings:[],functions:[],arrays:[],typedArrays:[],objects:[]});let t={};for(let r in e){const n=B[r];if(void 0===n)throw ReferenceError(`The global data map does not contain element for key: ${r}`);const o=e[r];if(t[r]={},0===o.length)for(let e in n)t[r][e]=n[e];else for(let e=0,s=o.length;e<s;e++)t[r][o[e]]=n[o[e]]}return t},createBenchmarkOptions:function(e){return G.DataMap=G.createDataMap(e),{onStart:function(){this.benchDataMap=G.DataMap},onCycle:function(){},onAbort:function(){console.log(`${this.constructor.name} [${this.name}] onAbort`)},onError:function(e){console.log(`${this.constructor.name} [${this.name}] onError`),console.error(e.message)},onReset:function(){console.log(`${this.constructor.name} [${this.name}] onReset`)},onComplete:function(){delete this.benchDataMap},setup:function(){},teardown:function(){}}},createSuiteOptions:function(){let e;return e={onStart:function(){console.log(`Running ${this.constructor.name}: ${this.name}`),this.results=[]},onCycle:function(e){console.log(`Running Bench: ${e.target.name}`),this.results.push(e.target)},onAbort:function(){},onError:function(){},onReset:function(){},onComplete:function(){this.results.sort((e,t)=>e.hz<t.hz?1:e.hz>t.hz?-1:0);for(let e=0,t=this.results.length;e<t;e++)console.log(`${e}: ${String(this.results[e])}`);const e=this.results[0],t=this.results[this.results.length-1],r=(e.hz-t.hz)/t.hz*100;console.log(`\n${e.name} is ${Math.round(r)}% fastest than ${t.name}`),delete this.results}},e},iterateOverDataMap:function(e){return function(){if(void 0===e)throw new ReferenceError("the method param is null or undefined!");const t=this.benchDataMap;for(let r in t){const n=t[r];if(Array.isArray(n))for(let t of n)try{e(t)}catch(r){const n=null===t?"null":void 0===t?"undefined":t.toString();console.error(`method [${e.name} fail with [${n}] => ${r.message}`)}else for(let t in n){const r=n[t];try{e(r)}catch(t){const n=null===r?"null":void 0===r?"undefined":r.toString();console.error(`method [${e.name} fail with [${n}] => ${t.message}`)}}}}},createDataSet:function(e){void 0===e&&(e={voids:[],booleans:[],numbers:[],strings:[],functions:[],arrays:[],typedArrays:[],objects:[]});let t=[];for(let r in e){const n=B[r],o=e[r];if(0===o.length)for(let e in n)t.push(n[e]);else for(let e=0,r=o.length;e<r;e++)t.push(n[o[e]])}return t},createDataSetBenchmarkOptions:function(e){return{setup:function(){this.dataset=G.createDataSet()[e]},teardown:function(){delete this.dataset}}},iterateOverDataSet:function(e){return function(){const t=this.dataset;for(let r=0,n=t.length;r<n;r++)e(t[r])}}};
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
 */function H(e){return!function(e){return"string"==typeof e||e instanceof String}(e)}
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
 */function q(e){return null!=e}
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
 */function Y(t){if(H(t)&&!(t instanceof Buffer)&&!(t instanceof URL))return!1;const r=e.statSync(t,{throwIfNoEntry:!1});return q(r)&&r.isDirectory()}
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
 */function Z(t){if(H(t)&&!(t instanceof Buffer)&&!(t instanceof URL))return!1;const r=e.statSync(t,{throwIfNoEntry:!1});return q(r)&&r.isFile()}
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
 */function J(t){return!function(t){return e.existsSync(t)}(t)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files
 * @description This is the files main export entry point.
 * It exposes all exports of the files validators.
 *
 */function K(t){return e.readdirSync(t)}function W(t){return e.existsSync(t)}function X(t){if(!W(t))throw new Error(`Invalid file path "${t}" file does not exist !`);return e.readFileSync(t,"utf8")}exports.DEG_TO_RAD=N,exports.FAHRENHEIT_CELSIUS_COEFFICIENT=D,exports.FAHRENHEIT_CELSIUS_CONSTANTE=32,exports.KELVIN_CELSIUS_CONSTANTE=P,exports.PI=E,exports.PI_2=M,exports.PI_4=j,exports.RAD_TO_DEG=S,exports.Testing=G,exports.arrays=V,exports.bitsToByte=O,exports.booleans=R,exports.byteToBits=A,exports.celsiusToFahrenheit=function(e,t){if(m(e))return;const r=d(t)&&l(t)?t:2;return(e*D+32).toFixed(r)},exports.celsiusToKelvin=function(e,t){if(m(e))return;const r=d(t)&&l(t)?t:2;return(e+P).toFixed(r)},exports.classNameify=
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings
 * @description Export the utilities methods about strings
 *
 */
function(e){if(!f(e)&&!h(e))return e.charAt(0).toUpperCase()+e.slice(1)},exports.convertWebGLRotationToTopogicalYawPitch=function(e){if(a(e))return;if(c(e))return;const t=e;return{yaw:-(F((r=t,Math.atan2(r.y,r.x)))-90),pitch:F(function(e){return Math.asin(e.z)}(t))};var r}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @see [IFC Standard]{@link http://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/}
 *
 */,exports.createInterval=function(e,t,r){if(!e)return;if(!t)return;if(!r)return;let n=0;setInterval(function(){n>=1?n=0:n+.1>1?n=1:n+=.1;const r=t.getLength();let o,s,i,a=n;for(let n=0,l=e.children.length;n<l;n++)s=e.children[n],o=a/r,o>1&&(o=0),i=t.getPointAt(o),i.y+=.1,s.position.copy(i),a+=1},r)},exports.degreesFromRadians=function(e){return e*S},exports.degreesToRadians=function(e){return e*N},exports.excludesFilesPaths=function(e,t){let r,n=[];for(let t=0,s=e.length;t<s;t++)r=e[t],o(r)||n.push(r);return n;function o(e){let r,n=!1;for(let o=0,s=t.length;o<s;o++)if(r=t[o],r.indexOf(".")>-1){e.replace(/^.*(\\|\/|\\:)/,"")===r&&(n=!0)}else e.contains(r)&&(n=!0);return n}},exports.extend=function e(t,r){let n;if(u(t)&&a(r))n=Object.assign({},t);else if(a(t)&&u(r))n=Object.assign({},r);else if(u(t)&&u(r)){n=Object.assign({},t);const o=Object.keys(r);for(let s=0,i=o.length;s<i;++s){let i=o[s];u(r[i])?i in t?n[i]=e(t[i],r[i]):Object.assign(n,{[i]:r[i]}):Object.assign(n,{[i]:r[i]})}}else n=null;return n},exports.extendObject=function e(t,r){if(!b(t)&&!b(r)){if(t.constructor===Function&&r.constructor===Function)t.prototype=new r,t.prototype.parent=r.prototype,t.prototype.constructor=t;else if(t.constructor===Function&&r.constructor===Object)t.prototype=r,t.prototype.parent=r,t.prototype.constructor=t;else if(t.constructor===Object&&r.constructor===Object)for(let n in r)Object.prototype.hasOwnProperty.call(t,n)&&(r[n].constructor===Object||r[n].constructor===Array)?t[n]=e(t[n],r[n]):t[n]=r[n];else{if(t.constructor!==Array||r.constructor!==Array)throw t.constructor===Object&&r.constructor===Array||t.constructor===Array&&r.constructor===Object?new Error("Cannot perform extend of object with an array"):new Error("Cannot perform extend given parameters...");t=t.concat(r)}return t}},exports.fahrenheitToCelsius=function(e,t){if(m(e))return;const r=d(t)&&l(t)?t:2;return((e-32)/D).toFixed(r)},exports.fahrenheitToKelvin=function(e,t){if(m(e))return;const r=d(t)&&l(t)?t:2;return((e-32)/D+P).toFixed(r)},exports.fileExistForPath=W,exports.filterJavascriptFiles=function(e,t){let n,o=[];for(let s=0,i=e.length;s<i;s++)if(n=e[s],!t||t(n)){{const e=r.default.extname(n);if(n.indexOf("glsl")>-1||".js"!==e)continue}o.push(n)}return o},exports.functions=L,exports.getFileForPath=X,exports.getFilesPathsUnder=function e(t){const o=n(t)?t:[t];let s=[];for(let t=0,n=o.length;t<n;t++){const n=o[t];if(J(n))throw new Error(`The path "${n}" is not valid !`);if(Z(n))s.push(n);else if(Y(n)){const t=K(n).map(t=>e(r.default.resolve(n,t)));t&&(s=[].concat(...t))}}return s},exports.getFilesPathsUnder_1=function(t){let n=[];if(Array.isArray(t)){let e;for(let r=0,n=t.length;r<n;r++)e=t[r],o(e)}else o(t);return n;function o(t){if(!W(t))return void console.error('ES6Converter: Invalid file path "'+t+'"');const s=e.statSync(t);var i;s.isFile()?n.push(t):s.isDirectory()?Array.prototype.push.apply(n,(i=t,void e.readdirSync(i).forEach(e=>{o(r.default.resolve(i,e))}))):console.error("Invalid stat object !")}},exports.getPathsUnder=K,exports.getPitch=function(e){if(!a(e)&&!c(e))return Math.asin(e.y)},exports.getRandom=
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers
 * @description Export the utilities methods about numbers
 *
 */
function(){return Math.random()},exports.getRandomFloatExclusive=function(e=0,t=1){return Math.random()*(t-e)+e},exports.getRandomFloatInclusive=function(e=0,t=1){return Math.random()*(t-e+1)+e},exports.getRandomIntExclusive=function(e=0,t=1){const r=Math.ceil(e),n=Math.floor(t);return Math.floor(Math.random()*(n-r))+r},exports.getRandomIntInclusive=function(e=0,t=1){const r=Math.ceil(e),n=Math.floor(t);return Math.floor(Math.random()*(n-r+1))+r},exports.getUncommentedFileForPath=function(e){return X(e).replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g,"$1")},exports.getYaw=function(e){if(!a(e)&&!c(e))return-Math.atan2(e.x,e.z)},exports.internalRepresentationToNumber=function(e){if(a(e))return;if(f(e))return;const t=e.replace(/ /g,"").match(/.{8}/g);if(null===t)return;const r=t.map(e=>O(e));if(function(e){if(o(e))return!1;if(s(e))return!1;for(let t=0,r=e.length;t<r;t++)if(p(e[t]))return!1;return!0}(r))return;let n=new ArrayBuffer(8),i=new DataView(n);for(let e=0;e<8;e++)i.setUint8(e,r[e]);return i.getFloat64(0)},exports.kelvinToCelsius=function(e,t){if(m(e))return;const r=d(t)&&l(t)?t:2;return(e-P).toFixed(r)},exports.kelvinToFahrenheit=function(e,t){if(m(e))return;const r=d(t)&&l(t)?t:2;return((e-P)*D+32).toFixed(r)},exports.numberToInternalRepresentation=function(e){let t=new ArrayBuffer(8),r=new DataView(t);r.setFloat64(0,e);let n="";for(let e=0;e<8;e++)n+=A(r.getUint8(e));return n=`${n.substring(0,1)} ${n.substring(1,12)} ${n.substring(12)}`,n},exports.numberToPlainString=function(e){const t=String(e);if(!/\d+\.?\d*e[-+]*\d+/i.test(t))return t;const r=t.split("e"),n=r[0],o=0===n.indexOf("-"),s=(o?n.slice(1):n).split("."),i=s[0].length,a=s[1]?s[1].length:0,l=s.join(""),u=r[1],c=0===u.indexOf("-"),f=parseInt(u.slice(1));let b=o?"-":"";return c?(b+="0.",b+="0".repeat(f-i),b+=l):(b+=l,b+="0".repeat(f-a),b+=".0"),b}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/objects
 * @description Export the utilities methods about objects
 */,exports.numbers=C,exports.objects=z,exports.radiansFromDegrees=function(e){return e*N},exports.radiansToDegrees=F,exports.removeDiacritics=function(e){return f(e)?null:e.replace(/[^\u0000-\u007E]/g,e=>w[e]||e)},exports.ringClockwise=function(e){if(o(e))return!1;let t=e.length;if(t<4)return!1;let r=0,n=e[t-1][1]*e[0][0]-e[t-1][0]*e[0][1];for(;++r<t;)n+=e[r-1][1]*e[r][0]-e[r-1][0]*e[r][1];return n>=0},exports.ringContains=T,exports.ringContainsSome=function(e,t){if(o(e))return!1;if(o(t))return!1;let r=0,n=t.length;do{if(T(e,t[r])>0)return!0}while(++r<n);return!1},exports.segmentContains=$,exports.serializeObject=function(){},exports.sortBy=function(e,t="asc"){const r=e;let n;if("asc"===t)n=(e,t)=>e[r]<t[r]?-1:e[r]>t[r]?1:0;else{if("desc"!==t)throw RangeError(`Got invalid ascending [${t}], but expect one of ['asc','desc']!`);n=(e,t)=>e[r]>t[r]?-1:e[r]<t[r]?1:0}return n},exports.strings=U,exports.toArray=function(e,t={keepArray:!1,keepNull:!1}){let r;return r=n(e)?t.keepArray?[e]:e:t.keepNull||"object"==typeof e||u(e)?[e]:[],r},exports.toEnum=function(e){if(!c(e)){if(i(e.toString)){const t=Object.getOwnPropertyDescriptor(e,"toString");if(i(t)&&!1===t.configurable)return}return Object.freeze(Object.defineProperties(e,{toString:{configurable:!1,enumerable:!1,writable:!1,value(){const e=Object.keys(this);let t="";for(let r=0,n=e.length;r<n;r++)t+=`${e[r]}, `;return t=t.slice(0,-2),t}},includes:{configurable:!1,enumerable:!1,writable:!1,value(e){return Object.values(this).includes(e)}},keys:{configurable:!1,enumerable:!1,writable:!1,value(){return Object.keys(this)}},values:{configurable:!1,enumerable:!1,writable:!1,value(){return Object.values(this)}},entries:{configurable:!1,enumerable:!1,writable:!1,value(){return Object.entries(this)}}}))}},exports.typedArrays=k,exports.uniq=function(e){if(o(e))return;const t={};return e.filter(e=>!Object.prototype.hasOwnProperty.call(t,e)&&(t[e]=!0))},exports.voids=_;
