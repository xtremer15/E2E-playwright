import { AngularJiraClonePage } from "../pages/jira-clone/jira-clone.page";
import { LoginPage } from "../pages/login/login.page";

export type PageType = 'login' | 'jira-clone' | 'ecomm' | 'email';
export type PageInstanceType = LoginPage | AngularJiraClonePage | 'Page 2' | undefined;