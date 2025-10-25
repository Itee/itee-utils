import {celsiusToKelvinSuite, celsiusToFahrenheitSuite, fahrenheitToCelsiusSuite, fahrenheitToKelvinSuite, kelvinToCelsiusSuite, kelvinToFahrenheitSuite} from './physics/temperatures.bench.js'
import {degreesToRadiansSuite, degreesFromRadiansSuite, radiansToDegreesSuite, radiansFromDegreesSuite, getYawSuite, getPitchSuite, convertWebGLRotationToTopogicalYawPitchSuite} from './geomathics/trigonometries.bench.js'
import {ringClockwiseSuite, ringContainsSomeSuite, ringContainsSuite, segmentContainsSuite} from './geomathics/geometries.bench.js'
import {classNameifySuite, removeDiacriticsSuite} from './cores/strings.bench.js'
import {uniqSuite, extendSuite, serializeObjectSuite, extendObjectSuite, createIntervalSuite, toEnumSuite} from './cores/objects.bench.js'
import {getRandomSuite, getRandomFloatExclusiveSuite, getRandomFloatInclusiveSuite, getRandomIntExclusiveSuite, getRandomIntInclusiveSuite, numberToPlainStringSuite} from './cores/numbers.bench.js'
import {byteToBitsSuite, bitsToByteSuite, numberToInternalRepresentationSuite, internalRepresentationToNumberSuite} from './cores/binaries.bench.js'
import {sortBySuite, toArraySuite} from './cores/arrays.bench.js'

const suites = [
	celsiusToKelvinSuite,
	celsiusToFahrenheitSuite,
	fahrenheitToCelsiusSuite,
	fahrenheitToKelvinSuite,
	kelvinToCelsiusSuite,
	kelvinToFahrenheitSuite,
	degreesToRadiansSuite,
	degreesFromRadiansSuite,
	radiansToDegreesSuite,
	radiansFromDegreesSuite,
	getYawSuite,
	getPitchSuite,
	convertWebGLRotationToTopogicalYawPitchSuite,
	ringClockwiseSuite,
	ringContainsSomeSuite,
	ringContainsSuite,
	segmentContainsSuite,
	classNameifySuite,
	removeDiacriticsSuite,
	uniqSuite,
	extendSuite,
	serializeObjectSuite,
	extendObjectSuite,
	createIntervalSuite,
	toEnumSuite,
	getRandomSuite,
	getRandomFloatExclusiveSuite,
	getRandomFloatInclusiveSuite,
	getRandomIntExclusiveSuite,
	getRandomIntInclusiveSuite,
	numberToPlainStringSuite,
	byteToBitsSuite,
	bitsToByteSuite,
	numberToInternalRepresentationSuite,
	internalRepresentationToNumberSuite,
	sortBySuite,
	toArraySuite
]

for ( const suite of suites ) {
	suite.run()
}
