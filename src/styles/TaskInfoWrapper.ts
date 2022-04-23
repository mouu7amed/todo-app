import styled from "styled-components";

export const TaskInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  .task {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 480px) {
    .task {
      flex-direction: column;
    }
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
  }

  @media (max-width: 480px) {
    .left {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }

  .left .checked,
  .left .delete {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.2rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    background-color: var(--white-color);
  }

  .left .checked:hover,
  .left .delete:hover {
    transform: scale(1.1);
  }

  .left .checked .icon,
  .left .delete .icon {
    width: 100%;
    height: 100%;
  }

  .left .checked .icon {
    color: var(--item-color);
  }

  .left .delete .icon {
    color: var(--red-color);
  }

  .left .task-text {
    font-weight: 500;
    margin-left: 1rem;
  }

  .left .task-completed {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media (max-width: 480px) {
    .right {
      width: 100%;
    }
  }

  .right .ach-date {
    display: flex;
    align-items: center;
    background-color: var(--white-color);
    padding: 0.1rem 0.5rem;
    border: 1px solid var(--gold-color);
    border-radius: 0.3rem;
    min-width: 120px;
  }

  .right .ach-date .icon {
    color: var(--gold-color);
    padding-right: 0.5rem;
    text-align: center;
    font-size: 0.7rem;
  }

  .right .ach-date .date {
    font-size: 0.8rem;
  }
`;
