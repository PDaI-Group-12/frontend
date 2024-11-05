import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default function MainPage() {

    const navigate = useNavigate()

    return (
        <Button variant="contained" color="success" onClick={() => navigate("login")}>Login</Button>
    )
}