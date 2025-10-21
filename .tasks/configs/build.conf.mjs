/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module configs/Rollup
 * @description The file manage the rollup configuration for build the library using differents arguments. It allow to build with two type of environment (dev and prod), and differents output format.
 * Use npm run help to display all available build options.
 *
 * @requires {@link module: [rollup-plugin-commonjs]{@link https://github.com/rollup/rollup-plugin-commonjs}}
 * @requires {@link module: [path]{@link https://nodejs.org/api/path.html}}
 * @requires {@link module: [rollup-plugin-re]{@link https://github.com/jetiny/rollup-plugin-re}}
 * @requires {@link module: [rollup-plugin-node-resolve]{@link https://github.com/rollup/rollup-plugin-node-resolve}}
 * @requires {@link module: [rollup-plugin-terser]{@link https://github.com/TrySound/rollup-plugin-terser}}
 */
import {
    packageSourcesDirectory,
    packageBuildsDirectory,
    packageName,
    packageDescription,
    getPrettyPackageName,
    getPrettyPackageVersion
}                  from '../_utils.mjs'
import {
    join,
    basename
}                  from 'path'
import commonjs    from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import { terser }  from 'rollup-plugin-terser'
import cleanup     from 'rollup-plugin-cleanup'
import replace     from 'rollup-plugin-re'
import alias       from '@rollup/plugin-alias'
import figlet      from 'figlet'

// Utils

function getPrettyFormatForBanner( format ) {

    let prettyFormat = ''

    switch ( format ) {

        case 'cjs':
            prettyFormat = 'CommonJs'
            break

        case 'esm':
            prettyFormat = 'EsModule'
            break

        case 'iife':
            prettyFormat = 'Standalone'
            break

        case 'umd':
            prettyFormat = 'Universal'
            break

        default:
            throw new RangeError( `Invalid switch parameter: ${ format }` )

    }

    return prettyFormat

}

function _commentarize( banner ) {

    let bannerCommented = '/**\n'
    bannerCommented += ' * '
    bannerCommented += banner.replaceAll( '\n', '\n * ' )
    bannerCommented += '\n'
    bannerCommented += ` * @desc    ${ packageDescription }\n`
    bannerCommented += ' * @author  [Tristan Valcke]{@link https://github.com/Itee}\n'
    bannerCommented += ' * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}\n'
    bannerCommented += ' * \n'
    bannerCommented += ' */'

    return bannerCommented

}

function _computeBanner( format ) {

    const packageName    = getPrettyPackageName( '.' )
    const packageVersion = getPrettyPackageVersion()
    const prettyFormat   = getPrettyFormatForBanner( format )

    const figText = figlet.textSync(
        `${ packageName } ${ packageVersion } - ${ prettyFormat }`,
        {
            font:             'Tmplr',
            horizontalLayout: 'default',
            verticalLayout:   'default',
            whitespaceBreak:  true,
        }
    )

    return _commentarize( figText )

}

function _computeIntro() {

    return '' +
        'if( iteeValidators === undefined ) { throw new Error(\'Itee.Utils need Itee.Validators to be defined first. Please check your scripts loading order.\') }'

}

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @param options
 * @return {Array.<json>} An array of rollup configuration
 */
function _createRollupConfigs( options ) {
    'use strict'

    const {
              input,
              output,
              formats,
              envs,
              treeshake
          }        = options
    const name     = getPrettyPackageName('.')
    const fileName = basename( input, '.js' )

    const configs = []

    for ( let formatIndex = 0, numberOfFormats = formats.length ; formatIndex < numberOfFormats ; ++formatIndex ) {

        for ( let envIndex = 0, numberOfEnvs = envs.length ; envIndex < numberOfEnvs ; envIndex++ ) {

            const env        = envs[ envIndex ]
            const isProd     = ( env.includes( 'prod' ) )
            const format     = formats[ formatIndex ]
            const outputPath = ( isProd ) ? join( output, `${ fileName }.${ format }.min.js` ) : join( output, `${ fileName }.${ format }.js` )

            configs.push( {
                input:     input,
                external:  ( [ 'esm', 'cjs' ].includes( format ) ) ? [ 'fs', 'path', 'itee-validators' ] : [ 'itee-validators' ],
                plugins:   [
                    replace( {
                        defines: {
                            IS_KEEP_ON_BUILD:     false,
                            IS_BACKEND_SPECIFIC:  ( [ 'esm', 'cjs' ].includes( format ) ),
                            IS_FRONTEND_SPECIFIC: ( [ 'esm', 'iife' ].includes( format ) ),
                        }
                    } ),
                    commonjs( {
                        include: 'node_modules/**'
                    } ),
                    nodeResolve( {
                        preferBuiltins: true
                    } ),
                    isProd && terser()
                ],
                onwarn:    ( {
                    loc,
                    frame,
                    message
                } ) => {

                    // Ignore some errors
                    if ( message.includes( 'Circular dependency' ) ) { return }
                    if ( message.includes( 'plugin uglify is deprecated' ) ) { return }

                    if ( loc ) {
                        process.stderr.write( `/!\\ ${ loc.file } (${ loc.line }:${ loc.column }) ${ frame } ${ message }\n` )
                    } else {
                        process.stderr.write( `/!\\ ${ message }\n` )
                    }

                },
                treeshake: treeshake,
                output:    {
                    // core options
                    file:    outputPath,
                    format:  format,
                    name:    name,
                    globals: {
                        'itee-validators': 'Itee.Validators'
                    },

                    // advanced options
                    paths:     {},
                    banner:    ( isProd ) ? '' : _computeBanner( format ),
                    footer:    '',
                    intro:     ( !isProd && format === 'iife' ) ? _computeIntro() : '',
                    outro:     '',
                    sourcemap: !isProd,
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

// Configs

const configs = {
    'build':                                _createRollupConfigs( {
        input:     join( packageSourcesDirectory, `${ packageName }.js` ),
        output:    packageBuildsDirectory,
        formats:   [ 'esm', 'cjs', 'iife' ],
        envs:      [ 'dev', 'prod' ],
        sourcemap: true,
        treeshake: true
    } ),
    'check-bundling-from-esm-build-import': {
        input:     null,
        external:  [ '' ],
        plugins:   [
            nodeResolve( {
                preferBuiltins: true
            } ),
            cleanup( {
                comments: 'all' // else remove __PURE__ declaration... -_-'
            } )
        ],
        onwarn:    ( {
            loc,
            frame,
            message
        } ) => {

            // Ignore some errors
            if ( message.includes( 'Circular dependency' ) ) { return }
            if ( message.includes( 'Generated an empty chunk' ) ) { return }

            if ( loc ) {
                process.stderr.write( `/!\\ ${ loc.file } (${ loc.line }:${ loc.column }) ${ frame } ${ message }\n` )
            } else {
                process.stderr.write( `/!\\ ${ message }\n` )
            }

        },
        treeshake: {
            moduleSideEffects:                true,
            annotations:                      true,
            correctVarValueBeforeDeclaration: true,
            propertyReadSideEffects:          true,
            tryCatchDeoptimization:           true,
            unknownGlobalSideEffects:         true
        },
        output:    {
            indent: '\t',
            format: 'esm',
            file:   null
        }
    },
    'check-bundling-from-esm-files-import': {
        input:     null,
        plugins:   [
            nodeResolve(),
            cleanup( {
                comments: 'all' // else remove __PURE__ declaration... -_-'
            } )
        ],
        onwarn:    ( {
            loc,
            frame,
            message
        } ) => {

            // Ignore some errors
            if ( message.includes( 'Circular dependency' ) ) { return }
            if ( message.includes( 'Generated an empty chunk' ) ) { return }

            if ( loc ) {
                process.stderr.write( `/!\\ ${ loc.file } (${ loc.line }:${ loc.column }) ${ frame } ${ message }\n` )
            } else {
                process.stderr.write( `/!\\ ${ message }\n` )
            }

        },
        treeshake: {
            moduleSideEffects:                true,
            annotations:                      true,
            correctVarValueBeforeDeclaration: true,
            propertyReadSideEffects:          true,
            tryCatchDeoptimization:           true,
            unknownGlobalSideEffects:         true
        },
        output:    {
            indent: '\t',
            format: 'esm',
            file:   null
        }
    },
    'check-bundling-from-esm-files-direct': {
        input:     null,
        external:  [ '' ],
        plugins:   [
            nodeResolve( {
                preferBuiltins: true
            } ),
            cleanup( {
                comments: 'none'
            } )
        ],
        onwarn:    ( {
            loc,
            frame,
            message
        } ) => {

            // Ignore some errors
            if ( message.includes( 'Circular dependency' ) ) { return }
            if ( message.includes( 'Generated an empty chunk' ) ) { return }

            if ( loc ) {
                process.stderr.write( `/!\\ ${ loc.file } (${ loc.line }:${ loc.column }) ${ frame } ${ message }\n` )
            } else {
                process.stderr.write( `/!\\ ${ message }\n` )
            }

        },
        treeshake: {
            moduleSideEffects:                true,
            annotations:                      true,
            correctVarValueBeforeDeclaration: true,
            propertyReadSideEffects:          true,
            tryCatchDeoptimization:           true,
            unknownGlobalSideEffects:         true
        },
        output:    {
            indent: '\t',
            format: 'esm',
            file:   null
        }
    },
    'benchmarks-backend':                   {
        input:     `tests/benchmarks/${ packageName }.benchs.js`,
        external:  [
            'benchmark',
            'fs',
            'path'
        ],
        plugins:   [
            replace( {
                defines: {
                    IS_KEEP_ON_BUILD:     true,
                    IS_BACKEND_SPECIFIC:  true,
                    IS_FRONTEND_SPECIFIC: false,
                }
            } ),
            nodeResolve( {
                preferBuiltins: true
            } ),
            alias( {
                entries: [
                    {
                        find:        'itee-utils',
                        replacement: '../../../builds/itee-utils.esm.js'
                    }
                    //                                        {
                    //                                            find:        'itee-validators',
                    //                                            replacement: 'node_modules/itee-validators/builds/itee-validators.cjs.js'
                    //                                        }
                ]
            } ),
            cleanup( {
                comments: 'none'
            } )
        ],
        treeshake: true,
        output:    {
            indent: '\t',
            format: 'cjs',
            file:   `tests/benchmarks/builds/${ packageName }.benchs.cjs.js`
        }
    },
    'benchmarks-frontend':                  {
        input:     `tests/benchmarks/${ packageName }.benchs.js`,
        external:  [
            'benchmark'
        ],
        plugins:   [
            replace( {
                defines: {
                    IS_KEEP_ON_BUILD:     true,
                    IS_BACKEND_SPECIFIC:  false,
                    IS_FRONTEND_SPECIFIC: true,
                }
            } ),
            nodeResolve( {
                preferBuiltins: true
            } ),
            alias( {
                entries: [
                    {
                        find:        'itee-utils',
                        replacement: '../../../builds/itee-utils.esm.js'
                    }
                    //                                        {
                    //                                            find:        'itee-validators',
                    //                                            replacement: 'node_modules/itee-validators/builds/itee-validators.cjs.js'
                    //                                        }
                ]
            } ),
            cleanup( {
                comments: 'none'
            } )
        ],
        treeshake: {
            moduleSideEffects:                false,
            annotations:                      true,
            correctVarValueBeforeDeclaration: true,
            propertyReadSideEffects:          false,
            tryCatchDeoptimization:           true,
            unknownGlobalSideEffects:         false
        },
        output:    {
            indent:  '\t',
            format:  'iife',
            name:    'Itee.Benchmarks',
            globals: {
                'benchmark': 'Benchmark'
            },
            file:    `tests/benchmarks/builds/${ packageName }.benchs.iife.js`
        }
    },
    'units-backend':                        {
        input:     `tests/units/${ packageName }.units.js`,
        external:  [
            'mocha',
            'chai',
            'fs',
            'path'
        ],
        plugins:   [
            nodeResolve( {
                preferBuiltins: true
            } ),
            alias( {
                entries: [
                    {
                        find:        'itee-utils',
                        replacement: '../../../builds/itee-utils.esm.js'
                    }
                    //                                        {
                    //                                            find:        'itee-validators',
                    //                                            replacement: 'node_modules/itee-validators/builds/itee-validators.cjs.js'
                    //                                        }
                ]
            } ),
            cleanup( {
                comments: 'none'
            } )
        ],
        treeshake: true,
        output:    {
            indent: '\t',
            format: 'cjs',
            file:   `tests/units/builds/${ packageName }.units.cjs.js`
        }
    },
    'units-frontend':                       {
        input:     `tests/units/${ packageName }.units.js`,
        external:  [
            'mocha',
            'chai'
        ],
        plugins:   [
            nodeResolve( {
                preferBuiltins: true
            } ),
            alias( {
                entries: [
                    {
                        find:        'itee-utils',
                        replacement: '../../../builds/itee-utils.esm.js'
                    }
                ]
            } ),
            cleanup( {
                comments: 'none'
            } )
        ],
        treeshake: true,
        output:    {
            indent:  '\t',
            format:  'iife',
            name:    'Itee.Units',
            globals: {
                'mocha': 'Mocha',
                'chai':  'chai'
            },
            file:    `tests/units/builds/${ packageName }.units.iife.js`
        }
    },
}

function getRollupConfigurationFor( bundleName ) {

    return configs[ bundleName ]

}

export {
    getRollupConfigurationFor
}
