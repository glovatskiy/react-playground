import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => setPokemon(data))
    .catch((error) => console.log(error))
  };
  
  useEffect(()=>{getPokemon()},[])
console.log(pokemon)
  return (
    <>
      <h1>Pokémon Viewer</h1>
      {pokemon ? (
        <>
          <h2>Name: {pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
