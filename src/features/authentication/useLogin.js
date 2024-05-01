import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { apiAuth } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin(){
    const queryclient = useQueryClient();
    const navigate = useNavigate();

    const {isLoading: isLoadingLogin, mutate: loginData} = useMutation({
        mutationFn: ({email, password}) => apiAuth({email, password}),

        onSuccess: (user) => {
            // To prevent load user data again after success log in and save in react query cache
            queryclient.setQueriesData(['user'], user);
            toast.success('You are successfuly login in your account');
            navigate("/dashboard");
        },

        onError: (err) => {
            console.log('ERROR', err);
            toast.error('Provide email or passowrd are incorect');
        } 
    });

    return {isLoadingLogin, loginData};
}