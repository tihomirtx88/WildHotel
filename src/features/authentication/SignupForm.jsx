import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import useSignUp from "./useSignUp";
import FormRowVertical from "../../ui/FormRowVertical";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  // Api
  const { signUp, isLoading } = useSignUp();
  // React query form
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password, nationality, countryFlag, nationalID, admin }) {
    signUp(
      { fullName, email, password, nationality, countryFlag, nationalID, admin },
      {
        onSettled: () => reset(),
        onSuccess: () => {
          console.log('bravooooooooooo');
        }
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Full name" error={errors?.fullName?.message}>
        <Input
          disabled={isLoading}
          type="text"
          id="fullName"
          placeholder="John Dow Nicksen"
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="nationalID" error={errors?.nationalID?.message}>
        <Input
          disabled={isLoading}
          type="text"
          id="nationalID"
          placeholder="1234567"
          {...register("nationalID", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="nationality" error={errors?.nationality?.message}>
        <Input
          disabled={isLoading}
          type="text"
          placeholder="Bulgaria"
          id="nationality"
          {...register("nationality", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="countryFlag" error={errors?.countryFlag?.message}>
        <Input
          placeholder="https://flagcdn.com/bg.svg"
          disabled={isLoading}
          type="text"
          id="countryFlag"
          {...register("countryFlag", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="Admin Role" error={errors?.admin?.message}>
        <Input
          disabled={isLoading}
          type="text"
          id="admin"
          {...register("admin", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <Input
          disabled={isLoading}
          type="email"
          id="email"
          placeholder="stamat@flash.net"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          disabled={isLoading}
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          disabled={isLoading}
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password must to match",
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        {/* type is an HTML attribute! */}
        <Button
          disabled={isLoading}
          variation="secondary"
          type="reset"
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRowVertical>
    </form>
  );
}

export default SignupForm;
