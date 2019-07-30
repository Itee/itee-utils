/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global suite, benchmark */

const IteeUtilsSuite = suite( 'Itee#Utils', () => {

    benchmark(
        'isArray()',
        function () {

            return true

        },
        {} )

} )

export { IteeUtilsSuite }
