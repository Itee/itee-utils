import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as temperaturesNamespace from '../../../sources/physics/temperatures.js'

describe( 'temperaturesUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'celsiusToKelvin()', function () {

		it( 'should be bundlable', async function () {

			expect(temperaturesNamespace.celsiusToKelvin).to.exist

		} )

		it( 'should return value of type string when celsius is of type number and precisionPointAt is of type integer', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'integers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = temperaturesNamespace.celsiusToKelvin( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('string')
				}
			}

		} )

	} )

	describe( 'celsiusToFahrenheit()', function () {

		it( 'should be bundlable', async function () {

			expect(temperaturesNamespace.celsiusToFahrenheit).to.exist

		} )

		it( 'should return value of type string when celsius is of type number and precisionPointAt is of type integer', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'integers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = temperaturesNamespace.celsiusToFahrenheit( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('string')
				}
			}

		} )

	} )

	describe( 'fahrenheitToCelsius()', function () {

		it( 'should be bundlable', async function () {

			expect(temperaturesNamespace.fahrenheitToCelsius).to.exist

		} )

		it( 'should return value of type string when fahrenheit is of type number and precisionPointAt is of type integer', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'integers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = temperaturesNamespace.fahrenheitToCelsius( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('string')
				}
			}

		} )

	} )

	describe( 'fahrenheitToKelvin()', function () {

		it( 'should be bundlable', async function () {

			expect(temperaturesNamespace.fahrenheitToKelvin).to.exist

		} )

		it( 'should return value of type string when fahrenheit is of type number and precisionPointAt is of type integer', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'integers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = temperaturesNamespace.fahrenheitToKelvin( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('string')
				}
			}

		} )

	} )

	describe( 'kelvinToCelsius()', function () {

		it( 'should be bundlable', async function () {

			expect(temperaturesNamespace.kelvinToCelsius).to.exist

		} )

		it( 'should return value of type string when kelvin is of type number and precisionPointAt is of type integer', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'integers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = temperaturesNamespace.kelvinToCelsius( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('string')
				}
			}

		} )

	} )

	describe( 'kelvinToFahrenheit()', function () {

		it( 'should be bundlable', async function () {

			expect(temperaturesNamespace.kelvinToFahrenheit).to.exist

		} )

		it( 'should return value of type string when kelvin is of type number and precisionPointAt is of type integer', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]
			const dataSet1 = _dataMap[ 'integers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]

				for ( let key1 in dataSet1 ) {
					const dataSetValue1 = dataSet1[ key1 ]
					const result = temperaturesNamespace.kelvinToFahrenheit( dataSetValue0, dataSetValue1 )
					expect(result).to.be.a('string')
				}
			}

		} )

	} )

} )
