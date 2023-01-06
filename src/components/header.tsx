import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

interface MenuProps {
  highlight?: boolean;
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: #ffffff;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1100px;
  padding: 0 30px;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 18px;
  color: #000000;
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 610px) {
    display: none;
  }
`;

const SideBarButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 611px) {
    display: none;
  }
`;

const Menu = styled.span<MenuProps>`
  display: block;
  font-size: 14px;
  color: ${(prop) => (prop.highlight ? "#ffffff" : "#000000")};
  font-weight: bold;
  background-color: ${(prop) => prop.highlight && "#202c3c"};
  border-radius: 12px;
  padding: 6px 28px;
`;

const SideBarWrapper = styled.div`
  @media (min-width: 611px) {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000088;
  z-index: 999;
`;

const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 1000;
  padding: 60px 50px;
`;

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggle = () => setSidebar((prev) => !prev);

  return (
    <>
      <StyledHeader>
        <InnerWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>K-Software Empowerment BootCamp</Logo>
          </Link>
          <MenuGroup>
            <Link to="/curriculum" style={{ textDecoration: "none" }}>
              <Menu>교육과정</Menu>
            </Link>
            <a href="https://forms.gle/qvwVGqCjwHGWdsrs7" target="_blank" style={{ textDecoration: "none", marginLeft: "10px" }}>
              <Menu highlight>신청하기</Menu>
            </a>
          </MenuGroup>
          <SideBarButton>
            <Menu highlight>
              <MdMenu style={{ fontSize: "20px" }} onClick={toggle} />
            </Menu>
          </SideBarButton>
        </InnerWrapper>
      </StyledHeader>
      {sidebar && (
        <SideBarWrapper>
          <SideBar>
            <MdClose style={{ fontSize: "20px", padding: "28px" }} onClick={toggle} />
            <Link to="/curriculum" style={{ textDecoration: "none" }}>
              <Menu>교육과정</Menu>
            </Link>
            <a href="https://forms.gle/qvwVGqCjwHGWdsrs7" target="_blank" style={{ textDecoration: "none" }}>
              <Menu>신청하기</Menu>
            </a>
          </SideBar>
        </SideBarWrapper>
      )}
    </>
  );
};
export default Header;
