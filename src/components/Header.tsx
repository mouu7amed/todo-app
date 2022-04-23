import { HeaderStyles } from "../styles/HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <HeaderStyles>
      <FontAwesomeIcon icon={faSquareCheck} className="icon" />
      <p className="logo">My Task-s</p>
    </HeaderStyles>
  );
};
