import styled from "styled-components";

export const InfoContainer = styled.div`
  direction: rtl;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#232f3e ")};
  font-family: iransans;
  max-width: 100%;
  height: 100vh;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 100%;
  justify-content: center;
  animation: anima 1s ease-in-out;

  @media screen and (max-width: 480px) {
    height: 500px;
  }
`;

export const InfoRow = styled.div`
  animation: anima 1s ease-in-out;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  padding: 4px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    margin-right: 15px;
  }
`;

export const Column1 = styled.div`
  animation: anima 1s ease-in-out;
  grid-area: col1;
  max-width: 100%;
  margin: auto;
  display: flex;
`;

export const Column2 = styled.div`
  animation: anima 1s ease-in-out;
  grid-area: col2;
  max-width: 100%;
  margin: auto;
  display: flex;
`;

export const TextWrapper = styled.div`
  // max-width: max-content;
  width: 100%;
  height: 100%;
  text-align: center;
  white-space: nowrap;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #09d3d5;
  animation: anima 1s ease-in-out;
  white-space: nowrap;
  text-align: center;
  font-size: 26px;
  line-height: 70px;
  // text-shadow: 1px 1px 8px #000;
  font-weight: 900;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Heading = styled.h1`
  animation: anima 1s ease-in-out;
  padding-top: 20px;
  white-space: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};
  // text-shadow: 1px 1px 8px #000;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Subtitle = styled.p`
  animation: anima 1s ease-in-out;
  max-width: 550px;
  text-align: justify;
  margin: 50px;
  margin-Left: 80px;
  white-space: normal;
  font-size: 15px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  padding-bottom: 20px;
  padding-top: 20px;
  // text-shadow: 2px 2px 5px #000;
  
  @media screen and (max-width: 480px) {
    margin: 0px;
    padding:30px; 
    font-size: 12px;
    max-width: 100%;
    white-space: normal;
  }
`;
export const BtnWrap = styled.div`
  animation: anima 1s ease-in-out;
  display: flex;
  justify-content: center;
`;

export const ImgWrap = styled.div`
  animation: anima 1s ease-in-out;
  // max-width: 100%;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 768px) {
    // margin-right: 50px;
  }
`;

export const Img = styled.img`
  animation: anima 1s ease-in-out;
  width: 90%;
  height: 100%;
  // padding: 10px;
  transition: all 0.6s ease-out;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
