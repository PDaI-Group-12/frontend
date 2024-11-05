import {useAuth} from "../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";
import {
    Button,
    Card,
    Container,
    FormControl,
    Stack,
    TextField,
    Typography
} from "@mui/material";

export function LoginPage() {

    const {isAuthorized} = useAuth()
    const navigate = useNavigate()

    if (isAuthorized) navigate("/home")

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" paddingBottom={2}>Log In</Typography>
            <Card>
                <form>
                    <FormControl fullWidth>
                        <Stack padding={2} spacing={2}>
                            <TextField label="Username" variant="outlined" type="text" required onChange={() => {
                                // Capture login
                            }}/>
                            <TextField label="Password" variant="outlined" type="password" required onChange={() => {
                                // Capture password
                            }}/>
                            <Button type="submit" variant="contained" fullWidth onClick={() => {
                                // Authorize
                            }}>Login</Button>
                        </Stack>
                    </FormControl>
                </form>
            </Card>
        </Container>
    )
}