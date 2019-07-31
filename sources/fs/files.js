/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import fs                from 'fs'
import path              from 'path'
import { isArray, isInvalidPath }       from 'itee-validators'

function getPathsUnder ( directoryPath ) {
    return fs.readdirSync( directoryPath )
}

/**
 * Allow to search all files under filePaths in a recursive way
 *
 * @param {Array.<string>|string} filePaths - The files paths where search files
 * @returns {Array} - The paths of finded files
 * @private
 */
function getFilesPathsUnder ( paths ) {

    const _paths = ( isArray( paths ) ) ? paths : [ paths ]
    let files    = []

    for ( let pathIndex = 0, numberOfPaths = _paths.length ; pathIndex < numberOfPaths ; pathIndex++ ) {

        const localPath = _paths[ pathIndex ]

        if ( isInvalidPath( localPath ) ) {
            console.error( `The path "${localPath}" is not valid !` )
            continue
        }

        const stats = fs.statSync( localPath )
        if ( stats.isFile() ) {

            files.push( localPath )

        } else if ( stats.isDirectory() ) {

            const subPaths      = getPathsUnder( localPath )
            const subFilesPaths = subPaths.forEach( ( name ) => { getFilesPathsUnder( path.resolve( localPath, name ) ) } )
            Array.prototype.push.apply( files, subFilesPaths )

        } else {

            // Ignoring block device, character device, symbolic link, fifo, and socket

        }

    }

    return files

}

export { getFilesPathsUnder }
