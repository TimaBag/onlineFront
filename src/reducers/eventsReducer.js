import {combineReducers} from 'redux';
import * as actions from '../constants/actionTypes';


const eventsList = (state = [], action) => {
    switch (action.type) {
        case actions.ACTION_GET_EVENTS_SUCCEEDED:
            let newArray = action.events;
            newArray.sort(function (a, b) {
                return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
            });
            return newArray;
        default:
            return state;
    }
};

const isLoading = (state = false, action) => {
    switch (action.type) {
        case actions.ACTION_GET_EVENTS_STARTED:
            return true;
        case actions.ACTION_GET_EVENTS_SUCCEEDED:
        case actions.ACTION_GET_EVENTS_FAILED:
            return false;
        default:
            return state;
    }
};


const errorMessage = (state = "", action) => {
    switch (action.type) {
        case actions.ACTION_GET_EVENTS_FAILED:
            return action.errorMessage;
        case actions.ACTION_GET_EVENTS_STARTED:
            return "";
        default:
            return state;
    }
};

const eventsReducer = combineReducers({
    eventsList : eventsList,
    isLoading : isLoading,
    errorMessage : errorMessage,
});

export default eventsReducer;