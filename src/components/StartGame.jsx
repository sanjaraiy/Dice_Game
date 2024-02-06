import styled from "styled-components";
import { Button } from "./styled/Button";

function StartGame({ toggle }) {
  return (
    <Container>
      <div>
        <img src="/Image/dices 1.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;

  .content {
    h1 {
      font-size: 80px;
      white-space: nowrap;
    }
  }
`;
