import './App.scss';
import Animals from './Animals'
import randColor from '../../Functions/randColor'

function App() {

    
    return (
        <div className="App">
          <header className="App-header">
           <h1 style={{backgroundColor: randColor()}}>Welcome to Class</h1>
           <div >
               <Animals></Animals>
                    </div>
          </header>
        </div>
      );

}

export default App;