import * as stringsNamespace from '../../../sources/cores/strings.js'
import { getBenchmarkPackage } from '../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const classNameifySuite = Benchmark.Suite( 'stringsNamespace.classNameify', Testing.createSuiteOptions() )
                                     .add( 'classNameify()', Testing.iterateOverDataMap( stringsNamespace.classNameify ), Testing.createBenchmarkOptions() )

const removeDiacriticsSuite = Benchmark.Suite( 'stringsNamespace.removeDiacritics', Testing.createSuiteOptions() )
                                     .add( 'removeDiacritics()', Testing.iterateOverDataMap( stringsNamespace.removeDiacritics ), Testing.createBenchmarkOptions() )

export { classNameifySuite,removeDiacriticsSuite }

