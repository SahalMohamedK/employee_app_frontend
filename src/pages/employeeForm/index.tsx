import { useNavigate, useParams } from 'react-router-dom';
import TitleBar from '../../components/TitleBar/TitleBar';
import InputField from '../../components/InputField/InputField';
import { useEffect, useState } from 'react';
import SelectFied from '../../components/SelectField/SelectField';
import AddressField from '../../components/AddressField/AddressField';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, editEmployee } from '../../actions/employee.actions';
import { addressFields, departmentOptions, roleOptions, statusOptions } from './consts';
import AddressType from '../../types/AddressType';

function EmployeeForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employeesDataset = useSelector((state: any) => state.employees);

  const [name, setName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [experience, setExperience] = useState('');
  const [department, setDepartement] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [address, setAddress] = useState<AddressType>();

  const handleAddressChange = (field: string, value: string) => {
    const curAddress = {};

    curAddress[field] = value;
    setAddress((prevAddress) => ({ ...prevAddress, ...curAddress }));
  };

  const handleSubmit = () => {
    const employee = {
      name,
      id: id ? id : '123',
      joiningDate,
      department,
      role,
      isActive: status === 'active',
      experience,
      address
    };

    if (id) dispatch(editEmployee(employee));
    else dispatch(addEmployee(employee));

    navigate('/employees');
  };

  useEffect(() => {
    if (id) {
      const employeeData = employeesDataset.find((employee) => employee.id == id);

      if (employeeData) {
        setName(employeeData.name);
        setJoiningDate(employeeData.joiningDate);
        setExperience(employeeData.experience);
        setDepartement(employeeData.department);
        setRole(employeeData.role);
        setStatus(employeeData.isActive ? 'active' : 'inactive');
        setAddress(employeeData.address);
      }
    }
  }, [id]);

  return (
    <div>
      <TitleBar title={id ? 'Edit Employee' : 'Create Employee'}></TitleBar>
      <div className='card'>
        <div className='flex-row'>
          <div className='column'>
            <InputField
              id='employeeNameField'
              label='Name'
              placeholder='Employee name'
              value={name}
              onChange={setName}
            />
            <SelectFied
              id='departmentField'
              label='Department'
              placeholder='Choose a department'
              options={departmentOptions}
              value={department}
              onChange={setDepartement}
            />
            <AddressField
              label='Address'
              fields={addressFields}
              values={address}
              onChange={handleAddressChange}
            />
            <div className='btn-group'>
              <button className='btn btn-primary' onClick={handleSubmit}>
                {id ? 'Edit' : 'Create'}
              </button>
              <button className='btn btn-secondary'>Reset</button>
            </div>
          </div>
          <div className='column'>
            <InputField
              id='joiningDateField'
              type='date'
              label='Joining Date'
              value={joiningDate}
              onChange={setJoiningDate}
            />
            <SelectFied
              id='roleField'
              label='Role'
              placeholder='Choose a role'
              options={roleOptions}
              value={role}
              onChange={setRole}
            />
          </div>
          <div className='column'>
            <InputField
              type='number'
              id='experienceField'
              label='Experience (Yrs)'
              value={experience}
              onChange={setExperience}
            />
            <SelectFied
              id='statusField'
              label='Status'
              placeholder='Choose a status'
              options={statusOptions}
              value={status}
              onChange={setStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
