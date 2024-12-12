import {useAuth} from "../hooks/useAuth.ts";
import {useMutation, useQuery} from "@tanstack/react-query";
import {SaveHours, SaveHoursResponse, SavePermanent, SavePermanentResponse, UnpaidSalaryResponse} from "./types.ts";
import {getUnpaidSalary, saveHours, savePermanent} from "./pdaiApi.ts";
import {isTokenInvalidByBackend} from "../util/validator.ts";

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
