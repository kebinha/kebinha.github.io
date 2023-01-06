import React from "react";
import styled from "styled-components";

interface FeatureProps {
  title: string;
  subTitle?: string;
  description?: string;
  icon?: React.ReactElement;
}

interface FeatureStyles {
  theme?: string;
}

const StyledDiv = styled.div<FeatureStyles>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 40px 50px;
  background-color: ${(props) => (props.theme === "dark" ? "#202c3c" : "#ffffff")};
  @media (max-width: 420px) {
    padding: 20px 30px;
  }
`;

const StyledH2 = styled.h2<FeatureStyles>`
  position: relative;
  width: 100%;
  font-size: 24px;
  text-align: center;
  color: ${(props) => (props.theme === "dark" ? "#ffffff" : "#000000")};
`;

const StyledSpan = styled.span<FeatureStyles>`
  font-size: 12px;
  color: ${(props) => (props.theme === "dark" ? "#C2C2C2" : "#646464")};
`;

const StyledP = styled.p<FeatureStyles>`
  font-size: 12px;
  color: ${(props) => (props.theme === "dark" ? "#ffffff" : "#646464")};
`;

const IconWrapper = styled.div`
  @media (min-width: 400px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Feature = (props: FeatureProps & FeatureStyles) => {
  return (
    <StyledDiv theme={props.theme}>
      <StyledH2 theme={props.theme}>
        <IconWrapper>{props.icon}</IconWrapper>
        {props.title}
      </StyledH2>
      <StyledSpan theme={props.theme}>{props.subTitle}</StyledSpan>
      <StyledP theme={props.theme}>{props.description}</StyledP>
    </StyledDiv>
  );
};

export default Feature;
