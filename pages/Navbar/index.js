import Link from 'next/link'
import styles from '../Navbar/Navbar.module.css'

export default function Navbar() {

    const exitHandler = () =>{
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.replace("/")
    }

    
    return(
        <div className={styles.navbarDive}>
        <nav className="navbar navbar-light bg-light fixed-top">
            <div style={{direction: 'ltr'}} className="container-fluid">
                <Link className="navbar-brand" href="/"><h3 style={{color: 'white'}}>VetNow</h3></Link>
                <button className={styles.navbar_toggler} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span><i className="fas fa-2x fa-bars"></i></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div style={{backgroundColor: '#232F3E'}} className="offcanvas-header">
                    <Link href="/"><h5 style={{color: "#fff"}} className="offcanvas-title" id="offcanvasNavbarLabel">VetNow</h5></Link>
                    <button style={{backgroundColor: '#fff'}} type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div style={{textAlign: 'right'}} className="offcanvas-body">
                    <ul className={styles.List}>
                    <li className={styles.ListItem}>
                        <Link href="/"><p> صفحه اصلی <i className="fas fa-home"></i></p></Link>
                        </li>
                        <hr />
                        <li className={styles.ListItem}>
                        <Link href="/UserPanel/"><p>سفارشات من <i className="fas fa-shopping-basket"></i></p></Link>
                        </li>
                        <hr />
                        <li className={styles.ListItem}>
                            <Link href="/Favorites/FavoritesList"><p>نشان شده ها <i className="fas fa-heart"></i></p></Link>
                        </li>
                        <hr />
                        <li className={styles.ListItem}>
                        <Link href="/Profile/profileDetails" passHref><p>اطلاعات حساب <i className="fas fa-info"></i></p></Link>
                        </li>
                        <hr />
                        <li className={styles.ListItem}>
                        <Link href="/Wallet/" passHref><p>کیف پول <i className="fas fa-wallet"></i></p></Link>
                        </li>
                        <hr />
                        <li className={styles.ListItem}>
                            <p>مشاوره <i className="fas fa-handshake"></i></p> 
                        </li>
                        <hr />
                        <li onClick={exitHandler} className={styles.ListItem}>
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