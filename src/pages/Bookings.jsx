import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddBooking from '../features/bookings/AddBooking';

export default function Bookings() {
  return(
  <>
    <Row className="bookings-header-container" type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <BookingTableOperations/>
    </Row>
   
    <Row>
      <BookingTable />
      <AddBooking/>
    </Row>

  </>);
}
