import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";

const Tabs = ({
  tab1logo,
  tab2logo,
  tab3logo,
  tab4logo,
  tab5logo,
  tab1Title,
  tab2Title,
  tab3Title,
  tab4Title,
  tab5Title,
  data,
}) => {
  return (
    <div>
      <div className="tabs">
        <input type="radio" id="tab1" name="tab-control" defaultChecked />
        <input type="radio" id="tab2" name="tab-control" />
        <input type="radio" id="tab3" name="tab-control" />
        <input type="radio" id="tab4" name="tab-control" />
        <input type="radio" id="tab5" name="tab-control" />
        <ul>
          <li title="Vaccine">
            <label htmlFor="tab1" role="button">
              {/* <svg viewBox="0 0 24 24"><path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"/></svg> */}
              <img id="tab1img" src={tab1logo} alt="" />
              <br />
              <span>{tab1Title}</span>
            </label>
          </li>
          <li title="Vitamins">
            <label htmlFor="tab2" role="button">
              <img id="tab1img" src={tab2logo} alt="" />
              <br />
              <span>{tab2Title}</span>
            </label>
          </li>
          <li title="AntiBiotic">
            <label htmlFor="tab3" role="button">
              <img id="tab1img" src={tab3logo} alt="" />
              <br />
              <span>{tab3Title}</span>
            </label>
          </li>
          <li title="Sublomentries">
            <label htmlFor="tab4" role="button">
              <img id="tab1img" src={tab4logo} alt="" />
              <br />
              <span>{tab4Title}</span>
            </label>
          </li>
          <li title="Cleaner">
            <label htmlFor="tab5" role="button">
              <img id="tab1img" src={tab5logo} alt="" />
              <br />
              <span>{tab5Title}</span>
            </label>
          </li>
        </ul>

        <div className="slider_tab">
          <div className="indicator"></div>
        </div>
        <div className="content">
          <section>
            <Tab1 data={data} />
          </section>
          <section>
            <Tab2 data={data} />
          </section>
          <section>
            <Tab3 data={data} />
          </section>
          <section>
            <Tab4 data={data} />
          </section>
          <section>
            <Tab5 data={data} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
