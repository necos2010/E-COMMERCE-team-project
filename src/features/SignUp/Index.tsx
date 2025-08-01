<<<<<<< HEAD
import { useState, type ChangeEvent, type FC } from 'react';
=======
import { useState, } from 'react';
import { type ChangeEvent, type FC } from 'react';
>>>>>>> 931cfcd (Added a API folder and worked with backend)
import styles from './Signup.module.css';
import SideImg from '../../assets/Side-img.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../api/axiosInstance';

interface FormData {
<<<<<<< HEAD
  username: string;  // Changed from 'name' to 'username' to match backend
  email: string;     // Changed from 'contact' to 'email' to match backend
=======
  name: string;    // This will map to 'username' on backend
  contact: string; // This will map to 'email' on backend
>>>>>>> 931cfcd (Added a API folder and worked with backend)
  password: string;
}

const Signup: FC = () => {
  const [form, setForm] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
<<<<<<< HEAD
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form data being sent:', form);

    try {
      const response = await axiosInstance.post('register/', form);
      console.log('Registration successful:', response.data);
      alert('Registration successful! Now you can log in.');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
        alert(error.response?.data?.error || 'Registration failed.');
      } else {
        console.error('Unexpected error:', error);
        alert('Something went wrong.');
      }
    }
=======
>>>>>>> 931cfcd (Added a API folder and worked with backend)
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log('Form data being sent:', form); // Check what data you're sending

  try {
    const response = await axiosInstance.post('register/', form);
    console.log('Registration successful:', response.data);
    alert('Registration successful! Now you can log in.');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
      alert(error.response?.data?.error || 'Registration failed.');
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
        <h2>Create an account</h2>
        <p>Enter your details below</p>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Username</label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
<<<<<<< HEAD
              name="email"
              value={form.email}
=======
              name="contact"
              value={form.contact}
>>>>>>> 931cfcd (Added a API folder and worked with backend)
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

          <button type="submit" className={styles.primaryButton}>
            Create Account
          </button>

          <button type="button" className={styles.googleButton}>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google icon"
            />
            Sign up with Google
          </button>

          <p className={styles.loginText}>
            Already have an account? <NavLink to="/login">Log in</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
