import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

export default function Filter({ filterfield, optionsArray }) {
  // Store value in url
  const [searchParams, setSearchParams] = useSearchParams();
  const currentfilter = searchParams.get(filterfield) || optionsArray.at(0).value;

  function handleClick(value) {
    // Value is value pass in button click event
    searchParams.set(filterfield, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {optionsArray.map((option) => (
        <FilterButton
          key={option.label}
          onClick={() => handleClick(option.value)}
          active={option.value === currentfilter}
          disabled={option.value === currentfilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}
