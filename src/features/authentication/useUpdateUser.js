import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export default function useUpdateUser(){
    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading: isUpdatingUser } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: () => {
          toast.success("User successfully updated");
        //Set manual data in query cache
        //   queryClient.setQueryData('user', user);
          queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (err) => toast.error(err.message),
      });
    
      return { isUpdatingUser, updateUser };
}