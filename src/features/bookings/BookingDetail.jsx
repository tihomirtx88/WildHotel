import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBookings } from "./useDeleteBookings";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { isLoading, booking } = useBooking();

  const navigate = useNavigate();
  const { checkout, isCheckinOut } = useCheckout();
  const { deleteBooking, isDeleteBookingLoading } = useDeleteBookings();

  const { status, id: bookingId } = booking;

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  if(!booking) return <Empty resourceName="booking"/>

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            disabled={isCheckinOut}
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
          >
            Check Out
          </Button>
        )}

        <Modal>
          <Modal.Open opens='delete'>
            <Button variation='danger'>
               Delete Booking
            </Button>
          </Modal.Open>
          
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleteBookingLoading}
              onConfirm={() => deleteBooking(bookingId, {
                // This is for back page after success deleting 
                onSettled: () => navigate(-1),
              })}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
