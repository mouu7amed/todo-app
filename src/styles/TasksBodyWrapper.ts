import styled from "styled-components";

export const TasksBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1.5rem;
  width: 100%;

  .options {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    border-top: 1px solid var(--line-color);
    padding-top: 1.5rem;
  }

  @media (max-width: 576px) {
    .options {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .options label {
    padding: 0 0.5rem;
    font-size: 0.8rem;
  }

  .options select {
    border: 1px solid var(--line-color);
    outline: none;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    min-height: 2rem;
  }

  .options .icon {
    color: var(--item-color);
    padding-left: 0.2rem;
    font-size: 0.9rem;
  }
`;
