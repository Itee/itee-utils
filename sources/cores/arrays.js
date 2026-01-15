/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays
 * @description Export the utilities methods about Arrays
 *
 */
import {
    isArray,
    isObject
} from 'itee-validators'

/**
 *
 * @param {string} propertyName
 * @param {ordering} ascending
 * @returns {Function}
 */
export function sortBy( propertyName, ascending = 'asc' ) {

    const _propertyName = propertyName
    let resultSorter    = undefined

    if ( ascending === 'asc' ) {

        resultSorter = ( a, b ) => {

            if ( a[ _propertyName ] < b[ _propertyName ] ) {
                return -1
            }

            if ( a[ _propertyName ] > b[ _propertyName ] ) {
                return 1
            }

            return 0

        }

    } else if ( ascending === 'desc' ) {

        resultSorter = ( a, b ) => {

            if ( a[ _propertyName ] > b[ _propertyName ] ) {
                return -1
            }

            if ( a[ _propertyName ] < b[ _propertyName ] ) {
                return 1
            }

            return 0

        }

    } else {

        throw RangeError( `Got invalid ascending [${ ascending }], but expect one of ['asc','desc']!` )

    }

    return resultSorter

}

/**
 * Will wrap the object value in an array, if is not already one, and return empty array in case
 * where input object is null or undefined.
 * This function is build to ensure the return value will be always an array
 *
 * @param {*} object - The target to return as array
 * @param {object} [options]
 * @param {boolean} [options.keepArray=false] - If true, will wrap array too instead of returning it
 * @param {boolean} [options.keepNull=false] - If true, will wrap null or undefined value too instead of returning empty array
 * @returns {Array.<*>}
 */
export function toArray( object, options = {
    keepArray: false,
    keepNull:  false
} ) {

    let array

    if ( isArray( object ) ) {
        array = ( options.keepArray ) ? [ object ] : object
    } else if ( options.keepNull || typeof object === 'object' || isObject( object ) ) {
        array = [ object ]
    } else {
        array = []
    }

    return array

}
