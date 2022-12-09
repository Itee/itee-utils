import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Binaries from '../../../sources/cores/binaries.js'

function binariesUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Binaries', () => {

		describe( 'numberToInternalRepresentation', () => {

			it( 'numberToInternalRepresentation is bundlable', () => {

				expect(Binaries.numberToInternalRepresentation).to.exist

			} )

			it( 'numberToInternalRepresentation return type is string when number is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = Binaries.numberToInternalRepresentation( dataSetValue0 )
					expect(result).to.be.a('string')
				}

			} )

		} )

	} )

}

export { binariesUnits }

