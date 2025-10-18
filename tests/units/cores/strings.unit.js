import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as stringsNamespace from '../../../sources/cores/strings.js'

function stringsUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'stringsUnits', () => {

		describe( 'classNameify()', () => {

			it( 'is bundlable', () => {

				expect(stringsNamespace.classNameify).to.exist

			} )

			it( 'return type is string when word is of type String', () => {

				const dataSet0 = this._dataMap[ 'Strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = stringsNamespace.classNameify( dataSetValue0 )
					expect(result).to.be.a('string')
				}

			} )

		} )

		describe( 'removeDiacritics()', () => {

			it( 'is bundlable', () => {

				expect(stringsNamespace.removeDiacritics).to.exist

			} )

			it( 'return type is null or string when string is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = stringsNamespace.removeDiacritics( dataSetValue0 )
					try {
						expect(result).to.be.a('null')
					} catch(e) {
						try {
							expect(result).to.be.a('string')
						} catch(e) {
							expect.fail("expect result to be of type null or string")
						}
					}
				}

			} )

		} )

	} )

}

export { stringsUnits }

