// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of break without an IterationStatement leads to syntax error
 *
 * @path 12_Statement/12.8_The_break_Statement/S12.8_A1_T3.js
 * @description Checking if break statement with no loop, placed into a block, fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
{
    var x=1;
    break;
    var y=2;
}
//
//////////////////////////////////////////////////////////////////////////////

