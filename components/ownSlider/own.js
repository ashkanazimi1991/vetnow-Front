import sliderStyles from "./own.module.css";

export default function Own() {
  return (
    <>
      <div className={sliderStyles["sliderMain"]}>
        <div className={sliderStyles["image1"]}>
          <img src="images/imageSlide/eight.jpg" alt="" />
        </div>
        <div className={sliderStyles["image2"]}>
        <img src="images/imageSlide/one.jpg" alt="" />
        </div>
        <div className={sliderStyles["image3"]}>
        <img src="images/imageSlide/two.jpg" alt="" />
        </div>
        <div className={sliderStyles["image4"]}>
        <img src="images/imageSlide/three.jpg" alt="" />
        </div>
        <div className={sliderStyles["image5"]}>
        <img src="images/imageSlide/ten.jpg" alt="" />
        </div>
        <div className={sliderStyles["image6"]}>
        <img src="images/imageSlide/sat.jpg" alt="" />
        </div>
        <div className={sliderStyles["borderContainer"]}>
          <div className={sliderStyles["border"]}>
            <h1 style={{ marginLeft: "50px", textAlign: "center" }}>
               
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
