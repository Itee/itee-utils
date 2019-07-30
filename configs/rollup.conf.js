/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module config/rollupConfiguration
 *
 * @description The file manage the rollup configuration for build the library using differents arguments. It allow to build with two type of environment (dev and prod), and differents output format.
 * Use npm run help to display all available build options.
 *
 * @requires {@link module: [path]{@link https://nodejs.org/api/path.html}}
 * @requires {@link module: [rollup-plugin-re]{@link https://github.com/jetiny/rollup-plugin-re}}
 * @requires {@link module: [rollup-plugin-uglify-es]{@link https://github.com/ezekielchentnik/rollup-plugin-uglify-es}}
 *
 */

const path        = require( 'path' )
const commonJs    = require( 'rollup-plugin-commonjs' )
const nodeResolve = require( 'rollup-plugin-node-resolve' )
const replace     = require( 'rollup-plugin-re' )
const uglify      = require( 'rollup-plugin-uglify-es' )

/**
 * @generator
 * @param options
 * @return {Array}
 */
function CreateBuildsConfigs ( options ) {
    'use strict'

    const name      = options.name
    const input     = options.input
    const output    = options.output
    const formats   = options.format.split( ',' )
    const envs      = options.env.split( ',' )
    const sourcemap = options.sourcemap
    const treeshake = options.treeshake
    const fileName  = path.basename( input, '.js' )

    const configs = []

    for ( let formatIndex = 0, numberOfFormats = formats.length ; formatIndex < numberOfFormats ; ++formatIndex ) {

        for ( let envIndex = 0, numberOfEnvs = envs.length ; envIndex < numberOfEnvs ; envIndex++ ) {

            const env            = envs[ envIndex ]
            const prod           = ( env.includes( 'prod' ) )
            const format         = formats[ formatIndex ]
            const buildForNodeJS = ( format === 'cjs' )
            const outputPath     = ( prod ) ? path.join( output, `${fileName}.${format}.min.js` ) : path.join( output, `${fileName}.${format}.js` )

            configs.push( {
                input:    input,
                external: ( buildForNodeJS ) ? [
                    'fs',
                    'path'
                ] : [],
                plugins: [
                    replace( {
                        defines: {
                            IS_REMOVE: false,
                            IS_NODE:   buildForNodeJS
                        }
                    } ),
                    commonJs( {
                        include: 'node_modules/**'
                    } ),
                    nodeResolve( {
                        preferBuiltins: true
                    } ),
                    prod && uglify()
                ],
                onwarn: ( { loc, frame, message } ) => {

                    // Ignore some errors
                    if ( message.includes( 'Circular dependency' ) ) { return }
                    if ( message.includes( 'plugin uglify is deprecated' ) ) { return }

                    if ( loc ) {
                        process.stderr.write( `/!\\ ${loc.file} (${loc.line}:${loc.column}) ${frame} ${message}\n` )
                    } else {
                        process.stderr.write( `/!\\ ${message}\n` )
                    }
                },
                treeshake: treeshake,
                output:    {
                    // core options
                    file:    outputPath,
                    format:  format,
                    name:    name,
                    globals: {},

                    // advanced options
                    paths:     {},
                    banner:    '',
                    footer:    '',
                    intro:     '',
                    outro:     '',
                    sourcemap: sourcemap,
                    interop:   true,

                    // danger zone
                    exports: 'auto',
                    amd:     {},
                    indent:  '\t',
                    strict:  true
                }
            } )

        }

    }

    return configs

}

module.exports = CreateBuildsConfigs

