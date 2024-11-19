import {Dispatch, ReactNode, SetStateAction} from "react";

export interface AuthContent {
    token: string
    setToken: Dispatch<SetStateAction<string>>
    isAuthorized: boolean
}

export interface DefaultProvidersProps {
    children: ReactNode
}

export interface AuthProviderProps extends DefaultProvidersProps {
    userToken: string
}

export interface ColorModeContent {
    toggleColorMode: () => void
}

export interface ThemeSwitchProviderProps {
    children: ReactNode
}
