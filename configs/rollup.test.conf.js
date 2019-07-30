/**

 *
 * @author Itee <valcketristan@gmail.com>
 * @license MIT
 */

const packageInfos = require( '../package' )
const commonJs     = require( 'rollup-plugin-commonjs' )
const nodeResolve  = require( 'rollup-plugin-node-resolve' )

function CreateTestsBuildsConfigs ( /*options*/ ) {
    'use strict'

    return [

        {
            input:     `tests/units/${packageInfos.name}.units.js`,
            plugins:   [
                commonJs( {
                    include: 'node_modules/**'
                } ),
                nodeResolve()
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee.Units',
                file:   `tests/builds/${packageInfos.name}.units.js`
            }
        },
        {
            input:     `tests/benchmarks/${packageInfos.name}.benchs.js`,
            plugins:   [
                commonJs( {
                    include: 'node_modules/**'
                } ),
                nodeResolve()
            ],
            treeshake: true,
            output:    {
                indent: '\t',
                format: 'iife',
                name:   'Itee.Benchs',
                file:   `tests/builds/${packageInfos.name}.benchs.js`
            }
        }
    ]

}

module.exports = CreateTestsBuildsConfigs
