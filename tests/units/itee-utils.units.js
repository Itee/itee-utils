import { describe }      from 'mocha'
import { arraysUnits }   from './cores/arrays.unit.js'
import { binariesUnits }   from './cores/binaries.unit.js'
import { numbersUnits }   from './cores/numbers.unit.js'
import { objectsUnits }   from './cores/objects.unit.js'
import { stringsUnits }   from './cores/strings.unit.js'
import { geometriesUnits }   from './geomathics/geometries.unit.js'
import { trigonometriesUnits }   from './geomathics/trigonometries.unit.js'
import { temperaturesUnits }   from './physics/temperatures.unit.js'

const root = typeof window === 'undefined'
    ? typeof global === 'undefined'
        ? Function( 'return this' )() 
        : global 
    : window

describe( 'Itee#Validators', () => {

    arraysUnits.call( root )
    binariesUnits.call( root )
    numbersUnits.call( root )
    objectsUnits.call( root )
    stringsUnits.call( root )
    geometriesUnits.call( root )
    trigonometriesUnits.call( root )
    temperaturesUnits.call( root )

} )
