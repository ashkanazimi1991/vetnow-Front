import styled from "styled-components";


export const FooterContainer = styled.footer`
    direction: rtl;
    font-family: iransans;
    background-color: #232f3e;
`;

export const FooterWrap = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
`;


export const FooterLinkContainer = styled.div`
    display: grid;
    justify-content: center;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;


export const FooterLinkWrapper = styled.div`
    display: flex;
    // max-width: 100%;

    @media screen and (max-width: 820px) {
        flex-direction: row-reverse;
    }
    @media screen and (max-width: 628px) {
        flex-direction:  column;
        
        

    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    box-sizing: border-box;
    
    
    

    @media screen and (max-width: 7680px) {
        margin: 0;
        // padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    white-space: nowrap;
    // align-items: center;
    font-weight: 500;
    margin-bottom: 16px;
    padding: 25px ;
    text-align: center;
    color: #febd69;
    
`;

export const FooterLink = styled.div`
    color: #fff;
    text-align: center;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 12px;
    line-height:25px;
    // padding-left:65px;
    opacity: .5;
    transition: all .3s ease-in-out;

    &:hover {
        transition: all 0.1s ease-in-out;
        opacity: 1;
    }

`;



export const SocialMedia = styled.section`
    max-width: 100%;
    width: 100%;
   
`;


export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto 0 auto;
    background-color: #131a22;
    padding: 20px;


    @media screen and (max-width: 820px) {
        flex-direction: column;
        padding: 10px;
    }
`;


export const SocialLogo = styled.div`
    color: #f3ba2f;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    cursor: pointer;

    &:hover {
        color: #f3ba2f;
    }
`;


export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    color: #febd69;
    

   
   
`;

export const SocialIconLink = styled.a`
   color : #fff;
   font-size: 24px;

   &:hover {
       color: #f3ba2f;
   }



`;
