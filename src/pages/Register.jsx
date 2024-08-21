import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SingUpFormForUsers from "../features/authentication/SingUpFormForUsers";

const RegisterLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 70rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Register = () => {
  return (
    <RegisterLayout>
      <Logo />
      <Heading as="h4">Register new account</Heading>
      <SingUpFormForUsers />
    </RegisterLayout>
  );
};

export default Register;
