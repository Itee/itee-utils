/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */


const voids = {
    null:      null,
    undefined: undefined,
    void:      void ( 0 )
}

const booleans = {
    true:  true,
    false: false
}

const numbers = {
    negativeInfinity:        Number.NEGATIVE_INFINITY,
    negativeMaxValue:        -Number.MAX_VALUE,
    negativeMinSafeInteger:  Number.MIN_SAFE_INTEGER,
    negativeMinValue:        -Number.MIN_VALUE,
    negativeHexa:            -0x123456,
    negativePow:             -2e+2,
    negativePowWithDecimals: -1.2345e+2,
    negativeFloat:           -1.01,
    negativeInt:             -1,
    negativeZero:            -0,
    negativeNan:             -Number.NaN,
    positiveNan:             Number.NaN,
    positiveZero:            0,
    positiveInt:             1,
    positiveFloat:           1.01,
    positivePowWithDecimals: 1.2345e+2,
    positivePow:             2e+2,
    positiveHexa:            0x123456,
    epsilon:                 Number.EPSILON,
    positiveMinValue:        Number.MIN_VALUE,
    positiveMaxSafeInteger:  Number.MAX_SAFE_INTEGER,
    positiveMaxValue:        Number.MAX_VALUE,
    positiveInfinity:        Number.POSITIVE_INFINITY,
    // others
    e:       Math.E,
    ln10:    Math.LN10,
    ln2:     Math.LN2,
    log10e:  Math.LOG10E,
    log2e:   Math.LOG2E,
    pi:      Math.PI,
    sqrt1_2: Math.SQRT1_2,
    sqrt2:   Math.SQRT2
}

const strings = /*#__PURE__*/( () => {

    const dataMap = {
        empty:       '',
        blank:       '      ',
        stringNull:  String(),
        stringEmpty: String( '' ),
        stringBlank: String( '    ' ),
        foobar:      'foobar',
        stringHexa:  '#123456',
        stringOcta:  '00101010'
    }

    // Convert voids to string
    const voidDataMap = voids
    for ( let i = 0, m = voidDataMap.length ; i < m ; i++ ) {
        dataMap[ voidDataMap[ i ] ] = `${ voidDataMap[ i ] }`
    }

    // Convert booleans to string
    const booleanDataMap = booleans
    for ( let j = 0, n = booleanDataMap.length ; j < n ; j++ ) {
        dataMap[ booleanDataMap[ j ] ] = `${ booleanDataMap[ j ] }`
    }

    // Convert numbers to string
    const numericDataMap = numbers
    for ( let k = 0, o = numericDataMap.length ; k < o ; k++ ) {
        dataMap[ numericDataMap[ k ] ] = `${ numericDataMap[ k ] }`
    }

    return dataMap

} )()

const functions = {
    anonymousFunction: function () {},
    namedFunction:     function namedFunction () {},
    arrowFunction:     () => {}
}

const arrays = /*#__PURE__*/( () => {

    const dataMap = {
        emptyArray:       [],
        emptyArrayObject: new Array(),
        singleValued:     [ 0 ],
        multiValued:      [ 0, 1, 2 ],
        null:             ( () => {

            const nullArray = []

            for ( let index = 0 ; index < 3 ; index++ ) {
                nullArray.push( null )
            }

            return nullArray

        } )(),
        undefined:        ( () => {

            const undefinedArray = []

            for ( let index = 0 ; index < 3 ; index++ ) {
                undefinedArray.push( undefined )
            }

            return undefinedArray

        } )(),
        void:             ( () => {

            const undefinedArray = []

            for ( let index = 0 ; index < 3 ; index++ ) {
                undefinedArray.push( void ( 0 ) )
            }

            return undefinedArray

        } )(),
        voids:            ( () => {

            const array = []

            const voidDataMap = voids
            for ( let key in voidDataMap ) {
                array.push( voidDataMap[ key ] )
            }

            return array

        } )(),
        booleans:         ( () => {

            const array = []

            const booleanDataMap = booleans
            for ( let key in booleanDataMap ) {
                array.push( booleanDataMap[ key ] )
            }

            return array

        } )(),
        numbers:          ( () => {

            const array = []

            const numericDataMap = numbers
            for ( let key in numericDataMap ) {
                array.push( numericDataMap[ key ] )
            }

            return array

        } )(),
        strings:          ( () => {

            const array = []

            const stringDataMap = strings
            for ( let key in stringDataMap ) {
                array.push( stringDataMap[ key ] )
            }

            return array

        } )(),
        functions:        ( () => {

            const array = []

            const functionDataMap = functions
            for ( let key in functionDataMap ) {
                array.push( functionDataMap[ key ] )
            }

            return array

        } )(),
        objects:          [
            {
                foo: 'bar'
            },
            {
                baz: 'qux'
            }
        ],
        arrays:           [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
    }

    return dataMap

} )()

const typedArrays = {
    int8Array:    new Int8Array( [ 1, 2, 3 ] ),
    uInt8Array:   new Uint8Array( [ 1, 2, 3 ] ),
    int16Array:   new Int16Array( [ 1, 2, 3 ] ),
    uInt16Array:  new Uint16Array( [ 1, 2, 3 ] ),
    int32Array:   new Int32Array( [ 1, 2, 3 ] ),
    uInt32Array:  new Uint32Array( [ 1, 2, 3 ] ),
    float32Array: new Float32Array( [ 1.0, 2.0, 3.0 ] ),
    float64Array: new Float64Array( [ 1.0, 2.0, 3.0 ] )
}

const objects = {
    empty:     {},
    instance:  new Object(),
    null:      { null: null },
    undefined: { undefined: undefined },
    foo:       { foo: 'bar' }
}

export {
    voids,
    booleans,
    numbers,
    strings,
    functions,
    arrays,
    typedArrays,
    objects
}
