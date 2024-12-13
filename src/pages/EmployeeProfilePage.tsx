import {Card, Divider, FormControl, IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import {MultilineTypography} from "../components/MultilineTypography.tsx";
import {useUserById} from "../services/user.ts";
import {Edit, Save} from "@mui/icons-material";
import {useState} from "react";
import {Location, useLocation} from "react-router-dom";
import {useEditUsersHourlySalary, useSetUsersHourlySalary} from "../services/salary.ts";
import {enqueueSnackbar} from "notistack";

export function EmployeeProfilePage() {

    const {state}: Location<{ userId: number }> = useLocation();
    const {userId} = state;
    const setUsersHourlySalary = useSetUsersHourlySalary()
    const editUsersHourlySalary = useEditUsersHourlySalary()

    const {data, status} = useUserById(userId)

    const [isEdit, setIsEdit] = useState(false)
    const [hours, setHours] = useState(0)

    return (
        <Card>
            <Stack padding={2} spacing={2}>
                {status === "success" && <>
                    <MultilineTypography><b>First Name:</b> {data.user.firstname}</MultilineTypography>
                    <MultilineTypography><b>Last Name:</b> {data.user.lastname}</MultilineTypography>
                    <MultilineTypography><b>Role:</b> {data.user.role}</MultilineTypography>
                    <MultilineTypography><b>IBAN:</b> {data.user.iban}</MultilineTypography>
                    <Divider/>
                    {!isEdit ? <>
                        <Stack direction="row">
                            <MultilineTypography><b>Hourly Salary:</b> {data.hourlySalary}</MultilineTypography>
                            <IconButton onClick={() => setIsEdit(true)}>
                                <Edit/>
                            </IconButton>
                        </Stack>
                    </> : <form onSubmit={(event) => {
                        event.preventDefault()

                        setUsersHourlySalary.mutate({
                            userId: userId,
                            salary: hours
                        }, {
                            onSuccess: (data) => {
                                enqueueSnackbar(data?.message ?? "Success", {variant: "success"})
                                setHours(0)
                                setIsEdit(false)
                            },
                            onError: () => {
                                editUsersHourlySalary.mutate({
                                    employeeId: userId,
                                    newSalary: hours
                                }, {
                                    onSuccess: (data) => {
                                        enqueueSnackbar(data?.message ?? "Success", {variant: "success"})
                                        setHours(0)
                                        setIsEdit(false)
                                    },
                                    onError: (error) => {
                                        enqueueSnackbar(error?.message ?? "Something went wrong", {variant: "error"})
                                    }
                                })
                            }
                        })
                    }}>
                        <FormControl>
                            <Stack direction="row">
                                <TextField
                                    fullWidth
                                    value={hours}
                                    onChange={event => setHours(Number(event.target.value))}
                                    type="number"
                                    label="Hourly salary"
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                            endAdornment: <InputAdornment position="end">
                                                €
                                                <IconButton
                                                    type="submit"
                                                    sx={{marginLeft: 2}}
                                                    onClick={() => {
                                                    }}
                                                >
                                                    <Save/>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    }}
                                />
                            </Stack>
                        </FormControl>
                    </form>}
                </>}
            </Stack>
        </Card>
    )
}