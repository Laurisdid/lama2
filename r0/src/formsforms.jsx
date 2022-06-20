import { useState } from "react";
import "./App.scss";
import rand from "./Functions/rand";
//  https://docs.google.com/document/d/1m5Co9Lv-n7Mm3IXwsnhWmNaGvbRTImcpp52fCIjUHnk/edit

function App() {
    const [name, setName] = useState("")
    const [kg, setKg] = useState("");

    const [array, setArray] = useState([]);

    const click = () => {
        const copyArray = [...array];

        copyArray.push([name, kg]);
        console.log(name,kg)
        setArray(copyArray);
    };

    return (
        <div className="App">
            <header className="App-header">
                <fieldset>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    ></input>
                    <input
                        type="text"
                        onChange={(e) => setKg(e.target.value)}
                        value={kg}
                    ></input>
                    <button onClick={click}>Pridek kv</button>
                </fieldset>
                <div className="kvc">
                    {array.map((k,i) => (
                        <div className="kv" key={id}>
                            {name + " "+ kg + " kg"}
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
