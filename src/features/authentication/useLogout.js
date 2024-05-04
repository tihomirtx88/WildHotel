import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            // Remove user  from react query cache
            queryClient.removeQueries();
           navigate('/login', {replace: true});
        }
    });

    return {logout, isLoading};
}