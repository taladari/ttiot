import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ isAuthenticated }) => {
    return <header id="header">
    <h1 id="logo"><Link to="/" id="logo-link"><span id="logo-left">tt</span><span id="logo-right">iot</span></Link></h1>
    <img id="header-img" src="/flagpeople.jpg" alt="Israel Flag Patriot" />
    <Link to="/login" id="login-btn" className={ isAuthenticated ? 'hide' : '' }>Login</Link>
    <Link to="/logout" id="login-btn" className={ isAuthenticated ? '' : 'hide' }>Logout</Link>
    </header>;
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Header);