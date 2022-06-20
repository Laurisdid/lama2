import "./App.scss";
import axios from "axios";
import { useEffect, useReducer, useState, useRef } from "react";
import randColor from "./Functions/randColor";
import booksReducer from "./Reducers/booksReducer";

function App() {
  const [books, dispachBooks] = useReducer(booksReducer, []);
  const [kaina, setKaina] = useState("0");
  const doKaina = useRef(true);

  useEffect(() => {
    axios.get("http://in3.dev/knygos/").then((res) => {
      const action = {
        payload: res.data,
        type: "get_from_server",
      };
      console.log(res.data);
      dispachBooks(action);
    });
  }, []);
  const sortAZ = () => {
    const action = {
      type: "sortAZ",
    };
    dispachBooks(action);
  };
  const sort17 = () => {
    const action = {
      type: "sort17",
    };
    dispachBooks(action);
  };
  const sortDEF = () => {
    const action = {
      type: "sortDEF",
    };
    dispachBooks(action);
  };
  const reset = () => {
    const action = {
      type: "reset",
    };
    dispachBooks(action);
  };
  const bla = (n) => {
    const action = {
      type: "hide",
      payload: n,
    };
    dispachBooks(action);
  };

  useEffect(() => {
    if (!doKaina.current) {
      return;
    }
    doKaina.current = false;
    setTimeout(() => (doKaina.current = true), 1);

    const action = {
      type: "kaina",
      payload: kaina,
    };
    dispachBooks(action);
  }, [kaina]);
  const sortPrice = () => {
    const action = {
      type: "sortPrice",
    };
    dispachBooks(action);
  };
  const reload = () => {
    const action = {
      type: "reload",
    };
    dispachBooks(action);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ backgroundColor: randColor() }}>Welcome to Class</h1>
        <div>
          <div>
            <button onClick={reset}>unhide</button>
            <button onClick={sortAZ}>Sort AZ</button>
            <button onClick={sortPrice}>Sort price</button>
            <button onClick={sort17}>Sort less then 13</button>
            <button onClick={sortDEF}>Reset Sort</button>
            <button onClick={reload} >reload books</button>
          </div>
          <div className="kvc">
            <h2>{kaina} Eur</h2>
            <input
              type="range"
              min="0"
              max="20"
              onChange={(e) => setKaina(e.target.value)}
              value={kaina}
            ></input>
          </div>
          <div></div>
        </div>
        <div >
          {" "}
          {books.length ? (
            books.map((b, i) =>
              b.show ? (
                <p style={{ width: "24%",display:"inline-block" }} onClick={() => bla(b.id)} key={i}>
                  {b.title} <i>{b.price} EUR</i>
                  <div style={{ backgroundColor: randColor() }}>
                    <img src={b.img} alt="a"></img>
                    <div>author : {b.author}</div>
                    <div>category : {b.type}</div>
                  </div>
                </p>
              ) : null
            )
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
