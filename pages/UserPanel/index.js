import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../UserPanel/Home.module.css'
import Navbar from '../Navbar'
import SideBar from '../SideBar/Index'
import * as cookie from 'cookie'
import * as shamsi from 'shamsi-date-converter';
import {BaseUrl} from "../../components/baseUrl/BaseUrl";



export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>User Panel | پنل کاربری </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <section className={styles.Flex}>
          <section className={styles.main}>
            <br />
            <br />
            <table style={{width: '95%' , margin: '0 auto' , direction: 'rtl'}} className="table">
              <thead>
                <tr>
                  <th scope="col">تاریخ</th>
                  <th scope="col">وضعیت پرداخت</th>
                  <th scope="col">وضعیت سفارش</th>
                  <th scope="col">مبلغ سفارش</th>
                  <th scope="col">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {props.productsList.map(item => 
                  <tr key={item.id} className={styles.Tbody}>
                    <td>{shamsi.gregorianToJalali(item.created.split("-")).join("-")}</td>
                    {item.payment_status === 'p' && <td style={{color: 'green'}}>پرداخت موفق</td>}
                    {item.payment_status === 'c' && <td style={{color: 'red'}}>کنسل شده</td>}
                    {item.payment_status === 'r' && <td style={{color: 'yellow'}}>مرجوعی</td>}
                    {item.confirmation ? <td style={{color: 'green'}}>تایید شده</td> : <td style={{color: 'red'}}>در حال پردازش</td>}
                    <td>{item.amount}</td>
                    <td><Link href={`/Orders/${item.order_id}`}>جزئیات</Link></td>
                  </tr>
                  )}
                  
              </tbody>
            </table>
          </section>
          <section className={styles.SideBar}>
            <SideBar />
          </section>
          </section>
    </div>
  )
}

//get data from database
  export const getServerSideProps = async (context) => {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    const data = await axios.get(`${BaseUrl}/api/v1/user/orders/`, {
      headers:{
        'Authorization': 'Token '+ parsedCookies.token, 
    },
    })
    const response = data.data.results

    return{
      props:{
          productsList: response
      }
    }
  }
