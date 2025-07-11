import { Page } from "@playwright/test";
import { get } from "http";

export class AGGridTable {
    protected readonly page!: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private tableHeader = this.page.locator('.ag-header-viewport .ag-header-container');
    private headerSections = {
        rowGroupText: this.tableHeader.locator('[aria-rowindex=\'1\']'),
        rowGroupSortableOptions: this.tableHeader.locator('[aria-rowindex=\'2\']'),
        rowGroupInputs: this.tableHeader.locator('[aria-rowindex=\'3\']'),
    }

    private tableSildeButton = this.page.locator('input#ag-13-input');
    private tableRightPanel = this.page.locator('div.ag-column-panel-column-select')
    private tableRightPanelButtons = this.page.locator('[data-ref="sideBarButtons"]')
    private tableHeaderSelectAllCheckbox = this.page.locator('div.ag-viewport.ag-center-cols-viewport div.ag-center-cols-container [row-id=\'1\'] div[aria-colindex=\'2\']');
    private tableBody = this.page.locator('div.ag-viewport.ag-center-cols-viewport div.ag-center-cols-container');
    private tableBodySection = {
        getRowByIndex: (index: number = 3) => this.tableBody.locator(`[row-index="${index}"]`),
        getRowBoundingBox: async () => {
            const firstRow = await this.tableBodySection.getRowByIndex().boundingBox();
            const rowHeight = firstRow?.height || 42; // Default row height if bounding box fails
            const rowWidth = firstRow?.width || 42; // Default row height if bounding box fails
            return { rowHeight, rowWidth };
        },
        getAllRows: async () => {
            const viewPort = this.page.locator('.ag-body-viewport.ag-layout-normal')
            
            const { rowHeight, rowWidth } = await this.tableBodySection.getRowBoundingBox();
            
            const tableBodyHeight = await viewPort.evaluate(el => el.scrollHeight);
            const tableBodyWidth = await viewPort.evaluate(el => el.scrollHeight);
            
            const numberOfRowsToScroll = Math.floor(tableBodyHeight / rowHeight); // Nr. of rows to scroll as steps — tune this
            const delayBetweenScrolls = 120; // ms
            
            for (let i = 0; i < numberOfRowsToScroll; i++) {
                await viewPort.evaluate((el, step) => { el.scrollBy(0, step) }, rowHeight);
                
                await this.page.waitForTimeout(delayBetweenScrolls);
            }
                                                                                     
        }
    }
}


