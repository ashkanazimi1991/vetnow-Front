import ErrorPage from "../components/ErrorPage/ErrorPage";
import Layout from "../components/Adviser/Layout";
import Drawer from "../components/Drawer/Drawer";
export default function Custom500() {
  return (
    <div>
      <Drawer />
      <ErrorPage
        style={{
          width: "100vw",
          height: "100vh",
          margin:"auto",
          backgroundColor: "lightblue",
        }}
      />
      <h3 style={{textAlign: 'center' , color: '#E84041' , marginTop: '50px'}}>لطفا ابتدا وارد حساب کاربری خود شوید</h3>
    </div>
  );
}
