import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReportBtn.css';

const ReportBtn = () => {
    return (
        <Link to="/report" id="report-btn">
            <i className="fas fa-flag" id="flag-icon"></i>
            <h3 id="report-btn-text">report</h3>
        </Link>
    );
}

export default ReportBtn;