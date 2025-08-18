import styles from "../NotFound.module.css";
import User from '../../../hooks/User'

const NotFound = () => {
  return (
    <div className={styles.container}>
     <User/>

      <h1 className={styles.title}>404 Not Found</h1>

      <p className={styles.message}>
        Your visited page not found. You may go home page.
      </p>

      <a href="/"><button className={styles.button}>Back to home page</button></a>
    </div>
  );
};

export default NotFound;
