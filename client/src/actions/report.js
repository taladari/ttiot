import axios from 'axios';
import {
    REPORT_SENT,
    REPORTS_LOADED,
    REPORTS_LOAD_FAIL
} from './types';

export const report = (platform, link, desc) => async dispatch => {
    console.log(platform, desc, link);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ platform, link, desc });
    console.log(body);

    try {
        const res = await axios.post('/api/reports', body, config);
        dispatch({
            type: REPORT_SENT
        });
    } catch (error) {

    }
};

export const reportHandled = (link) => async dispatch => {
    try {
        const res = axios.put('/api/reports')
    }
    catch(err){

    }
};

export const getReports = () => async dispatch => {
    try {
        const res = await axios.get('/api/reports');

        dispatch({
            type: REPORTS_LOADED,
            payload: res.data
        });
    }
    catch(err) {
        dispatch({
            type: REPORTS_LOAD_FAIL
        });
    }
};
