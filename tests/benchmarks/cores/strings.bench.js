import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as stringsNamespace from '../../../sources/cores/strings.js'

const classNameifySuite = Benchmark.Suite( 'stringsNamespace.classNameify', Testing.createSuiteOptions() )
                                     .add( 'classNameify()', Testing.iterateOverDataMap( stringsNamespace.classNameify ), Testing.createBenchmarkOptions() )

const removeDiacriticsSuite = Benchmark.Suite( 'stringsNamespace.removeDiacritics', Testing.createSuiteOptions() )
                                     .add( 'removeDiacritics()', Testing.iterateOverDataMap( stringsNamespace.removeDiacritics ), Testing.createBenchmarkOptions() )

export { classNameifySuite,removeDiacriticsSuite }

