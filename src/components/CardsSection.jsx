import Card from "./Card.jsx";
import '../styles/cardSection.css'
export default function CardsSection({ pokemonDataArray }) {
  return (
    <section className="card-container">
      {pokemonDataArray.map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          imgsrc={pokemon.image}
          
        ></Card>
      ))}
    </section>
  );
}
