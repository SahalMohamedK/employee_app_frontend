import { FC } from 'react';
import { classNames } from '../../utils/funcs';
import './InputField.css';

interface InputFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'password' | 'date' | 'number';
  value: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const InputField: FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder
}) => {
  const handleChange = (e: any) => {
    let value = e.target.value;

    if (type === 'number') value = Number(value);

    onChange(value);
  };

  return (
    <>
      <div className={classNames('input-field-wrapper', error ? 'error' : '')}>
        <div className='input-field'>
          <label htmlFor={id}>{label}</label>
          <input onChange={handleChange} placeholder={placeholder} {...{ id, type, value }} />
        </div>
        <p>{error}</p>
      </div>
    </>
  );
};

export default InputField;
