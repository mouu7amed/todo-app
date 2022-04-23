import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  .icon {
    color: var(--item-color);
    font-size: 2.5rem;
    padding: 0 1rem;
  }

  .logo {
    color: var(--item-color);
    font-size: 2rem;
    text-decoration: underline;
  }
`;
