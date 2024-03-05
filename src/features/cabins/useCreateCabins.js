import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "./../../services/apiCabins";
import toast from "react-hot-toast";

export function useCrateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCabin };
}
