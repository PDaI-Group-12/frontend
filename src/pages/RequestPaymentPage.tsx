import {Button, Card, CardContent, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useLabel} from "../hooks/useLabel.ts";
import {useMarkSalaryPayedMutation} from "../services/salary.ts";
import {type Location, useLocation, useNavigate} from "react-router-dom";
import {UnpaidSalaries, UserWithSalary} from "../services/types.ts";
import {useSnackbar} from "notistack";

export function RequestPaymentPage() {

    const markSalaryPayedMutation = useMarkSalaryPayedMutation()

    const [isChecked, setIsChecked] = useState(false)

    const {setLabel} = useLabel()
    const {enqueueSnackbar} = useSnackbar();

    const navigate = useNavigate()
    const {state}: Location<{ unpaidSalary: UnpaidSalaries, user: UserWithSalary }> = useLocation();
    const {unpaidSalary, user} = state;

    const salary = (): number => {
        if (Number.isInteger(user.hourlySalary)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return user.hourlySalary
        }
        return 0
    }

    console.log(state)

    useEffect(() => setLabel(`Payment ${user.user.firstname} ${user.user.lastname}`))

    return (
        <Card>
            <CardContent>
                <Stack spacing={2} alignItems="center">
                    <AutoColoredAvatar text={`${user.user.firstname} ${user.user.lastname}`}/>
                    <Typography variant="h6">{user.user.firstname} {user.user.lastname}</Typography>
                    <Typography variant="subtitle2" color="darkgrey">{user.user.iban}</Typography>
                    <Typography color="gray" fontWeight="bold" variant="subtitle2" textAlign="center">
                        {unpaidSalary.hours} h + {salary()} €
                        <br/>
                        {salary() * unpaidSalary.hours} h/€
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