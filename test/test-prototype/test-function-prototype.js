'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

glob.sync( '../../function-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('function-prototype algorithms', function() {
    it.skip('correctly implements apply', function() {
        
    });
    
    it.skip('correctly implements call', function() {
        
    });
    
    it.skip('correctly implements bind', function() {
        
    });
});