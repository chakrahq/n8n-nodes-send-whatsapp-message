"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chakraApiRequest = chakraApiRequest;
async function chakraApiRequest(method, resource, body = undefined) {
    const options = {
        method: method,
        body,
        url: `https://api.chakrahq.com${resource}`,
        json: true,
    };
    return this.helpers.httpRequestWithAuthentication.call(this, 'chakraWhatsappApi', options);
}
//# sourceMappingURL=transport.js.map