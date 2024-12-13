import {useAuth} from "../hooks/useAuth.ts";
import {useMutation, useQuery} from "@tanstack/react-query";
import {
    SalaryPaymentResponse,
    SaveHours,
    SaveHoursResponse,
    SavePermanent,
    SavePermanentResponse,
    UnPaidSalariesResponse,
    UnpaidSalaryResponse
} from "./types.ts";
import {getUnpaidSalaries, getUnpaidSalary, markSalaryPayed, saveHours, savePermanent} from "./pdaiApi.ts";
import {isTokenInvalidByBackend} from "../util/validator.ts";
import {decodeToken} from "../util/text.ts";

export const useSaveHoursMutation = () => {
    const {token, logout} = useAuth()
    return useMutation<SaveHoursResponse, Error, SaveHours>({
        mutationKey: ["savehours"],
        mutationFn: (savehours) => saveHours(token, savehours),
        onError: (error) => {
            if (isTokenInvalidByBackend(error.message)) logout()
        }
    })
}

export const useSavePermanentMutation = () => {
    const {token, logout} = useAuth()
    return useMutation<SavePermanentResponse, Error, SavePermanent>({
        mutationKey: ["savepermanent"],
        mutationFn: (savepermanent) => savePermanent(token, savepermanent),
        onError: (error) => {
            if (isTokenInvalidByBackend(error.message)) logout()
        }
    })
}

export const useUnpaidSalary = () => {
    const {token} = useAuth()
    return useQuery<UnpaidSalaryResponse, Error>({
        queryKey: ["unpaidsalary"],
        queryFn: () => getUnpaidSalary(token)
    })
}

export const useUnPaidSalaries = () => {
    const {token} = useAuth()
    return useQuery<UnPaidSalariesResponse, Error>({
        queryKey: ["unpaidsalaries"],
        queryFn: () => getUnpaidSalaries(token)
    })
}

export const useMarkSalaryPayedMutation = () => {
    const {token, logout} = useAuth()
    const id = decodeToken(token)?.id ?? 0
    return useMutation<SalaryPaymentResponse, Error, number>({
        mutationKey: ["salarypayed"],
        mutationFn: (employeeId) => markSalaryPayed(token, employeeId, id),
        onError: (error) => {
            if (isTokenInvalidByBackend(error.message)) logout()
        }
    })
}