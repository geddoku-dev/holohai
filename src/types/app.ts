export interface AuthUser {
    _id?: string;
    email?: string | null;
    password?: string | null;
}

export interface LoginFormValues {
    username: string;
    password: string;
    saveMe?: boolean;
}
