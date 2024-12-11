import {Box, Card, CardActionArea, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
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
        return <Typography> {error?.message ?? "Something went wrong"}</Typography>
    }

    return (
        <Stack spacing={2}>
            {status === "success" && data.employers.map((employ) => <Card key={employ.id}>
                <CardActionArea>
                    <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <AutoColoredAvatar text={`${employ.firstname[0]}${employ.lastname[0]}`}/>
                            <Stack>
                                <Typography variant="h6">{employ.firstname} {employ.lastname}</Typography>
                                {/*<Typography color="darkgrey" variant="subtitle2"> {toPascalCase(employ.role)} </Typography>*/}
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>)}
        </Stack>
    );
}