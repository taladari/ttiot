import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReports } from '../../actions/report';
import '../ReportBox/ReportBox';
import PropTypes from 'prop-types';
import './Reports.css';
import ReportBox from '../ReportBox/ReportBox';
import Loading from '../Loading/Loading';

const Reports = ({ reports, loaded, getReports }) => {

        useEffect(() => {
        
    }, [reports, loaded]);


    if (!loaded) {
        getReports();
        return <Loading />;
    }


    // const [arr, setArr] = useState([
    //     {
    //         platform: 'Wikipedia',
    //         desc: 'lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum',
    //         link: 'http://www.wikipedia.com'
    //     },
    //     {
    //         platform: 'Wikipedia',
    //         desc: 'lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum',
    //         link: 'http://www.wikipedia.com'
    //     },
    //     {
    //         platform: 'Wikipedia',
    //         desc: 'lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum',
    //         link: 'http://www.wikipedia.com'
    //     },
    //     {
    //         platform: 'Wikipedia',
    //         desc: 'lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum',
    //         link: 'http://www.wikipedia.com'
    //     },
    //     {
    //         platform: 'Wikipedia',
    //         desc: 'lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum',
    //         link: 'http://www.wikipedia.com'
    //     },
    //     {
    //         platform: 'Wikipedia',
    //         desc: 'lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum',
    //         link: 'http://www.wikipedia.com'
    //     },
    //     {
    //         platform: 'Wikipedia',
    //         desc: 'lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum',
    //         link: 'http://www.wikipedia.com'
    //     },
    //     {
    //         platform: 'Wikipedia',
    //         desc: 'lorem ipsum lorem lorem lorem lorem ipsum lorem ipsum',
    //         link: 'http://www.wikipedia.com'
    //     }
    // ]);

    // const [localReports, setLocalReports] = useState(reports);

    const onCompleted = index => {
        // change status of report in db

        // const arr2 = arr.filter((item, i) => i !== index)
        // setArr(arr2);
        console.log('on completed parent');
        console.log(reports);
        reports.splice(index, 1);

    };
    

    return <div id="reports">{reports.map((report, i) => <ReportBox key={i} platform={report.platform} link={report.link} desc={report.desc} onCompleted={ () => onCompleted(i) } />)}</div>

}


Reports.propTypes = {
    reports: PropTypes.array,
    getReports: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    reports: state.report.reports,
    loaded: state.report.loaded
});

export default connect(mapStateToProps, { getReports })(Reports);