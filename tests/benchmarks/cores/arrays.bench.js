
import Benchmark   from 'benchmark'
//import { Testing } from 'itee-utils'
import { Testing }      from '../../../sources/testings/benchmarks'
import * as arraysNamespace from '../../../sources/cores/arrays.js'

const sortBySuite = Benchmark.Suite( 'arraysNamespace.sortBy', Testing.createSuiteOptions() )
                                     .add( 'sortBy()', Testing.iterateOverDataMap( arraysNamespace.sortBy ), Testing.createBenchmarkOptions() )

const toArraySuite = Benchmark.Suite( 'arraysNamespace.toArray', Testing.createSuiteOptions() )
                                     .add( 'toArray()', Testing.iterateOverDataMap( arraysNamespace.toArray ), Testing.createBenchmarkOptions() )

export { sortBySuite,toArraySuite }

