import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from '../../../sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as arraysNamespace from '../../../sources/cores/arrays.js'

function arraysUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'arraysUnits', () => {

		describe( 'sortBy()', () => {

			it( 'is bundlable', () => {

				expect(arraysNamespace.sortBy).to.exist

			} )

			it( 'return type is function when propertyName is of type string and ascending is of type ordering', () => {

				const dataSet0 = this._dataMap[ 'strings' ]
				const dataSet1 = this._dataMap[ 'orderings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = arraysNamespace.sortBy( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('function')
					}
				}

			} )

		} )

		describe( 'toArray()', () => {

			it( 'is bundlable', () => {

				expect(arraysNamespace.toArray).to.exist

			} )

			it( 'return type is array.<*> when object is of any type and options is of type object and options.keepArray is of type boolean and options.keepNull is of type boolean', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]
				const dataSet1 = this._dataMap[ 'objects' ]
				const dataSet2 = this._dataMap[ 'booleans' ]
				const dataSet3 = this._dataMap[ 'booleans' ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]

						for ( let key1 in dataSet1 ) {
							const dataSetValue1 = dataSet1[ key1 ]

							for ( let key2 in dataSet2 ) {
								const dataSetValue2 = dataSet2[ key2 ]

								for ( let key3 in dataSet3 ) {
									const dataSetValue3 = dataSet3[ key3 ]
									const result = arraysNamespace.toArray( dataSetValue0, dataSetValue1, dataSetValue2, dataSetValue3 )
									expect(result).to.be.a('array')
								}
							}
						}
					}
				}

			} )

		} )

	} )

}

export { arraysUnits }

