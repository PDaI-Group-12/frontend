import {useAuth} from "../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {Button, FormControl, Stack, TextField} from "@mui/material";
import {useLabel} from "../hooks/useLabel.ts";
import {useLogin} from "../services/auth.ts";
import {useEffect, useState} from "react";
import {isPasswordInvalid, isUsernameInvalid} from "../util/validator.ts";
import {useSnackbar} from "notistack";

export function LoginPage() {

    const {isAuthorized, login} = useAuth()
    const {enqueueSnackbar} = useSnackbar();

    console.log(isAuthorized)

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginMutation = useLogin()

    useLabel().setLabel("Login")

    useEffect(() => {
        // FIXME Fix later incorrect navigation after login or if already log in
        if (isAuthorized) navigate("profile")
    })

    return (
        <form>
            <FormControl fullWidth>
                <Stack spacing={2}>
                    <TextField label="Username" variant="outlined"
                               error={isUsernameInvalid(username) && !loginMutation.isIdle} type="text" required
                               onChange={(event) => {
                                   setUsername(event.target.value);
                               }} value={username}/>
                    <TextField label="Password" variant="outlined"
                               error={isPasswordInvalid(password) && !loginMutation.isIdle} type="password" required
                               onChange={(event) => {
                                   setPassword(event.target.value)
                               }} value={password}/>
                    <Button type="submit" variant="contained"
                            disabled={isPasswordInvalid(password) || isUsernameInvalid(username)} onClick={(event) => {
                        if (isPasswordInvalid(password) || isUsernameInvalid(username)) return

                        event.preventDefault()

                        loginMutation.mutate({
                            username: username,
                            password: password
                        }, {
                            onSuccess: (data) => {
                                enqueueSnackbar("Welcome back", {variant: "success"})
                                login(data.token)
                            },
                            onError: () => {
                                enqueueSnackbar(loginMutation.error?.message ?? "Something went wrong", {variant: "error"})
                            },
                            onSettled: () => {
                                setPassword("")
                            }
                        })
                    }}>Login</Button>
                </Stack>
            </FormControl>
        </form>
    )
}