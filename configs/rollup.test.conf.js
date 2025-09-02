/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module Config-Rollup-Test
 * @description The file manage the rollup configuration for build tests
 */

const packageInfos = require( '../package' )
//const fs               = require( 'fs' )
//const path             = require( 'path' )
const { nodeResolve } = require( '@rollup/plugin-node-resolve' )
const alias           = require( '@rollup/plugin-alias' )

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @return {Array.<json>} An array of rollup configuration
 */
function CreateTestsRollupConfigs ( /*options*/ ) {
    'use strict'

    /**
     * Globals configs for run all benchs and units test inside karma or nodejs
     */
    const configs = [
        // Units
        // For karma
        {
            input:    `tests/units/${ packageInfos.name }.units.js`,
            external: [
                //                        'itee-validators',
                //                        'itee-utils',
                'mocha',
                'chai'
            ],
            plugins: [
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
                } )
            ],
            treeshake: true,
            output:    {
                indent:  '\t',
                format:  'iife',
                //                name:   'Itee.Units',
                globals: {
                    //                            'itee-validators': 'Itee.Validators',
                    //                            'itee-utils': 'Itee.Utils',
                    'mocha': 'Mocha',
                    'chai':  'chai'
                },
                file: `tests/builds/${ packageInfos.name }.units.iife.js`
            }
        },
        // For Node
        {
            input:    `tests/units/${ packageInfos.name }.units.js`,
            external: [
                //                'itee-validators',
                //                'itee-utils',
                'mocha',
                'chai',
                'fs',
                'path'
            ],
            plugins: [
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
                } )
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'cjs',
                file:   `tests/builds/${ packageInfos.name }.units.cjs.js`
            }
        }
        //
        //        // Benchs
        //        // For karma
        //        {
        //            input:     `tests/benchmarks/${ packageInfos.name }.benchs.js`,
        //            external:  [
        //                'itee-validators',
        //                'benchmark'
        //            ],
        //            plugins:   [],
        //            treeshake: false,
        //            output:    {
        //                indent:  '\t',
        //                format:  'iife',
        //                name:    'Itee.Benchmarks',
        //                globals: {
        //                    'itee-validators': 'Itee.Validators',
        //                    'benchmark':       'Benchmark'
        //                },
        //                file:    `tests/builds/${ packageInfos.name }.benchs.iife.js`
        //            }
        //        },
        //        // For Node
        //        {
        //            input:     `tests/benchmarks/${ packageInfos.name }.benchs.js`,
        //            external:  [
        //                'itee-validators',
        //                'benchmark'
        //            ],
        //            plugins:   [],
        //            treeshake: false,
        //            output:    {
        //                indent:  '\t',
        //                format:  'cjs',
        ////                name:    'Itee.Benchmarks',
        //                file:    `tests/builds/${ packageInfos.name }.benchs.cjs.js`
        //            }
        //        }
    ]

    return configs

}

module.exports = CreateTestsRollupConfigs
