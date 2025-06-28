// errors/BaseErrors.ts
interface ErrorMessages {
    [key: string]: string;
}

export const LoginErrors: ErrorMessages = {
    EMAIL_REQUIRED: 'Please enter your email',
    PASSWORD_REQUIRED: 'Please enter your password',
    MINIMUM_EMAIL_LENGTH: 'Email must be at least 2 characters',
    MINIMUM_PASSWORD_LENGTH: 'Password must be at least 2 characters',
    MAXIMUM_EMAIL_LENGTH: 'Email must be less than 30 characters',
    MAXIMUM_PASSWORD_LENGTH: 'Password must be less than 30 characters',
}