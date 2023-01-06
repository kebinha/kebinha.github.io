import React from "react";
import styled from "styled-components";

interface VisualBoxProps {
  title: string;
  subTitle?: string;
}

interface VisualBoxStyle {
  img: string;
}

const VisualBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 300px;
`;

const StyledDiv = styled.div<VisualBoxStyle>`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 300px;
  background-image: url(${(props) => props.img});
  filter: brightness(0.4);
`;

const TitleWrapper = styled.div`
  position: relative;
  z-index: 99;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledSpan = styled.span`
  text-align: center;
`;

const VisualBox = (props: VisualBoxProps & VisualBoxStyle) => {
  return (
    <VisualBoxWrapper>
      <TitleWrapper>
        <StyledH1>{props.title}</StyledH1>
        <StyledSpan>{props.subTitle}</StyledSpan>
      </TitleWrapper>
      <StyledDiv img={props.img} />
    </VisualBoxWrapper>
  );
};

export default VisualBox;
