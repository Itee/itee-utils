/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers
 * @description Export the utilities methods about numbers
 *
 */

export function getRandom() {
    return Math.random()
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomFloatExclusive( min = 0.0, max = 1.0 ) {
    return Math.random() * ( max - min ) + min
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomFloatInclusive( min = 0.0, max = 1.0 ) {
    return Math.random() * ( max - min + 1.0 ) + min
}

/**
 * Returns a random integer between min (inclusive) and max (exclusive)
 * Using Math.round() will give you a non-uniform distribution!
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomIntExclusive( min = 0, max = 1 ) {
    const _min = Math.ceil( min )
    const _max = Math.floor( max )
    return ( Math.floor( Math.random() * ( _max - _min ) ) + _min )
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomIntInclusive( min = 0, max = 1 ) {
    const _min = Math.ceil( min )
    const _max = Math.floor( max )
    return Math.floor( Math.random() * ( _max - _min + 1 ) ) + _min
}


/**
 * Convert a number to its literral form
 *
 * @param {number} value
 * @returns {string}
 */
export function numberToPlainString( value ) {

    const stringValue = String( value )
    if ( !( /\d+\.?\d*e[-+]*\d+/i.test( stringValue ) ) ) { return stringValue }


    const exponentialSplits   = stringValue.split( 'e' )
    const dirtyBase           = exponentialSplits[ 0 ]
    const negativeBase        = ( dirtyBase.indexOf( '-' ) === 0 )
    const unsignedBase        = ( negativeBase ) ? dirtyBase.slice( 1 ) : dirtyBase
    const dotBaseSplits       = unsignedBase.split( '.' )
    const numberOfSignificant = dotBaseSplits[ 0 ].length
    const numberOfDecimals    = ( dotBaseSplits[ 1 ] ) ? dotBaseSplits[ 1 ].length : 0
    const base                = dotBaseSplits.join( '' )
    const dirtyExponent       = exponentialSplits[ 1 ]
    const negativeExponant    = ( dirtyExponent.indexOf( '-' ) === 0 )
    const exponent            = parseInt( dirtyExponent.slice( 1 ) )

    let result = ( negativeBase ) ? '-' : ''
    if ( negativeExponant ) {

        result += '0.'
        result += '0'.repeat( exponent - numberOfSignificant )
        result += base

    } else {
        result += base
        result += '0'.repeat( exponent - numberOfDecimals )
        result += '.0'
    }

    return result

}

// #if IS_KEEP_ON_BUILD

export function numberToPlainString_alt0( value ) {

    const stringValue = String( value )
    if ( !( /\d+\.?\d*e[-+]*\d+/i.test( stringValue ) ) ) { return stringValue }


    const exponentialSplits   = stringValue.split( 'e' )
    const dirtyBase           = exponentialSplits[ 0 ]
    const negativeBase        = ( dirtyBase.indexOf( '-' ) === 0 )
    const unsignedBase        = ( negativeBase ) ? dirtyBase.slice( 1 ) : dirtyBase
    const dotBaseSplits       = unsignedBase.split( '.' )
    const numberOfSignificant = dotBaseSplits[ 0 ].length
    const numberOfDecimals    = ( dotBaseSplits[ 1 ] ) ? dotBaseSplits[ 1 ].length : 0
    const base                = dotBaseSplits.join( '' )
    const dirtyExponent       = exponentialSplits[ 1 ]
    const negativeExponant    = ( dirtyExponent.indexOf( '-' ) === 0 )
    const exponent            = dirtyExponent.slice( 1 )

    let result = ( negativeBase ) ? '-' : ''
    if ( negativeExponant ) {

        result += '0.'
        for ( let i = 0, e = parseInt( exponent ) - numberOfSignificant ; i < e ; i++ ) {
            result += '0'
        }
        result += base

    } else {
        result += base
        for ( let i = 0, e = parseInt( exponent ) - numberOfDecimals ; i < e ; i++ ) {
            result += '0'
        }
        result += '.0'
    }

    return result

}

export function numberToPlainString_alt1( value ) {

    const stringValue = String( value )
    if ( !( /\d+\.?\d*e[-+]*\d+/i.test( stringValue ) ) ) { return stringValue }


    const exponentialSplits = stringValue.split( 'e' )
    const dirtyBase         = exponentialSplits[ 0 ]
    const negativeBase      = ( dirtyBase.indexOf( '-' ) === 0 )
    const unsignedBase      = ( negativeBase ) ? dirtyBase.slice( 1 ) : dirtyBase
    const base              = unsignedBase.split( '.' ).join( '' )
    const dirtyExponent     = exponentialSplits[ 1 ]
    const negativeExponant  = ( dirtyExponent.indexOf( '-' ) === 0 )
    const exponent          = dirtyExponent.slice( 1 )
    const exponentLength    = parseInt( exponent ) + 1

    let result = ''
    if ( negativeExponant ) {
        result += '0.'
        result = result.padEnd( exponentLength, '0' )
        result += base
    } else {
        result += base
        result = result.padEnd( exponentLength, '0' )
        result += '.0'
    }

    if ( negativeBase ) {
        result = `-${ result }`
    }

    return result

}

export function numberToPlainString_alt2( value ) {

    const stringValue = String( value )
    if ( !( /\d+\.?\d*e[-+]*\d+/i.test( stringValue ) ) ) { return stringValue }


    const exponentialSplits   = stringValue.split( 'e' )
    const dirtyBase           = exponentialSplits[ 0 ]
    const negativeBase        = ( dirtyBase.indexOf( '-' ) === 0 )
    const unsignedBase        = ( negativeBase ) ? dirtyBase.slice( 1 ) : dirtyBase
    const dotBaseSplits       = unsignedBase.split( '.' )
    const numberOfSignificant = dotBaseSplits[ 0 ].length
    const numberOfDecimals    = ( dotBaseSplits[ 1 ] ) ? dotBaseSplits[ 1 ].length : 0
    const base                = dotBaseSplits.join( '' )
    const dirtyExponent       = exponentialSplits[ 1 ]
    const negativeExponant    = ( dirtyExponent.indexOf( '-' ) === 0 )
    const exponent            = dirtyExponent.slice( 1 )
    const exponentLength      = parseInt( exponent ) + 1
    const sign                = ( negativeBase ) ? '-' : ''

    let result = ''
    if ( negativeExponant ) {
        result = `${ sign }0.${ Array( exponentLength - numberOfSignificant ).join( 0 ) }${ base }`
    } else {
        result = `${ sign + base + Array( exponentLength - numberOfDecimals ).join( 0 ) }.0`
    }

    return result

}

export function numberToPlainString_alt3( value ) {

    return String( value ).replace(
        /(-?)(\d*)(?:\.(\d+))?e([+-])(\d+)/,
        ( matchs, sign, significants, decimals = '', exponentSign, exponent ) => {

            const exponentLength = parseInt( exponent )
            if ( exponentSign === '-' ) {
                return `${ sign }0.${ '0'.repeat( exponentLength - significants.length ) }${ significants }${ decimals }`
                //                return sign + '0.' + Array( exponentLength - significants.length + 1 ).join( 0 ) + significants + decimals
            } else {
                return `${ sign + significants + decimals + '0'.repeat( exponentLength - decimals.length ) }.0`
                //                return sign + significants + decimals + Array( exponentLength - decimals.length + 1 ).join( 0 ) + '.0'
            }
        }
    )

}

export function numberToPlainString_alt4( num ) {
    const nsign = Math.sign( num )
    //remove the sign
    let _num    = Math.abs( num )
    //if the number is in scientific notation remove it
    if ( /\d+\.?\d*e[-+]*\d+/i.test( _num ) ) {

        const zero        = '0'
        const parts       = String( _num ).toLowerCase().split( 'e' ) //split into coeff and exponent
        const e           = parseInt( parts.pop() ) //store the exponential part
        let l             = Math.abs( e ) //get the number of zeros
        const sign        = e / l
        const coeff_array = parts[ 0 ].split( '.' )

        if ( sign === -1 ) {
            l -= coeff_array[ 0 ].length
            if ( l < 0 ) {
                _num = `${ coeff_array[ 0 ].slice( 0, l ) }.${ coeff_array[ 0 ].slice( l ) }${ coeff_array.length === 2 ? coeff_array[ 1 ] : '' }`
            } else {
                _num = `${ zero }.${ new Array( l + 1 ).join( zero ) }${ coeff_array.join( '' ) }`
            }
        } else {
            const dec = coeff_array[ 1 ]
            if ( dec ) {
                l -= dec.length
            }
            if ( l < 0 ) {
                _num = `${ coeff_array[ 0 ] + dec.slice( 0, l ) }.${ dec.slice( l ) }`
            } else {
                _num = coeff_array.join( '' ) + new Array( l + 1 ).join( zero )
            }
        }
    }

    return nsign < 0 ? `-${ _num }` : _num
}

// #endif
