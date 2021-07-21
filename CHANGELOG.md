# [5.3.0](https://github.com/Itee/itee-utils/compare/v5.2.3...v5.3.0) (2021-07-21)


### Bug Fixes

* **readme:** fix readme tags ([36d7bb9](https://github.com/Itee/itee-utils/commit/36d7bb98fc427355fb4096e6f6bff894ee8c128d))


### Features

* **toarray:** add toArray function that will always return his input as array ([e3db5ec](https://github.com/Itee/itee-utils/commit/e3db5ec7244115c2c8a40877729e60328b4c16bd))

## [5.2.3](https://github.com/Itee/itee-utils/compare/v5.2.2...v5.2.3) (2021-07-07)


### Bug Fixes

* **package:** apply dependencies fix ([24d1f0d](https://github.com/Itee/itee-utils/commit/24d1f0decbad336eadad650a3f1a24f3886f9a2d))

## [5.2.2](https://github.com/Itee/itee-utils/compare/v5.2.1...v5.2.2) (2021-07-07)


### Bug Fixes

* **releaserc:** fix missing dev maps ([142c659](https://github.com/Itee/itee-utils/commit/142c659c5d618d565ab734f051c1e8966383a9f8))
* **version:** apply fix from dependencies ([c8b7e68](https://github.com/Itee/itee-utils/commit/c8b7e68562b5203dbbd1a2b57bf2118f092a1c9c))

## [5.2.1](https://github.com/Itee/itee-utils/compare/v5.2.0...v5.2.1) (2021-07-05)


### Bug Fixes

* **eslint:** allow console statement in benchmarks ([6d1bdec](https://github.com/Itee/itee-utils/commit/6d1bdec219142a5b03224ab6754b2d6baf793508))
* **eslint:** remove unused variable sourcemap ([dcaa9e0](https://github.com/Itee/itee-utils/commit/dcaa9e077fb4cb647e63459ffd81d4006cb02a8e))
* **package:** apply npm audit fix ([c8bb0c2](https://github.com/Itee/itee-utils/commit/c8bb0c292f5c33812186e3911e7508dc0d10f347))
* 🐛 allow sourcemapping geneartion only for dev env ([f061aef](https://github.com/Itee/itee-utils/commit/f061aef3d3bb6c544e81346c882b0f88f5222e3a))

# [5.2.0](https://github.com/Itee/itee-utils/compare/v5.1.1...v5.2.0) (2020-07-21)


### Bug Fixes

* **global:** lint source and fix related error ([c0ec19f](https://github.com/Itee/itee-utils/commit/c0ec19fd9388301656e4353d6d9a5c0a23b0b9eb))
* **objects:** fix bad treeshaking against toEnum method, mark it as pure ([f6b744e](https://github.com/Itee/itee-utils/commit/f6b744e83f98e2c8532d019abee18098151de408))
* **package:** fix package lock merging due to depandabot ([3a46963](https://github.com/Itee/itee-utils/commit/3a46963ca1b2b5f8f5b4568640f5e0f0354d3ccf))
* **strings:** fix bad tree shaking against diacriticsMap iife ([fdb924e](https://github.com/Itee/itee-utils/commit/fdb924e08e7ab558fd87c304bfb9755fccad0608))


### Features

* **binaries:** add method to convert uint8 and float64 to/from binary string representation ([0b056fc](https://github.com/Itee/itee-utils/commit/0b056fc1a7de25e8c97c0e3093d9971de4c99ca9))
* **chrono:** add chrono class to time measure ([80d4fa9](https://github.com/Itee/itee-utils/commit/80d4fa9cceb91ea6fbc7678717db725f166ae68e))
* **geometries:** add new geometries function about ring and segments intersections ([5198dbd](https://github.com/Itee/itee-utils/commit/5198dbd16e55eb1f770449aa7fc834dd4a7c5b93))
* **number:** add getRandom function to have normalized way to get Math.random number ([58f3a98](https://github.com/Itee/itee-utils/commit/58f3a98e06b4c45e5e80c6505cfb9916ac14eb5f))
* **number:** add new methods to display plain string representation of number ([297e492](https://github.com/Itee/itee-utils/commit/297e4922fadde28ba7155fb26d5d64ad09aa8883))
* **number:** normalize random function and add inclusive version for float and integer ([7e3ecce](https://github.com/Itee/itee-utils/commit/7e3ecceef824232892a4a0a3f1604ea33222dac6))

## [5.1.1](https://github.com/Itee/itee-utils/compare/v5.1.0...v5.1.1) (2019-08-12)


### Bug Fixes

* **docs:** remove docs from npm package ([f5aefd6](https://github.com/Itee/itee-utils/commit/f5aefd6))

# [5.1.0](https://github.com/Itee/itee-utils/compare/v5.0.1...v5.1.0) (2019-08-12)


### Bug Fixes

* **files:** fix getFilesPathsUnder methods that now return correct contents ([7340197](https://github.com/Itee/itee-utils/commit/7340197))


### Features

* **documentation:** add docs to github ([b2f7cfc](https://github.com/Itee/itee-utils/commit/b2f7cfc))

## [5.0.1](https://github.com/Itee/itee-utils/compare/v5.0.0...v5.0.1) (2019-08-04)


### Bug Fixes

* **builds:** add postversion script to build with correct package version ([f1f919b](https://github.com/Itee/itee-utils/commit/f1f919b))
* **rollupconfig:** fix wrong condition for intro parameter ([cde63a1](https://github.com/Itee/itee-utils/commit/cde63a1))

# [5.0.0](https://github.com/Itee/itee-utils/compare/v4.1.1...v5.0.0) (2019-08-04)


### Bug Fixes

* **rollupconfig:** add itee-validators as dependencies for all bundle ([fc975c8](https://github.com/Itee/itee-utils/commit/fc975c8))


### Code Refactoring

* **rollupconfig:** remove umd support, add banner, and remove browserified modules ([ac9818a](https://github.com/Itee/itee-utils/commit/ac9818a))


### BREAKING CHANGES

* **rollupconfig:** Remove UMD support

## [4.1.1](https://github.com/Itee/itee-utils/compare/v4.1.0...v4.1.1) (2019-08-03)


### Bug Fixes

* **readme:** fix travis url ([51ad830](https://github.com/Itee/itee-utils/commit/51ad830))

# [4.1.0](https://github.com/Itee/itee-utils/compare/v4.0.0...v4.1.0) (2019-08-02)


### Features

* **objects:** add 2 new methods for object return by toEnum function ([426ba9b](https://github.com/Itee/itee-utils/commit/426ba9b))
