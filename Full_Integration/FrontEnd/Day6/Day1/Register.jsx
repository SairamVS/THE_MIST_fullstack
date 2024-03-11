import { useState } from 'react';
import '/src/assets/css/Register.css';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [number, setPhone] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCPasswordVisibility = () => {
    setShowCPassword(!showCPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); 
    if (!email.includes('@')) {
      setError('Invalid email. Please enter a valid email address.');
      return;
    }

    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== cpassword) {
      setError('Passwords do not match.');
      return;
    }

    
    console.log({ name, email, password, number });

    setName('');
    setEmail('');
    setPassword('');
    setCpassword('');
    setPhone('');
  };


  return (
    <div className="register-container">
      <h1 className='head2'>NexaGlow Gatherings</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1 className='h2'>SIGN UP</h1>
        <div>
          <label htmlFor='name'>Name </label>
          <input className='name'
            type="text"
            id="name"
            placeholder='Enter Your Name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email </label>
          <input className='email'
            type="email"
            id="email"
            placeholder='Enter Your Valid email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-input-container">
        <input
          className='password'
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder='Enter Your Password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={togglePasswordVisibility} className="visibility-btn">
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </div>
      <div className="password-input-container">
        <input
          className='cPass'
          type={showCPassword ? "text" : "password"}
          id="cPassword"
          placeholder='Please Confirm Password'
          value={cpassword}
          required
          onChange={(e) => setCpassword(e.target.value)}
        />
        <button type="button" onClick={toggleCPasswordVisibility} className="visibility-btn">
          {showCPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </div>
        <div>
          <label htmlFor='number'>Phone Number </label>
          <input className='phone'
            type="text"
            id="phone"
            placeholder='Enter Your Phone Number'
            value={number}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>Already have an account?<Link to='/login'> Login</Link></p>
      </form>
    </div>
  );
}

export default RegisterPage;
