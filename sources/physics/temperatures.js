/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @description Export the utilities methods about temperatures
 * @requires {@link module:sources/cores/numbers}
 */

import {
    isNotEmpty,
    isNotTemperature,
    isNumber
} from '@itee/validators'

export const FAHRENHEIT_CELSIUS_COEFFICIENT = 1.8
export const FAHRENHEIT_CELSIUS_CONSTANTE   = 32.0
export const KELVIN_CELSIUS_CONSTANTE       = 273.14999999955

/**
 *
 * @param {number} celsius
 * @param {integer} precisionPointAt
 * @return {string}
 */
export function celsiusToKelvin( celsius, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( celsius ) ) { return }
//    if ( isNotTemperature( celsius ) ) { throw new Error( 'Require first operand as an temperature in celsius !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 )

    // Sets the decimal point for the temperature conversion equation
    return ( celsius + KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

/**
 *
 * @param {number} celsius
 * @param {integer} precisionPointAt
 * @return {string}
 */
export function celsiusToFahrenheit( celsius, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( celsius ) ) { return }
//    if ( isNotTemperature( celsius ) ) { throw new Error( 'Require first operand as an temperature in celsius !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 )

    // Sets the decimal point for the temperature conversion equation
    return ( celsius * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

/**
 *
 * @param {number} fahrenheit
 * @param {integer} precisionPointAt
 * @return {string}
 */
export function fahrenheitToCelsius( fahrenheit, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( fahrenheit ) ) { return }
//    if ( isNotTemperature( fahrenheit ) ) { throw new Error( 'Require first operand as an temperature in fahrenheit !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 )

    // Sets the decimal point for the temperature conversion equation
    return ( ( fahrenheit - FAHRENHEIT_CELSIUS_CONSTANTE ) / FAHRENHEIT_CELSIUS_COEFFICIENT ).toFixed( _precisionPointAt )

}

/**
 *
 * @param {number} fahrenheit
 * @param {integer} precisionPointAt
 * @return {string}
 */
export function fahrenheitToKelvin( fahrenheit, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( fahrenheit ) ) { return }
//    if ( isNotTemperature( fahrenheit ) ) { throw new Error( 'Require first operand as an temperature in fahrenheit !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 )

    // Sets the decimal point for the temperature conversion equation
    return ( ( ( fahrenheit - FAHRENHEIT_CELSIUS_CONSTANTE ) / FAHRENHEIT_CELSIUS_COEFFICIENT ) + KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

/**
 *
 * @param {number} kelvin
 * @param {integer} precisionPointAt
 * @return {string}
 */
export function kelvinToCelsius( kelvin, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( kelvin ) ) { return }
//    if ( isNotTemperature( kelvin ) ) { throw new Error( 'Require first operand as an temperature in kelvin !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 )

    // Sets the decimal point for the temperature conversion equation
    return ( kelvin - KELVIN_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}

/**
 *
 * @param {number} kelvin
 * @param {integer} precisionPointAt
 * @return {string}
 */
export function kelvinToFahrenheit( kelvin, precisionPointAt ) {

    //Check if required parameter is valid
    if ( isNotTemperature( kelvin ) ) { return }
//    if ( isNotTemperature( kelvin ) ) { throw new Error( 'Require first operand as an temperature in kelvin !' ) }

    //Check optional parameter precisionPointAt and set it to 2 by default
    const _precisionPointAt = ( isNotEmpty( precisionPointAt ) && isNumber( precisionPointAt ) ? precisionPointAt : 2 )

    // Sets the decimal point for the temperature conversion equation
    return ( ( kelvin - KELVIN_CELSIUS_CONSTANTE ) * FAHRENHEIT_CELSIUS_COEFFICIENT + FAHRENHEIT_CELSIUS_CONSTANTE ).toFixed( _precisionPointAt )

}
