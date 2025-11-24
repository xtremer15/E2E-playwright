import winston from "winston";
import { ConsoleMessage, LaunchOptions, Logger, Page, Request, test as testLogger } from "@playwright/test";

winston.addColors({
  info: "green",
  warn: "yellow",
  error: "red",
  debug: "cyan",
});
type LogSeverity = 'verbose' | 'info' | 'warning' | 'error';

type LoggerType = {
  launchOptions: LaunchOptions;
  saveLogs: void,
}

export const winLogger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    //implement output to file or database as needed
    new winston.transports.File({ filename: 'tests.log' }),
  ],
});


export const fixtureLogger = testLogger.extend<LoggerType>({
  launchOptions: async ({ }, use) => {
    const logger: Logger = {
      isEnabled: (name: string, severity: LogSeverity) => name === 'api',
      log: (name: string, severity: LogSeverity, message: string, args: any[]) => winLogger.info(`${name} ${severity} ${message} ${args.join(' ')}`)
    }
    await use({ logger });
  },
  saveLogs: [async ({ page }, use) => {
    const getDate = () => new Date().toISOString();

    const listenerPageLoad = (page: Page, label: string) => { winLogger.info(`${getDate()} ${label}: ${page.url()}`); }
    page.on('domcontentloaded', page => listenerPageLoad(page, 'Event DOMContentLoad'));
    page.on('load', page => listenerPageLoad(page, 'Event Load'));
    page.on('console', (message: ConsoleMessage) => winLogger.info(`${getDate()} Event Console: ${message.text()}`));
    page.on('pageerror', (error: Error) => winLogger.info(`${getDate()} ## PAGE ERROR ##: ${error.message}`));

    const listenerRequest = (request: Request, label: string) => { winLogger.info(`${getDate()} ${label}: ${request.url()} ${request.resourceType()}`) };
    page.on('request', request => listenerRequest(request, 'Request'));
    page.on('requestfinished', request => listenerRequest(request, 'Request Finished'));
    page.on('requestfailed', request => listenerRequest(request, '## REQUEST FAILED ##'));

    await use();
  }, { auto: true }],
});
export { expect } from '@playwright/test';