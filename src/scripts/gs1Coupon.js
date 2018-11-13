"use strict";

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
    this.secondaryAdditionalPurchaseRulesCode = undefined;
    this.secondaryPurchaseRequirementVLI = undefined;
    this.secondaryPurchaseRequirement = undefined;
    this.secondaryPurchaseRequirementCode = undefined;
    this.secondaryPurchaseFamilyCode = undefined;
    this.secondaryPurchaseCompanyPrefixVLI = undefined;
    this.secondaryPurchaseCompanyPrefix = undefined;

    // Optional data field 2: third qualifying purchase
    this.tertiaryPurchaseRequirementVLI = undefined;
    this.tertiaryPurchaseRequirement = undefined;
    this.tertiaryPurchaseRequirementCode = undefined;
    this.tertiaryPurchaseFamilyCode = undefined;
    this.tertiaryPurchaseCompanyPrefixVLI = undefined;
    this.tertiaryPurchaseCompanyPrefix = undefined;

    // Optional data field 3: expiry date
    this.expirationDate = undefined;

    // Optional data field 4: start date
    this.startDate = undefined;

    // Optional data field 5: serial number
    this.serialNumberVLI = undefined;
    this.serialNumber = undefined;

    // Optional data field 6: retailer ID
    this.retailerCompanyPrefixVLI = undefined;
    this.retailerCompanyPrefixOrGLN = undefined;

    // Optional data field 9: miscellaneous
    this.saveValueCode = undefined;
    this.saveValueAppliesToWhichItem = undefined;
    this.storeCouponFlag = undefined;
    this.doNotMultiplyFlag = undefined;
};


// TODO Make this a proper module.
var GS1Transcoder = function() {
    this.decode = function(gs1Databar) {
        console.log("decoder running");

        var couponRegex = /^8110/;
        if (!couponRegex.test(gs1Databar)) {
            console.error("Not a North American coupon databar.");
            return;
        }

        var gs1Fields = new GS1Coupon();

        var i = 0;
        gs1Fields.applicationIdentifer = gs1Databar.substring(i, i + 4);
        i += 4;

        gs1Fields.primaryCompanyPrefixVLI = gs1Databar.substring(i, ++i);
        gs1Fields.primaryCompanyPrefix = gs1Databar.substring(i, 
            i + 6 + +gs1Fields.primaryCompanyPrefixVLI);
        i += 6 + +gs1Fields.primaryCompanyPrefixVLI;

        gs1Fields.offerCode = gs1Databar.substring(i, i + 6);
        i += 6;

        gs1Fields.saveValueVLI = gs1Databar.substring(i, ++i);
        gs1Fields.saveValue = gs1Databar.substring(i, 
            i + +gs1Fields.saveValueVLI);
        i += +gs1Fields.saveValueVLI;

        gs1Fields.primaryPurchaseRequirementVLI = gs1Databar.substring(i, ++i);
        gs1Fields.primaryPurchaseRequirement = gs1Databar.substring(i, 
            i + +gs1Fields.primaryPurchaseRequirementVLI);
        i += +gs1Fields.primaryPurchaseRequirementVLI;

        gs1Fields.primaryPurchaseRequirementCode = gs1Databar.substring(i, ++i);

        gs1Fields.primaryPurchaseFamilyCode = gs1Databar.substring(i, i + 3);
        i += 3;

        let optionalFieldIndctr = gs1Databar.substring(i, ++i);
        
        while (+optionalFieldIndctr) {
            switch (+optionalFieldIndctr) {
                case 1:
                    // Second qualifying purchase
                    console.log("Second qualifying item");
                    gs1Fields.secondaryAdditionalPurchaseRulesCode = gs1Databar.substring(i, ++i);
                    gs1Fields.secondaryPurchaseRequirementVLI = gs1Databar.substring(i, ++i);
                    gs1Fields.secondaryPurchaseRequirement = gs1Databar.substring(i, 
                        i + +gs1Fields.secondaryPurchaseRequirementVLI);
                    i += +gs1Fields.secondaryPurchaseRequirementVLI;
        
                    gs1Fields.secondaryPurchaseRequirementCode = gs1Databar.substring(i, ++i);        
                    gs1Fields.secondaryPurchaseFamilyCode = gs1Databar.substring(i, i + 3); 
                    i += 3;
        
                    gs1Fields.secondaryPurchaseCompanyPrefixVLI = gs1Databar.substring(i, ++i);        
                    gs1Fields.secondaryPurchaseCompanyPrefix = gs1Databar.substring(i,
                        i + 6 + +gs1Fields.secondaryPurchaseCompanyPrefixVLI);
                    i += 6 + +gs1Fields.secondaryPurchaseCompanyPrefixVLI;
                    break;

                case 2:
                    // Third qualifying purchase
                    console.log("Third qualifying item");
                    gs1Fields.tertiaryPurchaseRequirementVLI = gs1Databar.substring(i, ++i);        
                    gs1Fields.tertiaryPurchaseRequirement = gs1Databar.substring(i, 
                        i + +gs1Fields.tertiaryPurchaseRequirementVLI);
                    i += +gs1Fields.tertiaryPurchaseRequirementVLI;
        
                    gs1Fields.tertiaryPurchaseRequirementCode = gs1Databar.substring(i, ++i);        
                    gs1Fields.tertiaryPurchaseFamilyCode = gs1Databar.substring(i, i + 3); 
                    i += 3;
        
                    gs1Fields.tertiaryPurchaseCompanyPrefixVLI = gs1Databar.substring(i, ++i);        
                    gs1Fields.tertiaryPurchaseCompanyPrefix = gs1Databar.substring(i,
                        i + 6 + +gs1Fields.tertiaryPurchaseCompanyPrefixVLI);
                    i += 6 + +gs1Fields.tertiaryPurchaseCompanyPrefixVLI;
                    break;

                case 3:
                    // Expiry date
                    console.log("Expiration date");
                    gs1Fields.expirationDate = gs1Databar.substring(i, i + 6);
                    i += 6;
                    break;

                case 4:
                    // Start date
                    console.log("Start date");
                    gs1Fields.startDate = gs1Databar.substring(i, i + 6);
                    i += 6;
                    break;

                case 5:
                    // Serial number
                    console.log("Serial number");
                    gs1Fields.serialNumberVLI = gs1Databar.substring(i, ++i);
                    gs1Fields.serialNumber = gs1Databar.substring(i, 
                        i + 6 + +gs1Fields.serialNumberVLI);
                    i += 6 + +gs1Fields.serialNumberVLI;
                    break;

                case 6:
                    // Retailer identification
                    console.log("Retailer identification");
                    gs1Fields.retailerCompanyPrefixVLI = gs1Databar.substring(i, ++i);
                    gs1Fields.retailerCompanyPrefixOrGLN = gs1Databar.substring(i,
                        i + 7 + +gs1Fields.retailerCompanyPrefixVLI);
                    i += 7 + +gs1Fields.retailerCompanyPrefixVLI;
                    break;

                case 9:
                    // Miscellaneous
                    console.log("Miscellaneous");
                    gs1Fields.saveValueCode = gs1Databar.substring(i, ++i);
                    gs1Fields.saveValueAppliesToWhichItem = gs1Databar.substring(i, ++i);
                    gs1Fields.storeCouponFlag = gs1Databar.substring(i, ++i);
                    gs1Fields.doNotMultiplyFlag = gs1Databar.substring(i, ++i);
                    break;
            }

            optionalFieldIndctr = gs1Databar.substring(i, ++i);
        }

        console.log(gs1Fields);
        return gs1Fields;
    }
};



$(document).ready(() => {
    var transcoder = new GS1Transcoder();
    //                                              .
    //    const barcode = "8110012345698765432505223344666320013141811015312345678966998877665544390001";
    //    const barcode = "81100123456987654325052233446661021107770123456320013141811015312345678966998877665544390001";
    const barcode = "81100123456987654325052233446661021107770123456211088811234567320013141811015312345678966998877665544390001";
    //    const barcode = "81100123456987654325052233446661021107770123456";

    $("#databar").text(barcode);

    transcoder.decode(barcode);
});



