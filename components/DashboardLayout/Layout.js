import Image from "next/image";
import Link from "next/link";
import styles from "./Dashboard.module.css";
import { IoPerson } from "react-icons/io5";
import { useRouter } from "next/router";

function DashboardLayout(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handelLogout = () => {
    dispatch(logout());
    router.replace("/");
  };

  const showDashboardLinks = () => {
    if (props.user && props.user.role === "doctor") {
      return (
        <>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard">داشبورد</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard/join-chat">شروع چت</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard/profile">اطلاعات حساب</Link>
          </li>
          <hr className={styles.hr} />
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <a style={{ cursor: "pointer" }} onClick={handelLogout}>
              خروج از حساب
            </a>
          </li>
        </>
      );
    } else if (props.user && props.user.role === "oprator") {
      return (
        <>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard">داشبورد</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard/support">پنل پشتیبانی</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard/profile">اطلاعات حساب</Link>
          </li>
          <hr className={styles.hr} />
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <a style={{ cursor: "pointer" }} onClick={handelLogout}>
              خروج از حساب
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard">داشبورد</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard/profile">اطلاعات حساب</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/s">کیف پول</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/s">سفارش های من</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/s">علاقه مندی ها</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/s">آدرس ها</Link>
          </li>
          <hr className={styles.hr} />
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <a style={{ cursor: "pointer" }} onClick={handelLogout}>
              خروج از حساب
            </a>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarImage}>
            <Image
              className={styles.sidebarImage}
              src="https://www.esafety.gov.au/sites/default/files/2019-07/protect_your_personal_information_0.jpg"
              alt=""
              layout="fixed"
              width="150"
              height="150"
            />
          </div>
          <ul className={styles.linkList}>{showDashboardLinks()}</ul>
        </div>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
}
export default DashboardLayout;
