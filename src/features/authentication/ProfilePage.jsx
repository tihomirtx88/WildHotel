import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import ProfileDataBox from "../../ui/ProfileDataBox";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export default function ProfilePage() {
  const moveBack = useMoveBack();

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">XName profile</Heading>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <ProfileDataBox />
      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
