import { FaPizzaSlice, FaHamburger, FaCookieBite } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import { List, SLink } from "../Styles/Styled";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/African"}>
        <FaPizzaSlice />
        <h4>African</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/British"}>
        <FaCookieBite />
        <h4>British</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

export default Category;
