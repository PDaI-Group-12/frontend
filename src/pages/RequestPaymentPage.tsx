import {Button, Card, CardContent, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useLabel} from "../hooks/useLabel.ts";

export function RequestPaymentPage() {

    const [isChecked, setIsChecked] = useState(false)

    const {setLabel} = useLabel()

    useEffect(() => setLabel("Payment {id}"))

    return (
        <Card>
            <CardContent>
                <Stack spacing={2} alignItems="center">
                    <AutoColoredAvatar text="MM"/>
                    <Typography variant="h6">Matti Meikäläinen</Typography>
                    <Typography variant="subtitle2" color="darkgrey">FI 1234 1234 12</Typography>
                    <Typography color="gray" fontWeight="bold" variant="subtitle2">2000€</Typography>
                    <FormControlLabel control={<Checkbox
                        checked={isChecked}
                        onChange={() => setIsChecked(prevState => !prevState)}
                    ></Checkbox>} label="Confirm Payment"></FormControlLabel>

                    <Button variant="contained" type="submit" disabled={!isChecked}>Send payment</Button>
                </Stack>
            </CardContent>
        </Card>
    )
}