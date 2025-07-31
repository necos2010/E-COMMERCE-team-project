import { useState} from 'react';
import { type ChangeEvent, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LogIn.module.css';
import SideImg from '../../assets/Side-img.png';

interface FormData {
  email: string;
  password: string;
}

const LogIn: FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // No validation or backend call
    alert('Logged in! Redirecting to home page...');
    navigate('/');  // Redirect immediately
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={SideImg} alt="Side" />
      </div>

      <div className={styles.right}>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>

        <form className={styles.formContainer} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Email</label>
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
            <button type="submit" className={styles.loginBtn}>Log In</button>
            <button type="button" className={styles.forgetPasswordBtn}>Forget Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
