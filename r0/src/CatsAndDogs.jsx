import './App.scss';
import { useState } from 'react';




function App() {

    const [katinai,setKatinai]=useState([]);
    
    const [suo, setSuo] = useState([]);

    const dogs = [
        'Sniego',
        'Dingo',
        'Atsirado',
        'Pifas',
        'Bobikas'
    ];
    const cats = [
        'Mulkis',
        'Kakius',
        'Pilkius',
        'Balčius'
    ];
    const addDogs=()=>{
        setSuo(dogs)
    }

    const callDogs=()=>{
        setSuo(x=>[...x,...dogs])
    }

    const addCats=()=>{
        setKatinai(cats)
    }
    const callCats=()=>{
        setKatinai(x=>[...x,...cats])
    }
    const isvalyti = () => {
        setKatinai([]);
        setSuo([]);
    }


    return (
        <div className="App">
            <header className="App-header">
            <button onClick={addCats}>Pridėti cat</button>
            <button onClick={callCats}>Prikviesk cat</button>
            <button onClick={isvalyti}>Išvalyti</button>
            <button onClick={addDogs}>Pridėti so</button>
            <button onClick={callDogs}>Prikviesk So</button>
            <div className="kvc">
                        {
                             katinai.map((k, i) => <div key={i} className="kv">{k}</div>) 
                        }
                    </div>
                    <div className="kvc">
                        {
                             suo.map((k, i) => <div key={i} className="kv">{k}</div>) 
                        }
                    </div>
            </header>
        </div>
    );

}

export default App;