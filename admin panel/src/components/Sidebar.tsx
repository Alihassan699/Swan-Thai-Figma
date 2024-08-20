import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  return (
    <div className="d-flex flex-column h-full  " style={{ width: '250px', height: '125vh' }}>
      <div className="d-flex align-items-center justify-content-center p-3">
        <img src='/public/Logo.png' className='object-fit-contain' alt='logo.png' style={{ width: '150px', height: '150px' }} />
      </div>


      <ul className="nav nav-pills bg-light h-full flex-column mb-auto p-3 border border-[#C5C5C5]">
        <li className="nav-item">
            <Link to="/dashboard" className="nav-link d-flex align-items-center text-dark" style={{ width: '100%' }}>
                <img className="me-2" style={{ width: '24px', height: '24px' }} src="/public/home.png" alt="overview.png" />
                Dashboard
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/payrolls" className="nav-link d-flex align-items-center text-dark" style={{ width: '100%' }}>
                <img className="me-2" style={{ width: '24px', height: '24px' }} src="/public/file.png" alt="create-report.png" />
                Payrolls
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/profile" className="nav-link d-flex align-items-center text-dark" style={{ width: '100%' }}>
                <img className="me-2" style={{ width: '24px', height: '24px' }} src="/public/user.png" alt="generate-report.png" />
                Profile
            </Link>
        </li>
    </ul>
</div>
  );
}

export default Sidebar;
