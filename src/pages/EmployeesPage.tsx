import {Box, Card, CardActionArea, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
import {toPascalCase} from "../util/text.ts";
import {useLabel} from "../hooks/useLabel.ts";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";
import {useEffect} from "react";
import {useEmployees} from "../services/employees.ts";

export function EmployeesPage() {

    const {data, status, error} = useEmployees()
    console.log(data)
    const {setLabel} = useLabel()

    useEffect(() => setLabel("Employees"))

    if (status === "pending") {
        return <Box flexGrow={1} alignItems="center">
            <CircularProgress/>
        </Box>;
    }

    if (status === "error") {
        return <Typography>Something went wrong</Typography>
    }

    return (
        <Stack spacing={2}>
            {data.map(({Employee}) => (
                <Card key={Employee.id}>
                    <CardActionArea>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <AutoColoredAvatar text={`${Employee.firstname[0]}${Employee.lastname[0]}`}/>
                                <Stack>
                                    <Typography variant="h6">{Employee.firstname} {Employee.lastname}</Typography>
                                    <Typography color="darkgrey"
                                                variant="subtitle2"> {toPascalCase(Employee.role)} </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Stack>
    );
}