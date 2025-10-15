import { useState } from "react";
import "./App.css";
// import images from src/assets so the bundler (Vite) can process them
import topImg from "./assets/top.jpg";
import hollokoImg from "./assets/holloko_masolata.jpg";
import Szobak from "./components/szobak.jsx";
import Hely from "./components/Hely.jsx";

function App() {
  const [selectedRoom, setSelectedRoom] = useState("");

  return (
    <div>
      <Szobak />
      <Hely />
      {/* Use imported images as module values */}
      <div className="topDiv">
        <img className="top" src={topImg} alt="top" />
      </div>

      

       

        
      </div>
    
  );
}

export default App;