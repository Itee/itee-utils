/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */


class Chrono {

    constructor() {

        this._cache = {}

    }

    start( key ) {

        this._cache[ key ] = {
            start: 0,
            stop:  0
        }

        this._cache[ key ].start = this._getTimeStamp()

    }

    stop( key ) {

        this._cache[ key ].stop = this._getTimeStamp()

    }

    getDurationOf( key ) {

        return this._getDurationInSecond( this._cache[ key ].start, this._cache[ key ].stop )

    }

    getResults() {

        let results = ''

        for ( let [ key, times ] of Object.entries( this._cache ) ) {

            results += `${ key }: ${ times.stop - times.start }ms\n`

        }

        return results

    }

    _getTimeStamp() {

        return window.performance &&
               window.performance.now &&
               window.performance.timing &&
               window.performance.timing.navigationStart ?
               window.performance.now() + window.performance.timing.navigationStart :
               Date.now()

    }

}

export { Chrono }
