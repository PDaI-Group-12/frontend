import {DefaultProvidersProps} from "../types.ts";
import {useCallback, useEffect, useState} from "react";
import {AuthContext} from "../useAuth.ts";
import {isTokenExpired} from "../../util/validator.ts";

export const AuthProvider = (props: DefaultProvidersProps) => {
    const [token, setToken] = useState<string>(() => {
        const storedToken = localStorage.getItem("token") || ""
        return isTokenExpired(storedToken) ? "" : storedToken;
    });

    useEffect(() => {
        if (token && !isTokenExpired(token)) {
            localStorage.setItem("token", token);
        } else {
            logout();
        }
    }, [token]);

    const isAuthorized = !!token;

    const login = useCallback((newToken: string) => {
        if (!isTokenExpired(newToken)) setToken(newToken);
    }, []);

    const logout = useCallback(() => {
        setToken("");
        localStorage.removeItem("token");
    }, []);

    const contextValue = useCallback(
        () => ({token, isAuthorized, login, logout}),
        [token, isAuthorized, login, logout]
    );

    return (
        <AuthContext.Provider value={contextValue()}>
            {props.children}
        </AuthContext.Provider>
    );
};