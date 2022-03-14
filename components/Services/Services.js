import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Link from "next/link";
import useInView from "react-cool-inview";
const Services = () => {
  const services = [
    {
      link: "DBProducts/آنتی-بیوتیک-ها",
      image: "images/fram911.png",
      title: " آنتی بیوتیک",
      descreption:
        "",
    },
    {
      link: "/DBProducts/ویتامین-ها",
      image: "images/fram920.png",
      title: "ویتامین",
      descreption:
        "",
    },
    {
      link: "/DBProducts/ضد-عفونی-کننده-ها",
      image: "images/fram910.png",
      title: "ضد عفونی ",
      descreption:  " ",
    },
    {
      link: "DBProducts/کنسانتره",
      image: "images/fram921.png",
      title: "کنسانتره",
      descreption: "  ",
    },
    {
      link: "DBProducts/دآن-آماده",
      image: "images/fram909.png",
      title: "دان آماده",
      descreption:
        " ",
    },
    {
      link: "/DBProducts/تجهیزات-پرورشی",
      image: "images/fram922.png",
      title: "تجهیزات",
      descreption:
        " ",
    },
  ];
  const { observe, inView } = useInView({
    threshold: 0.1,
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <ServicesContainer ref={observe} id="Services">
      <ServicesH1>گارانتی اصالت و کیفیت </ServicesH1>
      {inView && (
        <ServicesWrapper>
          {services.map((item, index) => (
            <ServicesCard key={index}>
              <Link href={`${item.link}`} passHref>
                <ServicesIcon src={item.image} />
              </Link>
              <Link href={`${item.link}`} passHref>
                <ServicesH2>{item.title}</ServicesH2>
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

export default Services;
