"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMessageSendDescription = void 0;
const showOnlyForSessionMessageSend = {
    operation: ['sendText'],
    resource: ['sessionMessage'],
};
exports.sessionMessageSendDescription = [
    {
        displayName: 'To',
        name: 'to',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: showOnlyForSessionMessageSend,
        },
        description: 'The end user\'s phone number with the country code and without the preceding "+" character (e.g., 912233223322)',
        routing: {
            send: {
                type: 'body',
                property: 'to',
            },
        },
    },
    {
        displayName: 'Message Text',
        name: 'text',
        type: 'string',
        typeOptions: {
            rows: 4,
        },
        required: true,
        default: '',
        displayOptions: {
            show: showOnlyForSessionMessageSend,
        },
        description: 'The text message body to send',
        routing: {
            send: {
                type: 'body',
                property: 'text.body',
            },
        },
    },
    {
        displayName: 'Messaging Product',
        name: 'messaging_product',
        type: 'string',
        default: 'whatsapp',
        displayOptions: {
            show: showOnlyForSessionMessageSend,
        },
        description: 'The messaging product (must be "whatsapp")',
        routing: {
            send: {
                type: 'body',
                property: 'messaging_product',
            },
        },
    },
    {
        displayName: 'Type',
        name: 'type',
        type: 'string',
        default: 'text',
        displayOptions: {
            show: showOnlyForSessionMessageSend,
        },
        description: 'The message type (must be "text" for text messages)',
        routing: {
            send: {
                type: 'body',
                property: 'type',
            },
        },
    },
];
//# sourceMappingURL=send.js.map