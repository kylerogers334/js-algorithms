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
        expect(entries(obj)).to.deep.equal(Object.entries(obj));
    });
    
    it('correctly implements is', function() {
        const obj1 = {fizz: 'buzz', bam: 'boozle'};
        const obj2 = {fizz: 'buzz', bam: 'boozle'};
        const obj3 = {fizz: 'buzz', bam: 'BOOZLED!!!'};
        
        expect(is(obj1, obj2)).to.equal(Object.is(obj1, obj2));
        expect(is(obj1, obj3)).to.equal(Object.is(obj1, obj3));
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
    
    it('correctly implements isPrototypeOf', function() {
        const obj = {very: 'doge'};
        const str = 'such wow';
        expect(isPrototypeOf(Object.prototype, obj)).to.be.true;
        expect(isPrototypeOf(String.prototype, str)).to.be.true;
    });
    
    it('correctly implements isSealed', function() {
        const obj = {fizz: 'buzz', bam: 'boozle'};
        Object.seal(obj);
        expect(isSealed(obj)).to.be.true;
    });
    
    it('correctly implements keys', function() {
        const obj = {fizz: 'buzz', bam: 'boozle'};
        expect(keys(obj)).to.deep.equal(Object.keys(obj));
    });
    
    it('correctly implements propertyIsEnumberable', function() {
        const enumObj = {fizz: 'buzz', bam: 'boozle'};
        const nonEnumObj = {fizz: 'buzz'};
        Object.defineProperty(nonEnumObj, 'bam', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: 'boozle'
        });
        
        expect(propertyIsEnumerable(enumObj, 'bam')).to.be.true;
        expect(propertyIsEnumerable(nonEnumObj, 'bam')).to.be.false;
    });
    
    it('correctly implements setPrototypeOf', function() {
        function dummyPrototype() {
            this.foo = 'bar';
            this.bar = 'foo';
        }
        const obj = new Object();
        setPrototypeOf(obj, dummyPrototype);
        expect(Object.getPrototypeOf(obj)).to.equal(dummyPrototype);
        
    });
    
    it('correctly implements toLocaleString', function() {
        const obj = {foo: 'bar'};
        expect(toLocaleString(obj)).to.equal(obj.toLocaleString());
    });
    
    it('correctly implements toString', function() {
        const obj = {foo: 'bar'};
        expect(toString(obj)).to.equal(obj.toString());
    });
    
    it('correctly implements values', function() {
        const obj = {foo: 'bar'};
        expect(values(obj)).to.deep.equal(Object.values(obj));
    });
});