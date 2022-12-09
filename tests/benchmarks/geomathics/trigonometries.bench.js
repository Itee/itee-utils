
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Trigonometries from '../../../sources/geomathics/trigonometries.js'

const convertWebGLRotationToTopogicalYawPitchSuite = Benchmark.Suite( 'Trigonometries.convertWebGLRotationToTopogicalYawPitch', TestsUtils.createSuiteOptions() )
                                     .add( 'convertWebGLRotationToTopogicalYawPitch()', TestsUtils.iterateOverDataMap( Trigonometries.convertWebGLRotationToTopogicalYawPitch ), TestsUtils.createBenchmarkOptions() )
const degreesFromRadiansSuite = Benchmark.Suite( 'Trigonometries.degreesFromRadians', TestsUtils.createSuiteOptions() )
                                     .add( 'degreesFromRadians()', TestsUtils.iterateOverDataMap( Trigonometries.degreesFromRadians ), TestsUtils.createBenchmarkOptions() )
const degreesToRadiansSuite = Benchmark.Suite( 'Trigonometries.degreesToRadians', TestsUtils.createSuiteOptions() )
                                     .add( 'degreesToRadians()', TestsUtils.iterateOverDataMap( Trigonometries.degreesToRadians ), TestsUtils.createBenchmarkOptions() )
const getPitchSuite = Benchmark.Suite( 'Trigonometries.getPitch', TestsUtils.createSuiteOptions() )
                                     .add( 'getPitch()', TestsUtils.iterateOverDataMap( Trigonometries.getPitch ), TestsUtils.createBenchmarkOptions() )
const getYawSuite = Benchmark.Suite( 'Trigonometries.getYaw', TestsUtils.createSuiteOptions() )
                                     .add( 'getYaw()', TestsUtils.iterateOverDataMap( Trigonometries.getYaw ), TestsUtils.createBenchmarkOptions() )
const radiansFromDegreesSuite = Benchmark.Suite( 'Trigonometries.radiansFromDegrees', TestsUtils.createSuiteOptions() )
                                     .add( 'radiansFromDegrees()', TestsUtils.iterateOverDataMap( Trigonometries.radiansFromDegrees ), TestsUtils.createBenchmarkOptions() )
const radiansToDegreesSuite = Benchmark.Suite( 'Trigonometries.radiansToDegrees', TestsUtils.createSuiteOptions() )
                                     .add( 'radiansToDegrees()', TestsUtils.iterateOverDataMap( Trigonometries.radiansToDegrees ), TestsUtils.createBenchmarkOptions() )

export { convertWebGLRotationToTopogicalYawPitchSuite,degreesFromRadiansSuite,degreesToRadiansSuite,getPitchSuite,getYawSuite,radiansFromDegreesSuite,radiansToDegreesSuite }

