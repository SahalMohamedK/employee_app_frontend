import { AddressFieldType } from '../../components/AddressField/AddressField';
import { OptionType } from '../../components/SelectField/SelectField';

export const departmentOptions: OptionType[] = [
  { text: 'HR', value: 'hr' },
  { text: 'Engineer', value: 'engineer' }
];

export const roleOptions: OptionType[] = [{ text: 'Front-end', value: 'front-end' }];

export const statusOptions: OptionType[] = [
  { text: 'Active', value: 'active' },
  { text: 'Inactive', value: 'inactive' }
];

export const addressFields: AddressFieldType[] = [
  { key: 'line1', placeholder: 'Line 1' },
  { key: 'line2', placeholder: 'Line 2' }
];
