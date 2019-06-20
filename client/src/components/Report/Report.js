import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { report } from '../../actions/report';
import './Report.css';

const Report = ({ report }) => {

    const [formData, setFormData] = useState({
        platform: 'wikipedia',
        link: '',
        desc: ''
    });

    const { platform, link, desc } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        //action to dispatch report
        report(platform, link, desc);
        // setFormData({ platform: '', link: '', desc: '' });
    }

    return (
        <div id="report-box">
            <h2 id="report-title">report</h2>
            <form id="report-form" onSubmit={e => onSubmit(e)}>
                <div className="form-inputs">
                    <label for="platform">Platform:</label>
                    <select name="platform" id="platform" className="form-input" onChange={e => onChange(e)}>
                        <option value="wikipedia">Wikipedia</option>
                    </select>
                </div>
                <div className="form-inputs">
                    <label for="link">Link:</label>
                    <input type="text" id="link" name="link" className="form-input" onChange={e => onChange(e)} />
                </div>
                <div className="form-inputs">
                    <label id="desc-label" for="desc">Description:</label>
                    <textarea rows="3" id="desc" name="desc" className="form-input" onChange={e => onChange(e)}/>
                </div>
                <input type="submit" value="Report" id="report-submit" />  
            </form>
        </div>
    );
}

Report.propTypes = {
    report: PropTypes.func.isRequired
};


export default connect(null, { report })(Report);