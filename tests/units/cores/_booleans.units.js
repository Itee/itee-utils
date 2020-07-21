/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe */

import { isBooleanUnits } from './isBoolean.units'

function _booleansUnits () {

    describe( 'Booleans', () => {

        isBooleanUnits.call( this )

    } )

}

export { _booleansUnits }
