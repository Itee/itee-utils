import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from '../../../sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as objectsNamespace from '../../../sources/cores/objects.js'

function objectsUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'objectsUnits', () => {

		describe( 'uniq()', () => {

			it( 'is bundlable', () => {

				expect(objectsNamespace.uniq).to.exist

			} )

			it( 'return type is array.<*> when a is of type array.<*>', () => {

				const dataSet0 = this._dataMap[ 'array.<*>s' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = objectsNamespace.uniq( dataSetValue0 )
					expect(result).to.be.a('array')
				}

			} )

		} )

		describe( 'extend()', () => {

			it( 'is bundlable', () => {

				expect(objectsNamespace.extend).to.exist

			} )

			it( 'return type is object when target is of type object and source is of type object', () => {

				const dataSet0 = this._dataMap[ 'objects' ]
				const dataSet1 = this._dataMap[ 'objects' ]

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

		describe( 'serializeObject()', () => {

			it( 'is bundlable', () => {

				expect(objectsNamespace.serializeObject).to.exist

			} )

			it( 'return type is undefined', () => {

				const result = objectsNamespace.serializeObject()
				expect(result).to.be.a('undefined')

			} )

		} )

		describe( 'extendObject()', () => {

			it( 'is bundlable', () => {

				expect(objectsNamespace.extendObject).to.exist

			} )

			it( 'return type is * when ChildClass is of type class and ParentClassOrObject is of type class', () => {

				const dataSet0 = this._dataMap[ 'classs' ]
				const dataSet1 = this._dataMap[ 'classs' ]

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

		describe( 'createInterval()', () => {

			it( 'is bundlable', () => {

				expect(objectsNamespace.createInterval).to.exist

			} )

			it( 'return type is undefined when particles is of type cloudpoint and path is of type 3dpath and interval is of type number', () => {

				const dataSet0 = this._dataMap[ 'cloudpoints' ]
				const dataSet1 = this._dataMap[ '3dpaths' ]
				const dataSet2 = this._dataMap[ 'numbers' ]

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

}

export { objectsUnits }

