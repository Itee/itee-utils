/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */
import * as globalDataMap from './primitives'

/* eslint-disable no-console */
const Testing = {

    DataMap: undefined,

    createDataMap: function ( dataMapOptions ) {

        if ( dataMapOptions === undefined ) {

            dataMapOptions = {
                voids:       [],
                booleans:    [],
                numbers:     [],
                strings:     [],
                functions:   [],
                arrays:      [],
                typedArrays: [],
                objects:     []
            }

        }

        let dataMap = {}

        for ( let optionKey in dataMapOptions ) {

            const map = globalDataMap[ optionKey ]
            if ( map === undefined ) {
                throw ReferenceError( `The global data map does not contain element for key: ${ optionKey }` )
            }

            const option = dataMapOptions[ optionKey ]

            dataMap[ optionKey ] = {}

            if ( option.length === 0 ) {

                for ( let valueKey in map ) {
                    dataMap[ optionKey ][ valueKey ] = map[ valueKey ]
                }

            } else {

                for ( let i = 0, nbOptions = option.length ; i < nbOptions ; i++ ) {
                    dataMap[ optionKey ][ option[ i ] ] = map[ option[ i ] ]
                }

            }

        }

        return dataMap

    },

    createBenchmarkOptions: function ( dataMapOptions ) {

        Testing.DataMap = Testing.createDataMap( dataMapOptions )

        return {

            // called when the benchmark starts running
            'onStart': function onStartBench( /*event*/ ) {
                this.benchDataMap = Testing.DataMap

                //                console.log( `${ this.constructor.name } [${ this.name }]` )
                //                console.group( `${ this.constructor.name } [${ this.name }] onStart` )
                //                console.log( `Testing: ${ ( ( Testing === undefined ) ? 'not exist' : 'exist' ) }` )
                //                console.log( `Datamap: ${ ( ( this.datamap === undefined ) ? 'not exist' : 'exist' ) }` )
                //                console.groupEnd()
            },

            // called after each run cycle
            'onCycle': function onCycleBench( /*event*/ ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onCycle` )
            },

            // called when aborted
            'onAbort': function onAbortBench( /*event*/ ) {
                console.log( `${ this.constructor.name } [${ this.name }] onAbort` )
            },

            // called when a test errors
            'onError': function onErrorBench( event ) {
                console.log( `${ this.constructor.name } [${ this.name }] onError` )
                console.error( event.message )
            },

            // called when reset
            'onReset': function onResetBench( /*event*/ ) {
                console.log( `${ this.constructor.name } [${ this.name }] onReset` )
            },

            // called when the benchmark completes running
            'onComplete': function onCompleteBench( /*event*/ ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onComplete` )
                delete this.benchDataMap
            },

            // compiled/called before the test loop
            'setup': function setupBench( /*event*/ ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] setup` )
            },

            // compiled/called after the test loop
            'teardown': function teardownBench( /*event*/ ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] teardown` )
            }
        }

    },

    createSuiteOptions: function ( /*dataMapOptions*/ ) {

        let options

        // #if IS_BACKEND_SPECIFIC
        options = {

            // called when the suite starts running
            'onStart': function onStartSuite( /*event*/ ) {
                //eslint-disable-next-line
                console.log( `Running ${ this.constructor.name }: ${ this.name }` )
                this.results = []
            },

            // called between running benchmarks
            'onCycle': function onCycleSuite( event ) {
                //eslint-disable-next-line
                console.log( `Running Bench: ${ event.target.name }` )
                this.results.push( event.target )
            },

            // called when aborted
            'onAbort': function onAbortSuite( /*event*/ ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onAbort` )
            },

            // called when a test errors
            'onError': function onErrorSuite( /*event*/ ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onError` )
            },

            // called when reset
            'onReset': function onResetSuite( /*event*/ ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onReset` )
            },

            // called when the suite completes running
            'onComplete': function onCompleteSuite( /*event*/ ) {

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

                delete this.results

            }
        }
        // #endif

        // #if IS_FRONTEND_SPECIFIC
        options = {}
        // #endif

        return options
    },

    iterateOverDataMap: function ( method ) {

        return function _iterateOverDataMap() {
            //            console.group( 'iterateOverDataMap' )
            //            console.log( `Suite Datamap: ${ ( ( this.suiteDataMap === undefined ) ? 'not exist' : 'exist' ) }` )
            //            console.log( `Bench Datamap: ${ ( ( this.benchDataMap === undefined ) ? 'not exist' : 'exist' ) }` )
            //            console.groupEnd()

            if ( typeof method === 'undefined' ) {
                throw new ReferenceError( 'the method param is null or undefined!' )
            }

            const datamap = this.benchDataMap
            for ( let datasetKey in datamap ) {

                const dataset = datamap[ datasetKey ]

                if ( Array.isArray( dataset ) ) {

                    for ( let datasetElement of dataset ) {
                        try {
                            method( datasetElement )
                        } catch ( error ) {

                            const datasetElementType = ( datasetElement === null )
                                                       ? 'null'
                                                       : ( datasetElement === undefined )
                                                         ? 'undefined'
                                                         : datasetElement.toString()

                            console.error( `method [${ method.name } fail with [${ datasetElementType }] => ${ error.message }` )
                        }
                    }

                } else {

                    for ( let dataKey in dataset ) {

                        const data = dataset[ dataKey ]

                        try {
                            method( data )
                        } catch ( error ) {

                            const dataType = ( data === null )
                                             ? 'null'
                                             : ( data === undefined )
                                               ? 'undefined'
                                               : data.toString()

                            console.error( `method [${ method.name } fail with [${ dataType }] => ${ error.message }` )
                        }

                    }

                }

            }

        }

    },

    createDataSet: function ( dataSetOptions ) {

        if ( dataSetOptions === undefined ) {

            dataSetOptions = {
                voids:       [],
                booleans:    [],
                numbers:     [],
                strings:     [],
                functions:   [],
                arrays:      [],
                typedArrays: [],
                objects:     []
            }

        }

        let dataSet = []

        for ( let optionKey in dataSetOptions ) {

            const map    = globalDataMap[ optionKey ]
            const option = dataSetOptions[ optionKey ]

            if ( option.length === 0 ) {

                for ( let valueKey in map ) {
                    dataSet.push( map[ valueKey ] )
                }

            } else {

                for ( let i = 0, nbOptions = option.length ; i < nbOptions ; i++ ) {
                    dataSet.push( map[ option[ i ] ] )
                }

            }

        }

        return dataSet

    },

    createDataSetBenchmarkOptions: function ( datasetName ) {

        return {

            setup: function onSetup() {
                this.dataset = Testing.createDataSet()[ datasetName ]
            },

            teardown: function onTeardown() {
                delete this.dataset
            }

        }

    },

    iterateOverDataSet: function ( func ) {

        return function () {

            const dataset = this.dataset
            for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

                func( dataset[ i ] )

            }

        }

    }

}
/* eslint-enable no-console */

export { Testing }
