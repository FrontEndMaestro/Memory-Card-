import Card from "./Card.jsx";
import "../styles/cardSection.css";
export default function CardsSection({ pokemonDataArray, cardClick }) {
  return (
    <section className="card-container">
      {pokemonDataArray.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imgsrc={pokemon.image}
          clicked={pokemon.clicked}
          cardClick={cardClick}
        ></Card>
      ))}
    </section>
  );
}
