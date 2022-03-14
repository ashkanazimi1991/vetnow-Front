import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled.div`
    border-radius: 50px;
    background: #09d3d5;
    width: 70%;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color:#fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #f3ba2f;
        color: #fff;
    }
`;