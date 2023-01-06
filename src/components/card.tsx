import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
}

interface CardStyle {
  grayish?: boolean;
  ma?: string;
}

const StyledDiv = styled.div<CardStyle>`
  border-radius: 10px;
  background-color: ${(props) => (props.grayish ? "#f4f4f4" : "#ffffff")};
  padding: 10px 50px;
  margin: ${(props) => props.ma};
`;

const Card = (props: CardProps & CardStyle) => {
  return (
    <StyledDiv grayish={props.grayish} ma={props.ma}>
      {props.children}
    </StyledDiv>
  );
};

export default Card;
