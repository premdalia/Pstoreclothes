import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import './signin.css'
function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fluffy-bear-veil.cyclic.app/register', user);
      console.log('Successfully registered!', response.data);

      // Save userObj and auth token to localStorage
      localStorage.setItem('user', JSON.stringify(response.data.userObj));
      localStorage.setItem('token', response.data.auth);

      alert('Account created successfully!');
      navigate('/');
    } catch (error) {
        alert(""+error.response.data.msg)
      console.error('Error registering:', error.response.data.msg);
    }
  };

  return (
    <form className='ob'>
      <h3>Register here</h3>
      <div>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="New Username"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Create Password"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </div>
      <p>
        Already registered? <Link to="/signin">Sign In</Link>
      </p>
    </form>
  );
}

export default Signup;