import styled from "styled-components";
import Tag from '../../ui/Tag';
import {Flag} from '../../ui/Flag';
import Button from '../../ui/Button';
import { Link } from "react-router-dom";

  const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

 const Guest = styled.div`
  font-weight: 500;
`;

export default function TodayItem({activity}){
  const { id, numNight, status, guests} = activity;
 console.log(activity);

  return(
    <StyledTodayItem>

      {status === 'unconfirmed' && <Tag type="green">Arraving</Tag>}

      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}

      <Flag src={guests?.countryFlag} alt={`Flag of ${guests?.nationality}`}/>

      <Guest>{guests?.fullName}</Guest>

      <div>{numNight} nights</div>

      {status === 'unconfirmed' && <Button type="small" variation='primary' as={Link} to={`/checkin/${id}`}>Check in</Button>}

    </StyledTodayItem>
  );
}
