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
export function getRandomArbitrary ( min = 0, max = 1 ) {
    return Math.random() * ( max - min ) + min
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt ( min = 0, max = 1 ) {
    return ( Math.floor( Math.random() * ( max - min + 1 ) ) + min )
}

