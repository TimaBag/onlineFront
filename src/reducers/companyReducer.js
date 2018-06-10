import {combineReducers} from 'redux';
import * as actions from '../constants/actionTypes';


const companyList = (state = [], action) => {
    switch (action.type) {
        case actions.ACTION_GET_COMPANY_SUCCEEDED:
            return action.data;
        default:
            return state;
    }
};

const isLoading = (state = false, action) => {
    switch (action.type) {
        case actions.ACTION_GET_COMPANY_STARTED:
            return true;
        case actions.ACTION_GET_COMPANY_SUCCEEDED:
        case actions.ACTION_GET_COMPANY_FAILED:
            return false;
        default:
            return state;
    }
};


const errorMessage = (state = "", action) => {
    switch (action.type) {
        case actions.ACTION_GET_COMPANY_FAILED:
            return action.errorMessage;
        case actions.ACTION_GET_COMPANY_STARTED:
            return "";
        default:
            return state;
    }
};

const companyReducer = combineReducers({
    companyList : companyList,
    isLoading : isLoading,
    errorMessage : errorMessage,
});

export default companyReducer;