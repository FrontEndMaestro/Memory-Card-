import "../styles/card.css";

export default function Card({ id, name, imgsrc, clicked, cardClick }) {
    
  return (
    <div className="card" onClick={() => cardClick(id, clicked)}>
      <img src={imgsrc} alt="pokemon" id="pokemon-image" />
      <label htmlFor="pokemon-image">{name.toUpperCase()}</label>
    </div>
  );
}
