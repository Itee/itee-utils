import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Temperatures from '../../../sources/physics/temperatures.js'

function temperaturesUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Temperatures', () => {

	} )

}

export { temperaturesUnits }

