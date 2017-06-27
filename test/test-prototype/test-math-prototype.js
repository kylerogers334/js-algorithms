'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

glob.sync( '../../math-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('math-prototype algorithms', function() {
    it.skip('correctly implements abs', function() {
        
    });
    
    it.skip('correctly implements acos', function() {
        
    });
    
    it.skip('correctly implements acosh', function() {
        
    });
    
    it.skip('correctly implements asin', function() {
        
    });
    
    it.skip('correctly implements asinh', function() {
        
    });

    it.skip('correctly implements atan', function() {
        
    });
    
    it.skip('correctly implements atan2', function() {
        
    });
    
    it.skip('correctly implements atanh', function() {
        
    });
    
    it.skip('correctly implements cbrt', function() {
        
    });
    
    it.skip('correctly implements ceil', function() {
        
    });
    
    it.skip('correctly implements cos', function() {
        
    });

    it.skip('correctly implements cosh', function() {
        
    });
    
    it.skip('correctly implements exp', function() {
        
    });
    
    it.skip('correctly implements expm1', function() {
        
    });
    
    it.skip('correctly implements floor', function() {
        
    });
    
    it.skip('correctly implements hypot', function() {
        
    });
    
    it.skip('correctly implements log', function() {
        
    });
    
    it.skip('correctly implements log10', function() {
        
    });
    
    it.skip('correctly implements log1p', function() {
        
    });
    
    it.skip('correctly implements log2', function() {
        
    });
    
    it.skip('correctly implements max', function() {
        
    });
    
    it.skip('correctly implements min', function() {
        
    });
    
    it.skip('correctly implements pow', function() {
        
    });
    
    it.skip('correctly implements random', function() {
        
    });
    
    it.skip('correctly implements round', function() {
        
    });
    
    it.skip('correctly implements sign', function() {
        
    });
    
    it.skip('correctly implements sin', function() {
        
    });
    
    it.skip('correctly implements sinh', function() {
        
    });
        
    it.skip('correctly implements sqrt', function() {
        
    });
        
    it.skip('correctly implements tan', function() {
        
    });
        
    it.skip('correctly implements tanh', function() {
        
    });
        
    it.skip('correctly implements trunc', function() {
        
    });
    
});