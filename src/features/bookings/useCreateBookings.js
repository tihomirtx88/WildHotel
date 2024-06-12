import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useCreateBookings() {
  const queryClient = useQueryClient();
  const { mutate: createBooking, isLoading: isLoadingbooking } = useMutation({
    mutationFn: createBookingApi,
    onSuccess: () => {
      toast.success("New booking successfully created");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createBooking, isLoadingbooking };
}
