import styled from "styled-components";

export const MainContainer = styled.main`
  & {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    background: var(--background-secondary);
  }
`;
