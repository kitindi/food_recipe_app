import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Banner from "./components/Banner";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>
            <span>Cookfy</span>
          </Logo>
        </Nav>
        <Banner>
          <Search />
        </Banner>
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Nav = styled.nav`
  padding: 1.75rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    color: #342914;
    font-weight: 700;
  }
  svg {
    font-size: 2rem;
    color: #68c087;
    cursor: pointer;
  }
`;
export default App;
