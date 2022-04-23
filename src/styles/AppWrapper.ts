import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main-color);
  width: 60vw;
  padding: 1rem 2rem;
  margin: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 991px) {
    width: 80vw;
  }
  @media (max-width: 540px) {
    padding: 1rem;
    width: 90vw;
  }
`;
