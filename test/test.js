var assert = chai.assert;


describe('GS1 Decoder', function() {
        it('Minimal GS1 code', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "8110012345698765432505223344666";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.primaryCompanyPrefix, "123456");
            assert.equal(gs1Fields.offerCode, "987654");
            assert.equal(gs1Fields.primaryPurchaseFamilyCode, "666");
        });

        it('Containing an expiry date', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "81100123456987654325052233446663181231";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.expirationDate, "181231");
        });

        it('Containing a start date', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "81100123456987654325052233446664180701";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.startDate, "180701");
        });

        it('Contains a 6-digit serial number', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "811001234569876543250522334466650123456";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.serialNumber, "123456");
        });

        it('Containing a 15-digit serial number', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "811001234569876543250522334466659123456789012345";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.serialNumber, "123456789012345");
        });

        it('Containing a 7-digit retailer ID', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "8110012345698765432505223344666609876543";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.retailerCompanyPrefixOrGLN, "9876543");
        });

        it('Containing a 13-digit retailer ID', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "8110012345698765432505223344666669876543210987";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.retailerCompanyPrefixOrGLN, "9876543210987");
        });

        it('Containing miscellaneous Save Value Code', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "811001234569876543250522334466695000";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.saveValueCode, "5");
        });

        it('Containing miscellaneous Save Value Applies To Which Item', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "811001234569876543250522334466690200";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.saveValueAppliesToWhichItem, "2");
        });

        it('Containing miscellaneous Store Coupon flag', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "811001234569876543250522334466690030";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.storeCouponFlag, "3");
        });

        it('Containing miscellaneous Do Not Multiply flag', function() {
            let transcoder = new GS1Transcoder();
            const barcode = "811001234569876543250522334466690001";
            let gs1Fields = transcoder.decode(barcode);
            assert.equal(gs1Fields.doNotMultiplyFlag, "1");
        });
});
