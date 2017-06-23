'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

glob.sync( '../../string-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('string-prototype algorithms', function() {
    it.skip('correctly implements charAt', function() {
        
    });
    
    it.skip('correctly implements concat', function() {
        
    });
    
    it.skip('correctly implements endsWith', function() {
        
    });
    
    it.skip('correctly implements includes', function() {
        
    });
    
    it.skip('correctly implements indexOf', function() {
        
    });

    it.skip('correctly implements lastIndexOf', function() {
        
    });
    
    it.skip('correctly implements link', function() {
        
    });
    
    it.skip('correctly implements match', function() {
        
    });
    
    it.skip('correctly implements padEnd', function() {
        
    });
    
    it.skip('correctly implements padStart', function() {
        
    });
    
    it.skip('correctly implements repeat', function() {
        
    });

    it.skip('correctly implements replace', function() {
        
    });
    
    it.skip('correctly implements search', function() {
        
    });
    
    it.skip('correctly implements slice', function() {
        
    });
    
    it.skip('correctly implements split', function() {
        
    });
    
    it.skip('correctly implements substr', function() {
        
    });
    
    it.skip('correctly implements substring', function() {
        
    });
    
    it.skip('correctly implements startsWith', function() {
        
    });
    
    it.skip('correctly implements toLowerCase', function() {
        
    });
    
    it.skip('correctly implements toUpperCase', function() {
        
    });
    
    it.skip('correctly implements trimLeft', function() {
        
    });
    
    it.skip('correctly implements trimRight', function() {
        
    });
    
    it.skip('correctly implements valueOf', function() {
        
    });
});