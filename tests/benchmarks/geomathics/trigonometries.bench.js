
import Benchmark   from 'benchmark'
//import { Testing } from 'itee-utils'
import { Testing }      from '../../../sources/testings/benchmarks'
import * as trigonometriesNamespace from '../../../sources/geomathics/trigonometries.js'

const degreesToRadiansSuite = Benchmark.Suite( 'trigonometriesNamespace.degreesToRadians', Testing.createSuiteOptions() )
                                     .add( 'degreesToRadians()', Testing.iterateOverDataMap( trigonometriesNamespace.degreesToRadians ), Testing.createBenchmarkOptions() )

const degreesFromRadiansSuite = Benchmark.Suite( 'trigonometriesNamespace.degreesFromRadians', Testing.createSuiteOptions() )
                                     .add( 'degreesFromRadians()', Testing.iterateOverDataMap( trigonometriesNamespace.degreesFromRadians ), Testing.createBenchmarkOptions() )

const radiansToDegreesSuite = Benchmark.Suite( 'trigonometriesNamespace.radiansToDegrees', Testing.createSuiteOptions() )
                                     .add( 'radiansToDegrees()', Testing.iterateOverDataMap( trigonometriesNamespace.radiansToDegrees ), Testing.createBenchmarkOptions() )

const radiansFromDegreesSuite = Benchmark.Suite( 'trigonometriesNamespace.radiansFromDegrees', Testing.createSuiteOptions() )
                                     .add( 'radiansFromDegrees()', Testing.iterateOverDataMap( trigonometriesNamespace.radiansFromDegrees ), Testing.createBenchmarkOptions() )

const getYawSuite = Benchmark.Suite( 'trigonometriesNamespace.getYaw', Testing.createSuiteOptions() )
                                     .add( 'getYaw()', Testing.iterateOverDataMap( trigonometriesNamespace.getYaw ), Testing.createBenchmarkOptions() )

const getPitchSuite = Benchmark.Suite( 'trigonometriesNamespace.getPitch', Testing.createSuiteOptions() )
                                     .add( 'getPitch()', Testing.iterateOverDataMap( trigonometriesNamespace.getPitch ), Testing.createBenchmarkOptions() )

const convertWebGLRotationToTopogicalYawPitchSuite = Benchmark.Suite( 'trigonometriesNamespace.convertWebGLRotationToTopogicalYawPitch', Testing.createSuiteOptions() )
                                     .add( 'convertWebGLRotationToTopogicalYawPitch()', Testing.iterateOverDataMap( trigonometriesNamespace.convertWebGLRotationToTopogicalYawPitch ), Testing.createBenchmarkOptions() )

export { degreesToRadiansSuite,degreesFromRadiansSuite,radiansToDegreesSuite,radiansFromDegreesSuite,getYawSuite,getPitchSuite,convertWebGLRotationToTopogicalYawPitchSuite }

