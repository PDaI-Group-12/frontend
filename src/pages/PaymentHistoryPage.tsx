import {Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


export function PaymentHistoryPage ()  {

    function createData(
        name: string,
        payment: number,
        date: string
    ) {
        return {name, payment, date}
    }

    const rows = [
        createData("Antti Korhonen",2000,"20.02.2020"),
        createData("Matti Latvala",1500,"16.06.2020")
    ]

    return (
        <Stack padding={2} spacing={2} sx={{alignItems:"center"}}>
            <TableContainer component={Paper} sx={{width: 800}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Payers name</TableCell>
                            <TableCell align="right">Payment(€)</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell> {row.name} </TableCell>
                                <TableCell align="right" > {row.payment} </TableCell>
                                <TableCell align="right" > {row.date} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}