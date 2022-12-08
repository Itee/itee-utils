import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Geometries from '../../../sources/geomathics/geometries.js'

function geometriesUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Geometries', () => {

	} )

}

export { geometriesUnits }

