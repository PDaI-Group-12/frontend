import {useAuth} from "../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";
import {TextField, Typography} from "@mui/material";

export function LoginPage() {

    const {isAuthorized} = useAuth()
    const navigate = useNavigate()

    if (isAuthorized) navigate("/home")

    return (
        <>
            <Typography variant="h2">PDaI</Typography>
            <TextField label="Login" type="text"/>
        </>
    )
}