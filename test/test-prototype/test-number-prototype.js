'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

glob.sync( '../../number-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('number-prototype algorithms', function() {
    it.skip('correctly implements isFinite', function() {
        
    });
    
    it.skip('correctly implements isInteger', function() {
        
    });
    
    it.skip('correctly implements isSafeInteger', function() {
        
    });
    
    it.skip('correctly implements parseFloat', function() {
        
    });
    
    it.skip('correctly implements parseInt', function() {
        
    });

    it.skip('correctly implements toExponential', function() {
        
    });
    
    it.skip('correctly implements toFixed', function() {
        
    });
    
    it.skip('correctly implements toPrecision', function() {
        
    });
    
    it.skip('correctly implements toString', function() {
        
    });
});