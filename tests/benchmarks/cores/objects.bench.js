
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Objects from '../../../sources/cores/objects.js'

const createIntervalSuite = Benchmark.Suite( 'Objects.createInterval', TestsUtils.createSuiteOptions() )
                                     .add( 'createInterval()', TestsUtils.iterateOverDataMap( Objects.createInterval ), TestsUtils.createBenchmarkOptions() )
const extendSuite = Benchmark.Suite( 'Objects.extend', TestsUtils.createSuiteOptions() )
                                     .add( 'extend()', TestsUtils.iterateOverDataMap( Objects.extend ), TestsUtils.createBenchmarkOptions() )
const extendObjectSuite = Benchmark.Suite( 'Objects.extendObject', TestsUtils.createSuiteOptions() )
                                     .add( 'extendObject()', TestsUtils.iterateOverDataMap( Objects.extendObject ), TestsUtils.createBenchmarkOptions() )
const serializeObjectSuite = Benchmark.Suite( 'Objects.serializeObject', TestsUtils.createSuiteOptions() )
                                     .add( 'serializeObject()', TestsUtils.iterateOverDataMap( Objects.serializeObject ), TestsUtils.createBenchmarkOptions() )
const toEnumSuite = Benchmark.Suite( 'Objects.toEnum', TestsUtils.createSuiteOptions() )
                                     .add( 'toEnum()', TestsUtils.iterateOverDataMap( Objects.toEnum ), TestsUtils.createBenchmarkOptions() )
const uniqSuite = Benchmark.Suite( 'Objects.uniq', TestsUtils.createSuiteOptions() )
                                     .add( 'uniq()', TestsUtils.iterateOverDataMap( Objects.uniq ), TestsUtils.createBenchmarkOptions() )

export { createIntervalSuite,extendSuite,extendObjectSuite,serializeObjectSuite,toEnumSuite,uniqSuite }

