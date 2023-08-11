import { Link } from 'react-router-dom';
import './Sidebar.css';

const links = [{ label: 'Employee List', icon: '/assets/icons/employees.svg', path: '/employees' }];

function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <ul>
          {links.map((link, i) => (
            <Link key={i} to={link.path}>
              <li>
                <div className='circle'>
                  <img src={link.icon} alt={link.label + ' icon'} />
                </div>
                <span>{link.label}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
