'use strict';
const chai = require('chai');
const expect = chai.expect;
const chaiStats = require('chai-stats');
// Non-native implementation is prone to rounding errors
chai.use(chaiStats);
const glob = require( 'glob' );
const path = require( 'path' );

glob.sync( './math-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('math-prototype algorithms', function() {
    it('correctly implements abs', function() {
        expect(abs(-15)).to.equal(Math.abs(-15));
        expect(abs(-3.1)).to.equal(Math.abs(-3.1));
        expect(abs(400)).to.equal(Math.abs(400));
    });
    
    it('correctly implements acos', function() {
        expect(acos(0.5)).to.almost.equal(Math.acos(0.5), 10);
        expect(acos(-0.5)).to.almost.equal(Math.acos(-0.5), 10);
        expect(acos(0)).to.almost.equal(Math.acos(0), 10);
    });
    
    it('correctly implements acosh', function() {
        expect(acosh(30)).to.almost.equal(Math.acosh(30), 10);
        expect(acosh(400)).to.almost.equal(Math.acosh(400), 10);
        expect(acosh(5)).to.almost.equal(Math.acosh(5), 10);
    });
    
    it('correctly implements asin', function() {
        expect(asin(0.6)).to.almost.equal(Math.asin(0.6), 10);
        expect(asin(-0.85)).to.almost.equal(Math.asin(-0.85), 10);
        expect(asin(-0.05)).to.almost.equal(Math.asin(-0.05), 10);
    });
    
    it('correctly implements asinh', function() {
        expect(asinh(0.6)).to.almost.equal(Math.asinh(0.6), 10);
        expect(asinh(-0.85)).to.almost.equal(Math.asinh(-0.85), 10);
        expect(asinh(-0.05)).to.almost.equal(Math.asinh(-0.05), 10);
    });

    it('correctly implements atan', function() {
        expect(atan(0.5)).to.almost.equal(Math.atan(0.5), 10);
        expect(atan(-0.5)).to.almost.equal(Math.atan(-0.5), 10);
        expect(atan(0)).to.almost.equal(Math.atan(0), 10);
    });
    
    it('correctly implements atan2', function() {
        expect(atan2(0.5, 0.3)).to.almost.equal(Math.atan2(0.5, 0.3), 10);
        expect(atan2(15, 90)).to.almost.equal(Math.atan2(15, 90), 10);
        expect(atan2(0.1, 0.1)).to.almost.equal(Math.atan2(0.1, 0.1), 10);
    });
    
    it('correctly implements atanh', function() {
        expect(atanh(0.5)).to.almost.equal(Math.atanh(0.5), 10);
        expect(atanh(0.99)).to.almost.equal(Math.atanh(0.99), 10);
        expect(atanh(-0.05)).to.almost.equal(Math.atanh(-0.05), 10);
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