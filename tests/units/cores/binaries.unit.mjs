import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as binariesNamespace from '../../../sources/cores/binaries.js'

describe( 'binariesUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'numberToInternalRepresentation()', function () {

		it( 'should be bundlable', async function () {

			expect(binariesNamespace.numberToInternalRepresentation).to.exist

		} )

		it( 'should return value of type string when number is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = binariesNamespace.numberToInternalRepresentation( dataSetValue0 )
				expect(result).to.be.a('string')
			}

		} )

	} )

} )
