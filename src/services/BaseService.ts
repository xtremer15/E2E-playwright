import { APIRequestContext, APIResponse, Request, expect } from "@playwright/test";
import { ReadStream } from "fs";
import { Serializable } from "playwright-core/types/structs";
const fs = require('fs')


export abstract class BaseService {
    protected async verifyOkStatusCode(response: APIResponse): Promise<void> {
        if (await response.status) {
            await expect(response, `200 Status code was not displayed.`).toBeOK();
        }
    }


    protected async verifyStatysCode(response: APIResponse, statusToCheck: string): Promise<void> {
        if (await response.status) {
            await expect(response.status, 'Status code validation failed').toEqual(statusToCheck);
        }
    }

    protected async verifyResponseBody(expectedResponseBodyParams: string, responsePart: JSON, responseType: string): Promise<void> {
        let status = true;
        let responseParamName = `Parameter`;
        const headers = expectedResponseBodyParams.split("|");
        const responseToString = JSON.stringify(responsePart).trim();
        for (let headerKey of headers) {
            if (!(responseToString.includes(headerKey.trim()))) {
                status = false;
                responseParamName = responseParamName + `, ` + headerKey;
                break;
            }
        }
        expect(status, `${responseParamName} was not present in ${responseType}`).toBe(true);
    }

    protected async verifyResponseHeader(expectedResponseHeaderParams: string, responsePart: Array<{ name: string, value: string }>, responseType: string): Promise<void> {
        let status = true;
        let responseParamName = `Parameter`;
        for (let responseKey of responsePart) {
            if (!(expectedResponseHeaderParams.includes(responseKey.name.trim()))) {
                status = false;
                responseParamName = responseParamName + ' ,' + responseKey.name;
                break;
            }
        }
        expect(status, `${responseParamName} was not present in ${responseType}`).toBe(true);
    }

    protected async readValuesFromTextFile(fileName: string): Promise<string> {
        return fs.readFileSync(`./utils/api/${fileName}.txt`, `utf8`);
    }


    protected async toJsonData(response: APIResponse): Promise<APIResponse> {
        return await response.json();
    }

    protected async getStatusCode(response: APIResponse): Promise<number> {
        return await response.status();
    }

    protected async checkErorStatus(response: APIResponse): Promise<void> {
        const stausCode = await this.getStatusCode(response);
        if (stausCode === 400 || stausCode === 500) {
            console.warn('API is down');
        }
    }
}