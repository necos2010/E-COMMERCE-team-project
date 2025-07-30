<<<<<<< HEAD
import { useState, ChangeEvent, FC } from 'react';
import styles from './Signup.module.css';
import SideImg from '../../assets/Side-img.png';
import { NavLink } from 'react-router';

interface FormData {
  name: string;
  contact: string;
  password: string;
=======
import NotFound from "../NotFound/components/NotFound";
function Index() {
  return (
    <div className="container">
      <NotFound/>
    </div>
  );
>>>>>>> 8c11ef8 (NotFound, About va Contact pagelar qoshildi)
}

const Signup: FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    contact: '',
    password: ''
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
        <h2>Create an account</h2>
        <p>Enter your details below</p>

        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Name</label>
          </div>

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

          <button className={styles.primaryButton}>Create Account</button>

          <button className={styles.googleButton}>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google icon"
            />
            Sign up with Google
          </button>

          <p className={styles.loginText}>
            Already have account?
            <NavLink to="/login">
            <a href="/login">Log in</a>
            </NavLink> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
