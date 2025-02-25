import { useState} from "react";
import { Board } from "./Board";
import { Button } from "./Button";

const random = n => Math.ceil(Math.random() * n)

function App() {

    const [blueGameHistory, setBlueGameHistory] = useState([])
    const [redGameHistory, setRedGameHistory] = useState([])
  
    const handleClick = () => {
      const nextBlueNum = random(6)
      const nextRedNum = random(6)
      
      setBlueGameHistory([...blueGameHistory, nextBlueNum])
      setRedGameHistory([...redGameHistory, nextRedNum])
    }
  
    const handleReset = () => {

      setBlueGameHistory([])
      setRedGameHistory([])
    }

    return (
      <div>
        <Board
         color = "blue"
         num={blueGameHistory.at(-1)}
         gameHistory={blueGameHistory}
         />
        <Board 
         color = "red"
         num={redGameHistory.at(-1)}
         gameHistory={redGameHistory}
         />
       <Button onClick = {handleClick}>던지기</Button>
        <Button onClick = {handleReset}>처음부터</Button>
      </div>
     )
}
 
export default App;
