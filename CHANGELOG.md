# [v5.5.0](https://github.com/Itee/itee-utils/compare/v5.4.4...v5.5.0) (2025-10-16)

## ✨ New Features
- [`2c1af5f`](https://github.com/Itee/itee-utils/commit/2c1af5f)  (package) use cz-emoji in favor of cz-conventional-changlog 

## 🐛 Bug Fixes
- [`5e5a887`](https://github.com/Itee/itee-utils/commit/5e5a887)  (gulpfile) fix gulp.conf file extension 
- [`3cf5c13`](https://github.com/Itee/itee-utils/commit/3cf5c13)  (rollup.conf) fix removed parameter name to fix iife generation 
- [`82da0e2`](https://github.com/Itee/itee-utils/commit/82da0e2)  (bundling) fix some bundling side effects

## [5.4.4](https://github.com/Itee/itee-utils/compare/v5.4.3...v5.4.4) (2025-09-07)


### Bug Fixes

* **npm:** apply npm audit fix ([342f16b](https://github.com/Itee/itee-utils/commit/342f16b5d53952860e5da5ab244b8ae16d84566a))

## [5.4.3](https://github.com/Itee/itee-utils/compare/v5.4.2...v5.4.3) (2025-09-05)


### Bug Fixes

* **gulpfile:** fix some test and regenerate them ([f0c8b7b](https://github.com/Itee/itee-utils/commit/f0c8b7b79fab6827911cac6e327bc07b1b24015e))

## [5.4.2](https://github.com/Itee/itee-utils/compare/v5.4.1...v5.4.2) (2025-09-04)


### Bug Fixes

* **benchmarks:** fix error log on null or undefined data ([062e845](https://github.com/Itee/itee-utils/commit/062e84561c28eecc89a4267d129a58a6ed46b5d2))
* **rollup.conf:** fix build package internal variable usage ([8b3c9a7](https://github.com/Itee/itee-utils/commit/8b3c9a78efd93306df8c7f290ecfc3aeb782bdb2))

## [5.4.1](https://github.com/Itee/itee-utils/compare/v5.4.0...v5.4.1) (2025-09-03)


### Bug Fixes

* **package:** apply audit fix and release ([97825ab](https://github.com/Itee/itee-utils/commit/97825abbc112edd1feaabdf4ce79ae6dc8006f8f))
* **package:** revert karma version and upgrade base node engine requirement to v18 ([99ffa03](https://github.com/Itee/itee-utils/commit/99ffa03f2332305400087ef2ff982f38408d91c8))

# [5.4.0](https://github.com/Itee/itee-utils/compare/v5.3.2...v5.4.0) (2025-09-03)


### Bug Fixes

* **global:** add method inputs validation that not throw ([ca75340](https://github.com/Itee/itee-utils/commit/ca75340133bbf673cc4ab6987f3aac4bc493a930))
* **global:** apply eslint fixes ([9d3debb](https://github.com/Itee/itee-utils/commit/9d3debbbe5fb11172a47a8e651ba57f21315469b))
* **gulpfile:** comment unecessary file cleaning that break under node v12 ([4c57dd2](https://github.com/Itee/itee-utils/commit/4c57dd23598d35e5a0fe73e3369ae40cc7f11c55))
* **gulpfile:** fix broken karma tests due to deprecated packages ([bde96a9](https://github.com/Itee/itee-utils/commit/bde96a9fab4f9b286c37675110357080f6726f6b))
* **gulpfile:** fix building with latest standards ([45eb022](https://github.com/Itee/itee-utils/commit/45eb02206727f14fef48bca743329619120b9724))
* **release:** fix npm scripts names and reordering gulp tasks ([a200684](https://github.com/Itee/itee-utils/commit/a20068487f9b7239a59c5765dd2396a36f0b4696))
* **string:** add rollup comment to avoid bad bundling ([00c2d18](https://github.com/Itee/itee-utils/commit/00c2d18cc1c0fe17f4d3e7962598e44b25573160))
* **temparture:** avoid throw during input validation ([564d451](https://github.com/Itee/itee-utils/commit/564d451f5fdc76bbd5de9ddebd2e4c9fa3687a55))


### Features

* **files:** add new utils methods ([417a16c](https://github.com/Itee/itee-utils/commit/417a16c683271a8cb714f15335934464030cb9bc))

## [5.3.2](https://github.com/Itee/itee-utils/compare/v5.3.1...v5.3.2) (2022-02-14)


### Bug Fixes

* **package:** update deps to latest version ([e647732](https://github.com/Itee/itee-utils/commit/e64773251dad0d9687ddad7d5de71da121de9387))

## [5.3.1](https://github.com/Itee/itee-utils/compare/v5.3.0...v5.3.1) (2022-02-08)


### Bug Fixes

* **package:** update deps to latest version ([84ca915](https://github.com/Itee/itee-utils/commit/84ca9151e585c1557b3af59a1d6b8abe9212ca5b))

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
