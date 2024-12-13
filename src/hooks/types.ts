import {Dispatch, ReactNode, SetStateAction} from "react";

/*   Props   */
export interface DefaultProvidersProps {
    children: ReactNode
}

/*   Content   */
export interface AuthContent {
    token: string;
    isAuthorized: boolean;
    login: (token: string) => void;
    logout: () => void;
}

export interface ColorModeContent {
    toggleColorMode: () => void
}

export interface LabelContent {
    label: string,
    setLabel: Dispatch<SetStateAction<string>>
}
