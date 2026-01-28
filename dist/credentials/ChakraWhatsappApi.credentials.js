"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChakraWhatsappApi = void 0;
class ChakraWhatsappApi {
    constructor() {
        this.name = 'chakraWhatsappApi';
        this.icon = { light: 'file:../icons/whatsapp.svg', dark: 'file:../icons/whatsapp.dark.svg' };
        this.displayName = 'Chakra WhatsApp API';
        this.documentationUrl = 'https://apidocs.chakrahq.com';
        this.properties = [
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                description: 'Bearer access token for Chakra API authentication',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials?.accessToken}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.chakrahq.com',
                url: '/v1/health',
                method: 'GET',
            },
        };
    }
}
exports.ChakraWhatsappApi = ChakraWhatsappApi;
//# sourceMappingURL=ChakraWhatsappApi.credentials.js.map