import {DefaultProvidersProps} from "../types.ts";
import {useCallback, useEffect, useState} from "react";
import {AuthContext} from "../useAuth.ts";

export const AuthProvider = (props: DefaultProvidersProps) => {
    const [token, setToken] = useState<string>(localStorage.getItem("userToken") || "");

    useEffect(() => {
        if (token) localStorage.setItem("userToken", token);
        else localStorage.removeItem("userToken");
    }, [token]);

    const isAuthorized = !!token;

    const login = useCallback((newToken: string) => setToken(newToken), []);
    const logout = useCallback(() => setToken(""), []);

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