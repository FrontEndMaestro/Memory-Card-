import "../styles/header.css";
export default function Header({ score, bestScore }) {
  return (
    <header className="header-container">
      <div className="about-game">
        <h1>Pokimon Memory Game</h1>
        <h2>
          Get points by clicking on an image but don't click on any more than
          once
        </h2>
      </div>
      <div className="scoreboard">
        <h2 className="current-score">Score:{score}</h2>
        <h2 className="best-score">Best Score:{bestScore}</h2>
      </div>
    </header>
  );
}
