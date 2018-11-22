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


    this.FormatSaveValue = function() {
        console.log("Save value code is " + this.saveValueCode);

        var unitType = "";
        var unitDecimals = 0;

        switch (this.saveValueAppliesToWhichItem) {
            case "1":
                // 2nd qualifying item
                break;

            case 2:
                // 3rd qualifying item
                break;

            default:
                // 1st qualifying item
                
        }


        switch (this.saveValueCode) {
            case undefined:
            case "0":
                return "Save $" + (this.saveValue / 100.0).toFixed(2);
            case "1":
                // TODO unit is driven from the Purchase Requirement Code of the Save Value Applies To Which Item.
                if (this.saveValue == 0) {
                    return "Get 1 free";
                } else {
                    return "Get 1 free up to $" + (this.saveValue / 100.0).toFixed(2);
                }
            case "2":
                return "Get " + this.saveValue + " free";
            case "5":
                return "Save " + this.saveValue + "%";
            case "6":
                return "Save " + (this.saveValue / 100.0).toFixed(2) + " on final transaction amount";
            default:
                return this.saveValue;
        }

    }
};
