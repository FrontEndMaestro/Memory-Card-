import { useState, useEffect } from "react";
import "./App.css";

//let dataArray = [];
function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    let ignore = false;
    const promises = [];
    let dataArray = [];
    for (let i = 1; i < 14; i++) {
      promises.push(fetch(`${url}${i}`).then((r) => r.json()));
    }
    Promise.all(promises)
      .then((responses) => {
        if (ignore) {
          return;
        }
        responses.forEach((result) =>
          dataArray.push({
            name: result.name,
            image: result.sprites.front_default,
          }),
        );
        setPokemonData(dataArray);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      ignore = true;
    };
  }, []);
  return <></>;
}
export default App;
