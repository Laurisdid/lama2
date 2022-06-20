import { useEffect, useRef, useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
import rand from './Functions/rand';


function App() {
  const [kv, setKv] = useState([]);
  const [rt, setRt] = useState([]);
  let aork =0;
  const generuok =()=>{
    for(let i=0;i<20;i++){
    aork=rand(0,1);
    if(aork == 0){
      setRt(k => [...k, randColor()]);
    }else{
      setKv(k => [...k, randColor()]);
    }
  }
  }
  const isvalyti = () => {
    setKv([]);
    setRt([]);
}

  const addRt = () => {
    setRt(k => [...k, randColor()]);
  }

  const remRt = () => {
    setRt(k => k.slice(1));
  }


  const addKv = () => {
    setKv(k => [...k, randColor()]);
  }

  const remKv = () => {
    setKv(k => k.slice(1));
  }

  
  useEffect(() => {
    setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
}, []);

useEffect(() => {
    if (null === kv) {
        return;
    }
    localStorage.setItem('kv', JSON.stringify(kv));
}, [kv]);


useEffect(() => {
  setKv(JSON.parse(localStorage.getItem('rt') ?? '[]'));
}, []);

useEffect(() => {
  if (null === rt) {
      return;
  }
  localStorage.setItem('rt', JSON.stringify(rt));
}, [rt]);


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={generuok}>generuok</button>
        <button onClick={isvalyti}>paleisti</button>
        <button onClick={addKv}>ADD []</button>
        <button onClick={remKv}>REMOVE []</button>
        <button onClick={addRt}>ADD O </button>
        <button onClick={remRt}>REMOVE O</button>
        <div>[Ganykla]</div>
        <div className="kvc">
          {
            kv.map((c, i) => <div className="kv" key={i} style={{ backgroundColor: c }}>{""+c}</div>)
          }
           {
            rt.map((c, i) => <div className="rt" key={i} style={{ backgroundColor: c }}>{''+c}</div>)
          }
        </div>
      </header>
    </div>
  );
}
export default App;