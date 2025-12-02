/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/itee-util
 * @description The main entry point for Itee-Utils, it contains all exports of the library
 */

export * from './cores/_cores.js'
export * from './geomathics/_geomathics.js'
export * from './physics/_physics.js'
export * from './testings/_testings.js'

// #if IS_BACKEND_SPECIFIC
export * from './file-system/_file-system.js'
// #endif
