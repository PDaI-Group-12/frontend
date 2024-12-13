import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField,} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import {useLabel} from "../hooks/useLabel.ts";
import {useSaveHoursMutation, useSavePermanentMutation} from "../services/salary.ts";
import {useAuth} from "../hooks/useAuth.ts";
import {decodeToken} from "../util/text.ts";
import {enqueueSnackbar} from "notistack";
import {PaymentTypes} from "./types.ts";

export function SaveHoursPage() {
    const [hours, setHours] = useState(0)
    const [type, setType] = useState<PaymentTypes>("")

    const {setLabel} = useLabel()
    const {token} = useAuth()

    const saveHoursMutation = useSaveHoursMutation()
    const savePermanentMutation = useSavePermanentMutation()

    const handleHoursChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHours(Number(event.target.value))
    }

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as PaymentTypes)
    }

    useEffect(() => setLabel("Save hours"))

    const isButtonDisabled = hours <= 0 || type.trim() === ""

    return (
        <form onSubmit={(event) => {
            event.preventDefault()

            if (type === "") return

            if (type === "hours") {
                saveHoursMutation.mutate({
                        userid: decodeToken(token)?.id ?? 0,
                        hours: hours
                    }, {
                        onSuccess: () => {
                            enqueueSnackbar("Hours saved successfully", {variant: "success"})
                            setHours(0)
                            setType("")
                        },
                        onError: (error) => {
                            enqueueSnackbar(error?.message ?? "Something went wrong", {variant: "error"})
                        }
                    }
                )
            } else if (type === "salary") {
                savePermanentMutation.mutate({
                        userid: decodeToken(token)?.id ?? 0,
                        salary: hours
                    }, {
                        onSuccess: () => {
                            enqueueSnackbar("Salary saved successfully", {variant: "success"})
                            setHours(0)
                            setType("")
                        },
                        onError: (error) => {
                            enqueueSnackbar(error?.message ?? "Something went wrong", {variant: "error"})
                        }
                    }
                )
            }
        }}>
            <Stack spacing={2}>
                <TextField
                    label="Hours/Contract Salary"
                    variant="outlined"
                    type="number"
                    value={hours}
                    onChange={handleHoursChange}
                    required
                />
                <FormControl variant="outlined" fullWidth required>
                    <InputLabel id="select-id">Type</InputLabel>
                    <Select
                        value={type}
                        onChange={handleTypeChange}
                        labelId="select-id"
                        label="Type"
                        variant="outlined"
                    >
                        <MenuItem value="hours">Hours</MenuItem>
                        <MenuItem value="salary">Contract Salary</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    type="submit"
                    disabled={isButtonDisabled || saveHoursMutation.isPending}
                >
                    Save
                </Button>
            </Stack>
        </form>
    )
}
