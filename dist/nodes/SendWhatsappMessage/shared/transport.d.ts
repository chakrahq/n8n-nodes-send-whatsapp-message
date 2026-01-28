import type { IHookFunctions, IExecuteFunctions, IExecuteSingleFunctions, ILoadOptionsFunctions, IHttpRequestMethods, IDataObject } from 'n8n-workflow';
export declare function chakraApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: IHttpRequestMethods, resource: string, body?: IDataObject | undefined): Promise<any>;
