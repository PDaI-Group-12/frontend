import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";

export function SaveHoursPage() {
    const [hours, setHours] = useState("")
    const [type, setType] = useState("")

    const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHours(event.target.value)
    }

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string)
    }

    const isButtonDisabled = hours.trim() === "" || type.trim() === ""

    return (
        <Container maxWidth="xs">
            <Typography variant="h5" textAlign="center">Add hours</Typography>
            <form>
                <Stack padding={2} spacing={2}>
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
        </Container>
    )
}
