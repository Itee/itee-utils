import * as temperaturesNamespace from '../../../sources/physics/temperatures.js'
import { getBenchmarkPackage } from '../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const celsiusToKelvinSuite = Benchmark.Suite( 'temperaturesNamespace.celsiusToKelvin', Testing.createSuiteOptions() )
                                     .add( 'celsiusToKelvin()', Testing.iterateOverDataMap( temperaturesNamespace.celsiusToKelvin ), Testing.createBenchmarkOptions() )

const celsiusToFahrenheitSuite = Benchmark.Suite( 'temperaturesNamespace.celsiusToFahrenheit', Testing.createSuiteOptions() )
                                     .add( 'celsiusToFahrenheit()', Testing.iterateOverDataMap( temperaturesNamespace.celsiusToFahrenheit ), Testing.createBenchmarkOptions() )

const fahrenheitToCelsiusSuite = Benchmark.Suite( 'temperaturesNamespace.fahrenheitToCelsius', Testing.createSuiteOptions() )
                                     .add( 'fahrenheitToCelsius()', Testing.iterateOverDataMap( temperaturesNamespace.fahrenheitToCelsius ), Testing.createBenchmarkOptions() )

const fahrenheitToKelvinSuite = Benchmark.Suite( 'temperaturesNamespace.fahrenheitToKelvin', Testing.createSuiteOptions() )
                                     .add( 'fahrenheitToKelvin()', Testing.iterateOverDataMap( temperaturesNamespace.fahrenheitToKelvin ), Testing.createBenchmarkOptions() )

const kelvinToCelsiusSuite = Benchmark.Suite( 'temperaturesNamespace.kelvinToCelsius', Testing.createSuiteOptions() )
                                     .add( 'kelvinToCelsius()', Testing.iterateOverDataMap( temperaturesNamespace.kelvinToCelsius ), Testing.createBenchmarkOptions() )

const kelvinToFahrenheitSuite = Benchmark.Suite( 'temperaturesNamespace.kelvinToFahrenheit', Testing.createSuiteOptions() )
                                     .add( 'kelvinToFahrenheit()', Testing.iterateOverDataMap( temperaturesNamespace.kelvinToFahrenheit ), Testing.createBenchmarkOptions() )

export { celsiusToKelvinSuite,celsiusToFahrenheitSuite,fahrenheitToCelsiusSuite,fahrenheitToKelvinSuite,kelvinToCelsiusSuite,kelvinToFahrenheitSuite }

