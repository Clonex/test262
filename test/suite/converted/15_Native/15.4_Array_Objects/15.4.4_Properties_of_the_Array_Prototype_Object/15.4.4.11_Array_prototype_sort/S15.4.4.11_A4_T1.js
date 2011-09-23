// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check ToUint32(length) for non Array objects
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.11_Array_prototype_sort/S15.4.4.11_A4_T1.js
 * @description length = 4294967296
 */

var obj = {};
obj.sort = Array.prototype.sort;
obj[0] = "x";
obj[4294967295] = "y";
obj.length = 4294967296;

//CHECK#1
if (obj.sort() !== obj) {
  $ERROR('#1: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; obj.sort() === obj. Actual: ' + (obj.sort()));
}

//CHECK#2
if (obj.length !== 4294967296) {
  $ERROR('#2: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; obj.sort(); obj.length === 4294967296. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[0] !== "x") {
  $ERROR('#3: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; obj.sort(); obj[0] == "x"');
}

//CHECK#4
if (obj[4294967295] !== "y") {
  $ERROR('#4: var obj = {}; obj.sort = Array.prototype.sort; obj[] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; obj.sort(); obj[4294967295] == "y"');
}

