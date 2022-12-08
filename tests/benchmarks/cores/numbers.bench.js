
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Numbers from '../../../sources/cores/numbers.js'

const getRandomSuite = Benchmark.Suite( 'Numbers.getRandom', TestsUtils.createSuiteOptions() )
                                     .add( 'getRandom()', TestsUtils.iterateOverDataMap( Numbers.getRandom ), TestsUtils.createBenchmarkOptions() )
const getRandomFloatExclusiveSuite = Benchmark.Suite( 'Numbers.getRandomFloatExclusive', TestsUtils.createSuiteOptions() )
                                     .add( 'getRandomFloatExclusive()', TestsUtils.iterateOverDataMap( Numbers.getRandomFloatExclusive ), TestsUtils.createBenchmarkOptions() )
const getRandomFloatInclusiveSuite = Benchmark.Suite( 'Numbers.getRandomFloatInclusive', TestsUtils.createSuiteOptions() )
                                     .add( 'getRandomFloatInclusive()', TestsUtils.iterateOverDataMap( Numbers.getRandomFloatInclusive ), TestsUtils.createBenchmarkOptions() )
const getRandomIntExclusiveSuite = Benchmark.Suite( 'Numbers.getRandomIntExclusive', TestsUtils.createSuiteOptions() )
                                     .add( 'getRandomIntExclusive()', TestsUtils.iterateOverDataMap( Numbers.getRandomIntExclusive ), TestsUtils.createBenchmarkOptions() )
const getRandomIntInclusiveSuite = Benchmark.Suite( 'Numbers.getRandomIntInclusive', TestsUtils.createSuiteOptions() )
                                     .add( 'getRandomIntInclusive()', TestsUtils.iterateOverDataMap( Numbers.getRandomIntInclusive ), TestsUtils.createBenchmarkOptions() )
const numberToPlainStringSuite = Benchmark.Suite( 'Numbers.numberToPlainString', TestsUtils.createSuiteOptions() )
                                     .add( 'numberToPlainString()', TestsUtils.iterateOverDataMap( Numbers.numberToPlainString ), TestsUtils.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt0()', TestsUtils.iterateOverDataMap( Numbers.numberToPlainString_alt0 ), TestsUtils.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt1()', TestsUtils.iterateOverDataMap( Numbers.numberToPlainString_alt1 ), TestsUtils.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt2()', TestsUtils.iterateOverDataMap( Numbers.numberToPlainString_alt2 ), TestsUtils.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt3()', TestsUtils.iterateOverDataMap( Numbers.numberToPlainString_alt3 ), TestsUtils.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt4()', TestsUtils.iterateOverDataMap( Numbers.numberToPlainString_alt4 ), TestsUtils.createBenchmarkOptions() )

export { getRandomSuite,getRandomFloatExclusiveSuite,getRandomFloatInclusiveSuite,getRandomIntExclusiveSuite,getRandomIntInclusiveSuite,numberToPlainStringSuite }

