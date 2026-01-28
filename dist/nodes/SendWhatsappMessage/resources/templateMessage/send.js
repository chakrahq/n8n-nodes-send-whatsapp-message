"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateMessageSendDescription = void 0;
const showOnlyForTemplateMessageSend = {
    operation: ['send'],
    resource: ['templateMessage'],
};
exports.templateMessageSendDescription = [
    {
        displayName: 'WhatsApp Phone Number ID',
        name: 'whatsappPhoneNumberId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'Provide the WhatsApp phone number ID for the phone number you are going to use to send this message. Connected phone numbers and their IDs can be found in the plugin page.',
        routing: {
            send: {
                type: 'body',
                property: 'whatsappPhoneNumberId',
            },
        },
    },
    {
        displayName: 'Template Name',
        name: 'templateName',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'Provide the WhatsApp template name here',
        routing: {
            send: {
                type: 'body',
                property: 'templateName',
            },
        },
    },
    {
        displayName: 'Template Parameters',
        name: 'mapping',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        default: {},
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'An array of mappings of body template parameters and their values. For template {{1}}, use 1 as the schemaPropertyName.',
        options: [
            {
                name: 'values',
                displayName: 'Parameter',
                values: [
                    {
                        displayName: 'Parameter Number',
                        name: 'schemaPropertyName',
                        type: 'string',
                        default: '',
                        description: 'The property name - for template {{1}}, 1 is the schemaPropertyName',
                    },
                    {
                        displayName: 'Parameter Value',
                        name: 'schemaPropertyValue',
                        type: 'string',
                        default: '',
                        description: 'The value mapped to this property',
                    },
                ],
            },
        ],
        routing: {
            send: {
                type: 'body',
                property: 'mapping',
                value: '={{$value.values}}',
            },
        },
    },
    {
        displayName: 'Image URL',
        name: 'imageUrl',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'If your template contains an image attachment, you need to provide a public URL where the target image is hosted. You can use public media upload API to generate this URL.',
        routing: {
            send: {
                type: 'body',
                property: 'imageUrl',
            },
        },
    },
    {
        displayName: 'Video URL',
        name: 'videoUrl',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'If your template contains a video attachment, you need to provide a public URL where the target video is hosted. You can use public media upload API to generate this URL.',
        routing: {
            send: {
                type: 'body',
                property: 'videoUrl',
            },
        },
    },
    {
        displayName: 'Document URL',
        name: 'documentUrl',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'If your template contains a document attachment, you need to provide a public URL where the target document is hosted. You can use public media upload API to generate this URL.',
        routing: {
            send: {
                type: 'body',
                property: 'documentUrl',
            },
        },
    },
    {
        displayName: 'Filename',
        name: 'filename',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'When you are sending a template message containing a document in the header, you can also optionally pass the filename of the document in this field',
        routing: {
            send: {
                type: 'body',
                property: 'filename',
            },
        },
    },
    {
        displayName: 'Location Latitude',
        name: 'locationLatitude',
        type: 'number',
        default: 0,
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'If you have a location header, you can set the latitude using this parameter',
        routing: {
            send: {
                type: 'body',
                property: 'locationLatitude',
            },
        },
    },
    {
        displayName: 'Location Longitude',
        name: 'locationLongitude',
        type: 'number',
        default: 0,
        displayOptions: {
            show: showOnlyForTemplateMessageSend,
        },
        description: 'If you have a location header, you can set the longitude using this parameter',
        routing: {
            send: {
                type: 'body',
                property: 'locationLongitude',
            },
        },
    },
];
//# sourceMappingURL=send.js.map