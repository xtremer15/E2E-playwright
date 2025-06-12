const fs = require('fs')
import { APIResponse, expect } from '@playwright/test';

export class API {

    async verifyOkStatusCode(response: APIResponse): Promise<void> {
        if (await response.status) {
            await expect(response, `200 Status code was not displayed.`).toBeOK();
        }
    }


    async verifyStatysCode(response: APIResponse, statusToCheck: string): Promise<void> {
        if (await response.status) {
            await expect(response.status, 'Status code validation failed').toEqual(statusToCheck);
        }
    }

    async verifyResponseBody(expectedResponseBodyParams: string, responsePart: JSON, responseType: string): Promise<void> {
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

    async verifyResponseHeader(expectedResponseHeaderParams: string, responsePart: Array<{ name: string, value: string }>, responseType: string): Promise<void> {
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

    async readValuesFromTextFile(fileName: string): Promise<string> {
        return fs.readFileSync(`./utils/api/${fileName}.txt`, `utf8`);
    }
}