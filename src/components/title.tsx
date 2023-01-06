import React from "react";
import styled from "styled-components";

interface TitleProps {
  children: string;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  margin-bottom: 25px;
`;

const StyledBox = styled.div`
  height: 100%;
  width: 8px;
  background-color: #202c3c;
  margin-right: 10px;
`;

const Title = (props: TitleProps) => {
  return (
    <StyledDiv>
      <StyledBox />
      <h1>{props.children}</h1>
    </StyledDiv>
  );
};

export default Title;
