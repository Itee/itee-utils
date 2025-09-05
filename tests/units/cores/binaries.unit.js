import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from '../../../sources/testings/benchmarks'
import * as binariesNamespace from '../../../sources/cores/binaries.js'

function binariesUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'binariesUnits', () => {

		describe( 'numberToInternalRepresentation()', () => {

			it( 'is bundlable', () => {

				expect(binariesNamespace.numberToInternalRepresentation).to.exist

			} )

			it( 'return type is string when number is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = binariesNamespace.numberToInternalRepresentation( dataSetValue0 )
					expect(result).to.be.a('string')
				}

			} )

		} )

	} )

}

export { binariesUnits }

