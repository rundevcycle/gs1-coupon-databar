"use strict";

var gs1Formatter = function() {


    function formatDate(gs1Date) {
        if (gs1Date === undefined) {
            return "";
        } else {
            let date = new Date(2000 + +gs1Date / 10000,
                +gs1Date / 100 % 100 - 1, +gs1Date % 100);
            return date.toDateString();
        }
    }


    function saveValueUnits(gs1Fields) {

    }


    function formatSaveValue(gs1Fields) {
        console.log("Save value code is " + gs1Fields.saveValueCode);
        let fmtText = "";

        let purchaseReqCode = gs1Fields.primaryPurchaseRequirementCode;
        if (gs1Fields.secondaryAdditionalPurchaseRulesCode) {
            switch (gs1Fields.saveValueAppliesToWhichItem) {
                case "1":
                    // 2nd qualifying item
                    purchaseReqCode = gs1Fields.secondaryPurchaseRequirementCode;
                    break;

                case 2:
                    // 3rd qualifying item
                    purchaseReqCode = gs1Fields.tertiaryPurchaseRequirementCode;
                    break;

                default:
                    // 1st qualifying item
                    purchaseReqCode = gs1Fields.primaryPurchaseRequirementCode;
                    break;
            }
        }


        switch (gs1Fields.saveValueCode) {
            case "1":
                switch (purchaseReqCode) {
                    case 1:
                    case 2:
                        fmtText = "Get 1 free up to $" + (gs1Fields.saveValue / 100.0).toFixed(2) + " free";
                        break;
                    case 3:
                        fmtText = "Get 1 free up to " + (gs1Fields.saveValue / 100.0).toFixed(2) + " lb free";
                        break;
                    case 4:
                        fmtText = "Get 1 free up to " + (gs1Fields.saveValue / 1000.0).toFixed(3) + " kg free";
                        break;
                    case 9:
                        fmtText = "Cashier intervention required";
                        break;
                    default:
                        if (gs1Fields.saveValue == 0) {
                            fmtText = "Get 1 free";
                        } else {
                            fmtText = "Get up to " + gs1Fields.saveValue + " free";
                        }
                        break;
                }
                break;

            case "2":
                switch (purchaseReqCode) {
                    case 1:
                    case 2:
                        fmtText = "Get $" + (gs1Fields.saveValue / 100.0).toFixed(2) + " free";
                        break;
                    case 3:
                        fmtText = "Get " + (gs1Fields.saveValue / 100.0).toFixed(2) + " lb free";
                        break;
                    case 4:
                        fmtText = "Get " + (gs1Fields.saveValue / 1000.0).toFixed(3) + " kg free";
                        break;
                    case 9:
                        fmtText = "Cashier intervention required";
                        break;
                    default:
                        fmtText = "Get " + gs1Fields.saveValue + " free";
                        break;
                }
                break;
            case "5":
                fmtText = "Save " + gs1Fields.saveValue + "%";
                break;
            case "6":
                fmtText = "Save $" + (gs1Fields.saveValue / 100.0).toFixed(2) + " on final amount";
                break;
            default:
                fmtText = "Save $" + (gs1Fields.saveValue / 100.0).toFixed(2);
                break;
        }

        return fmtText;
    }


    return {
        formatSaveValue: formatSaveValue,
        formatDate: formatDate,
    }

}();

