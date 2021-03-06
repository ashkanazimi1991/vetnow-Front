
import React,{useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, } from './HeroElements';
import {Button} from '../Button/ButtonElemnts'; 
import Link from "next/link";

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = ()=> {setHover(!hover)};
            return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={'./videos/wwwff.mp4'} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    مجموعه تخصصی پرندگان و طیور وتنا
                </HeroH1>
                <HeroP>
                    تامین , پشتیبانی , درمان
                </HeroP>
                <HeroBtnWrapper>
                    <Button>
                        <Link href="/login">
                         شروع از اینجا
                        </Link>
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
