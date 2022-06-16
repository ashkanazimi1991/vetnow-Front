import styled from 'styled-components';



export const HeroContainer = styled.div`
    /* opacity: .5; */
    display: flex;
    justify-content: center;
    font-family: iransans;
    /* color: #fff; */
    align-items: center;
    padding: 0 30px;
    height: 70vh;
    position: relative;
    @media screen and (max-width: 768px) {
        height: 650px;
    }
    @media screen and (max-width: 480px) {
        height: 650px;
    }
    
    `;

export const HeroBg =styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;
    margin: 0;

    
`;
export const HeroContent=styled.div`
    
    max-width:1200px;
    position: absolute;
    padding: 28px 24px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.534);
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`
export const HeroH1=styled.h1`
    color: #fff;
    font-size: 33px;
    text-align: center;
    text-shadow: 2px 2px 5px #000;
    text-decoration: none;
    @media screen and (max-width: 768px){
        font-size: 28px;}
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
export const HeroP=styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    text-shadow: 2px 2px 5px #000;
    text-decoration: none;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    

`;




