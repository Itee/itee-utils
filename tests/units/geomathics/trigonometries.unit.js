import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Trigonometries from '../../../sources/geomathics/trigonometries.js'

function trigonometriesUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Trigonometries', () => {

	} )

}

export { trigonometriesUnits }

