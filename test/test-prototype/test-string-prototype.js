'use strict';
require('babel-polyfill');
const expect = require('chai').expect;
const glob = require( 'glob' );
const path = require( 'path' );

glob.sync( './string-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('string-prototype algorithms', function() {
    it('correctly implements charAt', function() {
        const str = 'abcdefg';
        expect(charAt(str, 3)).to.equal(str.charAt(3));
        expect(charAt(str, 10)).to.equal(str.charAt(10));
    });
    
    it('correctly implements concat', function() {
        const str = 'abcdefg';
        const extraStr = 'hijklmnopqrstuvwxyz';
        expect(concat(str, extraStr)).to.equal(str.concat(extraStr));
    });
    
    it('correctly implements endsWith', function() {
        const str = 'abcdefg';
        expect(endsWith(str, 'g')).to.equal(str.endsWith('g'));
        expect(endsWith(str, 'g', 3)).to.equal(str.endsWith('g', 3));
        expect(endsWith(str, 'z')).to.equal(str.endsWith('z'));
    });
    
    it('correctly implements includes', function() {
        const str = 'abcdefg';
        const doesInclude = 'bcd';
        const doesntInclude = 'xyz';
        expect(includes(str, doesInclude)).to.equal(str.includes(doesInclude));
        expect(includes(str, doesntInclude)).to.equal(str.includes(doesntInclude));
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