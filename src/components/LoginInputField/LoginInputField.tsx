import { FC } from 'react';
import './LoginInputField.css';

interface LoginInputFieldProps {
  id: string;
  label: string;
  type: 'text' | 'password';
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

const LoginInputField: FC<LoginInputFieldProps> = ({ id, label, type, value, onChange, error }) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div className='login-input-field-wrapper'>
        <div className='login-input-field'>
          <input onChange={handleChange} placeholder='' {...{ id, type, value }} />
          <label htmlFor={id}>{label}</label>
        </div>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default LoginInputField;
