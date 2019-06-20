import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReportBox.css';

const ReportBox = ({ platform, link, desc, onCompleted }) => {

    const OnCompleted = e => {
        console.log('on completed child');
        onCompleted();
    };

    return <div id="report-card">
        <i className="fas fa-check-circle" id="check" onClick={OnCompleted}></i>
        <h3 id="platform">{ platform }</h3>
        <p id="desc">{ desc }</p>
        {/* <h3 id="platform">Wikipedia</h3>
        <p id="desc">Some fake information problem in wikipedia need to be fixed</p> */}
        <a id="target" href={link} target="_blank">Fix</a>
    </div>;

}

export default ReportBox;