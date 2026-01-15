import colors                   from 'ansi-colors'
import log                      from 'fancy-log'
import {
    readFileSync,
    writeFileSync
}                               from 'node:fs'
import {
    dirname,
    relative
}                               from 'node:path'
import { fileURLToPath }        from 'node:url'
import { join }                 from 'path'
import { packageRootDirectory } from '../_utils.mjs'

const {
          green,
          blue
      } = colors

function _getPackageRootDirectory() {

    let __dirname

    if ( import.meta.dirname ) {
        __dirname = import.meta.dirname
    } else if ( import.meta.filename ) {
        __dirname = dirname( import.meta.filename )
    } else if ( import.meta.url ) {
        const __filename = fileURLToPath( import.meta.url )
        __dirname        = dirname( __filename )
    } else {
        throw new Error( 'Unable to retrieve module dirname.' )
    }

    return join( __dirname, '../../' )

}

/**
 * @method npm run patch
 * @global
 * @description Will apply some patch/replacements in dependencies
 */
const patchTask       = ( done ) => {

    const rootDir        = _getPackageRootDirectory()
    const filePath       = join( rootDir, 'node_modules/itee-utils/sources/testings/benchmarks.js' )

    log(rootDir)
    log(filePath)
    
    const fileBuffer     = readFileSync( filePath )
    const fileContent    = fileBuffer.toString()
    const updatedContent = fileContent.replace( 'import * as globalDataMap from \'./primitives\'', 'import * as globalDataMap from \'./primitives.js\'' )
    writeFileSync( filePath, updatedContent )

    done()
}
patchTask.displayName = 'patch'
patchTask.description = 'Will apply some patch/replacements in dependencies'
patchTask.flags       = null

log( 'Loading ', green( relative( packageRootDirectory, import.meta.filename ) ), `with task ${ blue( patchTask.displayName ) }` )

export { patchTask }