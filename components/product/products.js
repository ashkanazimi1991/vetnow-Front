import Layout from "../Adviser/Layout";
import ImageSlider from "./ImageSlider";
import product_styles from "./ProductsStyle.module.css";
import Card from "./Card";
import useInView from "react-cool-inview";
// import BarChart from "../news/educationPage/barChart";
import { descreption } from "./StringFunction";
import Link from "next/link";
// import axios from "axios";
// import React from 'react'
// import { isInCard } from "./ButtonsFunction";
// import { qunatityManager } from "./ButtonsFunction";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease } from '../../components/redux/Cart/CartActions';
import SliderOne from "../../components/cardslider/sliderone";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = ({ 
  displatChart,
  img1Slider,
  img2Slider,
  img3Slider,
  title1Banner,
  img2Banner,
  title2Banner,
  subtitle2Banner,
  title3Banner,
  img3Banner,
  leftSideBgColor,
  rightSideBgColor,
  subtitle3Banner,
  title4Banner,
  img4Banner,
  subtitle4Banner,
  title5Banner,
  img5Banner,
  subtitle5Banner,
  btnTextBanner,
  titleNews,
  title1Footer,
  title3Footer,
  aboutrace,
  data,
  products,
  newsData,
  cookies,
  
}) => {
  const { observe, inView } = useInView({
    threshold: 0.1,
    onEnter: ({ unobserve }) => unobserve(),
  });


  
  let state = useSelector(state => state.cartState)
  const dispatch = useDispatch()
  return (
    <Layout>
      <div className={product_styles.sectionOne}>
        <ImageSlider
          img1Slider={img1Slider}
          img2Slider={img2Slider}
          img3Slider={img3Slider}
          
        />

        <div style={{width: "100%", height: "100%" , backgroundColor: '#232f3e',overflow: 'hidden'}}>
          <SliderOne  style={{width: "100%" , backgroundCo:"#fff"}} 
          img1='/images/000000.jpg' img2='/images/onlinedr2.jpg' img3='/images/farm300.jpg' img4='/images/tools98.jpg' img5='/images/myna.jpg' img6='/images/vitamin012.jpg'
          title1=' جوجه گوشتی' title2='دامپزشک آنلاین' title3='آنالیز گله ' title4='تجهیزات پرورشی' title5='منابع آموزشی' title6='ویتامین , مکمل '
          />
        </div>  

        <div
          className={product_styles["ChartSection"]}
          style={{ display: displatChart }}
        >
          <div className={product_styles["ChartDetail"]}>
            <h1>{aboutrace}</h1>
          </div>
        </div>
      </div>
      <h1 id={product_styles.sectionTwoTitle}>{title1Banner}</h1>
      <div ref={observe} className={product_styles["sectionTwo"]}>
        <div
          className={product_styles["rightSide"]}
          style={{ backgroundColor: leftSideBgColor }}
        >
          <div className={product_styles["top_of_rightSide"]}>
            <img src={img2Banner} alt="" />
            <div className={product_styles["wordsTop_of_rightSide"]}>
              <h1 id={product_styles.title}>{title2Banner}</h1>
              <h1 id={product_styles.subtitle}>{subtitle2Banner}</h1>
            </div>
          </div>

          <div className={product_styles.bottom_of_rightside}>
            <div className={product_styles.right_bottom_rightSide}>
              <div className={product_styles.container_right_bottom_rightSide}>
                <h1 id={product_styles.title_right_bottom}>{title3Banner}</h1>
                <img
                  id={product_styles.img_right_bottom_rightSide}
                  src={img3Banner}
                  alt=""
                />
                <h1 id={product_styles.subtitle_right_bottom}>
                  {subtitle3Banner}
                </h1>
              </div>
            </div>
            <div className={product_styles.left_bottom_rightside}>
              <div className={product_styles.container_left_bottom}>
                <h1 id={product_styles.title_right_bottom}>{title4Banner}</h1>
                <img
                  id={product_styles.img_right_bottom_rightSide}
                  src={img4Banner}
                  alt=""
                />
                <h1 id={product_styles.subtitle_right_bottom}>
                  {subtitle4Banner}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className={product_styles.leftSide}
          style={{ backgroundColor: rightSideBgColor }}
        >
          <div className={product_styles.container_leftSide}>
            <img id={product_styles.img_leftSide} src={img5Banner} alt="" />
            <h1 id={product_styles.title_leftside}>{title5Banner}</h1>
            <h1 id={product_styles.subtitle_leftside}>{subtitle5Banner}</h1>
            <button>{btnTextBanner}</button>
          </div>
        </div>
      </div>
      {inView && (
        <div className={product_styles.CardContainer}>
          <Card data={data ? data : []} />
        </div>
      )}
      <div className={product_styles.Cart_Box}>
        {products.map(item => 
           <div key={item.id} className={product_styles.Cart}>
            <div className={product_styles.Image_Box}>
              <img src={item.thumbnail} alt="logo" />
            </div>
            <h1 style={{textAlign: 'center' , fontSize: '16px' , margin: '5px'}}>{item.name}</h1>
            <hr />
            <div className={product_styles.description_Box}>
              <br />
              <div className="product-des" dangerouslySetInnerHTML={{ __html: descreption(item.descreption) + "..." }}></div>
              <div className={product_styles.Price}>
                <div style={{ direction: 'rtl'}}>
                  <p style={ item.price_after_discount ? { textDecoration: "line-through" , color: 'red'} : {}} >    {item.price} ریال </p>
                  <p style={item.price_after_discount <= 0 ? {display: 'none'} : {}}>  {item.price_after_discount} ریال </p>
                </div>
              </div>
              <div className={product_styles.Add_To_Cart}>
                <div style={{display: 'flex' , justifyContent: 'space-between' , alignItems: 'center'}}>
               {item.depository > 0 ?  <button onClick={() => { dispatch(addItem(item)) ; toast.success(`محصول ${item.name} به سبد خرید شما افزرده شد`)}} >خرید محصول</button> :  <button style={{backgroundColor: '#b30000'}}>ناموجود</button>}
                <Link href={`/DBProductsDetails/${item.slug}`} >جزئیات محصول</Link>
                </div>
              </div>
            </div>
           </div>
           )}
      </div>
      <h1 style={{ marginTop: "20px" }}>{titleNews}</h1>
      {inView && (
        <div className={product_styles.description}>
          {newsData.map(item => 
            <div key={item.id} className={product_styles.descriptionCard}>
            <img src={item.title_image} alt="اخبار طیور" />
            <h1 id={product_styles["titleNews"]}>{item.title}</h1>
            <div style={{textAlign: 'justify' , fontSize: "12px" , width: "50%" , margin: "0 auto"}} className="product-des" dangerouslySetInnerHTML={{ __html: descreption(item.body) + "..." }}></div>
            <br />
            <div style={{fontSize: "16px" , width: "50%" , margin: "0 auto"}}>
            <Link href={`/news/${item.slug}`}> ادامه ملطب </Link>
            </div>
         </div>
            )}
        </div>
      )}
      {/* {inView && (
        <div className={product_styles.Company}>
          <h1>{title1Footer}</h1>
          <h2>
            {new Date().getFullYear()}/{new Date().getMonth() + 1}/
            {new Date().getDate()}
          </h2>
          <h3>{title3Footer}</h3>
        </div>
      )} */}
      <style global jsx>
        {`
          body {
            font-family: "iransanse";
          }
        `}
      </style>
      <ToastContainer />
    </Layout>
  );
};
export default Products;
