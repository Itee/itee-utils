import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Booleans from '../../../sources/cores/booleans.js'

function booleansUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Booleans', () => {

	} )

}

export { booleansUnits }

