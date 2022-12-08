
import Benchmark      from 'benchmark'
import { TestsUtils } from '../../../sources/testings/benchmarks'
import * as Files from '../../../sources/file-system/files.js'

const excludesFilesPathsSuite = Benchmark.Suite( 'Files.excludesFilesPaths', TestsUtils.createSuiteOptions() )
                                     .add( 'excludesFilesPaths()', TestsUtils.iterateOverDataMap( Files.excludesFilesPaths ), TestsUtils.createBenchmarkOptions() )
const fileExistForPathSuite = Benchmark.Suite( 'Files.fileExistForPath', TestsUtils.createSuiteOptions() )
                                     .add( 'fileExistForPath()', TestsUtils.iterateOverDataMap( Files.fileExistForPath ), TestsUtils.createBenchmarkOptions() )
const filterJavascriptFilesSuite = Benchmark.Suite( 'Files.filterJavascriptFiles', TestsUtils.createSuiteOptions() )
                                     .add( 'filterJavascriptFiles()', TestsUtils.iterateOverDataMap( Files.filterJavascriptFiles ), TestsUtils.createBenchmarkOptions() )
const getFileForPathSuite = Benchmark.Suite( 'Files.getFileForPath', TestsUtils.createSuiteOptions() )
                                     .add( 'getFileForPath()', TestsUtils.iterateOverDataMap( Files.getFileForPath ), TestsUtils.createBenchmarkOptions() )
const getFilesPathsUnderSuite = Benchmark.Suite( 'Files.getFilesPathsUnder', TestsUtils.createSuiteOptions() )
                                     .add( 'getFilesPathsUnder()', TestsUtils.iterateOverDataMap( Files.getFilesPathsUnder ), TestsUtils.createBenchmarkOptions() )
                                     .add( 'getFilesPathsUnder_1()', TestsUtils.iterateOverDataMap( Files.getFilesPathsUnder_1 ), TestsUtils.createBenchmarkOptions() )
const getPathsUnderSuite = Benchmark.Suite( 'Files.getPathsUnder', TestsUtils.createSuiteOptions() )
                                     .add( 'getPathsUnder()', TestsUtils.iterateOverDataMap( Files.getPathsUnder ), TestsUtils.createBenchmarkOptions() )
const getUncommentedFileForPathSuite = Benchmark.Suite( 'Files.getUncommentedFileForPath', TestsUtils.createSuiteOptions() )
                                     .add( 'getUncommentedFileForPath()', TestsUtils.iterateOverDataMap( Files.getUncommentedFileForPath ), TestsUtils.createBenchmarkOptions() )

export { excludesFilesPathsSuite,fileExistForPathSuite,filterJavascriptFilesSuite,getFileForPathSuite,getFilesPathsUnderSuite,getPathsUnderSuite,getUncommentedFileForPathSuite }

