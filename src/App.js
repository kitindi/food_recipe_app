import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner>
          <Search />
        </Banner>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
