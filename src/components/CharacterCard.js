import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {
  console.log(props);

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 10px;
margin-top: 10px;
background-color: #f5f4f2;
`;

  return (
    <StyledDiv>
      <img src={props.char.image}></img>
      <p>{props.char.name}</p>
      <p>{props.char.species}</p>
      <p>{props.char.gender}</p>
    </StyledDiv>
  );
}
