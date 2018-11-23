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

    function formatSaveValue(gs1Fields) {
        console.log("Save value code is " + gs1Fields.saveValueCode);

        var unitType = "";
        var unitDecimals = 0;

        switch (gs1Fields.saveValueAppliesToWhichItem) {
            case "1":
                // 2nd qualifying item
                break;

            case 2:
                // 3rd qualifying item
                break;

            default:
                // 1st qualifying item
                
        }


        switch (gs1Fields.saveValueCode) {
            case undefined:
            case "0":
                return "--* Save $" + (gs1Fields.saveValue / 100.0).toFixed(2);
            case "1":
                // TODO unit is driven from the Purchase Requirement Code of the Save Value Applies To Which Item.
                if (gs1Fields.saveValue == 0) {
                    return "Get 1 free";
                } else {
                    return "Get 1 free up to $" + (gs1Fields.saveValue / 100.0).toFixed(2);
                }
            case "2":
                return "Get " + gs1Fields.saveValue + " free";
            case "5":
                return "Save " + gs1Fields.saveValue + "%";
            case "6":
                return "Save " + (gs1Fields.saveValue / 100.0).toFixed(2) + " on final transaction amount";
            default:
                return gs1Fields.saveValue;
        }

    }


    return {
        formatSaveValue: formatSaveValue,
        formatDate: formatDate,
    }

}();

