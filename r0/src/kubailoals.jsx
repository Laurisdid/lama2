import { useState } from 'react';
import './App.scss';
import getId from './Functions/getId';

function App() {

    const [kv, setKv]=useState([]);
    const add=()=>{
        setKv(k=>[...k,{id:getId('KV')}])
    }
  

    return (
        <div className="App">
          <header className="App-header">
          <button onClick={add}>ADD []</button>
            {/* <button onClick={remKv}>REMOVE []</button> */}
            <div className="kvc">
                {
                   kv.map(k => <div  key={k.id} className="kv">{k.id}</div>)
                }
                </div>
          </header>
        </div>
      );

}

export default App;