import * as arraysNamespace from '../../../sources/cores/arrays.js'
import { getBenchmarkPackage } from '../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const sortBySuite = Benchmark.Suite( 'arraysNamespace.sortBy', Testing.createSuiteOptions() )
                                     .add( 'sortBy()', Testing.iterateOverDataMap( arraysNamespace.sortBy ), Testing.createBenchmarkOptions() )

const toArraySuite = Benchmark.Suite( 'arraysNamespace.toArray', Testing.createSuiteOptions() )
                                     .add( 'toArray()', Testing.iterateOverDataMap( arraysNamespace.toArray ), Testing.createBenchmarkOptions() )

export { sortBySuite,toArraySuite }

