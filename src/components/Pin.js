import React from "react";
import styled from "styled-components";

function Pin({ urls }) {
  return (
    <Wrapper>
      <Container>
        <img src={urls} alt="" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  padding: 4px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    width: 190px;
    img {
      width: 80%;
    }
  }
`;

export default Pin;
