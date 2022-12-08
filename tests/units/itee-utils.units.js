import { describe }      from 'mocha'
import { arraysUnits }   from './cores/arrays.unit.js'
import { binariesUnits }   from './cores/binaries.unit.js'
import { booleansUnits }   from './cores/booleans.unit.js'
import { functionsUnits }   from './cores/functions.unit.js'
import { numbersUnits }   from './cores/numbers.unit.js'
import { objectsUnits }   from './cores/objects.unit.js'
import { stringsUnits }   from './cores/strings.unit.js'
import { symbolsUnits }   from './cores/symbols.unit.js'
import { voidsUnits }   from './cores/voids.unit.js'
import { filesUnits }   from './file-system/files.unit.js'
import { geometriesUnits }   from './geomathics/geometries.unit.js'
import { trigonometriesUnits }   from './geomathics/trigonometries.unit.js'
import { temperaturesUnits }   from './physics/temperatures.unit.js'
import { benchmarksUnits }   from './testings/benchmarks.unit.js'
import { primitivesUnits }   from './testings/primitives.unit.js'
import { chronoUnits }   from './times/chrono.unit.js'

const root = typeof window === 'undefined'
    ? typeof global === 'undefined'
        ? Function( 'return this' )() 
        : global 
    : window

describe( 'Itee#Utils', () => {

    arraysUnits.call( root )
    binariesUnits.call( root )
    booleansUnits.call( root )
    functionsUnits.call( root )
    numbersUnits.call( root )
    objectsUnits.call( root )
    stringsUnits.call( root )
    symbolsUnits.call( root )
    voidsUnits.call( root )
    filesUnits.call( root )
    geometriesUnits.call( root )
    trigonometriesUnits.call( root )
    temperaturesUnits.call( root )
    benchmarksUnits.call( root )
    primitivesUnits.call( root )
    chronoUnits.call( root )

} )
