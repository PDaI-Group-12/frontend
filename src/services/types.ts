export interface AuthToken {
    token: string;
}

export interface ApiMessage {
    code: number;
    message: string;
}

export interface User {
    id?: number;
    username: string;
    password: string;
}