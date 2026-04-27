import "../styles/card.css";

export default function Card({ name, imgsrc }) {
    
  return (
    <div className="card">
      <img src={imgsrc} alt="pokemon" id="pokemon-image" />
      <label htmlFor="pokemon-image">{name.toUpperCase()}</label>
    </div>
  );
}
