    import { Link } from "gatsby"
import styled from 'styled-components'
import logo from '../images/logo.png'
// import posed from 'react-pose'
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import './layout.css';
const Menu = styled.nav`
    width:100%;
    background:rgb(41,41,41);
    display:flex;
    justify-content:space-between;
    padding:15px;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
`;

const Navigation = styled.ul`
    position:absolute;
    top:100%;
    left:0;
    margin:0;
    list-style:none;
    text-align:center;
    width:100%;
    background:black;
`;

const NavigationLink = styled.li`
    padding:20px 0;

`;

const StyledLink =styled(Link)`
    color:#fff;
    text-decoration:none;
`;

const ToggleBurger = styled.button`
    display:none;
    @media(max-width:800px) {
        display:inline-block;
        background:transparent;
        border:0px;
        font-size:30px;
    }
`;


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <Menu >
      <img width="50px" src={logo}  alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <Navigation className="Nav">
            <NavigationLink>
                <StyledLink href="/">Strona główna</StyledLink>
            </NavigationLink>
            <NavigationLink>
                <StyledLink href="/">O nas</StyledLink>
            </NavigationLink>       
            <NavigationLink>
                <StyledLink href="/">Współpraca</StyledLink>
            </NavigationLink>     
            <NavigationLink>
                <StyledLink href="/">Kontakt</StyledLink>
            </NavigationLink>
        </Navigation>
      </CSSTransition>
      <ToggleBurger onClick={toggleNav}>
        🍔
      </ToggleBurger>
    </Menu>
  );
}

    