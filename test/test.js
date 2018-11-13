var assert = require('assert');

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
            let gs1Transcoder = new GS1Transcoder();
            const barcode = "8110012345698765432505223344666";
            let gs1Fields = gs1Transcoder.decode(barcode);
            assert.equal(gs1Fields.primaryCompanyPrefix, "123456");
            assert.equal(gs1Fields.offerCode, "987654");
            assert.equal(gs1Fields.primaryPurchaseFamilyCode, "666");
        });

    });
});
