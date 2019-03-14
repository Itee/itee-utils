/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/geometries/_geomathries
 * @description This is the geometries/mathematique export entry point.
 * It expose all exports of the geometries sub-files.
 */

export * from './trigonometries'

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 *
 * @param min - The minimum (inclusive) range value for random number
 * @param max - The maximum (inclusive) range value for random number
 * @returns {Number} - A random number between man and max
 * @private
 */
function randomInt ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min
}
