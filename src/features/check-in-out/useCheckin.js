import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: checkin, isLoading: isCheckinIn} = useMutation({
        mutationFn: ({bookingId, breakfast}) => 
        updateBooking(bookingId, {
            status: 'checked-in',
            isPaid: true,
            ...breakfast
        }),
        // Method get the same data from getBooking() return data
        onSuccess: (data) => {
            // Create toast messsage
            toast.success(`Booking #${data.id} successfully checked in`);
            // Validate querry 
            queryClient.invalidateQueries({active: true});
            navigate('/');
        },
        onError: () => toast.error('There was an error while checking in'),
    });

    return{ checkin, isCheckinIn};
}