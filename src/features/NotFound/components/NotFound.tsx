import styles from "../NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <a href="/" className={styles.link}>Home</a> / <span>404 Error</span>
      </div>

      <h1 className={styles.title}>404 Not Found</h1>

      <p className={styles.message}>
        Your visited page not found. You may go home page.
      </p>

      <button className={styles.button}>Back to home page</button>
    </div>
  );
};

export default NotFound;
