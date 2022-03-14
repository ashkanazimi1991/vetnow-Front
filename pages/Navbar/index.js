import Link from 'next/link'
import styles from '../Navbar/Navbar.module.css'

export default function Navbar() {
    return(
        <div className={styles.navbarDive}>
        <nav className="navbar navbar-light bg-light fixed-top">
            <div style={{direction: 'ltr'}} className="container-fluid">
                <Link className="navbar-brand" href="/"><h3 style={{color: 'white'}}>VetNow</h3></Link>
                <button className={styles.navbar_toggler} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span><i className="fas fa-2x fa-bars"></i></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <Link href="/"><h5 className="offcanvas-title" id="offcanvasNavbarLabel">VetNow</h5></Link>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className={styles.List}>
                        <li className={styles.ListItem}>
                            <p>سفارشات من <i className="fas fa-shopping-basket"></i></p> 
                        </li>
                        <li className={styles.ListItem}>
                            <p>نشان شده ها <i className="fas fa-heart"></i></p> 
                        </li>
                        <li className={styles.ListItem}>
                            <p>اطلاعات حساب <i className="fas fa-info"></i></p> 
                        </li>
                        <li className={styles.ListItem}>
                            <p>احرازهویت <i className="fas fa-user-shield"></i></p> 
                        </li>
                        <li className={styles.ListItem}>
                            <p>کیف پول <i className="fas fa-wallet"></i></p> 
                
                        </li>
                        <li className={styles.ListItem}>
                            <p>مشاوره <i className="fas fa-handshake"></i></p> 
                        </li>
                        <li className={styles.ListItem}>
                            <p>خروج <i className="fas fa-sign-out-alt"></i></p> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </nav>
        </div>
    )
}