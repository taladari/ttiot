import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { getReports } from '../../actions/report';
import PropTypes from 'prop-types';
import './Login.css';

const Login = ({ login, isAuthenticated, getReports }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        // send action to login and get token
        login(email, password);
    };

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/reports" />;
    }
    
    return (
        <form id="login-form" onSubmit={e => onSubmit(e)}>
            <input type="email" value={email} onChange={e => onChange(e)} className="login-input" id="email" name="email" placeholder="EMAIL" required /> 
            <input type="password" value={password} onChange={e => onChange(e)} className="login-input" id="password" name="password" placeholder="PASSWORD" required />
            <input type="submit" value="Login" id="login-submit" />            
        </form>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    getReports: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, getReports })(Login);