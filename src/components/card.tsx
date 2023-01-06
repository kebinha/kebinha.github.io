import React from "react";
import styled from "styled-components";

interface SectionProps {
  children: React.ReactElement;
}

const StyledDiv = styled.div`
  border-radius: 10px;
  background-color: #f4f4f4;
  padding: 10px 50px;
`;

const Card = (props: SectionProps) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Card;
