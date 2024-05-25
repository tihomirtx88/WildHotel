import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import ProfileDataBox from "../../ui/ProfileDataBox";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import { useUser } from '../authentication/useUser';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export default function ProfilePage() {
  const moveBack = useMoveBack();

  const {  user} = useUser();
  const { user_metadata } = user;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">{user_metadata.fullName}</Heading>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <ProfileDataBox user={user}/>
      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
