import Link from 'next/link'
import styles from '../SideBar/SideBar.module.css'

export default function SideBar(){
    return(
        <div className={styles.container}>
            <ul className={styles.List}>
                <li className={styles.ListItem}>
                    <p>سفارشات من <i className="fas fa-shopping-basket"></i></p> 
                </li>
                <li className={styles.ListItem}>
                    <Link href="/Favorites/FavoritesList"><p>نشان شده ها <i className="fas fa-heart"></i></p></Link>
                </li>
                <li className={styles.ListItem}>
                    <Link href="/Profile/96f20d6d2a398fae5c42a67f1ff34241ae7a459c" passHref><p>اطلاعات حساب <i className="fas fa-info"></i></p></Link>
                </li>
                <li className={styles.ListItem}>
                     <p>احرازهویت <i className="fas fa-user-shield"></i></p> 
                </li>
                <li className={styles.ListItem}>
                <Link href="/Wallet/" passHref><p>کیف پول <i className="fas fa-wallet"></i></p></Link>
        
                </li>
                <li className={styles.ListItem}>
                    <p>مشاوره <i className="fas fa-handshake"></i></p> 
                </li>
                <li className={styles.ListItem}>
                     <p>خروج <i className="fas fa-sign-out-alt"></i></p> 
                </li>
            </ul>
        </div>
    )
}