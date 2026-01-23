import { expect }       from 'chai'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as arraysNamespace from '../../../sources/cores/arrays.js'

const Testing   = await getTestingPackage()

describe( 'arraysUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'sortBy()', function () {

		it( 'should be bundlable', async function () {

			expect(arraysNamespace.sortBy).to.exist

		} )

		it( 'should return value of type function when propertyName is of type string and ascending is of type ordering', async function() {

			const dataSet0 = _dataMap[ 'strings' ]
			const dataSet1 = _dataMap[ 'orderings' ]

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

	describe( 'toArray()', function () {

		it( 'should be bundlable', async function () {

			expect(arraysNamespace.toArray).to.exist

		} )

		it( 'should return value of type array.<*> when object is of any type and options is of type object and options.keepArray is of type boolean and options.keepNull is of type boolean', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]
			const dataSet1 = _dataMap[ 'objects' ]
			const dataSet2 = _dataMap[ 'booleans' ]
			const dataSet3 = _dataMap[ 'booleans' ]

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
