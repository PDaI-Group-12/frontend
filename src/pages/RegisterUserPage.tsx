import {useSnackbar} from "notistack";
import {useLabel} from "../hooks/useLabel.ts";
import {useEffect, useState} from "react";
import {Button, Checkbox, FormControl, FormControlLabel, Stack, TextField} from "@mui/material";
import {
    isFirstNameInvalid,
    isIBANInvalid,
    isLastNameInvalid,
    isPasswordInvalid,
    isUsernameInvalid
} from "../util/validator.ts";
import {useRegisterMutation} from "../services/user.ts";

export function RegisterUserPage() {

    const {enqueueSnackbar} = useSnackbar();
    const {setLabel} = useLabel()

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [iban, setIBAN] = useState("")
    const [confirm, setConfirm] = useState(false);


    const registerMutation = useRegisterMutation()

    useEffect(() => setLabel("Register"))

    return (
        <form>
            <FormControl fullWidth>
                <Stack spacing={2}>
                    <TextField label="Firstname" variant="outlined"
                               error={isFirstNameInvalid(firstname) && !registerMutation.isIdle} type="text" required
                               onChange={(event) => {
                                   setFirstname(event.target.value);
                               }} value={firstname}/>
                    <TextField label="Lastname" variant="outlined"
                               error={isLastNameInvalid(lastname) && !registerMutation.isIdle} type="text" required
                               onChange={(event) => {
                                   setLastname(event.target.value);
                               }} value={lastname}/>
                    <TextField label="Username" variant="outlined"
                               error={isUsernameInvalid(username) && !registerMutation.isIdle} type="text" required
                               onChange={(event) => {
                                   setUsername(event.target.value);
                               }} value={username}/>
                    <TextField label="Password" variant="outlined"
                               error={isPasswordInvalid(password) && !registerMutation.isIdle} type="password" required
                               onChange={(event) => {
                                   setPassword(event.target.value)
                               }} value={password}/>
                    <TextField label="IBAN" variant="outlined"
                               error={isIBANInvalid(iban) && !registerMutation.isIdle} type="text" required
                               onChange={(event) => {
                                   setIBAN(event.target.value);
                               }} value={iban}/>
                    <FormControlLabel required control={<Checkbox
                        checked={confirm}
                        onChange={() => setConfirm(prevState => !prevState)}
                    />} label="Confirm information"/>
                    <Button type="submit" variant="contained"
                            disabled={!confirm} onClick={(event) => {
                        if (isPasswordInvalid(password) || isUsernameInvalid(username) || isIBANInvalid(iban) || isFirstNameInvalid(firstname) || isLastNameInvalid(lastname)) return

                        event.preventDefault()

                        registerMutation.mutate({
                            username: username,
                            password: password,
                            firstname: firstname,
                            lastname: lastname,
                            iban: iban,
                            role: "user"
                        }, {
                            onSuccess: () => {
                                enqueueSnackbar("Registration successfull", {variant: "success"})
                                setFirstname("")
                                setLastname("")
                                setUsername("")
                                setIBAN("")
                            },
                            onError: () => {
                                enqueueSnackbar(registerMutation.error?.message ?? "Something went wrong", {variant: "error"})
                            },
                            onSettled: () => {
                                setPassword("")
                            }
                        })
                    }}>Register</Button>
                </Stack>
            </FormControl>
        </form>
    )
}