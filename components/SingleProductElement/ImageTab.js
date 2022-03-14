import imageTab from "./ImageTab.module.css";
const ImageTab = ({ image1, image2, image3, image4 }) => {
  return (
    <div>
      <main className={imageTab["main"]}>
        <input
          id={imageTab["radio1"]}
          type="radio"
          name="css-tabs"
          defaultChecked
        />
        <input id={imageTab["radio2"]} type="radio" name="css-tabs" />
        <input id={imageTab["radio3"]} type="radio" name="css-tabs" />
        <input id={imageTab["radio4"]} type="radio" name="css-tabs" />

        <div id={imageTab["content"]}>
          <section id={imageTab["content1"]}>
            <img src={`${process.env.baseUrl}/img/products/${image1}`} alt="" />
          </section>
          <section id={imageTab["content2"]}>
            <img src={`${process.env.baseUrl}/img/products/${image2}`} alt="" />
          </section>
          <section id={imageTab["content3"]}>
            <img src={`${process.env.baseUrl}/img/products/${image3}`} alt="" />
          </section>
          <section id={imageTab["content4"]}>
            <img src={`${process.env.baseUrl}/img/products/${image4}`} alt="" />
          </section>
        </div>
        <div id="tabs">
          <label
            id="tab1"
            style={{
              backgroundImage: `url("${process.env.baseUrl}/img/products/${image1}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            htmlFor={imageTab["radio1"]}
          ></label>
          <label
            id="tab2"
            style={{
              backgroundImage: `url("${process.env.baseUrl}/img/products/${image2}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            htmlFor={imageTab["radio2"]}
          ></label>
          <label
            id="tab3"
            style={{
              backgroundImage: `url("${process.env.baseUrl}/img/products/${image3}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            htmlFor={imageTab["radio3"]}
          ></label>
          <label
            id="tab4"
            style={{
              backgroundImage: `url("${process.env.baseUrl}/img/products/${image4}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            htmlFor={imageTab["radio4"]}
          ></label>
        </div>
      </main>
      <style jsx>
        {`
           {
            #tabs {
              position: absolute;
              display: flex;
              margin: 0 auto;
              padding: 0;
              width: 100%;
              bottom: 0;
              background-color: #232f3e;
              height: 60px;
            }
            #tabs::before {
              content: "";
              display: block;
              height: 100%;
            }
            #tabs::after {
              content: "";
              display: block;
              position: absolute;
              height: 100%;
              width: 100%;
              background-color: #232f3e;
              transition: transform 300ms;
            }
            #tabs label {
              position: relative;
              z-index: 1;
              display: block;
              float: left;
              width: 100%;
              height: 100%;
              cursor: pointer;
            }

            #tabs label::before {
              content: "";
              display: block;
              height: 80%;
              width: 80%;
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;

              margin: 0 auto;
            }

            #tab1::before {
              background-image: url(${image1});
            }
            #tab2::before {
              background-image: url(${image2});
            }
            #tab3::before {
              background-size: cover;

              background-image: url(${image3});
            }
            #tab4::before {
              background-image: url(${image4});
            }
            /* #radio1:checked ~ #tabs  #radio2:checked ~ #tabs #tab2::before, #radio3:checked ~ #tabs #tab3::before, #radio4:checked ~ #tabs #tab4::before {
            filter: invert(100%);
          } */
            #tab1,
            #tab2,
            #tab3,
            #tab4 {
              padding: 0;
              margin-left: 10px;
              border-radius: 5px;
              transition: all 0.2s ease-in-out;
              filter: drop-shadow(0 1mm 2mm rgb(0, 0, 0));
              background-color: #fff;
              background-origin: content-box, border-box;
            }
            #tab1:hover,
            #tab2:hover,
            #tab3:hover,
            #tab4:hover {
              filter: drop-shadow(0 0mm 0mm rgb(0, 0, 0));
              background-origin: content-box, border-box;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageTab;
