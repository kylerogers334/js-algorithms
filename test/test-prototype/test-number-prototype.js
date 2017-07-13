'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' );
const path = require( 'path' );

glob.sync( './number-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('number-prototype algorithms', function() {
    it('correctly implements isFinite', function() {
        expect(isFinite(100      )).to.equal(Number.isFinite(100));
        expect(isFinite(-9.0918  )).to.equal(Number.isFinite(-9.0918));
        expect(isFinite(Infinity )).to.equal(Number.isFinite(Infinity));
        expect(isFinite(-Infinity)).to.equal(Number.isFinite(-Infinity));
    });
    
    it('correctly implements isInteger', function() {
        expect(isInteger(9       )).to.equal(Number.isInteger(9))
        expect(isInteger(-890809 )).to.equal(Number.isInteger(-890809))
        expect(isInteger(Infinity)).to.equal(Number.isInteger(Infinity))
        expect(isInteger(9.9809  )).to.equal(Number.isInteger(9.9809))
        expect(isInteger(-7858.09)).to.equal(Number.isInteger(-7858.09))
    });
    
    it('correctly implements isSafeInteger', function() {
        expect(isSafeInteger(3       )).to.equal(Number.isSafeInteger(3));
        expect(isSafeInteger(Math.pow(2, 53))).to.equal(Number.isSafeInteger(Math.pow(2, 53)));
        expect(isSafeInteger(Math.pow(2, 53) - 1)).to.equal(Number.isSafeInteger(Math.pow(2, 53) - 1));
        expect(isSafeInteger(NaN     )).to.equal(Number.isSafeInteger(NaN));
        expect(isSafeInteger(Infinity)).to.equal(Number.isSafeInteger(Infinity));
        expect(isSafeInteger('3'     )).to.equal(Number.isSafeInteger('3'));
        expect(isSafeInteger(3.1     )).to.equal(Number.isSafeInteger(3.1));
        expect(isSafeInteger(3.0     )).to.equal(Number.isSafeInteger(3.0));
    });

    it.skip('correctly implements toExponential', function() {
        
    });

    it.skip('correctly implements toFixed', function() {
        
    });

    it.skip('correctly implements toPrecision', function() {
        
    });

    it('correctly implements toString', function() {
        expect(toString(1234)).to.equal((1234).toString());
        expect(toString(-890890, 15)).to.equal((-890890).toString(15));
        expect(toString(-5678, 30)).to.equal((-5678).toString(30));
        expect(toString(81, 7)).to.equal((81).toString(7));
    });
});