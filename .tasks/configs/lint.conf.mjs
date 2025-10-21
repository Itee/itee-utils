const lintConf = [
    'configs/**/*.js',
    'sources/**/*.js',
    '!sources/scripts/*.js',
    'tests/**/*.js',
    '!tests/bundles/**/*.js',
    '!tests/**/builds/*.js'
]

export { lintConf }