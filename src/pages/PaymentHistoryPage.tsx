import {Box, Card, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useLabel} from "../hooks/useLabel.ts";
import {useEffect} from "react";
import {useHistory} from "../services/history.ts";

export function PaymentHistoryPage() {

    const {setLabel} = useLabel()

    const {data, status, error} = useHistory()
    console.log(data)

    useEffect(() => setLabel("History"))

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
            <Card>
                <CardContent>
                    <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6">{data.data.totalhours} Hours</Typography>
                            <Typography color="gray" fontWeight="bold" variant="h6">{data.data.permanentsalary} €</Typography>
                        </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}