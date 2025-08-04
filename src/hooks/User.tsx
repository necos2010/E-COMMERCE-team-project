import { Link, useLocation } from "react-router-dom";
import styles from '../page/User/User.module.css';
function User() {
  const location = useLocation();
  const currentLink: string[] = [];

  const labelMap: Record<string, string> = {
    user: "My Account",
    home: "Home",
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.BreadCrub}>
          <Link to="/">Home</Link>
          <span className={styles.HomeLink}>/</span>
          {location.pathname
            .split("/")
            .filter((crumb) => crumb !== "")
            .map((crumb) => {
              currentLink.push(crumb);
              const path = "/" + currentLink.join("/");
              const label = labelMap[crumb] || crumb;
              return (
                <span className={styles.links} key={path}>
                  <Link to={path}>{label}</Link>
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default User;
