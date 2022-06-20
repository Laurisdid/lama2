import { useEffect, useRef, useState } from 'react';
import './App.scss';
import rand from './Functions/rand';
// https://docs.google.com/document/d/1LhNWOMdpgUhY3ermLg7hOnf9Gk_xz-BlPyObdJBxkDk/edit
function App() {

    const [kv, setKv] = useState(null);
    const istorija = useRef([]);

    // PIRMAS KROVIMAS
    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kv'))); // gali buti null arba []
    }, []);

    // UZSAUGOS POKYCIUS
    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
        istorija.current.unshift(kv);
    }, [kv]);


    const prideti = () => {
        const kiekis = rand(5, 10);
        const kvadratukai = [];
        for (let i = 0; i < kiekis; i++) {
            kvadratukai.push('^o^');
        }
        setKv(k => null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
    }

    const isvalyti = () => {
        setKv([]);
    }

    const atgal = () => {
        let senas = istorija.current.shift();
        if (!senas) {
            setKv([]);
        } else if (senas.length === kv.length) {
            senas = istorija.current.shift();
            if (!senas) {
                setKv([]);
            } else {
                setKv(senas);
            }
        }
        else {
            setKv(senas);
        }
        
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>PRAKTIMUMAS</h1>
                    <div className="kvc">
                        {
                            kv ? kv.map((k, i) => <div key={i} className="kv">{k}</div>) : null
                        }
                    </div>

                <button onClick={prideti}>Pridėti</button>
                <button onClick={isvalyti}>Išvalyti</button>
                <button onClick={atgal}>Atgal</button>
            </header>
        </div>
    );
}

export default App;