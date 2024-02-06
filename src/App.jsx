import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";



function App() {
 
  const [isGameStart,setIsGameStart]=useState(false)

  const toggleGamePlay=()=>{
      setIsGameStart((prev) => !prev);
  }

return (
    <>
      {isGameStart ? (<GamePlay></GamePlay>) : (<StartGame toggle={toggleGamePlay} ></StartGame>)}
    </>
  )
}

export default App; 
