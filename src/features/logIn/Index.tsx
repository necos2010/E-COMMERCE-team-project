import { useState, } from 'react';
import { type ChangeEvent, type FC } from 'react';
import styles from './LogIn.module.css';
import SideImg from '../../assets/Side-img.png';
import axios from 'axios';
import axiosInstance from '../../api/axiosInstance';

interface FormData {
  contact: string;  // For login, this should be email or username as per your backend
  password: string;
}

const LogIn: FC = () => {
  const [form, setForm] = useState<FormData>({
    contact: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Your backend login serializer might expect 'username' or 'email', check backend!
      const payload = {
        username: form.contact, // or use email if backend expects it
        password: form.password
      };

      const response = await axiosInstance.post('login/', payload);
      console.log('Login successful:', response.data);
      alert('Login successful!');

      // You can store token here if returned
      // localStorage.setItem('token', response.data.access);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
        alert(error.response?.data?.error || 'Login failed. Check credentials.');
      } else {
        console.error('Unexpected error:', error);
        alert('Something went wrong.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={SideImg} alt="Shopping" />
      </div>

      <div className={styles.right}>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>

        <form className={styles.formContainer} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Email or Username</label>
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
