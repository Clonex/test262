// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * After "do-while" is broken, (normal, V, empty) is returned
 *
 * @path 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A5.js
 * @description Using eval
 */

__evaluated = eval("do {__in__do__before__break=1; break; __in__do__after__break=2;} while(0)");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__in__do__before__break !== 1) {
	$ERROR('#1: __in__do__before__break === 1. Actual:  __in__do__before__break ==='+ __in__do__before__break  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof __in__do__after__break !== "undefined") {
	$ERROR('#2: typeof __in__do__after__break === "undefined". Actual:  typeof __in__do__after__break ==='+ typeof __in__do__after__break  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__evaluated !== 1) {
	$ERROR('#3: __evaluated === 1. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

