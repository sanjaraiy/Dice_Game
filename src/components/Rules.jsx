import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
      </div>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  background: #fbf1f1;
  margin: 10px auto;

  
  max-width: 700px;
  padding: 20px;

  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 5px;

  }
`;
