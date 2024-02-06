import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components"
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from './styled/Button';


function GamePlay() {
  const [selectedNumber, setSelectedNumber]=useState();  
  const [currentDice,setCurrentDice]=useState(1);
  const [score,setScore]=useState(0);
  const [error,setError]=useState("")


   const generatorRandomNum=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    
   const roleDice=()=>{
     
        if(!selectedNumber){
          setError("You have not selected any number")
          return;
        }
       
      

     const randomNum = generatorRandomNum(1,7);

     setCurrentDice((prev) => randomNum);

     if(selectedNumber == randomNum){
         setScore((prev)=>prev+randomNum);
     }else {
        if(score>=2){
          setScore((prev)=>prev-2);
        }
     }

     setSelectedNumber(undefined)
   }  


   const resetScore=()=>{
        setScore(0);
   }

  return (
    <MainContainer>
        <div className='top_section'>
          <TotalScore score={score}></TotalScore>
          <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}></NumberSelector>
       </div>
       <RoleDice currentDice={currentDice} roleDice={roleDice}></RoleDice>
       <div className='btns'>
         <OutlineButton onClick={resetScore}>Reset</OutlineButton>
         <Button>Show Rules</Button>
       </div>
     </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
  padding-top:50px;
   margin:0 20px;
  .top_section {
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:220px;
    gap:10px;
    margin:0 auto;
    
  }
`