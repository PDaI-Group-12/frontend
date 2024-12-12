import {useAuth} from "../hooks/useAuth.ts";
import {useQuery} from "@tanstack/react-query";
import {UnpaidSalaryResponse} from "./types.ts";
import {getUnpaidSalary} from "./pdaiApi.ts";

export const useUnpaidSalary = () => {
    const {token} = useAuth()
    return useQuery<UnpaidSalaryResponse, Error>({
        queryKey: ["unpaidsalary"],
        queryFn: () => getUnpaidSalary(token)
    })
}