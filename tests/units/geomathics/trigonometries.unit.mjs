import { expect }       from 'chai'
import { getTestingPackage } from '../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as trigonometriesNamespace from '../../../sources/geomathics/trigonometries.js'

const Testing   = await getTestingPackage()

describe( 'trigonometriesUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'degreesToRadians()', function () {

		it( 'should be bundlable', async function () {

			expect(trigonometriesNamespace.degreesToRadians).to.exist

		} )

		it( 'should return value of type number when degrees is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = trigonometriesNamespace.degreesToRadians( dataSetValue0 )
				expect(result).to.be.a('number')
			}

		} )

	} )

	describe( 'degreesFromRadians()', function () {

		it( 'should be bundlable', async function () {

			expect(trigonometriesNamespace.degreesFromRadians).to.exist

		} )

		it( 'should return value of type number when radians is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = trigonometriesNamespace.degreesFromRadians( dataSetValue0 )
				expect(result).to.be.a('number')
			}

		} )

	} )

	describe( 'radiansToDegrees()', function () {

		it( 'should be bundlable', async function () {

			expect(trigonometriesNamespace.radiansToDegrees).to.exist

		} )

		it( 'should return value of type number when radians is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = trigonometriesNamespace.radiansToDegrees( dataSetValue0 )
				expect(result).to.be.a('number')
			}

		} )

	} )

	describe( 'radiansFromDegrees()', function () {

		it( 'should be bundlable', async function () {

			expect(trigonometriesNamespace.radiansFromDegrees).to.exist

		} )

		it( 'should return value of type number when degrees is of type number', async function() {

			const dataSet0 = _dataMap[ 'numbers' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = trigonometriesNamespace.radiansFromDegrees( dataSetValue0 )
				expect(result).to.be.a('number')
			}

		} )

	} )

	describe( 'getYaw()', function () {

		it( 'should be bundlable', async function () {

			expect(trigonometriesNamespace.getYaw).to.exist

		} )

		it( 'should return value of type number when vector is of type Vector', async function() {

			const dataSet0 = _dataMap[ 'Vectors' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = trigonometriesNamespace.getYaw( dataSetValue0 )
				expect(result).to.be.a('number')
			}

		} )

	} )

	describe( 'getPitch()', function () {

		it( 'should be bundlable', async function () {

			expect(trigonometriesNamespace.getPitch).to.exist

		} )

		it( 'should return value of type number when vector is of type Vector', async function() {

			const dataSet0 = _dataMap[ 'Vectors' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = trigonometriesNamespace.getPitch( dataSetValue0 )
				expect(result).to.be.a('number')
			}

		} )

	} )

	describe( 'convertWebGLRotationToTopogicalYawPitch()', function () {

		it( 'should be bundlable', async function () {

			expect(trigonometriesNamespace.convertWebGLRotationToTopogicalYawPitch).to.exist

		} )

		it( 'should return value of type object when vectorDir is of type Vector', async function() {

			const dataSet0 = _dataMap[ 'Vectors' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = trigonometriesNamespace.convertWebGLRotationToTopogicalYawPitch( dataSetValue0 )
				expect(result).to.be.a('object')
			}

		} )

	} )

} )
