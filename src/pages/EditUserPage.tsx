import {Card, Container, Fab, FormControl, Stack, TextField, Typography} from "@mui/material";
import {Employee} from "./types.ts";
import {Edit, Save} from "@mui/icons-material";
import {CSSProperties, FormEvent, useState} from "react";

export function EditUserPage() {

    const exampleEmployee: Employee = {
        id: 1,
        fname: "John",
        lname: "Doe",
        iban: "FI 1234 123 12",
        role: "worker"
    }

    const [firstName, setFirstName] = useState(exampleEmployee.fname)
    const [lastName, setLastName] = useState(exampleEmployee.lname)
    const [password, setPassword] = useState("")
    const [iban, setIBAN] = useState(exampleEmployee.iban)
    const [isEdit, setIsEdit] = useState(false);

    // TODO Extract with typography into custom component
    const worldBreaker: CSSProperties = {
        wordBreak: "break-word"
    }

    //TODO Later extract checks to other file to share them between login, edit and else

    const isPasswordInvalid = (): boolean => {
        //TODO Replace it with regex later after meeting with a team
        return !(password.length > 0)
    }

    const isFirstNameInvalid = (): boolean => {
        //TODO Replace it with regex later after meeting with a team
        return !(firstName.length > 0)
    }

    const isLastNameInvalid = (): boolean => {
        //TODO Replace it with regex later after meeting with a team
        return !(lastName.length > 0)
    }

    const isIBANInvalid = (): boolean => !/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(iban.replace(/\s+/g, ''));

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" textAlign="center" paddingBottom={2}>Profile</Typography>
            <Card>
                <form onSubmit={(event: FormEvent) => {
                    event.preventDefault()

                    if (isFirstNameInvalid() || isLastNameInvalid() || isPasswordInvalid() || isIBANInvalid()) return

                    setIsEdit(false)
                    setPassword("") //TODO Remove later while add integration with backend
                }}>
                    <FormControl fullWidth>
                        <Stack padding={2} spacing={2}>
                            {
                                isEdit ? <>
                                    <TextField
                                        label="First Name"
                                        //TODO Remove if backend uses PATCH, else left unchanged
                                        required
                                        error={isFirstNameInvalid()}
                                        placeholder={exampleEmployee.fname}
                                        variant="standard"
                                        type="text"
                                        value={firstName}
                                        onChange={event => setFirstName(event.target.value.trim())}
                                    />
                                    <TextField
                                        label="Last Name"
                                        //TODO Remove if backend uses PATCH, else left unchanged
                                        required
                                        error={isLastNameInvalid()}
                                        placeholder={exampleEmployee.lname}
                                        variant="standard"
                                        type="text"
                                        value={lastName}
                                        onChange={event => setLastName(event.target.value.trim())}
                                    />
                                    <TextField
                                        label="Password"
                                        //TODO Remove if backend uses PATCH, else left unchanged
                                        required
                                        error={isPasswordInvalid()}
                                        placeholder="Dont use qwerty"
                                        variant="standard"
                                        type="password"
                                        value={password}
                                        onChange={event => setPassword(event.target.value.trim())}
                                    />
                                    <TextField
                                        label="IBAN"
                                        //TODO Remove if backend uses PATCH, else left unchanged
                                        required
                                        error={isIBANInvalid()}
                                        placeholder={exampleEmployee.iban}
                                        variant="standard"
                                        type="text"
                                        value={iban}
                                        onChange={event => setIBAN(event.target.value.trim())}
                                    />
                                </> : <>
                                    <Typography style={worldBreaker}><b>First Name:</b> {firstName}</Typography>
                                    <Typography style={worldBreaker}><b>Last Name:</b> {lastName}</Typography>
                                    <Typography style={worldBreaker}><b>Password:</b> *********</Typography>
                                    <Typography style={worldBreaker}><b>IBAN:</b> {iban}</Typography>
                                </>
                            }
                        </Stack>
                        <Fab
                            onClick={() => !isEdit && setIsEdit(true)}
                            type="submit"
                            sx={{position: "fixed", bottom: 16, right: 16}}
                            size="medium"
                            color="secondary"
                        >
                            {isEdit ? <Save/> : <Edit/>}
                        </Fab>
                    </FormControl>
                </form>
            </Card>
        </Container>
    )
}