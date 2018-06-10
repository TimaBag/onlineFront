import * as actionTypes from '../constants/actionTypes';
import * as placesApi from '../api/placesApi';

export const getPlaces = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_PLACES_STARTED
    });

    placesApi
        .getPlaces("")
        .then(
            response => {
              if (response.status !== 200) {
                  if (response.status === 403) {
                    dispatch({
                        type: actionTypes.ACTION_GET_PLACES_FAILED
                    });
                  } else {
                    console.log("error", response);
                    dispatch({
                        type: actionTypes.ACTION_GET_PLACES_FAILED,
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
                                type: actionTypes.ACTION_GET_PLACES_SUCCEEDED,
                                places: responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_PLACES_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};