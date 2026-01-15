async function getTestingPackage() {

    const testingPackage = await import('itee-utils/sources/testings/benchmarks.js')

    // let testingPackage
    // if ( typeof global === 'undefined' ) {
    //     testingPackage = await import('itee-utils/sources/testings/benchmarks.js')
    // } else {
    //     testingPackage = await import('itee-utils')
    // }

    return testingPackage.Testing

}

export { getTestingPackage }
