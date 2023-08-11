import { useNavigate } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';
import Table from '../../components/Table/Table';
import TitleBar from '../../components/TitleBar/TitleBar';
import Employee from '../../types/EmployeeType';
import { employeesDataset } from '../../utls/data';
import Status from '../../components/Status/Status';

export const employeeTableHeaders = [
  { label: 'Employee Name', key: 'name' },
  { label: 'Employee ID', key: 'id' },
  { label: 'Joining Date', key: 'joiningData' },
  { label: 'Role', key: 'role' },

  { label: 'Status', key: 'isActive', adapter: (value: boolean) => <Status isActive={value} /> },
  {
    label: 'Experience',
    key: 'experience',
    adapter: (value: number) => (
      <>
        {value} Year{value > 1 ? 's' : ''}
      </>
    )
  },
  {
    label: 'Action',
    key: 'action',
    adapter: () => (
      <div className='row'>
        <img src='' alt='' />
      </div>
    )
  }
];

const Employees = () => {
  const navigate = useNavigate();

  const handleCreate = () => {};

  const handleTableClick = (data: Employee) => {
    navigate(`/employees/${data.id}`);
  };

  return (
    <>
      <div className='flex-column'>
        <TitleBar title='Emploees'>
          <IconButton icon='/assets/icons/plus.png' text='Create employee' onClick={handleCreate} />
        </TitleBar>
        <div className='grow-scroll'>
          <Table
            headers={employeeTableHeaders}
            dataset={employeesDataset}
            onClick={handleTableClick}
          />
        </div>
      </div>
    </>
  );
};

export default Employees;
