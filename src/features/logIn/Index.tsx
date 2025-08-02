
import { useState} from 'react';
import { type ChangeEvent, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useState, } from 'react';
import { type ChangeEvent, type FC } from 'react';
 (Added a API folder and worked with backend)
import styles from './LogIn.module.css';
import SideImg from '../../assets/Side-img.png';
import axios from 'axios';
import axiosInstance from '../../api/axiosInstance';

interface FormData {

  email: string;

  contact: string;  // For login, this should be email or username as per your backend
931cfcd (Added a API folder and worked with backend)
  password: string;
}

const LogIn: FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormData>({
<<<<<<< HEAD
    email: '',
=======
    contact: '',
>>>>>>> 931cfcd (Added a API folder and worked with backend)
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

<<<<<<< HEAD
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // No validation or backend call
    alert('Logged in! Redirecting to home page...');
    navigate('/');  // Redirect immediately
=======
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
>>>>>>> 931cfcd (Added a API folder and worked with backend)
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
<<<<<<< HEAD
            <label>Email</label>
=======
            <label>Email or Username</label>
>>>>>>> 931cfcd (Added a API folder and worked with backend)
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
