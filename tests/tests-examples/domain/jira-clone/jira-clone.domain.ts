import { PageFactory } from "../../../../src/factory/page-factory";
import { AngularJiraClonePage } from "../../../../src/pages/jira-clone/jira-clone.page";
import { LoginPage } from "../../../../src/pages/login/login.page";

export class AngularJiraCloneDomain {
    private jiraClonePage: AngularJiraClonePage;
    constructor(page: any) {
        this.jiraClonePage = PageFactory.createPage<AngularJiraClonePage>(page, 'jira-clone') as AngularJiraClonePage;
    }

    public async clickMailwindBtn() {
        this.jiraClonePage.clickMailwindBtn();
    }
}