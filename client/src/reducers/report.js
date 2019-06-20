import {
    REPORT_SENT,
    REPORTS_LOADED,
    REPORTS_LOAD_FAIL
} from '../actions/types';

const initialState = {
    reports: [],
    loaded: false
};

export default (state = initialState, action) => {
    const { type, payload} = action;

    switch (type){
        case REPORTS_LOADED:
            return {
                ...state,
                reports: payload,
                loaded: true
            };
        case REPORTS_LOAD_FAIL:
        case REPORT_SENT:
        default:
            return state;
    };
};