import stylesDentures from "./DenturesP.module.css";
import { FiAlignCenter, FiHeart, FiTruck } from "react-icons/fi";
import Link from "next/link";
export default function DenturesP({
  direction,
  rightTitle,
  leftTitle,
  leftSubtitle,
  leftBtnTitle,
  middleBtnTitle,
  rightBtnTitle,
  leftSquareColor,
  middleSquareColor,
  rightSquareColor,
  image
}) {
  return (
    <div className={stylesDentures["main"]}>
      <div
        className={stylesDentures["container"]}
        style={{ direction: direction }}
      >
        <div className={stylesDentures["image"]}>
          <img id={stylesDentures["img"]} src={image} alt="" />
          <div className={stylesDentures["squareContainer"]}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div
                className={stylesDentures["color1"]}
                style={{ backgroundColor: leftSquareColor }}
              />
              <div
                className={stylesDentures["color2"]}
                style={{ backgroundColor: middleSquareColor }}
              />
              <div
                className={stylesDentures["color3"]}
                style={{ backgroundColor: rightSquareColor }}
              />
            </div>
            <h1>{rightTitle}</h1>
          </div>
        </div>
        <div className={stylesDentures["title"]}>
          <h1 id={stylesDentures["title"]}>{leftTitle} </h1>
          <h1 id={stylesDentures["subtitle"]}>{leftSubtitle}</h1>

          <div className={stylesDentures["button"]}>
            <Link href="#">
              <button id={stylesDentures["button1"]}>
                
                {leftBtnTitle}
              </button>
            </Link>
            <Link href="#">
              <button id={stylesDentures["button2"]}>
                
                {middleBtnTitle}
              </button>
            </Link>
            <Link href="#">
              <button id={stylesDentures["button3"]}>
                 {rightBtnTitle}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
