import styles from './Acc.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Acc = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.accWrapper}>
        <p>Manage My Account</p>
        <div
          className={styles.accBtns}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive && !isHovered ? styles.active : ''
            }
          >
            My Profile
          </NavLink>

          <NavLink
            to="/user/addres-book"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Address Book
          </NavLink>

          <NavLink
            to="/user/my-payment-options"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            My Payment Options
          </NavLink>
        </div>

        <p>My Orders</p>
        <div
          className={styles.accBtns}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink
            to="/user/my-returns"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            My Returns
          </NavLink>
          <NavLink
            to="/user/my-cancellation"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            My Cancellations
          </NavLink>
        </div>

        <p>My WishList</p>
      </div>
    </div>
  );
};

export default Acc;
