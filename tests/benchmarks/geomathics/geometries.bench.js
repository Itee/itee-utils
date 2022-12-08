
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Geometries from '../../../sources/geomathics/geometries.js'

const ringClockwiseSuite = Benchmark.Suite( 'Geometries.ringClockwise', TestsUtils.createSuiteOptions() )
                                     .add( 'ringClockwise()', TestsUtils.iterateOverDataMap( Geometries.ringClockwise ), TestsUtils.createBenchmarkOptions() )
const ringContainsSuite = Benchmark.Suite( 'Geometries.ringContains', TestsUtils.createSuiteOptions() )
                                     .add( 'ringContains()', TestsUtils.iterateOverDataMap( Geometries.ringContains ), TestsUtils.createBenchmarkOptions() )
const ringContainsSomeSuite = Benchmark.Suite( 'Geometries.ringContainsSome', TestsUtils.createSuiteOptions() )
                                     .add( 'ringContainsSome()', TestsUtils.iterateOverDataMap( Geometries.ringContainsSome ), TestsUtils.createBenchmarkOptions() )
const segmentContainsSuite = Benchmark.Suite( 'Geometries.segmentContains', TestsUtils.createSuiteOptions() )
                                     .add( 'segmentContains()', TestsUtils.iterateOverDataMap( Geometries.segmentContains ), TestsUtils.createBenchmarkOptions() )

export { ringClockwiseSuite,ringContainsSuite,ringContainsSomeSuite,segmentContainsSuite }

