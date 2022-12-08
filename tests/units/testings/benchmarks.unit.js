import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Benchmarks from '../../../sources/testings/benchmarks.js'

function benchmarksUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Benchmarks', () => {

	} )

}

export { benchmarksUnits }

