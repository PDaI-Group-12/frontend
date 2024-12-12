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

export interface EmployeesResponse {
    message: string
    employees: Employees[]
}

export interface Employees {
    id: number
    firstname: string
    lastname: string
}

export interface HistoryData {
    userid: number
    totalhours: number
    permanentsalary: number
}

export interface HistoryResponse {
    message: string
    data: HistoryData
}

export interface UnpaidSalary {
    userid: number,
    unpaid_hours: number,
    hourlySalary: number,
    unpaid_permanent_salaries: number,
    totalSalary: number
}