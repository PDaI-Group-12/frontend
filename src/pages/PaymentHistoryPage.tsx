import {Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export function PaymentHistoryPage ()  {

    return (
        <Stack padding={2} spacing={2} sx={{alignItems:"center"}}>
            <TableContainer component={Paper} sx={{width: 800}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Workers name</TableCell>
                            <TableCell align="right">Payment(€)</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Stack>
    )
}