import {AuthProviderProps} from "../types.ts";
import {useState} from "react";
import {AuthContext} from "../useAuth.ts";

export const AuthProvider = (props: AuthProviderProps) => {

    const [token, setToken] = useState(props.userToken);

    const isAuthorized = !(!token || token === "");

    return (
        <AuthContext.Provider value={{token, setToken, isAuthorized}}>
            {props.children}
        </AuthContext.Provider>
    );
};