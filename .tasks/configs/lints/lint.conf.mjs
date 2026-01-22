import {
    Configurator,
    RulesSet,
    MochaRecommendedRulesSet,
    SourceBackendRulesSet,
    SourceFrontendRulesSet,
    SourceRulesSet,
    TestBenchmarksRulesSet,
    TestUnitsRulesSet
} from '@itee/tasks/sources/lints/lint.conf.mjs'

SourceRulesSet.rules['no-console'] = 'warn'

const expectedRulesSet = new RulesSet({
    name:  'sources/expected_rules',
    files: [ 'sources/cores/strings.js' ],
    rules: {
        'no-control-regex': 'off'
    }
})

SourceFrontendRulesSet.files   = [
    'sources/times/*.js',
    'sources/cores/objects.js',
    'sources/testings/benchmarks.js'
]
SourceFrontendRulesSet.ignores = [ 'sources/file-system/**' ]

SourceBackendRulesSet.files   = [ 'sources/file-system/**' ]
SourceBackendRulesSet.ignores = [
    'sources/times/*.js',
    'sources/cores/objects.js',
    'sources/testings/benchmarks.js'
]

const toFixRuleSet = new RulesSet({
    name:  'to/fix',
    files: [ 'tests/units/cores/strings.unit.js' ],
    rules: {
        'no-unused-vars': 'warn',
    }
})

Configurator.rulesSets = [
    SourceRulesSet,
    expectedRulesSet,
    SourceFrontendRulesSet,
    SourceBackendRulesSet,
    TestBenchmarksRulesSet,
    TestUnitsRulesSet,
    MochaRecommendedRulesSet,
    toFixRuleSet
]

export default Configurator.getConfig()
