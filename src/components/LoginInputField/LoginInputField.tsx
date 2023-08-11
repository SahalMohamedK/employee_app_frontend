import { FC } from 'react';
import './LoginInputField.css';
import { classNames } from '../../utls/funcs';

interface LoginInputFieldProps {
  id: string;
  label: string;
  type: 'text' | 'password';
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const LoginInputField: FC<LoginInputFieldProps> = ({ id, label, type, value, onChange, error }) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div className={classNames('login-input-field-wrapper', error ? 'error' : '')}>
        <div className='login-input-field'>
          <input
            onChange={handleChange}
            onBlur={handleChange}
            placeholder=''
            {...{ id, type, value }}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <p>{error}</p>
      </div>
    </>
  );
};

export default LoginInputField;
