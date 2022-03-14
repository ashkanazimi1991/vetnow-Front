import {  ServicesContainer,  ServicesWrapper,  ServicesH1,  ServicesCard,  ServicesIcon,  ServicesH2,  ServicesP,} from "./Services2Elements";
import Link from "next/link";
import useInView from "react-cool-inview";
const Services2 = () => {
  const services = [
    {
      link: "/DBProducts/جوجه-گوشتی",
      image: "images/chick103.jpg",
      title: "جوجه های گوشتی",
      descreption:
        "   فروش جوجه های گوشتی با آنالیز ",
    },
    {
      link: "/DBProducts/پرندگان-زینتی",
      image: "images/Parrot.jpg",
      title: "پرندگان زینتی",
      descreption:
        " رفع تمام نیازهای پرندگان زینتی",
    },
    {
      link: "/DBProducts/کنسانتره",
      image: "images/35day.jpg",
      title: "کنسانتره و مکمل",
      descreption:
        "  افزودن های پرورشی و تقویتی",
    },
    {
      link: "/DBProducts/تجهیزات-پرورشی",
      image: "images/poultry010.jpg",
      title: "تجهیزات پرورشی",
      descreption:
        " با تضیمین قیمت و کیفیت    ",
    },
    {
      link: "/DBProducts/دآن-آماده",
      image: "images/pelet95.jpg",
      title: "پلت و دان آماده",
      descreption:
        "انواع دان آماده مستقیم از کارخانه",
    },
    {
      link: "/DBProducts/automation",
      image: "images/iot091.jpg",
      title: " مدیریت تحت وب",
      descreption:
        " مدیریت آنلاین مزارع پرورشی ",
    },
  ];
  const { observe, inView } = useInView({
    threshold: 0.1,
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <ServicesContainer ref={observe} id="Services">
      <ServicesH1>مجموعه خدمات وتنا </ServicesH1>
      {inView && (
        <ServicesWrapper>
          {services.map((item, index) => (
            <ServicesCard key={index}>
              <Link href={`${item.link}`} passHref>
                <ServicesH2>{item.title}</ServicesH2>
              </Link>
              <Link href={`${item.link}`} passHref>
                <ServicesIcon src={item.image} />
              </Link>
              <Link href={`${item.link}`} passHref>
                <ServicesP>{item.descreption}</ServicesP>
              </Link>
            </ServicesCard>
          ))}
        </ServicesWrapper>
      )}
    </ServicesContainer>
  );
};

export default Services2;
