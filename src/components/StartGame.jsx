import styled from 'styled-components'

function StartGame({toggle}) {
  return (
    <Container>
      <div>
        <img src="/Image/dices 1.png" alt="" />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container =styled.div`
 max-width:1180px;
 display:flex;
 align-items:center;
 justify-content:center;
 margin:0 auto;
 margin-top:20px;

 .content {
  h1{
    font-size:80px;
    white-space:nowrap;
  }
 }
 
`
const Button=styled.button`
    padding:10px 18px;
    background:#000;
    border-radius:5px;
    color:#fff;
    font-size:15px;
    font-weight:400;
    cursor:pointer;
    width:220px;
    border:none;
    border:1px solid transparent;
    transition:0.4s background ease-in;

    &:hover{
       background-color:#fff;
       border:1px solid black;
       color:black;
       transition:0.3s background ease-in;

    }

`