import './Acc.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Acc = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='container'>
      <div className='accWrapper'>
        <p>Manage My Account</p>
        <div
          className='accBtns'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive && !isHovered ? 'active' : ''
            }
          >
            My Profile
          </NavLink>

          <NavLink
            to="/user/addres-book"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Address Book
          </NavLink>

          <NavLink
            to="/user/my-payment-options"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            My Payment Options
          </NavLink>
        </div>

        <p>My Orders</p>
        <div className='accBtns'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink
            to="/user/my-returns"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            My Returns
          </NavLink>
          <NavLink
            to="/user/my-cancellation"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            My Cancellations
          </NavLink>
        </div>

        <p>My WishList</p>
      </div>
    </div>
  )
}

export default Acc;
