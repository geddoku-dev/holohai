export interface AuthUser {
    id: string;
    email: string;
    password?: string | null;
}

export interface User {
    id: string;
    email: string;
}

export interface LoginFormValues {
    email: string;
    password: string;
    saveMe?: boolean;
}

export interface RegisterFormValues {
    email: string;
    password: string;
}
