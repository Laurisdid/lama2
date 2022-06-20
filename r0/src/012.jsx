import { useEffect, useRef, useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';

function App() {

    const [count, setCount] = useState(null);
    const [kv, setKv] = useState(null);

    const mano = useRef(0);
    const panda = useRef();

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
        setCount(parseInt(localStorage.getItem('count') ?? 0));
    }, []);

    useEffect(() => {
        if (null === count) {
            return;
        }
        localStorage.setItem('count', count);
    }, [count]);



    const add = () => {
        setCount(c => c + 1);
        mano.current = mano.current + 3;
        console.log(mano.current);
        // const p = document.querySelector('#panda');
        const p = panda.current;
        console.log(p.dataset.panda);
    }

    const addCat = () => {
        localStorage.setItem('katinukas', JSON.stringify(['Murka', 'Pilkis']));
    }

    const getCat = () => {
        console.log(JSON.parse(localStorage.getItem('katinukas')));
    }

    const remCat = () => {
        localStorage.removeItem('katinukas');
    }


    return (
        <div className="App">
          <header className="App-header">
           <h1>useRef LocalStorage {count}</h1>
           <button onClick={add}>+1</button>
           <button onClick={addCat}>Add Cat</button>
           <button onClick={getCat}>Get Cat</button>
           <button onClick={remCat}>Remove Cat</button>
           <div ref={panda} data-panda="miega"></div>
           <button onClick={addKv}>ADD []</button>
            <button onClick={remKv}>REMOVE []</button>
            <div className="kvc">
                {
                    kv ? kv.map((c, i) => <div className="kv" key={i} style={{backgroundColor:c}}>{i}</div>) : null
                }
                </div>
          </header>
        </div>
      );

}

export default App;