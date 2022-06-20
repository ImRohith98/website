import React from "react";
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink
} from './nav.element';
import {FaBars, FaTimes} from "react-icons/all";
import {Button} from "../../services/globalstyles";
import LOGO from "./../../images/logo.png"

const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const [button, setButton] = React.useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    React.useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return(
      <>
              <Nav>
                  <NavbarContainer>
                      <NavLogo to='/' onClick={closeMobileMenu}>
                          <img src={ require("./../../images/logo.png")} alt={"ICON"}/>
                      </NavLogo>
                      <MobileIcon onClick={handleClick}>
                          {click ? <FaTimes /> : <FaBars />}
                      </MobileIcon>
                      <NavMenu onClick={handleClick} click={click}>
                          <NavItem>
                              <NavLinks to='/' onClick={closeMobileMenu}>
                                  Home
                              </NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks to='/services' onClick={closeMobileMenu}>
                                  Services
                              </NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks to='/products' onClick={closeMobileMenu}>
                                  Products
                              </NavLinks>
                          </NavItem>
                          <NavItemBtn>
                              {button ? (
                                  <NavBtnLink to='/sign-up'>
                                      <Button primary>SIGN UP</Button>
                                  </NavBtnLink>
                              ) : (
                                  <NavBtnLink to='/sign-up'>
                                      <Button onClick={closeMobileMenu} fontBig primary>
                                          SIGN UP
                                      </Button>
                                  </NavBtnLink>
                              )}
                          </NavItemBtn>
                      </NavMenu>
                  </NavbarContainer>
              </Nav>
      </>
    );
};

export default Navbar