
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Strings from '../../../sources/cores/strings.js'

const classNameifySuite = Benchmark.Suite( 'Strings.classNameify', TestsUtils.createSuiteOptions() )
                                     .add( 'classNameify()', TestsUtils.iterateOverDataMap( Strings.classNameify ), TestsUtils.createBenchmarkOptions() )
const removeDiacriticsSuite = Benchmark.Suite( 'Strings.removeDiacritics', TestsUtils.createSuiteOptions() )
                                     .add( 'removeDiacritics()', TestsUtils.iterateOverDataMap( Strings.removeDiacritics ), TestsUtils.createBenchmarkOptions() )

export { classNameifySuite,removeDiacriticsSuite }

