/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

const {
          createReadStream,
          existsSync,
          writeFileSync
      }                   = require( 'fs' )
const {
          parse,
          join
      }                   = require( 'path' )
const { createInterface } = require( 'readline' )

const parameters  = process.argv.slice( 2 )
const filePath    = parameters[ 0 ]
const linePerFile = parameters[ 1 ] || 10000000

if ( !existsSync( filePath ) ) {

    console.error( `The file at [${ filePath }] does not exist ! Abort...` )
    return

}
const fileInfos = parse( filePath )

let fileIndex     = 0
let numberOfLines = 0
let dData         = ''

try {

    createInterface( {
        input:     createReadStream( filePath ),
        crlfDelay: Infinity
    } )
        .on( 'line', ( line ) => {

            dData += `${ line }\n`
            numberOfLines++

            if ( numberOfLines !== linePerFile ) { return }

            const outputFilePath = join( fileInfos.dir, `${ fileInfos.name }_${ fileIndex }${ fileInfos.ext }` )
            writeFileSync( outputFilePath, dData )
            numberOfLines = 0
            dData         = ''
            fileIndex++

            console.log( `Export: ${ outputFilePath }` )

        } )
        .on( 'close', () => {

            const outputFilePath = join( fileInfos.dir, `${ fileInfos.name }_${ fileIndex }${ fileInfos.ext }` )
            writeFileSync( outputFilePath, dData )

            console.log( `Export: ${ outputFilePath }` )

        } )

} catch ( error ) {

    console.error( error )

}

