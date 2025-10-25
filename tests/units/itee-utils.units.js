import { describe }      from 'mocha'
import { temperaturesUnits }   from './physics/temperatures.unit.js'
import { trigonometriesUnits }   from './geomathics/trigonometries.unit.js'
import { geometriesUnits }   from './geomathics/geometries.unit.js'
import { stringsUnits }   from './cores/strings.unit.js'
import { objectsUnits }   from './cores/objects.unit.js'
import { numbersUnits }   from './cores/numbers.unit.js'
import { binariesUnits }   from './cores/binaries.unit.js'
import { arraysUnits }   from './cores/arrays.unit.js'

const root = typeof window === 'undefined'
    ? typeof global === 'undefined'
        ? Function( 'return this' )() 
        : global 
    : window

describe( 'Itee#Validators', () => {

    temperaturesUnits.call( root )
    trigonometriesUnits.call( root )
    geometriesUnits.call( root )
    stringsUnits.call( root )
    objectsUnits.call( root )
    numbersUnits.call( root )
    binariesUnits.call( root )
    arraysUnits.call( root )

} )
