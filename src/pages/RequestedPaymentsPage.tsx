import {Box, Card, CardActionArea, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
import {useLabel} from "../hooks/useLabel.ts";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useEffect} from "react";
import {useUnPaidSalaries} from "../services/salary.ts";
import {useNavigate} from "react-router-dom";
import {useUsersByIds} from "../services/user.ts";

export default function RequestedPaymentsPage() {

    const {setLabel} = useLabel()
    const {data, status, error} = useUnPaidSalaries()
    const {data: additionalUsersData} = useUsersByIds(data?.data?.map(unpaidSalary => unpaidSalary.userid) ?? [])

    const user = (id: number) => additionalUsersData?.find(i => i.user.id === id)
    const salary = (id: number): number => {
        if (Number.isInteger(user(id)?.hourlySalary)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return user(id)?.hourlySalary
        }
        return 0
    }

    const navigate = useNavigate();

    useEffect(() => setLabel("Requested Payments"))

    if (status === "pending") {
        return <Box flexGrow={1} alignItems="center">
            <CircularProgress/>
        </Box>;
    }

    if (status === "error") {
        return <Typography> {error?.message ?? "Something went wrong"}</Typography>
    }

    return (
        <Stack spacing={2}>
            {status === "success" && data.data.map((unpaidSalary, index) => <Card key={index + 1}>
                <CardActionArea onClick={() => navigate('/request-payments', {
                    state: {
                        unpaidSalary: unpaidSalary,
                        user: user(unpaidSalary.userid)
                    }
                })}>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AutoColoredAvatar
                                text={`${user(unpaidSalary.userid)?.user.firstname} ${user(unpaidSalary.userid)?.user.lastname}`}/>
                            <Stack direction="row" flexGrow={1}>
                                <Stack flexGrow={1}>
                                    <Typography
                                        variant="h6">{user(unpaidSalary.userid)?.user.firstname} {user(unpaidSalary.userid)?.user.lastname}</Typography>
                                    <Typography color="darkgrey"
                                                variant="subtitle2">{user(unpaidSalary.userid)?.user.iban}</Typography>
                                </Stack>
                                <Typography color="gray" fontWeight="bold" variant="subtitle2" align="right">
                                    {unpaidSalary.hours} h
                                    <br/>
                                    {salary(unpaidSalary.userid)} €
                                    <br/>
                                    {salary(unpaidSalary.userid) * unpaidSalary.hours} h/€
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>)}
        </Stack>
    )
}