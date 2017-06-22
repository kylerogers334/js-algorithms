const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );
    
glob.sync( '../../array-prototype/concat.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('array-prototype algorithms', function() {
    it('correctly implements concat', function() {
        
    });
    
    it('correctly implements copyWithin', function() {
        
    });
    
    it('correctly implements entries', function() {
        
    });
    
    it('correctly implements every', function() {
        
    });
    
    it('correctly implements fill', function() {
        
    });

    it('correctly implements filter', function() {
        
    });
    
    it('correctly implements find', function() {
        
    });
    
    it('correctly implements findIndex', function() {
        
    });
    
    it('correctly implements forEach', function() {
        
    });
    
    it('correctly implements includes', function() {
        
    });
    
    it('correctly implements indexOf', function() {
        
    });

    it('correctly implements isArray', function() {
        
    });
    
    it('correctly implements join', function() {
        
    });
    
    it('correctly implements keys', function() {
        
    });
    
    it('correctly implements lastIndexOf', function() {
        
    });
    
    it('correctly implements map', function() {
        
    });
    
    it('correctly implements of', function() {
        
    });
    
    it('correctly implements pop', function() {
        
    });
    
    it('correctly implements push', function() {
        
    });
    
    it('correctly implements reduce', function() {
        
    });
    
    it('correctly implements reduceRight', function() {
        
    });
    
    it('correctly implements reverse', function() {
        
    });
    
    it('correctly implements shift', function() {
        
    });
    
    it('correctly implements some', function() {
        
    });
    
    it('correctly implements sort', function() {
        
    });
    
    it('correctly implements splice', function() {
        
    });
    
    it('correctly implements toString', function() {
        
    });
    
    it('correctly implements unshift', function() {
        
    });
});
