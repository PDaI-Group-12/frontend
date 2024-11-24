export interface Employee {
    id: number,
    fname: string,
    lname: string,
    iban: string,
    role: "employer" | "worker"
}