import React, { Component } from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import logo from '../images/logo.png'
const Nav = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding: 10px;
    background: rgb(41,41,41);
    color:#fff;
    position:relative;
    @media(max-width:800px) {
        justify-content:space-between;
    }
`;

const ListMenu = styled.ul`
    list-style:none;
    display:flex;
    @media(max-width:800px) {
        position:absolute;
        top:100%;
        left:50%;
        flex-direction:column;
        background:#171717;
        transform:translateX(-50%);
        width:100%;
        text-align:center;
        overflow:hidden;
        max-height:0px;
    }
`;
const MenuItem = styled.li`
    margin-left:10px;
    @media(max-width:800px) {
        margin:0px;
        padding:15px 0px;
    }
`;


const Linkstyled = styled(Link)`
    color:#fff;
    text-decoration:none;
    transition:opacity .3s ease-in-out;
    &:hover {
        opacity:.6;
    }
`;

const Hamburger = styled.button`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  @media(min-width:800px) {
      display:none;
  }
`;

const Hamburgerbox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;
const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color .1s .2s ease-in-out;
  &::before,
  &::after {

  width: 100%;
  height: 3px;
  background-color: #fff;
  position: absolute; 
  content: '';
  left: 0;
  transition: transform .2s .2s ease-in-out;
  }
  &::before {
      top:-10px;
  }
  &::after {
      top:10px;
  }
`;
const navActive = styled.ul`
    max-height:300px;

`;


const handleClick = () => {
    // const bar = document.querySelector('#hamburger');
    const nav = document.querySelector('#nav');
        nav.classList.toggle('navActive')
// console.log(123)
}

// bar.addEventListener('click', handleClick)


export default class navigation extends Component {

    render() {

        return (
            <>
                
        <Nav id="nav">
                <img src={logo} height="70px"></img>
            <Hamburger id="hamburger" >
                <Hamburgerbox>
                    <HamburgerInner>
                    </HamburgerInner>
                </Hamburgerbox>
            </Hamburger>
            <ListMenu >
                    <MenuItem>
                        <Linkstyled to="/">Strona główna </Linkstyled>
                    </MenuItem>
                    <MenuItem>
                        <Linkstyled to="/o-nas">O nas </Linkstyled>
                    </MenuItem>

                    <MenuItem>
                        <Linkstyled to="/wspolpraca">Współpraca </Linkstyled>
                    </MenuItem>

                    <MenuItem>
                        <Linkstyled to="/kontakt">Kontakt </Linkstyled>
                    </MenuItem>

            </ListMenu>
        </Nav>
            </>
        )
    }
}

