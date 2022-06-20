const getData = ()=>{
    let Pokemons =[];
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        Pokemons.push(data);
        console.log("pokemons", Pokemons)
        console.log("data here", data)
    })
   
}
export default getData()