import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from '../../../sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as geometriesNamespace from '../../../sources/geomathics/geometries.js'

function geometriesUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'geometriesUnits', () => {

	} )

}

export { geometriesUnits }

