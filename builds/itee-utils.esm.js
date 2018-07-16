import fs from 'fs';

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays
 * @description Export the utilities methods about Arrays
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/booleans
 * @description Export the utilities methods about booleans
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/functions
 * @description Export the utilities methods about functions
 *
 */

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
    return Math.random() * (max - min) + min
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt ( min = 0, max = 1 ) {
    return (Math.floor( Math.random() * (max - min + 1) ) + min)
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids
 * @desc Export the validation methods about voids notions
 */

/**
 * Check if given data is null
 *
 * @param data {any} The data to check against the nullity
 * @returns {boolean} true if data is null, false otherwise.
 */
function isNull ( data ) {
    return (data === null)
}

/**
 * Check if given data is not null
 *
 * @param data {any} The data to check against the nullity
 * @returns {boolean} true if data is not null, false otherwise.
 */
function isNotNull ( data ) {
    return !isNull( data )
}

/**
 * Check if given data is undefined
 *
 * @param data {any} The data to check against the undefiness
 * @returns {boolean} true if data is undefined, false otherwise.
 */
function isUndefined ( data ) {
    return (typeof data === 'undefined')
}

/**
 * Check if given data is null or undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
function isNullOrUndefined ( data ) {
    return (isNull( data ) || isUndefined( data ))
}

/**
 * Check emptiness of given data
 *
 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as empty, false otherwise.
 */
function isEmpty ( data ) {

    // null and undefined are consider as "empty"
    if ( data === null ) {
        return true;
    }
    if ( data === undefined ) {
        return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if ( data.length > 0 ) {
        return false;
    }
    if ( data.length === 0 ) {
        return true;
    }

    // Otherwise, does it have any properties of its own?
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false;
        }
    }

    return true;
}

/**
 * Check fullness of given data
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
function isNotEmpty ( data ) {
    return !isEmpty( data );
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects
 * @desc Export the validation methods about objects
 * @requires {@link module:sources/cores/voids/isNull}
 * @requires {@link module:sources/cores/voids/isEmpty}
 */

/**
 * Check if given data is an object
 *
 * @param data {any} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
function isObject ( data ) {
    return ( isNotNull( data ) && (typeof data === 'object') && !Array.isArray( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if given data is a number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a number, false otherwise.
 */
function isNumber ( data ) {
    return (typeof data === 'number' && !Number.isNaN( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/cores
 * @desc This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/maths/maths
 * @desc This is the maths export entry point.
 * It expose all exports of the ... sub-folder.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/physics/temperatures
 * @desc Export the validation methods about temperatures
 * @requires {@link module:sources/cores/numbers}
 */

// Todo: itee-physics
const ABSOLUTE_ZERO_KELVIN     = 0.00000000045;
const ABSOLUTE_ZERO_CELSIUS    = -273.14999999955;
const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isKelvin ( data ) {
    return (isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN)
}

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotKelvin ( data ) {
    return !isKelvin( data )
}

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isCelsius ( data ) {
    return (isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS)
}

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotCelsius ( data ) {
    return !isCelsius( data )
}

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isFahrenheit ( data ) {
    return (isNumber( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT)
}

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotFahrenheit ( data ) {
    return !isFahrenheit( data )
}

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
        return seen.hasOwnProperty( item ) ? false : (seen[ item ] = true);
    } );
}

/**
 *
 * @param target
 * @param source
 * @return {*}
 */
function extend ( target, source ) {

    let output = undefined;

    if ( isObject( target ) && isNullOrUndefined( source ) ) {

        output = Object.assign( {}, target );

    } else if ( isNullOrUndefined( target ) && isObject( source ) ) {

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

                    Object.assign( output, { [key]: source[ key ] } );

                }

            } else {

                Object.assign( output, { [key]: source[ key ] } );

            }

        }

    } else {

        output = null;

    }

    return output;

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

        throw new Error( "Cannot perform extend of object with an array" )

    } else {

        throw new Error( "Cannot perform extend given parameters..." )

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
        }
        else if ( globalOffset + moveOffset > DELTA_BETWEEN_PARTICLE ) { // Avoid final gap jump before new "loop"
            globalOffset = DELTA_BETWEEN_PARTICLE;
        }
        else {
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
let diacriticsMap = (() => {

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

})();

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
        return diacriticsMap[ a ] || a;
    } );

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/symbols
 * @description Export the utilities methods about symbols
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids
 * @description Export the utilities methods about voids notions
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/cores
 * @description This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
function resolve() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : '/';

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
}
// path.normalize(path)
// posix version
function normalize(path) {
  var isPathAbsolute = isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isPathAbsolute).join('/');

  if (!path && !isPathAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isPathAbsolute ? '/' : '') + path;
}
// posix version
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
function join() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
}


// path.relative(from, to)
// posix version
function relative(from, to) {
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
}

var sep = '/';
var delimiter = ':';

function dirname(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
}

function basename(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
}


function extname(path) {
  return splitPath(path)[3];
}
var path = {
  extname: extname,
  basename: basename,
  dirname: dirname,
  sep: sep,
  delimiter: delimiter,
  relative: relative,
  join: join,
  isAbsolute: isAbsolute,
  normalize: normalize,
  resolve: resolve
};
function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ?
    function (str, start, len) { return str.substr(start, len) } :
    function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

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
 * @private
 */
function fileExistForPath ( filePath ) {

    return fs.existsSync( filePath )

}

/**
 * Check the file size against a limit ( 0 as default ).
 * @param filePath
 * @param limit
 * @return {boolean} - True if below the limit or zero, false otherwise
 * @private
 */
function fileIsEmpty ( filePath, limit ) {

    const _limit   = limit || 0;
    const fileSize = fs.statSync( filePath ).size;

    return ( fileSize < _limit )

}

/**
 * Allow to search all files under filePaths in a recursive way
 *
 * @param {Array.<string>|string} filePaths - The files paths where search files
 * @returns {Array} - The paths of finded files
 * @private
 */
function getFilesPathsUnder ( filePaths ) {

    let files = [];

    if ( Array.isArray( filePaths ) ) {

        let filePath = undefined;
        for ( let pathIndex = 0, numberOfPaths = filePaths.length ; pathIndex < numberOfPaths ; pathIndex++ ) {

            filePath = filePaths[ pathIndex ];
            checkStateOf( filePath );

        }

    } else {

        checkStateOf( filePaths );

    }

    return files

    function getFilesPathsUnderFolder ( folder ) {

        fs.readdirSync( folder ).forEach( ( name ) => {

            const filePath = path.resolve( folder, name );
            checkStateOf( filePath );

        } );

    }

    function checkStateOf ( filePath ) {

        if ( !fs.existsSync( filePath ) ) {
            console.error( 'SchemaRegister: Invalid file path "' + filePath + '"' );
            return
        }

        const stats = fs.statSync( filePath );
        if ( stats.isFile() ) {

            files.push( filePath );

        } else if ( stats.isDirectory() ) {

            Array.prototype.push.apply( files, getFilesPathsUnderFolder( filePath ) );

        } else {

            console.error( "Invalid stat object !" );

        }

    }

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/cores
 * @description This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/geomathics/trigonometries
 */

const PI   = Math.PI;
const PI_2 = Math.PI / 2;
const PI_4 = Math.PI / 4;

const DEG_TO_RAD = (PI / 180);
const RAD_TO_DEG = (180 / PI);

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
 * @module sources/geometries/_geomathries
 * @description This is the geometries/mathematique export entry point.
 * It expose all exports of the geometries sub-files.
 */

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
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2);

    // Sets the decimal point for the temperature conversion equation
    return (celsius + KELVIN_CELSIUS_CONSTANTE).toFixed( _precisionPointAt )

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
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2);

    // Sets the decimal point for the temperature conversion equation
    return (celsius * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE).toFixed( _precisionPointAt )

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
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2);

    // Sets the decimal point for the temperature conversion equation
    return ((fahrenheit - FAHRENHEIT_CELSIUS_CONSTANTE ) / FAHRENHEIT_CELSIUS_COEFFICIENT).toFixed( _precisionPointAt )

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
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2);

    // Sets the decimal point for the temperature conversion equation
    return (((fahrenheit - FAHRENHEIT_CELSIUS_CONSTANTE ) / FAHRENHEIT_CELSIUS_COEFFICIENT) + KELVIN_CELSIUS_CONSTANTE).toFixed( _precisionPointAt )

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
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2);

    // Sets the decimal point for the temperature conversion equation
    return (kelvin - KELVIN_CELSIUS_CONSTANTE).toFixed( _precisionPointAt )

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
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2);

    // Sets the decimal point for the temperature conversion equation
    return ((kelvin - KELVIN_CELSIUS_CONSTANTE) * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE).toFixed( _precisionPointAt )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/physics/physics
 * @description This is the physics export entry point.
 * It expose all exports of the temperatures sub-folder.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/physics/physics
 * @description This is the physics export entry point.
 * It expose all exports of the temperatures sub-folder.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/itee-util
 * @description The main entry point for Itee-Utils, it contains all exports of the library
 */

export { getRandomArbitrary, getRandomInt, uniq, extend, serializeObject, extendObject, createInterval, classNameify, diacriticsMap, removeDiacritics, fileExistForPath, fileIsEmpty, getFilesPathsUnder, PI, PI_2, PI_4, DEG_TO_RAD, RAD_TO_DEG, degreesToRadians, degreesFromRadians, radiansToDegrees, radiansFromDegrees, getYaw, getPitch, convertWebGLRotationToTopogicalYawPitch, FAHRENHEIT_CELSIUS_COEFFICIENT, FAHRENHEIT_CELSIUS_CONSTANTE, KELVIN_CELSIUS_CONSTANTE, celsiusToKelvin, celsiusToFahrenheit, fahrenheitToCelsius, fahrenheitToKelvin, kelvinToCelsius, kelvinToFahrenheit };
