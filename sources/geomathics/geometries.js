/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @see [IFC Standard]{@link http://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/}
 *
 */

import { isNotArray } from 'itee-validators'

/**
 *
 * @param {array.<number>} ring
 * @return {boolean}
 */
export function ringClockwise ( ring ) {
    if ( isNotArray( ring ) ) { return false }

    let numberOfRingElements = ring.length
    if ( numberOfRingElements < 4 ) {
        return false
    }

    let ringIndex    = 0
    let area = ring[ numberOfRingElements - 1 ][ 1 ] * ring[ 0 ][ 0 ] - ring[ numberOfRingElements - 1 ][ 0 ] * ring[ 0 ][ 1 ]
    while ( ++ringIndex < numberOfRingElements ) {
        area += ring[ ringIndex - 1 ][ 1 ] * ring[ ringIndex ][ 0 ] - ring[ ringIndex - 1 ][ 0 ] * ring[ ringIndex ][ 1 ]
    }
    return area >= 0
}

/**
 *
 * @param {array.<number>} ring
 * @param {array.<number>} hole
 * @return {boolean}
 */
export function ringContainsSome ( ring, hole ) {
    if ( isNotArray( ring ) ) { return false }
    if ( isNotArray( hole ) ) { return false }

    let i = 0
    let n = hole.length

    do {

        if ( ringContains( ring, hole[ i ] ) > 0 ) {
            return true
        }

    } while ( ++i < n )

    return false

}

/**
 *
 * @param {array.<number>} ring
 * @param {array.<number>} point
 * @return {number}
 */
export function ringContains ( ring, point ) {
    if ( isNotArray( ring ) ) { return false }
    if ( isNotArray( point ) ) { return false }

    let x        = point[ 0 ]
    let y        = point[ 1 ]
    let contains = -1

    for ( let i = 0, n = ring.length, j = n - 1 ; i < n ; j = i++ ) {

        const pi = ring[ i ]
        const xi = pi[ 0 ]
        const yi = pi[ 1 ]
        const pj = ring[ j ]
        const xj = pj[ 0 ]
        const yj = pj[ 1 ]

        if ( segmentContains( pi, pj, point ) ) {
            contains = 0
        } else if ( ( ( yi > y ) !== ( yj > y ) ) && ( ( x < ( xj - xi ) * ( y - yi ) / ( yj - yi ) + xi ) ) ) {
            contains = -contains
        }

    }

    return contains

}

/**
 *
 * @param {array.<number>} p0
 * @param {array.<number>} p1
 * @param {array.<number>} p2
 * @return {boolean}
 */
export function segmentContains ( p0, p1, p2 ) {
    if ( isNotArray( p0 ) ) { return false }
    if ( isNotArray( p1 ) ) { return false }
    if ( isNotArray( p2 ) ) { return false }

    const x20 = p2[ 0 ] - p0[ 0 ]
    const y20 = p2[ 1 ] - p0[ 1 ]
    if ( x20 === 0 && y20 === 0 ) {
        return true
    }

    const x10 = p1[ 0 ] - p0[ 0 ]
    const y10 = p1[ 1 ] - p0[ 1 ]
    if ( x10 === 0 && y10 === 0 ) {
        return false
    }

    const t = ( (x20 * x10) + (y20 * y10) ) / ( (x10 * x10) + (y10 * y10) )

    return t < 0 || t > 1
           ? false
           : t === 0 || t === 1
             ? true
             : t * x10 === x20 && t * y10 === y20
}
