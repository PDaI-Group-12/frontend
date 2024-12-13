import {createContext, useContext} from "react";
import {AuthContent} from "./types";

export const AuthContext = createContext<AuthContent>({
    token: "",
    isAuthorized: false,
    login: () => {
    },
    logout: () => {
    },
});

export const useAuth = () => useContext(AuthContext);