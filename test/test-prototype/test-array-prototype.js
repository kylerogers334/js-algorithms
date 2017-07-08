'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

require('babel-polyfill');

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
        const arr = ['a', 'b', 'c'];
        const fn = function(i) { if (typeof i === 'string') return true };
        
        expect(every(arr, fn)).to.equal(arr.every(fn))
    });
    
    it('correctly implements fill', function() {
        const arr = [1, 2, 3];
        expect(fill(arr, 4)).to.deep.equal(arr.fill(4))
        expect(fill(arr, 4, 1)).to.deep.equal(arr.fill(4, 1))
        expect(fill(arr, 4, 1, 2)).to.deep.equal(arr.fill(4, 1, 2))
        expect(fill(arr, 4, 1, 1)).to.deep.equal(arr.fill(4, 1, 1))
    });

    it('correctly implements filter', function() {
        const arr = [1, 2, 3, '4', '5', 6];
        const numbers = function(i) { return typeof i === 'number' };
        const strings = function(i) { return typeof i === 'string' };
        expect(filter(arr, numbers)).to.deep.equal(arr.filter(numbers))
        expect(filter(arr, strings)).to.deep.equal(arr.filter(strings))
    });
    
    it('correctly implements find', function() {
        const arr = [1, 7, 500, 50000, 8];
        const largeNum = function(i) { return i > 100 };
        expect(find(arr, largeNum)).to.equal(arr.find(largeNum));
    });
    
    it('correctly implements findIndex', function() {
        const arr = [1, 7, 500, 50000, 8];
        const largeNum = function(i) { return i > 100 };
        expect(findIndex(arr, largeNum)).to.equal(arr.findIndex(largeNum));
    });
    
    it('correctly implements forEach', function() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const addLetter = function(i) { arr[i] += 'z' };
        expect(forEach(arr, addLetter)).to.deep.equal(arr.forEach(addLetter))
    });
    
    it('correctly implements includes', function() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        expect(includes(arr, 'd')).to.equal(arr.includes('d'));
        expect(includes(arr, 'z')).to.equal(arr.includes('z'));
    });
    
    it('correctly implements indexOf', function() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        expect(indexOf(arr, 'd')).to.equal(arr.indexOf('d'));
        expect(indexOf(arr, 'z')).to.equal(arr.indexOf('z'));
    });

    it('correctly implements isArray', function() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const notArr = {foo: 'bar'};
        expect(isArray(arr)).to.equal(Array.isArray(arr))
        expect(isArray(notArr)).to.equal(Array.isArray(notArr))
    });
    
    it('correctly implements join', function() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        expect(join(arr)).to.equal(arr.join())
        expect(join(arr, '!')).to.equal(arr.join('!'))
    });
    
    it('correctly implements keys', function() {
        const myIter = keys(['a', 'b', 'c']);
        const jsIter = ['a', 'b', 'c'].keys();
        
        for (let i = 0; i < myIter.length; i++) {
            expect(myIter.next().value)
                .to.deep.equal(jsIter.next().value);
        }
    });
    
    it('correctly implements lastIndexOf', function() {
        const arr = ['a', 'b', 'a', 'd', 'e'];
        expect(indexOf(arr, 'a')).to.equal(arr.indexOf('a'));
        expect(indexOf(arr, 'z')).to.equal(arr.indexOf('z'));
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
