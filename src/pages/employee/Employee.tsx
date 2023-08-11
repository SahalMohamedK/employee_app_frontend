import { useParams } from 'react-router-dom';
import TitleBar from '../../components/TitleBar/TitleBar';
import './Employee.css';
import IconButton from '../../components/IconButton/IconButton';
import { employeesDataset } from '../../utls/data';
import DetailsViewer from '../../components/DetailsViewer/DetailsViewer';
import Status from '../../components/Status/Status';
import { useEffect, useState } from 'react';

export const employeeDetailsHeaders = [
  { label: 'Employee Name', key: 'name' },
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
  { label: 'Address', key: 'address' },
  { label: 'Employee ID', key: 'id' }
];

function Employee() {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState<object>();

  useEffect(() => {
    if (id) setEmployeeData(employeesDataset.find((data) => data.id === id));
  }, [id]);

  return (
    <div className='employee-details'>
      <TitleBar title='Employee Details'>
        <IconButton text='Edit' icon='/assets/icons/edit.svg' />
      </TitleBar>
      <DetailsViewer headers={employeeDetailsHeaders} data={employeeData} />
    </div>
  );
}

export default Employee;
