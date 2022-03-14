import Menubar from "./menubar/Menubar";
import Footer from "../Adviser/Footer/footer";
import Drawer from "../Drawer/Drawer";
const Layout = ({ children }) => (
  <div className="root">
    <Drawer />
    <header>
      <Menubar />
    </header>

    {children}
    <footer>
      <Footer />
    </footer>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        header {
          display: flex;
          justify-content: space-around;
          width: 100%;
          font-size: 1.2rem;
        }

        footer {
          min-width: 320px;
          width: 100%;
          
          
        }
      `}
    </style>
    <style global jsx>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "iransans";
      }
    `}</style>
  </div>
);
export default Layout;
