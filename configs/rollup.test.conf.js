/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module Config-Rollup-Test
 * @description The file manage the rollup configuration for build tests
 */

const packageInfos = require( '../package' )

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @return {Array.<json>} An array of rollup configuration
 */
function CreateTestsRollupConfigs ( /*options*/ ) {
    'use strict'

    return [
        // Benchs
        // For karma
        {
            input:     `tests/benchmarks/${packageInfos.name}.benchs.js`,
            external:  [ 'benchmark' ],
            plugins:   [],
            treeshake: false,
            output:    {
                globals: {
                    'benchmark': 'Benchmark'
                },
                indent: '\t',
                format: 'iife',
                name:   'Itee.Benchs',
                file:   `tests/builds/${packageInfos.name}.benchs.iife.js`
            }
        },
        // For Node
        {
            input:     `tests/benchmarks/${packageInfos.name}.benchs.js`,
            external:  [ 'benchmark' ],
            plugins:   [],
            treeshake: false,
            output:    {
                globals: {
                    'benchmark': 'Benchmark'
                },
                indent: '\t',
                format: 'cjs',
                name:   'Itee.Benchs',
                file:   `tests/builds/${packageInfos.name}.benchs.cjs.js`
            }
        },

        // Units
        // For karma
        {
            input:     `tests/units/${packageInfos.name}.units.js`,
            plugins:   [],
            treeshake: false,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee.Units',
                file:   `tests/builds/${packageInfos.name}.units.iife.js`
            }
        },
        // For Node
        {
            input:     `tests/units/${packageInfos.name}.units.js`,
            plugins:   [],
            treeshake: false,
            output:    {
                indent: '\t',
                format: 'cjs',
                name:   'Itee.Units',
                file:   `tests/builds/${packageInfos.name}.units.cjs.js`
            }
        },

    ]

}

module.exports = CreateTestsRollupConfigs
