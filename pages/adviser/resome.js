import { useState, Fragment } from "react";
import setAuthToken from "../../helpers/axiosInstance";
import { api } from "../../helpers/UrlConfig";
import Link from "next/link";
import nookies from "nookies";
import Image from "next/image";
import Layout from "../../components/Adviser/Layout";
import styles from "../../components/Chatroom/ChatroomStyle.module.css";
import Payment from "../../components/Chatroom/payment";
import PN from "persian-number";

function Resome({ doctors, rooms }) {
  const [count, setCount] = useState(0);
  const [center, setCenter] = useState(true);
  const [payment, setPayment] = useState(false);
  const doctorsLength = doctors.length;

  const handleNextDoctor = () => {
    if (count < doctorsLength - 1) {
      setCount(curval => curval + 1);
    } else {
      setCount(0);
    }
  };
  return (
    <Layout>
      <div className={styles["container"]}>
        {doctors.map((doctor, index) => {
          const roomForEachDoctor = rooms.filter(
            (room, i) => room.user === doctor._id,
          );
          return (
            count === index && (
              <Fragment key={doctor._id}>
                {center && (
                  <div className={styles["center"]}>
                    <h1>نام دامپزشک</h1>
                    {doctor.name
                      ? `دکتر ${doctor.name} ${doctor.lastName}`
                      : doctor.phone}
                    <h1>تخصص</h1>
                    <h2>{doctor.job}</h2>
                    <h1>مدرک</h1>
                    <h2>{PN.convertEnToPe(doctor.graduate)}</h2>
                    <h1>سابقه کار</h1>
                    <h2>{PN.convertEnToPe(doctor.experience)} سال</h2>
                    <h1> کد نظام پزشکی من</h1>
                    <h2>{PN.convertEnToPe(doctor.doctorId)}</h2>
                    <h1>سایر اطلاعات</h1>
                    <h2>{doctor.doctorDescreption}</h2>
                  </div>
                )}
                {payment && (
                  <div className={`${styles["center"]} ${styles["payment"]}`}>
                    <img src="/images/drImg/doctor.png" alt="" />
                    <div className={styles["detail"]}>
                      <div className={styles["detail-one"]}>
                        <h1 id={styles["title"]}>حق ویزیت</h1>
                        <h1 id={styles["sub"]}>3000000 تومان</h1>
                      </div>
                      <div className={styles["detail-two"]}>
                        <h1 id={styles["title"]}>مدت زمان چت </h1>
                        <h1 id={styles["sub"]}>30 دقیقه</h1>
                      </div>
                    </div>
                    <button onClick={()=>(setCenter(true), setPayment(false))}>پرداخت</button>
                  </div>
                )}
                <div className={styles["right"]}>
                  <img
                    src={`https://api.vetnow.ir/img/users/${doctor.avatar}`}
                  />
                  <h1 onClick={() => (setCenter(false), setPayment(true))}>
                    پرداخت ویزیت
                  </h1>
                  <h1>
                    <Link
                      href={`/chatroom/${
                        roomForEachDoctor.length > 0 && roomForEachDoctor[0]._id
                      }?name=${
                        roomForEachDoctor.length > 0 &&
                        roomForEachDoctor[0].name
                      }`}
                    >
                      شروع ویزیت
                    </Link>
                  </h1>
                  <h1 onClick={handleNextDoctor}>دامپزشک بعدی</h1>
                </div>
              </Fragment>
            )
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const token = nookies.get(ctx);
  const setAuthTokenToHeader = setAuthToken(token.jwt);
  try {
    const res = await setAuthTokenToHeader.get(`${api}users/doctors`);
    const roomsRequest = await setAuthTokenToHeader.get(`${api}chat`);
    return { props: { doctors: res.data.data, rooms: roomsRequest.data.data } };
  } catch (e) {
    return {
      redirect: {
        destination: "/login",
        permenant: false,
      },
    };
  }
}

export default Resome;
