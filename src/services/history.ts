import {useAuth} from "../hooks/useAuth.ts";
import {useQuery} from "@tanstack/react-query";
import {HistoryResponse} from "./types.ts";
import {getHistory} from "./pdaiApi.ts";

export const useHistory = () => {
    const {token} = useAuth()
    return useQuery<HistoryResponse, Error>({
        queryKey: ["history"],
        queryFn: () => getHistory(token)
    })
}