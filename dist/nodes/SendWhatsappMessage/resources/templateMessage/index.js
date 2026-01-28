"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateMessageDescription = void 0;
const send_1 = require("./send");
const showOnlyForTemplateMessage = {
    resource: ['templateMessage'],
};
exports.templateMessageDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForTemplateMessage,
        },
        options: [
            {
                name: 'Send Template Message',
                value: 'send',
                action: 'Send a template message',
                description: 'Send a WhatsApp template message to a phone number',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/v1/ext/plugin/whatsapp/{{$parameter.pluginId}}/phoneNumber/{{$parameter.phoneNumber}}/send-template-message',
                    },
                },
            },
        ],
        default: 'send',
    },
    {
        displayName: 'Plugin ID',
        name: 'pluginId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: showOnlyForTemplateMessage,
        },
        description: 'The WhatsApp plugin ID where you have connected your WhatsApp account. It\'s a UUID. You can copy it from the plugin details page URL /admin/plugin/d83e1d23-50b8-4d87-8f92-842a0ac516f6. The last part of the URL is the plugin ID',
    },
    {
        displayName: 'Phone Number',
        name: 'phoneNumber',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: showOnlyForTemplateMessage,
        },
        description: 'Provide a fully qualified phone number including country code and without "+" and any formatting characters. Valid examples: 913399113344, 13323458424',
    },
    ...send_1.templateMessageSendDescription,
];
//# sourceMappingURL=index.js.map