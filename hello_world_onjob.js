// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//			Copyright (c) 2021, James Grace
//			All rights reserved.

//			This source code is licensed under the BSD-style license found in the
//			LICENSE file in the root directory of this source tree.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


var VERSION = "14july2021";

var DISPLAY_NAME = "Hello World";

var OUTPUT_MESSAGE = "HELLO WORLD";


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



function getProperties() {
	return {
		triggerPoints: [ 'onJobEachAsset', 'onJobFinalize' ],
		displayName: DISPLAY_NAME, // NWC "Run Script" Pull-down seems to be currently provisioned for 19 Characters or less in length...
	};
} // getProperties



function onJobEachAsset() {

	portfolio.log('[ ' + DISPLAY_NAME + ' version ' + VERSION + ' ] - //////////  ' + OUTPUT_MESSAGE + '  //////////');

} // onJobEachAsset




function onJobFinalize() {

	portfolio.log('[ ' + DISPLAY_NAME + ' version ' + VERSION + ' ] - \\\\\\\\\\\\\\\\\\\\    END JOB    \\\\\\\\\\\\\\\\\\\\');
	// Remember that JavaScript requires that backslashes must be "escaped" !

} // onJobFinalize
