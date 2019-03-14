/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import fs from 'fs'
import path from 'path'

//Todo: Move this stuff in IteeValidator !
/**
 * Just an override of 'fs.existsSync' with more explicit name
 *
 * @param filePath the path to check
 * @private
 */
function isValidPath ( path ) {
    return fs.existsSync( path )
}

function isInvalidPath ( path ) {
    return !isValidPath( path )
}

function isFile ( path ) {
    return fs.statSync( path ).isFile()
}

function isNotFile ( path ) {
    return !isFile( path )
}

function isDirectory ( path ) {
    return fs.statSync( path ).isDirectory()
}

function isNotDirectory ( path ) {
    return !isDirectory( path )
}

function isValidFilePath ( path ) {
    return ( isValidPath( path ) && isFile( path ) )
}

function isInvalidFilePath ( path ) {
    return !isValidFilePath( path )
}

function isValidDirectoryPath ( path ) {
    return ( isValidPath( path ) && isDirectory( path ) )
}

function isInvalidDirectoryPath ( path ) {
    return !isValidDirectoryPath( path )
}

/**
 * Check the file size against a limit ( 0 as default ).
 * @param filePath
 * @param threshold
 * @return {boolean} - True if below the limit or zero, false otherwise
 * @private
 */
function isEmptyFile ( filePath, threshold = 0 ) {
    return ( fs.statSync( filePath ).size <= threshold )
}

function isNotEmptyFile ( filePath, threshold = 0 ) {
    return !isEmptyFile( filePath, threshold )
}

// Todo-End

/**
 * Allow to search all files under filePaths in a recursive way
 *
 * @param {Array.<string>|string} filePaths - The files paths where search files
 * @returns {Array} - The paths of finded files
 * @private
 */
function getFilesPathsUnder ( filePaths ) {

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

    function getFilesPathsUnderFolder ( folder ) {

        fs.readdirSync( folder ).forEach( ( name ) => {

            const filePath = path.resolve( folder, name )
            checkStateOf( filePath )

        } )

    }

    function checkStateOf ( filePath ) {

        if ( !fs.existsSync( filePath ) ) {
            console.error( 'SchemaRegister: Invalid file path "' + filePath + '"' )
            return
        }

        const stats = fs.statSync( filePath )
        if ( stats.isFile() ) {

            files.push( filePath )

        } else if ( stats.isDirectory() ) {

            Array.prototype.push.apply( files, getFilesPathsUnderFolder( filePath ) )

        } else {

            console.error( "Invalid stat object !" )

        }

    }

}

export {
    isValidPath,
    isInvalidPath,
    isFile,
    isNotFile,
    isDirectory,
    isNotDirectory,
    isValidFilePath,
    isInvalidFilePath,
    isValidDirectoryPath,
    isInvalidDirectoryPath,
    isEmptyFile,
    isNotEmptyFile,
    getFilesPathsUnder
}
