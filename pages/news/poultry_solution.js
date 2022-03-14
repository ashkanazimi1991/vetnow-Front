import styles from "../../styles/news.module.css";
import Layout from "../../components/news/Layout";
import Section2 from "../../components/news/section2";

export default function Index() {
  return (
    <Layout>
      <div className={styles["main"]}>
        <div className={styles["section1"]}>
          <h1 id={styles["title1"]}>راهکارهای پرورشی</h1>

          <div className={styles["topSection"]}>
            <div className={styles["one"]}>
              <img id={styles["imgNews"]} src="/images/news03.jpg" alt="" />
              <h1 id={styles["titleNews"]}>
              پرورش مرغ گوشتی در خانه
              </h1>
              <p id={styles["textNews"]}>
              پرورش مرغ گوشتی امروزه در کشور ما بسیار رواج پیدا کرده است. مردم برای اینکه بتوانند کسب و کار پرورش مرغ گوشتی را راه بیندازند نیاز دارند تا اطلاعات جامعی درباره آن بدست بیاورند. برای شروع پرورش مرغ های گوشتی این مطلب می تواند مرجع خوبی برای شما باشد.
پیشنهاد می کنم که تا آخر این مطلب را کامل بخوانید تا دید تازه ای به نسبت این نوع کسب و کار پیدا کنید.
              </p>
              <h1 id={styles["time"]}>
                2h ago . By Muktita Suhartono and Hannah Beech
              </h1>
            </div>
            <div className={styles["two"]}>
              <div className={styles["card3"]}>
                <div className={styles["card4"]}>
                  <img id={styles["imgNews"]} src="/images/poultry01.jpg" alt="" />
                  <h1 id={styles["titleNews"]}>
                  چگونه مرغ گوشتی پرورش دهیم ؟  
                   </h1>
                  <p id={styles["textNews"]}>
                  امروزه با توجه به رشد روزافزون جمعیت، تأمین مواد غذایی ازجمله پروتئین یکی از فاکتورهای مهم در پیشرفت جوامع انسانی است. محصولات حاصل از طیور اعم از گوشت و تخم به‌عنوان عمده منابع تأمین‌کننده پروتئین در اغلب کشورهای دنیا به شمار می‌آیند به‌نحوی‌که تولید و مصرف فرآورده‌های طیور با سرعت چشمگیری رو به گسترش است.
                  </p>
                  <h1 id={styles["time"]}>
                    2h ago . By Muktita Suhartono and Hannah Beech
                  </h1>
                </div>

                <div className={styles["card5"]}>
                  <img id={styles["imgNews"]} src="/images/robot01.jpg" alt="" />
                  <h1 id={styles["titleNews"]}>
                  راندمان بیشتر با ربات های مرغدار
                  </h1>
                  <p id={styles["textNews"]}>
                    کارگران از مهتمرین عامل های انتقال بیماری هستند و زمانی که امور روتین سرکشی از قبیل حذف تلفات مشاهد گله و سیستم های دانخوری و اب خوری از نزدیک و چک کردن محیط و ده های فعالیت دیگر که توسط روبات آن واحد انجام شود باعث افزایش راندمان نهایی می گردد 
                  </p>
                  <h1 id={styles["time"]}>
                    2h ago . By Muktita Suhartono and Hannah Beech
                  </h1>
                </div>
              </div>
              <div className={styles["card3"]}>
                <div className={styles["card4"]}>
                  <img id={styles["imgNews"]} src="/images/ss.jpg" alt="" />
                  <h1 id={styles["titleNews"]}>
                  مهم‌ترین دلایل پرورش مرغ گوشتی
                  </h1>
                  <p id={styles["textNews"]}>
                  ضریب تبدیل غذایی مناسب.سرعت رشد بالا.افت پایین لاشه. پرورش آسان‌تر.
                        بازگشت سریع‌تر سرمایه.
                        نبود زئونوز (بیماری مشترک بین انسان و دام).
                        سالم‌تر بودن گوشت ازنظر میزان چربی و کلسترول پایین.
                       بالاتر بودن پروتئین گوشت مرغ.
                       قابلیت هضم بالاتر گوشت مرغ.
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
            imgPath="/images/news01.jpg"
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
            imgPath="/images/20.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/21.jpg"
            titleOfNews="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،"
          />
          <Section2
            imgPath="/images/analyz.jpg"
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
