import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout(){
    const queryClient = useQueryClient();
    const { mutate: checkout, isLoading: isCheckinOut} = useMutation({
        mutationFn: (bookingId) => 
        updateBooking(bookingId, {
            status: 'checked-out',
        }),
        // Method get the same data from getBooking() return data
        onSuccess: (data) => {
            // Create toast messsage
            toast.success(`Booking #${data.id} successfully checked out`);
            // Validate querry 
            queryClient.invalidateQueries({active: true});
        },
        onError: () => toast.error('There was an error while checking out'),
    });

    return{ checkout, isCheckinOut};
}