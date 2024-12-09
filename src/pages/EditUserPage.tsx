import {Card, Fab, FormControl, Stack, TextField} from "@mui/material";
import {Employee} from "./types.ts";
import {Edit, Save} from "@mui/icons-material";
import {FormEvent, useState} from "react";
import {MultilineTypography} from "../components/MultilineTypography.tsx";
import {isFirstNameInvalid, isIBANInvalid, isLastNameInvalid, isPasswordInvalid} from "../util/validator.ts";
import {useLabel} from "../hooks/useLabel.ts";

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

    useLabel().setLabel("User edit")

    return (
        <Card>
            <form onSubmit={(event: FormEvent) => {
                event.preventDefault()

                if (isFirstNameInvalid(firstName)
                    || isLastNameInvalid(lastName)
                    || isPasswordInvalid(password)
                    || isIBANInvalid(iban)
                ) return

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
                                    error={isFirstNameInvalid(firstName)}
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
                                    error={isLastNameInvalid(lastName)}
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
                                    error={isPasswordInvalid(password)}
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
                                    error={isIBANInvalid(iban)}
                                    placeholder={exampleEmployee.iban}
                                    variant="standard"
                                    type="text"
                                    value={iban}
                                    onChange={event => setIBAN(event.target.value.trim())}
                                />
                            </> : <>
                                <MultilineTypography><b>First Name:</b> {firstName}</MultilineTypography>
                                <MultilineTypography><b>Last Name:</b> {lastName}</MultilineTypography>
                                <MultilineTypography><b>Password:</b> *********</MultilineTypography>
                                <MultilineTypography><b>IBAN:</b> {iban}</MultilineTypography>
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
    )
}