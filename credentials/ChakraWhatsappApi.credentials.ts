import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ChakraWhatsappApi implements ICredentialType {
	name = 'chakraWhatsappApi';

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
