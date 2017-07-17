'use strict';
require('babel-polyfill');
const expect = require('chai').expect;
const glob = require( 'glob' );
const path = require( 'path' );

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
    
    it('correctly implements copyWithin', function() {
        const arr = [1, 2, 3, 4, 5];
        
        expect(copyWithin(arr, -2)).to.deep.equal(arr.copyWithin(-2))
        expect(copyWithin(arr, 0, 3)).to.deep.equal(arr.copyWithin(0, 3))
        expect(copyWithin(arr, 0, 3, 4)).to.deep.equal(arr.copyWithin(0, 3, 4))
        expect(copyWithin(arr, -2, 3, 1)).to.deep.equal(arr.copyWithin(-2, 3, 1))
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
    
    it('correctly implements map', function() {
        const arr = [1, 2, 3, 4, 5, 6];
        const add10 = function(i) { return i + 10 };
        expect(map(arr, add10)).to.deep.equal(arr.map(add10))
    });
    
    it('correctly implements of', function() {
        // underscore added to prevent conflict with reserved word 'of'
        const arr = [1, 2, 3, 4, 5];
        expect(of(arr)).to.deep.equal(Array.of(arr));
    });
    
    it('correctly implements pop', function() {
        const arr1 = ['a', 'b', 'c', 'd', 'e'];
        const arr2 = ['a', 'b', 'c', 'd', 'e'];
        expect(pop(arr1)).to.deep.equal(arr2.pop());
    });
    
    it('correctly implements push', function() {
        const arr1 = ['a', 'b', 'c', 'd', 'e'];
        const arr2 = ['a', 'b', 'c', 'd', 'e'];
        const toAdd = ['f', 'g', 'h'];
        expect(push(arr1, 5)).to.deep.equal(arr2.push(5));
        expect(push(arr1, toAdd)).to.deep.equal(arr2.push(toAdd));
    });
    
    it('correctly implements reduce', function() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const evens = function(i) { return i % 2 === 0 };
        expect(reduce(arr, evens)).to.deep.equal(arr.reduce(evens))
    });
    
    it('correctly implements reduceRight', function() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const odds = function(i) { return i % 2 !== 0 };
        expect(reduceRight(arr, odds)).to.deep.equal(arr.reduceRight(odds))
    });
    
    it('correctly implements reverse', function() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        expect(reverse(arr)).to.deep.equal(arr.reverse())
    });
    
    it('correctly implements shift', function() {
        const arr1 = ['a', 'b', 'c', 'd', 'e'];
        const arr2 = ['a', 'b', 'c', 'd', 'e'];
        expect(shift(arr1)).to.equal(arr2.shift());
        expect(arr1).to.deep.equal(arr2);
    });
    
    it('correctly implements slice', function() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        expect(slice(arr, 1, 3)).to.deep.equal(arr.slice(1, 3))
        expect(slice(arr, 0, 2)).to.deep.equal(arr.slice(0, 2))
    });
    
    it('correctly implements some', function() {
        const bigArr = [12, 5, 8, 1, 4];
        const smallArr = [0, 5, 8, 1, 4];
        const isBig = function(i) { return i > 10 };
        expect(some(bigArr, isBig)).to.equal(bigArr.some(isBig))
        expect(some(smallArr, isBig)).to.equal(smallArr.some(isBig))
    });
    
    it('correctly implements sort', function() {
        const arr = [0, 5, 3, 2, 9, 8, 4, 1, 2, 7];
        const reverseSort = function(a, b) { return b - a };
        expect(sort(arr)).to.deep.equal(arr.sort());
        expect(sort(arr, reverseSort)).to.deep.equal(arr.sort(reverseSort));
    });
    
    it('correctly implements splice', function() {
        const myFish1 = ['angel', 'clown', 'mandarin', 'sturgeon'];
        const myFish2 = ['angel', 'clown', 'mandarin', 'sturgeon'];
        expect(splice(myFish1, 2, 0, 'drum')).to.deep.equal(myFish2.splice(2, 0, 'drum'));
    });
    
    it('correctly implements toString', function() {
        const arr = [1, 2, 3];
        expect(toString(arr)).to.equal(arr.toString());
    });
    
    it('correctly implements unshift', function() {
        const arr1 = ['a', 'b', 'c', 'd', 'e'];
        const arr2 = ['a', 'b', 'c', 'd', 'e'];
        expect(unshift(arr1, 4, 5)).to.equal(arr2.unshift(4, 5));
        expect(arr1).to.deep.equal(arr2);
    });
});
