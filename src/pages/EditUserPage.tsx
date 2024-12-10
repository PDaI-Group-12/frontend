import {
    Box,
    Card,
    Checkbox,
    CircularProgress,
    Fab,
    FormControl,
    FormControlLabel,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Edit, Save} from "@mui/icons-material";
import {FormEvent, useEffect, useState} from "react";
import {MultilineTypography} from "../components/MultilineTypography.tsx";
import {isFirstNameInvalid, isIBANInvalid, isLastNameInvalid, isTokenInvalidByBackend} from "../util/validator.ts";
import {useLabel} from "../hooks/useLabel.ts";
import {useUser, useUserEditMutation} from "../services/user.ts";
import {useSnackbar} from "notistack";
import {useAuth} from "../hooks/useAuth.ts";

export function EditUserPage() {

    const {data, status, error} = useUser()
    const editUserMutation = useUserEditMutation()

    const [firstName, setFirstName] = useState(data?.user?.username ?? "")
    const [lastName, setLastName] = useState(data?.user?.lastname ?? "")
    const [iban, setIBAN] = useState(data?.user?.iban ?? "")
    const [isEdit, setIsEdit] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const {logout} = useAuth()
    const {setLabel} = useLabel()
    const {enqueueSnackbar} = useSnackbar()

    useEffect(() => setLabel("User edit"))

    if (status === "pending") {
        return <Box flexGrow={1} alignItems="center">
            <CircularProgress/>
        </Box>;
    }

    if (status === "error") {
        if (isTokenInvalidByBackend(error.message)) logout()
        enqueueSnackbar(error?.message ?? "Something went wrong", {variant: "error"})
        return <Typography>Something went wrong</Typography>
    }

    return (
        <Card>
            {status === "success" &&
                <form onSubmit={(event: FormEvent) => {
                    event.preventDefault()

                    console.log(editUserMutation)
                    console.log(confirm)

                    if (isFirstNameInvalid(firstName)
                        || isLastNameInvalid(lastName)
                        || isIBANInvalid(iban)
                        || !confirm
                    ) return

                    editUserMutation.mutate({
                        firstname: firstName,
                        lastname: lastName,
                        role: data.user.role,
                        iban: iban
                    }, {
                        onSuccess: () => {
                            enqueueSnackbar("User updated success", {variant: "success"})
                        },
                        onError: (error) => {
                            enqueueSnackbar(error?.message ?? "Something went wrong", {variant: "error"})
                        }
                    })

                    setIsEdit(false)
                    setConfirm(false)
                }}>
                    <FormControl fullWidth>
                        <Stack padding={2} spacing={2}>
                            {
                                isEdit ? <>
                                    <TextField
                                        label="First Name"
                                        required
                                        error={isFirstNameInvalid(firstName)}
                                        placeholder={data.user.firstname}
                                        variant="standard"
                                        type="text"
                                        value={firstName}
                                        onChange={event => setFirstName(event.target.value.trim())}
                                    />
                                    <TextField
                                        label="Last Name"
                                        required
                                        error={isLastNameInvalid(lastName)}
                                        placeholder={data.user.lastname}
                                        variant="standard"
                                        type="text"
                                        value={lastName}
                                        onChange={event => setLastName(event.target.value.trim())}
                                    />
                                    <TextField
                                        label="IBAN"
                                        required
                                        error={isIBANInvalid(iban)}
                                        placeholder={data.user.iban}
                                        variant="standard"
                                        type="text"
                                        value={iban}
                                        onChange={event => setIBAN(event.target.value.trim())}
                                    />
                                    <FormControlLabel required control={<Checkbox
                                        checked={confirm}
                                        onChange={() => setConfirm(prevState => !prevState)}
                                    />} label="Confirm changes"/>
                                </> : <>
                                    <MultilineTypography><b>First Name:</b> {data.user.firstname}</MultilineTypography>
                                    <MultilineTypography><b>Last Name:</b> {data.user.lastname}</MultilineTypography>
                                    <MultilineTypography><b>Password:</b> *********</MultilineTypography>
                                    <MultilineTypography><b>Role:</b> {data.user.role}</MultilineTypography>
                                    <MultilineTypography><b>IBAN:</b> {data.user.iban}</MultilineTypography>
                                </>
                            }
                        </Stack>
                        <Fab
                            onClick={() => {
                                if (isEdit || confirm) return
                                setIsEdit(true);
                                setFirstName(data?.user?.firstname ?? "")
                                setLastName(data?.user?.lastname ?? "")
                                setIBAN(data?.user?.iban ?? "")
                            }}
                            type={isEdit ? "submit" : "button"}
                            disabled={editUserMutation.isPending}
                            sx={{position: "fixed", bottom: 16, right: 16}}
                            size="medium"
                            color="secondary"
                        >
                            {editUserMutation.isPending ? <CircularProgress/> : isEdit ? <Save/> : <Edit/>}
                        </Fab>
                    </FormControl>
                </form>}
        </Card>
    )
}