import { useParams } from 'react-router-dom';
import TitleBar from '../../components/TitleBar/TitleBar';

function EmployeeForm() {
  const { id } = useParams();

  return (
    <div>
      <TitleBar title={id ? 'Edit Employee' : 'Create Employee'}></TitleBar>
      <div className='card'>{id}</div>
    </div>
  );
}

export default EmployeeForm;
