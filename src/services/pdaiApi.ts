import {ApiMessage, AuthToken, User} from "./types.ts";

/*  This file and folder will be used for backend api request implements  */
const hostUrl: string = "https://dummy.url"

/*   AUTH   */
export const registration = async (user: User): Promise<ApiMessage> => {
    const response = await fetch(`${hostUrl}/registration`, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(user)
    })

    if (response.status !== 201) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as ApiMessage
}

export const login = async (user: User): Promise<AuthToken> => {
    const response = await fetch(`${hostUrl}/login`, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(user)
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as AuthToken
}