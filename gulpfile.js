/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 * @module gulpfile
 *
 * @description The gulp tasks file. It allow to run some tasks from command line interface.<br>
 * The available tasks are:
 * <ul>
 * <li>help</li>
 * <li>clean</li>
 * <li>lint</li>
 * <li>doc</li>
 * <li>test</li>
 * <li>build</li>
 * <li>release</li>
 * </ul>
 * You could find a complet explanation about these tasks using: <b>npm run help</b>.
 *
 * @requires {@link module: [gulp]{@link https://github.com/gulpjs/gulp}}
 * @requires {@link module: [gulp-util]{@link https://github.com/gulpjs/gulp-util}}
 * @requires {@link module: [gulp-jsdoc3]{@link https://github.com/mlucool/gulp-jsdoc3}}
 * @requires {@link module: [gulp-eslint]{@link https://github.com/adametry/gulp-eslint}}
 * @requires {@link module: [gulp-inject-string]{@link https://github.com/mikehazell/gulp-inject-string}}
 * @requires {@link module: [gulp-replace]{@link https://github.com/lazd/gulp-replace}}
 * @requires {@link module: [del]{@link https://github.com/sindresorhus/del}}
 * @requires {@link module: [run-sequence]{@link https://github.com/OverZealous/run-sequence}}
 * @requires {@link module: [rollup]{@link https://github.com/rollup/rollup}}
 */

/* eslint-env node */

const gulp      = require( 'gulp' )
const jsdoc     = require( 'gulp-jsdoc3' )
const eslint    = require( 'gulp-eslint' )
const del       = require( 'del' )
const parseArgs = require( 'minimist' )
const rollup    = require( 'rollup' )
const path      = require( 'path' )
const karma     = require( 'karma' )
const log       = require( 'fancy-log' )
const colors    = require( 'ansi-colors' )
const red       = colors.red
const green     = colors.green
const blue      = colors.blue
const cyan      = colors.cyan
const yellow    = colors.yellow
const magenta   = colors.magenta

/**
 * @method npm run help ( default )
 * @description Will display the help in console
 */
gulp.task( 'help', ( done ) => {

    log( '====================================================' )
    log( '|                                                  |' )
    log( '|                Itee Client - HELP                |' )
    log( '|                                                  |' )
    log( '====================================================' )
    log( '' )
    log( 'Available commands are:' )
    log( blue( 'npm run' ), cyan( 'help' ), ' - Display this help.' )
    log( blue( 'npm run' ), cyan( 'clean' ), ' - Will delete builds and temporary folders.' )
    log( blue( 'npm run' ), cyan( 'lint' ), ' - Will run the eslint in pedantic mode with auto fix when possible.' )
    log( blue( 'npm run' ), cyan( 'doc' ), ' - Will run jsdoc, and create documentation under `documentation` folder, using the docdash theme' )
    log( blue( 'npm run' ), cyan( 'test' ), ' - Will run the test framworks (unit and bench), and create reports under `test/report` folder, using the mochawesome theme' )
    log( blue( 'npm run' ), cyan( 'unit' ), ' - Will run the karma server for unit tests.', red( '( /!\\ Deprecated: will be remove as soon as test script is fixed !!! )' ) )
    log( blue( 'npm run' ), cyan( 'bench' ), ' - Will run the karma server for benchmarks.', red( '( /!\\ Deprecated: will be remove as soon as test script is fixed !!! )' ) )
    log( blue( 'npm run' ), cyan( 'build' ), yellow( '--' ), green( '<options>' ), ' - Will build the application for development and/or production environments.', yellow( 'Note: The two dash are only required if you provide options !' ) )
    log( '  The available options are:' )
    log( '      ', green( '-d' ), 'or', green( '--dev' ), ' - to build in development environment' )
    log( '      ', green( '-p' ), 'or', green( '--prod' ), ' - to build in production environment' )
    log( '       (in case no environment is provide both will be compile)' )
    log( '' )
    log( '      ', green( '-f:' ), magenta( '<format>' ), 'or', green( '--format:' ), magenta( '<format>' ), ' - to specify the output build type.' )
    log( '       where format could be any of:', magenta( 'amd' ), magenta( 'cjs' ), magenta( 'es' ), magenta( 'iife' ), magenta( 'umd' ) )
    log( '' )
    log( '      ', green( '-s' ), 'or', green( '--sourcemap' ), ' - to build with related source map' )
    log( '' )
    log( blue( 'npm run' ), cyan( 'release' ), ' - Will run all the lint, test stuff, and if succeed will build the application in both environments.' )
    log( '' )
    log( 'In case you have', blue( 'gulp' ), 'installed globally, you could use also:' )
    log( blue( 'gulp' ), cyan( 'command' ), ' - It will perform the command like using "npm run" but with less characters to type... Because you\'re a developer, right ?' )

    done()

} )

/**
 * @method npm run clean
 * @description Will delete builds and temporary folders
 */
gulp.task( 'clean', () => {

    return del( [
        './builds',
        './tests/builds',
        './documentation'
    ] )

} )

/**
 * @method npm run lint
 * @description Will lint the sources files and try to fix the style when possible
 */
gulp.task( 'lint', () => {

    // Todo: split between source and test with differents env
    const filesToLint = [
        'gulpfile.js',
        'sources/**/*',
        'tests/**/*.js'
    ]

    return gulp.src( filesToLint, { base: './' } )
               .pipe( eslint( {
                   allowInlineConfig: true,
                   globals:           [],
                   fix:               true,
                   quiet:             false,
                   envs:              [],
                   configFile:        './configs/eslint.conf.js',
                   parserOptions:     {},
                   plugins:           [],
                   rules:             {},
                   useEslintrc:       false
               } ) )
               .pipe( eslint.format( 'stylish' ) )
               .pipe( gulp.dest( '.' ) )
               .pipe( eslint.failAfterError() )

} )

/**
 * @method npm run doc
 * @description Will generate this documentation
 */
gulp.task( 'doc', ( done ) => {

    const config = require( './configs/jsdoc.conf' )
    const files  = [
        'README.md',
        'gulpfile.js',
        './configs/*.js',
        './sources/**/*.js',
        './tests/**/*.js'
    ]

    gulp.src( files, { read: false } )
        .pipe( jsdoc( config, done ) )

} )

/**
 * @method npm run unit
 * @description Will run unit tests using karma
 */
gulp.task( 'unit', ( done ) => {

    const karmaServer = new karma.Server( {
        configFile: `${__dirname}/configs/karma.units.conf.js`,
        singleRun:  true
    }, ( exitCode ) => {

        if ( exitCode !== 0 ) {
            done( `Karma server exit with code ${exitCode}` )
        } else {
            log( `Karma server exit with code ${exitCode}` )
            done()
        }

    } )

    karmaServer.on( 'browser_error', ( browser, error ) => {
        log( red( error.message ) )
    } )

    karmaServer.start()

} )

/**
 * @method npm run bench
 * @description Will run benchmarks using karma
 */
gulp.task( 'bench', ( done ) => {

    const karmaServer = new karma.Server( {
        configFile: `${__dirname}/configs/karma.benchs.conf.js`,
        singleRun:  true
    }, ( exitCode ) => {

        if ( exitCode !== 0 ) {
            done( `Karma server exit with code ${exitCode}` )
        } else {
            log( `Karma server exit with code ${exitCode}` )
            done()
        }

    } )

    karmaServer.on( 'browser_error', ( browser, error ) => {
        log( red( error.message ) )
    } )

    karmaServer.start()

} )

/**
 * @method npm run test
 * @description Will run unit tests and benchmarks using karma
 */
gulp.task( 'test', gulp.series( 'unit', 'bench' ) )

///
/// BUILDS
///

gulp.task( 'build-test', ( done ) => {

    const configs = require( './configs/rollup.test.conf' )()

    nextBuild()

    function nextBuild ( error ) {
        'use strict'

        if ( error ) {

            done( error )

        } else if ( configs.length === 0 ) {

            done()

        } else {

            const config = configs.pop()
            log( `Building ${config.output.file}` )

            rollup.rollup( config )
                  .then( ( bundle ) => { return bundle.write( config.output ) } )
                  .then( () => { nextBuild() } )
                  .catch( nextBuild )

        }

    }

} )

/**
 * @method npm run build
 * @description Will build itee client module using optional arguments, running clean and _extendThree tasks before. See help to further informations.
 */
gulp.task( 'build', ( done ) => {

    const options = parseArgs( process.argv, {
        string:  [ 'n', 'i', 'f', 'e' ],
        boolean: [ 's', 't' ],
        default: {
            n: 'Itee.Utils',
            i: path.join( __dirname, 'sources/itee-utils.js' ),
            o: path.join( __dirname, 'builds' ),
            f: 'esm,cjs,iife,umd',
            e: 'dev,prod',
            s: true,
            t: true
        },
        alias: {
            n: 'name',
            i: 'input',
            o: 'output',
            f: 'format',
            e: 'env',
            s: 'sourcemap',
            t: 'treeshake'
        }
    } )

    const configs = require( './configs/rollup.conf' )( options )

    nextBuild()

    function nextBuild ( error ) {
        'use strict'

        if ( error ) {

            done( error )

        } else if ( configs.length === 0 ) {

            done()

        } else {

            const config = configs.pop()
            log( `Building ${config.output.file}` )

            rollup.rollup( config )
                  .then( ( bundle ) => { return bundle.write( config.output ) } )
                  .then( () => { nextBuild() } )
                  .catch( nextBuild )

        }

    }

} )


/**
 * Add watcher to assets javascript files and run build-js on file change
 */
gulp.task( 'build-auto', gulp.series( 'build', ( done ) => {

    log( 'Add watcher to javascript files !' )

    gulp.watch( './sources/**/*.js', [ 'build' ] )
    done()

} ) )

/**
 * @method npm run release
 * @description Will perform a complet release of the library.
 */
gulp.task( 'release', gulp.series( 'clean', 'lint', 'doc', 'build-test', 'test', 'build' ) )

//---------

gulp.task( 'default', gulp.series( 'help' ) )
