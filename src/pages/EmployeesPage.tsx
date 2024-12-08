import {Card, CardActionArea, CardContent, Stack, Typography} from "@mui/material";
import {Employee} from "./types.ts";
import {toPascalCase} from "../util/text.ts";
import {useLabel} from "../hooks/useLabel.ts";
import {AutoColoredAvatar} from "../components/AutoColoredAvatar.tsx";

export function EmployeesPage() {
    const sampleEmployees: Employee[] = [
        {id: 1, fname: "John", lname: "Doe", iban: "FI 1234 123 12", role: "worker"},
        {id: 2, fname: "Mary", lname: "Poppins", iban: "FI 4321 321 21", role: "worker"},
        {id: 3, fname: "Harry", lname: "Potter", iban: "FI 3456 456 56", role: "employer"}
    ];

    useLabel().setLabel("Employees")

    return (
        <Stack spacing={2}>
            {sampleEmployees.map((employee) => (
                <Card key={employee.id}>
                    <CardActionArea>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <AutoColoredAvatar text={`${employee.fname[0]}${employee.lname[0]}`}/>
                                <Stack>
                                    <Typography variant="h6">{employee.fname} {employee.lname}</Typography>
                                    <Typography color="darkgrey"
                                                variant="subtitle2"> {toPascalCase(employee.role)} </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Stack>
    );
}