import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components"
function GamePlay() {
  return (
    <MainContainer>
       <div className='top_section'>
          <TotalScore></TotalScore>
          <NumberSelector></NumberSelector>
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
`