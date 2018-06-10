import { combineReducers } from 'redux';
import placesReducer from './placesReducer';
import eventsReducer from './eventsReducer';
import companyReducer from './companyReducer';

const mainReducer = combineReducers({
	place : placesReducer,
	event : eventsReducer,
	company : companyReducer
});

export default mainReducer;
