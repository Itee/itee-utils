import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { TestsUtils }      from 'itee-utils'
import * as Files from '../../../sources/file-system/files.js'

function filesUnits () {

	beforeEach( () => {

		this._dataMap = TestsUtils.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'Files', () => {

		describe( 'excludesFilesPaths', () => {

			it( 'excludesFilesPaths is bundlable', () => {

				expect(Files.excludesFilesPaths).to.exist

			} )

			it( 'excludesFilesPaths return type is array.<string> when filePaths is of type Array.<string> and excludes is of type Array.<string>', () => {

				const dataSet0 = this._dataMap[ 'Array.<string>s' ]
				const dataSet1 = this._dataMap[ 'Array.<string>s' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = Files.excludesFilesPaths( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('array')
					}
				}

			} )

		} )

		describe( 'filterJavascriptFiles', () => {

			it( 'filterJavascriptFiles is bundlable', () => {

				expect(Files.filterJavascriptFiles).to.exist

			} )

			it( 'filterJavascriptFiles return type is array.<string> when filePaths is of type Array.<string>', () => {

				const dataSet0 = this._dataMap[ 'Array.<string>s' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = Files.filterJavascriptFiles( dataSetValue0 )
					expect(result).to.be.a('array')
				}

			} )

		} )

		describe( 'getFilesPathsUnder', () => {

			it( 'getFilesPathsUnder is bundlable', () => {

				expect(Files.getFilesPathsUnder).to.exist

			} )

			it( 'getFilesPathsUnder return type is array when paths is of type Array.<string>', () => {

				const dataSet0 = this._dataMap[ 'Array.<string>s' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = Files.getFilesPathsUnder( dataSetValue0 )
					expect(result).to.be.a('array')
				}

			} )

		} )

		describe( 'getFilesPathsUnder_1', () => {

			it( 'getFilesPathsUnder_1 is bundlable', () => {

				expect(Files.getFilesPathsUnder_1).to.exist

			} )

			it( 'getFilesPathsUnder_1 return type is array.<string> when filePaths is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = Files.getFilesPathsUnder_1( dataSetValue0 )
					expect(result).to.be.a('array')
				}

			} )

		} )

	} )

}

export { filesUnits }

