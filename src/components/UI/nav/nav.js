import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className={`nav nav-pills nav-fill ${styles.nav}`}>
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/form">
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/code">
                Code
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/components">
                Components
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
