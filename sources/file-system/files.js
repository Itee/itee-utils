/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files
 * @description This is the files main export entry point.
 * It exposes all exports of the files validators.
 *
 */

import {
    existsSync,
    readdirSync,
    readFileSync,
    statSync
}                          from 'fs'
import { isArray }         from 'itee-validators'
import { isDirectoryPath } from 'itee-validators/sources/file-system/directories/isDirectoryPath'
import { isFilePath }      from 'itee-validators/sources/file-system/files/isFilePath'
import { isInvalidPath }   from 'itee-validators/sources/file-system/paths/isValidPath'
import path                from 'path'

// import { isArray, isDirectoryPath, isFilePath, isInvalidPath } from 'itee-validators'

function getPathsUnder( directoryPath ) {
    return readdirSync( directoryPath )
}

/**
 * Allow to search all files under filePaths in a recursive way
 *
 * @param {Array.<string>|string} paths - The files paths where search files
 * @returns {Array} - The paths of found files
 */
function getFilesPathsUnder( paths ) {

    const _paths = ( isArray( paths ) ) ? paths : [ paths ]
    let files    = []

    for ( let pathIndex = 0, numberOfPaths = _paths.length ; pathIndex < numberOfPaths ; pathIndex++ ) {

        const localPath = _paths[ pathIndex ]

        if ( isInvalidPath( localPath ) ) {

            throw new Error( `The path "${ localPath }" is not valid !` )

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

/**
 * Return all the files paths under filePaths in a recursive way.
 *
 * @param {string} filePaths - An array of string, representing the base path where looking for get all files paths
 * @return {Array.<string>} - An array of files paths
 * @private
 */
function getFilesPathsUnder_1( filePaths ) {

    let files = []

    if ( Array.isArray( filePaths ) ) {

        let filePath = undefined
        for ( let pathIndex = 0, numberOfPaths = filePaths.length ; pathIndex < numberOfPaths ; pathIndex++ ) {

            filePath = filePaths[ pathIndex ]
            checkStateOf( filePath )

        }

    } else {

        checkStateOf( filePaths )

    }

    return files

    function getFilesPathsUnderFolder( folder ) {

        readdirSync( folder ).forEach( ( name ) => {

            const filePath = path.resolve( folder, name )
            checkStateOf( filePath )

        } )

    }

    function checkStateOf( filePath ) {

        if ( !fileExistForPath( filePath ) ) {
            // eslint-disable-next-line no-console
            console.error( 'ES6Converter: Invalid file path "' + filePath + '"' )
            return
        }

        const stats = statSync( filePath )
        if ( stats.isFile() ) {

            files.push( filePath )

        } else if ( stats.isDirectory() ) {

            Array.prototype.push.apply( files, getFilesPathsUnderFolder( filePath ) )

        } else {

            // eslint-disable-next-line no-console
            console.error( 'Invalid stat object !' )

        }

    }

}

function fileExistForPath( filePath ) {

    return existsSync( filePath )

}

function getFileForPath( filePath ) {

    // In case files doesn't exist
    if ( !fileExistForPath( filePath ) ) {
        throw new Error( `Invalid file path "${ filePath }" file does not exist !` )
    }

    return readFileSync( filePath, 'utf8' )

}

function getUncommentedFileForPath( filePath ) {

    return getFileForPath( filePath ).replace( /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, '$1' )

}

/**
 * Will create an array without the strings in filePaths that are matched in excludes paths
 *
 * @param {Array.<string>} filePaths - An array of string to clean
 * @param {Array.<string>} excludes - The paths to remove
 * @return {Array.<string>} The cleaned filePaths of excludes paths
 * @private
 */
function excludesFilesPaths( filePaths, excludes ) {

    let filteredFilesPath = []

    let filePath = undefined
    for ( let filePathIndex = 0, numberOfFilePaths = filePaths.length ; filePathIndex < numberOfFilePaths ; filePathIndex++ ) {
        filePath = filePaths[ filePathIndex ]

        if ( isExclude( filePath ) ) {
            continue
        }

        filteredFilesPath.push( filePath )

    }

    return filteredFilesPath

    function isExclude( path ) {

        let isExclude      = false
        let excludePattern = undefined
        for ( let i = 0, pathLength = excludes.length ; i < pathLength ; i++ ) {

            excludePattern = excludes[ i ]

            // In case this is a file name it must fully match
            if ( excludePattern.indexOf( '.' ) > -1 ) {

                const fileName = path.replace( /^.*(\\|\/|\\:)/, '' )
                if ( fileName === excludePattern ) {
                    isExclude = true
                }

            } else if ( path.contains( excludePattern ) ) {
                isExclude = true
            }

        }

        return isExclude

    }

}

/**
 * Will filter file paths a keep only js files
 *
 * @param {Array.<string>} filePaths - An array of path to filter
 * @param {function} filter - An optional filter to apply instead of internal filter
 * @return {Array.<string>} The filtered path with only javascript files
 * @private
 */
function filterJavascriptFiles( filePaths, filter ) {

    let filteredFilesPath = []

    let filePath = undefined
    for ( let filePathIndex = 0, numberOfFilePaths = filePaths.length ; filePathIndex < numberOfFilePaths ; filePathIndex++ ) {

        filePath = filePaths[ filePathIndex ]

        // Not a js file like fonts or shaders
        if ( filter && !filter( filePath ) ) {
            continue
        } else {
            const fileExtension = path.extname( filePath )
            if ( filePath.indexOf( 'glsl' ) > -1 || fileExtension !== '.js' ) {
                continue
            }
        }

        filteredFilesPath.push( filePath )

    }

    return filteredFilesPath

}

export {
    getPathsUnder,
    getFilesPathsUnder,
    getFilesPathsUnder_1,
    fileExistForPath,
    getFileForPath,
    getUncommentedFileForPath,
    excludesFilesPaths,
    filterJavascriptFiles
}
