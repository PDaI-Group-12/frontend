import {Box, Card, CardActionArea, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
import {useLabel} from "../hooks/useLabel.ts";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useEffect} from "react";
import {useUnPaidSalaries} from "../services/salary.ts";

export default function RequestedPaymentsPage() {

    const {setLabel} = useLabel()
    const {data, status, error} = useUnPaidSalaries()
    console.log(data)

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
        <Stack spacing={2} sx={{alignItems: "center"}}>
            {status === "success" && data.data.map((data, index) => <Card key={index + 1}>
                <CardActionArea>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AutoColoredAvatar text={`${data.firstname[0]}${data.lastname[0]}`}/>
                            <Stack>
                                <Typography variant="h6">{data.firstname} {data.lastname}</Typography>
                                <Typography color="darkgrey" variant="subtitle2">{data.iban}</Typography>
                                <Typography color="gray" fontWeight="bold" variant="subtitle2"
                                            align="right">
                                    {data.unpaid_permanent_salaries !== 0
                                        ? `${data.unpaid_permanent_salaries} €`
                                        : `${data.unpaid_hours} €`}
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>)}
        </Stack>
    )
}