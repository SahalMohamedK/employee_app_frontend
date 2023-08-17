import { FC } from 'react';
import { classNames } from '../../utils/funcs';
import './AddressField.css';

export interface AddressFieldType {
  key: string;
  placeholder: string;
}

interface AddressFieldProps {
  label: string;
  fields: AddressFieldType[];
  values: object;
  onChange?: (field: string, value: string) => void;
  error?: string;
}

const AddressField: FC<AddressFieldProps> = ({ label, fields, values, onChange, error }) => {
  const handleChange = (field: string, value: string) => {
    onChange(field, value);
  };

  return (
    <div className={classNames('address-fields-wrapper', error ? 'error' : '')}>
      <div className='address-fields'>
        <label>{label}</label>
        {fields.map((field) => (
          <input
            key={field.key}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            value={values[field.key] || ''}
          />
        ))}
      </div>
    </div>
  );
};

export default AddressField;
