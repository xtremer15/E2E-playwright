// errors/BaseErrors.ts
export interface ErrorMessages {
    [key: string]: string;
}

export const LoginErrors: ErrorMessages = {
    USER_REQUIRED: 'User is required.',
    PASSWORD_REQUIRED: 'Password is required.',
    MINIMUM_USER_LENGTH: 'User must be at least 2 characters',
    MINIMUM_PASSWORD_LENGTH: 'Password must be at least 2 characters',
    MAXIMUM_USER_LENGTH: 'User must be at most 30 characters',
    MAXIMUM_PASSWORD_LENGTH: 'Password must be at most 30 characters',
}