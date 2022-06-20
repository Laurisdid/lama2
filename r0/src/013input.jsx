import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
// import { v4 as uuidv4 } from 'uuid';



function App() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('pink');
    const [select, setSelect] = useState('tree');
    const [cb, setCb] = useState({a: false, b: false, c: true, d: true});
    const [radio, setRadio] = useState('c');

    const inputText = e => {
        setText(e.target.value);
    }

    const inputColor = e => {
        setColor(e.target.value);
    }

    // setInterval(() => setColor(randColor()), 200);
    

    const cbClick = c => {
        setCb(checkBox => ({...checkBox, [c]: !checkBox[c]}));
    }

    return (
        <div className="App">
            <header className="App-header" style={{background:color}}>
                <fieldset>
                    <legend>TEXT</legend>
                    <input type="text" onChange={inputText} value={text}></input>
                </fieldset>
                <fieldset>
                    <legend>T-COLOR</legend>
                    <input type="color" onChange={inputColor} value={color}></input>
                </fieldset>
                <fieldset>
                    <legend>SELECT</legend>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        <option value="one">Vienas</option>
                        <option value="two">Du</option>
                        <option value="tree">Trys</option>
                        <option value="ten">Daug</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>CHECKBOX</legend>
                    A<input type="checkbox" onChange={() => cbClick('a')} checked={cb.a}></input>
                    B<input type="checkbox" onChange={() => cbClick('b')} checked={cb.b}></input>
                    C<input type="checkbox" onChange={() => cbClick('c')} checked={cb.c}></input>
                    D<input type="checkbox" onChange={() => cbClick('d')} checked={cb.d}></input>
                </fieldset>
                <fieldset>
                    <legend>RADIO</legend>
                    A<input type="radio" name="r" value="a" onChange={e => setRadio(e.target.value)} checked={radio === 'a'}></input>
                    B<input type="radio" name="r" value="b" onChange={e => setRadio(e.target.value)} checked={radio === 'b'}></input>
                    C<input type="radio" name="r" value="c" onChange={e => setRadio(e.target.value)} checked={radio === 'c'}></input>
                    D<input type="radio" name="r" value="d" onChange={e => setRadio(e.target.value)} checked={radio === 'd'}></input>
                </fieldset>
            </header>
        </div>
    );
}

export default App;