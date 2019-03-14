/**

 *
 * @author Itee <valcketristan@gmail.com>
 * @license MIT
 */

const commonJs    = require( 'rollup-plugin-commonjs' )
const nodeResolve = require( 'rollup-plugin-node-resolve' )

function CreateTestsBuildsConfigs ( /*options*/ ) {
    'use strict'

    return [

        {
            input:     'tests/units/main.units.js',
            plugins:   [
                commonJs( {
                    include: 'node_modules/**'
                } ),
                nodeResolve()
            ],
            treeshake: false,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee.Utils',
                file:   'tests/itee-utils.units.js'
            }
        },
        {
            input:     'tests/benchmarks/main.benchs.js',
            plugins:   [
                commonJs( {
                    include: 'node_modules/**'
                } ),
                nodeResolve()
            ],
            treeshake: false,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee.Utils',
                file:   'tests/itee-utils.benchs.js'
            }
        }
    ]

}

module.exports = CreateTestsBuildsConfigs
