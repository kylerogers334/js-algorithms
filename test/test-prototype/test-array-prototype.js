'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

glob.sync( '../../array-prototype/concat.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('array-prototype algorithms', function() {
    it.skip('correctly implements concat', function() {
        
    });
    
    it.skip('correctly implements copyWithin', function() {
        
    });
    
    it.skip('correctly implements entries', function() {
        
    });
    
    it.skip('correctly implements every', function() {
        
    });
    
    it.skip('correctly implements fill', function() {
        
    });

    it.skip('correctly implements filter', function() {
        
    });
    
    it.skip('correctly implements find', function() {
        
    });
    
    it.skip('correctly implements findIndex', function() {
        
    });
    
    it.skip('correctly implements forEach', function() {
        
    });
    
    it.skip('correctly implements includes', function() {
        
    });
    
    it.skip('correctly implements indexOf', function() {
        
    });

    it.skip('correctly implements isArray', function() {
        
    });
    
    it.skip('correctly implements join', function() {
        
    });
    
    it.skip('correctly implements keys', function() {
        
    });
    
    it.skip('correctly implements lastIndexOf', function() {
        
    });
    
    it.skip('correctly implements map', function() {
        
    });
    
    it.skip('correctly implements of', function() {
        
    });
    
    it.skip('correctly implements pop', function() {
        
    });
    
    it.skip('correctly implements push', function() {
        
    });
    
    it.skip('correctly implements reduce', function() {
        
    });
    
    it.skip('correctly implements reduceRight', function() {
        
    });
    
    it.skip('correctly implements reverse', function() {
        
    });
    
    it.skip('correctly implements shift', function() {
        
    });
    
    it.skip('correctly implements some', function() {
        
    });
    
    it.skip('correctly implements sort', function() {
        
    });
    
    it.skip('correctly implements splice', function() {
        
    });
    
    it.skip('correctly implements toString', function() {
        
    });
    
    it.skip('correctly implements unshift', function() {
        
    });
});
