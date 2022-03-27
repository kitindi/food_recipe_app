import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiMeat, GiChopsticks } from "react-icons/gi";
import { List, SLink } from "../Styles/Styled";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/African"}>
        <FaPizzaSlice className="icon_size" />
        <h4>African</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger className="icon_size" />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/British"}>
        <GiMeat className="icon_size" />
        <h4>British</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks className="icon_size" />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

export default Category;
