import React, { useState, FC, useEffect } from 'react';
import './Login.css';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const validate = () => {
    let result = true;

    setUsernameError('');
    setPasswordError('');

    if (username === '') {
      setUsernameError('Username is required');

      result = false;
    }
    if (password === '') {
      setPasswordError('Password is required');

      result = false;
    }

    return result;
  };

  function login() {
    if (validate()) navigate('/employees');
  }

  useEffect(() => {
    validate();
  }, [username, password]);

  return (
    <>
      <div className='full-screen'>
        <div className='flex-row'>
          <div className='column center login-image-column'>
            <div className='circle'>
              <img src='/assets/img/banner.png' alt='Login banner image' />
            </div>
          </div>
          <div className='column center'>
            <div className='login-form'>
              <img src='/assets/img/kv-logo.png' alt='KeyValue Logo' />
              <LoginInputField
                id='usernameInputField'
                label='Username'
                type='text'
                value={username}
                onChange={setUsername}
                error={usernameError}
              />
              <LoginInputField
                id='passwordInputField'
                label='Password'
                type='password'
                value={password}
                onChange={setPassword}
                error={passwordError}
              />
              <button className='btn btn-primary' onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
