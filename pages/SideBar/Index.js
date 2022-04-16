import Link from 'next/link'
import styles from '../SideBar/SideBar.module.css'

export default function SideBar(){
    const exitHandler = () =>{
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.replace("/")
    }
    return(
        <div className={styles.container}>
            <ul className={styles.List}>
                <li className={styles.ListItem}>
                    <Link href="/"><p> صفحه اصلی <i className="fas fa-home"></i></p></Link>
                </li>
                <li className={styles.ListItem}>
                    <Link href="/UserPanel/"><p>سفارشات من <i className="fas fa-shopping-basket"></i></p></Link>
                </li>
                <li className={styles.ListItem}>
                    <Link href="/Favorites/FavoritesList"><p>نشان شده ها <i className="fas fa-heart"></i></p></Link>
                </li>
                <li className={styles.ListItem}>
                    <Link href="/Refunds/"><p>ثبت مرجوعی <i class="fas fa-undo"></i></p></Link>
                </li>
                <li className={styles.ListItem}>
                    <Link href="/Profile/profileDetails" passHref><p>اطلاعات حساب <i className="fas fa-info"></i></p></Link>
                </li>
                <li className={styles.ListItem}>
                <Link href="/Wallet/" passHref><p>کیف پول <i className="fas fa-wallet"></i></p></Link>
        
                </li>
                <li className={styles.ListItem}>
                    <p>مشاوره <i className="fas fa-handshake"></i></p> 
                </li>
                <li onClick={exitHandler} className={styles.ListItem}>
                     <p>خروج <i className="fas fa-sign-out-alt"></i></p> 
                </li>
            </ul>
        </div>
    )
}