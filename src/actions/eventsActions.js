import * as actionTypes from '../constants/actionTypes';
import * as eventsApi from '../api/eventsApi';

export const getEvents = (placeId) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_EVENTS_STARTED
    });

    eventsApi
        .getEvents(placeId,"")
        .then(
            response => {
              if (response.status !== 200) {
                  if (response.status === 403) {
                    dispatch({
                        type: actionTypes.ACTION_GET_EVENTS_FAILED
                    });
                  } else {
                    console.log("error", response);
                    dispatch({
                        type: actionTypes.ACTION_GET_EVENTS_FAILED,
                        errorMessage: "Что-то пошло не так :("
                    });
                  }
              } else {
                response
                    .text()
                    .then(
                        value => {
                            const responseObject = JSON.parse(value);
                            dispatch({
                                type: actionTypes.ACTION_GET_EVENTS_SUCCEEDED,
                                events: responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_EVENTS_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};