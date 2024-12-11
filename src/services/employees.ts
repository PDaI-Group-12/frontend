import {useAuth} from "../hooks/useAuth.ts";
import {useQuery} from "@tanstack/react-query";
import {Employees} from "./types.ts";
import {getEmployees} from "./pdaiApi.ts";

export const useEmployees = () => {
    const {token} = useAuth()
    return useQuery<Employees, Error>({
        queryKey: ["employees"],
        queryFn: () => getEmployees(token)
    })
}