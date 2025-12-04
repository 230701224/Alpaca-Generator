import React, { useState } from "react";
import Preview from "./components/Preview";
import Customizer from "./components/Customizer";
import "./style.css";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { ASSETS } from "./data/extraAssets";

const defaultAlpaca = {
  background: "blue50",
  ears: "default",
  hair: "default",
  neck: "default",
  eyes: "default",
  mouth: "default",
  leg: "default",
  accessories: "none",
};

export default function App() {
  const [alpaca, setAlpaca] = useState(defaultAlpaca);

  const randomize = () => {
    const newAlpaca = {};

    for (const key in ASSETS) {
      const values = ASSETS[key];
      newAlpaca[key] = values[Math.floor(Math.random() * values.length)];
    }

    setAlpaca(newAlpaca);
  };

  const downloadImage = async () => {
    const element = document.getElementById("preview");

    const canvas = await html2canvas(element, { backgroundColor: null });
    canvas.toBlob((blob) => saveAs(blob, "alpaca.png"));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="brand">
          <div className="logo">A</div>
          <div>
            <div className="title">🐾 Alpaca Generator</div>
            <div className="subtitle">Create cute alpacas and export PNGs — fun, fast, and friendly.</div>
          </div>
        </div>

        <div className="controls">
          <button className="btn ghost" onClick={randomize}>🎲 Random</button>
          <button className="btn primary" onClick={downloadImage}>⬇️ Download</button>
        </div>
      </div>

      <div className="generator">
        <div className="left-column">
          <div className="preview-wrap">
            <Preview alpaca={alpaca} />
            <div className="controls">
              <button className="btn" onClick={randomize}>🎲 Randomize</button>
              <button className="btn primary" onClick={downloadImage}>⬇️ Download</button>
            </div>
          </div>
        </div>

        <div className="right-column">
          <Customizer alpaca={alpaca} setAlpaca={setAlpaca} />
        </div>
      </div>
    </div>
  );
}
