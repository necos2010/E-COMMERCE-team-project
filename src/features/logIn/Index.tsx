import { useState, ChangeEvent, FC } from 'react';
import styles from './LogIn.module.css';
import SideImg from '../../assets/Side-img.png';

interface FormData {
  name: string;
  contact: string;
  password: string;
}s

const LogIn: FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    contact: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={SideImg} alt="Shopping" />
      </div>

      <div className={styles.right}>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>

        <div className={styles.formContainer}>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Email or Phone Number</label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Password</label>
          </div>
<div className={styles.buttonContainer}>
  <button className={styles.loginBtn}>Log In</button>
  <button className={styles.forgetPasswordBtn}>Forget Password?</button>
</div>

        </div>
      </div>
    </div>
  );
};

export default LogIn;
