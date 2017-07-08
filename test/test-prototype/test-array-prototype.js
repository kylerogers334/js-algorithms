'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

glob.sync( './array-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('array-prototype algorithms', function() {
    it('correctly implements concat', function() {
        const arr1 = ['a', 'b', 'c'];
        const arr2 = ['d', 'e', 'f'];
        expect(concat(arr1, arr2)).to.deep.equal(arr1.concat(arr2))
    });
    
    it.skip('correctly implements copyWithin', function() {
        
    });
    
    it('correctly implements entries', function() {
        const myIter = entries(['a', 'b', 'c']);
        const jsIter = ['a', 'b', 'c'].entries();
        
        for (let i = 0; i < myIter.length; i++) {
            expect(myIter.next().value)
                .to.deep.equal(jsIter.next().value);
        }
    });
    
    it('correctly implements every', function() {
        
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
