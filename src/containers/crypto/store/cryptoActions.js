import * as constants from "./cryptoConstants";
import uuid from "react-uuid";

export const getCryptoData = () => (dispatch, getState) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  fetch("https://api.coincap.io/v2/exchanges", requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.error) {
        throw new Error(json.error);
      }

      json.data.forEach((element) => {
        element.id = uuid();
      });
      dispatch({
        type: constants.CRYPTO_DATA_SUCCESS,
        payload: json.data,
      });
    })
    .catch((error) => {
      // error handling
    });
};

export const setSelecedCryproData = (data) => (dispatch, getState) => {
  dispatch({
    type: constants.CRYPTO_SELECTED_DATA_SUCCESS,
    payload: data,
  });
};
