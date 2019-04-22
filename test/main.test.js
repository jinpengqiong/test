var expect = require('chai').expect;
var addNum = require('../src/main')
var jsdom = require('mocha-jsdom')

describe('test first', function(){
    jsdom()
    describe('test sum', function(){
        it('plus', function(){
            expect(addNum(2,4)).to.be.equal(6)
        })
    })
})