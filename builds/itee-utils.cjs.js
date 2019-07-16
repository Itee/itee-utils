'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays
 * @description Export the utilities methods about Arrays
 *
 */

function sortBy( propertyName, ascending = 'asc' ) {

    const _propertyName = propertyName;
    let resultSorter = undefined;

    if ( ascending === 'asc') {

        resultSorter = ( a, b ) => {

            if ( a[_propertyName] < b[_propertyName] ) {
                return -1
            }

            if ( a[_propertyName] > b[_propertyName] ) {
                return 1
            }

            return 0

        };

    } else if( ascending === 'desc') {

        resultSorter = ( a, b ) => {

            if ( a[_propertyName] > b[_propertyName] ) {
                return -1
            }

            if ( a[_propertyName] < b[_propertyName] ) {
                return 1
            }

            return 0

        };

    } else {

        throw "Invalid ascending !"

    }

    return resultSorter

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers
 * @description Export the utilities methods about numbers
 *
 */

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary ( min = 0, max = 1 ) {
    return Math.random() * ( max - min ) + min
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt ( min = 0, max = 1 ) {
    return ( Math.floor( Math.random() * ( max - min + 1 ) ) + min )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array or not
 * @example
 *
 * import { isArray } from 'itee-validators'
 *
 * if( isArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */



////////////////////

/**
 * Check if given data is not an array
 *
 * @param data {*} The data to check against the array type
 * @returns {boolean} true if data is not array, false otherwise
 */
function isNotArray ( data ) {
    return !Array.isArray( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is an empty array
 *
 * @param data {*} The data to check against the empty array
 * @returns {boolean} true if data is an empty array, false otherwise
 */
function isEmptyArray ( data ) {

    if ( isNotArray( data ) ) { return false }

    return ( data.length === 0 )

}

/////

/**
 * Check if given data is null or undefined
 *
 * @param data {*} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/objects
 * @desc Export function to validate if a value is an object
 * @example todo
 *
 */

/**
 * Check if given data is an object
 *
 * @param data {*} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
function isObject ( data ) {

    if ( isNotDefined( data ) ) { return false }

    return ( data.constructor === Object )
}

////

/**
 * Check if given data is not an object
 *
 * @param data {*} The data to check against the object type
 * @returns {boolean} true if data is not an object, false otherwise
 */
function isNotObject ( data ) {
    return !isObject( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

/**
 * Check if given data is a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is a string, false otherwise.
 */
function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}



//////

/**
 * Check if given data is not a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is not a string, false otherwise.
 */
function isNotString ( data ) {
    return !isString( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isNumber
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if given data is a number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a number, false otherwise.
 */
function isNumber ( data ) {

    if ( isNotDefined( data ) ) { return false }

    return ( data.constructor === Number )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_numbers
 * @description Export the validation methods about numbers
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/objects
 * @desc Export function to validate if a value is an object
 * @example todo
 *
 */

/**
 * Check if given data is an empty object
 *
 * @param data {*} The data to check against the emptiness of the object
 * @returns {boolean} true if data is an empty object, false otherwise
 */
function isEmptyObject ( data ) {

    if ( isNotObject( data ) ) { return false }

    if ( data.length === 0 ) {
        return true
    }

    // Otherwise, does it have any properties of its own?
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false
        }
    }

    return true

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_objects
 * @description Export the validation methods about objects
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

/**
 * Check if given data is an empty string
 *
 * @param data {*} The data to check against the emptiness of the string
 * @returns {boolean} true if data is an empty string, false otherwise.
 */
function isEmptyString ( data ) {

    if ( isNotString( data ) ) {
        return false
    }

    return ( data.length === 0 )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_symbols
 * @description Export the validation methods about symbols
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/voids
 * @desc Export function to validate if a value is a void
 * @example todo
 *
 */

/**
 * Check emptiness of given data
 *
 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
 *
 * @param data {*} The data to check against the emptiness
 * @returns {boolean} true if data is considered as empty, false otherwise.
 */
function isEmpty ( data ) {

    if ( isNotDefined( data ) ) { return false }
    if ( isEmptyString( data ) ) { return true}
    if ( isEmptyArray( data ) ) { return true }
    if ( isEmptyObject( data ) ) { return true }

    return false

}

///

/**
 * Check fullness of given data
 *
 * @param data {*} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
function isNotEmpty ( data ) {
    return !isEmpty( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_cores
 * @description This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_cores
 * @description This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/maths/_maths
 * @description This is the maths export entry point.
 * It expose all exports of the ... sub-folder.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export constants about temperatures
 * @example todo
 *
 */

const ABSOLUTE_ZERO_KELVIN     = 0.00000000045;
const ABSOLUTE_ZERO_CELSIUS    = -273.14999999955;
const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isCelsius ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS )
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotCelsius ( data ) {
    return !isCelsius( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isFahrenheit ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT )
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotFahrenheit ( data ) {
    return !isFahrenheit( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isKelvin ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN )
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotKelvin ( data ) {
    return !isKelvin( data )
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotTemperature ( data ) {
    return ( isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects
 * @description Export the utilities methods about objects
 */

function uniq ( a ) {
    var seen = {};
    return a.filter( function ( item ) {
        return seen.hasOwnProperty( item ) ? false : ( seen[ item ] = true )
    } )
}

/**
 *
 * @param target
 * @param source
 * @return {*}
 */
function extend ( target, source ) {

    let output = undefined;

    if ( isObject( target ) && isNotDefined( source ) ) {

        output = Object.assign( {}, target );

    } else if ( isNotDefined( target ) && isObject( source ) ) {

        output = Object.assign( {}, source );

    } else if ( isObject( target ) && isObject( source ) ) {

        output = Object.assign( {}, target );

        const keys = Object.keys( source );

        for ( let i = 0, n = keys.length ; i < n ; ++i ) {

            let key = keys[ i ];

            if ( isObject( source[ key ] ) ) {

                if ( key in target ) {

                    output[ key ] = extend( target[ key ], source[ key ] );

                } else {

                    Object.assign( output, { [ key ]: source[ key ] } );

                }

            } else {

                Object.assign( output, { [ key ]: source[ key ] } );

            }

        }

    } else {

        output = null;

    }

    return output

}

/**
 * Remove old inheritance stuff due to es6 class !
 */
function serializeObject () {

    //    var object = {}
    //    var a = this.serializeArray()
    //
    //    $.each( a, function () {
    //        if ( object[ this.name ] !== undefined ) {
    //            if ( !object[ this.name ].push ) {
    //                object[ this.name ] = [ object[ this.name ] ]
    //            }
    //            object[ this.name ].push( this.value || '' )
    //        } else {
    //            object[ this.name ] = this.value || ''
    //        }
    //    } )
    //
    //    return object

}

/**
 *
 * @param ChildClass
 * @param ParentClassOrObject
 * @return {*}
 */
function extendObject ( ChildClass, ParentClassOrObject ) {

    if ( ChildClass.constructor === Function && ParentClassOrObject.constructor === Function ) {

        // Normal Inheritance
        ChildClass.prototype             = new ParentClassOrObject();
        ChildClass.prototype.parent      = ParentClassOrObject.prototype;
        ChildClass.prototype.constructor = ChildClass;

    } else if ( ChildClass.constructor === Function && ParentClassOrObject.constructor === Object ) {

        // Pure Virtual Inheritance
        ChildClass.prototype             = ParentClassOrObject;
        ChildClass.prototype.parent      = ParentClassOrObject;
        ChildClass.prototype.constructor = ChildClass;

    } else if ( ChildClass.constructor === Object && ParentClassOrObject.constructor === Object ) {

        //Object Concatenation Inheritance
        for ( let attribute in ParentClassOrObject ) {

            if ( ChildClass.hasOwnProperty( attribute ) ) { // We are sure that obj[key] belongs to the object and was not inherited.

                if ( ParentClassOrObject[ attribute ].constructor === Object || ParentClassOrObject[ attribute ].constructor === Array ) {

                    ChildClass[ attribute ] = extendObject( ChildClass[ attribute ], ParentClassOrObject[ attribute ] );

                } else {

                    ChildClass[ attribute ] = ParentClassOrObject[ attribute ];

                }

            } else {

                ChildClass[ attribute ] = ParentClassOrObject[ attribute ];

            }

        }

    } else if ( ChildClass.constructor === Array && ParentClassOrObject.constructor === Array ) {

        ChildClass = ChildClass.concat( ParentClassOrObject );

    } else if ( ChildClass.constructor === Object && ParentClassOrObject.constructor === Array ||
        ChildClass.constructor === Array && ParentClassOrObject.constructor === Object ) {

        throw new Error( 'Cannot perform extend of object with an array' )

    } else {

        throw new Error( 'Cannot perform extend given parameters...' )

    }

    return ChildClass

}

/**
 *
 * @param particles
 * @param path
 * @param interval
 */
function createInterval ( particles, path, interval ) {

    var globalOffset = 0;

    setInterval( function () {

        var moveOffset             = 0.1;
        var DELTA_BETWEEN_PARTICLE = 1; // meter

        if ( globalOffset >= DELTA_BETWEEN_PARTICLE ) {
            globalOffset = 0;
        } else if ( globalOffset + moveOffset > DELTA_BETWEEN_PARTICLE ) { // Avoid final gap jump before new "loop"
            globalOffset = DELTA_BETWEEN_PARTICLE;
        } else {
            globalOffset += moveOffset;
        }

        var pathLength       = path.getLength();
        var localOffset      = globalOffset;
        var normalizedOffset = undefined;
        var particle         = undefined;
        var newPosition      = undefined;

        for ( var i = 0, numberOfParticles = particles.children.length ; i < numberOfParticles ; i++ ) {

            particle         = particles.children[ i ];
            normalizedOffset = localOffset / pathLength;

            // End of path ( last particle could go to void, but got an error with getPointAt)
            if ( normalizedOffset > 1 ) {
                normalizedOffset = 0;
            }

            newPosition = path.getPointAt( normalizedOffset );
            newPosition.y += 0.1;

            particle.position.copy( newPosition );

            localOffset += DELTA_BETWEEN_PARTICLE;

        }

    }, interval );

}

function toEnum ( enumValues ) {

    return Object.freeze( Object.defineProperty( enumValues, 'toString', {
        configurable: false,
        enumerable:   false,
        writable:     false,
        value:        function _toString () {

            const keys = Object.keys( this );
            let result = '';
            for ( let index = 0, numberOfValues = keys.length ; index < numberOfValues ; index++ ) {
                result += `${keys[ index ]}, `;
            }
            result = result.slice( 0, -2 );
            return result

        }
    } ) )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings
 * @description Export the utilities methods about strings
 *
 */

/**
 * Set the first char to upper case like a classname
 * @param word
 * @returns {string}
 */
function classNameify ( word ) {
    return word.charAt( 0 ).toUpperCase() + word.slice( 1 )
}

/**
 * @static
 * @public
 * @memberOf TApplication
 */
let diacriticsMap = ( () => {

    /*
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
     */

    const defaultDiacriticsRemovalMap = [
        {
            'base':    'A',
            'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
        },
        {
            'base':    'AA',
            'letters': '\uA732'
        },
        {
            'base':    'AE',
            'letters': '\u00C6\u01FC\u01E2'
        },
        {
            'base':    'AO',
            'letters': '\uA734'
        },
        {
            'base':    'AU',
            'letters': '\uA736'
        },
        {
            'base':    'AV',
            'letters': '\uA738\uA73A'
        },
        {
            'base':    'AY',
            'letters': '\uA73C'
        },
        {
            'base':    'B',
            'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
        },
        {
            'base':    'C',
            'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
        },
        {
            'base':    'D',
            'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0'
        },
        {
            'base':    'DZ',
            'letters': '\u01F1\u01C4'
        },
        {
            'base':    'Dz',
            'letters': '\u01F2\u01C5'
        },
        {
            'base':    'E',
            'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
        },
        {
            'base':    'F',
            'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
        },
        {
            'base':    'G',
            'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
        },
        {
            'base':    'H',
            'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
        },
        {
            'base':    'I',
            'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
        },
        {
            'base':    'J',
            'letters': '\u004A\u24BF\uFF2A\u0134\u0248'
        },
        {
            'base':    'K',
            'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
        },
        {
            'base':    'L',
            'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
        },
        {
            'base':    'LJ',
            'letters': '\u01C7'
        },
        {
            'base':    'Lj',
            'letters': '\u01C8'
        },
        {
            'base':    'M',
            'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
        },
        {
            'base':    'N',
            'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
        },
        {
            'base':    'NJ',
            'letters': '\u01CA'
        },
        {
            'base':    'Nj',
            'letters': '\u01CB'
        },
        {
            'base':    'O',
            'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
        },
        {
            'base':    'OI',
            'letters': '\u01A2'
        },
        {
            'base':    'OO',
            'letters': '\uA74E'
        },
        {
            'base':    'OU',
            'letters': '\u0222'
        },
        {
            'base':    'OE',
            'letters': '\u008C\u0152'
        },
        {
            'base':    'oe',
            'letters': '\u009C\u0153'
        },
        {
            'base':    'P',
            'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
        },
        {
            'base':    'Q',
            'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A'
        },
        {
            'base':    'R',
            'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
        },
        {
            'base':    'S',
            'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
        },
        {
            'base':    'T',
            'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
        },
        {
            'base':    'TZ',
            'letters': '\uA728'
        },
        {
            'base':    'U',
            'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
        },
        {
            'base':    'V',
            'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
        },
        {
            'base':    'VY',
            'letters': '\uA760'
        },
        {
            'base':    'W',
            'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
        },
        {
            'base':    'X',
            'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C'
        },
        {
            'base':    'Y',
            'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
        },
        {
            'base':    'Z',
            'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
        },
        {
            'base':    'a',
            'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
        },
        {
            'base':    'aa',
            'letters': '\uA733'
        },
        {
            'base':    'ae',
            'letters': '\u00E6\u01FD\u01E3'
        },
        {
            'base':    'ao',
            'letters': '\uA735'
        },
        {
            'base':    'au',
            'letters': '\uA737'
        },
        {
            'base':    'av',
            'letters': '\uA739\uA73B'
        },
        {
            'base':    'ay',
            'letters': '\uA73D'
        },
        {
            'base':    'b',
            'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
        },
        {
            'base':    'c',
            'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
        },
        {
            'base':    'd',
            'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
        },
        {
            'base':    'dz',
            'letters': '\u01F3\u01C6'
        },
        {
            'base':    'e',
            'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
        },
        {
            'base':    'f',
            'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
        },
        {
            'base':    'g',
            'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
        },
        {
            'base':    'h',
            'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
        },
        {
            'base':    'hv',
            'letters': '\u0195'
        },
        {
            'base':    'i',
            'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
        },
        {
            'base':    'j',
            'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
        },
        {
            'base':    'k',
            'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
        },
        {
            'base':    'l',
            'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
        },
        {
            'base':    'lj',
            'letters': '\u01C9'
        },
        {
            'base':    'm',
            'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
        },
        {
            'base':    'n',
            'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
        },
        {
            'base':    'nj',
            'letters': '\u01CC'
        },
        {
            'base':    'o',
            'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
        },
        {
            'base':    'oi',
            'letters': '\u01A3'
        },
        {
            'base':    'ou',
            'letters': '\u0223'
        },
        {
            'base':    'oo',
            'letters': '\uA74F'
        },
        {
            'base':    'p',
            'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
        },
        {
            'base':    'q',
            'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759'
        },
        {
            'base':    'r',
            'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
        },
        {
            'base':    's',
            'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
        },
        {
            'base':    't',
            'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
        },
        {
            'base':    'tz',
            'letters': '\uA729'
        },
        {
            'base':    'u',
            'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
        },
        {
            'base':    'v',
            'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
        },
        {
            'base':    'vy',
            'letters': '\uA761'
        },
        {
            'base':    'w',
            'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
        },
        {
            'base':    'x',
            'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D'
        },
        {
            'base':    'y',
            'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
        },
        {
            'base':    'z',
            'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
        }
    ];

    let map = {};

    for ( let i = 0 ; i < defaultDiacriticsRemovalMap.length ; i++ ) {

        const letters = defaultDiacriticsRemovalMap [ i ].letters;

        for ( let j = 0 ; j < letters.length ; j++ ) {

            map[ letters[ j ] ] = defaultDiacriticsRemovalMap[ i ].base;

        }

    }

    return map

} )();

/**
 * @static
 * @public
 * @memberOf TApplication
 *
 * @param string
 */
function removeDiacritics ( string ) {

    // eslint-disable-next-line
    return string.replace( /[^\u0000-\u007E]/g, function ( a ) {
        return diacriticsMap[ a ] || a
    } )

}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var iteeValidators_cjs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs$1 = _interopDefault(fs);

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array or not
 * @example
 *
 * import { isArray } from 'itee-validators'
 *
 * if( isArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is an array
 *
 * @param data {*} The data to check against the array type
 * @returns {boolean} true if data is array, false otherwise
 */
function isArray ( data ) {
    return Array.isArray( data )
}



////////////////////

/**
 * Check if given data is not an array
 *
 * @param data {*} The data to check against the array type
 * @returns {boolean} true if data is not array, false otherwise
 */
function isNotArray ( data ) {
    return !Array.isArray( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is an empty array
 *
 * @param data {*} The data to check against the empty array
 * @returns {boolean} true if data is an empty array, false otherwise
 */
function isEmptyArray ( data ) {

    if ( isNotArray( data ) ) { return false }

    return ( data.length === 0 )

}

///////

/**
 * Check if given data is not an empty array
 *
 * @param data {*} The data to check against the empty array
 * @returns {boolean} true if data is not an empty array, false otherwise
 */
function isNotEmptyArray ( data ) {

    if ( isNotArray( data ) ) { return true }

    return ( data.length > 0 )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is an array of array
 *
 * @param data {*} The data to check against the array of array type
 * @returns {boolean} true if data is an array of array, false otherwise
 */
function isArrayOfArray ( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotArray( data[ index ] ) ) {
            return false
        }
    }

    return true

}

////////

/**
 * Check if given data is not an array of array
 *
 * @param data {*} The data to check against the array of array type
 * @returns {boolean} true if data is not an array of array, false otherwise
 */
function isNotArrayOfArray ( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isArray( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is an array with multiples values
 *
 * @param data {*} The data to check against the single valued array
 * @returns {boolean} true if data is an array with multiples values, false otherwise
 */
function isArrayOfMultiElement ( data ) {

    if ( isNotArray( data ) ) { return false }

    return ( data.length > 1 )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/voids
 * @desc Export function to validate if a value is a void
 * @example todo
 *
 */

/**
 * Check if given data is null
 *
 * @param data {*} The data to check against the nullity
 * @returns {boolean} true if data is null, false otherwise.
 */
function isNull ( data ) {
    return ( data === null )
}

///

/**
 * Check if given data is not null
 *
 * @param data {*} The data to check against the nullity
 * @returns {boolean} true if data is not null, false otherwise.
 */
function isNotNull ( data ) {
    return ( data !== null )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is not an empty array where all values are null
 *
 * @param data {*} The data to check against the array of array type
 * @returns {boolean} true if data is not an empty array where all values are null, false otherwise
 */
function isArrayOfNull ( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNull( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/////

/**
 * Check if given data is not an empty array where all values are not null
 *
 * @param data {*} The data to check against the array of array type
 * @returns {boolean} true if data is not an empty array where all values are not null, false otherwise
 */
function isNotArrayOfNull ( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNull( data[ index ] ) ) {
            return true
        }
    }

    return false

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/voids
 * @desc Export function to validate if a value is a void
 * @example todo
 *
 */

/**
 * Check if given data is not null and not undefined
 *
 * @param data {*} The data to check against the existence
 * @returns {boolean} true if data is not null and not undefined, false otherwise.
 */
function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}

/////

/**
 * Check if given data is null or undefined
 *
 * @param data {*} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/objects
 * @desc Export function to validate if a value is an object
 * @example todo
 *
 */

/**
 * Check if given data is an object
 *
 * @param data {*} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
function isObject ( data ) {

    if ( isNotDefined( data ) ) { return false }

    return ( data.constructor === Object )
}

////

/**
 * Check if given data is not an object
 *
 * @param data {*} The data to check against the object type
 * @returns {boolean} true if data is not an object, false otherwise
 */
function isNotObject ( data ) {
    return !isObject( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is an array where all values are of object type
 *
 * @param data {*} The data to check against the array of object type
 * @returns {boolean} true if data is an array where all values are of object type, false otherwise
 */
function isArrayOfObject ( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotObject( data[ index ] ) ) {
            return false
        }
    }

    return true

}

////

/**
 * Check if given data is not an array where all values are of object type
 *
 * @param data {*} The data to check against the array of object type
 * @returns {boolean} true if data is not an array where all values are of object type, false otherwise
 */
function isNotArrayOfObject ( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotObject( data[ index ] ) ) {
            return true
        }
    }

    return false

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is an array with a single value
 *
 * @param data {*} The data to check against the single valued array
 * @returns {boolean} true if data is an array with a single value, false otherwise
 */
function isArrayOfSingleElement ( data ) {

    if ( isNotArray( data ) ) { return false }

    if ( data.length !== 1 ) {
        return false
    }

    return true

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

/**
 * Check if given data is a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is a string, false otherwise.
 */
function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}



//////

/**
 * Check if given data is not a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is not a string, false otherwise.
 */
function isNotString ( data ) {
    return !isString( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is not an empty array where all values are string
 *
 * @param data {*} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
 */
function isArrayOfString ( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotString( data[ index ] ) ) {
            return false
        }
    }

    return true

}



/////

/**
 * Check if given data is not an empty array where all values are not string
 *
 * @param data {*} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are not string, false otherwise
 */
function isNotArrayOfString ( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotString( data[ index ] ) ) {
            return true
        }
    }

    return false

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/voids
 * @desc Export function to validate if a value is a void
 * @example todo
 *
 */

/**
 * Check if given data is undefined
 *
 * @param data {*} The data to check against the undefiness
 * @returns {boolean} true if data is undefined, false otherwise.
 */
function isUndefined ( data ) {
    return ( typeof data === 'undefined' )
}

///

/**
 * Check if given data is defined
 *
 * @param data {*} The data to check against the undefiness
 * @returns {boolean} true if data is defined, false otherwise.
 */
function isNotUndefined ( data ) {
    return ( typeof data !== 'undefined' )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

/**
 * Check if given data is not an empty array where all values are undefined
 *
 * @param data {*} The data to check against the array of undefined
 * @returns {boolean} true if data is not an empty array where all values are undefined, false otherwise
 */
function isArrayOfUndefined ( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotUndefined( data[ index ] ) ) {
            return false
        }
    }

    return true

}

////

/**
 * Check if given data is not an empty array where all values are defined
 *
 * @param data {*} The data to check against the array of undefined
 * @returns {boolean} true if data is not an empty array where all values are defined, false otherwise
 */
function isNotArrayOfUndefined ( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotUndefined( data[ index ] ) ) {
            return true
        }
    }

    return false

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_arrays
 * @description Export the validation methods about Arrays
 */

//todo: isArrayOfNumbers
//todo: isArrayOfBooleans
//todo: isArrayOfFunctions

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/booleans
 * @desc Export function to validate if a value is a boolean or not
 * @example todo
 *
 */

/**
 * Check if given data is a boolean
 *
 * @param data {*} The data to check against the booleaness
 * @returns {boolean} true if data is a boolean, false otherwise.
 */
function isBoolean ( data ) {
    return ( typeof data === 'boolean' )
}



//////

/**
 * Check if given data is not a boolean
 *
 * @param data {*} The data to check against the booleaness
 * @returns {boolean} true if data is not a boolean, false otherwise.
 */
function isNotBoolean ( data ) {
    return ( typeof data !== 'boolean' )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isTrue ( value ) {
    return ( isBoolean( value ) && ( value === true ) )
}

function isFalse ( value ) {
    return ( isBoolean( value ) && ( value === false ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_booleans
 * @description Export the validation methods about booleans
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/functions
 * @desc Export function to validate if a value is a function or not
 * @example todo
 *
 */

/**
 * Check if given data is a function
 *
 * @param data {*} The data to check against the functionality
 * @returns {boolean} true if data is a function, false otherwise.
 */
function isFunction ( data ) {
    return ( typeof data === 'function' )
}

///

/**
 * Check if given data is not a function
 *
 * @param data {*} The data to check against the functionality
 * @returns {boolean} true if data is not a function, false otherwise.
 */
function isNotFunction ( data ) {
    return ( typeof data !== 'function' )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_functions
 * @description Export the validation methods about functions
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isZero
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is zero
 *
 * @param data {*} The data to check against the zero value
 * @returns {boolean} true if data is zero, false otherwise
 */
function isZero ( data ) {
    return ( data === 0 )
}

/**
 * Check if the given data is a positive zero
 *
 * @param data {*} The data to check against the positive zero value
 * @returns {boolean} true if data is a positive zero, false otherwise
 */
function isZeroPositive ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.POSITIVE_INFINITY )
}

/**
 * Check if the given data is a negative zero
 *
 * @param data {*} The data to check against the negative zero value
 * @returns {boolean} true if data is a negative zero, false otherwise
 */
function isZeroNegative ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.NEGATIVE_INFINITY )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isNumber
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if given data is a number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a number, false otherwise.
 */
function isNumber ( data ) {

    if ( isNotDefined( data ) ) { return false }

    return ( data.constructor === Number )

}



/**
 * Check if the data is a positive number
 *
 * @param data {*} The data to check against the positivity
 * @returns {boolean} true if data is a positive number, false otherwise.
 */
function isNumberPositive ( data ) {

    if ( isNotNumber( data ) ) { return false }

    return ( data > 0 || isZeroPositive( data ) || isInfinitePositive( data ) )

}

/**
 * Check if the data is a negative number
 *
 * @param data {*} The data to check against the negativity
 * @returns {boolean} true if data is a negative number, false otherwise.
 */
function isNumberNegative ( data ) {
    return ( isNumber( data ) && data < 0 )
}

//////

/**
 * Check if given data is not a number
 *
 * @param data {*} The data to check against the number type
 * @returns {boolean} true if data is not of type number or not a number, false otherwise.
 */
function isNotNumber ( data ) {
    return !( isNumber( data ) )
}

/////////

//Todo: isInRange(x, y, value, xInclusive, yInclusive)
//Todo: isInRangeZeroOne(value, zeroInclusive, oneInclusive) //inclusive

/////////

/**
 * Check if the given data is an integer number
 *
 * @param data {*} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
function isInteger ( data ) {
    return Number.isInteger( data )
}



////////

/**
 * Check if given data is a floating point number
 *
 * @param data {*} The data to check against the floating point
 * @returns {boolean} true if data is a float, false otherwise
 */
function isFloat ( data ) {

    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }
    if ( isInfinite( data ) ) { return false}

    return data % 1 !== 0

}



////////

/**
 * Check if given data is not a number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is not a number, false otherwise.
 */
function isNaN ( data ) {
    return Number.isNaN( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isInfinite
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is an infinite number
 *
 * @param data {*} The data to check against the infinite state
 * @returns {boolean} true if data is infinite, false otherwise
 */
function isInfinite ( data ) {

    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }

    return !Number.isFinite( data )
}

/**
 * Check if the given data is an infinite negative number
 *
 * @param data {*} The data to check against the negative infinite state
 * @returns {boolean} true if data is negative infinite, false otherwise
 */
function isInfiniteNegative ( data ) {
    return ( data === Number.NEGATIVE_INFINITY )
}

/**
 * Check if the given data is an infinite positive number
 *
 * @param data {*} The data to check against the positive infinite state
 * @returns {boolean} true if data is positive infinite, false otherwise
 */
function isInfinitePositive ( data ) {
    return ( data === Number.POSITIVE_INFINITY )
}

///

/**
 * Check if the given data is a finite number
 *
 * @param data {*} The data to check against the finite state
 * @returns {boolean} true if data is finite, false otherwise
 */
function isFinite ( data ) {
    return Number.isFinite( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isMax
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is a maximum positive number
 *
 * @param data {*} The data to check against the positive maximum state
 * @returns {boolean} true if data is positive maximum, false otherwise
 */
function isMaxPositive ( data ) {
    return ( data === Number.MAX_VALUE )
}

/**
 * Check if the given data is a maximum negative number
 *
 * @param data {*} The data to check against the maximum infinite state
 * @returns {boolean} true if data is negative maximum, false otherwise
 */
function isMaxNegative ( data ) {
    return ( data === -Number.MAX_VALUE )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isMin
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is a minimum positive number
 *
 * @param data {*} The data to check against the positive minimum state
 * @returns {boolean} true if data is positive minimum, false otherwise
 */
function isMinPositive ( data ) {
    return ( data === Number.MIN_VALUE )
}

/**
 * Check if the given data is a minimum negative number
 *
 * @param data {*} The data to check against the minimum infinite state
 * @returns {boolean} true if data is negative minimum, false otherwise
 */
function isMinNegative ( data ) {
    return ( data === -Number.MIN_VALUE )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isSafeInteger
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is a maximum safe integer number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a maximum safe integer, false otherwise
 */
function isMaxSafeInteger ( data ) {
    return ( data === Number.MAX_SAFE_INTEGER )
}

/**
 * Check if the given data is a minimum safe integer number
 *
 * @param data {*} The data to check against the minimum safe integer state
 * @returns {boolean} true if data is a minimum safe integer, false otherwise
 */
function isMinSafeInteger ( data ) {
    return ( data === Number.MIN_SAFE_INTEGER )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_numbers
 * @description Export the validation methods about numbers
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/objects
 * @desc Export function to validate if a value is an object
 * @example todo
 *
 */

/**
 * Check if given data is an empty object
 *
 * @param data {*} The data to check against the emptiness of the object
 * @returns {boolean} true if data is an empty object, false otherwise
 */
function isEmptyObject ( data ) {

    if ( isNotObject( data ) ) { return false }

    if ( data.length === 0 ) {
        return true
    }

    // Otherwise, does it have any properties of its own?
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false
        }
    }

    return true

}

////

/**
 * Check if given data is not an empty object
 *
 * @param data {*} The data to check against the emptiness of the object
 * @returns {boolean} true if data is not an empty object, false otherwise
 */
function isNotEmptyObject ( data ) {
    return !( isEmptyObject( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_objects
 * @description Export the validation methods about objects
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

/**
 * Check if given data is an empty string
 *
 * @param data {*} The data to check against the emptiness of the string
 * @returns {boolean} true if data is an empty string, false otherwise.
 */
function isEmptyString ( data ) {

    if ( isNotString( data ) ) {
        return false
    }

    return ( data.length === 0 )

}

////

/**
 * Check if given data is not an empty string
 *
 * @param data {*} The data to check against the emptiness of the string
 * @returns {boolean} true if data is not an empty string, false otherwise.
 */
function isNotEmptyString ( data ) {

    return !( isEmptyString( data ) )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

/**
 * Check if the given data is a blank string
 *
 * @param data {*} The data to check against the blankness of the string
 * @returns {boolean} true if data is a blank string, false otherwise.
 */
function isBlankString ( data ) {

    if ( isNotString( data ) ) { return false }
    if ( isEmptyString( data ) ) { return false }

    return ( !/\S/.test( data ) )
}

////

/**
 * Check if the given data is not a blank string
 *
 * @param data {*} The data to check against the blankness of the string
 * @returns {boolean} true if data is not a blank string, false otherwise.
 */
function isNotBlankString ( data ) {

    return !( isBlankString( data ) )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_strings
 * @description Export the validation methods about strings
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/symbols
 * @desc Export function to validate if a value is a symbol
 * @example todo
 *
 */

/**
 * Check if given data is a symbol
 *
 * @param data {*} The data to check against the symbol type
 * @returns {boolean} true if data is a symbol, false otherwise.
 */
function isSymbol ( data ) {
    return ( typeof data === 'symbol' )
}

/////

/**
 * Check if given data is not a symbol
 *
 * @param data {*} The data to check against the symbol type
 * @returns {boolean} true if data is not a symbol, false otherwise.
 */
function isNotSymbol ( data ) {
    return ( typeof data !== 'symbol' )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_symbols
 * @description Export the validation methods about symbols
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/voids
 * @desc Export function to validate if a value is a void
 * @example todo
 *
 */

/**
 * Check emptiness of given data
 *
 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
 *
 * @param data {*} The data to check against the emptiness
 * @returns {boolean} true if data is considered as empty, false otherwise.
 */
function isEmpty ( data ) {

    if ( isNotDefined( data ) ) { return false }
    if ( isEmptyString( data ) ) { return true}
    if ( isEmptyArray( data ) ) { return true }
    if ( isEmptyObject( data ) ) { return true }

    return false

}

///

/**
 * Check fullness of given data
 *
 * @param data {*} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
function isNotEmpty ( data ) {
    return !isEmpty( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_voids
 * @description Export the validation methods about voids notions like null or undefined
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/cores
 * @description Export the Validator singleton instance that allow to validate complex data structure
 * @example
 *
 const validator = Itee.Validators.Validator

 // Using unique function for One registered type
 // Usefull when a simple data structure is used multiple times
 validator.add( 'ColorType', color => {

                const r = color.r
                if ( color.r === undefined || Itee.Validators.isNotNumber( r ) ) {
                    return false
                }

                const g = color.g
                if ( color.g === undefined || Itee.Validators.isNotNumber( g ) ) {
                    return false
                }

                const b = color.b
                if ( color.b === undefined || Itee.Validators.isNotNumber( b ) ) {
                    return false
                }

                return true
            } )

 // Using schema composition
 // Usefull for design validation schema faster and based on previous declared validation types
 validator.add( 'Range_0_255', ( value ) => {

                if ( Itee.Validators.isNotNumber( value ) ) {
                    return false
                }

                return !(value < 0 || value > 255)

            } )

 validator.add( 'ColorSchema', {
                r: {
                    required: true,
                    type:     'Range_0_255'
                },
                g: {
                    required: true,
                    type:     'Range_0_255'
                },
                b: {
                    required: true,
                    type:     'Range_0_255'
                }
            } )

 validator.add( 'ColorStructure', {
                color_from_type: {
                    type: 'ColorType'
                },
                col_from_schema: {
                    type: 'ColorSchema'
                },
                col_from_fn:     {
                    // Inner function
	                // Usefull for specific validation requirement that cannot match other previous validation schema or type
                    fn: function ColorValidator ( color ) {

                        const r = color.r
                        if ( color.r === undefined || Itee.Validators.isNotNumber( r ) ) {
                            return false
                        }

                        const g = color.g
                        if ( color.g === undefined || Itee.Validators.isNotNumber( g ) ) {
                            return false
                        }

                        const b = color.b
                        if ( color.b === undefined || Itee.Validators.isNotNumber( b ) ) {
                            return false
                        }

                        return true
                    }
                }
            } )

 // The data to validate
 const colorStruct = {
                color_from_type: {
                    r: 0,
                    g: 1,
                    b: 2
                },
                col_from_schema: {
                    r: 10,
                    g: 20,
                    b: 30
                },
                col_from_fn:     {
                    r: 0,
                    g: 127,
                    b: 255
                }
            }

 // Execute

 try {

    if ( validator.check( colorStruct, 'ColorStructure' ) ) {
        alert( 'ColorStructure is valid !' )
    } else {
        alert( validator.errors )
    }

} catch ( err ) {
    alert( err )
}
 *
 */

class Validator {

    constructor () {

        /**
         * The validators store, by default it contains validators for Boolean, Number, Integer, Float, Array, String, Object, Symbol and Function
         *
         * @type {(function|object)}
         */
        this.validators = {
            Boolean:  isBoolean,
            Number:   isNumber,
            Integer:  isInteger,
            Float:    isFloat,
            Array:    isArray,
            String:   isString,
            Object:   isObject,
            Symbol:   isSymbol,
            Function: isFunction
        };

        /**
         * The list of errors occured during the check
         *
         * @type {Array.<string>}
         */
        this.errors = [];

    }

    /**
     * Add a new validator schema to the validator instance
     *
     * @param type {string} - A string that represent the type of data to validate
     * @param validator {(function|object)} - A function or validation schema that represent the type of data to validate
     */
    add ( type, validator ) {

        if ( isNotString( type ) ) { throw new TypeError( `Validator: Expect type to be a string` ) }
        if ( isNotFunction( validator ) && isNotObject( validator ) ) { throw new TypeError( `Validator: Expect validator to be an object or a function` ) }
        if ( isDefined( this.validators[ type ] ) ) { throw new TypeError( `Validator: a validator is already defined for type '${type}'` ) }

        this.validators[ type ] = validator;

    }

    /**
     * To remove a registered type
     *
     * @param type {string} - The type to remove
     */
    remove ( type ) {

        delete this.validators[ type ];

    }

    /**
     * Allow to known the available types store in current validator instance
     *
     * @return {Array.<string>} - The list of registered type
     */
    getAvalaibleTypes () {

        const availablesTypes = [];

        for ( let key in this.validators ) {
            availablesTypes.push( key );
        }

        return availablesTypes

    }

    /**
     * Will perform a deep structural comparison between the given data and the validation schema of the given type
     *
     * @param data {*} - The data to validate
     * @param type {string} - The type of the validation schema to apply
     * @param breakOnError {boolean} - Return on first validation error ( true by default )
     * @return {boolean} - Return true is the data is validated, false otherwise
     */
    check ( data, type, breakOnError = true ) {

        const validator = this.validators[ type ];
        if ( isNotDefined( validator ) ) {
            throw new TypeError( `Validator: Unable to find schema validation of type '${type}'` )
        }

        let result = true;
        if ( isFunction( validator ) ) {

            result = validator( data );

        } else if ( isObject( validator ) ) {

            let subResult = true;
            for ( let key in validator ) {

                const subValidator = validator[ key ];
                if ( isNotDefined( subValidator ) ) {
                    throw new TypeError( `Validator: Missing validator for key '${key}' of type '${type}'` )
                }

                const value      = data[ key ];
                const isRequired = subValidator.required;
                if ( isNotDefined( value ) ) {
                    if ( isRequired ) {
                        subResult = false;
                    } else {
                        continue
                    }
                }

                // In case of overriden validation function check it first
                let validatorFunction = subValidator.fn;
                if ( isDefined( validatorFunction ) ) {

                    if ( isNotFunction( validatorFunction ) ) {
                        throw new TypeError( `Validator: Invalid validation function for '${key}' with type '${type}'` )
                    }

                    subResult = validatorFunction( value );

                } else {

                    subResult = this.check( value, subValidator.type, breakOnError );

                }

                if ( subResult === false ) {

                    this.errors.push( `Validator: Invalid property '${key}' of type '${subValidator.type}' with value '${value}' in object of type '${type}'` );
                    result = false;
                    if ( breakOnError ) {
                        break
                    }

                }

            }

        } else {

            throw new TypeError( `Validator: Unknown validator of type '${type}'` )

        }

        return result

    }

}

/**
 * The singleton instance
 *
 * @type {Validator}
 */
exports.Validator = undefined;
if ( isNotDefined( exports.Validator ) ) {
    exports.Validator = new Validator();
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isArrayBuffer ( data ) {
    return ( data instanceof ArrayBuffer )
}

function isNotArrayBuffer ( data ) {
    return !isArrayBuffer( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isBigInt64Array ( data ) {
    return ( data instanceof BigInt64Array )
}

function isNotBigInt64Array ( data ) {
    return !isBigInt64Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isBigUint64Array ( data ) {
    return ( data instanceof BigUint64Array )
}

function isNotBigUint64Array ( data ) {
    return !isBigUint64Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isFloat32Array ( data ) {
    return ( data instanceof Float32Array )
}

function isNotFloat32Array ( data ) {
    return !isFloat32Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isFloat64Array ( data ) {
    return ( data instanceof Float64Array )
}

function isNotFloat64Array ( data ) {
    return !isFloat64Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isInt16Array ( data ) {
    return ( data instanceof Int16Array )
}

function isNotInt16Array ( data ) {
    return !isInt16Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isInt32Array ( data ) {
    return ( data instanceof Int32Array )
}

function isNotInt32Array ( data ) {
    return !isInt32Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isInt8Array ( data ) {
    return ( data instanceof Int8Array )
}

function isNotInt8Array ( data ) {
    return !isInt8Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isUint16Array ( data ) {
    return ( data instanceof Uint16Array )
}

function isNotUint16Array ( data ) {
    return !isUint16Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isUint32Array ( data ) {
    return ( data instanceof Uint32Array )
}

function isNotUint32Array ( data ) {
    return !isUint32Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isUint8Array ( data ) {
    return ( data instanceof Uint8Array )
}

function isNotUint8Array ( data ) {
    return !isUint8Array( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isUint8ClampedArray ( data ) {
    return ( data instanceof Uint8ClampedArray )
}

function isNotUint8ClampedArray ( data ) {
    return !isUint8ClampedArray( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_cores
 * @description This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/cores/_cores
 * @description This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/maths/_maths
 * @description This is the maths export entry point.
 * It expose all exports of the ... sub-folder.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export constants about temperatures
 * @example todo
 *
 */

const ABSOLUTE_ZERO_KELVIN     = 0.00000000045;
const ABSOLUTE_ZERO_CELSIUS    = -273.14999999955;
const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isCelsius ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS )
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotCelsius ( data ) {
    return !isCelsius( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isFahrenheit ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT )
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotFahrenheit ( data ) {
    return !isFahrenheit( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isKelvin ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN )
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotKelvin ( data ) {
    return !isKelvin( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isTemperature ( data ) {
    return ( isKelvin( data ) || isCelsius( data ) || isFahrenheit( data ) )
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotTemperature ( data ) {
    return ( isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/physics/_temperatures
 * @description Export the validation methods about temperatures
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/physics/_physics
 * @description This is the physics export entry point.
 * It expose all exports of the temperatures sub-folder.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isBlockDevicePath ( path ) {
    return fs$1.statSync( path ).isBlockDevice()
}

function isNotBlockDevicePath ( path ) {
    return !isBlockDevicePath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * Just an override of 'fs.existsSync' with more explicit name
 *
 * @param filePath the path to check
 */
function isValidPath ( path ) {
    return fs$1.existsSync( path )
}

function isInvalidPath ( path ) {
    return !isValidPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isValidBlockDevicePath ( path ) {
    return ( isValidPath( path ) && isBlockDevicePath( path ) )
}

function isInvalidBlockDevicePath ( path ) {
    return !isValidBlockDevicePath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isCharacterDevicePath ( path ) {
    return fs$1.statSync( path ).isCharacterDevice()
}

function isNotCharacterDevicePath ( path ) {
    return !isCharacterDevicePath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isValidCharacterDevicePath ( path ) {
    return ( isValidPath( path ) && isCharacterDevicePath( path ) )
}

function isInvalidCharacterDevicePath ( path ) {
    return !isValidCharacterDevicePath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isDirectoryPath ( path ) {
    return fs$1.statSync( path ).isDirectory()
}

function isNotDirectoryPath ( path ) {
    return !isDirectoryPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isEmptyDirectory ( directoryPath ) {
    return ( fs$1.readdirSync( directoryPath ).length === 0 )
}

function isNotEmptyDirectory ( directoryPath ) {
    return !isEmptyDirectory( directoryPath )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isValidDirectoryPath ( path ) {
    return ( isValidPath( path ) && isDirectoryPath( path ) )
}

function isInvalidDirectoryPath ( path ) {
    return !isValidDirectoryPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isFIFOPath ( path ) {
    return fs$1.statSync( path ).isFIFO()
}

function isNotFIFOPath ( path ) {
    return !isFIFOPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isValidFIFOPath ( path ) {
    return ( isValidPath( path ) && isFIFOPath( path ) )
}

function isInvalidFIFOPath ( path ) {
    return !isValidFIFOPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * Check the file size against a limit ( 0 as default ).
 * @param filePath
 * @param threshold
 * @return {boolean} - True if below the limit or zero, false otherwise
 * @private
 */
function isEmptyFile ( filePath, threshold = 0 ) {
    return ( fs$1.statSync( filePath ).size <= threshold )
}

function isNotEmptyFile ( filePath, threshold = 0 ) {
    return !isEmptyFile( filePath, threshold )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isFilePath ( path ) {
    return fs$1.statSync( path ).isFile()
}

function isNotFilePath ( path ) {
    return !isFilePath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isValidFilePath ( path ) {
    return ( isValidPath( path ) && isFilePath( path ) )
}

function isInvalidFilePath ( path ) {
    return !isValidFilePath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isSocketPath ( path ) {
    return fs$1.statSync( path ).isSocket()
}

function isNotSocketPath ( path ) {
    return !isSocketPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isValidSocketPath ( path ) {
    return ( isValidPath( path ) && isSocketPath( path ) )
}

function isInvalidSocketPath ( path ) {
    return !isValidSocketPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isSymbolicLinkPath ( path ) {
    return fs$1.statSync( path ).isSymbolicLink()
}

function isNotSymbolicLinkPath ( path ) {
    return !isSymbolicLinkPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function isValidSymbolicLinkPath ( path ) {
    return ( isValidPath( path ) && isSymbolicLinkPath( path ) )
}

function isInvalidSymbolicLinkPath ( path ) {
    return !isValidSymbolicLinkPath( path )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * __________________________________________________________________________________________________________________________________________________________________________________________________
 * _/\\\\\\\\\\\________________________________________________________/\\\________/\\\_________________/\\\\\\__________________/\\\_______________________________________________________________
 * _\/////\\\///________________________________________________________\/\\\_______\/\\\________________\////\\\_________________\/\\\______________________________________________________________
 * ______\/\\\_________/\\\______________________________________________\//\\\______/\\\____________________\/\\\_____/\\\________\/\\\_____________________/\\\____________________________________
 * _______\/\\\______/\\\\\\\\\\\_____/\\\\\\\\______/\\\\\\\\_____________\//\\\____/\\\____/\\\\\\\\\_______\/\\\____\///_________\/\\\___/\\\\\\\\\_____/\\\\\\\\\\\_____/\\\\\_____/\\/\\\\\\\___
 * ________\/\\\_____\////\\\////____/\\\/////\\\___/\\\/////\\\_____________\//\\\__/\\\____\////////\\\______\/\\\_____/\\\___/\\\\\\\\\__\////////\\\___\////\\\////____/\\\///\\\__\/\\\/////\\\_
 * _________\/\\\________\/\\\_______/\\\\\\\\\\\___/\\\\\\\\\\\_______________\//\\\/\\\_______/\\\\\\\\\\_____\/\\\____\/\\\__/\\\////\\\____/\\\\\\\\\\_____\/\\\_______/\\\__\//\\\_\/\\\___\///_
 * __________\/\\\________\/\\\_/\\__\//\\///////___\//\\///////_________________\//\\\\\_______/\\\/////\\\_____\/\\\____\/\\\_\/\\\__\/\\\___/\\\/////\\\_____\/\\\_/\\__\//\\\__/\\\__\/\\\_______
 * ________/\\\\\\\\\\\____\//\\\\\____\//\\\\\\\\\\__\//\\\\\\\\\\________________\//\\\_______\//\\\\\\\\/\\__/\\\\\\\\\_\/\\\_\//\\\\\\\/\\_\//\\\\\\\\/\\____\//\\\\\____\///\\\\\/___\/\\\______
 * ________\///////////______\/////______\//////////____\//////////__________________\///_________\////////\//__\/////////__\///___\///////\//___\////////\//______\/////_______\/////_____\///______
 * __________________________________________________________________________________________________________________________________________________________________________________________________
 *
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file sources/itee-validators
 * @description This is the main entry point to bundle the itee validators package.
 * It expose all exports of the cores, maths and physics sub-folder.
 *
 */
// #endif

exports.isArray = isArray;
exports.isNotArray = isNotArray;
exports.isArrayOfArray = isArrayOfArray;
exports.isNotArrayOfArray = isNotArrayOfArray;
exports.isArrayOfMultiElement = isArrayOfMultiElement;
exports.isArrayOfNull = isArrayOfNull;
exports.isNotArrayOfNull = isNotArrayOfNull;
exports.isArrayOfObject = isArrayOfObject;
exports.isNotArrayOfObject = isNotArrayOfObject;
exports.isArrayOfSingleElement = isArrayOfSingleElement;
exports.isArrayOfString = isArrayOfString;
exports.isNotArrayOfString = isNotArrayOfString;
exports.isArrayOfUndefined = isArrayOfUndefined;
exports.isNotArrayOfUndefined = isNotArrayOfUndefined;
exports.isEmptyArray = isEmptyArray;
exports.isNotEmptyArray = isNotEmptyArray;
exports.isBoolean = isBoolean;
exports.isNotBoolean = isNotBoolean;
exports.isTrue = isTrue;
exports.isFalse = isFalse;
exports.isFunction = isFunction;
exports.isNotFunction = isNotFunction;
exports.isInfinite = isInfinite;
exports.isInfiniteNegative = isInfiniteNegative;
exports.isInfinitePositive = isInfinitePositive;
exports.isFinite = isFinite;
exports.isMaxPositive = isMaxPositive;
exports.isMaxNegative = isMaxNegative;
exports.isMinPositive = isMinPositive;
exports.isMinNegative = isMinNegative;
exports.isNumber = isNumber;
exports.isNumberPositive = isNumberPositive;
exports.isNumberNegative = isNumberNegative;
exports.isNotNumber = isNotNumber;
exports.isInteger = isInteger;
exports.isFloat = isFloat;
exports.isNaN = isNaN;
exports.isMaxSafeInteger = isMaxSafeInteger;
exports.isMinSafeInteger = isMinSafeInteger;
exports.isZero = isZero;
exports.isZeroPositive = isZeroPositive;
exports.isZeroNegative = isZeroNegative;
exports.isEmptyObject = isEmptyObject;
exports.isNotEmptyObject = isNotEmptyObject;
exports.isObject = isObject;
exports.isNotObject = isNotObject;
exports.isBlankString = isBlankString;
exports.isNotBlankString = isNotBlankString;
exports.isEmptyString = isEmptyString;
exports.isNotEmptyString = isNotEmptyString;
exports.isString = isString;
exports.isNotString = isNotString;
exports.isSymbol = isSymbol;
exports.isNotSymbol = isNotSymbol;
exports.isArrayBuffer = isArrayBuffer;
exports.isNotArrayBuffer = isNotArrayBuffer;
exports.isBigInt64Array = isBigInt64Array;
exports.isNotBigInt64Array = isNotBigInt64Array;
exports.isBigUint64Array = isBigUint64Array;
exports.isNotBigUint64Array = isNotBigUint64Array;
exports.isFloat32Array = isFloat32Array;
exports.isNotFloat32Array = isNotFloat32Array;
exports.isFloat64Array = isFloat64Array;
exports.isNotFloat64Array = isNotFloat64Array;
exports.isInt16Array = isInt16Array;
exports.isNotInt16Array = isNotInt16Array;
exports.isInt32Array = isInt32Array;
exports.isNotInt32Array = isNotInt32Array;
exports.isInt8Array = isInt8Array;
exports.isNotInt8Array = isNotInt8Array;
exports.isUint16Array = isUint16Array;
exports.isNotUint16Array = isNotUint16Array;
exports.isUint32Array = isUint32Array;
exports.isNotUint32Array = isNotUint32Array;
exports.isUint8Array = isUint8Array;
exports.isNotUint8Array = isNotUint8Array;
exports.isUint8ClampedArray = isUint8ClampedArray;
exports.isNotUint8ClampedArray = isNotUint8ClampedArray;
exports.isDefined = isDefined;
exports.isNotDefined = isNotDefined;
exports.isEmpty = isEmpty;
exports.isNotEmpty = isNotEmpty;
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.isUndefined = isUndefined;
exports.isNotUndefined = isNotUndefined;
exports.ABSOLUTE_ZERO_KELVIN = ABSOLUTE_ZERO_KELVIN;
exports.ABSOLUTE_ZERO_CELSIUS = ABSOLUTE_ZERO_CELSIUS;
exports.ABSOLUTE_ZERO_FAHRENHEIT = ABSOLUTE_ZERO_FAHRENHEIT;
exports.isCelsius = isCelsius;
exports.isNotCelsius = isNotCelsius;
exports.isFahrenheit = isFahrenheit;
exports.isNotFahrenheit = isNotFahrenheit;
exports.isKelvin = isKelvin;
exports.isNotKelvin = isNotKelvin;
exports.isTemperature = isTemperature;
exports.isNotTemperature = isNotTemperature;
exports.isBlockDevicePath = isBlockDevicePath;
exports.isNotBlockDevicePath = isNotBlockDevicePath;
exports.isValidBlockDevicePath = isValidBlockDevicePath;
exports.isInvalidBlockDevicePath = isInvalidBlockDevicePath;
exports.isCharacterDevicePath = isCharacterDevicePath;
exports.isNotCharacterDevicePath = isNotCharacterDevicePath;
exports.isValidCharacterDevicePath = isValidCharacterDevicePath;
exports.isInvalidCharacterDevicePath = isInvalidCharacterDevicePath;
exports.isDirectoryPath = isDirectoryPath;
exports.isNotDirectoryPath = isNotDirectoryPath;
exports.isEmptyDirectory = isEmptyDirectory;
exports.isNotEmptyDirectory = isNotEmptyDirectory;
exports.isValidDirectoryPath = isValidDirectoryPath;
exports.isInvalidDirectoryPath = isInvalidDirectoryPath;
exports.isFIFOPath = isFIFOPath;
exports.isNotFIFOPath = isNotFIFOPath;
exports.isValidFIFOPath = isValidFIFOPath;
exports.isInvalidFIFOPath = isInvalidFIFOPath;
exports.isEmptyFile = isEmptyFile;
exports.isNotEmptyFile = isNotEmptyFile;
exports.isFilePath = isFilePath;
exports.isNotFilePath = isNotFilePath;
exports.isValidFilePath = isValidFilePath;
exports.isInvalidFilePath = isInvalidFilePath;
exports.isValidPath = isValidPath;
exports.isInvalidPath = isInvalidPath;
exports.isSocketPath = isSocketPath;
exports.isNotSocketPath = isNotSocketPath;
exports.isValidSocketPath = isValidSocketPath;
exports.isInvalidSocketPath = isInvalidSocketPath;
exports.isSymbolicLinkPath = isSymbolicLinkPath;
exports.isNotSymbolicLinkPath = isNotSymbolicLinkPath;
exports.isValidSymbolicLinkPath = isValidSymbolicLinkPath;
exports.isInvalidSymbolicLinkPath = isInvalidSymbolicLinkPath;

});

unwrapExports(iteeValidators_cjs);
var iteeValidators_cjs_1 = iteeValidators_cjs.Validator;
var iteeValidators_cjs_2 = iteeValidators_cjs.isArray;
var iteeValidators_cjs_3 = iteeValidators_cjs.isNotArray;
var iteeValidators_cjs_4 = iteeValidators_cjs.isArrayOfArray;
var iteeValidators_cjs_5 = iteeValidators_cjs.isNotArrayOfArray;
var iteeValidators_cjs_6 = iteeValidators_cjs.isArrayOfMultiElement;
var iteeValidators_cjs_7 = iteeValidators_cjs.isArrayOfNull;
var iteeValidators_cjs_8 = iteeValidators_cjs.isNotArrayOfNull;
var iteeValidators_cjs_9 = iteeValidators_cjs.isArrayOfObject;
var iteeValidators_cjs_10 = iteeValidators_cjs.isNotArrayOfObject;
var iteeValidators_cjs_11 = iteeValidators_cjs.isArrayOfSingleElement;
var iteeValidators_cjs_12 = iteeValidators_cjs.isArrayOfString;
var iteeValidators_cjs_13 = iteeValidators_cjs.isNotArrayOfString;
var iteeValidators_cjs_14 = iteeValidators_cjs.isArrayOfUndefined;
var iteeValidators_cjs_15 = iteeValidators_cjs.isNotArrayOfUndefined;
var iteeValidators_cjs_16 = iteeValidators_cjs.isEmptyArray;
var iteeValidators_cjs_17 = iteeValidators_cjs.isNotEmptyArray;
var iteeValidators_cjs_18 = iteeValidators_cjs.isBoolean;
var iteeValidators_cjs_19 = iteeValidators_cjs.isNotBoolean;
var iteeValidators_cjs_20 = iteeValidators_cjs.isTrue;
var iteeValidators_cjs_21 = iteeValidators_cjs.isFalse;
var iteeValidators_cjs_22 = iteeValidators_cjs.isFunction;
var iteeValidators_cjs_23 = iteeValidators_cjs.isNotFunction;
var iteeValidators_cjs_24 = iteeValidators_cjs.isInfinite;
var iteeValidators_cjs_25 = iteeValidators_cjs.isInfiniteNegative;
var iteeValidators_cjs_26 = iteeValidators_cjs.isInfinitePositive;
var iteeValidators_cjs_27 = iteeValidators_cjs.isFinite;
var iteeValidators_cjs_28 = iteeValidators_cjs.isMaxPositive;
var iteeValidators_cjs_29 = iteeValidators_cjs.isMaxNegative;
var iteeValidators_cjs_30 = iteeValidators_cjs.isMinPositive;
var iteeValidators_cjs_31 = iteeValidators_cjs.isMinNegative;
var iteeValidators_cjs_32 = iteeValidators_cjs.isNumber;
var iteeValidators_cjs_33 = iteeValidators_cjs.isNumberPositive;
var iteeValidators_cjs_34 = iteeValidators_cjs.isNumberNegative;
var iteeValidators_cjs_35 = iteeValidators_cjs.isNotNumber;
var iteeValidators_cjs_36 = iteeValidators_cjs.isInteger;
var iteeValidators_cjs_37 = iteeValidators_cjs.isFloat;
var iteeValidators_cjs_38 = iteeValidators_cjs.isNaN;
var iteeValidators_cjs_39 = iteeValidators_cjs.isMaxSafeInteger;
var iteeValidators_cjs_40 = iteeValidators_cjs.isMinSafeInteger;
var iteeValidators_cjs_41 = iteeValidators_cjs.isZero;
var iteeValidators_cjs_42 = iteeValidators_cjs.isZeroPositive;
var iteeValidators_cjs_43 = iteeValidators_cjs.isZeroNegative;
var iteeValidators_cjs_44 = iteeValidators_cjs.isEmptyObject;
var iteeValidators_cjs_45 = iteeValidators_cjs.isNotEmptyObject;
var iteeValidators_cjs_46 = iteeValidators_cjs.isObject;
var iteeValidators_cjs_47 = iteeValidators_cjs.isNotObject;
var iteeValidators_cjs_48 = iteeValidators_cjs.isBlankString;
var iteeValidators_cjs_49 = iteeValidators_cjs.isNotBlankString;
var iteeValidators_cjs_50 = iteeValidators_cjs.isEmptyString;
var iteeValidators_cjs_51 = iteeValidators_cjs.isNotEmptyString;
var iteeValidators_cjs_52 = iteeValidators_cjs.isString;
var iteeValidators_cjs_53 = iteeValidators_cjs.isNotString;
var iteeValidators_cjs_54 = iteeValidators_cjs.isSymbol;
var iteeValidators_cjs_55 = iteeValidators_cjs.isNotSymbol;
var iteeValidators_cjs_56 = iteeValidators_cjs.isArrayBuffer;
var iteeValidators_cjs_57 = iteeValidators_cjs.isNotArrayBuffer;
var iteeValidators_cjs_58 = iteeValidators_cjs.isBigInt64Array;
var iteeValidators_cjs_59 = iteeValidators_cjs.isNotBigInt64Array;
var iteeValidators_cjs_60 = iteeValidators_cjs.isBigUint64Array;
var iteeValidators_cjs_61 = iteeValidators_cjs.isNotBigUint64Array;
var iteeValidators_cjs_62 = iteeValidators_cjs.isFloat32Array;
var iteeValidators_cjs_63 = iteeValidators_cjs.isNotFloat32Array;
var iteeValidators_cjs_64 = iteeValidators_cjs.isFloat64Array;
var iteeValidators_cjs_65 = iteeValidators_cjs.isNotFloat64Array;
var iteeValidators_cjs_66 = iteeValidators_cjs.isInt16Array;
var iteeValidators_cjs_67 = iteeValidators_cjs.isNotInt16Array;
var iteeValidators_cjs_68 = iteeValidators_cjs.isInt32Array;
var iteeValidators_cjs_69 = iteeValidators_cjs.isNotInt32Array;
var iteeValidators_cjs_70 = iteeValidators_cjs.isInt8Array;
var iteeValidators_cjs_71 = iteeValidators_cjs.isNotInt8Array;
var iteeValidators_cjs_72 = iteeValidators_cjs.isUint16Array;
var iteeValidators_cjs_73 = iteeValidators_cjs.isNotUint16Array;
var iteeValidators_cjs_74 = iteeValidators_cjs.isUint32Array;
var iteeValidators_cjs_75 = iteeValidators_cjs.isNotUint32Array;
var iteeValidators_cjs_76 = iteeValidators_cjs.isUint8Array;
var iteeValidators_cjs_77 = iteeValidators_cjs.isNotUint8Array;
var iteeValidators_cjs_78 = iteeValidators_cjs.isUint8ClampedArray;
var iteeValidators_cjs_79 = iteeValidators_cjs.isNotUint8ClampedArray;
var iteeValidators_cjs_80 = iteeValidators_cjs.isDefined;
var iteeValidators_cjs_81 = iteeValidators_cjs.isNotDefined;
var iteeValidators_cjs_82 = iteeValidators_cjs.isEmpty;
var iteeValidators_cjs_83 = iteeValidators_cjs.isNotEmpty;
var iteeValidators_cjs_84 = iteeValidators_cjs.isNull;
var iteeValidators_cjs_85 = iteeValidators_cjs.isNotNull;
var iteeValidators_cjs_86 = iteeValidators_cjs.isUndefined;
var iteeValidators_cjs_87 = iteeValidators_cjs.isNotUndefined;
var iteeValidators_cjs_88 = iteeValidators_cjs.ABSOLUTE_ZERO_KELVIN;
var iteeValidators_cjs_89 = iteeValidators_cjs.ABSOLUTE_ZERO_CELSIUS;
var iteeValidators_cjs_90 = iteeValidators_cjs.ABSOLUTE_ZERO_FAHRENHEIT;
var iteeValidators_cjs_91 = iteeValidators_cjs.isCelsius;
var iteeValidators_cjs_92 = iteeValidators_cjs.isNotCelsius;
var iteeValidators_cjs_93 = iteeValidators_cjs.isFahrenheit;
var iteeValidators_cjs_94 = iteeValidators_cjs.isNotFahrenheit;
var iteeValidators_cjs_95 = iteeValidators_cjs.isKelvin;
var iteeValidators_cjs_96 = iteeValidators_cjs.isNotKelvin;
var iteeValidators_cjs_97 = iteeValidators_cjs.isTemperature;
var iteeValidators_cjs_98 = iteeValidators_cjs.isNotTemperature;
var iteeValidators_cjs_99 = iteeValidators_cjs.isBlockDevicePath;
var iteeValidators_cjs_100 = iteeValidators_cjs.isNotBlockDevicePath;
var iteeValidators_cjs_101 = iteeValidators_cjs.isValidBlockDevicePath;
var iteeValidators_cjs_102 = iteeValidators_cjs.isInvalidBlockDevicePath;
var iteeValidators_cjs_103 = iteeValidators_cjs.isCharacterDevicePath;
var iteeValidators_cjs_104 = iteeValidators_cjs.isNotCharacterDevicePath;
var iteeValidators_cjs_105 = iteeValidators_cjs.isValidCharacterDevicePath;
var iteeValidators_cjs_106 = iteeValidators_cjs.isInvalidCharacterDevicePath;
var iteeValidators_cjs_107 = iteeValidators_cjs.isDirectoryPath;
var iteeValidators_cjs_108 = iteeValidators_cjs.isNotDirectoryPath;
var iteeValidators_cjs_109 = iteeValidators_cjs.isEmptyDirectory;
var iteeValidators_cjs_110 = iteeValidators_cjs.isNotEmptyDirectory;
var iteeValidators_cjs_111 = iteeValidators_cjs.isValidDirectoryPath;
var iteeValidators_cjs_112 = iteeValidators_cjs.isInvalidDirectoryPath;
var iteeValidators_cjs_113 = iteeValidators_cjs.isFIFOPath;
var iteeValidators_cjs_114 = iteeValidators_cjs.isNotFIFOPath;
var iteeValidators_cjs_115 = iteeValidators_cjs.isValidFIFOPath;
var iteeValidators_cjs_116 = iteeValidators_cjs.isInvalidFIFOPath;
var iteeValidators_cjs_117 = iteeValidators_cjs.isEmptyFile;
var iteeValidators_cjs_118 = iteeValidators_cjs.isNotEmptyFile;
var iteeValidators_cjs_119 = iteeValidators_cjs.isFilePath;
var iteeValidators_cjs_120 = iteeValidators_cjs.isNotFilePath;
var iteeValidators_cjs_121 = iteeValidators_cjs.isValidFilePath;
var iteeValidators_cjs_122 = iteeValidators_cjs.isInvalidFilePath;
var iteeValidators_cjs_123 = iteeValidators_cjs.isValidPath;
var iteeValidators_cjs_124 = iteeValidators_cjs.isInvalidPath;
var iteeValidators_cjs_125 = iteeValidators_cjs.isSocketPath;
var iteeValidators_cjs_126 = iteeValidators_cjs.isNotSocketPath;
var iteeValidators_cjs_127 = iteeValidators_cjs.isValidSocketPath;
var iteeValidators_cjs_128 = iteeValidators_cjs.isInvalidSocketPath;
var iteeValidators_cjs_129 = iteeValidators_cjs.isSymbolicLinkPath;
var iteeValidators_cjs_130 = iteeValidators_cjs.isNotSymbolicLinkPath;
var iteeValidators_cjs_131 = iteeValidators_cjs.isValidSymbolicLinkPath;
var iteeValidators_cjs_132 = iteeValidators_cjs.isInvalidSymbolicLinkPath;

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

function getPathsUnder ( directoryPath ) {
    return fs.readdirSync( directoryPath )
}

/**
 * Allow to search all files under filePaths in a recursive way
 *
 * @param {Array.<string>|string} filePaths - The files paths where search files
 * @returns {Array} - The paths of finded files
 * @private
 */
function getFilesPathsUnder ( paths ) {

    const _paths = ( iteeValidators_cjs_2( paths ) ) ? paths : [ paths ];
    let files    = [];

    for ( let pathIndex = 0, numberOfPaths = _paths.length ; pathIndex < numberOfPaths ; pathIndex++ ) {

        const localPath = _paths[ pathIndex ];

        if ( iteeValidators_cjs_124( localPath ) ) {
            console.error( `The path "${localPath}" is not valid !` );
            continue
        }

        const stats = fs.statSync( localPath );
        if ( stats.isFile() ) {

            files.push( localPath );

        } else if ( stats.isDirectory() ) {

            const subPaths      = getPathsUnder( localPath );
            const subFilesPaths = subPaths.forEach( ( name ) => { getFilesPathsUnder( path.resolve( localPath, name ) ); } );
            Array.prototype.push.apply( files, subFilesPaths );

        }

    }

    return files

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/geomathics/trigonometries
 */

const PI   = Math.PI;
const PI_2 = Math.PI / 2;
const PI_4 = Math.PI / 4;

const DEG_TO_RAD = ( PI / 180 );
const RAD_TO_DEG = ( 180 / PI );

/**
 *
 * @param degrees
 * @return {number}
 */
function degreesToRadians ( degrees ) {
    return degrees * DEG_TO_RAD
}

/**
 *
 * @param radians
 * @return {number}
 */
function degreesFromRadians ( radians ) {
    return radians * RAD_TO_DEG
}

/**
 *
 * @param radians
 * @return {number}
 */
function radiansToDegrees ( radians ) {
    return radians * RAD_TO_DEG
}

/**
 *
 * @param degrees
 * @return {number}
 */
function radiansFromDegrees ( degrees ) {
    return degrees * DEG_TO_RAD
}

// PROJECTION 2D/3D
/**
 *
 * @param vector
 * @return {number}
 */
function getYaw ( vector ) {
    return -Math.atan2( vector.x, vector.z )
}

/**
 *
 * @param vector
 * @return {number}
 */
function getPitch ( vector ) {
    return Math.asin( vector.y )
}

/**
 *
 * @param vectorDir
 * @return {{yaw: number, pitch: number}}
 */
function convertWebGLRotationToTopogicalYawPitch ( vectorDir ) {

    function getYaw ( vector ) {
        return Math.atan2( vector.y, vector.x )
    }

    function getPitch ( vector ) {
        return Math.asin( vector.z )
    }

    const topoVectorDir = vectorDir; //convertWebglVectorToTopologicVector( vectorDir )

    return {
        yaw:   -( radiansToDegrees( getYaw( topoVectorDir ) ) - 90 ),
        pitch: radiansToDegrees( getPitch( topoVectorDir ) )
    }

}

///**
// * TRIGONOMETRIC CIRCLE CONCEPT WITH INTEGRATED TIMER
// *
// * Provide position on any given referential (starting position)
// * this position is updated every tick on a trigonometric circle of rayon (radius)
// * and give new position in px about this point in current referential.
// *
// * @param settings
// * @constructor
// */
//function TTrigonometricCircle ( settings ) {
//
//    var _ = this;
//
//    _.options = $.extend( {}, TTrigonometricCircle.DEFAULT_SETTINGS, settings );
//
//}
//
//Object.assign( TTrigonometricCircle, {
//
//    /**
//     *
//     */
//    DEFAULT_SETTINGS: {
//        angle:       0,
//        radius:      10
//    }
//
//} )
//
//Object.assign( TTrigonometricCircle.prototype, {
//
//    /**
//     *
//     * @param increment
//     */
//    increment ( increment ) {
//        var _   = this;
//        _.angle = (increment ? _.angle + increment : _.angle + 1);
//        if ( _.angle >= 360 ) {
//            _.angle = 0;
//        }
//    },
//
//    /**
//     *
//     */
//    getRadius () {
//        var _ = this;
//        return _.radius;
//    },
//
//    /**
//     *
//     * @return {number}
//     */
//    getCosinus () {
//        var _ = this;
//        return Math.cos( degreesToRadians( _.angle ) ) * _.radius;
//    },
//
//    /**
//     *
//     * @return {number}
//     */
//    getSinus () {
//        var _ = this;
//        return Math.sin( degreesToRadians( _.angle ) ) * _.radius;
//    }
//
//} )
//
///////////
//
///**
// *
// * @param settings
// * @constructor
// */
//function TTrigonometricCone ( settings ) {
//
//    var _ = this;
//
//    _.model = $.extend( {}, TTrigonometricCone.DEFAULT_SETTINGS, settings );
//}
//
//Object.assign( TTrigonometricCone, {
//
//    /**
//     *
//     */
//    DEFAULT_SETTINGS: {
//        angle:       0,
//        height:      10,
//        radius:      10
//    }
//
//} )
//
//Object.assign( TTrigonometricCone.prototype, {
//
//    /**
//     *
//     * @param increment
//     */
//    increment ( increment ) {
//        var _         = this;
//        _.model.angle = (increment ? _.model.angle + increment : _.model.angle + 1);
//        if ( _.model.angle >= 360 ) {
//            _.model.angle = 0;
//        }
//    },
//
//    /**
//     *
//     */
//    getRadius () {
//        var _ = this;
//        return _.model.radius;
//    },
//
//    /**
//     *
//     * @return {number}
//     */
//    getCosinus () {
//        var _ = this;
//        return Math.cos( degreesToRadians( _.model.angle ) ) * _.model.radius;
//    },
//
//    /**
//     *
//     * @return {number}
//     */
//    getSinus () {
//        var _ = this;
//        return Math.sin( degreesToRadians( _.model.angle ) ) * _.model.radius;
//    },
//
//    /**
//     *
//     * @param height
//     * @return {number}
//     */
//    getCosinusForHeight ( height ) {
//        var _ = this;
//        return Math.cos( degreesToRadians( _.model.angle ) ) * ((_.model.radius / _.model.height) * Math.abs( height ) );
//    },
//
//    /**
//     *
//     * @param height
//     * @return {number}
//     */
//    getSinusForHeight ( height ) {
//        var _ = this;
//        return Math.sin( degreesToRadians( _.model.angle ) ) * ((_.model.radius / _.model.height) * Math.abs( height ));
//    }
//
//} )

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/physics/temperatures
 * @description Export the utilities methods about temperatures
 * @requires {@link module:sources/cores/numbers}
 */

const FAHRENHEIT_CELSIUS_COEFFICIENT = 1.8;
const FAHRENHEIT_CELSIUS_CONSTANTE   = 32.0;
const KELVIN_CELSIUS_CONSTANTE       = 273.14999999955;

/**
 *
 * @param celsius
 * @param precisionPointAt
 * @return {string}
 */
function celsiusToKelvin ( celsius, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( celsius ) ) { throw new Error( 'Require first operand as an temperature in celsius !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 );

    // Sets the decimal point for the temperature conversion equation
    return ( celsius + KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

/**
 *
 * @param celsius
 * @param precisionPointAt
 * @return {string}
 */
function celsiusToFahrenheit ( celsius, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( celsius ) ) { throw new Error( 'Require first operand as an temperature in celsius !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 );

    // Sets the decimal point for the temperature conversion equation
    return ( celsius * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

/**
 *
 * @param fahrenheit
 * @param precisionPointAt
 * @return {string}
 */
function fahrenheitToCelsius ( fahrenheit, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( fahrenheit ) ) { throw new Error( 'Require first operand as an temperature in fahrenheit !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 );

    // Sets the decimal point for the temperature conversion equation
    return ( ( fahrenheit - FAHRENHEIT_CELSIUS_CONSTANTE ) / FAHRENHEIT_CELSIUS_COEFFICIENT ).toFixed( _precisionPointAt )

}

/**
 *
 * @param fahrenheit
 * @param precisionPointAt
 * @return {string}
 */
function fahrenheitToKelvin ( fahrenheit, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( fahrenheit ) ) { throw new Error( 'Require first operand as an temperature in fahrenheit !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 );

    // Sets the decimal point for the temperature conversion equation
    return ( ( ( fahrenheit - FAHRENHEIT_CELSIUS_CONSTANTE ) / FAHRENHEIT_CELSIUS_COEFFICIENT ) + KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

/**
 *
 * @param kelvin
 * @param precisionPointAt
 * @return {string}
 */
function kelvinToCelsius ( kelvin, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( kelvin ) ) { throw new Error( 'Require first operand as an temperature in kelvin !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 );

    // Sets the decimal point for the temperature conversion equation
    return ( kelvin - KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

/**
 *
 * @param kelvin
 * @param precisionPointAt
 * @return {string}
 */
function kelvinToFahrenheit ( kelvin, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( kelvin ) ) { throw new Error( 'Require first operand as an temperature in kelvin !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 );

    // Sets the decimal point for the temperature conversion equation
    return ( ( kelvin - KELVIN_CELSIUS_CONSTANTE ) * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

exports.DEG_TO_RAD = DEG_TO_RAD;
exports.FAHRENHEIT_CELSIUS_COEFFICIENT = FAHRENHEIT_CELSIUS_COEFFICIENT;
exports.FAHRENHEIT_CELSIUS_CONSTANTE = FAHRENHEIT_CELSIUS_CONSTANTE;
exports.KELVIN_CELSIUS_CONSTANTE = KELVIN_CELSIUS_CONSTANTE;
exports.PI = PI;
exports.PI_2 = PI_2;
exports.PI_4 = PI_4;
exports.RAD_TO_DEG = RAD_TO_DEG;
exports.celsiusToFahrenheit = celsiusToFahrenheit;
exports.celsiusToKelvin = celsiusToKelvin;
exports.classNameify = classNameify;
exports.convertWebGLRotationToTopogicalYawPitch = convertWebGLRotationToTopogicalYawPitch;
exports.createInterval = createInterval;
exports.degreesFromRadians = degreesFromRadians;
exports.degreesToRadians = degreesToRadians;
exports.diacriticsMap = diacriticsMap;
exports.extend = extend;
exports.extendObject = extendObject;
exports.fahrenheitToCelsius = fahrenheitToCelsius;
exports.fahrenheitToKelvin = fahrenheitToKelvin;
exports.getFilesPathsUnder = getFilesPathsUnder;
exports.getPitch = getPitch;
exports.getRandomArbitrary = getRandomArbitrary;
exports.getRandomInt = getRandomInt;
exports.getYaw = getYaw;
exports.kelvinToCelsius = kelvinToCelsius;
exports.kelvinToFahrenheit = kelvinToFahrenheit;
exports.radiansFromDegrees = radiansFromDegrees;
exports.radiansToDegrees = radiansToDegrees;
exports.removeDiacritics = removeDiacritics;
exports.serializeObject = serializeObject;
exports.sortBy = sortBy;
exports.toEnum = toEnum;
exports.uniq = uniq;
//# sourceMappingURL=itee-utils.cjs.js.map
