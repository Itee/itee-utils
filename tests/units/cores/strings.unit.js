import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Strings from '../../../sources/cores/strings.js'

function stringsUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Strings', () => {

		describe( 'classNameify', () => {

			it( 'classNameify is bundlable', () => {

				expect(Strings.classNameify).to.exist

			} )

			it( 'classNameify return type is string when word is of type String', () => {

				const dataSet0 = this._dataMap[ 'Strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = Strings.classNameify( dataSetValue0 )
					expect(result).to.be.a('string')
				}

			} )

		} )

		describe( 'removeDiacritics', () => {

			it( 'removeDiacritics is bundlable', () => {

				expect(Strings.removeDiacritics).to.exist

			} )

			it( 'removeDiacritics return type is null or string when string is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = Strings.removeDiacritics( dataSetValue0 )
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

