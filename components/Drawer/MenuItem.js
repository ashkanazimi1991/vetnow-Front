import {BiClinic, BiDialpadAlt, BiHomeAlt, BiSupport, BiBroadcast, BiLineChart} from "react-icons/bi";
import { GiEggClutch } from "react-icons/gi";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Router from 'next/router';
import router from "next/router";


const MenuItem = (props) => {
  const { name, subMenus, to , number } = props;
  const [expand, setExpand] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if(menuRef.current){
        if (!menuRef.current.contains(event.target)) {
          setExpand(false);
        }
      }
     
    });
  });

  return (
    
    <li ref={menuRef}  onClick={() => setExpand(perval=>!perval)}>
      <div  className="icon-link">
        <a>
          <div className="sidebar-logo">
            {(() => {
              switch (name) {
                case "داروخانه":
                  return <BiClinic />;
                case "فروشگاه":
                  return <BiHomeAlt />;
                case "جوجه گوشتی":
                  return <GiEggClutch />;
                case "مشاوره":
                  return <BiSupport />;
                case "اتوماسیون":
                  return <BiBroadcast />;
                case "اخبار و آموزش":
                  return <BiLineChart />;
                default:
                  return <BiSupport />;
              }
            })()}
          </div>
          
            <Link href={to}>{<span className="link-name">{name} </span>}</Link>
          
        </a>

        <div className="sidebar-logo">
          <BiDialpadAlt  />
        </div>
      </div>
      {subMenus  ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {number === 1 ? 
            <Link href={`/${to}`}>
              {<h1  className="link-name"> {name}</h1>}
            </Link> :
             <Link href={`/DBProducts/${to}`}>
             {<h1  className="link-name"> {name}</h1>}
           </Link>
            }
          {subMenus.map((menu, index) => (
            <li key={index}>
              {menu.number ? 
              <Link  href={`/${menu.slug}`}>
                {menu.name}
              </Link> : 
              <Link  href={`/DBProducts/${menu.slug}`}>
              {menu.name}
            </Link>
            }
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
