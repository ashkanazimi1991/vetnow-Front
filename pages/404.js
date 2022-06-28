import ErrorPage from "../components/ErrorPage/ErrorPage";
import Layout from "../components/Adviser/Layout";
import Drawer from "../components/Drawer/Drawer";
import {Button} from '../components/Button/ButtonElemnts'; 
export default function Custom404() {
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

      
    </div>
  );
}
