import Stat from '../dashboard/Stat';
import {
    HiOutlineBanknotes,
    HiOutlineBriefcase,
    HiOutlineCalendarDays,
    HiOutlineChartBar,
  } from "react-icons/hi2";

  import { formatCurrency } from '../../utils/helpers';

export default function Stats({bookings, confirmedStays, numDays, cabinCount}){
  // 1. Number of bookings
  const numberBookings = bookings.length;

  // 2. Number of sales
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  //Total check ins
  const checkins = confirmedStays.length;

  // 4. Occupancy rate
  // Mode explanes num checked in nights / all available nights(num days * num cabins) 
  const occupation = confirmedStays.reduce((acc, curr) => acc + curr.numNight, 0) / (numDays * cabinCount);

  return(
    <>
      <Stat title='Bookings' color='blue' icon={<HiOutlineBriefcase/>} value={numberBookings}/>
      <Stat title='Sales' color='gree' icon={<HiOutlineBanknotes/>} value={formatCurrency(sales)}/>
      <Stat title='Check ins' color='indigo' icon={<HiOutlineCalendarDays/>} value={checkins}/>
      <Stat title='Occupancy rate' color='yellow' icon={<HiOutlineChartBar/>} value={Math.round(occupation * 100)+'%'}/>
    </>
  );
}