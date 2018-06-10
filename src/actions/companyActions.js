import * as actionTypes from '../constants/actionTypes';
import * as companyApi from '../api/companyApi';

export const getCompany = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_COMPANY_STARTED
    });

    companyApi
        .getCompany("")
        .then(
            response => {
              if (response.status !== 200) {
                  if (response.status === 403) {
                    dispatch({
                        type: actionTypes.ACTION_GET_COMPANY_FAILED
                    });
                  } else {
                    console.log("error", response);
                    dispatch({
                        type: actionTypes.ACTION_GET_COMPANY_FAILED,
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
                                type: actionTypes.ACTION_GET_COMPANY_SUCCEEDED,
                                company: responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_COMPANY_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};