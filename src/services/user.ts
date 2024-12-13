import {deleteUser, getUser, getUserById, registerUser, updateUser} from "./pdaiApi.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {MessageResponse, User, UserWithSalary} from "./types.ts";
import {useAuth} from "../hooks/useAuth.ts";
import {isTokenInvalidByBackend} from "../util/validator.ts";

export const useUser = () => {
    const {token} = useAuth()
    return useQuery<UserWithSalary, Error>({
        queryKey: ["user"],
        queryFn: () => getUser(token).then(data => data),
    });
}

export const useUserById = (userId: number) => {
    const {token} = useAuth()
    return useQuery<UserWithSalary, Error>({
        queryKey: [`user_${userId}`],
        queryFn: () => getUserById(token, userId).then(data => data),
    });
}

export const useUserEditMutation = () => {
    const {token, logout} = useAuth()
    const queryClient = useQueryClient()
    return useMutation<User, Error, User>({
        mutationKey: ["editUser"],
        mutationFn: (user) => updateUser(token, user).then(data => data),
        onSettled: () => queryClient.invalidateQueries({queryKey: ["user"]}),
        onError: (error) => {
            if (isTokenInvalidByBackend(error.message)) logout()
        }
    });
}

export const useDeleteUserMutation = () => {
    const {token, logout} = useAuth()
    return useMutation<MessageResponse, Error>({
        mutationKey: ["deleteUser"],
        mutationFn: () => deleteUser(token),
        onError: (error) => {
            if (isTokenInvalidByBackend(error.message)) logout()
        }
    })
}

export const useRegisterMutation = () => {
    const {logout} = useAuth()
    return useMutation<MessageResponse, Error, User>({
        mutationKey: ["registerUser"],
        mutationFn: (user) => registerUser(user),
        onError: (error) => {
            if (isTokenInvalidByBackend(error.message)) logout()
        }
    })
}

