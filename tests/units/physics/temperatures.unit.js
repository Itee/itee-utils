import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from '../../../sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as temperaturesNamespace from '../../../sources/physics/temperatures.js'

function temperaturesUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'temperaturesUnits', () => {

	} )

}

export { temperaturesUnits }

