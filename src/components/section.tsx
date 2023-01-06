import React from "react";
import styled from "styled-components";

interface SectionProps {
  children: React.ReactElement;
}

interface SectionStyle {
  grayish?: boolean;
}

const StyledSection = styled.section<SectionStyle>`
  padding: 50px 30px;
  background-color: ${(props) => (props.grayish ? "#f4f4f4" : "#ffffff")};
`;

const InnerWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

const Section = (props: SectionProps & SectionStyle) => {
  return (
    <StyledSection grayish={props.grayish}>
      <InnerWrapper>{props.children}</InnerWrapper>
    </StyledSection>
  );
};

export default Section;
