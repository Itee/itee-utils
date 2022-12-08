
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Binaries from '../../../sources/cores/binaries.js'

const bitsToByteSuite = Benchmark.Suite( 'Binaries.bitsToByte', TestsUtils.createSuiteOptions() )
                                     .add( 'bitsToByte()', TestsUtils.iterateOverDataMap( Binaries.bitsToByte ), TestsUtils.createBenchmarkOptions() )
const byteToBitsSuite = Benchmark.Suite( 'Binaries.byteToBits', TestsUtils.createSuiteOptions() )
                                     .add( 'byteToBits()', TestsUtils.iterateOverDataMap( Binaries.byteToBits ), TestsUtils.createBenchmarkOptions() )
const internalRepresentationToNumberSuite = Benchmark.Suite( 'Binaries.internalRepresentationToNumber', TestsUtils.createSuiteOptions() )
                                     .add( 'internalRepresentationToNumber()', TestsUtils.iterateOverDataMap( Binaries.internalRepresentationToNumber ), TestsUtils.createBenchmarkOptions() )
const numberToInternalRepresentationSuite = Benchmark.Suite( 'Binaries.numberToInternalRepresentation', TestsUtils.createSuiteOptions() )
                                     .add( 'numberToInternalRepresentation()', TestsUtils.iterateOverDataMap( Binaries.numberToInternalRepresentation ), TestsUtils.createBenchmarkOptions() )

export { bitsToByteSuite,byteToBitsSuite,internalRepresentationToNumberSuite,numberToInternalRepresentationSuite }

