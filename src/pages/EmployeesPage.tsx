import {Box, Card, CardActionArea, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
import {useLabel} from "../hooks/useLabel.ts";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useEffect} from "react";
import {useEmployees} from "../services/employees.ts";
import {useNavigate} from "react-router-dom";

export function EmployeesPage() {

    const {data, status, error} = useEmployees()
    const {setLabel} = useLabel()
    const navigate = useNavigate()

    useEffect(() => setLabel("Employees"))

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
            {status === "success" && data.employees.map((employ) => <Card key={employ.id}>
                <CardActionArea onClick={() => navigate('/employee-profile', {state: {userId: employ.id}})}>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AutoColoredAvatar text={`${employ.firstname} ${employ.lastname}`}/>
                            <Stack>
                                <Typography variant="h6">{employ.firstname} {employ.lastname}</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>)}
        </Stack>
    );
}