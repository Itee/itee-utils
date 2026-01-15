import colors                   from 'ansi-colors'
import log                      from 'fancy-log'
import { relative }             from 'node:path'
import {
    readFileSync,
    writeFileSync
}                               from 'node:fs'
import { join }                 from 'path'
import { packageRootDirectory } from '../_utils.mjs'

const {
          green,
          blue
      } = colors

/**
 * @method npm run patch
 * @global
 * @description Will apply some patch/replacements in dependencies
 */
const patchTask       = ( done ) => {

    const filePath       = join( '../', 'node_modules/itee-utils/sources/testings/benchmarks.js' )
    const fileBuffer     = readFileSync( filePath )
    const fileContent    = fileBuffer.toString()
    const updatedContent = fileContent.replace( "import * as globalDataMap from './primitives'", "import * as globalDataMap from './primitives.js'" )
    writeFileSync( filePath, updatedContent )

    done()
}
patchTask.displayName = 'patch'
patchTask.description = 'Will apply some patch/replacements in dependencies'
patchTask.flags       = null

log( 'Loading ', green( relative( packageRootDirectory, import.meta.filename ) ), `with task ${ blue( patchTask.displayName ) }` )

export { patchTask }