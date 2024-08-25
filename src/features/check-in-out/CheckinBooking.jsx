import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";

import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import useSettings from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

export default function CheckinBooking() {
  const { booking, isLoading } = useBooking();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [adBreakfast, setAddBreakfast] = useState(false);

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckinIn } = useCheckin();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNight,
  } = booking;


  const optionalBreakfastPrice = settings.breakfastPrice * numNight * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;
    //  If there is breakfast update columns on bookings
    if (adBreakfast) {
      checkin({bookingId, breakfast: {
        hasBreakfast: true,
        extrasPrice: optionalBreakfastPrice,
        totalPrice: totalPrice + optionalBreakfastPrice
      }});
    }else{
      checkin({bookingId, breakfast: {}});
    }
  }

  return (
    <>
      <Row className="chekin-box-header-container" type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            id="breakfast"
            checked={adBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              // if case the client want to pay extra staff
              setConfirmPaid(false);
            }}
          >
             Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          disabled={confirmPaid || isCheckinIn}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!adBreakfast
              ? formatCurrency(totalPrice)
              : `${
                  formatCurrency(totalPrice + optionalBreakfastPrice)
                } (${
                  formatCurrency(totalPrice + optionalBreakfastPrice)
                })`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button disabled={!confirmPaid || isCheckinIn} onClick={handleCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
