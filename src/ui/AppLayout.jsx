import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledApplayout = styled.div`
 display: grid;
 height: 100vh;
 grid-template-columns: 26rem 1fr;
 grid-template-rows: auto 1fr;
`;

const Main = styled.main`
   background: var(--color-gray-50);
  padding: 4rem 4.8rem 6.4rem;
`;

export default function AppLayout() {
  return (
    <StyledApplayout>
      <Sidebar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledApplayout>
  );
}