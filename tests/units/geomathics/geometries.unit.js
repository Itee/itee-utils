import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as geometriesNamespace from '../../../sources/geomathics/geometries.js'

function geometriesUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'geometriesUnits', () => {

		describe( 'ringClockwise()', () => {

			it( 'is bundlable', () => {

				expect(geometriesNamespace.ringClockwise).to.exist

			} )

			it( 'return type is boolean when ring is of type array.<number>', () => {

				const dataSet0 = this._dataMap[ 'array.<number>s' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = geometriesNamespace.ringClockwise( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'ringContainsSome()', () => {

			it( 'is bundlable', () => {

				expect(geometriesNamespace.ringContainsSome).to.exist

			} )

			it( 'return type is boolean when ring is of type array.<number> and hole is of type array.<number>', () => {

				const dataSet0 = this._dataMap[ 'array.<number>s' ]
				const dataSet1 = this._dataMap[ 'array.<number>s' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = geometriesNamespace.ringContainsSome( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'ringContains()', () => {

			it( 'is bundlable', () => {

				expect(geometriesNamespace.ringContains).to.exist

			} )

			it( 'return type is number when ring is of type array.<number> and point is of type array.<number>', () => {

				const dataSet0 = this._dataMap[ 'array.<number>s' ]
				const dataSet1 = this._dataMap[ 'array.<number>s' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = geometriesNamespace.ringContains( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('number')
					}
				}

			} )

		} )

		describe( 'segmentContains()', () => {

			it( 'is bundlable', () => {

				expect(geometriesNamespace.segmentContains).to.exist

			} )

			it( 'return type is boolean when p0 is of type array.<number> and p1 is of type array.<number> and p2 is of type array.<number>', () => {

				const dataSet0 = this._dataMap[ 'array.<number>s' ]
				const dataSet1 = this._dataMap[ 'array.<number>s' ]
				const dataSet2 = this._dataMap[ 'array.<number>s' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]

						for ( let key2 in dataSet2 ) {
							const dataSetValue2 = dataSet2[ key2 ]
							const result = geometriesNamespace.segmentContains( dataSetValue0, dataSetValue1, dataSetValue2 )
							expect(result).to.be.a('boolean')
						}
					}
				}

			} )

		} )

	} )

}

export { geometriesUnits }

