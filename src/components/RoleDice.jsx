import styled from "styled-components"
import { useState } from "react";

function RoleDice({currentDice,roleDice}) {
  
    
     
   

  return (
    <DiceContainer>
        <div onClick={roleDice} className="dice">
            <img src={`/Image/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`

    display:flex;
   flex-direction:column;
    align-items:center;
   
     
    .dice{
      cursor:pointer;  
    }

    p{
       font-size:24px;
    }

`