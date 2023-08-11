import Status from '../components/Status/Status';

const employeeColumnMap = {
  name: { label: 'Employee Name' },
  id: { label: 'Employee ID' },
  joiningData: { label: 'Joining Date' },
  role: { label: 'Role' },
  isActive: { label: 'Status', adapter: (value: boolean) => <Status isActive={value} /> },
  experience: {
    label: 'Experience',
    adapter: (value: number) => (
      <>
        {value} Year{value > 1 ? 's' : ''}
      </>
    )
  },
  action: {
    label: 'Action',
    adapter: () => (
      <div className='row'>
        <img src='' alt='' />
      </div>
    )
  }
};

export default employeeColumnMap;
