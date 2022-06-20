import { useEffect, useReducer} from 'react';
import './App.scss';
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';

function App() {

    // const [books, setBooks] = useState([]);
    const [books, dispachBooks] = useReducer(booksReducer, []);

    useEffect(() => {
        axios.get('http://in3.dev/knygos/')
            .then(res => {
                const action = {
                    payload: res.data,
                    type: 'get_from_server'
                }
                console.log(res.data)
                dispachBooks(action);
            })
    }, []);

    const sortAZ = () => {
        const action = {
            type: 'sortAZ'
        }
        dispachBooks(action);
    }
    const sort17 = n => {
        const action = {
            type: 'sort17',
            payload:n
        }
        dispachBooks(action);
    }
    const sortDEF = () => {
        const action = {
            type: 'sortDEF'
        }
        dispachBooks(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>BOOKS REDUCER</h1>
                <div className="kvc">
                    <button onClick={sortAZ}>Sort AZ</button>
                    <button onClick={sort17}>Sort 17</button>
                    <button onClick={sortDEF}>Reset Sort</button>
                </div>
                <div>
                    {
                        books.length ? books.map(b => <div key={b.id}>{b.title} <i>{b.price} EUR</i></div>) : <h2>Loading...</h2>
                    }
                </div>
            </header>
        </div>
    );



}

export default App;