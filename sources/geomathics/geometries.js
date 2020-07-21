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
export function ringClockwise ( ring ) {

    if ( ( n = ring.length ) < 4 ) {
        return false
    }

    var i    = 0,
        n,
        area = ring[ n - 1 ][ 1 ] * ring[ 0 ][ 0 ] - ring[ n - 1 ][ 0 ] * ring[ 0 ][ 1 ]
    while ( ++i < n ) {
        area += ring[ i - 1 ][ 1 ] * ring[ i ][ 0 ] - ring[ i - 1 ][ 0 ] * ring[ i ][ 1 ]
    }
    return area >= 0
}

/**
 *
 * @param ring
 * @param hole
 * @return {boolean}
 */
export function ringContainsSome ( ring, hole ) {

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
 * @param ring
 * @param point
 * @return {number}
 */
export function ringContains ( ring, point ) {

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
 * @param p0
 * @param p1
 * @param p2
 * @return {boolean}
 */
export function segmentContains ( p0, p1, p2 ) {
    var x20 = p2[ 0 ] - p0[ 0 ],
        y20 = p2[ 1 ] - p0[ 1 ]
    if ( x20 === 0 && y20 === 0 ) {
        return true
    }
    var x10 = p1[ 0 ] - p0[ 0 ],
        y10 = p1[ 1 ] - p0[ 1 ]
    if ( x10 === 0 && y10 === 0 ) {
        return false
    }
    var t = ( x20 * x10 + y20 * y10 ) / ( x10 * x10 + y10 * y10 )
    return t < 0 || t > 1 ? false : t === 0 || t === 1 ? true : t * x10 === x20 && t * y10 === y20
}
