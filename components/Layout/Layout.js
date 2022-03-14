import { Fragment, useState } from "react";
import Drawer from "../Drawer/Drawer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Menubar from "../store/menubar/Menubar";

import classes from "./Layout.module.css";

function Layout({ user, children, isSecond, isDashboard }) {
  const [isOpen, setIsOpen] = useState(false);
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const toggle = () => {
    // socket.emit("leave_room", ClientRoom);
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {isSecond ? (
        <>
          <button className={classes.joinChat} onClick={handelSupportChat}>
            Chat
          </button>

          <Menubar />
          <Drawer />
          {children}
        </>
      ) : (
        <>
          {!isDashboard && <Drawer />}{" "}
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar user={user} toggle={toggle} />
          {children}
        </>
      )}
    </Fragment>
  );
}

export default Layout;
