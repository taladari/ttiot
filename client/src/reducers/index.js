import { combineReducers } from 'redux';
import auth from './auth';
import report from './report';
import { LOGOUT } from '../actions/types';


const appReducer = combineReducers({
    auth,
    report
});


const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;