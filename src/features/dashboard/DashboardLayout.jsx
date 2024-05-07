import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import Spinner from '../../ui/Spinner';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout(){

  const { isLoading, bookings } = useRecentBookings();
  const { isLoading: isLoadingStays, stays, confirmedStays} = useRecentStays();

  if(isLoading || isLoadingStays) return <Spinner/>;

  return(
    <StyledDashboardLayout>
        <div>Statistics</div>
        <div>Today activity</div>
        <div>Chart stay durations</div>
        <div>Chart of sales</div>
    </StyledDashboardLayout>
  );
}

