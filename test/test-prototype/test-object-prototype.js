'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

glob.sync( '../../object-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('object-prototype algorithms', function() {
    it.skip('correctly implements assign', function() {
        
    });
    
    it.skip('correctly implements create', function() {
        
    });
    
    it.skip('correctly implements defineProperties', function() {
        
    });
    
    it.skip('correctly implements defineProperty', function() {
        
    });
    
    it.skip('correctly implements entries', function() {
        
    });

    it.skip('correctly implements getOwnPropertyDescriptor', function() {
        
    });
    
    it.skip('correctly implements getOwnPropertyDescriptors', function() {
        
    });
    
    it.skip('correctly implements getOwnPropertyName', function() {
        
    });
    
    it.skip('correctly implements getOwnPropertySymbols', function() {
        
    });
    
    it.skip('correctly implements getPrototypeOf', function() {
        
    });
    
    it.skip('correctly implements hasOwnProperty', function() {
        
    });
    
    it.skip('correctly implements is', function() {
        
    });
    
    it.skip('correctly implements isExtensible', function() {
        
    });
    
    it.skip('correctly implements isFrozen', function() {
        
    });
    
    it.skip('correctly implements isSealed', function() {
        
    });
    
    it.skip('correctly implements keys', function() {
        
    });
    
    it.skip('correctly implements propertyIsEnumberable', function() {
        
    });
    
    it.skip('correctly implements setPrototypeOf', function() {
        
    });
    
    it.skip('correctly implements toLocaleString', function() {
        
    });
    
    it.skip('correctly implements toString', function() {
        
    });
    
    it.skip('correctly implements valueOf', function() {
        
    });
    
    it.skip('correctly implements values', function() {
        
    });
});