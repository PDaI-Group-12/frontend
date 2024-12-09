import {useAuth} from "../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {Button, FormControl, Stack, TextField} from "@mui/material";
import {useLabel} from "../hooks/useLabel.ts";

export function LoginPage() {

    const {isAuthorized} = useAuth()
    const navigate = useNavigate()

    useLabel().setLabel("Login")

    if (isAuthorized) navigate("profile")

    return (
        <form>
            <FormControl fullWidth>
                <Stack spacing={2}>
                    <TextField label="Username" variant="outlined" type="text" required onChange={() => {
                        //TODO Capture login
                    }}/>
                    <TextField label="Password" variant="outlined" type="password" required onChange={() => {
                        //TODO Capture password
                    }}/>
                    <Button type="submit" variant="contained" onClick={(event) => {
                        //TODO Authorize
                        event.preventDefault()
                        navigate("profile")
                    }}>Login</Button>
                </Stack>
            </FormControl>
        </form>
    )
}