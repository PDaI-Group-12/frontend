import {Navigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import {useAuth} from "../hooks/useAuth.ts";
import {ProtectedRouteProps} from "./types.ts";

export function ProtectedRoute(props: ProtectedRouteProps) {

    const {isAuthorized} = useAuth();
    const {enqueueSnackbar} = useSnackbar();

    if (!isAuthorized) {
        enqueueSnackbar("Access denied. Please authorize", {variant: "warning"})
        return <Navigate to="/"/>
    }

    return <>{props.children}</>
}