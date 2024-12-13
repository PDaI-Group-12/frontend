export interface AuthToken extends MessageResponse {
    token: string
}

export interface ApiMessage extends MessageResponse {
    code: number
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

export interface EmployeesResponse extends MessageResponse {
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

export interface HistoryResponse extends MessageResponse {
    data: HistoryData
}

export interface MessageResponse {
    message: string
}

export interface SaveHours {
    userid: number
    hours: number
}

export interface SaveHoursResponse extends MessageResponse{
    entry: SaveHours
}

export interface SavePermanent {
    userid: number
    salary: number
}

export interface SavePermanentResponse extends MessageResponse{
    entry: SavePermanent
}

export interface UnpaidSalaryResponse extends MessageResponse {
    data: UnpaidSalary
}

export interface UnpaidSalary {
    userid: number,
    unpaid_hours: number,
    hourlySalary: number,
    unpaid_permanent_salaries: number,
    totalSalary: number
}

export interface UnpaidSalaries extends UnpaidSalary {
    firstname: string
    lastname: string
    iban: string
}

export interface UnPaidSalariesResponse extends MessageResponse {
    data: UnpaidSalaries[]
}

export interface SalaryPaymentResponse extends MessageResponse {
    employeeId: number
    totalHours: number
    hourlySalary: number
    permanentSalary: number
    totalSalary: number
}