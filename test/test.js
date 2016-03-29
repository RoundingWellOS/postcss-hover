var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output) {
    expect(postcss([ plugin() ]).process(input).css).to.eql(output);
};

describe('postcss-focus', function () {

    it('removes hover selector', function () {
        test('a:hover {} b {}', 'b {}');
    });

    it('removes hover selector with child stylings', function () {
        test('a:hover span {} b {}', 'b {}');
    });

    it('removes hover selector with multiple selectors', function () {
        test('a:hover, b.visible {}', 'b.visible {}');
    });

    it('removes hover selector with compressed selectors', function () {
        test('a:hover,b.visible {}', 'b.visible {}');
    });

});
