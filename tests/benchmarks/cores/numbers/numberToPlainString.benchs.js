/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @see [IFC Standard]{@link http://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/}
 *
 */

import Benchmark from 'benchmark'
import {
    numberToPlainString,
    numberToPlainString_alt0,
    numberToPlainString_alt1,
    numberToPlainString_alt2,
    numberToPlainString_alt3,
    numberToPlainString_alt4
}                from '../../../../sources/cores/numbers'

function setupSuite () {

    return {

        // called when the suite starts running
        'onStart': function onStartSuite () {

            //eslint-disable-next-line
            console.log( `Running Suite: ${ this.name }` )
            this.results = []

        },

        // called between running benchmarks
        'onCycle': function onCycleSuite ( event ) {

            //eslint-disable-next-line
            console.log( `Running Bench: ${ event.target.name }` )
            this.results.push( event.target )

        },

        // called when the suite completes running
        'onComplete': function onCompleteSuite () {

            this.results.sort( ( a, b ) => {

                if ( a.hz < b.hz ) {
                    return 1
                }

                if ( a.hz > b.hz ) {
                    return -1
                }

                return 0

            } )

            for ( let i = 0, num = this.results.length ; i < num ; i++ ) {
                //eslint-disable-next-line
                console.log( `${ i }: ${ String( this.results[ i ] ) }` )
            }

            const fastest       = this.results[ 0 ]
            const slowest       = this.results[ this.results.length - 1 ]
            const speedIncrease = ( ( fastest.hz - slowest.hz ) / slowest.hz ) * 100

            //eslint-disable-next-line
            console.log( `\n${ fastest.name } is ${ Math.round( speedIncrease ) }% fastest than ${ slowest.name }` )

        }

    }

}

function iterOver ( func ) {

    return function _iterateOverDataMap () {

        const datamap = this.datamap
        for ( let datasetKey in datamap ) {

            const dataset = datamap[ datasetKey ]

            if ( Array.isArray( dataset ) ) {

                for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

                    const data = dataset[ i ]
                    func( data )

                }

            } else {

                for ( let dataKey in dataset ) {

                    const data = dataset[ dataKey ]
                    func( data )

                }

            }

        }

    }

}

function setupBench () {

    return {

        setup: function onSetup () {
            this.datamap = [
                1234000000000000000000e0,
                0.0000001234e-0,
                4e22,
                4e-22,
                -4e22,
                -4e-22,
                12.34e20,
                12.34e-8,
                -12.23e20,
                -12.23e-7,
                1 / 3,
                -0,
                +0,
                1,
                -1,
                2,
                Number.EPSILON,
                Number.MIN_SAFE_INTEGER,
                Number.MAX_SAFE_INTEGER,
                Number.MIN_VALUE,
                Number.MIN_VALUE + Number.MIN_VALUE,
                Number.MAX_VALUE,
                Math.PI,
                +Infinity,
                -Infinity,
                NaN,
                -NaN,
                ( 1 + 2 ** -52 ), // Smallest number > 1
                ( 2 ** -1074 ), // Min. subnormal positive double
                ( 2 ** -1022 * 1 ), // Min. normal positive double
                ( 2 ** -1022 * ( 1 - 2 ** -52 ) ), // Max. subnormal double
                ( 2 ** 1023 * ( 1 + ( 1 - 2 ** -52 ) ) ) // Max. Double
                //                586084736227728377283728272309128120398n
            ]
        },

        teardown: function onTeardown () {
            delete this.datamap
        }

    }

}

Benchmark
    .Suite( 'numberToPlainString', setupSuite() )
    .add( 'numberToPlainString()', iterOver( numberToPlainString ), setupBench() )
    .add( 'numberToPlainString_alt0()', iterOver( numberToPlainString_alt0 ), setupBench() )
    .add( 'numberToPlainString_alt1()', iterOver( numberToPlainString_alt1 ), setupBench() )
    .add( 'numberToPlainString_alt2()', iterOver( numberToPlainString_alt2 ), setupBench() )
    .add( 'numberToPlainString_alt3()', iterOver( numberToPlainString_alt3 ), setupBench() )
    .add( 'numberToPlainString_alt4()', iterOver( numberToPlainString_alt4 ), setupBench() )
    .run()
