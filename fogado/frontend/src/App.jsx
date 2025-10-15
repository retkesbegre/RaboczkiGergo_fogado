import { useState } from "react";
import "./App.css";
// import images from src/assets so the bundler (Vite) can process them
import topImg from "./assets/top.jpg";
import hollokoImg from "./assets/holloko_masolata.jpg";

function App() {
  const [selectedRoom, setSelectedRoom] = useState("");

  return (
    <div>
      {/* Use imported images as module values */}
      <div className="topDiv">
        <img className="top" src={topImg} alt="top" />
      </div>

      <div className="elhelyezes">
        <div className="bal">
          <h2>Napraforgós Nemzeti Tanusító Védjegy célja</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iure minus corrupti sapiente nemo, mollitia odit optio, magni rem
            quasi qui. Mollitia pariatur perferendis nulla facilis alias libero
            ipsum hic?
          </p>
          <img className="balImg" src={hollokoImg} alt="Hollókő" />
        </div>

        <div className="kozep">
          <h2>Falusi szálláshely fajtái</h2>
          <ul>
            <li>Falusi vendégház</li>
            <li>Falusi szálláshely</li>
            <li>Falusi panzió</li>
            <li>Falusi fogadó</li>
            <li>Falusi szálloda</li>
          </ul>
        </div>

        <div className="jobb">
          <h2>hét törpe fogadó</h2>
        </div>
      </div>
    </div>
  );
}

export default App;