import "./App.css";
import React, { useState } from "react";
import stickers from "./data/stickers.json";
import Choice from "./components/Choice";
import StickerList from "./components/StickerList";

function App() {
  const [selected, setSelected] = useState("");

  const handleStickerClick = (label) => {
    setSelected(label);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Стікери</h1>
      <StickerList stickers={stickers} onStickerClick={handleStickerClick} />
      <Choice selected={selected} />
    </div>
  );
}

export default App;
