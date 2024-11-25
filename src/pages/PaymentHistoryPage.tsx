import {Avatar, Card, CardContent, Container, Stack, Typography} from "@mui/material";


export function PaymentHistoryPage() {


    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center">Payment History</Typography>
            <Stack padding={2} spacing={2}>
                <Card>
                    <CardContent>
                        <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar>MM</Avatar>
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
                            <Avatar>MM</Avatar>
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
                            <Avatar>MM</Avatar>
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
                            <Avatar>MM</Avatar>
                            <Typography variant="h6">Matti Meikäläinen</Typography>
                            <Stack alignItems="end">
                                <Typography variant="h6">16.06.2020</Typography>
                                <Typography color="gray" fontWeight="bold" variant="h6">2000€</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    )
}