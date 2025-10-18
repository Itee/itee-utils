import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as trigonometriesNamespace from '../../../sources/geomathics/trigonometries.js'

function trigonometriesUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'trigonometriesUnits', () => {

		describe( 'degreesToRadians()', () => {

			it( 'is bundlable', () => {

				expect(trigonometriesNamespace.degreesToRadians).to.exist

			} )

			it( 'return type is number when degrees is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = trigonometriesNamespace.degreesToRadians( dataSetValue0 )
					expect(result).to.be.a('number')
				}

			} )

		} )

		describe( 'degreesFromRadians()', () => {

			it( 'is bundlable', () => {

				expect(trigonometriesNamespace.degreesFromRadians).to.exist

			} )

			it( 'return type is number when radians is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = trigonometriesNamespace.degreesFromRadians( dataSetValue0 )
					expect(result).to.be.a('number')
				}

			} )

		} )

		describe( 'radiansToDegrees()', () => {

			it( 'is bundlable', () => {

				expect(trigonometriesNamespace.radiansToDegrees).to.exist

			} )

			it( 'return type is number when radians is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = trigonometriesNamespace.radiansToDegrees( dataSetValue0 )
					expect(result).to.be.a('number')
				}

			} )

		} )

		describe( 'radiansFromDegrees()', () => {

			it( 'is bundlable', () => {

				expect(trigonometriesNamespace.radiansFromDegrees).to.exist

			} )

			it( 'return type is number when degrees is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = trigonometriesNamespace.radiansFromDegrees( dataSetValue0 )
					expect(result).to.be.a('number')
				}

			} )

		} )

		describe( 'getYaw()', () => {

			it( 'is bundlable', () => {

				expect(trigonometriesNamespace.getYaw).to.exist

			} )

			it( 'return type is number when vector is of type Vector', () => {

				const dataSet0 = this._dataMap[ 'Vectors' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = trigonometriesNamespace.getYaw( dataSetValue0 )
					expect(result).to.be.a('number')
				}

			} )

		} )

		describe( 'getPitch()', () => {

			it( 'is bundlable', () => {

				expect(trigonometriesNamespace.getPitch).to.exist

			} )

			it( 'return type is number when vector is of type Vector', () => {

				const dataSet0 = this._dataMap[ 'Vectors' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = trigonometriesNamespace.getPitch( dataSetValue0 )
					expect(result).to.be.a('number')
				}

			} )

		} )

		describe( 'convertWebGLRotationToTopogicalYawPitch()', () => {

			it( 'is bundlable', () => {

				expect(trigonometriesNamespace.convertWebGLRotationToTopogicalYawPitch).to.exist

			} )

			it( 'return type is object when vectorDir is of type Vector', () => {

				const dataSet0 = this._dataMap[ 'Vectors' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = trigonometriesNamespace.convertWebGLRotationToTopogicalYawPitch( dataSetValue0 )
					expect(result).to.be.a('object')
				}

			} )

		} )

	} )

}

export { trigonometriesUnits }

