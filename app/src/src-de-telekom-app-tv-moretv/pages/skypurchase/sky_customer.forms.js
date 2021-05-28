define(["require", "exports", "src/src-de-telekom-react/public", "../../translation/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SkyForms = void 0;
    var SkyInputValidor = (function () {
        function SkyInputValidor() {
        }
        SkyInputValidor.SALUTATION = new RegExp("^Herr|Frau$");
        SkyInputValidor.EMAIL = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        SkyInputValidor.DATE = new RegExp("^(3[01]|[0-2]\\d)\\.(1[0-2]|0[1-9])\\.\\d{4}$");
        SkyInputValidor.POSTALCODE = new RegExp("^[0-9]{5,5}$");
        SkyInputValidor.PHONE = new RegExp("^[0]{1}[0-9]{4,34}$");
        SkyInputValidor.IBAN = new RegExp("^[a-zA-Z]{2}[0-9]{13,32}$");
        SkyInputValidor.BIC = new RegExp("^[a-zA-Z]{6}[a-zA-Z0-9]{2,5}$");
        return SkyInputValidor;
    }());
    var SkyForms = (function () {
        function SkyForms() {
        }
        SkyForms.validateScenario = function (scenario, value) {
            if (scenario.validator === null) {
                return true;
            }
            else if (scenario.validator) {
                var matched = scenario.validator.exec(value);
                return !!matched;
            }
            else {
                return value ? value.trim().length > 0 : false;
            }
        };
        SkyForms.Person = function (context) {
            return [
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_SALUTATION), key: "Salutation", validator: SkyInputValidor.SALUTATION, type: "salutation" },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_FAMILYNAME), key: "FamilyName" },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_FIRSTNAME), key: "FirstName" },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_STREET), key: "Street" },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_HOUSENO), key: "HouseNo" },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_POSTALCODE), validator: SkyInputValidor.POSTALCODE, key: "PostalCode", warn: public_1.Filter.message(context, public_2.messagesMtv.sky_WARN_POSTALCODE) },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_CITY), key: "City" },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_ADDITION), validator: null, key: "Addition" },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_PHONE), validator: SkyInputValidor.PHONE, key: "Phone", warn: public_1.Filter.message(context, public_2.messagesMtv.sky_WARN_PHONE) },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_EMAIL), validator: SkyInputValidor.EMAIL, key: "Email", warn: public_1.Filter.message(context, public_2.messagesMtv.sky_WARN_EMAIL) },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP2_PLHO_DATEOFBIRTH), validator: SkyInputValidor.DATE, key: "DateOfBirth", warn: public_1.Filter.message(context, public_2.messagesMtv.sky_WARN_DATEOFBIRTHE) }
            ];
        };
        SkyForms.Account = function (context) {
            return [
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP3_PLHO_IBAN), key: "Iban", validator: SkyInputValidor.IBAN, warn: public_1.Filter.message(context, public_2.messagesMtv.sky_WARN_IBAN) },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP3_PLHO_BIC), key: "Bic", validator: SkyInputValidor.BIC, warn: public_1.Filter.message(context, public_2.messagesMtv.sky_WARN_BIC) },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP3_PLHO_FAMILYNAME), key: "BankAccountFamilyName" },
                { label: public_1.Filter.message(context, public_2.messagesMtv.sky_STEP3_PLHO_FIRSTNAME), key: "BankAccountFirstName" }
            ];
        };
        return SkyForms;
    }());
    exports.SkyForms = SkyForms;
});
//# sourceMappingURL=sky_customer.forms.js.map