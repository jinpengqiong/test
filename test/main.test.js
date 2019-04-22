var expect = require('chai').expect;
var removeNode = require('../src/main')
var openModal = require('../src/main')
var createDocumentFragment = require('../src/main')
var handleSubmit = require('../src/main')
var handleCancel = require('../src/main')
var handleBarClick = require('../src/main')
var jsdom = require('mocha-jsdom')

describe('remove one tag', function(){
    jsdom()
    var remove = document.querySelectorAll(".icon-trash")
    befvarore(function() {
        removeNode();
    })
    it('test remove',function(done) {
        remove[1].onclick()
        expect(remove[1]).to.be.empty;
        done();
    })
})

describe('openModal', function() {
    jsdom()
    var add = document.querySelectorAll(".icon-plus")
    var modal = document.querySelector(".modal")
    before(function () {
        openModal();
    })
    it('open it', function (done) {
        add[1].onclick()
        expect(modal.style.display).to.equal('block');
        done();
    })
})

describe('createDocumentFragment', function () {
    jsdom()
    it('create node', function (done) {
        expect(createDocumentFragment()).to.be.an('object');
        done();
    })
})

describe('handleSubmit', function () {
    jsdom()
    var addButton = document.querySelector(".add");
    var modal = document.querySelector(".modal")
    before(function () {
        handleSubmit();
    })
    it('Submit', function (done) {
        addButton.onclick();
        expect(modal.style.display).to.equal('none');
        done();
    })
})

describe('handleCancel', function () {
    jsdom()
    var cancelButton = document.querySelector(".cancel")
    var closeButton = document.querySelector(".close")
    var modal = document.querySelector(".modal")
    beforeEach(function () {
        handleCancel();
    })
    it('cancel submit', function () {
        cancelButton.onclick();
        expect(modal.style.display).to.equal('none');
    })
    it('close modal', function (done) {
        closeButton.onclick();
        expect(modal.style.display).to.equal('none');
        done();
    })
})

describe('handleBarClick', function () {
    jsdom()
    var navicon = document.querySelector(".icon-navicon")
    var close = document.querySelector(".close1")
    var side = document.querySelector(".side")
    beforeEach(function () {
        handleBarClick();
    })
    it('show asider', function (done) {
        navicon.onclick();
        expect(side.style.display).to.equal('block');
    })
    it('hide asider', function (done) {
        close.onclick();
        expect(side.style.display).to.equal('none');
        done()
    })
})
