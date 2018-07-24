import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => (
    <div className="topnav">
        <NavLink to="/" activeClassName="is-active" exact={true} className="active">Home</NavLink>
        <NavLink to="/about" activeClassName="is-active">About Us</NavLink>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>

    </div>
  )