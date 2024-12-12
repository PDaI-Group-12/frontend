import {useAuth} from "../hooks/useAuth.ts";
import {useMutation} from "@tanstack/react-query";
import {SaveHours, SaveHoursResponse, SavePermanent, SavePermanentResponse} from "./types.ts";
import {saveHours, savePermanent} from "./pdaiApi.ts";
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