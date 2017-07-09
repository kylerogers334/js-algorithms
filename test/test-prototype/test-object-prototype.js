'use strict';
require('babel-polyfill');
const expect = require('chai').expect;
const glob = require( 'glob' );
const path = require( 'path' );

glob.sync( './object-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('object-prototype algorithms', function() {
    it('correctly implements assign', function() {
        const myObj = assign({}, {foo: 'bar'}, {baz: true});
        const jsObj = Object.assign({}, {foo: 'bar'}, {baz: true});
        expect(myObj).to.deep.equal(jsObj);
    });
    
    it('correctly implements create', function() {
        function Shape() {
            this.x = 0;
            this.y = 0;
        }
        
        Shape.prototype.move = function(x, y) {
            this.x += x;
            this.y += y;
        };

        function Rectangle() {
            Shape.call(this);
        }
        
        Rectangle.prototype = create(Shape.prototype);
        Rectangle.prototype.constructor = Rectangle;
        
        const rect = new Rectangle();
        
        expect(rect instanceof Rectangle).to.equal(true);
        expect(rect instanceof Shape).to.equal(true);
    });
    
    it('correctly implements entries', function() {
        const obj = {fizz: 'buzz', bam: 'boozle'};
        expect(entries(obj)).to.deep.equal(Object.entries(obj))
    });
    
    it('correctly implements is', function() {
        const obj1 = {fizz: 'buzz', bam: 'boozle'};
        const obj2 = {fizz: 'buzz', bam: 'boozle'};
        const obj3 = {fizz: 'buzz', bam: 'BOOZLED!!!'};
        
        expect(is(obj1, obj2)).to.equal(Object.is(obj1, obj2))
        expect(is(obj1, obj3)).to.equal(Object.is(obj1, obj3))
    });
    
    it('correctly implements isExtensible', function() {
        const obj = {fizz: 'buzz', bam: 'boozle'};
        Object.preventExtensions(obj);
        expect(isExtensible(obj)).to.be.false;
    });
    
    it('correctly implements isFrozen', function() {
        const obj = {fizz: 'buzz', bam: 'boozle'};
        Object.freeze(obj);
        expect(isFrozen(obj)).to.be.true;
    });
    
    it.skip('correctly implements isSealed', function() {
        
    });
    
    it.skip('correctly implements keys', function() {
        
    });
    
    it.skip('correctly implements propertyIsEnumberable', function() {
        
    });
    
    it.skip('correctly implements setPrototypeOf', function() {
        
    });
    
    it.skip('correctly implements toLocaleString', function() {
        
    });
    
    it.skip('correctly implements toString', function() {
        
    });
    
    it.skip('correctly implements values', function() {
        
    });
});