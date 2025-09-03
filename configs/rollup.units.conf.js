/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module configs/Rollup-Test
 * @description The file manage the rollup configuration for build unit tests for browser and node environments
 */

const packageInfos  = require('../package')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const cleanup       = require('rollup-plugin-cleanup')
const alias         = require('@rollup/plugin-alias')

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @return {Array.<json>} An array of rollup configuration
 */
function CreateUnitsRollupConfigs ( /*options*/ ) {
    'use strict'

    return [
        // For Karma
        {
            input:    `tests/units/${ packageInfos.name }.units.js`,
            external: [
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
                file: `tests/builds/${ packageInfos.name }.units.iife.js`
            }
        },
        // For Node
        {
            input:    `tests/units/${ packageInfos.name }.units.js`,
            external: [
                //                'itee-validators',
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
                } ),
                cleanup( {
                    comments: 'none'
                } )
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'cjs',
                file:   `tests/builds/${ packageInfos.name }.units.cjs.js`
            }
        }
    ]

}

module.exports = CreateUnitsRollupConfigs
