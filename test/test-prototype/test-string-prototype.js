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
    
    it('correctly implements indexOf', function() {
        const str = 'abcdefg';
        expect(indexOf(str, 'd')).to.equal(str.indexOf('d'));
        expect(indexOf(str, 'd', 2)).to.equal(str.indexOf('d', 2));
        expect(indexOf(str, 'z')).to.equal(str.indexOf('z'));
    });

    it('correctly implements lastIndexOf', function() {
        const str = 'abcdedg';
        expect(lastIndexOf(str, 'd')).to.equal(str.lastIndexOf('d'));
        expect(lastIndexOf(str, 'd', 3)).to.equal(str.lastIndexOf('d', 3));
        expect(lastIndexOf(str, 'z')).to.equal(str.lastIndexOf('z'));
    });
    
    it('correctly implements padEnd', function() {
        const str = 'abc';
        expect(padEnd(str, 10)).to.equal(str.padEnd(10));
        expect(padEnd(str, 10, 'foo')).to.equal(str.padEnd(10, 'foo'));
        expect(padEnd(str, 6, '123456')).to.equal(str.padEnd(6, '123456'));
        expect(padEnd(str, 1)).to.equal(str.padEnd(1));
    });
    
    it('correctly implements padStart', function() {
        const str = 'abc';
        expect(padStart(str, 10)).to.equal(str.padStart(10));
        expect(padStart(str, 10, 'foo')).to.equal(str.padStart(10, 'foo'));
        expect(padStart(str, 6, '123456')).to.equal(str.padStart(6, '123456'));
        expect(padStart(str, 1)).to.equal(str.padStart(1));
    });
    
    it('correctly implements repeat', function() {
        const str = 'abc';
        expect(repeat(str, 10)).to.equal(str.repeat(10));
    });
    
    it('correctly implements slice', function() {
        const str = 'abcdefghijklmnopqrstuvwxyz';
        expect(slice(str, 1, 10)).to.equal(str.slice(1, 10))
        expect(slice(str, -1, -4)).to.equal(str.slice(-1, -4))
        expect(slice(str, 0, 100)).to.equal(str.slice(0, 100))
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