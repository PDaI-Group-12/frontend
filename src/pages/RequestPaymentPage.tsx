import {Button, Card, CardContent, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useLabel} from "../hooks/useLabel.ts";
import {useMarkSalaryPayedMutation} from "../services/salary.ts";
import {type Location, useLocation, useNavigate} from "react-router-dom";
import {UnpaidSalaries} from "../services/types.ts";
import {useSnackbar} from "notistack";

export function RequestPaymentPage() {

    const markSalaryPayedMutation = useMarkSalaryPayedMutation()

    const [isChecked, setIsChecked] = useState(false)

    const {setLabel} = useLabel()
    const {enqueueSnackbar} = useSnackbar();

    const navigate = useNavigate()
    const {state}: Location<{ unpaidSalary: UnpaidSalaries }> = useLocation();
    const {unpaidSalary} = state;

    console.log(state)

    useEffect(() => setLabel(`Payment ${unpaidSalary.firstname} ${unpaidSalary.lastname}`))

    return (
        <Card>
            <CardContent>
                <Stack spacing={2} alignItems="center">
                    <AutoColoredAvatar text={`${unpaidSalary.firstname} ${unpaidSalary.lastname}`}/>
                    <Typography variant="h6">{unpaidSalary.firstname} {unpaidSalary.lastname}</Typography>
                    <Typography variant="subtitle2" color="darkgrey">{unpaidSalary.iban}</Typography>
                    <Typography color="gray" fontWeight="bold" variant="subtitle2">
                        {unpaidSalary.unpaid_permanent_salaries !== 0
                            ? `${unpaidSalary.unpaid_permanent_salaries} €`
                            : `${unpaidSalary.unpaid_hours} €`}
                    </Typography>
                    <FormControlLabel control={<Checkbox
                        checked={isChecked}
                        onChange={() => setIsChecked(prevState => !prevState)}
                    ></Checkbox>} label="Confirm Payment"></FormControlLabel>

                    <Button variant="contained" disabled={!isChecked} onClick={() => {
                        markSalaryPayedMutation.mutate(unpaidSalary.userid, {
                            onSuccess: (data) => {
                                enqueueSnackbar(data?.message ?? "Success", {variant: "success"})
                                navigate(-1)
                            },
                            onError: (error) => {
                                enqueueSnackbar(error?.message ?? "Something went wrong", {variant: "error"})
                            }
                        })
                    }}>Send payment</Button>
                </Stack>
            </CardContent>
        </Card>
    )
}