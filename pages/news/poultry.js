import styles from "../../styles/news.module.css";
import Layout from "../../components/news/Layout";
import Section2 from "../../components/news/section2";
import axios from "axios";
import { descreption } from "../../components/product/StringFunction";
import Link from "next/link"
import {BaseUrl} from "../../components/baseUrl/BaseUrl";


export default function Index({data}) {
  console.log(data);
  return (
    <Layout>
      <div className={styles["main"]}>
        <div className={styles["section1"]}>
          <h1 id={styles["title1"]}>اخبار صنعت طیور</h1>
          <div className={styles["topSection"]}>
            <div className={styles["two"]}>
              {data.map(item => 
              <div key={item.id} className={styles["card3"]}>
                <div className={styles["card4"]}>
                  <img id={styles["imgNews"]} src={item.title_image} alt="" />
                  <h1 id={styles["titleNews"]}>
                  {item.title}
                  </h1>
                  <div style={{fontSize: '14px' , textAlign: 'justify' , direction: 'rtl'}} className="product-des" dangerouslySetInnerHTML={{ __html: descreption(item.body) + " ..." }}></div>
                  <p><Link href={`/news/${item.slug}`}>ادامه مطلب</Link></p>
                  <h1 id={styles["time"]}>
                    {item.created_at} . By {item.author.first_name} {item.author.last_name}
                  </h1>
                </div>

              </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className={styles["section2"]}>
          <Section2
            imgPath="/images/ave2.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/new601.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/new600.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/robot01.jpg"
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
          <Section2
            imgPath="/images/aa.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/pellet100.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/ross308.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/qqq.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/pellet022.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          
        </div> */}
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

export async function getServerSideProps(){
  const data = await axios.get(encodeURI(`${BaseUrl}/api/v1/news/`), {
    headers:{
      'Authorization': 'Token '+ '02ebc7ad2fc7225c7b5020a3418e90cc9d2a3152', 
  },
  })
  const response = data.data.results

  return{
    props:{data: response}
  }
}
