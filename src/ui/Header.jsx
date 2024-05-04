import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const StyledHeader = styled.header`
  background: var(--color-gray-0);
 padding: 1.2rem 4.8rem;
 border-bottom: 1px solid var(--color-gray-100);
`;

export default function Header(){
    return(
        <StyledHeader>
            <Logout/>
            Header
        </StyledHeader>
    );
}