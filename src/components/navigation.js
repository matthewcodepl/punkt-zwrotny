import React, { Component } from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import logo from '../images/logo.png'
import './layout.css';
import posed from 'react-pose'


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
        padding:5px;
    }
`;




const ListMenu = posed.ul({
    open: {x:'0%' },
    closed: {x:'-100%'}
});



const StyledListMenu = styled(ListMenu)`
   list-style:none;
    display:flex;
    transition:.4s ease-in-out;
    @media(max-width:800px) {
        position:absolute;
        top:100%;
        left:0%;
        flex-direction:column;
        background:#171717;
        width:100%;
        text-align:center;

    }
  ${({isDesktop}) => !isDesktop && `
        // justify-content: space-between;
  `}
`;

const MenuItem = styled.li`
    margin-left:25px;
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
  cursor:pointer;
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





export default class navigation extends Component {
    state = {
        isMenuOpen: false,
        isDesktop: false
    }
    componentDidMount() {
        this.updateWindowDimensions();
      }
    
    updateWindowDimensions = () => {
        if (window.innerWidth >=800) {
          this.setState({ isDesktop: true, isMenuOpen: true });
        } else {
          this.setState({ isDesktop: false, isMenuOpen: false });
        }
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        // window.removeEventListener('scroll', this.updateScrollPosition);
      }
    
    render() {
   
    
        const {isMenuOpen, isDesktop} = this.state 
        const handleClick = () => {
            this.setState({
                isMenuOpen: !this.state.isMenuOpen
            })
            // console.log(this.state.isMenuOpen)
    
        }
    

        return (
            <>
                
        <Nav id="nav">
                <img src={logo} height="70px" alt="Logo"></img>
            <Hamburger
            isOpen ={this.state.active}
            onClick={handleClick}
            >
                <Hamburgerbox>
                    <HamburgerInner>
                    </HamburgerInner>
                </Hamburgerbox>
            </Hamburger>
            <StyledListMenu 
            id="#nav"
            pose={isMenuOpen ? 'open' : 'closed'}
            isDesktop={isDesktop}
            >
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

            </StyledListMenu>
        </Nav>
            </>
        )
    }
}

    