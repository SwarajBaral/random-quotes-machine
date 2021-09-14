import React, { useEffect, useState } from "react";
import "./block.css";
import { CSSTransition } from "react-transition-group";

function Block(props) {
  const [quote, setQuote] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, odio."
  );
  const [author, setAuthor] = useState("Swaraj Baral");
  const [col, setCol] = useState("#000");
  const [changeCol, setChangeCol] = useState(false);
  const url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  const getQuote = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        var rand = Math.floor(Math.random() * 103);
        var q = data.quotes[rand];
        var bg = colors[Math.floor(Math.random() * colors.length)];
        setCol(bg);
        // console.log(props.setbgcolor(bg));
        props.change(bg);
        setChangeCol(!changeCol);
        setQuote(q.quote);
        setAuthor(q.author);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="row">
      <div
        className="col-lg-6 offset-lg-3 col-md-12"
        id="quote-box"
        style={{ color: col }}
      >
        <CSSTransition in={changeCol} timeout={300} classNames="fade">
          <div id="text">
            {/* <p id="main-quote">Main quote here</p> */}
            <h2 align="center" id="main-quote">
              <i class="fa fa-quote-left"> </i>&nbsp; {quote}
            </h2>
          </div>
        </CSSTransition>
        <br />
        <CSSTransition in={changeCol} timeout={300} classNames="fade">
          <p id="author" align="right" style={{ fontSize: "large" }}>
            {"-" + author}
          </p>
        </CSSTransition>
        <div className="buttons">
          <div className="socials">
            <a
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
                encodeURIComponent('"' + quote + '" ' + author)
              }
              id="tweet-quote"
              className="btn btn-secondary"
              target="_top"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" id="post-quote" className="btn btn-secondary">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
          <a
            className="btn btn-primary"
            id="new-quote"
            href="#"
            onClick={getQuote}
          >
            Next <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
      {/* </CSSTransition> */}
    </div>
  );
}

export default Block;
