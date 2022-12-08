import styled from "styled-components";
import { breakpoint } from "@styles/theme";

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
    gap: 3rem;
    flex-wrap: wrap;
  }
`;
