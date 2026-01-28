"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendWhatsappMessage = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const sessionMessage_1 = require("./resources/sessionMessage");
const templateMessage_1 = require("./resources/templateMessage");
class SendWhatsappMessage {
    constructor() {
        this.description = {
            displayName: 'Send WhatsApp Message (Chakra Chat)',
            name: 'sendWhatsappMessage',
            icon: { light: 'file:../../icons/whatsapp.svg', dark: 'file:../../icons/whatsapp.dark.svg' },
            group: ['output'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Send WhatsApp messages using Chakra API',
            defaults: {
                name: 'Send WhatsApp Message',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [
                {
                    name: 'chakraWhatsappApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: 'https://api.chakrahq.com',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Session Message',
                            value: 'sessionMessage',
                        },
                        {
                            name: 'Template Message',
                            value: 'templateMessage',
                        },
                    ],
                    default: 'sessionMessage',
                },
                ...sessionMessage_1.sessionMessageDescription,
                ...templateMessage_1.templateMessageDescription,
            ],
        };
    }
}
exports.SendWhatsappMessage = SendWhatsappMessage;
//# sourceMappingURL=SendWhatsappMessage.node.js.map