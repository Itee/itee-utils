import * as binariesNamespace from '../../../sources/cores/binaries.js'
import { getBenchmarkPackage } from '../../import.benchmarks.js'
import { getTestingPackage } from '../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const byteToBitsSuite = Benchmark.Suite( 'binariesNamespace.byteToBits', Testing.createSuiteOptions() )
                                     .add( 'byteToBits()', Testing.iterateOverDataMap( binariesNamespace.byteToBits ), Testing.createBenchmarkOptions() )

const bitsToByteSuite = Benchmark.Suite( 'binariesNamespace.bitsToByte', Testing.createSuiteOptions() )
                                     .add( 'bitsToByte()', Testing.iterateOverDataMap( binariesNamespace.bitsToByte ), Testing.createBenchmarkOptions() )

const numberToInternalRepresentationSuite = Benchmark.Suite( 'binariesNamespace.numberToInternalRepresentation', Testing.createSuiteOptions() )
                                     .add( 'numberToInternalRepresentation()', Testing.iterateOverDataMap( binariesNamespace.numberToInternalRepresentation ), Testing.createBenchmarkOptions() )

const internalRepresentationToNumberSuite = Benchmark.Suite( 'binariesNamespace.internalRepresentationToNumber', Testing.createSuiteOptions() )
                                     .add( 'internalRepresentationToNumber()', Testing.iterateOverDataMap( binariesNamespace.internalRepresentationToNumber ), Testing.createBenchmarkOptions() )

export { byteToBitsSuite,bitsToByteSuite,numberToInternalRepresentationSuite,internalRepresentationToNumberSuite }

