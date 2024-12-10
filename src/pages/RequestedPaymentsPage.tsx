import {Card, CardActionArea, CardContent, Stack, Typography} from "@mui/material";
import {useLabel} from "../hooks/useLabel.ts";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useEffect} from "react";

export default function RequestedPaymentsPage() {

    const {setLabel} = useLabel()

    useEffect(() => setLabel("Requested Payments"))

    return (
        <Stack spacing={2} sx={{alignItems: "center"}}>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AutoColoredAvatar text="JH"/>
                            <Stack>
                                <Typography variant="h6">John Smith</Typography>
                                <Typography color="darkgrey" variant="subtitle2">FI12 3456 7890 ABCD EF</Typography>
                                <Typography color="gray" fontWeight="bold" variant="subtitle2" align="right">2000
                                    $</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AutoColoredAvatar text="JH"/>
                            <Stack>
                                <Typography variant="h6">John Smith</Typography>
                                <Typography color="darkgrey" variant="subtitle2">FI12 3456 7890 ABCD EF</Typography>
                                <Typography color="gray" fontWeight="bold" variant="subtitle2" align="right">2000
                                    $</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AutoColoredAvatar text="JH"/>
                            <Stack>
                                <Typography variant="h6">John Smith</Typography>
                                <Typography color="darkgrey" variant="subtitle2">FI12 3456 7890 ABCD EF</Typography>
                                <Typography color="gray" fontWeight="bold" variant="subtitle2" align="right">2000
                                    $</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Stack>
    )
}