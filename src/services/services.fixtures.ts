import { test as baseServices } from "@playwright/test";
import { DataService } from "./Service";

export type ServicesFixtures = {
    dataService: DataService;
}


const services = baseServices.extend<ServicesFixtures>({
    dataService: ({ page }, use) => use(new DataService(page.request)),
})

export default services;
export { expect } from '@playwright/test';

