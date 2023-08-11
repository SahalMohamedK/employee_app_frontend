import type { FC } from 'react';
import './styles/global.css';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Dashboard from './layouts/Dashboard/Dashboard';

const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/employees/*' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
