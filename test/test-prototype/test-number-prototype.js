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
        expect(isInteger(9       )).to.equal(Number.isInteger(9));
        expect(isInteger(-890809 )).to.equal(Number.isInteger(-890809));
        expect(isInteger(Infinity)).to.equal(Number.isInteger(Infinity));
        expect(isInteger(9.9809  )).to.equal(Number.isInteger(9.9809));
        expect(isInteger(-7858.09)).to.equal(Number.isInteger(-7858.09));
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

    it('correctly implements toExponential', function() {
        const n1 = 77.1234;
        const n2 = -2.9403e4;

        expect(toExponential(n1)).to.equal(n1.toExponential());
        expect(toExponential(n1, 2)).to.equal(n1.toExponential(2));
        expect(toExponential(n1, 4)).to.equal(n1.toExponential(4));
        expect(toExponential(n2)).to.equal(n2.toExponential());
        expect(toExponential(n2, 1)).to.equal(n2.toExponential(1));
        expect(toExponential(n2, 3)).to.equal(n2.toExponential(3));
    });

    it('correctly implements toFixed', function() {
        const n = 12345.6789;
        
        expect(toFixed(n)).to.equal(n.toFixed());
        expect(toFixed(n, 2)).to.equal(n.toFixed(2));
        expect(toFixed(n, 7)).to.equal(n.toFixed(7));
    });

    it('correctly implements toPrecision', function() {
        const n = 5.123456;
        
        expect(toPrecision(n)).to.equal(n.toPrecision());
        expect(toPrecision(n, 5)).to.equal(n.toPrecision(5));
        expect(toPrecision(n, 2)).to.equal(n.toPrecision(2));
        expect(toPrecision(n, 1)).to.equal(n.toPrecision(1));
    });

    it('correctly implements toString', function() {
        expect(toString(1234)).to.equal((1234).toString());
        expect(toString(-890890, 15)).to.equal((-890890).toString(15));
        expect(toString(-5678, 30)).to.equal((-5678).toString(30));
        expect(toString(81, 7)).to.equal((81).toString(7));
    });
});