import DescriptionStyle from "./DescriptionComment.module.css";

const DescriptionComment = ({leftTabTitle, rightTabTitle}) => {
  return (
    <div className={DescriptionStyle["main"]}>
      <div className={DescriptionStyle["tabs1"]}>
        <input type="radio" id="tab-1" name="tab-control" defaultChecked />
        <input type="radio" id="tab-2" name="tab-control"  />
        <ul>
          <li title={leftTabTitle}>
            <label htmlFor="tab-1" role="button">
              
              
              <span>{leftTabTitle}</span>
            </label>
          </li>
          <li title={rightTabTitle}>
            <label htmlFor="tab-2" role="button">
              
              <span>{rightTabTitle}</span>
            </label>
          </li>
        </ul>
        <div className={DescriptionStyle["slider"]}>
          <div className={DescriptionStyle["indicator"]} />
        </div>
        <div className={DescriptionStyle["content"]}>
          <section>
          <h1>میانگین وزن-راندمان-و..
          </h1>
          </section>
          <section>
            <h1>بنظر من که هوبارد بهتره</h1>
          </section>
        </div>
      </div>
      <style global jsx>
        {`
          @import "https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400";
          body {
            font-family: "Raleway";
          }
          body h1 {
            text-align: center;
            font-weight: 300;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default DescriptionComment;
