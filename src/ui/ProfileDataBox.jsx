import styled from "styled-components";

const StyledProfileDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;


const ProfileEmail = styled.p`
  color: var(--color-green-700);
`;

const NationalIdAndFlag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: var(--color-green-100);
  color: var(--color-green-700);

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const ProfileAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export default function ProfileDataBox({ user }) {
  const { user_metadata, email } = user;


  return (
    <StyledProfileDataBox>
      <Header>Personal information</Header>

      <Section className="profile-container-wrapper">
        <ProfileInfo>
          <ProfileEmail>
           {email}
          </ProfileEmail>
        </ProfileInfo>
        <NationalIdAndFlag className="profile-details-info">
          <ProfileAvatar src={user_metadata.avatar} alt="" />
          <ProfileEmail>National ID: 3432432</ProfileEmail>
        </NationalIdAndFlag>
      </Section>
    </StyledProfileDataBox>
  );
}
