// Copyright (C) 2019 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.add
description: >
  TypedArray type is validated before `value` argument is coerced.
info: |
  24.4.2 Atomics.add ( typedArray, index, value )
    1. Return ? AtomicReadModifyWrite(typedArray, index, value, add).

  24.4.1.11 AtomicReadModifyWrite ( typedArray, index, value, op )
    1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray).
    ...

  24.4.1.1 ValidateSharedIntegerTypedArray ( typedArray [ , onlyInt32 ] )
    ...
    4. Let typeName be typedArray.[[TypedArrayName]].
    5. If onlyInt32 is true, then
      a. If typeName is not "Int32Array", throw a TypeError exception.
    6. Else,
      a. If typeName is not "Int8Array", "Uint8Array", "Int16Array", "Uint16Array", "Int32Array",
         or "Uint32Array", throw a TypeError exception.
    ...
features: [Atomics, TypedArray]
---*/

var value = {
  valueOf() {
    throw new Test262Error("value coerced");
  }
};

var badArrayTypes = [
  Uint8ClampedArray, Float32Array, Float64Array
];

for (var badArrayType of badArrayTypes) {
  var typedArray = new badArrayType(new SharedArrayBuffer(8));
  assert.throws(TypeError, function() {
    Atomics.add(typedArray, 0, value);
  });
}
