import { expect }       from 'chai'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as objectsNamespace from '../../../sources/cores/objects.js'

const Testing   = await getTestingPackage()

describe( 'objectsUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'uniq()', function () {

		it( 'should be bundlable', async function () {

			expect(objectsNamespace.uniq).to.exist

		} )

		it( 'should return value of type array.<*> when a is of type array.<*>', async function() {

			const dataSet0 = _dataMap[ 'array.<*>s' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = objectsNamespace.uniq( dataSetValue0 )
				expect(result).to.be.a('array')
			}

		} )

	} )

	describe( 'extend()', function () {

		it( 'should be bundlable', async function () {

			expect(objectsNamespace.extend).to.exist

		} )

		it( 'should return value of type object when target is of type object and source is of type object', async function() {

			const dataSet0 = _dataMap[ 'objects' ]
			const dataSet1 = _dataMap[ 'objects' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = objectsNamespace.extend( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('object')
				}
			}

		} )

	} )

	describe( 'serializeObject()', function () {

		it( 'should be bundlable', async function () {

			expect(objectsNamespace.serializeObject).to.exist

		} )

		it( 'should return undefined value on call', async function () {

			const result = objectsNamespace.serializeObject()
			expect(result).to.be.a('undefined')

		} )

	} )

	describe( 'extendObject()', function () {

		it( 'should be bundlable', async function () {

			expect(objectsNamespace.extendObject).to.exist

		} )

		it( 'should return value of type * when ChildClass is of type class and ParentClassOrObject is of type class', async function() {

			const dataSet0 = _dataMap[ 'classs' ]
			const dataSet1 = _dataMap[ 'classs' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = objectsNamespace.extendObject( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('*')
				}
			}

		} )

	} )

	describe( 'createInterval()', function () {

		it( 'should be bundlable', async function () {

			expect(objectsNamespace.createInterval).to.exist

		} )

		it( 'should return undefined value when particles is of type cloudpoint and path is of type 3dpath and interval is of type number', async function() {

			const dataSet0 = _dataMap[ 'cloudpoints' ]
			const dataSet1 = _dataMap[ '3dpaths' ]
			const dataSet2 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]

					for ( let key2 in dataSet2 ) {
						const dataSetValue2 = dataSet2[ key2 ]
						const result = objectsNamespace.createInterval( dataSetValue0, dataSetValue1, dataSetValue2 )
						expect(result).to.be.a('undefined')
					}
				}
			}

		} )

	} )

} )
