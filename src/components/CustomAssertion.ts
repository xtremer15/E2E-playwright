export interface CustomAssertion {
    assertMessage(message: string): Promise<void>;
}