import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingApi } from '../../services/apiBookings';
import toast from "react-hot-toast";

export function useDeleteBookings(){
    const queryClient = useQueryClient();

    const {isLoading: isDeleteBookingLoading, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            toast.success("Booking successfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["bookings"],
            });
        },
        onError: (err)=> toast.error(err.message),
    });

    return{isDeleteBookingLoading, deleteBooking};
}