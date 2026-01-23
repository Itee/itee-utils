import { expect }       from 'chai'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as geometriesNamespace from '../../../sources/geomathics/geometries.js'

const Testing   = await getTestingPackage()

describe( 'geometriesUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'ringClockwise()', function () {

		it( 'should be bundlable', async function () {

			expect(geometriesNamespace.ringClockwise).to.exist

		} )

		it( 'should return value of type boolean when ring is of type array.<number>', async function() {

			const dataSet0 = _dataMap[ 'array.<number>s' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = geometriesNamespace.ringClockwise( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'ringContainsSome()', function () {

		it( 'should be bundlable', async function () {

			expect(geometriesNamespace.ringContainsSome).to.exist

		} )

		it( 'should return value of type boolean when ring is of type array.<number> and hole is of type array.<number>', async function() {

			const dataSet0 = _dataMap[ 'array.<number>s' ]
			const dataSet1 = _dataMap[ 'array.<number>s' ]

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

	describe( 'ringContains()', function () {

		it( 'should be bundlable', async function () {

			expect(geometriesNamespace.ringContains).to.exist

		} )

		it( 'should return value of type number when ring is of type array.<number> and point is of type array.<number>', async function() {

			const dataSet0 = _dataMap[ 'array.<number>s' ]
			const dataSet1 = _dataMap[ 'array.<number>s' ]

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

	describe( 'segmentContains()', function () {

		it( 'should be bundlable', async function () {

			expect(geometriesNamespace.segmentContains).to.exist

		} )

		it( 'should return value of type boolean when p0 is of type array.<number> and p1 is of type array.<number> and p2 is of type array.<number>', async function() {

			const dataSet0 = _dataMap[ 'array.<number>s' ]
			const dataSet1 = _dataMap[ 'array.<number>s' ]
			const dataSet2 = _dataMap[ 'array.<number>s' ]

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
