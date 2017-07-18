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
    
    it('correctly implements cbrt', function() {
        expect(cbrt(81)).to.almost.equal(Math.cbrt(81), 10);
        expect(cbrt(100000)).to.almost.equal(Math.cbrt(100000), 10);
        expect(cbrt(3)).to.almost.equal(Math.cbrt(3), 10);
    });
    
    it('correctly implements ceil', function() {
        expect(ceil(0.001)).to.equal(Math.ceil(0.001));
        expect(ceil(100.36)).to.equal(Math.ceil(100.36));
        expect(ceil(-7.87)).to.equal(Math.ceil(-7.87));
    });
    
    it('correctly implements cos', function() {
        expect(cos(0.5)).to.almost.equal(Math.cos(0.5), 10);
        expect(cos(-0.5)).to.almost.equal(Math.cos(-0.5), 10);
        expect(cos(0.123)).to.almost.equal(Math.cos(0.123), 10);
    });

    it('correctly implements cosh', function() {
        expect(cosh(0.5)).to.almost.equal(Math.cosh(0.5), 10);
        expect(cosh(-0.5)).to.almost.equal(Math.cosh(-0.5), 10);
        expect(cosh(0.123)).to.almost.equal(Math.cosh(0.123), 10);
    });
    
    it('correctly implements exp', function() {
        expect(exp(10)).to.almost.equal(Math.exp(10));
        expect(exp(5)).to.almost.equal(Math.exp(5));
        expect(exp(0.1)).to.almost.equal(Math.exp(0.1));
    });
    
    it('correctly implements expm1', function() {
        expect(exp(10)).to.almost.equal(Math.exp(10));
        expect(exp(5)).to.almost.equal(Math.exp(5));
        expect(exp(0.1)).to.almost.equal(Math.exp(0.1));
    });
    
    it('correctly implements floor', function() {
        expect(ceil(0.001)).to.equal(Math.ceil(0.001));
        expect(ceil(100.36)).to.equal(Math.ceil(100.36));
        expect(ceil(-7.87)).to.equal(Math.ceil(-7.87));
    });
    
    it('correctly implements hypot', function() {
        expect(hypot(1, 2, 3, 4)).to.almost.equal(Math.hypot(1, 2, 3, 4), 10);
        expect(hypot(-1, -3, 5000)).to.almost.equal(Math.hypot(-1, -3, 5000), 10);
        expect(hypot(5, 5)).to.almost.equal(Math.hypot(5, 5), 10);
    });
    
    it('correctly implements log', function() {
        expect(log(4)).to.almost.equal(Math.log(4), 10);
        expect(log(40)).to.almost.equal(Math.log(40), 10);
        expect(log(0.5)).to.almost.equal(Math.log(0.5), 10);
    });
    
    it('correctly implements log10', function() {
        expect(log10(4)).to.almost.equal(Math.log10(4), 10);
        expect(log10(40)).to.almost.equal(Math.log10(40), 10);
        expect(log10(0.5)).to.almost.equal(Math.log10(0.5), 10);
    });
    
    it('correctly implements log1p', function() {
        expect(log1p(4)).to.almost.equal(Math.log1p(4), 10);
        expect(log1p(40)).to.almost.equal(Math.log1p(40), 10);
        expect(log1p(0.5)).to.almost.equal(Math.log1p(0.5), 10);
    });
    
    it('correctly implements log2', function() {
        expect(log2(4)).to.almost.equal(Math.log2(4), 10);
        expect(log2(40)).to.almost.equal(Math.log2(40), 10);
        expect(log2(0.5)).to.almost.equal(Math.log2(0.5), 10);
    });
    
    it('correctly implements max', function() {
        expect(max(1, 2, 3)).to.equal(Math.max(1, 2, 3));
        expect(max(-1, 'abc', 1)).to.equal(Math.max(-1, 'abc', 1));
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