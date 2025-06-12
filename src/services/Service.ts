import { APIRequestContext, APIResponse, expect } from "@playwright/test";

export class DataService {
    readonly request: APIRequestContext;
    readonly url!: string;

    constructor(request: APIRequestContext) {
        this.request = request;
    }


    async getData(url: string): Promise<APIResponse | undefined> {
        const response = await this.request.get(url);
        await this.checkErorStatus(response);
        const jsonData = await this.checkStatusOk(response);
        return jsonData
    }

    private async checkErorStatus(response: APIResponse): Promise<void> {
        const stausCode = await this.getStatusCode(response);
        if (stausCode === 400 || stausCode === 500) {
            console.warn('API is down');
        }
    }


    private async checkStatusOk(response: APIResponse) {
        if (await response.ok && response.status() === 200) {
            return this.toJsonData(response);
        }
    }

    async toJsonData(response: APIResponse): Promise<APIResponse> {
        return await response.json();
    }

    async getStatusCode(response: APIResponse): Promise<number> {
        return await response.status();
    }
}