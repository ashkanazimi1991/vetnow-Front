import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';


export const SidebarContainer = styled.aside`
    position: fixed;
    font-family: ' fonts/iransans.ttf';
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #232f3e;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%' )}; 
    
`;

export const CloseIcon = styled(FaTimes)`   
    background: transparent;
    
    
`;

export const Icon = styled.div`
    position: absolute;
     top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #e47911;
`;

export const SidebarMenu = styled.ul`
    font-size: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    font-family: iransans;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }

`;

export const SidebarLink = styled(LinkS)`
    font-family: iransans;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    transition: 0s.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;


    &:hover {
        color: #f3ba2f;
        transition: 0.2s ease-in-out;
    }

`;

export const SideBtnWrap = styled.div`
    display: flex;
    font-family: iransans;
    justify-content: center;
`;

export const SidebarRoute = styled.div`
    border-radius: 50px;
    background: #e47911;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition:  all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000;
    }

`;