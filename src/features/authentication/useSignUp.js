import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the users email adress"
      );
    },
  });

  return { signUp, isLoading };
}
