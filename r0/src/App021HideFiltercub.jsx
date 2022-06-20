import { useEffect, useReducer, useRef, useState } from 'react';
import './App.scss';
import listReducer from './Reducers/listReducer';


function App() {

    const [list, listDispach] = useReducer(listReducer, []);
    const [number, setNumber] = useState('');
    const [range, setRange] = useState('0');
    const doRange = useRef(true);

    const newList = () => {
        const action = {
            type: 'new'
        }
        listDispach(action);
    }

    const sortList = () => {
        const action = {
            type: 'sort'
        }
        listDispach(action);
    }

    const f5000 = () => {
        const action = {
            type: 'f5000'
        }
        listDispach(action);
    }

    const f4000 = () => {
        const action = {
            type: 'f4000'
        }
        listDispach(action);
    }

    const freset = () => {
        const action = {
            type: 'freset'
        }
        listDispach(action);
    }

    const DefSortList = () => {
        const action = {
            type: 'DefSortList'
        }
        listDispach(action);
    }

    const add = () => {
        const action = {
            type: 'add'
        }
        listDispach(action);
    }

    const bla = n => {
        const action = {
            type: 'hide',
            payload: n
        }
        listDispach(action);
    }

    const hideNumber = () => {
        const action = {
            type: 'hide',
            payload: number
        }
        setNumber('');
        listDispach(action);
    }

    useEffect(() => {
        if (!doRange.current) {
            return;
        }
        doRange.current = false;
        setTimeout(() => doRange.current = true, 20);

        const action = {
            type: 'range',
            payload: range.padStart(4, 0)
        }
        listDispach(action);
    }, [range])

    return (
        <div className="App">
            <header className="App-header">
                <h1>REDUCER</h1>
                <div className="kvc">
                <button onClick={newList}>New List</button>
                <button onClick={sortList}>Sort List</button>
                <button onClick={DefSortList}>Default Sort List</button>
                <button onClick={f5000}>Filter more 5000</button>
                <button onClick={f4000}>Filter less 4000</button>
                <button onClick={freset}>Filter Reset</button>
                <button onClick={add}>Add to List</button>
                </div>
                <div className="kvc">
                    <input onChange={e => setNumber(e.target.value)} value={number}></input>
                    <button onClick={hideNumber}>Hide it!</button>
                </div>
                <div className="kvc">
                    <h2>{range.padStart(4, 0)}</h2>
                    <input type="range" min="0" max="9999" onChange={e => setRange(e.target.value)} value={range}></input>
                </div>
                <div className="kvc">
                    {
                        list.map((o, i) => o.show ? <div key={i} className="kv" onClick={() => bla(o.number)} style={{backgroundColor:o.color}}><i>{o.number}</i></div> : null)
                    }
                </div>

            </header>
        </div>
    );

    

}

export default App;