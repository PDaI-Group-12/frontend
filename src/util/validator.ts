export const isUsernameInvalid = (username: string): boolean => {
    //TODO Replace it with regex later after meeting with a team
    return !(username.length > 0)
}

export const isPasswordInvalid = (password: string): boolean => {
    //TODO Replace it with regex later after meeting with a team
    return !(password.length > 0)
}

export const isFirstNameInvalid = (firstname: string): boolean => {
    //TODO Replace it with regex later after meeting with a team
    return !(firstname.length > 0)
}

export const isLastNameInvalid = (lastname: string): boolean => {
    //TODO Replace it with regex later after meeting with a team
    return !(lastname.length > 0)
}

export const isIBANInvalid = (iban: string): boolean => !/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(iban.replace(/\s+/g, ''));