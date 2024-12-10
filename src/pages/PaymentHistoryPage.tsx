import {Card, CardContent, Stack, Typography} from "@mui/material";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useLabel} from "../hooks/useLabel.ts";
import {useEffect} from "react";

export function PaymentHistoryPage() {

    const {setLabel} = useLabel()

    useEffect(() => setLabel("History"))

    return (
        <Stack spacing={2}>
            <Card>
                <CardContent>
                    <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                        <AutoColoredAvatar text="MM"/>
                        <Typography variant="h6">Matti Meikäläinen</Typography>
                        <Stack alignItems="end">
                            <Typography variant="h6">16.06.2020</Typography>
                            <Typography color="gray" fontWeight="bold" variant="h6">2000€</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                        <AutoColoredAvatar text="MM"/>
                        <Typography variant="h6">Matti Meikäläinen</Typography>
                        <Stack alignItems="end">
                            <Typography variant="h6">16.06.2020</Typography>
                            <Typography color="gray" fontWeight="bold" variant="h6">2000€</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                        <AutoColoredAvatar text="MM"/>
                        <Typography variant="h6">Matti Meikäläinen</Typography>
                        <Stack alignItems="end">
                            <Typography variant="h6">16.06.2020</Typography>
                            <Typography color="gray" fontWeight="bold" variant="h6">2000€</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                        <AutoColoredAvatar text="MM"/>
                        <Typography variant="h6">Matti Meikäläinen</Typography>
                        <Stack alignItems="end">
                            <Typography variant="h6">16.06.2020</Typography>
                            <Typography color="gray" fontWeight="bold" variant="h6">2000€</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}