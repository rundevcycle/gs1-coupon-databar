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

module.exports = GS1Coupon;
