/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module Config-Rollup-Test
 * @description The file manage the rollup configuration for build tests
 */

const packageInfos = require( '../package' )
const { nodeResolve } = require( '@rollup/plugin-node-resolve' )
const cleanup         = require( 'rollup-plugin-cleanup' )
const replace         = require( 'rollup-plugin-re' )
const alias           = require( '@rollup/plugin-alias' )

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @return {Array.<json>} An array of rollup configuration
 */
function CreateBenchmarksRollupConfigs ( /*options*/ ) {
    'use strict'

    return [
        // For Karma
        {
            input:    `tests/benchmarks/${ packageInfos.name }.benchs.js`,
            external: [
                'benchmark'
            ],
            plugins: [
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
                file: `tests/builds/${ packageInfos.name }.benchs.iife.js`
            }
        },
        // For Node
        {
            input:    `tests/benchmarks/${ packageInfos.name }.benchs.js`,
            external: [
                'benchmark',
                'fs',
                'path'
            ],
            plugins: [
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
                file:   `tests/builds/${ packageInfos.name }.benchs.cjs.js`
            }
        }
    ]
}

module.exports = CreateBenchmarksRollupConfigs
