console.log('Itee.Utils v5.3.0 - Standalone')
this.Itee = this.Itee || {};
this.Itee.Utils = (function (exports, iteeValidators) {
	'use strict';

	if( iteeValidators === undefined ) { throw new Error('Itee.Utils need Itee.Validators to be defined first. Please check your scripts loading order.') }

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/arrays
	 * @description Export the utilities methods about Arrays
	 *
	 */

	function sortBy ( propertyName, ascending = 'asc' ) {

	    const _propertyName = propertyName;
	    let resultSorter    = undefined;

	    if ( ascending === 'asc' ) {

	        resultSorter = ( a, b ) => {

	            if ( a[ _propertyName ] < b[ _propertyName ] ) {
	                return -1
	            }

	            if ( a[ _propertyName ] > b[ _propertyName ] ) {
	                return 1
	            }

	            return 0

	        };

	    } else if ( ascending === 'desc' ) {

	        resultSorter = ( a, b ) => {

	            if ( a[ _propertyName ] > b[ _propertyName ] ) {
	                return -1
	            }

	            if ( a[ _propertyName ] < b[ _propertyName ] ) {
	                return 1
	            }

	            return 0

	        };

	    } else {

	        throw 'Invalid ascending !'

	    }

	    return resultSorter

	}

	/**
	 * Will wrap the object value in a array, if is not already one, and return empty array in case
	 * where input object is null or undefined.
	 * This function is build to ensure the return value will be always an array
	 *
	 * @param {*} object - The target to return as array
	 * @param {object} [options]
	 * @param {boolean} [options.keepArray=false] - If true, will wrap array too instead of returning it
	 * @param {boolean} [options.keepNull=false] - If true, will wrap null or undefined value too instead of returning empty array
	 * @returns {Array.<*>}
	 */
	function toArray ( object, options = {
	    keepArray: false,
	    keepNull:  false
	} ) {

	    let array;

	    if ( iteeValidators.isArray( object ) ) {
	        array = ( options.keepArray ) ? [ object ] : object;
	    } else if ( options.keepNull || typeof object === 'object' || iteeValidators.isObject( object ) ) {
	        array = [ object ];
	    } else {
	        array = [];
	    }

	    return array

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 *
	 */

	function byteToBits ( byte ) {

	    let bits = '';

	    for ( let i = 128 ; i >= 1 ; i /= 2 ) {

	        if ( byte & i ) {
	            bits += '1';
	        } else {
	            bits += '0';
	        }

	    }

	    return bits

	}

	function bitsToByte ( bits ) {

	    let byte = 0;

	    for ( let i = 7, e = 0 ; i >= 0 ; i--, e++ ) {

	        if ( bits[ i ] === '1' ) {
	            byte += 2 ** e;
	        }

	    }

	    return byte

	}

	function numberToInternalRepresentation ( number ) {

	    //    let buffer  = new Float64Array( [ number ] ).buffer
	    let bufferA = new ArrayBuffer( 8 );
	    let view    = new DataView( bufferA );
	    view.setFloat64( 0, number );

	    let internalRepresentation = '';
	    for ( let i = 0 ; i < 8 ; i++ ) {
	        internalRepresentation += byteToBits( view.getUint8( i ) );
	    }
	    internalRepresentation = `${ internalRepresentation.substring( 0, 1 ) } ${ internalRepresentation.substring( 1, 12 ) } ${ internalRepresentation.substring( 12 ) }`;

	    return internalRepresentation

	}

	function internalRepresentationToNumber ( string ) {

	    const bytes = string.replace( / /g, '' )
	                        .match( /.{8}/g )
	                        .map( subString => bitsToByte( subString ) );

	    let arrayBuffer = new ArrayBuffer( 8 );
	    let dataView    = new DataView( arrayBuffer );
	    for ( let i = 0 ; i < 8 ; i++ ) {
	        dataView.setUint8( i, bytes[ i ] );
	    }

	    return dataView.getFloat64( 0 )

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/numbers
	 * @description Export the utilities methods about numbers
	 *
	 */

	function getRandom () {
	    return Math.random()
	}

	/**
	 * Returns a random number between min (inclusive) and max (exclusive)
	 */
	function getRandomFloatExclusive ( min = 0.0, max = 1.0 ) {
	    return Math.random() * ( max - min ) + min
	}

	/**
	 * Returns a random number between min (inclusive) and max (exclusive)
	 */
	function getRandomFloatInclusive ( min = 0.0, max = 1.0 ) {
	    return Math.random() * ( max - min + 1.0 ) + min
	}

	/**
	 * Returns a random integer between min (inclusive) and max (exclusive)
	 * Using Math.round() will give you a non-uniform distribution!
	 */
	function getRandomIntExclusive ( min = 0, max = 1 ) {
	    const _min = Math.ceil( min );
	    const _max = Math.floor( max );
	    return ( Math.floor( Math.random() * ( _max - _min ) ) + _min )
	}

	/**
	 * Returns a random integer between min (inclusive) and max (inclusive)
	 * Using Math.round() will give you a non-uniform distribution!
	 */
	function getRandomIntInclusive ( min = 0, max = 1 ) {
	    const _min = Math.ceil( min );
	    const _max = Math.floor( max );
	    return Math.floor( Math.random() * ( _max - _min + 1 ) ) + _min
	}


	/**
	 * Convert a number to its literral form
	 * @param value
	 * @returns {string}
	 */
	function numberToPlainString ( value ) {

	    const stringValue = String( value );
	    if ( !( /\d+\.?\d*e[-+]*\d+/i.test( stringValue ) ) ) { return stringValue }


	    const exponentialSplits   = stringValue.split( 'e' );
	    const dirtyBase           = exponentialSplits[ 0 ];
	    const negativeBase        = ( dirtyBase.indexOf( '-' ) === 0 );
	    const unsignedBase        = ( negativeBase ) ? dirtyBase.slice( 1 ) : dirtyBase;
	    const dotBaseSplits       = unsignedBase.split( '.' );
	    const numberOfSignificant = dotBaseSplits[ 0 ].length;
	    const numberOfDecimals    = ( dotBaseSplits[ 1 ] ) ? dotBaseSplits[ 1 ].length : 0;
	    const base                = dotBaseSplits.join( '' );
	    const dirtyExponent       = exponentialSplits[ 1 ];
	    const negativeExponant    = ( dirtyExponent.indexOf( '-' ) === 0 );
	    const exponent            = parseInt( dirtyExponent.slice( 1 ) );

	    let result = ( negativeBase ) ? '-' : '';
	    if ( negativeExponant ) {

	        result += '0.';
	        result += '0'.repeat( exponent - numberOfSignificant );
	        result += base;

	    } else {
	        result += base;
	        result += '0'.repeat( exponent - numberOfDecimals );
	        result += '.0';
	    }

	    return result

	}

	// #if IS_KEEP_ON_BUILD

	function numberToPlainString_alt0 ( value ) {

	    const stringValue = String( value );
	    if ( !( /\d+\.?\d*e[-+]*\d+/i.test( stringValue ) ) ) { return stringValue }


	    const exponentialSplits   = stringValue.split( 'e' );
	    const dirtyBase           = exponentialSplits[ 0 ];
	    const negativeBase        = ( dirtyBase.indexOf( '-' ) === 0 );
	    const unsignedBase        = ( negativeBase ) ? dirtyBase.slice( 1 ) : dirtyBase;
	    const dotBaseSplits       = unsignedBase.split( '.' );
	    const numberOfSignificant = dotBaseSplits[ 0 ].length;
	    const numberOfDecimals    = ( dotBaseSplits[ 1 ] ) ? dotBaseSplits[ 1 ].length : 0;
	    const base                = dotBaseSplits.join( '' );
	    const dirtyExponent       = exponentialSplits[ 1 ];
	    const negativeExponant    = ( dirtyExponent.indexOf( '-' ) === 0 );
	    const exponent            = dirtyExponent.slice( 1 );

	    let result = ( negativeBase ) ? '-' : '';
	    if ( negativeExponant ) {

	        result += '0.';
	        for ( let i = 0, e = parseInt( exponent ) - numberOfSignificant ; i < e ; i++ ) {
	            result += '0';
	        }
	        result += base;

	    } else {
	        result += base;
	        for ( let i = 0, e = parseInt( exponent ) - numberOfDecimals ; i < e ; i++ ) {
	            result += '0';
	        }
	        result += '.0';
	    }

	    return result

	}

	function numberToPlainString_alt1 ( value ) {

	    const stringValue = String( value );
	    if ( !( /\d+\.?\d*e[-+]*\d+/i.test( stringValue ) ) ) { return stringValue }


	    const exponentialSplits = stringValue.split( 'e' );
	    const dirtyBase         = exponentialSplits[ 0 ];
	    const negativeBase      = ( dirtyBase.indexOf( '-' ) === 0 );
	    const unsignedBase      = ( negativeBase ) ? dirtyBase.slice( 1 ) : dirtyBase;
	    const base              = unsignedBase.split( '.' ).join( '' );
	    const dirtyExponent     = exponentialSplits[ 1 ];
	    const negativeExponant  = ( dirtyExponent.indexOf( '-' ) === 0 );
	    const exponent          = dirtyExponent.slice( 1 );
	    const exponentLength    = parseInt( exponent ) + 1;

	    let result = '';
	    if ( negativeExponant ) {
	        result += '0.';
	        result = result.padEnd( exponentLength, '0' );
	        result += base;
	    } else {
	        result += base;
	        result = result.padEnd( exponentLength, '0' );
	        result += '.0';
	    }

	    if ( negativeBase ) {
	        result = `-${ result }`;
	    }

	    return result

	}

	function numberToPlainString_alt2 ( value ) {

	    const stringValue = String( value );
	    if ( !( /\d+\.?\d*e[-+]*\d+/i.test( stringValue ) ) ) { return stringValue }


	    const exponentialSplits   = stringValue.split( 'e' );
	    const dirtyBase           = exponentialSplits[ 0 ];
	    const negativeBase        = ( dirtyBase.indexOf( '-' ) === 0 );
	    const unsignedBase        = ( negativeBase ) ? dirtyBase.slice( 1 ) : dirtyBase;
	    const dotBaseSplits       = unsignedBase.split( '.' );
	    const numberOfSignificant = dotBaseSplits[ 0 ].length;
	    const numberOfDecimals    = ( dotBaseSplits[ 1 ] ) ? dotBaseSplits[ 1 ].length : 0;
	    const base                = dotBaseSplits.join( '' );
	    const dirtyExponent       = exponentialSplits[ 1 ];
	    const negativeExponant    = ( dirtyExponent.indexOf( '-' ) === 0 );
	    const exponent            = dirtyExponent.slice( 1 );
	    const exponentLength      = parseInt( exponent ) + 1;
	    const sign                = ( negativeBase ) ? '-' : '';

	    let result = '';
	    if ( negativeExponant ) {
	        result = `${ sign }0.${ Array( exponentLength - numberOfSignificant ).join( 0 ) }${ base }`;
	    } else {
	        result = `${ sign + base + Array( exponentLength - numberOfDecimals ).join( 0 ) }.0`;
	    }

	    return result

	}

	function numberToPlainString_alt3 ( value ) {

	    return String( value ).replace( /(-?)(\d*)(?:\.(\d+))?e([+-])(\d+)/,
	        ( matchs, sign, significants, decimals = '', exponentSign, exponent ) => {

	            const exponentLength = parseInt( exponent );
	            if ( exponentSign === '-' ) {
	                return `${ sign }0.${ '0'.repeat( exponentLength - significants.length ) }${ significants }${ decimals }`
	                //                return sign + '0.' + Array( exponentLength - significants.length + 1 ).join( 0 ) + significants + decimals
	            } else {
	                return `${ sign + significants + decimals + '0'.repeat( exponentLength - decimals.length ) }.0`
	                //                return sign + significants + decimals + Array( exponentLength - decimals.length + 1 ).join( 0 ) + '.0'
	            }
	        } )

	}

	function numberToPlainString_alt4 ( num ) {
	    const nsign = Math.sign( num );
	    //remove the sign
	    let _num    = Math.abs( num );
	    //if the number is in scientific notation remove it
	    if ( /\d+\.?\d*e[-+]*\d+/i.test( _num ) ) {

	        const zero        = '0';
	        const parts       = String( _num ).toLowerCase().split( 'e' ); //split into coeff and exponent
	        const e           = parseInt( parts.pop() ); //store the exponential part
	        let l             = Math.abs( e ); //get the number of zeros
	        const sign        = e / l;
	        const coeff_array = parts[ 0 ].split( '.' );

	        if ( sign === -1 ) {
	            l -= coeff_array[ 0 ].length;
	            if ( l < 0 ) {
	                _num = `${ coeff_array[ 0 ].slice( 0, l ) }.${ coeff_array[ 0 ].slice( l ) }${ coeff_array.length === 2 ? coeff_array[ 1 ] : '' }`;
	            } else {
	                _num = `${ zero }.${ new Array( l + 1 ).join( zero ) }${ coeff_array.join( '' ) }`;
	            }
	        } else {
	            const dec = coeff_array[ 1 ];
	            if ( dec ) {
	                l -= dec.length;
	            }
	            if ( l < 0 ) {
	                _num = `${ coeff_array[ 0 ] + dec.slice( 0, l ) }.${ dec.slice( l ) }`;
	            } else {
	                _num = coeff_array.join( '' ) + new Array( l + 1 ).join( zero );
	            }
	        }
	    }

	    return nsign < 0 ? `-${ _num }` : _num
	}

	// #endif

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/cores/objects
	 * @description Export the utilities methods about objects
	 */

	function uniq ( a ) {

	    const seen = {};
	    return a.filter( item => Object.prototype.hasOwnProperty.call( seen, item ) ? false : ( seen[ item ] = true ) )

	}

	/**
	 *
	 * @param target
	 * @param source
	 * @return {*}
	 */
	function extend ( target, source ) {

	    let output = undefined;

	    if ( iteeValidators.isObject( target ) && iteeValidators.isNotDefined( source ) ) {

	        output = Object.assign( {}, target );

	    } else if ( iteeValidators.isNotDefined( target ) && iteeValidators.isObject( source ) ) {

	        output = Object.assign( {}, source );

	    } else if ( iteeValidators.isObject( target ) && iteeValidators.isObject( source ) ) {

	        output = Object.assign( {}, target );

	        const keys = Object.keys( source );

	        for ( let i = 0, n = keys.length ; i < n ; ++i ) {

	            let key = keys[ i ];

	            if ( iteeValidators.isObject( source[ key ] ) ) {

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

	            if ( Object.prototype.hasOwnProperty.call( ChildClass, attribute ) ) { // We are sure that obj[key] belongs to the object and was not inherited.

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

	/**
	 *
	 * @param enumValues
	 * @method toString - return a string representation of the enum
	 * @method includes - check if given value is one of the enum
	 * @method types - return an array containing all enum types
	 *
	 * @example {@lang javascript}
	 * const Meal = toEnum( {
	 *     Food: 'Tartiflette',
	 *     Drink: 'Saint-Emilion',
	 *     Dessert: 'Mousse au chocolat'
	 * } )
	 *
	 * if( Foo.includes('Tartiflette') {
	 *     // Happy
	 * }
	 *
	 * const myDrink = 'coke'
	 * if( myDrink === Meal.Drink ) {
	 *
	 * } else {
	 *     // Your life is a pain
	 * }
	 *
	 * const MealTypes = Meal.types
	 * // ['Tartiflette', 'Saint-Emilion', 'Mousse au chocolat' ]
	 */
	function toEnum ( enumValues ) {

	    return /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperties( enumValues, {
	        toString: {
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
	        },
	        includes: {
	            configurable: false,
	            enumerable:   false,
	            writable:     false,
	            value:        function _includes ( key ) {
	                return Object.values( this ).includes( key )
	            }
	        },
	        types: {
	            configurable: false,
	            enumerable:   false,
	            writable:     false,
	            value:        function _types () {
	                return Object.keys( this )
	            }
	        }
	    } ) )

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	const diacriticsMap = ( () => {

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

	        const letters = defaultDiacriticsRemovalMap[ i ].letters;
	        const base    = defaultDiacriticsRemovalMap[ i ].base;

	        for ( let j = 0 ; j < letters.length ; j++ ) {

	            map[ letters[ j ] ] = base;

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
	    return string.replace( /[^\u0000-\u007E]/g, a => diacriticsMap[ a ] || a )

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @see [IFC Standard]{@link http://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/}
	 *
	 */

	/**
	 *
	 * @param ring
	 * @return {boolean}
	 */
	function ringClockwise ( ring ) {

	    if ( ( n = ring.length ) < 4 ) {
	        return false
	    }

	    var i    = 0,
	        n,
	        area = ring[ n - 1 ][ 1 ] * ring[ 0 ][ 0 ] - ring[ n - 1 ][ 0 ] * ring[ 0 ][ 1 ];
	    while ( ++i < n ) {
	        area += ring[ i - 1 ][ 1 ] * ring[ i ][ 0 ] - ring[ i - 1 ][ 0 ] * ring[ i ][ 1 ];
	    }
	    return area >= 0
	}

	/**
	 *
	 * @param ring
	 * @param hole
	 * @return {boolean}
	 */
	function ringContainsSome ( ring, hole ) {

	    let i = 0;
	    let n = hole.length;

	    do {

	        if ( ringContains( ring, hole[ i ] ) > 0 ) {
	            return true
	        }

	    } while ( ++i < n )

	    return false

	}

	/**
	 *
	 * @param ring
	 * @param point
	 * @return {number}
	 */
	function ringContains ( ring, point ) {

	    let x        = point[ 0 ];
	    let y        = point[ 1 ];
	    let contains = -1;

	    for ( let i = 0, n = ring.length, j = n - 1 ; i < n ; j = i++ ) {

	        const pi = ring[ i ];
	        const xi = pi[ 0 ];
	        const yi = pi[ 1 ];
	        const pj = ring[ j ];
	        const xj = pj[ 0 ];
	        const yj = pj[ 1 ];

	        if ( segmentContains( pi, pj, point ) ) {
	            contains = 0;
	        } else if ( ( ( yi > y ) !== ( yj > y ) ) && ( ( x < ( xj - xi ) * ( y - yi ) / ( yj - yi ) + xi ) ) ) {
	            contains = -contains;
	        }

	    }

	    return contains

	}

	/**
	 *
	 * @param p0
	 * @param p1
	 * @param p2
	 * @return {boolean}
	 */
	function segmentContains ( p0, p1, p2 ) {
	    var x20 = p2[ 0 ] - p0[ 0 ],
	        y20 = p2[ 1 ] - p0[ 1 ];
	    if ( x20 === 0 && y20 === 0 ) {
	        return true
	    }
	    var x10 = p1[ 0 ] - p0[ 0 ],
	        y10 = p1[ 1 ] - p0[ 1 ];
	    if ( x10 === 0 && y10 === 0 ) {
	        return false
	    }
	    var t = ( x20 * x10 + y20 * y10 ) / ( x10 * x10 + y10 * y10 );
	    return t < 0 || t > 1 ? false : t === 0 || t === 1 ? true : t * x10 === x20 && t * y10 === y20
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	    if ( iteeValidators.isNotTemperature( celsius ) ) { throw new Error( 'Require first operand as an temperature in celsius !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( iteeValidators.isNotEmpty( precisionPointAt ) && iteeValidators.isNumber( precisionPointAt ) ? precisionPointAt : 2 );

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
	    if ( iteeValidators.isNotTemperature( celsius ) ) { throw new Error( 'Require first operand as an temperature in celsius !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( iteeValidators.isNotEmpty( precisionPointAt ) && iteeValidators.isNumber( precisionPointAt ) ? precisionPointAt : 2 );

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
	    if ( iteeValidators.isNotTemperature( fahrenheit ) ) { throw new Error( 'Require first operand as an temperature in fahrenheit !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( iteeValidators.isNotEmpty( precisionPointAt ) && iteeValidators.isNumber( precisionPointAt ) ? precisionPointAt : 2 );

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
	    if ( iteeValidators.isNotTemperature( fahrenheit ) ) { throw new Error( 'Require first operand as an temperature in fahrenheit !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( iteeValidators.isNotEmpty( precisionPointAt ) && iteeValidators.isNumber( precisionPointAt ) ? precisionPointAt : 2 );

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
	    if ( iteeValidators.isNotTemperature( kelvin ) ) { throw new Error( 'Require first operand as an temperature in kelvin !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( iteeValidators.isNotEmpty( precisionPointAt ) && iteeValidators.isNumber( precisionPointAt ) ? precisionPointAt : 2 );

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
	    if ( iteeValidators.isNotTemperature( kelvin ) ) { throw new Error( 'Require first operand as an temperature in kelvin !' ) }

	    //Check optional parameter precisionPointAt and set it to 2 by default
	    const _precisionPointAt = ( iteeValidators.isNotEmpty( precisionPointAt ) && iteeValidators.isNumber( precisionPointAt ) ? precisionPointAt : 2 );

	    // Sets the decimal point for the temperature conversion equation
	    return ( ( kelvin - KELVIN_CELSIUS_CONSTANTE ) * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module sources/testing
	 *
	 */

	/* global Itee */

	const voids = {
	    null:      null,
	    undefined: undefined,
	    void:      void ( 0 )
	};

	const booleans = {
	    true:  true,
	    false: false
	};

	const numbers = {
	    negativeInfinity:        Number.NEGATIVE_INFINITY,
	    negativeMaxValue:        -Number.MAX_VALUE,
	    negativeMinSafeInteger:  Number.MIN_SAFE_INTEGER,
	    negativeMinValue:        -Number.MIN_VALUE,
	    negativeHexa:            -0x123456,
	    negativePow:             -2e+2,
	    negativePowWithDecimals: -1.2345e+2,
	    negativeFloat:           -1.01,
	    negativeInt:             -1,
	    negativeZero:            -0,
	    nan:                     Number.NaN,
	    positiveZero:            0,
	    positiveInt:             1,
	    positiveFloat:           1.01,
	    positivePowWithDecimals: 1.2345e+2,
	    positivePow:             2e+2,
	    positiveHexa:            0x123456,
	    positiveMinValue:        Number.MIN_VALUE,
	    positiveMaxSafeInteger:  Number.MAX_SAFE_INTEGER,
	    positiveMaxValue:        Number.MAX_VALUE,
	    positiveInfinity:        Number.POSITIVE_INFINITY,
	    // others
	    e:                       Math.E,
	    ln10:                    Math.LN10,
	    ln2:                     Math.LN2,
	    log10e:                  Math.LOG10E,
	    log2e:                   Math.LOG2E,
	    pi:                      Math.PI,
	    sqrt1_2:                 Math.SQRT1_2,
	    sqrt2:                   Math.SQRT2
	};

	const strings = ( () => {

	    const dataMap = {
	        empty:       '',
	        blank:       '      ',
	        stringNull:  String(),
	        stringEmpty: String( '' ),
	        stringBlank: String( '    ' ),
	        foobar:      'foobar'
	    };

	    // Convert voids to string
	    const voidDataMap = voids;
	    for ( let i = 0, m = voidDataMap.length ; i < m ; i++ ) {
	        dataMap[ voidDataMap[ i ] ] = `${voidDataMap[ i ]}`;
	    }

	    // Convert booleans to string
	    const booleanDataMap = booleans;
	    for ( let j = 0, n = booleanDataMap.length ; j < n ; j++ ) {
	        dataMap[ booleanDataMap[ j ] ] = `${booleanDataMap[ j ]}`;
	    }

	    // Convert numbers to string
	    const numericDataMap = numbers;
	    for ( let k = 0, o = numericDataMap.length ; k < o ; k++ ) {
	        dataMap[ numericDataMap[ k ] ] = `${numericDataMap[ k ]}`;
	    }

	    return dataMap

	} )();

	const functions = {
	    anonymousFunction: function () {},
	    namedFunction:     function namedFunction () {},
	    arrowFunction:     () => {}
	};

	const arrays = ( () => {

	    const dataMap = {
	        emptyArray:       [],
	        emptyArrayObject: new Array(),
	        singleValued:     [ 0 ],
	        multiValued:      [ 0, 1, 2 ],
	        null:             ( () => {

	            const nullArray = [];

	            for ( let index = 0 ; index < 3 ; index++ ) {
	                nullArray.push( null );
	            }

	            return nullArray

	        } )(),
	        undefined: ( () => {

	            const undefinedArray = [];

	            for ( let index = 0 ; index < 3 ; index++ ) {
	                undefinedArray.push( undefined );
	            }

	            return undefinedArray

	        } )(),
	        void: ( () => {

	            const undefinedArray = [];

	            for ( let index = 0 ; index < 3 ; index++ ) {
	                undefinedArray.push( void ( 0 ) );
	            }

	            return undefinedArray

	        } )(),
	        voids: ( () => {

	            const array = [];

	            const voidDataMap = voids;
	            for ( let key in voidDataMap ) {
	                array.push( voidDataMap[ key ] );
	            }

	            return array

	        } )(),
	        booleans: ( () => {

	            const array = [];

	            const booleanDataMap = booleans;
	            for ( let key in booleanDataMap ) {
	                array.push( booleanDataMap[ key ] );
	            }

	            return array

	        } )(),
	        numbers: ( () => {

	            const array = [];

	            const numericDataMap = numbers;
	            for ( let key in numericDataMap ) {
	                array.push( numericDataMap[ key ] );
	            }

	            return array

	        } )(),
	        strings: ( () => {

	            const array = [];

	            const stringDataMap = strings;
	            for ( let key in stringDataMap ) {
	                array.push( stringDataMap[ key ] );
	            }

	            return array

	        } )(),
	        functions: ( () => {

	            const array = [];

	            const functionDataMap = functions;
	            for ( let key in functionDataMap ) {
	                array.push( functionDataMap[ key ] );
	            }

	            return array

	        } )(),
	        objects: [
	            {
	                foo: 'bar'
	            },
	            {
	                baz: 'qux'
	            }
	        ],
	        arrays: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
	    };

	    return dataMap

	} )();

	const typedArrays = {
	    int8Array:    new Int8Array( [ 1, 2, 3 ] ),
	    uInt8Array:   new Uint8Array( [ 1, 2, 3 ] ),
	    int16Array:   new Int16Array( [ 1, 2, 3 ] ),
	    uInt16Array:  new Uint16Array( [ 1, 2, 3 ] ),
	    int32Array:   new Int32Array( [ 1, 2, 3 ] ),
	    uInt32Array:  new Uint32Array( [ 1, 2, 3 ] ),
	    float32Array: new Float32Array( [ 1.0, 2.0, 3.0 ] ),
	    float64Array: new Float64Array( [ 1.0, 2.0, 3.0 ] )
	};

	const objects = {
	    empty:     {},
	    instance:  new Object(),
	    null:      { null: null },
	    undefined: { undefined: undefined },
	    foo:       { foo: 'bar' }
	};

	const globalDataMap = {
	    voids,
	    booleans,
	    numbers,
	    strings,
	    functions,
	    arrays,
	    typedArrays,
	    objects
	};

	const Testing = {

	    DataMap: undefined,

	    createDataMap: function ( dataMapOptions ) {

	        if ( dataMapOptions === undefined ) {

	            dataMapOptions = {
	                voids:       [],
	                booleans:    [],
	                numbers:     [],
	                strings:     [],
	                functions:   [],
	                arrays:      [],
	                typedArrays: [],
	                objects:     []
	            };

	        }

	        let dataMap = {};

	        for ( let optionKey in dataMapOptions ) {

	            const map = globalDataMap[ optionKey ];
	            if ( map === undefined ) {
	                throw ReferenceError( `The global data map does not contain element for key: ${optionKey}` )
	            }

	            const option = dataMapOptions[ optionKey ];

	            dataMap[ optionKey ] = {};

	            if ( option.length === 0 ) {

	                for ( let valueKey in map ) {
	                    dataMap[ optionKey ][ valueKey ] = map[ valueKey ];
	                }

	            } else {

	                for ( let i = 0, nbOptions = option.length ; i < nbOptions ; i++ ) {
	                    dataMap[ optionKey ][ option[ i ] ] = map[ option[ i ] ];
	                }

	            }

	        }

	        return dataMap

	    },

	    createDataMapBenchmarkOptions: function ( dataMapOptions ) {

	        Itee.Testing.DataMap = Itee.Testing.createDataMap( dataMapOptions );

	        return {

	            setup: function onSetup () {
	                this.datamap = Itee.Testing.DataMap;
	            },

	            teardown: function onTeardown () {
	                delete this.datamap;
	            }

	        }

	    },

	    iterateOverDataMap: function ( func ) {

	        return function _iterateOverDataMap () {

	            const datamap = this.datamap;
	            for ( let datasetKey in datamap ) {

	                const dataset = datamap[ datasetKey ];

	                if ( Array.isArray( dataset ) ) {

	                    for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

	                        const data = dataset[ i ];
	                        func( data );

	                    }

	                } else {

	                    for ( let dataKey in dataset ) {

	                        const data = dataset[ dataKey ];
	                        func( data );

	                    }

	                }

	            }

	        }

	    },

	    createDataSet: function ( dataSetOptions ) {

	        if ( dataSetOptions === undefined ) {

	            dataSetOptions = {
	                voids:       [],
	                booleans:    [],
	                numbers:     [],
	                strings:     [],
	                functions:   [],
	                arrays:      [],
	                typedArrays: [],
	                objects:     []
	            };

	        }

	        let dataSet = [];

	        for ( let optionKey in dataSetOptions ) {

	            const map    = globalDataMap[ optionKey ];
	            const option = dataSetOptions[ optionKey ];

	            if ( option.length === 0 ) {

	                for ( let valueKey in map ) {
	                    dataSet.push( map[ valueKey ] );
	                }

	            } else {

	                for ( let i = 0, nbOptions = option.length ; i < nbOptions ; i++ ) {
	                    dataSet.push( map[ option[ i ] ] );
	                }

	            }

	        }

	        return dataSet

	    },

	    createDataSetBenchmarkOptions: function ( datasetName ) {

	        return {

	            setup: function onSetup () {
	                this.dataset = Itee.Testing.createDataSet()[ datasetName ];
	            },

	            teardown: function onTeardown () {
	                delete this.dataset;
	            }

	        }

	    },

	    iterateOverDataSet: function ( func ) {

	        return function () {

	            const dataset = this.dataset;
	            for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

	                func( dataset[ i ] );

	            }

	        }

	    }

	};

	exports.DEG_TO_RAD = DEG_TO_RAD;
	exports.FAHRENHEIT_CELSIUS_COEFFICIENT = FAHRENHEIT_CELSIUS_COEFFICIENT;
	exports.FAHRENHEIT_CELSIUS_CONSTANTE = FAHRENHEIT_CELSIUS_CONSTANTE;
	exports.KELVIN_CELSIUS_CONSTANTE = KELVIN_CELSIUS_CONSTANTE;
	exports.PI = PI;
	exports.PI_2 = PI_2;
	exports.PI_4 = PI_4;
	exports.RAD_TO_DEG = RAD_TO_DEG;
	exports.Testing = Testing;
	exports.bitsToByte = bitsToByte;
	exports.byteToBits = byteToBits;
	exports.celsiusToFahrenheit = celsiusToFahrenheit;
	exports.celsiusToKelvin = celsiusToKelvin;
	exports.classNameify = classNameify;
	exports.convertWebGLRotationToTopogicalYawPitch = convertWebGLRotationToTopogicalYawPitch;
	exports.createInterval = createInterval;
	exports.degreesFromRadians = degreesFromRadians;
	exports.degreesToRadians = degreesToRadians;
	exports.extend = extend;
	exports.extendObject = extendObject;
	exports.fahrenheitToCelsius = fahrenheitToCelsius;
	exports.fahrenheitToKelvin = fahrenheitToKelvin;
	exports.getPitch = getPitch;
	exports.getRandom = getRandom;
	exports.getRandomFloatExclusive = getRandomFloatExclusive;
	exports.getRandomFloatInclusive = getRandomFloatInclusive;
	exports.getRandomIntExclusive = getRandomIntExclusive;
	exports.getRandomIntInclusive = getRandomIntInclusive;
	exports.getYaw = getYaw;
	exports.internalRepresentationToNumber = internalRepresentationToNumber;
	exports.kelvinToCelsius = kelvinToCelsius;
	exports.kelvinToFahrenheit = kelvinToFahrenheit;
	exports.numberToInternalRepresentation = numberToInternalRepresentation;
	exports.numberToPlainString = numberToPlainString;
	exports.numberToPlainString_alt0 = numberToPlainString_alt0;
	exports.numberToPlainString_alt1 = numberToPlainString_alt1;
	exports.numberToPlainString_alt2 = numberToPlainString_alt2;
	exports.numberToPlainString_alt3 = numberToPlainString_alt3;
	exports.numberToPlainString_alt4 = numberToPlainString_alt4;
	exports.radiansFromDegrees = radiansFromDegrees;
	exports.radiansToDegrees = radiansToDegrees;
	exports.removeDiacritics = removeDiacritics;
	exports.ringClockwise = ringClockwise;
	exports.ringContains = ringContains;
	exports.ringContainsSome = ringContainsSome;
	exports.segmentContains = segmentContains;
	exports.serializeObject = serializeObject;
	exports.sortBy = sortBy;
	exports.toArray = toArray;
	exports.toEnum = toEnum;
	exports.uniq = uniq;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}, Itee.Validators));
//# sourceMappingURL=itee-utils.iife.js.map
