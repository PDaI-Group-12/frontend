import {Box, Card, CardActionArea, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
import {useLabel} from "../hooks/useLabel.ts";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useEffect} from "react";
import {useUnPaidSalaries} from "../services/salary.ts";
import {useNavigate} from "react-router-dom";

export default function RequestedPaymentsPage() {

    const {setLabel} = useLabel()
    const {data, status, error} = useUnPaidSalaries()

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
                <CardActionArea onClick={() => navigate('/request-payments', {state: {unpaidSalary: unpaidSalary}})}>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AutoColoredAvatar text={`${unpaidSalary.firstname[0]}${unpaidSalary.lastname[0]}`}/>
                            <Stack flexGrow={1}>
                                <Typography variant="h6">{unpaidSalary.firstname} {unpaidSalary.lastname}</Typography>
                                <Typography color="darkgrey" variant="subtitle2">{unpaidSalary.iban}</Typography>
                                <Typography color="gray" fontWeight="bold" variant="subtitle2" align="right">
                                    {unpaidSalary.unpaid_permanent_salaries !== 0
                                        ? `${unpaidSalary.unpaid_permanent_salaries} €`
                                        : `${unpaidSalary.unpaid_hours} €`}
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>)}
        </Stack>
    )
}