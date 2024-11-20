import {Dispatch, ReactNode, SetStateAction} from "react";

/*   Props   */
export interface DefaultProvidersProps {
    children: ReactNode
}

export interface AuthProviderProps extends DefaultProvidersProps {
    userToken: string
}

/*   Content   */
export interface AuthContent {
    token: string
    setToken: Dispatch<SetStateAction<string>>
    isAuthorized: boolean
}

export interface ColorModeContent {
    toggleColorMode: () => void
}

export interface LabelContent {
    label: string,
    setLabel: Dispatch<SetStateAction<string>>
}
