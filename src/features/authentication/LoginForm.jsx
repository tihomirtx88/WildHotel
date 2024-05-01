
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from '../../ui/Button';
import SpinnerMini from '../../ui/SpinnerMini';
import { useState } from "react";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("tihomir@abv.bg");
  const [password, setPassword] = useState("777733");

  const { isLoadingLogin, loginData } = useLogin();

  function handleSubmit(e) {
     e.preventDefault();
     if(!email || !password) return;
     loginData({email, password}, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      }
     });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoadingLogin}>
           {!isLoadingLogin ? 'Log in' : <SpinnerMini/>}
        </Button>
      </FormRowVertical>
    </form>
  );
}
