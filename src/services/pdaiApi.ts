import {
    ApiMessage,
    AuthToken,
    EmployeesResponse,
    HistoryResponse,
    UnpaidSalaryResponse,
    User,
    UserWithSalary
} from "./types.ts";

/*  This file and folder will be used for backend api request implements  */
const hostUrl: string = "http://localhost:3000"

/*   AUTH   */
export const registration = async (user: User): Promise<ApiMessage> => {
    const response = await fetch(`${hostUrl}/auth/register`, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(user)
    })

    if (response.status !== 201) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as ApiMessage
}

export const login = async (user: User): Promise<AuthToken> => {
    const response = await fetch(`${hostUrl}/auth/login`, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(user)
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as AuthToken
}

/*   USER   */
export const getUser = async (token: string): Promise<UserWithSalary> => {
    const response = await fetch(`${hostUrl}/user`, {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as UserWithSalary
}

export const updateUser = async (token: string, user: User): Promise<User> => {
    const response = await fetch(`${hostUrl}/user/edit`, {
        method: "PUT", headers: {
            "Authorization": `Bearer: ${token}`,
            "Content-Type": "application/json"
        }, body: JSON.stringify(user)
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as User
}

export const getEmployees = async (token: string): Promise<EmployeesResponse> => {
    const response = await fetch(`${hostUrl}/user/employees`, {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as EmployeesResponse
}

export const getHistory = async (token: string): Promise<HistoryResponse> => {
    const response = await fetch(`${hostUrl}/user/history`, {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as HistoryResponse
}

/*      */
export const getUnpaidSalary = async (token: string): Promise<UnpaidSalaryResponse> => {
    const response = await fetch(`${hostUrl}/salary/unpaid`, {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as UnpaidSalaryResponse
}

