import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import useUpdateUser from "./useUpdateUser";

function UpdateUserDataForm() {
  // Get user data
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  // Take a hook for update user
  const { updateUser, isUpdatingUser} = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [
    avatar,
     setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if(!fullName) return;
    
    updateUser({fullName, avatar}, {
      onSuccess: () => {
        // Set avatar state to null and clean field
        setAvatar(null);
        e.target.reset(0)
      }
    });
  }

  function handleCancel(){
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdatingUser}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdatingUser}
        />
      </FormRow>

      <FormRow>
        <Button onClick={handleCancel} type="reset" variation="secondary"  disabled={isUpdatingUser}>
          Cancel
        </Button>
        <Button  disabled={isUpdatingUser}>Update account</Button>
      </FormRow>

    </Form>
  );
}

export default UpdateUserDataForm;
