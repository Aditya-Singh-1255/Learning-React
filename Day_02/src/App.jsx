import "./App.css";
import Card from "./component/card";
import gameCards from "./assets/data";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [game, setGame] = useState(gameCards);
  const filterGameCards = () => {
    if (searchText.length === 0) {
      setGame(gameCards);
    } else {
      const filteredCards = gameCards.filter((card) =>
        card.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setGame(filteredCards);
    }
  };
  return (
    <>
      <div className="nav">
        <ul className="nav1">
          <li className="vs">Visual Game Studio</li>
          <li>Docs</li>
          <li>Blog</li>
          <li>Updates</li>
          <li>Api</li>
        </ul>
        <div className="nav2">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={filterGameCards}>Search Docs</button>
        </div>
      </div>
      <div className="card">
        {game.map((game, index) => (
          <Card
            key={index} // Always provide a unique key prop
            name={game.name}
            source={game.source}
            alt={game.alt}
            description={game.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
