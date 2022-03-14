import styles from "../../styles/news.module.css";
import Layout from "../../components/news/Layout";
import Section2 from "../../components/news/section2";
import SliderOne from "../../components/store/slider/Slider";
// import CardSlider from "../../components/cardslider/cardslider";

export default function Index() {
  return (
    <Layout>
      <div className={styles["main"]}>
      <SliderOne
          imgSlide1="/images/ave.jpg"
          imgSlide2="/images/ave2.jpg"
          imgSlide3="/images/ave3.jpg"
          imgSlide4="/images/ss.jpg"
          titleSlide1="  آشنایی با انواع طیور پرورشی"
          titleSlide2=" راهکارهای افزایش راندمان"
          titleSlide3=" آموزش واکسیناسیون صحیح"
          titleSlide4=" آشنایی با مکمل های کمکی"
        />
        {/* <CardSlider /> */}
        <div className={styles["section1"]}>
          <h1 id={styles["title1"]}>منابع آموزشی وتنا</h1>

          <div className={styles["topSection"]}>
            <div className={styles["one"]}>
              <img id={styles["imgNews"]} src="/images/onlinedr.jpg" alt="" />
              <h1 id={styles["titleNews"]}>
                وتنا اولین پلتفرم چند منظوره اختصاصی طیور در ایران
              </h1>
              <p id={styles["textNews"]}>
                در پلتفرم وتنا مرغداران و پرورش دهندگان طیور می توانند تمام نیاز های مزارع خود را یکجا تامین کنند.مانند تجهیزات تغذیه و درمان , علاوه بر اینها کاربران متخصص های طیور را همیشه کنار خود خواهد داشت 
              </p>
              <h1 id={styles["time"]}>
                2h ago . By Muktita Suhartono and Hannah Beech
              </h1>
            </div>
            <div className={styles["two"]}>
              <div className={styles["card3"]}>
                <div className={styles["card4"]}>
                  <img id={styles["imgNews"]} src="/images/new600.jpg" alt="" />
                  <h1 id={styles["titleNews"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از
                  </h1>
                  <p id={styles["textNews"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                  <h1 id={styles["time"]}>
                    2h ago . By Muktita Suhartono and Hannah Beech
                  </h1>
                </div>

                <div className={styles["card5"]}>
                  <img id={styles["imgNews"]} src="/images/new601.jpg" alt="" />
                  <h1 id={styles["titleNews"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از
                  </h1>
                  <p id={styles["textNews"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                  <h1 id={styles["time"]}>
                    2h ago . By Muktita Suhartono and Hannah Beech
                  </h1>
                </div>
              </div>
              <div className={styles["card3"]}>
                <div className={styles["card4"]}>
                  <img id={styles["imgNews"]} src="/images/news700.jpg" alt="" />
                  <h1 id={styles["titleNews"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از
                  </h1>
                  <p id={styles["textNews"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                  <h1 id={styles["time"]}>
                    2h ago . By Muktita Suhartono and Hannah Beech
                  </h1>
                </div>

                <div className={styles["card5"]}>
                  <img id={styles["imgNews"]} src="/images/news701.jpg" alt="" />
                  <h1 id={styles["titleNews"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از
                  </h1>
                  <p id={styles["textNews"]}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                  <h1 id={styles["time"]}>
                    2h ago . By Muktita Suhartono and Hannah Beech
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["section2"]}>
          <Section2
            imgPath="/images/news702.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/news703.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
  
        
        </div>
        <style global jsx>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
