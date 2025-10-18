
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as numbersNamespace from '../../../sources/cores/numbers.js'

const getRandomSuite = Benchmark.Suite( 'numbersNamespace.getRandom', Testing.createSuiteOptions() )
                                     .add( 'getRandom()', Testing.iterateOverDataMap( numbersNamespace.getRandom ), Testing.createBenchmarkOptions() )

const getRandomFloatExclusiveSuite = Benchmark.Suite( 'numbersNamespace.getRandomFloatExclusive', Testing.createSuiteOptions() )
                                     .add( 'getRandomFloatExclusive()', Testing.iterateOverDataMap( numbersNamespace.getRandomFloatExclusive ), Testing.createBenchmarkOptions() )

const getRandomFloatInclusiveSuite = Benchmark.Suite( 'numbersNamespace.getRandomFloatInclusive', Testing.createSuiteOptions() )
                                     .add( 'getRandomFloatInclusive()', Testing.iterateOverDataMap( numbersNamespace.getRandomFloatInclusive ), Testing.createBenchmarkOptions() )

const getRandomIntExclusiveSuite = Benchmark.Suite( 'numbersNamespace.getRandomIntExclusive', Testing.createSuiteOptions() )
                                     .add( 'getRandomIntExclusive()', Testing.iterateOverDataMap( numbersNamespace.getRandomIntExclusive ), Testing.createBenchmarkOptions() )

const getRandomIntInclusiveSuite = Benchmark.Suite( 'numbersNamespace.getRandomIntInclusive', Testing.createSuiteOptions() )
                                     .add( 'getRandomIntInclusive()', Testing.iterateOverDataMap( numbersNamespace.getRandomIntInclusive ), Testing.createBenchmarkOptions() )

const numberToPlainStringSuite = Benchmark.Suite( 'numbersNamespace.numberToPlainString', Testing.createSuiteOptions() )
                                     .add( 'numberToPlainString()', Testing.iterateOverDataMap( numbersNamespace.numberToPlainString ), Testing.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt0()', Testing.iterateOverDataMap( numbersNamespace.numberToPlainString_alt0 ), Testing.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt1()', Testing.iterateOverDataMap( numbersNamespace.numberToPlainString_alt1 ), Testing.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt2()', Testing.iterateOverDataMap( numbersNamespace.numberToPlainString_alt2 ), Testing.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt3()', Testing.iterateOverDataMap( numbersNamespace.numberToPlainString_alt3 ), Testing.createBenchmarkOptions() )
                                     .add( 'numberToPlainString_alt4()', Testing.iterateOverDataMap( numbersNamespace.numberToPlainString_alt4 ), Testing.createBenchmarkOptions() )

export { getRandomSuite,getRandomFloatExclusiveSuite,getRandomFloatInclusiveSuite,getRandomIntExclusiveSuite,getRandomIntInclusiveSuite,numberToPlainStringSuite }

