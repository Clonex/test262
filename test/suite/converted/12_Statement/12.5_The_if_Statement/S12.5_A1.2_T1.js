// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * 1, true, non-empty string and others in expression is evaluated to true when using operator "new"
 *
 * @path 12_Statement/12.5_The_if_Statement/S12.5_A1.2_T1.js
 * @description Using "if" without "else" construction
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(!(new Number(1)))
	$ERROR('#1: new 1 in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(!(new Boolean(true)))
	$ERROR('#2: new true in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(!(new String("1")))
	$ERROR('#3: new "1" in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(!(new String("A")))
	$ERROR('#4: new "A" in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if(!(new Boolean(false)))
    $ERROR('#2: new false in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if(!(new Number(NaN)))
    $ERROR('#6: new NaN in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#7
if(!(new Number(null)))
  $ERROR('#7: new null in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#8
if(!(new String(undefined)))
  $ERROR('#8: new undefined in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#9
if(!(new String("")))
    $ERROR('#9: new empty string in expression is evaluated to true ');
//
//////////////////////////////////////////////////////////////////////////////

