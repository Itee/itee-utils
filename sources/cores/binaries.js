/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 *
 */

import {
    isArrayOfUndefined,
    isNotDefined,
    isNotString,
    isNull
} from 'itee-validators'

export function byteToBits( byte ) {

    let bits = ''

    for ( let i = 128 ; i >= 1 ; i /= 2 ) {

        if ( byte & i ) {
            bits += '1'
        } else {
            bits += '0'
        }

    }

    return bits

}

export function bitsToByte( bits ) {
    if ( isNotString( bits ) ) { return }

    let byte = 0

    for ( let i = 7, e = 0 ; i >= 0 ; i--, e++ ) {

        if ( bits[ i ] === '1' ) {
            byte += 2 ** e
        } else {
            byte << 2
        }

    }

    return byte

}

/**
 *
 * @param {number} number - The number to convert in this internal representation
 * @returns {string}
 */
export function numberToInternalRepresentation( number ) {

    //    let buffer  = new Float64Array( [ number ] ).buffer
    let bufferA = new ArrayBuffer( 8 )
    let view    = new DataView( bufferA )
    view.setFloat64( 0, number )

    let internalRepresentation = ''
    for ( let i = 0 ; i < 8 ; i++ ) {
        internalRepresentation += byteToBits( view.getUint8( i ) )
    }
    internalRepresentation = `${ internalRepresentation.substring( 0, 1 ) } ${ internalRepresentation.substring( 1, 12 ) } ${ internalRepresentation.substring( 12 ) }`

    return internalRepresentation

}

export function internalRepresentationToNumber( string ) {

    if ( isNotDefined( string ) ) { return }
    if ( isNotString( string ) ) { return }
    //    if ( isNotDefined( string ) ) { throw ReferenceError( 'string cannot be null or empty !' )}

    const cleanString = string.replace( / /g, '' )
    const matchs      = cleanString.match( /.{8}/g ) // multiple of eight
    if ( isNull( matchs ) ) { return }

    const bytes = matchs.map( subString => bitsToByte( subString ) )
    if ( isArrayOfUndefined( bytes ) ) { return }

    let arrayBuffer = new ArrayBuffer( 8 )
    let dataView    = new DataView( arrayBuffer )
    for ( let i = 0 ; i < 8 ; i++ ) {
        dataView.setUint8( i, bytes[ i ] )
    }

    return dataView.getFloat64( 0 )

}
