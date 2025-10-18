
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as objectsNamespace from '../../../sources/cores/objects.js'

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

