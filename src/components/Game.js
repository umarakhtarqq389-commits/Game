import React from "react";
import Game11 from "../assets/11.png";
import Game12 from "../assets/12.png";
import Game13 from "../assets/13.png";
import Game14 from "../assets/14.png";
import Game15 from "../assets/15.png";

import Game1 from "../assets/1.png";
import Game2 from "../assets/2.png";
import Game3 from "../assets/3.png";
import Game4 from "../assets/4.png";
import Game5 from "../assets/5.png";
import Game6 from "../assets/6.png";
import Game7 from "../assets/7.png";
import Game8 from "../assets/10.png";
import "./Games.scss";

// All categories with 8 games each
const categoriesData = {
  Hot: [Game11, Game12, Game13 , Game14 ,Game15, Game1, Game2, Game3, Game4, Game5, Game6, Game7, Game8],
  Blockchain: [Game2, Game3, Game4, Game5, Game6, Game7, Game8, Game1, Game11, Game12, Game13 , Game14 ,Game15,],
  Slot: [Game11, Game12, Game13 , Game14 ,Game15, Game1, Game2, Game3, Game4, Game5, Game6, Game7, Game8],
  Card: [Game2, Game3, Game4, Game5, Game6, Game7, Game8, Game1, Game11, Game12, Game13 , Game14 ,Game15,],
  Fishing: [Game5, Game6, Game7, Game8, Game1, Game2, Game3, Game4],
  Live: [Game6, Game7, Game8, Game1, Game2, Game3, Game4, Game5],
  Sports: [Game7, Game8, Game1, Game2, Game3, Game4, Game5, Game6],
  Recent: [Game8, Game1, Game2, Game3, Game4, Game5, Game6, Game7],
  Favourite: [Game1, Game3, Game5, Game7, Game2, Game4, Game6, Game8],
};

export default function GamesSection({ selectedCategory }) {
  return (
    <div className="all-categories p-2">
      {Object.entries(categoriesData).map(([category, images], idx) => (
        <div
          key={idx}
          className="category-section mb-4"
          id={category} // assign id for scrolling
        >
          <h2 className="category-title">{category} Games</h2>
          <div className="games-grid">
            {images.map((img, i) => (
              <div key={i} className="game-card">
                <img src={img} alt={`${category}-${i}`} />
                <div className="game-info">
                  <h3>Game {i + 1}</h3>
                  <button>Play</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
