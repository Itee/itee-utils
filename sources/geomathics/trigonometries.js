/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/geomathics/trigonometries
 */

export const PI   = Math.PI
export const PI_2 = Math.PI / 2
export const PI_4 = Math.PI / 4

export const DEG_TO_RAD = ( PI / 180 )
export const RAD_TO_DEG = ( 180 / PI )

/**
 *
 * @param degrees
 * @return {number}
 */
export function degreesToRadians ( degrees ) {
    return degrees * DEG_TO_RAD
}

/**
 *
 * @param radians
 * @return {number}
 */
export function degreesFromRadians ( radians ) {
    return radians * RAD_TO_DEG
}

/**
 *
 * @param radians
 * @return {number}
 */
export function radiansToDegrees ( radians ) {
    return radians * RAD_TO_DEG
}

/**
 *
 * @param degrees
 * @return {number}
 */
export function radiansFromDegrees ( degrees ) {
    return degrees * DEG_TO_RAD
}

// PROJECTION 2D/3D
/**
 *
 * @param vector
 * @return {number}
 */
export function getYaw ( vector ) {
    return -Math.atan2( vector.x, vector.z )
}

/**
 *
 * @param vector
 * @return {number}
 */
export function getPitch ( vector ) {
    return Math.asin( vector.y )
}

/**
 *
 * @param vectorDir
 * @return {{yaw: number, pitch: number}}
 */
export function convertWebGLRotationToTopogicalYawPitch ( vectorDir ) {

    function getYaw ( vector ) {
        return Math.atan2( vector.y, vector.x )
    }

    function getPitch ( vector ) {
        return Math.asin( vector.z )
    }

    const topoVectorDir = vectorDir //convertWebglVectorToTopologicVector( vectorDir )

    return {
        yaw:   -( radiansToDegrees( getYaw( topoVectorDir ) ) - 90 ),
        pitch: radiansToDegrees( getPitch( topoVectorDir ) )
    }

}

///**
// * TRIGONOMETRIC CIRCLE CONCEPT WITH INTEGRATED TIMER
// *
// * Provide position on any given referential (starting position)
// * this position is updated every tick on a trigonometric circle of rayon (radius)
// * and give new position in px about this point in current referential.
// *
// * @param settings
// * @constructor
// */
//function TTrigonometricCircle ( settings ) {
//
//    var _ = this;
//
//    _.options = $.extend( {}, TTrigonometricCircle.DEFAULT_SETTINGS, settings );
//
//}
//
//Object.assign( TTrigonometricCircle, {
//
//    /**
//     *
//     */
//    DEFAULT_SETTINGS: {
//        angle:       0,
//        radius:      10
//    }
//
//} )
//
//Object.assign( TTrigonometricCircle.prototype, {
//
//    /**
//     *
//     * @param increment
//     */
//    increment ( increment ) {
//        var _   = this;
//        _.angle = (increment ? _.angle + increment : _.angle + 1);
//        if ( _.angle >= 360 ) {
//            _.angle = 0;
//        }
//    },
//
//    /**
//     *
//     */
//    getRadius () {
//        var _ = this;
//        return _.radius;
//    },
//
//    /**
//     *
//     * @return {number}
//     */
//    getCosinus () {
//        var _ = this;
//        return Math.cos( degreesToRadians( _.angle ) ) * _.radius;
//    },
//
//    /**
//     *
//     * @return {number}
//     */
//    getSinus () {
//        var _ = this;
//        return Math.sin( degreesToRadians( _.angle ) ) * _.radius;
//    }
//
//} )
//
///////////
//
///**
// *
// * @param settings
// * @constructor
// */
//function TTrigonometricCone ( settings ) {
//
//    var _ = this;
//
//    _.model = $.extend( {}, TTrigonometricCone.DEFAULT_SETTINGS, settings );
//}
//
//Object.assign( TTrigonometricCone, {
//
//    /**
//     *
//     */
//    DEFAULT_SETTINGS: {
//        angle:       0,
//        height:      10,
//        radius:      10
//    }
//
//} )
//
//Object.assign( TTrigonometricCone.prototype, {
//
//    /**
//     *
//     * @param increment
//     */
//    increment ( increment ) {
//        var _         = this;
//        _.model.angle = (increment ? _.model.angle + increment : _.model.angle + 1);
//        if ( _.model.angle >= 360 ) {
//            _.model.angle = 0;
//        }
//    },
//
//    /**
//     *
//     */
//    getRadius () {
//        var _ = this;
//        return _.model.radius;
//    },
//
//    /**
//     *
//     * @return {number}
//     */
//    getCosinus () {
//        var _ = this;
//        return Math.cos( degreesToRadians( _.model.angle ) ) * _.model.radius;
//    },
//
//    /**
//     *
//     * @return {number}
//     */
//    getSinus () {
//        var _ = this;
//        return Math.sin( degreesToRadians( _.model.angle ) ) * _.model.radius;
//    },
//
//    /**
//     *
//     * @param height
//     * @return {number}
//     */
//    getCosinusForHeight ( height ) {
//        var _ = this;
//        return Math.cos( degreesToRadians( _.model.angle ) ) * ((_.model.radius / _.model.height) * Math.abs( height ) );
//    },
//
//    /**
//     *
//     * @param height
//     * @return {number}
//     */
//    getSinusForHeight ( height ) {
//        var _ = this;
//        return Math.sin( degreesToRadians( _.model.angle ) ) * ((_.model.radius / _.model.height) * Math.abs( height ));
//    }
//
//} )
