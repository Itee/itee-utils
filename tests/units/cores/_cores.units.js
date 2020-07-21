/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe */

import { _arraysUnits }    from './arrays/_arrays.units'
import { _booleansUnits }  from './booleans/_booleans.units'
import { _functionsUnits } from './functions/_functions.units'
import { _numbersUnits }   from './numbers/_numbers.units'
import { _objectsUnits }   from './objects/_objects.units'
import { _stringsUnits }   from './strings/_strings.units'
import { _symbolsUnits }   from './symbols/_symbols.units'
import { _voidsUnits }     from './voids/_voids.units'

function _coresUnits () {

    describe( 'Cores', () => {

        _arraysUnits.call( this )
        _booleansUnits.call( this )
        _functionsUnits.call( this )
        _numbersUnits.call( this )
        _objectsUnits.call( this )
        _stringsUnits.call( this )
        _symbolsUnits.call( this )
        _voidsUnits.call( this )

    } )

}

export { _coresUnits }
