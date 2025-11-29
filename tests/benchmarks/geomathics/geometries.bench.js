import * as geometriesNamespace from '../../../sources/geomathics/geometries.js'
import { getBenchmarkPackage } from '../../import.benchmarks.js'
import { getTestingPackage } from '../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const ringClockwiseSuite = Benchmark.Suite( 'geometriesNamespace.ringClockwise', Testing.createSuiteOptions() )
                                     .add( 'ringClockwise()', Testing.iterateOverDataMap( geometriesNamespace.ringClockwise ), Testing.createBenchmarkOptions() )

const ringContainsSomeSuite = Benchmark.Suite( 'geometriesNamespace.ringContainsSome', Testing.createSuiteOptions() )
                                     .add( 'ringContainsSome()', Testing.iterateOverDataMap( geometriesNamespace.ringContainsSome ), Testing.createBenchmarkOptions() )

const ringContainsSuite = Benchmark.Suite( 'geometriesNamespace.ringContains', Testing.createSuiteOptions() )
                                     .add( 'ringContains()', Testing.iterateOverDataMap( geometriesNamespace.ringContains ), Testing.createBenchmarkOptions() )

const segmentContainsSuite = Benchmark.Suite( 'geometriesNamespace.segmentContains', Testing.createSuiteOptions() )
                                     .add( 'segmentContains()', Testing.iterateOverDataMap( geometriesNamespace.segmentContains ), Testing.createBenchmarkOptions() )

export { ringClockwiseSuite,ringContainsSomeSuite,ringContainsSuite,segmentContainsSuite }

