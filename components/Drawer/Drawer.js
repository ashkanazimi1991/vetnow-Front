import { BiGridAlt } from "react-icons/bi";
import {MdAssessment } from "react-icons/md";
import {AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import axios from "axios";
import {BaseUrl} from "../../components/baseUrl/BaseUrl";



export const menuItems = [

  {
    name: "دامپزشک و مشاوره آنلاین",
    slug: "adviser",
    number: 1,
    subMenus: [
    
    ],
  },
  {
    name: "اتوماسیون",
    slug: "automation",
    number: 1,
    subMenus: [
      
    ],
  },
  {
    name: "اخبار و آموزش",
    slug: "news",
    number: 1,
    subMenus: [
      { name: "اخبار صنعت طیور", slug: "news/poultry" , number: 1},
      // { name: "منابع آموزشی", slug: "news/source" , number: 1},
      // { name: "راه کارهای پرورشی", slug: "news/poultry_solution" , number: 1},
    ],
  },
];

function Drawer() {
  const [data , setData] = useState([])
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  let menRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (menRef.current) {
        if (!menRef.current.contains(event.target)) {
          setClose(true);
        }
      }
    });
  });
  let profileRef = useRef();
  useEffect(() => {
    axios.get(`${BaseUrl}/api/v1/categories/m/`).then(response => setData(response.data))
    document.addEventListener("mousedown", (event) => {
      if (profileRef.current) {
        if (!profileRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    });
  },[]);

  return (
    <>
      <div ref={menRef} className={`sidebar ${close ? "close" : ""}`}>
        <div className="logo-details">
          <Link href="/">
            {<span className="logo-name">ویرا تجارت نوین اسپوتا</span>}
          </Link>
          <div className="dashboard-logo" onClick={() => setClose(!close)}>
            <BiGridAlt style={{ fontSize: "25px" }} />
          </div>
        </div>
        <ul className="nav-links">
          {data.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.slug}
              subMenus={menuItem.parent || []}
            />
          ))}
           {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.slug}
              number={menuItem.number}
              subMenus={menuItem.subMenus || []}
            />
          ))}
           {/* {menuItems.map((menuItem , index) =>
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
            />
           )} */}
           
        </ul>

        <div
          ref={profileRef}
          className={`profile-details ${open ? "open" : ""}`}
        >
          <div className="profile-content">
            {/* <img  onClick={() => setOpen(!open)}  src={"/favicon.ico"}  alt="Profile"/> */}
            <MdAssessment onClick={() => setOpen(!open)} id="img" />
          </div>

             <Link href="/Profile/profileDetails" >
          <div className="name-job">
               <div className="profile-name"> داشبورد شما </div>
               <div className="job">تنظیمات پروفایل</div>
          </div>
             </Link>

          <div className="profile-logo">
          <Link href="/Profile/profileDetails" >
            <AiOutlineArrowLeft/>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
