import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as temperaturesNamespace from '../../../sources/physics/temperatures.js'

function temperaturesUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'temperaturesUnits', () => {

		describe( 'celsiusToKelvin()', () => {

			it( 'is bundlable', () => {

				expect(temperaturesNamespace.celsiusToKelvin).to.exist

			} )

			it( 'return type is string when celsius is of type number and precisionPointAt is of type integer', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'integers' ]

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

		describe( 'celsiusToFahrenheit()', () => {

			it( 'is bundlable', () => {

				expect(temperaturesNamespace.celsiusToFahrenheit).to.exist

			} )

			it( 'return type is string when celsius is of type number and precisionPointAt is of type integer', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'integers' ]

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

		describe( 'fahrenheitToCelsius()', () => {

			it( 'is bundlable', () => {

				expect(temperaturesNamespace.fahrenheitToCelsius).to.exist

			} )

			it( 'return type is string when fahrenheit is of type number and precisionPointAt is of type integer', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'integers' ]

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

		describe( 'fahrenheitToKelvin()', () => {

			it( 'is bundlable', () => {

				expect(temperaturesNamespace.fahrenheitToKelvin).to.exist

			} )

			it( 'return type is string when fahrenheit is of type number and precisionPointAt is of type integer', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'integers' ]

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

		describe( 'kelvinToCelsius()', () => {

			it( 'is bundlable', () => {

				expect(temperaturesNamespace.kelvinToCelsius).to.exist

			} )

			it( 'return type is string when kelvin is of type number and precisionPointAt is of type integer', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'integers' ]

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

		describe( 'kelvinToFahrenheit()', () => {

			it( 'is bundlable', () => {

				expect(temperaturesNamespace.kelvinToFahrenheit).to.exist

			} )

			it( 'return type is string when kelvin is of type number and precisionPointAt is of type integer', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'integers' ]

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

}

export { temperaturesUnits }

