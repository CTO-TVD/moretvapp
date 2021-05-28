var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../../public"], function (require, exports, bluebird, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientAuthenticationVoiceHistory = void 0;
    var ServiceClientAuthenticationVoiceHistory = (function () {
        function ServiceClientAuthenticationVoiceHistory() {
        }
        ServiceClientAuthenticationVoiceHistory_1 = ServiceClientAuthenticationVoiceHistory;
        ServiceClientAuthenticationVoiceHistory.getConversations = function (context, targetDeviceId) {
            if (ServiceClientAuthenticationVoiceHistory_1.useMock) {
                var serviceData_1 = new public_1.MetaInfoServiceData();
                return (ServiceClientAuthenticationVoiceHistory_1.mockData ?
                    bluebird.resolve(ServiceClientAuthenticationVoiceHistory_1.mockData) :
                    ServiceClientAuthenticationVoiceHistory_1.getMockData())
                    .then(function (data) {
                    serviceData_1.responseTime = new Date();
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(data), serviceData_1);
                });
            }
            return ServiceClientAuthenticationVoiceHistory_1.getCviToken(context)
                .then(function (cviToken) { return context.serviceClient.getConversations(context, cviToken, context.apiKey, targetDeviceId); });
        };
        ServiceClientAuthenticationVoiceHistory.getPrivacySettings = function (context) {
            return ServiceClientAuthenticationVoiceHistory_1.getCviToken(context)
                .then(function (cviToken) { return context.serviceClient.getPrivacySettings(context, cviToken, context.apiKey); });
        };
        ServiceClientAuthenticationVoiceHistory.getPrivacySetting = function (context, tncId) {
            return ServiceClientAuthenticationVoiceHistory_1.getCviToken(context)
                .then(function (cviToken) { return context.serviceClient.getPrivacySetting(context, cviToken, context.apiKey, tncId); });
        };
        ServiceClientAuthenticationVoiceHistory.setPrivacySettings = function (context, agreements) {
            return ServiceClientAuthenticationVoiceHistory_1.getCviToken(context)
                .then(function (cviToken) { return context.serviceClient.setPrivacySettings(context, cviToken, context.apiKey, agreements); });
        };
        ServiceClientAuthenticationVoiceHistory.deleteConversations = function (context, conversationIds, targetDeviceId) {
            if (ServiceClientAuthenticationVoiceHistory_1.mockData) {
                var serviceData = new public_1.MetaInfoServiceData();
                if (conversationIds && conversationIds.length > 0) {
                    var newEntries = ServiceClientAuthenticationVoiceHistory_1.mockData.entries
                        .filter(function (entry) { return conversationIds.indexOf(entry.id) < 0; });
                    ServiceClientAuthenticationVoiceHistory_1.mockData.entries = newEntries;
                }
                else {
                    ServiceClientAuthenticationVoiceHistory_1.mockData.entries = [];
                }
                return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(), serviceData));
            }
            return ServiceClientAuthenticationVoiceHistory_1.getCviToken(context)
                .then(function (cviToken) { return context.serviceClient.deleteConversations(context, cviToken, context.apiKey, conversationIds, targetDeviceId); });
        };
        ServiceClientAuthenticationVoiceHistory.addConversationForTesting = function (context, targetDeviceId, macAddress, text) {
            var testClientMetadata = {
                serialNumber: targetDeviceId,
                data: {
                    target_device_id: macAddress,
                    trigger_terminal_type: "EPG_NORMED_TERMINAL_TYPE"
                }
            };
            return ServiceClientAuthenticationVoiceHistory_1.getCviToken(context)
                .then(function (cviToken) { return context.serviceClient.addConversationForTesting(cviToken, context.apiKey, testClientMetadata, text); });
        };
        ServiceClientAuthenticationVoiceHistory.getCviToken = function (context, useTmpToken) {
            if (useTmpToken === void 0) { useTmpToken = false; }
            if (useTmpToken) {
                return bluebird.resolve(ServiceClientAuthenticationVoiceHistory_1.tmpToken);
            }
            return public_2.ServiceClientZac.getAccessTokenForScope("smarthub")
                .then(function (accessToken) { return context.serviceClient.login(context, accessToken, context.apiKey); })
                .then(function (tokenResponse) { return tokenResponse.data.token; });
        };
        ServiceClientAuthenticationVoiceHistory.getMockData = function () {
            return public_1.RestClient.instance.get("mockData/voicehistory/getConversations.json")
                .then(function (data) {
                ServiceClientAuthenticationVoiceHistory_1.mockData = { entries: __spreadArray([], JSON.parse(data.responseData)) };
                return ServiceClientAuthenticationVoiceHistory_1.mockData;
            })
                .delay(4000);
        };
        var ServiceClientAuthenticationVoiceHistory_1;
        ServiceClientAuthenticationVoiceHistory.classID = 0xD00;
        ServiceClientAuthenticationVoiceHistory.useMock = false;
        ServiceClientAuthenticationVoiceHistory.tmpToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjAwNDkwMTAwMDAwMDAwMDExMDkyMDkiLCJ0cmFjaW5nIjpmYWxzZSwicHJvZmlsZSI6IkRlZmF1bHQiLCJ0ZXN0aW5nIjpmYWxzZSwiaXNzIjoidXNlcl9tYW5hZ2VtZW50IiwibG9jYWxlIjoiZGUiLCJhdWQiOlsic3ZoX2JhY2tlbmQiLCJjdmlfY29yZSIsInVzZXJfbWFuYWdlbWVudCIsImV2ZW50X2hpc3RvcnkiXSwiZXh0ZXJuYWwiOiJleUp3TW5NaU9pSlFiblV6UmpsSVV5MTZieUlzSW5BeVl5STZNVEF3TUN3aVkzUjVJam9pU2xkVUlpd2laVzVqSWpvaVFUSTFOa05DUXkxSVV6VXhNaUlzSW1Gc1p5STZJbEJDUlZNeUxVaFROVEV5SzBFeU5UWkxWeUo5LmZ5Qmh6TjA1Y2ZfS3pNSE15cjVaOVlHdHJzX29Dc2VOYnpES2d2ZWQzWVJvbG9wLWs0RzBRaDBvUG9qQ05jWGlhRTdQRHVlVlR1b0hqZ0UtUHpfWFpWdzEwVnZHX01oQS4ydmdyUkhBa3UtdFdCVjJFYlphbkZ3LndUMmRYanhfR19lU08tSzlRUVdBQnlLY3dtVFRoT1A5VTdfcDc4cE5Sdm15N2l2ek1RekMwQ1FIRUlIamdYZ0VlalA0MnltMnRQZF95aTM2elBxaUQ0cGdRelYwNU13Z2tnZzJaT1YybU9NZmxxbWdZbHYxVWRwQ0NuNWpYY0VrYlEyMHBmc0dvVERPWU9xZ1B2VUpUdkNDODB3SzNTT2VsYzRVWmkwbmNBN1hCYVNnWk5KQjc1aDVLcUNRN1RLOXdXNjBWZEtuY2hBeXdWaTJPVnJqMkZ1Yi1uTTJFcG13aWRJY21xbkZsVGRrNFF4TzdDTnBCcWxEcFBrXzdIMm9ZN3BwQ0xIaFB0eHNNdHhrTjdSNjZILU91TU9EWjA3TjhDcFdrampiY2NnWWlQTUVwWVZTR3BUcDVGeEFDNTl6UnFhcXNkRnRwaWtPV2J2MG5WRmx1cDhOVWlBNllaLTd0UnJsdXdtUVhwbjdVYi0tUFI5azdGS2t3WU9ieFJVeUtibUR3NGVTMnhiY1BUVUhtdmVKMkNQLUFESlUyWFVDSVR6cU44MmdqQ21FajFEMDFhNnFmanJoS1VETjJhbWpxU1V0SXE0OThORWFlTmI0Sm5jN0k2RUMtMENKWFEzLW5vRVVhOFp2ZC1ieGxLLXNkdFJxT0NScFQ4NTRfMm93VnB6cy04M3g4Q2RRRUFCcDY1RVMweXNNVmZKOEIxXzdDT0JwTGxVZGx3V2ZsVW0wRVhZbDBnSTFKQTU5ZlZEeXBCZG5nTjltUTd6YkNNR0FDMnZrTVRNWDFIUFBFU1lYenlPTkJham5kRXVqVWoxakRzcUg4ajF5cnNJY0x6dFEyek9IYUtlOUJGTy0yTUZZZ2RzUkFNWlFCY2lWS0JXZXUzdUFhR2FjX0EzVWNzc3NNbDFjOWg1TlR2VVpQc1NHN0EyVXlseklOenNvNXdacXlSSXpheW1faGNkREwxTGR6UXotLWs4aEdhRWJsa1BxSG5rdFZyendsdmJCX0lQdVluNTV4WjFLZVF2eF9fMHFfa2ZPdjBSUmtCT2RjbW1oYXNrVTg1Sl9ScWZFZU1uQ2p0ZnVCU0NvajA2ZlVtS0laUVFwNzJ4VGh6eHNqUFZiRDdOZjRQZEVDOUo5RERzT3hadFRJQWVhOGxMYTFfMUx4LUVjb080ZUdPczc4WnNuendCd0lXSTVxYTl4TkNZWF90OTMwR0l3OEs0YVdCNjk1Q0d2V1ZWYldhWjdkdkdNRUVZUlQ2WHktYVEtbUE2OWZQRnJpMERsV0JnUzVkM2d1TE9FVVRxWlNJcVIyNHhod2dla2lCU29VRVFlRDhoelhrTXVSdDZkRVFwRW5PM2doN1ZOU0g3Y0ZmQmxNc1JLMk9fVkxMLTJuSW9GSjJObFFfQ3I5Ylc1a2FtUzlPWHZkRWx0YXVzMjlhMm1JYlk0dDNkbWRWRU8wTUt6S0dkMHV1dnhsYWwxd1I3WWdfVGJhZkZPSW5XXzRDQVdPdGtyZzNQSzQ1Y1A4SGxPdWZnenRXZGFRbEtNVTlCcEp3dU1OUGFTQ2ZPOVRKay1jYmgzc0ppcDAtS2lRMVYwclVrZmw5S3o2NGJsNGpwdU1wU3BaMXdNenpQcVlZeHdObnVzTlR1Rjc5bWV1OGE2aWdaWFIwaVlFaWczdzJLenY5OFBxeUttb3RCNXZpWjRCaC1fZkxIcHE4aDJiSHZ4dDdrNGFjbUVpREZNVUNJcVY5U1BMdWd1VVdxOS1TT1dKSWVrbG5oWkQxdVQtaEJDNjUzT0JIOXphX1NOTVhCSktTa1NFdDZJZkw5WGlHakxOR1FIZ2p6RE82OWhJYTJ3TXRtU3k5OXk5eWxYVk5aMTBCX1VhX21RM2syX1NRZThvMi11MUVTcXRaMFZoVkdpU2YwdDNrSjBJX0tqQlY4MExwMEx0NTZpblBZTEM2NDZQWkJ3SVRRVXJuSVBRM0ZPQVBJYW5EY3llVy1LVm1YZmVFOHViak5YcW9pX0h6OUo1anlhTDNwaC1iU3VGUEZvdzFPS2lCbUFGcVd5MjRLUkpxQ1VmbS03NmpPN2YwNGFhZ0V5d1ZoYVZaUS1hSVZrOXl5bkVzU1JQdUNsSjA0aHNzV3pmanJYa3ZrMjR4WmpTUzhWYTVaUEkwcEdhWTg5VG00eUpNbHNacTZmQVIzWVI4US1kYVZLVzFGLVYxdk81LW0xVlpCaXlvRWRYekZHZ200WmhXbncxWVhlMUtOQWxocHQ0bHZmWTA2ZHVScklWX3lvOXFEZzkyenpyTlpiWXlqQjVuNWs1OTRWSTJlWDFGM0lSeFJTMXZvbU45dmtEenpHcnNEVEhFSnhRNW1TelYwM0d0aWNGcUcxMjJtcE5BUS15RXhyQ2ZySDNVYjdpZU4xSDZfcE1xZmhLQTlteHJnejJBSVZSQ1NNUV9ob0dja1l3ZkVYZXVOTTJ2TUV2WTVvTy14dmhwMlRibDY3UEZ6Wmx2cnI3NmlCNTNQQjBaQUVZMDJHMnJxTzUyZ1RJVHlXbWhVRldBOGpEcmJoYmhGSFBabVRZZ1FLUzRERnJXanFFNGFKbkdncnBzY21nYWQ4eGRLd3lDOVNCWGpUbFZlVXpsOUlRYWl4dzBXOVFraGJKWXB5S0U1LVZfMTc2dXAwUVhxSjFnVzlYb1M0Ykt6T2h0THpyTGJUSEcydXBobkNyZVJ0MFJBaUNnWUhpd3hzQU5DTjhENW5pWDI0Vm9IN1ozbUVwMWVDMy1tN202SUpHSS1FUGI3eUJzTWxna1hTTmJTWXdoQ3JydEt4azU4R216dnhwWUdsOWUxeF9uQVM0ay1XZU11OUtuRzlSTUY0bEZpTkJSTmg3OHdWZFNFOF9Ta3g0R0dUME9rWnU1T0VBVFJZako1cjFOSmUtb2NVSUZsS2FLd3ZOMVRRazdhYXRINl9oRkRVM1RqVzBJS21hM1NoZXNhYjR1R2Zla3NRQTdab2oyeTN4TmV1cmVBQXNvY1IxVnNVTzkxdnNrTnd1MzdCa0lsaVJqcDQ0OVJXVF9JbllZSTFOWFRqNHhQcWNIZWNOeDhWRkppMnRHYnFhMkxhbm1pVjNWMlY3LU5HajRqak54RnJ5S2w5Wjh4akJmSnFlMnhTdi1feFEwY3E0RndYREctSk1mTHd2b3h0ZWUtR2JTeElXS1huc3ZyX2lDT2c1bHJFQU54VGZ4Z20ybDMwOVFic2hmZFFVX2lhVEk4eTBrMjFWYnZvNTd2VlNINWs1ZkNLU24wR2FuZl9UOWFJeV9OeTI0dTZSelBlazVlNm05TmdVckNwRktJRllKRGtpeWlpTmlxYlFMNFozUEJlcnItaHRJR3ZKR3NDY2lDOXJKVGpCdU9PbzRDNjFzT3hDU3pOMWtwUjZOXzZub2ZYVzY0c0lKQVJmU28wZnRXSWpyNG83RzVqVTZ3UENXYkV3TUxGb09HcTE2eUNMY1dlVG9IdnJCZ0JEbE1DVjYyNW1tSElGVTRkMTFqQTFoaFRreEt3MnI0cGoxTkdReExoSTZiNXVKMTFDMGVLNDdUVnN1dXE5MGt1VExUMVVya0xKMFM5RVA1TGJtMm1NUDItTWxPOTUwYmtVdWRtR2NON0pveXZfZ25XaUVUZG1veDdmZ3cwZk1aZHE2M3A0QkcwcVdYaWplcW1YS29TZWJWMzNFNkkxbk5qcXhHV2F3c0FzaDBSdExQODljQndmRHJ4WG1oZzZham1JX213b0tDR09DaWY4UDNCSWNMSW1aNmRqVHdsSFlFMUpCYmxPMWoyZWp3alg2RC13SW9iSnFPVXZ4NDY1SWh0ajJmWTBXRWg0dUJYT0VzRXZ5OWh3NC1vZzZYV0hxbGxhYnUtOWRSSlMyaHkyWEtPdDJKTFBqbGFaVG42UWV1U1h1T2lmX2hTR2pBWXVHN3E5UjV2N0hvdFJGZUdJUDA4YlhydGRCdUlQdU9xT1R0MmFaU3NpSlY0bWhCVlhPNmZkY2ctTHhsS0IwRmNuQ2hwSkNIclpNU2tGTm81ejRVZFZLc05hc3d1bXNuV19jSXRzeTZOdXNkTEctZ1hvZjRPQ0ZFaW5tQVlsZjlKQlN2ZzVhZ3hnZDBTY1EuTnNhT2pGMHk3NWRTcE4yVW1MalQteDBhb1dwZ0pIblp4NlA0anZxMnd4RSIsIm5iZiI6MTU4ODY5MTk5NywiZXhwIjoxNTg4Njk5MTk4LCJ0bmNzIjp7Imxpc3RlblZvaWNlIjp0cnVlLCJkYXRhUHJpdmFjeSI6dHJ1ZSwidHJhY2tpbmciOnRydWUsInB1c2giOnRydWUsImltcHJlc3N1bSI6dHJ1ZX0sImlhdCI6MTU4ODY5MjAwMiwidGVuYW50Ijoic21hcnRodWJfbnVhbmNlIiwidHJhY2tpbmdJZCI6ImI0Yjk2NGJlLTRjMmUtNGIxMC1hNTM1LTU5MzZjYjUxZWE4NSJ9.RYTRpYz5JkS0dT4M1ld0_CTAyk6__E3hh3GQAAIDGDo";
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationVoiceHistory_1.TAG, parameters: [1] }); })
        ], ServiceClientAuthenticationVoiceHistory, "getConversations", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationVoiceHistory_1.TAG, parameters: [1, 2, 3] }); })
        ], ServiceClientAuthenticationVoiceHistory, "getPrivacySettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationVoiceHistory_1.TAG, parameters: [1, 2, 3] }); })
        ], ServiceClientAuthenticationVoiceHistory, "getPrivacySetting", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationVoiceHistory_1.TAG, parameters: [1, 2, 3] }); })
        ], ServiceClientAuthenticationVoiceHistory, "setPrivacySettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationVoiceHistory_1.TAG, parameters: [1, 2] }); })
        ], ServiceClientAuthenticationVoiceHistory, "deleteConversations", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationVoiceHistory_1.TAG, parameters: [1, 2] }); })
        ], ServiceClientAuthenticationVoiceHistory, "addConversationForTesting", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationVoiceHistory_1.TAG, parameters: [] }); })
        ], ServiceClientAuthenticationVoiceHistory, "getCviToken", null);
        ServiceClientAuthenticationVoiceHistory = ServiceClientAuthenticationVoiceHistory_1 = __decorate([
            public_1.logTag()
        ], ServiceClientAuthenticationVoiceHistory);
        return ServiceClientAuthenticationVoiceHistory;
    }());
    exports.ServiceClientAuthenticationVoiceHistory = ServiceClientAuthenticationVoiceHistory;
});
//# sourceMappingURL=ServiceClientAuthenticationVoiceHistory.js.map