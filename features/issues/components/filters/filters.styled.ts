import styled from "styled-components";
import { breakpoint } from "@styles/theme";
import { Select as UnstyledSelect, Input as UnstyledInput } from "@features/ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block: 1rem;
  gap: 1rem;
  width: 100%;
  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    justify-content: flex-end;
    order: initial;
    flex-wrap: wrap;
  }
`;

export const Select = styled(UnstyledSelect)`
  width: 100%;
  @media (min-width: ${breakpoint("desktop")}) {
    width: 10rem;
  }
` as typeof UnstyledSelect;

export const Input = styled(UnstyledInput)`
  width: 100%;
  @media (min-width: ${breakpoint("desktop")}) {
    width: 17.5rem;
  }
`;
