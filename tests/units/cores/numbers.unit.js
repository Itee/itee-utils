import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as numbersNamespace from '../../../sources/cores/numbers.js'

function numbersUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'numbersUnits', () => {

		describe( 'getRandomFloatExclusive()', () => {

			it( 'is bundlable', () => {

				expect(numbersNamespace.getRandomFloatExclusive).to.exist

			} )

			it( 'return type is number when min is of type number and max is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

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

		describe( 'getRandomFloatInclusive()', () => {

			it( 'is bundlable', () => {

				expect(numbersNamespace.getRandomFloatInclusive).to.exist

			} )

			it( 'return type is number when min is of type number and max is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

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

		describe( 'getRandomIntExclusive()', () => {

			it( 'is bundlable', () => {

				expect(numbersNamespace.getRandomIntExclusive).to.exist

			} )

			it( 'return type is number when min is of type number and max is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

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

		describe( 'getRandomIntInclusive()', () => {

			it( 'is bundlable', () => {

				expect(numbersNamespace.getRandomIntInclusive).to.exist

			} )

			it( 'return type is number when min is of type number and max is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

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

		describe( 'numberToPlainString()', () => {

			it( 'is bundlable', () => {

				expect(numbersNamespace.numberToPlainString).to.exist

			} )

			it( 'return type is string when value is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = numbersNamespace.numberToPlainString( dataSetValue0 )
					expect(result).to.be.a('string')
				}

			} )

		} )

	} )

}

export { numbersUnits }

