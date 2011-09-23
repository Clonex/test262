// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Math.LOG2E is approximately 1.4426950408889634
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.4_LOG2E/S15.8.1.4_A1.js
 * @description Comparing Math.LOG2E with 1.4426950408889634
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Math.LOG2E, 1.4426950408889634)) {
  $ERROR('#1: \'Math.LOG2E is not approximatley equal to 1.4426950408889634\'');
}

