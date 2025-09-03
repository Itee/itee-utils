import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from '../../../sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as trigonometriesNamespace from '../../../sources/geomathics/trigonometries.js'

function trigonometriesUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'trigonometriesUnits', () => {

	} )

}

export { trigonometriesUnits }

