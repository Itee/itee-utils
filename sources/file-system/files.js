/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files
 * @description This is the files main export entry point.
 * It expose all exports of the files validators.
 *
 */

import fs   from 'fs'
import {
    isArray,
    isDirectoryPath,
    isFilePath,
    isInvalidPath
}           from 'itee-validators'
import path from 'path'

function getPathsUnder ( directoryPath ) {
    return fs.readdirSync( directoryPath )
}

/**
 * Allow to search all files under filePaths in a recursive way
 *
 * @param {Array.<string>|string} paths - The files paths where search files
 * @returns {Array} - The paths of finded files
 */
function getFilesPathsUnder ( paths ) {

    const _paths = ( isArray( paths ) ) ? paths : [ paths ]
    let files    = []

    for ( let pathIndex = 0, numberOfPaths = _paths.length ; pathIndex < numberOfPaths ; pathIndex++ ) {

        const localPath = _paths[ pathIndex ]

        if ( isInvalidPath( localPath ) ) {

            console.error( `The path "${localPath}" is not valid !` )

        } else if ( isFilePath( localPath ) ) {

            files.push( localPath )

        } else if ( isDirectoryPath( localPath ) ) {

            const subPaths      = getPathsUnder( localPath )
            const subFilesPaths = subPaths.map( ( subPath ) => { return getFilesPathsUnder( path.resolve( localPath, subPath ) ) } )
            if ( subFilesPaths ) {
                files = [].concat( ...subFilesPaths )
            }

        } else {

            // Ignoring block device, character device, symbolic link, fifo, and socket

        }

    }

    return files

}

export { getFilesPathsUnder }
