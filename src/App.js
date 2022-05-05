import ItemListContainer from "./components/itemlistcontainer.js";
import Navbar from "./components/navbar.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <article>
          <h1>Boxing Gloves </h1>
          <ItemListContainer />
        </article>
      </div>
    </div>
  );
}

export default App;
