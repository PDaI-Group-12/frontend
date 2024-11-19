import {Card, Container, Fab, FormControl, Stack, TextField, Typography} from "@mui/material";
import {Employee} from "./types.ts";
import {Edit, Save} from "@mui/icons-material";
import {useState} from "react";


export function EditUserPage() {
    const exampleEmployee: Employee = {id: 1, fname: "John", lname: "Doe", iban: "FI 1234 123 12", role: "worker"}

    const [isEdit, setIsEdit] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        // Process form data here
        console.log("Form submitted");
        setIsEdit(false); // Exit edit mode
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h5" textAlign="center">Profile</Typography>
            {isEdit ? (
                <Card>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <Stack padding={2} spacing={2}>
                                <TextField
                                    label="First Name"
                                    required
                                    placeholder={exampleEmployee.fname}
                                    variant="standard"
                                    type="text"
                                    defaultValue={exampleEmployee.fname}
                                />
                                <TextField
                                    label="Last Name"
                                    required
                                    placeholder={exampleEmployee.lname}
                                    variant="standard"
                                    type="text"
                                    defaultValue={exampleEmployee.lname}
                                />
                                <TextField
                                    label="Password"
                                    required
                                    placeholder="Dont use qwerty"
                                    variant="standard"
                                    type="password"
                                />
                                <TextField
                                    label="IBAN"
                                    required
                                    placeholder={exampleEmployee.iban}
                                    variant="standard"
                                    type="text"
                                    defaultValue={exampleEmployee.iban}
                                />
                                <Fab
                                    type="submit"
                                    sx={{alignSelf: "center", marginTop: 2}}
                                    size="medium"
                                    color="secondary"
                                >
                                    <Save />
                                </Fab>
                            </Stack>
                        </FormControl>
                    </form>
                </Card>
            ) : (
                <Card>
                    <Stack padding={2} spacing={2}>
                        <Typography style={{wordBreak: "break-word"}}>First Name: {exampleEmployee.fname}</Typography>
                        <Typography style={{wordBreak: "break-word"}}>Last Name: {exampleEmployee.lname}</Typography>
                        <Typography style={{wordBreak: "break-word"}}>Password: *********</Typography>
                        <Typography style={{wordBreak: "break-word"}}>IBAN: {exampleEmployee.iban}</Typography>
                    </Stack>
                </Card>
            )}
            {!isEdit && ( // Only show the Fab button when not in edit mode
                <Fab
                    onClick={() => setIsEdit(prevState => !prevState)}
                    sx={{position: "absolute", bottom: 16, right: 16}}
                    size="medium"
                    color="secondary"
                >
                    <Edit />
                </Fab>
            )}
        </Container>
    );
}

