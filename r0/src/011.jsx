import './App.scss';
import { useEffect, useState } from 'react';
import Books from './Components/011/Books';
import axios from 'axios';


  

function App() {

    const [count, setCount] = useState(1);
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('YES'); // REDY!
        axios.get('http://in3.dev/knygos/')
        .then(res => {
            console.log(res.data);
            setBooks(res.data);
        })
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data);
        })
    }, []);

    
    return (
        <div className="App">
          <header className="App-header">
           <h1>{count}</h1>
           <button onClick={() => setCount(c => c + 1)}>+1</button>
           {/* <Books books={books}></Books> */}

           {
               users.map(u => <div key={u.id}>{u.name}</div>)
           }
          </header>
        </div>
      );

}

export default App;