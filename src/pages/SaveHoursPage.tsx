import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField,} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import {useLabel} from "../hooks/useLabel.ts";

export function SaveHoursPage() {
    const [hours, setHours] = useState("")
    const [type, setType] = useState("")

    const {setLabel} = useLabel()

    const handleHoursChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHours(event.target.value)
    }

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string)
    }

    useEffect(() => setLabel("Save hours"))

    const isButtonDisabled = hours.trim() === "" || type.trim() === ""

    return (
        <form>
            <Stack spacing={2}>
                <TextField
                    label="Hours/Contract Salary"
                    variant="outlined"
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
                        <MenuItem value="Hours">Hours</MenuItem>
                        <MenuItem value="Salary">Contract Salary</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    type="submit"
                    disabled={isButtonDisabled}
                >
                    Save
                </Button>
            </Stack>
        </form>
    )
}
