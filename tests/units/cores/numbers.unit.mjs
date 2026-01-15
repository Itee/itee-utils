import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as numbersNamespace from '../../../sources/cores/numbers.js'

describe( 'numbersUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'getRandomFloatExclusive()', function () {

		it( 'should be bundlable', async function () {

			expect(numbersNamespace.getRandomFloatExclusive).to.exist

		} )

		it( 'should return value of type number when min is of type number and max is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = numbersNamespace.getRandomFloatExclusive( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('number')
				}
			}

		} )

	} )

	describe( 'getRandomFloatInclusive()', function () {

		it( 'should be bundlable', async function () {

			expect(numbersNamespace.getRandomFloatInclusive).to.exist

		} )

		it( 'should return value of type number when min is of type number and max is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = numbersNamespace.getRandomFloatInclusive( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('number')
				}
			}

		} )

	} )

	describe( 'getRandomIntExclusive()', function () {

		it( 'should be bundlable', async function () {

			expect(numbersNamespace.getRandomIntExclusive).to.exist

		} )

		it( 'should return value of type number when min is of type number and max is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = numbersNamespace.getRandomIntExclusive( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('number')
				}
			}

		} )

	} )

	describe( 'getRandomIntInclusive()', function () {

		it( 'should be bundlable', async function () {

			expect(numbersNamespace.getRandomIntInclusive).to.exist

		} )

		it( 'should return value of type number when min is of type number and max is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = numbersNamespace.getRandomIntInclusive( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('number')
				}
			}

		} )

	} )

	describe( 'numberToPlainString()', function () {

		it( 'should be bundlable', async function () {

			expect(numbersNamespace.numberToPlainString).to.exist

		} )

		it( 'should return value of type string when value is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = numbersNamespace.numberToPlainString( dataSetValue0 )
				expect(result).to.be.a('string')
			}

		} )

	} )

} )
