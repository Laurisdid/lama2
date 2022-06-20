import { useState } from "react";
import "./App.scss";
import Pokemon from "./Components/pokemons challange/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  };
  
  getData();
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:'70%'}}>
          <>
            {pokemon.map((pokemon) => (
              <Pokemon
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </>
          ;
        </div>
      </header>
    </div>
  );
}

export default App;
