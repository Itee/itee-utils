/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers
 * @description Export the utilities methods about numbers
 *
 */

export function getRandom () {
    return Math.random()
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function getRandomFloatExclusive ( min = 0.0, max = 1.0 ) {
    return Math.random() * ( max - min ) + min
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function getRandomFloatInclusive ( min = 0.0, max = 1.0 ) {
    return Math.random() * ( max - min + 1.0 ) + min
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomIntExclusive ( min = 0, max = 1 ) {
    const _min = Math.ceil( min )
    const _max = Math.floor( max )
    return ( Math.floor( Math.random() * ( _max - _min ) ) + _min )
}

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
export function getRandomIntInclusive ( min = 0, max = 1 ) {
    const _min = Math.ceil( min )
    const _max = Math.floor( max )
    return Math.floor( Math.random() * ( _max - _min + 1 ) ) + _min
}

}

