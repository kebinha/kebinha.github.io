import React from "react";
import styled from "styled-components";
import Arrow from "../assets/arrow.png";

interface FeatureProps {
  title: string;
  subTitle?: string;
  // description?: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
  onClick?: React.MouseEventHandler;
}

interface FeatureStyles {
  dark?: boolean;
  clickAvailable?: boolean;
  arrowAfter?: boolean;
  scheduleTheme?: boolean;
}

const FeatureWrapper = styled.div`
  display: flex;
  position: relative;
`;

const StyledDiv = styled.div<FeatureStyles>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 35px 40px;
  background-color: ${(props) => (props.dark ? "#202c3c" : "#ffffff")};
  @media (max-width: 420px) {
    padding: 20px 30px;
  }
  cursor: ${(props) => props.clickAvailable && "pointer"};
  &:after {
    display: ${(props) => (props.arrowAfter ? "block" : "none")};
    content: "";
    position: absolute;
    top: 50%;
    right: -1.25rem;
    width: 1.25rem;
    height: 1.25rem;
    background: url(${Arrow}) 50%/0.6rem no-repeat;
  }
`;

const StyledH2 = styled.h2<FeatureStyles>`
  position: relative;
  width: 100%;
  font-size: ${(props) => (props.scheduleTheme ? "18px" : "24px")};
  text-align: center;
  color: ${(props) => (props.dark ? "#ffffff" : "#000000")};
`;

const StyledSpan = styled.span<FeatureStyles>`
  font-size: 12px;
  color: ${(props) => (props.dark ? "#C2C2C2" : "#646464")};
`;

const StyledP = styled.p<FeatureStyles>`
  font-size: 12px;
  color: ${(props) => (props.dark ? "#ffffff" : "#646464")};
  white-space: pre-line;
`;

const ContentWrapper = styled.div<FeatureStyles>`
  font-size: 12px;
  color: ${(props) => (props.dark ? "#ffffff" : "#646464")};
`;

const IconWrapper = styled.div`
  @media (min-width: 400px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Feature = (props: FeatureProps & FeatureStyles) => {
  console.log(props.children);
  return (
    <FeatureWrapper>
      <StyledDiv dark={props.dark} onClick={props.onClick} clickAvailable={props.onClick !== undefined} arrowAfter={props.arrowAfter}>
        {props.scheduleTheme ? (
          <>
            <StyledSpan dark={props.dark} scheduleTheme>
              {props.subTitle}
            </StyledSpan>
            <StyledH2 dark={props.dark} scheduleTheme>
              <IconWrapper>{props.icon}</IconWrapper>
              {props.title}
            </StyledH2>
            {/* <StyledP dark={props.dark} scheduleTheme>
              {props.description}
            </StyledP> */}
            <ContentWrapper dark={props.dark}>{props.children}</ContentWrapper>
          </>
        ) : (
          <>
            <StyledH2 dark={props.dark}>
              <IconWrapper>{props.icon}</IconWrapper>
              {props.title}
            </StyledH2>
            <StyledSpan dark={props.dark}>{props.subTitle}</StyledSpan>
            {/* <StyledP dark={props.dark}>{props.description}</StyledP> */}
            <ContentWrapper dark={props.dark}>{props.children}</ContentWrapper>
          </>
        )}
      </StyledDiv>
    </FeatureWrapper>
  );
};

export default Feature;
