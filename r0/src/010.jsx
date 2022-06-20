import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';

// const katinukai = ['Pilkis', 'Murkis', 'Rainis'];

function App() {

    const [spalva, setSpalva] = useState('yellow');
    const [skaicius, setSkaicius] = useState(1);
    const [kv, setKv] = useState([]);

    // const mygtukas = () => {
    //     console.log('Aš gražus mygtukas');
    //     return mygtukoBrolis;
    // }

    // const mygtukoBrolis = () => {
    //     console.log('Aš gražus mygtuko brolis');
    // }

    const beArgumentu = () => {
        console.log('beArgumentu');
    }

    const suArgumentu = ka => {
        console.log('suArgumentu: ' + ka);
    }

    const keistiSpalva = () => {

        // const nauja = spalva === 'yellow' ? 'pink' : 'yellow'; BLOGAI!!!!!


        setSpalva(senojiSpalva => senojiSpalva === 'yellow' ? 'pink' : 'yellow');

        // console.log(spalva);

    }

    const addKv = () => {
        setKv(k => [...k, randColor()]);
    }

    const remKv = () => {
        setKv(k => k.slice(1));
    }

    const skaiciuotuvas = ka => setSkaicius(s => s + ka);
    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{color: spalva}}>State {skaicius}</h1>
                
                <div className="kvc">
                {
                    kv.map((c, i) => <div className="kv" key={i} style={{backgroundColor:c}}>{i}</div>)
                }
                </div>



                <button onClick={beArgumentu}>BE</button>
                <button onClick={() => suArgumentu('labas')}>SU</button>
                <button onClick={keistiSpalva}>Kita spalva</button>
                <button onClick={() => skaiciuotuvas(1)}>+1</button>
                <button onClick={() => skaiciuotuvas(-1)}>-1</button>
                <button onClick={addKv}>ADD []</button>
                <button onClick={remKv}>REMOVE []</button>
            </header>
        </div>
    );
}

export default App;