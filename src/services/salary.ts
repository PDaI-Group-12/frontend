import {useAuth} from "../hooks/useAuth.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    EditUserSalary,
    EditUserSalaryResponse,
    SalaryPaymentResponse,
    SaveHours,
    SaveHoursResponse,
    SavePermanent,
    SavePermanentResponse,
    SetHoursResponse,
    UnPaidSalariesResponse,
    UnpaidSalaryResponse
} from "./types.ts";
import {
    editUsersHourlySalary,
    getUnpaidSalaries,
    getUnpaidSalary,
    markSalaryPayed,
    saveHours,
    savePermanent,
    setUsersHourlySalary
} from "./pdaiApi.ts";
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

export const useSetUsersHourlySalary = () => {
    const {token, logout} = useAuth()
    const queryClient = useQueryClient()
    return useMutation<SetHoursResponse, Error, SavePermanent>({
        mutationKey: ["sethours"],
        mutationFn: (sethours) => setUsersHourlySalary(token, sethours),
        onError: (error) => {
            if (isTokenInvalidByBackend(error.message)) logout()
        },
        onSuccess: (data) => queryClient.invalidateQueries({queryKey: [`user_${data.data.userId}`]})
    })
}

export const useEditUsersHourlySalary = () => {
    const {token, logout} = useAuth()
    const queryClient = useQueryClient()
    return useMutation<EditUserSalaryResponse, Error, EditUserSalary>({
        mutationKey: ["editusersalary"],
        mutationFn: (edithours) => editUsersHourlySalary(token, edithours),
        onError: (error) => {
            if (isTokenInvalidByBackend(error.message)) logout()
        },
        onSuccess: (data) => queryClient.invalidateQueries({queryKey: [`user_${data.data.employeeId}`]})
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