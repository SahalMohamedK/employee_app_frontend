import { FC } from 'react';
import { classNames } from '../../utils/funcs';
import './SelectField.css';

export interface OptionType {
  value: string;
  text: string;
}

interface SelectFiedProps {
  id: string;
  label: string;
  options: OptionType[];
  value: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const SelectFied: FC<SelectFiedProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  options,
  placeholder
}) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div className={classNames('select-field-wrapper', error ? 'error' : '')}>
        <div className='select-field'>
          <label htmlFor={id}>{label}</label>
          <select onChange={handleChange} {...{ id, value }}>
            {placeholder && (
              <option value='' disabled selected>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <p>{error}</p>
      </div>
    </>
  );
};

export default SelectFied;
