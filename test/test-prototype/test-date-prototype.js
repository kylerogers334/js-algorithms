/* global d1 d2 */
'use strict';
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-datetime'));

const glob = require( 'glob' );
const path = require( 'path' );

glob.sync( './date-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('date-prototype algorithms', function() {
    beforeEach(function() {
        global.d1 = new Date();
        global.d2 = new Date(1992, 6, 15, 11, 22, 330);
    });
    
    it('correctly implements getDate', function() {
        expect(getDate(d1)).to.equal(d1.getDate());
        expect(getDate(d2)).to.equal(d2.getDate());
    });
    
    it('correctly implements getDay', function() {
        expect(getDay(d1)).to.equal(d1.getDay());
        expect(getDay(d2)).to.equal(d2.getDay());
    });
    
    it('correctly implements getFullYear', function() {
        expect(getFullYear(d1)).to.equal(d1.getFullYear());
        expect(getFullYear(d2)).to.equal(d2.getFullYear());
    });
    
    it('correctly implements getHours', function() {
        expect(getHours(d1)).to.equal(d1.getHours());
        expect(getHours(d2)).to.equal(d2.getHours());
    });
    
    it('correctly implements getMilliseconds', function() {
        expect(getMilliseconds(d1)).to.equal(d1.getMilliseconds());
        expect(getMilliseconds(d2)).to.equal(d2.getMilliseconds());
    });

    it('correctly implements getMinutes', function() {
        expect(getMinutes(d1)).to.equal(d1.getMinutes());
        expect(getMinutes(d2)).to.equal(d2.getMinutes());
    });
    
    it('correctly implements getMonth', function() {
        expect(getMonth(d1)).to.equal(d1.getMonth());
    });
    
    it('correctly implements getSeconds', function() {
        expect(getSeconds(d1)).to.equal(d1.getSeconds());
        expect(getSeconds(d2)).to.equal(d2.getSeconds());
    });
    
    it('correctly implements getTime', function() {
        expect(getTime(d1)).to.equal(d1.getTime());
        expect(getTime(d2)).to.equal(d2.getTime());
    });
    
    it('correctly implements getTimezoneOffset', function() {
        expect(getTimezoneOffset(d1)).to.equal(d1.getTimezoneOffset());
        expect(getTimezoneOffset(d2)).to.equal(d2.getTimezoneOffset());
    });
    
    it('correctly implements getUTCDate', function() {
        expect(getUTCDate(d1)).to.equal(d1.getUTCDate());
        expect(getUTCDate(d2)).to.equal(d2.getUTCDate());
    });

    it('correctly implements getUTCDay', function() {
        expect(getUTCDay(d1)).to.equal(d1.getUTCDay());
        expect(getUTCDay(d2)).to.equal(d2.getUTCDay());
    });
    
    it('correctly implements getUTCFullYear', function() {
        expect(getUTCFullYear(d1)).to.equal(d1.getUTCFullYear());
        expect(getUTCFullYear(d2)).to.equal(d2.getUTCFullYear());
    });
    
    it('correctly implements getUTCHours', function() {
        expect(getUTCHours(d1)).to.equal(d1.getUTCHours());
        expect(getUTCHours(d2)).to.equal(d2.getUTCHours());
    });
    
    it('correctly implements getUTCMilliseconds', function() {
        expect(getUTCMilliseconds(d1)).to.equal(d1.getUTCMilliseconds());
        expect(getUTCMilliseconds(d2)).to.equal(d2.getUTCMilliseconds());
    });
    
    it('correctly implements getUTCMinutes', function() {
        expect(getUTCMinutes(d1)).to.equal(d1.getUTCMinutes());
        expect(getUTCMinutes(d2)).to.equal(d2.getUTCMinutes());
    });
    
    it('correctly implements getUTCMonth', function() {
        expect(getUTCMonth(d1)).to.equal(d1.getUTCMonth());
    });
    
    it('correctly implements getUTCSeconds', function() {
        expect(getUTCSeconds(d1)).to.equal(d1.getUTCSeconds());
        expect(getUTCSeconds(d2)).to.equal(d2.getUTCSeconds());
    });
    
    it('correctly implements setDate', function() {
        expect(setDate(d1, 5)).to.equal(d1.setDate(5));
        expect(setDate(d2, 10)).to.equal(d2.setDate(10));
    });
    
    it('correctly implements setFullYear', function() {
        expect(setFullYear(d1, 1991)).to.equal(d1.setFullYear(1991));
        expect(setFullYear(d2, 2000)).to.equal(d2.setFullYear(2000));
    });
    
    it.skip('correctly implements setHours', function() {
        
    });
    
    it.skip('correctly implements setMilliseconds', function() {
        
    });
    
    it.skip('correctly implements setMinutes', function() {
        
    });
    
    it.skip('correctly implements setMonth', function() {
        
    });
    
    it.skip('correctly implements setSeconds', function() {
        
    });
    
    it.skip('correctly implements setTime', function() {
        
    });
    
    it.skip('correctly implements setUTCDate', function() {
        
    });
        
    it.skip('correctly implements setUTCFullYear', function() {
        
    });
        
    it.skip('correctly implements setUTCHours', function() {
        
    });
        
    it.skip('correctly implements setUTCMilliseconds', function() {
        
    });
        
    it.skip('correctly implements setUTCMonth', function() {
        
    });
        
    it.skip('correctly implements setUTCSeconds', function() {
        
    });
        
    it.skip('correctly implements toDateString', function() {
        
    });
        
    it.skip('correctly implements toISOString', function() {
        
    });
        
    it.skip('correctly implements toJSON', function() {
        
    });
        
    it.skip('correctly implements toTimeString', function() {
        
    });
        
    it('correctly implements toUTCString', function() {
        expect(toUTCString(d1)).to.equal(d1.toUTCString());
        expect(toUTCString(d2)).to.equal(d2.toUTCString());
    });
});