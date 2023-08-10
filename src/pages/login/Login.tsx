import React, { useState } from 'react';
import './Login.css';
import LoginInputField from '../../components/LoginInputField/LoginInputField';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className='full-screen'>
        <div className='row'>
          <div className='column center login-image-column'>
            <div className='circle login-image-circle'>
              <img src='/assets/img/banner.png' alt='Login banner image' />
            </div>
          </div>
          <div className='column center'>
            <form className='login-form' action='/'>
              <img src='/assets/img/kv-logo.png' alt='KeyValue Logo' />
              <LoginInputField
                id='usernameInputField'
                label='Username'
                type='text'
                value={username}
                onChange={setUsername}
              />
              <LoginInputField
                id='passwordInputField'
                label='Password'
                type='password'
                value={password}
                onChange={setPassword}
              />
              <button className='btn btn-primary'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
