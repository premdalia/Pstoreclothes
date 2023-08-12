import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './signin.css'

function SignIn() {
    const navigate=useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fluffy-bear-veil.cyclic.app/login', credentials);

      if (response && response.data) {
        // Successful sign-in
        const { userObj, auth } = response.data;
        localStorage.setItem('user', JSON.stringify(userObj));
        localStorage.setItem('token', auth);
        navigate('/');
      } else {
        console.error('Invalid response from server');
      }

    } catch (error) {
      console.error('Error signing in:', error.response.data.msg);
    }
  };

  return (
    <form className='ob'>
      <h3>Sign In</h3>
      <div>
        <label>Username</label><br />
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleOnChange}
          placeholder='Enter Your ID'
        />
      </div>
      <div>
        <label>Password</label><br />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleOnChange}
          placeholder='Enter Your Password'
        />
      </div>
      <div>
        <button type="submit" onClick={handleSignIn}>
          Login
        </button>
      </div>
      <div>
      Don't have an account?<Link to="/signup">Click to Register</Link>

      </div> 
    </form>
  );
}

export default SignIn;