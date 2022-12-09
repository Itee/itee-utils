import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Arrays from '../../../sources/cores/arrays.js'

function arraysUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Arrays', () => {

		describe( 'sortBy', () => {

			it( 'sortBy is bundlable', () => {

				expect(Arrays.sortBy).to.exist

			} )

			it( 'sortBy return type is function when propertyName is of type string and ascending is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]
				const dataSet1 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = Arrays.sortBy( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('function')
					}
				}

			} )

		} )

		describe( 'toArray', () => {

			it( 'toArray is bundlable', () => {

				expect(Arrays.toArray).to.exist

			} )

			it( 'toArray return type is array.<*> when object is of any type and options is of type object and options.keepArray is of type boolean and options.keepNull is of type boolean', () => {

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
									const result = Arrays.toArray( dataSetValue0, dataSetValue1, dataSetValue2, dataSetValue3 )
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

