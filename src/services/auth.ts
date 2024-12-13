import {login, registration} from "./pdaiApi.ts";
import {ApiMessage, AuthToken, User} from "./types.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useRegistration = () => useMutation<ApiMessage, Error, User>({
    mutationKey: ["registration"],
    mutationFn: (user: User) => registration(user).then(data => data),
})

export const useLogin = () => {
    const queryClient = useQueryClient()
    return useMutation<AuthToken, Error, User>({
        mutationKey: ["login"],
        mutationFn: (user: User) => login(user).then(data => data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["history", "unpaidsalary", "user"]})
    });
}