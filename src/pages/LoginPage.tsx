import {useAuth} from "../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {
    Button,
    Container,
    FormControl,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useLabel} from "../hooks/useLabel.ts";

export function LoginPage() {

    const {isAuthorized} = useAuth()
    const navigate = useNavigate()
    useLabel().setLabel("Login")

    if (isAuthorized) navigate("profile")

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" paddingBottom={2}>Log In</Typography>
                <form>
                    <FormControl fullWidth>
                        <Stack padding={2} spacing={2}>
                            <TextField label="Username" variant="outlined" type="text" required onChange={() => {
                                //TODO Capture login
                            }}/>
                            <TextField label="Password" variant="outlined" type="password" required onChange={() => {
                                //TODO Capture password
                            }}/>
                            <Button type="submit" variant="contained" fullWidth onClick={(event) => {
                                //TODO Authorize
                                event.preventDefault()
                                navigate("profile")
                            }}>Login</Button>
                        </Stack>
                    </FormControl>
                </form>
        </Container>
    )
}