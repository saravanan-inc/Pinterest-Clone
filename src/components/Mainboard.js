import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import "./Mainboard.css";

function Mainboard({ pins }) {
  return (
    <Wrapper>
      <Container className="mainBoard__container">
        {pins.map((pin, index) => (
          //let {urls} = pin destructure
          <Pin key={index} urls={pin.urls?.regular} />
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;
const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: white;
`;

export default Mainboard;
