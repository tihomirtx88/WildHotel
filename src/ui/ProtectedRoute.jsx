import styled from "styled-components";
import { useUser } from "../features/authentication/useuser";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load athenticated user
  const { isLoadingUser, isAuthenticated } = useUser();

  // 2. If there is not authenticated user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) navigate("/login");
  }, [isAuthenticated, isLoadingUser, navigate]);

  // 3. While loading, show spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is user redner app
  if (isAuthenticated) return children;
}
