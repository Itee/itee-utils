import {sortBySuite, toArraySuite} from './cores/arrays.bench.js'
import {byteToBitsSuite, bitsToByteSuite, numberToInternalRepresentationSuite, internalRepresentationToNumberSuite} from './cores/binaries.bench.js'
import {getRandomSuite, getRandomFloatExclusiveSuite, getRandomFloatInclusiveSuite, getRandomIntExclusiveSuite, getRandomIntInclusiveSuite, numberToPlainStringSuite} from './cores/numbers.bench.js'
import {uniqSuite, extendSuite, serializeObjectSuite, extendObjectSuite, createIntervalSuite, toEnumSuite} from './cores/objects.bench.js'
import {classNameifySuite, removeDiacriticsSuite} from './cores/strings.bench.js'
import {ringClockwiseSuite, ringContainsSomeSuite, ringContainsSuite, segmentContainsSuite} from './geomathics/geometries.bench.js'
import {degreesToRadiansSuite, degreesFromRadiansSuite, radiansToDegreesSuite, radiansFromDegreesSuite, getYawSuite, getPitchSuite, convertWebGLRotationToTopogicalYawPitchSuite} from './geomathics/trigonometries.bench.js'
import {celsiusToKelvinSuite, celsiusToFahrenheitSuite, fahrenheitToCelsiusSuite, fahrenheitToKelvinSuite, kelvinToCelsiusSuite, kelvinToFahrenheitSuite} from './physics/temperatures.bench.js'

const suites = [
	sortBySuite,
	toArraySuite,
	byteToBitsSuite,
	bitsToByteSuite,
	numberToInternalRepresentationSuite,
	internalRepresentationToNumberSuite,
	getRandomSuite,
	getRandomFloatExclusiveSuite,
	getRandomFloatInclusiveSuite,
	getRandomIntExclusiveSuite,
	getRandomIntInclusiveSuite,
	numberToPlainStringSuite,
	uniqSuite,
	extendSuite,
	serializeObjectSuite,
	extendObjectSuite,
	createIntervalSuite,
	toEnumSuite,
	classNameifySuite,
	removeDiacriticsSuite,
	ringClockwiseSuite,
	ringContainsSomeSuite,
	ringContainsSuite,
	segmentContainsSuite,
	degreesToRadiansSuite,
	degreesFromRadiansSuite,
	radiansToDegreesSuite,
	radiansFromDegreesSuite,
	getYawSuite,
	getPitchSuite,
	convertWebGLRotationToTopogicalYawPitchSuite,
	celsiusToKelvinSuite,
	celsiusToFahrenheitSuite,
	fahrenheitToCelsiusSuite,
	fahrenheitToKelvinSuite,
	kelvinToCelsiusSuite,
	kelvinToFahrenheitSuite
]

for ( const suite of suites ) {
	suite.run()
}
