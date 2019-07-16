/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects
 * @description Export the utilities methods about objects
 */

import {
    isNotDefined,
    isObject
} from 'itee-validators'

export function uniq ( a ) {
    var seen = {}
    return a.filter( function ( item ) {
        return seen.hasOwnProperty( item ) ? false : ( seen[ item ] = true )
    } )
}

/**
 *
 * @param target
 * @param source
 * @return {*}
 */
export function extend ( target, source ) {

    let output = undefined

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
export function serializeObject () {

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
 * @param ChildClass
 * @param ParentClassOrObject
 * @return {*}
 */
export function extendObject ( ChildClass, ParentClassOrObject ) {

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

            if ( ChildClass.hasOwnProperty( attribute ) ) { // We are sure that obj[key] belongs to the object and was not inherited.

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
 * @param particles
 * @param path
 * @param interval
 */
export function createInterval ( particles, path, interval ) {

    var globalOffset = 0

    setInterval( function () {

        var moveOffset             = 0.1
        var DELTA_BETWEEN_PARTICLE = 1 // meter

        if ( globalOffset >= DELTA_BETWEEN_PARTICLE ) {
            globalOffset = 0
        } else if ( globalOffset + moveOffset > DELTA_BETWEEN_PARTICLE ) { // Avoid final gap jump before new "loop"
            globalOffset = DELTA_BETWEEN_PARTICLE
        } else {
            globalOffset += moveOffset
        }

        var pathLength       = path.getLength()
        var localOffset      = globalOffset
        var normalizedOffset = undefined
        var particle         = undefined
        var newPosition      = undefined

        for ( var i = 0, numberOfParticles = particles.children.length ; i < numberOfParticles ; i++ ) {

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

    }, interval )

}

export function toEnum ( enumValues ) {

    return Object.freeze( Object.defineProperty( enumValues, 'toString', {
        configurable: false,
        enumerable:   false,
        writable:     false,
        value:        function _toString () {

            const keys = Object.keys( this )
            let result = ''
            for ( let index = 0, numberOfValues = keys.length ; index < numberOfValues ; index++ ) {
                result += `${keys[ index ]}, `
            }
            result = result.slice( 0, -2 )
            return result

        }
    } ) )

}
