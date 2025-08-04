import EditProfile from "./commponents/EditProfile";
import Acc from "./commponents/Acc";
import styles from "./User.module.css";
import BreadCrumb from "../../hooks/User"
import "./index.css";

const Index = () => {
  return (
    <div className="container">
      <div className={styles.display}>
        <BreadCrumb/>
        <p>Welcome! <span className={styles.userName}>Md Rimel</span></p>
      </div>
      <div className="wrapper">
        <Acc />
       <EditProfile/>
      </div>
    </div>
  );
};

export default Index;
