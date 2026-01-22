import { createRollupConfigs } from '@itee/tasks/sources/utils/builds.mjs'

export default createRollupConfigs( {
    externalMap: {
        'esm':  [ 'fs', 'path', 'itee-validators' ],
        'cjs':  [ 'fs', 'path', 'itee-validators' ],
        'iife': [ 'itee-validators' ],
    }
} )
