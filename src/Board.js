import { Dice } from "./Dice.js";

export const Board = ({color, num = 1, gameHistory}) => {

  return (
    <div style={{ backgroundColor: '#e9e9e9'}}>
      <Dice color = {color} num = {num} />  
      <div>
        {gameHistory.join(',')}
      </div>
    </div>
  );
}
 