
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Arrays from '../../../sources/cores/arrays.js'

const sortBySuite = Benchmark.Suite( 'Arrays.sortBy', TestsUtils.createSuiteOptions() )
                                     .add( 'sortBy()', TestsUtils.iterateOverDataMap( Arrays.sortBy ), TestsUtils.createBenchmarkOptions() )
const toArraySuite = Benchmark.Suite( 'Arrays.toArray', TestsUtils.createSuiteOptions() )
                                     .add( 'toArray()', TestsUtils.iterateOverDataMap( Arrays.toArray ), TestsUtils.createBenchmarkOptions() )

export { sortBySuite,toArraySuite }

