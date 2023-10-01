import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top bg-secondary border-right">
          <h1 className="sidebar-brand brand-logo display-1 h1 text-success">NMRS <span className='text-danger'>SUPPORT</span></h1>
          <h1 className="sidebar-brand brand-logo-mini h1 text-success">N<span className='text-danger'>S</span></h1>
        </div>
        <ul className="nav fixed">
          {/* dashboard */}
          <li className={this.isPathActive('/dashboard') ? 'nav-item menu-items my-1 active' : 'nav-item menu-items my-1'}>
            <Link className="nav-link" to="/dashboard">
              <span className="bg-secondary px-2 rounded mr-2"><i className="text-dark fa-solid fa-home"></i></span>
              <span className="menu-title text-light"><Trans>Dashboard</Trans></span>
            </Link>
          </li>

          {/* Reports */}
          <li className={this.isPathActive('/reports') ? 'nav-item menu-items my-1 active' : 'nav-item menu-items my-1'}>
            <Link className="nav-link" to="/reports">
              <span className="bg-secondary px-2 rounded mr-2"><i class="text-dark fa-solid fa-flag"></i></span>
              <span className="menu-title text-light"><Trans>Reports</Trans></span>
            </Link>
          </li>

          {/* uploadtracker */}
          <li className={this.isPathActive('/uploadtracker') ? 'nav-item menu-items my-1 active' : 'nav-item menu-items my-1'}>
            <Link className="nav-link" to="/uploadtracker">
              <span className="bg-secondary px-2 rounded mr-2"><i class="text-dark fa-solid fa-eye"></i></span>
              <span className="menu-title text-light"><Trans>upload tracker</Trans></span>
            </Link>
          </li>

        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);