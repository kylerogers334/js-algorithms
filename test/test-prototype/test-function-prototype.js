'use strict';
const expect = require('chai').expect;
const glob = require( 'glob' )
const path = require( 'path' );

glob.sync( './function-prototype/*.js' ).forEach( function( file ) {
    const p = path.basename(file).split('.')[0];
    global[p] = require(path.resolve(file));
});

describe('function-prototype algorithms', function() {
    it('correctly implements apply', function() {
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }

        function myFood(name, price) {
            apply(Product, this, [name, price]);
            this.category = 'food';
        }

        function jsFood(name, price) {
            Product.apply(this, [name, price]);
            this.category = 'food';
        }

        const myApply = new myFood('steak', 500);
        const jsApply = new jsFood('steak', 500);

        expect(myApply).to.deep.equal(jsApply);
    });

    it('correctly implements call', function() {
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }

        function myFood(name, price) {
            call(Product, this, name, price);
            this.category = 'food';
        }

        function jsFood(name, price) {
            Product.call(this, name, price);
            this.category = 'food';
        }

        const myCall = new myFood('steak', 500);
        const jsCall = new jsFood('steak', 500);
        
        expect(myCall).to.deep.equal(jsCall);
    });

    it('correctly implements bind', function() {
        this.x = 'global'
        const module = {
          x: 'local',
          getX: function() { return this.x; }
        };
        const myGetX = bind(module.getX, module);
        const jsGetX = module.getX.bind(module);
        
        expect(myGetX()).to.equal(jsGetX());
    });
});