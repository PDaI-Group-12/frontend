import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {Employee} from "./types.ts";


export function EmployeesPage() {
    const sampleEmployees:Employee[] = [
        {id:1, fname:"John", lname: "Doe", iban: "FI 1234 123 12"},
        {id:2, fname:"Mary", lname: "Poppins", iban: "FI 4321 321 21"},
        {id:3, fname:"Harry", lname: "Potter", iban: "FI 3456 456 56"}
    ];
    return (
        <Box
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="h4">
                Employees
            </Typography>
            <List>
                {sampleEmployees.map((employee) => (
                    <ListItem key={employee.id}>
                        <ListItemAvatar>
                            <Avatar>{employee.fname[0]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${employee.fname} ${employee.lname}`}
                            secondary={`IBAN: ${employee.iban}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}