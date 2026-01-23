import { createRollupConfigs } from '@itee/tasks/sources/utils/builds.mjs'

export default createRollupConfigs( {
    externalMap: {
        'esm':  [
            'node:fs',
            'node:path',
            'itee-validators'
        ],
        'cjs':  [
            'node:fs',
            'node:path',
            'itee-validators'
        ],
        'iife': [
            'itee-validators'
        ],
    }
} )
