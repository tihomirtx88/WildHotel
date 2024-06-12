import { useForm } from "react-hook-form";
import useCreateBookings from "./useCreateBookings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useCabins } from "../cabins/useCabins";
import { useUser } from "../authentication/useUser";
import { useEffect } from "react";
import { useState } from "react";

export default function CreateBookingForm({ onCloseNodal }) {
  const { createBooking, isLoadingbooking } = useCreateBookings();
  const { cabins } = useCabins();
  const { user } = useUser();

  console.log(cabins, "cabins");
  const isWorking = isLoadingbooking;

  const { register, handleSubmit, watch, setValue , reset, formState } = useForm();
  const [selectedCabinPrice, setSelectedCabinPrice] = useState("");
  const [selectedCabinImage, setSelectedCabinImage] = useState("");

  const selectedCabinId = Number(watch("cabinId"));

  useEffect(() => {
    const selectedCabin = cabins?.find((cabin) => cabin.id === selectedCabinId);
    if (selectedCabin) {
      setSelectedCabinPrice(selectedCabin.regularPrice);
      setSelectedCabinImage(selectedCabin.image);
    } else {
      setSelectedCabinPrice("");
      setSelectedCabinImage("");
    }
  }, [selectedCabinId, cabins]);

  //Get errors from react form
  const { errors } = formState;

  function onSubmit(data) {
    createBooking(
      { ...data, guestId: user.id },
      {
        onSuccess: (data) => {
          console.log(data);
          reset();
          onCloseNodal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  const preventMinus = (e) => {
    if (e.key === '-' || e.key === 'e' || e.key === 'E') {
      e.preventDefault();
    }
  };

  const validateValue = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setValue('quantity', 0);
    }
  };

  return (
    // Pass props to From component
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseNodal ? "modal" : "regular"}
    >
      <FormRow label="Booking Start Date" error={errors?.startDate?.message}>
        <Input
          type="date"
          id="startDate"
          disabled={isWorking}
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Booking End Date" error={errors?.endDate?.message}>
        <Input
          type="date"
          id="endDate"
          disabled={isWorking}
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Number of night" error={errors?.numNight?.message}>
        <Input
          type="number"
          id="numNight"
          disabled={isWorking}
          {...register("numNight", {
            required: "This field is required",
            min: {
              value: 0,
              message: 'Value must be zero or greater'
            } 
          })}
          min="0"  // Prevent negative values
          onKeyDown={preventMinus}  // Prevent typing minus key
          onChange={validateValue}  // Validate value on change
        />
      </FormRow>

      <FormRow label="Number of guests" error={errors?.numGuests?.message}>
        <Input
          type="number"
          id="numGuests"
          disabled={isWorking}
          {...register("numGuests", {
            required: "This field is required",
            min: {
              value: 0,
              message: 'Value must be zero or greater'
            } 
          })}
          min="0"  // Prevent negative values
          onKeyDown={preventMinus}  // Prevent typing minus key
          onChange={validateValue}  // Validate value on change
        />
      </FormRow>

      <FormRow label="Choice cabin" error={errors?.cabinId?.message}>
        <select
          style={{color: 'black'}}
          id="cabinId"
          {...register("cabinId", { required: "This field is required" })}
        >
          <option disabled={isWorking}>Select Cabin</option>
          {cabins?.map((cabin) => (
            <option key={cabin.id} value={cabin.id}>
              {cabin.name}
            </option>
          ))}
        </select>
      </FormRow>

      <FormRow label="Cabin Price">
        <input style={{color: 'black'}} type="text" value={selectedCabinPrice} readOnly />
      </FormRow>

      <FormRow label="Cabin Image">
        <img src={selectedCabinImage}/>
      </FormRow>


      <FormRow label="Status" error={errors?.status?.message}>
        <Input
          type="text"
          id="status"
          value="unconfirmed"
          readOnly
          {...register("status")}
        />
      </FormRow>

      <FormRow label="Observation" error={errors?.observation?.message}>
       <textarea style={{color: 'black'}} name="observation" id="observation"
          disabled={isWorking}
          {...register("observation")}></textarea>
      </FormRow>

      <FormRow label="guestId" error={errors?.guestId?.message}>
        <select style={{color: 'black'}} id="guestId" {...register("guestId")}>
          <option disabled={isWorking} value={user.id}>
            {user.email}
          </option>
        </select>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseNodal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>Create new booking</Button>
      </FormRow>
    </Form>
  );
}
