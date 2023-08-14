import { FC } from 'react';
import { classNames } from '../../utls/funcs';

interface InputFieldProps {
  id: string;
  label: string;
  type: 'text' | 'password' | 'datetime';
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const InputField: FC<InputFieldProps> = ({ id, label, type, value, onChange, error }) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div className={classNames('input-field-wrapper', error ? 'error' : '')}>
        <div className='input-field'>
          <label htmlFor={id}>{label}</label>
          <input
            onChange={handleChange}
            onBlur={handleChange}
            placeholder=''
            {...{ id, type, value }}
          />
        </div>
        <p>{error}</p>
      </div>
    </>
  );
};

export default InputField;
