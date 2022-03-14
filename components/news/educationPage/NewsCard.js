import leftSideStyles from "./NewsCard.module.css";


export default function NewsCard({newsTitle,newsSub,newsImg}) {
  return (
    <>
      <div className={leftSideStyles["container"]}>
        <span className={leftSideStyles["circle"]}>
          <img src={newsImg} alt=""/>
        </span>
        <div className={leftSideStyles["detail"]}>
          <h1>{newsTitle}</h1>
          <h2>
            {newsSub}
          </h2>
        </div>
      </div>
    </>
  );
}
