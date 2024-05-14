import { useQuery } from "@tanstack/react-query"
import { getStaysTodayActivity } from "../../services/apiBookings";

export default function useTodayActivity(){
    const { isLoading, data: stays } = useQuery({
        queryFn: getStaysTodayActivity,
        queryKey: ['today-activity']
    });

    const filteredStays = stays?.filter((stay) => stay.status === 'unconfirmed' || stay.status === 'checked-in')

    return { filteredStays, isLoading };
}