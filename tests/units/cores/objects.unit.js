import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Objects from '../../../sources/cores/objects.js'

function objectsUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Objects', () => {

		describe( 'createInterval', () => {

			it( 'createInterval is bundlable', () => {

				expect(Objects.createInterval).to.exist

			} )

			it( 'createInterval return type is undefined when particles is of type cloudpoint and path is of type 3dpath and interval is of type number', () => {

				const dataSet0 = this._dataMap[ 'cloudpoints' ]
				const dataSet1 = this._dataMap[ '3dpaths' ]
				const dataSet2 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]

						for ( let key2 in dataSet2 ) {
							const dataSetValue2 = dataSet2[ key2 ]
							const result = Objects.createInterval( dataSetValue0, dataSetValue1, dataSetValue2 )
							expect(result).to.be.a('undefined')
						}
					}
				}

			} )

		} )

		describe( 'extend', () => {

			it( 'extend is bundlable', () => {

				expect(Objects.extend).to.exist

			} )

			it( 'extend return type is object when target is of type object and source is of type object', () => {

				const dataSet0 = this._dataMap[ 'objects' ]
				const dataSet1 = this._dataMap[ 'objects' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = Objects.extend( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('object')
					}
				}

			} )

		} )

		describe( 'extendObject', () => {

			it( 'extendObject is bundlable', () => {

				expect(Objects.extendObject).to.exist

			} )

			it( 'extendObject return type is * when ChildClass is of type class and ParentClassOrObject is of type class', () => {

				const dataSet0 = this._dataMap[ 'classs' ]
				const dataSet1 = this._dataMap[ 'classs' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = Objects.extendObject( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('*')
					}
				}

			} )

		} )

		describe( 'serializeObject', () => {

			it( 'serializeObject is bundlable', () => {

				expect(Objects.serializeObject).to.exist

			} )

			it( 'serializeObject return type is undefined', () => {

				const result = Objects.serializeObject()
				expect(result).to.be.a('undefined')

			} )

		} )

	} )

}

export { objectsUnits }

