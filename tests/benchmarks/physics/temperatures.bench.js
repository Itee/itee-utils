
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Temperatures from '../../../sources/physics/temperatures.js'

const celsiusToFahrenheitSuite = Benchmark.Suite( 'Temperatures.celsiusToFahrenheit', TestsUtils.createSuiteOptions() )
                                     .add( 'celsiusToFahrenheit()', TestsUtils.iterateOverDataMap( Temperatures.celsiusToFahrenheit ), TestsUtils.createBenchmarkOptions() )
const celsiusToKelvinSuite = Benchmark.Suite( 'Temperatures.celsiusToKelvin', TestsUtils.createSuiteOptions() )
                                     .add( 'celsiusToKelvin()', TestsUtils.iterateOverDataMap( Temperatures.celsiusToKelvin ), TestsUtils.createBenchmarkOptions() )
const fahrenheitToCelsiusSuite = Benchmark.Suite( 'Temperatures.fahrenheitToCelsius', TestsUtils.createSuiteOptions() )
                                     .add( 'fahrenheitToCelsius()', TestsUtils.iterateOverDataMap( Temperatures.fahrenheitToCelsius ), TestsUtils.createBenchmarkOptions() )
const fahrenheitToKelvinSuite = Benchmark.Suite( 'Temperatures.fahrenheitToKelvin', TestsUtils.createSuiteOptions() )
                                     .add( 'fahrenheitToKelvin()', TestsUtils.iterateOverDataMap( Temperatures.fahrenheitToKelvin ), TestsUtils.createBenchmarkOptions() )
const kelvinToCelsiusSuite = Benchmark.Suite( 'Temperatures.kelvinToCelsius', TestsUtils.createSuiteOptions() )
                                     .add( 'kelvinToCelsius()', TestsUtils.iterateOverDataMap( Temperatures.kelvinToCelsius ), TestsUtils.createBenchmarkOptions() )
const kelvinToFahrenheitSuite = Benchmark.Suite( 'Temperatures.kelvinToFahrenheit', TestsUtils.createSuiteOptions() )
                                     .add( 'kelvinToFahrenheit()', TestsUtils.iterateOverDataMap( Temperatures.kelvinToFahrenheit ), TestsUtils.createBenchmarkOptions() )

export { celsiusToFahrenheitSuite,celsiusToKelvinSuite,fahrenheitToCelsiusSuite,fahrenheitToKelvinSuite,kelvinToCelsiusSuite,kelvinToFahrenheitSuite }

