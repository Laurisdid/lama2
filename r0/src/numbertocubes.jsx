import { useState } from "react";
import "./App.scss";
import rand from "./Functions/rand";
// import { v4 as uuidv4 } from 'uuid'; https://docs.google.com/document/d/1m5Co9Lv-n7Mm3IXwsnhWmNaGvbRTImcpp52fCIjUHnk/edit

function App() {
    const [nr, setNr] = useState("");

    const [array, setArray] = useState([]);

    const click = () => {
        const copyArray = [...array];
        for (let i = 0; i < nr; i++) {
            copyArray.push("");
        }
        setArray(copyArray);
    };

    return (
                <div className="App">
            <header className="App-header">
                <fieldset>
                    <input
                        type="text"
                        onChange={(e) => setNr(e.target.value)}
                        value={nr}
                    ></input>
                    <button onClick={click}>Pridek kv</button>
                </fieldset>
                <div className="kvc">
                    {array.map((a, i) => (
                        <div className="kv" key={a}>
                            {rand(100, 200)}
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
