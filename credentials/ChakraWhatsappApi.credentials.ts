import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class ChakraWhatsappApi implements ICredentialType {
	name = 'chakraWhatsappApi';

  icon: Icon = { light: 'file:../icons/whatsapp.svg', dark: 'file:../icons/whatsapp.dark.svg' };

	displayName = 'Chakra WhatsApp API';

	documentationUrl = 'https://apidocs.chakrahq.com';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Bearer access token for Chakra API authentication',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.chakrahq.com',
			url: '/v1/health',
			method: 'GET',
		},
	};
}
