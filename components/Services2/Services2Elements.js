import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: iransans;
  background: #232f3e;
  padding-bottom: 20px;
  // padding-top: 5px;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @media screen and (max-width: 1000px) {
    // height: 1600px;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 25px;
  padding: 0 10px;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    // padding: 0 60px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr ;
    // padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #f3ba2f;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: all 0.2s ease-in-out;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 468px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 30px;
  }
`;

export const ServicesIcon = styled.img`
  height: 100%;
  background: #fff;
  justify-content: center;
  width: 100%;
  padding:2px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
  rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  
  margin-bottom: 10px;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px #000;
  padding-top: 10px;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-shadow: 2px 2px 5px #000;
  text-align: right;
  padding-top: 15px;
  white-space: nowrap;
  color: #fff;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #000;
  text-align: center;
  line-height: 30px;
  padding-bottom:15px;
  // text-shadow: 2px 2px 1px #000;
  animation: anima 1s ease-in-out;
  @keyframes anima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
