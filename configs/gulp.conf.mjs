import { readFileSync } from 'fs'

const packageInfos = JSON.parse( readFileSync(
    new URL( '../package.json', import.meta.url )
) )

const config = {
    'clean':              [
        './builds',
        './tests/units/builds',
        './tests/benchmarks/builds',
        './docs'
    ],
    'lint':               [
        'configs/**/*.js',
        'sources/**/*.js',
        '!sources/scripts/*.js',
        'tests/**/*.js',
        '!tests/bundles/**/*.js',
        '!tests/**/builds/*.js'
    ],
    'doc':                [
        'README.md',
        'gulpfile.mjs',
        './configs/*.js',
        './sources/**/*.js',
        './tests/**/*.js'
    ],
    'check-bundling':     [
        `${ packageInfos.name }.js`,
        'LineFileSplitter.js'
    ],
    'compute-unit-tests': [
        `${ packageInfos.name }.js`,
        'LineFileSplitter.js',
        'benchmarks.js',
        'primitives.js'
    ],
    'compute-benchmarks': [
        `${ packageInfos.name }.js`,
        'LineFileSplitter.js',
        'benchmarks.js',
        'primitives.js'
    ]
}

function getGulpConfigForTask( taskName ) {

    return config[ taskName ]

}

export { getGulpConfigForTask }