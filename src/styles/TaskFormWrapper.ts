import styled from "styled-components";

export const TaskFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 0.4rem;
  background-color: var(--white-color);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem;
  }

  .task-input,
  .add-task {
    border: none;
    outline: none;
    height: 100%;
  }

  .task-input {
    caret-color: var(--item-color);
    padding: 1rem;
    background-color: var(--white-color);
    flex: 1 0 auto;
    font-size: 1rem;
  }
  .react-date-picker__wrapper {
    border: none;
  }

  @media (max-width: 576px) {
    .react-date-picker__wrapper {
      font-size: 0.9rem;
    }
  }

  .add-task {
    background-color: var(--item-color);
    color: var(--white-color);
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: 0.3s;
  }

  .add-task:hover {
    transform: scale(1.1);
  }
`;
