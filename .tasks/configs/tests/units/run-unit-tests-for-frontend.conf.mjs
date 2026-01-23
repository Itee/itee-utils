import { default as config } from '@itee/tasks/sources/tests/units/run-unit-tests-for-frontend.conf.mjs'

config.files.push('!tests/units/file-system/**')

export default config