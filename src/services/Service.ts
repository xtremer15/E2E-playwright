import { APIRequestContext, APIResponse, expect } from "@playwright/test";
import { BaseService } from "./BaseService";

export class DataService extends BaseService {
    readonly request: APIRequestContext;
    readonly url!: string;

    constructor(request: APIRequestContext) {
        super();
        this.request = request;
    }


    async getData(url: string): Promise<APIResponse | undefined> {
        const response = await this.request.get(url);
        await this.verifyOkStatusCode(response);
        return await this.toJsonData(response);
    }


}