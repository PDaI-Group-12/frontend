import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    Container,
    Stack,
    Typography
} from "@mui/material";
import {Employee} from "./types.ts";
import {toPascalCase} from "../util/text.ts";


export function EmployeesPage() {
    const sampleEmployees: Employee[] = [
        {id: 1, fname: "John", lname: "Doe", iban: "FI 1234 123 12",role: "worker"},
        {id: 2, fname: "Mary", lname: "Poppins", iban: "FI 4321 321 21",role: "worker"},
        {id: 3, fname: "Harry", lname: "Potter", iban: "FI 3456 456 56",role: "employer"}
    ];
    return (
        <Container maxWidth="xs" style={{justifyContent: "center", width: "max-content"}}>
            <Typography variant="h4" align="center" paddingBottom={2}>Employees</Typography>
            <Stack spacing={2}>
                {sampleEmployees.map((employee) => (
                    <Card key={employee.id}>
                        <CardActionArea>
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar>{employee.fname[0]}{employee.lname[0]}</Avatar>
                                    <Stack>
                                        <Typography>{employee.fname} {employee.lname}</Typography>
                                        <Typography color="darkgrey" variant="subtitle2"> {toPascalCase(employee.role)} </Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Stack>
        </Container>
    );
}