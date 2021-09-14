// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Block from "./components/quoteblock/Block";

function App() {
  const [bgcolor, setbgcolor] = useState("#fff");

  const handleColor = (c) => {
    setbgcolor(c);
  };
  return (
    <div id="inner-root" style={{ background: bgcolor }}>
      <header className="App-header">
        {/* <h1 align="center">Hey there, welcome to quotes app !</h1> */}
      </header>
      <div className="container">
        <Block change={handleColor} />
      </div>
      <footer align="center">
        Created with ❤️ by{" "}
        <a
          href="https://swarajbaral.github.io/fcc-responsive-projects/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Swaraj
        </a>
      </footer>
    </div>
  );
}

export default App;
