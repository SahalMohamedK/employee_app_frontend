import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { LinkType } from './types';
import { removeToken } from '../../utils/token';
import { classNames } from '../../utils/funcs';

const links: LinkType[] = [
  { label: 'Employee List', icon: '/assets/icons/employees.svg', path: '/employees' }
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  function logout() {
    removeToken();
    navigate('/login');
  }

  return (
    <>
      <div className='sidebar'>
        <ul>
          {links.map((link, i) => (
            <Link
              className={classNames('item', location.pathname === link.path ? 'active' : '')}
              key={i}
              to={link.path}
            >
              <li>
                <div className='circle'>
                  {link.icon && <img src={link.icon} alt={link.label + ' icon'} />}
                </div>
                <span>{link.label}</span>
              </li>
            </Link>
          ))}
          <div className='item'>
            <li onClick={logout}>
              <div className='circle'>
                <img src='/assets/icons/logout.svg' alt={'Logout icon'} />
              </div>
              <span>Logout</span>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
