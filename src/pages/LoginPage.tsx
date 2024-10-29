import {useAuth} from "../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

export function LoginPage() {

    const {isAuthorized} = useAuth()
    const navigate = useNavigate()

    if (isAuthorized) navigate("/home")

    return (
        <>
            <h1>PDaI</h1>
            <label>
                Login
                <input type="text"/>
            </label>
        </>
    )
}