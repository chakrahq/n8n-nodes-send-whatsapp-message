"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMessageDescription = void 0;
const send_1 = require("./send");
const showOnlyForSessionMessage = {
    resource: ['sessionMessage'],
};
exports.sessionMessageDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForSessionMessage,
        },
        options: [
            {
                name: 'Send Text Message',
                value: 'sendText',
                action: 'Send a text session message',
                description: 'Send a text session message to a WhatsApp user',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/v1/ext/plugin/whatsapp/{{$parameter.pluginId}}/api/{{$parameter.whatsappApiVersion}}/{{$parameter.whatsappPhoneNumberId}}/messages',
                    },
                },
            },
        ],
        default: 'sendText',
    },
    {
        displayName: 'Plugin ID',
        name: 'pluginId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: showOnlyForSessionMessage,
        },
        description: 'The WhatsApp plugin ID where you have connected your WhatsApp account. It\'s a UUID. You can copy it from the plugin details page URL /admin/plugin/d83e1d23-50b8-4d87-8f92-842a0ac516f6. The last part of the URL is the plugin ID',
    },
    {
        displayName: 'WhatsApp API Version',
        name: 'whatsappApiVersion',
        type: 'string',
        required: true,
        default: 'v24.0',
        displayOptions: {
            show: showOnlyForSessionMessage,
        },
        description: 'The WhatsApp API version you want to use (e.g., v17.0, v19.0, v24.0)',
    },
    {
        displayName: 'WhatsApp Phone Number ID',
        name: 'whatsappPhoneNumberId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: showOnlyForSessionMessage,
        },
        description: 'Provide the WhatsApp phone number ID for the phone number you are going to use to send this message. Connected phone numbers and their IDs can be found in the plugin page.',
    },
    ...send_1.sessionMessageSendDescription,
];
//# sourceMappingURL=index.js.map