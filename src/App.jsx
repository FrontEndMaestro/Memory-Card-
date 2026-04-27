import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/CardsSection";

//let dataArray = [];
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  function cardClicked(id, click) {
    let index = pokemonData.findIndex((element) => element.id == id);
    let array = [...pokemonData];
    if (click == true) {
      array.forEach((element) => {
        element.clicked = false;
      });
      setPokemonData(array);
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    }
    if (click == false) {
      array[index].clicked = true;
      setPokemonData(array);
      let newScore = score + 1;
      setScore(newScore);
    }
  }

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    let ignore = false;
    const promises = [];
    let dataArray = [];
    for (let i = 1; i < 16; i++) {
      promises.push(fetch(`${url}${i}`).then((r) => r.json()));
    }
    Promise.all(promises)
      .then((responses) => {
        if (ignore) {
          return;
        }
        responses.forEach((result) =>
          dataArray.push({
            id: crypto.randomUUID(),
            name: result.name,
            image: result.sprites.other.dream_world.front_default,
            clicked: false,
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
  return (
    <>
      <Header score={score} bestScore={bestScore}></Header>
      <Cards pokemonDataArray={pokemonData} cardClick={cardClicked}></Cards>
    </>
  );
}
export default App;
