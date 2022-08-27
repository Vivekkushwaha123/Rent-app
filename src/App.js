import "./App.css";
import { Navbar, Card, Body, Filter, Search } from "./component/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="" style={{ backgroundColor: "#F7F7FD" }}>
        <div className="container">
          <Search />
          <Filter />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
