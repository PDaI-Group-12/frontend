export interface AuthToken {
    message: string
    token: string
}

export interface ApiMessage {
    code: number
    message: string
}

export interface UserWithSalary {
    user: User,
    hourlySalary: string
}

export interface User {
    id?: number
    firstname?: string
    lastname?: string
    username?: string
    password?: string
    role?: string
    iban?: string
}