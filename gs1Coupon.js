'use strict';

var GS1Coupon = function() {
    this.applicationIdentifer = undefined;

    this.primaryCompanyPrefixVLI = undefined;
    this.primaryCompanyPrefix = undefined;
    this.offerCode = undefined;
    this.saveValueVLI = undefined;
    this.saveValue = undefined;
    this.primaryPurchaseRequirementVLI = undefined;
    this.primaryPurchaseRequirement = undefined;
    this.primaryPurchaseRequirementCode = undefined;
    this.primaryPurchaseFamilyCode = undefined;

    // Optional data field 1: second qualifying purchase
    this.dataField1SecondaryPurchaseIndicator = undefined;
    this.secondaryAdditionalPurchaseRulesCode = undefined;
    this.secondaryPurchaseRequirementVLI = undefined;
    this.secondaryPurchaseRequirement = undefined;
    this.secondaryPurchaseRequirementCode = undefined;
    this.secondaryPurchaseFamilyCode = undefined;
    this.secondaryPurchaseCompanyPrefixVLI = undefined;
    this.secondaryPurchaseCompanyPrefix = undefined;

    // Optional data field 2: third qualifying purchase
    this.dataField2TertiaryPurchaseIndicator = undefined;
    this.tertiaryPurchaseRequirementVLI = undefined;
    this.tertiaryPurchaseRequirement = undefined;
    this.tertiaryPurchaseRequirementCode = undefined;
    this.tertiaryPurchaseFamilyCode = undefined;
    this.tertiaryPurchaseCompanyPrefixVLI = undefined;
    this.tertiaryPurchaseCompanyPrefix = undefined;

    // Optional data field 3: expiry date
    this.dataField3ExpirationDateIndicator = undefined;
    this.expirationDate = undefined;

    // Optional data field 4: start date
    this.dataField4StartDateIndicator = undefined;
    this.startDate = undefined;

    // Optional data field 5: serial number
    this.dataField5SerialNumberIndicator = undefined;
    this.serialNumberVLI = undefined;
    this.serialNumber = undefined;

    // Optional data field 6: retailer ID
    this.dataField6RetailerIdentificationIndicator = undefined;
    this.retailerCompanyPrefixVLI = undefined;
    this.retailerCompanyPrefixOrGLN = undefined;

    // Optional data field 9: miscellaneous
    this.dataField9MiscellaneousIndicator = undefined;
    this.saveValueCode = undefined;
    this.saveValueAppliesToWhichItem = undefined;
    this.storeCouponFlag = undefined;
    this.doNotMultiplyFlag = undefined;
};


var GS1Transcoder = function() {
    this.decode = function(gs1Databar) {
        console.log("decoder running");

        var couponRegex = /^8110/;
        if (!couponRegex.test(gs1Databar)) {
            console.error("Not a North American coupon databar.");
            return;
        }

        var gs1Fields = new GS1Coupon();

        var cumulVliOffset = 0;

        var i = 0;
        gs1Fields.applicationIdentifer = gs1Databar.substring(i, i+4);
        i += 4;

        gs1Fields.primaryCompanyPrefixVLI = gs1Databar.substring(i, i+1);
        i += 1;

        gs1Fields.primaryCompanyPrefix = gs1Databar.substring(i, 
            i + 6 + +gs1Fields.primaryCompanyPrefixVLI);
        i += 6 + +gs1Fields.primaryCompanyPrefixVLI;

        gs1Fields.offerCode = gs1Databar.substring(i, i + 6);
        i += 6;

        gs1Fields.saveValueVLI = gs1Databar.substring(i, i + 1);
        i += 1;

        gs1Fields.saveValue = gs1Databar.substring(i, 
            i + +gs1Fields.saveValueVLI);
        i += +gs1Fields.saveValueVLI;

        gs1Fields.primaryPurchaseRequirementVLI = gs1Databar.substring(i,
            i + 1);
        i += 1;

        gs1Fields.primaryPurchaseRequirement = gs1Databar.substring(i, 
            i + +gs1Fields.primaryPurchaseRequirementVLI);
        i += +gs1Fields.primaryPurchaseRequirementVLI;

        gs1Fields.primaryPurchaseRequirementCode = gs1Databar.substring(i,
            i + 1);
        i += 1;

        gs1Fields.primaryPurchaseFamilyCode = gs1Databar.substring(i, i + 3);
        i += 3;

        console.log(gs1Fields);
    }
};




$(document).ready(() => {
    var transcoder = new GS1Transcoder();

    const barcode = "8110012345698765432505223344666";

    $("#databar").text(barcode);

    transcoder.decode(barcode);

});



