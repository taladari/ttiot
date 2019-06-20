import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ReportBtn from '../ReportBtn/ReportBtn';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ isAuthenticated }) => {

    if (isAuthenticated) return <Redirect to="/reports" />

    return (
        <div id="main">
            <ReportBtn id="report-btn"/>
        </div>
    );
}


Home.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);