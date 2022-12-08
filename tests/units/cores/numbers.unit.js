import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Numbers from '../../../sources/cores/numbers.js'

function numbersUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Numbers', () => {

		describe( 'getRandomFloatExclusive', () => {

			it( 'getRandomFloatExclusive is bundlable', () => {

				expect(Numbers.getRandomFloatExclusive).to.exist

			} )

			it( 'getRandomFloatExclusive return type is number when min is of type number and max is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = Numbers.getRandomFloatExclusive( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('number')
					}
				}

			} )

		} )

		describe( 'getRandomFloatInclusive', () => {

			it( 'getRandomFloatInclusive is bundlable', () => {

				expect(Numbers.getRandomFloatInclusive).to.exist

			} )

			it( 'getRandomFloatInclusive return type is number when min is of type number and max is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = Numbers.getRandomFloatInclusive( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('number')
					}
				}

			} )

		} )

		describe( 'getRandomIntExclusive', () => {

			it( 'getRandomIntExclusive is bundlable', () => {

				expect(Numbers.getRandomIntExclusive).to.exist

			} )

			it( 'getRandomIntExclusive return type is number when min is of type number and max is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = Numbers.getRandomIntExclusive( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('number')
					}
				}

			} )

		} )

		describe( 'getRandomIntInclusive', () => {

			it( 'getRandomIntInclusive is bundlable', () => {

				expect(Numbers.getRandomIntInclusive).to.exist

			} )

			it( 'getRandomIntInclusive return type is number when min is of type number and max is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = Numbers.getRandomIntInclusive( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('number')
					}
				}

			} )

		} )

		describe( 'numberToPlainString', () => {

			it( 'numberToPlainString is bundlable', () => {

				expect(Numbers.numberToPlainString).to.exist

			} )

			it( 'numberToPlainString return type is string when value is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = Numbers.numberToPlainString( dataSetValue0 )
					expect(result).to.be.a('string')
				}

			} )

		} )

	} )

}

export { numbersUnits }

