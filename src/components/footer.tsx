import React from "react";
import styled from "styled-components";
import FooterLogoImage from "../assets/footer_logo.png";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding: 30px 0;
  background-color: #202c3c;
  color: #ffffff;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 580px) {
    align-items: center;
    margin-top: 20px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <InnerWrapper>
        <a href="https://www.inha.ac.kr">
          <img src={FooterLogoImage} />
        </a>
        <StyledDiv>
          <span>인천광역시 미추홀구 인하로 100, 인하대학교</span>
          <span>keb@inha.ac.kr / 032-860-9204</span>
        </StyledDiv>
      </InnerWrapper>
    </StyledFooter>
  );
};

export default Footer;
