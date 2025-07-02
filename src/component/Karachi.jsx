import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logow.png'; // Replace with your actual logo path
import '../App.css';

const UrduNavbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" dir="rtl">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="ایکسپریس" style={{ height: '40px' }} />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#urduNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="urduNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">

            {/* Editors */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">
                ایڈیٹر
              </a>
              <ul className="dropdown-menu text-end">
                <li><a className="dropdown-item" href="/">آپشن 1</a></li>
                <li><a className="dropdown-item" href="/">آپشن 2</a></li>
              </ul>
            </li>

            {/* Columns */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">
                مضامین
              </a>
              <ul className="dropdown-menu text-end">
                <li><a className="dropdown-item" href="/">کالم 1</a></li>
                <li><a className="dropdown-item" href="/">کالم 2</a></li>
              </ul>
            </li>

            {/* Aaj Ka Akhbar */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">
                آج کے کالم
              </a>
              <ul className="dropdown-menu text-end">
                <li><a className="dropdown-item" href="/">کالم A</a></li>
              </ul>
            </li>

            {/* Sunday Magazine */}
            <li className="nav-item">
              <a className="nav-link" href="/">سنڈے میگزین</a>
            </li>

            {/* Thumbs */}
            <li className="nav-item">
              <a className="nav-link" href="/">Thumbs</a>
            </li>

            {/* ePaper */}
            <li className="nav-item">
              <a className="nav-link" href="/">ای پیپر</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>






</div>
  );
};

export default UrduNavbar;
