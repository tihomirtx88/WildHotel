import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSettings from "./useSettings";
import Spinner from "./../../ui/Spinner";
import UseEditSettings from "./useEditSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBokkingLength,
      maxBookingLength,
      numGuestsOfBooking,
      breakfastPrice,
    } = {},
    // Default initial will be empty object, to prevent error
  } = useSettings();

  const { isEditing, updateSetting } = UseEditSettings();

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;

    updateSetting({
      [field]: value,
    });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBokkingLength}
          disabled={isEditing}
          onBlur={(e) => handleUpdate(e, "minBokkingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isEditing}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={numGuestsOfBooking}
          disabled={isEditing}
          onBlur={(e) => handleUpdate(e, "numGuestsOfBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isEditing}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
