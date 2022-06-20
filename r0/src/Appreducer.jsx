import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import colorReducer from './Reducers/colorReducer';
import numberReducer from './Reducers/numberReducer';
import rand from './Functions/rand';
 
function App() {
    const [color, dispachColor] = useReducer(colorReducer, 'yellow');
    const [numb, dispachNumb] = useReducer(numberReducer, '0000');
    const [numb2, setNumb2] = useState('#F8dd00');
    const[h2,seth2]=useState();
    const [colorInput, setColorInput] = useState('#F8dd00');
    // const goPink = () => {
    //     setColor('pink');
    // }

    const goPink = () => {
        const action = {
            type: 'go_pink'
        }
        dispachColor(action);

    }

    const goYellow = () => {
        const action = {
            type: 'go_y'
        }
        dispachColor(action);
    }

    const goChange = () => {
        const action = {
            type: 'change_color'
        }
        dispachColor(action);
    }

    const goChangeTo = () => {
        const action = {
            type: 'change_color_to',
            payload: colorInput
        }
        dispachColor(action);
    }

    const number1 = () => {
        const action = {
            type: 'do1'
        }
        dispachNumb(action);
    }

    const number2 = () => {
        const action = {
            type: 'do2',
            payload: rand(0, 100)
        }
        dispachNumb(action);
    }
    const gotext=()=>{
        seth2(numb2)
    }

    // useEffect(() => {
    //     setInterval(()=> dispachColor({type: 'change_color'}), 3000)
    // }, [])
    
    return (
        <div className="App">
          <header className="App-header">
           <h1 style={{backgroundColor: color}}>Welcome to Reducer
           <span> {numb} </span>
           </h1>
           <h2>{h2}</h2>
            <div className="kvc">
            <button onClick={goPink}>Go pink</button>
            <button onClick={goYellow}>Go yellow</button>
            <button onClick={goChange}>Go and Change</button>
            <button onClick={goChangeTo}>Go and Change to this</button>
            <input type="color" value={colorInput} onChange={e => setColorInput(e.target.value)}></input>
            </div>
            <div className="kvc">
            <button onClick={number1}>Go One</button>
            <button onClick={number2}>Go Two</button>
            </div>
            <input value={numb2}onChange={e => setNumb2(e.target.value)}></input>
            <button onClick={gotext}>go </button>
          </header>
        </div>
      );

}

export default App;