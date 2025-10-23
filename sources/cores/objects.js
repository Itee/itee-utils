/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/objects
 * @description Export the utilities methods about objects
 */

import {
    isDefined,
    isNotArray,
    isNotDefined,
    isNotObject,
    isObject,
    isUndefined
} from 'itee-validators'

/**
 *
 * @param {array.<*>} a
 * @returns {array.<*>}
 */
export function uniq( a ) {
    if ( isNotArray( a ) ) { return }

    const seen = {}
    return a.filter( item => Object.prototype.hasOwnProperty.call( seen, item ) ? false : ( seen[ item ] = true ) )

}

/**
 *
 * @param {object} target
 * @param {object} source
 * @return {object}
 */
export function extend( target, source ) {

    let output

    if ( isObject( target ) && isNotDefined( source ) ) {

        output = Object.assign( {}, target )

    } else if ( isNotDefined( target ) && isObject( source ) ) {

        output = Object.assign( {}, source )

    } else if ( isObject( target ) && isObject( source ) ) {

        output = Object.assign( {}, target )

        const keys = Object.keys( source )

        for ( let i = 0, n = keys.length ; i < n ; ++i ) {

            let key = keys[ i ]

            if ( isObject( source[ key ] ) ) {

                if ( key in target ) {

                    output[ key ] = extend( target[ key ], source[ key ] )

                } else {

                    Object.assign( output, { [ key ]: source[ key ] } )

                }

            } else {

                Object.assign( output, { [ key ]: source[ key ] } )

            }

        }

    } else {

        output = null

    }

    return output

}

/**
 * Remove old inheritance stuff due to es6 class !
 */
export function serializeObject() {

    //    var object = {}
    //    var a = this.serializeArray()
    //
    //    $.each( a, function () {
    //        if ( object[ this.name ] !== undefined ) {
    //            if ( !object[ this.name ].push ) {
    //                object[ this.name ] = [ object[ this.name ] ]
    //            }
    //            object[ this.name ].push( this.value || '' )
    //        } else {
    //            object[ this.name ] = this.value || ''
    //        }
    //    } )
    //
    //    return object

}

/**
 *
 * @param {class} ChildClass
 * @param {class} ParentClassOrObject
 * @return {*}
 */
export function extendObject( ChildClass, ParentClassOrObject ) {
    if ( isUndefined( ChildClass ) ) { return }
    if ( isUndefined( ParentClassOrObject ) ) { return }

    if ( ChildClass.constructor === Function && ParentClassOrObject.constructor === Function ) {

        // Normal Inheritance
        ChildClass.prototype             = new ParentClassOrObject()
        ChildClass.prototype.parent      = ParentClassOrObject.prototype
        ChildClass.prototype.constructor = ChildClass

    } else if ( ChildClass.constructor === Function && ParentClassOrObject.constructor === Object ) {

        // Pure Virtual Inheritance
        ChildClass.prototype             = ParentClassOrObject
        ChildClass.prototype.parent      = ParentClassOrObject
        ChildClass.prototype.constructor = ChildClass

    } else if ( ChildClass.constructor === Object && ParentClassOrObject.constructor === Object ) {

        //Object Concatenation Inheritance
        for ( let attribute in ParentClassOrObject ) {

            if ( Object.prototype.hasOwnProperty.call( ChildClass, attribute ) ) { // We are sure that obj[key] belongs to the object and was not inherited.

                if ( ParentClassOrObject[ attribute ].constructor === Object || ParentClassOrObject[ attribute ].constructor === Array ) {

                    ChildClass[ attribute ] = extendObject( ChildClass[ attribute ], ParentClassOrObject[ attribute ] )

                } else {

                    ChildClass[ attribute ] = ParentClassOrObject[ attribute ]

                }

            } else {

                ChildClass[ attribute ] = ParentClassOrObject[ attribute ]

            }

        }

    } else if ( ChildClass.constructor === Array && ParentClassOrObject.constructor === Array ) {

        ChildClass = ChildClass.concat( ParentClassOrObject )

    } else if ( ChildClass.constructor === Object && ParentClassOrObject.constructor === Array ||
        ChildClass.constructor === Array && ParentClassOrObject.constructor === Object ) {

        throw new Error( 'Cannot perform extend of object with an array' )

    } else {

        throw new Error( 'Cannot perform extend given parameters...' )

    }

    return ChildClass

}

/**
 *
 * @param {cloudpoint} particles
 * @param {3dpath} path
 * @param {number} interval
 */
export function createInterval( particles, path, interval ) {
    if ( !particles ) {return}
    if ( !path ) {return}
    if ( !interval ) {return}

    let globalOffset = 0

    function moveParticlesOnPath() {

        const moveOffset             = 0.1
        const DELTA_BETWEEN_PARTICLE = 1 // meter

        if ( globalOffset >= DELTA_BETWEEN_PARTICLE ) {
            globalOffset = 0
        } else if ( globalOffset + moveOffset > DELTA_BETWEEN_PARTICLE ) { // Avoid final gap jump before new "loop"
            globalOffset = DELTA_BETWEEN_PARTICLE
        } else {
            globalOffset += moveOffset
        }

        const pathLength     = path.getLength()
        let localOffset      = globalOffset
        let normalizedOffset = undefined
        let particle         = undefined
        let newPosition      = undefined

        for ( let i = 0, numberOfParticles = particles.children.length ; i < numberOfParticles ; i++ ) {

            particle         = particles.children[ i ]
            normalizedOffset = localOffset / pathLength

            // End of path ( last particle could go to void, but got an error with getPointAt)
            if ( normalizedOffset > 1 ) {
                normalizedOffset = 0
            }

            newPosition = path.getPointAt( normalizedOffset )
            newPosition.y += 0.1

            particle.position.copy( newPosition )

            localOffset += DELTA_BETWEEN_PARTICLE

        }

    }

    setInterval( moveParticlesOnPath, interval )

}

/**
 *
 * @param {object} enumValues
 * @method toString - return a string representation of the enum
 * @method includes - check if given value is one of the enum
 * @method keys - return an array containing all enum keys
 * @method values - return an array containing all enum values
 * @method entries - return an array containing all enum entries (key -> value)
 *
 * @example {@lang javascript}
 * const Meal = toEnum( {
 *     Food: 'Tartiflette',
 *     Drink: 'Saint-Emilion',
 *     Dessert: 'Mousse au chocolat'
 * } )
 *
 * if( Foo.includes('Tartiflette') ) {
 *     // Happy
 * }
 *
 * const myDrink = 'coke'
 * if( myDrink === Meal.Drink ) {
 *     // Cheers
 * } else {
 *     // Your life is a pain
 * }
 *
 * const MealTypes = Meal.types
 * // ['Tartiflette', 'Saint-Emilion', 'Mousse au chocolat' ]
 */
export function toEnum( enumValues ) {
    if ( isNotObject( enumValues ) ) { return }
    if ( isDefined( enumValues.toString ) ) {
        const descriptor = Object.getOwnPropertyDescriptor( enumValues, 'toString' )
        if ( isDefined( descriptor ) && descriptor.configurable === false ) {
            return
        }
    }

    return /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperties( enumValues, {
        toString: {
            configurable: false,
            enumerable:   false,
            writable:     false,
            value() {

                const keys = Object.keys( this )
                let result = ''
                for ( let index = 0, numberOfValues = keys.length ; index < numberOfValues ; index++ ) {
                    result += `${ keys[ index ] }, `
                }
                result = result.slice( 0, -2 )
                return result

            }
        },
        includes: {
            configurable: false,
            enumerable:   false,
            writable:     false,
            value( key ) {
                return Object.values( this ).includes( key )
            }
        },
        keys: {
            configurable: false,
            enumerable:   false,
            writable:     false,
            value() {
                return Object.keys( this )
            }
        },
        values: {
            configurable: false,
            enumerable:   false,
            writable:     false,
            value() {
                return Object.values( this )
            }
        },
        entries: {
            configurable: false,
            enumerable:   false,
            writable:     false,
            value() {
                return Object.entries( this )
            }
        }
    } ) )

}