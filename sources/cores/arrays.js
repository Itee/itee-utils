/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays
 * @description Export the utilities methods about Arrays
 *
 */

export function sortBy ( propertyName, ascending = 'asc' ) {

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

        throw 'Invalid ascending !'

    }

    return resultSorter

}
