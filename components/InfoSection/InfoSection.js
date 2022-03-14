import { Button } from "../Button/ButtonElemnts";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from "./InfoElements";
import useInView from "react-cool-inview";
import Link from "next/link";

const InfoSection = ({
  lightBg,
  
  id,
  topLine,
  headLine,
  description,
  img,
  buttonLable,
  buttonLink,
  buttonDisplay,
  imgStart,
  alt,
  lightText,
  darkText,
  dark,
  dark2,
  primary,
}) => {
  const { observe, inView } = useInView({
    threshold: 0.1,
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <>
      <InfoContainer ref={observe} lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            {inView && (
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headLine} </Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <Link href={buttonLink}>
                    <BtnWrap>
                      <Button
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        style={{display:buttonDisplay}}
                      >
                        {buttonLable}
                      </Button>
                    </BtnWrap>
                  </Link>
                  
                </TextWrapper>
              </Column1>
            )}
            {inView && (
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            )}
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
