import React, { useState, useEffect } from "react";
import { FaBars, FaWindows } from "react-icons/fa";
import {  Nav,  NavbarContainer,  NavLogo,  MobileIcon,  NavMenu,
  NavItem,  NavLinks,  NavBtnLink, NavBtn, Img} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import axios from "axios"

const Navbar = ({ toggle, user }) => {
  const [scrollNav, setScrolNav] = useState(false);
  const changeNav = () => {
    if (FaWindows.scrolly >= 80) {
      setScrolNav(true);
    } else {
      setScrolNav(false);
    }
};

const [userDetails , setUserDetails] = useState('')

  useEffect(async () => {
    window.addEventListener("scroll", changeNav);
    setUserDetails(document.cookie)

  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {!userDetails ? (
              <NavBtn>
                <Link href="/login">
                  {<NavBtnLink> ثبت نام / ورود </NavBtnLink>}
                </Link>
              </NavBtn>
            ) : (
              <>
                <NavBtn>
                  <Link href="Profile/profileDetails">
                    {
                      <NavBtnLink>
                        {userDetails.length > 0 ? 'داشبورد' : null}
                      </NavBtnLink>
                    }
                  </Link>
                </NavBtn>
              </>
            )}

            <MobileIcon onClick={toggle}>
              <FaBars style={{ color: `#f3ba2f` }} />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks  to="home"  smooth={true} duration={1000}  spy={true}  exact="true"  offset={-80}  activeClass="active" >
                 صفحه اصلی
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks  to="services"  smooth={true}  duration={1000}    spy={true} exact="true"     offset={-80}    activeClass="active"  >
                  خدمات
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="products" smooth={true}  duration={1000}  spy={true}   exact="true"  offset={-80}  activeClass="active"  >
                  محصولات
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="automation"  smooth={true}  duration={1000}  spy={true}  exact="true"  offset={-80}     activeClass="active"  >
                  {" "}
                  اتوماسیون
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={1000}   spy={true}    exact="true"   offset={-80}    activeClass="active"   >
                  {" "}
                  درباره ما
                </NavLinks>
              </NavItem>
            </NavMenu>
            
            <Link href="/" >{<NavLogo  onClick={toggleHome} >  VetNOW <Img src="./images/logo.png" alt="oficial"/> </NavLogo>}</Link>
            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
