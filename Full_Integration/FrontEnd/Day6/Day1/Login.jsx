import { useState } from 'react';
import '/src/assets/css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate(); 

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
      alert('Logged In Successfully');
      navigate('/home'); 
    }
  };

  const handleForgetPassword = () => {
    console.log('Redirect to forget password page or show forget password modal');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="login-container">
      <h1 className='head'>NexaGlow Gatherings</h1>
      <form onSubmit={handleSubmit}>
        <h1 className='h1'>SIGN IN</h1>
        <div>
          <label htmlFor='email'>Email </label>
          <input
            className='input-field'
            type="email"
            id="email"
            required
            placeholder='Enter Your Valid email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="password-container">
          <label htmlFor="password">Password </label>
          <div className="password-input">
            <input
              className='input-field'
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              required
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={togglePasswordVisibility} className="visibility-toggle">
              {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="footer-text">
          <p className='register'>New User?<Link to="/sign"> Sign Up</Link></p>
          <div className="forgot-password" onClick={handleForgetPassword}>
            <a href="#" onClick={(e) => e.preventDefault()}>Forgot password?</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
