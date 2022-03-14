import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';




export const Nav = styled.nav`
    direction: rtl;
    height: 80px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    font-family: iransans;
    z-index: 100000;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    top: 0;
    background-color: #232f3e;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    background-color: #232f3e;
    width: 100%;
    padding: 0 24px;
    
    
`;

export const NavLogo = styled.div`
    color: #f3ba2f;
    white-space: nowrap;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding-top: 5px;
    margin-left: 24px;
    font-weight: bold;
    font-family: iransans;
    text-shadow: 2px 2px 5px #000;
    text-decoration: none;
    @media screen And (max-width: 768px) {
        margin-right: 80%;
    }
    @media screen and (max-width:480px) {
        margin-right: 70%;
        
    } 
`;

export const MobileIcon = styled.div`
    display: none;
    

    @media screen and (max-width: 768px) {
        display: block;
       
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        
                
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    margin: 20px;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;


    @media screen and (max-width: 830px) {
      display : none;
    }
`;  

export const NavItem = styled.li`
    height: 80px;
    padding: 15px;

`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2 1 rem;
    height: 100%;
    cursor: pointer;
    


    &.active {
        border-bottom: 3px solid #e77911;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Img=styled.img`
    height: 70px;
    width: 70px;
    align-items: center;
    padding: 5px;
    filter: drop-shadow(2px 2px 8px #000);

    @media screen and (max-width: 830px) {
        display : none;
      }
    
    // background-color: #f3ba2f;    
`;

export const NavBtnLink = styled.div`
    border-radius: 10px;
    background: #f3ba2f;
    white-space: nowrap;
    padding: 9px 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 16px;
    font-family: iransans;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000;
        font-weight: bolder;
    }

`;

