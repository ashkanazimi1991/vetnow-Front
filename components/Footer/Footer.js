import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkItems, FooterLinkTitle,
     FooterLink, FooterLinkWrapper, SocialMedia,SocialMediaWrap, SocialLogo,SocialIcons,
     SocialIconLink, WebsiteRights} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>درباره ما</FooterLinkTitle>
                            <Link href= '/login'>{<FooterLink >کواهی و افتخارات</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >مجوز ها </FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >ارتباط با ما </FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >گالری تصاویر </FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >حریم خصوصی</FooterLink>}</Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>محصولات</FooterLinkTitle>
                            <Link href= '/login'>{<FooterLink >محصولات دارویی</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >جوجه گوشتی </FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >کنسانتره و مکمل</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >دان آماده و پلت</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >تجهیزات پرورشی</FooterLink>}</Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>خدمات</FooterLinkTitle>
                            <Link href= '/login'>{<FooterLink >دامپزشک آنلاین</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >مشاوره پرورشی</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >منابع آموزشی</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >اخبار صنعت طیور</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink > تکنولوژی های جدید</FooterLink>}</Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>پشتیبانی</FooterLinkTitle>
                            <Link href= '/login'>{<FooterLink >تماس با اپراتوری</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >پشتیبانی محصولات</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >پشتیبانی خدمات</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >انتقاد و پیشنهاد</FooterLink>}</Link>
                            <Link href= '/login'>{<FooterLink >همکاری با ما</FooterLink>}</Link>
                        </FooterLinkItems>

                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <div style={{fontSize:'12px', textAlign:"center",lineHeight:"30px",color:"#fff", padding:"20px"}}>
                            <p>آدرس: ایران- آذربایجان غربی - ارومیه - خیابان ساحلی - نبش کوچه اول - مجموعه دانش بنیان وتنا</p>
                            <p>شماره تماس : 32382953 -- 044</p>
                            </div>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='https://instagram.com/idealmakoo_company?utm_medium=copy_link' target='_blank'  aria-label='Instagram'>
                            <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='https://wa.me/989025907170' target='_blank'        aria-label='Whattsapp'>
                                <FaWhatsapp />
                            </SocialIconLink>
                            {/* <SocialIconLink href='/' target='_blank'  aria-label='Facebook'>
                            <   FaFacebook />
                            </SocialIconLink> */}
                            {/* <SocialIconLink href='/' target='_blank'  aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink> */}
                            <SocialIconLink href='https://www.twitter.com' target='_blank'    aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>OnlinCEO Programing company  {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <Link href='/'>{<SocialLogo  onClick={toggleHome} >VetNow</SocialLogo>}</Link>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer;
