var assert = require('assert');
var GS1Coupon = require('../src/scripts/gs1Coupon');
var GS1Transcoder = require('../src/scripts/gs1Transcoder');

describe('Array', function() {
    describe('#indexOf', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(-4), -1);
        });
    });
});


describe('GS1 Decoder', function() {
    describe('#Minimal Valid GS1', function() {
        it('should pass for a minimal GS1 code', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "8110012345698765432505223344666";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.primaryCompanyPrefix, "123456");
            assert.equal(gs1Fields.offerCode, "987654");
            assert.equal(gs1Fields.primaryPurchaseFamilyCode, "666");
        });
    });

    describe('#With Expiry Date', function() {
        it('should pass', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "81100123456987654325052233446663181231";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.expirationDate, "181231");
        });
    });

    describe('#With Start Date', function() {
        it('should pass', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "81100123456987654325052233446664180701";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.startDate, "180701");
        });
    });
});
