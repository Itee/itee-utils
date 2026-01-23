import { expect }       from 'chai'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as stringsNamespace from '../../../sources/cores/strings.js'

const Testing   = await getTestingPackage()

describe( 'stringsUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'classNameify()', function () {

		it( 'should be bundlable', async function () {

			expect(stringsNamespace.classNameify).to.exist

		} )

		it( 'should return value of type string when word is of type String', async function() {

			const dataSet0 = _dataMap[ 'Strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = stringsNamespace.classNameify( dataSetValue0 )
				expect(result).to.be.a('string')
			}

		} )

	} )

	describe( 'removeDiacritics()', function () {

		it( 'should be bundlable', async function () {

			expect(stringsNamespace.removeDiacritics).to.exist

		} )

		it( 'should return value of type null or string when string is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
					const result = stringsNamespace.removeDiacritics( dataSetValue0 )
					const resultType = (result === null) ? 'null' : typeof result
					expect(resultType).to.be.oneOf(['null','string'])
			}

		} )

	} )

} )
