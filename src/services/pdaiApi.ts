import {
    ApiMessage,
    AuthToken,
    EmployeesResponse,
    HistoryResponse,
    MessageResponse,
    SalaryPaymentResponse,
    SaveHours,
    SaveHoursResponse,
    SavePermanent,
    SavePermanentResponse,
    UnPaidSalariesResponse,
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

export const saveHours = async (token: string, saveHours: SaveHours): Promise<SaveHoursResponse> => {
    const response = await fetch(`${hostUrl}/salary/hours`, {
        method: "POST", headers: {
            "Authorization": `Bearer: ${token}`,
            "Content-Type": "application/json"
        }, body: JSON.stringify(saveHours)
    })

    if (response.status !== 201) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as SaveHoursResponse
}

export const savePermanent = async (token: string, savePermanent: SavePermanent): Promise<SavePermanentResponse> => {
    const response = await fetch(`${hostUrl}/salary/permanent`, {
        method: "POST", headers: {
            "Authorization": `Bearer: ${token}`,
            "Content-Type": "application/json"
        }, body: JSON.stringify(savePermanent)
    })

    if (response.status !== 201) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as SavePermanentResponse
}

export const getUnpaidSalary = async (token: string): Promise<UnpaidSalaryResponse> => {
    const response = await fetch(`${hostUrl}/salary/unpaid`, {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as UnpaidSalaryResponse
}

export const deleteUser = async (token: string): Promise<MessageResponse> => {
    const response = await fetch(`${hostUrl}/user/delete`, {
        method: "DELETE", headers: {
            "Authorization": `Bearer: ${token}`
        }
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as MessageResponse
}

export const registerUser = async (register: User): Promise<MessageResponse> => {
    const response = await fetch(`${hostUrl}/auth/register`, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(register)
    })

    if (response.status !== 201) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as MessageResponse
}

export const getUnpaidSalaries = async (token: string): Promise<UnPaidSalariesResponse> => {
    const response = await fetch(`${hostUrl}/salary/listunpaid`, {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as UnPaidSalariesResponse
}

export const markSalaryPayed = async (token: string, employeeId: number, employerId: number): Promise<SalaryPaymentResponse> => {
    const response = await fetch(`${hostUrl}/salary/${employeeId}/payment/${employerId}`, {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as SalaryPaymentResponse
}