import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import Spinner from '../../ui/Spinner';
import Stats from "./Stats";
import { useCabins } from '../../features/cabins/useCabins';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout(){

  const { isLoading, bookings } = useRecentBookings();
  const { isLoading: isLoadingStays, confirmedStays, numDays} = useRecentStays();
  const { isLoading: isLoadingVabins, cabins} = useCabins();

  if(isLoading || isLoadingStays || isLoadingVabins) return <Spinner/>;

  return(
    <StyledDashboardLayout>
        <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length}/>
        <div>Today activity</div>
        <div>Chart stay durations</div>
        <div>Chart of sales</div>
    </StyledDashboardLayout>
  );
}

