import { Page, Locator, expect } from '@playwright/test';

export class TableUtils {
    private tableLocator: Locator;

    constructor(page: Page, tableSelector: string, nthIndex = 0) {
        this.tableLocator = page.locator(tableSelector).nth(nthIndex);
    }

    /** Get the header row cells */
    async getHeaderCells(): Promise<string[]> {
        const headers = this.tableLocator.locator('thead tr th');
        const count = await headers.count();
        const headerTexts:any[] = [];

        for (let i = 0; i < count; i++) {
            headerTexts.push(await headers.nth(i).innerText());
        }

        return headerTexts;
    }

    /** Get all body rows */
    getBodyRows(): Locator {
        return this.tableLocator.locator('tbody tr');
    }

    /** Iterate over all rows and cells */
    async getAllBodyCellValues(): Promise<string[][]> {
        const rows = this.getBodyRows();
        const rowCount = await rows.count();
        const allData: string[][] = [];

        for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const cells = row.locator('td');
            const cellCount = await cells.count();
            const rowData: string[] = [];

            for (let j = 0; j < cellCount; j++) {
                rowData.push(await cells.nth(j).innerText());
            }

            allData.push(rowData);
        }

        return allData;
    }

    /** Get cell value by row and column index */
    async getCellValue(rowIndex: number, columnIndex: number): Promise<string> {
        const row = this.getBodyRows().nth(rowIndex);
        const cell = row.locator('td').nth(columnIndex);
        return await cell.innerText();
    }

    /** Get value by header name for a given row */
    async getCellByHeader(rowIndex: number, headerName: string): Promise<string> {
        const headers = await this.getHeaderCells();
        const colIndex = headers.findIndex(h => h.trim().toLowerCase() === headerName.trim().toLowerCase());

        if (colIndex === -1) {
            throw new Error(`Header "${headerName}" not found in table`);
        }

        return await this.getCellValue(rowIndex, colIndex);
    }

    /** Get all rows as objects { headerName: cellValue } */
    async getAllRowsAsObjects(): Promise<Record<string, string>[]> {
        const headers = await this.getHeaderCells();
        const rows = this.getBodyRows();
        const rowCount = await rows.count();

        const result: Record<string, string>[] = [];

        for (let i = 0; i < rowCount; i++) {
            const rowObj: Record<string, string> = {};
            const cells = rows.nth(i).locator('td');
            const cellCount = await cells.count();

            for (let j = 0; j < cellCount; j++) {
                const header = headers[j] || `Column${j + 1}`;
                rowObj[header] = await cells.nth(j).innerText();
            }

            result.push(rowObj);
        }

        return result;
    }
}
