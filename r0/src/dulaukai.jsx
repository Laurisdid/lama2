import { useState } from "react";
import "./App.scss";
import rand from "./Functions/rand";
// import { v4 as uuidv4 } from 'uuid'; https://docs.google.com/document/d/1m5Co9Lv-n7Mm3IXwsnhWmNaGvbRTImcpp52fCIjUHnk/edit

function App() {
    const [nr, setNr] = useState("");
    const [nr2, setNr2] = useState("");
   

   

    return (
                <div className="App">
            <header className="App-header">
                <fieldset>
                    <input
                        type="text"
                        onChange={(e) => setNr(e.target.value)}
                        value={(nr)}
                    ></input>
                    
                </fieldset>
                <fieldset>
                    <input
                        type="text"
                        onChange={(e) => setNr(e.target.value)}
                        value={nr/2}
                    ></input>
                    
                </fieldset>
                
            </header>
        </div>
    );
}

export default App;
