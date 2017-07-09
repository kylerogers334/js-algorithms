'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
    , path = require( 'path' );

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
    
    it.skip('correctly implements entries', function() {
        
    });
    
    it.skip('correctly implements is', function() {
        
    });
    
    it.skip('correctly implements isExtensible', function() {
        
    });
    
    it.skip('correctly implements isFrozen', function() {
        
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