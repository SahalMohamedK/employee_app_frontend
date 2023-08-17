import AddressType from './AddressType';

interface EmployeeType {
  id: string;
  name: string;
  isActive: boolean;
  joiningDate: string;
  department: string;
  role: string;
  experience: string;
  address: AddressType;
}

export default EmployeeType;
