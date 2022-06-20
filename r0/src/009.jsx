import logo from './logo.svg';
import './App.css';
import Hello from './Components/009/Hello';
import Kurmis from './Components/009/Kurmis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva="green" bg="yellow"/>
        <Hello spalva="black" bg="white"></Hello>
        <Hello spalva="gray" bg="pink"></Hello>
        <Kurmis skaicius={6}></Kurmis>
      </header>
    </div>
  );
}

export default App;
