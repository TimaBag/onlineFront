import {combineReducers} from 'redux';
import * as actions from '../constants/actionTypes';


const placesList = (state = [], action) => {
    switch (action.type) {
        case actions.ACTION_GET_PLACES_SUCCEEDED:
            let newArray = action.places;
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
        case actions.ACTION_GET_PLACES_STARTED:
            return true;
        case actions.ACTION_GET_PLACES_SUCCEEDED:
        case actions.ACTION_GET_PLACES_FAILED:
            return false;
        default:
            return state;
    }
};


const errorMessage = (state = "", action) => {
    switch (action.type) {
        case actions.ACTION_GET_PLACES_FAILED:
            return action.errorMessage;
        case actions.ACTION_GET_PLACES_STARTED:
            return "";
        default:
            return state;
    }
};

const placesReducer = combineReducers({
    placesList : placesList,
    isLoading : isLoading,
    errorMessage : errorMessage,
});

export default placesReducer;