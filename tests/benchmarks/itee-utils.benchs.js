import * as import_0 from './cores/arrays.bench.js'
import * as import_1 from './cores/binaries.bench.js'
import * as import_2 from './cores/numbers.bench.js'
import * as import_3 from './cores/objects.bench.js'
import * as import_4 from './cores/strings.bench.js'
import * as import_5 from './file-system/files.bench.js'
import * as import_6 from './geomathics/geometries.bench.js'
import * as import_7 from './geomathics/trigonometries.bench.js'
import * as import_8 from './physics/temperatures.bench.js'

for (const benchmark of Object.values(import_0)) {
   benchmark.run()
}
for (const benchmark of Object.values(import_1)) {
   benchmark.run()
}
for (const benchmark of Object.values(import_2)) {
   benchmark.run()
}
for (const benchmark of Object.values(import_3)) {
   benchmark.run()
}
for (const benchmark of Object.values(import_4)) {
   benchmark.run()
}
for (const benchmark of Object.values(import_5)) {
   benchmark.run()
}
for (const benchmark of Object.values(import_6)) {
   benchmark.run()
}
for (const benchmark of Object.values(import_7)) {
   benchmark.run()
}
for (const benchmark of Object.values(import_8)) {
   benchmark.run()
}
