'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' );
const path = require( 'path' );

glob.sync( './sorting/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('sorting algorithms', function() {
    const sortedArr = [0,1,2,3,4,5,6,7,8,9];
    const revArr = [9,8,7,6,5,4,3,2,1,0];
    const arr = [9,4,3,0,1,8,2,7,6,5];
    
    it('sorts using bubble sort', function() {
        expect(bubbleSort.bubbleSort(arr)).to.deep.equal(sortedArr);
        expect(bubbleSort.bubbleSortReverse(arr)).to.deep.equal(revArr);
    });
    
    it('sorts using insertion sort', function() {
        expect(insertionSort(arr)).to.deep.equal(sortedArr);
    });
});