//
// VSCP javascript websocket library
// Copyright (C) 2012-2016 Ake Hedman, Grodans Paradis AB
// <akhe@grodansparadis.com>
//
// Licence:
// The MIT License (MIT)
// [OSI Approved License]
//
// The MIT License (MIT)
//
// Copyright (c) 2012-2016 Grodans Paradis AB (Paradise of the Frog)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// Alternative licenses for VSCP & Friends may be arranged by contacting
// Grodans Paradis AB at info@grodansparadis.com, http://www.grodansparadis.com
//

// jshint bitwise: false 

// Namespace for all functionality of the VSCP admin libraries.
var vscpadmin = vscpadmin || {};

// VSCP websocket library version
// major     - Major version number
// minor     - Minor version number
// subMinor  - Sub-minor version number
//
vscpadmin.version = {
    major: 0,
    minor: 1,
    subMinor: 0
};

// Create a general purpose namespace method. This will allow us to create
// namespace a bit easier.
//
// @param {string} namespace Complete namespace, e.g. "a.b.c.d"
//
vscpadmin._createNS = function ( namespace ) 
{
    var nsparts = namespace.split(".");
    var parent = vscpadmin;

    // We want to be able to include or exclude the root namespace .
    // So we strip it if it's in the namespace.
    if ( nsparts[ 0 ] === "vscpadmin" ) {
        nsparts = nsparts.slice( 1 );
    }

    // Loop through the parts and create a nested namespace if necessary 
    for ( var i = 0; i < nsparts.length; i++ ) {
        var partname = nsparts[ i ];

        // Check if the current parent already has the namespace declared, if
        // not create it.
        if ( "undefined" === typeof parent[ partname ] ) {
            parent[ partname ] = {};
        }

        // Get a reference to the deepest element in the hierarchy so far 
        parent = parent[ partname ];
    }

    // The parent is now completely constructed with empty namespaces and can be used. 
    return parent;
};


// Namespace for constants
vscpadmin._createNS( "vscpadmin.constants" );


// Admin interface Constants
vscpadmin.constants.settings = {

    copyright: "Copyright &copy; 2000-2016 Grodans Paradis AB (Paradise of the Frog)",
    server: http://127.0.0.1:8080,
};


//
vscpadmin.constants.types = {

    VSCP_TYPE_UNDEFINED: 0,
};


/// VSCP variable types
vscpadmin.constants.varTypes = {
    UNASSIGNED: 0,          // Unassigned variable
    STRING: 1,              // String value
    BOOLEAN: 2,             // Boolean value (true, false, 0 or 1)
    INTEGER: 3,             // Integer value
    LONG: 4,                // Long value
    DOUBLE: 5,              // Double value
    MEASUREMENT: 6,         // String representation of the measurement.
    EVENT: 7,               // VSCP event head, class, type, obId, timestamp, GUID, data 1, data 2, data ...
    GUID: 8,                // Standard GUID string format: FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF
    EVENT_DATA: 9,          // Comma separated list with decimal values. 1,2,3,4,5,6,7,8, ...
    EVENT_CLASS: 10,        // Integer value for VSCP class
    EVENT_TYPE: 11,         // Integer value for VSCP type
    EVENT_TIMESTAMP: 12,    // Time when event was received in ms
    DATE_TIME: 13           // Date + Time in ISO format 2008-11-07 20:10.00
};


// VSCP variable type names
vscpadmin.constants.varTypeNames = [
    "Unassigned",
    "String",
    "Boolean",
    "Integer",
    "Long",
    "Double",
    "Measurement",
    "Event",
    "GUID",
    "Event data",
    "Event class",
    "Event type",
    "Event timestamp",
    "Date and Time"
];

/* ---------------------------------------------------------------------- */


