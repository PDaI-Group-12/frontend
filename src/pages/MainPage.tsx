import {useNavigate} from "react-router-dom";

export default function MainPage() {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate("login")}>Login</button>
    )
}