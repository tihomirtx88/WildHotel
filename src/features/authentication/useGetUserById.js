import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../services/apiAuth";

export function useGetUserById(){
    const {isLoading: isLoadingUser, data: user } = useQuery({
        queryKey: ['userById'], 
        queryFn: getUserById
    });

    return { user, isLoadingUser};
}