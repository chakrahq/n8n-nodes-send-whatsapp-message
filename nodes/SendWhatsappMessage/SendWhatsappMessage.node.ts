import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { sessionMessageDescription } from './resources/sessionMessage';
import { templateMessageDescription } from './resources/templateMessage';

export class SendWhatsappMessage implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Send WhatsApp Message',
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
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
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
			...sessionMessageDescription,
			...templateMessageDescription,
		],
	};
}
