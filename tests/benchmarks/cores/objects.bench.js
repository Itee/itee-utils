import * as objectsNamespace from '../../../sources/cores/objects.js'
import { getBenchmarkPackage } from '../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const uniqSuite = Benchmark.Suite( 'objectsNamespace.uniq', Testing.createSuiteOptions() )
                                     .add( 'uniq()', Testing.iterateOverDataMap( objectsNamespace.uniq ), Testing.createBenchmarkOptions() )

const extendSuite = Benchmark.Suite( 'objectsNamespace.extend', Testing.createSuiteOptions() )
                                     .add( 'extend()', Testing.iterateOverDataMap( objectsNamespace.extend ), Testing.createBenchmarkOptions() )

const serializeObjectSuite = Benchmark.Suite( 'objectsNamespace.serializeObject', Testing.createSuiteOptions() )
                                     .add( 'serializeObject()', Testing.iterateOverDataMap( objectsNamespace.serializeObject ), Testing.createBenchmarkOptions() )

const extendObjectSuite = Benchmark.Suite( 'objectsNamespace.extendObject', Testing.createSuiteOptions() )
                                     .add( 'extendObject()', Testing.iterateOverDataMap( objectsNamespace.extendObject ), Testing.createBenchmarkOptions() )

const createIntervalSuite = Benchmark.Suite( 'objectsNamespace.createInterval', Testing.createSuiteOptions() )
                                     .add( 'createInterval()', Testing.iterateOverDataMap( objectsNamespace.createInterval ), Testing.createBenchmarkOptions() )

const toEnumSuite = Benchmark.Suite( 'objectsNamespace.toEnum', Testing.createSuiteOptions() )
                                     .add( 'toEnum()', Testing.iterateOverDataMap( objectsNamespace.toEnum ), Testing.createBenchmarkOptions() )

export { uniqSuite,extendSuite,serializeObjectSuite,extendObjectSuite,createIntervalSuite,toEnumSuite }

